import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description:
      "Medicina de Família e Comunidade — cuidado integral, humano e baseado em evidências.",
    start_url: "/pt",
    display: "standalone",
    background_color: "#faf9f6",
    theme_color: "#17495e",
    lang: "pt-BR",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
