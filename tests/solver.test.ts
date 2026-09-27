import { describe, expect, it } from "vitest";
import { solve } from "../src/shared/solver";
import { needsAccent, itemCount } from "../src/shared/scene";
import { SKU_CATALOG } from "../src/shared/registry";
import { tacosSpec, withAccent } from "./fixtures";
import type { SceneSpec } from "../src/shared/types";

const sku = (id: string, glass: boolean) => ({ ...SKU_CATALOG.find((s) => s.id === id)!, glass });

const cases: Record<string, SceneSpec> = {
  "can, restaurant": tacosSpec(),
  "2 L shared bottle + glass, home": tacosSpec({ sku: sku("coke-original-2l-pet", true), scene: { setting: "indoor", venue: "home", party: "1", time: "evening", surface: "table-4top" } }),
  "330 mL glass bottle + glass": tacosSpec({ sku: sku("coke-original-330ml-glass", true) }),
  "wide scene, low angle": tacosSpec({ camera: { look: "wide-scene", angle: "low" } }),
  "looking down": tacosSpec({ camera: { look: "table-context", angle: "high" } }),
  "bench, on the go": tacosSpec({ scene: { setting: "outdoor", venue: "on-the-go", party: "1", time: "midday", surface: "bench" } }),
  "meal + SKU only (tight crop)": withAccent(tacosSpec({ accompaniments: [], napkinSet: null, accent: null })),
};

describe("solver", () => {
  for (const [name, spec] of Object.entries(cases)) {
    it(`${name}: returns compliant, distinct options`, () => {
      const r = solve(spec);
      expect(r.options.length, JSON.stringify(r.infeasible)).toBeGreaterThan(0);
      expect(r.options.length).toBeLessThanOrEqual(3);
      for (const o of r.options) {
        const bp = o.blueprint;
        for (const rule of bp.layout_meta.rule_results) expect(rule.pass, `${rule.id}: ${rule.detail}`).toBe(true);
        expect(bp.primitives.length % 2).toBe(1); // odd count
        expect(bp.horizon_clamp.max_table_rear_y_normalized).toBeLessThanOrEqual(0.5);
        const main = bp.primitives.find((p) => p.id === "MAIN")!;
        const s = bp.primitives.find((p) => p.id === "SKU")!;
        expect(s.world.x).toBeGreaterThan(main.world.x); // SKU on the diner's right
        for (const id of ["SKU", "GLASS"]) {
          const p = bp.primitives.find((q) => q.id === id);
          if (!p) continue;
          expect(p.screen_bbox!.x0).toBeGreaterThanOrEqual(1 / 3 - 1e-6); // center third
          expect(p.screen_bbox!.x1).toBeLessThanOrEqual(2 / 3 + 1e-6);
        }
      }
    });
  }

  it("is deterministic", () => {
    const a = solve(tacosSpec());
    const b = solve(tacosSpec());
    expect(JSON.stringify(a)).toBe(JSON.stringify(b));
  });
});

describe("odd/even", () => {
  it("counts the napkin set once and asks for an accent on even counts", () => {
    const spec = tacosSpec({ accent: null });
    // MAIN + SKU + SIDE + SAUCE + NAPKIN_SET = 5 → odd, no accent
    expect(itemCount(spec)).toBe(5);
    expect(needsAccent(spec)).toBe(false);
    const even = { ...spec, accompaniments: spec.accompaniments.slice(0, 1) };
    expect(needsAccent(even)).toBe(true);
  });
});

describe("family-style (Feast Spread)", () => {
  it("places a shared centerpiece behind the plated portion with a glass and shared bottle", () => {
    const spec = tacosSpec({
      heroDish: "roast chicken",
      sku: { ...SKU_CATALOG.find((s) => s.id === "coke-original-2l-pet")!, glass: true },
      scene: { setting: "indoor", venue: "home", party: "1", time: "evening", surface: "long-table" },
      entree: {
        name: "roast chicken",
        prep: { label: "Roast", detail: "", promptText: "a whole roast chicken", massClass: "heaped" },
        plating: { label: "Platter", detail: "", vessel: "platter", service: "shared", promptText: "on a platter" },
      },
      accompaniments: [
        { name: "roast potatoes", role: "side", vessel: "large-bowl", service: "shared", pairsWith: "MAIN", promptText: "roast potatoes" },
        { name: "gravy", role: "sauce", vessel: "sauce-boat", service: "individual", pairsWith: "MAIN", promptText: "gravy" },
      ],
    });
    const r = solve(spec);
    expect(r.options.length, JSON.stringify(r.infeasible)).toBeGreaterThan(0);
    const bp = r.options[0].blueprint;
    const ids = bp.primitives.map((p) => p.id);
    expect(ids).toEqual(expect.arrayContaining(["MAIN", "SHARED_HERO", "SKU", "GLASS"]));
    const main = bp.primitives.find((p) => p.id === "MAIN")!;
    const hero = bp.primitives.find((p) => p.id === "SHARED_HERO")!;
    expect(hero.world.d).toBeGreaterThan(main.world.d); // centerpiece behind the plate
    for (const rule of bp.layout_meta.rule_results) expect(rule.pass, `${rule.id}: ${rule.detail}`).toBe(true);
  });
});
