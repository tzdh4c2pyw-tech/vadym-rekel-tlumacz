import type { Metadata } from "next";

const siteUrl = "https://vadym-rekel-tlumacz.vercel.app";

export const metadata: Metadata = {
  title:
    "Tłumacz przysięgły języka ukraińskiego Kraków | Mgr Vadym Rekel TP/27/17",
  description:
    "Mgr Vadym Rekel, tłumacz przysięgły języka ukraińskiego TP/27/17 w Krakowie. Tłumaczenia poświadczone i ustne dla sądów, Policji, prokuratury, dokumenty z Ukrainy, sprawy karne i materiał cyfrowy.",
  keywords: [
    "tłumacz przysięgły języka ukraińskiego",
    "tłumacz przysięgły ukraiński Kraków",
    "tłumacz ukraiński Kraków",
    "Vadym Rekel",
    "Mgr Vadym Rekel",
    "TP/27/17",
    "tłumacz ukraiński sąd",
    "tłumacz ukraiński Policja",
    "tłumacz ukraiński prokuratura",
    "tłumaczenia dokumentów z Ukrainy",
    "tłumaczenia sprawy karne ukraiński",
    "tłumaczenie materiału cyfrowego ukraiński",
    "tłumacz przysięgły ukraiński dokumenty z Ukrainy",
    "tłumacz przysięgły języka ukraińskiego Kraków Kielecka"
  ],
  verification: {
    google: "IRGY-E1KJFL1eUQihR952TtnvoTINcS0GzMSq0XJbfQ"
  },
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title:
      "Tłumacz przysięgły języka ukraińskiego Kraków | Mgr Vadym Rekel TP/27/17",
    description:
      "Tłumaczenia poświadczone i ustne języka ukraińskiego dla sądów, Policji, prokuratury, kancelarii prawnych, instytucji i osób prywatnych.",
    url: siteUrl,
    type: "website",
    locale: "pl_PL",
    siteName: "Kancelaria Mgr Vadym Rekel",
    images: [
      {
        url: `${siteUrl}/images/vadym%20rekel.jpg`,
        width: 1200,
        height: 1600,
        alt: "Mgr Vadym Rekel tłumacz przysięgły języka ukraińskiego Kraków"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tłumacz przysięgły języka ukraińskiego Kraków | Mgr Vadym Rekel TP/27/17",
    description:
      "Tłumaczenia poświadczone i ustne języka ukraińskiego dla sądów, Policji, prokuratury i kancelarii prawnych.",
    images: [`${siteUrl}/images/vadym%20rekel.jpg`]
  }
};

const email = "biegly@vadymrekel.pl";

const expertPhoneDisplay = "883 040 483";
const expertPhoneHref = "+48883040483";

const officePhoneDisplay = "735 753 383";
const officePhoneHref = "+48735753383";

const linkedInUrl = "https://www.linkedin.com/in/vadym-rekel/";

const authorityCards = [
  {
    title: "Sąd",
    text: "Akta spraw, protokoły, wyroki, postanowienia, pisma procesowe i załączniki.",
    href: "/tlumaczenia-sadowe-ukrainski"
  },
  {
    title: "Policja",
    text: "Protokoły, pouczenia, notatki urzędowe, komunikatory, zrzuty ekranu i materiał cyfrowy.",
    href: "/tlumaczenia-dla-policji"
  },
  {
    title: "Prokuratura",
    text: "Postępowania przygotowawcze, pomoc prawna z Ukrainą, dokumenty procesowe i materiał dowodowy.",
    href: "/tlumaczenia-dla-prokuratury"
  }
];

const specializationCards = [
  {
    title: "Sprawy karne",
    text: "Akta, protokoły, dokumenty procesowe, korespondencja osadzonych, dokumenty z Ukrainy i materiał cyfrowy.",
    href: "/tlumaczenia-sprawy-karne-ukrainski"
  },
  {
    title: "Dokumenty z Ukrainy",
    text: "Dokumenty urzędowe, sądowe, administracyjne, prywatne, edukacyjne i procesowe.",
    href: "/dokumenty-z-ukrainy"
  },
  {
    title: "Materiał cyfrowy",
    text: "Komunikatory, raporty PDF, zrzuty ekranu, dane z telefonu, oszustwa internetowe i kryptowaluty.",
    href: "/tlumaczenia-it-krypto"
  },
  {
    title: "Korespondencja osadzonych",
    text: "Listy, skargi, prośby, oświadczenia, wyjaśnienia i pisma odręczne w języku ukraińskim.",
    href: "/tlumaczenie-korespondencji-osadzonych"
  }
];

const qualificationCards = [
  {
    title: "TP/27/17",
    text: "Wpis na listę tłumaczy przysięgłych języka ukraińskiego. Podstawowa kwalifikacja kancelarii."
  },
  {
    title: "Prawo i nowe technologie",
    text: "Profil przydatny przy materiale cyfrowym, sprawach karnych, dokumentach procesowych i dowodach elektronicznych."
  },
  {
    title: "CIOL · TEPIS · MBA · C1",
    text: "Dodatkowe kwalifikacje zawodowe i językowe prezentowane szczegółowo na stronie kwalifikacji."
  }
];

const officePhotos = [
  {
    src: "/images/kancelaria%20tlumacza%20przysieglego%20stanowisko%20pracy%20vadym%20rekel.jpeg",
    alt: "Mgr Vadym Rekel przy stanowisku pracy tłumacza przysięgłego języka ukraińskiego w Krakowie",
    title: "Mgr Vadym Rekel — stanowisko pracy",
    featured: true,
    emphasis: true
  },
  {
    src: "/images/kancelaria%20tlumacza%20przysieglego%20stanowisko%20administracyjne%20vadym%20rekel.jpeg",
    alt: "Stanowisko administracyjne kancelarii tłumacza przysięgłego języka ukraińskiego w Krakowie",
    title: "Stanowisko administracyjne kancelarii",
    featured: true
  },
  {
    src: "/images/kancelaria-tlumacza-przysieglego-ukrainski-krakow-vadym-rekel-01.jpg",
    alt: "Kancelaria tłumacza przysięgłego języka ukraińskiego w Krakowie",
    title: "Kancelaria"
  },
  {
    src: "/images/biuro-tlumacza-przysieglego-jezyk-ukrainski-krakow-vadym-rekel.jpg",
    alt: "Biuro tłumacza przysięgłego języka ukraińskiego w Krakowie",
    title: "Biuro"
  },
  {
    src: "/images/stanowisko-tlumacza-przysieglego-ukrainski-krakow-macbook-pro-vadym-rekel.jpg",
    alt: "Stanowisko pracy tłumacza przysięgłego języka ukraińskiego",
    title: "Stanowisko tłumacza"
  },
  {
    src: "/images/stanowisko-komputerowe-bieglego-tlumacza-macbook-pro-vadym-rekel.jpg",
    alt: "Stanowisko komputerowe biegłego tłumacza",
    title: "Materiał cyfrowy"
  },
  {
    src: "/images/stanowisko-administracyjne-kancelaria-tlumacza-ukrainski-krakow-vadym-rekel.jpg",
    alt: "Stanowisko administracyjne kancelarii tłumacza ukraińskiego w Krakowie",
    title: "Obsługa kancelarii"
  },
  {
    src: "/images/laptop-windows-bitlocker-kancelaria-tlumacza-vadym-rekel.jpg",
    alt: "Laptop z zabezpieczeniami BitLocker w kancelarii tłumacza",
    title: "Bezpieczeństwo danych"
  },
  {
    src: "/images/drukarki-hp-pagewide-kancelaria-tlumacza-vadym-rekel.jpg",
    alt: "Drukarki HP PageWide w kancelarii tłumacza przysięgłego",
    title: "Druk dokumentów"
  },
  {
    src: "/images/niszczarka-dokumentow-hsm-shredstar-x15-kancelaria-vadym-rekel.jpg",
    alt: "Niszczarka dokumentów HSM shredstar X15 w kancelarii tłumacza",
    title: "Bezpieczeństwo dokumentów"
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
    name: "Kancelaria Mgr Vadym Rekel - tłumacz przysięgły języka ukraińskiego",
    image: `${siteUrl}/images/vadym%20rekel.jpg`,
    url: siteUrl,
    telephone: expertPhoneHref,
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
      name: "Mgr Vadym Rekel",
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
      "Tłumaczenia w sprawach karnych",
      "Tłumaczenia dokumentów z Ukrainy",
      "Tłumaczenia materiału cyfrowego"
    ],
    sameAs: [linkedInUrl]
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
          -webkit-backdrop-filter: blur(18px);
        }

        .nav {
          max-width: 1220px;
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
          max-width: 1220px;
          margin: 0 auto;
          padding: 52px 22px 34px;
          display: grid;
          grid-template-columns: 1.02fr 0.98fr;
          gap: 28px;
          align-items: stretch;
        }

        .hero-main {
          border: 1px solid var(--line);
          border-radius: var(--radius);
          background: rgba(255, 250, 242, 0.88);
          box-shadow: var(--shadow);
          padding: 56px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 650px;
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
          font-size: clamp(42px, 5.4vw, 74px);
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
          background: rgba(255, 255, 255, 0.70);
          border-color: var(--line);
          color: var(--ink);
        }

        .hero-note {
          margin-top: 22px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.55;
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

        .signature {
          margin-top: 24px;
          width: fit-content;
          padding: 10px 18px;
          border-radius: 999px;
          border: 1px solid rgba(182, 138, 58, 0.32);
          color: var(--gold-dark);
          background: rgba(255, 250, 242, 0.76);
          font-size: 25px;
          line-height: 1;
          font-style: italic;
          letter-spacing: -0.04em;
          box-shadow: 0 12px 26px rgba(182, 138, 58, 0.12);
          animation: signaturePulse 2.7s ease-in-out infinite;
        }

        @keyframes signaturePulse {
          0% {
            transform: translateY(0) scale(1);
            box-shadow: 0 12px 26px rgba(182, 138, 58, 0.12);
          }
          50% {
            transform: translateY(-2px) scale(1.025);
            box-shadow: 0 18px 38px rgba(182, 138, 58, 0.24);
          }
          100% {
            transform: translateY(0) scale(1);
            box-shadow: 0 12px 26px rgba(182, 138, 58, 0.12);
          }
        }

        .hero-side {
          position: relative;
          border-radius: var(--radius);
          background: linear-gradient(155deg, var(--green), var(--green-dark));
          color: #fff;
          box-shadow: var(--shadow);
          padding: 24px;
          min-height: 650px;
          overflow: hidden;
        }

        .portrait {
          width: 100%;
          height: 100%;
          min-height: 602px;
          border-radius: 24px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          margin: 0;
        }

        .portrait img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 32%;
          display: block;
        }

        .trust {
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 22px 34px;
        }

        .trust-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .trust-item {
          border-radius: 18px;
          border: 1px solid var(--line);
          background: rgba(255, 250, 242, 0.78);
          padding: 18px;
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 850;
          line-height: 1.45;
        }

        .trust-item strong {
          display: block;
          color: var(--ink);
          font-size: 16px;
          margin-bottom: 4px;
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
          background: rgba(255, 250, 242, 0.82);
          box-shadow: 0 14px 34px rgba(25, 22, 18, 0.055);
          padding: 26px;
          transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
        }

        .card:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 44px rgba(25, 22, 18, 0.09);
          border-color: rgba(182, 138, 58, 0.30);
        }

        .card-petrol {
          background:
            linear-gradient(150deg, rgba(29, 62, 74, 0.96), rgba(16, 41, 50, 0.98)),
            repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.035) 0 1px, transparent 1px 22px);
          color: #fff;
          border-color: rgba(255, 255, 255, 0.12);
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

        .card-petrol p {
          color: rgba(255, 255, 255, 0.76);
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

        .card-petrol .tag {
          background: rgba(255, 255, 255, 0.10);
          color: rgba(255, 255, 255, 0.84);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .card-link {
          display: inline-flex;
          margin-top: 20px;
          color: var(--green);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 900;
        }

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
          color: rgba(255, 255, 255, 0.76);
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
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: rgba(255, 255, 255, 0.78);
          background: rgba(255, 255, 255, 0.08);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .photo-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 18px;
        }

        .photo-card {
          position: relative;
          grid-column: span 4;
          min-height: 310px;
          border-radius: 28px;
          overflow: hidden;
          background: #f8f1e6;
          border: 1px solid var(--line);
          box-shadow: 0 16px 38px rgba(25, 22, 18, 0.075);
        }

        .photo-card-featured {
          grid-column: span 6;
          min-height: 640px;
        }

        .photo-card-emphasis {
          border: 1px solid rgba(182, 138, 58, 0.46);
          box-shadow: 0 26px 70px rgba(25, 22, 18, 0.18);
        }

        .photo-card img {
          width: 100%;
          height: 100%;
          min-height: inherit;
          object-fit: cover;
          object-position: center center;
          display: block;
          transition: transform 300ms ease, filter 300ms ease;
        }

        .photo-card-emphasis img {
          filter: contrast(1.1) saturate(1.12) brightness(1.04);
        }

        .photo-card:hover img {
          transform: scale(1.035);
          filter: brightness(0.82) contrast(1.08) saturate(1.08);
        }

        .photo-caption {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 18px;
          padding: 15px 18px;
          border-radius: 18px;
          background: rgba(19, 16, 12, 0.74);
          color: #fff;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          font-weight: 950;
          line-height: 1.35;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .photo-card-featured .photo-caption {
          font-size: 16px;
          padding: 17px 20px;
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
          color: rgba(255, 255, 255, 0.76);
          font-size: 18px;
          line-height: 1.55;
        }

        .contact-box {
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.09);
          border: 1px solid rgba(255, 255, 255, 0.14);
          padding: 24px;
        }

        .contact-line {
          display: block;
          color: rgba(255, 255, 255, 0.78);
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

        .floating-toggle {
          display: none;
        }

        .floating-contact {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 300;
          width: min(390px, calc(100vw - 32px));
          border-radius: 28px;
          background:
            linear-gradient(145deg, rgba(18, 60, 49, 0.98), rgba(13, 41, 35, 0.98)),
            radial-gradient(circle at 20% 0%, rgba(182, 138, 58, 0.28), transparent 38%);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 0 28px 80px rgba(18, 60, 49, 0.34);
          padding: 24px;
          animation: floatingEnter 700ms ease both;
        }

        @keyframes floatingEnter {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .floating-toggle:checked + .floating-contact {
          display: none;
        }

        .floating-close {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 34px;
          height: 34px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 0.86);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 22px;
          line-height: 1;
        }

        .floating-mark {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-weight: 950;
          letter-spacing: -0.05em;
          margin-bottom: 14px;
        }

        .floating-contact h2 {
          margin: 0;
          font-size: 28px;
          line-height: 1.02;
          letter-spacing: -0.05em;
        }

        .floating-contact p {
          margin: 12px 0 0;
          color: rgba(255, 255, 255, 0.76);
          font-size: 15px;
          line-height: 1.5;
        }

        .floating-phone {
          margin-top: 18px;
          display: block;
          border-radius: 18px;
          padding: 15px 16px;
          background: rgba(255, 255, 255, 0.10);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #fff;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-weight: 950;
          text-align: center;
        }

        .floating-actions {
          margin-top: 12px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .floating-actions a {
          border-radius: 999px;
          padding: 12px 14px;
          text-align: center;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 900;
        }

        .floating-primary {
          background: #fff;
          color: var(--green);
        }

        .floating-secondary {
          background: rgba(255, 255, 255, 0.10);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.14);
        }

        @media (max-width: 980px) {
          .hero,
          .section-heading,
          .feature,
          .contact-panel,
          .footer-inner {
            grid-template-columns: 1fr;
          }

          .hero-main {
            min-height: auto;
          }

          .hero-side {
            min-height: auto;
          }

          .portrait {
            min-height: 520px;
          }

          .grid-3,
          .grid-4,
          .trust-inner {
            grid-template-columns: 1fr;
          }

          .photo-card,
          .photo-card-featured {
            grid-column: span 6;
            min-height: 460px;
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
            min-height: 420px;
          }

          .photo-card,
          .photo-card-featured {
            grid-column: span 12;
            min-height: 380px;
          }

          .floating-contact {
            left: 16px;
            right: 16px;
            bottom: 16px;
            width: auto;
          }
        }
      `}</style>

      <div className="topbar">
        <nav className="nav">
          <a className="brand" href="/" aria-label="Strona główna">
            <span className="brand-mark">VR</span>
            <span>
              <span className="brand-title">Kancelaria Mgr Vadym Rekel</span>
              <span className="brand-subtitle">
                Tłumacz przysięgły języka ukraińskiego
              </span>
            </span>
          </a>

          <div className="nav-links">
            <a href="#organy">Dla organów</a>
            <a href="/tlumaczenia-sprawy-karne-ukrainski">Sprawy karne</a>
            <a href="#specjalizacja">Specjalizacja</a>
            <a href="#kancelaria">Kancelaria</a>
            <a href="/kwalifikacje">Kwalifikacje</a>
            <a href="/kontakt">Kontakt</a>
            <a className="nav-phone" href={`tel:${expertPhoneHref}`}>
              {expertPhoneDisplay}
            </a>
          </div>
        </nav>
      </div>

      <section className="hero">
        <div className="hero-main">
          <span className="eyebrow">Kraków · TP/27/17 · język ukraiński</span>

          <h1>Tłumacz przysięgły języka ukraińskiego w Krakowie.</h1>

          <p className="lead">
            Kancelaria Mgr Vadym Rekel. Tłumaczenia poświadczone i ustne języka
            ukraińskiego dla sądów, Policji, prokuratury, kancelarii prawnych,
            instytucji i osób prywatnych.
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
            Siedziba kancelarii: ul. Kielecka 2/53, 31-526 Kraków. Dokumenty do
            wstępnej wyceny można przesłać elektronicznie z całej Polski.
          </p>

          <div className="notice">
            Najważniejsza specjalizacja: język ukraiński, dokumenty procesowe,
            sprawy karne, dokumenty z Ukrainy i materiał cyfrowy.
          </div>

          <div className="signature">Mgr Vadym Rekel</div>
        </div>

        <aside className="hero-side">
          <div className="portrait">
            <img
              src="/images/vadym%20rekel.jpg"
              alt="Mgr Vadym Rekel tłumacz przysięgły języka ukraińskiego Kraków"
            />
          </div>
        </aside>
      </section>

      <section className="trust">
        <div className="trust-inner">
          <div className="trust-item">
            <strong>TP/27/17</strong>
            tłumacz przysięgły języka ukraińskiego
          </div>
          <div className="trust-item">
            <strong>Kraków</strong>
            kancelaria przy ul. Kieleckiej 2/53
          </div>
          <div className="trust-item">
            <strong>Sąd · Policja · Prokuratura</strong>
            dokumenty procesowe i sprawy karne
          </div>
          <div className="trust-item">
            <strong>Zdalna wycena</strong>
            dokumenty z całej Polski elektronicznie
          </div>
        </div>
      </section>

      <section className="section" id="organy">
        <SectionHeading
          label="Dla organów"
          title="Tłumaczenia dla sądu, Policji i prokuratury."
          text="Strona główna pokazuje główne obszary pracy kancelarii. Szczegółowy zakres znajduje się na dedykowanych podstronach."
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
        <SectionHeading
          label="Specjalizacja"
          title="Najczęściej przekazywane materiały."
          text="Główne obszary strony są krótkie i czytelne. Szczegółowy opis pracuje na osobnych podstronach SEO."
        />

        <div className="grid-4">
          {specializationCards.map((item) => (
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
        <div className="feature">
          <div>
            <p className="section-label">Profil kancelarii</p>
            <h2>Prawo, język ukraiński i materiał procesowy.</h2>
          </div>

          <div>
            <p>
              Kancelaria pracuje z dokumentami, które wymagają nie tylko
              przekładu językowego, lecz także rozumienia funkcji dokumentu:
              w aktach sprawy, przy czynnościach procesowych, w korespondencji
              organów albo jako materiał dowodowy.
            </p>

            <div className="labels">
              <span className="label">akta spraw</span>
              <span className="label">protokoły</span>
              <span className="label">dokumenty z Ukrainy</span>
              <span className="label">komunikatory</span>
              <span className="label">raporty PDF</span>
              <span className="label">korespondencja osadzonych</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="kancelaria">
        <SectionHeading
          label="Kancelaria"
          title="Realne miejsce pracy w Krakowie."
          text="Dwa główne zdjęcia są większe i bardziej czytelne. Pozostałe pokazują zaplecze pracy kancelarii."
        />

        <div className="photo-grid">
          {officePhotos.map((photo) => (
            <article
              className={[
                "photo-card",
                photo.featured ? "photo-card-featured" : "",
                photo.emphasis ? "photo-card-emphasis" : ""
              ]
                .filter(Boolean)
                .join(" ")}
              key={photo.src}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="photo-caption">{photo.title}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Kwalifikacje"
          title="TP/27/17 jako główny fundament zaufania."
          text="Kwalifikacje dodatkowe wzmacniają profil specjalistyczny, ale strona główna pozostaje skupiona na usłudze tłumacza przysięgłego języka ukraińskiego."
        />

        <div className="grid-3">
          {qualificationCards.map((item) => (
            <article className="card" key={item.title}>
              <span className="tag">Kwalifikacje</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="hero-actions">
          <a className="button button-secondary" href="/kwalifikacje">
            Zobacz pełne kwalifikacje
          </a>
        </div>
      </section>

      <section className="section" id="kontakt">
        <div className="contact-panel">
          <div>
            <p className="section-label">Kontakt</p>
            <h2>Wyślij dokument albo skontaktuj się telefonicznie.</h2>
            <p>
              Numer 883 040 483 służy do bezpośredniego kontaktu z tłumaczem /
              biegłym. Numer 735 753 383 służy do kontaktu z kancelarią.
              Wszystkie sprawy można zgłaszać na oba numery.
            </p>
          </div>

          <div className="contact-box">
            <span className="contact-line">
              <strong>Tłumacz / biegły:</strong>{" "}
              <a href={`tel:${expertPhoneHref}`}>{expertPhoneDisplay}</a>
            </span>
            <span className="contact-line">
              <strong>Kancelaria:</strong>{" "}
              <a href={`tel:${officePhoneHref}`}>{officePhoneDisplay}</a>
            </span>
            <span className="contact-line">
              <strong>E-mail:</strong> <a href={`mailto:${email}`}>{email}</a>
            </span>
            <span className="contact-line">
              <strong>Adres:</strong> ul. Kielecka 2/53, 31-526 Kraków
            </span>

            <div className="hero-actions">
              <a className="button button-secondary" href="/kontakt">
                Formularz kontaktowy
              </a>
              <a className="button button-secondary" href={`mailto:${email}`}>
                Wyślij e-mail
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <span className="footer-title">Kancelaria Mgr Vadym Rekel</span>
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
              LinkedIn — Mgr Vadym Rekel
            </a>
          </div>
        </div>
      </footer>

      <input
        className="floating-toggle"
        id="close-floating-contact"
        type="checkbox"
        aria-hidden="true"
      />

      <aside className="floating-contact" aria-label="Szybki kontakt z kancelarią">
        <label
          className="floating-close"
          htmlFor="close-floating-contact"
          aria-label="Zamknij okno kontaktu"
        >
          ×
        </label>

        <div className="floating-mark">VR</div>

        <h2>Potrzebujesz tłumacza przysięgłego?</h2>

        <p>
          Zadzwoń lub wyślij dokument do wstępnej wyceny. Obsługa spraw sądowych,
          policyjnych, prokuratorskich, dokumentów z Ukrainy i materiału
          cyfrowego.
        </p>

        <a className="floating-phone" href={`tel:${expertPhoneHref}`}>
          {expertPhoneDisplay}
        </a>

        <div className="floating-actions">
          <a className="floating-primary" href={`tel:${expertPhoneHref}`}>
            Zadzwoń
          </a>
          <a className="floating-secondary" href={`mailto:${email}`}>
            Wyślij e-mail
          </a>
        </div>
      </aside>
    </main>
  );
}