import type { Locale } from "./i18n";

/**
 * Dados institucionais confirmados da Dra. Geisy.
 * Valores sensíveis (WhatsApp, e-mail) vêm de variáveis de ambiente.
 */
export const site = {
  name: "Dra. Geisy Rodriguez Pineda",
  shortName: "Dra. Geisy",
  role: {
    pt: "Médica de Família e Comunidade",
    es: "Médica de Familia y Comunidad",
  },
  crm: "CRM-SP 240872",
  rqe: "RQE 138750",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://drageisyrodriguezpineda.com",
  // Apenas dígitos, formato internacional. Configure em .env.local.
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  // Fotos oficiais (coloque os arquivos em /public com estes nomes).
  // Se o arquivo não existir, o site cai automaticamente no plate de marca.
  photos: {
    hero:
      process.env.NEXT_PUBLIC_HERO_PHOTO ??
      "/dra-geisy-rodriguez-pineda.jpg",
    about:
      process.env.NEXT_PUBLIC_ABOUT_PHOTO ??
      "/dra-geisy-medica-de-familia.jpg",
  },
} as const;

/**
 * Monta o link de WhatsApp com mensagem pré-preenchida.
 * Se o número ainda não foi confirmado, cai num href seguro (#contato)
 * para nunca gerar um link quebrado em produção.
 */
export function whatsappHref(message: string): string {
  if (!site.whatsapp) return "#contato";
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export function localizedUrl(locale: Locale, path = ""): string {
  const clean = path.replace(/^\//, "");
  return `${site.url}/${locale}${clean ? `/${clean}` : ""}`;
}
