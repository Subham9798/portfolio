"use client";

export default function Navbar() {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-4 flex items-center justify-between pointer-events-auto">
      {/* Top Left Brand */}
      <a href="#" className="text-sm font-black uppercase tracking-tight text-white font-mono">
        Subham<span className="text-emerald-400">.</span>
      </a>

      {/* Center Floating Pill Menu */}
      <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-950/80 backdrop-blur-md shadow-2xl">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[11px] font-mono uppercase px-3 py-1 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Top Right Audio Status (From Video 0:02) */}
      <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="hidden sm:inline">♪ DJ Zarek, Irokz - YALA</span>
      </div>
    </header>
  );
}