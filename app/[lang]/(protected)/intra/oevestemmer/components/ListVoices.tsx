import Link from "next/link";
import React from "react";

interface Voice {
  name: string;
  id: string;
  updated_at: string;
  created_at: string;
  last_accessed_at: string;
}

const ListVoices = async ({ songTitle }: { songTitle: string }) => {
  console.log("songTitle", songTitle);
  const getListOfVoices = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_RAILWAY_URL +
        `/da/intra/oevestemmer/get-list-voices/${songTitle}`
    );
    return res.json();
  };

  let voices = await getListOfVoices();
  console.log("getListVoices, voices", voices);

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
                <Link href={`${voices?.url?.publicUrl}/${voice.name}`}>
                  {voice.name}
                </Link>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ListVoices;
