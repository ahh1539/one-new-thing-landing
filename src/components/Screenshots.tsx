"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useInView } from "./useInView";

interface ScreenshotItem {
  name: string;
  label: string;
  webp: string;
  png: string;
  title: string;
  description: string;
  align: "left" | "right";
}

const screenshots: ScreenshotItem[] = [
  {
    name: "today-light",
    label: "01",
    webp: "/screenshots/01-today-light.webp",
    png: "/screenshots/01-today-light.png",
    title: "Your daily trio",
    description:
      "Each morning, three fresh challenges await. One easy, one medium, one hard. Pick the one that fits your day.",
    align: "left",
  },
  {
    name: "history",
    label: "02",
    webp: "/screenshots/03-history.webp",
    png: "/screenshots/03-history.png",
    title: "Watch the habit build",
    description:
      "A living record of everything you've tried. The contribution grid fills in one square at a time.",
    align: "right",
  },
  {
    name: "stats",
    label: "03",
    webp: "/screenshots/04-stats.webp",
    png: "/screenshots/04-stats.png",
    title: "Quiet numbers",
    description:
      "Current streak. Best streak. Weekly completions. Monthly bars. The story of your year, told in small numbers.",
    align: "left",
  },
  {
    name: "completion-photo",
    label: "04",
    webp: "/screenshots/06-completion-photo.webp",
    png: "/screenshots/06-completion-photo.png",
    title: "Keep the story",
    description:
      "Add a note or snap a photo after marking complete. These are your anchors — small moments that help you remember.",
    align: "right",
  },
];

function Phone({
  screenshot,
  onClick,
}: {
  screenshot: ScreenshotItem;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative block w-full cursor-pointer text-left"
      aria-label={`Open ${screenshot.title} screenshot`}
    >
      <div className="relative overflow-hidden rounded-[32px] bg-paper shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.14)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] dark:group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
        <picture>
          <source srcSet={screenshot.webp} type="image/webp" />
          <img
            src={screenshot.png}
            alt={screenshot.title}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            style={{ aspectRatio: "720 / 1565" }}
          />
        </picture>
      </div>
    </button>
  );
}

function Lightbox({
  screenshot,
  onClose,
}: {
  screenshot: ScreenshotItem;
  onClose: () => void;
}) {
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-2xl"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-paper/90 text-ink shadow-lg transition-transform hover:scale-105 dark:bg-ink/90 dark:text-paper"
        aria-label="Close"
      >
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
          <path
            d="M2 2L14 14M14 2L2 14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="mx-6 max-h-[85vh] w-full max-w-[340px] animate-in fade-in zoom-in-95 duration-300">
        <div
          className="overflow-hidden rounded-[32px] shadow-2xl"
          style={{ aspectRatio: "720 / 1565" }}
        >
          <picture>
            <source srcSet={screenshot.webp} type="image/webp" />
            <img
              src={screenshot.png}
              alt={screenshot.title}
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export function Screenshots() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <section ref={ref} className="px-6 py-28 sm:px-8 md:px-12 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-24 text-center lg:mb-32">
            <span className="font-mono text-[11px] text-secondary">§ 03a</span>
            <h2
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
                      onClick={() => setActiveIndex(i)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <Lightbox
          screenshot={screenshots[activeIndex]}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </>
  );
}
