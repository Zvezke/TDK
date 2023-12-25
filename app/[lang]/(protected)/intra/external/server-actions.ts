"use server";

// Supabase
import { createSupabaseServerComponentClient } from "@/supabase/backendClient";

/////////
// GET //
/////////

// Get all users
const useGetAllEvents = async () => {
  const supabase = createSupabaseServerComponentClient<Database>();
  let { data: events, error: eventsError } = await supabase
    .from("events")
    .select("*");
  return { events, eventsError };
};

export { useGetAllEvents };
