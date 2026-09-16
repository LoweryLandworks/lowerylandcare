import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { CITIES } from "@/lib/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = [
    "",
    "/services",
    "/quote",
    "/about",
    "/locations",
    "/find-my-lawn-plan",
    "/privacy",
    "/terms",
  ];
  return [
    ...staticPages.map((path) => ({
      url: `${SITE.domain}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...SERVICES.map((s) => ({
      url: `${SITE.domain}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...CITIES.map((c) => ({
      url: `${SITE.domain}/locations/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
