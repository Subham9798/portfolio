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
    <section className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center px-6 md:px-12 lg:px-16 overflow-hidden pt-20 pb-12">
      {/* Crisp White Studio Light Behind Photo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[580px] bg-white/[0.08] rounded-full blur-[140px] pointer-events-none" />

      {/* Top Runtime Tag */}
      <div className="absolute top-8 left-6 md:left-12 lg:left-16 text-xs font-mono text-zinc-500 uppercase tracking-widest">
        // 0.1 ARCHITECTURAL RUNTIME
      </div>

      {/* Symmetrical Balanced Grid */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-6 lg:gap-8 z-10">
        
        {/* Left: HI, I'M SUBHAM & Large Punchy Rotating Titles */}
        <div className="md:col-span-4 flex flex-col justify-center order-2 md:order-1 text-center md:text-left">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400 font-mono mb-2">
            HI, I&apos;M SUBHAM
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-black uppercase text-white tracking-tighter leading-[0.98] min-h-[140px] flex items-center justify-center md:justify-start">
            {titles[activeTitleIndex]}
          </h1>
        </div>

        {/* Center: Profile Card Exact Dead-Center */}
        <div className="md:col-span-4 flex justify-center items-center order-1 md:order-2 relative">
          <div className="relative w-[300px] h-[430px] sm:w-[330px] sm:h-[470px] md:w-[350px] md:h-[490px] lg:w-[370px] lg:h-[510px] rounded-3xl p-[2.5px] overflow-hidden group shadow-2xl">
            {/* Smooth 360-Degree Rotating Beam */}
            <div className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#fff_360deg)] animate-[spin_4s_linear_infinite]" />
            
            {/* Inner Image Container */}
            <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-zinc-950">
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

        {/* Right: Sharp Professional Bio & Actions */}
        <div className="md:col-span-4 flex flex-col items-center md:items-end text-center md:text-right order-3">
          <p className="text-xs sm:text-[13px] font-mono text-zinc-400 max-w-xs leading-relaxed uppercase mb-6 tracking-wide">
            Specializing in modern full-stack web applications, Vision Transformers (ViT), and robust cloud-native system architectures.
          </p>
          <div className="flex items-center gap-3 font-mono text-xs">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-full bg-white text-black font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all cursor-pointer shadow-lg shadow-white/10 whitespace-nowrap"
            >
              View Work
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border border-zinc-700 bg-zinc-900/90 text-zinc-200 font-semibold uppercase tracking-wider hover:border-emerald-500 hover:text-emerald-400 transition-all cursor-pointer whitespace-nowrap"
            >
              Resume ↗
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Left: Timeline Tag */}
      <div className="absolute bottom-6 left-6 md:left-12 lg:left-16 flex items-center gap-2 text-xs tracking-widest text-zinc-400 font-mono">
        <span className="text-emerald-400 font-bold">↓</span>
        <span>SCROLL TO SCRUB TIMELINE</span>
      </div>

      {/* Bottom Right: Status Tag */}
      <div className="absolute bottom-6 right-6 md:right-12 lg:right-16 hidden md:flex items-center gap-2 text-xs tracking-widest text-zinc-500 uppercase font-mono">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>AVAILABLE FOR ENGAGEMENTS</span>
      </div>
    </section>
  );
}