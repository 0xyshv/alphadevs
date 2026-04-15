import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Achievement } from "@/constants/achievements";

export default function AchievementCard({ year, category, title, description, metric, metricLabel }: Achievement) {
  return (
    <Card className="relative transition-colors backdrop-blur-sm rounded-2xl border bg-zinc-900/80 border-white/10 hover:border-primary/50 shadow-2xl overflow-hidden flex flex-col">
      {/* Top accent line */}
      <div className="absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent z-10" />

      {/* Metric hero — mirrors the aspect-video image area */}
      <div className="relative w-full aspect-video flex flex-col items-center justify-center bg-primary/5 border-b border-white/5">
        {metric && (
          <>
            <p className="font-figtree font-bold text-6xl text-primary leading-none">{metric}</p>
            <p className="font-figtree text-xs text-white/40 uppercase tracking-widest mt-2">{metricLabel}</p>
          </>
        )}
      </div>

      <CardContent className="flex flex-col gap-3 pt-6 flex-1">
        <div className="flex flex-col gap-1">
          <h3 className="font-figtree font-bold text-2xl text-white">{title}</h3>
          <p className="font-figtree font-normal text-sm text-white/50">{category}, {year}</p>
        </div>
        <p className="font-figtree font-normal text-base text-white/70 leading-relaxed">{description}</p>
      </CardContent>

      <CardFooter className="pt-0 pb-6">
        <span className="font-mono text-xs tracking-widest text-primary/50 uppercase border border-primary/20 px-3 py-1 rounded-full">
          {category}
        </span>
      </CardFooter>
    </Card>
  );
}
