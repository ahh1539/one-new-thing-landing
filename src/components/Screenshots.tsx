"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView } from "./useInView";

interface ScreenshotItem {
  name: string;
  label: string;
  src: string;
  title: string;
  description: string;
  align: "left" | "right";
}

const screenshots: ScreenshotItem[] = [
  {
    name: "today-light",
    label: "01",
    src: "/screenshots/01-today-light.png",
    title: "Your daily trio",
    description:
      "Each morning, three fresh challenges await. One easy, one medium, one hard. Pick the one that fits your day.",
    align: "left",
  },
  {
    name: "history",
    label: "02",
    src: "/screenshots/03-history.png",
    title: "Watch the habit build",
    description:
      "A living record of everything you've tried. The contribution grid fills in one square at a time.",
    align: "right",
  },
  {
    name: "stats",
    label: "03",
    src: "/screenshots/04-stats.png",
    title: "Quiet numbers",
    description:
      "Current streak. Best streak. Weekly completions. Monthly bars. The story of your year, told in small numbers.",
    align: "left",
  },
  {
    name: "completion-photo",
    label: "04",
    src: "/screenshots/06-completion-photo.png",
    title: "Keep the story",
    description:
      "Add a note or snap a photo after marking complete. These are your anchors, small moments that help you remember.",
    align: "right",
  },
];

function Phone({
  screenshot,
  priority,
}: {
  screenshot: ScreenshotItem;
  priority: boolean;
}) {
  return (
    <div
      className="group relative block w-full text-left"
      aria-label={`${screenshot.title} screenshot`}
    >
      {/* Device Frame */}
      <div className="relative p-[8px] rounded-[38px] bg-[#ddd9d2] shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.14)] dark:bg-[#2a2a35] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] dark:group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
        {/* Inner bezel */}
        <div className="relative rounded-[30px] bg-[#1a1a1f] p-[1px] overflow-hidden">
          {/* Screen */}
          <div className="relative w-full rounded-[29px] overflow-hidden" style={{ aspectRatio: "720 / 1565" }}>
            <Image
              src={screenshot.src}
              alt={`${screenshot.title} screen in the One New Thing daily challenge app`}
              fill
              sizes="(max-width: 1024px) 260px, 280px"
              className="object-cover"
              priority={priority}
              loading={priority ? "eager" : "lazy"}
              decoding={priority ? "sync" : "async"}
            />
          </div>
        </div>

        {/* Side buttons - left */}
        <div className="absolute top-[90px] -left-[2px] w-[2px] h-[24px] rounded-l-sm bg-[#d5d2cd] dark:bg-[#3a3a45] opacity-80" />
        <div className="absolute top-[124px] -left-[2px] w-[2px] h-[48px] rounded-l-sm bg-[#d5d2cd] dark:bg-[#3a3a45] opacity-80" />
        <div className="absolute top-[184px] -left-[2px] w-[2px] h-[48px] rounded-l-sm bg-[#d5d2cd] dark:bg-[#3a3a45] opacity-80" />

        {/* Side button - right */}
        <div className="absolute top-[134px] -right-[2px] w-[2px] h-[72px] rounded-r-sm bg-[#d5d2cd] dark:bg-[#3a3a45] opacity-80" />
      </div>
    </div>
  );
}

export function Screenshots() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className="px-6 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
      aria-labelledby="screenshots-heading"
    >
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-20 text-center lg:mb-28">
          <span className="font-mono text-[11px] text-secondary">§ 03a</span>
          <h2
            id="screenshots-heading"
            className="mt-3 font-serif text-[42px] font-medium leading-[1.05] tracking-[-1.5px] text-ink sm:text-[52px] lg:text-[56px]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Inside the app.
          </h2>
          <p
            className="mx-auto mt-5 max-w-[460px] font-serif text-lg italic leading-[1.5] text-secondary"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Four moments that capture the experience.
          </p>
        </div>

        {/* Alternating rows */}
        <div className="space-y-24 lg:space-y-32">
          {screenshots.map((s, i) => {
            const isLeft = s.align === "left";
            return (
              <div
                key={s.name}
                className={`flex flex-col items-center gap-10 transition-all duration-1000 ease-out lg:flex-row lg:gap-20 ${
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Text */}
                <div
                  className={`order-2 flex-1 ${isLeft ? "lg:order-1" : "lg:order-2"}`}
                >
                  <span className="font-mono text-[11px] text-secondary">
                    {s.label}
                  </span>
                  <h3
                    className="mt-3 font-serif text-[32px] font-medium leading-[1.1] tracking-[-0.8px] text-ink sm:text-[38px] lg:text-[42px]"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-[400px] text-[16px] leading-[1.7] text-secondary">
                    {s.description}
                  </p>
                </div>

                {/* Phone */}
                <div
                  className={`order-1 w-full max-w-[260px] flex-1 ${
                    isLeft ? "lg:order-2" : "lg:order-1"
                  } lg:max-w-[280px]`}
                >
                  <Phone
                    screenshot={s}
                    priority={i === 0}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
