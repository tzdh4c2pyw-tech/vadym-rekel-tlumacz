import type { Metadata } from "next";

const email = "vadym.rekel@tlumaczrosyjskiegoiukrainskiego.pl";

export const metadata: Metadata = {
  title: "Transkrypcje nagrań audio i wideo | Ukraiński polski",
  description:
    "Transkrypcje nagrań audio i wideo w języku ukraińskim oraz tłumaczenia treści mówionej na język polski. Nagrania rozmów, wypowiedzi, materiały procesowe i dowodowe.",
  alternates: {
    canonical: "/transkrypcje-nagran-audio-wideo"
  }
};

export default function TranskrypcjeNagranPage() {
  const mailto =
    `mailto:${email}?subject=` +
    encodeURIComponent("Wycena transkrypcji lub tłumaczenia nagrania");

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

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background:
            radial-gradient(circle at top left, rgba(182, 138, 58, 0.20), transparent 32%),
            radial-gradient(circle at top right, rgba(23, 59, 47, 0.18), transparent 30%),
            var(--bg);
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

        .button-primary {
          background: var(--green);
          color: #fff;
        }

        .button-secondary {
          background: rgba(255,255,255,0.64);
          border-color: var(--line);
          color: var(--ink);
        }

        .section {
          padding-top: 56px;
        }

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
          .nav-links {
            display: none;
          }

          .hero,
          .grid-2,
          .grid-3,
          .dark-band {
            grid-template-columns: 1fr;
          }

          .hero-card,
          .side,
          .dark-band {
            padding: 28px;
          }
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
          <a href="/">Strona główna</a> / Transkrypcje nagrań audio i wideo
        </div>

        <section className="hero">
          <div className="hero-card">
            <span className="eyebrow">Audio · wideo · język ukraiński</span>

            <h1>Transkrypcje nagrań audio i wideo.</h1>

            <p className="lead">
              Przygotowuję transkrypcje nagrań w języku ukraińskim oraz
              tłumaczenia treści mówionej na język polski. Usługa może dotyczyć
              materiałów wykorzystywanych w sprawach sądowych, karnych,
              rodzinnych, administracyjnych lub prywatnych.
            </p>

            <div className="actions">
              <a className="button button-primary" href={mailto}>
                Prześlij nagranie do wyceny
              </a>
              <a className="button button-secondary" href="#zakres">
                Zobacz zakres
              </a>
            </div>
          </div>

          <aside className="side">
            <h2>Każde nagranie wymaga wcześniejszej oceny.</h2>
            <p>
              Znaczenie mają jakość dźwięku, liczba rozmówców, język wypowiedzi,
              tempo rozmowy, zakłócenia, długość pliku oraz oczekiwany sposób
              opracowania materiału.
            </p>
          </aside>
        </section>

        <section className="section" id="zakres">
          <div className="section-kicker">Zakres</div>
          <h2>Jakiego rodzaju nagrania można opracować?</h2>

          <div className="grid-3">
            <article className="card">
              <h3>Nagrania audio</h3>
              <p>
                Transkrypcje i tłumaczenia treści mówionej z plików audio,
                rozmów, wypowiedzi i materiałów przekazanych do sprawy.
              </p>
              <ul>
                <li>rozmowy</li>
                <li>wypowiedzi jednej osoby</li>
                <li>nagrania z telefonu</li>
                <li>pliki przekazane elektronicznie</li>
              </ul>
            </article>

            <article className="card">
              <h3>Pliki wideo</h3>
              <p>
                Opracowanie treści mówionej utrwalonej w plikach wideo, w tym
                nagraniach procesowych, prywatnych albo dowodowych.
              </p>
              <ul>
                <li>wideo z rozmową</li>
                <li>materiał z telefonu</li>
                <li>fragmenty wskazane przez klienta</li>
                <li>wypowiedzi kilku osób</li>
              </ul>
            </article>

            <article className="card">
              <h3>Materiały procesowe</h3>
              <p>
                Nagrania, których treść ma zostać wykorzystana w sprawie
                sądowej, karnej, administracyjnej albo rodzinnej.
              </p>
              <ul>
                <li>materiały dowodowe</li>
                <li>nagrania do akt</li>
                <li>wypowiedzi stron</li>
                <li>treści wymagające tłumaczenia</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="dark-band">
            <div>
              <div className="section-kicker">Sposób opracowania</div>
              <h2>Transkrypcja, tłumaczenie albo opracowanie fragmentów.</h2>
            </div>
            <p>
              Zakres pracy ustalany jest indywidualnie. Możliwe jest
              przygotowanie transkrypcji pełnej, transkrypcji roboczej,
              tłumaczenia treści wypowiedzi, tłumaczenia fragmentów wskazanych
              przez klienta albo opracowania materiału pod określony cel sprawy.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-kicker">Co wpływa na wycenę?</div>
          <h2>Najważniejsze czynniki przy analizie nagrania.</h2>

          <div className="grid-2">
            <article className="card">
              <h3>Parametry techniczne</h3>
              <p>
                Długość nagrania, format pliku, jakość dźwięku, obecność szumów,
                hałasu, przerw, zakłóceń oraz liczba fragmentów
                nieczytelnych.
              </p>
            </article>

            <article className="card">
              <h3>Liczba rozmówców</h3>
              <p>
                Inaczej ocenia się nagranie jednej osoby, a inaczej rozmowę
                kilku osób, wypowiedzi nakładające się na siebie albo rozmowę z
                tłem dźwiękowym.
              </p>
            </article>

            <article className="card">
              <h3>Cel opracowania</h3>
              <p>
                Znaczenie ma to, czy materiał ma służyć orientacyjnej analizie,
                sprawie prywatnej, dokumentacji kancelarii, czy wykorzystaniu w
                postępowaniu.
              </p>
            </article>

            <article className="card">
              <h3>Język i specjalistyczność</h3>
              <p>
                Wycena zależy również od tego, czy wypowiedzi zawierają
                terminologię prawną, techniczną, potoczną, dialektalną albo
                fragmenty niejednoznaczne.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section-kicker">FAQ</div>
          <h2>Pytania o transkrypcje nagrań.</h2>

          <div className="grid-2">
            <article className="card">
              <h3>Czy każde nagranie da się przepisać?</h3>
              <p>
                Nie zawsze w pełnym zakresie. Najpierw trzeba ocenić jakość
                dźwięku, zakłócenia, nakładanie się wypowiedzi i czytelność
                materiału.
              </p>
            </article>

            <article className="card">
              <h3>Czy mogę przesłać tylko fragment nagrania?</h3>
              <p>
                Tak. Można wskazać konkretny fragment do opracowania albo
                przesłać cały plik z informacją, które części są istotne.
              </p>
            </article>

            <article className="card">
              <h3>Czy wykonuję tłumaczenie treści mówionej?</h3>
              <p>
                Tak. Możliwe jest przetłumaczenie treści wypowiedzi z języka
                ukraińskiego na polski albo z języka polskiego na ukraiński.
              </p>
            </article>

            <article className="card">
              <h3>Czy nagranie może być materiałem dowodowym?</h3>
              <p>
                Tak, ale sposób wykorzystania materiału zależy od sprawy i
                decyzji właściwego organu albo pełnomocnika. Tłumaczenie lub
                transkrypcja dotyczy treści językowej nagrania.
              </p>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="dark-band">
            <div>
              <div className="section-kicker">Wycena</div>
              <h2>Prześlij nagranie do wstępnej oceny.</h2>
            </div>
            <div>
              <p>
                W wiadomości wskaż długość nagrania, język wypowiedzi, cel
                opracowania, oczekiwany termin oraz czy potrzebna jest
                transkrypcja, tłumaczenie, czy opracowanie wybranych fragmentów.
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