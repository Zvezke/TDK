export const i18n = {
  locales: ["en", "da"],
  defaultLocale: "da",
} as const;

export type Locale = (typeof i18n)["locales"][number];
