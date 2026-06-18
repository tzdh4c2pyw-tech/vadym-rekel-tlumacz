import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Kwalifikacje | Vadym Rekel tłumacz przysięgły języka ukraińskiego TP/27/17",
  description:
    "Kwalifikacje zawodowe Vadym Rekel, tłumacza przysięgłego języka ukraińskiego TP/27/17. Kancelaria w Krakowie. Uprawnienia, dokumenty, profil zawodowy, przygotowanie prawnicze i technologiczne.",
  keywords: [
    "Vadym Rekel kwalifikacje",
    "Vadym Rekel tłumacz przysięgły",
    "tłumacz przysięgły języka ukraińskiego TP/27/17",
    "tłumacz przysięgły ukraiński Kraków",
    "kwalifikacje tłumacza przysięgłego ukraińskiego",
    "kancelaria tłumacza przysięgłego języka ukraińskiego Kraków",
    "tłumacz ukraiński sprawy karne",
    "tłumacz ukraiński dokumenty z Ukrainy",
    "tłumacz ukraiński materiał cyfrowy"
  ]
};

const email = "biegly@vadymrekel.pl";

const institutionPhoneDisplay = "883 040 483";
const institutionPhoneHref = "+48883040483";

const individualPhoneDisplay = "735 753 383";
const individualPhoneHref = "+48735753383";

const linkedInUrl = "https://www.linkedin.com/in/vadym-rekel/";

const qualificationGroups = [
  {
    title: "Uprawnienia tłumacza przysięgłego",
    lead: "Podstawą działalności kancelarii jest wpis na listę tłumaczy przysięgłych języka ukraińskiego.",
    items: [
      "tłumacz przysięgły języka ukraińskiego",
      "numer wpisu: TP/27/17",
      "tłumaczenia poświadczone języka ukraińskiego",
      "tłumaczenia ustne języka ukraińskiego przy czynnościach"
    ]
  },
  {
    title: "Specjalizacja prawnicza",
    lead: "Kancelaria koncentruje się na dokumentach procesowych, sprawach karnych i materiałach wykorzystywanych przez organy.",
    items: [
      "sprawy sądowe, policyjne i prokuratorskie",
      "akta spraw, protokoły, postanowienia i pouczenia",
      "dokumenty z Ukrainy i pomoc prawna",
      "korespondencja osadzonych i pisma odręczne"
    ]
  },
  {
    title: "Materiał cyfrowy",
    lead: "Zakres pracy obejmuje również materiał cyfrowy, który pojawia się w sprawach karnych i oszustwach internetowych.",
    items: [
      "komunikatory, zrzuty ekranu i raporty PDF",
      "dane z telefonu i eksporty rozmów",
      "materiały dotyczące oszustw internetowych",
      "kryptowaluty, giełdy, portfele i przepływy środków"
    ]
  },
  {
    title: "Języki pracy",
    lead: "Uprawnienia przysięgłe dotyczą języka ukraińskiego. Rosyjski i angielski są obsługiwane jako języki specjalistyczne.",
    items: [
      "ukraiński — tłumaczenia przysięgłe i specjalistyczne",
      "rosyjski — tłumaczenia specjalistyczne",
      "angielski — tłumaczenia specjalistyczne"
    ]
  }
];

const certificates = [
  {
    title: "Wpis na listę tłumaczy przysięgłych",
    text: "Potwierdzenie uprawnień tłumacza przysięgłego języka ukraińskiego. Numer wpisu: TP/27/17.",
    file: "/images/certyfikaty/zaswiadczenie-tlumacz-przysiegly-ukrainski-vadym-rekel.pdf",
    type: "PDF"
  },
  {
    title: "TEPIS Member 2026",
    text: "Potwierdzenie członkostwa w TEPIS na rok 2026.",
    file: "/images/certyfikaty/tepis-member-2026-vadym-rekel.png",
    type: "PNG"
  },
  {
    title: "CIOL — Certified Translation",
    text: "Potwierdzenie profilu zawodowego w zakresie certified translation.",
    file: "/images/certyfikaty/ciol-certified-translation-vadym-rekel.png",
    type: "PNG"
  },
  {
    title: "Studia MBA",
    text: "Dokument potwierdzający ukończenie studiów podyplomowych MBA.",
    file: "/images/certyfikaty/certificate-mba-vadym-rekel.pdf",
    type: "PDF"
  },
  {
    title: "Certyfikat zawodowy",
    text: "Dokument potwierdzający dodatkowe przygotowanie zawodowe.",
    file: "/images/certyfikaty/vadym-rekel-certificate-180925.pdf",
    type: "PDF"
  },
  {
    title: "Certyfikat członkowski",
    text: "Dokument potwierdzający członkostwo lub aktywność zawodową.",
    file: "/images/certyfikaty/membership-certificate-vadym-rekel.pdf",
    type: "PDF"
  },
  {
    title: "Certyfikat członkowski — wariant 2",
    text: "Dodatkowy dokument potwierdzający członkostwo lub aktywność zawodową.",
    file: "/images/certyfikaty/membership-certificate-3-vadym-rekel.pdf",
    type: "PDF"
  },
  {
    title: "Certyfikat językowy / specjalistyczny",
    text: "Dokument potwierdzający dodatkowe przygotowanie językowe lub specjalistyczne.",
    file: "/images/certyfikaty/e-cert-11-vadym-rekel.pdf",
    type: "PDF"
  },
  {
    title: "Certyfikat językowy / specjalistyczny — wariant 2",
    text: "Dokument potwierdzający dodatkowe przygotowanie językowe lub specjalistyczne.",
    file: "/images/certyfikaty/e-cert-12-vadym-rekel.pdf",
    type: "PDF"
  }
];

const officePhotos = [
  {
    src: "/images/kancelaria%20tlumacza%20przysieglego%20stanowisko%20pracy%20vadym%20rekel.jpeg",
    alt: "Vadym Rekel przy stanowisku pracy w kancelarii tłumacza przysięgłego języka ukraińskiego w Krakowie",
    title: "Stanowisko pracy tłumacza"
  },
  {
    src: "/images/kancelaria%20tlumacza%20przysieglego%20stanowisko%20administracyjne%20vadym%20rekel.jpeg",
    alt: "Stanowisko administracyjne w kancelarii tłumacza przysięgłego języka ukraińskiego",
    title: "Obieg dokumentów"
  },
  {
    src: "/images/stanowisko-komputerowe-bieglego-tlumacza-macbook-pro-vadym-rekel.jpg",
    alt: "Stanowisko komputerowe do pracy z materiałem cyfrowym i dokumentami PDF",
    title: "Materiał cyfrowy"
  },
  {
    src: "/images/kancelaria-tlumacza-przysieglego-ukrainski-krakow-vadym-rekel-01.jpg",
    alt: "Kancelaria tłumacza przysięgłego języka ukraińskiego w Krakowie",
    title: "Kancelaria w Krakowie"
  }
];

const faqItems = [
  {
    question: "Jaki jest numer wpisu na listę tłumaczy przysięgłych?",
    answer:
      "Vadym Rekel jest tłumaczem przysięgłym języka ukraińskiego wpisanym pod numerem TP/27/17."
  },
  {
    question: "Czy język rosyjski i angielski są tłumaczeniami przysięgłymi?",
    answer:
      "Nie. Uprawnienia tłumacza przysięgłego dotyczą języka ukraińskiego. Język rosyjski i angielski są oferowane jako tłumaczenia specjalistyczne."
  },
  {
    question: "Dlaczego na stronie pokazane są kwalifikacje prawnicze i technologiczne?",
    answer:
      "Ponieważ kancelaria specjalizuje się w dokumentach procesowych, sprawach karnych, materiale cyfrowym, komunikatorach, raportach PDF i dokumentach z Ukrainy."
  },
  {
    question: "Czy pełne dokumenty można zobaczyć online?",
    answer:
      "Tak. Część dokumentów potwierdzających kwalifikacje jest dostępna w formie plików PDF lub skanów na tej stronie."
  },
  {
    question: "Czy kancelaria obsługuje dokumenty z całej Polski?",
    answer:
      "Tak. Kancelaria ma siedzibę w Krakowie, ale dokumenty do wstępnej wyceny można przesłać elektronicznie z dowolnego miasta w Polsce."
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

export default function QualificationsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vadym Rekel",
    jobTitle: "Tłumacz przysięgły języka ukraińskiego",
    url: linkedInUrl,
    worksFor: {
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
    knowsLanguage: ["ukraiński", "polski", "rosyjski", "angielski"],
    sameAs: linkedInUrl
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

        .portrait {
          height: 250px;
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          margin-bottom: 20px;
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

        .certificate-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .certificate-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 250px;
        }

        .file-badge {
          width: fit-content;
          display: inline-flex;
          margin-bottom: 14px;
          padding: 8px 10px;
          border-radius: 10px;
          background: var(--green-soft);
          color: var(--green);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
        }

        .photo-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .photo-card {
          position: relative;
          min-height: 255px;
          border-radius: 24px;
          overflow: hidden;
          background: #f8f1e6;
          border: 1px solid var(--line);
          box-shadow: 0 14px 34px rgba(25, 22, 18, 0.055);
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
          filter: brightness(0.72);
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
          .footer-inner {
            grid-template-columns: 1fr;
          }

          .grid-2,
          .grid-3,
          .certificate-grid,
          .photo-grid {
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
          .hero-side {
            padding: 28px;
          }

          h1 {
            font-size: 38px;
          }

          .button,
          .phone-main {
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
            <a href="/">Strona główna</a>
            <a href="/tlumaczenia-sadowe-ukrainski">Sądy</a>
            <a href="/tlumaczenia-dla-policji">Policja</a>
            <a href="/tlumaczenia-dla-prokuratury">Prokuratura</a>
            <a href="/tlumaczenia-it-krypto">Materiał cyfrowy</a>
            <a className="nav-phone" href={`tel:${institutionPhoneHref}`}>
              {institutionPhoneDisplay}
            </a>
          </div>
        </nav>
      </div>

      <section className="hero">
        <div className="hero-main">
          <span className="eyebrow">
            Kwalifikacje · TP/27/17 · Kraków · język ukraiński
          </span>

          <h1>Kwalifikacje tłumacza przysięgłego języka ukraińskiego.</h1>

          <p className="lead">
            Vadym Rekel jest tłumaczem przysięgłym języka ukraińskiego wpisanym
            pod numerem TP/27/17. Kancelaria w Krakowie specjalizuje się w
            dokumentach procesowych, sprawach karnych, materiale cyfrowym,
            dokumentach z Ukrainy i korespondencji osadzonych.
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
            <div className="portrait">
              <img
                src="/images/vadym%20rekel.jpg"
                alt="Vadym Rekel tłumacz przysięgły języka ukraińskiego Kraków"
              />
            </div>

            <h2>Vadym Rekel</h2>
            <p>
              Tłumacz przysięgły języka ukraińskiego. Numer wpisu: TP/27/17.
              Kancelaria w Krakowie. Dokumenty z całej Polski zdalnie.
            </p>
          </div>

          <a className="phone-main" href={`tel:${institutionPhoneHref}`}>
            {institutionPhoneDisplay}
          </a>
        </aside>
      </section>

      <section className="trust">
        <div className="trust-inner">
          TP/27/17 · język ukraiński przysięgły · rosyjski i angielski
          specjalistycznie · sprawy karne · materiał cyfrowy · dokumenty z
          Ukrainy
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Profil"
          title="Uprawnienia, specjalizacja i języki pracy."
          text="Ta strona porządkuje informacje o kwalifikacjach. Strona główna pozostaje skoncentrowana na usłudze, kontakcie i zakresie pracy kancelarii."
        />

        <div className="grid-2">
          {qualificationGroups.map((group) => (
            <article className="card" key={group.title}>
              <span className="tag">{group.title}</span>
              <h3>{group.title}</h3>
              <p>{group.lead}</p>

              <ul className="list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Dokumenty"
          title="Dokumenty potwierdzające kwalifikacje."
          text="Poniżej znajdują się dokumenty i potwierdzenia kwalifikacji zawodowych. Na stronie głównej pokazany jest tylko skrót, żeby nie przeciążać przekazu."
        />

        <div className="certificate-grid">
          {certificates.map((item) => (
            <article className="card certificate-card" key={item.title}>
              <div>
                <span className="file-badge">{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

              <a className="card-link" href={item.file} target="_blank">
                Otwórz dokument →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Kancelaria"
          title="Realne miejsce pracy z dokumentami i materiałem cyfrowym."
          text="Zdjęcia kancelarii potwierdzają realne zaplecze pracy z dokumentami poświadczonymi, procesowymi, urzędowymi i cyfrowymi."
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

      <section className="section">
        <SectionHeading
          label="LinkedIn"
          title="Profil zawodowy."
          text="LinkedIn pełni funkcję profilu zawodowego. Nie zastępuje uprawnień tłumacza przysięgłego, lecz uzupełnia prezentację kwalifikacji."
        />

        <article className="card card-dark">
          <span className="tag">Profil zawodowy</span>
          <h3>LinkedIn — Vadym Rekel</h3>
          <p>
            Profil zawodowy może być wykorzystany do weryfikacji doświadczenia,
            specjalizacji i aktywności zawodowej.
          </p>

          <a className="phone-main" href={linkedInUrl} target="_blank">
            Otwórz LinkedIn
          </a>
        </article>
      </section>

      <section className="section">
        <SectionHeading
          label="FAQ"
          title="Najczęstsze pytania dotyczące kwalifikacji."
          text="Krótko o numerze wpisu, językach pracy, dokumentach i zakresie specjalizacji."
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