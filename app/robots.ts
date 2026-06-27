import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: "https://vadymrekel.pro/sitemap.xml",
    host: "https://vadymrekel.pro"
  };
}
