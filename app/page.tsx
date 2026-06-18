import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Tłumacz przysięgły języka ukraińskiego Kraków | Sąd, Policja, Prokuratura",
  description:
    "Vadym Rekel, tłumacz przysięgły języka ukraińskiego TP/27/17 w Krakowie. Tłumaczenia poświadczone i ustne dla sądów, Policji, prokuratury oraz dokumenty z Ukrainy. Dokumenty z całej Polski zdalnie.",
  keywords: [
    "tłumacz przysięgły języka ukraińskiego",
    "tłumacz przysięgły ukraiński Kraków",
    "tłumacz ukraiński sąd",
    "tłumacz ukraiński Policja",
    "tłumacz ukraiński prokuratura",
    "Vadym Rekel",
    "TP/27/17",
    "tłumaczenia dokumentów z Ukrainy",
    "tłumaczenie akt sprawy ukraiński",
    "tłumacz ukraiński sprawy karne"
  ]
};

const email = "biegly@vadymrekel.pl";

const institutionPhoneDisplay = "883 040 483";
const institutionPhoneHref = "+48883040483";

const individualPhoneDisplay = "735 753 383";
const individualPhoneHref = "+48735753383";

const linkedInUrl = "https://www.linkedin.com/in/vadym-rekel/";

const authorityCards = [
  {
    title: "Sąd",
    text: "Akta spraw, protokoły, wyroki, postanowienia, pisma procesowe i załączniki.",
    href: "/tlumaczenia-sadowe-ukrainski"
  },
  {
    title: "Policja",
    text: "Czynności, pouczenia, notatki urzędowe, protokoły, komunikatory i materiał cyfrowy.",
    href: "/tlumaczenia-dla-policji"
  },
  {
    title: "Prokuratura",
    text: "Sprawy karne, postępowania przygotowawcze, pomoc prawna z Ukrainą i materiał dowodowy.",
    href: "/tlumaczenia-dla-prokuratury"
  }
];

const serviceCards = [
  {
    title: "Dokumenty z Ukrainy",
    text: "Dokumenty urzędowe, sądowe, procesowe i prywatne pochodzące z Ukrainy albo kierowane do organów ukraińskich.",
    href: "/dokumenty-z-ukrainy"
  },
  {
    title: "Materiał cyfrowy",
    text: "Komunikatory, zrzuty ekranu, raporty PDF, dane z telefonu, oszustwa internetowe i kryptowaluty.",
    href: "/tlumaczenia-it-krypto"
  },
  {
    title: "Korespondencja osadzonych",
    text: "Listy, skargi, prośby, oświadczenia, wyjaśnienia i pisma odręczne w sprawach karnych.",
    href: "/tlumaczenie-korespondencji-osadzonych"
  }
];

const handoverCards = [
  {
    title: "E-mail",
    text: "Prześlij skan, zdjęcie albo plik PDF.",
    value: email,
    href: `mailto:${email}`
  },
  {
    title: "Adres kancelarii",
    text: "Dokument można przekazać w Krakowie.",
    value: "ul. Kielecka 2/53, 31-526 Kraków",
    href: "#kontakt"
  },
  {
    title: "Odbiór osobisty",
    text: "Po wcześniejszym uzgodnieniu terminu.",
    value: "po uzgodnieniu",
    href: `tel:${institutionPhoneHref}`
  }
];

const officePhotos = [
  {
    src: "/images/kancelaria-tlumacza-przysieglego-ukrainski-krakow-vadym-rekel-01.jpg",
    alt: "Kancelaria tłumacza przysięgłego języka ukraińskiego w Krakowie",
    title: "Kancelaria"
  },
  {
    src: "/images/stanowisko-tlumacza-przysieglego-ukrainski-krakow-macbook-pro-vadym-rekel.jpg",
    alt: "Stanowisko pracy tłumacza przysięgłego języka ukraińskiego",
    title: "Dokumenty"
  },
  {
    src: "/images/stanowisko-komputerowe-bieglego-tlumacza-macbook-pro-vadym-rekel.jpg",
    alt: "Praca z materiałem cyfrowym i dokumentami PDF",
    title: "Materiał cyfrowy"
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

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Kancelaria Vadym Rekel - tłumacz przysięgły języka ukraińskiego",
    image: "https://www.tlumaczrosyjskiegoiukrainskiego.pl/opengraph-image",
    url: "https://www.tlumaczrosyjskiegoiukrainskiego.pl",
    telephone: institutionPhoneHref,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Kielecka 2/53",
      addressLocality: "Kraków",
      postalCode: "31-526",
      addressCountry: "PL"
    },
    founder: {
      "@type": "Person",
      name: "Vadym Rekel",
      jobTitle: "Tłumacz przysięgły języka ukraińskiego"
    },
    areaServed: {
      "@type": "Country",
      name: "Polska"
    },
    serviceType: [
      "Tłumaczenia poświadczone języka ukraińskiego",
      "Tłumaczenia ustne języka ukraińskiego",
      "Tłumaczenia dla sądów",
      "Tłumaczenia dla Policji",
      "Tłumaczenia dla prokuratury",
      "Tłumaczenia dokumentów z Ukrainy"
    ]
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

        img {
          max-width: 100%;
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
          grid-template-columns: 1.1fr 0.9fr;
          gap: 22px;
          align-items: stretch;
        }

        .hero-main {
          border: 1px solid var(--line);
          border-radius: var(--radius);
          background: rgba(255, 250, 242, 0.86);
          box-shadow: var(--shadow);
          padding: 48px;
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
          max-width: 800px;
          font-size: clamp(42px, 5.4vw, 72px);
          line-height: 0.94;
          letter-spacing: -0.07em;
        }

        .lead {
          margin: 24px 0 0;
          max-width: 740px;
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
          background: linear-gradient(155deg, var(--green), var(--green-dark));
          color: #fff;
          box-shadow: var(--shadow);
          padding: 28px;
          min-height: 520px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .portrait {
          height: 300px;
          border-radius: 22px;
          overflow: hidden;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          margin-bottom: 22px;
        }

        .portrait img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .hero-side h2 {
          margin: 0;
          color: #fff;
          font-size: 35px;
          line-height: 1;
          letter-spacing: -0.045em;
        }

        .hero-side p {
          margin: 14px 0 0;
          color: rgba(255,255,255,0.76);
          font-size: 16px;
          line-height: 1.55;
        }

        .side-meta {
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .side-meta span {
          border-radius: 999px;
          padding: 8px 11px;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.14);
          color: rgba(255,255,255,0.80);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .trust {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 22px 34px;
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

        .photo-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.9fr 0.9fr;
          gap: 14px;
        }

        .photo-card {
          position: relative;
          min-height: 310px;
          border-radius: 24px;
          overflow: hidden;
          background: #f8f1e6;
          border: 1px solid var(--line);
          box-shadow: 0 14px 34px rgba(25, 22, 18, 0.055);
        }

        .photo-card:first-child {
          min-height: 390px;
        }

        .photo-card img {
          width: 100%;
          height: 100%;
          min-height: inherit;
          object-fit: cover;
          display: block;
          transition: transform 260ms ease, filter 260ms ease;
        }

        .photo-card:hover img {
          transform: scale(1.045);
          filter: brightness(0.76);
        }

        .photo-caption {
          position: absolute;
          left: 16px;
          right: 16px;
          bottom: 16px;
          padding: 13px 14px;
          border-radius: 16px;
          background: rgba(19, 16, 12, 0.72);
          color: #fff;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 850;
        }

        .contact-panel {
          border-radius: var(--radius);
          background: linear-gradient(150deg, var(--green), var(--green-dark));
          color: #fff;
          box-shadow: var(--shadow);
          padding: 44px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: center;
        }

        .contact-panel h2 {
          margin: 0;
          color: #fff;
          font-size: clamp(34px, 4vw, 56px);
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .contact-panel p {
          margin: 18px 0 0;
          color: rgba(255,255,255,0.76);
          font-size: 18px;
          line-height: 1.55;
        }

        .contact-box {
          border-radius: 22px;
          background: rgba(255,255,255,0.09);
          border: 1px solid rgba(255,255,255,0.14);
          padding: 24px;
        }

        .contact-line {
          display: block;
          color: rgba(255,255,255,0.78);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          line-height: 1.55;
          margin-top: 10px;
        }

        .contact-line strong {
          color: #fff;
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
          .contact-panel,
          .footer-inner {
            grid-template-columns: 1fr;
          }

          .grid-2,
          .grid-3,
          .photo-grid {
            grid-template-columns: 1fr;
          }

          .nav-links {
            display: none;
          }

          .hero-side {
            min-height: auto;
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
          .feature,
          .contact-panel {
            padding: 28px;
          }

          h1 {
            font-size: 40px;
          }

          .button {
            width: 100%;
          }

          .portrait {
            height: 280px;
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
            <a href="#organy">Dla organów</a>
            <a href="#specjalizacja">Specjalizacja</a>
            <a href="#dokumenty">Dokumenty</a>
            <a href="#kancelaria">Kancelaria</a>
            <a href="#kontakt">Kontakt</a>
            <a className="nav-phone" href={`tel:${institutionPhoneHref}`}>
              {institutionPhoneDisplay}
            </a>
          </div>
        </nav>
      </div>

      <section className="hero">
        <div className="hero-main">
          <span className="eyebrow">
            Kraków · TP/27/17 · język ukraiński
          </span>

          <h1>
            Tłumacz przysięgły języka ukraińskiego dla sądów, Policji i
            prokuratury.
          </h1>

          <p className="lead">
            Kancelaria Vadym Rekel. Tłumaczenia poświadczone i ustne języka
            ukraińskiego w sprawach karnych, procesowych, urzędowych oraz w
            dokumentach z Ukrainy.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={`tel:${institutionPhoneHref}`}>
              Sąd · Policja · Prokuratura: {institutionPhoneDisplay}
            </a>
            <a className="button button-secondary" href={`mailto:${email}`}>
              Wyślij dokument do wyceny
            </a>
          </div>

          <p className="hero-note">
            Siedziba kancelarii: ul. Kielecka 2/53, 31-526 Kraków. Dokumenty do
            wstępnej wyceny można przesłać elektronicznie z całej Polski.
          </p>
        </div>

        <aside className="hero-side">
          <div>
            <div className="portrait">
              <img
                src="/images/vadym%20rekel.jpg"
                alt="Vadym Rekel tłumacz przysięgły języka ukraińskiego Kraków"
              />
            </div>

            <h2>Vadym Rekel</h2>
            <p>
              Tłumacz przysięgły języka ukraińskiego. Numer wpisu TP/27/17.
              Kancelaria w Krakowie.
            </p>

            <div className="side-meta">
              <span>TP/27/17</span>
              <span>język ukraiński</span>
              <span>Kraków</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="trust">
        <div className="trust-inner">
          Tłumaczenia poświadczone i ustne · sprawy karne · dokumenty z Ukrainy
          · materiał cyfrowy · dokumenty z całej Polski zdalnie
        </div>
      </section>

      <section className="section" id="organy">
        <SectionHeading
          label="Dla organów"
          title="Jasny zakres dla sądu, Policji i prokuratury."
          text="Strona główna pokazuje tylko najważniejsze obszary. Szczegółowy zakres znajduje się na dedykowanych podstronach."
        />

        <div className="grid-3">
          {authorityCards.map((item) => (
            <article className="card" key={item.title}>
              <span className="tag">Tłumaczenia dla</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a className="card-link" href={item.href}>
                Zobacz zakres →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="specjalizacja">
        <div className="feature">
          <div>
            <p className="section-label">Specjalizacja</p>
            <h2>Sprawy karne, dokumenty procesowe i materiał cyfrowy.</h2>
          </div>

          <div>
            <p>
              Kancelaria pracuje z dokumentami i materiałami, które wymagają
              precyzji językowej, znajomości kontekstu prawnego oraz
              uporządkowania treści istotnych dla sprawy.
            </p>

            <div className="labels">
              <span className="label">akta spraw</span>
              <span className="label">protokoły</span>
              <span className="label">komunikatory</span>
              <span className="label">raporty PDF</span>
              <span className="label">dane z telefonu</span>
              <span className="label">oszustwa internetowe</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="dokumenty">
        <SectionHeading
          label="Zakres"
          title="Najczęściej przekazywane materiały."
          text="Szczegółowe informacje są dostępne na podstronach. Strona główna pozostaje krótka i przejrzysta."
        />

        <div className="grid-3">
          {serviceCards.map((item) => (
            <article className="card card-petrol" key={item.title}>
              <span className="tag">Zakres</span>
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
          label="Przekazanie dokumentu"
          title="Jak przekazać dokument do wyceny?"
          text="Najprościej przesłać dokument elektronicznie. Przy większych aktach lub materiale cyfrowym warto krótko wskazać, które fragmenty mają zostać przetłumaczone."
        />

        <div className="grid-3">
          {handoverCards.map((item) => (
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
      </section>

      <section className="section" id="kancelaria">
        <SectionHeading
          label="Kancelaria"
          title="Realne miejsce pracy w Krakowie."
          text="Kancelaria obsługuje dokumenty poświadczone, procesowe, urzędowe oraz materiał cyfrowy."
        />

        <div className="photo-grid">
          {officePhotos.map((photo) => (
            <article className="photo-card" key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="photo-caption">{photo.title}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="kontakt">
        <div className="contact-panel">
          <div>
            <p className="section-label">Kontakt</p>
            <h2>Wyślij dokument albo skontaktuj się telefonicznie.</h2>
            <p>
              Dla sądów, Policji i prokuratury przeznaczony jest osobny numer
              kontaktowy.
            </p>
          </div>

          <div className="contact-box">
            <span className="contact-line">
              <strong>Sąd · Policja · Prokuratura:</strong>{" "}
              <a href={`tel:${institutionPhoneHref}`}>
                {institutionPhoneDisplay}
              </a>
            </span>
            <span className="contact-line">
              <strong>Klienci indywidualni:</strong>{" "}
              <a href={`tel:${individualPhoneHref}`}>
                {individualPhoneDisplay}
              </a>
            </span>
            <span className="contact-line">
              <strong>E-mail:</strong> <a href={`mailto:${email}`}>{email}</a>
            </span>
            <span className="contact-line">
              <strong>Adres:</strong> ul. Kielecka 2/53, 31-526 Kraków
            </span>

            <div className="hero-actions">
              <a className="button button-secondary" href={`mailto:${email}`}>
                Wyślij dokument
              </a>
              <a className="button button-secondary" href="/kwalifikacje">
                Zobacz kwalifikacje
              </a>
            </div>
          </div>
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
              Sąd · Policja · Prokuratura:{" "}
              <a href={`tel:${institutionPhoneHref}`}>
                {institutionPhoneDisplay}
              </a>
            </span>
            <span className="footer-line">
              Klienci indywidualni:{" "}
              <a href={`tel:${individualPhoneHref}`}>
                {individualPhoneDisplay}
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