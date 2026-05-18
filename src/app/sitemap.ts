import type { MetadataRoute } from "next";
import { company } from "@/constants/company";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: company.siteUrl,
      lastModified: new Date("2026-05-15"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
