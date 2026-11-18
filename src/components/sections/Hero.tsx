"use client";

import { motion, MotionConfig, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/content";
import { whatsappHref } from "@/lib/site";
import { Cta } from "@/components/Cta";
import { Portrait } from "@/components/Portrait";

export function Hero({ t, photo }: { t: Dictionary; photo?: string }) {
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <MotionConfig reducedMotion="user">
    <section
      className="relative overflow-hidden bg-paper pt-[calc(var(--header-h)+2rem)]"
      aria-label={t.hero.name}
    >
      {/* névoa fria muito sutil no topo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[70%] bg-[radial-gradient(80%_60%_at_78%_0%,rgba(146,245,255,0.12),transparent_60%)]"
      />

      <div className="container-editorial relative grid items-center gap-12 pb-[var(--spacing-section)] pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-16">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <p className="eyebrow eyebrow-line !text-[0.82rem]">
              {t.hero.eyebrow}
            </p>
            <p className="mt-1.5 pl-[2.85rem] text-[0.95rem] font-medium tracking-[0.02em] text-accent-ink">
              {t.hero.eyebrow2}
            </p>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-title mt-6 text-[clamp(2.1rem,5vw,3.9rem)] leading-[1.04] text-ink"
          >
            <span className="block">{t.hero.headline[0]}</span>
            <span className="block italic text-accent-ink">
              {t.hero.headline[1]}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-[36rem] text-lg leading-relaxed text-slate"
          >
            {t.hero.lead}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <Cta
              href={whatsappHref(t.contact.whatsappMessage)}
              withIcon
              size="lg"
            >
              {t.hero.primaryCta}
            </Cta>
            <a
              href="#abordagem"
              className="group inline-flex items-center gap-1.5 py-2 text-[0.95rem] font-medium text-ink"
            >
              <span className="border-b border-ink/25 pb-0.5 transition-colors group-hover:border-ink">
                {t.hero.secondaryCta}
              </span>
              <ArrowUpRight className="h-4 w-4 text-accent-ink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-9">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/[0.06] px-4 py-1.5 text-sm font-semibold text-accent-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              {t.hero.highlight}
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 flex items-center gap-3 text-sm text-slate-soft"
          >
            <span className="h-px w-8 bg-accent/60" aria-hidden />
            {t.hero.credentials}
          </motion.p>
        </motion.div>

        {/* Retrato */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="relative mx-auto w-full max-w-[26rem] lg:max-w-none"
        >
          <Portrait
            alt={t.hero.portraitAlt}
            src={photo}
            eyebrow={t.hero.role}
            priority
            focus="center 22%"
            className="aspect-[4/5] w-full shadow-[0_40px_80px_-40px_rgba(15,40,48,0.45)]"
            sizes="(max-width: 1024px) 80vw, 40vw"
          />
          {/* selo de credencial flutuante */}
          <div className="absolute -bottom-8 -left-4 hidden w-[19rem] rounded-xl border border-ink/10 bg-paper/95 px-5 py-3.5 shadow-xl backdrop-blur-sm sm:block">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-ink">
              {t.hero.role}
            </p>
            <p className="mt-0.5 text-xs text-slate">{t.hero.credentials}</p>
            <div className="mt-2.5 border-t border-ink/10 pt-2.5">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-soft">
                Pós-graduação
              </p>
              <ul className="mt-1.5 space-y-1.5">
                {t.hero.postgrad.map((pg) => (
                  <li
                    key={pg}
                    className="flex gap-1.5 text-[0.66rem] leading-snug text-slate"
                  >
                    <span aria-hidden className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{pg}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </MotionConfig>
  );
}
