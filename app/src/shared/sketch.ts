// The detailed sketch on Sketch review: Nano Banana 2 draws the finished scene as a
// black-and-white pencil drawing from the labeled proxy (image 1), so the art
// director sees the food, the dishes and the drinks where the photo's camera will
// put them, before the story and the photograph are made. The prompt is built
// from the picked options alone (there is no story yet at this step).

import { onTheGoSurfaceRule } from "./registry";
import { NO_HANDS_RULE, foodStylingRules, withoutHands } from "./rules";
import { seatedPeopleRule, hasSeatedPeople } from "./people";
import { countsSentence, storyFacts } from "./story";
import type { Blueprint, SceneSpec } from "./types";
import { environmentBrief } from "./venues";

/** Nano Banana 2 (GEMINI_IMAGE_FAST). */
export const SKETCH_MODEL = "fast" as const;
export const SKETCH_MODEL_LABEL = "Nano Banana 2";
export const SKETCH_ASPECT_RATIO = "16:9" as const;
export const SKETCH_IMAGE_SIZE = "2K" as const;

/** What one labeled object is, for the sketch: the food from the picked prep, plating and sides. */
function objectText(spec: SceneSpec, bp: Blueprint, id: string, fallback: string): string {
  const p = bp.primitives.find((q) => q.id === id)!;
  const dish = `${spec.entree.prep.promptText} ${spec.entree.plating.promptText}`;
  if (id === "MAIN" || id === "SHARED_HERO") return `${p.component_name}. ${dish}`;
  if (p.same_as === "MAIN") return "the second diner's plate, the same dish as MAIN in a matching portion.";
  const side = spec.accompaniments.find((a) => a.name === p.component_name);
  if (side) return `${side.name}. ${side.promptText}`;
  if (spec.accent && p.role === "accent") return `${spec.accent.name}. ${spec.accent.promptText}`;
  return fallback;
}

/** The art director's review lines that change the picture (placements, item notes, scene notes); "keep" marks don't. */
export function sketchChanges(adjustments: string[], directions: string[]): string[] {
  return [...adjustments, ...directions.filter((d) => !d.startsWith("Working as shown"))];
}

export function sketchPrompt(spec: SceneSpec, bp: Blueprint, changes: string[] = []): string {
  const facts = storyFacts(spec, bp);
  const seated = hasSeatedPeople(bp);
  const objects = facts.labels.map((l) => {
    const p = bp.primitives.find((q) => q.id === l.label);
    // The second diner's drink is drawn exactly like the first, so it points there instead of repeating the whole look.
    const copy = p?.same_as && (p.role === "partner-sku" || p.role === "partner-glass") && facts.labels.some((m) => m.label === p.same_as);
    const text = copy ? `Exactly one more of the same ${p.role !== "partner-sku" ? "glass" : spec.sku.package === "can" ? "can" : "bottle"} as ${p.same_as}, drawn the same way: the second diner's own.` : l.fixedText ?? `${objectText(spec, bp, l.label, l.what)} Served in ${l.vessel}.`;
    return `- ${l.label} (${l.where}): ${l.label.startsWith("PERSON_") ? text : withoutHands(text)}`;
  });
  // A seated scene draws its two people (their pose fixed by the figures in image 1); every other scene is a still life.
  const people = seated
    ? `Two people sit at the table, drawn as real people in the same pencil style: ${seatedPeopleRule(bp)} Keep each person exactly in the pose of their figure in image 1; their looks and clothes come from their description below.`
    : `A still life with no one in it. ${NO_HANDS_RULE}`;
  const dishes = foodStylingRules([spec.heroDish, JSON.stringify({ entree: spec.entree, accompaniments: spec.accompaniments })]);
  const place = environmentBrief(spec.scene);
  const table = facts.surfaceText.trim().replace(/[^.!?]$/, "$&.");
  return [
    "Turn image 1 into a detailed black-and-white pencil sketch of the finished scene: the art director's pre-visualization drawing of a food photograph, showing exactly where everything lands in the final frame.",
    "Image 1 is a layout guide: each colored shape is one object, and its label names the description below. Keep every object exactly where its shape sits, at the same size, and keep the same camera position, height, angle, lens and framing; do not zoom in, crop tighter, re-center or add objects. Remove all shapes, labels and outlines. The faint grid on the table top and the floor, and the thin light line across the frame where there is one (the camera's eye level), are perspective guides: build the floor, walls, doorways, windows, shelves and furniture on that same floor plane, so their lines recede to the same vanishing points and meet the same eye level as the table. Do not draw the grid or the line.",
    people,
    // No depth of field, food texture or photo finish here: a pencil drawing can't use them (the photo prompt keeps them).
    `Camera: ${facts.angleSentence}${facts.viewSentence ? ` ${facts.viewSentence}` : ""} ${facts.scaleSentence}`,
    facts.productScale,
    "Draw the food in detail, as it will look in the photograph from this camera: its real shapes, pieces and portions, how it is stacked or spread on its vessel, the garnish, the texture (crumb, char, crisp edges, sauce, steam). Draw each vessel's real shape and rim, the cutlery and the napkin folds, and the Coca-Cola product's real silhouette with only a hint of its script logo.",
    `${seated ? "People and objects" : "Objects"} (${facts.labels.length}, and only these):`,
    ...objects,
    countsSentence(bp),
    `Table: ${table}${onTheGoSurfaceRule(spec.scene) ? ` ${onTheGoSurfaceRule(spec.scene)}` : ""}${place ? ` ${place}` : ""} Suggest the background only lightly, with a few loose lines, behind the table's far edge.`,
    ...(dishes.length ? ["Food-styling rules:", ...dishes.flatMap((d) => d.rules.map((r) => `- ${d.label}: ${r}`))] : []),
    ...(changes.length ? ["The art director's changes, which override the layout guide:", ...changes.map((c) => `- ${c}`)] : []),
    `Shade the forms with the light of the photograph: ${facts.lightingSentence}`,
    "Style: graphite pencil and fine ink line on plain white paper, confident contour lines with light hatching and cross-hatching for shadow and volume, like a storyboard or food-styling concept drawing.",
    "Strictly monochrome: black and grey pencil on white only, with no color anywhere. Ignore the colors of image 1. Do not tint the drink, the Coca-Cola red, the food, the sauces, the garnish, the table or the paper: everything, the Coca-Cola product and its label included, is drawn in the same pencil greys, and the paper stays pure white.",
    "No text, numbers, labels, arrows or annotations anywhere in the drawing.",
    seated ? "Only PERSON_1 and PERSON_2 are drawn as people; nobody else is at or beside the table." : NO_HANDS_RULE,
  ].join("\n");
}
