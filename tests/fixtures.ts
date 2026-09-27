import type { SceneSpec } from "../src/shared/types";
import { SKU_CATALOG } from "../src/shared/registry";

const sku = (id: string) => SKU_CATALOG.find((s) => s.id === id)!;

import { needsAccent } from "../src/shared/scene";

/** Adds the injected accent when the odd/even rule calls for one, as the intake flow does. */
export function withAccent(spec: SceneSpec): SceneSpec {
  if (spec.accent || !needsAccent(spec)) return spec;
  return { ...spec, accent: { label: "Lime wedges", detail: "", name: "lime wedges", vessel: "ramekin", promptText: "a small dish of lime wedges" } };
}

export function tacosSpec(over: Partial<SceneSpec> = {}): SceneSpec {
  return withAccent({
    specVersion: "0.2",
    operatingUnit: "north_america",
    country: "united_states",
    countryLabel: "United States",
    region: "us-texas",
    occasion: "weekday-lunch",
    heroDish: "tacos al pastor",
    scene: { setting: "indoor", venue: "restaurant", party: "1", time: "midday", surface: "table-4top" },
    camera: { look: "close-hero", angle: "diners-eye" },
    sku: { ...sku("coke-original-355ml-can"), glass: false },
    entree: {
      name: "tacos al pastor",
      prep: { label: "Trompo-style", detail: "", promptText: "three tacos al pastor", massClass: "heaped" },
      plating: { label: "Plate", detail: "", vessel: "plate", service: "individual", promptText: "on a round plate" },
    },
    accompaniments: [
      { name: "salsa verde", role: "sauce", vessel: "ramekin", service: "individual", pairsWith: "MAIN", promptText: "salsa verde" },
      { name: "frijoles charros", role: "side", vessel: "bowl", service: "individual", pairsWith: "MAIN", promptText: "beans" },
    ],
    napkinSet: { napkinShape: "rect", cutlery: ["fork", "knife"], targets: "MAIN" },
    accent: null,
    ...over,
  });
}
