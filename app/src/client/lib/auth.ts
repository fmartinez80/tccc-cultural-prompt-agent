// Magic-link sign-in with Supabase. The session's access token is mirrored
// into the `sc_session` cookie so every request (tRPC, /api/upload, and
// <img src="/media/…">) carries it; the server checks it (src/server/auth.ts).

import { createClient, type Session, type SupabaseClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const COOKIE = 'sc_session';

interface PublicConfig {
  supabaseUrl: string;
  supabaseAnonKey: string;
  /** The server has a team access code set, so sign-in can skip email. */
  codeLogin?: boolean;
  /** Set on non-production copies (e.g. "Staging"); shown as a header badge. */
  envLabel?: string;
}

let configPromise: Promise<PublicConfig> | null = null;
let clientPromise: Promise<SupabaseClient> | null = null;

function publicConfig(): Promise<PublicConfig> {
  configPromise ??= fetch('/api/config')
    .then((res) => {
      if (!res.ok) throw new Error(`The app's server didn't answer (HTTP ${res.status}).`);
      return res.json() as Promise<PublicConfig>;
    })
    .catch((err: unknown) => {
      configPromise = null;
      throw err;
    });
  return configPromise;
}

/** The browser's Supabase client, configured from the server (`/api/config`). */
export function supabase(): Promise<SupabaseClient> {
  clientPromise ??= publicConfig()
    .then(({ supabaseUrl, supabaseAnonKey }) => createClient(supabaseUrl, supabaseAnonKey))
    .catch((err: unknown) => {
      clientPromise = null;
      throw err;
    });
  return clientPromise;
}

/** The environment badge text ("Staging"), or "" on production. */
export async function envLabel(): Promise<string> {
  return (await publicConfig()).envLabel ?? '';
}

/** Whether the sign-in page offers the team access code. */
export async function codeLoginEnabled(): Promise<boolean> {
  return Boolean((await publicConfig()).codeLogin);
}

/** Signs in with the team access code: no email is sent (see src/server/codeLogin.ts). */
export async function signInWithCode(email: string, code: string): Promise<void> {
  const res = await fetch('/api/code-login', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ email, code }),
  });
  const body = (await res.json().catch(() => null)) as { tokenHash?: string; type?: 'magiclink' | 'invite'; error?: string } | null;
  if (!res.ok || !body?.tokenHash || !body.type) {
    throw new Error(body?.error ?? `The app's server didn't answer properly (HTTP ${res.status}). Wait a few seconds and try again.`);
  }
  const sb = await supabase();
  const { error } = await sb.auth.verifyOtp({ token_hash: body.tokenHash, type: body.type });
  if (error) throw new Error(/banned/i.test(error.message) ? 'Your access was removed. Ask an admin.' : error.message);
}

function writeCookie(session: Session | null): void {
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  if (!session) {
    document.cookie = `${COOKIE}=; Path=/; Max-Age=0; SameSite=Lax${secure}`;
    return;
  }
  const maxAge = Math.max(60, (session.expires_at ?? 0) - Math.floor(Date.now() / 1000));
  document.cookie = `${COOKIE}=${session.access_token}; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`;
}

export type AuthState = { status: 'loading' } | { status: 'signed-out'; error?: string } | { status: 'signed-in'; email: string };

/** Tracks the session (including the magic-link redirect) and keeps the cookie in step. */
export function useAuth(): AuthState {
  const [state, setState] = useState<AuthState>({ status: 'loading' });
  useEffect(() => {
    let unsubscribe: (() => void) | undefined;
    let cancelled = false;
    supabase()
      .then(async (sb) => {
        const apply = (session: Session | null) => {
          writeCookie(session);
          if (!cancelled) setState(session?.user.email ? { status: 'signed-in', email: session.user.email } : { status: 'signed-out' });
        };
        const { data } = sb.auth.onAuthStateChange((_event, session) => apply(session));
        unsubscribe = () => data.subscription.unsubscribe();
        apply((await sb.auth.getSession()).data.session);
      })
      .catch((err: unknown) => {
        if (!cancelled) setState({ status: 'signed-out', error: err instanceof Error ? err.message : String(err) });
      });
    return () => {
      cancelled = true;
      unsubscribe?.();
    };
  }, []);
  return state;
}

/** Emails a sign-in link. Only invited people get one: no account is created here. */
export async function sendMagicLink(email: string): Promise<void> {
  const sb = await supabase();
  const { error } = await sb.auth.signInWithOtp({
    email,
    options: { shouldCreateUser: false, emailRedirectTo: window.location.origin },
  });
  if (error) {
    throw new Error(
      /signups not allowed|not found|invalid/i.test(error.message)
        ? "That email hasn't been invited yet. Ask an admin for access."
        : error.message,
    );
  }
}

/**
 * After the server said "sign in again": refresh the session in place (the
 * usual case, an expired access token) and report true, or send the user to
 * the sign-in page when that isn't possible.
 */
export async function refreshOrSignOut(): Promise<boolean> {
  const sb = await supabase();
  const { data, error } = await sb.auth.refreshSession();
  if (!error && data.session) {
    writeCookie(data.session);
    return true;
  }
  await signOut();
  return false;
}

export async function signOut(): Promise<void> {
  const sb = await supabase();
  await sb.auth.signOut();
  writeCookie(null);
  window.location.assign('/');
}
