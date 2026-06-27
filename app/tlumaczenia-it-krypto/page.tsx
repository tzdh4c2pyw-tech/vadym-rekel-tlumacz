import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Tłumaczenia materiału cyfrowego ukraiński | IT, krypto, komunikatory",
  description:
    "Tłumacz przysięgły języka ukraińskiego TP/27/17. Tłumaczenia materiału cyfrowego: komunikatory, zrzuty ekranu, raporty PDF, dane z telefonu, oszustwa internetowe, kryptowaluty i dokumenty do spraw karnych. Kancelaria w Krakowie, dokumenty z całej Polski zdalnie.",
  keywords: [
    "tłumaczenie materiału cyfrowego ukraiński",
    "tłumaczenie komunikatorów ukraiński",
    "tłumaczenie zrzutów ekranu ukraiński",
    "tłumaczenie raportu PDF z telefonu ukraiński",
    "tłumaczenia IT ukraiński",
    "tłumaczenia krypto ukraiński",
    "tłumaczenie kryptowaluty ukraiński",
    "tłumaczenie oszustwa internetowe ukraiński",
    "tłumacz ukraiński sprawy karne materiał cyfrowy",
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

const digitalMaterials = [
  {
    title: "Komunikatory",
    text: "Rozmowy z komunikatorów, eksporty czatów, wiadomości tekstowe, wiadomości głosowe, załączniki i chronologia rozmów."
  },
  {
    title: "Zrzuty ekranu",
    text: "Screenshoty rozmów, profili, transakcji, paneli użytkownika, aplikacji, giełd, portfeli i platform internetowych."
  },
  {
    title: "Raporty PDF",
    text: "Raporty z telefonu, raporty z narzędzi informatycznych, zestawienia danych, eksporty wiadomości i pliki dołączane do akt."
  },
  {
    title: "Dane z telefonu",
    text: "SMS, e-mail, historia połączeń, komunikatory, pliki, zdjęcia, nazwy kontaktów, daty, godziny i dane techniczne."
  },
  {
    title: "Oszustwa internetowe",
    text: "Materiały dotyczące platform inwestycyjnych, fałszywych kont, przelewów, komunikatorów, wiadomości i kontaktów sprawców."
  },
  {
    title: "Kryptowaluty",
    text: "Materiały dotyczące portfeli, giełd, adresów, transakcji, platform, potwierdzeń, instrukcji i korespondencji."
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
    title: "Tłumaczenia sądowe",
    text: "Akta spraw, protokoły, wyroki, postanowienia, pisma procesowe i załączniki.",
    href: "/tlumaczenia-sadowe-ukrainski"
  }
];

const processSteps = [
  {
    title: "Przekazanie materiału",
    text: "Do wstępnej wyceny można przesłać PDF, zrzuty ekranu, eksport rozmów, pliki tekstowe, zdjęcia albo opis materiału."
  },
  {
    title: "Opis zakresu",
    text: "Warto wskazać, które rozmowy, daty, strony, pliki albo fragmenty mają zostać objęte tłumaczeniem."
  },
  {
    title: "Ocena czytelności",
    text: "Znaczenie ma jakość zrzutów, kolejność wiadomości, kompletność danych, widoczność dat i oznaczeń uczestników."
  },
  {
    title: "Realizacja tłumaczenia",
    text: "Tłumaczenie jest przygotowywane z zachowaniem układu, chronologii, oznaczeń technicznych i kontekstu sprawy."
  }
];

const caseTypes = [
  "komunikatory",
  "zrzuty ekranu",
  "raporty PDF",
  "SMS",
  "e-mail",
  "dane z telefonu",
  "portfele kryptowalut",
  "giełdy kryptowalut",
  "platformy inwestycyjne",
  "potwierdzenia przelewów",
  "oszustwa internetowe",
  "materiał do akt"
];

const faqItems = [
  {
    question: "Czy można przetłumaczyć zrzuty ekranu z komunikatora?",
    answer:
      "Tak. Do wstępnej wyceny można przesłać zrzuty ekranu rozmów, eksporty czatów, raporty PDF albo opis materiału. Przy większej liczbie zrzutów warto wskazać zakres istotny dla sprawy."
  },
  {
    question: "Czy tłumaczenie może obejmować materiał z telefonu?",
    answer:
      "Tak. Zakres może obejmować SMS, e-mail, komunikatory, historię rozmów, raporty PDF, dane kontaktowe, daty, godziny oraz inne elementy utrwalone w materiale."
  },
  {
    question: "Czy kancelaria tłumaczy materiały dotyczące kryptowalut?",
    answer:
      "Tak. Tłumaczenie może obejmować korespondencję, potwierdzenia, adresy portfeli, transakcje, platformy, giełdy, instrukcje oraz materiał związany z oszustwami internetowymi."
  },
  {
    question: "Czy taki materiał może być tłumaczony do sprawy karnej?",
    answer:
      "Tak. Materiał cyfrowy często występuje w sprawach karnych, policyjnych, prokuratorskich i sądowych."
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

export default function DigitalCryptoTranslationsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tłumaczenia materiału cyfrowego z języka ukraińskiego",
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
      "Tłumaczenia materiału cyfrowego, komunikatorów, raportów PDF i kryptowalut z języka ukraińskiego"
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

        .labels {
          margin-top: 22px;
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
            Materiał cyfrowy · IT · krypto · język ukraiński
          </span>

          <h1>Tłumaczenia materiału cyfrowego w języku ukraińskim.</h1>

          <p className="lead">
            Tłumaczenia komunikatorów, zrzutów ekranu, raportów PDF, danych z
            telefonu, materiałów dotyczących oszustw internetowych, kryptowalut
            oraz dokumentów cyfrowych wykorzystywanych w sprawach karnych.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={`tel:${expertPhoneHref}`}>
              Tłumacz / biegły: {expertPhoneDisplay}
            </a>
            <a className="button button-secondary" href={`tel:${officePhoneHref}`}>
              Kancelaria: {officePhoneDisplay}
            </a>
            <a className="button button-secondary" href="/kontakt">
              Wyślij materiał do wyceny
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
            <h2>Materiał cyfrowy wymaga zachowania chronologii i struktury.</h2>
            <p>
              Przy tłumaczeniu rozmów, zrzutów ekranu, raportów i danych z
              telefonu znaczenie mają daty, godziny, uczestnicy, załączniki,
              kolejność wiadomości i kontekst sprawy.
            </p>

            <div className="notice">
              Do wyceny można przesłać pliki PDF, zrzuty ekranu, eksporty
              rozmów, zdjęcia albo opis materiału. Kancelaria ma siedzibę w
              Krakowie, ale materiały można przekazać elektronicznie z całej
              Polski.
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
          title="Jakie materiały cyfrowe można przekazać do tłumaczenia?"
          text="Zakres zależy od rodzaju plików, celu tłumaczenia, czytelności materiału i tego, które fragmenty mają znaczenie dla sprawy."
        />

        <div className="grid-3">
          {digitalMaterials.map((item) => (
            <article className="card" key={item.title}>
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
            <p className="section-label">Sprawy karne</p>
            <h2>Komunikatory, raporty i dane cyfrowe jako materiał dowodowy.</h2>
          </div>

          <div>
            <p>
              Materiał cyfrowy często występuje w sprawach policyjnych,
              prokuratorskich i sądowych. Może obejmować rozmowy, pliki,
              raporty, wiadomości, dane z telefonu, potwierdzenia transakcji i
              inne elementy istotne dla przebiegu sprawy.
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
          title="Materiał cyfrowy często trafia do akt Policji, prokuratury i sądu."
          text="Zakres ten łączy się z tłumaczeniami w sprawach karnych oraz obsługą materiałów przekazywanych przez organy procesowe."
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
          label="Typowe materiały"
          title="Najczęstsze rodzaje materiału cyfrowego."
          text="Przy większym materiale warto wskazać dokładny zakres tłumaczenia: strony raportu, daty, rozmówców albo konkretne fragmenty."
        />

        <div className="feature">
          <div>
            <p className="section-label">Pliki i dane</p>
            <h2>Rozmowy, raporty, transakcje i dane z urządzeń.</h2>
          </div>

          <div>
            <p>
              Tłumaczenie materiału cyfrowego powinno umożliwiać zrozumienie
              treści, kolejności zdarzeń, oznaczeń uczestników i charakteru
              załączników.
            </p>

            <div className="labels">
              {caseTypes.map((item) => (
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
          label="Organizacja"
          title="Jak przesłać materiał cyfrowy do wyceny?"
          text="Najlepiej przesłać plik albo próbkę materiału oraz krótko opisać, które fragmenty mają zostać przetłumaczone."
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
          title="Przekaż plik, raport albo zrzuty ekranu do wstępnej wyceny."
          text="Materiał można przesłać elektronicznie. Przy większych plikach warto najpierw ustalić zakres i sposób przekazania."
        />

        <div className="grid-3">
          <article className="card card-dark">
            <span className="tag">Kontakt bezpośredni</span>
            <h3>{expertPhoneDisplay}</h3>
            <p>
              Kontakt z tłumaczem / biegłym w sprawach materiału cyfrowego,
              komunikatorów, akt, czynności i pilnych ustaleń.
            </p>
            <a className="card-link" href={`tel:${expertPhoneHref}`}>
              Zadzwoń →
            </a>
          </article>

          <article className="card">
            <span className="tag">Kancelaria</span>
            <h3>{officePhoneDisplay}</h3>
            <p>
              Obsługa kancelaryjna, terminy, przekazanie plików, odbiór
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
              Prześlij PDF, zrzuty ekranu, eksport rozmów, plik tekstowy,
              zdjęcie albo opis materiału.
            </p>
            <a className="card-link" href={`mailto:${email}`}>
              Wyślij materiał →
            </a>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="FAQ"
          title="Najczęstsze pytania o tłumaczenie materiału cyfrowego."
          text="Krótko o komunikatorach, zrzutach ekranu, raportach PDF, kryptowalutach i materiale do spraw karnych."
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