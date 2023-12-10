"use client";

import React from "react";

// NextJS
// import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

// Supabase
import { createSupabaseFrontendClient } from "@/supabase/frontendClient";

const UploadVoice = ({ songTitle }: { songTitle: string }) => {
  const router = useRouter();
  const addVoice = async (e: any) => {
    const supabase = createSupabaseFrontendClient();
    const file = e.target.files[0];
    const fileName = file.name;
    const { data, error } = await supabase.storage
      .from("voices-storage")
      .upload(`${songTitle}/${fileName}`, file);
    // console.log("data", data);
    // console.log("error", error);
    // revalidatePath(
    //   process.env.NEXT_PUBLIC_RAILWAY_URL +
    //     `/da/intra/oevestemmer/get-list-voices/${songTitle}`
    // );
    router.refresh();
  };

  return <input type="file" onChange={(e) => addVoice(e)} />;
};

export default UploadVoice;
