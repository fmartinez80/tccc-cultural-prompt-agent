// Product reference photos for image generation: the real package shots of
// each catalog SKU (references/sku/<gtin>/front|side|top.jpg) and the poured
// bell glass (references/glass/poured.jpg). Task references must be hosted
// URLs, so each file is uploaded once per signed-in user and the ephemeral URL
// (kept by Runway for ~1–2 days) is re-used for 12 hours.

import { readFile } from 'node:fs/promises';
import path from 'node:path';

import type { RunwayClient } from '@runway/bay/runway';

import { SKU_CATALOG } from '../shared/registry.ts';

const ROOT = path.resolve(process.cwd(), 'references');
const MAX_AGE_MS = 12 * 60 * 60 * 1000;

export type SkuShot = 'front' | 'side' | 'top';

const cache = new Map<string, { at: number; url: Promise<string> }>();

async function hosted(runway: RunwayClient, user: string, rel: string): Promise<string | null> {
  const key = `${user}:${rel}`;
  const hit = cache.get(key);
  if (hit && Date.now() - hit.at < MAX_AGE_MS) return hit.url;
  let bytes: Buffer;
  try {
    bytes = await readFile(path.join(ROOT, rel));
  } catch {
    return null; // this product has no shot of that kind
  }
  const url = runway.uploadAsset(new Uint8Array(bytes), { filename: rel.replace(/[/\\]/g, '-') }).then((r) => r.url);
  cache.set(key, { at: Date.now(), url });
  url.catch(() => cache.delete(key));
  return url;
}

/** The GTIN whose photos show this catalog SKU, if it has any. */
export function skuGtin(skuId: string): string | undefined {
  return SKU_CATALOG.find((s) => s.id === skuId)?.gtin;
}

/** Hosted URLs of the requested shots of one SKU, in the order asked; missing shots are skipped. */
export async function skuShots(
  runway: RunwayClient,
  user: string,
  skuId: string,
  shots: SkuShot[],
): Promise<Array<{ shot: SkuShot; url: string }>> {
  const gtin = skuGtin(skuId);
  if (!gtin) return [];
  const urls = await Promise.all(shots.map((s) => hosted(runway, user, `sku/${gtin}/${s}.jpg`)));
  return shots.flatMap((shot, i) => (urls[i] ? [{ shot, url: urls[i]! }] : []));
}

/** Hosted URL of the poured bell-glass reference. */
export function pouredGlass(runway: RunwayClient, user: string): Promise<string | null> {
  return hosted(runway, user, 'glass/poured.jpg');
}

/** Element labels the photos apply to: SKU / SKU_2 and GLASS / GLASS_2. */
export function productElement(label: string): 'sku' | 'glass' | null {
  if (/^SKU(_\d+)?$/i.test(label)) return 'sku';
  if (/^GLASS(_\d+)?$/i.test(label)) return 'glass';
  return null;
}

const SHOT_WORDS: Record<SkuShot, string> = {
  front: 'from the front',
  side: 'from the side (this is the back of the package; use it only for the shape and proportions, never show its barcode or panel text)',
  top: 'from directly above (the cap or lid)',
};

/** Prompt lines naming each product photo by its image number. */
export function skuReferenceLines(refs: Array<{ shot: SkuShot; n: number }>): string {
  if (!refs.length) return '';
  const list = refs.map((r) => `image ${r.n} shows it ${SHOT_WORDS[r.shot]}`).join('; ');
  return [
    `Product photographs of the real package: ${list}.`,
    'Match the package exactly to these photographs: the same shape and proportions, cap or lid, label artwork, logo lettering and colors. Do not redraw, restyle or re-letter the label, and do not invent any text.',
    'Its printed label is part of the product and stays on it. Turn it so the Coca-Cola logo faces the camera; no barcode, nutrition panel or back-label text shows.',
  ].join(' ');
}

export function glassReferenceLine(n: number): string {
  return `Image ${n} shows a correctly poured glass of Coca-Cola: match its glass, the liquid color, the height and texture of the foam head, and the amount and size of the ice.`;
}
