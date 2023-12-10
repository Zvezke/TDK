import { createSupabaseBackendClient } from "@/supabase/backendClient";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug; // 'a', 'b', or 'c'
  // console.log("slug", slug[0]); // 'a', 'b', or 'c'
  const supabase = createSupabaseBackendClient<Database>();

  const { data: list, error } = await supabase.storage
    .from("voices-storage")
    .list(slug[0], {
      limit: 10,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

  const { data: url } = await supabase.storage
    .from("voices-storage")
    .getPublicUrl(slug[0]);

  revalidatePath(
    process.env.NEXT_PUBLIC_BASE_URL +
      `da/intra/oevestemmer/get-list-voices/${slug[0]}`
  );

  // console.log("list", list);
  return NextResponse.json({ list, error, url });
}
