import type { Metadata } from "next";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";
import CustomCursor from "@/components/layout/CustomCursor";
import PageTransition from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Air Pollution System",
  description:
    "Advanced industrial air pollution control — bag filters, ESP, wet scrubbers, dust collectors, CEMS, and regulatory compliance support. Bringing your emissions below every CPCB limit.",
  openGraph: {
    title: "Air Pollution | Saaphzone Technologies",
    description:
      "Filtration, scrubbing, dust collection, and 24/7 emission monitoring systems that bring industrial emissions below every regulatory limit.",
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
