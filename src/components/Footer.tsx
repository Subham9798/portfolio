"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Terminal } from "lucide-react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <footer className="w-full bg-[#050505] border-t border-zinc-900/80 py-12 px-6 text-center text-zinc-600 font-mono text-xs">
        &copy; 2026 Subham Kumar Singh
      </footer>
    );
  }

  return (
    <footer className="relative w-full overflow-hidden bg-[#050505] border-t border-zinc-900/80 pt-20 pb-12 px-6 md:px-16">
      {/* Top Meta Status Row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pb-16 border-b border-zinc-900/60 font-mono text-xs">
        <div className="flex items-center gap-3">
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span className="text-zinc-400 uppercase tracking-widest">// SYSTEM ARCHITECTURE v2.4</span>
        </div>

        <div className="flex items-center gap-6 text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-bold uppercase">Open to Opportunities</span>
          </div>
          <span className="text-zinc-700">|</span>
          <span>EST 2026</span>
        </div>
      </div>

      {/* Giant Central Watermark Typography */}
      <div className="relative py-12 flex justify-center items-center select-none pointer-events-none">
        <h1 className="text-[15vw] font-black uppercase text-zinc-900/50 tracking-tighter leading-none text-center">
          SUBHAM
        </h1>
      </div>

      {/* Bottom Copyright & Dispatch Row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500 pt-6">
        <div>
          &copy; 2026 Subham Kumar Singh. Built with Next.js & GSAP.
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            GITHUB <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            LINKEDIN <ArrowUpRight className="w-3 h-3" />
          </a>
          <button
            suppressHydrationWarning
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-emerald-400 transition-colors cursor-pointer"
          >
            TOP // 01
          </button>
        </div>
      </div>
    </footer>
  );
}