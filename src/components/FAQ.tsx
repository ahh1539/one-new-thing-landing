"use client";

import { useState, useRef } from "react";
import { useInView } from "./useInView";

const faqs = [
  {
    q: "Is this another habit tracker?",
    a: "No. One New Thing is not a habit tracker. There are no streaks to break, no chains to maintain, and no guilt when you miss a day. You get three fresh challenges every morning. Complete one, or none. The app doesn't judge.",
  },
  {
    q: "What kinds of challenges will I get?",
    a: "Challenges span ten categories: Around Town, Food & Drink, People, Move, Make, Learn, Culture, Home, Self-Care, and Offline. They're concrete, observable actions — not inner-work prompts or therapy exercises. Think 'Walk a different way home,' not 'Practice gratitude.'",
  },
  {
    q: "Do I need an account?",
    a: "You can preview the app and see today's challenges without an account. To save your history, photos, and notes, you'll need to create a free account. Pro subscribers get cloud sync across devices.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Your data is stored locally by default. If you enable cloud sync, your data is encrypted in transit and at rest. We don't sell your data, show ads, or use third-party analytics. See our full privacy policy below.",
  },
  {
    q: "Can I share my completions?",
    a: "Yes. After completing a challenge, you can generate a share card — a clean, designed image with your challenge and note — and save it to your camera roll. Sharing is always opt-in and one-way.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="px-6 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16">
          <span className="font-mono text-[11px] text-secondary">§ 05</span>
          <h2
            className="mt-2 font-serif text-[40px] font-medium leading-[1.05] tracking-[-1.5px] text-ink sm:text-[44px]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Questions.
          </h2>
        </div>

        <div className="flex flex-col gap-0">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border-b border-border transition-all duration-700 ease-out ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-start justify-between py-6 text-left"
              >
                <span
                  className="pr-4 font-serif text-[20px] font-medium leading-[1.2] tracking-[-0.3px] text-ink sm:text-[22px]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {faq.q}
                </span>
                <span
                  className={`mt-1 shrink-0 text-secondary transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1V15M1 8H15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  open === i ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="max-w-[640px] text-[15px] leading-[1.65] text-secondary">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
