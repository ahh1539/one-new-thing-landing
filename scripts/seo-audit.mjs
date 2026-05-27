import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const checks = [];

function pass(message) {
  checks.push({ ok: true, message });
}

function fail(message) {
  checks.push({ ok: false, message });
}

function check(condition, passMessage, failMessage) {
  if (condition) {
    pass(passMessage);
  } else {
    fail(failMessage);
  }
}

function read(path) {
  return readFileSync(join(root, path), "utf8");
}

function decodeHtml(value) {
  return value
    .replace(/&quot;/g, "\"")
    .replace(/&#x27;/g, "'")
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function textContent(html) {
  return decodeHtml(html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " "));
}

function findFiles(dir, ext, out = []) {
  if (!existsSync(dir)) return out;

  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);

    if (stat.isDirectory()) {
      findFiles(path, ext, out);
    } else if (path.endsWith(ext)) {
      out.push(path);
    }
  }

  return out;
}

const indexPath = ".next/server/app/index.html";
if (!existsSync(join(root, indexPath))) {
  fail("Run `npm run build` before `npm run seo:audit`; .next/server/app/index.html is missing.");
} else {
  const html = read(indexPath);
  const pageText = textContent(html);
  const title = decodeHtml(html.match(/<title>(.*?)<\/title>/)?.[1] ?? "");
  const description = decodeHtml(
    html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "",
  );
  const canonical = decodeHtml(
    html.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? "",
  );
  const jsonLdRaw = html.match(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
  )?.[1];

  check(
    title.length > 0 && title.length <= 60,
    `Title length is ${title.length} characters.`,
    `Title should be 1-60 characters; got ${title.length}.`,
  );

  check(
    description.length >= 140 && description.length <= 160,
    `Meta description length is ${description.length} characters.`,
    `Meta description should be 140-160 characters; got ${description.length}.`,
  );

  check(
    canonical === "https://www.one-new-thing.com",
    "Canonical URL points at the preferred host.",
    `Canonical URL is ${canonical || "missing"}.`,
  );

  check(
    (html.match(/<h1\b/g) ?? []).length === 1,
    "Exactly one H1 is present in prerendered HTML.",
    "Expected exactly one H1 in prerendered HTML.",
  );

  check(
    !html.includes("opacity-0") && !html.includes("max-h-0"),
    "Prerendered content is not hidden behind initial opacity/collapse classes.",
    "Prerendered content contains hidden SEO text classes (`opacity-0` or `max-h-0`).",
  );

  check(
    !html.includes("YOUR_GOOGLE_VERIFICATION_CODE"),
    "No placeholder Google verification token is emitted.",
    "Placeholder Google verification token is still present.",
  );

  if (!jsonLdRaw) {
    fail("JSON-LD script is missing.");
  } else {
    const jsonLd = JSON.parse(jsonLdRaw);
    const graph = Array.isArray(jsonLd["@graph"]) ? jsonLd["@graph"] : [];
    const requiredTypes = [
      "Organization",
      "WebSite",
      "WebPage",
      "BreadcrumbList",
      "SoftwareApplication",
      "FAQPage",
    ];

    for (const type of requiredTypes) {
      check(
        graph.some((node) => node["@type"] === type),
        `JSON-LD includes ${type}.`,
        `JSON-LD is missing ${type}.`,
      );
    }

    check(
      !graph.some((node) => node["@type"] === "SearchAction" || node.potentialAction),
      "JSON-LD does not advertise unsupported search behavior.",
      "JSON-LD includes a search action, but the landing page has no visible search UI.",
    );

    const faqPage = graph.find((node) => node["@type"] === "FAQPage");
    const faqs = Array.isArray(faqPage?.mainEntity) ? faqPage.mainEntity : [];

    if (faqs.length === 0) {
      fail("FAQPage schema has no questions.");
    } else {
      for (const faq of faqs) {
        const question = faq.name ?? "";
        const answer = faq.acceptedAnswer?.text ?? "";

        check(
          pageText.includes(question) && pageText.includes(answer),
          `FAQ schema is mirrored visibly: ${question}`,
          `FAQ schema is not mirrored visibly: ${question}`,
        );
      }
    }
  }
}

const robotsPath = ".next/server/app/robots.txt.body";
if (existsSync(join(root, robotsPath))) {
  const robots = read(robotsPath);
  check(
    robots.includes("Sitemap: https://www.one-new-thing.com/sitemap.xml"),
    "robots.txt points to the sitemap.",
    "robots.txt does not point to the canonical sitemap.",
  );
  check(
    !/Disallow:\s*\/_next\//.test(robots),
    "robots.txt does not block /_next/ assets.",
    "robots.txt blocks /_next/ assets.",
  );
} else {
  fail("robots.txt build artifact is missing.");
}

const sitemapPath = ".next/server/app/sitemap.xml.body";
if (existsSync(join(root, sitemapPath))) {
  const sitemap = read(sitemapPath);
  check(
    sitemap.includes("<loc>https://www.one-new-thing.com</loc>"),
    "sitemap.xml includes the canonical homepage.",
    "sitemap.xml is missing the canonical homepage.",
  );
  check(
    /<lastmod>2026-05-27T00:00:00\.000Z<\/lastmod>/.test(sitemap),
    "sitemap.xml uses a stable real lastmod date.",
    "sitemap.xml lastmod is missing or unstable.",
  );
} else {
  fail("sitemap.xml build artifact is missing.");
}

const notFoundPath = ".next/server/app/_not-found.html";
if (existsSync(join(root, notFoundPath))) {
  check(
    read(notFoundPath).includes('name="robots" content="noindex"'),
    "404 page emits noindex.",
    "404 page is missing noindex.",
  );
} else {
  fail("404 build artifact is missing.");
}

const nextConfig = read("next.config.ts");
check(
  nextConfig.includes('value: "one-new-thing.com"') &&
    nextConfig.includes("destination: `${site.url}/:path*`"),
  "Alternate apex host redirects to the canonical www host.",
  "Canonical host redirect is missing.",
);

check(
  nextConfig.includes("/screenshots/:path*") &&
    nextConfig.includes("public, max-age=31536000, immutable"),
  "Public visual assets have immutable cache headers.",
  "Immutable cache headers for public visual assets are missing.",
);

const mdxFiles = findFiles(join(root, "src"), ".mdx");
check(
  mdxFiles.length === 0,
  "No MDX/blog content is present, so §7 content-engine checks are not applicable yet.",
  "MDX content exists; add strict slug, seoTitle, description, FAQ, and citation validation.",
);

const failures = checks.filter((check) => !check.ok);
for (const check of checks) {
  console.log(`${check.ok ? "ok" : "fail"} - ${check.message}`);
}

if (failures.length > 0) {
  process.exitCode = 1;
}
