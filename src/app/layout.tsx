import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCta } from "@/components/layout/FloatingCta";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { company } from "@/constants/company";
import { heroContent } from "@/constants/content";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: `${company.name} | ${company.tagline}`,
  description:
    "Company profile MKI untuk interior custom, manufaktur interior, portfolio, dan kemitraan arsitek, agensi, influencer.",
  keywords: company.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${company.name} | ${company.tagline}`,
    description: company.description,
    url: company.siteUrl,
    siteName: company.name,
    images: [
      {
        url: heroContent.image,
        width: 1400,
        height: 933,
        alt: heroContent.imageAlt,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | ${company.tagline}`,
    description: company.description,
    images: [heroContent.image],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  alternateName: company.shortName,
  description: company.description,
  telephone: company.phone,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address,
    addressRegion: "Jawa Barat",
    addressCountry: "ID",
  },
  url: company.siteUrl,
  foundingDate: company.foundedYear,
  areaServed: "Indonesia",
  priceRange: "$$",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="id" className={plusJakarta.variable}>
      <body>
        <Script
          id="local-business-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <ScrollProgress />
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
        <FloatingCta />
      </body>
    </html>
  );
}
