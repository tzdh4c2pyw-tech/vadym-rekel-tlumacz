import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tłumacz przysięgły ukraiński Częstochowa | Tłumaczenia dokumentów",
  description:
    "Tłumacz przysięgły języka ukraińskiego Częstochowie: tłumaczenia dokumentów do sądu, urzędu, Policji, prokuratury, uczelni i pracodawcy. Kancelaria mieści się w Krakowie. Dokumenty do wstępnej wyceny można przesłać elektronicznie z całej Polski. Obsługa online i wysyłka.",
  alternates: {
    canonical: "/tlumacz-przysiegly-ukrainski-czestochowa",
  },
  openGraph: {
    title: "Tłumacz przysięgły ukraiński Częstochowa | Vadym Rekel",
    description:
      "Tłumaczenia przysięgłe z języka ukraińskiego na polski i z polskiego na ukraiński dla osób z miasta Częstochowa. Dokumenty urzędowe, sądowe i prywatne.",
    url: "https://vadymrekel.pro/tlumacz-przysiegly-ukrainski-czestochowa",
    type: "website",
  },
};

const city = "Częstochowa";
const cityLoc = "Częstochowie";

export default function CityTranslationPage() {
  return (
    <main className="city-page">
      <section className="city-hero">
        <div className="city-container">
          <p className="city-eyebrow">Tłumacz przysięgły języka ukraińskiego</p>

          <h1>Tłumacz przysięgły ukraiński Częstochowa — dokumenty, sąd, urząd</h1>

          <p className="city-lead">
            Potrzebujesz tłumaczenia przysięgłego z języka ukraińskiego na polski
            albo z polskiego na ukraiński Częstochowie? Przyjmuję dokumenty online,
            wykonuję tłumaczenia pisemne i odsyłam gotowe tłumaczenia zgodnie z
            ustalonym trybem.
          </p>

          <div className="city-actions">
            <a className="city-button city-button-primary" href="/kontakt">
              Zapytaj o wycenę
            </a>
            <a className="city-button city-button-secondary" href="/kwalifikacje">
              Sprawdź kwalifikacje
            </a>
          </div>
        </div>
      </section>

      <section className="city-section">
        <div className="city-container">
          <div className="city-grid">
            <article className="city-card">
              <h2>Dokumenty urzędowe</h2>
              <p>
                Tłumaczenia aktów urodzenia, małżeństwa, zgonu, zaświadczeń,
                decyzji administracyjnych, dokumentów pobytowych i innych pism
                potrzebnych w urzędach.
              </p>
            </article>

            <article className="city-card">
              <h2>Dokumenty sądowe</h2>
              <p>
                Tłumaczenia pism procesowych, wyroków, postanowień, wezwań,
                pełnomocnictw, dokumentów dla organów procesowych i instytucji publicznych.
              </p>
            </article>

            <article className="city-card">
              <h2>Dokumenty prywatne i firmowe</h2>
              <p>
                Tłumaczenia umów, świadectw, dyplomów, zaświadczeń o zatrudnieniu,
                dokumentów firmowych i korespondencji wymagającej formy
                tłumaczenia przysięgłego.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="city-section city-section-alt">
        <div className="city-container city-narrow">
          <h2>Jak działa tłumaczenie przysięgłe dla osób z miasta Częstochowa?</h2>

          <div className="city-steps">
            <article className="city-step">
              <span>Krok 1</span>
              <h3>Wyślij skan albo zdjęcie dokumentu</h3>
              <p>
                Do wstępnej wyceny wystarczy czytelny skan lub zdjęcie dokumentu.
                Na tej podstawie można określić zakres pracy, termin i orientacyjny koszt.
              </p>
            </article>

            <article className="city-step">
              <span>Krok 2</span>
              <h3>Otrzymaj wycenę i termin</h3>
              <p>
                Po analizie dokumentu otrzymasz informację o możliwym terminie
                wykonania tłumaczenia przysięgłego oraz sposobie odbioru.
              </p>
            </article>

            <article className="city-step">
              <span>Krok 3</span>
              <h3>Odbierz tłumaczenie</h3>
              <p>
                Gotowe tłumaczenie może zostać odebrane zgodnie z ustaleniami.
                W wielu sprawach możliwa jest obsługa zdalna i wysyłka dokumentów.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="city-section">
        <div className="city-container">
          <h2>Najczęstsze tłumaczenia z języka ukraińskiego Częstochowie</h2>

          <div className="city-link-grid">
            <a href="/tlumaczenia-dla-policji">Tłumaczenia dla Policji</a>
            <a href="/tlumaczenia-dla-prokuratury">Tłumaczenia dla prokuratury</a>
            <a href="/tlumaczenia-sadowe-ukrainski">Tłumaczenia sądowe ukraiński</a>
            <a href="/dokumenty-z-ukrainy">Tłumaczenia dokumentów urzędowych</a>
            <a href="/transkrypcje-nagran-audio-wideo">Transkrypcje nagrań</a>
            <a href="/kontakt">Kontakt i wycena</a>
          </div>
        </div>
      </section>

      <section className="city-cta">
        <div className="city-container">
          <h2>Potrzebujesz tłumacza przysięgłego ukraińskiego Częstochowie?</h2>
          <p>
            Wyślij dokument do wyceny. W wiadomości podaj język tłumaczenia,
            termin, cel tłumaczenia oraz informację, czy dokument ma być użyty
            w sądzie, urzędzie, na Policji, w prokuraturze, uczelni lub innej instytucji.
          </p>
          <a className="city-button city-button-light" href="/kontakt">
            Przejdź do kontaktu
          </a>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .city-page {
              background: #f8f4ec;
              color: #16120d;
            }

            .city-container {
              max-width: 1120px;
              margin: 0 auto;
              padding: 0 22px;
            }

            .city-narrow {
              max-width: 900px;
            }

            .city-hero {
              padding: 84px 0 70px;
              background:
                radial-gradient(circle at top right, rgba(177, 132, 56, 0.16), transparent 36%),
                linear-gradient(135deg, #fffaf2, #f4ecdf);
              border-bottom: 1px solid rgba(40, 31, 22, 0.12);
            }

            .city-eyebrow {
              margin: 0 0 14px;
              color: #124737;
              font-size: 13px;
              font-weight: 900;
              text-transform: uppercase;
              letter-spacing: 0.09em;
            }

            .city-hero h1 {
              max-width: 980px;
              margin: 0;
              font-size: clamp(42px, 7vw, 78px);
              line-height: 0.95;
              letter-spacing: -0.065em;
            }

            .city-lead {
              max-width: 760px;
              margin: 28px 0 0;
              font-size: 20px;
              line-height: 1.65;
              color: rgba(22, 18, 13, 0.76);
            }

            .city-actions {
              display: flex;
              flex-wrap: wrap;
              gap: 12px;
              margin-top: 30px;
            }

            .city-button {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              min-height: 48px;
              padding: 0 22px;
              border-radius: 999px;
              font-weight: 850;
              text-decoration: none;
            }

            .city-button-primary {
              background: #123c31;
              color: #fffaf2;
            }

            .city-button-secondary {
              border: 1px solid rgba(18, 60, 49, 0.28);
              color: #123c31;
              background: rgba(255, 250, 242, 0.75);
            }

            .city-button-light {
              background: #fffaf2;
              color: #123c31;
            }

            .city-section {
              padding: 68px 0;
            }

            .city-section-alt {
              background: rgba(255, 250, 242, 0.62);
              border-top: 1px solid rgba(40, 31, 22, 0.1);
              border-bottom: 1px solid rgba(40, 31, 22, 0.1);
            }

            .city-section h2 {
              margin: 0 0 24px;
              font-size: clamp(32px, 4vw, 52px);
              line-height: 1;
              letter-spacing: -0.055em;
            }

            .city-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 18px;
            }

            .city-card,
            .city-step {
              padding: 28px;
              border-radius: 28px;
              border: 1px solid rgba(40, 31, 22, 0.12);
              background: rgba(255, 250, 242, 0.88);
              box-shadow: 0 18px 40px rgba(21, 17, 13, 0.08);
            }

            .city-card h2,
            .city-step h3 {
              margin: 0 0 12px;
              font-size: 25px;
              letter-spacing: -0.045em;
              line-height: 1.05;
            }

            .city-card p,
            .city-step p,
            .city-cta p {
              margin: 0;
              color: rgba(22, 18, 13, 0.75);
              line-height: 1.7;
            }

            .city-steps {
              display: grid;
              gap: 16px;
            }

            .city-step span {
              display: inline-flex;
              margin-bottom: 12px;
              color: #b18438;
              font-weight: 900;
              text-transform: uppercase;
              letter-spacing: 0.08em;
              font-size: 12px;
            }

            .city-link-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 14px;
            }

            .city-link-grid a {
              padding: 18px 20px;
              border-radius: 18px;
              background: #fffaf2;
              color: #123c31;
              font-weight: 850;
              text-decoration: none;
              border: 1px solid rgba(40, 31, 22, 0.12);
            }

            .city-cta {
              padding: 70px 0;
              background: #123c31;
              color: #fffaf2;
            }

            .city-cta h2 {
              max-width: 850px;
              margin: 0 0 18px;
              font-size: clamp(34px, 5vw, 62px);
              line-height: 1;
              letter-spacing: -0.055em;
            }

            .city-cta p {
              max-width: 780px;
              color: rgba(255, 250, 242, 0.82);
              margin-bottom: 28px;
            }

            @media (max-width: 860px) {
              .city-grid,
              .city-link-grid {
                grid-template-columns: 1fr;
              }

              .city-hero {
                padding: 58px 0 50px;
              }
            }
          `,
        }}
      />
    </main>
  );
}
