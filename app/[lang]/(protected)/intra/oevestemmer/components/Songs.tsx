import React, { Suspense } from "react";
import UploadVoice from "./UploadVoice";
import ListVoices from "./ListVoices";
import DeleteSong from "./DeleteSong";
import { createSupabaseServerComponentClient } from "@/supabase/backendClient";

const Songs = async () => {
  const supabase = createSupabaseServerComponentClient();
  const { data } = await supabase.auth.getSession();

  // Function to fetch song data from the server
  const getSong = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_RAILWAY_URL + "/da/intra/oevestemmer/get-song"
    );
    return res.json();
  };

  let songData = await getSong();

  return (
    <>
      {songData &&
        songData?.songs
          ?.sort((a: Songs, b: Songs) =>
            (a.title ?? "").localeCompare(b.title ?? "")
          )
          .map((song: Songs) => (
            <div key={song.id} className="col-span-1">
              <div className="mt-4 flex flex-col items-start justify-between gap-2">
                <h2 className="text-base font-semibold">{song.title}</h2>
                <div className="flex">
                  <div className="flex gap-2">
                    {data.session?.user?.id === process.env.ADMINID && (
                      <DeleteSong songTitle={song.title ?? ""} />
                    )}
                    {data.session?.user?.id === process.env.ADMINID && (
                      <UploadVoice songTitle={song.title ?? ""} />
                    )}
                  </div>
                </div>
              </div>
              <Suspense fallback={<div>Henter stemmer ...</div>}>
                {/* @ts-ignore Async Server Component */}
                <ListVoices songTitle={song.title ?? ""} />
              </Suspense>
            </div>
          ))}
    </>
  );
};

export default Songs;
