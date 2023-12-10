import { createSupabaseBackendClient } from "@/supabase/backendClient";
import { revalidatePath } from "next/cache";
// import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  // console.log(body);

  const supabase = createSupabaseBackendClient<Database>();

  const { data, error } = await supabase
    .from("songs")
    .insert([{ title: body.title }])
    .select();

  // const { data: songs, error: songsError } = await supabase
  //   .from("voices")
  //   .insert([{ voice: body.voice }])
  //   .select();

  return NextResponse.json({ data, error });
  // return NextResponse.json({ data, error, songs, songsError });
}
