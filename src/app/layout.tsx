import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Saaphzone Technologies — Clean Air & Energy Solutions",
    template: "%s | Saaphzone Technologies",
  },
  description:
    "Saaphzone Technologies delivers advanced environmental solutions — from air pollution control and solid waste management to BESS and renewable energy, engineered for India's industrial scale.",
  keywords: [
    "Saaphzone Technologies",
    "pollution control",
    "air pollution monitoring",
    "SPM dust analyzer",
    "solid waste management",
    "BESS battery energy storage",
    "solar wind energy",
    "clean tech India",
    "environmental solutions",
  ],
  openGraph: {
    title: "Saaphzone Technologies — Clean Air & Energy Solutions",
    description:
      "Advanced environmental monitoring, air pollution control, BESS, solar & wind energy, and solid waste management solutions for a greener tomorrow.",
    type: "website",
    locale: "en_IN",
    siteName: "Saaphzone Technologies",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
