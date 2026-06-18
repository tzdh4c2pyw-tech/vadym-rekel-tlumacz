export default function NotFound() {
  const institutionPhoneDisplay = "883 040 483";
  const institutionPhoneHref = "+48883040483";
  const email = "biegly@vadymrekel.pl";

  const links = [
    {
      title: "Strona główna",
      text: "Kancelaria tłumacza przysięgłego języka ukraińskiego.",
      href: "/"
    },
    {
      title: "Tłumaczenia dla sądu",
      text: "Akta spraw, protokoły, wyroki, postanowienia i załączniki.",
      href: "/tlumaczenia-sadowe-ukrainski"
    },
    {
      title: "Tłumaczenia dla Policji",
      text: "Czynności, pouczenia, protokoły, notatki i materiał cyfrowy.",
      href: "/tlumaczenia-dla-policji"
    },
    {
      title: "Tłumaczenia dla prokuratury",
      text: "Sprawy karne, pomoc prawna, dokumenty z Ukrainy i materiał dowodowy.",
      href: "/tlumaczenia-dla-prokuratury"
    },
    {
      title: "Dokumenty z Ukrainy",
      text: "Dokumenty urzędowe, sądowe, prokuratorskie i prywatne.",
      href: "/dokumenty-z-ukrainy"
    },
    {
      title: "Materiał cyfrowy",
      text: "Komunikatory, zrzuty ekranu, raporty PDF, dane z telefonu i krypto.",
      href: "/tlumaczenia-it-krypto"
    }
  ];

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
          --shadow: 0 18px 48px rgba(25, 22, 18, 0.10);
          --radius: 24px;
        }

        * {
          box-sizing: border-box;
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

        .topbar {
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

        .nav-phone {
          padding: 11px 16px;
          border-radius: 999px;
          background: var(--green);
          color: #fff;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 900;
        }

        .wrap {
          max-width: 1120px;
          margin: 0 auto;
          padding: 58px 22px 70px;
        }

        .hero {
          border: 1px solid var(--line);
          border-radius: var(--radius);
          background: rgba(255, 250, 242, 0.86);
          box-shadow: var(--shadow);
          padding: 46px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
          align-items: center;
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
          font-size: clamp(42px, 5.4vw, 76px);
          line-height: 0.92;
          letter-spacing: -0.07em;
        }

        .lead {
          margin: 22px 0 0;
          max-width: 760px;
          color: var(--muted);
          font-size: 20px;
          line-height: 1.55;
        }

        .actions {
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

        .side {
          border-radius: 22px;
          background: linear-gradient(155deg, var(--green), var(--green-dark));
          color: #fff;
          padding: 30px;
        }

        .side-number {
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 80px;
          font-weight: 950;
          letter-spacing: -0.08em;
          line-height: 0.9;
          color: rgba(255,255,255,0.92);
        }

        .side h2 {
          margin: 22px 0 12px;
          color: #fff;
          font-size: 30px;
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .side p {
          margin: 0;
          color: rgba(255,255,255,0.76);
          font-size: 16px;
          line-height: 1.55;
        }

        .section {
          padding-top: 38px;
        }

        .section-heading {
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          gap: 28px;
          align-items: end;
          margin-bottom: 22px;
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
          font-size: clamp(30px, 4vw, 48px);
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .section-heading p {
          margin: 0;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.55;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .card {
          border-radius: 22px;
          border: 1px solid var(--line);
          background: rgba(255,250,242,0.82);
          box-shadow: 0 14px 34px rgba(25, 22, 18, 0.055);
          padding: 24px;
          transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
        }

        .card:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 44px rgba(25, 22, 18, 0.09);
          border-color: rgba(182, 138, 58, 0.30);
        }

        .card h3 {
          margin: 0 0 10px;
          font-size: 25px;
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .card p {
          margin: 0;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.55;
        }

        .card-link {
          display: inline-flex;
          margin-top: 18px;
          color: var(--green);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 900;
        }

        .footer {
          border-top: 1px solid var(--line);
          padding: 28px 22px 48px;
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
        }

        .footer-inner {
          max-width: 1120px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          gap: 22px;
          flex-wrap: wrap;
        }

        .footer strong {
          color: var(--ink);
        }

        @media (max-width: 980px) {
          .hero,
          .section-heading {
            grid-template-columns: 1fr;
          }

          .grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 620px) {
          .wrap {
            padding: 38px 16px 58px;
          }

          .hero,
          .side {
            padding: 28px;
          }

          .nav {
            padding-left: 16px;
            padding-right: 16px;
          }

          .nav-phone {
            display: none;
          }

          h1 {
            font-size: 42px;
          }

          .side-number {
            font-size: 62px;
          }

          .button {
            width: 100%;
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

          <a className="nav-phone" href={`tel:${institutionPhoneHref}`}>
            {institutionPhoneDisplay}
          </a>
        </nav>
      </div>

      <div className="wrap">
        <section className="hero">
          <div>
            <span className="eyebrow">Nie znaleziono strony</span>

            <h1>Ten adres nie prowadzi do istniejącej podstrony.</h1>

            <p className="lead">
              Strona mogła zostać przeniesiona, usunięta albo wpisano błędny
              adres. Poniżej znajdują się najważniejsze sekcje kancelarii.
            </p>

            <div className="actions">
              <a className="button button-primary" href="/">
                Wróć na stronę główną
              </a>
              <a className="button button-secondary" href={`mailto:${email}`}>
                Napisz e-mail
              </a>
            </div>
          </div>

          <aside className="side">
            <div className="side-number">404</div>
            <h2>Kontakt dla organów</h2>
            <p>
              Sąd, Policja, prokuratura, akta, czynności, materiał cyfrowy i
              dokumenty z Ukrainy.
            </p>

            <a className="button button-secondary" href={`tel:${institutionPhoneHref}`}>
              {institutionPhoneDisplay}
            </a>
          </aside>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <p className="section-label">Najważniejsze sekcje</p>
              <h2>Wybierz właściwy zakres.</h2>
            </div>

            <p>
              Kancelaria obsługuje dokumenty poświadczone języka ukraińskiego,
              sprawy sądowe, policyjne, prokuratorskie, dokumenty z Ukrainy i
              materiał cyfrowy.
            </p>
          </div>

          <div className="grid">
            {links.map((item) => (
              <article className="card" key={item.href}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a className="card-link" href={item.href}>
                  Przejdź →
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <strong>Kancelaria Vadym Rekel</strong>
            <br />
            Tłumacz przysięgły języka ukraińskiego · TP/27/17
          </div>

          <div>
            <strong>Kontakt</strong>
            <br />
            <a href={`tel:${institutionPhoneHref}`}>{institutionPhoneDisplay}</a>
            {" · "}
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}