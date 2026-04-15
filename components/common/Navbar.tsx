"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Send } from "lucide-react";
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
      <div className="relative max-w-6xl mx-auto px-2 h-16 mt-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
        >
          <Image
            src="/alphadevs_logo.svg"
            alt="AlphaDevs Labs"
            width={160}
            height={100}
            priority
          />
        </Link>

        {/* Nav links */}
        <NavigationMenu>
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
                <ul className="w-52 p-2 bg-black">
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
                  href="/company"
                  className="font-figtree px-4  text-lg font-medium text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"
                >
                  Why Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA */}
        <Button asChild size="lg" className="font-figtree font-semibold gap-2 bg-transparent text-white font-lg border border-primary transition-all duration-300 hover:bg-primary/25 hover:backdrop-blur-sm hover:shadow-[0_0_12px_2px_hsl(var(--primary)/0.25)]">
          <a href="https://t.me/AlphaDevsOfficial" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/tg.svg" alt="Telegram" width={20} height={20} className="rounded-md" />
            Talk to Us
          </a>
        </Button>
      </div>
    </header>
  );
}
