"use client";

import { useRef } from "react";
import { useInView } from "./useInView";

export function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className="px-6 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
      aria-labelledby="philosophy-heading"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-16">
          <span className="font-mono text-[11px] text-secondary">§ 04</span>
          <h2
            id="philosophy-heading"
            className="mt-2 font-serif text-[40px] font-medium leading-[1.05] tracking-[-1.5px] text-ink sm:text-[44px]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Why daily challenges matter.
          </h2>
        </div>

        <div
          className={`grid gap-12 transition-all duration-700 ease-out md:grid-cols-2 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div>
            <h3
              className="font-serif text-[22px] font-medium leading-[1.15] tracking-[-0.3px] text-ink"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              The science of micro-habits
            </h3>
            <p className="mt-4 text-[15px] leading-[1.65] text-secondary">
              Research in behavioral psychology shows that small, daily actions
              compound into lasting change far more reliably than ambitious
              resolutions. A micro-habit — something that takes under five
              minutes and requires almost no willpower — bypasses the brain's
              resistance to change. One New Thing applies this principle by
              offering a single, curated daily challenge that nudges you outside
              your routine without overwhelming your schedule.
            </p>
          </div>

          <div>
            <h3
              className="font-serif text-[22px] font-medium leading-[1.15] tracking-[-0.3px] text-ink"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Breaking the autopilot
            </h3>
            <p className="mt-4 text-[15px] leading-[1.65] text-secondary">
              When every weekday starts to feel the same, life narrows. The
              antidote is not a productivity system or a rigid morning routine —
              it is intentional novelty. Daily challenges create small ruptures
              in repetition: a different walking route, a conversation with a
              stranger, a dish you have never tried. These moments restore
              attention, deepen memory, and remind you that your city, your
              relationships, and your own capabilities are larger than you
              thought.
            </p>
          </div>

          <div>
            <h3
              className="font-serif text-[22px] font-medium leading-[1.15] tracking-[-0.3px] text-ink"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              No streaks, no guilt
            </h3>
            <p className="mt-4 text-[15px] leading-[1.65] text-secondary">
              Traditional habit trackers punish absence. Miss a day and your
              chain breaks; the number resets to zero and the motivation
              evaporates. One New Thing takes a different approach. There is no
              streak counter pressuring you to maintain perfection. Complete a
              challenge when you can, skip when you must. The app records your
              history gently, like a journal rather than a scoreboard, because
              sustainable personal growth is built on compassion, not coercion.
            </p>
          </div>

          <div>
            <h3
              className="font-serif text-[22px] font-medium leading-[1.15] tracking-[-0.3px] text-ink"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Ten categories, endless variety
            </h3>
            <p className="mt-4 text-[15px] leading-[1.65] text-secondary">
              Challenges span ten curated categories designed to touch every
              part of life: Around Town, Food & Drink, People, Move, Make,
              Learn, Culture, Home, Self-Care, and Offline. Whether you want to
              explore hidden corners of your neighborhood, reconnect with
              friends, learn a new skill, or simply rest without your phone, the
              categories adapt to your mood and context. The variety ensures
              that monotony never sets in — there is always a new angle waiting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
