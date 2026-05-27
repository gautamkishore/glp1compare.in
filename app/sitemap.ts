import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/glp1-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: "2026-05-27",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
