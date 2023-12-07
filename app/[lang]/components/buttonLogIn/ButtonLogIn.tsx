import { createSupabaseFrontendClient } from "@/supabase/frontendClient";
import Link from "next/link";
import React, { Suspense } from "react";

const ButtonLogIn = async () => {
  // Supabase
  const supabase = createSupabaseFrontendClient();
  console.log("supabase", supabase.auth.getSession());

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Link className="text-s max-lg:hidden" href="/login">
        Log ind
      </Link>
    </Suspense>
  );
};

export default ButtonLogIn;
