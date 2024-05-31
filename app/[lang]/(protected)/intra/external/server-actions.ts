"use server";

// NextJS
import { revalidatePath } from "next/cache";

// Supabase
import { createSupabaseServerComponentClient } from "@/supabase/backendClient";

/////////
// GET //
/////////

// Get all events
const useGetAllEvents = async () => {
  const supabase = createSupabaseServerComponentClient<Database>();
  let { data: events, error: eventsError } = await supabase
    .from("events")
    .select("*")
    .order("date", { ascending: false });
  revalidatePath("/[lang]/(unprotected)/components/EventsCards");
  return { events, eventsError };
};

////////////
// CREATE //
////////////

// Create event

interface Event {
  body: string | null;
  date: string | null;
  title: string | null;
}
const useCreateEvent = async (eventData: Event) => {
  const supabase = createSupabaseServerComponentClient<Database>();
  let { data: supabaseEvent, error: supabaseEventError } = await supabase
    .from("events")
    .upsert([eventData])
    .select("*")
    .single();

  // console.log("Before revalidation");

  // Replace the path with the appropriate dynamic path
  // revalidatePath("/[lang]/intra/external/components/EventsInternal", "layout");

  // console.log("After revalidation");

  // app/[lang]/(protected)/intra/external/components/EventsInternal.tsx
  return { supabaseEvent, supabaseEventError };
};

//////////////////
// Delete event //
//////////////////

// Delete event
const useDeleteEvent = async (eventId: string) => {
  const supabase = createSupabaseServerComponentClient<Database>();
  const { error: deleteEventError } = await supabase
    .from("events")
    .delete()
    .eq("id", eventId);
  revalidatePath("/[lang]/(protected)/intra/external/components/Events");
  return { deleteEventError };
};

export { useGetAllEvents, useCreateEvent, useDeleteEvent };
