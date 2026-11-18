import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content";
import { site } from "@/lib/site";
import { Flag } from "./icons";

export function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  const other = locale === "pt" ? "es" : "pt";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper/10 bg-ink-deep text-paper">
      <div className="container-editorial py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          {/* Marca */}
          <div>
            <p className="font-display text-2xl">{site.name}</p>
            <p className="mt-2 text-sm text-paper/70">{t.hero.role}</p>
            <p className="mt-6 max-w-sm whitespace-pre-line font-display text-lg italic text-accent-light">
              {t.footer.tagline}
            </p>
            <p className="mt-6 text-xs tracking-[0.1em] text-paper/65">
              {site.crm} · {site.rqe}
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label={t.footer.nav} className="md:justify-self-end">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-light">
              {t.footer.nav}
            </p>
            <ul className="mt-4 space-y-2.5">
              {t.nav.items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-paper/75 underline-offset-4 transition-colors hover:text-paper hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href={`/${other}`}
                  hrefLang={other}
                  className="flex items-center gap-2 text-sm text-paper/75 transition-colors hover:text-paper"
                >
                  <span className="flex items-center gap-1.5">
                    <Flag locale={locale} className="h-3.5 w-5 rounded-[3px]" />
                    {t.nav.langLabel}
                  </span>
                  <span className="text-paper/40">/</span>
                  <span className="flex items-center gap-1.5">
                    <Flag locale={other} className="h-3.5 w-5 rounded-[3px]" />
                    {t.nav.langSwitch}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Aviso médico */}
        <p className="mt-14 max-w-3xl border-l-2 border-accent/50 pl-4 text-xs leading-relaxed text-paper/70">
          {t.footer.disclaimer}
        </p>

        {/* Barra inferior */}
        <div className="mt-10 flex flex-col gap-2 border-t border-paper/10 pt-6 text-xs text-paper/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. {t.footer.rights}
          </p>
          <p>{t.footer.credits}</p>
        </div>
      </div>
    </footer>
  );
}
