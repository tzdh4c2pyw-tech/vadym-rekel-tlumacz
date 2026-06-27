export function PremiumTrustSections() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-slate-950">Jak uzyskać wycenę?</h2>
          <ol className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
            <li>1. Wyślij skan, zdjęcie albo PDF dokumentu.</li>
            <li>2. Napisz, do czego potrzebne jest tłumaczenie: sąd, urząd, kancelaria, uczelnia albo postępowanie.</li>
            <li>3. Podaj oczekiwany termin realizacji.</li>
            <li>4. Otrzymasz informację o koszcie i możliwym terminie odbioru.</li>
          </ol>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="mailto:biegly@vadymrekel.pl" className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Wyślij dokument e-mailem</a>
            <a href="https://wa.me/48883040483" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50">WhatsApp</a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-slate-950">Poufność dokumentów</h2>
          <p className="mt-4 text-sm leading-6 text-slate-700">
            Materiały przekazywane do tłumaczenia są traktowane jako poufne. Dotyczy to w szczególności akt spraw,
            dokumentów procesowych, danych osobowych, materiału cyfrowego, korespondencji oraz dokumentów przekazywanych
            przez kancelarie, organy procesowe i instytucje publiczne.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight text-slate-950">Weryfikacja uprawnień</h2>
          <p className="mt-4 text-sm leading-6 text-slate-700">
            Vadym Rekel jest tłumaczem przysięgłym języka ukraińskiego wpisanym na listę Ministra Sprawiedliwości.
            Wpis można zweryfikować w publicznym rejestrze tłumaczy przysięgłych.
          </p>
          <a
            href="https://arch-bip.ms.gov.pl/pl/rejestry-i-ewidencje/tlumacze-przysiegli/lista-tlumaczy-przysieglych/translator,11371.html"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            Sprawdź wpis w rejestrze
          </a>
        </div>
      </div>
    </section>
  );
}
