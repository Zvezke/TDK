import { createSupabaseServerComponentClient } from "@/supabase/backendClient";
import { useServerAuthSession } from "@/utils/auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";

// Supabase
import { useGetAllEvents } from "./server-actions";

// Components
import DatePicker from "@/app/[lang]/(protected)/intra/external/components/DatePicker";
import Events from "@/app/[lang]/(protected)/intra/external/components/EventsInternal";

export default async function Page() {
  const supabase = createSupabaseServerComponentClient();
  const { events, eventsError } = await useGetAllEvents();
  const { data } = await useServerAuthSession();

  if (!data.session) {
    return redirect("/login");
  }

  return (
    <>
      {/* {isLoggedIn && ( */}
      <main className="py-10 lg:pl-72">
        <div className="grid grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="mb-4 text-2xl">Tilføj begivenhed</h2>
            <DatePicker />
          </div>

          <div>
            <h2 className="mb-4 text-2xl">Begivenhederne</h2>
            <Suspense fallback={<div>Henter begivenheder ...</div>}>
              <Events events={events} />
            </Suspense>
          </div>
          {/* <button onClick={handleLogout}>Log ud</button> */}
        </div>
      </main>
      {/* )} */}
    </>
  );
}
