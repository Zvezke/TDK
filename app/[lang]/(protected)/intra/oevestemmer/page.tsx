import { createSupabaseServerComponentClient } from "@/supabase/backendClient";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import AddSong from "./components/AddSong";
import ButtonAddSong from "./components/ButtonAddSong";
import Songs from "./components/Songs";

export default async function Page() {
  const supabase = createSupabaseServerComponentClient();
  const { data, error } = await supabase.auth.getSession();
  // console.log("supabase, data", data);
  // console.log("supabase, error", error);
  // console.log("supabase, session", supabase.auth.getSession());

  if (error) {
    console.error("Error logging in:", error);
  }

  if (!data.session) {
    return redirect("/login");
  }

  // let { data: songs } = await supabase.from("songs").select("*");
  // console.log("songs", songs);

  return (
    <main className="py-10 lg:pl-72">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-4">
          {/* <h2 className="text-2xl">Øvestemmer</h2> */}
          <Suspense fallback={<div>Loading ...</div>}>
            {/* @ts-expect-error Async Server Component */}
            <AddSong />
          </Suspense>
          {/* <ButtonAddSong /> */}
        </div>
        <div className="grid grid-rows-2 grid-cols-4 gap-8">
          <Suspense fallback={<div>Henter sange ...</div>}>
            {/* @ts-expect-error Async Server Component */}
            <Songs />
          </Suspense>

          {/* <button onClick={handleLogout}>Log ud</button> */}
        </div>
      </div>
    </main>
  );
}
