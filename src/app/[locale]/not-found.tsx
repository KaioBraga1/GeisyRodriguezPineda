import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center">
      <p className="eyebrow eyebrow-line">404</p>
      <h1 className="font-display mt-6 text-[clamp(2rem,6vw,3.5rem)] leading-tight text-ink">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-md text-slate">
        O endereço que você procura não existe ou foi movido.
        <span className="mt-1 block text-slate-soft">
          La página que buscas no existe o fue movida.
        </span>
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/pt"
          className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink-deep"
        >
          Início
        </Link>
        <Link
          href="/es"
          className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/50"
        >
          Inicio (ES)
        </Link>
      </div>
    </main>
  );
}
