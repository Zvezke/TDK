import { createSupabaseBackendClient } from "@/supabase/backendClient";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  console.log("params", params);
  // export async function GET({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  console.log("slug", slug);
  const supabase = createSupabaseBackendClient<Database>();

  const { data, error } = await supabase.storage
    .from("voices-storage")
    .remove([`${slug[0]}/${slug[1]}`]);

  revalidatePath(
    process.env.NEXT_PUBLIC_BASE_URL +
      `da/intra/oevestemmer/get-list-voices/${slug[0]}`
  );

  return NextResponse.json({ data, error });
}
