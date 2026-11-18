"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./icons";

export function FloatingWhatsApp({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={label}
      className={`fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-paper shadow-[0_12px_30px_-8px_rgba(15,40,48,0.6)] transition-all duration-500 ease-[var(--ease-out-soft)] hover:bg-ink-deep focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent-ink lg:hidden ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
