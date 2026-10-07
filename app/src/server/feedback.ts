// Image feedback storage, lessons and knowledge-base edits, kept as JSON
// documents in Postgres (src/server/store.ts).
//
// Layout (collection / key):
//   feedback / <dishKey>/<createdAt>-<id>.json   — one FeedbackRecord
//   learning / <dishKey>.json                    — one LearningDoc, written through documentStore's CAS
// The rated image itself stays where it was generated (its storage path is the record's imageKey).

import { randomUUID } from 'node:crypto';

import { documentStore, mediaPath, mediaUrl } from './store.ts';
import {
  dishKey,
  type DishSummary,
  type FeedbackInput,
  type FeedbackRecord,
  type FeedbackView,
  type KbEdit,
  type KbEditStatus,
  type Lesson,
  type LessonStatus,
  type LearningDoc,
  type PromptLesson,
} from '../shared/feedback.ts';
import { setKbOverlay, type KbOverlayEdit } from './knowledge.ts';

export interface Actor {
  email: string;
  name: string;
}

const feedbackStore = documentStore<FeedbackRecord>({ prefix: 'feedback/' });
const learningStore = documentStore<LearningDoc>({ prefix: 'learning/' });

function titleCase(s: string): string {
  return s
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

/** Save one rating against an image the app generated. */
export async function submitFeedback(input: FeedbackInput, by: Actor): Promise<{ id: string; dishKey: string }> {
  const key = dishKey(input.brief.country, input.brief.heroDish);
  const id = randomUUID();
  const imageKey = mediaPath(input.imageUrl);
  if (!imageKey) throw new Error('Only images generated in this app can be rated.');
  const createdAt = Date.now();
  const record: FeedbackRecord = { ...input, id, createdAt, by, dishKey: key, imageKey };
  await feedbackStore.put(`${key}/${createdAt}-${id}.json`, record);
  invalidateDishCaches(key);
  return { id, dishKey: key };
}

/** Every record saved for one dish, in no particular order. */
export async function dishRecords(key: string): Promise<FeedbackRecord[]> {
  return feedbackStore.values(`${key}/`);
}

/** The dish's learning document, or null when nothing has been learned yet. */
export async function getLearningDoc(key: string): Promise<LearningDoc | null> {
  const stored = await learningStore.get(`${key}.json`);
  return stored?.value ?? null;
}

/** Country/hero-dish identity for a dish with no learning document yet: the newest feedback record, falling back to the key itself. */
async function dishIdentity(key: string): Promise<{ country: string; countryLabel: string; heroDish: string }> {
  const records = await dishRecords(key);
  if (records.length) {
    const newest = records.reduce((a, b) => (b.createdAt > a.createdAt ? b : a));
    return { country: newest.brief.country, countryLabel: newest.brief.countryLabel, heroDish: newest.brief.heroDish };
  }
  const [countryPart, dishPart] = key.split('--');
  return { country: countryPart || 'unknown', countryLabel: titleCase(countryPart || 'unknown'), heroDish: titleCase(dishPart || 'dish') };
}

// ---------------------------------------------------------------------------
// Dish list — a short-lived cache, since every call otherwise re-reads every
// feedback record and learning document. Invalidated on every write in this
// process; other replicas just serve a slightly stale list for up to 30s.
// ---------------------------------------------------------------------------

let dishListCache: { at: number; value: DishSummary[] } | null = null;
const DISH_LIST_TTL_MS = 30_000;

const lessonsCache = new Map<string, { at: number; value: PromptLesson[] }>();
const LESSONS_TTL_MS = 60_000;

function invalidateDishCaches(key: string): void {
  dishListCache = null;
  lessonsCache.delete(key);
}

interface DishAcc {
  dishKey: string;
  country: string;
  countryLabel: string;
  heroDish: string;
  total: number;
  usable: number;
  fixes: number;
  unusable: number;
  lastAt: number;
}

async function buildDishSummaries(): Promise<DishSummary[]> {
  const [records, learningDocs] = await Promise.all([feedbackStore.values(), learningStore.values()]);
  const accByDish = new Map<string, DishAcc>();
  for (const r of records) {
    let acc = accByDish.get(r.dishKey);
    if (!acc) {
      acc = {
        dishKey: r.dishKey,
        country: r.brief.country,
        countryLabel: r.brief.countryLabel,
        heroDish: r.brief.heroDish,
        total: 0,
        usable: 0,
        fixes: 0,
        unusable: 0,
        lastAt: 0,
      };
      accByDish.set(r.dishKey, acc);
    }
    acc.total++;
    if (r.verdict === 'usable') acc.usable++;
    else if (r.verdict === 'fixes') acc.fixes++;
    else acc.unusable++;
    if (r.createdAt > acc.lastAt) acc.lastAt = r.createdAt;
  }

  const learningByDish = new Map<string, LearningDoc>();
  for (const doc of learningDocs) {
    learningByDish.set(doc.dishKey, doc);
    if (!accByDish.has(doc.dishKey)) {
      accByDish.set(doc.dishKey, {
        dishKey: doc.dishKey,
        country: doc.country,
        countryLabel: doc.countryLabel,
        heroDish: doc.heroDish,
        total: 0,
        usable: 0,
        fixes: 0,
        unusable: 0,
        lastAt: doc.updatedAt,
      });
    }
  }

  const out: DishSummary[] = [];
  for (const acc of accByDish.values()) {
    const learning = learningByDish.get(acc.dishKey);
    out.push({
      dishKey: acc.dishKey,
      country: acc.country,
      countryLabel: acc.countryLabel,
      heroDish: acc.heroDish,
      total: acc.total,
      usable: acc.usable,
      fixes: acc.fixes,
      unusable: acc.unusable,
      lastAt: acc.lastAt,
      lessonsConfirmed: learning?.lessons.filter((l) => l.status === 'confirmed').length ?? 0,
      lessonsProposed: learning?.lessons.filter((l) => l.status === 'proposed').length ?? 0,
      editsProposed: learning?.kbEdits.filter((e) => e.status === 'proposed').length ?? 0,
      editsApproved: learning?.kbEdits.filter((e) => e.status === 'approved').length ?? 0,
    });
  }
  out.sort((a, b) => b.lastAt - a.lastAt);
  return out;
}

/** Every dish with feedback or learning, newest feedback first. */
export async function listDishes(): Promise<DishSummary[]> {
  if (dishListCache && Date.now() - dishListCache.at < DISH_LIST_TTL_MS) return dishListCache.value;
  const value = await buildDishSummaries();
  dishListCache = { at: Date.now(), value };
  return value;
}

/** One dish's feedback (newest first) and its learning document. */
export async function dishFeedback(key: string): Promise<{ records: FeedbackView[]; learning: LearningDoc | null }> {
  const records = await dishRecords(key);
  records.sort((a, b) => b.createdAt - a.createdAt);
  const views: FeedbackView[] = records.map((r) => ({ ...r, image: mediaUrl(r.imageKey) }));
  const learning = await getLearningDoc(key);
  return { records: views, learning };
}

/** Raw records for export; every dish when `key` is omitted. */
export async function exportFeedback(key?: string): Promise<FeedbackRecord[]> {
  return key ? dishRecords(key) : feedbackStore.values();
}

/** Confirmed lessons for this country + hero dish, as the agents receive them. Never throws (returns [] on failure). */
export async function confirmedLessons(country: string, heroDish: string): Promise<PromptLesson[]> {
  try {
    const key = dishKey(country, heroDish);
    const cached = lessonsCache.get(key);
    if (cached && Date.now() - cached.at < LESSONS_TTL_MS) return cached.value;
    const doc = await getLearningDoc(key);
    const value: PromptLesson[] = doc
      ? doc.lessons.filter((l) => l.status === 'confirmed').map((l) => ({ element: l.element, text: l.text }))
      : [];
    lessonsCache.set(key, { at: Date.now(), value });
    return value;
  } catch (err) {
    console.warn(`[feedback] confirmedLessons(${country}, ${heroDish}) failed: ${err instanceof Error ? err.message : String(err)}`);
    return [];
  }
}

export async function addLesson(key: string, lesson: { element: string; text: string }, by: Actor): Promise<LearningDoc> {
  const identity = await dishIdentity(key);
  const now = Date.now();
  const doc = await learningStore.update(`${key}.json`, (current) => {
    const base: LearningDoc = current ?? {
      dishKey: key,
      country: identity.country,
      countryLabel: identity.countryLabel,
      heroDish: identity.heroDish,
      summary: '',
      lessons: [],
      kbEdits: [],
      updatedAt: now,
    };
    const newLesson: Lesson = {
      id: randomUUID(),
      element: lesson.element,
      text: lesson.text,
      diagnosis: 'prompt-lost',
      status: 'proposed',
      sourceFeedback: [],
      createdAt: now,
      updatedAt: now,
      decidedBy: by.email,
    };
    return { ...base, lessons: [...base.lessons, newLesson], updatedAt: now };
  });
  invalidateDishCaches(key);
  return doc;
}

export async function updateLesson(
  key: string,
  lessonId: string,
  patch: { status?: LessonStatus | undefined; text?: string | undefined; element?: string | undefined },
  by: Actor
): Promise<LearningDoc> {
  const now = Date.now();
  const doc = await learningStore.update(`${key}.json`, (current) => {
    if (!current) throw new Error(`There is no learning document for ${key} yet.`);
    const idx = current.lessons.findIndex((l) => l.id === lessonId);
    if (idx < 0) throw new Error(`Lesson ${lessonId} was not found.`);
    const lessons = [...current.lessons];
    const prev = lessons[idx]!;
    lessons[idx] = {
      ...prev,
      ...(patch.text !== undefined ? { text: patch.text } : {}),
      ...(patch.element !== undefined ? { element: patch.element } : {}),
      ...(patch.status !== undefined ? { status: patch.status } : {}),
      updatedAt: now,
      decidedBy: by.email,
    };
    return { ...current, lessons, updatedAt: now };
  });
  invalidateDishCaches(key);
  return doc;
}

export async function updateKbEdit(
  key: string,
  editId: string,
  patch: { status?: KbEditStatus | undefined; text?: string | undefined; heading?: string | undefined },
  by: Actor
): Promise<LearningDoc> {
  const now = Date.now();
  const doc = await learningStore.update(`${key}.json`, (current) => {
    if (!current) throw new Error(`There are no knowledge-base edits for ${key} yet.`);
    const idx = current.kbEdits.findIndex((e) => e.id === editId);
    if (idx < 0) throw new Error(`Knowledge-base edit ${editId} was not found.`);
    const kbEdits = [...current.kbEdits];
    const prev = kbEdits[idx]!;
    kbEdits[idx] = {
      ...prev,
      ...(patch.text !== undefined ? { text: patch.text } : {}),
      ...(patch.heading !== undefined ? { heading: patch.heading } : {}),
      ...(patch.status !== undefined ? { status: patch.status } : {}),
      updatedAt: now,
      decidedBy: by.email,
    };
    return { ...current, kbEdits, updatedAt: now };
  });
  invalidateDishCaches(key);
  // A status/text/heading change can add, change or remove an approved edit —
  // refresh the overlay the agents read from straight away.
  await refreshKbOverlay();
  return doc;
}

/**
 * Merges a learn agent's drafted lessons and knowledge-base edits into the
 * dish's learning document. Idempotent per task id; drops near-duplicates of
 * already-known lesson/edit text and any `sourceFeedback` id the dish no
 * longer has a record for.
 */
export async function mergeLearnDrafts(
  key: string,
  taskId: string,
  drafts: {
    summary: string;
    lessons: Array<{ element: string; text: string; diagnosis: Lesson['diagnosis']; sourceFeedback: string[] }>;
    kbEdits: Array<{ file: string; heading: string; text: string; rationale: string; sourceFeedback: string[] }>;
  }
): Promise<LearningDoc> {
  const identity = await dishIdentity(key);
  const validIds = new Set((await dishRecords(key)).map((r) => r.id));
  const now = Date.now();
  const normalize = (s: string) =>
    s
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .trim();

  const doc = await learningStore.update(`${key}.json`, (current) => {
    if (current?.lastTaskId === taskId) return current;
    const base: LearningDoc = current ?? {
      dishKey: key,
      country: identity.country,
      countryLabel: identity.countryLabel,
      heroDish: identity.heroDish,
      summary: '',
      lessons: [],
      kbEdits: [],
      updatedAt: now,
    };

    const existingLessonTexts = new Set(base.lessons.map((l) => normalize(l.text)));
    const newLessons: Lesson[] = [];
    for (const d of drafts.lessons) {
      const text = d.text?.trim();
      if (!text) continue;
      const norm = normalize(text);
      if (existingLessonTexts.has(norm)) continue;
      existingLessonTexts.add(norm);
      newLessons.push({
        id: randomUUID(),
        element: d.element,
        text,
        diagnosis: d.diagnosis,
        status: 'proposed',
        sourceFeedback: d.sourceFeedback.filter((id) => validIds.has(id)),
        createdAt: now,
        updatedAt: now,
      });
    }

    const existingEditTexts = new Set(base.kbEdits.map((e) => normalize(e.text)));
    const newEdits: KbEdit[] = [];
    for (const d of drafts.kbEdits) {
      const text = d.text?.trim();
      if (!text) continue;
      const norm = normalize(text);
      if (existingEditTexts.has(norm)) continue;
      existingEditTexts.add(norm);
      newEdits.push({
        id: randomUUID(),
        file: d.file,
        heading: d.heading,
        text,
        rationale: d.rationale,
        status: 'proposed',
        sourceFeedback: d.sourceFeedback.filter((id) => validIds.has(id)),
        createdAt: now,
        updatedAt: now,
      });
    }

    return {
      ...base,
      summary: drafts.summary || base.summary,
      lessons: [...base.lessons, ...newLessons],
      kbEdits: [...base.kbEdits, ...newEdits],
      lastTaskId: taskId,
      updatedAt: now,
    };
  });
  invalidateDishCaches(key);
  return doc;
}

/** Every approved knowledge-base edit as one Markdown document to merge into the source repo. */
export async function approvedEditsMarkdown(): Promise<string> {
  const docs = await learningStore.values();
  const edits: Array<{ doc: LearningDoc; edit: KbEdit }> = [];
  for (const doc of docs) {
    for (const edit of doc.kbEdits) {
      if (edit.status === 'approved') edits.push({ doc, edit });
    }
  }
  if (!edits.length) {
    return '# Approved knowledge-base edits\n\nNo edits have been approved yet.\n';
  }
  const byFile = new Map<string, Map<string, Array<{ doc: LearningDoc; edit: KbEdit }>>>();
  for (const item of edits) {
    let byHeading = byFile.get(item.edit.file);
    if (!byHeading) {
      byHeading = new Map();
      byFile.set(item.edit.file, byHeading);
    }
    let list = byHeading.get(item.edit.heading);
    if (!list) {
      list = [];
      byHeading.set(item.edit.heading, list);
    }
    list.push(item);
  }
  const lines: string[] = [
    '# Approved knowledge-base edits',
    '',
    'Generated from operator-approved learnings. Merge each block into the named heading of the source knowledge-base repo, then mark it applied.',
    '',
  ];
  for (const [file, byHeading] of [...byFile].sort((a, b) => a[0].localeCompare(b[0]))) {
    lines.push(`## ${file}`, '');
    for (const [heading, items] of [...byHeading].sort((a, b) => a[0].localeCompare(b[0]))) {
      lines.push(`### ${heading}`, '');
      for (const { doc, edit } of items) {
        lines.push(edit.text.trim(), '');
        lines.push(`> Rationale: ${edit.rationale}`);
        lines.push(`> Approved by ${edit.decidedBy ?? 'unknown'} on ${new Date(edit.updatedAt).toISOString()}`);
        lines.push(`> Dish: ${doc.countryLabel} — ${doc.heroDish} · source feedback: ${edit.sourceFeedback.join(', ') || '(none recorded)'}`);
        lines.push('');
      }
    }
  }
  return lines.join('\n');
}

/** Rebuilds the knowledge-base overlay (every approved edit, across every dish) that agents' prompts read. Never throws. */
export async function refreshKbOverlay(): Promise<void> {
  try {
    const docs = await learningStore.values();
    const edits: KbOverlayEdit[] = [];
    for (const doc of docs) {
      for (const edit of doc.kbEdits) {
        if (edit.status === 'approved') edits.push({ file: edit.file, heading: edit.heading, text: edit.text });
      }
    }
    setKbOverlay(edits);
  } catch (err) {
    console.warn(`[feedback] refreshKbOverlay failed: ${err instanceof Error ? err.message : String(err)}`);
  }
}
