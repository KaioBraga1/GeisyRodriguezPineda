# Deploy na Hostinger (via GitHub)

O site usa **Next.js com middleware** (redirecionamento de idioma), então precisa de
**hospedagem com Node.js** (Business/Cloud com "Node.js Web App", ou VPS).
Hospedagem compartilhada comum (só PHP/HTML) **não** serve.

## Passo a passo (hPanel → Websites → Add website → Node.js Apps)

1. **Import Git Repository** → autorize o GitHub → escolha `KaioBraga1/GeisyRodriguezPineda`, branch `main`.
2. Configurações de build:
   | Campo | Valor |
   | --- | --- |
   | Framework | Next.js |
   | Node.js version | 20.x ou 22.x |
   | Install command | `npm ci` |
   | Build command | `npm run build` |
   | Start command | `npm run start` |
   | Output / root | raiz do repositório (`./`) |
3. **Environment variables** (copie de `.env.example`):
   | Variável | Valor |
   | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | `https://drageisyrodriguezpineda.com` |
   | `NEXT_PUBLIC_WHATSAPP_NUMBER` | `55` + DDD + número, só dígitos |
   | `NEXT_PUBLIC_CONTACT_EMAIL` | e-mail profissional (opcional) |
   | `NEXT_PUBLIC_HERO_PHOTO` / `NEXT_PUBLIC_ABOUT_PHOTO` | opcional (já há padrão em `public/`) |
   | `NODE_ENV` | `production` |
   | `NEXT_TELEMETRY_DISABLED` | `1` |
4. **Deploy**. Depois, aponte o domínio (DNS) e ative o SSL gratuito.
5. Novos `git push` na `main` redeployam automaticamente (ative *Auto deploy*).

## Atenção
- `NEXT_PUBLIC_*` são gravadas **no build**: alterou o valor → faça novo deploy.
- Sem o WhatsApp configurado, os botões levam para `#contato` (sem link quebrado).
- O arquivo `.env` real **não** vai ao GitHub (está no `.gitignore`); configure no painel.
