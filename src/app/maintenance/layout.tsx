import type { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
  title: "Under Maintenance | Saaphzone Technologies",
  description:
    "Saaphzone Technologies is currently undergoing scheduled maintenance. We'll be back online shortly with an improved experience.",
  robots: { index: false, follow: false },
};

export default function MaintenanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
