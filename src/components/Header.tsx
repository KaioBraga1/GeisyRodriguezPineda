"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content";
import { whatsappHref } from "@/lib/site";
import { Cta } from "./Cta";
import { Flag } from "./icons";

interface HeaderProps {
  locale: Locale;
  t: Dictionary;
}

export function Header({ locale, t }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const other = locale === "pt" ? "es" : "pt";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const wa = whatsappHref(t.contact.whatsappMessage);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled || open
          ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-editorial flex h-[var(--header-h)] items-center justify-between gap-6">
        {/* Wordmark */}
        <Link
          href={`/${locale}`}
          className="group flex items-baseline gap-2 rounded-sm"
          aria-label={t.hero.name}
        >
          <span className="font-display text-[0.98rem] leading-none tracking-tight text-ink whitespace-nowrap sm:text-[1.1rem] lg:text-[1.2rem]">
            {t.hero.name}
          </span>
          <span
            aria-hidden
            className="h-1 w-1 translate-y-[-0.15rem] rounded-full bg-accent transition-transform duration-500 group-hover:scale-150"
          />
        </Link>

        {/* Nav desktop */}
        <nav
          aria-label={t.footer.nav}
          className="hidden items-center gap-8 lg:flex"
        >
          {t.nav.items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative text-[0.9rem] text-slate transition-colors hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Ações */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href={`/${other}`}
            hrefLang={other}
            className="hidden items-center gap-2 text-[0.8rem] font-semibold tracking-[0.08em] text-slate transition-colors hover:text-ink sm:flex"
            aria-label={
              locale === "pt" ? "Cambiar a español" : "Mudar para português"
            }
          >
            <span className="flex items-center gap-1.5 text-ink">
              <Flag locale={locale} className="h-3.5 w-5 rounded-[3px]" />
              {t.nav.langLabel}
            </span>
            <span aria-hidden className="text-slate-soft">
              /
            </span>
            <span className="flex items-center gap-1.5">
              <Flag locale={other} className="h-3.5 w-5 rounded-[3px] opacity-70" />
              {t.nav.langSwitch}
            </span>
          </Link>

          <div className="hidden sm:block">
            <Cta href={wa} withIcon size="md" aria-label={t.nav.cta}>
              {t.nav.cta}
            </Cta>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-ink/10 bg-paper transition-[max-height,opacity] duration-500 ease-[var(--ease-out-soft)] lg:hidden ${
          open ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label={t.footer.nav}
          className="container-editorial flex flex-col gap-1 py-6"
        >
          {t.nav.items.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-ink/5 py-3.5 font-display text-2xl text-ink transition-colors hover:text-accent-ink"
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-5 flex items-center justify-between">
            <Link
              href={`/${other}`}
              hrefLang={other}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-sm font-semibold tracking-[0.08em] text-slate"
            >
              <span className="flex items-center gap-1.5">
                <Flag locale={locale} className="h-4 w-[1.4rem] rounded-[3px]" />
                {t.nav.langLabel}
              </span>
              <span className="text-slate-soft">/</span>
              <span className="flex items-center gap-1.5">
                <Flag locale={other} className="h-4 w-[1.4rem] rounded-[3px]" />
                {t.nav.langSwitch}
              </span>
            </Link>
            <Cta href={wa} withIcon onClick={() => setOpen(false)}>
              {t.nav.cta}
            </Cta>
          </div>
        </nav>
      </div>
    </header>
  );
}
