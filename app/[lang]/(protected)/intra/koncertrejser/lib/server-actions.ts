"use server";

import { revalidatePath } from "next/cache";

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
    .select()
    .single();
  revalidatePath(
    "app/[lang]/(protected)/intra/travels/components/TravelsInternal"
  );
  return { travel, travelError };
};

const useGetTravels = async () => {
  const supabase = createSupabaseServerComponentClient<Database>();
  const { data: travels, error: travelsError } = await supabase
    .from("travels")
    .select();
  return { travels, travelsError };
};

////////////
// DELETE //
////////////

const useDeleteTravel = async (travelId: string, fileName: string) => {
  const supabase = createSupabaseServerComponentClient<Database>();
  const { error: travelDeleteError } = await supabase
    .from("travels")
    .delete()
    .eq("id", travelId);

  const { error: travelImageDeleteError } = await supabase.storage
    .from("travels-storage")
    .remove([fileName]);

  revalidatePath(
    "app/[lang]/(protected)/intra/travels/components/TravelsInternal"
  );
  return { travelDeleteError, travelImageDeleteError };
};

const useDeletePreviousTravelImage = async (fileName: string) => {
  const supabase = createSupabaseServerComponentClient<Database>();
  const { error: travelImageDeleteError } = await supabase.storage
    .from("travels-storage")
    .remove([fileName]);
  return { travelImageDeleteError };
};

export {
  useCreateTravel,
  useGetTravels,
  useDeleteTravel,
  useDeletePreviousTravelImage,
};
