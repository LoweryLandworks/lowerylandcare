import { createClient } from "@supabase/supabase-js";

// Server-only admin client. Env vars are set in Vercel — never hardcode keys.
// SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY must NOT be prefixed NEXT_PUBLIC_.
export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error(
      "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variable"
    );
  }
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
