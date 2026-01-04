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
  title: "Energize Events - Event Management Company",
  description:
    "Professional event management services - conferences, workshops, and unforgettable experiences",
  keywords: "event management, conferences, workshops, corporate events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth hide-scrollbar">
      <body className={`${inter.variable} ${playfair.variable} antialiased hide-scrollbar`}>
        {children}
      </body>
    </html>
  );
}
