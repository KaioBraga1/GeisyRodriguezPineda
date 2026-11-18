import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "./types";
import { pt } from "./pt";
import { es } from "./es";

const dictionaries: Record<Locale, Dictionary> = { pt, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
