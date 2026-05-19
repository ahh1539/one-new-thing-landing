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

export const metadata: Metadata = {
  title: "Daily Challenge App for iOS — Break Your Routine",
  description:
    "Download One New Thing, the daily challenge app for iPhone. Three curated challenges every morning — easy, medium, hard. Break routine, build micro-habits, and discover something new every day. No streaks, no guilt.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Daily Challenge App for iOS — Break Your Routine",
    description:
      "Three curated challenges every morning. Break routine, build micro-habits, and discover something new every day.",
    url: "https://onenewthing.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Challenge App for iOS — Break Your Routine",
    description:
      "Three curated challenges every morning. Break routine, build micro-habits, and discover something new every day.",
  },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "One New Thing",
  operatingSystem: "iOS",
  applicationCategory: "LifestyleApplication",
  description:
    "A quiet daily challenge app that delivers three curated challenges every morning — one easy, one medium, one hard. Designed to help you break routine and discover something new every day.",
  url: "https://onenewthing.app",
  screenshot: [
    {
      "@type": "ImageObject",
      url: "https://onenewthing.app/screenshots/01-today-light.png",
      caption: "Today's daily challenges screen showing easy, medium, and hard challenge cards",
    },
    {
      "@type": "ImageObject",
      url: "https://onenewthing.app/screenshots/03-history.png",
      caption: "History view with contribution grid and completed challenges",
    },
    {
      "@type": "ImageObject",
      url: "https://onenewthing.app/screenshots/04-stats.png",
      caption: "Statistics dashboard showing streaks, completions, and category breakdown",
    },
    {
      "@type": "ImageObject",
      url: "https://onenewthing.app/screenshots/06-completion-photo.png",
      caption: "Challenge completion with optional note and photo attachment",
    },
  ],
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
  author: {
    "@type": "Organization",
    name: "One New Thing",
    url: "https://onenewthing.app",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "One New Thing",
  alternateName: "ONT",
  url: "https://onenewthing.app",
  logo: {
    "@type": "ImageObject",
    url: "https://onenewthing.app/apple-touch-icon.png",
    width: 180,
    height: 180,
  },
  sameAs: [
    "https://twitter.com/onenewthing",
  ],
  description:
    "We build thoughtful apps that help people break routine and discover something new every day.",
  email: "hello@onenewthing.app",
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "One New Thing",
  url: "https://onenewthing.app",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://onenewthing.app/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is One New Thing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One New Thing is a daily challenge app for iPhone designed to help you break routine and discover something new every day. Each morning, the app delivers three curated challenges — one easy, one medium, one hard.",
      },
    },
    {
      "@type": "Question",
      name: "Is One New Thing a habit tracker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. One New Thing is not a habit tracker. There are no streaks to break, no chains to maintain, and no guilt when you miss a day. You get three fresh challenges every morning. Complete one, or none.",
      },
    },
    {
      "@type": "Question",
      name: "What kinds of challenges will I get?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Challenges span ten categories: Around Town, Food & Drink, People, Move, Make, Learn, Culture, Home, Self-Care, and Offline. They're concrete, observable actions — not inner-work prompts or therapy exercises.",
      },
    },
    {
      "@type": "Question",
      name: "Is the One New Thing app free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One New Thing is free to download and use. The core experience — three daily challenges, history, stats, and notes — is completely free. Pro subscribers unlock cloud sync across devices and additional features.",
      },
    },
    {
      "@type": "Question",
      name: "Does One New Thing work offline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All core features work offline. Your challenges, completions, notes, and photos are stored locally on your device. Cloud sync only happens when you choose to enable it.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            softwareApplicationSchema,
            organizationSchema,
            webSiteSchema,
            faqPageSchema,
          ]),
        }}
      />

      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:bg-ink focus:px-6 focus:py-3 focus:text-paper focus:outline-none"
      >
        Skip to main content
      </a>

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
