import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n-config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  return matchLocale(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // If you have one
  // if (
  //   [
  //     "/manifest.json",
  //     "/images/favicon.ico",
  //     "/images/faviconLight.svg",
  //     "/images/faviconDark.svg",
  //     "/images/church.svg",
  //     "/images/language.svg",
  //     "/images/FacebookIcon.svg",
  //     "/images/InstagramIcon.svg",
  //     "/images/darkMode.svg",
  //     "/images/lightMode.svg",
  //     "/images/hamburger.svg",
  //     "/images/close.svg",
  //     "/images/home/syngendeDrengeVoresAktiviteter.png",
  //     "/images/home/heroSingingBoys.svg",
  //     "/images/home/imgMarcus.png",
  //     "/images/home/koropstilling1.png",
  //     "/images/home/syngendeDrengeVoresAktiviteter.png",
  //     "/images/home/testimonialMattias.png",
  //     "/images/home/testimonialViggo.png",
  //     "/images/om/heroKoropstilling.png",
  //     "/images/om/koretsHistorieSoftLight.png",
  //     "/images/om/koropstilling2.jpg",
  //     "/images/om/koncerterRepertoireHardLight.png",
  //     "/images/om/rejserFaellesoplevelser.png",
  //     "/images/om/rejserFaellesoplevelserMobil.png",
  //     "/images/om/lone.jpg",
  //     "/images/om/partnerskaberSamarbejdeMobil.jpg",
  //     "/images/om/boysSinging.png",
  //     "/images/om/partnerskaberSamarbejde.jpg",
  //     "/images/sangproeven/boySinging.png",
  //     "/images/sangproeven/mathiasFrederikAnders.jpg",
  //     "/images/sangproeven/gladeFyre.png",
  //     "/images/travels/koncertrejser.jpg",
  //     "/images/travels/koncertrejser32.jpg",
  //     "/images/travels/koncertrejser24.jpg",

  //     // Your other files in `public`
  //   ].includes(pathname)
  // )
  //   return;

  // Define a regex pattern to match paths that should be ignored
  const ignorePattern =
    /^\/(manifest.json|images\/.*|your-other-patterns-here)/;

  // Check if the pathname matches the ignore pattern
  if (ignorePattern.test(pathname)) {
    // If it matches, do nothing and return
    return;
  }
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
