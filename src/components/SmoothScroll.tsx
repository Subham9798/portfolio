"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cinematic inertial scrolling via Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Custom Interactive Neon Cursor
    const moveCursor = (e: MouseEvent) => {
      if (cursorDotRef.current && cursorRingRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        cursorRingRef.current.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Center pinpoint */}
      <div
        ref={cursorDotRef}
        className="hidden md:block fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-emerald-400 pointer-events-none"
      />
      {/* Outer tracking ring */}
      <div
        ref={cursorRingRef}
        className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full border border-emerald-400/40 pointer-events-none transition-transform duration-75 ease-out"
      />
    </div>
  );
}