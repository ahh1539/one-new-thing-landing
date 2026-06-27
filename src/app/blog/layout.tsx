import Link from "next/link";
import { Footer } from "@/components/Footer";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="px-6 py-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-serif text-[17px] font-medium text-ink transition-opacity hover:opacity-70"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <span aria-hidden="true">←</span>
            <span>One New Thing</span>
          </Link>
        </div>
      </header>
      {children}
      <Footer />
    </>
  );
}
