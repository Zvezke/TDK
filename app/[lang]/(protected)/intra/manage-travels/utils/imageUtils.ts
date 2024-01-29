import { RefObject } from "react";

import { createSupabaseFrontendClient } from "@/supabase/frontendClient";
// import { useRouter } from "next/navigation";

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
    .replace(/\s+/g, "-");
};

const addImage = async (
  imageTitle: string,
  e: any,
  fileInputRef: RefObject<HTMLInputElement>
) => {
  // const router = useRouter();
  const supabase = createSupabaseFrontendClient<Database>();
  const file = e.target.files[0];
  const fileName = file.name;
  const sanitizedImageTitle = makeUrlFriendly(imageTitle);

  const { error: travelsStorageError } = await supabase.storage
    .from("travels-storage")
    .upload(`${sanitizedImageTitle}/${fileName}`, file);

  if (fileInputRef.current) {
    fileInputRef.current.value = "";
  }

  const { error: imageUrlError } = await supabase
    .from("travels")
    .insert([
      {
        image_url: (process.env.NEXT_PUBLIC_SUPABASE_TRAVELS_IMAGE_URL +
          `/${sanitizedImageTitle}/${fileName}`) as string,
      },
    ])
    .select("*");

  if (travelsStorageError || imageUrlError) {
    console.log("UploadImage, error", travelsStorageError, imageUrlError);
    return;
  }

  // router.refresh();
};

export { addImage };
