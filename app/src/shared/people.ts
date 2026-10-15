// Seated people (staging, 2026-10-15): two people at a corner of the table. The layout fixes
// their pose (seated, leaning in, forearms on the table, turned toward each other); on Review
// the Sketch the art director describes who they are and what they wear. The sketch and the
// photograph both read the same text, so the people stay the same from one to the other.

import type { Blueprint, Primitive, SceneSpec } from "./types";

export interface PersonDetails {
  /** Age, gender and look, in the art director's words ("a woman in her 30s, short curly hair"). */
  who: string;
  /** Heritage or ethnicity. */
  heritage: string;
  /** What they wear. */
  wearing: string;
}

export const PERSON_IDS = ["PERSON_1", "PERSON_2"] as const;

export function hasSeatedPeople(bp: Blueprint): boolean {
  return bp.primitives.some((p) => p.role === "person");
}

/** What a person is when the art director hasn't said: an adult local to the market, dressed for the place. */
export function defaultPersonDetails(spec: SceneSpec, id: string): PersonDetails {
  const place = spec.scene.venue === "restaurant" ? "a meal out" : spec.scene.venue === "home" ? "a relaxed meal at home" : "a casual meal on the go";
  return {
    who: id === "PERSON_1" ? "an adult in their late 20s to 30s" : "an adult in their 30s",
    heritage: `local, from ${spec.countryLabel}`,
    wearing: `everyday clothes that suit ${place} in ${spec.countryLabel}`,
  };
}

export function personDetails(spec: SceneSpec, p: Primitive): PersonDetails {
  const d = defaultPersonDetails(spec, p.id);
  const own = p.person;
  return {
    who: own?.who.trim() || d.who,
    heritage: own?.heritage.trim() || d.heritage,
    wearing: own?.wearing.trim() || d.wearing,
  };
}

/** The locked pose, from where the layout seated them. */
function poseText(p: Primitive, bp: Blueprint): string {
  const other = bp.primitives.find((q) => q.role === "person" && q.id !== p.id);
  const plate = p.id === "PERSON_1" ? "MAIN" : "MAIN_2";
  const seat = p.id === "PERSON_1" ? "on the table's far long side, facing toward the camera's side of the table" : "at the table's end, facing across it";
  return `Sits on a chair ${seat}, in exactly the pose of the ${p.id} figure in image 1: leaning in slightly, both forearms resting on the table either side of their plate (${plate}), head turned toward ${other?.id ?? "the other person"} as if mid-conversation, relaxed, with a natural easy smile.`;
}

/** The fixed text for one seated person, shared by the sketch and the photograph. */
export function personText(spec: SceneSpec, bp: Blueprint, p: Primitive): string {
  const d = personDetails(spec, p);
  return `A real person, not a figure or mannequin: ${d.who}, ${d.heritage}, wearing ${d.wearing}. ${poseText(p, bp)} No logos, text or Coca-Cola red on their clothes.`;
}

/** The rule for people in a seated scene: the sketch and the photograph both use it. */
export const SEATED_PEOPLE_RULE =
  "Exactly two people sit at the table, PERSON_1 and PERSON_2, and no one else is at or beside it. Both are adults (over 25), fictional, and look like no real or famous person. Their faces show in natural three-quarter view; neither looks at the camera. Their hands rest on the table or hold their own cutlery near their own plate: nothing is lifted to the mouth, nobody eats, drinks or bites in the frame, and nobody touches the Coca-Cola product. Anyone further back stays a soft, out-of-focus shape with no visible face, and no children.";
