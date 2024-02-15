"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

// Types and interfaces
import { AuthRecord, IAuthStore, NavbarProps } from "@/types/interfaces";

// Locale
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import LocaleSwitcher from "./locale-switcher";

// Custom hooks
import useColorMode from "@/hooks/useColorMode";

// Components
import LogoutButton from "./logoutButton/page";

// Context
import { useAuth } from "@/context/AuthContext";

// Pocketbase
import { useLogout, useLogin, useRefresh } from "@/pocketbase/auth";
import Loading from "./loading";
import ButtonLogIn from "./buttonLogIn/ButtonLogIn";

// Supabase
import { createSupabaseFrontendClient } from "@/supabase/frontendClient";

const Navbar = ({ about, audition, travels, contact }: NavbarProps) => {
  // Context
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  // // Supabase
  const supabase = createSupabaseFrontendClient();

  // States
  const [menuOpen, setMenuOpen] = useState(false);
  const [colorMode, setColorMode] = useColorMode();
  // const [authData, setAuthData] = useState<AuthRecord | null | undefined>(null);
  // const [authStore, setAuthStore] = useState<IAuthStore | null | undefined>(
  //   null
  // );

  // States - Supabase
  const [authSupabaseData, setAuthSupabaseData] = useState<{
    // @ts-ignore - Supabase
    session: Session;
  } | null>(null);

  // useEffect, Supabase
  useEffect(() => {
    const fetchAuthSupabaseData = async () => {
      const { data, error } = await supabase.auth.getSession();
      // console.log("data", data);
      // console.log("error", error);
      setAuthSupabaseData(data);
      if (data && data.session) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };
    fetchAuthSupabaseData();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async () => {
    // console.log("handleLogout");
    const { authRefresh, pbAuthStore } = await useRefresh();
    useLogout();
    setIsLoggedIn(false);
    // setDummy(null);
  };

  // if (authSupabaseData) {
  //   console.log("authSupabaseData", authSupabaseData);
  // }

  try {
    return (
      <>
        <nav className="fixed z-50 w-full bg-tdk-blue-800 py-6 text-tdk-blue-400">
          <div className="mx-auto grid-cols-12 max-lg:flex max-lg:items-center max-lg:px-8 lg:grid xl:max-w-screen-xl">
            <Logo />
            {/* Create client component for Logo - <Logo/> */}
            <ul className="col-start-4 col-end-10 flex items-center justify-center gap-12 text-tdk-blue-300 max-lg:hidden">
              <li>
                <Link href="/om">{about}</Link>
              </li>
              <li>
                <Link href="/sangproeven">{audition}</Link>
              </li>
              <li>
                <Link href="/koncertrejser">{travels}</Link>
              </li>
              <li>
                <Link href="/kontakt">{contact}</Link>
              </li>
              {isLoggedIn && (
                <li>
                  <Link href="/intra/external">Intra</Link>
                </li>
              )}
            </ul>

            {/* Social icons */}
            <div className="flex justify-center max-lg:mr-12 max-sm:hidden lg:col-start-10 lg:col-end-11">
              <div className="flex items-center gap-8">
                <Link
                  href="https://www.instagram.com/treenighedskirkens_drengekor/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/InstagramIcon.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/tkdrengekor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/FacebookIcon.svg"
                    alt="Facebook"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
            {/* Dark mode, language, login */}
            <div className="flex items-center justify-end gap-8 lg:col-start-11 lg:col-end-13">
              <button
                onClick={() => {
                  setColorMode(colorMode === "light" ? "dark" : "light");
                }}
              >
                {colorMode === "light" ? (
                  <Image
                    src="/images/darkMode.svg"
                    alt="Icon for light mode"
                    width={20}
                    height={20}
                  />
                ) : (
                  <Image
                    src="/images/lightMode.svg"
                    alt="Icon for dark mode"
                    width={20}
                    height={20}
                  />
                )}
              </button>
              {/* <LoginButton /> */}
              {/* <Image
                src="/images/language.svg"
                alt="Icon for language switch"
                width={20}
                height={20}
              /> */}
              <LocaleSwitcher />
              {!isLoggedIn ? (
                <Link className="text-s max-lg:hidden" href="/login">
                  Log ind
                </Link>
              ) : (
                // <ButtonLogIn />
                <Suspense fallback={<div>Loading...</div>}>
                  <LogoutButton />
                </Suspense>
              )}

              {menuOpen ? (
                <Image
                  onClick={toggleMenu}
                  className="lg:hidden"
                  src="/images/close.svg"
                  alt="Close menu"
                  width={25}
                  height={25}
                />
              ) : (
                <Image
                  onClick={toggleMenu}
                  className="lg:hidden"
                  src="/images/hamburger.svg"
                  alt="Hamburger menu"
                  width={25}
                  height={25}
                />
              )}
            </div>
          </div>
        </nav>
        {/* Mobile menu */}
        <div
          className={
            menuOpen
              ? "fixed right-0  top-0 z-40 h-screen w-1/2 bg-tdk-blue-light-backgroundDark pr-8 text-tdk-blue-700 duration-200 ease-in dark:bg-tdk-blue-800 dark:text-tdk-blue-400 lg:hidden"
              : "fixed -right-full  top-0 z-40 h-screen w-1/2 bg-tdk-blue-light-backgroundDark pr-8 duration-200 ease-in dark:bg-tdk-blue-800"
          }
        >
          <ul className="flex flex-col items-end gap-8 pt-32 text-2xl">
            <li>
              <Link href="/om" onClick={() => setMenuOpen(false)}>
                Om
              </Link>
            </li>
            <li>
              <Link href="/sangproeven" onClick={() => setMenuOpen(false)}>
                Sangprøven
              </Link>
            </li>
            {/* <li>
              <Link href="/aktiviteter" onClick={() => setMenuOpen(false)}>
                Aktiviteter
              </Link>
            </li> */}
            <li>
              <Link href="/kontakt" onClick={() => setMenuOpen(false)}>
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="/intra/ekstern" onClick={() => setMenuOpen(false)}>
                Intra
              </Link>
            </li>
          </ul>
          <div className="mt-12 flex items-end justify-end gap-12">
            <Link
              href="https://www.instagram.com/treenighedskirkens_drengekor/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <svg
                className="fill-tdk-blue-700 dark:fill-tdk-blue-400"
                width="25"
                height="25"
                viewBox="0 0 25 25"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
            <Link
              href="https://www.facebook.com/tkdrengekor"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                className="fill-tdk-blue-700 dark:fill-tdk-blue-400"
                viewBox="0 0 237.4 237.4"
                width="25"
                height="25"
              >
                <path d="M 118.7,0 C 53.1,0 0,53.1 0,118.7 c 0,65.6 53.1,118.7 118.7,118.7 65.6,0 118.7,-53.1 118.7,-118.7 C 237.4,53.1 184.2,0 118.7,0 Z m 34.9,72 c 0,0 -11.8,0 -16.5,0 -5.8,0 -7,2.4 -7,8.4 0,5 0,14.5 0,14.5 h 23.5 l -2.3,25.5 H 130 v 76.3 H 99.5 v -76 H 83.6 V 94.8 h 15.9 c 0,0 0,-3.7 0,-20.4 0,-19.1 10.3,-29.1 32.9,-29.1 3.7,0 21.1,0 21.1,0 z" />
              </svg>
            </Link>
          </div>
        </div>
        <div
          onClick={() => setMenuOpen(false)}
          className={
            menuOpen
              ? "fixed left-0  top-0 z-40 h-screen w-1/2 pr-8"
              : "fixed -left-full  top-0 z-40 h-screen w-1/2 pr-8"
          }
        ></div>
      </>
    );
  } catch (error) {
    return null;
  }
};

export default Navbar;
