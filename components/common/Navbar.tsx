"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { workItems } from "@/constants/navbar";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Blur background layer — masked to fade downward */}
      <div
        className="absolute inset-0 backdrop-blur-md"
        style={{
          background: "linear-gradient(to bottom, rgba(7,15,43,0.6) 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-4 h-16 mt-4 md:mt-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/alphadevs_logo.svg"
            alt="AlphaDevs Labs"
            width={140}
            height={100}
            priority
          />
        </Link>

        {/* Desktop Nav links */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="hover:bg-transparent focus:bg-transparent">
                <Link
                  href="/about"
                  className="font-figtree px-4 text-lg font-medium text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
                >
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-figtree bg-transparent text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:bg-transparent focus:bg-transparent data-active:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent px-4 py-2 text-lg font-medium transition-all">
                Work
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-52 p-2">
                  {workItems.map((item) => (
                    <li key={item.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="font-figtree font-normal block px-3 text-sm text-foreground/80 hover:text-foreground border border-transparent hover:border-secondary hover:bg-transparent rounded-md transition-all"
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className="hover:bg-transparent focus:bg-transparent">
                <Link
                  href="/why-us"
                  className="font-figtree px-4 text-lg font-medium text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
                >
                  Why Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <Button asChild size="lg" className="hidden md:flex font-figtree font-semibold gap-2 bg-transparent text-white border border-primary transition-all duration-300 hover:bg-primary/25 hover:backdrop-blur-sm hover:shadow-[0_0_12px_2px_hsl(var(--primary)/0.25)]">
          <a href="https://t.me/AlphaDevsOfficial" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/tg.svg" alt="Telegram" width={20} height={20} className="rounded-md" />
            Talk to Us
          </a>
        </Button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-background/98 backdrop-blur-xl flex flex-col px-6 pb-10">
          {/* Overlay header row with logo + close button */}
          <div className="flex items-center justify-between h-16 mt-4 shrink-0">
            <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center">
              <Image src="/alphadevs_logo.svg" alt="AlphaDevs Labs" width={140} height={100} priority />
            </Link>
            <button
              className="text-white/70 hover:text-white transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] p-1"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-1 flex-1 mt-6">
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="font-figtree text-2xl font-medium text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] py-3 border-b border-border/20 transition-all"
            >
              About
            </Link>

            {/* Work accordion */}
            <div className="border-b border-border/20">
              <button
                className="w-full flex items-center justify-between font-figtree text-2xl font-medium text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] py-3 transition-all"
                onClick={() => setWorkOpen(!workOpen)}
              >
                Work
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-200 ${workOpen ? "rotate-180" : ""}`}
                />
              </button>
              {workOpen && (
                <div className="flex flex-col gap-1 pb-3 pl-4">
                  {workItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-figtree text-base text-white/50 hover:text-white border border-transparent hover:border-secondary py-2 px-2 rounded-md transition-all"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/why-us"
              onClick={() => setMenuOpen(false)}
              className="font-figtree text-2xl font-medium text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] py-3 border-b border-border/20 transition-all"
            >
              Why Us
            </Link>
          </nav>

          {/* Mobile CTA */}
          <a
            href="https://t.me/AlphaDevsOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 px-6 border border-primary rounded-md font-figtree font-semibold text-white transition-all duration-300 hover:bg-primary/25 hover:shadow-[0_0_12px_2px_hsl(var(--primary)/0.25)]"
          >
            <Image src="/assets/tg.svg" alt="Telegram" width={20} height={20} className="rounded-md" />
            Talk to Us
          </a>
        </div>
      )}
    </header>
  );
}
