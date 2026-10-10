// Layout solver: places the items for one place setting, fits the camera,
// checks the hard rules and returns up to 3 distinct compliant options.
//
// Placement follows knowledge-base/00-methods/tableware-composition-reference.md
// §3-§7 and coca-cola-guidelines.md §4; composition rules follow
// docs/tablescape/PLAN.md §5.

import { clipConvex, makeCameraParams, overlapArea, polyArea, Projector, rectPoly, screenBox, silhouette, type Poly, type ScreenBox } from "./camera";
import { bottleClearance, footprintRadius, SURFACES } from "./registry";
import { angleById, depthById, lookById } from "./rules";
import layoutPreferences from "../../rules/layout-preferences.json";
import { isMultiServe, sceneItems, type ItemSpec } from "./scene";
import type { Blueprint, CameraParams, Primitive, RuleResult, SceneSpec } from "./types";

export interface Placed {
  item: ItemSpec;
  x: number;
  d: number;
  yaw: number;
}

export type Archetype =
  | "triangle-loop"
  | "crescent-arc"
  | "diagonal-stagger"
  | "counterweight"
  | "feast-spread"
  | "hero-lockup"
  | "across-the-table"
  | "across-offset"
  | "corner";

export const ARCHETYPE_INFO: Record<Archetype, { name: string; idea: string }> = {
  "triangle-loop": { name: "Triangle Loop", idea: "a depth triangle from the entree to the drink and back to a far-left accent" },
  "crescent-arc": { name: "Crescent Arc", idea: "supporting dishes wrap in an arc behind the entree" },
  "diagonal-stagger": { name: "Diagonal Stagger", idea: "supporting dishes step back on a diagonal that leads the eye to the drink" },
  counterweight: { name: "Counterweight", idea: "supporting dishes grouped on the left to balance the drink on the right" },
  "feast-spread": { name: "Feast Spread", idea: "the shared centerpiece sits back-left, with shared sides around it and one plated setting in front" },
  "hero-lockup": { name: "Hero Lockup", idea: "the dish front and center with the drink tucked in tight at its right" },
  "across-the-table": { name: "Across the Table", idea: "a second place setting directly opposite the hero, at the far side of the table" },
  "across-offset": { name: "Across, Offset", idea: "a second place setting opposite the hero but shifted aside, so the hero's drink doesn't hide it" },
  corner: { name: "Corner Seating", idea: "the two diners meet at a corner, the second setting turned at a right angle to the hero's" },
};

export interface LayoutOption {
  archetype: Archetype;
  blueprint: Blueprint;
}

export interface SolveResult {
  options: LayoutOption[];
  infeasible: Array<{ archetype: Archetype; reason: string }>;
  /** The spec the options were built from: the accent is dropped when no layout had room for it. */
  spec: SceneSpec;
  /** Plain-language notes about what the solver had to change. */
  notes: string[];
}

// ---------------------------------------------------------------------------
// Geometry helpers
// ---------------------------------------------------------------------------

function radiusOf(p: Placed): number {
  return footprintRadius(p.item.def);
}

function edgeGap(a: Placed, b: Placed): number {
  return Math.hypot(a.x - b.x, a.d - b.d) - radiusOf(a) - radiusOf(b);
}

/** Minimum edge-to-edge spacing between two items (tableware reference §7). */
function minGap(a: Placed, b: Placed, multi: { sku: string; clearance: number } | null): number {
  const k = [a.item.kind, b.item.kind].sort().join("+");
  if (multi && (a.item.label === multi.sku || b.item.label === multi.sku)) {
    // Clearance radius is measured from the bottle's center.
    return Math.max(0.015, multi.clearance - footprintRadius((a.item.label === multi.sku ? a : b).item.def));
  }
  if (k === "side+side" || k === "shared-side+shared-side" || k === "shared-side+side") return 0.05;
  if (a.item.kind === "bread" || b.item.kind === "bread") return 0.05;
  if (k === "condiment+condiment" || k === "accent+condiment") return 0.01;
  if (k === "main+napkin-set") return 0.03;
  return 0.015;
}

/** Minimum gap between the entree's front edge and the bottom of the frame. */
const MAIN_BOTTOM_MARGIN = 0.02;

/** Table left visible behind the rearmost item. */
const REAR_MARGIN = 0.08;

function onTable(p: Placed, W: number, D: number): boolean {
  const r = radiusOf(p);
  return p.x - r >= -W / 2 + 0.02 && p.x + r <= W / 2 - 0.02 && p.d - r >= 0.02 && p.d + r <= D - 0.02;
}

// ---------------------------------------------------------------------------
// Placement per archetype
// ---------------------------------------------------------------------------

interface Anchor {
  x: number;
  d: number;
}

function polar(c: Anchor, angleDeg: number, dist: number): Anchor {
  const a = (angleDeg * Math.PI) / 180;
  return { x: c.x + dist * Math.cos(a), d: c.d + dist * Math.sin(a) };
}

interface Variant {
  condAngle: number; // where the condiment cluster sits around the plate
  accentAngle: number; // where the injected accent sits, always within 1-3 in of the plate
  sideAngle?: number; // triangle-loop: where the first side dish sits
  lockAngle?: number; // hero-lockup: where the drink sits around the plate (0 = level with its center, right)
  /** Second place setting (party "2"): across archetypes shift the partner's plate laterally by
   * this much; the corner archetype reads it as extra clearance between the two settings. */
  partnerOffsetX?: number;
}

const VARIANTS: Record<Archetype, Variant[]> = {
  // Team reference: side back-left, condiment level with the plate on its left, drink back-right.
  // Nothing sits in front of the hero dish (H3), so condiments and accents stay at 180° or behind.
  "triangle-loop": [
    { condAngle: 178, accentAngle: 155, sideAngle: 125 },
    { condAngle: 175, accentAngle: 150, sideAngle: 118 },
    { condAngle: 180, accentAngle: 160, sideAngle: 132 },
    // Crowded left (two or more sides): the accent tucks in straight behind the plate instead.
    { condAngle: 180, accentAngle: 98, sideAngle: 145 },
  ],
  "crescent-arc": [
    { condAngle: 92, accentAngle: 150 },
    { condAngle: 120, accentAngle: 165 },
    { condAngle: 140, accentAngle: 175 },
  ],
  "diagonal-stagger": [
    { condAngle: 125, accentAngle: 160 },
    { condAngle: 145, accentAngle: 175 },
    { condAngle: 100, accentAngle: 150 },
  ],
  counterweight: [
    { condAngle: 135, accentAngle: 170 },
    { condAngle: 155, accentAngle: 180 },
    { condAngle: 115, accentAngle: 160 },
  ],
  "feast-spread": [
    { condAngle: 100, accentAngle: 175 },
    { condAngle: 130, accentAngle: 178 },
    { condAngle: 85, accentAngle: 165 },
  ],
  // Dish and drink only: the drink just off the plate's right edge, a touch behind its center.
  "hero-lockup": [
    { condAngle: 150, accentAngle: 170, lockAngle: 28 },
    { condAngle: 150, accentAngle: 170, lockAngle: 20 },
    { condAngle: 150, accentAngle: 170, lockAngle: 38 },
  ],
  // Second place setting, directly opposite the hero at the table's far side.
  "across-the-table": [
    { condAngle: 165, accentAngle: 150, partnerOffsetX: 0 },
    { condAngle: 165, accentAngle: 150, partnerOffsetX: -0.06 },
    { condAngle: 165, accentAngle: 150, partnerOffsetX: 0.06 },
  ],
  // Second place setting, opposite the hero but shifted aside a plate-width so the hero's own drink can't hide it.
  "across-offset": [
    { condAngle: 165, accentAngle: 150, partnerOffsetX: -0.24 },
    { condAngle: 165, accentAngle: 150, partnerOffsetX: -0.28 },
    { condAngle: 165, accentAngle: 150, partnerOffsetX: -0.32 },
  ],
  // Second place setting at a right angle, meeting the hero at the table's front-left corner.
  corner: [
    { condAngle: 165, accentAngle: 150, partnerOffsetX: 0.02 },
    { condAngle: 165, accentAngle: 150, partnerOffsetX: 0.04 },
    { condAngle: 165, accentAngle: 150, partnerOffsetX: 0.06 },
  ],
};

function preferredPositions(items: ItemSpec[], spec: SceneSpec, archetype: Archetype, v: Variant): Map<string, Anchor> {
  const pos = new Map<string, Anchor>();
  const D = SURFACES[spec.scene.surface].depth;
  const main = items.find((i) => i.kind === "main")!;
  const R = footprintRadius(main.def);
  const P: Anchor = { x: 0, d: R + 0.05 };
  pos.set("MAIN", P);

  const sku = items.find((i) => i.kind === "sku")!;
  const rs = footprintRadius(sku.def);
  const glass = items.find((i) => i.kind === "glass");
  const multi = isMultiServe(spec);

  const bottleFirst = layoutPreferences.drink_order.value === "bottle-then-glass";
  if (glass && bottleFirst) {
    // House rule (layout-preferences.json drink_order): bottle at the top right of the plate,
    // glass to its right and slightly forward, nearer the diner.
    const rg = footprintRadius(glass.def);
    const clear = multi ? Math.max(bottleClearance(spec.sku), rs + 0.02) : rs;
    const s = polar(P, 32, R + 0.03 + clear);
    pos.set("SKU", s);
    pos.set("GLASS", { x: s.x + rs + 0.025 + rg, d: s.d - 0.03 });
  } else if (glass) {
    const rg = footprintRadius(glass.def);
    // Glass at the top right of the plate.
    const g = polar(P, 52, R + 0.03 + rg);
    pos.set("GLASS", g);
    if (multi) {
      // Multi-serve bottle in the midground, beside the hero zone, outside its clearance radius.
      const c = bottleClearance(spec.sku);
      pos.set("SKU", { x: g.x + rg + Math.max(c, rs + 0.02) + 0.005, d: g.d + 0.07 });
    } else {
      pos.set("SKU", { x: g.x + rg + 0.025 + rs, d: g.d + 0.035 });
    }
  } else {
    // Single-serve drink at the top right of the plate.
    pos.set("SKU", polar(P, 50, R + 0.03 + rs));
  }

  const napkin = items.find((i) => i.kind === "napkin-set");
  if (napkin) {
    // Napkin + utensils to the right of the plate, 3-5 cm from it (tableware reference §3, §7).
    const w = (napkin.def.width ?? 0.1) / 2;
    const nx = P.x + R + 0.04 + w;
    pos.set(napkin.label, { x: nx, d: Math.max(0.12, P.d - 0.02) });
    if (!glass) {
      // Team reference: a single-serve drink sits in the gap between the plate's right
      // edge and the napkin set, evenly spaced from both, set back behind the plate's center.
      pos.set("SKU", { x: (P.x + R + (nx - w)) / 2 + 0.01, d: P.d + Math.max(0.1, rs + 0.07) });
    }
  }

  const sides = items.filter((i) => i.kind === "side" || i.kind === "shared-side");
  const conds = items.filter((i) => i.kind === "condiment");
  const accent = items.find((i) => i.kind === "accent");
  const breads = items.filter((i) => i.kind === "bread");
  const sharedHero = items.find((i) => i.kind === "shared-hero");
  const r = (i: ItemSpec) => footprintRadius(i.def);

  // Bread: right third, midground/background (tableware reference §4), beyond the rightmost drink.
  const skuPos = pos.get("SKU")!;
  const glassPos = pos.get("GLASS");
  const drinkRight = glass && glassPos && glassPos.x > skuPos.x ? glassPos.x + footprintRadius(glass.def) : skuPos.x + rs;
  breads.forEach((b, k) => pos.set(b.label, { x: drinkRight + 0.07 + r(b) + k * 0.05, d: skuPos.d + 0.1 + k * 0.08 }));

  // Condiments: a tight arc around the dish each one goes with, all ~1.5 in off its rim (H8 wants
  // 1-3 in), centered on `angle` and fanning out both ways. A straight row ran away from the rim, so
  // from the second or third condiment on everything sat too far from its dish.
  const condCluster = (angle: number) => {
    const groups = new Map<string, ItemSpec[]>();
    for (const c of conds) {
      const key = c.pairsWith && c.pairsWith !== "MAIN" && pos.has(c.pairsWith) ? c.pairsWith : "MAIN";
      groups.set(key, [...(groups.get(key) ?? []), c]);
    }
    for (const [partner, list] of groups) {
      const partnerItem = partner === "MAIN" ? main : items.find((i) => i.label === partner);
      const anchor = partner === "MAIN" ? P : pos.get(partner)!;
      const rim = partner === "MAIN" || !partnerItem ? R : r(partnerItem);
      list.forEach((c, k) => {
        const dist = rim + 0.04 + r(c);
        const step = (2 * Math.asin(Math.min(1, (2 * r(c) + 0.02) / (2 * dist))) * 180) / Math.PI;
        const offsets = list.map((_, k) => (k === 0 ? 0 : Math.ceil(k / 2) * step * (k % 2 ? -1 : 1)));
        // Around the entree the fan never swings past 180° into the space in front of it (H3):
        // the whole cluster turns back instead.
        const back = partner === "MAIN" ? Math.max(0, angle + Math.max(...offsets) - 180) : 0;
        pos.set(c.label, polar(anchor, angle + offsets[k]! - back, dist));
      });
    }
  };

  switch (archetype) {
    case "triangle-loop": {
      // The team's preferred reference: a depth triangle around the plate with the
      // side dish back-left, the condiment level on its left and the drink back-right.
      const angles = [v.sideAngle ?? 125, v.sideAngle && v.sideAngle > 140 ? 65 : 95, 150, 75];
      sides.forEach((s, k) => pos.set(s.label, polar(P, angles[k % 4], R + 0.035 + r(s) + Math.floor(k / 4) * 0.12)));
      condCluster(v.condAngle);
      break;
    }
    case "crescent-arc": {
      const arc = sides;
      const n = arc.length;
      arc.forEach((s, k) => {
        const a = n === 1 ? 108 : 165 - (k * 70) / (n - 1);
        pos.set(s.label, polar(P, a, R + 0.07 + r(s)));
      });
      condCluster(v.condAngle);
      break;
    }
    case "diagonal-stagger": {
      // Steps back along a diagonal from behind the plate's left shoulder.
      let cur: Anchor = { x: P.x - R * 0.4, d: P.d + R + 0.06 };
      sides.forEach((s) => {
        const p = { x: cur.x - r(s) - 0.03, d: cur.d + r(s) + 0.02 };
        pos.set(s.label, p);
        cur = { x: p.x + r(s) + 0.06, d: p.d + r(s) + 0.03 };
      });
      condCluster(v.condAngle);
      break;
    }
    case "counterweight": {
      const left = P.x - R - 0.05;
      sides.forEach((s, k) => {
        const col = Math.floor(k / 2);
        const row = k % 2;
        pos.set(s.label, { x: left - r(s) - col * 0.2, d: P.d + 0.03 + row * 0.2 });
      });
      condCluster(v.condAngle);
      break;
    }
    case "hero-lockup": {
      // The house tight lockup: the drink sits 1.5 cm off the plate's right edge, slightly
      // behind its center, and the napkin set (when there is one) moves to the left.
      const a = v.lockAngle ?? 28;
      if (glass) {
        const rg = footprintRadius(glass.def);
        const clear = multi ? Math.max(bottleClearance(spec.sku), rs + 0.02) : rs;
        const s = polar(P, a, R + 0.015 + clear);
        pos.set("SKU", s);
        pos.set("GLASS", { x: s.x + rs + 0.02 + rg, d: s.d - 0.03 });
      } else {
        pos.set("SKU", polar(P, a, R + 0.015 + rs));
      }
      if (napkin) pos.set(napkin.label, { x: P.x - R - 0.04 - (napkin.def.width ?? 0.1) / 2, d: Math.max(0.12, P.d - 0.02) });
      condCluster(v.condAngle);
      break;
    }
    case "feast-spread": {
      if (sharedHero) {
        const h = sharedHero.def.depth !== undefined ? sharedHero.def.depth / 2 : r(sharedHero);
        pos.set(sharedHero.label, { x: P.x - 0.12 - r(sharedHero) * 0.4, d: P.d + R + 0.06 + h });
      }
      const angles = [165, 140, 60, 25];
      sides.forEach((s, k) => pos.set(s.label, polar(P, angles[k % 4], R + 0.2 + r(s) + Math.floor(k / 4) * 0.15)));
      condCluster(v.condAngle);
      break;
    }
    case "across-the-table":
    case "across-offset":
    case "corner": {
      // Two place settings: shared dishes fill the open zone beside/between the settings, never in front of MAIN (H3).
      const angles = [160, 180, 140, 120];
      sides.forEach((s, k) => pos.set(s.label, polar(P, angles[k % 4], R + 0.12 + r(s) + Math.floor(k / 4) * 0.12)));
      condCluster(v.condAngle);
      break;
    }
  }
  // The injected accent stays within 1-3 in of the entree (Part B condiment proximity).
  if (accent) pos.set(accent.label, polar(P, v.accentAngle, R + 0.045 + r(accent)));

  // Second place setting (party "2"): across the table, offset so the hero's drink can't hide it,
  // or around the corner. All second-setting items read the request's "no hands or people" exclusion
  // the same way the hero's own setting does — this only ever places tableware.
  const main2 = items.find((i) => i.kind === "partner-main");
  if (main2) {
    const r2 = footprintRadius(main2.def);
    const napkin2 = items.find((i) => i.kind === "partner-napkin");
    const sku2 = items.find((i) => i.kind === "partner-sku");
    const glass2 = items.find((i) => i.kind === "partner-glass");
    const offset = v.partnerOffsetX ?? 0;
    const isCorner = archetype === "corner";
    const P2: Anchor = isCorner ? { x: P.x - R - 0.03 - offset - r2, d: P.d - 0.02 } : { x: P.x + offset, d: D - R - r2 - 0.05 };
    pos.set(main2.label, P2);

    if (napkin2) {
      // The partner's napkin set sits to their own right, which reads as camera-left of MAIN_2
      // across the table, or just behind MAIN_2 (their "right") at the corner.
      const w2 = (napkin2.def.width ?? 0.1) / 2;
      pos.set(napkin2.label, isCorner ? { x: P2.x, d: P2.d + r2 + 0.04 + w2 } : { x: P2.x - r2 - 0.04 - w2, d: P2.d });
    }

    if (sku2 && glass2) {
      const rd2 = footprintRadius(sku2.def);
      const rg2 = footprintRadius(glass2.def);
      if (isCorner) {
        pos.set(sku2.label, { x: P2.x, d: P2.d - r2 - 0.03 - rd2 });
        pos.set(glass2.label, { x: P2.x, d: P2.d - r2 - 0.03 - 2 * rd2 - 0.02 - rg2 });
      } else {
        pos.set(sku2.label, { x: P2.x - r2 - 0.03 - rd2, d: P2.d - 0.04 });
        pos.set(glass2.label, { x: P2.x - r2 - 0.03 - 2 * rd2 - 0.025 - rg2, d: P2.d - 0.04 });
      }
    } else if (sku2) {
      const rd2 = footprintRadius(sku2.def);
      pos.set(sku2.label, isCorner ? { x: P2.x, d: P2.d - r2 - 0.03 - rd2 } : { x: P2.x - r2 - 0.03 - rd2, d: P2.d - 0.04 });
    } else if (glass2) {
      const rg2 = footprintRadius(glass2.def);
      pos.set(glass2.label, isCorner ? { x: P2.x, d: P2.d - r2 - 0.03 - rg2 } : { x: P2.x - r2 - 0.03 - rg2, d: P2.d - 0.04 });
    }

    // Family-style: the shared centerpiece sits in the open zone between the two settings
    // (the middle band across the table, or the far-left zone past the corner seat).
    if (sharedHero) {
      pos.set(
        sharedHero.label,
        isCorner ? { x: P2.x - r2 - 0.1 - r(sharedHero), d: (P.d + D - R) / 2 } : { x: (P.x + P2.x) / 2, d: (P.d + P2.d) / 2 },
      );
    }
  }
  return pos;
}

/** Whether `q` fits on the table without crowding any of `others`. */
function fitsAt(q: Placed, others: Placed[], W: number, D: number, multi: { sku: string; clearance: number } | null): boolean {
  return onTable(q, W, D) && others.every((o) => o === q || o.item.label === q.item.label || edgeGap(q, o) >= minGap(q, o, multi) - 1e-9);
}

/**
 * Where an item may go instead of its preferred spot, as rings of positions
 * around the entree, limited to the places its role allows: the drink stays
 * back-right, supporting dishes beside or behind the entree, condiments and
 * accents within 1-3 in of it.
 */
function candidateSpots(p: Placed, main: Placed, placed: Placed[] = []): Anchor[] {
  const k = p.item.kind;
  if (k === "partner-main" || k === "partner-napkin" || k === "partner-sku" || k === "partner-glass") {
    // The second setting lives far from the hero: search small moves around its own current
    // spot (its "row") rather than rings around MAIN, which would pull it toward the hero.
    const r = radiusOf(p);
    const out: Anchor[] = [];
    for (const g of [0.02, 0.04, 0.06, 0.08]) for (const a of range(0, 345, 30)) out.push(polar({ x: p.x, d: p.d }, a, r + g));
    return out;
  }
  // A condiment that goes with a side dish searches around that dish, not the entree.
  const partner = (k === "condiment" || k === "accent") && p.item.pairsWith ? placed.find((q) => q.item.label === p.item.pairsWith) : undefined;
  const around = partner ?? main;
  const P = { x: around.x, d: around.d };
  const R = radiusOf(around);
  const r = radiusOf(p);
  let angles: number[];
  let gaps: number[];
  if (k === "sku" || k === "glass") {
    angles = range(0, 85, 7.5);
    gaps = range(0.02, 0.26, 0.03);
  } else if (k === "condiment" || k === "accent") {
    // Around the entree: beside or behind it, never in front (H3). Around a side dish: anywhere.
    angles = partner ? range(0, 345, 15) : range(-15, 195, 15);
    gaps = [0.03, 0.045, 0.06, 0.075];
  } else if (k === "napkin-set" || k === "main") {
    return [];
  } else {
    angles = range(-15, 195, 15);
    gaps = range(0.035, 0.32, 0.035);
  }
  const out: Anchor[] = [];
  for (const g of gaps) for (const a of angles) out.push(polar(P, a, R + g + r));
  return out;
}

function range(a: number, b: number, step: number): number[] {
  const out: number[] = [];
  for (let v = a; v <= b + 1e-9; v += step) out.push(+v.toFixed(4));
  return out;
}

/**
 * Moves the items named by failing rules (a condiment hidden behind the
 * entree, a drink behind a heaped platter) to the nearest spot that clears
 * the most failures, keeping the camera. A few rounds, one item at a time.
 */
function repair(placed: Placed[], fit: Fit, spec: SceneSpec, W: number, D: number, multi: { sku: string; clearance: number } | null): void {
  const main = placed.find((p) => p.item.kind === "main")!;
  const proj = new Projector(fit.cam);
  const reproject = (p: Placed) => {
    fit.boxes.set(p.item.label, screenBox(proj, p.item.def, p.x, p.d, p.yaw, 0, p.item.extraHeight));
    fit.sils.set(p.item.label, silhouette(proj, p.item.def, p.x, p.d, p.yaw, p.item.extraHeight));
  };
  // Failing rules first, then how many items each names: moving one of three stray condiments
  // closer still fails H8, but it is progress and must count as an improvement.
  const cost = () => {
    const b = blocking(checkRules(placed, fit, spec));
    return { n: b.length * 100 + b.reduce((s, r) => s + (r.offenders?.length ?? 1), 0), rules: b };
  };
  let current = cost();
  const tried = new Set<string>();
  for (let round = 0; round < 6 && current.n > 0; round++) {
    const targets = [...new Set(current.rules.flatMap((r) => r.offenders ?? []))].filter((l) => !tried.has(l));
    if (!targets.length) return;
    let improved = false;
    for (const label of targets) {
      const p = placed.find((q) => q.item.label === label);
      if (!p) continue;
      const home = { x: p.x, d: p.d };
      let best: { at: Anchor; n: number; moved: number } | null = null;
      for (const at of candidateSpots(p, main, placed)) {
        p.x = at.x;
        p.d = at.d;
        if (!fitsAt(p, placed, W, D, multi)) continue;
        reproject(p);
        const n = cost().n;
        const moved = Math.hypot(at.x - home.x, at.d - home.d);
        if (n < current.n && (!best || n < best.n || (n === best.n && moved < best.moved))) best = { at, n, moved };
      }
      if (best) {
        p.x = best.at.x;
        p.d = best.at.d;
        reproject(p);
        current = cost();
        improved = true;
        break;
      }
      p.x = home.x;
      p.d = home.d;
      reproject(p);
      tried.add(label);
    }
    if (!improved) return;
  }
}

/** Nearest valid position to `want` for item `p`, spiralling outward. */
function settle(p: Placed, want: Anchor, placed: Placed[], W: number, D: number, multi: { sku: string; clearance: number } | null): boolean {
  const ok = (x: number, d: number) => {
    const q = { ...p, x, d };
    if (!onTable(q, W, D)) return false;
    return placed.every((o) => edgeGap(q, o) >= minGap(q, o, multi) - 1e-9);
  };
  if (ok(want.x, want.d)) {
    p.x = want.x;
    p.d = want.d;
    return true;
  }
  for (let rad = 0.01; rad <= 0.35; rad += 0.01) {
    for (let k = 0; k < 24; k++) {
      const a = (k / 24) * Math.PI * 2;
      const x = want.x + rad * Math.cos(a);
      const d = want.d + rad * Math.sin(a);
      if (ok(x, d)) {
        p.x = x;
        p.d = d;
        return true;
      }
    }
  }
  return false;
}

// ---------------------------------------------------------------------------
// Camera fit
// ---------------------------------------------------------------------------

interface Fit {
  cam: CameraParams;
  boxes: Map<string, ScreenBox>;
  sils: Map<string, Poly[]>;
  rearY: number;
}

function heroLabels(placed: Placed[]): string[] {
  return placed.filter((p) => p.item.kind === "main" || p.item.kind === "sku" || p.item.kind === "glass").map((p) => p.item.label);
}

function project(placed: Placed[], cam: CameraParams): { proj: Projector; boxes: Map<string, ScreenBox> } {
  const proj = new Projector(cam);
  const boxes = new Map<string, ScreenBox>();
  for (const p of placed) boxes.set(p.item.label, screenBox(proj, p.item.def, p.x, p.d, p.yaw, 0, p.item.extraHeight));
  return { proj, boxes };
}

function unionBox(boxes: ScreenBox[]): { x0: number; x1: number; y0: number; y1: number } {
  return {
    x0: Math.min(...boxes.map((b) => b.x0)),
    x1: Math.max(...boxes.map((b) => b.x1)),
    y0: Math.min(...boxes.map((b) => b.y0)),
    y1: Math.max(...boxes.map((b) => b.y1)),
  };
}

/** The SKU may dip this share of its own width out of the vertical center third (user, 2026-10-06). */
const SKU_THIRD_DIP = 0.1;

/** How far past the center third's edges a hero drink may reach. */
function thirdSlack(label: string, b: ScreenBox): number {
  return label === "SKU" ? SKU_THIRD_DIP * (b.x1 - b.x0) : 0;
}

/** A drink inside the vertical center third (the SKU allowed its small dip). */
function inThird(label: string, b: ScreenBox): boolean {
  const slack = thirdSlack(label, b);
  return b.x0 >= 1 / 3 - slack - 1e-6 && b.x1 <= 2 / 3 + slack + 1e-6;
}

/** H14: the drinks sit inside the vertical center third and the entree's center does too. */
function inHeroZone(boxes: Map<string, ScreenBox>, heroes: string[]): boolean {
  const mb = boxes.get("MAIN")!;
  const mcx = (mb.x0 + mb.x1) / 2;
  if (mcx < 1 / 3 || mcx > 2 / 3) return false;
  return heroes.every((l) => l === "MAIN" || inThird(l, boxes.get(l)!));
}

function fitCamera(placed: Placed[], D: number, focal: number, pitch: number, targetSpan: number): Fit | null {
  const heroes = heroLabels(placed);
  const heroPlaced = placed.filter((p) => heroes.includes(p.item.label));
  let best: { fit: Fit; score: number } | null = null;
  const xs = heroPlaced.flatMap((p) => [p.x - radiusOf(p), p.x + radiusOf(p)]);
  let tx0 = (Math.min(...xs) + Math.max(...xs)) / 2;

  for (let td = D; td <= D + 0.6; td += 0.05) {
    for (let dist = 0.3; dist <= 8; dist *= 1.04) {
      let tx = tx0;
      let cam = makeCameraParams(focal, pitch, tx, td, dist);
      let { boxes, proj } = project(placed, cam);
      const main = placed.find((p) => p.item.kind === "main")!;
      const perMeter = () => (proj.project(main.x + 1, 0, main.d).x - proj.project(main.x - 1, 0, main.d).x) / 2;
      // Re-center the hero group horizontally (two passes are enough).
      for (let it = 0; it < 2; it++) {
        const u = unionBox(heroes.map((l) => boxes.get(l)!));
        const cx = (u.x0 + u.x1) / 2;
        tx += (cx - 0.5) / perMeter();
        cam = makeCameraParams(focal, pitch, tx, td, dist);
        ({ boxes, proj } = project(placed, cam));
      }
      // A hero group wider than the center third (dish and drink only, framed tight) would push the
      // drink out on the right (H14): slide the group left so the drink stays in and the dish leads.
      const over = Math.max(...heroes.filter((l) => l !== "MAIN").map((l) => boxes.get(l)!.x1 - thirdSlack(l, boxes.get(l)!))) - (2 / 3 - 0.004);
      if (over > 0) {
        tx += over / perMeter();
        cam = makeCameraParams(focal, pitch, tx, td, dist);
        ({ boxes, proj } = project(placed, cam));
      }
      const u = unionBox(heroes.map((l) => boxes.get(l)!));
      const rearY = proj.project(tx, 0, D).y;
      const mainBox = boxes.get("MAIN")!;
      if (rearY > 0.5 + 1e-6) continue;
      if (mainBox.y0 < MAIN_BOTTOM_MARGIN) continue;
      // Every base, and every low item in full, stays in the lower half (H2).
      if (placed.some((p) => (p.item.def.tall ? boxes.get(p.item.label)!.y0 : boxes.get(p.item.label)!.y1) > 0.5)) continue;
      if (u.y1 > 0.97) continue;
      const span = u.x1 - u.x0;
      // Prefer framings that keep the heroes in the center third; widen a little rather than fail H14.
      const score = -Math.abs(span - targetSpan) - 0.3 * (0.5 - rearY) - (inHeroZone(boxes, heroes) ? 0 : 1);
      if (!best || score > best.score) best = { fit: { cam, boxes, sils: new Map(), rearY }, score };
    }
  }
  if (!best) return null;
  // Refine the distance in 0.5% steps around the coarse optimum.
  {
    const c0 = best.fit.cam;
    const tdBest = -c0.target[2];
    const d0 = Math.hypot(c0.position[0] - c0.target[0], c0.position[1] - c0.target[1], c0.position[2] - c0.target[2]);
    for (let f = 0.94; f <= 1.06; f += 0.005) {
      const dist = d0 * f;
      const cam = makeCameraParams(focal, pitch, c0.target[0], tdBest, dist);
      const { boxes, proj } = project(placed, cam);
      const u = unionBox(heroes.map((l) => boxes.get(l)!));
      const rearY = proj.project(c0.target[0], 0, D).y;
      if (rearY > 0.5 + 1e-6 || boxes.get("MAIN")!.y0 < MAIN_BOTTOM_MARGIN || u.y1 > 0.97) continue;
      if (placed.some((p) => (p.item.def.tall ? boxes.get(p.item.label)!.y0 : boxes.get(p.item.label)!.y1) > 0.5)) continue;
      if (!inHeroZone(boxes, heroes)) continue;
      const score = -Math.abs(u.x1 - u.x0 - targetSpan) - 0.3 * (0.5 - rearY);
      if (score > best.score) best = { fit: { cam, boxes, sils: new Map(), rearY }, score };
    }
  }
  const proj = new Projector(best.fit.cam);
  for (const p of placed) best.fit.sils.set(p.item.label, silhouette(proj, p.item.def, p.x, p.d, p.yaw, p.item.extraHeight));
  return best.fit;
}

// ---------------------------------------------------------------------------
// Rules
// ---------------------------------------------------------------------------

/** Share of `back`'s silhouette covered by `front`'s silhouette. */
function occludedFraction(front: Poly[], back: Poly[]): number {
  const a = back.reduce((s, p) => s + polyArea(p), 0);
  return a <= 0 ? 0 : Math.min(1, overlapArea(front, back) / a);
}

/** Most of a drink's silhouette a dish edge may cover when the overlap stays below the logo. */
const DRINK_BASE_OVERLAP_MAX = 0.25;
/** The bottom band of a drink that may be overlapped: the logo box starts at 35% of its height. */
const DRINK_BASE_BAND = 0.3;

/** Share of `back` covered by `front` above the drink's bottom band. */
function aboveBaseFraction(front: Poly[], back: Poly[], b: ScreenBox): number {
  const a = back.reduce((s, p) => s + polyArea(p), 0);
  if (a <= 0) return 0;
  const band = rectPoly({ x0: b.x0 - 1, x1: b.x1 + 1, y0: b.y0 + DRINK_BASE_BAND * (b.y1 - b.y0), y1: b.y1 + 1 });
  const upper = back.map((p) => clipConvex(p, band)).filter((p) => p.length >= 3);
  return Math.min(1, overlapArea(front, upper) / a);
}

export function logoBox(b: ScreenBox): ScreenBox {
  const h = b.y1 - b.y0;
  return { ...b, y0: b.y0 + 0.35 * h, y1: b.y0 + 0.75 * h };
}

/** Which item gives way when two collide: higher moves first. The entree never moves. */
const MOVE_PRIORITY: Record<string, number> = {
  main: -1,
  "shared-hero": 0,
  sku: 1,
  glass: 2,
  "napkin-set": 2,
  side: 3,
  "shared-side": 3,
  bread: 3,
  condiment: 4,
  accent: 5,
  "partner-main": 0.5,
  "partner-napkin": 2.5,
  "partner-sku": 1.5,
  "partner-glass": 2.5,
};

/** Rule failures that reject a layout (preferences don't). */
function blocking(rules: RuleResult[]): RuleResult[] {
  return rules.filter((r) => !r.pass && !r.soft);
}

function checkRules(placed: Placed[], fit: Fit, spec: SceneSpec): RuleResult[] {
  const out: RuleResult[] = [];
  const kindOf = new Map(placed.map((p) => [p.item.label, p.item.kind]));
  const movable = (labels: string[]) =>
    [...new Set(labels)].filter((l) => kindOf.get(l) !== "main").sort((a, b) => MOVE_PRIORITY[kindOf.get(b)!] - MOVE_PRIORITY[kindOf.get(a)!]);
  const B = fit.boxes;
  const get = (l: string) => placed.find((p) => p.item.label === l)!;
  const main = get("MAIN");
  const sku = get("SKU");
  const heroes = heroLabels(placed);

  out.push({ id: "H1", name: "Horizon clamp", pass: fit.rearY <= 0.5 + 1e-6, detail: `table rear edge at y = ${fit.rearY.toFixed(3)} (≤ 0.50)` });

  const low = placed.filter((p) => !p.item.def.tall);
  const lowOver = low.filter((p) => B.get(p.item.label)!.y1 > 0.5);
  const baseOver = placed.filter((p) => B.get(p.item.label)!.y0 > 0.5);
  out.push({
    id: "H2",
    name: "Table zone",
    pass: lowOver.length === 0 && baseOver.length === 0,
    detail: lowOver.length || baseOver.length ? `above the midline: ${[...lowOver, ...baseOver].map((p) => p.item.label).join(", ")}` : "every base and low item sits in the lower half; tall drinks may rise",
  });

  const skuRight = sku.x > main.x && (B.get("SKU")!.x0 + B.get("SKU")!.x1) / 2 > 0.5;
  out.push({ id: "H4", name: "SKU on the diner's right", pass: skuRight, detail: skuRight ? "SKU is right of MAIN, in the right half" : "SKU is not right of MAIN" });

  // H5: nothing covers the logo boxes; H7: no stacking along the line of sight.
  const logoHolders = placed.filter((p) => p.item.kind === "sku" || p.item.kind === "glass");
  const logoHits: string[] = [];
  const logoMove: string[] = [];
  for (const h of logoHolders) {
    const lb = logoBox(B.get(h.item.label)!);
    const lp = [rectPoly(lb)];
    const la = polyArea(lp[0]);
    for (const o of placed) {
      if (o === h) continue;
      if (B.get(o.item.label)!.depth >= lb.depth) continue;
      if (overlapArea(fit.sils.get(o.item.label)!, lp) > 0.02 * la) {
        logoHits.push(`${o.item.label} over ${h.item.label}`);
        logoMove.push(o.item.kind === "main" ? h.item.label : o.item.label);
      }
    }
  }
  out.push({ id: "H5", name: "Trademark clear zone", pass: logoHits.length === 0, detail: logoHits.length ? logoHits.join("; ") : "logo boxes unobstructed", offenders: movable(logoMove) });
  out.push({ id: "H6", name: "SKU head-on", pass: true, detail: "bottle and glass face the camera, upright" });

  const stack: string[] = [];
  const stackMove: string[] = [];
  for (const back of placed) {
    for (const front of placed) {
      if (front === back) continue;
      if (B.get(front.item.label)!.depth >= B.get(back.item.label)!.depth) continue;
      const frac = occludedFraction(fit.sils.get(front.item.label)!, fit.sils.get(back.item.label)!);
      // A dish edge may cover the bottom of the SKU or glass, below its logo (H5 keeps the logo itself clear).
      if ((back.item.kind === "sku" || back.item.kind === "glass") && frac <= DRINK_BASE_OVERLAP_MAX) {
        if (aboveBaseFraction(fit.sils.get(front.item.label)!, fit.sils.get(back.item.label)!, B.get(back.item.label)!) <= 0.01) continue;
      }
      const limit =
        back.item.kind === "sku" || back.item.kind === "glass"
          ? 0.08
          : back.item.kind === "main"
            ? 0.15
            : back.item.kind === "partner-main"
              ? 0.35
              : back.item.kind === "partner-sku" || back.item.kind === "partner-glass"
                ? 0.5
                : 0.3;
      if (frac > limit) {
        stack.push(`${front.item.label} hides ${Math.round(frac * 100)}% of ${back.item.label}`);
        // Move whichever of the two matters less; the entree never moves.
        stackMove.push(MOVE_PRIORITY[front.item.kind] >= MOVE_PRIORITY[back.item.kind] ? front.item.label : back.item.label);
      }
    }
  }
  out.push({ id: "H7", name: "No line-of-sight stacking", pass: stack.length === 0, detail: stack.length ? stack.join("; ") : "no item hidden behind another", offenders: movable(stackMove) });

  const cond = placed.filter((p) => p.item.kind === "condiment" || p.item.kind === "accent");
  const far = cond.filter((c) => {
    const partner = get(c.item.pairsWith ?? "MAIN") ?? main;
    const g = edgeGap(c, partner);
    return g < 0.02 || g > 0.08;
  });
  out.push({
    id: "H8",
    name: "Condiment proximity",
    pass: far.length === 0,
    detail: far.length ? `outside 1-3 in of their dish: ${far.map((c) => c.item.label).join(", ")}` : cond.length ? "condiments within 1-3 in of their dish" : "no condiments",
    offenders: movable(far.map((c) => c.item.label)),
  });
  // Depth hierarchy (coca-cola-guidelines.md §4.2, tableware reference §1): nothing stands in
  // front of the hero dish — supporting dishes, condiments and accents sit beside or behind it.
  // Only the flat napkin set and a second diner's own setting may come forward.
  const forward = placed.filter((p) => ["side", "shared-side", "bread", "shared-hero", "condiment", "accent"].includes(p.item.kind) && p.d < main.d - 0.02);
  out.push({
    id: "H3",
    name: "Depth hierarchy",
    pass: forward.length === 0,
    detail: forward.length ? `in front of the hero dish: ${forward.map((p) => p.item.label).join(", ")}` : "nothing sits in front of the hero dish",
    offenders: movable(forward.map((p) => p.item.label)),
  });
  const n = placed.length;
  // A preference, not a rule: an odd count composes better, but an even table is still a valid layout.
  out.push({ id: "H10", name: "Odd item count (preferred)", pass: n % 2 === 1, soft: true, detail: n % 2 === 1 ? `${n} items` : `${n} items — even; odd is preferred, not required` });

  const phys: string[] = [];
  const multi = isMultiServe(spec) ? { sku: "SKU", clearance: bottleClearance(spec.sku) } : null;
  for (let i = 0; i < placed.length; i++) {
    for (let j = i + 1; j < placed.length; j++) {
      if (edgeGap(placed[i], placed[j]) < minGap(placed[i], placed[j], multi) - 1e-6) phys.push(`${placed[i].item.label}/${placed[j].item.label}`);
    }
  }
  out.push({ id: "H11", name: "Physical spacing", pass: phys.length === 0, detail: phys.length ? `too close: ${phys.join(", ")}` : "no overlaps, spacing rules met, everything on the surface" });

  const mb = B.get("MAIN")!;
  const mainOk = mb.x0 >= 0 && mb.x1 <= 1 && mb.y0 >= 0;
  out.push({ id: "H12", name: "Co-heroes visible", pass: mainOk, detail: mainOk ? "MAIN fully in frame" : "MAIN is cropped" });

  const drinks = heroes.filter((l) => l !== "MAIN");
  const mcx = (mb.x0 + mb.x1) / 2;
  const h14fails = drinks.filter((l) => !inThird(l, B.get(l)!));
  const mainIn = mcx >= 1 / 3 && mcx <= 2 / 3;
  out.push({
    id: "H14",
    name: "Hero zone: vertical center third",
    pass: h14fails.length === 0 && mainIn,
    detail: h14fails.length || !mainIn ? `outside the center third: ${[...h14fails, ...(mainIn ? [] : ["MAIN center"])].join(", ")}` : "MAIN and the drink(s) sit in the vertical center third",
  });

  // Second place setting (party "2"): MAIN_2 may crop at the frame edges (H7's partner-main
  // limit covers how much of it may be hidden), but most of it must still read on screen.
  const main2 = placed.find((p) => p.item.kind === "partner-main");
  if (main2) {
    const b2 = B.get(main2.item.label)!;
    const visX = Math.max(0, Math.min(1, b2.x1) - Math.max(0, b2.x0));
    const visY = Math.max(0, Math.min(1, b2.y1) - Math.max(0, b2.y0));
    const fullArea = Math.max(1e-6, (b2.x1 - b2.x0) * (b2.y1 - b2.y0));
    const frac = (visX * visY) / fullArea;
    out.push({
      id: "H15",
      name: "Second setting visible",
      pass: frac >= 0.6,
      detail: frac >= 0.6 ? `MAIN_2 is ${Math.round(frac * 100)}% inside the frame` : `MAIN_2 is only ${Math.round(frac * 100)}% inside the frame (need ≥60%)`,
      offenders: movable([main2.item.label]),
    });
  }
  return out;
}

// ---------------------------------------------------------------------------
// Scoring
// ---------------------------------------------------------------------------

function area(b: ScreenBox): number {
  return Math.max(0, b.x1 - b.x0) * Math.max(0, b.y1 - b.y0);
}

function score(placed: Placed[], fit: Fit, archetype: Archetype, targetSpan: number): { total: number; terms: Record<string, number> } {
  const B = fit.boxes;
  const heroes = heroLabels(placed);
  const u = unionBox(heroes.map((l) => B.get(l)!));
  const span = u.x1 - u.x0;
  const mb = B.get("MAIN")!;
  const sb = B.get("SKU")!;
  const terms: Record<string, number> = {};
  terms.heroSpan = Math.max(0, 1 - Math.abs(span - targetSpan) / targetSpan);
  terms.phiAnchors = Math.max(0, 1 - (Math.abs((mb.x0 + mb.x1) / 2 - 0.4) + Math.abs((sb.x0 + sb.x1) / 2 - 0.6)) * 2);
  terms.horizonUse = Math.max(0, 1 - (0.5 - fit.rearY) * 4);
  let cx = 0,
    tot = 0;
  for (const p of placed) {
    const b = B.get(p.item.label)!;
    const a = area(b);
    cx += ((b.x0 + b.x1) / 2) * a;
    tot += a;
  }
  terms.balance = Math.max(0, 1 - 2 * Math.abs(cx / tot - 0.5));
  const others = placed.filter((p) => !heroes.includes(p.item.label));
  const staggered = others.filter((p) => {
    return placed.every((o) => o === p || B.get(o.item.label)!.depth >= B.get(p.item.label)!.depth || occludedFraction(fit.sils.get(o.item.label)!, fit.sils.get(p.item.label)!) < 0.15);
  });
  terms.stagger = others.length ? staggered.length / others.length : 1;
  let minG = 0.05;
  for (let i = 0; i < placed.length; i++) for (let j = i + 1; j < placed.length; j++) minG = Math.min(minG, edgeGap(placed[i], placed[j]));
  terms.breathingRoom = Math.max(0, Math.min(1, minG / 0.05));
  const layers = { L1: 0, L2: 0, L3: 0 };
  for (const p of placed) {
    const a = area(B.get(p.item.label)!);
    if (p.item.layer === "Layer_1_Primary_CoHero") layers.L1 += a;
    else if (p.item.layer === "Layer_2_Secondary_Side") layers.L2 += a;
    else layers.L3 += a;
  }
  const all3 = layers.L2 > 0 && layers.L3 > 0;
  const sum = layers.L1 + layers.L2 + layers.L3;
  terms.visualMass = all3 ? Math.max(0, 1 - (Math.abs(layers.L1 / sum - 0.5) + Math.abs(layers.L2 / sum - 0.3) + Math.abs(layers.L3 / sum - 0.2))) : 1;

  const w: Record<string, number> = { heroSpan: 0.2, phiAnchors: 0.15, horizonUse: 0.1, balance: 0.15, stagger: 0.15, breathingRoom: 0.1, visualMass: archetype === "feast-spread" ? 0.02 : 0.15 };
  let total = 0,
    wsum = 0;
  for (const k of Object.keys(w)) {
    total += w[k] * terms[k];
    wsum += w[k];
  }
  return { total: total / wsum, terms };
}

// ---------------------------------------------------------------------------
// Solve
// ---------------------------------------------------------------------------

export function signature(spec: SceneSpec): string {
  const items = sceneItems(spec);
  const l2 = items.filter((i) => i.layer === "Layer_2_Secondary_Side").map((i) => `${i.kind}:${i.proxyKey}`).sort();
  const l3 = items.filter((i) => i.layer === "Layer_3_Tertiary_Accent").map((i) => `${i.kind}:${i.proxyKey}`).sort();
  return [
    spec.camera.look,
    spec.camera.angle,
    `surface:${spec.scene.surface}`,
    `settings:${spec.scene.party === "2" ? 2 : 1}`,
    `sku:${spec.sku.id}`,
    `glass:${spec.sku.glass ? "Y" : "N"}`,
    `main:${spec.entree.plating.vessel}(${spec.entree.prep.massClass})${spec.entree.plating.service === "shared" ? "+shared" : ""}`,
    `L2:${l2.join(",") || "-"}`,
    `L3:${l3.join(",") || "-"}`,
  ].join(" | ");
}

function applicableArchetypes(items: ItemSpec[]): Archetype[] {
  // Two place settings: only the layouts built for a second diner apply, shared-hero or not.
  if (items.some((i) => i.kind.startsWith("partner-"))) return ["across-the-table", "across-offset", "corner"];
  // Dish and drink (with at most a napkin set): nothing to arrange around them, so the tight lockup is the layout.
  if (items.every((i) => i.kind === "main" || i.kind === "sku" || i.kind === "glass" || i.kind === "napkin-set")) return ["hero-lockup"];
  if (items.some((i) => i.kind === "shared-hero")) return ["feast-spread", "crescent-arc", "counterweight"];
  return ["triangle-loop", "crescent-arc", "diagonal-stagger", "counterweight"];
}

function solveArchetype(spec: SceneSpec, items: ItemSpec[], archetype: Archetype): LayoutOption | string {
  let best: LayoutOption | null = null;
  let firstError = "";
  for (const v of VARIANTS[archetype]) {
    const r = solveVariant(spec, items, archetype, v);
    if (typeof r === "string") firstError ||= r;
    else if (!best || r.blueprint.layout_meta.score > best.blueprint.layout_meta.score) best = r;
  }
  return best ?? firstError;
}

function solveVariant(spec: SceneSpec, items: ItemSpec[], archetype: Archetype, v: Variant): LayoutOption | string {
  const surf = SURFACES[spec.scene.surface];
  const W = surf.width,
    D = surf.depth;
  const want = preferredPositions(items, spec, archetype, v);
  const multi = isMultiServe(spec) ? { sku: "SKU", clearance: bottleClearance(spec.sku) } : null;

  // Heroes first, then Layer 2, then Layer 3, so the important items get their preferred spots.
  const order = [...items].sort((a, b) => a.layer.localeCompare(b.layer));
  const placed: Placed[] = [];
  for (const it of order) {
    const p: Placed = { item: it, x: 0, d: 0, yaw: 0 };
    const w = want.get(it.label) ?? { x: 0, d: D / 2 };
    if (!settle(p, w, placed, W, D, multi)) return `no room for ${it.label} on ${spec.scene.surface}`;
    placed.push(p);
  }
  // Second place setting: turn the partner's plate and napkin to face the hero's seat —
  // 180 degrees opposite, 90 degrees at the corner.
  if (items.some((i) => i.kind === "partner-main")) {
    const partnerYaw = archetype === "corner" ? 90 : 180;
    for (const p of placed) if (p.item.kind.startsWith("partner-")) p.yaw = partnerYaw;
  }
  // Push the whole setting toward the back of the table, like a photographer
  // would: the empty front of the table then falls below the frame, and the
  // table's rear edge (the horizon) sits just behind the rearmost item.
  const rear = Math.max(...placed.map((p) => p.d + radiusOf(p)));
  const shift = Math.max(0, D - REAR_MARGIN - rear);
  for (const p of placed) p.d += shift;
  const main = placed.find((p) => p.item.kind === "main")!;

  const look = lookById(spec.camera.look);
  const angle = angleById(spec.camera.angle);
  const hasL2 = items.some((i) => i.layer === "Layer_2_Secondary_Side");
  const spans = layoutPreferences.hero_span_target;
  const targetSpan = hasL2 ? spans.with_sides : spans.meal_and_drink_only;
  const fit = fitCamera(placed, D, look.hidden.focal_length_mm, angle.hidden.pitch_deg, targetSpan);
  if (!fit) return "no camera position keeps the table in the lower half with the entree in frame";

  let rules = checkRules(placed, fit, spec);
  if (blocking(rules).length) {
    // Find the crowded items another home before giving up on this arrangement.
    repair(placed, fit, spec, W, D, multi);
    rules = checkRules(placed, fit, spec);
  }
  const failed = blocking(rules);
  if (failed.length) return failed.map((r) => `${r.id} ${r.name}: ${r.detail}`).join(" · ");

  const { total, terms } = score(placed, fit, archetype, targetSpan);
  const blueprint = toBlueprint(spec, placed, fit, archetype, total, terms, rules, D, W, main);
  return { archetype, blueprint };
}

function toBlueprint(
  spec: SceneSpec,
  placed: Placed[],
  fit: Fit,
  archetype: Archetype,
  total: number,
  terms: Record<string, number>,
  rules: RuleResult[],
  D: number,
  W: number,
  main: Placed,
): Blueprint {
  const proj = new Projector(fit.cam);
  const prims: Primitive[] = placed.map((p) => {
    const b = fit.boxes.get(p.item.label)!;
    const c = proj.project(p.x, (p.item.def.height + p.item.extraHeight) / 2, p.d);
    const def = p.item.def;
    const round = def.radius !== undefined;
    const shape: Primitive["shape_type"] = def.tall ? "cylinder" : round ? "flattened_cylinder" : "bounding_box";
    return {
      id: p.item.label,
      component_name: p.item.name,
      layer: p.item.layer,
      shape_type: shape,
      center_coordinates: { x: +(2 * c.x - 1).toFixed(4), y: +c.y.toFixed(4), z: +((p.d / D) * 0.5).toFixed(4) },
      dimensions: {
        width: +(round ? 2 * def.radius! : def.width!).toFixed(3),
        height: +(def.height + p.item.extraHeight).toFixed(3),
        depth: +(round ? 2 * def.radius! : def.depth!).toFixed(3),
      },
      rotation_euler_deg: { pitch: 0, yaw: p.yaw, roll: 0 },
      ...(p.item.kind === "napkin-set" ? { directional_vector_target_id: "MAIN" } : {}),
      ...(p.item.kind === "partner-napkin" ? { directional_vector_target_id: "MAIN_2" } : {}),
      role: p.item.kind,
      proxy: p.item.proxyKey,
      ...(p.item.pairsWith ? { pairs_with: p.item.pairsWith } : {}),
      ...(p.item.injected ? { injected: true } : {}),
      ...(p.item.footprint ? { footprint: p.item.footprint } : {}),
      ...(p.item.sameAs ? { same_as: p.item.sameAs } : {}),
      world: { x: +p.x.toFixed(4), d: +p.d.toFixed(4), yawDeg: p.yaw, elevation: 0 },
      screen_bbox: { x0: +b.x0.toFixed(4), y0: +b.y0.toFixed(4), x1: +b.x1.toFixed(4), y1: +b.y1.toFixed(4) },
    };
  });
  const info = ARCHETYPE_INFO[archetype];
  const span = (() => {
    const hs = heroLabels(placed).map((l) => fit.boxes.get(l)!);
    return unionBox(hs).x1 - unionBox(hs).x0;
  })();
  const skuB = fit.boxes.get("SKU")!;
  const idea = describe(archetype, placed);
  const rationale = `${info.name}: ${idea}. Hero group spans ${Math.round(span * 100)}% of the frame width; the ${spec.sku.package === "can" ? "can" : "bottle"} stands ${Math.round((skuB.y1 - skuB.y0) * 100)}% of frame height; table edge at ${Math.round(fit.rearY * 100)}% height.`;
  void main;
  return {
    canvas_metadata: { aspect_ratio: "16:9", shopper_zone: "Impulse" },
    camera_spec: { pitch_angle_degrees: fit.cam.pitchDeg, focal_length_mm: fit.cam.focalLengthMm, aperture: depthById(spec.camera.depth).aperture },
    horizon_clamp: { max_table_rear_y_normalized: +fit.rearY.toFixed(4) },
    visual_mass_distribution: { primary_co_heroes_pct: 50, secondary_sides_pct: 30, tertiary_accents_pct: 20 },
    primitives: prims,
    table: { surface: spec.scene.surface, width: W, depth: D },
    camera: fit.cam,
    frame: { units: { x_span_m: W, z_span_m: D } },
    layout_meta: {
      archetype: info.name,
      rationale,
      score: +total.toFixed(4),
      scoreTerms: Object.fromEntries(Object.entries(terms).map(([k, v]) => [k, +v.toFixed(3)])),
      rule_results: rules,
      signature: signature(spec),
      seed: 0,
    },
  };
}

export function describe(archetype: Archetype, placed: Placed[]): string {
  const sides = placed.filter((p) => p.item.kind === "side" || p.item.kind === "shared-side");
  const accent = placed.find((p) => p.item.kind === "accent");
  const cond = placed.filter((p) => p.item.kind === "condiment");
  const one = sides.length === 1 || (!sides.length && !!accent && !cond.length);
  const what = sides.length ? (sides.length === 1 ? "the side dish" : "the side dishes") : accent ? "the accent" : cond.length ? "the condiments" : "the supporting items";
  const v = (singular: string, plural: string) => (one ? singular : plural);
  switch (archetype) {
    case "triangle-loop":
      return `the entree, the drink and ${sides.length ? "a far-left side dish" : accent ? "a far-left accent" : "a small far-left item"} form a depth triangle`;
    case "crescent-arc":
      return `${what} ${v("wraps", "wrap")} in an arc behind the entree`;
    case "diagonal-stagger":
      return `${what} ${v("steps", "step")} back on a diagonal that leads the eye to the drink`;
    case "counterweight":
      return `${what} ${v("sits", "sit")} on the left, balancing the drink on the right`;
    case "feast-spread":
      return "the shared centerpiece sits back-left with shared sides around it, and one plated setting in front";
    case "hero-lockup":
      return placed.some((p) => p.item.kind === "napkin-set")
        ? "the dish front and center with the drink tucked in tight at its right, and the napkin set on the left"
        : "the dish front and center with the drink tucked in tight at its right";
    case "across-the-table":
      return "a second place setting sits directly opposite the hero, across the table";
    case "across-offset":
      return "a second place setting sits across the table, shifted aside so the hero's drink doesn't hide it";
    case "corner":
      return "the two diners meet at a right angle, the second setting turned to face in from the table's left end";
  }
}

export function layoutDistance(a: Blueprint, b: Blueprint): number {
  // Heroes and the napkin set are placed by fixed rules, so they don't count toward "different".
  const fixed = new Set(["MAIN", "SKU", "GLASS", "NAPKIN_SET_1"]);
  const pa = a.primitives.filter((p) => !fixed.has(p.id));
  if (!pa.length) return 0;
  let sum = 0;
  for (const p of pa) {
    const q = b.primitives.find((x) => x.id === p.id);
    if (!q || !p.screen_bbox || !q.screen_bbox) continue;
    const ca = [(p.screen_bbox.x0 + p.screen_bbox.x1) / 2, (p.screen_bbox.y0 + p.screen_bbox.y1) / 2];
    const cb = [(q.screen_bbox.x0 + q.screen_bbox.x1) / 2, (q.screen_bbox.y0 + q.screen_bbox.y1) / 2];
    sum += Math.hypot(ca[0] - cb[0], ca[1] - cb[1]);
  }
  return sum / pa.length;
}

/** Mean screen displacement (fraction of frame) the movable items need between two options. */
export const MIN_OPTION_DISTANCE = 0.08;

export function solve(spec: SceneSpec, maxOptions = 3): SolveResult {
  const first = solveSpec(spec, maxOptions);
  if (first.options.length || !spec.accent) return { ...first, spec, notes: [] };
  // The accent only exists to make the count odd, which is a preference: when
  // no layout has room for it, leave it out rather than offer nothing.
  const without = { ...spec, accent: null };
  const second = solveSpec(without, maxOptions);
  if (!second.options.length) return { ...first, spec, notes: [] };
  return {
    ...second,
    spec: without,
    notes: [`No layout had room for the accent (${spec.accent.name}), so it was left out. The table has an even number of items, which is fine.`],
  };
}

function solveSpec(spec: SceneSpec, maxOptions: number): Pick<SolveResult, "options" | "infeasible"> {
  const items = sceneItems(spec);
  const infeasible: SolveResult["infeasible"] = [];
  const candidates: LayoutOption[] = [];
  for (const a of applicableArchetypes(items)) {
    const r = solveArchetype(spec, items, a);
    if (typeof r === "string") infeasible.push({ archetype: a, reason: r });
    else candidates.push(r);
  }
  // House-style preference (rules/layout-preferences.json) only affects ordering.
  const bonus = (o: LayoutOption) => (layoutPreferences.archetype_bonus as Record<string, number>)[o.archetype] ?? 0;
  candidates.sort((a, b) => b.blueprint.layout_meta.score + bonus(b) - (a.blueprint.layout_meta.score + bonus(a)));
  if (process.env.SOLVER_DEBUG) {
    for (const a of candidates) console.log("cand", a.archetype, a.blueprint.layout_meta.score, candidates.map((b) => layoutDistance(a.blueprint, b.blueprint).toFixed(3)).join(" "));
  }
  const options: LayoutOption[] = [];
  for (const c of candidates) {
    if (options.length >= maxOptions) break;
    // Never pad: an option must differ visibly from every option already picked.
    if (options.every((o) => layoutDistance(o.blueprint, c.blueprint) >= MIN_OPTION_DISTANCE)) options.push(c);
  }
  return { options, infeasible };
}
