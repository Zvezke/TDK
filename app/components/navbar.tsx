"use client";

import useColorMode from "@/hooks/useColorMode";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <nav className=" text-tdk-blue-400 py-6 bg-tdk-blue-800 fixed w-full z-50">
      <div className="grid mx-auto grid-cols-12 xl:max-w-screen-xl">
        {/* Logo */}
        <Link className="" href="/">
          <Image src="/images/church.svg" alt="Logo" width={40} height={40} />
        </Link>
        {/* Navigation */}
        <ul className="flex justify-center items-center gap-12 col-start-5 col-end-9">
          <li>
            <Link href="/om">Om</Link>
          </li>
          <li>
            <Link href="/sangprøven">Sangprøve</Link>
          </li>
          <li>
            <Link href="/aktiviteter">Aktiviteter</Link>
          </li>
          <li>
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>
        {/* Social icons */}
        <div className="flex col-start-10 col-end-11 justify-center">
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
        <div className="flex gap-8 justify-end col-start-11 col-end-13">
          <button
            onClick={() =>
              setColorMode(colorMode === "light" ? "dark" : "light")
            }
          >
            <Image
              src="/images/lightMode.svg"
              alt="Icon for light mode"
              width={22}
              height={22}
            />
          </button>
          <Image
            src="/images/language.svg"
            alt="Icon for language switch"
            width={20}
            height={20}
          />
          <button className="text-s">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
