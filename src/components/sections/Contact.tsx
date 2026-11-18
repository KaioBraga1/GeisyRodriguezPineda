import type { Dictionary } from "@/content";
import { site, whatsappHref } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { Cta } from "@/components/Cta";

export function Contact({ t }: { t: Dictionary }) {
  return (
    <section
      id="contato"
      className="paper-grain relative scroll-mt-24 overflow-hidden bg-ink-deep text-paper"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-1/4 bottom-0 h-2/3 w-1/2 bg-[radial-gradient(circle_at_center,rgba(146,245,255,0.10),transparent_60%)]"
      />
      <div className="container-editorial relative py-[var(--spacing-section)]">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow eyebrow-line !text-accent-light">
              {t.contact.kicker}
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-display mt-6 text-[clamp(2.25rem,5vw,4rem)] leading-[1.03]">
              {t.contact.title}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
              {t.contact.text}
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-10">
              <Cta
                href={whatsappHref(t.contact.whatsappMessage)}
                withIcon
                variant="light"
                size="lg"
              >
                {t.contact.whatsappCta}
              </Cta>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <dl className="mt-14 flex flex-wrap gap-x-16 gap-y-8 border-t border-paper/15 pt-8">
              <div>
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-light">
                  {t.contact.hoursLabel}
                </dt>
                <dd className="mt-1.5 text-paper/85">{t.contact.hoursValue}</dd>
              </div>
              {site.email && (
                <div>
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-light">
                    {t.contact.emailLabel}
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${site.email}`}
                      className="text-paper/85 underline-offset-4 hover:text-paper hover:underline"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent-light">
                  {site.crm}
                </dt>
                <dd className="mt-1.5 text-paper/85">{site.rqe}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
