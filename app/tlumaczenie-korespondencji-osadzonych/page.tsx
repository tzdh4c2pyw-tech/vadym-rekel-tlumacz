import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Tłumaczenie korespondencji osadzonych ukraiński | Pisma odręczne i listy",
  description:
    "Tłumacz przysięgły języka ukraińskiego TP/27/17. Tłumaczenie korespondencji osadzonych, listów, skarg, próśb, oświadczeń, wyjaśnień i pism odręcznych do sądu, prokuratury i organów. Kancelaria w Krakowie, dokumenty z całej Polski zdalnie.",
  keywords: [
    "tłumaczenie korespondencji osadzonych ukraiński",
    "tłumaczenie listów z więzienia ukraiński",
    "tłumaczenie pism odręcznych ukraiński",
    "tłumacz przysięgły ukraiński korespondencja osadzonych",
    "tłumaczenie skarg osadzonych ukraiński",
    "tłumaczenie wyjaśnień ukraiński",
    "tłumaczenie pism do sądu ukraiński",
    "tłumaczenie pism do prokuratury ukraiński",
    "tłumacz przysięgły języka ukraińskiego Kraków"
  ]
};

const email = "biegly@vadymrekel.pl";

const institutionPhoneDisplay = "883 040 483";
const institutionPhoneHref = "+48883040483";

const individualPhoneDisplay = "735 753 383";
const individualPhoneHref = "+48735753383";

const linkedInUrl = "https://www.linkedin.com/in/vadym-rekel/";

const correspondenceTypes = [
  "listy prywatne",
  "skargi",
  "prośby",
  "oświadczenia",
  "wyjaśnienia",
  "pisma do sądu",
  "pisma do prokuratury",
  "pisma do Policji",
  "korespondencja procesowa",
  "pisma urzędowe",
  "notatki odręczne",
  "załączniki do akt"
];

const challenges = [
  {
    title: "Pismo odręczne",
    text: "Korespondencja osadzonych często jest sporządzona odręcznie, nierówno, skrótowo albo w warunkach utrudniających czytelność."
  },
  {
    title: "Język potoczny i emocjonalny",
    text: "W listach, skargach i wyjaśnieniach pojawia się język potoczny, emocjonalny, skróty myślowe, błędy i konstrukcje odbiegające od stylu urzędowego."
  },
  {
    title: "Znaczenie procesowe",
    text: "Pismo może być załącznikiem do akt, skargą, wnioskiem, wyjaśnieniem albo korespondencją istotną dla sądu, prokuratury lub obrońcy."
  },
  {
    title: "Zachowanie sensu",
    text: "W tego typu materiałach znaczenie ma nie tylko treść dosłowna, ale także ton, kolejność wypowiedzi, intencja i struktura pisma."
  }
];

const recipientGroups = [
  {
    title: "Sąd",
    text: "Pisma procesowe, skargi, prośby, wyjaśnienia, załączniki do akt i korespondencja kierowana do sądu."
  },
  {
    title: "Prokuratura",
    text: "Wyjaśnienia, oświadczenia, skargi, korespondencja dotycząca postępowania i dokumenty przekazywane do akt."
  },
  {
    title: "Policja",
    text: "Pisma, wyjaśnienia, oświadczenia, korespondencja i dokumenty dotyczące czynności albo materiałów w sprawie."
  },
  {
    title: "Klienci indywidualni",
    text: "Listy, prywatna korespondencja, dokumenty rodzinne, wyjaśnienia i materiały kierowane do pełnomocnika albo instytucji."
  }
];

const deliveryMethods = [
  {
    title: "E-mail",
    text: "Prześlij skan, zdjęcie albo plik PDF na adres:",
    value: email,
    href: `mailto:${email}`
  },
  {
    title: "Adres kancelarii",
    text: "Dokument można przekazać do kancelarii:",
    value: "ul. Kielecka 2/53, 31-526 Kraków",
    href: "#kontakt"
  },
  {
    title: "Odbiór osobisty",
    text: "Odbiór tłumaczenia w kancelarii jest możliwy po wcześniejszym uzgodnieniu terminu.",
    value: "po uzgodnieniu",
    href: `tel:${individualPhoneHref}`
  }
];

const faqItems = [
  {
    question: "Czy można przetłumaczyć pismo odręczne osadzonego?",
    answer:
      "Tak. Jeżeli pismo jest czytelne w całości lub w części, można przygotować tłumaczenie. Przy trudnym piśmie odręcznym warto przesłać możliwie wyraźny skan albo zdjęcie."
  },
  {
    question: "Czy tłumaczenie może zachować emocjonalny styl listu?",
    answer:
      "Tak. W korespondencji osadzonych istotne jest zachowanie sensu, tonu, struktury wypowiedzi i charakteru tekstu, bez sztucznego urzędowego wygładzania."
  },
  {
    question: "Czy można tłumaczyć tylko wybrane fragmenty korespondencji?",
    answer:
      "Tak. Przy większym materiale można wskazać konkretne strony, fragmenty albo pisma, które mają zostać przetłumaczone."
  },
  {
    question: "Czy dokument można przesłać e-mailem?",
    answer:
      "Tak. Do wstępnej wyceny można przesłać skan, zdjęcie albo plik PDF na adres biegly@vadymrekel.pl."
  },
  {
    question: "Czy kancelaria obsługuje dokumenty z całej Polski?",
    answer:
      "Tak. Kancelaria ma siedzibę w Krakowie, ale dokumenty do wstępnej wyceny można przesłać elektronicznie z dowolnego miasta w Polsce."
  },
  {
    question: "Czy rosyjski i angielski są tłumaczeniami przysięgłymi?",
    answer:
      "Nie. Uprawnienia tłumacza przysięgłego dotyczą języka ukraińskiego. Język rosyjski i angielski są oferowane jako tłumaczenia specjalistyczne."
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

export default function InmateCorrespondencePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tłumaczenie korespondencji osadzonych z języka ukraińskiego",
    provider: {
      "@type": "ProfessionalService",
      name: "Kancelaria Vadym Rekel - tłumacz przysięgły języka ukraińskiego",
      telephone: institutionPhoneHref,
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
      "Tłumaczenie korespondencji osadzonych, pism odręcznych, listów, skarg i wyjaśnień z języka ukraińskiego"
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
          --radius: 24px;
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
            linear-gradient(180deg, #f8f3ea 0%, var(--bg) 50%, #f1ebdf 100%);
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
          max-width: 1120px;
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
          max-width: 1120px;
          margin: 0 auto;
          padding: 48px 22px 20px;
          display: grid;
          grid-template-columns: 1.14fr 0.86fr;
          gap: 22px;
          align-items: stretch;
        }

        .hero-main {
          border: 1px solid var(--line);
          border-radius: var(--radius);
          background: rgba(255, 250, 242, 0.86);
          box-shadow: var(--shadow);
          padding: 44px;
        }

        .eyebrow {
          display: inline-flex;
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
          font-size: clamp(40px, 5.1vw, 66px);
          line-height: 0.95;
          letter-spacing: -0.065em;
        }

        .lead {
          margin: 22px 0 0;
          max-width: 760px;
          color: var(--muted);
          font-size: 20px;
          line-height: 1.55;
        }

        .hero-actions {
          margin-top: 28px;
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

        .hero-side {
          border-radius: var(--radius);
          background: linear-gradient(155deg, var(--green), var(--green-dark));
          color: #fff;
          box-shadow: var(--shadow);
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 410px;
        }

        .hero-side h2 {
          margin: 0;
          color: #fff;
          font-size: 35px;
          line-height: 1;
          letter-spacing: -0.045em;
        }

        .hero-side p {
          margin: 16px 0 0;
          color: rgba(255,255,255,0.76);
          font-size: 16px;
          line-height: 1.55;
        }

        .phone-main {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 64px;
          margin-top: 22px;
          border-radius: 18px;
          background: #fffaf2;
          color: var(--green);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 25px;
          font-weight: 950;
        }

        .trust {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 22px 28px;
        }

        .trust-inner {
          border-radius: 18px;
          border: 1px solid var(--line);
          background: rgba(255,250,242,0.78);
          padding: 14px 18px;
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 850;
          line-height: 1.5;
          text-align: center;
        }

        .section {
          max-width: 1120px;
          margin: 0 auto;
          padding: 50px 22px;
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

        .card-dark .tag {
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

        .card-dark p {
          color: rgba(255,255,255,0.76);
        }

        .list {
          margin: 18px 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 9px;
        }

        .list li {
          display: flex;
          gap: 9px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.42;
        }

        .card-dark .list li {
          color: rgba(255,255,255,0.78);
        }

        .list li::before {
          content: "—";
          color: var(--gold);
        }

        .card-link {
          display: inline-flex;
          margin-top: 20px;
          color: var(--green);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 900;
        }

        .feature {
          border-radius: var(--radius);
          background: var(--ink);
          color: #fff;
          padding: 40px;
          box-shadow: var(--shadow);
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          gap: 30px;
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

        .labels {
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .label {
          border-radius: 999px;
          padding: 9px 12px;
          border: 1px solid rgba(255,255,255,0.14);
          color: rgba(255,255,255,0.78);
          background: rgba(255,255,255,0.08);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .note {
          margin-top: 18px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.55;
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
          max-width: 1120px;
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
          .grid-3 {
            grid-template-columns: 1fr;
          }

          .nav-links {
            display: none;
          }
        }

        @media (max-width: 620px) {
          .hero,
          .section,
          .trust {
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
            font-size: 38px;
          }

          .button,
          .phone-main {
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
            <a href="/tlumaczenia-sadowe-ukrainski">Sądy</a>
            <a href="/tlumaczenia-dla-policji">Policja</a>
            <a href="/tlumaczenia-dla-prokuratury">Prokuratura</a>
            <a href="/dokumenty-z-ukrainy">Dokumenty z Ukrainy</a>
            <a className="nav-phone" href={`tel:${institutionPhoneHref}`}>
              {institutionPhoneDisplay}
            </a>
          </div>
        </nav>
      </div>

      <section className="hero">
        <div className="hero-main">
          <span className="eyebrow">
            Korespondencja osadzonych · pisma odręczne · język ukraiński
          </span>

          <h1>Tłumaczenie korespondencji osadzonych z języka ukraińskiego.</h1>

          <p className="lead">
            Tłumaczenie listów, skarg, próśb, oświadczeń, wyjaśnień i pism
            odręcznych kierowanych do sądu, prokuratury, Policji, obrońcy albo
            instytucji. Zachowanie sensu, tonu i struktury wypowiedzi.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={`tel:${institutionPhoneHref}`}>
              Sąd · Policja · Prokuratura: {institutionPhoneDisplay}
            </a>
            <a className="button button-secondary" href={`mailto:${email}`}>
              Wyślij dokument do wyceny
            </a>
          </div>
        </div>

        <aside className="hero-side">
          <div>
            <h2>Vadym Rekel</h2>
            <p>
              Tłumacz przysięgły języka ukraińskiego. Numer wpisu: TP/27/17.
              Kancelaria w Krakowie. Korespondencję można przesłać do wstępnej
              wyceny elektronicznie z całej Polski.
            </p>
          </div>

          <a className="phone-main" href={`tel:${institutionPhoneHref}`}>
            {institutionPhoneDisplay}
          </a>
        </aside>
      </section>

      <section className="trust">
        <div className="trust-inner">
          TP/27/17 · tłumaczenie korespondencji osadzonych · pisma odręczne ·
          kancelaria w Krakowie · dokumenty z całej Polski zdalnie
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Zakres"
          title="Listy, skargi, prośby, wyjaśnienia i pisma do organów."
          text="Korespondencja osadzonych może mieć charakter prywatny, procesowy, urzędowy albo dowodowy. Przy wycenie warto wskazać, gdzie dokument będzie składany."
        />

        <div className="grid-3">
          <article className="card">
            <span className="tag">Korespondencja</span>
            <h3>Listy, skargi i prośby.</h3>
            <ul className="list">
              {correspondenceTypes.slice(0, 6).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <span className="tag">Pisma do organów</span>
            <h3>Sąd, prokuratura i Policja.</h3>
            <ul className="list">
              {correspondenceTypes.slice(6).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card card-dark">
            <span className="tag">Kontakt</span>
            <h3>Pismo do sprawy albo akt.</h3>
            <p>
              W sprawach kierowanych przez organy właściwy kontakt to numer dla
              sądów, Policji i prokuratury.
            </p>
            <a className="phone-main" href={`tel:${institutionPhoneHref}`}>
              {institutionPhoneDisplay}
            </a>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="feature">
          <div>
            <p className="section-label">Pismo odręczne</p>
            <h2>W korespondencji osadzonych znaczenie ma nie tylko dosłowna treść.</h2>
          </div>

          <div>
            <p>
              W listach, skargach i wyjaśnieniach istotne są sens wypowiedzi,
              kolejność zdań, ton, emocje, skróty, język potoczny oraz sposób
              formułowania myśli. Tłumaczenie powinno oddawać treść bez
              sztucznego zmieniania charakteru pisma.
            </p>

            <div className="labels">
              {[
                "pismo odręczne",
                "list",
                "skarga",
                "prośba",
                "wyjaśnienia",
                "sąd",
                "prokuratura"
              ].map((item) => (
                <span className="label" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Trudności tekstu"
          title="Pisma odręczne, język potoczny, skróty i emocjonalny styl."
          text="Takie materiały często wymagają uważnego odczytania, zachowania sensu wypowiedzi i rozpoznania kontekstu sprawy."
        />

        <div className="grid-2">
          {challenges.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Dla kogo"
          title="Korespondencja dla sądu, prokuratury, Policji i klientów indywidualnych."
          text="Ten sam list albo pismo może być wykorzystywane w różnym celu: jako załącznik, skarga, wyjaśnienie, informacja dla obrońcy albo dokument do akt."
        />

        <div className="grid-2">
          {recipientGroups.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Przekazanie dokumentu"
          title="Jak przekazać korespondencję do wyceny lub tłumaczenia?"
          text="Dokument można przesłać e-mailem, przekazać do kancelarii albo odebrać osobiście po wcześniejszym ustaleniu terminu."
        />

        <div className="grid-3">
          {deliveryMethods.map((item) => (
            <article className="card" key={item.title}>
              <span className="tag">{item.title}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a className="card-link" href={item.href}>
                {item.value}
              </a>
            </article>
          ))}
        </div>

        <p className="note">
          Przy pismach odręcznych warto przesłać możliwie wyraźny skan albo
          zdjęcie. Jeżeli dokument ma wiele stron, można wskazać fragmenty
          najważniejsze dla sprawy.
        </p>
      </section>

      <section className="section">
        <SectionHeading
          label="FAQ"
          title="Najczęstsze pytania dotyczące korespondencji osadzonych."
          text="Krótko o pismach odręcznych, stylu listu, przesyłaniu dokumentów i zakresie języków."
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

      <footer className="footer" id="kontakt">
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
              Sąd · Policja · Prokuratura:{" "}
              <a href={`tel:${institutionPhoneHref}`}>
                {institutionPhoneDisplay}
              </a>
            </span>
            <span className="footer-line">
              Klienci indywidualni:{" "}
              <a href={`tel:${individualPhoneHref}`}>{individualPhoneDisplay}</a>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.795-1.75-1.732s.784-1.732 1.75-1.732 1.75.795 1.75 1.732-.784 1.732-1.75 1.732zm13.5 11.268h-3v-5.604c0-1.337-.025-3.061-1.865-3.061-1.867 0-2.154 1.459-2.154 2.968v5.697h-3v-10h2.882v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.04 0 3.6 2.003 3.6 4.609v5.587z" />
                </svg>
              </span>
              LinkedIn — Vadym Rekel
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}