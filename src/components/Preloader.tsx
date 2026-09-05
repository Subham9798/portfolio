"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "SOFTWARE DEVELOPER",
    "WEB DEVELOPER",
    "AI / ML ENGINEER",
    "NETWORKING ENGINEER",
  ];

  // Rotate roles smoothly as loading progresses
  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 550);
    return () => clearInterval(roleTimer);
  }, [roles.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 3;
      });
    }, 35);
    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col justify-between p-8 md:p-14 text-white font-mono transition-opacity duration-700 select-none overflow-hidden ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        backgroundColor: "#070709",
        backgroundImage:
          "radial-gradient(circle at 50% 42%, #1a1824 0%, #0b0a0f 55%, #050507 100%)",
      }}
    >
      {/* Top Telemetry */}
      <div className="flex justify-between items-center text-[11px] md:text-xs tracking-widest text-zinc-400 uppercase">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>INITIALIZING SYSTEM</span>
        </div>
        <div className="text-zinc-500">INITIALIZE DEV // 2026</div>
      </div>

      {/* Center Display with Rotating Roles & Metallic Counter */}
      <div className="flex flex-col items-center justify-center text-center space-y-3 my-auto">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white drop-shadow-[0_10px_25px_rgba(255,255,255,0.15)]">
          SUBHAM <span className="text-zinc-400">KUMAR SINGH</span>
        </h1>
        
        {/* Dynamic Rotating Roles Cycle */}
        <div className="h-6 flex items-center justify-center">
          <p className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-emerald-400 font-bold transition-all duration-300">
            {roles[roleIndex]}
          </p>
        </div>

        {/* Shiny Metallic Gradient Percentage Counter */}
        <div className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight pt-2 bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent drop-shadow-[0_15px_35px_rgba(255,255,255,0.25)]">
          {progress}%
        </div>
      </div>

      {/* Bottom Progress Bar */}
      <div className="w-full max-w-xl mx-auto space-y-3 pb-2">
        <div className="w-full h-[3px] bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-100 ease-out shadow-[0_0_12px_rgba(255,255,255,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between items-center text-[10px] md:text-[11px] text-zinc-400 uppercase tracking-widest">
          <span>LOADING MODULES...</span>
          <span className="text-emerald-400 font-semibold">SECURE CONNECTION</span>
        </div>
      </div>
    </div>
  );
}