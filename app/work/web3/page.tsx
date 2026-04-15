"use client";

import { useRef, useState, useEffect } from "react";
import ProjectCard from "@/components/work/ProjectCard";
import { web3Projects } from "@/constants/work";

const Web3 = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [fadeLeft, setFadeLeft] = useState(false);
  const [fadeRight, setFadeRight] = useState(true);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const update = () => {
      setFadeLeft(el.scrollLeft > 0);
      setFadeRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    return () => el.removeEventListener("scroll", update);
  }, []);

  const mask = [
    fadeLeft ? "transparent, black 15%" : "black",
    fadeRight ? "black 85%, transparent" : "black",
  ].join(", ");

  return (
    <main className="bg-black text-white min-h-screen py-36 px-2">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-start gap-3 px-4">
          <h1 className="font-figtree font-bold text-4xl md:text-5xl text-white">
            Web3
          </h1>
          <p className="font-figtree font-normal text-white/50 text-base">
            Decentralized applications and protocols we&apos;ve shipped on-chain for the open web.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{
            maskImage: `linear-gradient(to right, ${mask})`,
            WebkitMaskImage: `linear-gradient(to right, ${mask})`,
          }}
        >
          {web3Projects.map((project) => (
            <div key={project.name} className="w-80 shrink-0">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Web3;
