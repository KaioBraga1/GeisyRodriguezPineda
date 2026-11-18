import type { Dictionary } from "@/content";
import { Reveal } from "@/components/Reveal";
import { Portrait } from "@/components/Portrait";

export function About({ t, photo }: { t: Dictionary; photo?: string }) {
  return (
    <section
      id="sobre"
      className="scroll-mt-24 bg-paper py-[var(--spacing-section)]"
    >
      <div className="container-editorial">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow eyebrow-line">{t.about.kicker}</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-display mt-6 text-[clamp(2rem,4.2vw,3.15rem)] leading-[1.05] text-ink">
              {t.about.title}
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-x-14 gap-y-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Foto */}
          <Reveal>
            <Portrait
              alt={t.about.portraitAlt}
              src={photo}
              eyebrow={t.hero.role}
              focus="center 25%"
              className="aspect-[4/5] w-full max-w-[26rem] shadow-[0_30px_70px_-40px_rgba(15,40,48,0.4)] lg:sticky lg:top-28"
              sizes="(max-width: 1024px) 80vw, 38vw"
            />
          </Reveal>

          {/* Texto + dossiê */}
          <div>
            <Reveal>
              <h3 className="font-display text-xl text-ink">
                {t.about.bioTitle}
              </h3>
            </Reveal>
            <div className="mt-5 max-w-[38rem] space-y-4">
              {t.about.paragraphs.map((p, i) => (
                <Reveal key={i} as="p" delay={Math.min(i, 3) * 60}>
                  <span className="block text-[1.02rem] leading-relaxed text-slate">
                    {p}
                  </span>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="paper-grain mt-10 rounded-2xl border border-ink/10 bg-sand p-7 sm:p-8">
                <h3 className="font-display text-xl text-ink">
                  {t.about.factsTitle}
                </h3>
                <dl className="mt-6 grid gap-x-8 sm:grid-cols-2">
                  {t.about.facts.map((fact, i) => (
                    <div
                      key={`${fact.label}-${fact.value}`}
                      className={`border-t border-ink/10 py-3.5 ${
                        i < 2 ? "sm:border-t-0 sm:pt-0" : ""
                      }`}
                    >
                      <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent-ink">
                        {fact.label}
                      </dt>
                      <dd className="mt-1 text-[0.95rem] leading-snug text-ink">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
