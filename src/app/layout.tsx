import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "../styles.css";
import { Header, Footer } from "@/components/studio/shell";

export const metadata: Metadata = {
  title: "DESIGN CONSTRUCTION",
  description: "ΧΑΛΙΚΙΩΤΗΣ Θ. ΓΕΩΡΓΙΟΣ – ΠΟΛΙΤΙΚΟΣ ΜΗΧΑΝΙΚΟΣ ΤΕ",
  openGraph: {
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="el">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Noto+Sans:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
