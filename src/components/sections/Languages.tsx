import type { Dictionary } from "@/content";
import { Reveal } from "@/components/Reveal";

export function Languages({ t }: { t: Dictionary }) {
  return (
    <section className="bg-sand py-[var(--spacing-section)]">
      <div className="container-editorial">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow eyebrow-line">{t.languages.kicker}</p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="font-display mt-6 text-[clamp(1.75rem,3.6vw,2.6rem)] leading-[1.08] text-ink">
                {t.languages.title}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-lg leading-relaxed text-slate">
                {t.languages.text}
              </p>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <ul className="flex gap-4 lg:flex-col" role="list">
              {t.languages.tags.map((tag) => (
                <li
                  key={tag}
                  className="font-display text-2xl text-ink/85 lg:text-right"
                >
                  <span className="text-accent">/</span> {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
