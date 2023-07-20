"use client";

import { useState, useEffect, use } from "react";
import { useLogin, useLogout, useRefresh } from "../../../pocketbase/auth";

interface IAuthStore {
  avatar: string;
  collectionId: string;
  collectionName: string;
  created: string;
  email: string;
  emailVisibility: boolean;
  id: string;
  name: string;
  updated: string;
  username: string;
  verified: boolean;
  isValid: boolean;
}

export interface Test {
  record: AuthRecord;
  token: string;
}

export interface AuthRecord {
  avatar: string;
  collectionId: string;
  collectionName: string;
  created: string;
  email: string;
  emailVisibility: boolean;
  id: string;
  name: string;
  updated: string;
  username: string;
  verified: boolean;
}

export default function Login() {
  const [email, setEmail] = useState("superur@gmail.com");
  const [password, setPassword] = useState("Ft30953095Ft");
  const [authData, setAuthData] = useState<
    IAuthStore | AuthRecord | null | undefined
  >(null);
  const [authStore, setAuthStore] = useState<IAuthStore | null | undefined>(
    null
  );
  const [dummy, setDummy] = useState(null);

  useEffect(() => {
    const authData = async () => {
      const { authRefresh } = await useRefresh();
      // console.log("authRefresh", authRefresh);
      setAuthData(authRefresh?.record as unknown as AuthRecord | null);
    };
    authData();
  }, []);

  // HandleSignIn function
  const handleSignIn = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { authData, authStore, error } = await useLogin({ email, password });
    console.log("authData", authData);
    console.log("authStore", authStore);
    console.log("error", error);
    setAuthData(authData?.record as unknown as IAuthStore | null);
    setAuthStore(authStore as unknown as IAuthStore | null);
  };

  return (
    <>
      <div className="flex min-h-screen flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm space-y-10">
          <div>
            <h2 className="text-gray-900 mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
              Velkommen til login.
            </h2>
            {authData && <h2>Logget ind som: {email}</h2>}

            {authStore && (
              <h2>Logget ind som: {authStore.isValid.toString()}</h2>
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
                // type="submit"
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
