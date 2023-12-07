import { createSupabaseBackendClient } from "@/supabase/backendClient";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = createSupabaseBackendClient<Database>();

  let { data: songs, error } = await supabase
    .from("songs")
    .select("*, voices(voice)");

  // console.log(songs);
  return NextResponse.json({ songs, error });
}
