export const i18n = {
  defaultLocale: "da",
  locales: ["en", "da"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
