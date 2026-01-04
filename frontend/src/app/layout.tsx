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
  metadataBase: new URL('https://energize-events.com'),
  title: {
    default: "Energize Events - Event Management Company",
    template: "%s | Energize Events"
  },
  description:
    "Professional event management services - conferences, workshops, and unforgettable experiences",
  keywords: ["event management", "conferences", "workshops", "corporate events", "Saudi Arabia", "Jeddah"],
  authors: [{ name: "Energize Events" }],
  creator: "Energize Events",
  publisher: "Energize Events",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://energize-events.com",
    siteName: "Energize Events",
    title: "Energize Events - Event Management Company",
    description: "Professional event management services - conferences, workshops, and unforgettable experiences",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Energize Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Energize Events - Event Management Company",
    description: "Professional event management services - conferences, workshops, and unforgettable experiences",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
  return (
    <html lang="en" className="scroll-smooth hide-scrollbar">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased hide-scrollbar`}
      >
        {children}
      </body>
    </html>
  );
}
