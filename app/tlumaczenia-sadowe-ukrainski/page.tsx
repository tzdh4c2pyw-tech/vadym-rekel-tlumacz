import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Tłumaczenia sądowe ukraiński | Tłumacz przysięgły języka ukraińskiego Kraków",
  description:
    "Tłumacz przysięgły języka ukraińskiego TP/27/17. Tłumaczenia sądowe: akta spraw, protokoły, postanowienia, wyroki, pisma procesowe, dokumenty z Ukrainy i materiał cyfrowy. Kancelaria w Krakowie, dokumenty z całej Polski zdalnie.",
  keywords: [
    "tłumaczenia sądowe ukraiński",
    "tłumacz przysięgły ukraiński sąd",
    "tłumacz ukraiński sąd",
    "tłumacz przysięgły języka ukraińskiego Kraków",
    "tłumaczenie akt sądowych ukraiński",
    "tłumaczenie protokołu ukraiński",
    "tłumaczenie wyroku ukraiński",
    "tłumaczenie postanowienia ukraiński",
    "Vadym Rekel tłumacz przysięgły",
    "TP/27/17"
  ]
};

const email = "biegly@vadymrekel.pl";

const expertPhoneDisplay = "883 040 483";
const expertPhoneHref = "+48883040483";

const officePhoneDisplay = "735 753 383";
const officePhoneHref = "+48735753383";

const linkedInUrl = "https://www.linkedin.com/in/vadym-rekel/";

const courtMaterials = [
  {
    title: "Akta sprawy",
    text: "Dokumenty procesowe, załączniki, pisma stron, dokumenty urzędowe, dokumenty z Ukrainy oraz materiał dołączony do akt."
  },
  {
    title: "Protokoły i czynności",
    text: "Protokoły rozpraw, przesłuchań, posiedzeń, czynności procesowych oraz dokumenty powiązane z przebiegiem postępowania."
  },
  {
    title: "Orzeczenia i postanowienia",
    text: "Wyroki, postanowienia, zarządzenia, uzasadnienia, pouczenia oraz pisma kierowane do stron postępowania."
  },
  {
    title: "Sprawy karne",
    text: "Dokumenty w sprawach karnych, materiał dowodowy, korespondencja osadzonych, komunikatory, raporty PDF i dane cyfrowe."
  },
  {
    title: "Dokumenty z Ukrainy",
    text: "Dokumenty sądowe, prokuratorskie, administracyjne, urzędowe i prywatne pochodzące z Ukrainy albo kierowane do Ukrainy."
  },
  {
    title: "Materiał cyfrowy",
    text: "Zrzuty ekranu, wiadomości, komunikatory, e-mail, pliki PDF, raporty z telefonu i inny materiał przekazywany do tłumaczenia."
  }
];

const relatedPages = [
  {
    title: "Sprawy karne",
    text: "Akta, protokoły, materiał cyfrowy, korespondencja osadzonych i dokumenty z Ukrainy.",
    href: "/tlumaczenia-sprawy-karne-ukrainski"
  },
  {
    title: "Tłumaczenia dla Policji",
    text: "Czynności, notatki, protokoły, pouczenia, komunikatory i materiał dowodowy.",
    href: "/tlumaczenia-dla-policji"
  },
  {
    title: "Tłumaczenia dla prokuratury",
    text: "Postępowania przygotowawcze, pomoc prawna z Ukrainą, akta i materiał dowodowy.",
    href: "/tlumaczenia-dla-prokuratury"
  },
  {
    title: "Materiał cyfrowy",
    text: "Komunikatory, raporty PDF, zrzuty ekranu, dane z telefonu, oszustwa internetowe i kryptowaluty.",
    href: "/tlumaczenia-it-krypto"
  }
];

const processSteps = [
  {
    title: "Przekazanie materiału",
    text: "Dokumenty można przesłać elektronicznie do wstępnej wyceny albo przekazać w kancelarii po wcześniejszym uzgodnieniu."
  },
  {
    title: "Określenie zakresu",
    text: "Przy większych aktach warto wskazać, które dokumenty, strony albo fragmenty mają zostać objęte tłumaczeniem."
  },
  {
    title: "Ustalenie terminu",
    text: "Termin zależy od objętości materiału, rodzaju dokumentów, czytelności skanów oraz charakteru sprawy."
  },
  {
    title: "Realizacja tłumaczenia",
    text: "Tłumaczenie jest przygotowywane z zachowaniem precyzji terminologicznej i przeznaczenia procesowego dokumentu."
  }
];

const faqItems = [
  {
    question: "Czy tłumaczenie sądowe musi być tłumaczeniem poświadczonym?",
    answer:
      "W wielu przypadkach dokument przeznaczony do sądu powinien zostać przetłumaczony przez tłumacza przysięgłego. Ostateczny wymóg zależy jednak od celu dokumentu i decyzji organu albo pełnomocnika."
  },
  {
    question: "Czy można przesłać akta sprawy do wyceny elektronicznie?",
    answer:
      "Tak. Do wstępnej wyceny można przesłać skany, zdjęcia, pliki PDF albo opis zakresu materiału. Przy większych aktach warto wskazać najważniejsze dokumenty albo numery stron."
  },
  {
    question: "Czy kancelaria obsługuje sprawy karne?",
    answer:
      "Tak. Kancelaria obsługuje tłumaczenia języka ukraińskiego w sprawach karnych, w tym akta, protokoły, materiał cyfrowy, korespondencję osadzonych i dokumenty z Ukrainy."
  },
  {
    question: "Czy dokumenty można przesłać z innego miasta niż Kraków?",
    answer:
      "Tak. Kancelaria ma siedzibę w Krakowie, ale dokumenty do wstępnej wyceny można przesłać elektronicznie z dowolnego miasta w Polsce."
  },
  {
    question: "Który numer telefonu wybrać?",
    answer:
      "Wszystkie sprawy można zgłaszać na oba numery. Numer 883 040 483 służy do bezpośredniego kontaktu z tłumaczem / biegłym, a numer 735 753 383 do kontaktu z kancelarią."
  }
];

function SectionHeading({
  label,
  title,
  text
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="section-label">{label}</p>
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default function CourtTranslationsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tłumaczenia sądowe języka ukraińskiego",
    provider: {
      "@type": "ProfessionalService",
      name: "Kancelaria Vadym Rekel - tłumacz przysięgły języka ukraińskiego",
      telephone: expertPhoneHref,
      email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "ul. Kielecka 2/53",
        addressLocality: "Kraków",
        postalCode: "31-526",
        addressCountry: "PL"
      }
    },
    areaServed: {
      "@type": "Country",
      name: "Polska"
    },
    serviceType:
      "Tłumaczenia poświadczone i ustne języka ukraińskiego dla sądów"
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <style>{`
        :root {
          --bg: #f5f0e6;
          --paper: #fffaf2;
          --paper-soft: #f8f1e6;
          --ink: #13100c;
          --muted: #6e6256;
          --line: rgba(19, 16, 12, 0.14);
          --green: #123c31;
          --green-dark: #0d2923;
          --green-soft: #e7eee8;
          --gold: #b68a3a;
          --gold-dark: #7c5a1d;
          --petrol: #244c5a;
          --shadow: 0 18px 48px rgba(25, 22, 18, 0.10);
          --radius: 28px;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background:
            radial-gradient(circle at 8% 0%, rgba(182, 138, 58, 0.12), transparent 30%),
            linear-gradient(180deg, #f8f3ea 0%, var(--bg) 52%, #f1ebdf 100%);
          color: var(--ink);
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid var(--line);
          background: rgba(245, 240, 230, 0.94);
          backdrop-filter: blur(18px);
        }

        .nav {
          max-width: 1160px;
          margin: 0 auto;
          padding: 14px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-mark {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--green);
          color: #fff;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-weight: 950;
          letter-spacing: -0.04em;
        }

        .brand-title {
          display: block;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          font-weight: 900;
          line-height: 1.05;
        }

        .brand-subtitle {
          display: block;
          margin-top: 3px;
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 700;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 15px;
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 850;
        }

        .nav-links a:hover {
          color: var(--ink);
        }

        .nav-phone {
          padding: 11px 16px;
          border-radius: 999px;
          background: var(--green);
          color: #fff;
        }

        .hero {
          max-width: 1160px;
          margin: 0 auto;
          padding: 52px 22px 28px;
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 22px;
          align-items: stretch;
        }

        .hero-main {
          border: 1px solid var(--line);
          border-radius: var(--radius);
          background: rgba(255, 250, 242, 0.88);
          box-shadow: var(--shadow);
          padding: 52px;
        }

        .eyebrow {
          display: inline-flex;
          width: fit-content;
          margin-bottom: 22px;
          padding: 9px 13px;
          border-radius: 999px;
          background: var(--green-soft);
          color: var(--green);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        h1 {
          margin: 0;
          max-width: 820px;
          font-size: clamp(42px, 5.4vw, 72px);
          line-height: 0.94;
          letter-spacing: -0.07em;
        }

        .lead {
          margin: 24px 0 0;
          max-width: 760px;
          color: var(--muted);
          font-size: 20px;
          line-height: 1.55;
        }

        .hero-actions {
          margin-top: 30px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .button {
          min-height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 0 22px;
          border: 1px solid transparent;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          font-weight: 900;
          transition: transform 160ms ease, box-shadow 160ms ease;
        }

        .button:hover {
          transform: translateY(-2px);
        }

        .button-primary {
          background: var(--green);
          color: #fff;
          box-shadow: 0 14px 30px rgba(18, 60, 49, 0.18);
        }

        .button-secondary {
          background: rgba(255,255,255,0.70);
          border-color: var(--line);
          color: var(--ink);
        }

        .hero-note {
          margin-top: 22px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.55;
        }

        .hero-side {
          border-radius: var(--radius);
          background:
            linear-gradient(150deg, rgba(29, 62, 74, 0.96), rgba(16, 41, 50, 0.98)),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.035) 0 1px, transparent 1px 22px);
          color: #fff;
          box-shadow: var(--shadow);
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hero-side h2 {
          margin: 0;
          color: #fff;
          font-size: 38px;
          line-height: 0.98;
          letter-spacing: -0.045em;
        }

        .hero-side p {
          margin: 16px 0 0;
          color: rgba(255,255,255,0.76);
          font-size: 17px;
          line-height: 1.55;
        }

        .phone-large {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 68px;
          margin-top: 28px;
          border-radius: 18px;
          background: #fffaf2;
          color: var(--green);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 27px;
          font-weight: 950;
        }

        .notice {
          margin-top: 18px;
          border-radius: 20px;
          background: rgba(255,255,255,0.09);
          border: 1px solid rgba(255,255,255,0.14);
          padding: 18px;
          color: rgba(255,255,255,0.82);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          font-weight: 800;
          line-height: 1.55;
        }

        .section {
          max-width: 1160px;
          margin: 0 auto;
          padding: 52px 22px;
        }

        .section-heading {
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          gap: 28px;
          align-items: end;
          margin-bottom: 26px;
        }

        .section-label {
          margin: 0 0 10px;
          color: var(--gold-dark);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .section-heading h2 {
          margin: 0;
          font-size: clamp(32px, 4vw, 54px);
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .section-heading > p {
          margin: 0;
          color: var(--muted);
          font-size: 18px;
          line-height: 1.55;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .card {
          border-radius: 24px;
          border: 1px solid var(--line);
          background: rgba(255,250,242,0.82);
          box-shadow: 0 14px 34px rgba(25, 22, 18, 0.055);
          padding: 26px;
          transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
        }

        .card:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 44px rgba(25, 22, 18, 0.09);
          border-color: rgba(182, 138, 58, 0.30);
        }

        .card-dark {
          background: linear-gradient(150deg, var(--green), var(--green-dark));
          color: #fff;
          border-color: rgba(255,255,255,0.12);
        }

        .card-petrol {
          background:
            linear-gradient(150deg, rgba(29, 62, 74, 0.96), rgba(16, 41, 50, 0.98)),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.035) 0 1px, transparent 1px 22px);
          color: #fff;
          border-color: rgba(255,255,255,0.12);
        }

        .tag {
          display: inline-flex;
          margin-bottom: 14px;
          padding: 8px 11px;
          border-radius: 999px;
          background: var(--green-soft);
          color: var(--green);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .card-dark .tag,
        .card-petrol .tag {
          background: rgba(255,255,255,0.10);
          color: rgba(255,255,255,0.84);
          border: 1px solid rgba(255,255,255,0.12);
        }

        .card h3 {
          margin: 0 0 12px;
          font-size: 28px;
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .card p {
          margin: 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.55;
        }

        .card-dark p,
        .card-petrol p {
          color: rgba(255,255,255,0.76);
        }

        .card-link {
          display: inline-flex;
          margin-top: 20px;
          color: var(--green);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 900;
        }

        .card-dark .card-link,
        .card-petrol .card-link {
          color: #fff;
        }

        .feature {
          border-radius: var(--radius);
          background: var(--ink);
          color: #fff;
          padding: 44px;
          box-shadow: var(--shadow);
          display: grid;
          grid-template-columns: 0.94fr 1.06fr;
          gap: 34px;
          align-items: center;
        }

        .feature h2 {
          margin: 0;
          color: #fff;
          font-size: clamp(34px, 4vw, 56px);
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .feature p {
          margin: 0;
          color: rgba(255,255,255,0.76);
          font-size: 18px;
          line-height: 1.6;
        }

        .faq-list {
          display: grid;
          gap: 10px;
        }

        .faq-item {
          border-radius: 18px;
          border: 1px solid var(--line);
          background: rgba(255,250,242,0.78);
          overflow: hidden;
        }

        .faq-item summary {
          cursor: pointer;
          padding: 18px;
          color: var(--ink);
          font-size: 19px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .faq-item p {
          margin: 0;
          padding: 0 18px 18px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.55;
        }

        .footer {
          border-top: 1px solid var(--line);
          padding: 34px 22px 54px;
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
        }

        .footer-inner {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 1fr 0.8fr;
          gap: 22px;
          align-items: start;
        }

        .footer-title {
          display: block;
          color: var(--ink);
          font-weight: 900;
          margin-bottom: 8px;
        }

        .footer-line {
          display: block;
          margin-top: 6px;
        }

        .footer-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          color: var(--green);
          font-weight: 900;
        }

        .linkedin-icon {
          width: 20px;
          height: 20px;
          border-radius: 5px;
          display: inline-grid;
          place-items: center;
          background: #0077b5;
          color: #fff;
          flex: 0 0 auto;
        }

        @media (max-width: 980px) {
          .hero,
          .section-heading,
          .feature,
          .footer-inner {
            grid-template-columns: 1fr;
          }

          .grid-2,
          .grid-3,
          .grid-4 {
            grid-template-columns: 1fr;
          }

          .nav-links {
            display: none;
          }
        }

        @media (max-width: 620px) {
          .hero,
          .section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .hero {
            padding-top: 34px;
          }

          .hero-main,
          .hero-side,
          .feature {
            padding: 28px;
          }

          h1 {
            font-size: 40px;
          }

          .button,
          .phone-large {
            width: 100%;
          }
        }
      `}</style>

      <div className="topbar">
        <nav className="nav">
          <a className="brand" href="/" aria-label="Strona główna">
            <span className="brand-mark">VR</span>
            <span>
              <span className="brand-title">Kancelaria Vadym Rekel</span>
              <span className="brand-subtitle">
                Tłumacz przysięgły języka ukraińskiego
              </span>
            </span>
          </a>

          <div className="nav-links">
            <a href="/">Strona główna</a>
            <a href="/tlumaczenia-sprawy-karne-ukrainski">Sprawy karne</a>
            <a href="/tlumaczenia-sadowe-ukrainski">Sądy</a>
            <a href="/tlumaczenia-dla-policji">Policja</a>
            <a href="/tlumaczenia-dla-prokuratury">Prokuratura</a>
            <a href="/kontakt">Kontakt</a>
            <a className="nav-phone" href={`tel:${expertPhoneHref}`}>
              {expertPhoneDisplay}
            </a>
          </div>
        </nav>
      </div>

      <section className="hero">
        <div className="hero-main">
          <span className="eyebrow">
            Tłumaczenia sądowe · język ukraiński · TP/27/17
          </span>

          <h1>Tłumaczenia sądowe języka ukraińskiego.</h1>

          <p className="lead">
            Tłumacz przysięgły języka ukraińskiego w Krakowie. Tłumaczenia akt
            spraw, protokołów, wyroków, postanowień, pism procesowych,
            dokumentów z Ukrainy oraz materiału cyfrowego przekazywanego do
            postępowań sądowych.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={`tel:${expertPhoneHref}`}>
              Tłumacz / biegły: {expertPhoneDisplay}
            </a>
            <a className="button button-secondary" href={`tel:${officePhoneHref}`}>
              Kancelaria: {officePhoneDisplay}
            </a>
            <a className="button button-secondary" href="/kontakt">
              Wyślij dokument do wyceny
            </a>
          </div>

          <p className="hero-note">
            Wszystkie sprawy można zgłaszać na oba numery telefonu. Numer{" "}
            {expertPhoneDisplay} służy do bezpośredniego kontaktu z tłumaczem /
            biegłym, a numer {officePhoneDisplay} do kontaktu z kancelarią.
          </p>
        </div>

        <aside className="hero-side">
          <div>
            <h2>Dokument sądowy wymaga precyzyjnego kontekstu.</h2>
            <p>
              Przy tłumaczeniu materiałów sądowych znaczenie ma nie tylko treść,
              ale również funkcja dokumentu w aktach, etap postępowania, dane
              stron, terminy, oznaczenia załączników i zgodność terminologiczna.
            </p>

            <div className="notice">
              Kancelaria ma siedzibę w Krakowie. Dokumenty do wstępnej wyceny
              można przesłać elektronicznie z dowolnego miasta w Polsce.
            </div>
          </div>

          <a className="phone-large" href={`tel:${expertPhoneHref}`}>
            {expertPhoneDisplay}
          </a>
        </aside>
      </section>

      <section className="section">
        <SectionHeading
          label="Zakres"
          title="Jakie materiały sądowe można przekazać do tłumaczenia?"
          text="Zakres zależy od rodzaju sprawy, celu wykorzystania dokumentów i tego, czy tłumaczenie ma być poświadczone."
        />

        <div className="grid-3">
          {courtMaterials.map((item) => (
            <article className="card" key={item.title}>
              <span className="tag">Sąd</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="feature">
          <div>
            <p className="section-label">Sprawy karne</p>
            <h2>Sądowe tłumaczenia w sprawach karnych.</h2>
          </div>

          <div>
            <p>
              W sprawach karnych materiały sądowe często łączą akta, protokoły,
              postanowienia, dokumenty z Ukrainy, komunikatory, korespondencję
              osadzonych, raporty PDF i dane cyfrowe.
            </p>

            <div className="hero-actions">
              <a
                className="button button-secondary"
                href="/tlumaczenia-sprawy-karne-ukrainski"
              >
                Zobacz stronę: sprawy karne
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Powiązane obszary"
          title="Sąd, Policja i prokuratura często korzystają z tych samych materiałów."
          text="Zakres sądowy obejmuje również sprawy karne, materiały przekazywane przez Policję i prokuraturę oraz materiał cyfrowy."
        />

        <div className="grid-4">
          {relatedPages.map((item) => (
            <article className="card card-petrol" key={item.title}>
              <span className="tag">Powiązana usługa</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a className="card-link" href={item.href}>
                Czytaj więcej →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Organizacja"
          title="Jak przekazać dokumenty sądowe do wyceny?"
          text="Najprościej przesłać dokumenty elektronicznie. Przy większych aktach warto określić zakres, liczbę stron i oczekiwany termin."
        />

        <div className="grid-4">
          {processSteps.map((item) => (
            <article className="card" key={item.title}>
              <span className="tag">Etap</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Kontakt"
          title="Przekaż dokument albo ustal zakres telefonicznie."
          text="Dokumenty, skany, zdjęcia i pliki PDF można przesłać do wstępnej wyceny na e-mail kancelarii."
        />

        <div className="grid-3">
          <article className="card card-dark">
            <span className="tag">Kontakt bezpośredni</span>
            <h3>{expertPhoneDisplay}</h3>
            <p>
              Kontakt z tłumaczem / biegłym w sprawach sądowych, akt,
              czynności, materiału cyfrowego i pilnych ustaleń.
            </p>
            <a className="card-link" href={`tel:${expertPhoneHref}`}>
              Zadzwoń →
            </a>
          </article>

          <article className="card">
            <span className="tag">Kancelaria</span>
            <h3>{officePhoneDisplay}</h3>
            <p>
              Obsługa kancelaryjna, terminy, przekazanie dokumentów, odbiór
              tłumaczenia i sprawy organizacyjne.
            </p>
            <a className="card-link" href={`tel:${officePhoneHref}`}>
              Zadzwoń →
            </a>
          </article>

          <article className="card">
            <span className="tag">E-mail</span>
            <h3>{email}</h3>
            <p>
              Prześlij skan, zdjęcie, PDF, raport, zrzuty ekranu albo opis
              materiału sądowego.
            </p>
            <a className="card-link" href={`mailto:${email}`}>
              Wyślij dokument →
            </a>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="FAQ"
          title="Najczęstsze pytania o tłumaczenia sądowe."
          text="Krótko o tłumaczeniach poświadczonych, aktach, przesłaniu dokumentów i kontakcie."
        />

        <div className="faq-list">
          {faqItems.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <span className="footer-title">Kancelaria Vadym Rekel</span>
            <span className="footer-line">
              Tłumacz przysięgły języka ukraińskiego
            </span>
            <span className="footer-line">TP/27/17</span>
            <span className="footer-line">
              Kraków · dokumenty z całej Polski zdalnie
            </span>
          </div>

          <div>
            <span className="footer-title">Kontakt</span>
            <span className="footer-line">
              Tłumacz / biegły:{" "}
              <a href={`tel:${expertPhoneHref}`}>{expertPhoneDisplay}</a>
            </span>
            <span className="footer-line">
              Kancelaria:{" "}
              <a href={`tel:${officePhoneHref}`}>{officePhoneDisplay}</a>
            </span>
            <span className="footer-line">
              <a href={`mailto:${email}`}>{email}</a>
            </span>
            <span className="footer-line">ul. Kielecka 2/53, 31-526 Kraków</span>
          </div>

          <div>
            <span className="footer-title">Profil zawodowy</span>
            <a
              className="footer-link"
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="linkedin-icon" aria-hidden="true">
                in
              </span>
              LinkedIn — Vadym Rekel
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}