"use server";

import { createSupabaseBackendClient } from "@/supabase/backendClient";
import { createSupabaseFrontendClient } from "@/supabase/frontendClient";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import React from "react";
import DeleteVoice from "./DeleteVoice";
import { useRouter } from "next/navigation";

interface Voice {
  name: string;
  id: string;
  updated_at: string;
  created_at: string;
  last_accessed_at: string;
}

const replaceDanishCharacters = (str: string) => {
  const map: { [key: string]: string } = {
    ø: "oe",
    Ø: "Oe",
    æ: "ae",
    Æ: "Ae",
    å: "aa",
    Å: "Aa",
  };

  return str.replace(/[øåæØÅÆ]/g, (match) => map[match]);
};

export const deleteVoice = async (songTitle: string, voiceName: string) => {
  // console.log("ListVoices.tsx, deleteVoice, songTitle", songTitle);
  // console.log("ListVoices.tsx, deleteVoice, voiceName", voiceName);
  // const router = useRouter();
  // const supabase = createSupabaseFrontendClient<Database>();
  const sanitizedSongTitle = replaceDanishCharacters(songTitle);
  const encodedVoiceName = encodeURIComponent(voiceName);

  const res = await fetch(
    process.env.NEXT_PUBLIC_RAILWAY_URL +
      `/da/intra/oevestemmer/delete-voice/${sanitizedSongTitle}/${encodedVoiceName}`
  );

  revalidatePath(
    process.env.NEXT_PUBLIC_RAILWAY_URL +
      `/da/intra/oevestemmer/get-list-voices/${songTitle}`
  );
};

const ListVoices = async ({ songTitle }: { songTitle: string }) => {
  const getListOfVoices = async () => {
    const sanitizedSongTitle = replaceDanishCharacters(songTitle);
    const res = await fetch(
      process.env.NEXT_PUBLIC_RAILWAY_URL +
        `/da/intra/oevestemmer/get-list-voices/${sanitizedSongTitle}`
    );
    return res.json();
  };

  let voices = await getListOfVoices();

  return (
    <div className="mt-4">
      <ul className="flex flex-col gap-2">
        {voices &&
          voices?.list?.map((voice: Voice) => (
            <li
              key={voice.id}
              className={
                voice.name === ".emptyFolderPlaceholder"
                  ? "hidden"
                  : "px-2 py-1 text-xs font-normal text-tdk-blue-800 bg-gray-100 rounded-md"
              }
            >
              {voice.name === ".emptyFolderPlaceholder" ? null : (
                <div className="flex justify-between">
                  <Link href={`${voices?.url?.publicUrl}/${voice.name}`}>
                    {voice.name}
                  </Link>
                  <DeleteVoice songTitle={songTitle} voiceName={voice.name} />
                </div>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ListVoices;
