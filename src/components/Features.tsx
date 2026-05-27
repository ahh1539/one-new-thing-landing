"use client";

import { useRef } from "react";
import { useInView } from "./useInView";

const features = [
  {
    title: "Today",
    desc: "Your daily trio. A warm greeting, your current day count, and three editorial challenge cards. Pick one. The 21-day strip below shows your recent momentum.",
  },
  {
    title: "History",
    desc: "A log of everything you've completed, or a year-long contribution graph that fills in one square at a time. Jump to any month. Tap an entry to see your note or photo.",
  },
  {
    title: "Stats",
    desc: "Current streak. Best streak. Weekly completions. Active-day percentage. Monthly bars. Category breakdown. Quiet numbers that tell the story of your year.",
  },
  {
    title: "Notes & Photos",
    desc: "After marking a challenge complete, add a short note or snap a photo. These are your anchors, small moments that help you remember the day.",
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="px-6 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <span className="font-mono text-[11px] text-secondary">§ 03</span>
          <h2
            className="mt-2 font-serif text-[40px] font-medium leading-[1.05] tracking-[-1.5px] text-ink sm:text-[44px]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Features.
          </h2>
          <p
            className="mt-4 max-w-[540px] border-b border-border pb-7 font-serif text-lg italic leading-[1.5] text-secondary"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Everything you need to break routine. Nothing you don&apos;t.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`transition-all duration-700 ease-out ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3
                className="font-serif text-[26px] font-medium leading-[1.15] tracking-[-0.5px] text-ink"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {f.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-secondary">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
