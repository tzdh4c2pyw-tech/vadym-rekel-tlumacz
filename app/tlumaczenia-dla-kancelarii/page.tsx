import type { Metadata } from "next";

const siteUrl = "https://vadymrekel.pro";
const email = "biegly@vadymrekel.pl";
const phoneDisplay = "883 040 483";
const phoneHref = "+48883040483";

export const metadata: Metadata = {
  title: "Tłumaczenia dla kancelarii prawnych | Tłumacz przysięgły ukraiński",
  description:
    "Tłumaczenia poświadczone języka ukraińskiego dla kancelarii prawnych: akta spraw, pisma procesowe, dokumenty z Ukrainy, korespondencja, protokoły i materiał cyfrowy.",
  alternates: {
    canonical: `${siteUrl}/tlumaczenia-dla-kancelarii`
  },
  openGraph: {
    title: "Tłumaczenia dla kancelarii prawnych | Vadym Rekel",
    description:
      "Tłumaczenia poświadczone języka ukraińskiego dla adwokatów, radców prawnych i kancelarii prawnych.",
    url: `${siteUrl}/tlumaczenia-dla-kancelarii`,
    type: "website",
    locale: "pl_PL"
  }
};

const materials = [
  "pisma procesowe",
  "pełnomocnictwa",
  "akty spraw",
  "wyroki i postanowienia",
  "protokoły przesłuchań",
  "dokumenty z Ukrainy",
  "korespondencja z klientem",
  "materiał cyfrowy",
  "zrzuty ekranu i komunikatory",
  "załączniki do pism",
  "dokumenty urzędowe",
  "pisma odręczne"
];

const cards = [
  {
    label: "Proces",
    title: "Dokumenty sądowe i procesowe",
    text: "Tłumaczenia poświadczone dokumentów wykorzystywanych w postępowaniach cywilnych, karnych, rodzinnych, administracyjnych i gospodarczych."
  },
  {
    label: "Ukraina",
    title: "Dokumenty klientów z Ukrainy",
    text: "Akty stanu cywilnego, dokumenty urzędowe, zaświadczenia, oświadczenia, pełnomocnictwa, dokumenty edukacyjne i materiały przekazywane do polskich organów."
  },
  {
    label: "Dowody",
    title: "Materiał cyfrowy i korespondencja",
    text: "Komunikatory, zrzuty ekranu, wiadomości, pliki PDF, raporty, tabele i inne materiały przekazywane jako załączniki albo materiał dowodowy."
  }
];

export default function LawFirmsPage() {
  return (
    <main>
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
          --shadow: 0 24px 70px rgba(25, 22, 18, 0.10);
        }

        * { box-sizing: border-box; }

        body {
          margin: 0;
          background:
            radial-gradient(circle at 12% -4%, rgba(182, 138, 58, 0.18), transparent 32%),
            radial-gradient(circle at 92% 8%, rgba(18, 60, 49, 0.12), transparent 30%),
            linear-gradient(180deg, #fbf7ef 0%, #f3ecdf 48%, #eee5d7 100%);
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
          z-index: 20;
          border-bottom: 1px solid var(--line);
          background: rgba(245, 240, 230, 0.94);
          backdrop-filter: blur(18px);
        }

        .nav {
          max-width: 1220px;
          margin: 0 auto;
          padding: 16px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-weight: 900;
        }

        .mark {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--green);
          color: #fff;
          letter-spacing: -0.05em;
        }

        .navlinks {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 850;
        }

        .navlinks a {
          padding: 9px 11px;
          border-radius: 999px;
        }

        .navlinks a:hover {
          background: rgba(18, 60, 49, 0.08);
          color: var(--green);
        }

        .phone {
          background: var(--green);
          color: #fff;
        }

        .hero {
          max-width: 1220px;
          margin: 0 auto;
          padding: 58px 22px 38px;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 26px;
        }

        .hero-main,
        .hero-side,
        .section-card,
        .card,
        .cta {
          border: 1px solid var(--line);
          background:
            linear-gradient(145deg, rgba(255, 250, 242, 0.96), rgba(248, 241, 230, 0.88));
          box-shadow: var(--shadow);
        }

        .hero-main {
          border-radius: 40px;
          padding: 58px 52px;
          min-height: 560px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-side {
          border-radius: 40px;
          padding: 34px;
          min-height: 560px;
          background:
            linear-gradient(145deg, rgba(18, 60, 49, 0.98), rgba(13, 41, 35, 0.98));
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .eyebrow,
        .section-label,
        .tag {
          display: inline-flex;
          width: fit-content;
          border-radius: 999px;
          background: rgba(18, 60, 49, 0.08);
          border: 1px solid rgba(18, 60, 49, 0.12);
          color: var(--green);
          padding: 8px 12px;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .hero-side .eyebrow,
        .hero-side .tag {
          background: rgba(255, 255, 255, 0.10);
          border-color: rgba(255, 255, 255, 0.14);
          color: rgba(255, 255, 255, 0.86);
        }

        h1 {
          margin: 22px 0 0;
          max-width: 820px;
          font-size: clamp(42px, 5vw, 72px);
          line-height: 0.94;
          letter-spacing: -0.07em;
        }

        .lead {
          margin: 24px 0 0;
          color: rgba(19, 16, 12, 0.70);
          font-size: 20px;
          line-height: 1.55;
        }

        .actions {
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

        .hero-side h2 {
          margin: 22px 0 0;
          font-size: 38px;
          line-height: 0.98;
          letter-spacing: -0.05em;
        }

        .hero-side p {
          color: rgba(255, 255, 255, 0.76);
          font-size: 17px;
          line-height: 1.6;
        }

        .side-list {
          display: grid;
          gap: 12px;
          margin-top: 24px;
        }

        .side-item {
          border-radius: 18px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.09);
          border: 1px solid rgba(255, 255, 255, 0.13);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          font-weight: 850;
        }

        .section {
          max-width: 1220px;
          margin: 0 auto;
          padding: 54px 22px;
        }

        .section-heading {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 28px;
          align-items: end;
          margin-bottom: 30px;
          padding-bottom: 22px;
          border-bottom: 1px solid rgba(19, 16, 12, 0.10);
        }

        .section-heading h2 {
          margin: 12px 0 0;
          font-size: clamp(34px, 4vw, 58px);
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .section-heading p {
          margin: 0;
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .card {
          border-radius: 30px;
          padding: 28px;
        }

        .card h3 {
          margin: 16px 0 12px;
          font-size: 30px;
          line-height: 1.02;
          letter-spacing: -0.045em;
        }

        .card p {
          margin: 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.58;
        }

        .materials {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .material {
          border-radius: 999px;
          padding: 10px 13px;
          background: rgba(255, 250, 242, 0.88);
          border: 1px solid var(--line);
          color: var(--green);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 900;
        }

        .cta {
          border-radius: 34px;
          padding: 42px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: center;
          background:
            linear-gradient(135deg, rgba(18, 60, 49, 0.96), rgba(13, 41, 35, 0.98));
          color: #fff;
        }

        .cta h2 {
          margin: 0;
          font-size: clamp(34px, 4vw, 56px);
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .cta p {
          color: rgba(255, 255, 255, 0.76);
          font-size: 17px;
          line-height: 1.58;
        }

        .cta .button-secondary {
          background: rgba(255, 255, 255, 0.10);
          border-color: rgba(255, 255, 255, 0.15);
          color: #fff;
        }

        footer {
          border-top: 1px solid var(--line);
          padding: 34px 22px 54px;
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
        }

        .footer-inner {
          max-width: 1220px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 22px;
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

        @media (max-width: 920px) {
          .hero,
          .section-heading,
          .grid-3,
          .cta,
          .footer-inner {
            grid-template-columns: 1fr;
          }

          .nav {
            align-items: flex-start;
          }

          .navlinks {
            flex-wrap: wrap;
            justify-content: flex-end;
          }

          .hero-main,
          .hero-side {
            min-height: auto;
          }
        }

        @media (max-width: 620px) {
          .nav {
            flex-direction: column;
            align-items: stretch;
          }

          .hero,
          .section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .hero-main,
          .hero-side,
          .cta {
            border-radius: 28px;
            padding: 30px 24px;
          }

          h1 {
            font-size: 42px;
          }

          .button {
            width: 100%;
          }
        }
      `}</style>

      <div className="topbar">
        <nav className="nav">
          <a className="brand" href="/">
            <span className="mark">VR</span>
            <span>Kancelaria Mgr Vadym Rekel</span>
          </a>

          <div className="navlinks">
            <a href="/">Strona główna</a>
            <a href="/tlumaczenia-sprawy-karne-ukrainski">Sprawy karne</a>
            <a href="/kwalifikacje">Kwalifikacje</a>
            <a href="/kontakt">Kontakt</a>
            <a className="phone" href={`tel:${phoneHref}`}>{phoneDisplay}</a>
          </div>
        </nav>
      </div>

      <section className="hero">
        <div className="hero-main">
          <span className="eyebrow">Dla kancelarii prawnych · język ukraiński</span>
          <h1>Tłumaczenia poświadczone dla kancelarii prawnych.</h1>
          <p className="lead">
            Tłumaczenia języka ukraińskiego dla adwokatów, radców prawnych, pełnomocników, działów prawnych i kancelarii obsługujących klientów z Ukrainy albo sprawy wymagające dokumentów ukraińskojęzycznych.
          </p>

          <div className="actions">
            <a className="button button-primary" href={`tel:${phoneHref}`}>
              Zadzwoń: {phoneDisplay}
            </a>
            <a className="button button-secondary" href={`mailto:${email}`}>
              Wyślij dokument do wyceny
            </a>
          </div>
        </div>

        <aside className="hero-side">
          <div>
            <span className="eyebrow">TP/27/17</span>
            <h2>Dokument jako element sprawy.</h2>
            <p>
              W pracy z kancelariami ważne jest nie tylko tłumaczenie treści, ale także rozumienie funkcji dokumentu: jako dowodu, załącznika, pisma procesowego albo materiału przekazywanego organowi.
            </p>
          </div>

          <div className="side-list">
            <div className="side-item">Wstępna wycena na podstawie skanu, zdjęcia albo PDF.</div>
            <div className="side-item">Obsługa dokumentów procesowych, urzędowych i prywatnych.</div>
            <div className="side-item">Kontakt bezpośredni z tłumaczem: {phoneDisplay}.</div>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section-label">Zakres obsługi</span>
            <h2>Materiały najczęściej przekazywane przez kancelarie.</h2>
          </div>
          <p>
            Kancelaria obsługuje dokumenty w sprawach sądowych, karnych, rodzinnych, cywilnych, administracyjnych i gospodarczych. Materiał można przesłać elektronicznie do wstępnej wyceny.
          </p>
        </div>

        <div className="grid-3">
          {cards.map((item) => (
            <article className="card" key={item.title}>
              <span className="tag">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section-label">Dokumenty</span>
            <h2>Typowe rodzaje materiałów.</h2>
          </div>
          <p>
            Lista obejmuje przykładowe dokumenty i materiały. Wycena zależy od objętości, jakości skanu, terminu oraz charakteru sprawy.
          </p>
        </div>

        <div className="materials">
          {materials.map((item) => (
            <span className="material" key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="cta">
          <div>
            <h2>Wyślij dokument do wstępnej wyceny.</h2>
            <p>
              Do wyceny wystarczy czytelny skan, zdjęcie albo plik PDF. W wiadomości można wskazać termin, rodzaj sprawy oraz sposób odbioru tłumaczenia.
            </p>
          </div>

          <div className="actions">
            <a className="button button-primary" href={`tel:${phoneHref}`}>
              {phoneDisplay}
            </a>
            <a className="button button-secondary" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div>
            <span className="footer-title">Kancelaria Mgr Vadym Rekel</span>
            <span className="footer-line">Tłumacz przysięgły języka ukraińskiego · TP/27/17</span>
            <span className="footer-line">ul. Kielecka 2/53, 31-526 Kraków</span>
          </div>

          <div>
            <span className="footer-title">Kontakt</span>
            <span className="footer-line">Telefon: <a href={`tel:${phoneHref}`}>{phoneDisplay}</a></span>
            <span className="footer-line">E-mail: <a href={`mailto:${email}`}>{email}</a></span>
          </div>
        </div>
      </footer>
    </main>
  );
}
