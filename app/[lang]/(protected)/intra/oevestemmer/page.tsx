import { createSupabaseServerComponentClient } from "@/supabase/backendClient";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import AddSong from "./components/AddSong";
// import ButtonAddSong from "./components/ButtonAddSong";
import Songs from "./components/Songs";

export default async function Page() {
  const supabase = createSupabaseServerComponentClient();
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.error("Error logging in:", error);
  }

  if (!data.session) {
    return redirect("/login");
  }

  return (
    <main className="py-10 lg:pl-72">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-4">
          <Suspense fallback={<div>Loading ...</div>}>
            {/* @ts-ignore Async Server Component */}
            {data.session?.user?.id === process.env.ADMINID && <AddSong />}
          </Suspense>
        </div>
        <div className="mt-4 grid grid-cols-4 grid-rows-2 gap-8">
          <Suspense fallback={<div>Henter sange ...</div>}>
            {/* @ts-ignore Async Server Component */}
            <Songs />
          </Suspense>

          {/* <button onClick={handleLogout}>Log ud</button> */}
        </div>
      </div>
    </main>
  );
}
