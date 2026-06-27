import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vadymrekel.pro";
  const routes = [
    "",
    "/kontakt",
    "/kwalifikacje",
    "/tlumaczenia-sadowe-ukrainski",
    "/tlumaczenia-sprawy-karne-ukrainski",
    "/tlumaczenia-dla-kancelarii",
    "/tlumaczenia-dla-policji",
    "/tlumaczenia-dla-prokuratury",
    "/dokumenty-z-ukrainy",
    "/tlumaczenia-it-krypto"
  ];

  return routes.map((route) => ({
    url: base + route,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
