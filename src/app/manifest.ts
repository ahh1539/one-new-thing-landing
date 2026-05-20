import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "One New Thing, Daily Challenge App",
    short_name: "One New Thing",
    description:
      "A quiet daily challenge app that helps you break routine and discover something new every day.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F5F0",
    theme_color: "#1A1A1F",
    icons: [
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    categories: ["lifestyle", "health", "productivity"],
    lang: "en",
    dir: "ltr",
  };
}
