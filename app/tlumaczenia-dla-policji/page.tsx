import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Tłumacz przysięgły ukraiński dla Policji | Czynności, protokoły, pouczenia",
  description:
    "Tłumacz przysięgły języka ukraińskiego dla Policji. Tłumaczenia przy czynnościach, protokołów, pouczeń, notatek urzędowych, komunikatorów, zrzutów ekranu, dokumentów z Ukrainy i materiału cyfrowego. Kancelaria w Krakowie, dokumenty z całej Polski zdalnie.",
  keywords: [
    "tłumacz przysięgły ukraiński dla Policji",
    "tłumacz ukraiński Policja",
    "tłumaczenia dla Policji ukraiński",
    "tłumaczenie protokołu Policji ukraiński",
    "tłumaczenie pouczeń ukraiński",
    "tłumaczenie notatki urzędowej ukraiński",
    "tłumaczenie komunikatorów ukraiński",
    "tłumaczenie zrzutów ekranu ukraiński",
    "tłumacz przysięgły języka ukraińskiego czynności policyjne"
  ]
};

const email = "biegly@vadymrekel.pl";

const institutionPhoneDisplay = "883 040 483";
const institutionPhoneHref = "+48883040483";

const linkedInUrl = "https://www.linkedin.com/in/vadym-rekel/";

const policeMaterials = [
  "protokoły przesłuchań",
  "pouczenia",
  "notatki urzędowe",
  "zawiadomienia",
  "oświadczenia",
  "wezwania",
  "materiał dowodowy",
  "komunikatory",
  "zrzuty ekranu",
  "dane z telefonu",
  "raporty PDF",
  "dokumenty z Ukrainy"
];

const policeCases = [
  {
    title: "Czynności z udziałem osoby ukraińskojęzycznej",
    text: "Tłumaczenia ustne przy czynnościach, przesłuchaniach, pouczeniach, składaniu wyjaśnień i odbieraniu oświadczeń."
  },
  {
    title: "Sprawy karne i wykroczeniowe",
    text: "Protokoły, notatki, zawiadomienia, pouczenia, dokumenty procesowe oraz materiały przekazywane dalej do prokuratury lub sądu."
  },
  {
    title: "Oszustwa internetowe",
    text: "Komunikatory, SMS, e-mail, zrzuty ekranu, panele transakcyjne, raporty PDF, kryptowaluty i korespondencja elektroniczna."
  },
  {
    title: "Dokumenty z Ukrainy",
    text: "Dokumenty urzędowe, procesowe i korespondencja pochodząca z Ukrainy albo kierowana do organów ukraińskich."
  }
];

const digitalItems = [
  {
    title: "Komunikatory",
    text: "Telegram, WhatsApp, Signal, Messenger, Viber, SMS, MMS, e-mail i eksporty rozmów."
  },
  {
    title: "Zrzuty ekranu",
    text: "Zrzuty z telefonu, aplikacji, paneli użytkownika, stron internetowych i systemów transakcyjnych."
  },
  {
    title: "Raporty PDF",
    text: "Raporty z telefonu, eksporty danych, tabele, zestawienia i większe pliki przekazywane jako załączniki."
  },
  {
    title: "Dane z telefonu",
    text: "Praca z materiałem cyfrowym, w tym danymi z telefonu, a następnie tłumaczenie treści istotnych dla sprawy."
  }
];

const oralItems = [
  "przesłuchania",
  "czynności w jednostce Policji",
  "pouczenia",
  "odbieranie oświadczeń",
  "czynności z osobą zatrzymaną",
  "czynności z pokrzywdzonym",
  "czynności z podejrzanym",
  "czynności zdalne, jeżeli forma czynności na to pozwala"
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
    href: `tel:${institutionPhoneHref}`
  }
];

const faqItems = [
  {
    question: "Czy możliwe jest tłumaczenie ustne przy czynności policyjnej?",
    answer:
      "Tak. Zakres obejmuje tłumaczenia ustne przy przesłuchaniach, pouczeniach, czynnościach z osobą zatrzymaną, pokrzywdzonym, świadkiem albo podejrzanym."
  },
  {
    question: "Czy można przesłać protokół lub notatkę do wyceny e-mailem?",
    answer:
      "Tak. Do wstępnej wyceny można przesłać skan, zdjęcie albo plik PDF na adres biegly@vadymrekel.pl."
  },
  {
    question: "Czy tłumaczone są komunikatory i zrzuty ekranu?",
    answer:
      "Tak. Kancelaria pracuje z komunikatorami, zrzutami ekranu, raportami PDF, korespondencją elektroniczną i innym materiałem cyfrowym."
  },
  {
    question: "Czy kancelaria obsługuje jednostki Policji spoza Krakowa?",
    answer:
      "Tak. Kancelaria ma siedzibę w Krakowie, ale dokumenty do wstępnej wyceny można przesłać elektronicznie z całej Polski."
  },
  {
    question: "Czy język rosyjski i angielski są tłumaczeniami przysięgłymi?",
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

export default function PoliceTranslationsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tłumaczenia języka ukraińskiego dla Policji",
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
      "Tłumaczenia poświadczone i ustne języka ukraińskiego dla Policji"
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

        .card-dark .list li,
        .card-petrol .list li {
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

        .card-dark .card-link,
        .card-petrol .card-link {
          color: #fff;
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
            <a href="/tlumaczenia-dla-prokuratury">Prokuratura</a>
            <a href="/tlumaczenia-it-krypto">Materiał cyfrowy</a>
            <a href="/kwalifikacje">Kwalifikacje</a>
            <a className="nav-phone" href={`tel:${institutionPhoneHref}`}>
              {institutionPhoneDisplay}
            </a>
          </div>
        </nav>
      </div>

      <section className="hero">
        <div className="hero-main">
          <span className="eyebrow">
            Tłumacz przysięgły ukraiński · Policja · Kraków · cała Polska
          </span>

          <h1>Tłumacz przysięgły języka ukraińskiego dla Policji.</h1>

          <p className="lead">
            Tłumaczenia przy czynnościach policyjnych oraz tłumaczenia
            protokołów, pouczeń, notatek urzędowych, komunikatorów, zrzutów
            ekranu, danych z telefonu, raportów PDF i dokumentów z Ukrainy.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={`tel:${institutionPhoneHref}`}>
              Policja: {institutionPhoneDisplay}
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
              Kancelaria w Krakowie. Dokumenty można przesłać do wstępnej
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
          TP/27/17 · tłumaczenia języka ukraińskiego dla Policji · kancelaria w
          Krakowie · dokumenty z całej Polski zdalnie
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Zakres dla Policji"
          title="Czynności, protokoły, pouczenia i materiał do sprawy."
          text="Zakres obejmuje tłumaczenia ustne przy czynnościach oraz tłumaczenia pisemne dokumentów i materiałów przekazywanych jako dowody albo załączniki."
        />

        <div className="grid-3">
          <article className="card">
            <span className="tag">Dokumenty</span>
            <h3>Protokoły, pouczenia i notatki.</h3>
            <ul className="list">
              {policeMaterials.slice(0, 6).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <span className="tag">Materiał dowodowy</span>
            <h3>Komunikatory i załączniki.</h3>
            <ul className="list">
              {policeMaterials.slice(6).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card card-dark">
            <span className="tag">Kontakt dla Policji</span>
            <h3>Czynność, protokół albo materiał cyfrowy.</h3>
            <p>
              W sprawach policyjnych właściwy kontakt to numer dla organów.
            </p>
            <a className="phone-main" href={`tel:${institutionPhoneHref}`}>
              {institutionPhoneDisplay}
            </a>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Czynności"
          title="Tłumaczenia ustne przy czynnościach policyjnych."
          text="Tłumaczenie może dotyczyć czynności z udziałem świadka, pokrzywdzonego, osoby zatrzymanej albo podejrzanego."
        />

        <article className="card">
          <ul className="list">
            {oralItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section">
        <SectionHeading
          label="Rodzaje spraw"
          title="Sprawy karne, wykroczeniowe, internetowe i dokumenty z Ukrainy."
          text="Zakres zależy od materiału, celu czynności i sposobu wykorzystania tłumaczenia w dalszym postępowaniu."
        />

        <div className="grid-2">
          {policeCases.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Materiał cyfrowy"
          title="Komunikatory, zrzuty ekranu, raporty PDF i dane z telefonu."
          text="Tłumaczenie materiału cyfrowego może obejmować treść rozmów, raporty, załączniki, eksporty danych i opisy kontekstu technicznego."
        />

        <div className="grid-4">
          {digitalItems.map((item) => (
            <article className="card card-petrol" key={item.title}>
              <span className="tag">Materiał cyfrowy</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="feature">
          <div>
            <p className="section-label">Dokument w sprawie</p>
            <h2>Materiał policyjny często wymaga kontekstu, nie tylko przekładu słów.</h2>
          </div>

          <div>
            <p>
              Protokół, pouczenie, notatka, zapis rozmowy, zrzut ekranu lub
              raport techniczny mogą mieć znaczenie dla dalszego postępowania.
              W takich materiałach istotne są terminologia, kolejność zdarzeń,
              oznaczenia osób, daty, godziny, załączniki i sposób prezentacji
              treści.
            </p>

            <div className="labels">
              {[
                "protokół",
                "pouczenie",
                "notatka",
                "komunikator",
                "zrzut ekranu",
                "raport PDF",
                "dane z telefonu"
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
          label="Przekazanie dokumentu"
          title="Jak przekazać dokument do wyceny lub tłumaczenia?"
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
          Przy większych aktach, raportach PDF, komunikatorach lub materiale
          cyfrowym warto wskazać, które fragmenty mają zostać przetłumaczone.
        </p>
      </section>

      <section className="section">
        <SectionHeading
          label="FAQ"
          title="Najczęstsze pytania dotyczące tłumaczeń dla Policji."
          text="Krótko o czynnościach, dokumentach elektronicznych, materiale cyfrowym i zakresie języków."
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
            <span className="footer-title">Kontakt dla organów</span>
            <span className="footer-line">
              <a href={`tel:${institutionPhoneHref}`}>
                {institutionPhoneDisplay}
              </a>
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