import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Pixel Graphix | Where Creativity Meets Technology",
    template: "%s | Pixel Graphix",
  },
  description:
    "Pixel Graphix is a creative technology studio — cinematic video production, motion graphics, and high-performing websites, CRM, and IT solutions under one roof.",
  keywords: [
    "video production company",
    "creative production studio",
    "web design agency",
    "website development services",
    "brand identity design",
    "UI/UX design agency",
    "Meta ads management",
    "CRM development",
    "AI automation solutions",
    "motion graphics studio",
    "creative technology partner",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Footer />
      </body>
    </html>
  );
}
