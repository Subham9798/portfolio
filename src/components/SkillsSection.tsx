"use client";

import { Cpu } from "lucide-react";

const skillsRow1 = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Python",
];

const skillsRow2 = [
  "C++",
  "GSAP",
  "REST APIs",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git & GitHub",
];

const skillsRow3 = [
  "Computer Vision",
  "Machine Learning",
  "System Architecture",
  "Data Structures",
  "Performance Tuning",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-24 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="flex items-center gap-2 mb-3 text-xs font-mono text-emerald-400 uppercase tracking-widest">
          <Cpu className="w-3.5 h-3.5" />
          <span>// 03. TECHNICAL CAPABILITIES</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight mb-4">
          Technologies I Work With
        </h2>
        <p className="text-zinc-500 font-mono text-xs md:text-sm max-w-lg">
          Full-stack expertise across modern web development, backend microservices, and system-level architectures.
        </p>
      </div>

      {/* Pill Badge Rows */}
      <div className="flex flex-col items-center gap-3.5">
        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl">
          {skillsRow1.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 rounded-full bg-zinc-950/80 border border-zinc-800/90 text-zinc-300 font-mono text-xs hover:border-emerald-500/50 hover:text-emerald-300 transition-all hover:scale-105 cursor-default shadow-lg"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl">
          {skillsRow2.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 rounded-full bg-zinc-950/80 border border-zinc-800/90 text-zinc-300 font-mono text-xs hover:border-emerald-500/50 hover:text-emerald-300 transition-all hover:scale-105 cursor-default shadow-lg"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl">
          {skillsRow3.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 rounded-full bg-zinc-950/80 border border-zinc-800/90 text-zinc-300 font-mono text-xs hover:border-emerald-500/50 hover:text-emerald-300 transition-all hover:scale-105 cursor-default shadow-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}