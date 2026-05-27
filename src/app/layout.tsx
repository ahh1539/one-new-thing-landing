import type { Metadata, Viewport } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/content/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: true,
});

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F5F0" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1A1F" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.defaultTitle,
    template: "%s | One New Thing",
  },
  description: site.description,
  keywords: [
    "daily challenge app",
    "micro habit app",
    "routine breaker app",
    "daily discovery app",
    "lifestyle app iOS",
    "personal growth app",
    "anti-autopilot",
    "mindfulness app",
    "habit journal",
    "self improvement app",
    "things to do everyday",
    "break daily routine",
    "gentle habit tracker",
    "iPhone lifestyle app",
    "curated daily challenges",
  ],
  authors: [{ name: "Alex Hurley", url: site.url }],
  creator: "Alex Hurley",
  publisher: "Alex Hurley",
  applicationName: "One New Thing",
  category: "LifestyleApplication",
  classification: "Lifestyle",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: site.defaultTitle,
    description: site.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: site.defaultTitle,
    description: site.shortDescription,
    creator: site.twitterHandle,
    site: site.twitterHandle,
  },
  appleWebApp: {
    capable: true,
    title: "One New Thing",
    statusBarStyle: "default",
  },
  manifest: "/manifest.webmanifest",
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
  other: {
    "apple-itunes-app": `app-id=6770367175, app-argument=${site.url}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${fraunces.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
