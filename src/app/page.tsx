"use client";

import Image from "next/image";
import HeroScrub from "@/components/HeroScrub";
import Preloader from "@/components/Preloader";
import AIChatbot from "@/components/AIChatbot";

export default function Home() {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  const skillCategories = [
    {
      category: "Languages",
      skills: ["C", "C++", "Python", "SQL"],
    },
    {
      category: "AI / ML & Deep Learning",
      skills: [
        "Deep Learning",
        "Explainable AI (XAI)",
        "Vision Transformer (ViT)",
        "CNN",
      ],
    },
    {
      category: "Web Development",
      skills: ["HTML", "CSS", "React.js", "Next.js"],
    },
    {
      category: "Database & Dev Tools",
      skills: ["MySQL", "Git", "GitHub", "VS Code", "Jupyter Notebook"],
    },
    {
      category: "Computer Skills",
      skills: ["MS Word", "MS Excel", "MS PowerPoint", "MS Office Suite"],
    },
  ];

  const educationList = [
    {
      degree: "B.Tech — Computer Science & Engineering (AI & ML)",
      institution: "Government Engineering College Jamui",
      board: "Bihar Engineering University",
      period: "Nov 2022 — May 2026",
      score: "CGPA: 7.3",
      location: "Jamui, Bihar",
      highlight:
        "Final Year Project: AgriVision XAI (Supervised by Asst. Prof. Debesh Kumar Shandilya)",
    },
    {
      degree: "Intermediate (12th), Science",
      institution: "M.S. College, Mairwa",
      board: "BSEB",
      period: "2020 — 2022",
      score: "Science Stream",
      location: "Mairwa, Bihar",
      highlight: "Higher Secondary Education in Science",
    },
    {
      degree: "High School (10th)",
      institution: "R.K.N.I.C. School, Ballia",
      board: "UP Board",
      period: "2018 — 2020",
      score: "Matriculation",
      location: "Ballia, U.P.",
      highlight: "Foundational Secondary Schooling",
    },
  ];

  const internships = [
    {
      role: "Software Development Intern",
      company: "JhaJi Fastsewa E-Facilities Pvt. Ltd.",
      period: "Dec 2025 — Feb 2026",
      location: "Bihar, India (Offline + Remote)",
      points: [
        "Contributed to Fastsewa Super Portal & Android Application across two consecutive internship stints.",
        "Worked on product development, system design, and industry-oriented software engineering workflows.",
        "Performance rated Highly Satisfactory; recommended for campus placements and professional roles.",
      ],
    },
    {
      role: "Website Development Intern",
      company: "Eisystems Technologies",
      period: "May 2025 — July 2025",
      location: "TECHNEX 25, IIT BHU Varanasi (Remote)",
      points: [
        "Completed 6-week training in website development and practical workflows.",
        "Gained hands-on exposure to frontend development and responsive design.",
      ],
    },
    {
      role: "Salesforce Developer Virtual Intern",
      company: "SmartInternz / AICTE",
      period: "Dec 2023 — Jan 2024",
      location: "Virtual Internship",
      points: [
        "Hands-on architectural exposure to cloud application development and workflow automation.",
        "Configured enterprise development pipelines, database triggers, and business logic.",
      ],
    },
  ];

  const certifications = [
    {
      title: "NPTEL Big Data Computing",
      issuer: "IIT Kanpur",
      badge: "Silver Medalist • Elite Score: 77%",
      year: "Aug — Oct 2025",
    },
    {
      title: "NPTEL Soft Skill Development",
      issuer: "IIT Kharagpur",
      badge: "Elite Score: 61%",
      year: "Jan — Mar 2025",
    },
    {
      title: "Python for ML, Data Science & Web Development",
      issuer: "iHUB DivyaSampark, IIT Roorkee",
      badge: "Certified Training",
      year: "2023",
    },
    {
      title: "Salesforce Developer Virtual Internship",
      issuer: "SmartInternz / AICTE",
      badge: "Internship Certificate",
      year: "Dec 2023 — Jan 2024",
    },
  ];

  const coursework = [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Object Oriented Programming",
    "Machine Learning & Deep Learning",
    "Computer Networks",
    "Explainable AI (XAI)",
    "Operating Systems",
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-white">
      {/* 0. Fullscreen Boot Preloader */}
      <Preloader />

      {/* AI Assistant Chat Widget */}
      <AIChatbot />

      {/* Top Floating Navbar with GitHub & LinkedIn Links */}
      <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-auto">
        <nav className="flex items-center gap-1 sm:gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-950/90 backdrop-blur-md shadow-2xl">
          <span className="text-xs font-black uppercase tracking-wider text-emerald-400 px-2 font-mono">
            Subham.
          </span>
          <div className="h-3 w-px bg-zinc-800 mx-0.5" />

          {/* Main Navigation Items */}
          <div className="flex items-center gap-0.5 sm:gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] font-mono uppercase px-2 sm:px-2.5 py-1 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block h-3 w-px bg-zinc-800 mx-1" />

          {/* Quick Header Socials */}
          <div className="hidden md:flex items-center gap-1 font-mono text-[11px]">
            <a
              href="https://github.com/Subham9798"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-emerald-400 px-2 py-0.5 rounded-full hover:bg-zinc-900 transition-colors"
            >
              GH ↗
            </a>
            <a
              href="https://linkedin.com/in/subham-kumar-singh-97br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-emerald-400 px-2 py-0.5 rounded-full hover:bg-zinc-900 transition-colors"
            >
              IN ↗
            </a>
          </div>
        </nav>
      </header>

      {/* 1. Hero Section */}
      <HeroScrub />

      {/* 2. Main Content Wrapper */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-20 py-16 space-y-24">
        {/* Professional Summary Section With Glowing Animated Border Photo */}
        <section id="about" className="pt-2">
          <div className="rounded-3xl border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Photo Card with Rotating Light Effect */}
              <div className="md:col-span-4 flex flex-col items-center">
                <div className="relative w-64 h-72 rounded-2xl p-[2px] overflow-hidden group shadow-2xl">
                  <div className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#fff_360deg)] animate-[spin_4s_linear_infinite]" />

                  <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-zinc-900">
                    <Image
                      src="/profile.jpg"
                      alt="Subham Kumar Singh"
                      fill
                      unoptimized
                      priority
                      className="object-cover object-top"
                      style={{
                        filter:
                          "brightness(1.08) contrast(1.12) saturate(0.82) hue-rotate(-8deg)",
                      }}
                    />
                  </div>
                </div>
                <div className="mt-4 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-zinc-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>OPEN TO OPPORTUNITIES</span>
                </div>
              </div>

              {/* Right Summary Info */}
              <div className="md:col-span-8 space-y-6">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                  // 0.1 SYSTEM PROFILE • PROFESSIONAL SUMMARY
                </span>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                  Hello, I&apos;m Subham Kumar Singh
                </h2>
                <p className="text-zinc-300 font-mono text-xs md:text-sm leading-relaxed max-w-2xl">
                  B.Tech fresher in Computer Science & Engineering (AI & ML) from
                  Government Engineering College Jamui, passionate about
                  Artificial Intelligence, Deep Learning, and solving real-world
                  problems through technology. Designed and developed AgriVision
                  XAI — an AI-powered crop disease detection system using Vision
                  Transformer and Explainable AI. Gained practical industry
                  exposure through 3 internships in product development and
                  software engineering. A self-motivated and quick learner,
                  ready to contribute, grow, and add value from day one.
                </p>

                {/* 3 Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                    <div className="text-sm font-bold font-mono text-white">
                      Full-Stack
                    </div>
                    <div className="text-[11px] font-mono text-zinc-500 mt-1 uppercase">
                      Architecture
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                    <div className="text-sm font-bold font-mono text-white">
                      React & Next.js
                    </div>
                    <div className="text-[11px] font-mono text-zinc-500 mt-1 uppercase">
                      Performance UI
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
                    <div className="text-sm font-bold font-mono text-white">
                      AI / ViT Systems
                    </div>
                    <div className="text-[11px] font-mono text-zinc-500 mt-1 uppercase">
                      Computer Vision
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills With Shining Rotating Border Cards */}
        <section id="skills" className="border-t border-zinc-900 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800 pb-6 mb-10">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                // 02. TECHNICAL SKILLS
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mt-2">
                Technologies I Work With
              </h2>
            </div>
            <p className="text-zinc-400 text-xs font-mono max-w-xs">
              Full-stack expertise across modern web development, artificial
              intelligence, and cloud stacks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((group) => (
              <div
                key={group.category}
                className="relative rounded-3xl p-[1.5px] overflow-hidden group shadow-lg"
              >
                <div className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#10b981_360deg)] animate-[spin_6s_linear_infinite]" />

                <div className="relative w-full h-full rounded-[22px] bg-zinc-950 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                      {group.category}
                    </span>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800/80 text-zinc-200 text-xs font-mono group-hover:border-zinc-700 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="relative rounded-3xl p-[1.5px] overflow-hidden group shadow-lg md:col-span-2">
              <div className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#06b6d4_360deg)] animate-[spin_8s_linear_infinite]" />

              <div className="relative w-full h-full rounded-[22px] bg-zinc-950 p-6">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                  Key Academic Coursework
                </span>
                <div className="flex flex-wrap gap-2 mt-4">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 text-zinc-300 text-xs font-mono"
                    >
                      • {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flagship Project: AgriVision XAI with Rotating Glowing Border */}
        <section id="projects" className="border-t border-zinc-900 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800 pb-6 mb-10">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                // 03. FEATURED PROJECTS
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mt-2">
                AgriVision XAI
              </h2>
            </div>
            <p className="text-zinc-400 text-xs font-mono max-w-sm">
              AI-Powered Crop Disease Detection & Farmer Advisory System (Final
              Year Project).
            </p>
          </div>

          <div className="relative rounded-3xl p-[2px] overflow-hidden group shadow-2xl">
            <div className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0_280deg,#10b981_320deg,#06b6d4_360deg)] animate-[spin_8s_linear_infinite]" />

            <div className="relative w-full h-full rounded-[22px] bg-gradient-to-b from-zinc-950 via-[#070707] to-black p-8 md:p-12 overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 text-[11px] font-mono rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
                    Final Year Project • Supervised by Asst. Prof. Debesh Kumar
                    Shandilya
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    Jan — May 2026
                  </span>
                </div>
                <a
                  href="https://github.com/Subham9798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                >
                  GitHub Source ↗
                </a>
              </div>

              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
                Crop Disease Detection & Real-time Diagnostic Pipeline
              </h3>

              <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-3xl mb-8">
                Built using Python, Vision Transformer (ViT), Explainable AI
                (XAI), CNN, React.js, and MySQL. Presented as Final Year Project
                at Dept. of CSE (AI & ML), GEC Jamui.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-emerald-500/30 hover:border-emerald-500 transition-colors">
                  <div className="text-2xl md:text-3xl font-black text-emerald-400 font-mono">
                    99.28%
                  </div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">
                    Validation Accuracy
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="text-2xl md:text-3xl font-black text-white font-mono">
                    38
                  </div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">
                    Disease Classes
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="text-xl md:text-2xl font-black text-white font-mono">
                    ViT + CNN
                  </div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">
                    Architecture
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-cyan-500/30 hover:border-cyan-500 transition-colors">
                  <div className="text-xl md:text-2xl font-black text-cyan-400 font-mono">
                    XAI Layer
                  </div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider mt-1">
                    Leaf Explainability
                  </div>
                </div>
              </div>

              <ul className="space-y-2 text-xs md:text-sm text-zinc-300 font-mono list-disc list-inside mb-8">
                <li>
                  Achieved 99.28% validation accuracy across 38 plant disease
                  classes using Vision Transformer (ViT) with XAI trained on
                  PlantVillage and PlantDoc datasets.
                </li>
                <li>
                  Built farmer-facing web app: upload crop image → instant
                  disease detection → treatment solutions PDF report download.
                </li>
                <li>
                  Integrated AI chatbot for real-time farming queries and
                  weather forecasting.
                </li>
                <li>
                  XAI explainability layer highlights which part of the leaf is
                  diseased making AI transparent and trustworthy.
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60 text-xs font-mono">
                {[
                  "Python",
                  "Vision Transformer (ViT)",
                  "Explainable AI (XAI)",
                  "CNN",
                  "React.js",
                  "MySQL",
                  "PlantDoc",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-md bg-zinc-800/60 text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Internships */}
        <section id="experience" className="border-t border-zinc-900 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800 pb-6 mb-10">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                // 04. PROFESSIONAL EXPERIENCE
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mt-2">
                Industry Internships
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internships.map((job) => (
              <div
                key={job.company}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-mono text-emerald-400 uppercase">
                      {job.role}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {job.period}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mt-1">
                    {job.company}
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono mb-4">
                    {job.location}
                  </p>
                  <ul className="text-xs text-zinc-300 space-y-2 font-mono list-disc list-inside">
                    {job.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Clean Restored Card Style */}
        <section id="education" className="border-t border-zinc-900 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800 pb-6 mb-10">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                // 05. ACADEMIC BACKGROUND
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mt-2">
                Education
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationList.map((edu) => (
              <div
                key={edu.degree}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                    {edu.score}
                  </span>
                  <h4 className="text-lg font-bold text-white mt-2 leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-mono text-zinc-300 mt-2">
                    {edu.institution}
                  </p>
                  <p className="text-[11px] font-mono text-zinc-500 mt-0.5">
                    {edu.board} • {edu.location}
                  </p>
                  <p className="text-xs text-zinc-400 mt-4 leading-relaxed">
                    {edu.highlight}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-900 text-[11px] font-mono text-zinc-500">
                  {edu.period}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="border-t border-zinc-900 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800 pb-6 mb-10">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                // 06. CERTIFICATIONS & HONORS
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mt-2">
                Verified Credentials
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {certifications.map((c) => (
              <div
                key={c.title}
                className="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                    {c.badge}
                  </span>
                  <h5 className="text-sm font-bold text-white mt-2 leading-snug">
                    {c.title}
                  </h5>
                  <p className="text-xs text-zinc-400 font-mono mt-1">
                    {c.issuer}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-zinc-600 mt-4">
                  {c.year}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-6 rounded-3xl bg-zinc-950 border border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase">
                // EXTRA CURRICULAR & CODING
              </span>
              <p className="text-xs font-mono text-zinc-300 mt-1">
                Active on LeetCode solving DSA & algorithmic problems • Awarded
                NPTEL Silver Medal in Big Data Computing (IIT Kanpur, 2025) •
                Presented AgriVision XAI as Final Year Project at GEC Jamui (May
                2026).
              </p>
            </div>
            <a
              href="https://github.com/Subham9798"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900 text-xs font-mono hover:border-emerald-400 hover:text-emerald-400 transition-all"
            >
              GitHub @Subham9798 ↗
            </a>
          </div>
        </section>

        {/* Contact Form Connected to Web3Forms */}
        <section id="contact" className="border-t border-zinc-900 pt-16">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                  // LIVE DISPATCH MODE
                </span>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mt-2">
                  Let&apos;s Build Something Exceptional.
                </h3>
                <div className="mt-6 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-xs font-mono text-zinc-300 space-y-1">
                  <div>// direct_reach.json</div>
                  <div className="text-emerald-400">
                    email: &quot;shubhamkumarsingh355@gmail.com&quot;
                  </div>
                  <div className="text-emerald-400">
                    phone: &quot;+91 9798686896&quot;
                  </div>
                </div>
              </div>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="md:col-span-7 space-y-4 font-mono text-xs"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="340e5ebe-12ca-42f0-b6fc-89f1aa7f5e1b"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Message from Portfolio Website"
                />
                <input
                  type="hidden"
                  name="from_name"
                  value="Subham Portfolio Inquiry"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="First Name"
                    required
                    autoComplete="off"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-white outline-none focus:border-emerald-400"
                  />
                  <input
                    type="text"
                    name="Last Name"
                    required
                    autoComplete="off"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-white outline-none focus:border-emerald-400"
                  />
                </div>
                <input
                  type="email"
                  name="Email"
                  required
                  autoComplete="off"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-white outline-none focus:border-emerald-400"
                />
                <textarea
                  name="Message"
                  rows={4}
                  required
                  autoComplete="off"
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-white outline-none focus:border-emerald-400 resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-white text-black font-bold uppercase tracking-wider hover:bg-emerald-400 transition-all cursor-pointer"
                >
                  Send Message ↗
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Large Name Text */}
        <div className="pt-10 pb-4 text-center select-none overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-20 bg-gradient-to-r from-cyan-500/15 via-emerald-500/15 to-rose-500/15 blur-[80px] pointer-events-none" />

          <h2 className="relative flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_8px_20px_rgba(6,182,212,0.35)] hover:brightness-125 transition-all">
              SUBHAM
            </span>
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent drop-shadow-[0_8px_20px_rgba(16,185,129,0.35)] hover:brightness-125 transition-all">
              KUMAR
            </span>
            <span className="bg-gradient-to-r from-fuchsia-500 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_8px_20px_rgba(244,63,94,0.35)] hover:brightness-125 transition-all">
              SINGH
            </span>
          </h2>
        </div>

        {/* Footer */}
        <footer className="pt-6 pb-12 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>© 2026 SUBHAM KUMAR SINGH • BUILT WITH NEXT.JS</div>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/subham-kumar-singh-97br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Subham9798"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400"
            >
              GitHub
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400"
            >
              Resume PDF
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}