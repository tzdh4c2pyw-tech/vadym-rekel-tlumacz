import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Transkrypcje nagrań audio i wideo ukraiński | Tłumacz przysięgły",
  description:
    "Transkrypcje i tłumaczenia nagrań audio/wideo w języku ukraińskim. Tłumacz przysięgły języka ukraińskiego TP/27/17. Nagrania do spraw sądowych, policyjnych, prokuratorskich i karnych. Kancelaria w Krakowie, materiały z całej Polski zdalnie.",
  keywords: [
    "transkrypcja nagrania ukraiński",
    "tłumaczenie nagrania ukraiński",
    "transkrypcja audio ukraiński",
    "transkrypcja wideo ukraiński",
    "tłumacz przysięgły ukraiński nagranie",
    "tłumaczenie nagrania do sądu ukraiński",
    "tłumaczenie wiadomości głosowych ukraiński",
    "tłumaczenie rozmowy ukraiński",
    "tłumacz ukraiński sprawy karne nagranie",
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

const recordingMaterials = [
  {
    title: "Nagrania audio",
    text: "Rozmowy, wypowiedzi, wiadomości głosowe, nagrania z telefonu, pliki dźwiękowe i materiał przekazywany do sprawy."
  },
  {
    title: "Nagrania wideo",
    text: "Nagrania z obrazem i dźwiękiem, wypowiedzi uczestników, fragmenty rozmów, rejestracje zdarzeń i załączniki wideo."
  },
  {
    title: "Wiadomości głosowe",
    text: "Wiadomości z komunikatorów, nagrania przesłane w aplikacjach, krótkie wypowiedzi i fragmenty rozmów."
  },
  {
    title: "Materiał do spraw karnych",
    text: "Nagrania przekazywane do akt sądowych, policyjnych, prokuratorskich, kancelarii prawnych albo pełnomocników."
  },
  {
    title: "Transkrypcja treści",
    text: "Spisanie treści nagrania z oznaczeniem wypowiedzi, kolejności, fragmentów istotnych i ewentualnych problemów z czytelnością dźwięku."
  },
  {
    title: "Tłumaczenie treści nagrania",
    text: "Tłumaczenie wypowiedzi ukraińskich na język polski, w zakresie ustalonym po wstępnej ocenie materiału."
  }
];

const relatedPages = [
  {
    title: "Sprawy karne",
    text: "Nagrania jako materiał w aktach, czynnościach, postępowaniach przygotowawczych i sprawach sądowych.",
    href: "/tlumaczenia-sprawy-karne-ukrainski"
  },
  {
    title: "Tłumaczenia dla Policji",
    text: "Nagrania, komunikatory, wiadomości głosowe, protokoły i materiał do czynności policyjnych.",
    href: "/tlumaczenia-dla-policji"
  },
  {
    title: "Tłumaczenia dla prokuratury",
    text: "Nagrania i materiał dowodowy w postępowaniach przygotowawczych oraz aktach prokuratorskich.",
    href: "/tlumaczenia-dla-prokuratury"
  },
  {
    title: "Materiał cyfrowy",
    text: "Komunikatory, raporty PDF, dane z telefonu, wiadomości, zrzuty ekranu i pliki cyfrowe.",
    href: "/tlumaczenia-it-krypto"
  }
];

const processSteps = [
  {
    title: "Prześlij materiał",
    text: "Do wstępnej oceny można przesłać plik audio, wideo, wiadomość głosową albo próbkę nagrania."
  },
  {
    title: "Opisz cel",
    text: "Warto wskazać, czy materiał jest do sądu, Policji, prokuratury, kancelarii prawnej albo do użytku prywatnego."
  },
  {
    title: "Wskaż zakres",
    text: "Przy dłuższym nagraniu należy określić fragmenty, minuty, rozmówców albo części istotne dla sprawy."
  },
  {
    title: "Ocena jakości",
    text: "Termin i możliwość realizacji zależą od jakości dźwięku, liczby rozmówców, zakłóceń, długości nagrania i języka wypowiedzi."
  }
];

const caseTypes = [
  "nagrania audio",
  "nagrania wideo",
  "wiadomości głosowe",
  "rozmowy telefoniczne",
  "komunikatory",
  "materiał dowodowy",
  "sprawy karne",
  "czynności procesowe",
  "sąd",
  "Policja",
  "prokuratura",
  "akta sprawy"
];

const faqItems = [
  {
    question: "Czy można przetłumaczyć nagranie w języku ukraińskim?",
    answer:
      "Tak. Można przesłać nagranie audio, wideo albo wiadomość głosową do wstępnej oceny. Możliwość i termin realizacji zależą od jakości dźwięku, długości nagrania, liczby rozmówców i zakresu tłumaczenia."
  },
  {
    question: "Czy najpierw wykonywana jest transkrypcja?",
    answer:
      "W wielu przypadkach najpierw konieczne jest ustalenie treści nagrania, czyli transkrypcja, a następnie tłumaczenie treści. Zakres zależy od celu wykorzystania materiału."
  },
  {
    question: "Czy można przetłumaczyć tylko fragment nagrania?",
    answer:
      "Tak. Przy dłuższym materiale można wskazać konkretne minuty, fragmenty, wypowiedzi albo rozmówców, których ma dotyczyć transkrypcja lub tłumaczenie."
  },
  {
    question: "Czy nagrania mogą być tłumaczone do sprawy karnej?",
    answer:
      "Tak. Nagrania audio i wideo mogą występować jako materiał w sprawach sądowych, policyjnych, prokuratorskich i karnych."
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

export default function AudioVideoTranscriptionPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Transkrypcje i tłumaczenia nagrań audio/wideo z języka ukraińskiego",
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
      "Transkrypcje i tłumaczenia nagrań audio/wideo w języku ukraińskim"
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
            Audio · wideo · wiadomości głosowe · język ukraiński
          </span>

          <h1>Transkrypcje i tłumaczenia nagrań audio/wideo.</h1>

          <p className="lead">
            Transkrypcja i tłumaczenie nagrań w języku ukraińskim: rozmów,
            wiadomości głosowych, plików audio, nagrań wideo i materiałów
            wykorzystywanych w sprawach sądowych, policyjnych, prokuratorskich
            i karnych.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={`tel:${expertPhoneHref}`}>
              Tłumacz / biegły: {expertPhoneDisplay}
            </a>
            <a className="button button-secondary" href={`tel:${officePhoneHref}`}>
              Kancelaria: {officePhoneDisplay}
            </a>
            <a className="button button-secondary" href="/kontakt">
              Wyślij nagranie do wyceny
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
            <h2>Najpierw oceniamy jakość dźwięku i zakres materiału.</h2>
            <p>
              Przy nagraniach znaczenie mają długość pliku, liczba rozmówców,
              zakłócenia, język wypowiedzi, chronologia i cel wykorzystania
              transkrypcji albo tłumaczenia.
            </p>

            <div className="notice">
              Do wstępnej oceny można przesłać nagranie, próbkę, wiadomość
              głosową albo wskazać fragmenty, które mają zostać przetłumaczone.
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
          title="Jakie nagrania można przekazać do transkrypcji albo tłumaczenia?"
          text="Zakres zależy od jakości dźwięku, długości nagrania, liczby rozmówców i celu wykorzystania materiału."
        />

        <div className="grid-3">
          {recordingMaterials.map((item) => (
            <article className="card" key={item.title}>
              <span className="tag">Nagrania</span>
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
            <h2>Nagrania jako materiał w sprawie.</h2>
          </div>

          <div>
            <p>
              Nagrania audio, wideo i wiadomości głosowe mogą pojawiać się w
              aktach spraw sądowych, policyjnych i prokuratorskich. W takich
              materiałach ważne jest oznaczenie wypowiedzi, kolejności zdarzeń,
              czasu i kontekstu rozmowy.
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
          title="Nagrania często łączą się ze sprawami karnymi i materiałem cyfrowym."
          text="Zakres ten łączy się z tłumaczeniami dla Policji, prokuratury, sądu oraz analizą materiału cyfrowego."
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
          title="Najczęstsze rodzaje nagrań i plików dźwiękowych."
          text="Przy dłuższych nagraniach warto wskazać minuty, fragmenty lub wypowiedzi, które są istotne dla sprawy."
        />

        <div className="feature">
          <div>
            <p className="section-label">Audio / wideo</p>
            <h2>Rozmowy, wiadomości głosowe i pliki do akt.</h2>
          </div>

          <div>
            <p>
              Przy transkrypcji i tłumaczeniu ważne jest, aby materiał pozwalał
              ustalić treść wypowiedzi, kolejność rozmówców i fragmenty istotne
              dla dalszego wykorzystania.
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
          title="Jak przesłać nagranie do wyceny?"
          text="Najlepiej przesłać plik albo próbkę i krótko opisać, jaki zakres materiału ma zostać opracowany."
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
          title="Przekaż nagranie albo próbkę do wstępnej oceny."
          text="Przy dłuższych nagraniach warto ustalić, czy potrzebna jest pełna transkrypcja, tłumaczenie całości, czy tylko określone fragmenty."
        />

        <div className="grid-3">
          <article className="card card-dark">
            <span className="tag">Kontakt bezpośredni</span>
            <h3>{expertPhoneDisplay}</h3>
            <p>
              Kontakt z tłumaczem / biegłym w sprawach nagrań, materiału
              cyfrowego, akt, czynności i pilnych ustaleń.
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
              Prześlij plik, próbkę nagrania, wiadomość głosową albo opis
              materiału do wstępnej oceny.
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
          title="Najczęstsze pytania o transkrypcje i tłumaczenie nagrań."
          text="Krótko o nagraniach audio/wideo, wiadomościach głosowych, fragmentach nagrań, sprawach karnych i kontakcie."
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