// Rule data files live in /rules so they can change without code changes.
import cameraOptions from "../../rules/camera-options.json";
import lightingPresets from "../../rules/lighting-presets.json";
import glassRules from "../../rules/glass-rules.json";
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

export const LOOKS: LookOption[] = cameraOptions.look.options as LookOption[];
export const ANGLES: AngleOption[] = cameraOptions.angle.options as AngleOption[];
export const DEFAULT_LOOK = cameraOptions.look.default;
export const DEFAULT_ANGLE = cameraOptions.angle.default;
/** Field-of-view factor for the proxy sent to the image model (see camera-options.json). */
export const MODEL_FRAMING_WIDEN: number = cameraOptions.model_framing.widen;

export function lookById(id: string): LookOption {
  return LOOKS.find((l) => l.id === id) ?? LOOKS[0];
}
export function angleById(id: string): AngleOption {
  return ANGLES.find((a) => a.id === id) ?? ANGLES[0];
}

/** Placeholder prompt text ("[CLOSE_HERO_PROMPT]") is replaced by a sentence built from the hidden values. */
export function lookSentence(look: LookOption, drinks: string): string {
  if (!look.prompt.startsWith("[")) return look.prompt;
  const ap = look.hidden.aperture === "TBD" ? "" : ` at ${look.hidden.aperture}`;
  return `Shot with a ${look.hidden.focal_length_mm}mm lens${ap}, with the main dish and ${drinks} in sharp focus.`;
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
  const forced = (lightingPresets.default_preset as { preset: string | null } | null)?.preset;
  if (forced) return { id: forced, ...presets[forced] };
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
