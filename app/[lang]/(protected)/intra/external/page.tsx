// "use client";

import { createSupabaseServerComponentClient } from "@/supabase/backendClient";
// import { createSupabaseBackendClient } from "@/supabase/backendClient";
import { useServerAuthSession } from "@/utils/auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";

// Supabase
import { useGetAllEvents } from "./server-actions";

// export default async function Page() {

// console.log("supabase, data", data);
// console.log("supabase, error", error);
// console.log("supabase, session", supabase.auth.getSession());

// React
// import { useEffect } from "react";

// Next
// import { usePathname, redirect } from "next/navigation";
// import { useRouter } from "next/navigation";

// Types and interfaces
// import { AuthRecord, IAuthStore, NavbarProps } from "@/types/interfaces";

// Pocketbase
// import pb from "@/pocketbase/config";

// Supabase
// import { createSupabaseFrontendClient } from "@/supabase/frontendClient";

// Context
// import { useAuth } from "@/context/AuthContext";

// Components
import DatePicker from "@/app/[lang]/(protected)/intra/external/components/DatePicker";
import Events from "@/app/[lang]/(protected)/intra/external/components/Events";

export default async function Page() {
  const supabase = createSupabaseServerComponentClient();
  const { events, eventsError } = await useGetAllEvents();
  const { data } = await useServerAuthSession();
  // const { data, error } = await supabase.auth.getSession();
  // console.log("events", events);
  // console.log("eventsError", eventsError);
  // const { isLoggedIn, setIsLoggedIn } = useAuth();
  // const supabase = createSupabaseFrontendClient();

  // const router = useRouter();

  // useEffect(() => {
  //   const fetchSession = async () => {
  //     const { data, error } = await supabase.auth.getSession();
  //     if (data && data.session) {
  //       setIsLoggedIn(true);
  //     } else {
  //       setIsLoggedIn(false);
  //       router.push("/login");
  //     }
  //   };
  //   fetchSession();
  // }, []);

  // if (error) {
  //   // console.error("Error logging in:", error);
  // }

  if (!data.session) {
    return redirect("/login");
  }

  // const handleLogout = async () => {
  //   const { error } = await supabase.auth.signOut();
  //   setIsLoggedIn(false);
  //   router.push("/login");
  // };

  // if (!isLoggedIn) {
  //   // console.log("External, isLoggedIn", isLoggedIn);
  //   // router.push("/login");
  //   return <div>Ikke logget ind</div>;
  // }

  // (console.log("External, isLoggedIn", isLoggedIn),
  //   return null;
  // }

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
              <Events />
            </Suspense>
          </div>
          {/* <button onClick={handleLogout}>Log ud</button> */}
        </div>
      </main>
      {/* )} */}
    </>
  );
}
