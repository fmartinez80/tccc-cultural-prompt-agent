// Layout solver: places the items for one place setting, fits the camera,
// checks the hard rules and returns up to 3 distinct compliant options.
//
// Placement follows knowledge-base/00-methods/tableware-composition-reference.md
// §3-§7 and coca-cola-guidelines.md §4; composition rules follow
// docs/tablescape/PLAN.md §5.

import { makeCameraParams, overlapArea, polyArea, Projector, rectPoly, screenBox, silhouette, type Poly, type ScreenBox } from "./camera";
import { bottleClearance, footprintRadius, SURFACES } from "./registry";
import { angleById, lookById } from "./rules";
import { isMultiServe, sceneItems, type ItemSpec } from "./scene";
import type { Blueprint, CameraParams, Primitive, RuleResult, SceneSpec } from "./types";

export interface Placed {
  item: ItemSpec;
  x: number;
  d: number;
  yaw: number;
}

export type Archetype = "triangle-loop" | "crescent-arc" | "diagonal-stagger" | "counterweight" | "feast-spread";

export const ARCHETYPE_INFO: Record<Archetype, { name: string; idea: string }> = {
  "triangle-loop": { name: "Triangle Loop", idea: "a depth triangle from the entree to the drink and back to a far-left accent" },
  "crescent-arc": { name: "Crescent Arc", idea: "supporting dishes wrap in an arc behind the entree" },
  "diagonal-stagger": { name: "Diagonal Stagger", idea: "supporting dishes step back on a diagonal that leads the eye to the drink" },
  counterweight: { name: "Counterweight", idea: "supporting dishes grouped on the left to balance the drink on the right" },
  "feast-spread": { name: "Feast Spread", idea: "the shared centerpiece sits back-left, with shared sides around it and one plated setting in front" },
};

export interface LayoutOption {
  archetype: Archetype;
  blueprint: Blueprint;
}

export interface SolveResult {
  options: LayoutOption[];
  infeasible: Array<{ archetype: Archetype; reason: string }>;
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
}

const VARIANTS: Record<Archetype, Variant[]> = {
  "triangle-loop": [
    { condAngle: 112, accentAngle: 168 },
    { condAngle: 135, accentAngle: 175 },
    { condAngle: 95, accentAngle: 155 },
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
    { condAngle: 130, accentAngle: 185 },
    { condAngle: 85, accentAngle: 165 },
  ],
};

function preferredPositions(items: ItemSpec[], spec: SceneSpec, archetype: Archetype, v: Variant): Map<string, Anchor> {
  const pos = new Map<string, Anchor>();
  const main = items.find((i) => i.kind === "main")!;
  const R = footprintRadius(main.def);
  const P: Anchor = { x: 0, d: R + 0.05 };
  pos.set("MAIN", P);

  const sku = items.find((i) => i.kind === "sku")!;
  const rs = footprintRadius(sku.def);
  const glass = items.find((i) => i.kind === "glass");
  const multi = isMultiServe(spec);

  if (glass) {
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
    pos.set(napkin.label, { x: P.x + R + 0.04 + w, d: Math.max(0.12, P.d - 0.05) });
  }

  const sides = items.filter((i) => i.kind === "side" || i.kind === "shared-side");
  const conds = items.filter((i) => i.kind === "condiment");
  const accent = items.find((i) => i.kind === "accent");
  const breads = items.filter((i) => i.kind === "bread");
  const sharedHero = items.find((i) => i.kind === "shared-hero");
  const r = (i: ItemSpec) => footprintRadius(i.def);

  // Bread: right third, midground/background (tableware reference §4).
  const skuPos = pos.get("SKU")!;
  breads.forEach((b, k) => pos.set(b.label, { x: skuPos.x + rs + 0.07 + r(b) + k * 0.05, d: skuPos.d + 0.1 + k * 0.08 }));

  // Condiments: tight cluster behind the plate, within 1-3 in of it.
  const condCluster = (angle: number) => {
    conds.forEach((c, k) => {
      const base = polar(P, angle, R + 0.04 + r(c));
      pos.set(c.label, { x: base.x - k * (2 * r(c) + 0.015), d: base.d + (k % 2) * 0.01 });
    });
  };

  switch (archetype) {
    case "triangle-loop": {
      // Far-left, mid-depth: the third corner of the depth triangle.
      const angles = [168, 125, 150, 100];
      sides.forEach((s, k) => pos.set(s.label, polar(P, angles[k % 4], R + (k === 0 ? 0.12 : 0.07) + r(s) + Math.floor(k / 4) * 0.12)));
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
        pos.set(s.label, { x: left - r(s) - col * 0.2, d: P.d - 0.06 + row * 0.2 });
      });
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
  }
  // The injected accent stays within 1-3 in of the entree (Part B condiment proximity).
  if (accent) pos.set(accent.label, polar(P, v.accentAngle, R + 0.045 + r(accent)));
  return pos;
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
      // Re-center the hero group horizontally (two passes are enough).
      for (let it = 0; it < 2; it++) {
        const u = unionBox(heroes.map((l) => boxes.get(l)!));
        const cx = (u.x0 + u.x1) / 2;
        const main = placed.find((p) => p.item.kind === "main")!;
        const left = proj.project(main.x - 1, 0, main.d).x;
        const right = proj.project(main.x + 1, 0, main.d).x;
        const perMeter = (right - left) / 2;
        tx += (cx - 0.5) / perMeter;
        cam = makeCameraParams(focal, pitch, tx, td, dist);
        ({ boxes, proj } = project(placed, cam));
      }
      const u = unionBox(heroes.map((l) => boxes.get(l)!));
      const rearY = proj.project(tx, 0, D).y;
      const mainBox = boxes.get("MAIN")!;
      if (rearY > 0.5 + 1e-6) continue;
      if (mainBox.y0 < 0.03) continue;
      // Every base, and every low item in full, stays in the lower half (H2).
      if (placed.some((p) => (p.item.def.tall ? boxes.get(p.item.label)!.y0 : boxes.get(p.item.label)!.y1) > 0.5)) continue;
      if (u.y1 > 0.97) continue;
      const span = u.x1 - u.x0;
      const score = -Math.abs(span - targetSpan) - 0.3 * (0.5 - rearY);
      if (!best || score > best.score) best = { fit: { cam, boxes, sils: new Map(), rearY }, score };
    }
  }
  if (!best) return null;
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

export function logoBox(b: ScreenBox): ScreenBox {
  const h = b.y1 - b.y0;
  return { ...b, y0: b.y0 + 0.35 * h, y1: b.y0 + 0.75 * h };
}

function checkRules(placed: Placed[], fit: Fit, spec: SceneSpec): RuleResult[] {
  const out: RuleResult[] = [];
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
  for (const h of logoHolders) {
    const lb = logoBox(B.get(h.item.label)!);
    const lp = [rectPoly(lb)];
    const la = polyArea(lp[0]);
    for (const o of placed) {
      if (o === h) continue;
      if (B.get(o.item.label)!.depth >= lb.depth) continue;
      if (overlapArea(fit.sils.get(o.item.label)!, lp) > 0.02 * la) logoHits.push(`${o.item.label} over ${h.item.label}`);
    }
  }
  out.push({ id: "H5", name: "Trademark clear zone", pass: logoHits.length === 0, detail: logoHits.length ? logoHits.join("; ") : "logo boxes unobstructed" });
  out.push({ id: "H6", name: "SKU head-on", pass: true, detail: "bottle and glass face the camera, upright" });

  const stack: string[] = [];
  for (const back of placed) {
    for (const front of placed) {
      if (front === back) continue;
      if (B.get(front.item.label)!.depth >= B.get(back.item.label)!.depth) continue;
      const frac = occludedFraction(fit.sils.get(front.item.label)!, fit.sils.get(back.item.label)!);
      const limit = back.item.kind === "sku" || back.item.kind === "glass" ? 0.08 : back.item.kind === "main" ? 0.15 : 0.3;
      if (frac > limit) stack.push(`${front.item.label} hides ${Math.round(frac * 100)}% of ${back.item.label}`);
    }
  }
  out.push({ id: "H7", name: "No line-of-sight stacking", pass: stack.length === 0, detail: stack.length ? stack.join("; ") : "no item hidden behind another" });

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
  });
  const n = placed.length;
  out.push({ id: "H10", name: "Odd item count", pass: n % 2 === 1, detail: `${n} items` });

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

  const third = (b: ScreenBox) => b.x0 >= 1 / 3 - 1e-6 && b.x1 <= 2 / 3 + 1e-6;
  const drinks = heroes.filter((l) => l !== "MAIN");
  const mcx = (mb.x0 + mb.x1) / 2;
  const h14fails = drinks.filter((l) => !third(B.get(l)!));
  const mainIn = mcx >= 1 / 3 && mcx <= 2 / 3;
  out.push({
    id: "H14",
    name: "Hero zone: vertical center third",
    pass: h14fails.length === 0 && mainIn,
    detail: h14fails.length || !mainIn ? `outside the center third: ${[...h14fails, ...(mainIn ? [] : ["MAIN center"])].join(", ")}` : "MAIN and the drink(s) sit in the vertical center third",
  });
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
    "settings:1",
    `sku:${spec.sku.id}`,
    `glass:${spec.sku.glass ? "Y" : "N"}`,
    `main:${spec.entree.plating.vessel}(${spec.entree.prep.massClass})${spec.entree.plating.service === "shared" ? "+shared" : ""}`,
    `L2:${l2.join(",") || "-"}`,
    `L3:${l3.join(",") || "-"}`,
  ].join(" | ");
}

function applicableArchetypes(items: ItemSpec[]): Archetype[] {
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
  const targetSpan = hasL2 ? 0.28 : 0.31;
  const fit = fitCamera(placed, D, look.hidden.focal_length_mm, angle.hidden.pitch_deg, targetSpan);
  if (!fit) return "no camera position keeps the table in the lower half with the entree in frame";

  const rules = checkRules(placed, fit, spec);
  const failed = rules.filter((r) => !r.pass);
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
      role: p.item.kind,
      proxy: p.item.proxyKey,
      ...(p.item.pairsWith ? { pairs_with: p.item.pairsWith } : {}),
      ...(p.item.injected ? { injected: true } : {}),
      ...(p.item.footprint ? { footprint: p.item.footprint } : {}),
      world: { x: +p.x.toFixed(4), d: +p.d.toFixed(4), yawDeg: p.yaw, elevation: 0 },
      screen_bbox: { x0: +b.x0.toFixed(4), y0: +b.y0.toFixed(4), x1: +b.x1.toFixed(4), y1: +b.y1.toFixed(4) },
    };
  });
  const look = lookById(spec.camera.look);
  const info = ARCHETYPE_INFO[archetype];
  const span = (() => {
    const hs = heroLabels(placed).map((l) => fit.boxes.get(l)!);
    return unionBox(hs).x1 - unionBox(hs).x0;
  })();
  const skuB = fit.boxes.get("SKU")!;
  const rationale = `${info.name}: ${info.idea}. Hero group spans ${Math.round(span * 100)}% of the frame width; the ${spec.sku.package === "can" ? "can" : "bottle"} stands ${Math.round((skuB.y1 - skuB.y0) * 100)}% of frame height; table edge at ${Math.round(fit.rearY * 100)}% height.`;
  void main;
  return {
    canvas_metadata: { aspect_ratio: "16:9", shopper_zone: "Impulse" },
    camera_spec: { pitch_angle_degrees: fit.cam.pitchDeg, focal_length_mm: fit.cam.focalLengthMm, aperture: look.hidden.aperture },
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
  const items = sceneItems(spec);
  const infeasible: SolveResult["infeasible"] = [];
  const candidates: LayoutOption[] = [];
  for (const a of applicableArchetypes(items)) {
    const r = solveArchetype(spec, items, a);
    if (typeof r === "string") infeasible.push({ archetype: a, reason: r });
    else candidates.push(r);
  }
  candidates.sort((a, b) => b.blueprint.layout_meta.score - a.blueprint.layout_meta.score);
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
