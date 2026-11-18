import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, isLocale, htmlLang, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/content";
import { site, localizedUrl } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#faf9f6",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);

  return {
    metadataBase: new URL(site.url),
    title: t.meta.title,
    description: t.meta.description,
    applicationName: site.name,
    authors: [{ name: site.name }],
    creator: "Mythos Labs",
    keywords:
      locale === "pt"
        ? [
            "médica de família",
            "medicina de família e comunidade",
            "consulta médica online",
            "teleconsulta",
            "médica online",
            "consulta por vídeo",
            "atendimento médico online",
            "médica que fala espanhol",
            "prevenção e check-up",
            "acompanhamento de hipertensão e diabetes",
            "saúde mental na atenção primária",
            "ansiedade insônia estresse",
            "Dra. Geisy Rodriguez Pineda",
          ]
        : [
            "médica de familia",
            "medicina de familia y comunidad",
            "consulta médica en línea",
            "teleconsulta",
            "médica en línea",
            "consulta por video",
            "médica que habla español",
            "prevención y chequeo",
            "seguimiento de hipertensión y diabetes",
            "salud mental atención primaria",
            "Dra. Geisy Rodriguez Pineda",
          ],
    alternates: {
      canonical: localizedUrl(locale),
      languages: {
        "pt-BR": localizedUrl("pt"),
        es: localizedUrl("es"),
        "x-default": localizedUrl("pt"),
      },
    },
    openGraph: {
      type: "website",
      locale: htmlLang[locale],
      alternateLocale: locale === "pt" ? ["es"] : ["pt-BR"],
      url: localizedUrl(locale),
      siteName: site.name,
      title: t.meta.title,
      description: t.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={htmlLang[locale as Locale]}
      className={`${fraunces.variable} ${hanken.variable} no-js`}
      suppressHydrationWarning
    >
      <body>
        {/* Progressive enhancement flag: remove no-js so reveals can animate */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.remove('no-js');document.documentElement.classList.add('js');",
          }}
        />
        {children}
      </body>
    </html>
  );
}
