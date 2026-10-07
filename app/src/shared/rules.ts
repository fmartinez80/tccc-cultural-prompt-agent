// Rule data files live in /rules so they can change without code changes.
import cameraOptions from "../../rules/camera-options.json";
import lightingPresets from "../../rules/lighting-presets.json";
import glassRules from "../../rules/glass-rules.json";
import foodStyling from "../../rules/food-styling.json";
import type { Occasion, SceneSpec, SkuInfo } from "./types";

export { cameraOptions, lightingPresets, glassRules };

export interface LookOption {
  id: string;
  label: string;
  help: string;
  prompt: string;
  hidden: { focal_length_mm: number; aperture: string; focus: string; focus_distance_m: number | string };
  constraints?: { sku_min_distance_from_frame_edge_pct?: number };
  status?: string;
}
export interface AngleOption {
  id: string;
  label: string;
  prompt: string;
  hidden: { pitch_deg: number };
  status?: string;
}

interface AngleRecommendationRule {
  angle: string;
  reason: string;
  match: string[];
  massClass?: string[];
  vessels?: string[];
}

const ANGLE_RECOMMENDATIONS: AngleRecommendationRule[] = cameraOptions.angle.recommendations.rules;

/** Lowercase, accents stripped, punctuation to spaces: "Phở bò" → "pho bo". */
function plainWords(text: string): string {
  return ` ${text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ")} `;
}

/** Whole word or phrase, plurals included ("burgers", "sandwiches"). */
function hasWord(haystack: string, word: string): boolean {
  const w = plainWords(word).trim();
  return new RegExp(` ${w}(s|es)? `).test(haystack);
}

/**
 * The angle the entree reads best from (rules/camera-options.json angle.recommendations):
 * dish words first, then the food's silhouette and its vessel. Null when nothing matches.
 */
export function recommendAngle(entree: {
  dish: string;
  prep?: { label: string; massClass?: string } | undefined;
  plating?: { label: string; vessel?: string } | undefined;
}): { angle: string; reason: string } | null {
  const text = plainWords([entree.dish, entree.prep?.label, entree.plating?.label].filter(Boolean).join(" "));
  const byWord = ANGLE_RECOMMENDATIONS.find((r) => r.match.some((m) => hasWord(text, m)));
  const byShape = ANGLE_RECOMMENDATIONS.find(
    (r) =>
      (entree.prep?.massClass && r.massClass?.includes(entree.prep.massClass)) ||
      (entree.plating?.vessel && r.vessels?.includes(entree.plating.vessel)),
  );
  const rule = byWord ?? byShape;
  return rule && ANGLES.some((a) => a.id === rule.angle) ? { angle: rule.angle, reason: rule.reason } : null;
}

export const LOOKS: LookOption[] = cameraOptions.look.options as LookOption[];
export const ANGLES: AngleOption[] = cameraOptions.angle.options as AngleOption[];
export const DEFAULT_LOOK = cameraOptions.look.default;
export const DEFAULT_ANGLE = cameraOptions.angle.default;
/** Field-of-view factor for the proxy sent to the image model (see camera-options.json). */
export const MODEL_FRAMING_WIDEN: number = cameraOptions.model_framing.widen;

/**
 * Spec, for now: no hands or people anywhere in any picture (sketch, turnarounds, photograph).
 * One wording for every prompt, so the rule can't drift between them.
 */
export const NO_HANDS_RULE =
  "No hands, fingers, arms or people anywhere in the image: nobody at the table, no figures or passers-by in the background, and nothing held, lifted, picked up or bitten. Every item rests on its vessel or on the surface.";

/**
 * Agent-written food text sometimes calls a dish "handheld" or "eaten by hand" (empanadas, tacos,
 * sandwiches); those words alone pull a hand into the picture, so image prompts drop them.
 */
export function withoutHands(text: string): string {
  return text
    .replace(/\bhand[- ]?held\b/gi, "finger-food")
    .replace(/,?\s*\b(?:held|eaten|picked up|served)\s+(?:in|by|with)\s+(?:the\s+|one\s+|a\s+)?hands?\b/gi, "")
    .replace(/\s+([,.;])/g, "$1")
    .replace(/,([.;])/g, "$1")
    .replace(/ {2,}/g, " ");
}

export function lookById(id: string): LookOption {
  return LOOKS.find((l) => l.id === id) ?? LOOKS[0];
}
export function angleById(id: string): AngleOption {
  return ANGLES.find((a) => a.id === id) ?? ANGLES[0];
}

/** Placeholder prompt text ("[CLOSE_HERO_PROMPT]") is replaced by a sentence built from the hidden values. */
export function lookSentence(look: LookOption, drinks: string): string {
  if (!look.prompt.startsWith("[")) return look.prompt;
  // The lens itself is named by the film sentence (story.ts filmSentence).
  const ap = look.hidden.aperture === "TBD" ? "" : `Shot at ${look.hidden.aperture}, with `;
  return ap ? `${ap}the main dish and ${drinks} in sharp focus.` : `The main dish and ${drinks} in sharp focus.`;
}
export function angleSentence(angle: AngleOption): string {
  if (!angle.prompt.startsWith("[")) return angle.prompt;
  return `Camera angled about ${angle.hidden.pitch_deg} degrees down toward the table, from the diner's side.`;
}

// ---------------------------------------------------------------------------
// Time of day and lighting
// ---------------------------------------------------------------------------

export function timeFromOccasion(o: Occasion): SceneSpec["scene"]["time"] | null {
  const map = lightingPresets.time_of_day.from_occasion as Record<string, string>;
  return (map[o] as SceneSpec["scene"]["time"]) ?? null;
}

export interface LightingPreset {
  id: string;
  /** A short lowercase phrase for the light, closing the film sentence (story.ts filmSentence). */
  condition?: string;
  prompt: string;
  warmth: "neutral" | "cool" | "warm" | "ambient";
  rig: {
    key: { type: string; azimuth_deg: number; elevation_deg: number; kelvin: number; softness: number };
    fill_ratio: number;
    ambient_kelvin: number;
    practicals?: string[];
  };
}

export function selectLighting(scene: SceneSpec["scene"]): LightingPreset {
  const presets = lightingPresets.presets as Record<string, Omit<LightingPreset, "id">>;
  const def = lightingPresets.default_preset as { preset: string | null; except_times?: string[] } | null;
  const forced = def?.preset;
  if (forced && !def?.except_times?.includes(scene.time)) return { id: forced, ...presets[forced] };
  for (const row of lightingPresets.select) {
    const venueOk = row.venue === "*" || row.venue === scene.venue || (Array.isArray(row.venue) && row.venue.includes(scene.venue));
    if (row.setting === scene.setting && venueOk && row.time.includes(scene.time)) {
      const p = (lightingPresets.presets as Record<string, Omit<LightingPreset, "id">>)[row.preset];
      return { id: row.preset, ...p };
    }
  }
  const fallback = "home-window-daylight";
  return { id: fallback, ...(lightingPresets.presets as Record<string, Omit<LightingPreset, "id">>)[fallback] };
}

export function skuLightSentence(sku: SkuInfo, glass: boolean, warmth: LightingPreset["warmth"]): string {
  const transparent = lightingPresets.sku_light.transparent.packages.includes(sku.package);
  if (!transparent) return lightingPresets.sku_light.opaque.prompt;
  const drinks = glass ? "the Coca-Cola bottle and the bell-shaped Coca-Cola glass" : "the Coca-Cola bottle";
  return (lightingPresets.sku_light.transparent.prompt_by_warmth as Record<string, string>)[warmth].replace("{drinks}", drinks);
}

// ---------------------------------------------------------------------------
// SKU size, venue and glass rules
// ---------------------------------------------------------------------------

export const LARGE_SKU_ML = glassRules.large_sku.sku_volume_ml_at_least;

export function isLargeSku(sku: SkuInfo): boolean {
  return sku.volumeMl >= LARGE_SKU_ML;
}

export type GlassRule = "never" | "required" | "optional";

export function glassRule(sku: SkuInfo, venue: SceneSpec["scene"]["venue"]): GlassRule {
  if (venue === "on-the-go") return "never";
  if (isLargeSku(sku)) return "required";
  return "optional";
}

export function venueAllowed(sku: SkuInfo, venue: SceneSpec["scene"]["venue"]): boolean {
  return !isLargeSku(sku) || (glassRules.large_sku.allowed_venues as string[]).includes(venue);
}

function stylingMatchText(text: string): string {
  return ` ${text.toLowerCase().replace(/[^a-z0-9&']+/g, " ")} `;
}

/** The food-styling rules (rules/food-styling.json) of every dish named in the texts, grouped per dish; empty when none match. */
export function foodStylingRules(texts: Array<string | undefined>): Array<{ label: string; rules: string[] }> {
  const haystack = stylingMatchText(texts.filter(Boolean).join(" \n "));
  return foodStyling.dishes
    .filter((d) => d.match.some((m) => haystack.includes(stylingMatchText(m))))
    .map((d) => ({ label: d.label, rules: d.rules }));
}
