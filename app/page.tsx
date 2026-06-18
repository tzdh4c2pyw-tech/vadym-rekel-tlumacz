import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Tłumacz przysięgły języka ukraińskiego Kraków | Sąd, Policja, Prokuratura",
  description:
    "Kancelaria tłumacza przysięgłego języka ukraińskiego w Krakowie. Vadym Rekel, TP/27/17. Tłumaczenia poświadczone i ustne dla sądów, Policji i prokuratury. Sprawy karne, akta, protokoły, dokumenty z Ukrainy, materiał cyfrowy, komunikatory i korespondencja osadzonych. Obsługa dokumentów z całej Polski zdalnie.",
  keywords: [
    "tłumacz przysięgły języka ukraińskiego",
    "tłumacz przysięgły ukraiński Kraków",
    "kancelaria tłumacza przysięgłego języka ukraińskiego",
    "tłumacz ukraiński sąd",
    "tłumacz ukraiński policja",
    "tłumacz ukraiński prokuratura",
    "tłumaczenie akt sprawy ukraiński",
    "tłumaczenie protokołów ukraiński",
    "tłumaczenie dokumentów z Ukrainy",
    "tłumaczenie korespondencji osadzonych",
    "tłumaczenie komunikatorów ukraiński",
    "tłumaczenie materiału cyfrowego ukraiński",
    "tłumacz przysięgły ukraiński cała Polska"
  ]
};

const email = "biegly@vadymrekel.pl";

const institutionPhoneDisplay = "883 040 483";
const institutionPhoneHref = "+48883040483";

const individualPhoneDisplay = "735 753 383";
const individualPhoneHref = "+48735753383";

const linkedInUrl = "https://www.linkedin.com/in/vadym-rekel/";

const organServices = [
  {
    title: "Sądy",
    href: "/tlumaczenia-sadowe-ukrainski",
    items: [
      "akta spraw",
      "wyroki",
      "postanowienia",
      "protokoły",
      "pisma procesowe",
      "załączniki"
    ]
  },
  {
    title: "Policja",
    href: "/tlumaczenia-dla-policji",
    items: [
      "czynności",
      "pouczenia",
      "notatki urzędowe",
      "protokoły",
      "komunikatory",
      "zrzuty ekranu"
    ]
  },
  {
    title: "Prokuratura",
    href: "/tlumaczenia-dla-prokuratury",
    items: [
      "protokoły przesłuchań",
      "postanowienia",
      "zawiadomienia",
      "materiał dowodowy",
      "pomoc prawna z Ukrainą",
      "akta postępowania przygotowawczego"
    ]
  }
];

const digitalItems = [
  {
    title: "Komunikatory",
    text: "Telegram, WhatsApp, Signal, Messenger, SMS, MMS, e-mail, eksporty rozmów i załączniki."
  },
  {
    title: "Raporty PDF",
    text: "Raporty z telefonu, eksporty danych, zestawienia, tabele, dokumenty wielostronicowe i załączniki do akt."
  },
  {
    title: "Zrzuty ekranu",
    text: "Aplikacje, strony internetowe, panele transakcyjne, rozmowy, zdjęcia i materiały przekazywane jako dowód."
  },
  {
    title: "Oszustwa internetowe",
    text: "Kryptowaluty, portfele, giełdy, AML/KYC, przepływy środków i korespondencja elektroniczna."
  }
];

const ukraineItems = [
  "wnioski o pomoc prawną",
  "odpowiedzi organów ukraińskich",
  "wezwania",
  "pouczenia",
  "postanowienia",
  "protokoły przesłuchań",
  "akty oskarżenia",
  "korespondencja między organami",
  "dokumenty urzędowe z Ukrainy"
];

const oralItems = [
  "przesłuchania",
  "czynności w Policji",
  "czynności w prokuraturze",
  "czynności sądowe",
  "areszty śledcze",
  "zakłady karne",
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
    href: "#lokalizacja"
  },
  {
    title: "Odbiór osobisty",
    text: "Odbiór tłumaczenia w kancelarii jest możliwy po wcześniejszym uzgodnieniu terminu.",
    value: "po uzgodnieniu",
    href: `tel:${institutionPhoneHref}`
  }
];

const officePhotos = [
  {
    src: "/images/kancelaria%20tlumacza%20przysieglego%20stanowisko%20pracy%20vadym%20rekel.jpeg",
    alt: "Kancelaria tłumacza przysięgłego języka ukraińskiego w Krakowie - stanowisko pracy",
    title: "Stanowisko pracy z dokumentami procesowymi"
  },
  {
    src: "/images/kancelaria%20tlumacza%20przysieglego%20stanowisko%20administracyjne%20vadym%20rekel.jpeg",
    alt: "Stanowisko administracyjne w kancelarii tłumacza przysięgłego języka ukraińskiego",
    title: "Obieg dokumentów i korespondencji"
  },
  {
    src: "/images/kancelaria-tlumacza-przysieglego-ukrainski-krakow-vadym-rekel-01.jpg",
    alt: "Kancelaria tłumacza przysięgłego języka ukraińskiego w Krakowie",
    title: "Kancelaria w Krakowie"
  },
  {
    src: "/images/stanowisko-komputerowe-bieglego-tlumacza-macbook-pro-vadym-rekel.jpg",
    alt: "Praca z materiałem cyfrowym i plikami PDF w kancelarii tłumacza przysięgłego",
    title: "Materiał cyfrowy i pliki PDF"
  },
  {
    src: "/images/drukarki-hp-pagewide-kancelaria-tlumacza-vadym-rekel.jpg",
    alt: "Przygotowanie tłumaczeń poświadczonych w kancelarii tłumacza przysięgłego",
    title: "Przygotowanie tłumaczeń poświadczonych"
  }
];

const cities = [
  "Warszawa",
  "Wrocław",
  "Poznań",
  "Gdańsk",
  "Katowice",
  "Łódź",
  "Lublin",
  "Rzeszów",
  "Białystok",
  "Szczecin",
  "Bydgoszcz",
  "Toruń",
  "Kielce",
  "Olsztyn",
  "Opole",
  "Zielona Góra"
];

const faqItems = [
  {
    question: "Który numer wybrać?",
    answer:
      "Sąd, Policja, prokuratura, czynności, akta i materiał dowodowy: 883 040 483. Klienci indywidualni i dokumenty prywatne: 735 753 383."
  },
  {
    question: "Czy dokument można przesłać e-mailem?",
    answer:
      "Tak. Do wstępnej wyceny można przesłać skan, zdjęcie albo plik PDF na adres biegly@vadymrekel.pl."
  },
  {
    question: "Czy można przekazać dokument osobiście w kancelarii?",
    answer:
      "Tak. Dokument można przekazać do kancelarii przy ul. Kieleckiej 2/53 w Krakowie. Termin najlepiej wcześniej uzgodnić."
  },
  {
    question: "Czy możliwy jest odbiór osobisty tłumaczenia?",
    answer:
      "Tak. Odbiór osobisty tłumaczenia w kancelarii jest możliwy po wcześniejszym uzgodnieniu terminu."
  },
  {
    question: "Czy kancelaria obsługuje sądy, Policję i prokuraturę z innych miast?",
    answer:
      "Tak. Kancelaria ma siedzibę w Krakowie, ale dokumenty do wstępnej wyceny można przesłać elektronicznie z całej Polski."
  },
  {
    question: "Czy tłumaczone są komunikatory, zrzuty ekranu i raporty z telefonu?",
    answer:
      "Tak. Zakres obejmuje komunikatory, zrzuty ekranu, raporty PDF, dane z telefonu, e-mail, SMS i inne materiały cyfrowe."
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

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Kancelaria Vadym Rekel - tłumacz przysięgły języka ukraińskiego",
    image: "https://www.tlumaczrosyjskiegoiukrainskiego.pl/images/vadym%20rekel.jpg",
    telephone: institutionPhoneHref,
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
    },
    founder: {
      "@type": "Person",
      name: "Vadym Rekel",
      jobTitle: "Tłumacz przysięgły języka ukraińskiego",
      sameAs: linkedInUrl
    },
    description:
      "Kancelaria tłumacza przysięgłego języka ukraińskiego w Krakowie. Obsługa sądów, Policji i prokuratury. Dokumenty z całej Polski zdalnie."
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
          max-width: 1180px;
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
          box-shadow: 0 10px 25px rgba(18, 60, 49, 0.18);
        }

        .hero {
          max-width: 1180px;
          margin: 0 auto;
          padding: 48px 22px 20px;
          display: grid;
          grid-template-columns: 1.16fr 0.84fr;
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
          font-size: clamp(40px, 5.2vw, 68px);
          line-height: 0.95;
          letter-spacing: -0.065em;
        }

        .lead {
          margin: 22px 0 0;
          max-width: 780px;
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

        .hero-note {
          margin-top: 22px;
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          line-height: 1.55;
        }

        .hero-side {
          border-radius: var(--radius);
          background: linear-gradient(155deg, var(--green), var(--green-dark));
          color: #fff;
          box-shadow: var(--shadow);
          padding: 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 450px;
        }

        .portrait {
          height: 255px;
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
        }

        .portrait img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .profile-card {
          margin-top: 18px;
          border-top: 1px solid rgba(255,255,255,0.16);
          padding-top: 18px;
        }

        .profile-card h2 {
          margin: 0 0 8px;
          color: #fff;
          font-size: 31px;
          line-height: 1;
          letter-spacing: -0.045em;
        }

        .profile-card p {
          margin: 0;
          color: rgba(255,255,255,0.75);
          font-size: 15px;
          line-height: 1.5;
        }

        .trust {
          max-width: 1180px;
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
          max-width: 1180px;
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

        .phone-main {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 64px;
          margin: 18px 0;
          border-radius: 18px;
          background: #fffaf2;
          color: var(--green);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 25px;
          font-weight: 950;
        }

        .phone-gold {
          background: var(--gold);
          color: #17110d;
        }

        .mini-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 18px;
        }

        .mini-action {
          min-height: 40px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 14px;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.14);
          color: #fff;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 900;
        }

        .mini-action-light {
          background: rgba(255,255,255,0.58);
          color: var(--ink);
          border-color: var(--line);
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

        .photo-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 0.8fr;
          gap: 14px;
        }

        .photo-card {
          position: relative;
          min-height: 260px;
          border-radius: 24px;
          overflow: hidden;
          background: var(--paper-soft);
          border: 1px solid var(--line);
          box-shadow: 0 14px 34px rgba(25, 22, 18, 0.055);
        }

        .photo-card:first-child {
          grid-row: span 2;
          min-height: 536px;
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
          transform: translateY(8px);
          opacity: 0.92;
          transition: transform 260ms ease, opacity 260ms ease;
        }

        .photo-card:hover .photo-caption {
          transform: translateY(0);
          opacity: 1;
        }

        .city-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 22px;
        }

        .city-chip {
          border-radius: 999px;
          padding: 9px 13px;
          background: rgba(255,250,242,0.78);
          border: 1px solid var(--line);
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 850;
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
          max-width: 1180px;
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

        @media (max-width: 1080px) {
          .hero,
          .section-heading,
          .feature,
          .footer-inner {
            grid-template-columns: 1fr;
          }

          .grid-4,
          .photo-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .grid-3 {
            grid-template-columns: 1fr;
          }

          .photo-card:first-child {
            grid-row: span 1;
            min-height: 300px;
          }
        }

        @media (max-width: 860px) {
          .nav-links {
            display: none;
          }

          .grid-2 {
            grid-template-columns: 1fr;
          }

          .hero-main,
          .hero-side,
          .feature {
            padding: 28px;
          }

          h1 {
            font-size: 42px;
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

          .grid-4,
          .photo-grid {
            grid-template-columns: 1fr;
          }

          .button,
          .phone-main {
            width: 100%;
          }

          .portrait {
            height: 280px;
          }

          .photo-card,
          .photo-card:first-child {
            min-height: 255px;
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
            <a href="#dla-organow">Dla organów</a>
            <a href="#sprawy-karne">Sprawy karne</a>
            <a href="#material-cyfrowy">Materiał cyfrowy</a>
            <a href="#ukraina">Dokumenty z Ukrainy</a>
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
            Kraków · TP/27/17 · dokumenty z całej Polski zdalnie
          </span>

          <h1>
            Tłumacz przysięgły języka ukraińskiego w Krakowie — sąd, Policja,
            prokuratura i dokumenty z całej Polski
          </h1>

          <p className="lead">
            Kancelaria tłumacza przysięgłego języka ukraińskiego TP/27/17.
            Tłumaczenia poświadczone i ustne w sprawach karnych, sądowych,
            policyjnych i prokuratorskich: akta spraw, protokoły, dokumenty z
            Ukrainy, komunikatory, dane z telefonu, raporty PDF i korespondencja
            osadzonych.
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
            wstępnej wyceny można przesłać elektronicznie z dowolnego miasta w
            Polsce.
          </p>
        </div>

        <aside className="hero-side">
          <div className="portrait">
            <img
              src="/images/vadym%20rekel.jpg"
              alt="Vadym Rekel tłumacz przysięgły języka ukraińskiego Kraków"
            />
          </div>

          <div className="profile-card">
            <h2>Vadym Rekel</h2>
            <p>
              Tłumacz przysięgły języka ukraińskiego. Numer wpisu: TP/27/17.
              Kancelaria w Krakowie. Dokumenty z całej Polski zdalnie.
            </p>
          </div>
        </aside>
      </section>

      <section className="trust">
        <div className="trust-inner">
          TP/27/17 · kancelaria w Krakowie · język ukraiński przysięgły ·
          rosyjski i angielski specjalistycznie · dokumenty z całej Polski
          zdalnie
        </div>
      </section>

      <section className="section" id="kontakt">
        <SectionHeading
          label="Kontakt"
          title="Najpierw właściwy kontakt do sprawy."
          text="Sprawy kierowane przez Sąd, Policję i Prokuraturę obsługiwane są przez osobny kontakt. Dokumenty prywatne i urzędowe mają oddzielny numer."
        />

        <div className="grid-2">
          <article className="card card-dark">
            <span className="tag">Sąd · Policja · Prokuratura</span>
            <h3>Sprawy karne, czynności i materiał dowodowy.</h3>

            <a className="phone-main" href={`tel:${institutionPhoneHref}`}>
              {institutionPhoneDisplay}
            </a>

            <p>
              Czynności procesowe, przesłuchania, protokoły, akta spraw,
              materiał dowodowy, komunikatory i dokumenty z Ukrainy.
            </p>

            <div className="mini-actions">
              <a className="mini-action" href={`mailto:${email}`}>
                Napisz e-mail
              </a>
              <a className="mini-action" href="#dla-organow">
                Zakres dla organów
              </a>
            </div>
          </article>

          <article className="card">
            <span className="tag">Klienci indywidualni</span>
            <h3>Dokumenty prywatne i urzędowe.</h3>

            <a className="phone-main phone-gold" href={`tel:${individualPhoneHref}`}>
              {individualPhoneDisplay}
            </a>

            <p>
              Dokumenty prywatne, urzędowe, pobytowe, rodzinne i dokumenty z
              Ukrainy.
            </p>

            <div className="mini-actions">
              <a className="mini-action mini-action-light" href={`mailto:${email}`}>
                Wyślij dokument
              </a>
              <a className="mini-action mini-action-light" href="#przekazanie">
                Jak przekazać dokument?
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="dla-organow">
        <SectionHeading
          label="Dla organów"
          title="Tłumaczenia dla sądów, Policji i prokuratury."
          text="Zakres obejmuje dokumenty i wypowiedzi, które mogą mieć znaczenie procesowe, dowodowe albo urzędowe."
        />

        <div className="grid-3">
          {organServices.map((item) => (
            <article className="card" key={item.title}>
              <span className="tag">Tłumaczenia dla</span>
              <h3>{item.title}</h3>

              <ul className="list">
                {item.items.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>

              <a className="card-link" href={item.href}>
                Zobacz zakres →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="sprawy-karne">
        <div className="feature">
          <div>
            <p className="section-label">Sprawy karne</p>
            <h2>
              Tłumaczenia w sprawach karnych, oszustwach internetowych i
              materiale cyfrowym.
            </h2>
          </div>

          <div>
            <p>
              Kancelaria pracuje z dokumentami i materiałami występującymi w
              sprawach dotyczących oszustw internetowych, przepływów środków,
              komunikatorów, kryptowalut, danych z telefonu, raportów PDF,
              zrzutów ekranu oraz korespondencji elektronicznej.
            </p>

            <p style={{ marginTop: 16 }}>
              W ramach odrębnego przygotowania technicznego możliwa jest praca
              z materiałem cyfrowym, w tym danymi z telefonu, a następnie
              tłumaczenie treści istotnych dla sprawy.
            </p>

            <div className="labels">
              {[
                "sprawy karne",
                "oszustwa internetowe",
                "komunikatory",
                "raporty PDF",
                "dane z telefonu",
                "kryptowaluty"
              ].map((item) => (
                <span className="label" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="material-cyfrowy">
        <SectionHeading
          label="Materiał cyfrowy"
          title="Komunikatory, raporty PDF, dane z telefonu i zrzuty ekranu."
          text="Tłumaczenie materiału cyfrowego może obejmować zarówno treść rozmów, jak i raporty, załączniki, eksporty danych oraz opisy kontekstu technicznego."
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

      <section className="section" id="ukraina">
        <SectionHeading
          label="Ukraina"
          title="Dokumenty z Ukrainy i pomoc prawna."
          text="Zakres obejmuje dokumenty urzędowe, procesowe i korespondencję między organami w sprawach transgranicznych."
        />

        <div className="grid-2">
          <article className="card">
            <span className="tag">Dokumenty z Ukrainy</span>
            <h3>Dokumenty urzędowe i procesowe.</h3>
            <p>
              Tłumaczenia dokumentów pochodzących z Ukrainy albo kierowanych do
              organów ukraińskich.
            </p>
          </article>

          <article className="card">
            <span className="tag">Pomoc prawna</span>
            <h3>Wnioski, odpowiedzi i korespondencja między organami.</h3>

            <ul className="list">
              {ukraineItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Korespondencja osadzonych"
          title="Korespondencja osadzonych i pisma odręczne."
          text="Tłumaczenie listów, skarg, próśb, oświadczeń, wyjaśnień i pism do sądu lub prokuratury."
        />

        <div className="grid-2">
          <article className="card">
            <span className="tag">Pisma odręczne</span>
            <h3>Trudne pismo, skróty i język potoczny.</h3>
            <p>
              W takich materiałach znaczenie ma zachowanie sensu, tonu,
              struktury wypowiedzi oraz praca z trudnym pismem odręcznym.
            </p>
          </article>

          <article className="card">
            <span className="tag">Zakres</span>
            <h3>Listy, skargi, prośby i wyjaśnienia.</h3>
            <ul className="list">
              {[
                "listy prywatne",
                "skargi",
                "prośby",
                "oświadczenia",
                "wyjaśnienia",
                "pisma do sądu",
                "pisma do prokuratury"
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          label="Tłumaczenia ustne"
          title="Tłumaczenia ustne języka ukraińskiego przy czynnościach."
          text="Obsługa czynności procesowych, przesłuchań i czynności w jednostkach Policji, prokuraturze, sądzie, aresztach śledczych i zakładach karnych."
        />

        <article className="card">
          <ul className="list">
            {oralItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section" id="przekazanie">
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

      <section className="section" id="kancelaria">
        <SectionHeading
          label="Kancelaria"
          title="Kancelaria tłumacza przysięgłego języka ukraińskiego w Krakowie."
          text="Realne miejsce pracy z dokumentami poświadczonymi, procesowymi, urzędowymi i materiałem cyfrowym."
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

      <section className="section" id="kwalifikacje">
        <SectionHeading
          label="Uprawnienia"
          title="Uprawnienia tłumacza przysięgłego języka ukraińskiego."
          text="Vadym Rekel jest wpisany na listę tłumaczy przysięgłych języka ukraińskiego pod numerem TP/27/17."
        />

        <div className="grid-2">
          <article className="card">
            <span className="tag">TP/27/17</span>
            <h3>Tłumacz przysięgły języka ukraińskiego.</h3>
            <p>
              Kancelaria specjalizuje się w dokumentach procesowych, sprawach
              karnych, materiale cyfrowym i dokumentach z Ukrainy.
            </p>
          </article>

          <article className="card">
            <span className="tag">Kwalifikacje</span>
            <h3>Pełny profil zawodowy.</h3>
            <p>
              Dokumenty potwierdzające kwalifikacje, przygotowanie specjalistyczne
              i profil zawodowy znajdują się na osobnej stronie.
            </p>

            <div className="mini-actions">
              <a className="mini-action mini-action-light" href="/kwalifikacje">
                Zobacz kwalifikacje
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="lokalizacja">
        <SectionHeading
          label="Kraków · cała Polska"
          title="Kancelaria w Krakowie — dokumenty z całej Polski zdalnie."
          text="Siedziba kancelarii znajduje się przy ul. Kieleckiej 2/53 w Krakowie. Dokumenty do wstępnej wyceny można przesłać elektronicznie z dowolnego miasta w Polsce."
        />

        <div className="city-grid">
          {cities.map((city) => (
            <span className="city-chip" key={city}>
              {city}
            </span>
          ))}
        </div>

        <p className="note">
          Lista miast oznacza możliwość zdalnego przesłania dokumentów do
          wyceny, a nie dodatkowe siedziby kancelarii.
        </p>
      </section>

      <section className="section">
        <SectionHeading
          label="FAQ"
          title="Najczęstsze pytania."
          text="Krótko o kontakcie, dokumentach elektronicznych, odbiorze osobistym, materiale cyfrowym i zakresie języków."
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
              aria-label="LinkedIn Vadym Rekel"
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