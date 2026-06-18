import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Tłumacz przysięgły języka ukraińskiego dla sądów, prokuratury i Policji",
  description:
    "Kancelaria tłumacza przysięgłego języka ukraińskiego w Krakowie. Tłumaczenia pisemne i ustne dla sądów, prokuratury i Policji. Materiały dowodowe, akta spraw, protokoły, komunikatory, raporty forensic, pomoc prawna z Ukrainą. Obsługa dokumentów z całej Polski.",
  keywords: [
    "tłumacz przysięgły języka ukraińskiego",
    "tłumacz przysięgły ukraiński",
    "tłumacz ukraiński sąd",
    "tłumacz ukraiński prokuratura",
    "tłumacz ukraiński Policja",
    "tłumaczenie dokumentów procesowych ukraiński",
    "tłumaczenie akt sprawy ukraiński",
    "tłumaczenie protokołów ukraiński",
    "tłumaczenie komunikatorów ukraiński",
    "tłumaczenie raportów forensic",
    "tłumacz ukraiński Kraków"
  ]
};

const email = "vadym.rekel@tlumaczrosyjskiegoiukrainskiego.pl";

const mainSegments = [
  {
    title: "Sąd",
    eyebrow: "Dokumenty do akt sprawy",
    text: "Wyroki, postanowienia, wezwania, pouczenia, protokoły, pisma procesowe, akty oskarżenia, załączniki, opinie i materiały dowodowe.",
    href: "/tlumaczenia-sadowe-ukrainski"
  },
  {
    title: "Prokuratura",
    eyebrow: "Postępowanie przygotowawcze",
    text: "Materiały z postępowań karnych, protokoły przesłuchań, postanowienia, wnioski o pomoc prawną, zawiadomienia i dokumenty organów ścigania.",
    href: "/tlumaczenia-dla-prokuratury"
  },
  {
    title: "Policja",
    eyebrow: "Czynności i materiały dowodowe",
    text: "Tłumaczenia ustne i pisemne przy czynnościach procesowych, przesłuchaniach, protokołach, pouczeniach, notatkach, komunikatorach, zrzutach ekranu, audio i wideo.",
    href: "/tlumaczenia-dla-policji"
  }
];

const digitalItems = [
  {
    title: "Komunikatory i wiadomości",
    text: "Telegram, WhatsApp, Signal, Messenger, Viber, SMS/MMS, e-mail, historia połączeń, kontakty, załączniki i eksporty rozmów."
  },
  {
    title: "Raporty z urządzeń mobilnych",
    text: "Tłumaczenie treści z raportów wygenerowanych z telefonu lub innego urządzenia mobilnego, w tym wiadomości, plików, zdjęć, danych aplikacji i fragmentów istotnych dla sprawy."
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
    label: "Przysięgły i specjalistyczny",
    text: "Główny język kancelarii. Poświadczone tłumaczenia pisemne oraz tłumaczenia ustne przy czynnościach sądowych, prokuratorskich i policyjnych."
  },
  {
    title: "Rosyjski",
    label: "Specjalistyczny",
    text: "Tłumaczenia specjalistyczne dokumentów prawnych, technicznych, urzędowych, korespondencji, materiałów cyfrowych i treści wykorzystywanych w sprawach formalnych."
  },
  {
    title: "Angielski",
    label: "Specjalistyczny",
    text: "Tłumaczenia dokumentacji prawnej, technologicznej, biznesowej, IT, raportów, korespondencji i materiałów wymagających precyzyjnej terminologii."
  }
];

const officePhotos = [
  {
    src: "/images/kancelaria-tlumacza-przysieglego-ukrainski-krakow-vadym-rekel-01.jpg",
    alt: "Kancelaria tłumacza przysięgłego języka ukraińskiego w Krakowie",
    title: "Kancelaria w Krakowie",
    text: "Miejsce pracy z dokumentami procesowymi, urzędowymi i poświadczonymi."
  },
  {
    src: "/images/stanowisko-tlumacza-przysieglego-ukrainski-krakow-macbook-pro-vadym-rekel.jpg",
    alt: "Stanowisko pracy tłumacza przysięgłego języka ukraińskiego",
    title: "Stanowisko tłumacza",
    text: "Praca z dokumentami formalnymi, materiałami dowodowymi i plikami cyfrowymi."
  },
  {
    src: "/images/stanowisko-komputerowe-bieglego-tlumacza-macbook-pro-vadym-rekel.jpg",
    alt: "Stanowisko komputerowe biegłego tłumacza",
    title: "Materiał cyfrowy",
    text: "Analiza plików, raportów, komunikatorów, dokumentów PDF i dużych zbiorów danych."
  },
  {
    src: "/images/drukarki-hp-pagewide-kancelaria-tlumacza-vadym-rekel.jpg",
    alt: "Drukarki w kancelarii tłumacza przysięgłego",
    title: "Druk i kompletowanie",
    text: "Przygotowanie tłumaczeń poświadczonych do odbioru, wysyłki albo złożenia do akt."
  },
  {
    src: "/images/laptop-windows-bitlocker-kancelaria-tlumacza-vadym-rekel.jpg",
    alt: "Laptop z zabezpieczeniami w kancelarii tłumacza",
    title: "Praca z plikami",
    text: "Obsługa dokumentów elektronicznych, plików PDF, raportów i materiałów źródłowych."
  },
  {
    src: "/images/niszczarka-dokumentow-hsm-shredstar-x15-kancelaria-vadym-rekel.jpg",
    alt: "Niszczarka dokumentów w kancelarii tłumacza",
    title: "Poufność dokumentów",
    text: "Kontrola obiegu materiałów roboczych i dokumentów zawierających dane osobowe."
  }
];

const qualifications = [
  "Tłumacz przysięgły języka ukraińskiego, nr TP/27/17",
  "Wpis na listę Ministra Sprawiedliwości od 2017 r.",
  "CIOL — Chartered Institute of Linguists, CIOL no. 94280",
  "TEPIS Member 2026",
  "MBA — Master of Business Administration",
  "Prawo nowych technologii",
  "Prawo własności intelektualnej i nowych technologii",
  "Prawo karne materialne i procesowe"
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
          background: rgba(245, 240, 230, 0.88);
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
          gap: 18px;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: var(--muted);
        }

        .nav-links a:hover {
          color: var(--ink);
        }

        .nav-cta {
          padding: 11px 16px;
          border-radius: 999px;
          background: var(--green);
          color: #fff;
          box-shadow: 0 10px 25px rgba(18, 60, 49, 0.18);
        }

        .hero {
          max-width: 1220px;
          margin: 0 auto;
          padding: 46px 22px 36px;
          display: grid;
          grid-template-columns: 1.02fr 0.98fr;
          gap: 28px;
          align-items: stretch;
        }

        .hero-copy {
          border: 1px solid var(--line);
          border-radius: var(--radius);
          background: rgba(255, 250, 242, 0.82);
          box-shadow: var(--shadow);
          padding: 46px 46px 42px;
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
          font-size: clamp(40px, 4.8vw, 66px);
          line-height: 0.92;
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
          max-width: 560px;
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
          border-radius: 22px;
          background: rgba(255, 250, 242, 0.93);
          padding: 14px 22px;
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.24);
          transform: rotate(-1.5deg);
          animation: signatureFloat 4.8s ease-in-out infinite;
        }

        .signature::after {
          content: "";
          position: absolute;
          left: 22px;
          right: 22px;
          bottom: 10px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(19, 16, 12, 0.28),
            transparent
          );
          opacity: 0.7;
        }

        .signature img {
          display: block;
          width: 100%;
          height: auto;
          filter: contrast(1.08);
        }

        @keyframes signatureFloat {
          0% {
            transform: translateY(0) rotate(-1.5deg);
          }

          50% {
            transform: translateY(-7px) rotate(-0.4deg);
          }

          100% {
            transform: translateY(0) rotate(-1.5deg);
          }
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

        .trust-row {
          margin-top: 18px;
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .trust-pill {
          padding: 8px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.09);
          border: 1px solid rgba(255,255,255,0.10);
          color: rgba(255,255,255,0.78);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 800;
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

        .photo {
          height: 230px;
          overflow: hidden;
          background: var(--paper-2);
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
          font-size: 23px;
        }

        .qualification-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .qualification-item {
          padding: 15px 16px;
          border-radius: 18px;
          background: rgba(255,250,242,0.72);
          border: 1px solid var(--line);
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          font-weight: 750;
          line-height: 1.35;
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

        .footer {
          border-top: 1px solid var(--line);
          padding: 34px 22px 46px;
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

        @media (max-width: 1080px) {
          .hero,
          .section-header,
          .feature-band,
          .contact-card {
            grid-template-columns: 1fr;
          }

          .grid-4 {
            grid-template-columns: repeat(2, 1fr);
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
          .photo-grid {
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
          .qualification-list {
            grid-template-columns: 1fr;
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
          .contact-card {
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
          }
        }
      `}</style>

      <div className="topbar">
        <nav className="nav">
          <a className="brand" href="/" aria-label="Strona główna">
            <span className="brand-mark">VR</span>
            <span className="brand-title">
              Vadym Rekel
              <span className="brand-subtitle">
                Tłumacz przysięgły języka ukraińskiego
              </span>
            </span>
          </a>

          <div className="nav-links">
            <a href="#dla-organow">Dla organów</a>
            <a href="#material-cyfrowy">Materiał cyfrowy</a>
            <a href="#czynnosci">Czynności</a>
            <a href="#jezyki">Języki</a>
            <a href="/kwalifikacje">Kwalifikacje</a>
            <a className="nav-cta" href={`mailto:${email}`}>
              Szybka wycena
            </a>
          </div>
        </nav>
      </div>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="pulse-dot" />
            Kraków · cała Polska · online
          </span>

          <h1>
            Kancelaria tłumacza przysięgłego języka ukraińskiego dla sądów,
            prokuratury i Policji.
          </h1>

          <p className="lead">
            Poświadczone tłumaczenia pisemne i ustne języka ukraińskiego w
            sprawach procesowych, dowodowych, karnych i transgranicznych.
            Siedziba w Krakowie. Obsługa dokumentów z całej Polski.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={`mailto:${email}`}>
              Prześlij dokument do wyceny
            </a>
            <a className="button button-secondary" href="#dla-organow">
              Zobacz zakres
            </a>
          </div>

          <p className="hero-note">
            Język ukraiński — tłumaczenia przysięgłe i specjalistyczne. Język
            rosyjski i angielski — tłumaczenia specjalistyczne dokumentów
            prawnych, technicznych i cyfrowych.
          </p>
        </div>

        <aside className="hero-profile">
          <div className="portrait-wrap">
            <img
              src="/images/vadym%20rekel.jpg"
              alt="Vadym Rekel tłumacz przysięgły języka ukraińskiego Kraków"
            />
          </div>

          <div className="signature">
            <img
              src="/images/vadym%20rekel%20podpis.gif"
              alt="Podpis Vadym Rekel"
            />
          </div>

          <div className="profile-card">
            <h2>Vadym Rekel</h2>
            <p>
              Tłumacz przysięgły języka ukraińskiego, nr TP/27/17. Praca z
              dokumentami procesowymi, materiałami dowodowymi i treściami
              specjalistycznymi.
            </p>

            <div className="trust-row">
              <span className="trust-pill">TP/27/17</span>
              <span className="trust-pill">CIOL no. 94280</span>
              <span className="trust-pill">TEPIS 2026</span>
              <span className="trust-pill">Kraków</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="section" id="dla-organow">
        <div className="section-header">
          <div>
            <div className="section-kicker">Dla organów</div>
            <h2>Sąd, prokuratura i Policja.</h2>
          </div>
          <p className="section-intro">
            Główna oferta kancelarii jest skierowana do organów i czynności, w
            których dokument, wypowiedź albo materiał cyfrowy może mieć
            znaczenie procesowe, dowodowe lub urzędowe.
          </p>
        </div>

        <div className="grid-3">
          {mainSegments.map((item) => (
            <article className="card card-dark" key={item.title}>
              <span className="tag">{item.eyebrow}</span>
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
            <div className="section-kicker">Dokument w sprawie</div>
            <h2>Nie każdy dokument jest zwykłym dokumentem.</h2>
          </div>
          <p>
            W postępowaniu dokument może być protokołem, pouczeniem,
            postanowieniem, dowodem, załącznikiem, korespondencją, raportem
            technicznym albo zapisem rozmowy. W takich sprawach znaczenie mają
            daty, nazwiska, sygnatury, kolejność informacji, oznaczenia i
            kontekst użycia dokumentu.
          </p>
        </div>
      </section>

      <section className="section" id="material-cyfrowy">
        <div className="section-header">
          <div>
            <div className="section-kicker">IT · dowody cyfrowe</div>
            <h2>Materiały cyfrowe, komunikatory i raporty forensic.</h2>
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

      <section className="section" id="czynnosci">
        <div className="grid-2">
          <article className="card">
            <span className="tag">Ustnie i w terenie</span>
            <h3>Tłumaczenia ustne przy czynnościach.</h3>
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
            <span className="tag">Osadzeni</span>
            <h3>Pisma odręczne i korespondencja osadzonych.</h3>
            <p>
              Tłumaczenie ręcznie sporządzonych pism, listów, oświadczeń, próśb,
              skarg, wyjaśnień i korespondencji wymaga pracy z trudnym pismem,
              skrótami, nieformalnym językiem i kontekstem sprawy.
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

      <section className="section">
        <div className="feature-band">
          <div>
            <div className="section-kicker">Ukraina · transgranicznie</div>
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
            specjalistyczne, szczególnie w dokumentach prawnych, technicznych i
            cyfrowych.
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
            <h2>Realne zaplecze pracy z dokumentami.</h2>
          </div>
          <p className="section-intro">
            Dokumenty formalne i materiały dowodowe wymagają nie tylko
            tłumaczenia, ale też odpowiedniego obiegu plików, przygotowania
            technicznego, druku, kompletowania i zachowania poufności.
          </p>
        </div>

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
            <span className="tag">Klient indywidualny</span>
            <h3>Dokumenty prywatne i urzędowe.</h3>
            <p>
              Obsługuję również dokumenty osób prywatnych: dokumenty z Ukrainy,
              akty stanu cywilnego, pełnomocnictwa, oświadczenia, dokumenty
              pobytowe, rodzinne i urzędowe. Ten zakres pozostaje poboczny
              wobec głównej specjalizacji instytucjonalnej.
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="kwalifikacje">
        <div className="section-header">
          <div>
            <div className="section-kicker">Kwalifikacje</div>
            <h2>Uprawnienia i przygotowanie specjalistyczne.</h2>
          </div>
          <p className="section-intro">
            Połączenie uprawnień tłumacza przysięgłego języka ukraińskiego z
            przygotowaniem prawnym, technologicznym i organizacyjnym wspiera
            pracę z dokumentami złożonymi, dowodowymi i cyfrowymi.
          </p>
        </div>

        <div className="card">
          <div className="qualification-list">
            {qualifications.map((item) => (
              <div className="qualification-item" key={item}>
                {item}
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <a className="button button-primary" href="/kwalifikacje">
              Zobacz kwalifikacje i certyfikaty
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="lokalizacja">
        <div className="feature-band">
          <div>
            <div className="section-kicker">Kraków · cała Polska</div>
            <h2>Siedziba w Krakowie. Obsługa dokumentów z całej Polski.</h2>
          </div>
          <p>
            Kancelaria mieści się przy ul. Kieleckiej 2/53 w Krakowie, w
            rejonie Ronda Mogilskiego. Dokumenty do wstępnej wyceny można
            przesłać elektronicznie z dowolnego miejsca w Polsce. Czynności
            ustne ustalane są indywidualnie, zależnie od miejsca, terminu i
            charakteru sprawy.
          </p>
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
              <a className="contact-link" href={`mailto:${email}`}>
                {email}
              </a>
              <a className="contact-link" href="/kwalifikacje">
                Kwalifikacje i certyfikaty
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <span>© 2026 Vadym Rekel — Tłumacz przysięgły języka ukraińskiego</span>
          <span>TP/27/17 · CIOL no. 94280 · TEPIS Member 2026</span>
          <span>ul. Kielecka 2/53, 31-526 Kraków · cała Polska</span>
        </div>
      </footer>
    </main>
  );
}