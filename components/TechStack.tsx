"use client";

import { motion } from "framer-motion";
import {
  FaJs, FaReact, FaGitAlt, FaGithub, FaLinux, FaNodeJs, FaFigma
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiGo, SiPostgresql, SiMongodb, SiPostman, SiExpress
} from "react-icons/si";

export default function TechCard() {
  const stack = [
    { Icon: FaJs, name: "JavaScript", color: "group-hover/icon:text-yellow-400" },
    { Icon: SiTypescript, name: "TypeScript", color: "group-hover/icon:text-blue-400" },
    { Icon: FaReact, name: "React", color: "group-hover/icon:text-cyan-400" },
    { Icon: SiNextdotjs, name: "Next.js", color: "group-hover/icon:text-white" },
    { Icon: SiTailwindcss, name: "Tailwind", color: "group-hover/icon:text-sky-400" },
    { Icon: SiGo, name: "Golang", color: "group-hover/icon:text-cyan-500" },
    { Icon: SiPostgresql, name: "PostgreSQL", color: "group-hover/icon:text-[#336791]" },
    { Icon: FaNodeJs, name: "Node.js", color: "group-hover/icon:text-green-500" },
    { Icon: SiExpress, name: "Express", color: "group-hover/icon:text-gray-400" },
    { Icon: SiMongodb, name: "MongoDB", color: "group-hover/icon:text-green-400" },
    { Icon: FaGitAlt, name: "Git", color: "group-hover/icon:text-orange-500" },
    { Icon: FaGithub, name: "GitHub", color: "group-hover/icon:text-white" },
    { Icon: FaLinux, name: "Linux", color: "group-hover/icon:text-yellow-400" },
    { Icon: SiPostman, name: "Postman", color: "group-hover/icon:text-orange-400" },
    { Icon: FaFigma, name: "Figma", color: "group-hover/icon:text-pink-400" },
  ];

  return (
    <div className="group relative w-full">
      <div className="absolute -inset-[1px] bg-gradient-to-r from-orange-500/50 via-zinc-800 to-orange-500/50 rounded-2xl blur-sm opacity-20 group-hover:opacity-100 group-hover:blur-md transition-all duration-1000 animate-pulse" />
      
      <div className="relative bg-[#050505] border border-zinc-800/50 rounded-2xl p-6 shadow-2xl overflow-hidden">
        
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[length:100%_2px,3px_100%]" />

        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <h2 className="text-sm font-mono font-bold tracking-[0.2em] text-zinc-400 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              TECHNOLOGY_STACK
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-5 lg:grid-cols-15 gap-px bg-zinc-800/20 border border-zinc-800/50 rounded-xl overflow-hidden">
          {stack.map(({ Icon, name, color }, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              key={index}
              className="group/icon relative bg-[#0A0A0A] aspect-square lg:aspect-auto lg:h-16 flex flex-col items-center justify-center transition-all duration-500 hover:bg-zinc-900/60"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity" />
              
              <Icon className={`text-xl text-zinc-600 transition-all duration-500 group-hover/icon:scale-125 group-hover/icon:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] ${color}`} />
              
              <span className="absolute bottom-1 text-[7px] font-mono text-zinc-400 opacity-0 group-hover/icon:opacity-100 transition-all transform translate-y-1 group-hover/icon:translate-y-0 uppercase tracking-tighter">
                {name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-orange-500 transition-colors delay-100" />
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-zinc-600 transition-colors delay-200" />
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-zinc-400 transition-colors delay-300" />
            </div>
        </div>
      </div>
    </div>
  );
}