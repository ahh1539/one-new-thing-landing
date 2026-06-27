import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import matter from "gray-matter";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Ideas, comparisons, and science behind One New Thing. Read about daily challenges, routine fatigue, and small ways to break the blur.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | One New Thing",
    description:
      "Ideas, comparisons, and science behind One New Thing. Read about daily challenges, routine fatigue, and small ways to break the blur.",
    url: `${site.url}/blog`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | One New Thing",
    description:
      "Ideas, comparisons, and science behind One New Thing. Read about daily challenges, routine fatigue, and small ways to break the blur.",
    creator: site.twitterHandle,
    site: site.twitterHandle,
  },
};

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

function getPosts(): Post[] {
  const blogDir = join(process.cwd(), "src", "app", "blog");
  const entries = readdirSync(blogDir, { withFileTypes: true });
  const posts: Post[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name === "page.tsx") continue;

    const pagePath = join(blogDir, entry.name, "page.mdx");
    try {
      const source = readFileSync(pagePath, "utf8");
      const { data } = matter(source);

      posts.push({
        slug: entry.name,
        title: String(data.title ?? ""),
        description: String(data.description ?? ""),
        date: String(data.date ?? ""),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      });
    } catch {
      // Skip directories without a page.mdx
    }
  }

  return posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export default function BlogIndex() {
  const posts = getPosts();

  return (
    <main className="px-6 pb-24 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-16">
          <span className="font-mono text-[11px] font-medium uppercase tracking-[2px] text-secondary">
            Journal
          </span>
          <h1
            className="mt-4 font-serif text-[40px] font-medium leading-[1.05] tracking-[-1.5px] text-ink sm:text-[52px] md:text-[60px]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Blog.
          </h1>
          <p className="mt-4 max-w-xl text-[17px] leading-[1.65] text-secondary">
            Ideas, comparisons, and science behind One New Thing. Short reads for
            anyone whose weeks have started to rhyme.
          </p>
        </header>

        <div className="flex flex-col gap-10">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group border-b border-border pb-10"
            >
              <a
                href={`/blog/${post.slug}`}
                className="block transition-opacity hover:opacity-70"
              >
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] font-medium uppercase tracking-[1px] text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2
                  className="mt-3 font-serif text-[26px] font-medium leading-[1.15] tracking-[-0.5px] text-ink sm:text-[30px]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {post.title}
                </h2>
                <p className="mt-3 text-[15px] leading-[1.65] text-secondary">
                  {post.description}
                </p>
                <p className="mt-4 text-[13px] text-secondary">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </p>
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
