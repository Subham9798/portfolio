"use client";

import { Code2, Cpu, Globe, Terminal, Sparkles } from "lucide-react";

export default function BentoGrid() {
  return (
    <section className="min-h-screen w-full bg-[#050505] text-white px-6 md:px-20 py-24 border-t border-zinc-900/80">
      <div className="max-w-6xl mx-auto mb-16">
        <div className="text-xs font-mono tracking-widest text-emerald-400 uppercase mb-3 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          // 0.2 Architecture & Skills
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
          System Overview
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Core Stack */}
        <div className="md:col-span-2 rounded-2xl bg-zinc-950/40 border border-zinc-800/60 p-8 backdrop-blur-xl group hover:border-zinc-700 transition-colors">
          <div className="flex items-center justify-between mb-8">
            <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-emerald-400">
              <Code2 className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Stack.v1</span>
          </div>
          <h3 className="text-2xl font-bold mb-3">Modern Web Architecture</h3>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-md mb-6">
            Building responsive, frame-locked web applications with Next.js, TypeScript, and hardware-accelerated animations.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Node.js"].map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-900 text-zinc-300 border border-zinc-800">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card 2: Performance */}
        <div className="rounded-2xl bg-zinc-950/40 border border-zinc-800/60 p-8 backdrop-blur-xl flex flex-col justify-between group hover:border-zinc-700 transition-colors">
          <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 w-fit">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <div className="text-4xl font-mono font-black text-emerald-400 mb-1">60 FPS</div>
            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Target Frame Rate</p>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Optimized rendering cycles with zero layout shifts.
            </p>
          </div>
        </div>

        {/* Card 3: Backend & Logic */}
        <div className="rounded-2xl bg-zinc-950/40 border border-zinc-800/60 p-8 backdrop-blur-xl group hover:border-zinc-700 transition-colors">
          <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 w-fit mb-6">
            <Terminal className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-2">Engineered Logic</h3>
          <p className="text-zinc-400 text-xs leading-relaxed">
            Strong foundations in algorithms, system design, and performant data parsing.
          </p>
        </div>

        {/* Card 4: Global Deployment */}
        <div className="md:col-span-2 rounded-2xl bg-zinc-950/40 border border-zinc-800/60 p-8 backdrop-blur-xl flex flex-col justify-between group hover:border-zinc-700 transition-colors">
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300">
              <Globe className="w-6 h-6" />
            </div>
            <span className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Production Ready
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">Edge Deployment & Scalability</h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-lg">
              Low-latency edge routing, clean semantic structuring, and fast static delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}