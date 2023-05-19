import "server-only";
import type { Locale } from "./i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  da: () => import("./dictionaries/da.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
};

// We use the locale as the key to get the dictionary
// export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};
