"use client";

import { useLogin, useLogout, useRefresh } from "@/pocketbase/auth";
import Link from "next/link";
import Loading from "./loading";

// Context
import { useAuth } from "@/context/AuthContext";

const LogoutButton = async () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  // const { authData, authStore, error } = await useLogin({
  //   email: "superur@gmail.com",
  //   password: "Ft30953095Ft",
  // });
  // console.log("authData", authData);
  // console.log("authStore", authStore);
  // console.log("error", error);
  // setIsLoggedIn(true);

  const handleLogout = async () => {
    // console.log("handleLogout");
    const { authRefresh, pbAuthStore } = await useRefresh();
    // console.log("authRefresh", authRefresh);
    // console.log("pbAuthStore", pbAuthStore);
    useLogout();
    setIsLoggedIn(false);
    // console.log("isLoggedIn", isLoggedIn);
    // setDummy(null);
  };

  // console.log("authData, navBar", authData);
  // console.log("authStore, navBar", authStore);

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
