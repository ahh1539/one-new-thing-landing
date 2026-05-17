"use client";

import { useRef } from "react";
import { useInView } from "./useInView";

const steps = [
  {
    num: "01",
    title: "Open the app",
    body: "Each morning, three challenges are ready. One easy, one medium, one hard. No scrolling, no infinite feeds, no decisions to make.",
  },
  {
    num: "02",
    title: "Pick one",
    body: "You only need to complete one. Choose the challenge that fits your day — or the one you've been avoiding.",
  },
  {
    num: "03",
    title: "Do it and mark complete",
    body: "Tap to mark it done. Add a short note or a photo if you want. Then get on with your day. No streaks, no guilt, no noise.",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="px-6 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-16">
          <span className="font-mono text-[11px] text-secondary">§ 01</span>
          <h2
            className="mt-2 font-serif text-[40px] font-medium leading-[1.05] tracking-[-1.5px] text-ink sm:text-[44px]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            How it works.
          </h2>
          <p
            className="mt-4 max-w-[540px] border-b border-border pb-7 font-serif text-lg italic leading-[1.5] text-secondary"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            The core loop is intentionally small. Three challenges. Pick one. Do
            it.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`transition-all duration-700 ease-out ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="mb-4 font-mono text-[11px] text-secondary">
                {step.num}
              </div>
              <h3
                className="font-serif text-[26px] font-medium leading-[1.15] tracking-[-0.5px] text-ink"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-secondary">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
