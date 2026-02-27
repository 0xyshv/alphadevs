import Link from "next/link";
import Image from "next/image";
import { FOOTER_TAGLINE, LINKS } from "@/constants/footer";



export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/">
              <Image src="/alphadevs_logo.svg" alt="AlphaDevs Labs" width={120} height={28} />
            </Link>
            <p className="font-figtree font-normal text-sm text-white/40 max-w-xs">
              {FOOTER_TAGLINE}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <p className="font-figtree font-semibold text-xs uppercase tracking-widest text-primary mb-1">Navigation</p>
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="font-figtree font-normal text-sm text-white/50 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Contact & Socials */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-figtree font-semibold text-xs uppercase tracking-widest text-primary mb-2">Contact</p>
              <p className="font-figtree font-normal text-sm text-white/50">0xalphadevs@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/0xAlphaDevs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-white/40 hover:text-white hover:bg-transparent transition-colors"
                aria-label="X (Twitter)"
              >
                <Image src="/assets/x.svg" alt="X (Twitter)" width={20} height={20} className="rounded-md" />
              </a>
              <a
                href="https://t.me/AlphaDevsOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-transparent transition-colors"
                aria-label="Telegram"
              >
                <Image src="/assets/tg.svg" alt="Telegram" width={20} height={20} className="rounded-md" />
              </a>
            </div>
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
