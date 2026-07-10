import type { Metadata } from "next";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";
import CustomCursor from "@/components/layout/CustomCursor";
import PageTransition from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Saaphzone Technologies for a free consultation on environmental solutions, renewable energy, BESS, and pollution control. Based in India.",
  openGraph: {
    title: "Contact Saaphzone Technologies",
    description:
      "Reach out to our clean-tech experts for solid waste management, air pollution control, BESS, and solar & wind energy projects.",
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
