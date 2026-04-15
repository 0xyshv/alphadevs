"use client";

import { useState, useEffect, useCallback } from "react";
import { whyUsItems } from "@/constants/whyus";

const total = whyUsItems.length;

export default function WhyUs() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = useCallback(
    (next: number) => {
      if (animating || next === active) return;
      setAnimating(true);
      setActive(next);
      setTimeout(() => setAnimating(false), 400);
    },
    [active, animating]
  );

  const goNext = useCallback(() => go(Math.min(active + 1, total - 1)), [active, go]);
  const goPrev = useCallback(() => go(Math.max(active - 1, 0)), [active, go]);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 30) goNext();
      else if (e.deltaY < -30) goPrev();
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [goNext, goPrev]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") goNext();
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const item = whyUsItems[active];

  return (
    <main className="bg-background text-foreground flex flex-col select-none">
      <div className="max-w-6xl mx-auto w-full px-2 flex flex-col min-h-screen">
      {/* Progress bar */}
      <div className="flex gap-1 pt-28 pb-0">
        {whyUsItems.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className="h-0.75 flex-1 rounded-full transition-all duration-300 cursor-pointer"
            style={{
              background:
                i < active
                  ? "hsl(var(--primary))"
                  : i === active
                  ? "hsl(var(--primary))"
                  : "hsl(var(--primary) / 0.2)",
              opacity: i <= active ? 1 : 0.4,
            }}
          />
        ))}
      </div>

      {/* Index label */}
      <div className="flex items-center justify-between pt-4 pb-0">
        <span className="font-mono text-xs tracking-widest text-primary/70 uppercase">
          _Why AlphaDevs
        </span>
        <span className="font-mono text-xs tracking-widest text-primary/70">
          {String(active + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 mt-6">
        {/* Left — big number + title */}
        <div
          className="w-1/2 border-r border-border/30 flex flex-col justify-end pr-10 pb-16 transition-all duration-400"
          style={{ opacity: animating ? 0 : 1, transform: animating ? "translateY(12px)" : "translateY(0)" }}
        >
          <p className="font-figtree font-bold text-primary/40 text-6xl md:text-8xl leading-none mb-2">
            {item.index}/
          </p>
          <h1 className="font-figtree font-bold text-5xl md:text-7xl leading-none text-white uppercase tracking-tight">
            {item.title}
          </h1>
        </div>

        {/* Right — about + highlights */}
        <div
          className="w-1/2 flex flex-col justify-center pl-10 gap-10 transition-all duration-400"
          style={{ opacity: animating ? 0 : 1, transform: animating ? "translateY(12px)" : "translateY(0)" }}
        >
          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs tracking-[0.2em] text-primary/60 uppercase">
              About
            </p>
            <p className="font-figtree text-base text-white/70 leading-relaxed max-w-md">
              {item.about}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs tracking-[0.2em] text-primary/60 uppercase">
              Key Highlights
            </p>
            <div className="flex flex-wrap gap-2">
              {item.highlights.map((h) => (
                <span
                  key={h}
                  className="font-figtree text-sm text-white/80 border border-border/50 px-3 py-1 rounded-sm hover:border-primary/60 hover:text-white transition-colors"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom nav hint */}
      <div className="flex items-center justify-between pb-8 pt-2">
        <button
          onClick={goPrev}
          disabled={active === 0}
          className="font-mono text-xs tracking-widest text-white/30 hover:text-white/70 disabled:opacity-20 transition-colors uppercase"
        >
          ← Prev
        </button>
        <div className="flex gap-2">
          {whyUsItems.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                background: i === active ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.25)",
                transform: i === active ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
        <button
          onClick={goNext}
          disabled={active === total - 1}
          className="font-mono text-xs tracking-widest text-white/30 hover:text-white/70 disabled:opacity-20 transition-colors uppercase"
        >
          Next →
        </button>
      </div>
      </div>
    </main>
  );
}
