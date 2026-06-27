import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Tiers } from "@/components/Tiers";
import { Features } from "@/components/Features";
import { Screenshots } from "@/components/Screenshots";
import { Philosophy } from "@/components/Philosophy";
import { FAQ } from "@/components/FAQ";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { Footer } from "@/components/Footer";
import { landingFaqs } from "@/content/faq";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.homeTitle,
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.homeTitle,
    description: site.shortDescription,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.homeTitle,
    description: site.shortDescription,
    creator: site.twitterHandle,
    site: site.twitterHandle,
  },
};

const screenshots = [
  {
    "@type": "ImageObject",
    url: `${site.url}/screenshots/01-today-light.png`,
    caption:
      "Today's daily challenges screen showing easy, medium, and hard challenge cards",
  },
  {
    "@type": "ImageObject",
    url: `${site.url}/screenshots/03-history.png`,
    caption: "History view with contribution grid and completed challenges",
  },
  {
    "@type": "ImageObject",
    url: `${site.url}/screenshots/04-stats.png`,
    caption:
      "Statistics dashboard showing streaks, completions, and category breakdown",
  },
  {
    "@type": "ImageObject",
    url: `${site.url}/screenshots/06-completion-photo.png`,
    caption: "Challenge completion with optional note and photo attachment",
  },
];

const structuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      alternateName: "ONT",
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/apple-touch-icon.png`,
        width: 180,
        height: 180,
      },
      sameAs: [site.twitterUrl],
      description:
        "We build thoughtful apps that help people break routine and discover something new every day.",
      email: site.contactEmail,
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: `${site.url}/`,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${site.url}/#webpage`,
      url: `${site.url}/`,
      name: site.homeTitle,
      description: site.description,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#app` },
      breadcrumb: { "@id": `${site.url}/#breadcrumb` },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${site.url}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${site.url}/`,
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${site.url}/#app`,
      name: site.name,
      operatingSystem: "iOS",
      applicationCategory: "LifestyleApplication",
      description:
        "A quiet daily challenge app that delivers three curated challenges every morning, one easy, one medium, one hard. Designed to help you break routine and discover something new every day.",
      url: site.url,
      screenshot: screenshots,
      featureList: [
        "Three curated daily challenges (easy, medium, hard)",
        "Ten challenge categories: Around Town, Food & Drink, People, Move, Make, Learn, Culture, Home, Self-Care, Offline",
        "Personal challenge history with contribution grid",
        "Quiet statistics: streaks, completions, category breakdown",
        "Optional notes and photos for completions",
        "No streak pressure or guilt-based design",
        "Offline-first with optional cloud sync",
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free with optional Pro subscription",
      },
      author: { "@id": `${site.url}/#organization` },
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: landingFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
}).replace(/</g, "\\u003c");

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: structuredData,
        }}
      />

      <main id="main-content" className="flex flex-col">
        <Hero />
        <div className="mx-auto w-full max-w-4xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="rule" role="separator" />
        </div>
        <HowItWorks />
        <div className="mx-auto w-full max-w-4xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="rule" role="separator" />
        </div>
        <Tiers />
        <div className="mx-auto w-full max-w-4xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="rule" role="separator" />
        </div>
        <Features />
        <div className="mx-auto w-full max-w-4xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="rule" role="separator" />
        </div>
        <Screenshots />
        <div className="mx-auto w-full max-w-4xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="rule" role="separator" />
        </div>
        <Philosophy />
        <div className="mx-auto w-full max-w-4xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="rule" role="separator" />
        </div>
        <FAQ />
        <div className="mx-auto w-full max-w-4xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="rule" role="separator" />
        </div>
        <PrivacyPolicy />
        <Footer />
      </main>
    </>
  );
}
