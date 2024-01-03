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
    .order("date", { ascending: true });
  revalidatePath("/[lang]/(unprotected)/components/EventCards");
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
  let { data: event, error: eventError } = await supabase
    .from("events")
    .insert([eventData])
    .select("*");
  revalidatePath("/[lang]/(protected)/intra/external/components/Events");
  return { event, eventError };
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
