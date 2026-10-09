// Every image the app generates is a row in `generations`: who made it, for
// which brief, and where the files are. The rows drive the monthly limits,
// "My scenes", and the shared Studio dashboard and gallery.

import { randomUUID } from 'node:crypto';

import { z } from 'zod';

import type { AppUser } from './auth.ts';
import { type GeneratedImage } from './gemini.ts';
import { mediaUrl, putFile } from './store.ts';
import { db } from './supabase.ts';

/** The brief the browser is working on, sent with each request (see src/client/lib/activeBrief.ts). */
export const SceneBrief = z.object({
  country: z.string().max(80),
  countryLabel: z.string().max(120).optional(),
  region: z.string().max(120).optional(),
  heroDish: z.string().max(200),
  occasion: z.string().max(80).optional(),
  skuId: z.string().max(120).optional(),
});
export type SceneBrief = z.infer<typeof SceneBrief>;

export const BRIEF_HEADER = 'x-scene-brief';

/** Reads the brief header; a missing or malformed one just means "no brief". */
export function briefFromHeader(raw: string | undefined): SceneBrief | null {
  if (!raw) return null;
  try {
    const parsed = SceneBrief.safeParse(JSON.parse(decodeURIComponent(raw)));
    return parsed.success ? parsed.data : null;
  } catch {
    return null;
  }
}

/** `scene` counts toward the scene limit; every other kind toward the image limit. */
export type GenerationKind = 'scene' | 'element' | 'environment' | 'sketch' | 'turnaround';

export class LimitReachedError extends Error {}

function monthStart(): string {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)).toISOString();
}

export interface Usage {
  scenes: number;
  images: number;
}

/** This calendar month's use (UTC), counting running and finished generations. */
export async function usageThisMonth(userId: string): Promise<Usage> {
  const { data, error } = await db()
    .from('generations')
    .select('kind, images')
    .eq('user_id', userId)
    .neq('status', 'failed')
    .gte('created_at', monthStart());
  if (error) throw new Error(`Couldn't read usage: ${error.message}`);
  const usage: Usage = { scenes: 0, images: 0 };
  for (const r of data ?? []) {
    if (r.kind === 'scene') usage.scenes += r.images as number;
    else usage.images += r.images as number;
  }
  return usage;
}

/**
 * Checks the user's monthly limit and records the generation as running.
 * Throws LimitReachedError when it would go over. Returns the row id.
 */
export async function reserveGeneration(
  user: AppUser,
  kind: GenerationKind,
  images: number,
  meta: { model: string; prompt: string; label?: string; brief: SceneBrief | null },
): Promise<string> {
  const usage = await usageThisMonth(user.id);
  if (kind === 'scene' && usage.scenes + images > user.sceneLimit) {
    throw new LimitReachedError(
      `You've used ${usage.scenes} of your ${user.sceneLimit} scenes this month. Ask an admin to raise your limit.`,
    );
  }
  if (kind !== 'scene' && usage.images + images > user.imageLimit) {
    throw new LimitReachedError(
      `You've used ${usage.images} of your ${user.imageLimit} sketches and previews this month. Ask an admin to raise your limit.`,
    );
  }
  const id = randomUUID();
  const b = meta.brief;
  const { error } = await db().from('generations').insert({
    id,
    user_id: user.id,
    kind,
    label: meta.label ?? null,
    model: meta.model,
    prompt: meta.prompt.slice(0, 20_000),
    images,
    status: 'running',
    country: b?.country ?? null,
    country_label: b?.countryLabel ?? b?.country ?? null,
    region: b?.region || null,
    hero_dish: b?.heroDish ?? null,
    occasion: b?.occasion ?? null,
    sku_id: b?.skuId ?? null,
  });
  if (error) throw new Error(`Couldn't record the generation: ${error.message}`);
  return id;
}

const EXT: Record<string, string> = { 'image/png': 'png', 'image/jpeg': 'jpg', 'image/webp': 'webp' };

/** Stores the images and marks the row done; returns their `/media/` URLs. */
export async function finishGeneration(id: string, userId: string, images: GeneratedImage[]): Promise<string[]> {
  const paths = await Promise.all(
    images.map(async (img, i) => {
      const path = `generations/${userId}/${id}-${i + 1}.${EXT[img.mimeType] ?? 'png'}`;
      await putFile(path, img.bytes, img.mimeType);
      return path;
    }),
  );
  const { error } = await db()
    .from('generations')
    .update({ status: 'done', image_paths: paths, images: paths.length, finished_at: new Date().toISOString() })
    .eq('id', id);
  if (error) console.warn(`[generations] couldn't mark ${id} done: ${error.message}`);
  return paths.map(mediaUrl);
}

export async function failGeneration(id: string, message: string): Promise<void> {
  const { error } = await db()
    .from('generations')
    .update({ status: 'failed', error: message.slice(0, 1000), finished_at: new Date().toISOString() })
    .eq('id', id);
  if (error) console.warn(`[generations] couldn't mark ${id} failed: ${error.message}`);
}

// ---------------------------------------------------------------------------
// Reads for My scenes, the Studio and the admin page
// ---------------------------------------------------------------------------

interface GenerationRow {
  id: string;
  user_id: string;
  kind: GenerationKind;
  label: string | null;
  prompt: string;
  image_paths: string[] | null;
  country: string | null;
  country_label: string | null;
  region: string | null;
  hero_dish: string | null;
  occasion: string | null;
  sku_id: string | null;
  created_at: string;
  profiles?: { name: string | null; email: string } | null;
}

export interface SceneCard {
  id: string;
  kind: GenerationKind;
  images: string[];
  prompt: string;
  country: string | null;
  countryLabel: string | null;
  region: string | null;
  heroDish: string | null;
  occasion: string | null;
  skuId: string | null;
  createdAt: string;
  by: string | null;
  /** Images of this same meal by the same person; the gallery shows only the newest. */
  takes: number;
}

function toCard(r: GenerationRow): SceneCard {
  return {
    id: r.id,
    kind: r.kind,
    images: (r.image_paths ?? []).map(mediaUrl),
    prompt: r.prompt,
    country: r.country,
    countryLabel: r.country_label,
    region: r.region,
    heroDish: r.hero_dish,
    occasion: r.occasion,
    skuId: r.sku_id,
    createdAt: r.created_at,
    by: r.profiles ? r.profiles.name || r.profiles.email.split('@')[0]! : null,
    takes: (r.image_paths ?? []).length || 1,
  };
}

/**
 * The gallery shows one card per meal per person (same country, region, dish
 * and occasion), using the newest image, so ten takes of one dish don't fill
 * it. `rows` must be newest first.
 */
function latestTakes(rows: GenerationRow[], limit: number): SceneCard[] {
  const groups = new Map<string, SceneCard>();
  for (const r of rows) {
    const key = [r.user_id, r.country, r.region, r.hero_dish?.trim().toLowerCase(), r.occasion].join('|');
    const takes = (r.image_paths ?? []).length || 1;
    const seen = groups.get(key);
    if (seen) {
      seen.takes += takes;
      continue;
    }
    if (groups.size >= limit) continue;
    const card = toCard(r);
    groups.set(key, { ...card, images: card.images.slice(0, 1) });
  }
  return [...groups.values()];
}

/** One user's finished generations, newest first. */
export async function myGenerations(userId: string, kinds: GenerationKind[], limit = 120): Promise<SceneCard[]> {
  const { data, error } = await db()
    .from('generations')
    .select('*')
    .eq('user_id', userId)
    .eq('status', 'done')
    .in('kind', kinds)
    .order('created_at', { ascending: false })
    .limit(limit);
  if (error) throw new Error(`Couldn't load your scenes: ${error.message}`);
  return ((data ?? []) as GenerationRow[]).map(toCard);
}

export interface StudioData {
  totals: { scenes: number; countries: number; people: number };
  byCountry: Array<{ country: string; label: string; scenes: number; regions: Array<{ region: string; scenes: number }> }>;
  topDishes: Array<{ dish: string; country: string; countryId: string; scenes: number }>;
  byOccasion: Array<{ occasion: string; scenes: number }>;
  weekly: Array<{ weekStart: string; scenes: number; people: number }>;
  recent: SceneCard[];
}

const WEEKS = 12;

function weekStart(d: Date): string {
  const day = (d.getUTCDay() + 6) % 7; // Monday = 0
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() - day)).toISOString().slice(0, 10);
}

/** The shared dashboard: which regions are being visualized, activity, and the latest scenes. */
export async function studioData(): Promise<StudioData> {
  const { data, error } = await db()
    .from('generations')
    .select('*, profiles(name, email)')
    .eq('kind', 'scene')
    .eq('status', 'done')
    .order('created_at', { ascending: false })
    .limit(5000);
  if (error) throw new Error(`Couldn't load the studio: ${error.message}`);
  const rows = (data ?? []) as GenerationRow[];

  const countries = new Map<string, { label: string; scenes: number; regions: Map<string, number> }>();
  const dishes = new Map<string, { dish: string; country: string; countryId: string; scenes: number }>();
  const occasions = new Map<string, number>();
  const people = new Set<string>();
  for (const r of rows) {
    people.add(r.user_id);
    const c = r.country ?? 'unknown';
    const entry = countries.get(c) ?? { label: r.country_label ?? c, scenes: 0, regions: new Map() };
    entry.scenes++;
    if (r.region) entry.regions.set(r.region, (entry.regions.get(r.region) ?? 0) + 1);
    countries.set(c, entry);
    if (r.hero_dish) {
      const k = `${c}|${r.hero_dish.toLowerCase()}`;
      const d = dishes.get(k) ?? { dish: r.hero_dish, country: entry.label, countryId: c, scenes: 0 };
      d.scenes++;
      dishes.set(k, d);
    }
    if (r.occasion) occasions.set(r.occasion, (occasions.get(r.occasion) ?? 0) + 1);
  }

  const now = new Date();
  const weeks = new Map<string, { scenes: number; people: Set<string> }>();
  for (let i = WEEKS - 1; i >= 0; i--) {
    weeks.set(weekStart(new Date(now.getTime() - i * 7 * 86_400_000)), { scenes: 0, people: new Set() });
  }
  for (const r of rows) {
    const w = weeks.get(weekStart(new Date(r.created_at)));
    if (w) {
      w.scenes++;
      w.people.add(r.user_id);
    }
  }

  return {
    totals: { scenes: rows.length, countries: countries.size, people: people.size },
    byCountry: [...countries]
      .map(([country, v]) => ({
        country,
        label: v.label,
        scenes: v.scenes,
        regions: [...v.regions].map(([region, scenes]) => ({ region, scenes })).sort((a, b) => b.scenes - a.scenes),
      }))
      .sort((a, b) => b.scenes - a.scenes),
    topDishes: [...dishes.values()].sort((a, b) => b.scenes - a.scenes).slice(0, 10),
    byOccasion: [...occasions].map(([occasion, scenes]) => ({ occasion, scenes })).sort((a, b) => b.scenes - a.scenes),
    weekly: [...weeks].map(([ws, v]) => ({ weekStart: ws, scenes: v.scenes, people: v.people.size })),
    recent: latestTakes(rows, 24),
  };
}

export interface MemberRow {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'member';
  sceneLimit: number;
  imageLimit: number;
  usage: Usage;
}

/** Everyone with access, with this month's use. */
export async function listMembers(adminEmails: string[]): Promise<MemberRow[]> {
  const [{ data: profiles, error }, { data: gens, error: genError }] = await Promise.all([
    db().from('profiles').select('*').order('email'),
    db().from('generations').select('user_id, kind, images').neq('status', 'failed').gte('created_at', monthStart()),
  ]);
  if (error || genError) throw new Error(`Couldn't load members: ${(error ?? genError)!.message}`);
  const usage = new Map<string, Usage>();
  for (const g of gens ?? []) {
    const u = usage.get(g.user_id as string) ?? { scenes: 0, images: 0 };
    if (g.kind === 'scene') u.scenes += g.images as number;
    else u.images += g.images as number;
    usage.set(g.user_id as string, u);
  }
  return (profiles ?? []).map((p) => ({
    id: p.id as string,
    email: p.email as string,
    name: (p.name as string | null) || (p.email as string).split('@')[0]!,
    role: p.role === 'admin' || adminEmails.includes((p.email as string).toLowerCase()) ? 'admin' : 'member',
    sceneLimit: p.scene_limit as number,
    imageLimit: p.image_limit as number,
    usage: usage.get(p.id as string) ?? { scenes: 0, images: 0 },
  }));
}
