import type { Metadata } from "next";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";
import CustomCursor from "@/components/layout/CustomCursor";
import PageTransition from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Solid Waste Management",
  description:
    "End-to-end solid waste processing systems — MSW, industrial waste, bio-medical waste, waste-to-energy, and composting. CPCB compliant, scalable from 5 TPD to 500+ TPD.",
  openGraph: {
    title: "Solid Waste Management | Saaphzone Technologies",
    description:
      "Advanced solid waste management systems for industries and municipalities — collection, segregation, treatment, and safe disposal.",
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
