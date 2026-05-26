import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import FinalCta from "@/components/common/FinalCta";
import Partners from "@/components/home/Partners";
import StatsSection from "@/components/home/StatsSection";
import PricingSection from "@/components/home/PricingSection";
import LightRays from "@/components/LightRays";
import Orb from "@/components/Orb";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/*  Hero  */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        {/* Orb background */}
        <div className="absolute inset-0 pt-6">
          <Orb
            hoverIntensity={2}
            rotateOnHover
            hue={0}
            forceHoverState={false}
            backgroundColor="#070F2B"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8">
          {/* Trust badges */}
          <div className="flex items-center gap-2">
            <a
              href="https://www.dnb.com/en-us/smb/duns.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10 transition-colors"
            >
              <span className="font-figtree font-medium text-xs text-white/60 tracking-wide">
                D-U-N-S
                <sup className="text-[12px] font-bold text-white/40">
                  ®
                </sup>{" "}
                Verified Company
              </span>
            </a>
          </div>
          {/* Eyebrow badge */}
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-figtree font-medium text-xs tracking-wide">
              Now taking new projects
            </span>
          </div> */}

          {/* Heading — bold, display size */}
          <h1 className="font-figtree font-bold text-5xl md:text-7xl leading-tight tracking-tight">
            We ship digital products{" "}
            <span className="text-primary">at startup speed</span>
          </h1>

          {/* Stats */}
          <StatsSection />

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button
              asChild
              size="lg"
              className="font-figtree font-semibold gap-2 bg-primary text-primary-foreground px-8"
            >
              <a
                href="https://calendly.com/0xalphadevs/schedule-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="font-figtree"
              >
                <Calendar className="w-4 h-4" />
                Book a Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/*  Partner logos*/}
      <Partners />

      {/*  Pricing  */}
      <PricingSection />

      <FinalCta />
    </main>
  );
}
