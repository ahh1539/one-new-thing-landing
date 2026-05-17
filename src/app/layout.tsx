import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "One New Thing — A quiet daily challenge journal",
  description:
    "Three small challenges each morning. One easy, one medium, one hard. Pick one. Do it. Watch your year fill in, one square at a time.",
  keywords: [
    "daily challenge",
    "journal",
    "routine",
    "mindfulness",
    "anti-autopilot",
    "habits",
    "personal growth",
  ],
  authors: [{ name: "Alex Hurley" }],
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "One New Thing — A quiet daily challenge journal",
    description:
      "Three small challenges each morning. One easy, one medium, one hard. Pick one. Do it.",
    type: "website",
    locale: "en_US",
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
      className={`${fraunces.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
