import type { Metadata } from "next";

const email = "vadym.rekel@tlumaczrosyjskiegoiukrainskiego.pl";

export const metadata: Metadata = {
  title: "Tłumaczenie korespondencji osadzonych | Ukraiński polski",
  description:
    "Tłumaczenia korespondencji osób osadzonych z języka ukraińskiego na polski i z polskiego na ukraiński. Ręcznie pisane listy, oświadczenia, prośby, wyjaśnienia i dokumenty do spraw prawnych.",
  alternates: {
    canonical: "/tlumaczenie-korespondencji-osadzonych"
  }
};

export default function KorespondencjaOsadzonychPage() {
  const mailto =
    `mailto:${email}?subject=` +
    encodeURIComponent("Wycena tłumaczenia korespondencji osadzonego");

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
          <a href="/">Strona główna</a> / Tłumaczenie korespondencji osadzonych
        </div>

        <section className="hero">
          <div className="hero-card">
            <span className="eyebrow">Rękopisy · listy · osoby osadzone</span>

            <h1>Tłumaczenie korespondencji osadzonych.</h1>

            <p className="lead">
              Tłumaczenia ręcznie pisanych listów, oświadczeń, próśb, wyjaśnień
              oraz korespondencji osób osadzonych. Przekład może dotyczyć
              materiałów rodzinnych, prywatnych, procesowych albo przekazywanych
              pełnomocnikom i instytucjom.
            </p>

            <div className="actions">
              <a className="button button-primary" href={mailto}>
                Prześlij tekst do wyceny
              </a>
              <a className="button button-secondary" href="#zakres">
                Zobacz zakres
              </a>
            </div>
          </div>

          <aside className="side">
            <h2>Ręcznie pisany tekst wymaga uważnej lektury.</h2>
            <p>
              W tego typu materiałach istotne jest wierne oddanie treści,
              zachowanie sensu wypowiedzi oraz oznaczenie fragmentów
              nieczytelnych, niejednoznacznych albo wymagających ostrożnego
              opracowania.
            </p>
          </aside>
        </section>

        <section className="section" id="zakres">
          <div className="section-kicker">Zakres</div>
          <h2>Jaką korespondencję można przetłumaczyć?</h2>

          <div className="grid-3">
            <article className="card">
              <h3>Listy ręczne</h3>
              <p>
                Tłumaczenia listów sporządzonych odręcznie, w tym tekstów
                emocjonalnych, potocznych, rodzinnych albo prywatnych.
              </p>
              <ul>
                <li>listy z zakładów karnych</li>
                <li>korespondencja rodzinna</li>
                <li>teksty osobiste</li>
                <li>fragmenty trudne do odczytania</li>
              </ul>
            </article>

            <article className="card">
              <h3>Oświadczenia i wyjaśnienia</h3>
              <p>
                Tłumaczenia tekstów, które mogą zostać przekazane
                pełnomocnikom, instytucjom, sądom albo innym podmiotom.
              </p>
              <ul>
                <li>oświadczenia</li>
                <li>prośby</li>
                <li>wyjaśnienia</li>
                <li>notatki i opisy sytuacji</li>
              </ul>
            </article>

            <article className="card">
              <h3>Materiały procesowe</h3>
              <p>
                Korespondencja, której treść może mieć znaczenie w sprawie
                karnej, rodzinnej, administracyjnej albo cywilnej.
              </p>
              <ul>
                <li>korespondencja do akt</li>
                <li>materiały dla kancelarii</li>
                <li>pisma pomocnicze</li>
                <li>teksty przekazane instytucjom</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="dark-band">
            <div>
              <div className="section-kicker">Charakter materiału</div>
              <h2>Nie każdy tekst jest standardowym dokumentem.</h2>
            </div>
            <p>
              Korespondencja osób osadzonych często zawiera język potoczny,
              skróty, zapis fonetyczny, błędy, emocjonalny styl, fragmenty
              nieczytelne albo elementy wymagające opisowego oznaczenia w
              tłumaczeniu. Zakres pracy zależy od czytelności i celu użycia
              tekstu.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-kicker">Co wpływa na wycenę?</div>
          <h2>Najważniejsze czynniki przy rękopisach.</h2>

          <div className="grid-2">
            <article className="card">
              <h3>Czytelność pisma</h3>
              <p>
                Najważniejsze znaczenie ma jakość skanu lub zdjęcia,
                charakter pisma, przekreślenia, dopiski, uszkodzenia dokumentu
                i fragmenty trudne do odczytania.
              </p>
            </article>

            <article className="card">
              <h3>Cel tłumaczenia</h3>
              <p>
                Inaczej ocenia się tłumaczenie prywatne, a inaczej materiał,
                który ma zostać przekazany do kancelarii, sądu, prokuratury,
                Policji albo innej instytucji.
              </p>
            </article>

            <article className="card">
              <h3>Język i styl</h3>
              <p>
                Teksty mogą zawierać język potoczny, emocjonalny, skróty,
                błędy, wtrącenia i sformułowania wymagające wiernego, lecz
                czytelnego przekładu.
              </p>
            </article>

            <article className="card">
              <h3>Objętość materiału</h3>
              <p>
                Wycena zależy od liczby stron, gęstości pisma, liczby
                nieczytelnych fragmentów oraz wymaganego terminu realizacji.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section-kicker">FAQ</div>
          <h2>Pytania o tłumaczenie korespondencji osadzonych.</h2>

          <div className="grid-2">
            <article className="card">
              <h3>Czy tłumaczę bardzo trudne rękopisy?</h3>
              <p>
                Możliwe jest podjęcie pracy po wcześniejszej ocenie skanu albo
                zdjęcia. Fragmenty nieczytelne mogą wymagać oznaczenia w
                tłumaczeniu.
              </p>
            </article>

            <article className="card">
              <h3>Czy można przesłać zdjęcie listu?</h3>
              <p>
                Tak. Do wstępnej oceny można przesłać czytelne zdjęcie albo
                skan. Ważne, aby tekst był ostry, pełny i dobrze oświetlony.
              </p>
            </article>

            <article className="card">
              <h3>Czy zachowuję emocjonalny styl listu?</h3>
              <p>
                Tak, celem jest wierne oddanie treści i charakteru wypowiedzi,
                z zachowaniem sensu, tonu i struktury tekstu źródłowego.
              </p>
            </article>

            <article className="card">
              <h3>Czy takie tłumaczenie może być poświadczone?</h3>
              <p>
                Zakres zależy od charakteru materiału, jakości źródła i celu
                użycia tłumaczenia. Wymaga to wcześniejszej oceny konkretnego
                tekstu.
              </p>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="dark-band">
            <div>
              <div className="section-kicker">Wycena</div>
              <h2>Prześlij skan albo zdjęcie korespondencji.</h2>
            </div>
            <div>
              <p>
                W wiadomości wskaż, czy tłumaczenie ma charakter prywatny,
                rodzinny, procesowy, urzędowy albo kancelaryjny. Dołącz
                możliwie czytelny skan lub zdjęcie wszystkich stron.
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