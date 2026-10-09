import { createClient, type SupabaseClient } from '@supabase/supabase-js';

import { env } from './env.ts';

let admin: SupabaseClient | null = null;

/**
 * The server's Supabase client, with the service-role key: it bypasses
 * row-level security, so it never leaves the server. Every table has RLS on
 * with no policies, so the browser's anon key can read nothing directly.
 */
export function db(): SupabaseClient {
  admin ??= createClient(env.supabaseUrl, env.supabaseServiceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return admin;
}
