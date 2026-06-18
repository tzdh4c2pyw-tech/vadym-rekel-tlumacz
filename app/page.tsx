import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Kancelaria tłumacza przysięgłego języka ukraińskiego | Kraków | Sąd, Policja, Prokuratura",
  description:
    "Kancelaria tłumacza przysięgłego języka ukraińskiego w Krakowie. Tłumaczenia poświadczone i ustne dla sądów, Policji i prokuratury. Akta spraw, protokoły, czynności procesowe, dokumenty z Ukrainy, komunikatory, raporty forensic i korespondencja osadzonych.",
  keywords: [
    "tłumacz przysięgły języka ukraińskiego Kraków",
    "kancelaria tłumacza przysięgłego języka ukraińskiego",
    "tłumacz ukraiński sąd",
    "tłumacz ukraiński Policja",
    "tłumacz ukraiński prokuratura",
    "tłumaczenie akt sprawy ukraiński",
    "tłumaczenie protokołów ukraiński",
    "tłumaczenie komunikatorów ukraiński",
    "tłumaczenie raportów forensic",
    "tłumaczenie korespondencji osadzonych ukraiński",
    "tłumacz przysięgły ukraiński cała Polska"
  ]
};

const email = "biegly@vadymrekel.pl";

const individualPhoneDisplay = "735 753 383";
const individualPhoneHref = "+48735753383";

const institutionPhoneDisplay = "883 040 483";
const institutionPhoneHref = "+48883040483";

const linkedInUrl = "https://www.linkedin.com/in/vadym-rekel/";
const googleReviewUrl = "https://g.page/r/CXDrBKfVsJJgEBM/review";

const trustItems = [
  "TP/27/17",
  "CIOL no. 94280",
  "TEPIS Member 2026",
  "Kraków",
  "Dokumenty z całej Polski"
];

const mainSegments = [
  {
    title: "Sądy",
    label: "Dokumenty sądowe",
    text: "Wyroki, postanowienia, wezwania, pouczenia, protokoły, pisma procesowe, załączniki i akta spraw.",
    items: ["wyroki", "postanowienia", "protokoły", "pisma procesowe", "akta spraw", "załączniki"],
    href: "/tlumaczenia-sadowe-ukrainski"
  },
  {
    title: "Prokuratura",
    label: "Postępowania karne",
    text: "Materiały z postępowań przygotowawczych, protokoły przesłuchań, postanowienia, wnioski i odpowiedzi organów.",
    items: ["przesłuchania", "postanowienia", "wnioski", "zawiadomienia", "akta", "pomoc prawna"],
    href: "/tlumaczenia-dla-prokuratury"
  },
  {
    title: "Policja",
    label: "Czynności i dowody",
    text: "Tłumaczenia przy czynnościach, protokołach, pouczeniach, notatkach, komunikatorach i materiale cyfrowym.",
    items: ["czynności", "pouczenia", "notatki", "komunikatory", "zrzuty ekranu", "nagrania"],
    href: "/tlumaczenia-dla-policji"
  }
];

const caseMaterials = [
  "protokół",
  "dowód",
  "załącznik",
  "raport",
  "komunikator",
  "pismo odręczne",
  "nagranie",
  "zrzut ekranu",
  "akta",
  "korespondencja"
];

const oralItems = [
  "przesłuchania",
  "czynności procesowe",
  "czynności w jednostkach Policji",
  "czynności w prokuraturze",
  "czynności sądowe",
  "czynności wyjazdowe",
  "areszty śledcze",
  "zakłady karne",
  "czynności zdalne, jeżeli forma czynności na to pozwala"
];

const inmateItems = [
  "pisma odręczne",
  "listy",
  "oświadczenia",
  "prośby",
  "skargi",
  "wyjaśnienia",
  "korespondencja procesowa",
  "korespondencja rodzinna",
  "pisma do sądu",
  "pisma do prokuratury"
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
    text: "Raporty PDF, eksporty danych, zestawienia, tabele, dokumenty wielostronicowe i załączniki."
  },
  {
    code: "SCREEN",
    title: "Zrzuty ekranu",
    text: "Zrzuty z telefonu, komunikatorów, stron internetowych, aplikacji, systemów transakcyjnych i paneli użytkownika."
  },
  {
    code: "CRYPTO",
    title: "Krypto i fraud",
    text: "Materiały dotyczące oszustw internetowych, transakcji cyfrowych, giełd, portfeli, AML/KYC i przepływów środków."
  }
];

const legalAidItems = [
  "wnioski o pomoc prawną",
  "odpowiedzi organów ukraińskich",
  "protokoły przesłuchań",
  "wezwania",
  "pouczenia",
  "postanowienia",
  "akty oskarżenia",
  "korespondencja między organami",
  "dokumenty transgraniczne"
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

const languages = [
  {
    title: "Ukraiński",
    label: "Przysięgły i specjalistyczny",
    text: "Główny język kancelarii. Tłumaczenia poświadczone pisemne oraz ustne przy czynnościach."
  },
  {
    title: "Rosyjski",
    label: "Specjalistyczny",
    text: "Dokumenty prawne, techniczne, urzędowe, korespondencja, materiały cyfrowe i treści formalne."
  },
  {
    title: "Angielski",
    label: "Specjalistyczny",
    text: "Dokumentacja prawna, technologiczna, biznesowa, IT, raporty i korespondencja specjalistyczna."
  }
];

const officePhotos = [
  {
    src: "/images/kancelaria%20tlumacza%20przysieglego%20stanowisko%20pracy%20vadym%20rekel.jpeg",
    alt: "Vadym Rekel przy stanowisku pracy w kancelarii tłumacza przysięgłego języka ukraińskiego w Krakowie",
    title: "Stanowisko pracy tłumacza",
    text: "Dokumenty procesowe, urzędowe, poświadczone i materiały przekazywane do spraw formalnych."
  },
  {
    src: "/images/kancelaria%20tlumacza%20przysieglego%20stanowisko%20administracyjne%20vadym%20rekel.jpeg",
    alt: "Stanowisko administracyjne w kancelarii tłumacza przysięgłego Vadym Rekel",
    title: "Stanowisko administracyjne",
    text: "Korespondencja, pieczęcie, kompletowanie dokumentów i przygotowanie materiałów do wydania."
  },
  {
    src: "/images/kancelaria-tlumacza-przysieglego-ukrainski-krakow-vadym-rekel-01.jpg",
    alt: "Kancelaria tłumacza przysięgłego języka ukraińskiego w Krakowie",
    title: "Kancelaria w Krakowie",
    text: "Miejsce pracy z dokumentami poświadczonymi, procesowymi, urzędowymi i materiałami do akt."
  },
  {
    src: "/images/biuro-tlumacza-przysieglego-jezyk-ukrainski-krakow-vadym-rekel.jpg",
    alt: "Biuro tłumacza przysięgłego języka ukraińskiego w Krakowie",
    title: "Obieg dokumentów",
    text: "Praca z dokumentami wymagającymi zachowania struktury, oznaczeń, terminologii i poufności."
  },
  {
    src: "/images/stanowisko-tlumacza-przysieglego-ukrainski-krakow-macbook-pro-vadym-rekel.jpg",
    alt: "Stanowisko tłumacza przysięgłego języka ukraińskiego w Krakowie",
    title: "Praca z plikami",
    text: "Dokumenty sądowe, prokuratorskie, policyjne, urzędowe oraz materiały elektroniczne."
  },
  {
    src: "/images/stanowisko-komputerowe-bieglego-tlumacza-macbook-pro-vadym-rekel.jpg",
    alt: "Stanowisko komputerowe do pracy z materiałem cyfrowym i dokumentami PDF",
    title: "Materiał cyfrowy",
    text: "Pliki PDF, raporty, komunikatory, zrzuty ekranu i większe zbiory danych."
  },
  {
    src: "/images/laptop-windows-bitlocker-kancelaria-tlumacza-vadym-rekel.jpg",
    alt: "Laptop z zabezpieczeniami w kancelarii tłumacza przysięgłego",
    title: "Raporty i dane",
    text: "Dokumenty elektroniczne, raporty techniczne, dane źródłowe i materiały wymagające analizy."
  },
  {
    src: "/images/drukarki-hp-pagewide-kancelaria-tlumacza-vadym-rekel.jpg",
    alt: "Drukarki w kancelarii tłumacza przysięgłego języka ukraińskiego",
    title: "Druk i kompletowanie",
    text: "Przygotowanie tłumaczeń poświadczonych do odbioru, wysyłki albo złożenia do akt."
  },
  {
    src: "/images/niszczarka-dokumentow-hsm-shredstar-x15-kancelaria-vadym-rekel.jpg",
    alt: "Niszczarka dokumentów w kancelarii tłumacza przysięgłego",
    title: "Poufność materiałów",
    text: "Kontrola dokumentów roboczych zawierających dane osobowe, informacje procesowe albo treści prywatne."
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
      "Klienci indywidualni: 735 753 383. Sąd, Policja, prokuratura, czynności i materiał dowodowy: 883 040 483."
  },
  {
    question: "Czy dokument można przesłać elektronicznie?",
    answer:
      "Tak. Do wstępnej wyceny wystarczy skan, zdjęcie albo plik PDF. Przy większych aktach warto wskazać właściwy zakres."
  },
  {
    question: "Czy kancelaria obsługuje dokumenty z całej Polski?",
    answer:
      "Tak. Siedziba kancelarii znajduje się w Krakowie, ale dokumenty do wyceny można przesłać elektronicznie z dowolnego miasta."
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
  },
  {
    question: "Czy wykonywane są tłumaczenia ustne?",
    answer:
      "Tak. Dotyczy to w szczególności czynności procesowych, przesłuchań, czynności w sądzie, Policji, prokuraturze, aresztach i zakładach karnych."
  }
];

const nearbyPlaces = [
  {
    icon: "01",
    title: "Sąd Okręgowy w Krakowie",
    address: "ul. Przy Rondzie 7, 31-547 Kraków",
    note: "ok. 600 m od kancelarii",
    href: "https://www.google.com/maps/dir/Kielecka+2%2F53,+31-526+Krak%C3%B3w/S%C4%85d+Okr%C4%99gowy+w+Krakowie,+Przy+Rondzie+7,+31-547+Krak%C3%B3w/"
  },
  {
    icon: "02",
    title: "Prokuratura Okręgowa w Krakowie",
    address: "ul. Lubicz 25, 31-503 Kraków",
    note: "ok. 650 m od kancelarii",
    href: "https://www.google.com/maps/dir/Kielecka+2%2F53,+31-526+Krak%C3%B3w/Prokuratura+Okr%C4%99gowa+w+Krakowie,+Lubicz+25,+31-503+Krak%C3%B3w/"
  },
  {
    icon: "03",
    title: "Małopolski Urząd Wojewódzki",
    address: "ul. Przy Rondzie 6, 31-547 Kraków",
    note: "okolice Ronda Mogilskiego",
    href: "https://www.google.com/maps/dir/Kielecka+2%2F53,+31-526+Krak%C3%B3w/Przy+Rondzie+6,+31-547+Krak%C3%B3w/"
  },
  {
    icon: "04",
    title: "Konsulat Ukrainy w Krakowie",
    address: "al. płk. Władysława Beliny-Prażmowskiego 4, 31-514 Kraków",
    note: "dogodny dojazd z Ronda Mogilskiego",
    href: "https://www.google.com/maps/dir/Kielecka+2%2F53,+31-526+Krak%C3%B3w/Aleja+Pu%C5%82kownika+W%C5%82adys%C5%82awa+Beliny-Pra%C5%BAsmowskiego+4,+31-514+Krak%C3%B3w/"
  }
];

function SectionHeading({
  number,
  kicker,
  title,
  text
}: {
  number: string;
  kicker: string;
  title: string;
  text: string;
}) {
  return (
    <div className="section-header">
      <div>
        <div className="section-meta">
          <span>{number}</span>
          <strong>{kicker}</strong>
        </div>
        <h2>{title}</h2>
      </div>
      <p className="section-intro">{text}</p>
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
          --line: rgba(19, 16, 12, 0.12);
          --green: #123c31;
          --green-2: #0d2923;
          --green-soft: #e7eee8;
          --gold: #b68a3a;
          --gold-dark: #7c5a1d;
          --petrol: #244c5a;
          --shadow: 0 22px 62px rgba(25, 22, 18, 0.12);
          --radius: 30px;
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
            radial-gradient(circle at 8% 0%, rgba(182, 138, 58, 0.16), transparent 30%),
            radial-gradient(circle at 92% 8%, rgba(18, 60, 49, 0.14), transparent 28%),
            linear-gradient(180deg, #f8f3ea 0%, var(--bg) 42%, #f1ebdf 100%);
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
          backdrop-filter: blur(20px);
          background: rgba(245, 240, 230, 0.92);
          border-bottom: 1px solid var(--line);
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
          gap: 14px;
        }

        .brand-mark {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: linear-gradient(145deg, var(--green), #215d4b);
          color: #fff;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-weight: 950;
          letter-spacing: -0.05em;
          box-shadow: 0 10px 24px rgba(18, 60, 49, 0.22);
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
          max-width: 1220px;
          margin: 0 auto;
          padding: 44px 22px 22px;
          display: grid;
          grid-template-columns: 1.02fr 0.98fr;
          gap: 28px;
          align-items: stretch;
        }

        .hero-copy {
          border: 1px solid var(--line);
          border-radius: var(--radius);
          background: rgba(255, 250, 242, 0.84);
          box-shadow: var(--shadow);
          padding: 44px 46px 42px;
          position: relative;
          overflow: hidden;
        }

        .hero-copy::after {
          content: "";
          position: absolute;
          right: -120px;
          top: -120px;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: rgba(182, 138, 58, 0.13);
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 13px;
          border-radius: 999px;
          background: var(--green-soft);
          color: var(--green);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          position: relative;
          z-index: 1;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--gold);
          animation: pulse 2.4s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(182, 138, 58, 0.38); }
          70% { box-shadow: 0 0 0 10px rgba(182, 138, 58, 0); }
          100% { box-shadow: 0 0 0 0 rgba(182, 138, 58, 0); }
        }

        h1 {
          margin: 24px 0 20px;
          font-size: clamp(40px, 4.65vw, 64px);
          line-height: 0.93;
          letter-spacing: -0.07em;
          position: relative;
          z-index: 1;
        }

        .lead {
          margin: 0;
          max-width: 680px;
          color: var(--muted);
          font-size: 19px;
          line-height: 1.52;
          position: relative;
          z-index: 1;
        }

        .hero-actions {
          margin-top: 26px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          position: relative;
          z-index: 1;
        }

        .button {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 0 22px;
          border: 1px solid transparent;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          font-weight: 900;
          transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
        }

        .button:hover {
          transform: translateY(-2px);
        }

        .button-primary {
          background: var(--green);
          color: #fff;
          box-shadow: 0 14px 30px rgba(18, 60, 49, 0.20);
        }

        .button-secondary {
          background: rgba(255,255,255,0.70);
          border-color: var(--line);
          color: var(--ink);
        }

        .hero-note {
          margin-top: 22px;
          max-width: 580px;
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          line-height: 1.55;
          position: relative;
          z-index: 1;
        }

        .hero-profile {
          border-radius: var(--radius);
          background: linear-gradient(155deg, var(--green), var(--green-2));
          color: #fff;
          padding: 22px;
          box-shadow: var(--shadow);
          position: relative;
          overflow: hidden;
          min-height: 560px;
        }

        .hero-profile::before {
          content: "";
          position: absolute;
          inset: 16px;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 24px;
          pointer-events: none;
        }

        .portrait-wrap {
          position: relative;
          z-index: 1;
          border-radius: 24px;
          overflow: hidden;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          min-height: 365px;
        }

        .portrait-wrap img {
          width: 100%;
          height: 100%;
          min-height: 365px;
          object-fit: cover;
          object-position: center top;
          display: block;
          filter: saturate(0.94) contrast(1.02);
        }

        .signature {
          position: relative;
          z-index: 2;
          margin: -42px auto 18px;
          width: min(292px, 76%);
          min-height: 108px;
          border-radius: 22px;
          background:
            linear-gradient(180deg, rgba(255, 250, 242, 0.96), rgba(255, 250, 242, 0.88));
          padding: 18px 22px 14px;
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.22);
          transform: rotate(-1.5deg);
          animation: signatureFloat 4.8s ease-in-out infinite;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .signature-name {
          position: relative;
          z-index: 1;
          display: inline-block;
          color: #17110d;
          font-family: "Brush Script MT", "Segoe Script", "Snell Roundhand", cursive;
          font-size: clamp(42px, 5vw, 62px);
          line-height: 1;
          font-weight: 400;
          letter-spacing: -0.06em;
          transform: rotate(-5deg);
          animation: signatureInk 3.6s ease-in-out infinite;
        }

        .signature-name::after {
          content: "";
          position: absolute;
          left: -8%;
          top: 0;
          width: 116%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 250, 242, 0.95) 0%,
            rgba(255, 250, 242, 0.78) 38%,
            rgba(255, 250, 242, 0) 66%
          );
          animation: signatureReveal 5.8s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes signatureFloat {
          0% { transform: translateY(0) rotate(-1.5deg); }
          50% { transform: translateY(-6px) rotate(-0.4deg); }
          100% { transform: translateY(0) rotate(-1.5deg); }
        }

        @keyframes signatureInk {
          0% { opacity: 0.84; filter: blur(0.15px); }
          50% { opacity: 1; filter: blur(0); }
          100% { opacity: 0.84; filter: blur(0.15px); }
        }

        @keyframes signatureReveal {
          0% { transform: translateX(0); }
          34% { transform: translateX(118%); }
          72% { transform: translateX(118%); }
          100% { transform: translateX(0); }
        }

        .profile-card {
          position: relative;
          z-index: 1;
          border-radius: 22px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          padding: 22px;
        }

        .profile-card h2 {
          margin: 0 0 10px;
          font-size: 30px;
          line-height: 1.02;
          letter-spacing: -0.045em;
        }

        .profile-card p {
          margin: 0;
          color: rgba(255,255,255,0.74);
          font-size: 16px;
          line-height: 1.55;
        }

        .identity-box {
          margin-top: 18px;
          border-radius: 18px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          padding: 16px;
          display: grid;
          gap: 8px;
          color: rgba(255,255,255,0.78);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 750;
          line-height: 1.4;
        }

        .trust-strip {
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 22px 18px;
        }

        .trust-inner {
          border-radius: 22px;
          border: 1px solid var(--line);
          background: rgba(255, 250, 242, 0.72);
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          box-shadow: 0 14px 38px rgba(25, 22, 18, 0.06);
          overflow: hidden;
        }

        .trust-item {
          min-height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 900;
          text-align: center;
          border-right: 1px solid var(--line);
        }

        .trust-item:last-child {
          border-right: 0;
        }

        .section {
          max-width: 1220px;
          margin: 0 auto;
          padding: 54px 22px;
        }

        .section-header {
          margin-bottom: 26px;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 28px;
          align-items: end;
        }

        .section-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--gold-dark);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.10em;
        }

        .section-meta span {
          min-width: 38px;
          height: 28px;
          border-radius: 999px;
          border: 1px solid rgba(182, 138, 58, 0.30);
          background: rgba(255, 250, 242, 0.72);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .section h2 {
          margin: 10px 0 0;
          font-size: clamp(34px, 4.1vw, 58px);
          line-height: 0.98;
          letter-spacing: -0.06em;
        }

        .section-intro {
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
          border-radius: 26px;
          border: 1px solid var(--line);
          background: rgba(255,250,242,0.78);
          box-shadow: 0 15px 42px rgba(25, 22, 18, 0.06);
          padding: 28px;
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .card:hover {
          transform: translateY(-3px);
          box-shadow: 0 19px 54px rgba(25, 22, 18, 0.10);
          border-color: rgba(182, 138, 58, 0.34);
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

        .tag {
          display: inline-flex;
          margin-bottom: 15px;
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
          color: rgba(255,255,255,0.82);
          border: 1px solid rgba(255,255,255,0.10);
        }

        .service-list {
          margin: 18px 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 9px;
        }

        .service-list li {
          color: rgba(255,255,255,0.78);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 780;
          line-height: 1.35;
          display: flex;
          gap: 9px;
        }

        .service-list li::before {
          content: "—";
          color: var(--gold);
        }

        .card-link {
          display: inline-flex;
          margin-top: 22px;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 900;
          color: var(--green);
        }

        .card-dark .card-link,
        .card-petrol .card-link {
          color: #fff;
        }

        .contact-choice {
          max-width: 1220px;
          margin: 0 auto;
          padding: 34px 22px 16px;
        }

        .contact-choice-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .contact-choice-card {
          border-radius: 28px;
          border: 1px solid rgba(182, 138, 58, 0.30);
          background: linear-gradient(145deg, rgba(255,250,242,0.94), rgba(248,241,230,0.84));
          box-shadow: 0 18px 50px rgba(25, 22, 18, 0.09);
          padding: 28px;
          display: grid;
          gap: 18px;
        }

        .contact-choice-card.institution {
          background: linear-gradient(145deg, var(--green), var(--green-2));
          color: #fff;
          border-color: rgba(255,255,255,0.12);
        }

        .contact-choice-card h2 {
          margin: 0;
          font-size: clamp(26px, 3vw, 38px);
          line-height: 1.02;
          letter-spacing: -0.055em;
        }

        .contact-choice-card p {
          margin: 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.55;
        }

        .contact-choice-card.institution p {
          color: rgba(255,255,255,0.74);
        }

        .phone-button {
          min-height: 58px;
          border-radius: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 18px;
          background: linear-gradient(145deg, var(--gold), #d8bb6d);
          color: #17110d;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 20px;
          font-weight: 950;
          box-shadow: 0 16px 32px rgba(182, 138, 58, 0.17);
        }

        .institution .phone-button {
          background: #fffaf2;
          color: var(--green);
        }

        .choice-links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .choice-link {
          min-height: 42px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 15px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.54);
          color: var(--ink);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 900;
        }

        .institution .choice-link {
          color: #fff;
          background: rgba(255,255,255,0.10);
          border-color: rgba(255,255,255,0.16);
        }

        .feature-band {
          border-radius: var(--radius);
          background: var(--ink);
          color: #fff;
          box-shadow: var(--shadow);
          padding: 42px;
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          gap: 34px;
          align-items: center;
          overflow: hidden;
          position: relative;
        }

        .feature-band::after {
          content: "";
          position: absolute;
          width: 280px;
          height: 280px;
          right: -110px;
          bottom: -110px;
          border-radius: 50%;
          background: rgba(182, 138, 58, 0.14);
        }

        .feature-band h2,
        .feature-band p,
        .feature-band .section-meta,
        .feature-band .pill-list,
        .feature-band .quote-steps {
          position: relative;
          z-index: 1;
        }

        .feature-band h2 {
          color: #fff;
          margin: 10px 0 0;
        }

        .feature-band p {
          margin: 0;
          color: rgba(255,255,255,0.74);
          font-size: 18px;
          line-height: 1.6;
        }

        .feature-band .section-meta span {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.16);
        }

        .pill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .pill {
          border-radius: 999px;
          padding: 10px 13px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.78);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 800;
        }

        .light-pill {
          background: rgba(255,250,242,0.78);
          border-color: var(--line);
          color: var(--muted);
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

        .quote-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-top: 22px;
        }

        .quote-step {
          border-radius: 18px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          padding: 16px;
        }

        .quote-step span {
          display: inline-flex;
          margin-bottom: 10px;
          color: var(--gold);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 950;
        }

        .quote-step h3 {
          margin: 0 0 8px;
          color: #fff;
          font-size: 19px;
          letter-spacing: -0.03em;
        }

        .quote-step p {
          font-size: 13px;
          line-height: 1.5;
        }

        .photo-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr 0.85fr;
          gap: 16px;
        }

        .photo-card {
          overflow: hidden;
          padding: 0;
        }

        .photo-card.featured-photo {
          grid-row: span 2;
        }

        .photo {
          height: 230px;
          overflow: hidden;
          background: var(--paper-2);
        }

        .featured-photo .photo {
          height: 490px;
        }

        .photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 280ms ease;
        }

        .photo-card:hover .photo img {
          transform: scale(1.04);
        }

        .photo-content {
          padding: 22px;
        }

        .photo-content h3 {
          font-size: 22px;
        }

        .registry {
          display: grid;
          gap: 10px;
        }

        .registry-row {
          display: grid;
          grid-template-columns: 62px 1fr;
          gap: 16px;
          align-items: center;
          padding: 16px 18px;
          border-radius: 18px;
          background: rgba(255,250,242,0.78);
          border: 1px solid var(--line);
        }

        .registry-number {
          color: var(--gold-dark);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 0.08em;
        }

        .registry-text {
          color: var(--ink);
          font-size: 18px;
          line-height: 1.35;
          font-weight: 700;
        }

        .profile-review-grid {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 18px;
          align-items: stretch;
        }

        .professional-list {
          margin: 20px 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 10px;
        }

        .professional-list li {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.45;
        }

        .professional-list li::before {
          content: "";
          width: 8px;
          height: 8px;
          margin-top: 8px;
          border-radius: 50%;
          background: var(--gold);
          flex: 0 0 auto;
        }

        .review-card {
          border-radius: 24px;
          background:
            linear-gradient(145deg, rgba(255,250,242,0.94), rgba(248,241,230,0.86));
          border: 1px solid rgba(182, 138, 58, 0.30);
          padding: 28px;
          box-shadow: 0 15px 42px rgba(25, 22, 18, 0.06);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 22px;
        }

        .review-card h3 {
          margin: 0 0 12px;
          font-size: 30px;
          line-height: 1.04;
          letter-spacing: -0.045em;
        }

        .review-card p {
          margin: 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.55;
        }

        .review-button {
          min-height: 50px;
          border-radius: 999px;
          background: var(--gold);
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          font-weight: 950;
          box-shadow: 0 14px 28px rgba(182, 138, 58, 0.20);
        }

        .map-card {
          border-radius: var(--radius);
          background: rgba(255, 250, 242, 0.86);
          border: 1px solid rgba(176, 138, 60, 0.36);
          box-shadow: var(--shadow);
          padding: 34px;
          overflow: hidden;
        }

        .map-layout {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 18px;
          margin-top: 22px;
        }

        .map-frame {
          position: relative;
          width: 100%;
          min-height: 480px;
          overflow: hidden;
          border-radius: 22px;
          border: 1px solid rgba(176, 138, 60, 0.30);
          box-shadow: 0 15px 36px rgba(25, 22, 18, 0.09);
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
          gap: 12px;
        }

        .nearby-item {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 12px;
          padding: 16px;
          border-radius: 18px;
          border: 1px solid rgba(176, 138, 60, 0.26);
          background: rgba(255, 255, 255, 0.52);
        }

        .nearby-icon {
          width: 42px;
          height: 42px;
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
          font-size: 17px;
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
          margin-top: 8px;
          color: var(--gold-dark);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 900;
        }

        .city-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .city-chip {
          border-radius: 999px;
          padding: 10px 14px;
          background: rgba(255,250,242,0.78);
          border: 1px solid var(--line);
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 850;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .faq-card h3 {
          font-size: 22px;
        }

        .contact-card {
          border-radius: var(--radius);
          background: linear-gradient(145deg, var(--green), var(--green-2));
          color: #fff;
          box-shadow: var(--shadow);
          padding: 44px;
        }

        .contact-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          align-items: end;
          margin-bottom: 24px;
        }

        .contact-card h2 {
          color: #fff;
          margin: 10px 0 0;
        }

        .contact-card p {
          margin: 0;
          color: rgba(255,255,255,0.74);
          font-size: 18px;
          line-height: 1.6;
        }

        .contact-final-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .final-contact-box {
          border-radius: 22px;
          background: rgba(255,255,255,0.09);
          border: 1px solid rgba(255,255,255,0.12);
          padding: 22px;
        }

        .final-contact-box h3 {
          margin: 0 0 10px;
          color: #fff;
          font-size: 24px;
          line-height: 1.1;
        }

        .final-contact-box p {
          font-size: 15px;
        }

        .final-contact-phone {
          margin-top: 16px;
          min-height: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fffaf2;
          color: var(--green);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 20px;
          font-weight: 950;
        }

        .final-contact-actions {
          margin-top: 12px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .final-contact-action {
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

        .floating-contact {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 150;
        }

        .floating-contact summary {
          list-style: none;
          min-height: 58px;
          border-radius: 999px;
          padding: 0 22px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(145deg, var(--green), var(--green-2));
          color: #fff;
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 18px 52px rgba(18, 15, 10, 0.24);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          font-weight: 950;
          cursor: pointer;
        }

        .floating-contact summary::-webkit-details-marker {
          display: none;
        }

        .floating-contact summary span {
          color: rgba(255,255,255,0.72);
          font-size: 12px;
          font-weight: 850;
        }

        .floating-panel {
          width: min(340px, calc(100vw - 32px));
          margin-bottom: 10px;
          border-radius: 22px;
          background: rgba(255,250,242,0.97);
          border: 1px solid rgba(182, 138, 58, 0.36);
          box-shadow: 0 22px 62px rgba(18,15,10,0.22);
          padding: 14px;
          display: grid;
          gap: 10px;
        }

        .floating-panel-title {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          color: var(--gold-dark);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .floating-mini-grid {
          display: grid;
          gap: 8px;
        }

        .floating-mini {
          border-radius: 16px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,0.62);
          padding: 12px;
        }

        .floating-mini strong {
          display: block;
          color: var(--ink);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 950;
          margin-bottom: 6px;
        }

        .floating-mini a {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 40px;
          border-radius: 12px;
          background: var(--green);
          color: #fff;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 15px;
          font-weight: 950;
        }

        .footer {
          border-top: 1px solid var(--line);
          padding: 34px 22px 112px;
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
        }

        .footer-inner {
          max-width: 1220px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 0.9fr 0.9fr;
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

        .footer-links {
          display: grid;
          gap: 8px;
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

        @media (max-width: 1120px) {
          .hero,
          .section-header,
          .feature-band,
          .contact-choice-grid,
          .contact-top,
          .contact-final-grid,
          .profile-review-grid,
          .map-layout,
          .footer-inner {
            grid-template-columns: 1fr;
          }

          .trust-inner {
            grid-template-columns: repeat(2, 1fr);
          }

          .grid-4,
          .photo-grid,
          .faq-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .grid-3 {
            grid-template-columns: 1fr;
          }

          .photo-card.featured-photo {
            grid-row: span 1;
          }

          .hero-profile {
            min-height: auto;
          }

          .quote-steps {
            grid-template-columns: repeat(2, 1fr);
          }

          .featured-photo .photo {
            height: 360px;
          }
        }

        @media (max-width: 920px) {
          .nav-links {
            display: none;
          }

          .grid-2 {
            grid-template-columns: 1fr;
          }

          .hero-copy {
            padding: 34px;
          }

          .section {
            padding-top: 42px;
            padding-bottom: 42px;
          }
        }

        @media (max-width: 640px) {
          .grid-4,
          .photo-grid,
          .faq-grid,
          .trust-inner,
          .quote-steps {
            grid-template-columns: 1fr;
          }

          .trust-item {
            border-right: 0;
            border-bottom: 1px solid var(--line);
          }

          .trust-item:last-child {
            border-bottom: 0;
          }

          .hero {
            padding: 34px 16px 20px;
          }

          .section,
          .trust-strip,
          .contact-choice {
            padding-left: 16px;
            padding-right: 16px;
          }

          .hero-copy,
          .hero-profile,
          .feature-band,
          .contact-card,
          .map-card,
          .contact-choice-card {
            border-radius: 24px;
            padding: 24px;
          }

          h1 {
            font-size: 40px;
          }

          .lead {
            font-size: 18px;
          }

          .button,
          .phone-button {
            width: 100%;
          }

          .portrait-wrap,
          .portrait-wrap img {
            min-height: 330px;
          }

          .signature {
            margin-top: -34px;
            width: min(250px, 78%);
            min-height: 96px;
          }

          .signature-name {
            font-size: 44px;
          }

          .photo,
          .featured-photo .photo {
            height: 240px;
          }

          .map-frame {
            min-height: 360px;
            border-radius: 18px;
          }

          .floating-contact {
            left: 12px;
            right: 12px;
            bottom: 12px;
          }

          .floating-contact summary {
            width: 100%;
            justify-content: center;
            min-height: 54px;
          }

          .floating-panel {
            width: 100%;
          }

          .footer {
            padding-bottom: 96px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pulse-dot,
          .signature,
          .signature-name,
          .signature-name::after {
            animation: none;
          }

          .signature-name::after {
            display: none;
          }

          .button,
          .card,
          .photo img {
            transition: none;
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
            <a href="#kontakt-wybor">Kontakt</a>
            <a href="#dla-organow">Dla organów</a>
            <a href="#material-cyfrowy">Materiał cyfrowy</a>
            <a href="#kancelaria">Kancelaria</a>
            <a href="#lokalizacja">Lokalizacja</a>
            <a href="/kwalifikacje">Kwalifikacje</a>
            <a className="nav-cta" href={`tel:${institutionPhoneHref}`}>
              {institutionPhoneDisplay}
            </a>
          </div>
        </nav>
      </div>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="pulse-dot" />
            Kancelaria tłumacza przysięgłego · Kraków · cała Polska
          </span>

          <h1>Kancelaria tłumacza przysięgłego języka ukraińskiego.</h1>

          <p className="lead">
            Tłumaczenia poświadczone i ustne dla sądów, Policji i prokuratury.
            Akta spraw, protokoły, czynności, materiał dowodowy, komunikatory,
            raporty forensic i dokumenty transgraniczne z Ukrainą.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#kontakt-wybor">
              Wybierz właściwy kontakt
            </a>
            <a className="button button-secondary" href={`mailto:${email}`}>
              Wyślij dokument
            </a>
          </div>

          <p className="hero-note">
            Siedziba kancelarii znajduje się w Krakowie przy ul. Kieleckiej
            2/53. Dokumenty do wstępnej wyceny można przesłać elektronicznie z
            dowolnego miejsca w Polsce.
          </p>
        </div>

        <aside className="hero-profile">
          <div className="portrait-wrap">
            <img
              src="/images/vadym%20rekel.jpg"
              alt="Vadym Rekel tłumacz przysięgły języka ukraińskiego Kraków"
            />
          </div>

          <div className="signature" aria-label="Podpis Vadym Rekel">
            <span className="signature-name">Vadym Rekel</span>
          </div>

          <div className="profile-card">
            <h2>Vadym Rekel</h2>
            <p>
              Tłumacz przysięgły języka ukraińskiego. Praca z dokumentami
              procesowymi, materiałami dowodowymi, czynnościami i treściami
              specjalistycznymi.
            </p>

            <div className="identity-box">
              <span>Wpis na listę Ministra Sprawiedliwości: TP/27/17</span>
              <span>CIOL no. 94280 · TEPIS Member 2026</span>
              <span>Siedziba kancelarii: Kraków</span>
              <span>E-mail: {email}</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="trust-strip" aria-label="Dane kancelarii">
        <div className="trust-inner">
          {trustItems.map((item) => (
            <div className="trust-item" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="contact-choice" id="kontakt-wybor">
        <SectionHeading
          number="01"
          kicker="Kontakt"
          title="Inny numer dla klientów indywidualnych, inny dla organów."
          text="Jeżeli chodzi o dokument prywatny albo urzędowy, wybierz kontakt indywidualny. Jeżeli sprawa dotyczy sądu, Policji, prokuratury, czynności albo materiału dowodowego, wybierz kontakt służbowy."
        />

        <div className="contact-choice-grid">
          <article className="contact-choice-card">
            <span className="tag">Klienci indywidualni</span>
            <h2>Dokumenty prywatne i urzędowe.</h2>
            <p>
              Akty stanu cywilnego, pełnomocnictwa, oświadczenia, dokumenty
              pobytowe, dokumenty rodzinne i dokumenty z Ukrainy.
            </p>

            <a className="phone-button" href={`tel:${individualPhoneHref}`}>
              {individualPhoneDisplay}
            </a>

            <div className="choice-links">
              <a className="choice-link" href={`mailto:${email}`}>
                Wyślij dokument
              </a>
              <a className="choice-link" href="#wycena">
                Jak przygotować?
              </a>
            </div>
          </article>

          <article className="contact-choice-card institution">
            <span className="tag">Sąd · Policja · Prokuratura</span>
            <h2>Sprawy karne, czynności i materiał dowodowy.</h2>
            <p>
              Czynności procesowe, przesłuchania, protokoły, akta spraw,
              komunikatory, zrzuty ekranu, raporty PDF i pilne materiały do
              spraw formalnych.
            </p>

            <a className="phone-button" href={`tel:${institutionPhoneHref}`}>
              {institutionPhoneDisplay}
            </a>

            <div className="choice-links">
              <a className="choice-link" href={`mailto:${email}`}>
                Kontakt e-mail
              </a>
              <a className="choice-link" href="#dla-organow">
                Zakres dla organów
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="dla-organow">
        <SectionHeading
          number="02"
          kicker="Sąd · Prokuratura · Policja"
          title="Tłumaczenia dla organów i czynności formalnych."
          text="Główna oferta kancelarii jest skierowana do spraw, w których dokument, wypowiedź albo materiał cyfrowy może mieć znaczenie procesowe, dowodowe lub urzędowe."
        />

        <div className="grid-3">
          {mainSegments.map((item) => (
            <article className="card card-dark" key={item.title}>
              <span className="tag">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>

              <ul className="service-list">
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
        <div className="feature-band">
          <div>
            <div className="section-meta">
              <span>03</span>
              <strong>Dokument w sprawie</strong>
            </div>
            <h2>Nie każdy dokument jest zwykłym dokumentem.</h2>
          </div>

          <div>
            <p>
              W sprawie dokument może być protokołem, dowodem, załącznikiem,
              zapisem rozmowy, raportem technicznym, pismem odręcznym albo
              korespondencją. Dlatego znaczenie ma kontekst, terminologia i
              sposób przekazania materiału.
            </p>

            <div className="pill-list" style={{ marginTop: 22 }}>
              {caseMaterials.map((item) => (
                <span className="pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="czynnosci">
        <SectionHeading
          number="04"
          kicker="Czynności"
          title="Tłumaczenia ustne i korespondencja osadzonych."
          text="Zakres obejmuje zarówno czynności formalne, jak i dokumenty pisane ręcznie, w języku potocznym, skrótowym albo trudnym do odczytania."
        />

        <div className="grid-2">
          <article className="card">
            <span className="tag">Tłumaczenia ustne</span>
            <h3>Czynności procesowe, wyjazdowe i zdalne.</h3>
            <p>
              Tłumaczenia ustne języka ukraińskiego podczas czynności
              procesowych, przesłuchań, czynności w jednostkach Policji,
              prokuraturze, sądzie, aresztach śledczych i zakładach karnych.
            </p>

            <div className="pill-list" style={{ marginTop: 20 }}>
              {oralItems.map((item) => (
                <span className="pill light-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="card">
            <span className="tag">Korespondencja osadzonych</span>
            <h3>Pisma odręczne, listy, skargi i wyjaśnienia.</h3>
            <p>
              Tłumaczenie ręcznie sporządzonych pism wymaga pracy z trudnym
              pismem, skrótami, nieformalnym językiem, emocjonalnym stylem
              wypowiedzi i kontekstem sprawy.
            </p>

            <div className="pill-list" style={{ marginTop: 20 }}>
              {inmateItems.map((item) => (
                <span className="pill light-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="material-cyfrowy">
        <SectionHeading
          number="05"
          kicker="IT · dowody cyfrowe"
          title="Komunikatory, raporty forensic i dane cyfrowe."
          text="Tłumaczenie może obejmować nie tylko klasyczne dokumenty, lecz także treści pochodzące z telefonów, komunikatorów, raportów technicznych, zrzutów ekranu, nagrań, zdjęć i dużych plików PDF."
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
        <div className="feature-band">
          <div>
            <div className="section-meta">
              <span>06</span>
              <strong>Ukraina</strong>
            </div>
            <h2>Pomoc prawna i dokumenty z Ukrainą.</h2>
          </div>

          <div>
            <p>
              Tłumaczenia dokumentów dotyczących pomocy prawnej, przesłuchań
              osób na Ukrainie, odpowiedzi organów ukraińskich, wezwań,
              pouczeń, postanowień, protokołów oraz materiałów przekazywanych w
              sprawach transgranicznych.
            </p>

            <div className="pill-list" style={{ marginTop: 22 }}>
              {legalAidItems.map((item) => (
                <span className="pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="wycena">
        <div className="feature-band">
          <div>
            <div className="section-meta">
              <span>07</span>
              <strong>Wycena</strong>
            </div>
            <h2>Jak przygotować materiał do wstępnej wyceny.</h2>
          </div>

          <div>
            <p>
              Do oceny kosztu i terminu wystarczy przesłać dokument albo krótki
              opis czynności. W przypadku większych akt, raportów lub materiału
              cyfrowego warto wskazać, które fragmenty mają znaczenie dla sprawy.
            </p>
          </div>
        </div>

        <div className="quote-steps" style={{ marginTop: 16 }}>
          {quoteSteps.map((step) => (
            <article className="quote-step" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="jezyki">
        <SectionHeading
          number="08"
          kicker="Języki pracy"
          title="Ukraiński przysięgły. Rosyjski i angielski specjalistyczne."
          text="Uprawnienia tłumacza przysięgłego dotyczą języka ukraińskiego. Język rosyjski i angielski występują w ofercie jako tłumaczenia specjalistyczne."
        />

        <div className="grid-3">
          {languages.map((item) => (
            <article className="card" key={item.title}>
              <span className="tag">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="kancelaria">
        <SectionHeading
          number="09"
          kicker="Kancelaria"
          title="Zaplecze pracy z dokumentami."
          text="Tłumaczenia poświadczone i procesowe wymagają właściwej organizacji dokumentów, kontroli wersji, przygotowania wydruków, kompletowania materiałów oraz zachowania poufności."
        />

        <div className="photo-grid">
          {officePhotos.map((item, index) => (
            <article
              className={`card photo-card ${index === 0 ? "featured-photo" : ""}`}
              key={item.src}
            >
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
          number="10"
          kicker="Kwalifikacje"
          title="Uprawnienia zawodowe i przygotowanie specjalistyczne."
          text="Na stronie kwalifikacji znajdują się certyfikaty, dyplomy i dokumenty potwierdzające uprawnienia oraz przygotowanie do pracy z dokumentami prawnymi, technologicznymi i procesowymi."
        />

        <div className="registry">
          {qualifications.map((item, index) => (
            <div className="registry-row" key={item}>
              <span className="registry-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="registry-text">{item}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <a className="button button-primary" href="/kwalifikacje">
            Zobacz dokumenty potwierdzające kwalifikacje
          </a>
        </div>
      </section>

      <section className="section">
        <div className="grid-2">
          <article className="card card-dark">
            <span className="tag">Poufność</span>
            <h3>Dane osobowe, akta i materiały dowodowe.</h3>
            <p>
              Materiały kierowane do tłumaczenia mogą zawierać dane osobowe,
              informacje procesowe, korespondencję prywatną, dane finansowe,
              dokumenty karne, treści rodzinne albo materiał cyfrowy. W takich
              sprawach istotna jest kontrola obiegu dokumentów i ograniczenie
              dostępu do materiału.
            </p>
          </article>

          <article className="card">
            <span className="tag">Dokumenty prywatne</span>
            <h3>Dokumenty prywatne i urzędowe z Ukrainy.</h3>
            <p>
              Kancelaria obsługuje również dokumenty osób prywatnych: dokumenty
              z Ukrainy, akty stanu cywilnego, pełnomocnictwa, oświadczenia,
              dokumenty pobytowe, rodzinne i urzędowe.
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="lokalizacja">
        <div className="map-card">
          <SectionHeading
            number="11"
            kicker="Lokalizacja"
            title="Kancelaria przy Rondzie Mogilskim w Krakowie."
            text="Kancelaria znajduje się przy ul. Kieleckiej 2/53 w Krakowie. Lokalizacja jest dogodna dla osób i instytucji współpracujących z sądami, prokuraturą, Policją, urzędami oraz Konsulatem Ukrainy."
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

            <div className="nearby-grid">
              {nearbyPlaces.map((place) => (
                <article className="nearby-item" key={place.title}>
                  <div className="nearby-icon" aria-hidden="true">
                    {place.icon}
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
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          number="12"
          kicker="Cała Polska"
          title="Dokumenty do wyceny można przesłać elektronicznie."
          text="Siedziba kancelarii znajduje się w Krakowie. Dokumenty są przyjmowane do wstępnej wyceny również z innych miast wojewódzkich i miejscowości w Polsce."
        />

        <div className="city-grid">
          {cities.map((city) => (
            <span className="city-chip" key={city}>
              {city}
            </span>
          ))}
        </div>
      </section>

      <section className="section" id="profil">
        <div className="profile-review-grid">
          <article className="card">
            <span className="tag">Profil zawodowy</span>
            <h3>Vadym Rekel — tłumacz przysięgły języka ukraińskiego.</h3>
            <p>
              Kancelaria obsługuje dokumenty procesowe, materiały dowodowe,
              czynności ustne, dokumenty transgraniczne z Ukrainą oraz treści
              specjalistyczne wymagające pracy z precyzyjną terminologią.
            </p>

            <ul className="professional-list">
              <li>tłumacz przysięgły języka ukraińskiego, TP/27/17</li>
              <li>praca z dokumentami procesowymi i materiałem dowodowym</li>
              <li>tłumaczenia ustne przy czynnościach formalnych</li>
              <li>materiał cyfrowy, komunikatory, raporty PDF i zrzuty ekranu</li>
              <li>korespondencja osadzonych i dokumenty transgraniczne z Ukrainą</li>
            </ul>
          </article>

          <article className="review-card" id="opinie">
            <div>
              <span className="tag">Opinie Google</span>
              <h3>Zostaw opinię o kancelarii.</h3>
              <p>
                Jeżeli współpraca była pomocna, możesz zostawić opinię w Google.
                Opinie pomagają klientom ocenić zakres, terminowość i sposób
                obsługi dokumentów.
              </p>
            </div>

            <a
              className="review-button"
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Dodaj opinię w Google
            </a>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          number="13"
          kicker="FAQ"
          title="Najczęstsze pytania przed wysłaniem dokumentu."
          text="Krótkie odpowiedzi dotyczące wyceny, kontaktu, dokumentów elektronicznych, czynności ustnych i zakresu języków."
        />

        <div className="faq-grid">
          {faqItems.map((item) => (
            <article className="card faq-card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="kontakt">
        <div className="contact-card">
          <div className="contact-top">
            <div>
              <div className="section-meta">
                <span>14</span>
                <strong>Kontakt</strong>
              </div>
              <h2>Wybierz właściwy kontakt do sprawy.</h2>
            </div>

            <p>
              W wiadomości wskaż język, rodzaj materiału, cel wykorzystania,
              termin oraz informację, czy chodzi o tłumaczenie pisemne, ustne,
              czynność wyjazdową albo materiał cyfrowy.
            </p>
          </div>

          <div className="contact-final-grid">
            <article className="final-contact-box">
              <h3>Klienci indywidualni</h3>
              <p>
                Dokumenty prywatne, urzędowe, pobytowe, rodzinne i dokumenty z
                Ukrainy.
              </p>

              <a className="final-contact-phone" href={`tel:${individualPhoneHref}`}>
                {individualPhoneDisplay}
              </a>

              <div className="final-contact-actions">
                <a className="final-contact-action" href={`mailto:${email}`}>
                  Wyślij dokument
                </a>
                <a className="final-contact-action" href="#wycena">
                  Jak przygotować?
                </a>
              </div>
            </article>

            <article className="final-contact-box">
              <h3>Sąd · Policja · Prokuratura</h3>
              <p>
                Sprawy karne, czynności procesowe, akta, protokoły, materiał
                dowodowy i pilne czynności.
              </p>

              <a className="final-contact-phone" href={`tel:${institutionPhoneHref}`}>
                {institutionPhoneDisplay}
              </a>

              <div className="final-contact-actions">
                <a className="final-contact-action" href={`mailto:${email}`}>
                  Kontakt e-mail
                </a>
                <a className="final-contact-action" href="#dla-organow">
                  Zakres dla organów
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <details className="floating-contact">
        <summary>
          Szybka wycena
          <span>otwórz / zamknij</span>
        </summary>

        <div className="floating-panel">
          <div className="floating-panel-title">
            <strong>Kontakt</strong>
            <span>kliknij ponownie, aby zamknąć</span>
          </div>

          <div className="floating-mini-grid">
            <div className="floating-mini">
              <strong>Klienci indywidualni</strong>
              <a href={`tel:${individualPhoneHref}`}>{individualPhoneDisplay}</a>
            </div>

            <div className="floating-mini">
              <strong>Sąd · Policja · Prokuratura</strong>
              <a href={`tel:${institutionPhoneHref}`}>{institutionPhoneDisplay}</a>
            </div>
          </div>

          <a className="choice-link" href={`mailto:${email}`}>
            Wyślij dokument do wyceny
          </a>
        </div>
      </details>

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
          </div>

          <div>
            <span className="footer-title">Kontakt</span>
            <span className="footer-line">
              Klienci indywidualni:{" "}
              <a href={`tel:${individualPhoneHref}`}>{individualPhoneDisplay}</a>
            </span>
            <span className="footer-line">
              Sąd · Policja · Prokuratura:{" "}
              <a href={`tel:${institutionPhoneHref}`}>{institutionPhoneDisplay}</a>
            </span>
            <span className="footer-line">
              <a href={`mailto:${email}`}>{email}</a>
            </span>
            <span className="footer-line">ul. Kielecka 2/53, 31-526 Kraków</span>
          </div>

          <div>
            <span className="footer-title">Profil zawodowy</span>

            <div className="footer-links">
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

              <a
                className="footer-link"
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Dodaj opinię w Google
              </a>

              <a className="footer-link" href="/kwalifikacje">
                Kwalifikacje i certyfikaty
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}