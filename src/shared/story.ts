// The story output: Scene Summary + prompt segments (the segment set defined
// in knowledge-base/00-methods/image-generation-pipeline.md Stage 3), plus
// one segment per proxy label so the image model can map each labeled shape
// in the proxy PNG to its text.

import { z } from "zod";
import { BELL_GLASS, SURFACES, VESSELS, VESSEL_SHORT, skuProxy, vesselPhrase } from "./registry";
import { angleById, angleSentence, lookById, lookSentence, selectLighting, skuLightSentence } from "./rules";
import type { Blueprint, SceneSpec, Vessel } from "./types";

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
  labels: Array<{
    label: string;
    what: string;
    where: string;
    /** The container, with its real size, worded so the text matches the proxy shape. */
    vessel: string;
    /** Product and napkin labels use fixed text; only food labels are written by the agent. */
    fixedText?: string;
  }>;
  labelInstruction: string;
  /** Opens the image prompt: how to read the proxy (image 1). */
  proxyInstruction: string;
  /** Target object sizes in the frame, from the true framing. */
  scaleSentence: string;
  /** Closes the image prompt. */
  exclusions: string;
}

/** Labels whose text the agent writes (the food). */
export function foodLabels(facts: StoryFacts): StoryFacts["labels"] {
  return facts.labels.filter((l) => !l.fixedText);
}

/** Centimeters to the nearest half (a 12 in plate reads 30.5 cm). */
function cm(m: number): number {
  return Math.round(m * 200) / 2;
}

function labelVessel(spec: SceneSpec, proxy: string, role: string): { vessel: string; fixedText?: string } {
  if (proxy.startsWith("sku:")) {
    const h = cm(skuProxy(spec.sku).height);
    const cold = `cold, with fine condensation on the ${spec.sku.package === "can" ? "can" : spec.sku.package === "pet-bottle" ? "bottle" : "glass"}`;
    // Describe the shape, not the catalog name: package words in the prompt get printed on the label.
    const shape =
      spec.sku.package === "can"
        ? "Coca-Cola can"
        : spec.sku.package === "contour-glass-bottle"
          ? "glass Coca-Cola bottle in the classic contour shape, filled to the neck with cola"
          : "clear plastic Coca-Cola bottle, filled to the neck with cola";
    const text = `exactly one ${shape}, about ${h} cm tall, standing upright and facing the camera straight on so the full logo reads, ${cold}. ${spec.sku.package === "can" ? "Unopened, no straw." : "Capped, no straw."} The label shows the Coca-Cola script logo; print no other words, sizes or descriptions on it.`;
    return { vessel: `the ${spec.sku.displayName}, about ${h} cm tall`, fixedText: text[0].toUpperCase() + text.slice(1) };
  }
  if (proxy === "bell-glass") {
    const text = `Exactly one branded bell-shaped Coca-Cola glass, about ${cm(BELL_GLASS.height)} cm tall, filled with Coca-Cola and ice, with the logo facing the camera.`;
    return { vessel: `a branded bell-shaped Coca-Cola glass, about ${cm(BELL_GLASS.height)} cm tall`, fixedText: text };
  }
  if (role === "napkin-set") {
    const cutlery = spec.napkinSet?.cutlery.join(" and ") ?? "fork and knife";
    const text = `A neatly folded plain cloth napkin, about 20 by 10 cm, lying flat with a ${cutlery} on top, handles toward the camera. No print or text on the napkin.`;
    return { vessel: "a folded cloth napkin", fixedText: text };
  }
  if (proxy in VESSELS) return { vessel: vesselPhrase(proxy as Vessel) };
  return { vessel: proxy };
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
    labels: bp.primitives.map((p) => ({ label: p.id, what: p.component_name, where: whereOnTable(bp, p.id), ...labelVessel(spec, p.proxy, p.role) })),
    labelInstruction:
      "The labeled shapes in the reference layout are placement guides only. Match each shape to the segment with the same label, and do not render the labels or any text as part of the image.",
    proxyInstruction:
      "Transform image 1 into a photograph. Image 1 is a layout guide: each colored shape is one object, and its label names the text below that describes it. Keep every object exactly where its shape sits, at the same size, and keep the same camera position and framing; do not zoom in, crop tighter or add objects. Remove all shapes, labels and outlines.",
    scaleSentence: scaleSentence(bp),
    exclusions: `Only the ${bp.primitives.length} objects described above are on the table, and no other drinks or glasses (no beer, wine, water or juice). No text anywhere except the Coca-Cola product's own label: no menus, signs, posters or writing in the background either; no hands or people at the table.`,
  };
}

/**
 * Image tests: the model ignores the proxy's scale and draws the front plate at about 43% of
 * the frame width. So the scale is stated in real-world terms it can reason with: how far the
 * camera is, and how wide the frame is at the plate, next to the plate's own size.
 */
function scaleSentence(bp: Blueprint): string {
  const main = bp.primitives.find((p) => p.id === "MAIN");
  if (!main) return "";
  const c = bp.camera;
  const pos = c.position;
  const dir = [c.target[0] - pos[0], c.target[1] - pos[1], c.target[2] - pos[2]];
  const len = Math.hypot(dir[0], dir[1], dir[2]);
  const p = [main.world.x - pos[0], main.dimensions.height / 2 - pos[1], -main.world.d - pos[2]];
  const depth = (p[0] * dir[0] + p[1] * dir[1] + p[2] * dir[2]) / len; // along the view axis
  const frameW = 2 * depth * Math.tan((c.fovDeg * Math.PI) / 360) * c.aspect;
  const plateW = main.dimensions.width;
  const noun = main.proxy in VESSEL_SHORT ? VESSEL_SHORT[main.proxy as Vessel] : "dish";
  const dist = Math.hypot(p[0], p[1], p[2]);
  return `Scale: this is a table shot, not a close-up. The camera is about ${dist.toFixed(1)} m from the ${noun}, and at that distance the frame is about ${Math.round(frameW * 20) * 5} cm wide, so the ${cm(plateW)} cm ${noun} fills only about ${Math.round((plateW / frameW) * 100)}% of the frame width, with open table on both sides. Do not enlarge the food or the product.`;
}

function labelText(story: Story, l: StoryFacts["labels"][number]): string {
  return l.fixedText ?? story.labelSegments.find((x) => x.label === l.label)?.text ?? `${l.what}, on ${l.vessel}.`;
}

/**
 * The composition prompt (Nano Banana 2), in the order the image tests proved out:
 * how to read the proxy, one line per label, setting, lighting, camera look, exclusions.
 */
export function assemblePrompt(story: Story, facts: StoryFacts): string {
  return [
    facts.proxyInstruction,
    facts.scaleSentence,
    facts.labels.map((l) => `${l.label}: ${labelText(story, l)}`).join("\n"),
    story.segments.environmentalOverview,
    `${facts.lightingSentence} ${facts.skuLightSentence}`,
    facts.lookSentence,
    facts.exclusions,
  ]
    .filter(Boolean)
    .join("\n\n");
}

/** The product swap prompt (Seedream): image 1 = the composed photo, image 2 = the product reference. */
export function productSwapPrompt(spec: SceneSpec, facts: StoryFacts): string {
  const noun = spec.sku.package === "can" ? "can" : "bottle";
  return [
    `Replace the Coca-Cola ${noun} in image 1 with the ${spec.sku.displayName} from image 2. Keep its exact position, size and straight-on angle, and keep its base resting on the table.`,
    `Match the lighting of image 1: ${facts.lightingSentence}`,
    facts.skuLightSentence,
    spec.sku.glass ? "Keep the bell-shaped Coca-Cola glass as it is." : "",
    "Change nothing else in image 1.",
  ]
    .filter(Boolean)
    .join(" ");
}
