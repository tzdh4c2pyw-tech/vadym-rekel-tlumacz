import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://vadymrekel.pro";

export const metadata: Metadata = {
  metadataBase: new URL("https://vadymrekel.pro"),
  

  title: {
    default:
      "Tłumacz przysięgły języka ukraińskiego Kraków | Vadym Rekel TP/27/17",
    template: "%s | Vadym Rekel"
  },

  description:
    "Kancelaria tłumacza przysięgłego języka ukraińskiego w Krakowie. Vadym Rekel, TP/27/17. Tłumaczenia dla sądów, Policji i prokuratury, sprawy karne, dokumenty z Ukrainy, materiał cyfrowy i obsługa dokumentów z całej Polski zdalnie.",

  applicationName: "Kancelaria Vadym Rekel",

  authors: [{ name: "Vadym Rekel" }],

  creator: "Vadym Rekel",

  publisher: "Kancelaria Vadym Rekel",

  keywords: [
    "tłumacz przysięgły języka ukraińskiego",
    "tłumacz przysięgły ukraiński Kraków",
    "Vadym Rekel",
    "TP/27/17",
    "tłumacz ukraiński sąd",
    "tłumacz ukraiński Policja",
    "tłumacz ukraiński prokuratura",
    "tłumaczenie dokumentów z Ukrainy",
    "tłumaczenie materiału cyfrowego ukraiński",
    "tłumaczenie komunikatorów ukraiński",
    "tłumaczenie korespondencji osadzonych ukraiński"
  ],

  alternates: {
    canonical: "https://vadymrekel.pro"
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://vadymrekel.pro",
    siteName: "Kancelaria Vadym Rekel",
    title:
      "Tłumacz przysięgły języka ukraińskiego Kraków | Vadym Rekel TP/27/17",
    description:
      "Kancelaria tłumacza przysięgłego języka ukraińskiego w Krakowie. Tłumaczenia dla sądów, Policji i prokuratury. Dokumenty z całej Polski zdalnie.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Vadym Rekel tłumacz przysięgły języka ukraińskiego Kraków"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Tłumacz przysięgły języka ukraińskiego Kraków | Vadym Rekel TP/27/17",
    description:
      "Kancelaria tłumacza przysięgłego języka ukraińskiego w Krakowie. Dokumenty z całej Polski zdalnie.",
    images: ["/opengraph-image"]
  },

  icons: {
    icon: "/favicon.ico"
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
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#123c31",
  colorScheme: "light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <LocalBusinessJsonLd />{children}</body>
    </html>
  );
}