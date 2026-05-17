"use client";

import { useRef } from "react";
import { useInView } from "./useInView";

const proFeatures = [
  "Cloud sync across devices",
  "Cloud photo backup",
  "Cross-device restore",
  "Deeper insights and stats",
  "Full history (no time limit)",
];

export function Pro() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="px-6 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16">
          <span className="font-mono text-[11px] text-secondary">§ 04</span>
          <h2
            className="mt-2 font-serif text-[40px] font-medium leading-[1.05] tracking-[-1.5px] text-ink sm:text-[44px]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Pro.
          </h2>
          <p
            className="mt-4 max-w-[540px] border-b border-border pb-7 font-serif text-lg italic leading-[1.5] text-secondary"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            The free experience is complete. Pro adds persistence and depth.
          </p>
        </div>

        <div
          className={`overflow-hidden rounded-[18px] border border-border bg-paper transition-all duration-700 ease-out ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="p-8 sm:p-10">
            <div className="flex items-baseline gap-3">
              <span
                className="font-serif text-[42px] font-medium leading-none tracking-[-2px] text-ink sm:text-[48px]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Pro
              </span>
              <span className="text-[13px] text-secondary">Subscription</span>
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <ul className="space-y-3">
                {proFeatures.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] leading-[1.55] text-ink"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-accent px-8 text-base font-semibold text-white transition-all duration-200 hover:scale-[0.97] hover:opacity-90"
              >
                Upgrade to Pro
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
