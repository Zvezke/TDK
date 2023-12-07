import { revalidatePath } from "next/cache";
import React from "react";
import InputAddVoice from "./InputAddVoice";
import ListVoices from "./ListVoices";

const Songs = async () => {
  const getSong = async () => {
    const res = await fetch(
      "https://trekor-development.up.railway.app/da/intra/oevestemmer/get-song"
    );
    // console.log("res, getSong", res);
    return res.json();
  };

  const getListOfVoices = async () => {
    const res = await fetch(
      "https://trekor-development.up.railway.app/da/intra/oevestemmer/get-list-voices"
    );
    // console.log("res", res);
    revalidatePath(
      "https://trekor-development.up.railway.app/da/intra/oevestemmer/get-list-voices"
    );

    return res.json();
  };

  let data = await getSong();
  let voices = await getListOfVoices();
  // console.log("data", data);
  // console.log("voices", voices);

  return (
    <>
      {data &&
        data?.songs?.map((song: Songs) => (
          <div key={song.id} className="col-span-1">
            <h2 className="mb-4 text-base font-semibold">{song.title}</h2>
            <InputAddVoice songTitle={song.title ?? ""} />
            <ListVoices voices={voices} />
          </div>
        ))}
    </>
  );
};

export default Songs;
