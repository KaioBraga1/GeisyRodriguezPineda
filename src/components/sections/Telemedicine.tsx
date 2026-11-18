import { Video } from "lucide-react";
import type { Dictionary } from "@/content";
import { whatsappHref } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { Cta } from "@/components/Cta";

export function Telemedicine({ t }: { t: Dictionary }) {
  return (
    <section
      id="teleconsulta"
      className="scroll-mt-24 bg-mist py-[var(--spacing-section)]"
    >
      <div className="container-editorial">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow eyebrow-line">{t.telemedicine.kicker}</p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="font-display mt-6 text-[clamp(2rem,4.2vw,3.15rem)] leading-[1.05] text-ink">
                {t.telemedicine.title}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-lg leading-relaxed text-slate">
                {t.telemedicine.intro}
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal>
          <h3 className="mt-16 font-display text-2xl text-ink">
            {t.telemedicine.stepsTitle}
          </h3>
        </Reveal>

        <ol className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {t.telemedicine.steps.map((step, i) => (
            <Reveal key={step.title} as="li" delay={i * 90}>
              <div className="relative border-t border-ink/20 pt-8">
                <span className="absolute -top-4 left-0 flex h-8 w-8 items-center justify-center rounded-full border border-accent/60 bg-mist text-sm font-semibold text-accent-ink">
                  {i + 1}
                </span>
                <h3 className="font-display text-xl text-ink">{step.title}</h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-slate">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <div className="mt-14 flex flex-col items-start gap-6 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate">
              <Video className="h-4 w-4 text-accent-ink" aria-hidden />
              <span>{t.telemedicine.platformNote}</span>
            </p>
            <Cta
              href={whatsappHref(t.contact.whatsappMessage)}
              withIcon
              variant="primary"
            >
              {t.telemedicine.cta}
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
