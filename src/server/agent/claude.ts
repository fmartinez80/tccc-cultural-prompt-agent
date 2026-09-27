// Intake agent backed by the Claude API. Every step reads the knowledge base
// (country file, regional file, brand and tableware references) from a cached
// system prompt and returns schema-validated decision cards.

import Anthropic from "@anthropic-ai/sdk";
import { betaZodOutputFormat } from "@anthropic-ai/sdk/helpers/beta/zod";
import { z } from "zod";
import { contextFiles } from "../knowledge";
import { Story, Validation, type StoryFacts } from "../../shared/story";
import {
  AccentChoice,
  PlatingChoice,
  PrepChoice,
  SidesChoice,
  SurfaceChoice,
  Vessel,
  type Blueprint,
  type Decision,
  type SceneSpec,
  type StepName,
} from "../../shared/types";
import type { Selections } from "../../shared/spec";
import type { Brief, IntakeAgent } from "./types";

const MODEL = process.env.CLAUDE_MODEL || "claude-opus-5";

const INSTRUCTIONS = `You are the Food Stylist — Regional Expert behind an intake tool that plans photorealistic Coca-Cola meal imagery for The Coca-Cola Company.

The operator is building one scene step by step. At each step you return the options they choose from.

How to work:
- Ground every suggestion in the knowledge-base files provided (the country file first, then the regional file, then the brand and tableware references). Name the sections you relied on in "sources" (for example "spain.md › DISH CATALOG › Paella and arroces").
- If the knowledge base doesn't cover something, say so plainly in the rationale ("not covered in the country file; general knowledge") rather than presenting it as sourced. Never contradict a knowledge-base rule, and respect every "never stage" or avoid rule in it.
- If the dish is served essentially one way in this region, return status "resolved" with exactly one option. Otherwise return status "choose" with two or three genuinely different options, the most common first (it is shown as the suggested option A).
- Keep labels short (2-6 words). Details are one or two plain sentences. promptText is written for an image model: concrete, visual, no brand names except Coca-Cola.
- Vessels must come from the allowed vocabulary: ${Vessel.options.join(", ")}. Pick the closest one and put the exact wording in promptText.
- The Coca-Cola product is always the only drink in the scene; never suggest another beverage.`;

function decisionSchema<T extends z.ZodTypeAny>(value: T) {
  return z.object({
    status: z.enum(["resolved", "choose"]),
    options: z
      .array(
        z.object({
          rationale: z.string().describe("Why this option, and whether the knowledge base covers it"),
          sources: z.array(z.string()).describe("Knowledge-base sections relied on; empty if general knowledge"),
          value: value,
        }),
      )
      .describe("One option when resolved; two or three when choose, most common first"),
  });
}

function briefText(b: Brief, sel: Selections = {}): string {
  const lines = [
    `Country: ${b.countryLabel}${b.regionLabel ? ` — region: ${b.regionLabel}` : ""}`,
    `Operating unit: ${b.operatingUnit}`,
    `Hero dish: ${b.heroDish}`,
    `Side dish request: ${b.sideDishRequest || "(none)"}`,
    `Occasion: ${b.occasion}`,
    `Product SKU: ${b.skuId}`,
  ];
  if (sel.prep) lines.push(`Chosen preparation: ${sel.prep.label} — ${sel.prep.detail}`);
  if (sel.plating) lines.push(`Chosen plating: ${sel.plating.label} (${sel.plating.vessel}, ${sel.plating.service} service)`);
  if (sel.sides) lines.push(`Chosen sides: ${sel.sides.accompaniments.map((a) => `${a.name} (${a.role}, ${a.vessel})`).join("; ") || "none"}`);
  if (sel.scene) lines.push(`Scene: ${sel.scene.setting}, ${sel.scene.venue}, party of ${sel.scene.party}${sel.scene.time ? `, ${sel.scene.time}` : ""}`);
  return lines.join("\n");
}

export class ClaudeAgent implements IntakeAgent {
  readonly mode = "claude" as const;
  private client = new Anthropic();

  private system(brief: Brief): Anthropic.Beta.Messages.BetaTextBlockParam[] {
    const files = contextFiles(brief.country, brief.region);
    const kb = files.map((f) => `<file name="${f.file}">\n${f.text}\n</file>`).join("\n\n");
    return [
      { type: "text", text: INSTRUCTIONS },
      // The knowledge base is stable across every step of an intake, so it is cached.
      { type: "text", text: `<knowledge_base>\n${kb}\n</knowledge_base>`, cache_control: { type: "ephemeral" } },
    ];
  }

  private async call<T extends z.ZodTypeAny>(brief: Brief, userText: string, schema: T): Promise<z.infer<T>> {
    const response = await this.client.beta.messages.parse({
      model: MODEL,
      max_tokens: 16000,
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      thinking: { type: "adaptive" },
      system: this.system(brief),
      messages: [{ role: "user", content: userText }],
      output_config: { format: betaZodOutputFormat(schema) },
    });
    if (response.stop_reason === "refusal") {
      throw new Error(`The model declined this request${response.stop_details?.category ? ` (${response.stop_details.category})` : ""}. Try rephrasing the dish or occasion.`);
    }
    if (response.stop_reason === "max_tokens") throw new Error("The model's answer was cut off; please retry.");
    if (!response.parsed_output) throw new Error("The model's answer did not match the expected format; please retry.");
    return response.parsed_output as z.infer<T>;
  }

  private async decide<T extends z.ZodTypeAny>(step: StepName, brief: Brief, sel: Selections, task: string, value: T): Promise<Decision<z.infer<T>>> {
    const out = await this.call(brief, `${briefText(brief, sel)}\n\nStep: ${step}\n${task}`, decisionSchema(value));
    const opts = (out.status === "resolved" ? out.options.slice(0, 1) : out.options.slice(0, 3)) as Array<{ rationale: string; sources: string[]; value: z.infer<T> }>;
    const ids = ["A", "B", "C"] as const;
    return {
      step,
      status: opts.length === 1 ? "resolved" : "choose",
      options: opts.map((o, i) => ({
        id: ids[i],
        suggested: i === 0,
        rationale: o.sources.length ? `${o.rationale} (Sources: ${o.sources.join("; ")})` : o.rationale,
        value: o.value,
      })),
      source: "claude",
    };
  }

  prep(brief: Brief) {
    return this.decide(
      "prep",
      brief,
      {},
      "Identify the hero dish and how it is prepared and enjoyed in this region. If it has regional variants or preparation styles, offer them.",
      PrepChoice,
    );
  }

  plating(brief: Brief, sel: Selections) {
    return this.decide(
      "plating",
      brief,
      sel,
      "Identify how this dish is most commonly served here (entree plate, wrapped in foil, basket, cutting board, and so on). Use service \"shared\" only when the dish is typically served family-style from one large vessel on the table (a whole roast, a pizza, a paella pan); the scene then shows that vessel plus one plated portion.",
      PlatingChoice,
    );
  }

  sides(brief: Brief, sel: Selections) {
    return this.decide(
      "sides",
      brief,
      sel,
      `Identify the side dishes and accompaniments this dish is commonly served with here: grain, vegetable, side dish, bread, condiment, and the container each is served in. Each option is a complete set. Keep it to what a real table would show: at most two side dishes, at most two or three condiments, bread only if customary (tableware reference §4). ${sel.plating?.service === "shared" ? "The meal is family-style, so side dishes are shared (service shared) in serving bowls; condiments stay individual. " : ""}If the operator requested a side dish, include it in option A when it is culturally plausible; if it isn't, still include it in one option and say why it's unusual. pairsWith is "MAIN" unless a condiment belongs to a specific side.`,
      SidesChoice,
    );
  }

  surface(brief: Brief, sel: Selections) {
    return this.decide(
      "surface",
      brief,
      sel,
      "This is a meal on the go. The food always sits on a surface, never in a hand. Suggest the surfaces that fit this dish and country (park or picnic table, bench, food-truck counter, street ledge).",
      SurfaceChoice,
    );
  }

  accent(brief: Brief, sel: Selections) {
    return this.decide(
      "accent",
      brief,
      sel,
      "The composition needs one more small table item to make the count odd. Suggest small accents that genuinely belong with this meal here (a condiment, garnish, or lime dish in a ramekin, small bowl or sauce boat). Never a drink, never something the knowledge base says to avoid.",
      AccentChoice,
    );
  }

  story(brief: Brief, spec: SceneSpec, bp: Blueprint, facts: StoryFacts, notes?: string[]) {
    const task = `Write the scene story for the image team.

Scene spec:
${JSON.stringify({ scene: spec.scene, sku: spec.sku, entree: spec.entree, accompaniments: spec.accompaniments, accent: spec.accent, napkinSet: spec.napkinSet }, null, 2)}

Fixed facts (use these, do not contradict them):
- Surface: ${facts.surfaceText}
- Lighting: ${facts.lightingSentence}
- Light on the product: ${facts.skuLightSentence}
- Camera: ${facts.lookSentence} ${facts.angleSentence}
- Framing: ${facts.framingSentence}
- Product serving: ${facts.servingSentence}
- Layout (from the chosen proxy): ${facts.labels.map((l) => `${l.label} = ${l.what}, ${l.where}`).join("; ")}

Write:
- sceneSummary: a few paragraphs of prose as a food stylist would brief it: what's on the table, where, the setting, the mood, and the cultural framing.
- culturalNotes: the do's and don'ts from the knowledge base that matter for this scene.
- segments: entreeDish, traditionalSideDishes (one per side or condiment), productDetail (the exact Coca-Cola product and its size, with a real-world scale anchor), environmentalOverview (the upper half of the frame: soft background and setting, no text, at most two people's faces, blurred), platingAndTableware, productServingDetails (use the product serving fact), brandVisId (camera, lens, angle and framing from the fixed facts).
- labelSegments: one entry for each of these labels, in this order: ${facts.labels.map((l) => l.label).join(", ")}. Each text describes what that labeled shape should become in the photo, concretely and visually.${notes?.length ? `\n\nA previous version failed validation. Fix these problems:\n- ${notes.join("\n- ")}` : ""}`;
    return this.call(brief, `${briefText(brief)}\n\n${task}`, Story);
  }

  validate(brief: Brief, spec: SceneSpec, story: Story) {
    const task = `Check this scene story for cultural authenticity and consistency before any image is generated. Check it against the knowledge base (country file, regional file, brand and tableware references) and against the brief. Fail it only for real problems: a wrong dish or variant for this region, a broken cultural or brand rule, a side or vessel that doesn't belong, an inconsistency between segments, or a claim the knowledge base marks as unconfirmed presented as fact. Each note names the problem and what to change.

Story:
${JSON.stringify(story, null, 2)}

Scene spec:
${JSON.stringify({ scene: spec.scene, sku: spec.sku, entree: spec.entree, accompaniments: spec.accompaniments, accent: spec.accent }, null, 2)}`;
    return this.call(brief, `${briefText(brief)}\n\n${task}`, Validation);
  }
}
