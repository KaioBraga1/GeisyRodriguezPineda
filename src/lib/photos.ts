import { existsSync } from "fs";
import { join } from "path";

const EXTENSIONS = ["jpg", "jpeg", "png", "webp", "avif"];

/**
 * Resolve o caminho de uma foto SOMENTE se o arquivo existir em /public.
 * Aceita qualquer extensão comum: se o config aponta para ".jpg" mas o arquivo
 * salvo é ".png"/".webp", encontra do mesmo jeito. Assim o site nunca dispara
 * requisição para arquivo inexistente — mostra o plate de marca diretamente.
 *
 * Uso apenas em Server Components (depende de `fs`).
 * Em dev, reavalia a cada request; em produção (SSG), avalia no build.
 */
export function resolvePhoto(src?: string): string | undefined {
  if (!src) return undefined;
  if (/^https?:\/\//.test(src)) return src;

  const clean = src.replace(/^\//, "");
  const publicDir = join(process.cwd(), "public");

  // 1) caminho exato
  if (existsSync(join(publicDir, clean))) return `/${clean}`;

  // 2) mesmo nome-base, qualquer extensão suportada
  const base = clean.replace(/\.[^./]+$/, "");
  for (const ext of EXTENSIONS) {
    const candidate = `${base}.${ext}`;
    if (existsSync(join(publicDir, candidate))) return `/${candidate}`;
  }

  return undefined;
}
