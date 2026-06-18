import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Kancelaria tłumacza przysięgłego języka ukraińskiego | Sąd, Prokuratura, Policja",
  description:
    "Kancelaria tłumacza przysięgłego języka ukraińskiego w Krakowie. Tłumaczenia poświadczone i ustne dla sądów, prokuratury i Policji. Dokumenty procesowe, akta spraw, protokoły, czynności, komunikatory, raporty forensic, korespondencja osadzonych i pomoc prawna z Ukrainą.",
  keywords: [
    "kancelaria tłumacza przysięgłego języka ukraińskiego",
    "tłumacz przysięgły języka ukraińskiego",
    "tłumacz przysięgły ukraiński Kraków",
    "tłumacz ukraiński sąd",
    "tłumacz ukraiński prokuratura",
    "tłumacz ukraiński Policja",
    "tłumaczenie akt sprawy ukraiński",
    "tłumaczenie protokołów ukraiński",
    "tłumaczenie komunikatorów ukraiński",
    "tłumaczenie raportów forensic",
    "tłumaczenie korespondencji osadzonych ukraiński",
    "tłumacz ukraiński areszt śledczy"
  ]
};

const email = "biegly@vadymrekel.pl";
const phoneDisplay = "883 040 483";
const phoneHref = "+48883040483";
const linkedInUrl = "https://www.linkedin.com/in/vadym-rekel/";
const googleReviewUrl = "https://g.page/r/CXDrBKfVsJJgEBM/review";

const mainSegments = [
  {
    title: "Sądy",
    label: "Dokumenty sądowe i akta spraw",
    text: "Wyroki, postanowienia, wezwania, pouczenia, protokoły, pisma procesowe, akty oskarżenia, załączniki, opinie i materiały dowodowe.",
    href: "/tlumaczenia-sadowe-ukrainski"
  },
  {
    title: "Prokuratura",
    label: "Dokumenty prokuratorskie i karne",
    text: "Materiały z postępowań przygotowawczych, protokoły przesłuchań, postanowienia, wnioski o pomoc prawną, zawiadomienia i dokumenty organów ścigania.",
    href: "/tlumaczenia-dla-prokuratury"
  },
  {
    title: "Policja",
    label: "Czynności policyjne i materiały dowodowe",
    text: "Tłumaczenia ustne i pisemne przy czynnościach procesowych, przesłuchaniach, protokołach, pouczeniach, notatkach, komunikatorach, zrzutach ekranu, audio i wideo.",
    href: "/tlumaczenia-dla-policji"
  }
];

const commonMaterials = [
  "protokoły przesłuchań",
  "postanowienia",
  "akty oskarżenia",
  "wezwania i pouczenia",
  "pisma procesowe",
  "wnioski o pomoc prawną",
  "odpowiedzi organów Ukrainy",
  "zrzuty ekranu",
  "komunikatory",
  "raporty z telefonu",
  "nagrania audio i wideo",
  "pisma odręczne osadzonych"
];

const digitalItems = [
  {
    title: "Komunikatory i wiadomości",
    text: "Telegram, WhatsApp, Signal, Messenger, Viber, SMS/MMS, e-mail, historia połączeń, kontakty, załączniki i eksporty rozmów."
  },
  {
    title: "Raporty z urządzeń mobilnych",
    text: "Tłumaczenie treści z raportów wygenerowanych z telefonu albo innego urządzenia mobilnego: wiadomości, plików, zdjęć, danych aplikacji i fragmentów istotnych dla sprawy."
  },
  {
    title: "Duże wolumeny danych",
    text: "Praca z obszernymi raportami PDF, eksportami rozmów, tabelami i zbiorami danych. Możliwe wyodrębnienie zakresu przeznaczonego do tłumaczenia."
  },
  {
    title: "Oszustwa internetowe i kryptowaluty",
    text: "Materiały dotyczące fraudów internetowych, portfeli kryptowalutowych, giełd, transakcji cyfrowych, korespondencji z platformami, AML/KYC i przepływów środków."
  }
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

const languages = [
  {
    title: "Ukraiński",
    label: "Tłumaczenia przysięgłe i specjalistyczne",
    text: "Główny język kancelarii. Poświadczone tłumaczenia pisemne oraz tłumaczenia ustne przy czynnościach sądowych, prokuratorskich i policyjnych."
  },
  {
    title: "Rosyjski",
    label: "Tłumaczenia specjalistyczne",
    text: "Dokumenty prawne, techniczne, urzędowe, korespondencja, materiały cyfrowe i treści wykorzystywane w sprawach formalnych."
  },
  {
    title: "Angielski",
    label: "Tłumaczenia specjalistyczne",
    text: "Dokumentacja prawna, technologiczna, biznesowa, IT, raporty, korespondencja i materiały wymagające precyzyjnej terminologii."
  }
];

const officePhotos = [
  {
    src: "/images/kancelaria%20tlumacza%20przysieglego%20stanowisko%20pracy%20vadym%20rekel.jpeg",
    alt: "Vadym Rekel przy stanowisku pracy w kancelarii tłumacza przysięgłego języka ukraińskiego w Krakowie",
    title: "Stanowisko pracy tłumacza przysięgłego",
    text: "Praca z dokumentami procesowymi, urzędowymi, poświadczonymi i materiałami przekazywanymi do spraw formalnych."
  },
  {
    src: "/images/kancelaria%20tlumacza%20przysieglego%20stanowisko%20administracyjne%20vadym%20rekel.jpeg",
    alt: "Stanowisko administracyjne w kancelarii tłumacza przysięgłego Vadym Rekel",
    title: "Stanowisko administracyjne",
    text: "Obsługa korespondencji, pieczęci, kompletowanie dokumentów, organizacja zleceń i przygotowanie materiałów do wydania."
  },
  {
    src: "/images/kancelaria-tlumacza-przysieglego-ukrainski-krakow-vadym-rekel-01.jpg",
    alt: "Kancelaria tłumacza przysięgłego języka ukraińskiego w Krakowie",
    title: "Kancelaria w Krakowie",
    text: "Realne miejsce pracy z dokumentami poświadczonymi, procesowymi, urzędowymi i materiałami do akt sprawy."
  },
  {
    src: "/images/biuro-tlumacza-przysieglego-jezyk-ukrainski-krakow-vadym-rekel.jpg",
    alt: "Biuro tłumacza przysięgłego języka ukraińskiego w Krakowie",
    title: "Biuro tłumacza przysięgłego",
    text: "Przestrzeń do pracy z dokumentami wymagającymi zachowania struktury, oznaczeń, terminologii i poufności."
  },
  {
    src: "/images/stanowisko-tlumacza-przysieglego-ukrainski-krakow-macbook-pro-vadym-rekel.jpg",
    alt: "Stanowisko tłumacza przysięgłego języka ukraińskiego w Krakowie",
    title: "Praca z dokumentami i plikami",
    text: "Opracowanie dokumentów sądowych, prokuratorskich, policyjnych, urzędowych oraz materiałów elektronicznych."
  },
  {
    src: "/images/stanowisko-komputerowe-bieglego-tlumacza-macbook-pro-vadym-rekel.jpg",
    alt: "Stanowisko komputerowe do pracy z materiałem cyfrowym i dokumentami PDF",
    title: "Materiał cyfrowy",
    text: "Praca z plikami PDF, raportami, komunikatorami, zrzutami ekranu i dużymi zbiorami danych."
  },
  {
    src: "/images/laptop-windows-bitlocker-kancelaria-tlumacza-vadym-rekel.jpg",
    alt: "Laptop z zabezpieczeniami w kancelarii tłumacza przysięgłego",
    title: "Pliki elektroniczne i raporty",
    text: "Obsługa dokumentów elektronicznych, raportów technicznych, danych źródłowych i materiałów wymagających analizy."
  },
  {
    src: "/images/drukarki-hp-pagewide-kancelaria-tlumacza-vadym-rekel.jpg",
    alt: "Drukarki w kancelarii tłumacza przysięgłego języka ukraińskiego",
    title: "Druk i kompletowanie",
    text: "Przygotowanie tłumaczeń poświadczonych do odbioru, wysyłki, przekazania do kancelarii albo złożenia do akt."
  },
  {
    src: "/images/niszczarka-dokumentow-hsm-shredstar-x15-kancelaria-vadym-rekel.jpg",
    alt: "Niszczarka dokumentów w kancelarii tłumacza przysięgłego",
    title: "Dokumenty robocze i poufność",
    text: "Kontrola obiegu materiałów roboczych zawierających dane osobowe, informacje procesowe albo treści prywatne."
  }
];

const qualifications = [
  {
    title: "Tłumacz przysięgły języka ukraińskiego",
    text: "Wpis na listę tłumaczy przysięgłych Ministra Sprawiedliwości, nr TP/27/17."
  },
  {
    title: "CIOL no. 94280",
    text: "Członkostwo w Chartered Institute of Linguists."
  },
  {
    title: "TEPIS Member 2026",
    text: "Członkostwo w środowisku tłumaczy przysięgłych i specjalistycznych."
  },
  {
    title: "Przygotowanie specjalistyczne",
    text: "MBA, prawo nowych technologii, prawo własności intelektualnej i nowych technologii, prawo karne materialne i procesowe."
  }
];

const profileItems = [
  "tłumacz przysięgły języka ukraińskiego, TP/27/17",
  "praca z dokumentami procesowymi i materiałem dowodowym",
  "tłumaczenia ustne przy czynnościach formalnych",
  "materiał cyfrowy, komunikatory, raporty PDF i zrzuty ekranu",
  "korespondencja osadzonych i dokumenty transgraniczne z Ukrainą"
];

const nearbyPlaces = [
  {
    icon: "🛂",
    title: "Małopolski Urząd Wojewódzki – Wydział Spraw Cudzoziemców",
    address: "ul. Przy Rondzie 6, 31-547 Kraków",
    note: "kilka minut pieszo od kancelarii, okolice Ronda Mogilskiego",
    href: "https://www.google.com/maps/dir/Kielecka+2%2F53,+31-526+Krak%C3%B3w/Przy+Rondzie+6,+31-547+Krak%C3%B3w/"
  },
  {
    icon: "⚖️",
    title: "Sąd Okręgowy w Krakowie",
    address: "ul. Przy Rondzie 7, 31-547 Kraków",
    note: "ok. 600 m od kancelarii, około 7 minut pieszo",
    href: "https://www.google.com/maps/dir/Kielecka+2%2F53,+31-526+Krak%C3%B3w/S%C4%85d+Okr%C4%99gowy+w+Krakowie,+Przy+Rondzie+7,+31-547+Krak%C3%B3w/"
  },
  {
    icon: "🇺🇦",
    title: "Konsulat Ukrainy w Krakowie",
    address: "al. płk. Władysława Beliny-Prażmowskiego 4, 31-514 Kraków",
    note: "wygodny dojazd tramwajem i pieszo z Ronda Mogilskiego",
    href: "https://www.google.com/maps/dir/Kielecka+2%2F53,+31-526+Krak%C3%B3w/Aleja+Pu%C5%82kownika+W%C5%82adys%C5%82awa+Beliny-Pra%C5%BAsmowskiego+4,+31-514+Krak%C3%B3w/"
  },
  {
    icon: "🛡️",
    title: "Prokuratura Okręgowa w Krakowie",
    address: "ul. Lubicz 25, 31-503 Kraków",
    note: "ok. 650 m od kancelarii, około 8 minut pieszo",
    href: "https://www.google.com/maps/dir/Kielecka+2%2F53,+31-526+Krak%C3%B3w/Prokuratura+Okr%C4%99gowa+w+Krakowie,+Lubicz+25,+31-503+Krak%C3%B3w/"
  }
];

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
          --shadow: 0 26px 80px rgba(25, 22, 18, 0.14);
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
            radial-gradient(circle at 8% 0%, rgba(182, 138, 58, 0.18), transparent 30%),
            radial-gradient(circle at 92% 8%, rgba(18, 60, 49, 0.16), transparent 28%),
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
          background: rgba(245, 240, 230, 0.90);
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
          box-shadow: 0 10px 24px rgba(18, 60, 49, 0.26);
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
          padding: 44px 22px 36px;
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
          background: rgba(182, 138, 58, 0.14);
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
          0% { box-shadow: 0 0 0 0 rgba(182, 138, 58, 0.45); }
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
          box-shadow: 0 14px 30px rgba(18, 60, 49, 0.22);
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
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.24);
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
          50% { transform: translateY(-7px) rotate(-0.4deg); }
          100% { transform: translateY(0) rotate(-1.5deg); }
        }

        @keyframes signatureInk {
          0% { opacity: 0.82; filter: blur(0.15px); }
          50% { opacity: 1; filter: blur(0); }
          100% { opacity: 0.82; filter: blur(0.15px); }
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

        .section-kicker {
          color: var(--gold-dark);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: 0.10em;
        }

        .section h2 {
          margin: 8px 0 0;
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

        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .card {
          border-radius: 26px;
          border: 1px solid var(--line);
          background: rgba(255,250,242,0.78);
          box-shadow: 0 16px 46px rgba(25, 22, 18, 0.06);
          padding: 28px;
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 60px rgba(25, 22, 18, 0.12);
          border-color: rgba(182, 138, 58, 0.36);
        }

        .card-dark {
          background: linear-gradient(150deg, var(--green), var(--green-2));
          color: #fff;
          border-color: rgba(255,255,255,0.12);
        }

        .card-petrol {
          background: linear-gradient(150deg, #1d3e4a, #102932);
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
        .feature-band .section-kicker,
        .feature-band .pill-list {
          position: relative;
          z-index: 1;
        }

        .feature-band h2 {
          color: #fff;
          margin: 8px 0 0;
        }

        .feature-band p {
          margin: 0;
          color: rgba(255,255,255,0.74);
          font-size: 18px;
          line-height: 1.6;
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

        .photo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .photo-card {
          overflow: hidden;
          padding: 0;
        }

        .photo-card.featured-photo {
          grid-column: span 2;
        }

        .photo {
          height: 230px;
          overflow: hidden;
          background: var(--paper-2);
        }

        .featured-photo .photo {
          height: 360px;
        }

        .photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 280ms ease;
        }

        .photo-card:hover .photo img {
          transform: scale(1.05);
        }

        .photo-content {
          padding: 22px;
        }

        .photo-content h3 {
          font-size: 22px;
        }

        .qualification-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
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

        .linkedin-card {
          border-radius: 24px;
          background: linear-gradient(145deg, #ffffff, #fff8ea);
          border: 1px solid rgba(0, 119, 181, 0.18);
          padding: 24px;
          display: grid;
          gap: 18px;
          box-shadow: 0 16px 46px rgba(25, 22, 18, 0.06);
        }

        .linkedin-head {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .linkedin-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: #0077b5;
          color: #fff;
          flex: 0 0 auto;
          box-shadow: 0 12px 26px rgba(0, 119, 181, 0.20);
        }

        .linkedin-head h3 {
          margin: 0 0 3px;
          font-size: 24px;
          line-height: 1.05;
          letter-spacing: -0.035em;
        }

        .linkedin-head p {
          margin: 0;
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          line-height: 1.4;
        }

        .linkedin-button {
          min-height: 48px;
          border-radius: 999px;
          background: #0077b5;
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 18px;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          font-weight: 900;
          box-shadow: 0 12px 28px rgba(0, 119, 181, 0.18);
        }

        .review-card {
          border-radius: 24px;
          background:
            linear-gradient(145deg, rgba(255,250,242,0.94), rgba(248,241,230,0.86));
          border: 1px solid rgba(182, 138, 58, 0.30);
          padding: 28px;
          box-shadow: 0 16px 46px rgba(25, 22, 18, 0.06);
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
          box-shadow: 0 14px 30px rgba(182, 138, 58, 0.22);
        }

        .map-card {
          border-radius: var(--radius);
          background: rgba(255, 250, 242, 0.86);
          border: 1px solid rgba(176, 138, 60, 0.38);
          box-shadow: var(--shadow);
          padding: 34px;
          overflow: hidden;
        }

        .map-header {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 28px;
          align-items: end;
          margin-bottom: 22px;
        }

        .map-header h2 {
          margin: 8px 0 0;
          font-size: clamp(32px, 4vw, 54px);
          line-height: 0.98;
          letter-spacing: -0.06em;
        }

        .map-header p {
          margin: 0;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.55;
        }

        .map-frame {
          position: relative;
          width: 100%;
          padding-bottom: 52%;
          height: 0;
          overflow: hidden;
          border-radius: 22px;
          border: 1px solid rgba(176, 138, 60, 0.34);
          box-shadow: 0 16px 40px rgba(25, 22, 18, 0.10);
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
          margin-top: 18px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .nearby-item {
          display: grid;
          grid-template-columns: 34px 1fr;
          gap: 12px;
          padding: 16px;
          border-radius: 18px;
          border: 1px solid rgba(176, 138, 60, 0.28);
          background: rgba(255, 255, 255, 0.52);
        }

        .nearby-icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--green-soft);
          font-size: 18px;
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

        .map-note {
          margin: 18px 0 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.6;
        }

        .contact-card {
          border-radius: var(--radius);
          background: linear-gradient(145deg, var(--green), var(--green-2));
          color: #fff;
          box-shadow: var(--shadow);
          padding: 44px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          align-items: center;
        }

        .contact-card h2 {
          color: #fff;
          margin: 8px 0 0;
        }

        .contact-card p {
          margin: 0;
          color: rgba(255,255,255,0.74);
          font-size: 18px;
          line-height: 1.6;
        }

        .contact-actions {
          display: grid;
          gap: 12px;
        }

        .contact-link {
          border-radius: 18px;
          padding: 18px;
          background: rgba(255,255,255,0.09);
          border: 1px solid rgba(255,255,255,0.12);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          font-weight: 850;
        }

        .floating-quote {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 150;
          width: min(360px, calc(100vw - 32px));
          border-radius: 26px;
          background: rgba(255, 250, 242, 0.96);
          border: 1px solid rgba(182, 138, 58, 0.42);
          box-shadow: 0 26px 80px rgba(18, 15, 10, 0.26);
          backdrop-filter: blur(18px);
          overflow: hidden;
        }

        .floating-quote-top {
          padding: 14px 16px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .floating-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--gold-dark);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .floating-label::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--green);
          animation: pulseGreen 2.2s infinite;
        }

        @keyframes pulseGreen {
          0% { box-shadow: 0 0 0 0 rgba(18, 60, 49, 0.42); }
          70% { box-shadow: 0 0 0 10px rgba(18, 60, 49, 0); }
          100% { box-shadow: 0 0 0 0 rgba(18, 60, 49, 0); }
        }

        .floating-close-note {
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 11px;
          font-weight: 800;
        }

        .floating-main {
          padding: 12px 16px 16px;
        }

        .floating-phone {
          min-height: 58px;
          border-radius: 18px;
          background: linear-gradient(145deg, var(--green), var(--green-2));
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 20px;
          font-weight: 950;
          box-shadow: 0 16px 36px rgba(18, 60, 49, 0.26);
          margin-bottom: 10px;
        }

        .floating-secondary {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .floating-link {
          min-height: 42px;
          border-radius: 15px;
          background: rgba(255,255,255,0.72);
          border: 1px solid var(--line);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 12px;
          color: var(--ink);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 900;
        }

        .floating-text {
          margin: 10px 0 0;
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          line-height: 1.45;
        }

        .footer {
          border-top: 1px solid var(--line);
          padding: 34px 22px 120px;
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
        }

        .footer-inner {
          max-width: 1220px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          gap: 18px;
          flex-wrap: wrap;
        }

        @media (max-width: 1120px) {
          .hero,
          .section-header,
          .feature-band,
          .contact-card,
          .map-header,
          .profile-review-grid {
            grid-template-columns: 1fr;
          }

          .grid-4,
          .photo-grid,
          .qualification-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .photo-card.featured-photo {
            grid-column: span 2;
          }

          .hero-profile {
            min-height: auto;
          }
        }

        @media (max-width: 920px) {
          .nav-links {
            display: none;
          }

          .grid-3,
          .grid-2,
          .nearby-grid {
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
          .qualification-grid {
            grid-template-columns: 1fr;
          }

          .photo-card.featured-photo {
            grid-column: span 1;
          }

          .featured-photo .photo,
          .photo {
            height: 240px;
          }

          .hero {
            padding: 34px 16px 24px;
          }

          .section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .hero-copy,
          .hero-profile,
          .feature-band,
          .contact-card,
          .map-card {
            border-radius: 24px;
            padding: 24px;
          }

          h1 {
            font-size: 40px;
          }

          .lead {
            font-size: 18px;
          }

          .button {
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

          .map-frame {
            padding-bottom: 72%;
            border-radius: 18px;
          }

          .floating-quote {
            left: 12px;
            right: 12px;
            bottom: 12px;
            width: auto;
            border-radius: 22px;
          }

          .floating-phone {
            min-height: 54px;
            font-size: 18px;
          }

          .floating-secondary {
            grid-template-columns: 1fr;
          }

          .footer {
            padding-bottom: 230px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pulse-dot,
          .signature,
          .signature-name,
          .signature-name::after,
          .floating-label::before {
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
            <a href="#dla-organow">Dla organów</a>
            <a href="#czynnosci">Czynności</a>
            <a href="#material-cyfrowy">Materiał cyfrowy</a>
            <a href="#kancelaria">Kancelaria</a>
            <a href="#lokalizacja">Lokalizacja</a>
            <a href="#profil">Profil</a>
            <a href="/kwalifikacje">Kwalifikacje</a>
            <a className="nav-cta" href={`tel:${phoneHref}`}>
              {phoneDisplay}
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
            Tłumaczenia poświadczone i ustne dla sądów, prokuratury i Policji.
            Dokumenty procesowe, akta spraw, protokoły, czynności, materiały
            dowodowe, komunikatory, raporty forensic i dokumenty transgraniczne
            z Ukrainą.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={`mailto:${email}`}>
              Prześlij dokument do wyceny
            </a>
            <a className="button button-secondary" href={`tel:${phoneHref}`}>
              Zadzwoń: {phoneDisplay}
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
              <span>
                Kontakt: {phoneDisplay} · {email}
              </span>
            </div>
          </div>
        </aside>
      </section>

      <section className="section" id="dla-organow">
        <div className="section-header">
          <div>
            <div className="section-kicker">Sąd · Prokuratura · Policja</div>
            <h2>Tłumaczenia dla organów i czynności formalnych.</h2>
          </div>
          <p className="section-intro">
            Główna oferta kancelarii jest skierowana do spraw, w których
            dokument, wypowiedź albo materiał cyfrowy może mieć znaczenie
            procesowe, dowodowe lub urzędowe.
          </p>
        </div>

        <div className="grid-3">
          {mainSegments.map((item) => (
            <article className="card card-dark" key={item.title}>
              <span className="tag">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
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
            <div className="section-kicker">Typowe materiały</div>
            <h2>Dokumenty i treści kierowane do tłumaczenia.</h2>
          </div>

          <div>
            <p>
              Zakres pracy obejmuje dokumenty klasyczne, materiały procesowe,
              korespondencję, treści cyfrowe oraz dokumenty przekazywane w
              sprawach transgranicznych.
            </p>

            <div className="pill-list" style={{ marginTop: 22 }}>
              {commonMaterials.map((item) => (
                <span className="pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="czynnosci">
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
        <div className="section-header">
          <div>
            <div className="section-kicker">IT · dowody cyfrowe</div>
            <h2>Komunikatory, raporty forensic i dane cyfrowe.</h2>
          </div>
          <p className="section-intro">
            Tłumaczenie może obejmować nie tylko klasyczne dokumenty, lecz także
            treści pochodzące z telefonów, komunikatorów, raportów technicznych,
            zrzutów ekranu, nagrań, zdjęć i dużych plików PDF.
          </p>
        </div>

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
        <div className="feature-band">
          <div>
            <div className="section-kicker">
              Ukraina · dokumenty transgraniczne
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

      <section className="section" id="jezyki">
        <div className="section-header">
          <div>
            <div className="section-kicker">Języki pracy</div>
            <h2>Ukraiński przysięgły. Rosyjski i angielski specjalistyczne.</h2>
          </div>
          <p className="section-intro">
            Uprawnienia tłumacza przysięgłego dotyczą języka ukraińskiego.
            Język rosyjski i angielski występują w ofercie jako tłumaczenia
            specjalistyczne.
          </p>
        </div>

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
        <div className="section-header">
          <div>
            <div className="section-kicker">Kancelaria</div>
            <h2>Kancelaria tłumacza przysięgłego i zaplecze pracy z dokumentami.</h2>
          </div>
          <p className="section-intro">
            Tłumaczenia poświadczone i procesowe wymagają nie tylko przekładu,
            ale również właściwej organizacji dokumentów, kontroli wersji,
            przygotowania wydruków, kompletowania materiałów oraz zachowania
            poufności.
          </p>
        </div>

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
        <div className="section-header">
          <div>
            <div className="section-kicker">Kwalifikacje</div>
            <h2>Uprawnienia zawodowe i przygotowanie specjalistyczne.</h2>
          </div>
          <p className="section-intro">
            Strona kwalifikacji zawiera certyfikaty, dyplomy i dokumenty
            potwierdzające uprawnienia oraz przygotowanie do pracy z dokumentami
            prawnymi, technologicznymi i procesowymi.
          </p>
        </div>

        <div className="qualification-grid">
          {qualifications.map((item) => (
            <article className="card" key={item.title}>
              <span className="tag">Kwalifikacje</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="hero-actions">
          <a className="button button-primary" href="/kwalifikacje">
            Zobacz kwalifikacje i certyfikaty
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
          <div className="map-header">
            <div>
              <div className="section-kicker">Lokalizacja</div>
              <h2>Kancelaria przy Rondzie Mogilskim w Krakowie.</h2>
            </div>

            <p>
              Kancelaria tłumacza przysięgłego języka ukraińskiego znajduje się
              przy ul. Kieleckiej 2/53 w Krakowie. Lokalizacja jest dogodna dla
              osób i instytucji współpracujących z sądami, prokuraturą, Policją,
              urzędami oraz Konsulatem Ukrainy.
            </p>
          </div>

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
                    Zobacz trasę w Google Maps →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="map-note">
            Położenie przy Rondzie Mogilskim zapewnia dogodny dojazd tramwajem i
            autobusem z większości dzielnic Krakowa, a także z miejscowości
            Małopolski, w tym z Wieliczki, Bochni, Myślenic, Tarnowa, Nowego
            Sącza i Nowego Targu.
          </p>
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
              {profileItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="linkedin-card" style={{ marginTop: 24 }}>
              <div className="linkedin-head">
                <div className="linkedin-icon" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.795-1.75-1.732s.784-1.732 1.75-1.732 1.75.795 1.75 1.732-.784 1.732-1.75 1.732zm13.5 11.268h-3v-5.604c0-1.337-.025-3.061-1.865-3.061-1.867 0-2.154 1.459-2.154 2.968v5.697h-3v-10h2.882v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.04 0 3.6 2.003 3.6 4.609v5.587z" />
                  </svg>
                </div>

                <div>
                  <h3>LinkedIn</h3>
                  <p>
                    Vadym Rekel · profil zawodowy, kwalifikacje i doświadczenie
                    specjalistyczne.
                  </p>
                </div>
              </div>

              <a
                className="linkedin-button"
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Zobacz profil LinkedIn
              </a>
            </div>
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

      <section className="section" id="kontakt">
        <div className="contact-card">
          <div>
            <div className="section-kicker">Kontakt</div>
            <h2>Prześlij dokument albo informację o czynności.</h2>
          </div>

          <div>
            <p>
              W wiadomości wskaż język, rodzaj materiału, cel wykorzystania,
              termin oraz informację, czy chodzi o tłumaczenie pisemne, ustne,
              czynność wyjazdową albo materiał cyfrowy.
            </p>

            <div className="contact-actions" style={{ marginTop: 22 }}>
              <a className="contact-link" href={`tel:${phoneHref}`}>
                Telefon: {phoneDisplay}
              </a>

              <a className="contact-link" href={`mailto:${email}`}>
                E-mail: {email}
              </a>

              <a
                className="contact-link"
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn — Vadym Rekel
              </a>

              <a className="contact-link" href="/kwalifikacje">
                Kwalifikacje i certyfikaty
              </a>
            </div>
          </div>
        </div>
      </section>

      <aside className="floating-quote" aria-label="Pływający przycisk szybkiej wyceny">
        <div className="floating-quote-top">
          <span className="floating-label">Szybka wycena</span>
          <span className="floating-close-note">kancelaria</span>
        </div>

        <div className="floating-main">
          <a className="floating-phone" href={`tel:${phoneHref}`}>
            📞 {phoneDisplay}
          </a>

          <div className="floating-secondary">
            <a className="floating-link" href={`mailto:${email}`}>
              Wyślij dokument
            </a>

            <a
              className="floating-link"
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <p className="floating-text">
            Do wstępnej wyceny wystarczy skan, PDF, zdjęcie dokumentu albo opis
            czynności.
          </p>
        </div>
      </aside>

      <footer className="footer">
        <div className="footer-inner">
          <span>
            © 2026 Kancelaria Vadym Rekel — Tłumacz przysięgły języka
            ukraińskiego
          </span>
          <span>TP/27/17 · CIOL no. 94280 · TEPIS Member 2026</span>
          <span>ul. Kielecka 2/53, 31-526 Kraków · cała Polska</span>
        </div>
      </footer>
    </main>
  );
}