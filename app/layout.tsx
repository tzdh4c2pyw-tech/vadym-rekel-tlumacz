import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "Vadym Rekel | Tłumacz przysięgły języka ukraińskiego Kraków",
    template: "%s | Vadym Rekel"
  },
  description:
    "Tłumacz przysięgły języka ukraińskiego w Krakowie. Tłumaczenia poświadczone dla sądów, prokuratury, Policji, kancelarii, instytucji i klientów indywidualnych. Dokumenty procesowe, materiały dowodowe, transkrypcje, IT, krypto i dokumenty z Ukrainy.",
  keywords: [
    "tłumacz przysięgły ukraiński",
    "tłumacz przysięgły języka ukraińskiego",
    "tłumacz ukraiński Kraków",
    "tłumaczenia sądowe ukraiński",
    "tłumaczenia dla sądu ukraiński",
    "tłumaczenia dla prokuratury",
    "tłumaczenia dla Policji",
    "tłumaczenie dokumentów procesowych",
    "tłumaczenie materiału dowodowego",
    "transkrypcja nagrań ukraiński",
    "tłumaczenie korespondencji osadzonych",
    "tłumaczenia IT ukraiński",
    "tłumaczenia krypto ukraiński",
    "tłumaczenie dokumentów z Ukrainy"
  ],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    title:
      "Vadym Rekel | Tłumacz przysięgły języka ukraińskiego",
    description:
      "Poświadczone tłumaczenia pisemne z języka ukraińskiego i na język ukraiński. Dokumenty sądowe, procesowe, urzędowe, techniczne, cyfrowe i dowodowe.",
    siteName: "Vadym Rekel — Tłumacz przysięgły języka ukraińskiego"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}