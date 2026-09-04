"use client";

import { ExternalLink, Code2, FolderGit2 } from "lucide-react";

const projectList = [
  {
    id: "01",
    tag: "COMPUTER VISION / AI",
    title: "AgriVision AI",
    description:
      "Deep learning pipeline leveraging MobileNet architectures for real-time mobile crop disease detection and edge diagnosis.",
    stack: ["Python", "TensorFlow", "FastAPI", "React Native"],
    github: "https://github.com",
    live: "https://github.com",
  },
  {
    id: "02",
    tag: "SUPPLY CHAIN & LOGISTICS",
    title: "LogiRoute Hub",
    description:
      "Operational routing and automated inventory tracking architecture built for decentralized warehouse hubs.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://github.com",
  },
  {
    id: "03",
    tag: "COMPILER DESIGN & AUTOMATA",
    title: "LexiParse Engine",
    description:
      "High-performance deterministic parser analyzing LL(1) grammars, state-machine transitions, and token streams.",
    stack: ["C++", "Data Structures", "Algorithms", "Optimization"],
    github: "https://github.com",
    live: "https://github.com",
  },
  {
    id: "04",
    tag: "WEB INTELLIGENCE",
    title: "RankPulse SEO Radar",
    description:
      "Autonomous competitor search telemetry tracker harvesting SERP movements and domain metrics via reactive queues.",
    stack: ["TypeScript", "Next.js", "Redis", "Puppeteer"],
    github: "https://github.com",
    live: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-2 mb-3 text-xs font-mono text-emerald-400 uppercase tracking-widest">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>// 04. PRODUCTION DEPLOYMENTS</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
          Featured Engineering Projects
        </h2>
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectList.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-3xl bg-zinc-950/70 border border-zinc-800/80 p-8 backdrop-blur-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between shadow-2xl"
          >
            <div>
              {/* Top Meta Info */}
              <div className="flex items-center justify-between gap-2 mb-6 font-mono text-xs">
                <span className="text-zinc-500">// PROJECT {item.id}</span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold uppercase tracking-wider text-[10px]">
                  {item.tag}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="text-2xl font-bold uppercase text-white group-hover:text-emerald-300 transition-colors mb-3">
                {item.title}
              </h3>
              <p className="text-zinc-400 font-mono text-xs leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div>
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-6 font-mono text-[11px]">
                {item.stack.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Bottom Action Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-900 font-mono text-xs">
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>CODE // REPO</span>
                </a>
                <a
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors ml-auto"
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}