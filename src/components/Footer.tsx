"use client";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-16 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <div
              className="font-serif text-lg text-ink"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              One New Thing
            </div>
            <p className="mt-1 text-[13px] text-secondary">
              A quiet daily challenge journal.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-2 text-[13px]">
              <li>
                <a
                  href="https://apps.apple.com/us/app/one-new-thing/id6770367175"
                  className="text-secondary transition-colors hover:text-ink"
                  rel="nofollow sponsored"
                  target="_blank"
                >
                  App Store
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-secondary transition-colors hover:text-ink"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-secondary transition-colors hover:text-ink"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@onenewthing.app"
                  className="text-secondary transition-colors hover:text-ink"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-center text-[12px] text-secondary">
            &copy; {new Date().getFullYear()} Alex Hurley. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
