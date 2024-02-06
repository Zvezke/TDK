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
    console.log("UploadImage, handleReplaceImage, imageUrl", imageUrl);
    await removeChosenImage(fileInputRef, setImageUrl, imageUrl);
    // await removeChosenImage(e, fileInputRef, setImageUrl, imageUrl);
    router.refresh();
  };

  console.log("UploadImage, imageUrl", imageUrl);

  return (
    <>
      {imageUrl === null ? (
        <label
          className="w-24 cursor-pointer rounded-md bg-tdk-blue-800 px-2.5 py-1.5 text-xs font-semibold text-tdk-blue-200 shadow-sm hover:bg-tdk-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tdk-blue-800"
          htmlFor={`file-upload`}
        >
          Tilføj billede
        </label>
      ) : (
        <Image
          className="w-24 rounded-md border-2 border-gray-300 bg-gray-50 text-xs hover:cursor-pointer hover:bg-gray-100"
          onClick={(e) => handleReplaceImage(e)}
          src={imageUrl as string}
          width={50}
          height={50}
          alt="image title"
          objectFit="cover"
        />
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
