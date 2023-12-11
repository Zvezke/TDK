import { revalidatePath } from "next/cache";

import { createSupabaseBackendClient } from "@/supabase/backendClient";

const AddSong = async () => {
  const addSong = async (formData: FormData) => {
    "use server";
    const supabase = createSupabaseBackendClient<Database>();
    const title = formData.get("title")?.toString() ?? "";

    // Check if title is empty
    if (title.trim() === "") {
      throw new Error("Title is required");
    }

    // NB. Error handling missing
    const { data, error } = await supabase
      .from("songs")
      .insert([{ title: title }])
      .select();

    revalidatePath(
      process.env.NEXT_PUBLIC_RAILWAY_URL + "/da/intra/oevestemmer/get-song"
    );
  };

  const deleteSong = async (songTitle: string) => {
    "use server";
    const supabase = createSupabaseBackendClient<Database>();

    // NB. Error handling missing
    const { data, error } = await supabase
      .from("songs")
      .delete()
      .match({ title: songTitle })
      .select();

    revalidatePath(
      process.env.NEXT_PUBLIC_RAILWAY_URL + "/da/intra/oevestemmer/get-song"
    );
  };

  return (
    <>
      <form className="flex gap-4" action={addSong}>
        <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-tdk-blue-700bg-tdk-blue-700 focus-within:ring-1 focus-within:ring-tdk-blue-700bg-tdk-blue-700">
          <label htmlFor="title" className="sr-only">
            Titel
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="block w-full border-0 text-lg py-0.5 font-medium placeholder:text-gray-400 focus:ring-0"
            placeholder="Titel"
            required
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-tdk-blue-800 px-2.5 py-1.5 text-sm font-semibold text-tdk-blue-200 shadow-sm hover:bg-tdk-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tdk-blue-800"
        >
          Tilføj sang
        </button>
      </form>
    </>
  );
};

export default AddSong;
