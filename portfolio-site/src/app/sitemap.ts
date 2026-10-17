import type { MetadataRoute } from "next";
import { siteSettings } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteSettings.url.replace(/\/$/, "");

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
