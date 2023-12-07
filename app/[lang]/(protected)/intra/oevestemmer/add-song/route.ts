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

  // revalidatePath("/[lang]/(protected)/intra/oevestemmer/get-song");
  revalidatePath(
    "https://trekor-development.up.railway.app/da/intra/oevestemmer/get-song"
  );

  return NextResponse.json({ data, error });
}
