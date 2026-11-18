import type { Dictionary } from "@/content";
import { Reveal } from "@/components/Reveal";

export function Care({ t }: { t: Dictionary }) {
  return (
    <section
      id="cuidados"
      className="scroll-mt-24 bg-paper py-[var(--spacing-section)]"
    >
      <div className="container-editorial">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow eyebrow-line">{t.care.kicker}</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-display mt-6 text-[clamp(2rem,4.2vw,3.15rem)] leading-[1.05] text-ink">
              {t.care.title}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              {t.care.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {t.care.groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <div>
                <h3 className="font-display text-xl leading-snug text-ink">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-0" role="list">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-t border-ink/10 py-3 text-[0.98rem] text-slate first:border-t-0"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-16 max-w-3xl border-l-2 border-accent/60 pl-6">
            <p className="font-display text-2xl leading-snug text-ink">
              {t.care.noteTitle}
            </p>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-slate">
              {t.care.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
