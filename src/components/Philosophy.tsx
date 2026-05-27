"use client";

import { useRef } from "react";
import { useInView } from "./useInView";

export function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className="px-6 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28"
      aria-labelledby="philosophy-heading"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
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
              resolutions.
              <a
                href="https://www.bjfogg.com/tiny-habits"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-0.5 align-super text-[10px] text-secondary hover:text-ink"
              >
                [1]
              </a>{" "}
              A micro-habit, something that takes under five minutes and
              requires almost no willpower, bypasses the brain&apos;s resistance to
              change. One New Thing applies this principle by offering a single,
              curated daily challenge that nudges you outside your routine
              without overwhelming your schedule.
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
              When every weekday starts to feel the same, life narrows. Studies
              suggest roughly two-thirds of daily behaviors run on autopilot,
              triggered automatically by habit rather than conscious choice.
              <a
                href="https://www.sciencedaily.com/releases/2026/03/260306112724.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-0.5 align-super text-[10px] text-secondary hover:text-ink"
              >
                [2]
              </a>{" "}
              The antidote is not a productivity system or a rigid morning
              routine. It is intentional novelty. Neuroscience research shows
              that novel experiences boost dopamine, sharpen attention, and slow
              the subjective passage of time.
              <a
                href="https://www.creativegroupinc.com/2025/11/05/the-psychology-and-power-of-novelty-ignites-engagement/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-0.5 align-super text-[10px] text-secondary hover:text-ink"
              >
                [3]
              </a>{" "}
              Daily challenges create small ruptures in repetition: a different
              walking route, a conversation with a stranger, a dish you have
              never tried. These moments restore attention, deepen memory, and
              remind you that your city, your relationships, and your own
              capabilities are larger than you thought.
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
              evaporates. Behavioral economists have found that while streaks
              can motivate through loss aversion, broken streaks often trigger
              guilt and the &quot;what the hell&quot; effect, undermining the very habits
              they aim to build.
              <a
                href="https://www.psychologicalscience.org/news/to-build-a-habit-try-a-streak.html"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-0.5 align-super text-[10px] text-secondary hover:text-ink"
              >
                [4]
              </a>{" "}
              One New Thing takes a different approach. There is no streak
              counter pressuring you to maintain perfection. Complete a
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
              that monotony never sets in. There is always a new angle waiting.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[1px] text-secondary">
            Sources
          </p>
          <ol className="mt-3 space-y-1.5 text-[11px] leading-[1.5] text-secondary">
            <li>
              [1] Fogg, B.J.{" "}
              <em>Tiny Habits: The Small Changes That Change Everything</em>.
              Houghton Mifflin Harcourt, 2020.
            </li>
            <li>
              [2] &quot;Scientists say most of what you do each day happens on
              autopilot.&quot;{" "}
              <em>ScienceDaily</em>, March 2026.
            </li>
            <li>
              [3] &quot;The Psychology and Power of Novelty Ignites Engagement.&quot;{" "}
              <em>Creative Group</em>, Nov 2025.
            </li>
            <li>
              [4] Milkman, K. &quot;To Build a Habit, Try a Streak.&quot;{" "}
              <em>Association for Psychological Science</em>, Jan 2025.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
