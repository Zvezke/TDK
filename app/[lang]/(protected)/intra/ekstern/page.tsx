"use client";

// React
import { useEffect } from "react";

// Next
// import { usePathname, redirect } from "next/navigation";
import { useRouter } from "next/navigation";

// Types and interfaces
import { AuthRecord, IAuthStore, NavbarProps } from "@/types/interfaces";

// Pocketbase
import pb from "@/pocketbase/config";

// Supabase
import { createSupabaseFrontendClient } from "@/supabase/frontendClient";

// Context
import { useAuth } from "@/context/AuthContext";

// Components
import DatePicker from "@/app/[lang]/components/datePicker";
import Events from "@/app/[lang]/components/events";

export default function External() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const supabase = createSupabaseFrontendClient();

  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (data && data.session) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        router.push("/login");
      }
    };
    fetchSession();
  }, []);

  // const handleLogout = async () => {
  //   const { error } = await supabase.auth.signOut();
  //   setIsLoggedIn(false);
  //   router.push("/login");
  // };

  if (!isLoggedIn) {
    // console.log("External, isLoggedIn", isLoggedIn);
    // router.push("/login");
    return <div>Ikke logget ind</div>;
  }

  return (
    <>
      {isLoggedIn && (
        // (console.log("External, isLoggedIn", isLoggedIn),
        <main className="py-10 lg:pl-72">
          <div className="grid grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
            <div>
              <h2 className="mb-4 text-2xl">Tilføj begivenhed</h2>
              <DatePicker />
            </div>

            <div>
              <h2 className="mb-4 text-2xl">Begivenhederne</h2>
              <Events />
            </div>
            {/* <button onClick={handleLogout}>Log ud</button> */}
          </div>
        </main>
      )}
    </>
  );
}
