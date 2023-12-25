// Supabase
import { createSupabaseServerComponentClient } from "@/supabase/backendClient";

export function useServerAuthSession() {
  const fetchSession = async () => {
    const supabase = createSupabaseServerComponentClient<Database>();

    const { data } = await supabase.auth.getSession();

    return { data };
  };
  return fetchSession();
}
