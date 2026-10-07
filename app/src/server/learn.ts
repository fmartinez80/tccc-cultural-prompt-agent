// The learn agent: reads one dish's feedback next to the knowledge base and
// drafts lessons and knowledge-base edits for a person to confirm.

import { z } from 'zod';
import type { ClaudeApiTaskOptions } from '@runway/bay/runway';
import { presignGet } from '@runway/bay/storage';

import { dishRecords, getLearningDoc, mergeLearnDrafts } from './feedback.ts';
import { keywords, knowledgeBlock } from './knowledge.ts';
import { LearnAnswer, TAG_LABELS, type FeedbackRecord, type LearningDoc } from '../shared/feedback.ts';

/** The reference build's agent runs on the same reasoning-tier model as the story and image check. */
const MODEL = 'claude-opus-5';

const PROMPT_CAP = 48_000;

const INSTRUCTIONS = `You are the learning agent behind a food-and-table image generation pipeline for The Coca-Cola Company. An operator rates generated scene images (usable / usable with fixes / unusable), tags what's wrong, and sometimes runs an automatic check. Your job is to read a dish's accumulated feedback next to its knowledge-base excerpt and work out what keeps going wrong and why.

For each recurring failure, diagnose it as exactly one of:
- kb-missing: the knowledge base doesn't cover this at all.
- kb-wrong: the knowledge base covers it, but says something incorrect.
- prompt-lost: the knowledge base has it right, but the prompt-building steps dropped it.
- model-ignored: the prompt had it, but the image model ignored it.

Write lessons: short, actionable corrections per element (MAIN, SIDE_1, SKU, SCENE, etc. — use the element names the feedback already uses). One or two plain sentences an agent can follow when writing a later prompt: concrete and visual, saying what to do and what to avoid. Don't restate a lesson already listed below as existing; only add lessons for failures that aren't covered yet. Every lesson names the feedback ids (sourceFeedback) that motivated it.

Propose a knowledge-base edit ONLY when the diagnosis is kb-missing or kb-wrong — never for prompt-lost or model-ignored (those are prompting fixes, not knowledge-base ones). Each edit targets an exact "file" (the file name shown in the knowledge excerpt, e.g. "argentina.md") and an exact "heading" copied verbatim from that excerpt — the heading of the section the edit's text gets appended to. "text" is the Markdown to append (a sentence or short paragraph, in the voice of the surrounding file); "rationale" says why, in one sentence; sourceFeedback lists the feedback ids. If no section in the excerpt fits, still name the closest heading and say so in the rationale.

"summary" is a few plain sentences: what keeps going wrong for this dish overall, in a food stylist's words.

Don't invent problems: an element with no complaints across the feedback needs no lesson. If nothing recurs, return empty lessons and kbEdits with a summary saying so.`;

function answerFormat(): string {
  const schema = JSON.stringify(z.toJSONSchema(LearnAnswer));
  return `Answer with a single JSON object and nothing else — no prose before or after it, no code fence. It must match this JSON Schema:\n${schema}`;
}

function severityRank(r: FeedbackRecord): number {
  return r.verdict === 'unusable' ? 0 : r.verdict === 'fixes' ? 1 : 2;
}

function formatChoices(r: FeedbackRecord): string {
  const parts = [r.choices.prep, r.choices.plating, r.choices.sides, r.choices.scene].filter(Boolean);
  return parts.join(' · ') || '(none recorded)';
}

function formatChecks(r: FeedbackRecord): string {
  if (!r.check) return '(no automatic check recorded)';
  if (!r.check.issues.length) return '(automatic check passed)';
  return r.check.issues.map((i) => `[${i.severity}] ${i.element}: expected ${i.expected}; saw ${i.seen}; fix: ${i.fix}`).join(' | ');
}

function formatRecord(r: FeedbackRecord, maxPromptChars: number): string {
  const tags = r.tags.map((t) => TAG_LABELS[t] ?? t).join(', ') || '(none)';
  const prompt = r.prompt.length > maxPromptChars ? `${r.prompt.slice(0, maxPromptChars)} …(truncated)` : r.prompt;
  return [
    `- id: ${r.id}`,
    `  verdict: ${r.verdict}`,
    `  elements: ${r.elements.join(', ') || '(none)'}`,
    `  tags: ${tags}`,
    `  note: ${r.note.trim() || '(none)'}`,
    `  choices: ${formatChoices(r)}`,
    `  automatic check: ${formatChecks(r)}`,
    `  prompt used: ${prompt}`,
  ].join('\n');
}

/** Builds the feedback list text within `budget` characters, dropping the least severe/oldest records first. */
function buildFeedbackList(records: FeedbackRecord[], budget: number): string {
  const perRecordCap = Math.max(300, Math.floor(budget / Math.max(1, Math.min(records.length, 24))));
  const lines: string[] = [];
  let used = 0;
  for (const r of records.slice(0, 40)) {
    const entry = formatRecord(r, perRecordCap);
    if (used + entry.length + 1 > budget && lines.length > 0) break;
    lines.push(entry);
    used += entry.length + 1;
  }
  return lines.join('\n');
}

/** Up to 6 presigned URLs for the worst-rated images, skipping any that can't be presigned. */
async function buildImages(records: FeedbackRecord[]): Promise<Array<{ url: string }>> {
  const images: Array<{ url: string }> = [];
  for (const r of records) {
    if (images.length >= 6) break;
    try {
      const url = await presignGet(r.imageKey, { expiresIn: 1800 });
      images.push({ url });
    } catch {
      // Presigning isn't available (or failed) for this object — skip it rather than fail the task.
    }
  }
  return images;
}

/** The claude_api options for a learn run over this dish's feedback. Throws (readable message) when there is no feedback. */
export async function buildLearnTask(dishKey: string): Promise<ClaudeApiTaskOptions> {
  const records = await dishRecords(dishKey);
  if (!records.length) {
    throw new Error('There is no feedback for this dish yet — rate a few generated images first.');
  }
  const doc = await getLearningDoc(dishKey);
  const country = doc?.country ?? records[0]!.brief.country;
  const countryLabel = doc?.countryLabel ?? records[0]!.brief.countryLabel;
  const heroDish = doc?.heroDish ?? records[0]!.brief.heroDish;

  const prioritized = [...records].sort((a, b) => severityRank(a) - severityRank(b) || b.createdAt - a.createdAt);

  const existingLessons = (doc?.lessons ?? []).filter((l) => l.status !== 'retired');
  const existingLessonsText = existingLessons.length
    ? `Existing lessons for this dish — do not propose a near-duplicate of any of these; only add lessons for failures they don't already cover:\n${existingLessons
        .slice(0, 40)
        .map((l) => `- [${l.element}] ${l.text}`)
        .join('\n')}`
    : 'No lessons exist yet for this dish.';

  const counts = { usable: 0, fixes: 0, unusable: 0 };
  for (const r of records) counts[r.verdict]++;

  const header = `Dish: ${countryLabel} — ${heroDish}\nFeedback: ${records.length} rated images — ${counts.usable} usable, ${counts.fixes} usable with fixes, ${counts.unusable} unusable.\n\n${existingLessonsText}\n\nFeedback (worst first):\n`;
  const schemaText = answerFormat();

  // Keep system_prompt + prompt comfortably under the 48k cap: the fixed
  // parts (instructions, header, schema) are known up front, and the
  // remainder is split between the feedback list and the knowledge excerpt.
  const reserve = 2_000;
  const fixedLen = INSTRUCTIONS.length + header.length + schemaText.length;
  const budget = Math.max(4_000, PROMPT_CAP - fixedLen - reserve);
  const feedbackBudget = Math.floor(budget * 0.6);
  const kbBudget = Math.min(budget - feedbackBudget, 20_000);

  const feedbackListText = buildFeedbackList(prioritized, feedbackBudget);
  const words = keywords(heroDish, ...records.slice(0, 12).map((r) => r.note));
  const kb = knowledgeBlock({ country, region: undefined, focus: 'imageCheck', words, budget: kbBudget });

  const prompt = `${header}${feedbackListText}\n\n${schemaText}`;
  const images = await buildImages(prioritized);

  return {
    name: 'tablescape-learn',
    model: MODEL,
    system_prompt: `${INSTRUCTIONS}\n\n${kb.text}`,
    prompt,
    temperature: 0.3,
    max_output_tokens: 6000,
    ...(images.length ? { images } : {}),
  };
}

/**
 * The first complete top-level JSON object in the text, tolerant of a code
 * fence or stray prose around it.
 */
function extractJson(text: string): unknown {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const candidate = (fenced?.[1] ?? text).trim();
  const start = candidate.indexOf('{');
  if (start < 0) throw new Error("The learning agent's answer wasn't readable JSON.");
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let i = start; i < candidate.length; i++) {
    const ch = candidate[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (ch === '\\') escaped = true;
      else if (ch === '"') inString = false;
      continue;
    }
    if (ch === '"') inString = true;
    else if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) {
        try {
          return JSON.parse(candidate.slice(start, i + 1));
        } catch {
          throw new Error("The learning agent's answer wasn't readable JSON.");
        }
      }
    }
  }
  throw new Error("The learning agent's answer was cut off before it finished.");
}

/**
 * Parse the agent's answer and merge its drafts into the dish's learning
 * document as proposed lessons and edits. Idempotent per task id. Throws a
 * readable message when the answer can't be used.
 */
export async function mergeLearnAnswer(dishKey: string, taskId: string, text: string): Promise<LearningDoc> {
  const raw = extractJson(text);
  const parsed = LearnAnswer.safeParse(raw);
  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    throw new Error(`The learning agent's answer didn't match the expected shape${issue ? ` (${issue.path.join('.') || 'root'}: ${issue.message})` : ''}.`);
  }
  return mergeLearnDrafts(dishKey, taskId, parsed.data);
}
