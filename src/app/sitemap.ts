import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = [
    {
      slug: "one-new-thing-vs-habit-trackers",
      lastModified: "2026-06-27",
    },
    {
      slug: "why-small-novelty-matters",
      lastModified: "2026-06-27",
    },
  ];

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
    {
      url: `${site.url}/blog`,
      lastModified: new Date("2026-06-27"),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(post.lastModified),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
