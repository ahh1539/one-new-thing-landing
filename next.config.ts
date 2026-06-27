import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { site } from "./src/content/site";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "one-new-thing.com" }],
        destination: `${site.url}/:path*`,
        permanent: true,
      },
    ];
  },
  async headers() {
    const immutable = "public, max-age=31536000, immutable";

    return [
      {
        source: "/screenshots/:path*",
        headers: [{ key: "Cache-Control", value: immutable }],
      },
      {
        source: "/fonts/:path*",
        headers: [{ key: "Cache-Control", value: immutable }],
      },
      {
        source: "/apple-touch-icon.png",
        headers: [{ key: "Cache-Control", value: immutable }],
      },
      {
        source: "/favicon.png",
        headers: [{ key: "Cache-Control", value: immutable }],
      },
      {
        source: "/linkedin-thumbnail.png",
        headers: [{ key: "Cache-Control", value: immutable }],
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      ["remark-frontmatter"],
      ["remark-mdx-frontmatter", { name: "frontmatter" }],
    ],
    rehypePlugins: [
      ["rehype-slug"],
      ["rehype-autolink-headings", { behavior: "wrap" }],
    ],
  },
});

export default withMDX(nextConfig);
