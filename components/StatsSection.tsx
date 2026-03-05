"use client";

import CountUp from "@/components/CountUp";
import { stats } from "@/constants/home";

export default function StatsSection() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 w-full py-4">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col items-center gap-1">
          <span className="font-figtree font-extrabold text-3xl md:text-4xl text-white">
            {s.prefix}
            <CountUp from={0} to={s.countTo} duration={2} direction="up" />
            {s.suffix}
          </span>
          <span className="font-figtree font-light text-sm text-white/40">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
