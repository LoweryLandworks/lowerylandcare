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
    default: "Lowery's Landscaping — Lawn Care in Denton County, TX",
    template: "%s | Lowery's Landscaping",
  },
  description:
    "Locally owned lawn care serving Denton, Lewisville, Flower Mound and all of Denton County. Transparent pricing — the price we quote is the price you pay. Call (682) 390-5608.",
  openGraph: {
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
  },
};

// LocalBusiness structured data. Using LocalBusiness + serviceType (not an
// invented schema type). PLACEHOLDER: no street address published yet — add
// one here if/when Lowery's wants it on Google.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  url: SITE.domain,
  telephone: SITE.phoneTel,
  serviceType: "Lawn Care",
  description:
    "Locally owned lawn care and landscaping serving Denton County and North DFW, Texas.",
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
