"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FinalCta from "@/components/common/FinalCta";

interface WorkCarouselProps {
  title: string;
  description: string;
  children: ReactNode;
}

const SCROLL_AMOUNT = 336; // card width (320) + gap (16)

export default function WorkCarousel({ title, description, children }: WorkCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Track horizontal scroll state
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const update = () => {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    return () => el.removeEventListener("scroll", update);
  }, []);

  // Convert vertical wheel scroll into horizontal card scroll
  useEffect(() => {
    const section = sectionRef.current;
    const el = scrollRef.current;
    if (!section || !el) return;

    const onWheel = (e: WheelEvent) => {
      const atRight = el.scrollLeft >= el.scrollWidth - el.clientWidth - 1;
      const atLeft = el.scrollLeft <= 0;
      const pageScrolled = window.scrollY > 0;

      if (e.deltaY > 0) {
        // Scrolling down — move cards right while there's remaining horizontal content
        if (!atRight) {
          e.preventDefault();
          el.scrollBy({ left: Math.abs(e.deltaY) * 1.5, behavior: "auto" });
        }
        // else: let the page scroll naturally to reveal the footer
      } else if (e.deltaY < 0) {
        // Scrolling up — move cards left only if page is still at top
        if (!pageScrolled && !atLeft) {
          e.preventDefault();
          el.scrollBy({ left: -Math.abs(e.deltaY) * 1.5, behavior: "auto" });
        }
        // else: let the page scroll naturally (back up from footer)
      }
    };

    section.addEventListener("wheel", onWheel, { passive: false });
    return () => section.removeEventListener("wheel", onWheel);
  }, []);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  const mask = [
    canScrollLeft ? "transparent, black 15%" : "black",
    canScrollRight ? "black 85%, transparent" : "black",
  ].join(", ");

  return (
    <div className="bg-black text-white md:overflow-x-hidden">
      {/* Desktop: full-height horizontal carousel. Mobile: normal vertical scroll. */}
      <section
        ref={sectionRef}
        className="flex flex-col pt-24 pb-6 px-2 md:h-screen"
      >
        <div className="max-w-6xl mx-auto w-full flex flex-col gap-8 md:gap-12 md:flex-1 md:min-h-0 px-4 md:px-0">
          {/* Header */}
          <div className="flex items-end justify-between gap-4">
            <div className="flex flex-col gap-3">
              <h1 className="font-figtree font-bold text-4xl md:text-5xl text-white">
                {title}
              </h1>
              <p className="font-figtree font-normal text-white/50 text-base">
                {description}
              </p>
            </div>

            {/* Nav arrows — desktop only */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Cards — horizontal scroll on desktop, vertical stack on mobile */}
          <div
            ref={scrollRef}
            className="flex flex-col gap-6 md:flex-row md:overflow-x-auto pb-4 scrollbar-hide"
            style={{
              maskImage: `linear-gradient(to right, ${mask})`,
              WebkitMaskImage: `linear-gradient(to right, ${mask})`,
            }}
          >
            {children}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="flex justify-center bg-black">
        <FinalCta />
      </div>
    </div>
  );
}
