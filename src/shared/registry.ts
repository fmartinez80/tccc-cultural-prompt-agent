// Real-scale proxy registry. All sizes in meters. Every proxy has a
// bottom-center pivot, so it sits on the tabletop at elevation 0.

import type { MassClass, SkuInfo, Surface, Vessel } from "./types";

export type ShapeKind = "cylinder" | "box" | "lathe-bottle" | "lathe-can" | "lathe-bell-glass" | "napkin";

export interface ProxyDef {
  kind: ShapeKind;
  /** Footprint: radius for round things, width/depth for boxes. */
  radius?: number;
  width?: number;
  depth?: number;
  height: number;
  /** Tall items may rise into the upper half of the frame. */
  tall?: boolean;
}

export const VESSELS: Record<Vessel, ProxyDef> = {
  plate: { kind: "cylinder", radius: 0.135, height: 0.025 }, // entree plate 26-28 cm
  "side-plate": { kind: "cylinder", radius: 0.1, height: 0.02 },
  bowl: { kind: "cylinder", radius: 0.08, height: 0.06 }, // side bowl, medium 15-18 cm
  "small-bowl": { kind: "cylinder", radius: 0.0675, height: 0.05 }, // side bowl, small 12-15 cm
  "large-bowl": { kind: "cylinder", radius: 0.16, height: 0.09 }, // communal bowl 30-35 cm
  ramekin: { kind: "cylinder", radius: 0.035, height: 0.035 }, // 6-8 cm
  board: { kind: "box", width: 0.2, depth: 0.32, height: 0.02 }, // cutting board 30-35 x 20 cm
  basket: { kind: "cylinder", radius: 0.118, height: 0.07 }, // bread basket 22-25 cm
  "foil-wrap": { kind: "box", width: 0.2, depth: 0.12, height: 0.05 },
  tray: { kind: "box", width: 0.34, depth: 0.24, height: 0.02 },
  leaf: { kind: "box", width: 0.3, depth: 0.2, height: 0.005 },
  // Communal vessels run long-axis front-to-back (width = across the frame).
  casserole: { kind: "box", width: 0.27, depth: 0.37, height: 0.07 },
  platter: { kind: "box", width: 0.26, depth: 0.37, height: 0.03 },
  "sauce-boat": { kind: "box", width: 0.15, depth: 0.07, height: 0.06 },
  paellera: { kind: "cylinder", radius: 0.19, height: 0.05 }, // paella pan for ~4, 36-40 cm at the mouth, 4-6 cm rim (spain.md)
};

/** How each vessel is named in the image prompt. The size is added from VESSELS so text and proxy agree. */
export const VESSEL_NOUN: Record<Vessel, string> = {
  plate: "a round entree plate",
  "side-plate": "a round side plate",
  bowl: "a round side bowl",
  "small-bowl": "a small round bowl",
  "large-bowl": "a large communal serving bowl",
  ramekin: "a small ramekin",
  board: "a wooden serving board",
  basket: "a small bread basket",
  "foil-wrap": "a foil wrap",
  tray: "a serving tray",
  leaf: "a banana leaf",
  casserole: "a rectangular casserole dish",
  platter: "an oval serving platter",
  "sauce-boat": "a sauce boat",
  paellera: "a shallow carbon-steel paella pan with two looped handles",
};

/** Short name for the vessel in running text ("the shared paella pan"). */
export const VESSEL_SHORT: Record<Vessel, string> = {
  plate: "plate",
  "side-plate": "side plate",
  bowl: "bowl",
  "small-bowl": "bowl",
  "large-bowl": "serving bowl",
  ramekin: "ramekin",
  board: "board",
  basket: "basket",
  "foil-wrap": "foil wrap",
  tray: "tray",
  leaf: "leaf",
  casserole: "casserole dish",
  platter: "platter",
  "sauce-boat": "sauce boat",
  paellera: "paella pan",
};

/** "a round entree plate about 27 cm across" */
export function vesselPhrase(v: Vessel): string {
  const d = VESSELS[v];
  const cm = (m: number) => Math.round(m * 100);
  const size = d.radius !== undefined ? `about ${cm(2 * d.radius)} cm across` : `about ${cm(Math.max(d.width!, d.depth!))} by ${cm(Math.min(d.width!, d.depth!))} cm`;
  return `${VESSEL_NOUN[v]} ${size}`;
}

/** Extra height the food adds on top of the vessel. */
export const MASS_HEIGHT: Record<MassClass, number> = {
  flat: 0.02,
  heaped: 0.06,
  stacked: 0.1,
  wrapped: 0.05,
};

// Product sizes from knowledge-base/01-brand/coca-cola-guidelines.md §4.3
// (provisional there, pending the TCCC SKU spec drop).
export const SKU_CATALOG: Array<SkuInfo & { markets?: string[] }> = [
  { id: "coke-original-330ml-glass", displayName: "Coca-Cola Original Taste 330 mL contour glass bottle", package: "contour-glass-bottle", volumeMl: 330 },
  { id: "coke-original-237ml-glass", displayName: "Coca-Cola Original Taste 237 mL contour glass bottle", package: "contour-glass-bottle", volumeMl: 237 },
  { id: "coke-original-350ml-glass-es", displayName: "Coca-Cola Original Taste 350 mL returnable glass bottle (Spain on-premise)", package: "contour-glass-bottle", volumeMl: 350, markets: ["spain"] },
  { id: "coke-original-355ml-can", displayName: "Coca-Cola Original Taste 355 mL can (US)", package: "can", volumeMl: 355, markets: ["us"] },
  { id: "coke-original-330ml-can", displayName: "Coca-Cola Original Taste 330 mL can", package: "can", volumeMl: 330 },
  { id: "coke-original-500ml-pet", displayName: "Coca-Cola Original Taste 500 mL PET bottle", package: "pet-bottle", volumeMl: 500 },
  { id: "coke-original-1500ml-pet", displayName: "Coca-Cola Original Taste 1.5 L PET bottle", package: "pet-bottle", volumeMl: 1500 },
  { id: "coke-original-2l-pet", displayName: "Coca-Cola Original Taste 2 L PET bottle", package: "pet-bottle", volumeMl: 2000 },
];

export function skuProxy(sku: SkuInfo): ProxyDef {
  if (sku.package === "can") {
    return sku.volumeMl >= 355
      ? { kind: "lathe-can", radius: 0.033, height: 0.123, tall: true }
      : { kind: "lathe-can", radius: 0.033, height: 0.115, tall: true };
  }
  if (sku.package === "contour-glass-bottle") {
    if (sku.volumeMl === 350) return { kind: "lathe-bottle", radius: 0.038, height: 0.147, tall: true }; // Spain returnable
    if (sku.volumeMl <= 250) return { kind: "lathe-bottle", radius: 0.028, height: 0.19, tall: true };
    return { kind: "lathe-bottle", radius: 0.031, height: 0.205, tall: true };
  }
  if (sku.volumeMl >= 3000) return { kind: "lathe-bottle", radius: 0.059, height: 0.365, tall: true };
  if (sku.volumeMl >= 2500) return { kind: "lathe-bottle", radius: 0.056, height: 0.345, tall: true };
  if (sku.volumeMl >= 2000) return { kind: "lathe-bottle", radius: 0.054, height: 0.33, tall: true };
  if (sku.volumeMl >= 1500) return { kind: "lathe-bottle", radius: 0.049, height: 0.315, tall: true };
  if (sku.volumeMl >= 1000) return { kind: "lathe-bottle", radius: 0.042, height: 0.28, tall: true };
  if (sku.volumeMl >= 500) return { kind: "lathe-bottle", radius: 0.0325, height: 0.203, tall: true };
  return { kind: "lathe-bottle", radius: 0.03, height: 0.21, tall: true };
}

/** Clearance radius around a multi-serve bottle (coca-cola-guidelines.md §4.5). */
export function bottleClearance(sku: SkuInfo): number {
  if (sku.volumeMl >= 3000) return 0.15;
  if (sku.volumeMl >= 2500) return 0.135;
  if (sku.volumeMl >= 2000) return 0.11;
  if (sku.volumeMl >= 1000) return 0.1;
  return 0;
}

// Branded bell-shaped contour glass, 640 mL: 171-173 mm tall, 95 mm across the top (§4.3).
export const BELL_GLASS: ProxyDef = { kind: "lathe-bell-glass", radius: 0.0475, height: 0.172, tall: true };

export const NAPKIN: Record<"rect" | "triangle", ProxyDef> = {
  // Folded rectangular napkin 20 x 10 cm, utensils always on top (tableware reference §2-3).
  rect: { kind: "napkin", width: 0.1, depth: 0.2, height: 0.012 },
  triangle: { kind: "napkin", width: 0.18, depth: 0.14, height: 0.012 },
};

export interface SurfaceDef {
  width: number;
  depth: number;
  /** Narrow surfaces fit fewer items and push the layout sideways. */
  narrow: boolean;
  promptText: string;
}

// Rendered surfaces are generous in width so the table fills a 16:9 frame;
// depth drives the horizon rule (the rear edge must sit at or below 50%).
export const SURFACES: Record<Surface, SurfaceDef> = {
  "table-2top": { width: 1.4, depth: 0.75, narrow: false, promptText: "a small dining table" },
  "table-4top": { width: 1.8, depth: 0.85, narrow: false, promptText: "a dining table" },
  "long-table": { width: 2.4, depth: 0.95, narrow: false, promptText: "a long family dining table" },
  "picnic-table": { width: 2.0, depth: 0.75, narrow: false, promptText: "a wooden park picnic table" },
  bench: { width: 1.6, depth: 0.42, narrow: true, promptText: "a park bench" },
  "food-truck-counter": { width: 1.8, depth: 0.4, narrow: true, promptText: "a food-truck counter" },
  "street-ledge": { width: 1.6, depth: 0.34, narrow: true, promptText: "a street-side ledge" },
};

/** Footprint radius used for spacing checks (boxes use their half-diagonal on the short side). */
export function footprintRadius(p: ProxyDef): number {
  if (p.radius !== undefined) return p.radius;
  return Math.max(p.width ?? 0, p.depth ?? 0) / 2;
}

/** Shared-side size units for the Feast Spread budget (test values). */
export function sharedSideUnits(v: Vessel): number {
  if (v === "small-bowl" || v === "ramekin") return 0.5;
  if (v === "large-bowl" || v === "casserole" || v === "platter") return 2;
  return 1;
}
