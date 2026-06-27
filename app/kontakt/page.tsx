import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Kontakt i wycena tłumaczenia ukraiński | Vadym Rekel tłumacz przysięgły Kraków",
  description:
    "Kontakt z kancelarią Vadym Rekel, tłumacza przysięgłego języka ukraińskiego TP/27/17 w Krakowie. Wycena tłumaczenia dokumentów z Ukrainy, akt spraw, materiału cyfrowego i dokumentów dla sądu, Policji oraz prokuratury.",
  keywords: [
    "kontakt tłumacz przysięgły ukraiński Kraków",
    "wycena tłumaczenia ukraiński",
    "tłumacz ukraiński Kraków kontakt",
    "tłumacz przysięgły języka ukraińskiego kontakt",
    "Vadym Rekel kontakt",
    "tłumaczenie dokumentów z Ukrainy wycena",
    "tłumacz ukraiński sąd kontakt",
    "tłumacz ukraiński Policja kontakt",
    "tłumacz ukraiński prokuratura kontakt"
  ]
};

const email = "biegly@vadymrekel.pl";

const expertPhoneDisplay = "883 040 483";
const expertPhoneHref = "+48883040483";

const officePhoneDisplay = "735 753 383";
const officePhoneHref = "+48735753383";

const linkedInUrl = "https://www.linkedin.com/in/vadym-rekel/";

const contactCards = [
  {
    label: "Kontakt bezpośredni",
    title: expertPhoneDisplay,
    subtitle: "Tłumacz / biegły",
    text: "Bezpośredni kontakt w sprawach sądowych, policyjnych, prokuratorskich, czynnościach, aktach, materiale cyfrowym i pilnych ustaleniach.",
    href: `tel:${expertPhoneHref}`,
    button: "Zadzwoń do tłumacza"
  },
  {
    label: "Kancelaria",
    title: officePhoneDisplay,
    subtitle: "Obsługa kancelaryjna",
    text: "Kontakt w sprawach dokumentów, terminów, odbioru tłumaczenia, przekazania materiałów i organizacji pracy kancelarii.",
    href: `tel:${officePhoneHref}`,
    button: "Zadzwoń do kancelarii"
  },
  {
    label: "E-mail do wyceny",
    title: email,
    subtitle: "Dokumenty i materiały",
    text: "Najprostsza forma przekazania dokumentu do wstępnej wyceny: skan, zdjęcie, PDF, raport, zrzuty ekranu albo opis materiału.",
    href: `mailto:${email}`,
    button: "Wyślij dokument"
  }
];

const steps = [
  {
    title: "Prześlij dokument",
    text: "Wyślij skan, zdjęcie, plik PDF, raport, zrzuty ekranu albo opis materiału na adres e-mail kancelarii."
  },
  {
    title: "Podaj cel tłumaczenia",
    text: "Napisz, czy dokument jest do sądu, Policji, prokuratury, urzędu, kancelarii prawnej czy do użytku prywatnego."
  },
  {
    title: "Wskaż termin",
    text: "Podaj oczekiwany termin realizacji, liczbę stron albo zakres fragmentów, które mają zostać przetłumaczone."
  },
  {
    title: "Ustal odbiór",
    text: "Tłumaczenie można odebrać osobiście w kancelarii albo ustalić inną formę przekazania dokumentu."
  }
];

const checklist = [
  "rodzaj dokumentu lub materiału",
  "język dokumentu",
  "cel tłumaczenia",
  "liczba stron albo plików",
  "czy potrzebne jest tłumaczenie poświadczone",
  "oczekiwany termin realizacji",
  "czy dokument ma zostać odebrany osobiście",
  "dane kontaktowe do odpowiedzi"
];

const materialTypes = [
  {
    title: "Dokumenty z Ukrainy",
    text: "Akty, zaświadczenia, dokumenty urzędowe, sądowe, prokuratorskie i administracyjne."
  },
  {
    title: "Akta i dokumenty procesowe",
    text: "Protokoły, postanowienia, wyroki, pisma procesowe, zawiadomienia i załączniki."
  },
  {
    title: "Materiał cyfrowy",
    text: "Komunikatory, zrzuty ekranu, raporty PDF, dane z telefonu, wiadomości, e-mail i załączniki."
  },
  {
    title: "Korespondencja i pisma odręczne",
    text: "Listy, skargi, prośby, oświadczenia, wyjaśnienia oraz korespondencja osadzonych."
  }
];

const faqItems = [
  {
    question: "Który numer telefonu wybrać?",
    answer:
      "Wszystkie sprawy można zgłaszać na oba numery. Numer 883 040 483 służy do bezpośredniego kontaktu z tłumaczem / biegłym, a numer 735 753 383 do kontaktu z kancelarią."
  },
  {
    question: "Jak najszybciej uzyskać wycenę tłumaczenia?",
    answer:
      "Najprościej przesłać dokument na adres biegly@vadymrekel.pl. W wiadomości warto podać cel tłumaczenia, oczekiwany termin oraz informację, czy potrzebne jest tłumaczenie poświadczone."
  },
  {
    question: "Czy dokument można przesłać z innego miasta niż Kraków?",
    answer:
      "Tak. Kancelaria ma siedzibę w Krakowie, ale dokumenty do wstępnej wyceny można przesłać elektronicznie z dowolnego miasta w Polsce."
  },
  {
    question: "Czy można przekazać dokument osobiście?",
    answer:
      "Tak. Dokument można przekazać w kancelarii przy ul. Kieleckiej 2/53 w Krakowie, po wcześniejszym uzgodnieniu terminu."
  },
  {
    question: "Czy można przesłać raport PDF, komunikatory albo zrzuty ekranu?",
    answer:
      "Tak. Do wstępnej wyceny można przesłać również raport PDF, zrzuty ekranu, eksport rozmów, komunikatory albo opis materiału cyfrowego."
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

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Kontakt i wycena tłumaczenia - Vadym Rekel",
    url: "https://vadymrekel.pro/kontakt",
    mainEntity: {
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
      },
      areaServed: {
        "@type": "Country",
        name: "Polska"
      }
    }
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

        .hero-side {
          border-radius: var(--radius);
          background: linear-gradient(155deg, var(--green), var(--green-dark));
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

        .hero-side-list {
          margin: 24px 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 10px;
        }

        .hero-side-list li {
          color: rgba(255,255,255,0.82);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          font-weight: 750;
          line-height: 1.45;
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

        .card-subtitle {
          display: block;
          margin: -6px 0 14px;
          color: var(--gold-dark);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 900;
        }

        .card-link {
          display: inline-flex;
          margin-top: 20px;
          color: var(--green);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 900;
        }

        .card-dark .card-link {
          color: #fff;
        }

        .notice {
          margin-top: 18px;
          border-radius: 20px;
          background: rgba(18, 60, 49, 0.08);
          border: 1px solid rgba(18, 60, 49, 0.16);
          padding: 18px;
          color: var(--green);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          font-weight: 850;
          line-height: 1.55;
        }

        .checklist {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 9px;
        }

        .checklist li {
          display: flex;
          gap: 9px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.42;
        }

        .checklist li::before {
          content: "—";
          color: var(--gold);
        }

        .contact-strip {
          border-radius: var(--radius);
          background: var(--ink);
          color: #fff;
          padding: 44px;
          box-shadow: var(--shadow);
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 34px;
          align-items: center;
        }

        .contact-strip h2 {
          margin: 0;
          color: #fff;
          font-size: clamp(34px, 4vw, 56px);
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .contact-strip p {
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
          .contact-strip,
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
          .contact-strip {
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
            <a href="/tlumaczenia-sadowe-ukrainski">Sądy</a>
            <a href="/tlumaczenia-dla-policji">Policja</a>
            <a href="/tlumaczenia-dla-prokuratury">Prokuratura</a>
            <a href="/kwalifikacje">Kwalifikacje</a>
            <a className="nav-phone" href={`tel:${expertPhoneHref}`}>
              {expertPhoneDisplay}
            </a>
          </div>
        </nav>
      </div>

      <section className="hero">
        <div className="hero-main">
          <span className="eyebrow">
            Kontakt · wycena · dokumenty z całej Polski
          </span>

          <h1>Kontakt i wycena tłumaczenia języka ukraińskiego.</h1>

          <p className="lead">
            Wyślij dokument, skan, zdjęcie, plik PDF albo opis materiału do
            wstępnej wyceny. Kancelaria Vadym Rekel obsługuje tłumaczenia
            poświadczone, sprawy sądowe, policyjne i prokuratorskie, materiał
            cyfrowy oraz dokumenty z Ukrainy.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={`tel:${expertPhoneHref}`}>
              Tłumacz / biegły: {expertPhoneDisplay}
            </a>
            <a className="button button-secondary" href={`tel:${officePhoneHref}`}>
              Kancelaria: {officePhoneDisplay}
            </a>
            <a className="button button-secondary" href={`mailto:${email}`}>
              Wyślij dokument do wyceny
            </a>
          </div>

          <div className="notice">
            Wszystkie sprawy można zgłaszać na oba numery telefonu. Numer{" "}
            {expertPhoneDisplay} służy do bezpośredniego kontaktu z tłumaczem /
            biegłym, a numer {officePhoneDisplay} do kontaktu z kancelarią.
          </div>
        </div>

        <aside className="hero-side">
          <div>
            <h2>Najważniejsze dane kontaktowe.</h2>

            <p>
              Siedziba kancelarii znajduje się w Krakowie. Dokumenty do
              wstępnej wyceny można przesłać elektronicznie z dowolnego miasta w
              Polsce.
            </p>

            <ul className="hero-side-list">
              <li>Tłumacz / biegły: {expertPhoneDisplay}</li>
              <li>Kancelaria: {officePhoneDisplay}</li>
              <li>E-mail: {email}</li>
              <li>Adres: ul. Kielecka 2/53, 31-526 Kraków</li>
            </ul>
          </div>

          <a className="phone-large" href={`tel:${expertPhoneHref}`}>
            {expertPhoneDisplay}
          </a>
        </aside>
      </section>

      <section className="section">
        <SectionHeading
          label="Kontakt"
          title="Dwa numery — jeden cel: sprawna obsługa sprawy."
          text="Sprawy sądowe, policyjne, prokuratorskie, prywatne i urzędowe można zgłaszać na oba numery telefonu."
        />

        <div className="grid-3">
          {contactCards.map((item) => (
            <article className="card" key={item.title}>
              <span className="tag">{item.label}</span>
              <h3>{item.title}</h3>
              <span className="card-subtitle">{item.subtitle}</span>
              <p>{item.text}</p>
              <a className="card-link" href={item.href}>
                {item.button} →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Wycena"
          title="Jak przesłać dokument do wyceny?"
          text="Wycena jest sprawniejsza, gdy wiadomość zawiera podstawowe informacje o dokumencie, celu tłumaczenia i oczekiwanym terminie."
        />

        <div className="grid-4">
          {steps.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="contact-strip">
          <div>
            <p className="section-label">E-mail do wyceny</p>
            <h2>Najprościej: prześlij dokument na e-mail.</h2>
          </div>

          <div>
            <p>
              Do wiadomości można załączyć skan, zdjęcie, PDF, raport,
              komunikatory, zrzuty ekranu albo opis materiału. Przy większych
              aktach warto wskazać zakres fragmentów do tłumaczenia.
            </p>

            <div className="hero-actions">
              <a className="button button-secondary" href={`mailto:${email}`}>
                {email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Materiały"
          title="Jakie dokumenty można przesłać?"
          text="Do wstępnej wyceny można przesłać zarówno klasyczne dokumenty urzędowe, jak i materiał procesowy albo cyfrowy."
        />

        <div className="grid-2">
          {materialTypes.map((item) => (
            <article className="card card-dark" key={item.title}>
              <span className="tag">Zakres</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Checklist"
          title="Co warto napisać w wiadomości?"
          text="Nie wszystkie informacje są obowiązkowe, ale taka wiadomość pozwala szybciej ocenić zakres i termin realizacji."
        />

        <article className="card">
          <ul className="checklist">
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section" id="kontakt">
        <SectionHeading
          label="Adres"
          title="Kancelaria w Krakowie."
          text="Dokument można przekazać w kancelarii po wcześniejszym uzgodnieniu terminu. Dokumenty do wstępnej wyceny można przesłać elektronicznie."
        />

        <div className="grid-2">
          <article className="card">
            <span className="tag">Adres kancelarii</span>
            <h3>ul. Kielecka 2/53, 31-526 Kraków</h3>
            <p>
              Kancelaria tłumacza przysięgłego języka ukraińskiego. Odbiór
              osobisty oraz przekazanie dokumentów po wcześniejszym uzgodnieniu.
            </p>
            <a className="card-link" href={`tel:${officePhoneHref}`}>
              Uzgodnij termin →
            </a>
          </article>

          <article className="card">
            <span className="tag">Dokumenty z całej Polski</span>
            <h3>Wstępna wycena zdalnie.</h3>
            <p>
              Siedziba kancelarii jest w Krakowie, ale dokumenty do wyceny można
              przesłać elektronicznie z dowolnego miasta w Polsce.
            </p>
            <a className="card-link" href={`mailto:${email}`}>
              Prześlij dokument →
            </a>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="FAQ"
          title="Najczęstsze pytania kontaktowe."
          text="Krótko o wycenie, przesłaniu dokumentu, numerach telefonu, odbiorze osobistym i materiale cyfrowym."
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