// Poses for the two seated people (staging, 2026-10-15). Fernando's rule: at least one person
// holds the Coca-Cola product (a glass for a large SKU, the bottle or can itself for a small
// one), and every pose is casual. The art director picks a pose before the layout is drawn;
// the solver puts the held drink in the hand, the proxy draws the arms, and the sketch and
// photo prompts describe the same pose in words.

import { isLargeSku } from "./rules";
import type { Blueprint, Primitive, SceneSpec } from "./types";

export type PersonId = "PERSON_1" | "PERSON_2";
type V3 = readonly [number, number, number];

/** One arm, in the person's own frame (x toward their right, y up from the seat, -z forward); x is flipped for the hand away from the other person. */
interface Arm {
  elbow: V3;
  hand: V3;
}

export interface PersonPose {
  /** Torso tilt: negative leans in over the table, positive leans back. */
  lean: number;
  /** The hand nearer the other person. */
  near: Arm;
  /** The other hand. */
  far: Arm;
  /** The near hand holds this person's own Coca-Cola drink. */
  holds: boolean;
  /** The pose in words; {drink} becomes what they hold. */
  text: string;
}

export interface Pose {
  id: string;
  label: string;
  detail: string;
  people: Record<PersonId, PersonPose>;
}

/** The table top, above the seat. Matches SEAT_DROP in the solver plus the table's thickness. */
const T = 0.475;

const REST: Arm = { elbow: [0.2, T, -0.36], hand: [0.1, T, -0.58] };
const IN = -0.18;

const LEANING_IN = "leaning in slightly with both forearms resting on the table either side of their plate, turned toward the other person, listening with a relaxed, easy smile";

export const POSES: Pose[] = [
  {
    id: "drink-in-hand",
    label: "Drink in hand, chatting",
    detail: "The diner across the table holds their drink loosely mid-conversation; the other leans in to listen.",
    people: {
      PERSON_1: {
        lean: IN,
        near: { elbow: [0.22, T, -0.36], hand: [0.17, T + 0.16, -0.5] },
        far: REST,
        holds: true,
        text: "leaning in with one elbow on the table, holding {drink} loosely in the hand nearer the other person, a little above the table, mid-sentence with an easy smile",
      },
      PERSON_2: { lean: IN, near: REST, far: REST, holds: false, text: LEANING_IN },
    },
  },
  {
    id: "listener-holds",
    label: "Listening, drink in hand",
    detail: "The diner at the end holds their drink at rest while the other talks.",
    people: {
      PERSON_1: {
        lean: IN,
        near: { elbow: [0.24, T, -0.36], hand: [0.2, T + 0.04, -0.6] },
        far: REST,
        holds: false,
        text: "leaning in with forearms on the table, one hand open mid-gesture as they tell a story, smiling",
      },
      PERSON_2: {
        lean: IN + 0.06,
        near: { elbow: [0.22, T, -0.34], hand: [0.15, T + 0.12, -0.5] },
        far: REST,
        holds: true,
        text: "leaning in with one elbow on the table, holding {drink} loosely just above the table in the hand nearer the other person, listening and laughing",
      },
    },
  },
  {
    id: "cheers",
    label: "Cheers over the corner",
    detail: "Both raise their drinks toward each other over the corner of the table, about to clink.",
    people: {
      PERSON_1: {
        lean: IN,
        near: { elbow: [0.24, T + 0.06, -0.3], hand: [0.16, T + 0.3, -0.52] },
        far: REST,
        holds: true,
        text: "leaning in, raising {drink} toward the other person over the corner of the table at about chest height, about to clink, smiling",
      },
      PERSON_2: {
        lean: IN,
        near: { elbow: [0.24, T + 0.06, -0.3], hand: [0.16, T + 0.3, -0.52] },
        far: REST,
        holds: true,
        text: "leaning in, raising {drink} toward the other person over the corner of the table at about chest height, about to clink, smiling",
      },
    },
  },
  {
    id: "laid-back",
    label: "Laid back",
    detail: "The diner at the end sits back with a hand around their drink on the table; the other leans in, laughing.",
    people: {
      PERSON_1: { lean: IN - 0.04, near: REST, far: REST, holds: false, text: "leaning in with forearms on the table, laughing at something the other person said" },
      PERSON_2: {
        lean: 0.12,
        near: { elbow: [0.22, T - 0.06, -0.2], hand: [0.14, T + 0.08, -0.44] },
        far: { elbow: [0.22, T - 0.12, -0.14], hand: [0.1, T - 0.1, -0.24] },
        holds: true,
        text: "sitting back comfortably in their chair, one hand wrapped loosely around {drink} as it rests on the table near the edge, the other hand in their lap, relaxed and smiling",
      },
    },
  },
];

export const DEFAULT_POSE = POSES[0]!.id;

export function poseById(id: string | undefined): Pose {
  return POSES.find((p) => p.id === id) ?? POSES[0]!;
}

/** The label of the drink this person holds: a glass for a large SKU, the bottle or can for a small one. */
export function heldLabel(spec: SceneSpec, labels: string[], id: PersonId): string | null {
  const two = id === "PERSON_2" ? "_2" : "";
  const want = isLargeSku(spec.sku) ? [`GLASS${two}`] : [`SKU${two}`, `GLASS${two}`];
  return want.find((l) => labels.includes(l)) ?? null;
}

/** The drink in words, for the pose text. */
export function drinkWord(spec: SceneSpec): string {
  if (isLargeSku(spec.sku)) return "their branded Coca-Cola glass";
  return spec.sku.package === "can" ? "their Coca-Cola can" : "their Coca-Cola bottle";
}

/** A world offset (dx, dd) from a person, in their own frame (x to their right, z backward; forward is -z). */
export function toLocal(self: { yawDeg: number }, dx: number, dd: number): { x: number; z: number } {
  const a = (self.yawDeg * Math.PI) / 180; // undoes the group's rotation.y (= -yaw)
  const wz = -dd;
  return { x: dx * Math.cos(a) + wz * Math.sin(a), z: -dx * Math.sin(a) + wz * Math.cos(a) };
}

/** +1 when the other person sits to this person's right (their own +x), else -1. */
export function sideToward(self: { x: number; d: number; yawDeg: number }, other: { x: number; d: number }): 1 | -1 {
  return toLocal(self, other.x - self.x, other.d - self.d).x >= 0 ? 1 : -1;
}

/** A point in the person's frame, flipped to one side, in world terms (x, height above the seat, d). */
export function toWorld(self: { x: number; d: number; yawDeg: number }, v: V3, sx: 1 | -1): { x: number; y: number; d: number } {
  const t = (-self.yawDeg * Math.PI) / 180; // the group's rotation.y
  const lx = v[0] * sx;
  const lz = v[2];
  return { x: self.x + lx * Math.cos(t) + lz * Math.sin(t), y: v[1], d: self.d + lx * Math.sin(t) - lz * Math.cos(t) };
}

export function poseOf(bp: Blueprint, p: Primitive): PersonPose {
  return poseById(bp.layout_meta.pose).people[p.id as PersonId] ?? poseById(undefined).people.PERSON_1;
}
