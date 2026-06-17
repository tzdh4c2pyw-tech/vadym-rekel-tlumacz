import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.tlumaczrosyjskiegoiukrainskiego.pl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Tłumacz przysięgły języka ukraińskiego Kraków | Vadym Rekel",
    template: "%s | Vadym Rekel — tłumacz przysięgły języka ukraińskiego"
  },

  description:
    "Tłumacz przysięgły języka ukraińskiego w Krakowie. Tłumaczenia poświadczone dla sądów, prokuratury, Policji, kancelarii, urzędów, spraw pobytowych, materiałów dowodowych, IT, krypto, transkrypcji audio i wideo.",

  applicationName: "Vadym Rekel — Tłumacz przysięgły języka ukraińskiego",

  authors: [
    {
      name: "Vadym Rekel",
      url: siteUrl
    }
  ],

  creator: "Vadym Rekel",
  publisher: "Vadym Rekel",

  keywords: [
    "tłumacz przysięgły języka ukraińskiego",
    "tłumacz ukraiński Kraków",
    "tłumacz przysięgły ukraiński Kraków",
    "tłumaczenia przysięgłe ukraiński",
    "tłumaczenia poświadczone ukraiński",
    "tłumacz przysięgły ukraiński online",
    "tłumaczenia sądowe ukraiński",
    "tłumaczenia dla sądu",
    "tłumaczenia dla prokuratury",
    "tłumaczenia dla Policji",
    "tłumaczenia dokumentów z Ukrainy",
    "tłumaczenia dokumentów sądowych",
    "tłumaczenia materiałów dowodowych",
    "tłumaczenia korespondencji osadzonych",
    "transkrypcje nagrań audio wideo ukraiński",
    "tłumaczenia IT ukraiński",
    "tłumaczenia kryptowaluty",
    "tłumacz ukraiński Warszawa",
    "tłumacz ukraiński Katowice",
    "tłumacz ukraiński Wrocław",
    "tłumacz ukraiński Rzeszów",
    "tłumacz ukraiński Lublin",
    "tłumacz ukraiński Poznań",
    "tłumacz ukraiński Gdańsk"
  ],

  alternates: {
    canonical: siteUrl
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    siteName: "Vadym Rekel — Tłumacz przysięgły języka ukraińskiego",
    title:
      "Tłumacz przysięgły języka ukraińskiego Kraków | Vadym Rekel",
    description:
      "Poświadczone tłumaczenia pisemne z języka ukraińskiego na polski i z języka polskiego na ukraiński. Sąd, prokuratura, Policja, kancelarie, urzędy, dokumenty z Ukrainy, IT, krypto, transkrypcje audio i wideo.",
    images: [
      {
        url: "/og-vadym-rekel-tlumacz-ukrainski.jpg",
        width: 1200,
        height: 630,
        alt: "Vadym Rekel — tłumacz przysięgły języka ukraińskiego w Krakowie"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Tłumacz przysięgły języka ukraińskiego Kraków | Vadym Rekel",
    description:
      "Tłumaczenia poświadczone ukraiński–polski dla sądów, prokuratury, Policji, kancelarii, urzędów, materiałów dowodowych, IT, krypto i transkrypcji.",
    images: ["/og-vadym-rekel-tlumacz-ukrainski.jpg"]
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },

  category: "legal translation"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#business`,
    name: "Vadym Rekel — Tłumacz przysięgły języka ukraińskiego",
    alternateName: [
      "Tłumacz przysięgły języka ukraińskiego Kraków",
      "Tłumaczenia przysięgłe ukraiński Kraków"
    ],
    url: siteUrl,
    email: "vadym.rekel@tlumaczrosyjskiegoiukrainskiego.pl",
    image: `${siteUrl}/og-vadym-rekel-tlumacz-ukrainski.jpg`,
    logo: `${siteUrl}/og-vadym-rekel-tlumacz-ukrainski.jpg`,
    description:
      "Tłumacz przysięgły języka ukraińskiego w Krakowie. Tłumaczenia poświadczone i specjalistyczne z języka ukraińskiego na polski oraz z języka polskiego na ukraiński dla sądów, prokuratury, Policji, kancelarii, urzędów i klientów indywidualnych.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Kielecka 2/53",
      postalCode: "31-526",
      addressLocality: "Kraków",
      addressRegion: "małopolskie",
      addressCountry: "PL"
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Polska"
      },
      {
        "@type": "City",
        name: "Kraków"
      },
      {
        "@type": "City",
        name: "Warszawa"
      },
      {
        "@type": "City",
        name: "Katowice"
      },
      {
        "@type": "City",
        name: "Wrocław"
      },
      {
        "@type": "City",
        name: "Rzeszów"
      },
      {
        "@type": "City",
        name: "Lublin"
      },
      {
        "@type": "City",
        name: "Poznań"
      },
      {
        "@type": "City",
        name: "Gdańsk"
      }
    ],
    founder: {
      "@type": "Person",
      name: "Vadym Rekel",
      jobTitle: "Tłumacz przysięgły języka ukraińskiego",
      knowsLanguage: ["pl", "uk", "ru", "en"],
      memberOf: [
        {
          "@type": "Organization",
          name: "Chartered Institute of Linguists"
        },
        {
          "@type": "Organization",
          name: "TEPIS"
        }
      ]
    },
    knowsAbout: [
      "tłumaczenia przysięgłe",
      "tłumaczenia sądowe",
      "tłumaczenia dla prokuratury",
      "tłumaczenia dla Policji",
      "tłumaczenia dokumentów z Ukrainy",
      "tłumaczenia materiałów dowodowych",
      "transkrypcje nagrań audio i wideo",
      "tłumaczenia IT",
      "tłumaczenia kryptowalut",
      "prawo karne",
      "prawo nowych technologii"
    ],
    hasCredential: [
      "Tłumacz przysięgły języka ukraińskiego, nr TP/27/17",
      "CIOL no. 94280",
      "TEPIS Member 2026",
      "MBA",
      "Prawo nowych technologii",
      "Prawo karne materialne i procesowe"
    ],
    sameAs: [
      "https://www.google.com/maps/place/T%C5%82umacz+przysi%C4%99g%C5%82y+j%C4%99zyka+ukrai%C5%84skiego+Krak%C3%B3w+%E2%80%93+mgr+Vadym+Rekel/@50.0664757,19.9621993,17z/",
      "https://www.tlumaczrosyjskiegoiukrainskiego.pl/"
    ]
  };

  return (
    <html lang="pl">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd)
          }}
        />
        {children}
      </body>
    </html>
  );
}