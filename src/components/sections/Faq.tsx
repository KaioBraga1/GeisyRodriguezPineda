"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { Dictionary } from "@/content";
import { Reveal } from "@/components/Reveal";

export function Faq({ t }: { t: Dictionary }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="perguntas"
      className="scroll-mt-24 bg-paper py-[var(--spacing-section)]"
    >
      <div className="container-editorial">
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Reveal>
              <p className="eyebrow eyebrow-line">{t.faq.kicker}</p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="font-display mt-6 text-[clamp(2rem,4.2vw,3.15rem)] leading-[1.05] text-ink">
                {t.faq.title}
              </h2>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <dl className="border-t border-ink/12">
              {t.faq.items.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className="border-b border-ink/12">
                    <dt>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        id={`faq-button-${i}`}
                        className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-accent-ink"
                      >
                        <span className="font-display text-lg leading-snug text-ink sm:text-xl">
                          {item.q}
                        </span>
                        <Plus
                          className={`mt-1 h-5 w-5 shrink-0 text-accent-ink transition-transform duration-300 ${
                            isOpen ? "rotate-45" : "rotate-0"
                          }`}
                          aria-hidden
                        />
                      </button>
                    </dt>
                    <dd
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-button-${i}`}
                      className={`grid transition-[grid-template-rows] duration-500 ease-[var(--ease-out-soft)] ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[44rem] pb-6 pr-8 text-[1.02rem] leading-relaxed text-slate">
                          {item.a}
                        </p>
                      </div>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
