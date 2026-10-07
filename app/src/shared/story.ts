// The story output: Scene Summary + prompt segments (the segment set defined
// in knowledge-base/00-methods/image-generation-pipeline.md Stage 3), plus
// one segment per proxy label so the image model can map each labeled shape
// in the proxy PNG to its text.

import { z } from "zod";
import { BELL_GLASS, NAPKIN_SIZES, SURFACES, VESSELS, VESSEL_SHORT, napkinFoldedCm, skuProxy, vesselPhrase } from "./registry";
import { type LightingPreset, angleById, angleSentence, glassRules, lookById, lookSentence, selectLighting, skuLightSentence } from "./rules";
import { sceneItems } from "./scene";
import type { Blueprint, SceneSpec, Vessel } from "./types";
import { venueType } from "./venues";

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
  briefSummary: z.string().describe("The scene summary abbreviated to about half its length"),
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

/** The generated scene compared with the story and the prompt it was made from. */
export const ImageCheck = z.object({
  images: z
    .array(
      z.object({
        image: z.number().int().describe("1-based image number, in the order the images were given"),
        pass: z.boolean().describe("False when the image has any major issue"),
        issues: z.array(
          z.object({
            element: z.string().describe('The node it concerns, from the given list (MAIN, SIDE_1, SKU, ENVIRONMENT …), or "SCENE" for the whole image'),
            severity: z.enum(["major", "minor"]).describe("major = a food stylist would reject the image for it"),
            expected: z.string().describe("What the story and prompt ask for, briefly"),
            seen: z.string().describe("What the image actually shows"),
            fix: z.string().describe("A sentence to add to that node's text so the next generation gets it right"),
          })
        ),
      })
    )
    .describe("One entry per image, in order"),
  summary: z.string().describe("One or two sentences: which image is closest and what most needs fixing"),
});
export type ImageCheck = z.infer<typeof ImageCheck>;

/** Facts computed from the rules and the chosen layout. The story must use them verbatim. */
export interface StoryFacts {
  genreLine: string;
  lightingId: string;
  lightingSentence: string;
  lightingWarmth: "neutral" | "cool" | "warm" | "ambient";
  skuLightSentence: string;
  /** Optional so stories saved before it existed still load. */
  colorSentence?: string;
  /** The photodocumentary look: subject, place, lens, film and light. Optional so older stories still load. */
  filmSentence?: string;
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
    /** Second place setting (party "2"): this label's text is derived from the single-setting
     * label named here (currently only MAIN_2 → "MAIN") instead of written by the agent. */
    sameAs?: string;
    /** Text prepended before the referenced label's resolved text. */
    sameAsPrefix?: string;
  }>;
  labelInstruction: string;
  /** Opens the image prompt: how to read the proxy (image 1). */
  proxyInstruction: string;
  /** Target object sizes in the frame, from the true framing. */
  scaleSentence: string;
  /** The art director's placement changes from the sketch review; they amend the layout guide. */
  adjustments?: string[];
  /** Closes the image prompt. */
  exclusions: string;
}

/** Labels whose text the agent writes (the food). Second-setting labels that copy another label's text are excluded. */
export function foodLabels(facts: StoryFacts): StoryFacts["labels"] {
  return facts.labels.filter((l) => !l.fixedText && !l.sameAs);
}

/** Centimeters to the nearest half (a 12 in plate reads 30.5 cm). */
function cm(m: number): number {
  return Math.round(m * 200) / 2;
}

function labelVessel(spec: SceneSpec, proxy: string, role: string, style?: string): { vessel: string; fixedText?: string } {
  const isPartnerDrink = role === "partner-sku" || role === "partner-glass";
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
    const label = spec.sku.appearance
      ? `It is a ${spec.sku.appearance}; print nothing on it beyond that real label`
      : `${spec.sku.package === "can" ? "The can shows the white Coca-Cola script logo on red" : "A solid red label band wraps the middle of the bottle, with the white Coca-Cola script logo"}; print no other words, sizes or descriptions on it`;
    const text = `exactly one ${shape}, about ${h} cm tall, standing upright and facing the camera straight on so the full logo reads, ${cold}. ${spec.sku.package === "can" ? "Unopened, no straw." : "Capped, no straw."} ${label}.${isPartnerDrink ? " This is the second diner's own, a duplicate of the other one." : ""}`;
    return { vessel: `the ${spec.sku.displayName}, about ${h} cm tall${isPartnerDrink ? " (the second diner's)" : ""}`, fixedText: text[0].toUpperCase() + text.slice(1) };
  }
  if (proxy === "bell-glass") {
    const text = `Exactly one branded bell-shaped Coca-Cola glass, about ${cm(BELL_GLASS.height)} cm tall, ${glassRules.glass.fill_prompt}, with ice, with the logo facing the camera.${role === "partner-glass" ? " This is the second diner's own glass." : ""}`;
    return { vessel: `a branded bell-shaped Coca-Cola glass, about ${cm(BELL_GLASS.height)} cm tall${role === "partner-glass" ? " (the second diner's)" : ""}`, fixedText: text };
  }
  if (role === "napkin-set" || role === "partner-napkin") {
    const cutlery = spec.napkinSet ? spec.napkinSet.cutlery.join(" and ") : "fork and knife";
    const size = spec.napkinSet?.size ?? "luncheon";
    const material = spec.napkinSet?.material ?? "cotton";
    const [w, d] = napkinFoldedCm(size);
    const kind = size === "dinner" ? "everyday dinner napkin" : "luncheon napkin";
    const facing = role === "partner-napkin" ? "handles toward the second diner" : "handles toward the camera";
    if (material === "paper") {
      const text = `A plain white paper napkin, folded into a flat rectangle about ${w} by ${d} cm, lying flat with its long side toward the camera. Soft, slightly textured paper with a light embossed edge, no print, logo or text, no cutlery on it.`;
      return { vessel: "a folded paper napkin", fixedText: text };
    }
    const cloth =
      material === "polyester"
        ? "a smooth polyester restaurant napkin with a faint sheen, crisp pressed edges and no wrinkles"
        : "a soft cotton napkin with a matte woven texture and a few gentle natural creases";
    const text = `A plain ${kind} (${NAPKIN_SIZES[size].inches} inches, about ${NAPKIN_SIZES[size].cm} cm square unfolded): ${cloth}, folded only twice, in thirds and then in half, into a flat rectangle about ${w} by ${d} cm and a few millimetres thick. It lies flat, long side toward the camera, ${cutlery ? `with a ${cutlery} on top, ${facing}` : "with nothing on it"}. Not a thick stack of folds, no decorative fold, no napkin ring. No print or text on the napkin.`;
    return { vessel: `a folded ${material} napkin`, fixedText: text };
  }
  if (proxy in VESSELS) return { vessel: vesselPhrase(proxy as Vessel, style) };
  return { vessel: proxy };
}

function whereOnTable(bp: Blueprint, id: string): string {
  const p = bp.primitives.find((q) => q.id === id)!;
  const main = bp.primitives.find((q) => q.id === "MAIN")!;
  if (id === "MAIN") return "foreground, center of the frame";
  // Second place setting (party "2"): phrase from the partner's own yaw rather than its offset
  // from MAIN, since across and corner settings sit in very different directions from it.
  if (p.role.startsWith("partner-")) {
    const corner = p.rotation_euler_deg.yaw === 90;
    if (id === "MAIN_2") {
      return corner
        ? "at the left end of the table, the second diner's place, turned to face the entree"
        : "across the table, the second diner's place";
    }
    return corner ? "at the second diner's place, left end of the table" : "across the table, at the second diner's place";
  }
  const dx = p.world.x - main.world.x;
  const dd = p.world.d - main.world.d;
  const side = Math.abs(dx) < 0.06 ? "" : dx > 0 ? "right" : "left";
  const depth = dd > 0.06 ? "behind" : dd < -0.06 ? "in front of" : "beside";
  if (depth === "beside") return `to the ${side || "side"} of the entree`;
  return `${depth} the entree${side ? `, to the ${side}` : ""}`;
}

export function storyFacts(spec: SceneSpec, bp: Blueprint): StoryFacts {
  const styles = new Map(sceneItems(spec).map((i) => [i.label, i.style]));
  const lighting = selectLighting(spec.scene);
  const drinks = spec.sku.glass ? "the Coca-Cola bottle and glass" : spec.sku.package === "can" ? "the Coca-Cola can" : "the Coca-Cola bottle";
  const venueWord = spec.scene.venue === "on-the-go" ? "street food" : spec.scene.venue === "restaurant" ? "restaurant food" : "home-cooked food";
  const shared = bp.primitives.some((p) => p.id === "SHARED_HERO");
  const hasPartner = bp.primitives.some((p) => p.role === "partner-main");
  const serving = spec.sku.glass
    ? shared || spec.sku.volumeMl >= 1000
      ? hasPartner
        ? `A ${spec.sku.displayName} stands at the top right of the plate as the one shared bottle for the table, with a branded bell-shaped Coca-Cola glass filled to the top at each place.`
        : `A ${spec.sku.displayName} stands at the top right of the plate as the shared bottle, with a branded bell-shaped Coca-Cola glass filled to the top to its right.`
      : hasPartner
        ? `A ${spec.sku.displayName} at the top right of the plate, with a branded bell-shaped Coca-Cola glass filled to the top to its right; the second diner has their own ${spec.sku.displayName} and glass at their place.`
        : `A ${spec.sku.displayName} at the top right of the plate, with a branded bell-shaped Coca-Cola glass filled to the top to its right.`
    : hasPartner
      ? `A ${spec.sku.displayName} at the top right of the plate, served as is, no glass; the second diner has their own ${spec.sku.displayName} at their place.`
      : `A ${spec.sku.displayName} at the top right of the plate, served as is, no glass.`;
  return {
    genreLine: `Photorealistic ${venueWord} photography, 16:9.`,
    lightingId: lighting.id,
    lightingSentence: lighting.prompt,
    lightingWarmth: lighting.warmth,
    colorSentence: COLOR_BY_WARMTH[lighting.warmth],
    filmSentence: filmSentence(spec, lighting),
    skuLightSentence: skuLightSentence(spec.sku, spec.sku.glass, lighting.warmth),
    lookSentence: lookSentence(lookById(spec.camera.look), drinks),
    angleSentence: angleSentence(angleById(spec.camera.angle)),
    framingSentence: hasPartner
      ? "The entree and the Coca-Cola product sit together in the vertical center third of the frame; the table's far edge sits at or below the middle of the frame, leaving the upper half for soft background. The second place setting sits further back or to the side as a secondary element, and may be partly cropped at the frame's edge."
      : "The entree and the Coca-Cola product sit together in the vertical center third of the frame; the table's far edge sits at or below the middle of the frame, leaving the upper half for soft background.",
    surfaceText: spec.scene.surfaceText || SURFACES[spec.scene.surface].promptText,
    servingSentence: serving,
    labels: bp.primitives.map((p) => {
      const base = { label: p.id, what: p.component_name, where: whereOnTable(bp, p.id), ...labelVessel(spec, p.proxy, p.role, styles.get(p.id)) };
      // Only a label with no fixed text of its own (currently just MAIN_2) borrows another
      // label's agent-written text; NAPKIN_SET_2/SKU_2/GLASS_2 already got their own fixedText above.
      if (!base.fixedText && p.same_as) {
        return { ...base, sameAs: p.same_as, sameAsPrefix: "The second diner's plate, the same dish as MAIN in a matching portion: " };
      }
      return base;
    }),
    labelInstruction:
      "The labeled shapes in the reference layout are placement guides only. Match each shape to the segment with the same label, and do not render the labels or any text as part of the image.",
    proxyInstruction:
      "Transform image 1 into a photograph. Image 1 is a layout guide: each colored shape is one object, and its label names the text below that describes it. Keep every object exactly where its shape sits, at the same size, and keep the same camera position and framing; do not zoom in, crop tighter or add objects. Remove all shapes, labels and outlines.",
    scaleSentence: scaleSentence(bp),
    exclusions: `Only the ${bp.primitives.length} objects described above are on the table, and no other drinks or glasses (no beer, wine, water or juice). No text anywhere except the Coca-Cola product's own label: no menus, signs, posters or writing in the background either; no hands or people at the table.`,
  };
}

/**
 * The art director's photodocumentary template (2026-10-05), filled from the brief: the food,
 * the place, the look's lens and the light. It opens the Camera part of the prompt.
 */
function filmSentence(spec: SceneSpec, lighting: LightingPreset): string {
  const side = spec.accompaniments.find((a) => a.pairsWith === "MAIN" && a.role !== "condiment")?.name;
  const food = side ? `${spec.entree.name} with ${side}` : spec.entree.name;
  const t = venueType(spec.scene.venue, spec.scene.venueType);
  const place = t ? t.prompt.split(":")[0] : VENUE_PLACE[spec.scene.venue];
  const region = regionName(spec.region, spec.country);
  const where = [region, spec.countryLabel].filter(Boolean).join(", ");
  const lens = lookById(spec.camera.look).hidden.focal_length_mm;
  const light = lighting.condition ?? lighting.prompt.split(/[,.:]/)[0].toLowerCase();
  return (
    `Candid photodocumentary shot of ${food}, ${place}${where ? ` in ${where}` : ""}. ` +
    "Authentic slice-of-life moment, unstyled and realistic texture. " +
    `Shot on ${lens}mm lens, crisp focus. ` +
    "Enhanced color richness with deep true-to-life tones, emphasizing selective rich red tones, well-rounded contrast, " +
    `clean analog look with fine film grain, ${light}. ` +
    "Cinematic realism, documentary aesthetic."
  );
}

const VENUE_PLACE: Record<SceneSpec["scene"]["venue"], string> = {
  home: "at home",
  restaurant: "in a restaurant",
  "on-the-go": "on the go",
};

/** Region ids are "<country>-<name>" (e.g. "us-texas"); free-text regions pass through. */
function regionName(region: string, country: string): string {
  const r = region.trim();
  if (!r) return "";
  const prefix = `${country.toLowerCase()}-`;
  if (!r.toLowerCase().startsWith(prefix)) return r;
  return r
    .slice(prefix.length)
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
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

export function labelText(story: Story, l: StoryFacts["labels"][number]): string {
  return l.fixedText ?? story.labelSegments.find((x) => x.label === l.label)?.text ?? `${l.what}, on ${l.vessel}.`;
}

/** Color direction per lighting warmth, so the prompt names the color treatment on its own line. */
const COLOR_BY_WARMTH: Record<StoryFacts["lightingWarmth"], string> = {
  neutral: "Clean neutral white balance and true-to-life food color; the Coca-Cola red stays rich and accurate, never orange or pink.",
  cool: "Clean, slightly cool daylight white balance with true-to-life food color; the Coca-Cola red stays rich and accurate, never orange or pink.",
  warm: "Warm, golden color with honest food tones, never oversaturated; the Coca-Cola red stays rich and accurate, never orange.",
  ambient: "Warm ambient color with deep but open shadows and honest food tones; the Coca-Cola red stays rich and accurate, never orange or brown.",
};

export type SegmentKind = "guide" | "object" | "environment" | "camera" | "exclusions";

/** One component of the composition prompt. The prompt is exactly these texts, in this order. */
export interface CompositionSegment {
  key: string;
  kind: SegmentKind;
  /** The chip shown in the UI; for objects it is the proxy label that prefixes the prompt line. */
  chip: string;
  /** What the segment covers, in plain words. */
  title: string;
  note: string;
  /** Written from the rules, not by the agent. */
  fixed: boolean;
  /** Second place setting (party "2"): this segment's text was copied from the named label
   * instead of generated for a turnaround, e.g. MAIN_2's "sameAs" is "MAIN". */
  sameAs?: string;
  /** Named sub-parts (camera, lighting, color); `text` is their join. */
  parts?: Array<{ label: string; text: string }>;
  text: string;
}

export function compositionSegments(story: Story, facts: StoryFacts): CompositionSegment[] {
  const camera = [
    { label: "Camera", text: [facts.filmSentence, facts.angleSentence, facts.lookSentence].filter(Boolean).join(" ") },
    { label: "Lighting", text: `${facts.lightingSentence} ${facts.skuLightSentence}`.trim() },
    { label: "Color", text: facts.colorSentence ?? COLOR_BY_WARMTH.neutral },
  ];
  return [
    {
      key: "guide",
      kind: "guide",
      chip: "LAYOUT GUIDE",
      title: "How to read image 1",
      note: "Keep every shape's position and size; states the real-world scale",
      fixed: true,
      text: [
        facts.proxyInstruction,
        facts.scaleSentence,
        facts.adjustments?.length
          ? `Adjustments to the layout guide (these take priority over the shapes for the items named):\n- ${facts.adjustments.join("\n- ")}`
          : "",
      ]
        .filter(Boolean)
        .join("\n\n"),
    },
    ...facts.labels.map<CompositionSegment>((l) => {
      // Second-setting label with no text of its own (MAIN_2): quote the referenced label's
      // already-resolved text (agent-written for food) instead of generating a separate one.
      const text = l.sameAs
        ? `${l.sameAsPrefix ?? ""}${labelText(story, facts.labels.find((m) => m.label === l.sameAs) ?? l)}`
        : labelText(story, l);
      return {
        key: l.label,
        kind: "object",
        chip: l.label,
        title: l.what,
        note: l.where,
        fixed: Boolean(l.fixedText) || Boolean(l.sameAs),
        sameAs: l.sameAs,
        text,
      };
    }),
    {
      key: "environment",
      kind: "environment",
      chip: "ENVIRONMENT",
      title: "Background + table",
      note: `Not a shape: the tabletop (${facts.surfaceText}) and the place around and behind it`,
      fixed: false,
      text: story.segments.environmentalOverview,
    },
    {
      key: "camera",
      kind: "camera",
      chip: "CAMERA · LIGHTING · COLOR",
      title: "Camera, lighting + color",
      note: "The film look, lens, angle and focus; the light; the color treatment",
      fixed: true,
      parts: camera,
      text: camera.map((p) => `${p.label}: ${p.text}`).join("\n"),
    },
    {
      key: "exclusions",
      kind: "exclusions",
      chip: "EXCLUSIONS",
      title: "What must not appear",
      note: "Closes the prompt",
      fixed: true,
      text: facts.exclusions,
    },
  ];
}

/**
 * The composition prompt (Nano Banana 2), in the order the image tests proved out:
 * how to read the proxy, one line per label, environment, camera + lighting + color, exclusions.
 */
export function assemblePrompt(story: Story, facts: StoryFacts): string {
  const segs = compositionSegments(story, facts);
  const objects = segs.filter((s) => s.kind === "object").map((s) => `${s.chip}: ${s.text}`).join("\n");
  return [
    segs.find((s) => s.kind === "guide")!.text,
    objects,
    ...segs.filter((s) => s.kind !== "guide" && s.kind !== "object").map((s) => s.text),
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
