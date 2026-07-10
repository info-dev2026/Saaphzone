import type { Metadata } from "next";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";
import CustomCursor from "@/components/layout/CustomCursor";
import PageTransition from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Battery Energy Storage System (BESS)",
  description:
    "Grid-scale and commercial BESS solutions — LFP batteries, BMS, grid integration, and 24/7 monitoring. 93%+ efficiency, 6,000+ cycle life. Scalable from 50 kWh to 100+ MWh.",
  openGraph: {
    title: "BESS Solutions | Saaphzone Technologies",
    description:
      "Intelligent battery energy storage systems for peak shaving, renewable integration, industrial backup power, and grid frequency regulation.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full flex flex-col antialiased">
      <CustomCursor />
      <ScrollProgress />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <BackToTop />
    </div>
  );
}
