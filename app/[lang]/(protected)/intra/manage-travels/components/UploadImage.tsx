"use client";

import React, { useRef } from "react";

// NextJS
import { useRouter } from "next/navigation";

// Utils
import { addImage } from "../utils/imageUtils";

// Types
type Props = {
  imageTitle: string;
};

const UploadImage = ({ imageTitle }: Props) => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (e: any) => {
    await addImage(imageTitle, e, fileInputRef);
    router.refresh();
  };

  return (
    <>
      <label
        className="cursor-pointer border-2 border-gray-300 text-xs rounded-md px-2 py-1 hover:bg-gray-50"
        htmlFor={`file-upload-${imageTitle}`}
      >
        Tilføj billede
      </label>
      <input
        id={`file-upload-${imageTitle}`}
        className="hidden"
        ref={fileInputRef}
        type="file"
        onChange={(e) => handleFileUpload(e)}
      />
    </>
  );
};

export default UploadImage;
