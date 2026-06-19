"use client";

import { useEffect, useState } from "react";

const expertPhoneDisplay = "883 040 483";
const expertPhoneHref = "+48883040483";

const officePhoneDisplay = "735 753 383";
const officePhoneHref = "+48735753383";

const email = "biegly@vadymrekel.pl";

export default function FloatingTranslatorWidget() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isClosed = window.localStorage.getItem(
      "vr-floating-translator-widget-closed"
    );

    if (!isClosed) {
      const timer = window.setTimeout(() => {
        setIsVisible(true);
      }, 1200);

      return () => window.clearTimeout(timer);
    }

    return undefined;
  }, []);

  function closeWidget() {
    window.localStorage.setItem("vr-floating-translator-widget-closed", "true");
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <aside
      className="floating-translator-widget"
      aria-label="Szybki kontakt z tłumaczem przysięgłym"
    >
      <button
        type="button"
        className="floating-translator-close"
        aria-label="Zamknij okno kontaktowe"
        onClick={closeWidget}
      >
        ×
      </button>

      <div className="floating-translator-mark">VR</div>

      <div className="floating-translator-content">
        <span className="floating-translator-eyebrow">
          Tłumacz przysięgły · Kraków
        </span>

        <h2>Potrzebujesz tłumaczenia?</h2>

        <p>
          Zadzwoń albo wyślij dokument do wstępnej wyceny. Obsługa spraw
          sądowych, policyjnych, prokuratorskich, karnych i dokumentów z
          Ukrainy.
        </p>

        <div className="floating-translator-phone">
          <span>Tłumacz / biegły</span>
          <a href={`tel:${expertPhoneHref}`}>{expertPhoneDisplay}</a>
        </div>

        <div className="floating-translator-actions">
          <a className="floating-translator-primary" href={`tel:${expertPhoneHref}`}>
            Zadzwoń
          </a>

          <a className="floating-translator-secondary" href={`mailto:${email}`}>
            Wyślij e-mail
          </a>

          <a className="floating-translator-secondary" href={`tel:${officePhoneHref}`}>
            Kancelaria
          </a>
        </div>

        <small>Kancelaria: {officePhoneDisplay}</small>
      </div>
    </aside>
  );
}