import { partners } from "@/constants/home";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="relative py-48 px-6 border-t border-white/10 overflow-hidden">
      {/* Glossy background layers */}
      <div className="absolute inset-0 bg-linear-to-br from-white/6 via-zinc-300/4 to-white/2" />
      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/3 to-zinc-200/5" />
      {/* Soft glare blob — top left */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      {/* Soft glare blob — bottom right */}
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-zinc-300/6 blur-3xl" />
      {/* Fine grain overlay for texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.07),transparent)]" />
      {/* Top edge highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      {/* Bottom edge highlight */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center gap-20">
        <p className="font-figtree font-semibold text-2xl uppercase tracking-widest text-white">
          Teams &amp; projects we&apos;ve worked with
        </p>
        <div className="group w-full overflow-x-hidden py-4 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-marquee group-hover:paused">
            {[0, 1].map((copyIndex) => (
              <div key={copyIndex} className="flex gap-6 pr-6">
                {partners.map((partner, i) => (
                  <div
                    key={i}
                    className="h-20 w-48 shrink-0 rounded-2xl bg-zinc-900/80 border border-white/10 shadow-2xl backdrop-blur-sm flex items-center justify-center gap-3 px-4 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:border-primary hover:shadow-primary/20"
                  >
                    {partner.logo && (
                      <Image
                        width={40}
                        height={40}
                        src={partner.logo}
                        alt={partner.name}
                        className="w-7 h-7 shrink-0 object-contain opacity-70 rounded-lg"
                      />
                    )}
                    <span className="font-figtree font-semibold text-md text-white/70 leading-tight truncate">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
