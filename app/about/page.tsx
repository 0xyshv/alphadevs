import Image from "next/image";
import FinalCta from "@/components/common/FinalCta";

export default function About() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center px-6 py-32 gap-16">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-150 h-125 opacity-60"
        style={{ background: "var(--gradient-about-glow)" }}
      />

      {/* Letter Card */}
      <div className="relative z-10 w-full max-w-xl rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/80 backdrop-blur-sm shadow-2xl">
        {/* Top accent bar */}
        <div className="h-0.5 w-20 ml-7 mt-7 rounded-full bg-linear-to-r from-secondary to-primary" />

        <div className="px-8 pt-6 pb-10 flex flex-col gap-5">
          {/* Heading */}
          <h1 className="font-figtree italic text-3xl text-white/90 tracking-wide">
            Dear Founder,
          </h1>

          {/* Paragraphs */}
          <p className="font-figtree text-sm leading-relaxed text-white/70">
            <strong className="font-semibold text-white/90">
              The internet is being rewritten in real time.
            </strong>{" "}
            AI agents are replacing manual workflows and blockchains are
            becoming the settlement layer for autonomous systems. The builders
            who move now will define the next decade of software.
          </p>

          <p className="font-figtree text-sm leading-relaxed text-white/70">
            <strong className="font-semibold text-white/90">
              We started AlphaDevs because we saw this convergence coming.
            </strong>{" "}
            Dozens of shipped products later. Multi-agent systems that
            dramatically increased team productivity. Web3 applications that
            processed millions in on-chain volume. MVPs live in 14 days. We have
            done this across Ethereum, Sui, NEAR, Bitcoin, and beyond.
          </p>

          <p className="font-figtree text-sm leading-relaxed text-white/70">
            As a team of{" "}
            <strong className="font-semibold text-white/90">
              full-stack engineers, protocol architects, and AI specialists,
            </strong>{" "}
            we don&apos;t treat these as separate disciplines. Agentic payments,
            on-chain automation, and AI-powered SaaS are not three different
            products. They are where software is going, and we build all of it.
          </p>

          <p className="font-figtree text-sm leading-relaxed text-white/70">
            Every founder we have worked with has trusted us with their next
            product.{" "}
            <strong className="font-semibold text-white/90">
              We&apos;d love to work with you next.
            </strong>
          </p>

          {/* Footer row */}
          <div className="flex items-center justify-between pt-8 border-t border-white/10">
            <a
              href="https://x.com/0xmht"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-0.5 group"
            >
              <span className="font-figtree font-bold text-sm text-white/70 group-hover:text-white/90 transition-colors">
                MHT
              </span>
              <span className="font-figtree text-xs text-white/30 group-hover:text-white/50 transition-colors">
                Founder & CEO,
              </span>
              <span className="font-figtree text-xs text-white/30 group-hover:text-white/50 transition-colors">
                AlphaDevs Labs
              </span>
            </a>
            <Image
              src="/alphadevs_logo.svg"
              alt="AlphaDevs"
              width={120}
              height={24}
              className="opacity-50"
            />
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <FinalCta />
    </main>
  );
}
