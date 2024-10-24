"use client";

import React from "react";

// NextJS
import { useRouter } from "next/navigation";

// Supabase
import { createSupabaseFrontendClient } from "@/supabase/frontendClient";

const DeleteSong = ({ songTitle }: { songTitle: string }) => {
  const router = useRouter();
  const deleteSong = async (e: any) => {
    const supabase = createSupabaseFrontendClient();

    // Delete the song from the "songs" table
    await supabase.from("songs").delete().eq("title", songTitle);

    // Remove the song's folder from the "voices-storage" bucket
    await supabase.storage.from("voices-storage").remove([`${songTitle}`]);

    // Refresh the page to reflect the changes
    router.refresh();
  };

  return (
    <button
      className="cursor-pointer border-2 border-gray-300 text-xs rounded-md px-2 py-1 hover:bg-gray-50"
      onClick={deleteSong}
    >
      Slet sang
    </button>
  );
};

export default DeleteSong;
