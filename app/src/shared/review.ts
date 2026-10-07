// The art director's review of the picked layout, made on the black-and-white
// sketch before the story is written. Placement changes become adjustment lines
// in the image prompt's layout guide; everything else (keeps, dish or
// environment notes) goes to the story agent as directions.

import type { Blueprint } from './types.ts';

export const PLACEMENT_REASONS = [
  { id: 'too-close', label: 'Too close', phrase: 'sits too close to its neighbours; give it a little more room' },
  { id: 'too-far', label: 'Too far', phrase: 'feels detached; bring it a little closer to the entree' },
  { id: 'crowded', label: 'Crowded', phrase: 'feels crowded; open up the space around it' },
  { id: 'hidden', label: 'Hidden', phrase: 'is partly hidden; make sure it reads clearly from the camera' },
  { id: 'too-big', label: 'Too dominant', phrase: 'competes with the entree; let it recede a little' },
  { id: 'too-small', label: 'Lost', phrase: 'gets lost in the frame; give it a little more presence' },
  { id: 'wrong-side', label: 'Wrong side', phrase: 'should sit on the other side of the entree' },
  { id: 'angle', label: 'Angle', phrase: 'should turn to face the camera more squarely' },
] as const;

export type PlacementReason = (typeof PLACEMENT_REASONS)[number]['id'];

export interface ItemReview {
  verdict: 'keep' | 'change';
  reasons: PlacementReason[];
  /** Anything that isn't placement: the dish, the vessel, a garnish. */
  note: string;
}

export interface LayoutReview {
  /** The layout this review was made against (see layoutKey); a different layout ignores it. */
  key: string;
  items: Record<string, ItemReview>;
  /** Scene-wide notes: the environment, the mood, a dish swap. */
  notes: string;
}

/** Identifies a layout by where its items stand, so a review never carries over to a different one. */
export function layoutKey(bp: Blueprint): string {
  return bp.primitives.map((p) => `${p.id}:${p.world.x.toFixed(3)}:${p.world.d.toFixed(3)}`).join('|');
}

/** Which detailed sketch belongs to a layout: the scene's signature (camera, dishes, sides) plus where each item sits, so arrangements A, B and C each get their own. */
export function sketchKey(bp: Blueprint): string {
  return `${bp.layout_meta.signature} || ${layoutKey(bp)}`;
}

export function emptyReview(bp: Blueprint): LayoutReview {
  return { key: layoutKey(bp), items: {}, notes: '' };
}

function nameOf(bp: Blueprint, id: string): string {
  const p = bp.primitives.find((q) => q.id === id);
  return p ? `${id} (${p.component_name})` : id;
}

/** Placement changes, one line per item, for the image prompt's layout guide. */
export function reviewAdjustments(review: LayoutReview | null, bp: Blueprint): string[] {
  if (!review) return [];
  const lines: string[] = [];
  for (const p of bp.primitives) {
    const r = review.items[p.id];
    if (r?.verdict !== 'change' || !r.reasons.length) continue;
    const phrases = r.reasons.map((id) => PLACEMENT_REASONS.find((x) => x.id === id)?.phrase).filter(Boolean);
    lines.push(`${p.id} ${phrases.join('; it also ')}.`);
  }
  return lines;
}

/** What the story agent is told: items to keep as they are, item notes and the scene notes. */
export function reviewDirections(review: LayoutReview | null, bp: Blueprint): string[] {
  if (!review) return [];
  const out: string[] = [];
  const keeps = bp.primitives.filter((p) => review.items[p.id]?.verdict === 'keep').map((p) => p.id);
  if (keeps.length) out.push(`Working as shown, keep as described: ${keeps.join(', ')}.`);
  for (const p of bp.primitives) {
    const r = review.items[p.id];
    if (r?.verdict !== 'change') continue;
    const note = r.note.trim();
    if (note) out.push(`${nameOf(bp, p.id)}: ${note}`);
    else if (r.reasons.length) out.push(`${nameOf(bp, p.id)}: placement adjusted in the layout guide; describe it as usual.`);
  }
  const notes = review.notes.trim();
  if (notes) out.push(`Whole scene: ${notes}`);
  return out;
}

export function reviewCounts(review: LayoutReview | null): { keep: number; change: number; notes: boolean } {
  const items = Object.values(review?.items ?? {});
  return {
    keep: items.filter((r) => r.verdict === 'keep').length,
    change: items.filter((r) => r.verdict === 'change').length,
    notes: !!review?.notes.trim(),
  };
}
