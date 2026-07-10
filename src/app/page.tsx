import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import AboutPreview from "@/components/home/AboutPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Saaphzone Technologies — Clean Air & Energy Solutions",
  description:
    "Saaphzone Technologies provides advanced environmental monitoring, air pollution control, BESS, solar & wind energy, and solid waste management solutions for a greener tomorrow.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <AboutPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  );
}
