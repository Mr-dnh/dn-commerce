export const locales = ["en", "fa"] as const;
export const defaultLocale = "en" satisfies Locale;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  fa: "فارسی",
};

export const localeDirections: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  fa: "rtl",
};

export function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function localizeHref(locale: Locale, href: string) {
  if (href.startsWith("#")) return `/${locale}${href}`;
  if (href.startsWith("/")) return `/${locale}${href}`;
  return href;
}
