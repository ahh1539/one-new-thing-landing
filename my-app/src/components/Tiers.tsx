"use client";

import { useRef } from "react";
import { useInView } from "./useInView";

const tiers = [
  {
    name: "Easy",
    color: "#A8B89B",
    textColor: "#6B7A5E",
    desc: "Sage. A small nudge outside your routine.",
    example: "Walk a different way home.",
  },
  {
    name: "Medium",
    color: "#D4A574",
    textColor: "#8B6B3F",
    desc: "Sand. Something that requires intention.",
    example: "Sit somewhere alone with no phone on the table.",
  },
  {
    name: "Hard",
    color: "#C97D5D",
    textColor: "#8A4A2E",
    desc: "Terracotta. The one you keep putting off.",
    example: "Have the conversation you keep rescheduling.",
  },
];

export function Tiers() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="px-6 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16">
          <span className="font-mono text-[11px] text-secondary">§ 02</span>
          <h2
            className="mt-2 font-serif text-[40px] font-medium leading-[1.05] tracking-[-1.5px] text-ink sm:text-[44px]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            The three tiers.
          </h2>
          <p
            className="mt-4 max-w-[540px] border-b border-border pb-7 font-serif text-lg italic leading-[1.5] text-secondary"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Each day you get one of each. You only need to complete one.
          </p>
        </div>

        <div className="flex flex-col gap-0 overflow-hidden rounded-[14px] border border-border">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`flex items-start gap-5 border-b border-border bg-paper px-6 py-6 last:border-b-0 sm:px-8 sm:py-7 md:items-center ${
                isInView
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0"
              } transition-all duration-700 ease-out`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="mt-0.5 h-3 w-3 shrink-0 rounded-[3px] md:mt-0"
                style={{ backgroundColor: tier.color }}
              />
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6">
                <div
                  className="font-serif text-[22px] font-medium"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: tier.textColor,
                  }}
                >
                  {tier.name}
                </div>
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-4">
                  <p className="text-[13px] leading-[1.5] text-secondary">
                    {tier.desc}{" "}
                    <em className="font-serif text-ink" style={{ fontFamily: "var(--font-serif)" }}>
                      {tier.example}
                    </em>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
