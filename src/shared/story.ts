// The story output: Scene Summary + prompt segments (the segment set defined
// in knowledge-base/00-methods/image-generation-pipeline.md Stage 3), plus
// one segment per proxy label so the image model can map each labeled shape
// in the proxy PNG to its text.

import { z } from "zod";
import { SURFACES } from "./registry";
import { angleById, angleSentence, lookById, lookSentence, selectLighting, skuLightSentence } from "./rules";
import type { Blueprint, SceneSpec } from "./types";

export const StorySegments = z.object({
  entreeDish: z.string(),
  traditionalSideDishes: z.array(z.string()).describe("One segment per side dish or condiment"),
  productDetail: z.string(),
  environmentalOverview: z.string(),
  platingAndTableware: z.string(),
  productServingDetails: z.string(),
  brandVisId: z.string().describe("Camera, lens, angle and framing"),
});
export type StorySegments = z.infer<typeof StorySegments>;

export const Story = z.object({
  sceneSummary: z.string().describe("A few paragraphs of prose, written like a food stylist's brief"),
  culturalNotes: z.array(z.string()).describe("Cultural do's and don'ts for this scene, each one line"),
  segments: StorySegments,
  labelSegments: z.array(z.object({ label: z.string(), text: z.string() })).describe("One entry per proxy label, in the given order"),
});
export type Story = z.infer<typeof Story>;

export const Validation = z.object({
  pass: z.boolean(),
  notes: z.array(z.string()).describe("Specific problems found; empty when the scene passes"),
});
export type Validation = z.infer<typeof Validation>;

/** Facts computed from the rules and the chosen layout. The story must use them verbatim. */
export interface StoryFacts {
  genreLine: string;
  lightingId: string;
  lightingSentence: string;
  skuLightSentence: string;
  lookSentence: string;
  angleSentence: string;
  framingSentence: string;
  surfaceText: string;
  servingSentence: string;
  labels: Array<{ label: string; what: string; where: string }>;
  labelInstruction: string;
}

function whereOnTable(bp: Blueprint, id: string): string {
  const p = bp.primitives.find((q) => q.id === id)!;
  const main = bp.primitives.find((q) => q.id === "MAIN")!;
  if (id === "MAIN") return "foreground, center of the frame";
  const dx = p.world.x - main.world.x;
  const dd = p.world.d - main.world.d;
  const side = Math.abs(dx) < 0.06 ? "" : dx > 0 ? "right" : "left";
  const depth = dd > 0.06 ? "behind" : dd < -0.06 ? "in front of" : "beside";
  if (depth === "beside") return `to the ${side || "side"} of the entree`;
  return `${depth} the entree${side ? `, to the ${side}` : ""}`;
}

export function storyFacts(spec: SceneSpec, bp: Blueprint): StoryFacts {
  const lighting = selectLighting(spec.scene);
  const drinks = spec.sku.glass ? "the Coca-Cola bottle and glass" : spec.sku.package === "can" ? "the Coca-Cola can" : "the Coca-Cola bottle";
  const venueWord = spec.scene.venue === "on-the-go" ? "street food" : spec.scene.venue === "restaurant" ? "restaurant food" : "home-cooked food";
  const shared = bp.primitives.some((p) => p.id === "SHARED_HERO");
  const serving = spec.sku.glass
    ? shared || spec.sku.volumeMl >= 1000
      ? `A ${spec.sku.displayName} stands on the table as the shared bottle, with a filled branded bell-shaped Coca-Cola glass at the top right of the plate.`
      : `A ${spec.sku.displayName} with a filled branded bell-shaped Coca-Cola glass beside it, at the top right of the plate.`
    : `A ${spec.sku.displayName} at the top right of the plate, served as is, no glass.`;
  return {
    genreLine: `Photorealistic ${venueWord} photography, 16:9.`,
    lightingId: lighting.id,
    lightingSentence: lighting.prompt,
    skuLightSentence: skuLightSentence(spec.sku, spec.sku.glass, lighting.warmth),
    lookSentence: lookSentence(lookById(spec.camera.look), drinks),
    angleSentence: angleSentence(angleById(spec.camera.angle)),
    framingSentence:
      "The entree and the Coca-Cola product sit together in the vertical center third of the frame; the table's far edge sits at or below the middle of the frame, leaving the upper half for soft background.",
    surfaceText: spec.scene.surfaceText || SURFACES[spec.scene.surface].promptText,
    servingSentence: serving,
    labels: bp.primitives.map((p) => ({ label: p.id, what: p.component_name, where: whereOnTable(bp, p.id) })),
    labelInstruction:
      "The labeled shapes in the reference layout are placement guides only. Match each shape to the segment with the same label, and do not render the labels or any text as part of the image.",
  };
}

/** Assemble the final prompt text in the fixed order. */
export function assemblePrompt(story: Story, facts: StoryFacts): string {
  const s = story.segments;
  return [
    facts.genreLine,
    s.environmentalOverview,
    ...story.labelSegments.map((l) => `${l.label}: ${l.text}`),
    s.platingAndTableware,
    s.productServingDetails,
    s.brandVisId,
    facts.lightingSentence,
    facts.skuLightSentence,
    facts.labelInstruction,
  ]
    .filter(Boolean)
    .join("\n");
}
