import type { Dictionary } from "@/content";
import { Reveal } from "@/components/Reveal";

export function Manifesto({ t }: { t: Dictionary }) {
  return (
    <section className="paper-grain relative overflow-hidden bg-ink-deep text-paper">
      {/* halo terracota discreto */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-1/4 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(215,90,49,0.18),transparent_60%)]"
      />
      <div className="container-editorial relative py-[var(--spacing-section)]">
        <Reveal>
          <p className="eyebrow eyebrow-line !text-accent-light">
            {t.manifesto.kicker}
          </p>
        </Reveal>

        <blockquote className="mt-10 max-w-4xl">
          <div className="font-display text-[clamp(1.3rem,2.7vw,2.15rem)] leading-[1.32] tracking-[-0.005em]">
            {t.manifesto.lines.map((line, i) => (
              <Reveal
                as="p"
                key={i}
                delay={i * 120}
                className="mt-7 block first:mt-0"
              >
                <span className={i === 0 ? "text-paper" : "text-paper/70"}>
                  {line}
                </span>
              </Reveal>
            ))}
          </div>
          <Reveal
            as="footer"
            delay={t.manifesto.lines.length * 90}
            className="mt-10"
          >
            <cite className="text-sm not-italic tracking-[0.08em] text-accent-light">
              {t.manifesto.signature}
            </cite>
          </Reveal>
        </blockquote>
      </div>
    </section>
  );
}
