import type { Metadata, Viewport } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F5F0" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1A1F" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://onenewthing.app"),
  title: {
    default: "One New Thing — Daily Challenge App for iOS",
    template: "%s | One New Thing",
  },
  description:
    "A quiet daily challenge app that helps you break routine and discover something new every day. Three fresh challenges each morning — one easy, one medium, one hard. No streaks, no guilt, no noise. Built for iPhone.",
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
  authors: [{ name: "Alex Hurley", url: "https://onenewthing.app" }],
  creator: "Alex Hurley",
  publisher: "Alex Hurley",
  applicationName: "One New Thing",
  category: "LifestyleApplication",
  classification: "Lifestyle",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://onenewthing.app",
    siteName: "One New Thing",
    title: "One New Thing — Daily Challenge App for iOS",
    description:
      "A quiet daily challenge app that helps you break routine and discover something new every day. Three fresh challenges each morning.",
  },
  twitter: {
    card: "summary_large_image",
    title: "One New Thing — Daily Challenge App for iOS",
    description:
      "A quiet daily challenge app that helps you break routine and discover something new every day.",
    creator: "@onenewthing",
    site: "@onenewthing",
  },
  appleWebApp: {
    capable: true,
    title: "One New Thing",
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  other: {
    "apple-itunes-app": "app-id=YOUR_APP_STORE_ID, app-argument=https://onenewthing.app",
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
