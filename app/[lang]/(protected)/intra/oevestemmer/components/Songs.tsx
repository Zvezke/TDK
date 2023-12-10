import { revalidatePath } from "next/cache";
import React, { Suspense } from "react";
import UploadVoice from "./UploadVoice";
import ListVoices from "./ListVoices";

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
  console.log("songData", songData);
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
              <h2 className="mb-4 text-base font-semibold">{song.title}</h2>
              <UploadVoice songTitle={song.title ?? ""} />
              <Suspense fallback={<div>Henter stemmer ...</div>}>
                {/* @ts-expect-error Async Server Component */}
                <ListVoices songTitle={song.title ?? "asdf"} />
              </Suspense>
            </div>
          ))}
    </>
  );
};

export default Songs;
