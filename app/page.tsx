import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Tłumacz przysięgły języka ukraińskiego dla Sądu, Policji i Prokuratury | Kraków",
  description:
    "Kancelaria tłumacza przysięgłego języka ukraińskiego w Krakowie. Tłumaczenia poświadczone i ustne dla Sądu, Policji i Prokuratury. Akta spraw, protokoły, czynności procesowe, dokumenty z Ukrainy, komunikatory i materiał cyfrowy.",
  keywords: [
    "tłumacz przysięgły języka ukraińskiego",
    "tłumacz przysięgły ukraiński Kraków",
    "tłumacz ukraiński sąd",
    "tłumacz ukraiński Policja",
    "tłumacz ukraiński prokuratura",
    "kancelaria tłumacza przysięgłego języka ukraińskiego",
    "tłumaczenie akt sprawy ukraiński",
    "tłumaczenie protokołów ukraiński",
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

const organs = [
  {
    title: "Sądy",
    href: "/tlumaczenia-dla-sadow-ukrainski",
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
    title: "Prokuratura",
    href: "/tlumaczenia-dla-prokuratury",
    items: [
      "protokoły przesłuchań",
      "postanowienia",
      "wnioski",
      "zawiadomienia",
      "pomoc prawna z Ukrainą",
      "materiał dowodowy"
    ]
  },
  {
    title: "Policja",
    href: "/tlumaczenia-dla-policji",
    items: [
      "czynności",
      "pouczenia",
      "notatki",
      "komunikatory",
      "zrzuty ekranu",
      "nagrania"
    ]
  }
];

const digitalItems = [
  {
    code: "CHAT",
    title: "Komunikatory",
    text: "Telegram, WhatsApp, Signal, Messenger, Viber, SMS, MMS, e-mail, eksporty rozmów i załączniki."
  },
  {
    code: "PDF",
    title: "Raporty i duże pliki",
    text: "Raporty PDF, eksporty danych, zestawienia, tabele, dokumenty wielostronicowe i załączniki do akt."
  },
  {
    code: "SCREEN",
    title: "Zrzuty ekranu",
    text: "Zrzuty z telefonu, komunikatorów, stron internetowych, aplikacji, systemów transakcyjnych i paneli użytkownika."
  },
  {
    code: "CRYPTO",
    title: "Oszustwa internetowe i kryptowaluty",
    text: "Materiały dotyczące transakcji cyfrowych, giełd, portfeli, AML/KYC i przepływów środków."
  }
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

const inmateItems = [
  "pisma odręczne",
  "listy",
  "skargi",
  "wyjaśnienia",
  "korespondencja procesowa",
  "pisma do sądu",
  "pisma do prokuratury"
];

const quoteSteps = [
  {
    number: "01",
    title: "Prześlij plik",
    text: "Wyraźny skan, zdjęcie albo plik PDF. Przy większych aktach można wskazać wybrane fragmenty."
  },
  {
    number: "02",
    title: "Podaj cel",
    text: "Napisz, czy dokument ma być wykorzystany w sądzie, urzędzie, postępowaniu, czynności albo sprawie prywatnej."
  },
  {
    number: "03",
    title: "Wskaż termin",
    text: "Jeżeli sprawa jest pilna, podaj oczekiwany termin i sposób odbioru albo przekazania tłumaczenia."
  },
  {
    number: "04",
    title: "Otrzymaj wycenę",
    text: "Po sprawdzeniu materiału otrzymasz informację o koszcie, terminie i dalszym trybie pracy."
  }
];

const officePhotos = [
  {
    src: "/images/kancelaria%20tlumacza%20przysieglego%20stanowisko%20pracy%20vadym%20rekel.jpeg",
    alt: "Vadym Rekel przy stanowisku pracy w kancelarii tłumacza przysięgłego języka ukraińskiego w Krakowie",
    title: "Stanowisko pracy tłumacza",
    text: "Dokumenty procesowe, urzędowe, poświadczone i materiały formalne."
  },
  {
    src: "/images/kancelaria%20tlumacza%20przysieglego%20stanowisko%20administracyjne%20vadym%20rekel.jpeg",
    alt: "Stanowisko administracyjne w kancelarii tłumacza przysięgłego Vadym Rekel",
    title: "Stanowisko administracyjne",
    text: "Korespondencja, pieczęcie, kompletowanie dokumentów i przygotowanie materiałów."
  },
  {
    src: "/images/kancelaria-tlumacza-przysieglego-ukrainski-krakow-vadym-rekel-01.jpg",
    alt: "Kancelaria tłumacza przysięgłego języka ukraińskiego w Krakowie",
    title: "Kancelaria w Krakowie",
    text: "Miejsce pracy z dokumentami poświadczonymi, procesowymi i urzędowymi."
  },
  {
    src: "/images/stanowisko-komputerowe-bieglego-tlumacza-macbook-pro-vadym-rekel.jpg",
    alt: "Stanowisko komputerowe do pracy z materiałem cyfrowym i dokumentami PDF",
    title: "Materiał cyfrowy",
    text: "Pliki PDF, raporty, komunikatory, zrzuty ekranu i większe zbiory danych."
  }
];

const qualifications = [
  "Tłumacz przysięgły języka ukraińskiego, TP/27/17",
  "CIOL no. 94280",
  "TEPIS Member 2026",
  "MBA",
  "Prawo nowych technologii",
  "Prawo własności intelektualnej i nowych technologii",
  "Prawo karne materialne i procesowe"
];

const cities = [
  "Warszawa",
  "Kraków",
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

const nearbyPlaces = [
  {
    number: "01",
    title: "Sąd Okręgowy w Krakowie",
    address: "ul. Przy Rondzie 7",
    note: "ok. 600 m od kancelarii",
    href: "https://www.google.com/maps/dir/Kielecka+2%2F53,+31-526+Krak%C3%B3w/S%C4%85d+Okr%C4%99gowy+w+Krakowie,+Przy+Rondzie+7,+31-547+Krak%C3%B3w/"
  },
  {
    number: "02",
    title: "Prokuratura Okręgowa w Krakowie",
    address: "ul. Lubicz 25",
    note: "ok. 650 m od kancelarii",
    href: "https://www.google.com/maps/dir/Kielecka+2%2F53,+31-526+Krak%C3%B3w/Prokuratura+Okr%C4%99gowa+w+Krakowie,+Lubicz+25,+31-503+Krak%C3%B3w/"
  },
  {
    number: "03",
    title: "Małopolski Urząd Wojewódzki",
    address: "ul. Przy Rondzie 6",
    note: "okolice Ronda Mogilskiego",
    href: "https://www.google.com/maps/dir/Kielecka+2%2F53,+31-526+Krak%C3%B3w/Przy+Rondzie+6,+31-547+Krak%C3%B3w/"
  },
  {
    number: "04",
    title: "Konsulat Ukrainy w Krakowie",
    address: "al. Beliny-Prażmowskiego 4",
    note: "dogodny dojazd z Ronda Mogilskiego",
    href: "https://www.google.com/maps/dir/Kielecka+2%2F53,+31-526+Krak%C3%B3w/Aleja+Pu%C5%82kownika+W%C5%82adys%C5%82awa+Beliny-Pra%C5%BAsmowskiego+4,+31-514+Krak%C3%B3w/"
  }
];

const faqItems = [
  {
    question: "Który numer wybrać?",
    answer:
      "Sąd, Policja, prokuratura, czynności, akta i materiał dowodowy: 883 040 483. Klienci indywidualni i dokumenty prywatne: 735 753 383."
  },
  {
    question: "Czy dokument można przesłać elektronicznie?",
    answer:
      "Tak. Do wstępnej wyceny wystarczy skan, zdjęcie albo plik PDF. Przy większych aktach warto wskazać właściwy zakres tłumaczenia."
  },
  {
    question: "Czy tłumaczone są komunikatory i zrzuty ekranu?",
    answer:
      "Tak. Kancelaria pracuje z komunikatorami, zrzutami ekranu, raportami PDF, korespondencją i innymi materiałami cyfrowymi."
  },
  {
    question: "Czy rosyjski i angielski są tłumaczeniami przysięgłymi?",
    answer:
      "Uprawnienia tłumacza przysięgłego dotyczą języka ukraińskiego. Rosyjski i angielski są oferowane jako tłumaczenia specjalistyczne."
  }
];

function SectionHeading({
  kicker,
  title,
  text
}: {
  kicker: string;
  title: string;
  text: string;
}) {
  return (
    <div className="section-heading">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <style>{`
        :root {
          --bg: #f5f0e6;
          --paper: #fffaf2;
          --paper-2: #f8f1e6;
          --ink: #13100c;
          --muted: #6e6256;
          --line: rgba(19, 16, 12, 0.14);
          --green: #123c31;
          --green-2: #0d2923;
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
            radial-gradient(circle at 5% 0%, rgba(182, 138, 58, 0.12), transparent 30%),
            linear-gradient(180deg, #f8f3ea 0%, var(--bg) 48%, #f1ebdf 100%);
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
          backdrop-filter: blur(18px);
          background: rgba(245, 240, 230, 0.94);
          border-bottom: 1px solid var(--line);
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
          gap: 14px;
        }

        .brand-mark {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--green);
          color: #fff;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-weight: 950;
          letter-spacing: -0.05em;
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
          margin-top: 4px;
          color: var(--muted);
          font-size: 12px;
          font-weight: 650;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 16px;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: var(--muted);
        }

        .nav-links a:hover {
          color: var(--ink);
        }

        .nav-cta {
          padding: 12px 18px;
          border-radius: 999px;
          background: var(--green);
          color: #fff;
          box-shadow: 0 10px 25px rgba(18, 60, 49, 0.18);
        }

        .hero {
          max-width: 1180px;
          margin: 0 auto;
          padding: 48px 22px 18px;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
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
          max-width: 780px;
          font-size: clamp(40px, 5vw, 68px);
          line-height: 0.95;
          letter-spacing: -0.065em;
        }

        .lead {
          margin: 22px 0 0;
          max-width: 760px;
          color: var(--muted);
          font-size: 20px;
          line-height: 1.52;
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
        }

        .button-primary {
          background: var(--green);
          color: #fff;
          box-shadow: 0 14px 30px rgba(18, 60, 49, 0.18);
        }

        .button-secondary {
          background: rgba(255,255,255,0.68);
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

        .hero-card {
          border-radius: var(--radius);
          background: linear-gradient(155deg, var(--green), var(--green-2));
          color: #fff;
          padding: 24px;
          box-shadow: var(--shadow);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 410px;
        }

        .portrait {
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          height: 230px;
        }

        .portrait img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .profile-small {
          margin-top: 18px;
          border-top: 1px solid rgba(255,255,255,0.16);
          padding-top: 18px;
        }

        .profile-small h2 {
          margin: 0 0 8px;
          color: #fff;
          font-size: 30px;
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .profile-small p {
          margin: 0;
          color: rgba(255,255,255,0.74);
          font-size: 15px;
          line-height: 1.5;
        }

        .trust-bar {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 22px 24px;
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
          grid-template-columns: 0.9fr 1.1fr;
          gap: 28px;
          align-items: end;
          margin-bottom: 26px;
        }

        .kicker {
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

        .section-heading p:last-child {
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
          background: rgba(255,250,242,0.80);
          box-shadow: 0 14px 34px rgba(25, 22, 18, 0.055);
          padding: 26px;
        }

        .card-dark {
          background: linear-gradient(150deg, var(--green), var(--green-2));
          color: #fff;
          border-color: rgba(255,255,255,0.12);
        }

        .card-petrol {
          background:
            linear-gradient(150deg, rgba(29, 62, 74, 0.96), rgba(16, 41, 50, 0.98)),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 20px);
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
          color: rgba(255,255,255,0.74);
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

        .light-action {
          background: rgba(255,255,255,0.58);
          color: var(--ink);
          border-color: var(--line);
        }

        .contact-hint {
          margin-top: 14px;
          padding: 14px 18px;
          border-radius: 18px;
          border: 1px solid var(--line);
          background: rgba(255,250,242,0.68);
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 800;
          line-height: 1.5;
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

        .manifest {
          border-radius: var(--radius);
          background: var(--ink);
          color: #fff;
          padding: 40px;
          box-shadow: var(--shadow);
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 30px;
          align-items: center;
        }

        .manifest h2 {
          margin: 0;
          color: #fff;
          font-size: clamp(34px, 4vw, 56px);
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .manifest p {
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

        .digital-code {
          display: inline-flex;
          margin-bottom: 14px;
          padding: 7px 10px;
          border-radius: 10px;
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.72);
          border: 1px solid rgba(255,255,255,0.12);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
          font-size: 12px;
          letter-spacing: 0.08em;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .step {
          border-radius: 20px;
          background: rgba(255,250,242,0.78);
          border: 1px solid var(--line);
          padding: 18px;
        }

        .step span {
          display: inline-flex;
          margin-bottom: 10px;
          color: var(--gold-dark);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 950;
        }

        .step h3 {
          margin: 0 0 8px;
          color: var(--ink);
          font-size: 20px;
          letter-spacing: -0.03em;
        }

        .step p {
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.5;
        }

        .photo-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .photo-card {
          padding: 0;
          overflow: hidden;
        }

        .photo {
          height: 220px;
          background: var(--paper-2);
          overflow: hidden;
        }

        .photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .photo-content {
          padding: 18px;
        }

        .photo-content h3 {
          font-size: 21px;
        }

        .profile-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 16px;
        }

        .language-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 20px;
        }

        .language-item {
          border-radius: 16px;
          background: rgba(255,250,242,0.78);
          border: 1px solid var(--line);
          padding: 14px;
        }

        .language-item strong {
          display: block;
          color: var(--ink);
          font-size: 20px;
          letter-spacing: -0.04em;
          line-height: 1.05;
        }

        .language-item span {
          display: block;
          margin-top: 6px;
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .registry {
          display: grid;
          gap: 10px;
        }

        .registry-row {
          display: grid;
          grid-template-columns: 54px 1fr;
          gap: 14px;
          align-items: center;
          padding: 15px 18px;
          border-radius: 18px;
          background: rgba(255,250,242,0.78);
          border: 1px solid var(--line);
        }

        .registry-number {
          color: var(--gold-dark);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 950;
        }

        .registry-text {
          color: var(--ink);
          font-size: 16px;
          line-height: 1.35;
          font-weight: 700;
        }

        .map-card {
          border-radius: var(--radius);
          background: rgba(255, 250, 242, 0.86);
          border: 1px solid rgba(176, 138, 60, 0.36);
          box-shadow: var(--shadow);
          padding: 30px;
        }

        .map-layout {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 18px;
          margin-top: 22px;
        }

        .map-frame {
          position: relative;
          width: 100%;
          min-height: 430px;
          overflow: hidden;
          border-radius: 20px;
          border: 1px solid rgba(176, 138, 60, 0.30);
          background: #f8f1e6;
        }

        .map-frame iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .nearby-grid {
          display: grid;
          gap: 10px;
        }

        .nearby-item {
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 12px;
          padding: 14px;
          border-radius: 16px;
          border: 1px solid rgba(176, 138, 60, 0.26);
          background: rgba(255, 255, 255, 0.52);
        }

        .nearby-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--green-soft);
          color: var(--green);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 950;
        }

        .nearby-item h3 {
          margin: 0 0 4px;
          font-size: 16px;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .nearby-item p {
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.45;
        }

        .nearby-link {
          display: inline-flex;
          margin-top: 7px;
          color: var(--gold-dark);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 900;
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

        .city-note {
          margin-top: 18px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.55;
        }

        .faq-contact-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 18px;
          align-items: start;
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
          padding: 34px 22px 60px;
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

        .footer-linkedin-icon {
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
          .manifest,
          .profile-grid,
          .map-layout,
          .faq-contact-grid,
          .footer-inner {
            grid-template-columns: 1fr;
          }

          .grid-4,
          .photo-grid,
          .steps {
            grid-template-columns: repeat(2, 1fr);
          }

          .grid-3 {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 860px) {
          .nav-links {
            display: none;
          }

          .grid-2,
          .language-strip {
            grid-template-columns: 1fr;
          }

          .hero-main,
          .hero-card,
          .manifest,
          .map-card {
            padding: 26px;
          }

          h1 {
            font-size: 42px;
          }
        }

        @media (max-width: 620px) {
          .hero,
          .section,
          .trust-bar {
            padding-left: 16px;
            padding-right: 16px;
          }

          .hero {
            padding-top: 34px;
          }

          .grid-4,
          .photo-grid,
          .steps {
            grid-template-columns: 1fr;
          }

          .button,
          .phone-main {
            width: 100%;
          }

          .portrait {
            height: 280px;
          }

          .map-frame {
            min-height: 340px;
          }

          .footer {
            padding-bottom: 34px;
          }
        }
      `}</style>

      <div className="topbar">
        <nav className="nav">
          <a className="brand" href="/" aria-label="Strona główna">
            <span className="brand-mark">VR</span>
            <span className="brand-title">
              Kancelaria Vadym Rekel
              <span className="brand-subtitle">
                Tłumacz przysięgły języka ukraińskiego
              </span>
            </span>
          </a>

          <div className="nav-links">
            <a href="#kontakt">Kontakt</a>
            <a href="#dla-organow">Dla organów</a>
            <a href="#material-cyfrowy">Materiał cyfrowy</a>
            <a href="#kancelaria">Kancelaria</a>
            <a href="/kwalifikacje">Kwalifikacje</a>
            <a className="nav-cta" href={`tel:${institutionPhoneHref}`}>
              {institutionPhoneDisplay}
            </a>
          </div>
        </nav>
      </div>

      <section className="hero">
        <div className="hero-main">
          <span className="eyebrow">
            Kraków · dokumenty elektronicznie z całej Polski
          </span>

          <h1>
            Kancelaria tłumacza przysięgłego języka ukraińskiego dla Sądu,
            Policji i Prokuratury.
          </h1>

          <p className="lead">
            Tłumaczenia poświadczone i ustne. Akta spraw, protokoły, czynności
            procesowe, dokumenty z Ukrainy, komunikatory i materiał cyfrowy.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={`tel:${institutionPhoneHref}`}>
              {institutionPhoneDisplay} — kontakt dla organów
            </a>
            <a className="button button-secondary" href={`mailto:${email}`}>
              Wyślij dokument do wyceny
            </a>
          </div>

          <p className="hero-note">
            Siedziba kancelarii: ul. Kielecka 2/53, 31-526 Kraków. Dokumenty do
            wstępnej wyceny można przesłać elektronicznie z dowolnego miejsca w
            Polsce.
          </p>
        </div>

        <aside className="hero-card">
          <div className="portrait">
            <img
              src="/images/vadym%20rekel.jpg"
              alt="Vadym Rekel tłumacz przysięgły języka ukraińskiego Kraków"
            />
          </div>

          <div className="profile-small">
            <h2>Vadym Rekel</h2>
            <p>
              Tłumacz przysięgły języka ukraińskiego, TP/27/17. CIOL no. 94280.
              TEPIS Member 2026. Kraków.
            </p>
          </div>
        </aside>
      </section>

      <section className="trust-bar" aria-label="Dane zawodowe kancelarii">
        <div className="trust-inner">
          TP/27/17 · CIOL no. 94280 · TEPIS Member 2026 · Kraków · dokumenty
          elektronicznie z całej Polski
        </div>
      </section>

      <section className="section" id="kontakt">
        <SectionHeading
          kicker="Kontakt"
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
              komunikatory, zrzuty ekranu, raporty PDF i materiały do akt.
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
              Akty stanu cywilnego, pełnomocnictwa, oświadczenia, dokumenty
              pobytowe, rodzinne i dokumenty z Ukrainy.
            </p>

            <div className="mini-actions">
              <a className="mini-action light-action" href={`mailto:${email}`}>
                Wyślij dokument
              </a>
              <a className="mini-action light-action" href="#wycena">
                Jak przygotować?
              </a>
            </div>
          </article>
        </div>

        <div className="contact-hint">
          Nie wiesz, który kontakt wybrać? Czynność, akta, sąd, Policja albo
          prokuratura → {institutionPhoneDisplay}. Dokument prywatny lub
          urzędowy → {individualPhoneDisplay}.
        </div>
      </section>

      <section className="section" id="dla-organow">
        <SectionHeading
          kicker="Dla organów"
          title="Tłumaczenia dla Sądu, Policji i Prokuratury."
          text="Zakres obejmuje dokumenty i wypowiedzi, które mogą mieć znaczenie procesowe, dowodowe albo urzędowe."
        />

        <div className="grid-3">
          {organs.map((item) => (
            <article className="card" key={item.title}>
              <span className="tag">{item.title}</span>
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

      <section className="section">
        <div className="manifest">
          <div>
            <p className="kicker">Dokument w sprawie</p>
            <h2>Nie każdy dokument jest zwykłym dokumentem.</h2>
          </div>

          <div>
            <p>
              W sprawie dokument może być protokołem, dowodem, załącznikiem,
              zapisem rozmowy, raportem technicznym, pismem odręcznym albo
              korespondencją. Znaczenie ma kontekst, terminologia i sposób
              przekazania materiału.
            </p>

            <div className="labels">
              {[
                "protokół",
                "dowód",
                "załącznik",
                "raport",
                "komunikator",
                "pismo odręczne",
                "akta",
                "korespondencja"
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
          kicker="Materiał cyfrowy"
          title="Tłumaczenie materiału cyfrowego z języka ukraińskiego."
          text="Komunikatory, raporty PDF, zrzuty ekranu, dane z telefonu, e-mail, SMS, Telegram, WhatsApp, Signal oraz materiały dotyczące oszustw internetowych."
        />

        <div className="grid-4">
          {digitalItems.map((item) => (
            <article className="card card-petrol" key={item.title}>
              <span className="digital-code">{item.code}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          kicker="Czynności i osadzeni"
          title="Tłumaczenia ustne oraz korespondencja osadzonych."
          text="Obsługa czynności procesowych i dokumentów pisanych ręcznie, skrótowo, potocznie albo trudnych do odczytania."
        />

        <div className="grid-2">
          <article className="card">
            <span className="tag">Tłumaczenia ustne</span>
            <h3>Czynności procesowe.</h3>
            <p>
              Przesłuchania, czynności w Policji, prokuraturze, sądzie,
              aresztach śledczych i zakładach karnych.
            </p>

            <ul className="list">
              {oralItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card">
            <span className="tag">Korespondencja osadzonych</span>
            <h3>Pisma odręczne, listy, skargi i wyjaśnienia.</h3>
            <p>
              Tłumaczenie z zachowaniem sensu, struktury i tonu wypowiedzi,
              także wtedy, gdy język jest potoczny albo emocjonalny.
            </p>

            <ul className="list">
              {inmateItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section" id="wycena">
        <SectionHeading
          kicker="Wycena"
          title="Jak przygotować dokument do wstępnej wyceny?"
          text="Do oceny kosztu i terminu wystarczy przesłać dokument albo krótki opis czynności. Przy większych aktach warto wskazać właściwy zakres."
        />

        <div className="steps">
          {quoteSteps.map((step) => (
            <article className="step" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <div className="hero-actions">
          <a className="button button-primary" href={`mailto:${email}`}>
            Wyślij dokument do wyceny
          </a>
        </div>
      </section>

      <section className="section" id="kancelaria">
        <SectionHeading
          kicker="Kancelaria"
          title="Kancelaria i obieg dokumentów."
          text="Realne miejsce pracy z dokumentami procesowymi, poświadczonymi, urzędowymi i materiałem cyfrowym."
        />

        <div className="photo-grid">
          {officePhotos.map((item) => (
            <article className="card photo-card" key={item.src}>
              <div className="photo">
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
              <div className="photo-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="kwalifikacje">
        <SectionHeading
          kicker="Kwalifikacje"
          title="Uprawnienia zawodowe i przygotowanie specjalistyczne."
          text="Najważniejsze dane zawodowe i kwalifikacje. Pełne dokumenty znajdują się na stronie kwalifikacji."
        />

        <div className="profile-grid">
          <article className="card">
            <span className="tag">Profil zawodowy</span>
            <h3>Tłumacz przysięgły języka ukraińskiego.</h3>
            <p>
              Dokumenty procesowe, materiał dowodowy, czynności ustne, dokumenty
              transgraniczne z Ukrainą oraz treści specjalistyczne.
            </p>

            <div className="language-strip">
              <div className="language-item">
                <strong>Ukraiński</strong>
                <span>przysięgły i specjalistyczny</span>
              </div>
              <div className="language-item">
                <strong>Rosyjski</strong>
                <span>specjalistyczny</span>
              </div>
              <div className="language-item">
                <strong>Angielski</strong>
                <span>specjalistyczny</span>
              </div>
            </div>
          </article>

          <div className="registry">
            {qualifications.map((item, index) => (
              <div className="registry-row" key={item}>
                <span className="registry-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="registry-text">{item}</span>
              </div>
            ))}

            <a className="button button-primary" href="/kwalifikacje">
              Zobacz kwalifikacje
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="lokalizacja">
        <div className="map-card">
          <SectionHeading
            kicker="Lokalizacja"
            title="Kraków, ul. Kielecka 2/53. Dokumenty z całej Polski."
            text="Kancelaria znajduje się przy Rondzie Mogilskim w Krakowie. Dokumenty do wstępnej wyceny można przesłać elektronicznie z całej Polski."
          />

          <div className="map-layout">
            <div className="map-frame">
              <iframe
                itemProp="hasMap"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.453089598971!2d19.961595176701726!3d50.0696491140557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b122aaf12c1%3A0xb1f9ec2649aa6e13!2sKielecka+2%2F53%2C+31-526+Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1714890521862!5m2!1spl!2spl"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa dojazdu do kancelarii tłumacza przysięgłego Vadym Rekel w Krakowie"
                aria-label="Mapa lokalizacji kancelarii tłumacza przysięgłego Vadym Rekel w Krakowie przy Rondzie Mogilskim"
              />
            </div>

            <div>
              <div className="nearby-grid">
                {nearbyPlaces.map((place) => (
                  <article className="nearby-item" key={place.title}>
                    <div className="nearby-icon" aria-hidden="true">
                      {place.number}
                    </div>

                    <div>
                      <h3>{place.title}</h3>
                      <p>{place.address}</p>
                      <p>{place.note}</p>
                      <a
                        className="nearby-link"
                        href={place.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Zobacz trasę →
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              <div className="city-grid">
                {cities.map((city) => (
                  <span className="city-chip" key={city}>
                    {city}
                  </span>
                ))}
              </div>

              <p className="city-note">
                Lista miast oznacza możliwość przesłania dokumentów
                elektronicznie do wstępnej wyceny, a nie dodatkowe siedziby
                kancelarii.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="faq-contact-grid">
          <div>
            <SectionHeading
              kicker="FAQ"
              title="Najczęstsze pytania."
              text="Krótko o kontakcie, wycenie, dokumentach elektronicznych i zakresie języków."
            />

            <div className="faq-list">
              {faqItems.map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <article className="card card-dark">
            <span className="tag">Kontakt końcowy</span>
            <h3>Wyślij dokument albo zadzwoń.</h3>
            <p>
              W wiadomości wskaż język, rodzaj materiału, cel wykorzystania,
              termin oraz informację, czy chodzi o tłumaczenie pisemne, ustne,
              czynność wyjazdową albo materiał cyfrowy.
            </p>

            <a className="phone-main" href={`tel:${institutionPhoneHref}`}>
              {institutionPhoneDisplay}
            </a>

            <div className="mini-actions">
              <a className="mini-action" href={`mailto:${email}`}>
                {email}
              </a>
            </div>
          </article>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <span className="footer-title">Kancelaria Vadym Rekel</span>
            <span className="footer-line">
              Tłumacz przysięgły języka ukraińskiego
            </span>
            <span className="footer-line">
              TP/27/17 · CIOL no. 94280 · TEPIS Member 2026
            </span>
            <span className="footer-line">
              Kraków · obsługa dokumentów z całej Polski
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
              <span className="footer-linkedin-icon" aria-hidden="true">
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