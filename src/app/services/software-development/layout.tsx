import type { Metadata } from "next";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";
import CustomCursor from "@/components/layout/CustomCursor";
import PageTransition from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Software Development",
  description:
    "Custom environmental tracking software, IoT telemetry integration, enterprise compliance reporting dashboards, and ESG portals. Built for industries and smart cities.",
  openGraph: {
    title: "Software Development | Saaphzone Technologies",
    description:
      "Custom software and IoT telemetry solutions for environmental monitoring, ESG compliance, and real-time industrial telemetry.",
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
