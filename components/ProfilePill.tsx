"use client";

import Image from "next/image";
import { useState, MouseEvent } from "react";

export default function ProfilePill() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-[#040406]/95 p-5 pr-8 sm:pr-12 rounded-2xl overflow-hidden select-none border border-zinc-900 shadow-[0_0_40px_rgba(0,0,0,0.7)] backdrop-blur-xl max-w-xl transition-all duration-300"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Animated Border Beam Track */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 group-hover:opacity-100 transition-opacity duration-500 scale-[1.01]">
        <div className="absolute inset-[-500%] bg-[conic-gradient(from_0deg,transparent_45%,#f97316_50%,#a855f7_55%,transparent_60%)] animate-[spin_6s_linear_infinite]" />
      </div>

      {/* Background Mask to keep container solid */}
      <div className="absolute inset-[1px] bg-[#040406] rounded-[15px] z-10 pointer-events-none" />

      {/* 2. Interactive Spotlight Flare */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 mix-blend-screen opacity-[0.05] z-15"
          style={{
            background: `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, rgb(255, 255, 255), transparent)`,
          }}
        />
      )}

      {/* Micro-grid overlay texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:14px_14px] z-15" />

      {/* 3. Avatar Matrix Frame */}
      <div className="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden border border-zinc-800/80 bg-zinc-950 z-20 group-hover:border-orange-500/50 shadow-md group-hover:scale-[1.03] transition-all duration-500">
        <Image
          src="/pfp.jpg"
          alt="Rajshri Patil"
          fill
          className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
          priority
        />
        {/* Corner alignment brackets over avatar */}
        <div className="absolute inset-0 border border-transparent group-hover:border-orange-500/20 transition-colors pointer-events-none" />
      </div>

      {/* 4. Text Interface Content */}
      <div className="flex flex-col font-mono leading-tight z-20">
        <div className="flex items-center gap-2.5">
          <span className="text-zinc-100 font-black text-2xl tracking-tighter bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400">
            rajshri
          </span>
          <span className="text-base animate-pulse duration-[2000ms] drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]">
            🍂
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse ml-1 shadow-[0_0_8px_#10b981]" />
        </div>

        {/* Dynamic Meta Indicators */}
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-zinc-500 text-[10px] sm:text-xs mt-2 uppercase tracking-widest font-semibold">
          <span className="text-zinc-400 hover:text-orange-400 transition-colors cursor-default duration-300">
            20y
          </span>
          <span className="text-zinc-800 font-light">/</span>
          <span className="hover:text-zinc-300 transition-colors cursor-default duration-300">
            cs undergrad
          </span>
          <span className="text-zinc-800 font-light">/</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400 font-bold tracking-wider">
            developer
          </span>
        </div>
      </div>

      {/* Subtle cyber deco point in the far right */}
      <div className="absolute right-4 top-4 hidden sm:flex gap-1 opacity-20 group-hover:opacity-60 transition-opacity z-20">
        <div className="w-1 h-1 bg-zinc-600 rounded-full" />
        <div className="w-1 h-1 bg-zinc-600 rounded-full" />
      </div>
    </div>
  );
}