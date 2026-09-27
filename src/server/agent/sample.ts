// Offline provider for demos and tests (no API key). Options are generic but
// well-formed; the story is assembled from the fixed facts. Anything shown
// from this provider is marked "sample" in the UI.

import { foodLabels, type Story, type StoryFacts, type Validation } from "../../shared/story";
import type { AccentChoice, Accompaniment, Blueprint, Decision, PlatingChoice, PrepChoice, SceneSpec, SidesChoice, StepName, SurfaceChoice } from "../../shared/types";
import type { Selections } from "../../shared/spec";
import type { Brief, IntakeAgent } from "./types";

const NOTE = "Sample option (offline mode, no knowledge-base lookup).";

function decision<T>(step: StepName, values: T[], rationales: string[] = []): Decision<T> {
  const ids = ["A", "B", "C"] as const;
  return {
    step,
    status: values.length === 1 ? "resolved" : "choose",
    options: values.slice(0, 3).map((value, i) => ({ id: ids[i], suggested: i === 0, rationale: rationales[i] ?? NOTE, value })),
    source: "sample",
  };
}

const lower = (s: string) => s.toLowerCase();

export class SampleAgent implements IntakeAgent {
  readonly mode = "sample" as const;

  async prep(b: Brief): Promise<Decision<PrepChoice>> {
    const dish = b.heroDish;
    return decision<PrepChoice>("prep", [
      { label: `Classic ${dish}`, detail: `The everyday way ${dish} is prepared and eaten in ${b.countryLabel}.`, promptText: `a freshly made ${dish}, generous and appetizing`, massClass: "heaped" },
      { label: `Home-style ${dish}`, detail: `A simpler home-cooked version of ${dish}.`, promptText: `a home-style ${dish}, rustic and hearty`, massClass: "heaped" },
    ]);
  }

  async plating(b: Brief): Promise<Decision<PlatingChoice>> {
    const d = lower(b.heroDish);
    const familyStyle = /(roast|turkey|pizza|paella|feast|platter)/.test(d);
    const plated: PlatingChoice = { label: "On an entree plate", detail: "Served on a standard round entree plate.", vessel: "plate", service: "individual", promptText: "served on a round ceramic entree plate" };
    const shared: PlatingChoice = { label: "Family-style platter", detail: "Served whole on a platter for the table, with one plated portion.", vessel: "platter", service: "shared", promptText: "served whole on a large platter in the middle of the table" };
    return decision("plating", familyStyle ? [shared, plated] : [plated, { label: "On a wooden board", detail: "Served on a wooden board for a casual feel.", vessel: "board", service: "individual", promptText: "served on a wooden board" }]);
  }

  async sides(b: Brief, sel: Selections): Promise<Decision<SidesChoice>> {
    const shared = sel.plating?.service === "shared";
    const req = b.sideDishRequest?.trim();
    const side = (name: string, vessel: Accompaniment["vessel"] = "bowl"): Accompaniment => ({ name, role: "side", vessel, service: shared ? "shared" : "individual", pairsWith: "MAIN", promptText: `a ${vessel === "large-bowl" ? "large bowl" : "bowl"} of ${name}` });
    const sauce = (name: string): Accompaniment => ({ name, role: "sauce", vessel: "ramekin", service: "individual", pairsWith: "MAIN", promptText: `a small ramekin of ${name}` });
    const a: SidesChoice = { label: req ? `With ${req}` : "Side salad and sauce", detail: "One side dish and one condiment.", accompaniments: [side(req || "a fresh side salad", shared ? "large-bowl" : "bowl"), sauce("house sauce")] };
    const bb: SidesChoice = { label: "Two sides", detail: "Two side dishes, no condiment.", accompaniments: [side("roasted vegetables"), side("rice", "small-bowl")] };
    const c: SidesChoice = { label: "Sauce only", detail: "Just a condiment beside the dish.", accompaniments: [sauce("house sauce")] };
    return decision("sides", [a, bb, c]);
  }

  async surface(): Promise<Decision<SurfaceChoice>> {
    return decision<SurfaceChoice>("surface", [
      { label: "Park picnic table", detail: "A wooden picnic table in a park.", surface: "picnic-table", promptText: "a weathered wooden picnic table in a park" },
      { label: "Food-truck counter", detail: "The ledge of a food truck.", surface: "food-truck-counter", promptText: "the stainless counter of a food truck" },
      { label: "Park bench", detail: "The seat of a park bench.", surface: "bench", promptText: "a wooden park bench" },
    ]);
  }

  async accent(): Promise<Decision<AccentChoice>> {
    return decision<AccentChoice>("accent", [
      { label: "Lime wedges", detail: "A small dish of lime wedges.", name: "lime wedges", vessel: "ramekin", promptText: "a small dish of fresh lime wedges" },
      { label: "Pickled onions", detail: "A ramekin of pickled red onions.", name: "pickled red onions", vessel: "ramekin", promptText: "a ramekin of bright pink pickled red onions" },
      { label: "Fresh herbs", detail: "A small bowl of chopped herbs.", name: "chopped fresh herbs", vessel: "small-bowl", promptText: "a small bowl of chopped fresh herbs" },
    ]);
  }

  async story(b: Brief, spec: SceneSpec, _bp: Blueprint, f: StoryFacts): Promise<Story> {
    const sides = spec.accompaniments.map((a) => a.promptText);
    const place = spec.scene.venue === "on-the-go" ? `out and about in ${b.countryLabel}` : spec.scene.venue === "restaurant" ? `at a restaurant in ${b.countryLabel}` : `at home in ${b.countryLabel}`;
    const labelText = (label: string, what: string, vessel: string) => {
      const strip = (t: string) => t.replace(/\.$/, "");
      // When the option text already names the container, add only its size.
      const on = (t: string, prep: string) => (t.includes(vessel.split(" about ")[0].split(" ").pop()!) ? `${strip(t)}, about ${vessel.split(" about ")[1]}.` : `${strip(t)}, ${prep} ${vessel}.`);
      if (label === "MAIN") return on(spec.entree.prep.promptText, "on");
      const acc = spec.accompaniments.find((a) => what.includes(a.name));
      if (acc) return on(acc.promptText, "in");
      if (label.startsWith("ACCENT") && spec.accent) return on(spec.accent.promptText, "in");
      return `${what}, on ${vessel}.`;
    };
    return {
      sceneSummary: [
        `A ${spec.occasion.replace("-", " ")} ${place}: ${spec.entree.prep.promptText}, ${spec.entree.plating.promptText}, sits in the foreground on ${f.surfaceText}. ${f.servingSentence}`,
        sides.length ? `Alongside: ${sides.join("; ")}.` : "No side dishes; the meal and the drink carry the frame.",
        `${f.lightingSentence} ${f.skuLightSentence}`,
        "(Sample story, offline mode: set ANTHROPIC_API_KEY for knowledge-base grounded writing.)",
      ].join("\n\n"),
      culturalNotes: ["Offline sample: cultural notes come from the knowledge base when Claude is enabled."],
      segments: {
        entreeDish: `${spec.entree.prep.promptText}, ${spec.entree.plating.promptText}.`,
        traditionalSideDishes: sides,
        productDetail: `${spec.sku.displayName}${spec.sku.glass ? ", with a branded bell-shaped Coca-Cola glass" : ""}.`,
        environmentalOverview: `Setting: ${place}, on ${f.surfaceText}; the upper half of the frame is a soft, out-of-focus background of the setting.`,
        platingAndTableware: `${spec.entree.plating.promptText}${spec.napkinSet ? "; a folded napkin with fork and knife on top, to the right of the plate" : ""}.`,
        productServingDetails: f.servingSentence,
        brandVisId: `${f.lookSentence} ${f.angleSentence} ${f.framingSentence}`,
      },
      labelSegments: foodLabels(f).map((l) => ({ label: l.label, text: labelText(l.label, l.what, l.vessel) })),
    };
  }

  async validate(): Promise<Validation> {
    return { pass: true, notes: [] };
  }
}
