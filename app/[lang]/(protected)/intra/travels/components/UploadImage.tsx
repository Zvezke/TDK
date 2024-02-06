"use client";

import React, { Suspense, useRef } from "react";

// NextJS
import { useRouter } from "next/navigation";

// Utils
import { addImage, removeChosenImage } from "../utils/imageUtils";
import { useTravel } from "../context/TravelContext";
import Image from "next/image";

// Types
// type Props = {
//   imageTitle?: string;
// };

const UploadImage = () => {
  const { imageUrl, setImageUrl } = useTravel();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (e: any) => {
    console.log("UploadImage, handleFileUpload, imageUrl", imageUrl);
    await addImage(e, fileInputRef, setImageUrl);
    router.refresh();
  };

  const handleReplaceImage = async (e: any) => {
    await removeChosenImage(fileInputRef, setImageUrl, imageUrl);
    router.refresh();
  };

  return (
    <>
      {imageUrl === null ? (
        <label
          className="h-11 w-24 cursor-pointer rounded-md bg-tdk-blue-800 px-2.5 py-1.5 text-xs font-semibold text-tdk-blue-200 shadow-sm hover:bg-tdk-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tdk-blue-800"
          htmlFor={`file-upload`}
        >
          Tilføj billede
        </label>
      ) : (
        <div className="group relative">
          <Image
            className="h-11 w-24 rounded-md border-2 border-gray-300 bg-gray-50"
            src={imageUrl as string}
            width={50}
            height={50}
            alt="image title"
            objectFit="cover"
          />
          <div
            className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-md bg-red-700 bg-opacity-50 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            onClick={(e) => handleReplaceImage(e)}
          >
            Fjern billede
          </div>
        </div>
      )}
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
