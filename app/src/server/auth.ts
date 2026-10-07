// Who is signed in. The browser signs in with a Supabase magic link and keeps
// the session's access token in the `sc_session` cookie (see
// src/client/lib/auth.ts); every request is checked here against Supabase and
// matched to a row in `profiles` (role and monthly limits).

import type Koa from 'koa';

import { env } from './env.ts';
import { db } from './supabase.ts';

export type Role = 'admin' | 'member';

export interface AppUser {
  id: string;
  email: string;
  name: string;
  role: Role;
  sceneLimit: number;
  imageLimit: number;
}

export const SESSION_COOKIE = 'sc_session';

const TOKEN_TTL_MS = 60_000;
const tokenCache = new Map<string, { at: number; user: AppUser | null }>();

function tokenFrom(ctx: Koa.Context): string | null {
  const header = ctx.get('authorization');
  if (header.toLowerCase().startsWith('bearer ')) return header.slice(7).trim() || null;
  return ctx.cookies.get(SESSION_COOKIE) || null;
}

interface ProfileRow {
  id: string;
  email: string;
  name: string | null;
  role: Role;
  scene_limit: number;
  image_limit: number;
}

function toUser(row: ProfileRow): AppUser {
  const admin = row.role === 'admin' || env.adminEmails.includes(row.email.toLowerCase());
  return {
    id: row.id,
    email: row.email,
    name: row.name || row.email.split('@')[0] || row.email,
    role: admin ? 'admin' : 'member',
    sceneLimit: row.scene_limit,
    imageLimit: row.image_limit,
  };
}

/** The user's profile; created on first sign-in if the database trigger didn't. */
async function loadProfile(id: string, email: string, name: string | undefined): Promise<AppUser> {
  const { data, error } = await db().from('profiles').select('*').eq('id', id).maybeSingle();
  if (error) throw new Error(`Couldn't load the profile: ${error.message}`);
  if (data) return toUser(data as ProfileRow);
  const row: ProfileRow = {
    id,
    email,
    name: name ?? null,
    role: 'member',
    scene_limit: env.defaultSceneLimit,
    image_limit: env.defaultImageLimit,
  };
  const { error: insertError } = await db().from('profiles').upsert(row, { onConflict: 'id' });
  if (insertError) throw new Error(`Couldn't create the profile: ${insertError.message}`);
  return toUser(row);
}

async function verify(token: string): Promise<AppUser | null> {
  const hit = tokenCache.get(token);
  if (hit && Date.now() - hit.at < TOKEN_TTL_MS) return hit.user;
  const { data, error } = await db().auth.getUser(token);
  let user: AppUser | null = null;
  if (!error && data.user?.email) {
    const meta = data.user.user_metadata as { full_name?: string; name?: string } | undefined;
    user = await loadProfile(data.user.id, data.user.email, meta?.full_name ?? meta?.name);
  }
  tokenCache.set(token, { at: Date.now(), user });
  if (tokenCache.size > 2000) {
    for (const [k, v] of tokenCache) if (Date.now() - v.at > TOKEN_TTL_MS) tokenCache.delete(k);
  }
  return user;
}

/** Drops cached sessions so a limit or role change shows on the next request. */
export function forgetSessions(): void {
  tokenCache.clear();
}

declare module 'koa' {
  interface DefaultState {
    user?: AppUser | undefined;
  }
}

/** Sets `ctx.state.user` when the request carries a valid session; never blocks on its own. */
export function sessionMiddleware(): Koa.Middleware {
  return async (ctx, next) => {
    const token = tokenFrom(ctx);
    if (token) {
      try {
        ctx.state.user = (await verify(token)) ?? undefined;
      } catch (err) {
        console.warn(`[auth] session check failed: ${err instanceof Error ? err.message : String(err)}`);
      }
    }
    await next();
  };
}
