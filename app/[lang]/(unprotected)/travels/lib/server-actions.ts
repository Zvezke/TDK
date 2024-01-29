"use server";

import { createSupabaseServerComponentClient } from "@/supabase/backendClient";

interface Travels {
  title: string;
  // rich_text: any;
}

const useCreateTravel = async (travelData: any) => {
  const supabase = createSupabaseServerComponentClient<Database>();
  const { data: travel, error: travelError } = await supabase
    .from("travels")
    .insert([travelData])
    .select();
  return { travel, travelError };
};

const useGetTravels = async () => {
  const supabase = createSupabaseServerComponentClient<Database>();
  const { data: travels, error: travelsError } = await supabase
    .from("travels")
    .select();
  return { travels, travelsError };
};

export { useCreateTravel, useGetTravels };
