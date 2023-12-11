"use client";

// React
import { useState } from "react";
import ModalAddTitle from "./ModalAddTitle";

export default function ButtonAddSong() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        type="button"
        className="rounded-md bg-tdk-blue-800 px-2.5 py-1.5 text-sm font-semibold text-tdk-blue-200 shadow-sm hover:bg-tdk-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tdk-blue-800"
      >
        Tilføj sang
      </button>
      <ModalAddTitle open={open} setOpen={setOpen} />
    </>
  );
}
