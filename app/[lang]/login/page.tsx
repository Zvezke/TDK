"use client";

import { IAuthStore, AuthRecord } from "../../../types/interfaces";
import { useState, useEffect, use } from "react";
import { useLogin, useLogout, useRefresh } from "../../../pocketbase/auth";

// Context
import { useAuth } from "../../../context/AuthContext";
import { set } from "zod";

export default function Login() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const [email, setEmail] = useState("superur@gmail.com");
  const [password, setPassword] = useState("Ft30953095Ft");
  const [authData, setAuthData] = useState<
    IAuthStore | AuthRecord | null | undefined
  >(null);
  const [authStore, setAuthStore] = useState<IAuthStore | null | undefined>(
    null
  );

  useEffect(() => {
    const authData = async () => {
      const { authRefresh, pbAuthStore } = await useRefresh();
      setAuthData(authRefresh?.record as unknown as AuthRecord | null);
      setAuthStore(pbAuthStore as unknown as IAuthStore | null);
      // setIsLoggedIn2(true);
      setIsLoggedIn(true);
      console.log("useEffect, Login, isLoggedIn2", isLoggedIn);
    };
    authData();
  }, []);

  // HandleSignIn function
  const handleSignIn = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsLoggedIn(true);
    const { authData, authStore, error } = await useLogin({ email, password });
    console.log("Login, handleSignIn", isLoggedIn);
    setAuthData(authData?.record as unknown as IAuthStore | null);
    setAuthStore(authStore as unknown as IAuthStore | null);
  };

  return (
    <>
      {/* {console.log("Login, dummyLogin", isLoggedIn)} */}
      <div className="flex min-h-screen flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm space-y-10">
          <div>
            <h2 className="text-gray-900 mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
              Velkommen til login.
            </h2>
            {isLoggedIn && authStore?.isValid && (
              <h2>Logget ind som: {authData?.email}</h2>
            )}
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div className="relative -space-y-px rounded-md shadow-sm">
              <div className="ring-gray-300 pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset" />
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="text-gray-900 ring-gray-100 placeholder:text-gray-400 focus:ring-indigo-600 relative block w-full rounded-t-md border-0 py-1.5 ring-1 ring-inset focus:z-10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="text-gray-900 ring-gray-100 placeholder:text-gray-400 focus:ring-indigo-600 relative block w-full rounded-b-md border-0 py-1.5 ring-1 ring-inset focus:z-10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleSignIn}
                className="focus-visible:outline-indigo-600 flex w-full justify-center rounded-md border-tdk-blue-light-buttonsSubheadings bg-tdk-blue-light-buttonsSubheadings px-3 py-1.5 text-sm font-semibold leading-6 text-tdk-blue-light-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-tdk-yellow-400 dark:bg-tdk-yellow-400 dark:text-tdk-blue-700"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// border-tdk-blue-light-buttonsSubheadings bg-tdk-blue-light-buttonsSubheadings text-tdk-blue-light-background dark:border-tdk-yellow-400 dark:bg-tdk-yellow-400 dark:text-tdk-blue-700
