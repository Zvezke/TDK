import { RefObject } from "react";
import { createSupabaseFrontendClient } from "@/supabase/frontendClient";
import { v4 as uuidv4 } from "uuid";

const makeUrlFriendly = (str: string) => {
  const map: { [key: string]: string } = {
    ø: "oe",
    Ø: "oe",
    æ: "ae",
    Æ: "ae",
    å: "aa",
    Å: "aa",
  };

  return str
    .replace(/[øØåÅæÆ]/g, (match) => map[match])
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/~/g, "-");
};

const addImage = async (
  e: any,
  fileInputRef: RefObject<HTMLInputElement>,
  setImageUrl: (id: string | null) => void,
  imageTitle?: string
) => {
  const supabase = createSupabaseFrontendClient<Database>();
  const file = e.target.files[0];
  const fileName = file.name;
  const uuid = uuidv4();
  const sanitizedImageTitle = makeUrlFriendly(fileName);

  const { data, error: travelsStorageError } = await supabase.storage
    .from("travels-storage")
    .upload(`${uuid}_${sanitizedImageTitle}`, file);

  console.log("UploadImage, data", data);
  console.log("UploadImage, travelsStorageError", travelsStorageError);
  setImageUrl(
    `https://spdjrgyjutrearvffuvp.supabase.co/storage/v1/object/public/travels-storage/${data?.path}`
    // `${process.env.NEXT_PUBLIC_SUPABASE_TRAVELS_IMAGE_URL!}/${data?.path}`
  );

  if (fileInputRef.current) {
    fileInputRef.current.value = "";
  }

  if (travelsStorageError) {
    console.log("UploadImage, error", travelsStorageError);
    return;
  }
};

const removeChosenImage = async (
  fileInputRef: RefObject<HTMLInputElement>,
  setImageUrl: (id: string | null) => void,
  imageUrl: string | null
) => {
  const supabase = createSupabaseFrontendClient<Database>();
  const fileNameFromPreviousUrl = imageUrl?.split("/").pop();

  const { error: travelsStorageError } = await supabase.storage
    .from("travels-storage")
    .remove([fileNameFromPreviousUrl!]);
  if (travelsStorageError) {
    console.log("UploadImage, error", travelsStorageError);
    return;
  }
  setImageUrl(null);

  if (fileInputRef.current) {
    fileInputRef.current.value = "";
  }
};

export { addImage, removeChosenImage };
