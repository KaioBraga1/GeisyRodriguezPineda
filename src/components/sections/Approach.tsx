import type { Dictionary } from "@/content";
import { Reveal } from "@/components/Reveal";

export function Approach({ t }: { t: Dictionary }) {
  return (
    <section
      id="abordagem"
      className="scroll-mt-24 bg-sand py-[var(--spacing-section)]"
    >
      <div className="container-editorial">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow eyebrow-line">{t.approach.kicker}</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-display mt-6 whitespace-pre-line text-[clamp(2rem,4.2vw,3.15rem)] leading-[1.05] text-ink">
              {t.approach.title}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              {t.approach.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-14 gap-y-12 sm:grid-cols-2">
          {t.approach.pillars.map((pillar, i) => (
            <Reveal key={pillar.index} delay={i * 90}>
              <article className="group border-t border-ink/15 pt-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-3xl text-accent-ink transition-colors duration-500 group-hover:text-ink">
                    {pillar.index}
                  </span>
                  <h3 className="font-display text-2xl text-ink">
                    {pillar.title}
                  </h3>
                </div>
                <p className="mt-4 max-w-md text-[1.02rem] leading-relaxed text-slate">
                  {pillar.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
