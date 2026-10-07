// Magic-link sign-in with Supabase. The session's access token is mirrored
// into the `sc_session` cookie so every request (tRPC, /api/upload, and
// <img src="/media/…">) carries it; the server checks it (src/server/auth.ts).

import { createClient, type Session, type SupabaseClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const COOKIE = 'sc_session';

let clientPromise: Promise<SupabaseClient> | null = null;

/** The browser's Supabase client, configured from the server (`/api/config`). */
export function supabase(): Promise<SupabaseClient> {
  clientPromise ??= fetch('/api/config')
    .then((res) => {
      if (!res.ok) throw new Error(`The app's server didn't answer (HTTP ${res.status}).`);
      return res.json() as Promise<{ supabaseUrl: string; supabaseAnonKey: string }>;
    })
    .then(({ supabaseUrl, supabaseAnonKey }) => createClient(supabaseUrl, supabaseAnonKey))
    .catch((err: unknown) => {
      clientPromise = null;
      throw err;
    });
  return clientPromise;
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
