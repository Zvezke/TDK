"use client";

import { useState, useEffect, Suspense, use } from "react";

// Interfaces
import { IAuthStore, AuthRecord } from "@/types/interfaces";

// Hooks
// import { useLogin, useLogout, useRefresh } from "@/pocketbase/auth";
import { useLogin } from "@/supabase/auth";

// Dependencies
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Context
import { useAuth } from "@/context/AuthContext";
import Loading from "./loading";
import LoggedInAs from "../../components/loggedInAs";

interface IForm {
  email: string;
  password: string;
}

const schema: ZodType<IForm> = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function Login() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [authData, setAuthData] = useState<
    IAuthStore | AuthRecord | null | undefined
  >(null);
  const [authStore, setAuthStore] = useState<IAuthStore | null | undefined>(
    null
  );

  const { register, handleSubmit } = useForm<IForm>({
    resolver: zodResolver(schema),
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { authRefresh, pbAuthStore } = await useRefresh();
  //     setAuthData(authRefresh?.record as unknown as AuthRecord | null);
  //     setAuthStore(pbAuthStore as unknown as IAuthStore | null);
  //     // console.log("useEffect, Login, authData", authData);
  //     // console.log("useEffect, Login, authStore", authStore);
  //     // console.log("useEffect, Login, isValid", authStore?.isValid);
  //     pbAuthStore?.isValid && setIsLoggedIn(true);
  //     // console.log("useEffect, Login, isLoggedIn", isLoggedIn);
  //   };
  //   fetchData();
  // }, []);

  // const submitData = async (data: IForm) => {
  //   try {
  //     const { authData, pbAuthStore } = await useLogin(data);
  //     // console.log("Login, submitData", isLoggedIn);
  //     setAuthData(authData?.record as unknown as IAuthStore | null);
  //     setAuthStore(pbAuthStore as unknown as IAuthStore | null);
  //     // console.log("Login, submitData, authData", authData);
  //     // console.log("Login, submitData, authStore", pbAuthStore);
  //     pbAuthStore?.isValid && setIsLoggedIn(true);
  //   } catch (error) {
  //     console.error("Error logging in:", error);
  //   }
  // };

  const submitData = async (FormData: IForm) => {
    try {
      //@ts-ignore ... I care because you do.
      const { data, error } = await useLogin(FormData);
      // console.log("data", data);
      // console.log("error", error);
      if (data) {
        setAuthData(data);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-1 items-center justify-center bg-tdk-blue-700 px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm space-y-10">
          <div>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-tdk-blue-200">
              Velkommen til login.
            </h2>
            {isLoggedIn && (
              <Suspense fallback={<Loading />}>
                {/* @ts-expect-error Async Server Component */}
                <LoggedInAs email={authData?.user.email} />
              </Suspense>
            )}
          </div>
          <form
            className="space-y-6"
            action="#"
            onSubmit={handleSubmit(submitData)}
          >
            <div className="relative -space-y-px rounded-md shadow-sm">
              <div className="ring-gray-300 pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset" />
              <div>
                <label htmlFor="email-address" className="sr-only">
                  E-mailadresse
                </label>
                <input
                  id="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="text-gray-900 ring-gray-100 placeholder:text-gray-400 focus:ring-indigo-600 relative block w-full rounded-t-md border-0 py-1.5 ring-1 ring-inset focus:z-10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder="E-mailadresse"
                  {...register("email")}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Kodeord
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="text-gray-900 ring-gray-100 placeholder:text-gray-400 focus:ring-indigo-600 relative block w-full rounded-b-md border-0 py-1.5 ring-1 ring-inset focus:z-10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder="Kodeord"
                  {...register("password")}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="focus-visible:outline-indigo-600 flex w-full justify-center rounded-md border-tdk-blue-light-buttonsSubheadings bg-tdk-blue-light-buttonsSubheadings px-3 py-1.5 text-sm font-semibold leading-6 text-tdk-blue-light-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-tdk-yellow-400 dark:bg-tdk-yellow-400 dark:text-tdk-blue-700"
              >
                Log ind
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// border-tdk-blue-light-buttonsSubheadings bg-tdk-blue-light-buttonsSubheadings text-tdk-blue-light-background dark:border-tdk-yellow-400 dark:bg-tdk-yellow-400 dark:text-tdk-blue-700
