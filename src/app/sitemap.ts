import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(site.lastModified),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${site.url}/opengraph-image`,
        `${site.url}/screenshots/01-today-light.png`,
        `${site.url}/screenshots/03-history.png`,
        `${site.url}/screenshots/04-stats.png`,
        `${site.url}/screenshots/06-completion-photo.png`,
      ],
    },
  ];
}
