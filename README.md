# Dra. Geisy Rodriguez Pineda — Presença Digital

Website profissional da **Dra. Geisy Rodriguez Pineda**, médica especialista em
**Medicina de Família e Comunidade** (CRM-SP 240872 · RQE 138750).

Um projeto **Mythos Labs**: marca médica pessoal, editorial e humana —
deliberadamente distante do "site azul de médico". Bilíngue (Português /
Espanhol), otimizado para performance, acessibilidade (WCAG 2.2 AA) e SEO.

> _Cuidando da sua saúde por inteiro._

---

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (design tokens via `@theme`)
- **Framer Motion** (movimento sóbrio, respeita `prefers-reduced-motion`)
- **Lucide** (ícones)
- Páginas geradas de forma **estática** (SSG) — pt e es
- i18n por segmento de rota (`/pt`, `/es`) com `middleware` de detecção de idioma

---

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000  → redireciona para /pt
```

Build de produção:

```bash
npm run build
npm run start
```

---

## Configuração (variáveis de ambiente)

Copie `.env.example` para `.env.local` e preencha:

| Variável | Descrição |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL canônica (SEO, sitemap, hreflang, OG). |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | **[CONFIRMAR]** Número no formato internacional, só dígitos (`55DDDNÚMERO`). |
| `NEXT_PUBLIC_CONTACT_EMAIL` | E-mail profissional (opcional). |
| `NEXT_PUBLIC_PORTRAIT_SRC` | Caminho da foto oficial (ex.: `/portrait.jpg`). |

> Sem o número de WhatsApp, todos os CTAs caem de forma segura para a seção de
> contato (`#contato`) — nada de links quebrados em produção.

---

## Adicionar as fotografias oficiais

Salve os dois arquivos na pasta `public/` (crie a pasta se não existir), com
proporção ~4:5 (retrato). **Basta usar estes nomes — nada de `.env` necessário:**

| Arquivo em `public/` | Onde aparece |
| --- | --- |
| `dra-geisy-rodriguez-pineda.jpg` | Foto do topo (hero) |
| `dra-geisy-medica-de-familia.jpg` | Foto da seção "Sobre" |

Quer outro nome/caminho? Defina `NEXT_PUBLIC_HERO_PHOTO` / `NEXT_PUBLIC_ABOUT_PHOTO`.

Enquanto não houver foto, o site exibe um _plate_ de marca com o monograma — o
layout não muda quando a foto entra, e nunca aparece imagem quebrada.

---

## Conteúdo & idiomas

Todo o texto vive em `src/content/pt.ts` e `src/content/es.ts`, tipados pelo
mesmo contrato (`src/content/types.ts`) — o TypeScript garante paridade entre os
idiomas. Editar copy é editar esses arquivos, sem tocar em componentes.

---

## Pendências para confirmar com a Dra. Geisy

Marcadas no código/`.env` como `[CONFIRMAR COM DRA. GEISY]`:

- **Número de WhatsApp** e e-mail de contato.
- **Fotografia profissional** (direção editorial, luz natural).
- Domínio final (`NEXT_PUBLIC_SITE_URL`).
- Eventual revisão fina da tradução em espanhol.

Nada foi inventado: credenciais, formação e trajetória seguem estritamente as
informações fornecidas. Sem promessas de cura, sem depoimentos, sem preços.

---

## Estrutura

```
src/
├── app/
│   ├── [locale]/          # layout (html lang), page (home), not-found
│   ├── globals.css        # design system (tokens, base, utilitários)
│   ├── icon.svg · apple-icon.tsx · opengraph-image.tsx
│   ├── sitemap.ts · robots.ts · manifest.ts
│   └── middleware.ts       # (em src/) redirecionamento de idioma
├── components/            # Header, Footer, Portrait, Cta, Reveal, FloatingWhatsApp
│   └── sections/          # Hero, Manifesto, About, Approach, Care, Telemedicine,
│                          #   Languages, Faq, Contact
├── content/               # pt.ts, es.ts, types.ts
└── lib/                   # i18n.ts, site.ts
```

`scripts/` contém utilitários de QA visual com Playwright (`shoot.mjs`,
`sections.mjs`, `interactions.mjs`) — opcionais, para inspeção.

---

## Notas de qualidade

- **Acessibilidade:** contraste AA verificado, foco visível, semântica, `aria`
  no menu/FAQ, `prefers-reduced-motion`, navegação por teclado.
- **SEO:** metadata por idioma, canonical, `hreflang` + `x-default`,
  Open Graph dinâmico, JSON-LD (`Physician`, `WebSite`, `FAQPage`),
  sitemap e robots.
- **Performance:** SSG, fontes via `next/font`, JS de interação mínimo.
- **Ética médica:** aviso legal no rodapé; sem sensacionalismo.

---

_Presença digital por **Mythos Labs**._
