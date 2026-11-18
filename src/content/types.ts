/**
 * Contrato de conteúdo do site. Português e espanhol compartilham
 * exatamente a mesma forma — o TypeScript garante paridade entre idiomas.
 */
export interface Dictionary {
  meta: {
    title: string;
    description: string;
    ogAlt: string;
  };
  nav: {
    items: { id: string; label: string }[];
    cta: string;
    langLabel: string;
    langSwitch: string; // rótulo do idioma alternativo
  };
  hero: {
    eyebrow: string;
    eyebrow2: string; // linha de destaque secundária (ex.: Atendimento em Saúde Mental)
    name: string;
    role: string;
    headline: string[]; // linhas do título editorial
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    credentials: string;
    highlight: string; // destaque (ex.: 18 anos de dedicação à medicina)
    postgrad: string[]; // pós-graduações exibidas na caixinha do retrato
    portraitAlt: string;
    scroll: string;
  };
  highlights: {
    items: { label: string; value: string }[];
  };
  manifesto: {
    kicker: string;
    lines: string[]; // frase-manifesto quebrada para ritmo tipográfico
    signature: string;
  };
  about: {
    kicker: string;
    title: string;
    bioTitle: string; // sub-título do bloco de trajetória
    paragraphs: string[];
    factsTitle: string;
    facts: { label: string; value: string }[];
    portraitAlt: string;
  };
  approach: {
    kicker: string;
    title: string;
    intro: string;
    pillars: { index: string; title: string; text: string }[];
  };
  care: {
    kicker: string;
    title: string;
    intro: string;
    groups: { title: string; items: string[] }[];
    noteTitle: string;
    note: string;
  };
  telemedicine: {
    kicker: string;
    title: string;
    intro: string;
    stepsTitle: string;
    steps: { title: string; text: string }[];
    platformNote: string;
    cta: string;
  };
  languages: {
    kicker: string;
    title: string;
    text: string;
    tags: string[];
  };
  faq: {
    kicker: string;
    title: string;
    items: { q: string; a: string }[];
  };
  contact: {
    kicker: string;
    title: string;
    text: string;
    whatsappCta: string;
    whatsappMessage: string;
    hoursLabel: string;
    hoursValue: string;
    emailLabel: string;
  };
  footer: {
    tagline: string;
    disclaimer: string;
    credits: string;
    nav: string;
    rights: string;
  };
}
