import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import AboutPreview from "@/components/home/AboutPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Projects from "@/components/home/Projects";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Preview — Saaphzone Technologies",
  description: "Internal preview of the Saaphzone Technologies website.",
  robots: { index: false, follow: false }, // hidden from Google
};

export default function PreviewPage() {
  return (
    <>
      {/* Preview banner */}
      <div
        style={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 9999,
          background: "#1d4ed8",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "100px",
          fontSize: "0.8rem",
          fontWeight: 700,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          boxShadow: "0 4px 16px rgba(29,78,216,0.4)",
          letterSpacing: "0.04em",
        }}
      >
        🔒 PREVIEW MODE
      </div>
      <Hero />
      <Services />
      <AboutPreview />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <CTABanner />
    </>
  );
}
