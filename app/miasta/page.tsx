import type { Metadata } from "next";

const siteUrl = "https://vadymrekel.pro";
const pageUrl = `${siteUrl}/miasta`;

export const metadata: Metadata = {
  title:
    "Tłumacz przysięgły ukraiński w Polsce | Miasta | Vadym Rekel",
  description:
    "Tłumacz przysięgły języka ukraińskiego dla klientów z całej Polski. Tłumaczenia poświadczone dokumentów z Ukrainy, akt spraw, dokumentów sądowych i materiału cyfrowego.",
  keywords: [
    "tłumacz przysięgły ukraiński Polska",
    "tłumacz przysięgły ukraiński Warszawa",
    "tłumacz przysięgły ukraiński Kraków",
    "tłumacz przysięgły ukraiński Wrocław",
    "tłumaczenia przysięgłe ukraiński Polska",
    "Vadym Rekel"
  ],
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    title:
      "Tłumacz przysięgły ukraiński w Polsce | Miasta | Vadym Rekel",
    description:
      "Obsługa tłumaczeń przysięgłych języka ukraińskiego dla klientów z największych miast w Polsce. Dokumenty można przesłać elektronicznie.",
    url: pageUrl,
    type: "website",
    locale: "pl_PL"
  }
};

const cities = [
  ["Warszawa", "/tlumacz-przysiegly-ukrainski-warszawa"],
  ["Kraków", "/tlumacz-przysiegly-ukrainski-krakow"],
  ["Wrocław", "/tlumacz-przysiegly-ukrainski-wroclaw"],
  ["Poznań", "/tlumacz-przysiegly-ukrainski-poznan"],
  ["Gdańsk", "/tlumacz-przysiegly-ukrainski-gdansk"],
  ["Łódź", "/tlumacz-przysiegly-ukrainski-lodz"],
  ["Katowice", "/tlumacz-przysiegly-ukrainski-katowice"],
  ["Lublin", "/tlumacz-przysiegly-ukrainski-lublin"],
  ["Rzeszów", "/tlumacz-przysiegly-ukrainski-rzeszow"],
  ["Szczecin", "/tlumacz-przysiegly-ukrainski-szczecin"],
  ["Bydgoszcz", "/tlumacz-przysiegly-ukrainski-bydgoszcz"],
  ["Białystok", "/tlumacz-przysiegly-ukrainski-bialystok"],
  ["Toruń", "/tlumacz-przysiegly-ukrainski-torun"],
  ["Olsztyn", "/tlumacz-przysiegly-ukrainski-olsztyn"],
  ["Opole", "/tlumacz-przysiegly-ukrainski-opole"],
  ["Kielce", "/tlumacz-przysiegly-ukrainski-kielce"],
  ["Radom", "/tlumacz-przysiegly-ukrainski-radom"],
  ["Częstochowa", "/tlumacz-przysiegly-ukrainski-czestochowa"],
  ["Gliwice", "/tlumacz-przysiegly-ukrainski-gliwice"],
  ["Gdynia", "/tlumacz-przysiegly-ukrainski-gdynia"],
  ["Sopot", "/tlumacz-przysiegly-ukrainski-sopot"],
  ["Zielona Góra", "/tlumacz-przysiegly-ukrainski-zielona-gora"],
  ["Gorzów Wielkopolski", "/tlumacz-przysiegly-ukrainski-gorzow-wielkopolski"],
  ["Bytom", "/tlumacz-przysiegly-ukrainski-bytom"],
  ["Sosnowiec", "/tlumacz-przysiegly-ukrainski-sosnowiec"]
];

export default function CitiesPage() {
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
          --gold-dark: #7c5a1d;
          --shadow: 0 18px 48px rgba(25, 22, 18, 0.10);
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background:
            radial-gradient(circle at 8% 0%, rgba(182, 138, 58, 0.14), transparent 30%),
            radial-gradient(circle at 92% 6%, rgba(18, 60, 49, 0.10), transparent 30%),
            linear-gradient(180deg, #fbf7ef 0%, var(--bg) 56%, #eee5d7 100%);
          color: var(--ink);
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .page {
          max-width: 1220px;
          margin: 0 auto;
          padding: 34px 22px 90px;
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
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--green);
          color: #fff;
          letter-spacing: -0.04em;
          box-shadow: 0 14px 32px rgba(18, 60, 49, 0.18);
        }

        .back {
          color: var(--muted);
          font-size: 14px;
          font-weight: 850;
        }

        .hero {
          border: 1px solid var(--line);
          border-radius: 38px;
          background:
            linear-gradient(135deg, rgba(255, 250, 242, 0.96), rgba(248, 241, 230, 0.88)),
            radial-gradient(circle at 100% 0%, rgba(182, 138, 58, 0.16), transparent 34%);
          box-shadow: var(--shadow);
          padding: 62px 54px;
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
          max-width: 860px;
          font-size: clamp(42px, 5vw, 76px);
          line-height: 0.96;
          letter-spacing: -0.07em;
        }

        .lead {
          margin: 24px 0 0;
          max-width: 760px;
          color: var(--muted);
          font-size: 20px;
          line-height: 1.6;
        }

        .city-grid {
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
          padding: 24px;
          border-radius: 34px;
          border: 1px solid rgba(19, 16, 12, 0.10);
          background: rgba(255, 250, 242, 0.62);
        }

        .city-link {
          min-height: 58px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 18px;
          border: 1px solid rgba(19, 16, 12, 0.10);
          background: rgba(255, 255, 255, 0.66);
          color: var(--green);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          font-weight: 950;
          box-shadow: 0 8px 22px rgba(25, 22, 18, 0.055);
          transition:
            transform 160ms ease,
            background 160ms ease,
            color 160ms ease,
            box-shadow 160ms ease;
        }

        .city-link::after {
          content: "→";
          color: var(--gold-dark);
        }

        .city-link:hover {
          transform: translateY(-2px);
          background: linear-gradient(135deg, var(--green), var(--green-dark));
          color: #fff;
          box-shadow: 0 16px 36px rgba(18, 60, 49, 0.18);
        }

        .city-link:hover::after {
          color: #fff;
        }

        .contact {
          margin-top: 28px;
          border-radius: 32px;
          background: var(--green);
          color: #fff;
          padding: 34px;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: center;
          box-shadow: 0 24px 70px rgba(18, 60, 49, 0.18);
        }

        .contact h2 {
          margin: 0;
          font-size: 34px;
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .contact p {
          margin: 10px 0 0;
          color: rgba(255, 255, 255, 0.76);
          line-height: 1.55;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .button {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 0 20px;
          background: #fff;
          color: var(--green);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          font-weight: 950;
        }

        .button.secondary {
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        @media (max-width: 980px) {
          .city-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .contact {
            display: block;
          }

          .actions {
            margin-top: 22px;
          }
        }

        @media (max-width: 620px) {
          .hero {
            padding: 38px 24px;
            border-radius: 28px;
          }

          .city-grid {
            grid-template-columns: 1fr;
            padding: 14px;
            border-radius: 24px;
          }

          .contact {
            padding: 26px 22px;
            border-radius: 26px;
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
          <span className="eyebrow">Miasta · język ukraiński</span>
          <h1>Tłumacz przysięgły ukraiński dla klientów z całej Polski.</h1>
          <p className="lead">
            Dokumenty do wstępnej wyceny można przesłać elektronicznie.
            Kancelaria obsługuje osoby prywatne, kancelarie prawne, firmy,
            sądy, Policję i prokuraturę z największych miast w Polsce.
          </p>
        </section>

        <section className="city-grid" aria-label="Lista miast">
          {cities.map(([city, href]) => (
            <a className="city-link" href={href} key={href}>
              {city}
            </a>
          ))}
        </section>

        <section className="contact">
          <div>
            <h2>Wyślij dokument do wyceny.</h2>
            <p>Telefon: 883 040 483 · E-mail: biegly@vadymrekel.pl</p>
          </div>
          <div className="actions">
            <a className="button" href="tel:+48883040483">Zadzwoń</a>
            <a className="button secondary" href="mailto:biegly@vadymrekel.pl">Wyślij e-mail</a>
          </div>
        </section>
      </div>
    </main>
  );
}
