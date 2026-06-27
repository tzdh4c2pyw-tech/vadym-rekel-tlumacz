import type { Metadata } from "next";

const siteUrl = "https://vadymrekel.pro";
const pageUrl = `${siteUrl}/tlumaczenia-sprawy-karne-ukrainski`;

export const metadata: Metadata = {
  title:
    "Tłumaczenia spraw karnych ukraiński | Tłumacz przysięgły Vadym Rekel",
  description:
    "Tłumaczenia poświadczone języka ukraińskiego w sprawach karnych: akta, protokoły, postanowienia, korespondencja osadzonych, dokumenty z Ukrainy i materiał cyfrowy.",
  keywords: [
    "tłumaczenia sprawy karne ukraiński",
    "tłumacz przysięgły ukraiński sprawy karne",
    "tłumaczenie akt karnych ukraiński",
    "tłumaczenie protokołów ukraiński",
    "tłumacz ukraiński sąd karny",
    "tłumacz ukraiński prokuratura",
    "Vadym Rekel"
  ],
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title:
      "Tłumaczenia spraw karnych ukraiński | Tłumacz przysięgły Vadym Rekel",
    description:
      "Tłumaczenia dokumentów procesowych, akt spraw karnych, protokołów, korespondencji osadzonych i materiału cyfrowego w języku ukraińskim.",
    url: pageUrl,
    type: "website",
    locale: "pl_PL"
  }
};

const phoneDisplay = "883 040 483";
const phoneHref = "+48883040483";
const email = "biegly@vadymrekel.pl";

const materials = [
  "akta spraw karnych",
  "protokoły przesłuchań",
  "postanowienia i zarządzenia",
  "pisma procesowe",
  "korespondencja osadzonych",
  "dokumenty z Ukrainy",
  "zrzuty ekranu i komunikatory",
  "raporty PDF i materiał cyfrowy"
];

export default function CriminalCasesPage() {
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
          --gold: #b68a3a;
          --shadow: 0 18px 48px rgba(25, 22, 18, 0.10);
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background:
            radial-gradient(circle at 8% 0%, rgba(182, 138, 58, 0.12), transparent 30%),
            linear-gradient(180deg, #f8f3ea 0%, var(--bg) 60%, #f1ebdf 100%);
          color: var(--ink);
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .page {
          max-width: 1180px;
          margin: 0 auto;
          padding: 34px 22px 80px;
        }

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          margin-bottom: 28px;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 950;
        }

        .mark {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--green);
          color: #fff;
          letter-spacing: -0.04em;
        }

        .back {
          color: var(--muted);
          font-size: 14px;
          font-weight: 850;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 24px;
          align-items: stretch;
        }

        .hero-card,
        .side-card,
        .section {
          border: 1px solid var(--line);
          border-radius: 32px;
          background: rgba(255, 250, 242, 0.88);
          box-shadow: var(--shadow);
        }

        .hero-card {
          padding: 54px 46px;
        }

        .eyebrow {
          display: inline-flex;
          margin-bottom: 18px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(18, 60, 49, 0.08);
          color: var(--green);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        h1 {
          margin: 0;
          max-width: 760px;
          font-size: clamp(42px, 5vw, 72px);
          line-height: 0.96;
          letter-spacing: -0.065em;
        }

        .lead {
          margin: 24px 0 0;
          max-width: 740px;
          color: var(--muted);
          font-size: 20px;
          line-height: 1.58;
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
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          font-weight: 900;
        }

        .primary {
          background: var(--green);
          color: #fff;
        }

        .secondary {
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.7);
        }

        .side-card {
          padding: 32px;
          background: linear-gradient(155deg, var(--green), var(--green-dark));
          color: #fff;
        }

        .side-card h2 {
          margin: 0;
          font-size: 34px;
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .side-card p {
          color: rgba(255, 255, 255, 0.78);
          line-height: 1.6;
        }

        .facts {
          margin-top: 24px;
          display: grid;
          gap: 12px;
        }

        .fact {
          padding: 16px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.09);
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          font-weight: 850;
        }

        .section {
          margin-top: 24px;
          padding: 38px;
        }

        .section h2 {
          margin: 0 0 16px;
          font-size: clamp(30px, 3.4vw, 48px);
          line-height: 1;
          letter-spacing: -0.05em;
        }

        .section p {
          color: var(--muted);
          font-size: 17px;
          line-height: 1.7;
        }

        .grid {
          margin-top: 24px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .pill {
          min-height: 58px;
          display: flex;
          align-items: center;
          padding: 15px 16px;
          border-radius: 20px;
          background: rgba(18, 60, 49, 0.07);
          color: var(--green);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 900;
        }

        .contact-box {
          margin-top: 24px;
          padding: 30px;
          border-radius: 28px;
          background: var(--green);
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
        }

        .contact-box p {
          margin: 0;
          color: rgba(255, 255, 255, 0.78);
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
          }

          .grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .contact-box {
            display: block;
          }

          .contact-box .actions {
            margin-top: 20px;
          }
        }

        @media (max-width: 560px) {
          .hero-card,
          .side-card,
          .section {
            padding: 28px 22px;
            border-radius: 24px;
          }

          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="page">
        <nav className="top">
          <a href="/" className="brand">
            <span className="mark">VR</span>
            <span>Kancelaria Mgr Vadym Rekel</span>
          </a>
          <a href="/" className="back">← Strona główna</a>
        </nav>

        <section className="hero">
          <div className="hero-card">
            <span className="eyebrow">Sprawy karne · język ukraiński</span>
            <h1>Tłumaczenia w sprawach karnych z języka ukraińskiego.</h1>
            <p className="lead">
              Tłumaczenia poświadczone dokumentów procesowych, akt spraw,
              protokołów, pism organów, korespondencji osadzonych, dokumentów z
              Ukrainy oraz materiału cyfrowego wykorzystywanego w postępowaniach.
            </p>
            <div className="actions">
              <a className="button primary" href={`tel:${phoneHref}`}>Zadzwoń: {phoneDisplay}</a>
              <a className="button secondary" href={`mailto:${email}`}>Wyślij dokument do wyceny</a>
            </div>
          </div>

          <aside className="side-card">
            <h2>TP/27/17</h2>
            <p>
              Mgr Vadym Rekel — tłumacz przysięgły języka ukraińskiego w Krakowie.
              Obsługa dokumentów dla sądów, Policji, prokuratury, kancelarii i osób prywatnych.
            </p>
            <div className="facts">
              <div className="fact">Siedziba: ul. Kielecka 2/53, Kraków</div>
              <div className="fact">Dokumenty można przesłać elektronicznie z całej Polski</div>
              <div className="fact">Kontakt bezpośredni: {phoneDisplay}</div>
            </div>
          </aside>
        </section>

        <section className="section">
          <h2>Najczęstsze materiały w sprawach karnych</h2>
          <p>
            W sprawach karnych znaczenie ma nie tylko przekład słów, ale także
            poprawne rozpoznanie funkcji dokumentu w aktach sprawy, w czynnościach
            procesowych albo w materiale dowodowym.
          </p>
          <div className="grid">
            {materials.map((item) => (
              <div className="pill" key={item}>{item}</div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Dla sądów, Policji, prokuratury i kancelarii</h2>
          <p>
            Kancelaria wykonuje tłumaczenia poświadczone języka ukraińskiego dla
            dokumentów przekazywanych w postępowaniach przygotowawczych, sądowych
            i wykonawczych. Możliwa jest wstępna wycena na podstawie skanu, PDF,
            zdjęcia dokumentu albo pliku elektronicznego.
          </p>
          <div className="contact-box">
            <div>
              <strong>Wyślij materiał do wstępnej wyceny</strong>
              <p>Telefon: {phoneDisplay} · E-mail: {email}</p>
            </div>
            <div className="actions">
              <a className="button secondary" href={`tel:${phoneHref}`}>Zadzwoń</a>
              <a className="button secondary" href={`mailto:${email}`}>Wyślij e-mail</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
