// SceneSpec → the list of labeled items the solver places.

import { BELL_GLASS, MASS_HEIGHT, NAPKIN, VESSELS, skuProxy, type ProxyDef } from "./registry";
import { isLargeSku } from "./rules";
import type { Layer, SceneSpec } from "./types";

export type ItemKind =
  | "main"
  | "shared-hero"
  | "sku"
  | "glass"
  | "side"
  | "shared-side"
  | "bread"
  | "condiment"
  | "accent"
  | "napkin-set";

export interface ItemSpec {
  label: string; // role label shown on the proxy and used as the prompt segment key
  kind: ItemKind;
  layer: Layer;
  name: string; // human description of what it is
  proxyKey: string;
  def: ProxyDef;
  extraHeight: number; // food mass on top of the vessel
  pairsWith?: string;
  injected?: boolean;
  footprint?: "rect" | "triangle";
}

const L1: Layer = "Layer_1_Primary_CoHero";
const L2: Layer = "Layer_2_Secondary_Side";
const L3: Layer = "Layer_3_Tertiary_Accent";

export function sceneItems(spec: SceneSpec): ItemSpec[] {
  const items: ItemSpec[] = [];
  const shared = spec.entree.plating.service === "shared";
  const mass = MASS_HEIGHT[spec.entree.prep.massClass];

  if (shared) {
    const v = spec.entree.plating.vessel;
    items.push({
      label: "SHARED_HERO",
      kind: "shared-hero",
      layer: L2,
      name: `${spec.entree.name}, served family-style (${v})`,
      proxyKey: v,
      def: VESSELS[v],
      extraHeight: mass,
    });
    items.push({
      label: "MAIN",
      kind: "main",
      layer: L1,
      name: `a plated portion of ${spec.entree.name}`,
      proxyKey: "plate",
      def: VESSELS.plate,
      extraHeight: Math.min(mass, 0.04),
    });
  } else {
    items.push({
      label: "MAIN",
      kind: "main",
      layer: L1,
      name: spec.entree.name,
      proxyKey: spec.entree.plating.vessel,
      def: VESSELS[spec.entree.plating.vessel],
      extraHeight: mass,
    });
  }

  items.push({ label: "SKU", kind: "sku", layer: L1, name: spec.sku.displayName, proxyKey: `sku:${spec.sku.id}`, def: skuProxy(spec.sku), extraHeight: 0 });
  if (spec.sku.glass) {
    items.push({ label: "GLASS", kind: "glass", layer: L1, name: "branded bell-shaped Coca-Cola glass, filled", proxyKey: "bell-glass", def: BELL_GLASS, extraHeight: 0 });
  }

  let sideN = 0,
    sharedN = 0,
    breadN = 0,
    condN = 0;
  for (const a of spec.accompaniments) {
    const def = VESSELS[a.vessel];
    if (a.role === "condiment" || a.role === "sauce" || a.role === "garnish") {
      condN++;
      items.push({ label: `SAUCE_${condN}`, kind: "condiment", layer: L3, name: a.name, proxyKey: a.vessel, def, extraHeight: 0.005, pairsWith: a.pairsWith || "MAIN" });
    } else if (a.role === "bread") {
      breadN++;
      items.push({ label: `BREAD_${breadN}`, kind: "bread", layer: L2, name: a.name, proxyKey: a.vessel, def, extraHeight: 0.04 });
    } else if (a.service === "shared") {
      sharedN++;
      items.push({ label: `SHARED_${sharedN}`, kind: "shared-side", layer: L2, name: a.name, proxyKey: a.vessel, def, extraHeight: 0.03 });
    } else {
      sideN++;
      items.push({ label: `SIDE_${sideN}`, kind: "side", layer: L2, name: a.name, proxyKey: a.vessel, def, extraHeight: 0.03 });
    }
  }

  if (spec.napkinSet) {
    items.push({
      label: "NAPKIN_SET_1",
      kind: "napkin-set",
      layer: L3,
      name: `folded napkin with ${spec.napkinSet.cutlery.join(" and ")} on top`,
      proxyKey: `napkin-${spec.napkinSet.napkinShape}`,
      def: NAPKIN[spec.napkinSet.napkinShape],
      extraHeight: 0.006,
      footprint: spec.napkinSet.napkinShape,
    });
  }

  if (spec.accent) {
    items.push({
      label: "ACCENT_1",
      kind: "accent",
      layer: L3,
      name: spec.accent.name,
      proxyKey: spec.accent.vessel,
      def: VESSELS[spec.accent.vessel],
      extraHeight: 0.005,
      pairsWith: "MAIN",
      injected: true,
    });
  }
  return items;
}

/**
 * Odd/even rule: count the table items (the napkin set counts once, cutlery
 * included). An even count needs one injected accent.
 */
export function itemCount(spec: SceneSpec): number {
  return sceneItems({ ...spec, accent: null }).length;
}

export function needsAccent(spec: SceneSpec): boolean {
  return itemCount(spec) % 2 === 0;
}

export function isMultiServe(spec: SceneSpec): boolean {
  return isLargeSku(spec.sku);
}
