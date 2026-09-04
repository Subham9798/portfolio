"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroScrub() {
  const [activeTitleIndex, setActiveTitleIndex] = useState(0);

  const titles = [
    "SOFTWARE ENGINEER",
    "WEB DEVELOPER",
    "AI / ML ENGINEER",
    "NETWORKING ENGINEER",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="relative w-full min-h-screen bg-[#050505] flex items-center justify-between px-6 md:px-20 overflow-hidden pt-20 pb-12">
      {/* Crisp White Studio Light Behind Photo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[580px] bg-white/[0.08] rounded-full blur-[140px] pointer-events-none" />

      {/* Top Runtime Tag */}
      <div className="absolute top-8 left-6 md:left-20 text-xs font-mono text-zinc-500 uppercase tracking-widest">
        // 0.1 ARCHITECTURAL RUNTIME
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-8 z-10">
        
        {/* Left: HI, I'M SUBHAM & Rotating Titles */}
        <div className="md:col-span-4 flex flex-col justify-center order-2 md:order-1 text-center md:text-left">
          <span className="text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-zinc-300 font-mono mb-3">
            HI, I&apos;M SUBHAM
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-tight min-h-[140px] flex items-center">
            {titles[activeTitleIndex]}
          </h1>
        </div>

        {/* Center: Pure Stable Portrait (Zero Flip, Zero Jerk, Studio Cool Color Grading) */}
        <div className="md:col-span-4 flex justify-center items-center order-1 md:order-2 relative">
          <div className="relative w-80 h-[440px] md:w-[380px] md:h-[500px] flex items-end justify-center">
            <div
              className="relative w-full h-full"
              style={{
                maskImage: "radial-gradient(ellipse 72% 70% at 50% 48%, black 54%, transparent 98%)",
                WebkitMaskImage: "radial-gradient(ellipse 72% 70% at 50% 48%, black 54%, transparent 98%)",
              }}
            >
              <Image
                src="/profile.jpg"
                alt="Subham Kumar Singh"
                fill
                unoptimized
                priority
                className="object-cover object-top"
                style={{
                  filter: "brightness(1.08) contrast(1.14) saturate(0.80) hue-rotate(-8deg)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Right: Bio & Actions */}
        <div className="md:col-span-4 flex flex-col items-center md:items-end text-center md:text-right order-3">
          <p className="text-xs font-mono text-zinc-400 max-w-xs leading-relaxed uppercase mb-6 tracking-wide">
            Building scalable software architectures, responsive web platforms, AI/ML models, and resilient network infrastructures.
          </p>
          <div className="flex items-center gap-3 font-mono text-xs">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-full bg-white text-black font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all cursor-pointer shadow-lg shadow-white/10"
            >
              View Work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border border-zinc-700 bg-zinc-900/90 text-zinc-200 font-semibold uppercase tracking-wider hover:border-emerald-500 hover:text-emerald-400 transition-all cursor-pointer"
            >
              Resume ↗
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Left: Timeline Tag */}
      <div className="absolute bottom-6 left-6 md:left-20 flex items-center gap-2 text-xs tracking-widest text-zinc-400 font-mono">
        <span className="text-emerald-400 font-bold">↓</span>
        <span>SCROLL TO SCRUB TIMELINE</span>
      </div>

      {/* Bottom Right: Status Tag */}
      <div className="absolute bottom-6 right-6 md:right-20 hidden md:flex items-center gap-2 text-xs tracking-widest text-zinc-500 uppercase font-mono">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>AVAILABLE FOR ENGAGEMENTS</span>
      </div>
    </section>
  );
}