import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

// Backend
export function createSupabaseBackendClient<Database>(
  serverComponents: any = false
) {
  const cookieStore = cookies();
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options?: CookieOptions) {
          if (serverComponents) return;
          cookieStore.set(name, value, options);
        },
        remove(name: string, value: string, options?: CookieOptions) {
          if (serverComponents) return;
          cookieStore.set(name, "", options);
        },
      },
    }
  );
}

// Server Components
export function createSupabaseServerComponentClient<Database>() {
  return createSupabaseBackendClient<Database>(true);
}
