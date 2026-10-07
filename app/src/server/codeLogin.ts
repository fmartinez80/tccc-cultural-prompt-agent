// Sign-in with a shared team access code instead of an emailed link, for
// while email delivery is limited. Anyone with the code signs in with their
// work email; a first-time email gets an account (normal member limits).
// No email is sent: the server asks Supabase for a one-time token and the
// browser exchanges it for a session (verifyOtp).

import { timingSafeEqual } from 'node:crypto';

import { env } from './env.ts';
import { db } from './supabase.ts';

const WINDOW_MS = 10 * 60_000;
const MAX_TRIES = 10;
const tries = new Map<string, { at: number; n: number }>();

/** Ten tries per address per ten minutes, so the code can't be guessed by brute force. */
export function allowTry(ip: string): boolean {
  const now = Date.now();
  const t = tries.get(ip);
  if (!t || now - t.at > WINDOW_MS) {
    tries.set(ip, { at: now, n: 1 });
    if (tries.size > 5000) for (const [k, v] of tries) if (now - v.at > WINDOW_MS) tries.delete(k);
    return true;
  }
  t.n += 1;
  return t.n <= MAX_TRIES;
}

export function codeMatches(code: string): boolean {
  const want = Buffer.from(env.accessCode);
  const got = Buffer.from(code.trim());
  return want.length > 0 && got.length === want.length && timingSafeEqual(got, want);
}

export class CodeLoginError extends Error {}

/** A one-time token for `email`, creating the account on first use. */
export async function codeLoginToken(email: string): Promise<{ tokenHash: string; type: 'magiclink' | 'invite' }> {
  const magic = await db().auth.admin.generateLink({ type: 'magiclink', email });
  if (!magic.error && magic.data.properties?.hashed_token) {
    return { tokenHash: magic.data.properties.hashed_token, type: 'magiclink' };
  }
  const invite = await db().auth.admin.generateLink({ type: 'invite', email });
  if (!invite.error && invite.data.properties?.hashed_token) {
    return { tokenHash: invite.data.properties.hashed_token, type: 'invite' };
  }
  const message = invite.error?.message ?? magic.error?.message ?? 'no token returned';
  throw new CodeLoginError(`Couldn't sign in ${email}: ${message}`);
}
