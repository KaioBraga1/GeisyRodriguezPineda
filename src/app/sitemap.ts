import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { localizedUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return locales.map((locale) => ({
    url: localizedUrl(locale),
    lastModified: now,
    changeFrequency: "monthly",
    priority: locale === "pt" ? 1 : 0.9,
    alternates: {
      languages: {
        "pt-BR": localizedUrl("pt"),
        es: localizedUrl("es"),
      },
    },
  }));
}
