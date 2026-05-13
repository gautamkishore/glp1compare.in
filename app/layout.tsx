import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";

import { SITE_URL } from "@/lib/glp1-data";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GLP-1 Compare",
    template: "%s | GLP-1 Compare",
  },
  description:
    "Neutral GLP-1 molecule, brand, and cost comparison for India with instant tool-first calculators.",
  applicationName: "GLP-1 Compare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
