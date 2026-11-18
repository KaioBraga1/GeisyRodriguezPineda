export const locales = ["pt", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

/** BCP-47 tags used for <html lang> and hreflang. */
export const htmlLang: Record<Locale, string> = {
  pt: "pt-BR",
  es: "es",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
