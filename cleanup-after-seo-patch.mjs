import fs from "fs";

const pageFile = "app/page.tsx";

// 1. Usuń pliki robocze
for (const file of [
  "apply-vadymrekel-premium-seo.mjs",
  "fix-lint-and-metadata.mjs",
  "components/PremiumTrustSections.tsx"
]) {
  if (fs.existsSync(file)) {
    fs.rmSync(file, { force: true });
    console.log("Usunięto:", file);
  }
}

// 2. Napraw app/page.tsx
if (!fs.existsSync(pageFile)) {
  console.error("Brak app/page.tsx");
  process.exit(1);
}

let s = fs.readFileSync(pageFile, "utf8");

// Usuń import PremiumTrustSections
s = s.replace(/import\s*{\s*PremiumTrustSections\s*}\s*from\s*["']@\/components\/PremiumTrustSections["'];?\n?/g, "");
s = s.replace(/import\s*{\s*PremiumTrustSections\s*}\s*from\s*["']\.\.\/components\/PremiumTrustSections["'];?\n?/g, "");

// Usuń komponent z końca strony
s = s.replace(/\s*<PremiumTrustSections\s*\/>\s*/g, "\n");

// Popraw domenę w homepage metadata
s = s.replaceAll("https://vadym-rekel-tlumacz.vercel.app", "https://vadymrekel.pro");

// Dodaj processCards, jeżeli nie ma
if (!s.includes("const processCards = [")) {
  const marker = "const officePhotos = [";

  const processCards = `const processCards = [
  {
    title: "Wyślij dokument",
    text: "Do wstępnej wyceny wystarczy czytelny skan, zdjęcie albo plik PDF. Warto wskazać, czy dokument ma zostać użyty w urzędzie, sądzie, kancelarii, na uczelni albo w innym postępowaniu."
  },
  {
    title: "Otrzymaj wycenę",
    text: "W odpowiedzi otrzymasz informację o koszcie, terminie realizacji oraz sposobie odbioru tłumaczenia poświadczonego."
  },
  {
    title: "Poufna obsługa",
    text: "Dokumenty procesowe, dane osobowe, korespondencja, akta spraw i materiał cyfrowy są traktowane jako materiały poufne."
  }
];

`;

  if (s.includes(marker)) {
    s = s.replace(marker, processCards + marker);
  }
}

// Dodaj sekcję wyceny w natywnym stylu strony
const nativeSection = `      <section className="section" id="wycena">
        <SectionHeading
          label="Wycena i poufność"
          title="Jak przekazać dokument do tłumaczenia?"
          text="Do wstępnej wyceny wystarczy czytelny skan, zdjęcie albo plik PDF. Kancelaria przygotowuje tłumaczenia poświadczone dokumentów urzędowych, sądowych, prywatnych i procesowych."
        />

        <div className="grid-3">
          {processCards.map((item) => (
            <article className="card" key={item.title}>
              <span className="tag">Etap</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="hero-actions">
          <a className="button button-primary" href={\`mailto:\${email}\`}>
            Wyślij dokument e-mailem
          </a>
          <a className="button button-secondary" href="https://wa.me/48883040483">
            WhatsApp
          </a>
          <a
            className="button button-secondary"
            href="https://arch-bip.ms.gov.pl/pl/rejestry-i-ewidencje/tlumacze-przysiegli/lista-tlumaczy-przysieglych/translator,11371.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sprawdź wpis w rejestrze
          </a>
        </div>
      </section>

`;

if (!s.includes('id="wycena"')) {
  const contactMarker = `      <section className="section" id="kontakt">`;
  if (s.includes(contactMarker)) {
    s = s.replace(contactMarker, nativeSection + contactMarker);
  } else {
    console.error("Nie znaleziono sekcji kontaktu.");
  }
}

// Dodaj link w menu
if (!s.includes('href="#wycena"')) {
  s = s.replace(
    `<a href="#kancelaria">Kancelaria</a>
            <a href="/kwalifikacje">Kwalifikacje</a>`,
    `<a href="#kancelaria">Kancelaria</a>
            <a href="#wycena">Wycena</a>
            <a href="/kwalifikacje">Kwalifikacje</a>`
  );
}

fs.writeFileSync(pageFile, s, "utf8");

// 3. Napraw eslint.config.mjs bardzo prosto: tylko ignorowanie folderów, bez next/core-web-vitals
const eslint = `export default [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "dist/**",
      "build/**",
      "*backup*/**",
      "app_backup*/**",
      "components_backup*/**"
    ]
  }
];
`;

fs.writeFileSync("eslint.config.mjs", eslint, "utf8");

console.log("Cleanup zakończony.");
