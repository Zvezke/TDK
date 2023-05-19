"use client";

import { useState, useEffect } from "react";
import useColorMode from "@/hooks/useColorMode";
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/get-dictionary";

interface Dictionary {
  navBar: {
    home: string;
    about: string;
    audition: string;
    contact: string;
  };
}

interface NavbarProps {
  lang: "da" | "en";
}

const Navbar = ({ lang }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [colorMode, setColorMode] = useColorMode();
  const [dict, setDict] = useState<Dictionary | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const dictionary = await getDictionary(lang);
      setDict(dictionary);
    };

    fetchData();
  }, [lang]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // const dictionary = getDictionary(lang);

  return (
    <>
      <nav className=" text-tdk-blue-400 py-6 bg-tdk-blue-800 fixed w-full z-50">
        <div className="lg:grid max-lg:px-8 max-lg:flex max-lg:items-center mx-auto grid-cols-12 xl:max-w-screen-xl">
          {/* Logo */}
          <Link
            onClick={() => setMenuOpen(false)}
            className="max-lg:mr-auto"
            href="/"
          >
            <Image src="/images/church.svg" alt="Logo" width={40} height={40} />
          </Link>
          {/* Navigation */}
          <ul className="max-lg:hidden flex justify-center items-center gap-12 col-start-5 col-end-9">
            <li>
              <Link href="/om">{dict?.navBar.about}</Link>
            </li>
            <li>
              <Link href="/sangprøven">{dict?.navBar.audition}</Link>
            </li>
            {/* <li>
              <Link href="/aktiviteter">Aktiviteter</Link>
            </li> */}
            <li>
              <Link href="/kontakt">{dict?.navBar.contact}</Link>
            </li>
          </ul>

          {/* Social icons */}
          <div className="flex lg:col-start-10 lg:col-end-11 justify-center max-lg:mr-12 max-sm:hidden">
            <div className="flex gap-8 items-center">
              <Link href="https://www.instagram.com/treenighedskirkens_drengekor/">
                <Image
                  src="/images/InstagramIcon.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="https://www.facebook.com/tkdrengekor">
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
          <div className="flex gap-8 justify-end lg:col-start-11 lg:col-end-13">
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
            <Image
              src="/images/language.svg"
              alt="Icon for language switch"
              width={20}
              height={20}
            />
            <button className="text-s max-lg:hidden">Login</button>
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
        {/* Mobile menu */}
      </nav>
      <div
        className={
          menuOpen
            ? "fixed pr-8  right-0 top-0 w-1/2 h-screen text-tdk-blue-700 dark:text-tdk-blue-400 bg-tdk-blue-light-backgroundDark dark:bg-tdk-blue-800 lg:hidden ease-in duration-200 z-40"
            : "fixed pr-8  -right-full top-0 w-1/2 h-screen bg-tdk-blue-light-backgroundDark dark:bg-tdk-blue-800 ease-in duration-200 z-40"
        }
      >
        <ul className="flex flex-col gap-8 text-2xl items-end pt-32">
          <li>
            <Link href="/om" onClick={() => setMenuOpen(false)}>
              Om
            </Link>
          </li>
          <li>
            <Link href="/sangprøven" onClick={() => setMenuOpen(false)}>
              Sangprøven
            </Link>
          </li>
          <li>
            <Link href="/aktiviteter" onClick={() => setMenuOpen(false)}>
              Aktiviteter
            </Link>
          </li>
          <li>
            <Link href="/kontakt" onClick={() => setMenuOpen(false)}>
              Kontakt
            </Link>
          </li>
        </ul>
        <div className="flex gap-12 mt-12 items-end justify-end">
          <Link href="https://www.instagram.com/treenighedskirkens_drengekor/">
            <svg
              className="fill-tdk-blue-700 dark:fill-tdk-blue-400"
              width="25"
              height="25"
              viewBox="0 0 25 25"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </Link>
          <Link href="https://www.facebook.com/tkdrengekor">
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
            ? "fixed pr-8  left-0 top-0 w-1/2 h-screen z-40"
            : "fixed pr-8  -left-full top-0 w-1/2 h-screen z-40"
        }
      ></div>
    </>
  );
};

export default Navbar;
