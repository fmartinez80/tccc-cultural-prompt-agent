// Intake answers → SceneSpec. Shared by the browser (to show rule effects as
// the operator goes) and the server (to compose and write the story).

import { SKU_CATALOG, seatLikeSurface, withoutRoundTable } from "./registry";
import { DEFAULT_POSE } from "./poses";
import { glassRule, timeFromOccasion } from "./rules";
import { venueType } from "./venues";
import type { AccentChoice, IntakeInput, Occasion, PlatingChoice, PrepChoice, SceneSpec, SidesChoice, SkuInfo, Surface } from "./types";

/** Occasions that get an everyday dinner-size napkin; the rest get a luncheon napkin. */
const DINNER_NAPKIN_OCCASIONS: Occasion[] = ["dinner", "late-night", "celebration"];

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
    venueType?: string;
    environmentNote?: string;
    /** People sit at the table (two people only, for now). */
    seated?: boolean;
    pose?: string;
  };
  glass?: boolean;
  camera?: { look: string; angle: string };
  accent?: AccentChoice | null;
  /** On the go only: the operator chose a plain paper napkin as the third item instead of an accent. */
  napkin?: boolean;
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

/** Venues where a diner's meal comes on one tray (Fernando, 2026-10-17). */
const TRAY_VENUES = new Set(["food-court", "fast-casual"]);

/**
 * A tray holds a diner's dishes; it is never one dish's own vessel (Fernando, 2026-10-17: one tray
 * per item, or an empty tray beside the bowl). An individual item served "on a tray" goes in a
 * paper-lined basket, and the tray becomes the diner's carrier. A shared tray of food stays.
 */
function offTray<T extends { vessel: string; service: string }>(v: T): T {
  return v.vessel === "tray" && v.service !== "shared" ? { ...v, vessel: "basket" } : v;
}

export function buildSpec(brief: IntakeInput & { countryLabel?: string }, sel: Selections): SceneSpec {
  const sku = skuById(brief.skuId);
  if (!sku) throw new Error(`unknown SKU ${brief.skuId}`);
  if (!sel.prep || !sel.plating || !sel.sides || !sel.scene || !sel.camera) throw new Error("intake is not complete");
  const time = sel.scene.time ?? timeFromOccasion(brief.occasion) ?? "midday";
  const venue = sel.scene.venue;
  const shared = sel.plating.service === "shared";
  const place = venueType(venue, sel.scene.venueType);
  const plating = offTray(sel.plating);
  // One diner only for now; a second diner's tray at the corner isn't laid out yet.
  const tray = sel.scene.party === "1" && !shared && (TRAY_VENUES.has(place?.id ?? "") || sel.plating.vessel === "tray" || sel.sides.accompaniments.some((a) => a.vessel === "tray" && a.service !== "shared"));
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
      surface: sel.scene.surface ?? (shared ? undefined : place?.surface) ?? defaultSurface(venue, sel.scene.party, shared),
      // A seat, step or the ground chosen before the table rule falls back to the surface's own description.
      surfaceText: (seatLikeSurface(sel.scene.surfaceText) ? undefined : sel.scene.surfaceText && withoutRoundTable(sel.scene.surfaceText)) ?? place?.surfaceText,
      venueType: place?.id,
      environmentNote: sel.scene.environmentNote?.trim() || undefined,
      ...(sel.scene.seated && sel.scene.party === "2" ? { seated: true, pose: sel.scene.pose ?? DEFAULT_POSE } : {}),
      ...(tray ? { tray: true } : {}),
    },
    camera: sel.camera,
    sku: { ...sku, glass: resolveGlass(sku, venue, sel.glass) },
    entree: { name: brief.heroDish, prep: sel.prep, plating },
    accompaniments: sel.sides.accompaniments.map((a) => offTray(shared && a.role !== "condiment" && a.role !== "sauce" && a.role !== "garnish" ? { ...a, service: "shared" as const } : a)),
    napkinSet:
      venue === "on-the-go"
        ? sel.napkin
          ? { napkinShape: "rect", material: "paper", size: "luncheon", cutlery: [], targets: "MAIN" }
          : null
        : {
            napkinShape: "rect",
            material: venue === "restaurant" ? "polyester" : "cotton",
            size: DINNER_NAPKIN_OCCASIONS.includes(brief.occasion) ? "dinner" : "luncheon",
            // Older saved sessions have no cutlery answer; they keep the Western default.
            cutlery: sel.sides.cutlery ?? ["fork", "knife"],
            targets: "MAIN",
          },
    accent: sel.accent ?? null,
  };
}
