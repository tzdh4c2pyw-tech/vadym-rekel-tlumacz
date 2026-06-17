const email = "vadym.rekel@tlumaczrosyjskiegoiukrainskiego.pl";

const services = [
  {
    title: "Sądy i kancelarie",
    text: "Tłumaczenia wyroków, postanowień, protokołów, pism procesowych, załączników i materiałów dowodowych.",
    href: "/tlumaczenia-sadowe-ukrainski"
  },
  {
    title: "Prokuratura",
    text: "Dokumenty z postępowań przygotowawczych, spraw karnych, czynności procesowych i materiałów organów ścigania.",
    href: "/tlumaczenia-dla-prokuratury"
  },
  {
    title: "Policja",
    text: "Protokoły, zawiadomienia, czynności, materiały dowodowe, komunikatory, zrzuty ekranu, audio i wideo.",
    href: "/tlumaczenia-dla-policji"
  },
  {
    title: "Transkrypcje audio i wideo",
    text: "Transkrypcje i tłumaczenia treści mówionej z nagrań audio, plików wideo oraz materiałów procesowych.",
    href: "/transkrypcje-nagran-audio-wideo"
  },
  {
    title: "IT, krypto i materiały cyfrowe",
    text: "Komunikatory, zrzuty ekranu, eksporty rozmów, transakcje kryptowalutowe, dokumentacja techniczna i dane cyfrowe.",
    href: "/tlumaczenia-it-krypto"
  },
  {
    title: "Korespondencja osadzonych",
    text: "Ręcznie pisane listy, oświadczenia, prośby, wyjaśnienia oraz korespondencja rodzinna i procesowa.",
    href: "/tlumaczenie-korespondencji-osadzonych"
  },
  {
    title: "Dokumenty z Ukrainy",
    text: "Akty stanu cywilnego, zaświadczenia, decyzje, pełnomocnictwa, dokumenty pobytowe i urzędowe.",
    href: "/dokumenty-z-ukrainy"
  }
];

const credentials = [
  "Tłumacz przysięgły języka ukraińskiego, nr TP/27/17",
  "Wpis na listę Ministra Sprawiedliwości od 2017 r.",
  "CIOL — Chartered Institute of Linguists, CIOL no. 94280",
  "Członkostwo TEPIS 2026",
  "MBA — Master of Business Administration",
  "Prawo nowych technologii",
  "Prawo własności intelektualnej i nowych technologii",
  "Prawo karne materialne i procesowe"
];

const faq = [
  {
    q: "Czy wykonuję tłumaczenia dla sądów?",
    a: "Tak. Wykonuję poświadczone tłumaczenia pisemne dokumentów składanych w sądach, w tym wyroków, postanowień, protokołów, pism procesowych, załączników i materiałów dowodowych."
  },
  {
    q: "Czy obsługuję prokuraturę i Policję?",
    a: "Tak. Tłumaczę dokumenty wykorzystywane w postępowaniach przygotowawczych, karnych oraz w czynnościach prowadzonych przez organy ścigania."
  },
  {
    q: "Czy tłumaczę materiały cyfrowe, IT i krypto?",
    a: "Tak. Tłumaczenie może obejmować treść wiadomości, zrzuty ekranu, eksporty rozmów, dokumentację techniczną, dane dotyczące kryptowalut oraz inne treści językowe widoczne w materiale cyfrowym."
  },
  {
    q: "Czy można wysłać dokument do wyceny e-mailem?",
    a: "Tak. Do wstępnej wyceny wystarczy skan, zdjęcie albo plik PDF. Po analizie materiału można określić koszt, termin i sposób odbioru tłumaczenia."
  }
];

export default function Home() {
  const mailto =
    `mailto:${email}?subject=` +
    encodeURIComponent("Wycena tłumaczenia przysięgłego języka ukraińskiego");

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
          max-width: 1220px;
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
          box-shadow: 0 10px 28px rgba(23, 59, 47, 0.25);
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
          white-space: nowrap;
        }

        .nav-cta {
          padding: 11px 16px;
          border-radius: 999px;
          background: var(--green);
          color: #fff;
          box-shadow: 0 12px 30px rgba(23, 59, 47, 0.20);
        }

        .hero {
          max-width: 1220px;
          margin: 0 auto;
          padding: 72px 22px 36px;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
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
          max-width: 900px;
          position: relative;
          z-index: 1;
        }

        .lead {
          max-width: 820px;
          margin: 0;
          color: var(--muted);
          font-size: 21px;
          line-height: 1.55;
          position: relative;
          z-index: 1;
        }

        .actions {
          margin-top: 32px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          position: relative;
          z-index: 1;
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
          box-shadow: 0 18px 38px rgba(23, 59, 47, 0.24);
        }

        .button-secondary {
          background: rgba(255,255,255,0.64);
          border-color: var(--line);
          color: var(--ink);
        }

        .note {
          margin-top: 24px;
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          line-height: 1.6;
          position: relative;
          z-index: 1;
        }

        .side-panel {
          border-radius: var(--radius);
          background: linear-gradient(150deg, var(--green), var(--green-dark));
          color: #fff;
          padding: 32px;
          box-shadow: var(--shadow);
          min-height: 540px;
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

        .side-panel-content {
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

        .credential-list {
          margin-top: 26px;
          display: grid;
          gap: 12px;
        }

        .credential {
          padding: 17px 18px;
          border-radius: 18px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
          line-height: 1.45;
          color: rgba(255,255,255,0.76);
        }

        .section {
          max-width: 1220px;
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

        .service-card {
          display: block;
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .service-card:hover {
          transform: translateY(-3px);
          border-color: rgba(182, 138, 58, 0.44);
          box-shadow: 0 20px 54px rgba(23, 20, 16, 0.10);
        }

        .card-link {
          display: inline-block;
          margin-top: 18px;
          color: var(--green);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 14px;
          font-weight: 850;
        }

        .highlight {
          background: linear-gradient(145deg, #fffaf2, #efe4cf);
          border-color: rgba(182, 138, 58, 0.30);
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

        .map-frame {
          margin-top: 20px;
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border-radius: 20px;
          border: 1px solid rgba(182, 138, 58, 0.34);
          background: #fbf6e7;
        }

        .map-frame iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .footer {
          border-top: 1px solid var(--line);
          padding: 32px 22px 44px;
          color: var(--muted);
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 13px;
        }

        .footer-inner {
          max-width: 1220px;
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
          <a className="brand" href="#top" aria-label="Strona główna">
            <span className="brand-mark">VR</span>
            <span className="brand-title">
              Vadym Rekel
              <span className="brand-subtitle">
                Tłumacz przysięgły języka ukraińskiego
              </span>
            </span>
          </a>

          <div className="nav-links">
            <a href="#uslugi">Usługi</a>
            <a href="#kwalifikacje">Kwalifikacje</a>
            <a href="#specjalizacja">Specjalizacja</a>
            <a href="#mapa">Lokalizacja</a>
            <a href="#faq">FAQ</a>
            <a className="nav-cta" href="#kontakt">
              Szybka wycena
            </a>
          </div>
        </nav>
      </div>

      <section className="hero" id="top">
        <div className="hero-card">
          <span className="eyebrow">Kraków · Polska · online</span>

          <h1>
            Tłumacz przysięgły języka ukraińskiego dla sądów, prokuratury,
            Policji i kancelarii.
          </h1>

          <p className="lead">
            Poświadczone tłumaczenia pisemne z języka ukraińskiego na polski
            i z języka polskiego na ukraiński. Specjalizacja: dokumenty
            procesowe, materiały dowodowe, pisma urzędowe, transkrypcje
            nagrań, korespondencja osadzonych, dokumentacja IT, kryptowaluty
            oraz materiały cyfrowe wykorzystywane w sprawach prawnych.
          </p>

          <div className="actions">
            <a className="button button-primary" href={mailto}>
              Prześlij dokument do wyceny
            </a>
            <a className="button button-secondary" href="#uslugi">
              Sprawdź zakres usług
            </a>
          </div>

          <p className="note">
            Do wstępnej wyceny wystarczy skan, zdjęcie albo plik PDF. Po
            analizie materiału otrzymasz informację o koszcie, terminie i
            możliwej formie odbioru.
          </p>
        </div>

        <aside className="side-panel">
          <div className="side-panel-content">
            <h2>Dokumenty procesowe, dowodowe i specjalistyczne.</h2>
            <p>
              W sprawach sądowych, karnych, urzędowych i technicznych liczy się
              nie tylko znajomość języka, lecz także terminologia, forma
              dokumentu, konsekwencja zapisu i odpowiedzialność za szczegół.
            </p>

            <div className="credential-list">
              <div className="credential">
                Tłumacz przysięgły języka ukraińskiego, nr TP/27/17.
              </div>
              <div className="credential">
                CIOL — Chartered Institute of Linguists, CIOL no. 94280.
              </div>
              <div className="credential">
                TEPIS · MBA · prawo nowych technologii · prawo karne.
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="section" id="uslugi">
        <div className="section-header">
          <div>
            <div className="section-kicker">Zakres usług</div>
            <h2>Tłumaczenia przysięgłe i specjalistyczne.</h2>
          </div>
          <p className="section-intro">
            Strona jest skierowana do klientów, dla których dokument nie jest
            zwykłym tekstem, lecz elementem postępowania, dowodem, załącznikiem
            do akt albo podstawą decyzji urzędowej.
          </p>
        </div>

        <div className="grid-3">
          {services.map((service, index) => (
            <a
              className={`card service-card ${index === 0 ? "highlight" : ""}`}
              href={service.href}
              key={service.title}
            >
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span className="card-link">Zobacz zakres →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section" id="kwalifikacje">
        <div className="section-header">
          <div>
            <div className="section-kicker">Kwalifikacje</div>
            <h2>Uprawnienia i przygotowanie specjalistyczne.</h2>
          </div>
          <p className="section-intro">
            Połączenie uprawnień tłumacza przysięgłego z przygotowaniem
            prawnym, technologicznym i menedżerskim wzmacnia pracę z
            dokumentami złożonymi i dowodowymi.
          </p>
        </div>

        <div className="card">
          <div className="pill-list">
            {credentials.map((item) => (
              <span className="pill" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="specjalizacja">
        <div className="dark-band">
          <div>
            <div className="section-kicker">Specjalizacja ekspercka</div>
            <h2>Prawo, nowe technologie i materiał dowodowy.</h2>
          </div>
          <p>
            Wykonuję tłumaczenia dokumentów i materiałów, które pojawiają się w
            sprawach prawnych, karnych, administracyjnych, technologicznych i
            transgranicznych: od pism procesowych po komunikatory, nagrania,
            dane cyfrowe i dokumentację dotyczącą kryptowalut.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid-3">
          <article className="card">
            <h3>Prawo karne i procesowe</h3>
            <p>
              Protokoły, materiały dowodowe, dokumenty organów ścigania,
              postępowania karne, pisma procesowe i korespondencja do akt.
            </p>
          </article>

          <article className="card">
            <h3>Nowe technologie</h3>
            <p>
              Dokumentacja IT, cyberbezpieczeństwo, komunikatory, dane cyfrowe,
              e-commerce, start-upy i systemy informatyczne.
            </p>
          </article>

          <article className="card">
            <h3>Krypto i transakcje cyfrowe</h3>
            <p>
              Portfele, giełdy, transakcje, raporty, komunikaty techniczne,
              eksporty danych i dokumenty do spraw prawnych.
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="mapa">
        <div className="section-header">
          <div>
            <div className="section-kicker">Lokalizacja</div>
            <h2>Kancelaria przy Rondzie Mogilskim w Krakowie.</h2>
          </div>
          <p className="section-intro">
            ul. Kielecka 2/53, 31-526 Kraków. Dogodna lokalizacja dla klientów
            współpracujących z sądami, prokuraturą, Policją, kancelariami i
            urzędami.
          </p>
        </div>

        <div className="card">
          <h3>Mapa dojazdu</h3>
          <p>
            Kancelaria znajduje się w pobliżu Sądu Okręgowego w Krakowie,
            Prokuratury Okręgowej, Małopolskiego Urzędu Wojewódzkiego oraz
            Konsulatu Ukrainy w Krakowie.
          </p>

          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.453089598971!2d19.961595176701726!3d50.0696491140557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b122aaf12c1%3A0xb1f9ec2649aa6e13!2sKielecka+2%2F53%2C+31-526+Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1714890521862!5m2!1spl!2spl"
              title="Lokalizacja kancelarii tłumacza przysięgłego Vadym Rekel w Krakowie"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="section-header">
          <div>
            <div className="section-kicker">FAQ</div>
            <h2>Najczęstsze pytania.</h2>
          </div>
        </div>

        <div className="grid-2">
          {faq.map((item) => (
            <article className="card" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="kontakt">
        <div className="dark-band">
          <div>
            <div className="section-kicker">Kontakt</div>
            <h2>Prześlij dokument do szybkiej wyceny.</h2>
          </div>
          <div>
            <p>
              Opisz krótko, do czego potrzebne jest tłumaczenie, dołącz skan
              dokumentu albo materiał źródłowy i wskaż oczekiwany termin.
            </p>
            <div className="actions">
              <a className="button button-primary" href={mailto}>
                Napisz e-mail
              </a>
              <a
                className="button button-secondary"
                href="https://www.google.com/maps/place/T%C5%82umacz+przysi%C4%99g%C5%82y+j%C4%99zyka+ukrai%C5%84skiego+Krak%C3%B3w+%E2%80%93+mgr+Vadym+Rekel/@50.0664757,19.9621993,17z/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zobacz opinie w Google
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <span>
            © 2026 Vadym Rekel — Tłumacz przysięgły języka ukraińskiego
          </span>
          <span>nr TP/27/17 · ul. Kielecka 2/53, 31-526 Kraków</span>
          <span>{email}</span>
        </div>
      </footer>
    </main>
  );
}