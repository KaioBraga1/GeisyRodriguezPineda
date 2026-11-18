"use client";

import Image from "next/image";
import { useState } from "react";

interface PortraitProps {
  alt: string;
  /** Caminho da foto (ex.: /dra-geisy.jpg). Se ausente/inválido, exibe o plate. */
  src?: string;
  eyebrow?: string;
  name?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  /** Enquadramento da foto (object-position). Padrão: center top. */
  focus?: string;
}

/**
 * Plate editorial da Dra. Geisy com fallback automático.
 * Se `src` existir e carregar, mostra a foto; caso contrário (arquivo ausente),
 * exibe uma composição de marca sofisticada — nunca uma imagem quebrada.
 */
export function Portrait({
  alt,
  src,
  eyebrow,
  name = "Geisy Rodriguez Pineda",
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 80vw, 40vw",
  focus = "center 20%",
}: PortraitProps) {
  const [failed, setFailed] = useState(false);
  const showPhoto = Boolean(src) && !failed;

  return (
    <figure
      className={`relative isolate overflow-hidden rounded-[1.75rem] bg-ink-deep ${className}`}
    >
      {showPhoto ? (
        <Image
          src={src as string}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition: focus }}
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="paper-grain absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(120%_90%_at_50%_-10%,#3a86a3_0%,#1c6a87_45%,#17495e_100%)]"
        >
          <div
            aria-hidden
            className="absolute -top-1/4 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-full bg-glow/10 blur-3xl"
          />
          <div className="relative flex flex-col items-center px-8 text-center">
            <span
              className="font-display leading-none text-accent-light/85"
              style={{ fontSize: "clamp(6rem,16vw,11rem)" }}
            >
              G
            </span>
            <span className="mt-5 h-px w-14 bg-accent/50" />
            <span className="mt-5 font-display text-xl text-paper/90">
              {name}
            </span>
            {eyebrow && (
              <span className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-accent-light/80">
                {eyebrow}
              </span>
            )}
          </div>
        </div>
      )}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-accent/25"
      />
    </figure>
  );
}
