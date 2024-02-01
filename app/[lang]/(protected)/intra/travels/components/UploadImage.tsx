"use client";

import React, { useRef } from "react";

// NextJS
import { useRouter } from "next/navigation";

// Utils
import { addImage } from "../utils/imageUtils";
import { useTravel } from "../context/TravelContext";

// Types
type Props = {
  imageTitle?: string;
};

const UploadImage = ({ imageTitle }: Props) => {
  const { imageUrl, setImageUrl } = useTravel();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (e: any) => {
    console.log("UploadImage, handleFileUpload, imageUrl", imageUrl);
    await addImage(e, fileInputRef, setImageUrl, imageTitle);
    router.refresh();
  };

  return (
    <>
      <label
        className="rounded-md cursor-pointer bg-tdk-blue-800 px-2.5 py-1.5 text-xs font-semibold text-tdk-blue-200 shadow-sm hover:bg-tdk-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tdk-blue-800"
        // className="mt-2 cursor-pointer rounded-md border-2 border-gray-300 bg-gray-50 px-2 py-1 text-xs hover:bg-gray-100"
        htmlFor={`file-upload`}
      >
        Tilføj billede
      </label>
      <input
        id={`file-upload`}
        className="hidden"
        ref={fileInputRef}
        type="file"
        onChange={(e) => handleFileUpload(e)}
      />
    </>
  );
};

export default UploadImage;
