import type { MetadataRoute } from "next";

const baseUrl = "https://www.tlumaczrosyjskiegoiukrainskiego.pl";

const mainRoutes = [
  "",
  "/kontakt",
  "/kwalifikacje",
  "/dokumenty-z-ukrainy",
  "/tlumaczenia-dla-policji",
  "/tlumaczenia-dla-prokuratury",
  "/tlumaczenia-it-krypto",
  "/tlumaczenia-sadowe-ukrainski",
  "/tlumaczenie-korespondencji-osadzonych",
  "/transkrypcje-nagran-audio-wideo",
];

const cityRoutes = [
  "/tlumacz-przysiegly-ukrainski-warszawa",
  "/tlumacz-przysiegly-ukrainski-krakow",
  "/tlumacz-przysiegly-ukrainski-wroclaw",
  "/tlumacz-przysiegly-ukrainski-poznan",
  "/tlumacz-przysiegly-ukrainski-gdansk",
  "/tlumacz-przysiegly-ukrainski-lodz",
  "/tlumacz-przysiegly-ukrainski-katowice",
  "/tlumacz-przysiegly-ukrainski-lublin",
  "/tlumacz-przysiegly-ukrainski-rzeszow",
  "/tlumacz-przysiegly-ukrainski-szczecin",
  "/tlumacz-przysiegly-ukrainski-bydgoszcz",
  "/tlumacz-przysiegly-ukrainski-bialystok",
  "/tlumacz-przysiegly-ukrainski-torun",
  "/tlumacz-przysiegly-ukrainski-olsztyn",
  "/tlumacz-przysiegly-ukrainski-opole",
  "/tlumacz-przysiegly-ukrainski-kielce",
  "/tlumacz-przysiegly-ukrainski-radom",
  "/tlumacz-przysiegly-ukrainski-czestochowa",
  "/tlumacz-przysiegly-ukrainski-gliwice",
  "/tlumacz-przysiegly-ukrainski-gdynia",
  "/tlumacz-przysiegly-ukrainski-sopot",
  "/tlumacz-przysiegly-ukrainski-zielona-gora",
  "/tlumacz-przysiegly-ukrainski-gorzow-wielkopolski",
  "/tlumacz-przysiegly-ukrainski-bytom",
  "/tlumacz-przysiegly-ukrainski-sosnowiec",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const mainItems = mainRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority:
      route === ""
        ? 1
        : route === "/kontakt"
          ? 0.95
          : route === "/kwalifikacje"
            ? 0.7
            : 0.85,
  }));

  const cityItems = cityRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority:
      route === "/tlumacz-przysiegly-ukrainski-krakow"
        ? 0.92
        : route === "/tlumacz-przysiegly-ukrainski-warszawa"
          ? 0.9
          : route === "/tlumacz-przysiegly-ukrainski-wroclaw"
            ? 0.88
            : route === "/tlumacz-przysiegly-ukrainski-poznan"
              ? 0.86
              : route === "/tlumacz-przysiegly-ukrainski-gdansk"
                ? 0.86
                : 0.78,
  }));

  return [...mainItems, ...cityItems];
}
