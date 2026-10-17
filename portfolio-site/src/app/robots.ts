import type { MetadataRoute } from "next";
import { siteSettings } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteSettings.url.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
