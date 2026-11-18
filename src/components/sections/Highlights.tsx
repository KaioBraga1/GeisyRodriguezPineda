import { Stethoscope, Video, Languages, GraduationCap } from "lucide-react";
import type { Dictionary } from "@/content";
import { Reveal } from "@/components/Reveal";

const icons = [Stethoscope, Video, Languages, GraduationCap];

export function Highlights({ t }: { t: Dictionary }) {
  return (
    <section className="border-y border-ink/10 bg-paper" aria-label={t.about.factsTitle}>
      <div className="container-editorial">
        <ul className="grid grid-cols-2 divide-x divide-y divide-ink/10 sm:grid-cols-4 sm:divide-y-0">
          {t.highlights.items.map((item, i) => {
            const Icon = icons[i] ?? Stethoscope;
            return (
              <Reveal
                as="li"
                key={item.label}
                delay={i * 70}
                className="flex flex-col gap-2 px-4 py-7 sm:px-6"
              >
                <Icon className="h-5 w-5 text-accent-ink" aria-hidden />
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-slate-soft">
                  {item.label}
                </span>
                <span className="font-display text-lg leading-tight text-ink">
                  {item.value}
                </span>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
