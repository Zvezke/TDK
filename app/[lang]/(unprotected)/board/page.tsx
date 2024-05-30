import { getDictionary } from "@/get-dictionary";
// import BoardState from "@/store/BoardState";
import { createSupabaseBackendClient } from "@/supabase/backendClient";
import React from "react";

const Page = async ({ params }: { params: { lang: "da" | "en" } }) => {
  const { board } = await getDictionary(params.lang);

  const supabase = createSupabaseBackendClient();
  let { data: supabaseBoard, error } = await supabase.from("board").select("*");

  if (error) {
    console.error("error", error);
  }

  return (
    // <BoardState data={supabaseBoard ?? []}>
      <main className="flex h-screen items-center justify-center">
        <h2>{board.title}</h2>
      </main>
    // </BoardState>
  );
};

export default Page;
