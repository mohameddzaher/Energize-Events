import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://energize-events.com"),
  title: {
    default: "Energize Events - Premier Event Management Company in Saudi Arabia",
    template: "%s | Energize Events",
  },
  description:
    "Energize Events is a leading event management company in Jeddah, Saudi Arabia. We specialize in conferences, corporate events, exhibitions, product launches, and entertainment events. Creating unforgettable experiences with world-class planning and execution.",
  keywords: [
    "event management",
    "event management company",
    "conferences",
    "workshops",
    "corporate events",
    "Saudi Arabia",
    "Jeddah",
    "event planning",
    "exhibitions",
    "product launches",
    "entertainment events",
    "event design",
    "stage design",
    "event production",
    "Saudi Vision 2030",
  ],
  authors: [{ name: "Energize Events" }],
  creator: "Energize Events",
  publisher: "Energize Events",
  category: "Event Management",
  classification: "Business Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://energize-events.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://energize-events.com",
    siteName: "Energize Events",
    title: "Energize Events - Premier Event Management Company in Saudi Arabia",
    description:
      "Leading event management company in Jeddah, Saudi Arabia. Specializing in conferences, corporate events, exhibitions, and unforgettable experiences.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Energize Events - Event Management Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Energize Events - Premier Event Management Company",
    description:
      "Leading event management company in Jeddah, Saudi Arabia. Creating unforgettable experiences with world-class planning and execution.",
    images: ["/images/og-image.jpg"],
    creator: "@EnergizeBusKSA",
  },
  icons: {
    icon: [
      { url: "/images/EEM.png", sizes: "32x32", type: "image/png" },
      { url: "/images/EEM.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/EEM.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Energize Events",
    url: "https://energize-events.com",
    logo: "https://energize-events.com/images/EEM.png",
    description:
      "Premier event management company in Jeddah, Saudi Arabia specializing in conferences, corporate events, exhibitions, and entertainment events.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Raihanat Al Jazirah",
      addressLocality: "Jeddah",
      addressCountry: "SA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+966-12-682-5858",
      contactType: "Customer Service",
      email: "info@energize-sa.com",
      areaServed: "SA",
      availableLanguage: ["en", "ar"],
    },
    sameAs: [
      "https://www.linkedin.com/company/energize-your-business",
      "https://www.instagram.com/energizebusksa/",
      "https://x.com/EnergizeBusKSA",
      "https://www.facebook.com/EnergizeBusKSA",
      "https://www.youtube.com/@EnergizeBusKSA",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth hide-scrollbar">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased hide-scrollbar`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
