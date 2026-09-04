"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + 5;
      });
    }, 35);
    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center pointer-events-none transition-opacity duration-700">
      <div className="w-52 h-[2px] bg-zinc-800 relative overflow-hidden rounded-full">
        <div
          className="h-full bg-white transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mt-4">
        INITIALIZING ARCHITECTURE // {progress}%
      </span>
    </div>
  );
}