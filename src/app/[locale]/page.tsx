import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/content";
import { site, localizedUrl, whatsappHref } from "@/lib/site";
import { resolvePhoto } from "@/lib/photos";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { Manifesto } from "@/components/sections/Manifesto";
import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { Care } from "@/components/sections/Care";
import { Telemedicine } from "@/components/sections/Telemedicine";
import { Languages } from "@/components/sections/Languages";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const t = getDictionary(l);

  // Resolve fotos no servidor: só usa a imagem se o arquivo existir em /public.
  const heroPhoto = resolvePhoto(site.photos.hero);
  const aboutPhoto = resolvePhoto(site.photos.about);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": `${site.url}/#physician`,
        name: site.name,
        alternateName: site.shortName,
        description: t.meta.description,
        url: localizedUrl(l),
        ...(heroPhoto ? { image: `${site.url}${heroPhoto}` } : {}),
        medicalSpecialty: "PrimaryCare",
        knowsLanguage: ["pt-BR", "es"],
        knowsAbout: t.care.groups.flatMap((g) => g.items),
        availableService: [
          {
            "@type": "MedicalTherapy",
            name:
              l === "pt"
                ? "Teleconsulta em Medicina de Família e Comunidade"
                : "Teleconsulta en Medicina de Familia y Comunidad",
          },
        ],
        availableLanguage: ["Portuguese", "Spanish"],
        areaServed: { "@type": "Country", name: "Brasil" },
        identifier: [
          { "@type": "PropertyValue", name: "CRM", value: "SP 240872" },
          { "@type": "PropertyValue", name: "RQE", value: "138750" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: l === "pt" ? "pt-BR" : "es",
        publisher: { "@id": `${site.url}/#physician` },
      },
      {
        "@type": "FAQPage",
        "@id": `${localizedUrl(l)}#faq`,
        mainEntity: t.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header locale={l} t={t} />
      <main id="main">
        <Hero t={t} photo={heroPhoto} />
        <Highlights t={t} />
        <Manifesto t={t} />
        <About t={t} photo={aboutPhoto} />
        <Approach t={t} />
        <Care t={t} />
        <Telemedicine t={t} />
        <Languages t={t} />
        <Faq t={t} />
        <Contact t={t} />
      </main>
      <Footer locale={l} t={t} />
      <FloatingWhatsApp
        href={whatsappHref(t.contact.whatsappMessage)}
        label={t.contact.whatsappCta}
      />
    </>
  );
}
