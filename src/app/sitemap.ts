import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.one-new-thing.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${baseUrl}/opengraph-image`,
        `${baseUrl}/screenshots/01-today-light.png`,
        `${baseUrl}/screenshots/03-history.png`,
        `${baseUrl}/screenshots/04-stats.png`,
        `${baseUrl}/screenshots/06-completion-photo.png`,
      ],
    },
  ];
}
