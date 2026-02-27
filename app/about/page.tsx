import Image from "next/image";
import FinalCta from "@/components/FinalCta";

export default function About() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center px-6 py-32 gap-16">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[600px] h-[500px] opacity-60"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </strong>{" "}
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <p className="font-figtree text-sm leading-relaxed text-white/70">
            <strong className="font-semibold text-white/90">
              Duis aute irure dolor in reprehenderit,
            </strong>{" "}
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p className="font-figtree text-sm leading-relaxed text-white/70">
            As a team of{" "}
            <strong className="font-semibold text-white/90">
              lorem ipsum engineers, designers, and product managers
            </strong>{" "}
            sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </p>

          <p className="font-figtree text-sm leading-relaxed text-white/70">
            <strong className="font-semibold text-white/90">Looking back on 8+ years now,</strong>{" "}
            nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.{" "}
            <strong className="font-semibold text-white/90">
              (lorem, ipsum, dolor, sit amet, consectetur)
            </strong>
            .
          </p>

          <p className="font-figtree text-sm leading-relaxed text-white/70">
            We can&apos;t wait to continue building more,{" "}
            <strong className="font-semibold text-white/90">
              and we&apos;d love to work with you next.
            </strong>
          </p>

          {/* Footer row */}
          <div className="flex items-end justify-between pt-8">
            <span className="font-figtree font-semibold text-md tracking-widest uppercase text-white/30">
              The AlphaDevs Team
            </span>
            <Image
              src="/alphadevs_logo.svg"
              alt="AlphaDevs"
              width={150}
              height={28}
              className="opacity-80"
            />
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <FinalCta />
    </main>
  );
}
