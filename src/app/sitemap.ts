import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.saaphzone.com";

  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/solid-waste", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/air-pollution", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/bess", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/solar-wind", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services/software-development", priority: 0.9, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${base}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
