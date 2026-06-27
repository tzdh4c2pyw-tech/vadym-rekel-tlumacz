export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Vadym Rekel - Tłumacz przysięgły języka ukraińskiego",
    url: "https://vadymrekel.pro/",
    telephone: "+48883040483",
    email: "biegly@vadymrekel.pl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Kielecka 2/53",
      postalCode: "31-526",
      addressLocality: "Kraków",
      addressCountry: "PL"
    },
    areaServed: "PL",
    priceRange: "$$",
    description:
      "Tłumacz przysięgły języka ukraińskiego w Krakowie. Tłumaczenia poświadczone, sądowe, dokumenty procesowe, dokumenty z Ukrainy i materiał cyfrowy.",
    sameAs: [
      "https://www.linkedin.com/in/vadym-rekel/"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
