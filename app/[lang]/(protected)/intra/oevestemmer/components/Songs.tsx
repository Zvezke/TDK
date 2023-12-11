// import { revalidatePath } from "next/cache";
import React, { Suspense } from "react";
import UploadVoice from "./UploadVoice";
import ListVoices from "./ListVoices";
import DeleteSong from "./DeleteSong";

const Songs = async () => {
  const getSong = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_RAILWAY_URL + "/da/intra/oevestemmer/get-song"
    );
    // console.log("res, getSong", res);
    return res.json();
  };

  let songData = await getSong();
  // console.log("songData, title", songData?.songs[0].title);

  // console.log(
  //   process.env.NEXT_PUBLIC_RAILWAY_URL + "/da/intra/oevestemmer/get-song"
  // );

  // let voices = await getListOfVoices();
  // console.log("songData", songData);
  // console.log("voices", voices);

  return (
    <>
      {songData &&
        songData?.songs
          ?.sort((a: Songs, b: Songs) =>
            (a.title ?? "").localeCompare(b.title ?? "")
          )
          .map((song: Songs) => (
            <div key={song.id} className="col-span-1">
              <div className="flex flex-col gap-2 mt-4 justify-between items-start">
                <h2 className="text-base font-semibold">{song.title}</h2>
                <div className="flex">
                  <div className="flex gap-2">
                    <DeleteSong songTitle={song.title ?? ""} />
                    <UploadVoice songTitle={song.title ?? ""} />
                  </div>
                </div>
              </div>
              <Suspense fallback={<div>Henter stemmer ...</div>}>
                {/* @ts-expect-error Async Server Component */}
                <ListVoices songTitle={song.title ?? ""} />
              </Suspense>
            </div>
          ))}
    </>
  );
};

export default Songs;
