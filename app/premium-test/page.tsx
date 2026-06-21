import type { Metadata } from "next";

const siteUrl = "https://vadym-rekel-tlumacz.vercel.app";
const email = "biegly@vadymrekel.pl";
const expertPhoneDisplay = "883 040 483";
const expertPhoneHref = "+48883040483";
const officePhoneDisplay = "735 753 383";
const officePhoneHref = "+48735753383";

export const metadata: Metadata = {
  title: "Premium test | Tłumacz przysięgły ukraiński | Vadym Rekel",
  description:
    "Testowy minimalistyczny układ strony kancelarii tłumacza przysięgłego języka ukraińskiego.",
  alternates: {
    canonical: `${siteUrl}/premium-test`
  },
  robots: {
    index: false,
    follow: false
  }
};

const services = [
  {
    title: "Sądy i organy",
    text: "Akta spraw, protokoły, postanowienia, pouczenia i pisma procesowe."
  },
  {
    title: "Sprawy karne",
    text: "Dokumenty postępowań przygotowawczych, materiał dowodowy i korespondencja procesowa."
  },
  {
    title: "Dokumenty z Ukrainy",
    text: "Dokumenty urzędowe, sądowe, administracyjne, prywatne i edukacyjne."
  },
  {
    title: "Materiał cyfrowy",
    text: "Komunikatory, zrzuty ekranu, raporty PDF, dane z telefonu i sprawy internetowe."
  }
];

const facts = [
  "TP/27/17",
  "język ukraiński",
  "Kraków",
  "wycena online"
];

const cities = [
  ["Warszawa", "/tlumacz-przysiegly-ukrainski-warszawa"],
  ["Kraków", "/tlumacz-przysiegly-ukrainski-krakow"],
  ["Wrocław", "/tlumacz-przysiegly-ukrainski-wroclaw"],
  ["Poznań", "/tlumacz-przysiegly-ukrainski-poznan"],
  ["Gdańsk", "/tlumacz-przysiegly-ukrainski-gdansk"],
  ["Katowice", "/tlumacz-przysiegly-ukrainski-katowice"]
];

export default function PremiumTestPage() {
  return (
    <main>
      <style>{`
        :root {
          --bg: #f6f1e8;
          --paper: #fffaf2;
          --ink: #15120e;
          --muted: #6f665c;
          --line: rgba(21, 18, 14, 0.13);
          --green: #123c31;
          --green-dark: #0c2b24;
          --gold: #a77a2d;
          --radius: 28px;
          --shadow: 0 22px 70px rgba(21, 18, 14, 0.10);
          --sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          --serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
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
            radial-gradient(circle at 12% 0%, rgba(167, 122, 45, 0.11), transparent 32%),
            linear-gradient(180deg, #fbf7ef 0%, var(--bg) 52%, #efe6d8 100%);
          color: var(--ink);
          font-family: var(--serif);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .wrap {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 22px;
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 20;
          border-bottom: 1px solid var(--line);
          background: rgba(246, 241, 232, 0.92);
          backdrop-filter: blur(18px);
        }

        .nav-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 16px 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--sans);
        }

        .mark {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--green);
          color: #fff;
          font-weight: 950;
          letter-spacing: -0.04em;
        }

        .brand strong {
          display: block;
          font-size: 14px;
          line-height: 1.05;
        }

        .brand span {
          display: block;
          margin-top: 3px;
          color: var(--muted);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 18px;
          font-family: var(--sans);
          color: var(--muted);
          font-size: 13px;
          font-weight: 850;
        }

        .nav-phone {
          padding: 10px 16px;
          border-radius: 999px;
          background: var(--green);
          color: #fff;
        }

        .hero {
          padding: 54px 0 28px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 430px;
          gap: 28px;
          align-items: stretch;
        }

        .hero-copy {
          min-height: 590px;
          padding: 58px 52px;
          border-radius: 38px;
          border: 1px solid var(--line);
          background: rgba(255, 250, 242, 0.88);
          box-shadow: var(--shadow);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .eyebrow {
          width: fit-content;
          margin-bottom: 20px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(18, 60, 49, 0.08);
          color: var(--green);
          font-family: var(--sans);
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        h1 {
          margin: 0;
          max-width: 760px;
          font-size: clamp(46px, 5vw, 78px);
          line-height: 0.94;
          letter-spacing: -0.07em;
        }

        .lead {
          margin: 24px 0 0;
          max-width: 680px;
          color: rgba(21, 18, 14, 0.70);
          font-size: 20px;
          line-height: 1.55;
        }

        .actions {
          margin-top: 32px;
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
          border: 1px solid var(--line);
          font-family: var(--sans);
          font-size: 14px;
          font-weight: 950;
        }

        .primary {
          background: var(--green);
          color: #fff;
          border-color: transparent;
        }

        .hero-photo {
          margin: 0;
          border-radius: 38px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: var(--green);
          box-shadow: var(--shadow);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .hero-photo img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .hero-photo figcaption {
          padding: 20px;
          background: var(--green);
          color: #fff;
        }

        .hero-photo strong {
          display: block;
          font-size: 22px;
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .hero-photo span {
          display: block;
          margin-top: 6px;
          color: rgba(255, 255, 255, 0.72);
          font-family: var(--sans);
          font-size: 13px;
          font-weight: 800;
        }

        .facts {
          padding: 10px 0 40px;
        }

        .facts-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .fact {
          min-height: 96px;
          padding: 22px;
          border-radius: 24px;
          border: 1px solid var(--line);
          background: rgba(255, 250, 242, 0.76);
          font-family: var(--sans);
          font-size: 13px;
          font-weight: 950;
          color: var(--green);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .section {
          padding: 54px 0;
        }

        .section-head {
          display: grid;
          grid-template-columns: 0.95fr 1fr;
          gap: 40px;
          align-items: end;
          margin-bottom: 28px;
        }

        .section-head h2 {
          margin: 0;
          font-size: clamp(38px, 4vw, 64px);
          line-height: 0.96;
          letter-spacing: -0.065em;
        }

        .section-head p {
          margin: 0;
          color: rgba(21, 18, 14, 0.68);
          font-size: 18px;
          line-height: 1.6;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .service {
          min-height: 250px;
          padding: 28px;
          border-radius: 30px;
          border: 1px solid var(--line);
          background: rgba(255, 250, 242, 0.92);
          box-shadow: 0 14px 38px rgba(21, 18, 14, 0.06);
        }

        .service span {
          display: inline-flex;
          margin-bottom: 18px;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(18, 60, 49, 0.08);
          color: var(--green);
          font-family: var(--sans);
          font-size: 10px;
          font-weight: 950;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .service h3 {
          margin: 0;
          font-size: 28px;
          line-height: 1.02;
          letter-spacing: -0.045em;
        }

        .service p {
          margin: 14px 0 0;
          color: rgba(21, 18, 14, 0.68);
          font-size: 16px;
          line-height: 1.55;
        }

        .profile {
          padding: 42px;
          border-radius: 36px;
          border: 1px solid var(--line);
          background:
            linear-gradient(145deg, rgba(255, 250, 242, 0.96), rgba(248, 241, 230, 0.92));
          display: grid;
          grid-template-columns: 0.85fr 1fr;
          gap: 36px;
          box-shadow: var(--shadow);
        }

        .profile h2 {
          margin: 0;
          font-size: clamp(36px, 4vw, 62px);
          line-height: 0.96;
          letter-spacing: -0.065em;
        }

        .profile p {
          margin: 0;
          color: rgba(21, 18, 14, 0.70);
          font-size: 18px;
          line-height: 1.7;
        }

        .labels {
          margin-top: 24px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .label {
          padding: 9px 12px;
          border-radius: 999px;
          border: 1px solid rgba(18, 60, 49, 0.14);
          background: rgba(18, 60, 49, 0.07);
          color: var(--green);
          font-family: var(--sans);
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .photos {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 16px;
        }

        .photo {
          margin: 0;
          overflow: hidden;
          border-radius: 30px;
          border: 1px solid var(--line);
          background: rgba(255, 250, 242, 0.94);
          box-shadow: 0 16px 40px rgba(21, 18, 14, 0.08);
        }

        .photo img {
          width: 100%;
          height: 360px;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        .photo:first-child img {
          height: 430px;
        }

        .photo figcaption {
          padding: 14px 18px;
          font-family: var(--sans);
          font-size: 14px;
          font-weight: 900;
        }

        .cities {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .city {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          padding: 0 18px;
          border: 1px solid var(--line);
          background: rgba(255, 250, 242, 0.86);
          color: var(--green);
          font-family: var(--sans);
          font-size: 14px;
          font-weight: 950;
        }

        .city-all {
          background: var(--green);
          color: #fff;
          border-color: transparent;
        }

        .contact {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          align-items: stretch;
        }

        .contact-card {
          padding: 42px;
          border-radius: 36px;
          background: var(--green);
          color: #fff;
          box-shadow: var(--shadow);
        }

        .contact-card h2 {
          margin: 0;
          font-size: clamp(36px, 4vw, 62px);
          line-height: 0.96;
          letter-spacing: -0.065em;
        }

        .contact-card p {
          margin: 18px 0 0;
          color: rgba(255, 255, 255, 0.74);
          font-size: 17px;
          line-height: 1.6;
        }

        .contact-card .actions {
          margin-top: 26px;
        }

        .contact-card .button {
          background: #fff;
          color: var(--green);
        }

        .map {
          overflow: hidden;
          border-radius: 36px;
          border: 1px solid var(--line);
          background: rgba(255, 250, 242, 0.92);
          box-shadow: var(--shadow);
        }

        .map iframe {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 430px;
          border: 0;
          filter: grayscale(0.08) saturate(0.92);
        }

        .footer {
          padding: 44px 0 70px;
          color: var(--muted);
          font-family: var(--sans);
          font-size: 13px;
          font-weight: 750;
        }

        @media (max-width: 980px) {
          .hero-grid,
          .section-head,
          .profile,
          .photos,
          .contact {
            grid-template-columns: 1fr;
          }

          .service-grid,
          .facts-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero-copy {
            min-height: auto;
          }
        }

        @media (max-width: 640px) {
          .nav-links {
            display: none;
          }

          .hero-copy,
          .profile,
          .contact-card {
            padding: 32px 24px;
            border-radius: 28px;
          }

          .service-grid,
          .facts-grid {
            grid-template-columns: 1fr;
          }

          .hero-photo img,
          .photo img,
          .photo:first-child img {
            height: 300px;
          }
        }
      `}</style>

      <nav className="nav">
        <div className="nav-inner">
          <a className="brand" href="/">
            <span className="mark">VR</span>
            <span>
              <strong>Kancelaria Mgr Vadym Rekel</strong>
              <span>Tłumacz przysięgły języka ukraińskiego</span>
            </span>
          </a>

          <div className="nav-links">
            <a href="#zakres">Zakres</a>
            <a href="#profil">Profil</a>
            <a href="#kancelaria">Kancelaria</a>
            <a href="#kontakt">Kontakt</a>
            <a className="nav-phone" href={`tel:${expertPhoneHref}`}>
              {expertPhoneDisplay}
            </a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Kraków · TP/27/17 · język ukraiński</div>
            <h1>Tłumacz przysięgły języka ukraińskiego dla dokumentów wymagających precyzji.</h1>
            <p className="lead">
              Tłumaczenia poświadczone i ustne. Dokumenty procesowe, sprawy karne,
              dokumenty z Ukrainy oraz materiał cyfrowy dla sądów, organów,
              kancelarii prawnych, firm i osób prywatnych.
            </p>
            <div className="actions">
              <a className="button primary" href={`tel:${expertPhoneHref}`}>
                Zadzwoń: {expertPhoneDisplay}
              </a>
              <a className="button" href={`mailto:${email}`}>
                Wyślij dokument do wyceny
              </a>
            </div>
          </div>

          <figure className="hero-photo">
            <img
              src="/images/vadym%20rekel.jpg"
              alt="Mgr Vadym Rekel tłumacz przysięgły języka ukraińskiego"
            />
            <figcaption>
              <strong>Mgr Vadym Rekel</strong>
              <span>Tłumacz przysięgły języka ukraińskiego · TP/27/17</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="facts">
        <div className="wrap facts-grid">
          {facts.map((fact) => (
            <div className="fact" key={fact}>{fact}</div>
          ))}
        </div>
      </section>

      <section className="section" id="zakres">
        <div className="wrap">
          <div className="section-head">
            <h2>Zakres pracy kancelarii.</h2>
            <p>
              Strona główna pokazuje główne obszary. Szczegółowe opisy pozostają
              na dedykowanych podstronach SEO.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service" key={service.title}>
                <span>Zakres</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="profil">
        <div className="wrap">
          <div className="profile">
            <h2>Prawo, język ukraiński i materiał procesowy.</h2>
            <div>
              <p>
                Kancelaria pracuje z dokumentami, które wymagają nie tylko przekładu
                językowego, lecz także rozumienia funkcji dokumentu w sprawie:
                w aktach, przy czynnościach procesowych, w korespondencji organów
                albo jako materiał dowodowy.
              </p>
              <div className="labels">
                <span className="label">akta spraw</span>
                <span className="label">protokoły</span>
                <span className="label">dokumenty z Ukrainy</span>
                <span className="label">komunikatory</span>
                <span className="label">raporty PDF</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="kancelaria">
        <div className="wrap">
          <div className="section-head">
            <h2>Kancelaria w Krakowie.</h2>
            <p>
              Realne miejsce pracy tłumacza przysięgłego. Dokumenty można przekazać
              osobiście albo przesłać elektronicznie do wstępnej wyceny.
            </p>
          </div>

          <div className="photos">
            <figure className="photo">
              <img
                src="/images/kancelaria%20tlumacza%20przysieglego%20stanowisko%20pracy%20vadym%20rekel.jpeg"
                alt="Mgr Vadym Rekel przy stanowisku pracy"
              />
              <figcaption>Stanowisko pracy tłumacza przysięgłego</figcaption>
            </figure>

            <figure className="photo">
              <img
                src="/images/kancelaria%20tlumacza%20przysieglego%20stanowisko%20administracyjne%20vadym%20rekel.jpeg"
                alt="Stanowisko administracyjne kancelarii"
              />
              <figcaption>Obsługa dokumentów w kancelarii</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Obsługa dokumentów z całej Polski.</h2>
            <p>
              Dokumenty do wstępnej wyceny można przesłać elektronicznie.
              Pełna lista lokalizacji znajduje się na stronie miast.
            </p>
          </div>

          <div className="cities">
            {cities.map(([city, href]) => (
              <a className="city" href={href} key={href}>{city}</a>
            ))}
            <a className="city city-all" href="/miasta">Wszystkie miasta</a>
          </div>
        </div>
      </section>

      <section className="section" id="kontakt">
        <div className="wrap contact">
          <div className="contact-card">
            <h2>Wyślij dokument do wyceny.</h2>
            <p>
              Prześlij skan, zdjęcie albo plik PDF. W odpowiedzi otrzymasz informację
              o terminie, sposobie przekazania dokumentów i orientacyjnym koszcie.
            </p>
            <div className="actions">
              <a className="button" href={`tel:${expertPhoneHref}`}>{expertPhoneDisplay}</a>
              <a className="button" href={`mailto:${email}`}>Wyślij e-mail</a>
            </div>
            <p>
              Telefon kancelarii: {officePhoneDisplay}<br />
              E-mail: {email}<br />
              ul. Kielecka 2/53, 31-526 Kraków
            </p>
          </div>

          <div className="map">
            <iframe
              title="Mapa dojazdu do Kancelarii Mgr Vadym Rekel w Krakowie"
              src="https://www.google.com/maps?q=Kielecka%202%2F53%2C%2031-526%20Krak%C3%B3w&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          Kancelaria Mgr Vadym Rekel · Tłumacz przysięgły języka ukraińskiego · TP/27/17
        </div>
      </footer>
    </main>
  );
}
