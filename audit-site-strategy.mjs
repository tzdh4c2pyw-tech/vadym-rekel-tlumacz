import fs from "fs";
import path from "path";

const root = process.cwd();

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!["node_modules", ".next", ".git", "out", "dist", "build"].includes(entry.name)) {
        walk(full, out);
      }
    } else if (/\.(tsx|ts|jsx|js|md|mdx)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

const files = walk("app").concat(walk("components"));

const suspicious = [
  "SEO",
  "podstron",
  "pozycjonowania",
  "folderu",
  "ścieżki w kodzie",
  "premium-test",
  "vadym-rekel-tlumacz.vercel.app",
  "tlumaczrosyjskiegoiukrainskiego.pl",
  "najlepszy",
  "lider",
  "gwarancja"
];

const importantRoutes = [
  "/",
  "/tlumacz-przysiegly-ukrainski-krakow",
  "/dokumenty-z-ukrainy",
  "/tlumaczenia-sprawy-karne-ukrainski",
  "/tlumaczenia-dla-kancelarii",
  "/tlumaczenia-sadowe-ukrainski",
  "/tlumaczenia-dla-policji",
  "/tlumaczenia-dla-prokuratury",
  "/kwalifikacje",
  "/kontakt"
];

function cleanText(s) {
  return s
    .replace(/<style>{`[\s\S]*?`}<\/style>/g, " ")
    .replace(/`[\s\S]*?`/g, " ")
    .replace(/[{}()[\];=<>]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function countOccurrences(text, needle) {
  return (text.match(new RegExp(needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi")) || []).length;
}

const report = [];

report.push("# AUDYT STRATEGICZNY STRONY");
report.push("");
report.push(`Folder: ${root}`);
report.push(`Pliki analizowane: ${files.length}`);
report.push("");

report.push("## 1. Najważniejsze pliki i długość treści");
for (const file of [
  "app/page.tsx",
  "app/tlumacz-przysiegly-ukrainski-krakow/page.tsx",
  "app/dokumenty-z-ukrainy/page.tsx",
  "app/tlumaczenia-sprawy-karne-ukrainski/page.tsx",
  "app/tlumaczenia-dla-kancelarii/page.tsx",
  "app/tlumaczenia-sadowe-ukrainski/page.tsx",
  "app/tlumaczenia-dla-policji/page.tsx",
  "app/tlumaczenia-dla-prokuratury/page.tsx",
  "app/kwalifikacje/page.tsx",
  "app/kontakt/page.tsx",
  "app/sitemap.ts",
  "app/robots.ts",
  "app/layout.tsx"
]) {
  if (!fs.existsSync(file)) {
    report.push(`- BRAK: ${file}`);
    continue;
  }
  const raw = fs.readFileSync(file, "utf8");
  const text = cleanText(raw);
  report.push(`- ${file}: ${raw.length} znaków kodu, około ${text.split(" ").filter(Boolean).length} słów tekstu`);
}
report.push("");

report.push("## 2. Podejrzane / robocze słowa");
let foundSuspicious = false;
for (const file of files) {
  const raw = fs.readFileSync(file, "utf8");
  for (const word of suspicious) {
    if (raw.includes(word)) {
      foundSuspicious = true;
      const lines = raw.split("\n");
      lines.forEach((line, i) => {
        if (line.includes(word)) {
          report.push(`- ${file}:${i + 1} — "${word}" — ${line.trim().slice(0, 180)}`);
        }
      });
    }
  }
}
if (!foundSuspicious) report.push("- Nie znaleziono oczywistych roboczych słów.");
report.push("");

report.push("## 3. Liczba wystąpień kluczowych fraz na homepage");
if (fs.existsSync("app/page.tsx")) {
  const home = fs.readFileSync("app/page.tsx", "utf8");
  const phrases = [
    "tłumacz przysięgły",
    "języka ukraińskiego",
    "Kraków",
    "Policji",
    "prokuratury",
    "sąd",
    "kancelarii",
    "dokumenty z Ukrainy",
    "materiał cyfrowy",
    "biegły",
    "MBA",
    "CIOL",
    "TEPIS"
  ];
  for (const phrase of phrases) {
    report.push(`- "${phrase}": ${countOccurrences(home, phrase)}`);
  }
}
report.push("");

report.push("## 4. Linki wewnętrzne na homepage");
if (fs.existsSync("app/page.tsx")) {
  const home = fs.readFileSync("app/page.tsx", "utf8");
  const hrefs = [...home.matchAll(/href=["'`](\/[^"'`#?]*)/g)].map(m => m[1]);
  const unique = [...new Set(hrefs)].sort();
  for (const href of unique) {
    report.push(`- ${href}`);
  }
}
report.push("");

report.push("## 5. Czy ważne trasy są w sitemap.ts");
if (fs.existsSync("app/sitemap.ts")) {
  const sitemap = fs.readFileSync("app/sitemap.ts", "utf8");
  for (const route of importantRoutes) {
    report.push(`- ${route}: ${sitemap.includes(route) ? "TAK" : "BRAK"}`);
  }
}
report.push("");

report.push("## 6. Strony miejskie");
const cityPages = files.filter(f => f.includes("tlumacz-przysiegly-ukrainski-") && f.endsWith("page.tsx"));
report.push(`Liczba stron miejskich: ${cityPages.length}`);
for (const file of cityPages.slice(0, 40)) {
  const raw = fs.readFileSync(file, "utf8");
  const hasRemote = raw.includes("z całej Polski") || raw.includes("elektronicznie") || raw.includes("zdalnie");
  const hasFakeLocalRisk = /siedziba|biuro|kancelaria mieści się/i.test(raw) && !file.includes("krakow");
  report.push(`- ${file}: zdalna obsługa=${hasRemote ? "TAK" : "NIE"}, ryzyko fałszywej lokalizacji=${hasFakeLocalRisk ? "SPRAWDŹ" : "OK"}`);
}
report.push("");

report.push("## 7. Rekomendacja robocza");
report.push("- Najpierw skrócić i uporządkować app/page.tsx.");
report.push("- Potem dopracować: Kraków, dokumenty z Ukrainy, sprawy karne, kancelarie.");
report.push("- Nie dodawać nowych podstron dokumentowych przed uporządkowaniem rdzenia.");
report.push("- Sprawdzić strony miejskie pod ryzyko doorway pages.");
report.push("");

fs.writeFileSync("AUDYT_STRATEGICZNY.md", report.join("\n"), "utf8");
console.log(report.join("\n"));
console.log("\nZapisano raport: AUDYT_STRATEGICZNY.md");
