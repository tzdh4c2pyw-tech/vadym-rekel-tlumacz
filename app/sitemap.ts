import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tlumaczrosyjskiegoiukrainskiego.pl";

  const routes = [
    "",
    "/kwalifikacje",
    "/tlumaczenia-sadowe-ukrainski",
    "/tlumaczenia-dla-prokuratury",
    "/tlumaczenia-dla-policji",
    "/transkrypcje-nagran-audio-wideo",
    "/tlumaczenia-it-krypto",
    "/tlumaczenie-korespondencji-osadzonych",
    "/dokumenty-z-ukrainy"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/kwalifikacje" ? 0.9 : 0.85
  }));
}