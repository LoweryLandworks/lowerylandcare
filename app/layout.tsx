import type { Metadata } from "next";
import { Anton, DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyBar } from "@/components/StickyBar";
import { GtmScript, GtmNoScript } from "@/components/Gtm";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Lowery Landworks — Outdoor Property Maintenance in DFW, TX",
    template: "%s | Lowery Landworks",
  },
  description:
    "Outdoor property maintenance serving Dallas, Fort Worth, Denton, Plano, Frisco and the whole DFW metroplex. Transparent pricing — the price we quote is the price you pay. Call (469) 301-1977.",
  openGraph: {
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
  },
};

// LocalBusiness structured data. Using LocalBusiness + serviceType (not an
// invented schema type). PLACEHOLDER: no street address published yet — add
// one here if/when Lowery Landworks wants it on Google.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  url: SITE.domain,
  telephone: SITE.phoneTel,
  serviceType: "Outdoor Property Maintenance",
  description:
    "Locally owned outdoor property maintenance — lawn care, cleanups, hedge trimming, mulch and more — serving the Dallas–Fort Worth metroplex, Texas.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Denton",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: SITE.cities.map((city) => ({
    "@type": "City",
    name: `${city}, TX`,
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <GtmScript />
        <GtmNoScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyBar />
      </body>
    </html>
  );
}
