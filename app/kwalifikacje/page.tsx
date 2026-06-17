import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kwalifikacje tłumacza przysięgłego języka ukraińskiego",
  description:
    "Kwalifikacje zawodowe: tłumacz przysięgły języka ukraińskiego TP/27/17, CIOL no. 94280, TEPIS Member 2026, MBA, prawo nowych technologii, prawo karne i specjalizacja w dokumentach procesowych."
};

const qualifications = [
  {
    title: "Tłumacz przysięgły języka ukraińskiego",
    text: "Wpis na listę tłumaczy przysięgłych Ministra Sprawiedliwości. Numer uprawnień: TP/27/17.",
    tag: "Uprawnienia państwowe"
  },
  {
    title: "CIOL — Chartered Institute of Linguists",
    text: "Członkostwo w Chartered Institute of Linguists, CIOL no. 94280. Kwalifikacje językowe potwierdzone przez brytyjską instytucję zawodową.",
    tag: "CIOL no. 94280"
  },
  {
    title: "TEPIS Member 2026",
    text: "Członkostwo w środowisku tłumaczy przysięgłych i specjalistycznych, istotne dla pracy z dokumentami prawnymi, sądowymi i urzędowymi.",
    tag: "TEPIS"
  },
  {
    title: "MBA",
    text: "Przygotowanie menedżerskie i organizacyjne przydatne w obsłudze instytucji, kancelarii oraz zleceń wymagających powtarzalnej, formalnej i terminowej pracy.",
    tag: "Business Administration"
  },
  {
    title: "Prawo nowych technologii",
    text: "Przygotowanie do pracy z materiałami dotyczącymi IT, danych cyfrowych, komunikatorów, cyberbezpieczeństwa, e-commerce i kryptowalut.",
    tag: "IT · krypto · dane cyfrowe"
  },
  {
    title: "Prawo karne materialne i procesowe",
    text: "Specjalizacja istotna przy tłumaczeniu dokumentów wykorzystywanych w postępowaniach karnych, przygotowawczych, dowodowych i sądowych.",
    tag: "Sprawy karne"
  }
];

const expertise = [
  "dokumenty sądowe",
  "akta spraw karnych",
  "materiały dowodowe",
  "protokoły przesłuchań",
  "pisma procesowe",
  "dokumenty organów ścigania",
  "korespondencja osadzonych",
  "transkrypcje nagrań audio i wideo",
  "komunikatory i zrzuty ekranu",
  "dokumentacja IT",
  "kryptowaluty i transakcje cyfrowe",
  "dokumenty urzędowe z Ukrainy"
];

export default function KwalifikacjePage() {
  return (
    <main>
      <style>{`
        :root {
          --bg: #f6f2ea;
          --paper: #fffaf2;
          --ink: #15110d;
          --muted: #6e6256;
          --line: rgba(21, 17, 13, 0.12);
          --gold: #b68a3a;
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

        html {
          scroll-behavior: smooth;
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
          max-width: 1180px;
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
        }

        .brand-mark {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(145deg, var(--green), #245c49);
          color: #fff;
          display: grid;
          place-items: center;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-weight: 900;
        }

        .brand-title {
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          font-weight: 850;
          line-height: 1.1;
        }

        .brand-subtitle {
          display: block;
          margin-top: 3px;
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
          font-weight: 750;
          color: var(--muted);
        }

        .nav-cta {
          padding: 11px 16px;
          border-radius: 999px;
          background: var(--green);
          color: #fff;
        }

        .hero {
          max-width: 1180px;
          margin: 0 auto;
          padding: 72px 22px 40px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
        }

        .hero-card {
          background: rgba(255, 250, 242, 0.82);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding: 50px;
          position: relative;
          overflow: hidden;
        }

        .hero-card::after {
          content: "";
          position: absolute;
          width: 320px;
          height: 320px;
          right: -140px;
          top: -140px;
          border-radius: 50%;
          background: rgba(182, 138, 58, 0.16);
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
          position: relative;
          z-index: 1;
        }

        h1 {
          margin: 26px 0 22px;
          font-size: clamp(42px, 5.5vw, 76px);
          line-height: 0.94;
          letter-spacing: -0.065em;
          position: relative;
          z-index: 1;
        }

        .lead {
          margin: 0;
          color: var(--muted);
          font-size: 21px;
          line-height: 1.55;
          position: relative;
          z-index: 1;
        }

        .side-panel {
          border-radius: var(--radius);
          background: linear-gradient(150deg, var(--green), var(--green-dark));
          color: #fff;
          padding: 34px;
          box-shadow: var(--shadow);
          min-height: 500px;
          position: relative;
          overflow: hidden;
        }

        .side-panel::before {
          content: "";
          position: absolute;
          inset: 18px;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 22px;
        }

        .side-content {
          position: relative;
          z-index: 1;
        }

        .side-panel h2 {
          margin: 0 0 18px;
          font-size: 34px;
          line-height: 1.05;
          letter-spacing: -0.045em;
        }

        .side-panel p {
          margin: 0;
          color: rgba(255,255,255,0.74);
          font-size: 17px;
          line-height: 1.55;
        }

        .side-list {
          margin-top: 26px;
          display: grid;
          gap: 12px;
        }

        .side-item {
          padding: 17px 18px;
          border-radius: 18px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.76);
          line-height: 1.45;
        }

        .section {
          max-width: 1180px;
          margin: 0 auto;
          padding: 50px 22px;
        }

        .section-header {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 24px;
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
          margin: 8px 0 0;
          font-size: clamp(32px, 4vw, 54px);
          line-height: 1;
          letter-spacing: -0.055em;
        }

        .section-intro {
          max-width: 500px;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.55;
          margin: 0;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
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

        .tag {
          display: inline-flex;
          margin-bottom: 14px;
          padding: 8px 11px;
          border-radius: 999px;
          background: var(--green-soft);
          color: var(--green);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .pill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .pill {
          border: 1px solid var(--line);
          background: rgba(255, 250, 242, 0.72);
          color: var(--muted);
          border-radius: 999px;
          padding: 10px 13px;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          font-weight: 750;
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

        .actions {
          margin-top: 28px;
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

        .footer {
          border-top: 1px solid var(--line);
          padding: 32px 22px 44px;
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
        }

        .footer-inner {
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        @media (max-width: 980px) {
          .nav-links {
            display: none;
          }

          .hero,
          .grid-3,
          .grid-2,
          .dark-band {
            grid-template-columns: 1fr;
          }

          .hero-card,
          .side-panel {
            padding: 32px;
          }

          .section-header {
            display: block;
          }

          .section-intro {
            margin-top: 14px;
          }
        }

        @media (max-width: 520px) {
          .hero,
          .section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .hero-card,
          .side-panel,
          .dark-band {
            border-radius: 22px;
            padding: 26px;
          }

          h1 {
            font-size: 42px;
          }

          .lead {
            font-size: 18px;
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
            <span className="brand-title">
              Vadym Rekel
              <span className="brand-subtitle">
                Tłumacz przysięgły języka ukraińskiego
              </span>
            </span>
          </a>

          <div className="nav-links">
            <a href="/">Strona główna</a>
            <a href="/#uslugi">Usługi</a>
            <a href="/#specjalizacja">Specjalizacja</a>
            <a href="/#mapa">Lokalizacja</a>
            <a className="nav-cta" href="/#kontakt">
              Wycena
            </a>
          </div>
        </nav>
      </div>

      <section className="hero">
        <div className="hero-card">
          <span className="eyebrow">Kwalifikacje · uprawnienia · specjalizacja</span>

          <h1>Kwalifikacje tłumacza przysięgłego języka ukraińskiego.</h1>

          <p className="lead">
            Tłumaczenia dokumentów procesowych, urzędowych, technicznych i
            dowodowych wymagają nie tylko znajomości języka, lecz także
            rozumienia celu dokumentu, formy prawnej, odpowiedzialności
            zawodowej i kontekstu sprawy.
          </p>

          <div className="actions">
            <a className="button button-primary" href="/#kontakt">
              Prześlij dokument do wyceny
            </a>
            <a className="button button-secondary" href="/">
              Wróć na stronę główną
            </a>
          </div>
        </div>

        <aside className="side-panel">
          <div className="side-content">
            <h2>Profil zawodowy ukierunkowany na dokumenty prawne i dowodowe.</h2>
            <p>
              Uprawnienia tłumacza przysięgłego łączę z przygotowaniem
              prawnym, technologicznym i instytucjonalnym.
            </p>

            <div className="side-list">
              <div className="side-item">TP/27/17 — tłumacz przysięgły języka ukraińskiego.</div>
              <div className="side-item">CIOL no. 94280 — Chartered Institute of Linguists.</div>
              <div className="side-item">TEPIS Member 2026.</div>
              <div className="side-item">MBA · prawo nowych technologii · prawo karne.</div>
            </div>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <div className="section-kicker">Uprawnienia</div>
            <h2>Potwierdzone kwalifikacje zawodowe.</h2>
          </div>
          <p className="section-intro">
            Ta sekcja może później zostać uzupełniona o skany certyfikatów,
            dyplomów i dokumentów potwierdzających kwalifikacje.
          </p>
        </div>

        <div className="grid-3">
          {qualifications.map((item) => (
            <article className="card" key={item.title}>
              <span className="tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="dark-band">
          <div>
            <div className="section-kicker">Specjalizacja</div>
            <h2>Dokument jako dowód, załącznik albo element postępowania.</h2>
          </div>
          <p>
            W pracy z dokumentami sądowymi, karnymi, urzędowymi i cyfrowymi
            kluczowe jest zachowanie sensu, struktury, terminologii oraz
            czytelności przekładu. Dotyczy to zarówno dokumentów klasycznych,
            jak i materiałów pochodzących z komunikatorów, nagrań, systemów IT
            czy obrotu kryptowalutami.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <div className="section-kicker">Zakres doświadczenia</div>
            <h2>Obszary pracy z dokumentami.</h2>
          </div>
          <p className="section-intro">
            Strona kwalifikacji wzmacnia zaufanie klientów instytucjonalnych,
            kancelarii prawnych i osób, które potrzebują tłumaczenia do sprawy
            formalnej.
          </p>
        </div>

        <div className="card">
          <div className="pill-list">
            {expertise.map((item) => (
              <span className="pill" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid-2">
          <article className="card">
            <h3>Dlaczego kwalifikacje są istotne?</h3>
            <p>
              Dokument składany do sądu, prokuratury, Policji, urzędu albo
              kancelarii nie jest zwykłym tekstem. Musi zachować sens,
              strukturę, oznaczenia, dane i terminologię zgodnie z dokumentem
              źródłowym.
            </p>
          </article>

          <article className="card">
            <h3>Kiedy warto przesłać dokument do analizy?</h3>
            <p>
              Jeżeli dokument ma zostać użyty w sprawie urzędowej, sądowej,
              karnej, rodzinnej, pobytowej, transgranicznej albo dowodowej,
              warto najpierw przesłać skan lub plik do wstępnej oceny.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="dark-band">
          <div>
            <div className="section-kicker">Kontakt</div>
            <h2>Prześlij dokument do wstępnej wyceny.</h2>
          </div>
          <p>
            W wiadomości wskaż rodzaj dokumentu, język tłumaczenia, cel
            wykorzystania oraz oczekiwany termin. Na tej podstawie można
            określić koszt, termin i sposób odbioru.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <span>© 2026 Vadym Rekel — Tłumacz przysięgły języka ukraińskiego</span>
          <span>TP/27/17 · CIOL no. 94280 · TEPIS Member 2026</span>
          <span>Kraków · Polska · online</span>
        </div>
      </footer>
    </main>
  );
}