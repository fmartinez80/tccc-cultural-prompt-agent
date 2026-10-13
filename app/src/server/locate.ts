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

const Answer = z.object({
  items: z.array(
    z.object({
      id: z.string(),
      box_2d: z.array(z.number()).length(4).nullable().optional(),
    }),
  ),
});

export async function locateItems(url: string, items: LocateItem[]): Promise<Record<string, LocatedBox>> {
  const list = items.map((i) => `- ${i.id}: ${i.name}`).join('\n');
  const text = await generateText({
    name: 'sketchLocate',
    model: 'fast',
    system_prompt:
      'You locate objects in a pencil sketch of a table-top food photograph. Answer JSON only: {"items":[{"id":"...","box_2d":[ymin,xmin,ymax,xmax]}]}, coordinates as integers on a 0-1000 grid of the whole image. Use null for box_2d when the object is not in the drawing. Each object is used once; never give two ids the same object.',
    prompt: `Find each of these objects in the image and give its bounding box:\n${list}`,
    temperature: 0,
    max_output_tokens: 1200,
    images: [{ url }],
  });
  const parsed = Answer.safeParse(JSON.parse(text.replace(/^```(?:json)?\s*|\s*```$/g, '')));
  const out: Record<string, LocatedBox> = {};
  for (const i of items) out[i.id] = null;
  if (!parsed.success) return out;
  const clamp = (v: number) => Math.min(1, Math.max(0, v / 1000));
  for (const a of parsed.data.items) {
    if (!(a.id in out) || !a.box_2d) continue;
    const [ymin, xmin, ymax, xmax] = a.box_2d as [number, number, number, number];
    if (xmax <= xmin || ymax <= ymin) continue;
    out[a.id] = { x0: clamp(xmin), y0: clamp(ymin), x1: clamp(xmax), y1: clamp(ymax) };
  }
  return out;
}
