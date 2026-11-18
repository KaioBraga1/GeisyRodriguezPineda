import Link from "next/link";
import type { ReactNode } from "react";
import { WhatsAppIcon } from "./icons";

type Variant = "primary" | "ghost" | "light";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full text-[0.95rem] font-medium tracking-[0.01em] transition-all duration-300 ease-[var(--ease-out-soft)] focus-visible:outline-2 focus-visible:outline-offset-3";

const sizes = {
  md: "px-7 py-3.5",
  lg: "px-8 py-4 text-base",
} as const;

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper shadow-[0_1px_2px_rgba(15,40,48,0.15)] hover:bg-ink-deep hover:shadow-[0_10px_30px_-12px_rgba(15,40,48,0.55)] hover:-translate-y-0.5 focus-visible:outline-accent-ink",
  light:
    "bg-paper text-ink hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.4)] focus-visible:outline-accent-light",
  ghost:
    "text-ink border border-ink/15 hover:border-ink/45 hover:bg-ink/[0.03] focus-visible:outline-accent-ink",
};

interface CtaProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  withIcon?: boolean;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
}

export function Cta({
  href,
  children,
  variant = "primary",
  size = "md",
  withIcon = false,
  external,
  className = "",
  ...rest
}: CtaProps) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const isExternal = external ?? href.startsWith("http");
  const iconCls =
    "h-[1.05em] w-[1.05em] transition-transform duration-300 group-hover:scale-110";

  const content = (
    <>
      {withIcon && <WhatsAppIcon className={iconCls} />}
      <span>{children}</span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...rest}>
      {content}
    </Link>
  );
}
