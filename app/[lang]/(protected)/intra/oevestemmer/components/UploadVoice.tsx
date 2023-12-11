"use client";

import React from "react";

// NextJS
// import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

// Supabase
import { createSupabaseFrontendClient } from "@/supabase/frontendClient";

const replaceDanishCharacters = (str: string) => {
  const map: { [key: string]: string } = {
    ø: "oe",
    Ø: "Oe",
    æ: "ae",
    Æ: "Ae",
    å: "aa",
    Å: "Aa",
  };

  return str.replace(/[øåæ]/g, (match) => map[match]);
};

const UploadVoice = ({ songTitle }: { songTitle: string }) => {
  const router = useRouter();
  const addVoice = async (e: any) => {
    const supabase = createSupabaseFrontendClient();
    const file = e.target.files[0];
    const fileName = file.name;
    const sanitizedSongTitle = replaceDanishCharacters(songTitle);
    // Remove 'data' and 'error' from the destructuring assignment to avoid unused variables.
    const { data, error } = await supabase.storage
      .from("voices-storage")
      .upload(`${sanitizedSongTitle}/${fileName}`, file);
    // console.log("data", data);
    // console.log("error", error);
    // revalidatePath(
    //   process.env.NEXT_PUBLIC_RAILWAY_URL +
    //     `/da/intra/oevestemmer/get-list-voices/${songTitle}`
    // );
    router.refresh();
  };

  return (
    <>
      <label className="cursor-pointer" htmlFor={`file-upload-${songTitle}`}>
        Tilføj fil
      </label>
      <input
        id={`file-upload-${songTitle}`}
        className="hidden"
        type="file"
        onChange={(e) => addVoice(e)}
      />
    </>
  );
};

export default UploadVoice;
