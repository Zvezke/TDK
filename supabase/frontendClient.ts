import { createBrowserClient } from "@supabase/ssr";

// Frontend
export function createSupabaseFrontendClient<Database>() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}