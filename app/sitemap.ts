import type { MetadataRoute } from "next";

const baseUrl = "https://www.tlumaczrosyjskiegoiukrainskiego.pl";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1.0
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9
    },
    {
      url: `${baseUrl}/tlumaczenia-sprawy-karne-ukrainski`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.92
    },
    {
      url: `${baseUrl}/tlumaczenia-sadowe-ukrainski`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9
    },
    {
      url: `${baseUrl}/tlumaczenia-dla-policji`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9
    },
    {
      url: `${baseUrl}/tlumaczenia-dla-prokuratury`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9
    },
    {
      url: `${baseUrl}/tlumaczenia-it-krypto`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85
    },
    {
      url: `${baseUrl}/dokumenty-z-ukrainy`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85
    },
    {
      url: `${baseUrl}/tlumaczenie-korespondencji-osadzonych`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/transkrypcje-nagran-audio-wideo`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75
    },
    {
      url: `${baseUrl}/kwalifikacje`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65
    }
  ];

  return routes;
}