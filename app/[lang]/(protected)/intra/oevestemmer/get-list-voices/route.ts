import { createSupabaseBackendClient } from "@/supabase/backendClient";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = createSupabaseBackendClient<Database>();

  const { data: list, error } = await supabase.storage
    .from("voices-storage")
    .list("Rigtige venner", {
      limit: 10,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

  // const { data: list2 } = await supabase.storage.listBuckets();

  // const { data: list3 } = await supabase.storage.getBucket("voices-storage");

  // console.log("list", list);
  // console.log("error", error);
  // console.log("listBuckets", list2);
  // console.log("getBucket", list3);
  return NextResponse.json({ list, error });
}
