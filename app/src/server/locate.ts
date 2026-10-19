// Finds each labeled item in a drawn sketch, so the review's numbered markers sit
// on what the sketch actually drew rather than where the layout planned it (the
// sketch model may zoom or re-angle). One Gemini Flash call with the image;
// Gemini answers object boxes as [ymin, xmin, ymax, xmax] on a 0-1000 grid.

import { z } from 'zod';

import { generateText } from './gemini.ts';

export interface LocateItem {
  id: string;
  /** What it is, e.g. "Pickled vegetables in a small bowl". */
  name: string;
}

/** Each item's box in the image, 0..1 from the top left, or null when it isn't in the drawing. */
export type LocatedBox = { x0: number; y0: number; x1: number; y1: number } | null;

/** A dish or drink the sketch drew that is none of the listed items: it would carry into the photo. */
export interface ExtraItem {
  what: string;
  box: NonNullable<LocatedBox>;
}

const Box = z.array(z.number()).length(4);
const Answer = z.object({
  items: z.array(
    z.object({
      id: z.string(),
      box_2d: Box.nullable().optional(),
    }),
  ),
  extras: z.array(z.object({ what: z.string(), box_2d: Box })).optional(),
});

export async function locateItems(url: string, items: LocateItem[]): Promise<{ boxes: Record<string, LocatedBox>; extras: ExtraItem[] }> {
  const list = items.map((i) => `- ${i.id}: ${i.name}`).join('\n');
  const text = await generateText({
    name: 'sketchLocate',
    model: 'fast',
    system_prompt:
      'You locate objects in a pencil sketch of a table-top food photograph. Answer JSON only: {"items":[{"id":"...","box_2d":[ymin,xmin,ymax,xmax]}],"extras":[{"what":"...","box_2d":[ymin,xmin,ymax,xmax]}]}, coordinates as integers on a 0-1000 grid of the whole image. Use null for box_2d when the object is not in the drawing. Each object is used once; never give two ids the same object. Under extras, list every plate, bowl, basket, board, ramekin, glass, cup, bottle or can on the table that is none of the listed objects (a second plate of food, a duplicate drink), with a few words for what it is; leave out napkins, cutlery and the background. Use an empty list when there are none.',
    prompt: `Find each of these objects in the image and give its bounding box:\n${list}`,
    temperature: 0,
    max_output_tokens: 1600,
    images: [{ url }],
  });
  const parsed = Answer.safeParse(JSON.parse(text.replace(/^```(?:json)?\s*|\s*```$/g, '')));
  const out: Record<string, LocatedBox> = {};
  for (const i of items) out[i.id] = null;
  if (!parsed.success) return { boxes: out, extras: [] };
  const clamp = (v: number) => Math.min(1, Math.max(0, v / 1000));
  const toBox = (b: number[]): LocatedBox => {
    const [ymin, xmin, ymax, xmax] = b as [number, number, number, number];
    return xmax <= xmin || ymax <= ymin ? null : { x0: clamp(xmin), y0: clamp(ymin), x1: clamp(xmax), y1: clamp(ymax) };
  };
  for (const a of parsed.data.items) {
    if (!(a.id in out) || !a.box_2d) continue;
    out[a.id] = toBox(a.box_2d);
  }
  const extras: ExtraItem[] = [];
  for (const e of parsed.data.extras ?? []) {
    const box = toBox(e.box_2d);
    if (box && e.what.trim()) extras.push({ what: e.what.trim().slice(0, 80), box });
  }
  return { boxes: out, extras: extras.slice(0, 8) };
}
