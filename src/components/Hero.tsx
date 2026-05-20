"use client";

import { useState, useEffect } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative px-6 pt-20 pb-16 sm:px-8 md:px-12 lg:px-16 lg:pt-28 lg:pb-24">
      <div className="mx-auto max-w-4xl">
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="mb-8">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[3px] text-secondary">
              No. 001, Daily Challenges
            </span>
          </div>

          <h1
            className="font-serif text-[56px] font-medium leading-[0.95] tracking-[-2px] text-ink sm:text-[72px] md:text-[88px] md:tracking-[-3.5px]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            One
            <br />
            New
            <br />
            Thing.
          </h1>

          <div className="mt-8 flex gap-1.5">
            <div className="h-1.5 flex-1 rounded-sm bg-easy" />
            <div className="h-1.5 flex-1 rounded-sm bg-med" />
            <div className="h-1.5 flex-1 rounded-sm bg-hard" />
          </div>

          <p
            className="mt-10 max-w-[520px] font-serif text-xl italic leading-[1.4] text-secondary sm:text-[22px]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            A quiet daily challenge for people whose weeks have started to rhyme.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://apps.apple.com/us/app/one-new-thing/id6770367175"
              rel="nofollow sponsored"
              target="_blank"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-ink px-8 text-base font-semibold text-paper transition-all duration-200 hover:scale-[0.97] hover:opacity-90"
            >
              Get the app
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-border bg-paper px-8 text-base font-medium text-ink transition-all duration-200 hover:bg-paper-alt"
            >
              Learn more
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-12 gap-y-4 border-t border-border pt-6">
            <div>
              <div className="font-sans text-[10px] font-semibold uppercase tracking-[1.4px] text-secondary">
                Platform
              </div>
              <div className="mt-1 font-serif text-[17px] text-ink" style={{ fontFamily: "var(--font-serif)" }}>
                iOS · iPhone
              </div>
            </div>
            <div>
              <div className="font-sans text-[10px] font-semibold uppercase tracking-[1.4px] text-secondary">
                Challenge types
              </div>
              <div className="mt-1 font-serif text-[17px] text-ink" style={{ fontFamily: "var(--font-serif)" }}>
                3 tiers · 10 categories
              </div>
            </div>
            <div>
              <div className="font-sans text-[10px] font-semibold uppercase tracking-[1.4px] text-secondary">
                Daily goal
              </div>
              <div className="mt-1 font-serif text-[17px] text-ink" style={{ fontFamily: "var(--font-serif)" }}>
                Complete 1 of 3
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
