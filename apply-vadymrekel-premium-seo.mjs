import fs from "fs";
import path from "path";

const root = process.cwd();
const backupDir = path.join(root, "_backup_before_premium_seo_" + new Date().toISOString().replace(/[:.]/g, "-"));

const exts = new Set([".tsx", ".ts", ".jsx", ".js", ".md", ".mdx"]);
const skipDirs = new Set(["node_modules", ".next", ".git", "out", "dist", "build", backupDir.split("/").pop()]);

function walk(dir) {
  let files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files = files.concat(walk(full));
    else if (exts.has(path.extname(entry.name))) files.push(full);
  }
  return files;
}

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const item of fs.readdirSync(src)) copyRecursive(path.join(src, item), path.join(dest, item));
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function write(file, content) {
  fs.writeFileSync(file, content, "utf8");
}

copyRecursive(path.join(root, "app"), path.join(backupDir, "app"));
if (fs.existsSync(path.join(root, "components"))) copyRecursive(path.join(root, "components"), path.join(backupDir, "components"));
console.log("Backup:", backupDir);

const files = walk(root);

for (const file of files) {
  let s = read(file);
  const before = s;

  s = s.replaceAll(
    "Dwa główne zdjęcia są większe i bardziej czytelne. Pozostałe pokazują zaplecze pracy kancelarii.",
    "Zdjęcia pokazują realne miejsce pracy kancelarii, stanowisko do pracy z dokumentami, zaplecze techniczne oraz warunki przygotowywania tłumaczeń poświadczonych."
  );

  s = s.replaceAll(
    "Dwa glowne zdjecia sa wieksze i bardziej czytelne. Pozostale pokazuja zaplecze pracy kancelarii.",
    "Zdjecia pokazuja realne miejsce pracy kancelarii, stanowisko do pracy z dokumentami, zaplecze techniczne oraz warunki przygotowywania tlumaczen poswiadczonych."
  );

  s = s.replace(/Jeżeli zmienisz nazwy plików w folderze public\/images\/certyfikaty[^"'`<>{}\n]*[^\n]*/g,
    "Poniżej znajdują się wybrane dokumenty potwierdzające kwalifikacje zawodowe i członkostwa branżowe."
  );

  s = s.replace(/Jezeli zmienisz nazwy plikow w folderze public\/images\/certyfikaty[^"'`<>{}\n]*[^\n]*/g,
    "Ponizej znajduja sie wybrane dokumenty potwierdzajace kwalifikacje zawodowe i czlonkostwa branzowe."
  );

  s = s.replaceAll("sąd, Policja, prokuratura", "organy procesowe, instytucje publiczne i kancelarie");
  s = s.replaceAll("sądu, Policji i prokuratury", "organów procesowych i instytucji publicznych");
  s = s.replaceAll("sady, Policja, prokuratura", "organy procesowe, instytucje publiczne i kancelarie");

  if (s !== before) {
    write(file, s);
    console.log("Poprawiono tekst:", path.relative(root, file));
  }
}

const seoComponentsDir = path.join(root, "components");
fs.mkdirSync(seoComponentsDir, { recursive: true });

const premiumSections = `export function PremiumTrustSections() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-slate-950">Jak uzyskać wycenę?</h2>
          <ol className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
            <li>1. Wyślij skan, zdjęcie albo PDF dokumentu.</li>
            <li>2. Napisz, do czego potrzebne jest tłumaczenie: sąd, urząd, kancelaria, uczelnia albo postępowanie.</li>
            <li>3. Podaj oczekiwany termin realizacji.</li>
            <li>4. Otrzymasz informację o koszcie i możliwym terminie odbioru.</li>
          </ol>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="mailto:biegly@vadymrekel.pl" className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Wyślij dokument e-mailem</a>
            <a href="https://wa.me/48883040483" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50">WhatsApp</a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-slate-950">Poufność dokumentów</h2>
          <p className="mt-4 text-sm leading-6 text-slate-700">
            Materiały przekazywane do tłumaczenia są traktowane jako poufne. Dotyczy to w szczególności akt spraw,
            dokumentów procesowych, danych osobowych, materiału cyfrowego, korespondencji oraz dokumentów przekazywanych
            przez kancelarie, organy procesowe i instytucje publiczne.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-slate-950">Weryfikacja uprawnień</h2>
          <p className="mt-4 text-sm leading-6 text-slate-700">
            Vadym Rekel jest tłumaczem przysięgłym języka ukraińskiego wpisanym na listę Ministra Sprawiedliwości.
            Wpis można zweryfikować w publicznym rejestrze tłumaczy przysięgłych.
          </p>
          <a
            href="https://arch-bip.ms.gov.pl/pl/rejestry-i-ewidencje/tlumacze-przysiegli/lista-tlumaczy-przysieglych/translator,11371.html"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            Sprawdź wpis w rejestrze
          </a>
        </div>
      </div>
    </section>
  );
}
`;

write(path.join(seoComponentsDir, "PremiumTrustSections.tsx"), premiumSections);
console.log("Dodano komponent:", "components/PremiumTrustSections.tsx");

const jsonLdComponent = `export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Vadym Rekel - Tłumacz przysięgły języka ukraińskiego",
    url: "https://vadymrekel.pro/",
    telephone: "+48883040483",
    email: "biegly@vadymrekel.pl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Kielecka 2/53",
      postalCode: "31-526",
      addressLocality: "Kraków",
      addressCountry: "PL"
    },
    areaServed: "PL",
    priceRange: "$$",
    description:
      "Tłumacz przysięgły języka ukraińskiego w Krakowie. Tłumaczenia poświadczone, sądowe, dokumenty procesowe, dokumenty z Ukrainy i materiał cyfrowy.",
    sameAs: [
      "https://www.linkedin.com/in/vadym-rekel/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
`;

write(path.join(seoComponentsDir, "LocalBusinessJsonLd.tsx"), jsonLdComponent);
console.log("Dodano komponent:", "components/LocalBusinessJsonLd.tsx");

const pageCandidates = [
  path.join(root, "app", "page.tsx"),
  path.join(root, "app", "page.jsx")
].filter(fs.existsSync);

if (pageCandidates.length) {
  const page = pageCandidates[0];
  let s = read(page);

  if (!s.includes("PremiumTrustSections")) {
    s = `import { PremiumTrustSections } from "@/components/PremiumTrustSections";\n` + s;
  }

  if (!s.includes("<PremiumTrustSections />")) {
    if (s.includes("</main>")) {
      s = s.replace("</main>", "      <PremiumTrustSections />\n    </main>");
    } else {
      s = s.replace(/<\/>\s*\);?\s*$/s, "      <PremiumTrustSections />\n    </>\n  );");
    }
  }

  write(page, s);
  console.log("Wpięto sekcje premium w:", path.relative(root, page));
} else {
  console.log("Nie znaleziono app/page.tsx - dodaj ręcznie <PremiumTrustSections /> na stronie głównej.");
}

const layoutCandidates = [
  path.join(root, "app", "layout.tsx"),
  path.join(root, "app", "layout.jsx")
].filter(fs.existsSync);

if (layoutCandidates.length) {
  const layout = layoutCandidates[0];
  let s = read(layout);

  if (!s.includes("LocalBusinessJsonLd")) {
    s = `import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";\n` + s;
  }

  if (!s.includes("<LocalBusinessJsonLd />")) {
    if (s.includes("<body")) {
      s = s.replace(/(<body[^>]*>)/, "$1\n        <LocalBusinessJsonLd />");
    } else {
      s = s.replace(/({children})/, "<LocalBusinessJsonLd />\n        $1");
    }
  }

  s = s.replace(/metadataBase:\s*new URL\([^)]*\),?/g, "");
  if (s.includes("export const metadata") && !s.includes("https://vadymrekel.pro")) {
    s = s.replace(/export const metadata\s*=\s*{/, 'export const metadata = {\n  metadataBase: new URL("https://vadymrekel.pro"),');
  }

  write(layout, s);
  console.log("Wpięto Schema.org w:", path.relative(root, layout));
} else {
  console.log("Nie znaleziono app/layout.tsx - dodaj ręcznie <LocalBusinessJsonLd />.");
}

const sitemap = `import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vadymrekel.pro";
  const routes = [
    "",
    "/kontakt",
    "/kwalifikacje",
    "/tlumaczenia-sadowe-ukrainski",
    "/tlumaczenia-sprawy-karne-ukrainski",
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
`;

write(path.join(root, "app", "sitemap.ts"), sitemap);
console.log("Dodano app/sitemap.ts");

const robots = `import type { MetadataRoute } from "next";

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
`;

write(path.join(root, "app", "robots.ts"), robots);
console.log("Dodano app/robots.ts");

const nextConfigCandidates = [
  path.join(root, "next.config.ts"),
  path.join(root, "next.config.mjs"),
  path.join(root, "next.config.js")
].filter(fs.existsSync);

if (nextConfigCandidates.length) {
  const cfg = nextConfigCandidates[0];
  let s = read(cfg);

  if (!s.includes("tlumaczrosyjskiegoiukrainskiego.pl")) {
    const redirectBlock = `
async redirects() {
  return [
    {
      source: "/:path*",
      has: [{ type: "host", value: "tlumaczrosyjskiegoiukrainskiego.pl" }],
      destination: "https://vadymrekel.pro/:path*",
      permanent: true
    },
    {
      source: "/:path*",
      has: [{ type: "host", value: "www.tlumaczrosyjskiegoiukrainskiego.pl" }],
      destination: "https://vadymrekel.pro/:path*",
      permanent: true
    },
    {
      source: "/:path*",
      has: [{ type: "host", value: "vadymrekel.pl" }],
      destination: "https://vadymrekel.pro/:path*",
      permanent: true
    },
    {
      source: "/:path*",
      has: [{ type: "host", value: "www.vadymrekel.pl" }],
      destination: "https://vadymrekel.pro/:path*",
      permanent: true
    }
  ];
},
`;

    if (s.includes("const nextConfig = {")) {
      s = s.replace("const nextConfig = {", "const nextConfig = {\n" + redirectBlock);
      write(cfg, s);
      console.log("Dodano przekierowania hostów do:", path.relative(root, cfg));
    } else {
      console.log("Nie rozpoznano formatu next.config - przekierowania trzeba dodać ręcznie.");
    }
  }
}

console.log("");
console.log("Gotowe. Teraz uruchom: npm run lint && npm run build");
