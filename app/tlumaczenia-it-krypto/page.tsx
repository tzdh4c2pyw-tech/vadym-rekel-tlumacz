import type { Metadata } from "next";

const email = "vadym.rekel@tlumaczrosyjskiegoiukrainskiego.pl";

export const metadata: Metadata = {
  title: "Tłumaczenia IT, krypto i nowych technologii | Ukraiński polski",
  description:
    "Tłumaczenia dokumentacji IT, materiałów dotyczących kryptowalut, komunikatorów, danych cyfrowych, cyberbezpieczeństwa i nowych technologii z języka ukraińskiego na polski i z polskiego na ukraiński.",
  alternates: {
    canonical: "/tlumaczenia-it-krypto"
  }
};

export default function TlumaczeniaItKryptoPage() {
  const mailto =
    `mailto:${email}?subject=` +
    encodeURIComponent("Wycena tłumaczenia IT / krypto / nowych technologii");

  return (
    <main>
      <style>{`
        :root {
          --bg: #f6f2ea;
          --paper: #fffaf2;
          --ink: #15110d;
          --muted: #6e6256;
          --line: rgba(21, 17, 13, 0.12);
          --gold-dark: #87631f;
          --green: #173b2f;
          --green-dark: #0f251f;
          --green-soft: #e9efe9;
          --shadow: 0 24px 70px rgba(23, 20, 16, 0.12);
          --radius: 28px;
        }

        * { box-sizing: border-box; }

        body {
          margin: 0;
          background:
            radial-gradient(circle at top left, rgba(182, 138, 58, 0.20), transparent 32%),
            radial-gradient(circle at top right, rgba(23, 59, 47, 0.18), transparent 30%),
            var(--bg);
          color: var(--ink);
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }

        a { color: inherit; text-decoration: none; }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(18px);
          background: rgba(246, 242, 234, 0.88);
          border-bottom: 1px solid var(--line);
        }

        .nav {
          max-width: 1120px;
          margin: 0 auto;
          padding: 16px 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          font-weight: 850;
        }

        .brand-mark {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(145deg, var(--green), #245c49);
          color: #fff;
          display: grid;
          place-items: center;
          font-weight: 900;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 18px;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 750;
          color: var(--muted);
        }

        .nav-cta {
          padding: 11px 16px;
          border-radius: 999px;
          background: var(--green);
          color: #fff;
        }

        .page {
          max-width: 1120px;
          margin: 0 auto;
          padding: 72px 22px;
        }

        .breadcrumb {
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 24px;
          align-items: stretch;
        }

        .hero-card {
          background: rgba(255, 250, 242, 0.82);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding: 48px;
        }

        .eyebrow {
          display: inline-flex;
          padding: 9px 13px;
          border-radius: 999px;
          background: var(--green-soft);
          color: var(--green);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        h1 {
          margin: 24px 0 20px;
          font-size: clamp(42px, 5vw, 72px);
          line-height: 0.94;
          letter-spacing: -0.06em;
        }

        .lead {
          margin: 0;
          color: var(--muted);
          font-size: 21px;
          line-height: 1.55;
        }

        .side {
          border-radius: var(--radius);
          background: linear-gradient(150deg, var(--green), var(--green-dark));
          color: #fff;
          padding: 32px;
          box-shadow: var(--shadow);
        }

        .side h2 {
          margin: 0 0 16px;
          font-size: 34px;
          line-height: 1.05;
          letter-spacing: -0.045em;
        }

        .side p {
          margin: 0;
          color: rgba(255,255,255,0.74);
          font-size: 17px;
          line-height: 1.55;
        }

        .actions {
          margin-top: 30px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .button {
          min-height: 50px;
          padding: 0 22px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          font-weight: 850;
          border: 1px solid transparent;
        }

        .button-primary { background: var(--green); color: #fff; }
        .button-secondary {
          background: rgba(255,255,255,0.64);
          border-color: var(--line);
          color: var(--ink);
        }

        .section { padding-top: 56px; }

        .section-kicker {
          color: var(--gold-dark);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 0.10em;
          text-transform: uppercase;
        }

        .section h2 {
          margin: 8px 0 24px;
          font-size: clamp(32px, 4vw, 54px);
          line-height: 1;
          letter-spacing: -0.055em;
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

        .card {
          border: 1px solid var(--line);
          background: rgba(255,250,242,0.76);
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 14px 46px rgba(23, 20, 16, 0.06);
        }

        .card h3 {
          margin: 0 0 12px;
          font-size: 25px;
          line-height: 1.1;
          letter-spacing: -0.035em;
        }

        .card p {
          margin: 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.55;
        }

        .card ul {
          margin: 18px 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 10px;
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          line-height: 1.45;
        }

        .card li::before {
          content: "— ";
          color: var(--gold-dark);
          font-weight: 900;
        }

        .dark-band {
          border-radius: var(--radius);
          background: var(--ink);
          color: #fff;
          padding: 42px;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 28px;
          align-items: center;
          box-shadow: var(--shadow);
        }

        .dark-band h2 {
          color: #fff;
          margin: 8px 0 0;
        }

        .dark-band p {
          color: rgba(255,255,255,0.70);
          font-size: 18px;
          line-height: 1.55;
          margin: 0;
        }

        @media (max-width: 900px) {
          .nav-links { display: none; }
          .hero, .grid-2, .grid-3, .dark-band { grid-template-columns: 1fr; }
          .hero-card, .side, .dark-band { padding: 28px; }
        }
      `}</style>

      <header className="topbar">
        <nav className="nav">
          <a className="brand" href="/">
            <span className="brand-mark">VR</span>
            <span>Vadym Rekel — tłumacz przysięgły języka ukraińskiego</span>
          </a>

          <div className="nav-links">
            <a href="/">Strona główna</a>
            <a href="#zakres">Zakres</a>
            <a href="#faq">FAQ</a>
            <a className="nav-cta" href={mailto}>
              Wycena
            </a>
          </div>
        </nav>
      </header>

      <div className="page">
        <div className="breadcrumb">
          <a href="/">Strona główna</a> / Tłumaczenia IT, krypto i nowe technologie
        </div>

        <section className="hero">
          <div className="hero-card">
            <span className="eyebrow">IT · krypto · nowe technologie</span>

            <h1>Tłumaczenia IT, krypto i materiałów cyfrowych.</h1>

            <p className="lead">
              Tłumaczenia dokumentacji technicznej, materiałów dotyczących
              kryptowalut, komunikatorów, danych cyfrowych, cyberbezpieczeństwa,
              e-commerce, nowych technologii oraz treści wykorzystywanych w
              sprawach prawnych i dowodowych.
            </p>

            <div className="actions">
              <a className="button button-primary" href={mailto}>
                Prześlij materiał do wyceny
              </a>
              <a className="button button-secondary" href="#zakres">
                Zobacz zakres
              </a>
            </div>
          </div>

          <aside className="side">
            <h2>Technologia, prawo i język wymagają wspólnego kontekstu.</h2>
            <p>
              Materiały IT i krypto często łączą terminologię techniczną,
              prawną, finansową i dowodową. W takim tłumaczeniu liczy się nie
              tylko język, ale również funkcja dokumentu i kontekst sprawy.
            </p>
          </aside>
        </section>

        <section className="section" id="zakres">
          <div className="section-kicker">Zakres</div>
          <h2>Jakie materiały techniczne i cyfrowe tłumaczę?</h2>

          <div className="grid-3">
            <article className="card">
              <h3>Dokumentacja IT</h3>
              <p>
                Tłumaczenia dokumentów dotyczących systemów informatycznych,
                aplikacji, usług cyfrowych i rozwiązań technologicznych.
              </p>
              <ul>
                <li>opisy systemów i aplikacji</li>
                <li>dokumentacja techniczna</li>
                <li>komunikaty systemowe</li>
                <li>raporty i zestawienia</li>
              </ul>
            </article>

            <article className="card">
              <h3>Kryptowaluty i transakcje cyfrowe</h3>
              <p>
                Materiały dotyczące portfeli, giełd, transferów, historii
                transakcji, komunikatów technicznych i dokumentacji spraw.
              </p>
              <ul>
                <li>portfele kryptowalutowe</li>
                <li>giełdy i konta użytkowników</li>
                <li>wydruki transakcji</li>
                <li>opisy przepływów środków</li>
              </ul>
            </article>

            <article className="card">
              <h3>Komunikatory i dane cyfrowe</h3>
              <p>
                Tłumaczenia treści językowej widocznej w materiałach cyfrowych,
                wiadomościach, zrzutach ekranu i eksportach rozmów.
              </p>
              <ul>
                <li>wiadomości tekstowe</li>
                <li>zrzuty ekranu</li>
                <li>eksporty rozmów</li>
                <li>opisy plików i danych</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="dark-band">
            <div>
              <div className="section-kicker">Specjalizacja</div>
              <h2>Nowe technologie w materiale procesowym i dowodowym.</h2>
            </div>
            <p>
              W sprawach prawnych coraz częściej pojawiają się komunikatory,
              dane z telefonu, transakcje elektroniczne, platformy internetowe,
              systemy IT i materiały dotyczące kryptowalut. Tłumaczenie takich
              treści wymaga zachowania znaczenia technicznego oraz formalnej
              funkcji dokumentu.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-kicker">Obszary tematyczne</div>
          <h2>Prawo nowych technologii, cyberbezpieczeństwo i biznes.</h2>

          <div className="grid-2">
            <article className="card">
              <h3>Cyberbezpieczeństwo i dane</h3>
              <p>
                Tłumaczenia mogą obejmować treści dotyczące bezpieczeństwa
                informacji, incydentów, danych osobowych, systemów, kont,
                logowań, raportów i dokumentacji technicznej.
              </p>
            </article>

            <article className="card">
              <h3>E-commerce, start-upy i umowy IT</h3>
              <p>
                Tłumaczenia dokumentów związanych z działalnością cyfrową,
                usługami online, platformami, e-commerce, start-upami, umowami
                technologicznymi i usługami IT.
              </p>
            </article>

            <article className="card">
              <h3>Materiał do opinii i analizy</h3>
              <p>
                Tłumaczenia dokumentów przekazywanych pełnomocnikom, biegłym,
                ekspertom albo instytucjom w celu dalszej analizy prawnej lub
                technicznej.
              </p>
            </article>

            <article className="card">
              <h3>Treść z materiału cyfrowego</h3>
              <p>
                Tłumaczenie dotyczy treści językowej ujawnionej w materiale.
                Kwestie pozyskania, integralności lub analizy danych wymagają
                odrębnej oceny specjalistycznej.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section-kicker">FAQ</div>
          <h2>Pytania o tłumaczenia IT i krypto.</h2>

          <div className="grid-2">
            <article className="card">
              <h3>Czy tłumaczę materiały dotyczące kryptowalut?</h3>
              <p>
                Tak. Tłumaczenie może obejmować dokumenty dotyczące portfeli,
                giełd, historii transakcji, komunikatów technicznych,
                korespondencji i opisów materiałów.
              </p>
            </article>

            <article className="card">
              <h3>Czy można tłumaczyć zrzuty ekranu?</h3>
              <p>
                Tak. Jeżeli zrzut ekranu zawiera czytelną treść językową,
                możliwe jest przygotowanie tłumaczenia tej treści.
              </p>
            </article>

            <article className="card">
              <h3>Czy tłumaczenie obejmuje analizę techniczną danych?</h3>
              <p>
                Tłumaczenie obejmuje treść językową materiału. Analiza
                techniczna danych, ich integralność lub sposób pozyskania to
                osobne zagadnienia specjalistyczne.
              </p>
            </article>

            <article className="card">
              <h3>Czy dokumenty IT mogą być tłumaczeniem poświadczonym?</h3>
              <p>
                Tak, jeżeli dokument wymaga tłumaczenia poświadczonego i jego
                treść nadaje się do takiego opracowania. Zakres ustalany jest po
                analizie materiału.
              </p>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="dark-band">
            <div>
              <div className="section-kicker">Wycena</div>
              <h2>Prześlij materiał techniczny lub cyfrowy do oceny.</h2>
            </div>
            <div>
              <p>
                W wiadomości wskaż, czy chodzi o dokumentację IT, materiał
                dotyczący kryptowalut, komunikator, zrzut ekranu, raport,
                historię transakcji albo dokument do sprawy prawnej.
              </p>
              <div className="actions">
                <a className="button button-primary" href={mailto}>
                  Napisz e-mail
                </a>
                <a className="button button-secondary" href="/">
                  Wróć na stronę główną
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}