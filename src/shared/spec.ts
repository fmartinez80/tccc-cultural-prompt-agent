// Intake answers → SceneSpec. Shared by the browser (to show rule effects as
// the operator goes) and the server (to compose and write the story).

import { SKU_CATALOG } from "./registry";
import { glassRule, timeFromOccasion } from "./rules";
import type { AccentChoice, IntakeInput, PlatingChoice, PrepChoice, SceneSpec, SidesChoice, SkuInfo, Surface } from "./types";

export interface Selections {
  prep?: PrepChoice;
  plating?: PlatingChoice;
  sides?: SidesChoice;
  scene?: {
    setting: SceneSpec["scene"]["setting"];
    venue: SceneSpec["scene"]["venue"];
    party: SceneSpec["scene"]["party"];
    time?: SceneSpec["scene"]["time"];
    surface?: Surface;
    surfaceText?: string;
  };
  glass?: boolean;
  camera?: { look: string; angle: string };
  accent?: AccentChoice | null;
}

export function skuById(id: string): SkuInfo | undefined {
  return SKU_CATALOG.find((s) => s.id === id);
}

export function defaultSurface(venue: SceneSpec["scene"]["venue"], party: SceneSpec["scene"]["party"], shared = false): Surface {
  if (venue === "on-the-go") return "picnic-table";
  if (shared || party === "group" || party === "family") return "long-table";
  return "table-4top";
}

/** Resolve the glass answer against the SKU/venue rules. */
export function resolveGlass(sku: SkuInfo, venue: SceneSpec["scene"]["venue"], answer: boolean | undefined): boolean {
  const rule = glassRule(sku, venue);
  if (rule === "never") return false;
  if (rule === "required") return true;
  return answer ?? false;
}

export function buildSpec(brief: IntakeInput & { countryLabel?: string }, sel: Selections): SceneSpec {
  const sku = skuById(brief.skuId);
  if (!sku) throw new Error(`unknown SKU ${brief.skuId}`);
  if (!sel.prep || !sel.plating || !sel.sides || !sel.scene || !sel.camera) throw new Error("intake is not complete");
  const time = sel.scene.time ?? timeFromOccasion(brief.occasion) ?? "midday";
  const venue = sel.scene.venue;
  const shared = sel.plating.service === "shared";
  return {
    specVersion: "0.2",
    operatingUnit: brief.operatingUnit,
    country: brief.country,
    countryLabel: brief.countryLabel ?? brief.country,
    region: brief.region ?? "",
    occasion: brief.occasion,
    heroDish: brief.heroDish,
    scene: {
      setting: sel.scene.setting,
      venue,
      party: sel.scene.party,
      time,
      surface: sel.scene.surface ?? defaultSurface(venue, sel.scene.party, shared),
      surfaceText: sel.scene.surfaceText,
    },
    camera: sel.camera,
    sku: { ...sku, glass: resolveGlass(sku, venue, sel.glass) },
    entree: { name: brief.heroDish, prep: sel.prep, plating: sel.plating },
    accompaniments: sel.sides.accompaniments.map((a) => (shared && a.role !== "condiment" && a.role !== "sauce" && a.role !== "garnish" ? { ...a, service: "shared" as const } : a)),
    napkinSet: venue === "on-the-go" ? null : { napkinShape: "rect", cutlery: ["fork", "knife"], targets: "MAIN" },
    accent: sel.accent ?? null,
  };
}
