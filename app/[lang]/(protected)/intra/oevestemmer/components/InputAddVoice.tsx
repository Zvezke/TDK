"use client";

// ButtonAddVoice.tsx
import { createSupabaseFrontendClient } from "@/supabase/frontendClient";
import React from "react";

const InputAddVoice = ({ songTitle }: { songTitle: string }) => {
  const addVoice = async (e: any) => {
    const supabase = createSupabaseFrontendClient();
    const file = e.target.files[0];
    const fileName = file.name;
    const { data, error } = await supabase.storage
      .from("voices-storage")
      .upload(`${songTitle}/${fileName}`, file);
    // console.log("data", data);
    // console.log("error", error);
  };

  return <input type="file" onChange={(e) => addVoice(e)} />;
};

export default InputAddVoice;
