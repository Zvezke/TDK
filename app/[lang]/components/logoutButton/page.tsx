"use client";

import { createSupabaseFrontendClient } from "@/supabase/frontendClient";

// Context
import { useAuth } from "@/context/AuthContext";

const LogoutButton = async () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  // Supabase
  const supabase = createSupabaseFrontendClient();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    setIsLoggedIn(false);
  };

  return (
    // <Suspense fallback={<Loading />}>
    <>
      {isLoggedIn && (
        <button className="text-s max-lg:hidden" onClick={handleLogout}>
          Log ud
        </button>
      )}
      {/* {isLoggedIn ? (
        <button className="text-s max-lg:hidden" onClick={handleLogout}>
          Log ud
        </button>
      ) : (
        <Link className="text-s max-lg:hidden" href="/login">
          Log ind
        </Link>
      )} */}
      {/* </Suspense> */}
    </>
  );
};

export default LogoutButton;
