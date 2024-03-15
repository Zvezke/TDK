"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "../../../i18n-config";
import Image from "next/image";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const setCookie = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`;
  };

  // //  Toggle for language switcher using redirectedPathName
  // const toggleLanguage = () => {
  //   console.log(redirectedPathName);
  //   // if (redirectedPathName === "en") {
  //   //   return "da";
  //   // } else {
  //   //   return "en";
  //   // }
  // };

  return (
    <>
      {/* {console.log(pathName)} */}
      {pathName.includes("/da") && (
        <Link
          onClick={() => setCookie("en")}
          key="da"
          href={redirectedPathName("en")}
        >
          EN
          {/* <Image
            src="/images/language.svg"
            alt="Icon for language switch"
            width={20}
            height={20}
          /> */}
        </Link>
      )}
      {pathName.includes("/en") && (
        <Link
          onClick={() => setCookie("da")}
          key="en"
          href={redirectedPathName("da")}
        >
          DA
          {/* <Image
            src="/images/language.svg"
            alt="Icon for language switch"
            width={20}
            height={20}
          /> */}
        </Link>
      )}
    </>
  );
}
