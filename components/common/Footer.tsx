import Link from "next/link";
import Image from "next/image";
import { FOOTER_TAGLINE } from "@/constants/footer";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/">
              <Image
                src="/alphadevs_logo.svg"
                alt="AlphaDevs Labs"
                width={120}
                height={28}
              />
            </Link>
            <p className="font-figtree font-normal text-sm text-white/40 max-w-xs">
              {FOOTER_TAGLINE}
            </p>
          </div>

          {/* Company / DUL */}
          <div className="flex flex-col gap-2">
            <p className="font-figtree font-semibold text-xs uppercase tracking-widest text-primary mb-1">
              Company
            </p>
            <p className="font-figtree font-semibold text-sm text-white/90">
              AlphaDevs Labs L.L.C-FZ
            </p>
            <p className="font-figtree font-normal text-sm text-white/50 max-w-[220px] leading-relaxed">
              The Meydan Hotel, Grandstand, 6th floor, Meydan Road, Nad Al
              Sheba, Dubai, U.A.E
            </p>
            <div className="flex flex-col gap-0.5 mt-0.5">
              <p className="font-figtree text-xs text-white/50">
                Dubai Unified License
              </p>
              <p className="font-figtree text-xs font-semibold text-white/70 tracking-wide">
                EQ3326
              </p>
              {/* <p className="font-figtree text-xs text-white/35">
                Meydan City Corporation – MCC
              </p> */}
            </div>
            <Link
              href="https://app.invest.dubai.ae/DUL/9C74513C-20B5-418C-8E49-16A6D87BC0B8"
              target="_blank"
              rel="noopener noreferrer"
              className="font-figtree text-xs text-primary hover:text-white transition-colors flex items-center gap-1 mt-1"
            >
              Verify License ↗
            </Link>
          </div>

          {/* Contact & Socials */}
          <div className="flex flex-col gap-3">
            <p className="font-figtree font-semibold text-xs uppercase tracking-widest text-primary mb-1">
              Contact Us
            </p>
            <a
              href="mailto:contact@alphadevs.dev"
              className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors"
            >
              <span className="w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <span className="font-figtree text-sm">
                contact@alphadevs.dev
              </span>
            </a>
            <a
              href="https://x.com/0xAlphaDevs"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <span className="w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                <Image src="/assets/x.svg" alt="X" width={13} height={13} />
              </span>
              <span className="font-figtree text-sm">AlphaDevs Labs</span>
            </a>
            <a
              href="https://t.me/AlphaDevsOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors"
              aria-label="Telegram"
            >
              <span className="w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                <Image
                  src="/assets/tg.svg"
                  alt="Telegram"
                  width={13}
                  height={13}
                />
              </span>
              <span className="font-figtree text-sm">AlphaDevs Official</span>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
          <p className="font-figtree font-light text-xs text-white/25">
            © {new Date().getFullYear()} AlphaDevs Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
