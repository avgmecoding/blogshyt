"use client";

import { useState, MouseEvent } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <footer className="w-full mt-auto pt-10 pb-6 flex flex-col items-center gap-6 select-none relative z-20">
      {/* Top Divider Beam */}
      <div className="w-full max-w-5xl px-4 sm:px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent" />
      </div>

      {/* Main Command Center Dock */}
      <div
        className="group relative flex items-center gap-3 bg-[#040406]/75 border border-zinc-900/80 px-4 py-2.5 rounded-2xl backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Border Glow Beam */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 group-hover:opacity-100 transition-opacity duration-500 scale-[1.02]">
          <div className="absolute inset-[-500%] bg-[conic-gradient(from_0deg,transparent_45%,#f97316_50%,#a855f7_55%,transparent_60%)] animate-[spin_7s_linear_infinite]" />
        </div>

        {/* Interior background shield to maintain element solidity */}
        <div className="absolute inset-[1px] bg-[#040406] rounded-[15px] z-10 pointer-events-none" />

        {/* Soft interactive spotlight mask */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 mix-blend-screen opacity-[0.04] z-15"
            style={{
              background: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, rgb(255, 255, 255), transparent)`,
            }}
          />
        )}

        {/* Link Array Matrix */}
        <div className="flex items-center gap-2 relative z-20">
          <SocialLink href="mailto:rajshripatil19022006@gmail.com" icon={<FaEnvelope />} label="Email" color="hover:text-orange-400 hover:border-orange-500/30 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)]" />
          <SocialLink href="https://github.com/avgmecoding" icon={<FaGithub />} label="GitHub" color="hover:text-white hover:border-zinc-700 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
          <SocialLink href="https://linkedin.com/in/rajshri-patil-270804292" icon={<FaLinkedin />} label="LinkedIn" color="hover:text-blue-400 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]" />
          <SocialLink href="https://x.com/avgmecoding" icon={<FaXTwitter />} label="X" color="hover:text-zinc-300 hover:border-zinc-800 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]" />
        </div>
      </div>

      {/* Cyber Credits Tag */}
      <div className="flex flex-col items-center gap-1 font-mono text-center">
        <p className="text-[9px] text-zinc-600 font-bold tracking-[0.25em] uppercase transition-colors duration-500 group-hover:text-zinc-500">
          DESIGNED_BY_RAJSHRI // © 2026
        </p>
      </div>
    </footer>
  );
}

interface SocialProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: string;
}

function SocialLink({ href, icon, label, color }: SocialProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`group/btn relative flex items-center justify-center w-10 h-10 rounded-xl border border-zinc-900 bg-zinc-950/40 text-zinc-500 transition-all duration-300 ${color}`}
    >
      {/* Individual Node Accent Flare */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-orange-500/[0.02] to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
      
      <span className="text-base z-10 transition-transform duration-300 group-hover/btn:scale-105 group-hover/btn:-translate-y-0.5">
        {icon}
      </span>
    </a>
  );
}