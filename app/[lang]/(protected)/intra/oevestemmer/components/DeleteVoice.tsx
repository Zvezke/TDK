"use client";

import { deleteVoice } from "./ListVoices";

const DeleteVoice = ({
  songTitle,
  voiceName,
}: {
  songTitle: string;
  voiceName: string;
}) => {
  return (
    <>
      <button
        className="cursor-pointer"
        onClick={async () => await deleteVoice(songTitle, voiceName)}
      >
        Slet
      </button>
    </>
  );
};

export default DeleteVoice;
