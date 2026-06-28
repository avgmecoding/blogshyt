"use client";

import { motion } from "framer-motion";
import { useState, MouseEvent } from "react";
import {
  FaJs, FaReact, FaGitAlt, FaGithub, FaLinux, FaNodeJs, FaFigma
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiGo, SiPostgresql, SiMongodb, SiPostman, SiExpress
} from "react-icons/si";

export default function TechCard() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const stack = [
    { Icon: FaJs, name: "JavaScript", color: "group-hover/icon:text-yellow-400 drop-[0_0_15px_rgba(250,204,21,0.5)]" },
    { Icon: SiTypescript, name: "TypeScript", color: "group-hover/icon:text-blue-400 drop-[0_0_15px_rgba(96,165,250,0.5)]" },
    { Icon: FaReact, name: "React", color: "group-hover/icon:text-cyan-400 drop-[0_0_15px_rgba(34,211,238,0.5)]" },
    { Icon: SiNextdotjs, name: "Next.js", color: "group-hover/icon:text-white drop-[0_0_15px_rgba(255,255,255,0.6)]" },
    { Icon: SiTailwindcss, name: "Tailwind", color: "group-hover/icon:text-sky-400 drop-[0_0_15px_rgba(56,189,248,0.5)]" },
    { Icon: SiGo, name: "Golang", color: "group-hover/icon:text-cyan-500 drop-[0_0_15px_rgba(6,182,212,0.5)]" },
    { Icon: SiPostgresql, name: "PostgreSQL", color: "group-hover/icon:text-[#336791] drop-[0_0_15px_rgba(51,103,145,0.5)]" },
    { Icon: FaNodeJs, name: "Node.js", color: "group-hover/icon:text-green-500 drop-[0_0_15px_rgba(34,197,94,0.5)]" },
    { Icon: SiExpress, name: "Express", color: "group-hover/icon:text-gray-300 drop-[0_0_15px_rgba(209,213,219,0.5)]" },
    { Icon: SiMongodb, name: "MongoDB", color: "group-hover/icon:text-green-400 drop-[0_0_15px_rgba(74,222,128,0.5)]" },
    { Icon: FaGitAlt, name: "Git", color: "group-hover/icon:text-orange-500 drop-[0_0_15px_rgba(249,115,22,0.5)]" },
    { Icon: FaGithub, name: "GitHub", color: "group-hover/icon:text-white drop-[0_0_15px_rgba(255,255,255,0.6)]" },
    { Icon: FaLinux, name: "Linux", color: "group-hover/icon:text-yellow-400 drop-[0_0_15px_rgba(250,204,21,0.5)]" },
    { Icon: SiPostman, name: "Postman", color: "group-hover/icon:text-orange-400 drop-[0_0_15px_rgba(251,146,60,0.5)]" },
    { Icon: FaFigma, name: "Figma", color: "group-hover/icon:text-pink-400 drop-[0_0_15px_rgba(244,114,182,0.5)]" },
  ];

  return (
    <div 
      className="group relative w-full max-w-6xl mx-auto p-[1px] rounded-3xl overflow-hidden select-none bg-zinc-900/60 transition-all duration-500"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Animated Conic Border Beam */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500 origin-center scale-[1.02]">
        <div className="absolute inset-[-500%] bg-[conic-gradient(from_0deg,transparent_40%,#f97316_50%,#a855f7_60%,transparent_70%)] animate-[spin_8s_linear_infinite]" />
      </div>

      {/* Main Base Grid Architecture */}
      <div className="relative bg-[#040406]/98 rounded-[23px] p-6 shadow-[2xl] z-10 backdrop-blur-3xl grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Spotlight Mouse Mask Layer */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 mix-blend-color-dodge opacity-20"
            style={{
              background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, #f97316, #3b82f6, transparent 80%)`,
            }}
          />
        )}

        {/* Matrix Micro-Grid Line Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />

        {/* LEFT COLUMN: System Metrics Banner (New Structure Accent Block) */}
        <div className="lg:col-span-1 flex flex-col justify-between p-4 rounded-xl bg-zinc-950/40 border border-zinc-800/40 relative overflow-hidden group/sidebar">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.02] to-transparent pointer-events-none" />
          
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_#f97316]" />
              <h3 className="text-[10px] font-mono font-black tracking-[0.3em] text-zinc-400 uppercase">System.Node_Map</h3>
            </div>
            <p className="text-zinc-500 text-xs font-mono leading-relaxed">
              Assembling component trees and scalable backends via fully integrated system frameworks. 
            </p>
          </div>

          <div className="mt-8 lg:mt-0 pt-4 border-t border-zinc-900 font-mono text-[9px] text-zinc-600 space-y-1.5">
            <div className="flex justify-between"><span className="text-zinc-500">BANDWIDTH</span> <span className="text-emerald-500 animate-pulse">OPTIMAL</span></div>
            <div className="flex justify-between"><span className="text-zinc-500">INTEGRITY</span> <span className="text-zinc-400">100%</span></div>
          </div>
        </div>

        {/* RIGHT COLUMN: The Asymmetrical Bento Grid */}
        <div className="lg:col-span-3 flex flex-col justify-between">
          
          {/* Section Header */}
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-xs font-mono font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
              TECH_STACK
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-zinc-800/80 to-transparent mx-6 hidden sm:block" />
          </div>

          {/* Interactive Stack Display */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 p-1.5 bg-zinc-950/60 border border-zinc-900 rounded-xl">
            {stack.map(({ Icon, name, color }, index) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.015 }}
                whileHover={{ scale: 1.02, y: -2 }}
                key={index}
                className="group/icon relative bg-[#09090c] h-20 rounded-lg flex flex-col items-center justify-center transition-all duration-300 border border-zinc-900 hover:border-zinc-800/80 cursor-pointer overflow-hidden shadow-md"
              >
                {/* Micro Ambient Corner Glow */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-white/[0.02] to-transparent pointer-events-none" />
                
                {/* Glowing Active Background Burst */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-orange-500/[0.03] via-transparent to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Animated Node Icon Container */}
                <div className="relative z-20 transform transition-all duration-300 group-hover/icon:-translate-y-2 group-hover/icon:scale-105">
                  <Icon className={`text-2xl text-zinc-500 transition-all duration-300 ${color}`} />
                </div>

                {/* Micro Tag Display */}
                <span className="absolute bottom-2 text-[8px] font-mono font-semibold text-zinc-500 opacity-0 group-hover/icon:opacity-100 transition-all duration-300 transform translate-y-1 group-hover/icon:translate-y-0 uppercase tracking-tight max-w-[90%] truncate text-center z-20">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Dynamic Footer Layout */}
          <div className="mt-4 flex items-center justify-between text-[9px] font-mono text-zinc-600 px-1">
            <div className="flex gap-1">
              <div className="w-4 h-1 bg-orange-500/80 rounded-sm" />
              <div className="w-2 h-1 bg-zinc-800 rounded-sm group-hover:bg-purple-500/60 transition-colors" />
              <div className="w-2 h-1 bg-zinc-800 rounded-sm group-hover:bg-zinc-600 transition-colors" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}