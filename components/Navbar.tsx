"use client";

import Link from "next/link";
import { useState } from "react";

// Updated references to target internal element IDs instead of separate page routes
const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blogs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-4 sm:px-6 py-4 text-white max-w-5xl mx-auto z-50 relative select-none">
      <div className="flex items-center justify-between h-12 bg-[#040406]/75 border border-zinc-900/80 rounded-2xl px-4 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        
        {/* Logo Section */}
        <Link href="/" className="group flex items-center shrink-0">
          <div className="relative flex items-center justify-center w-8 h-8 bg-zinc-950 border border-zinc-800/80 rounded-lg overflow-hidden group-hover:border-orange-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="font-mono text-xs font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">RP</span>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-800 group-hover:bg-orange-500 transition-colors" />
          </div>
        </Link>

        {/* Desktop Nav - Anchor Links */}
        <div className="hidden md:flex items-center gap-1 bg-zinc-950/80 p-1 rounded-xl border border-zinc-900 shadow-inner">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-4 py-1.5 rounded-lg font-mono text-[9px] uppercase tracking-[0.25em] text-center block overflow-hidden text-zinc-500 hover:text-zinc-200 transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 bg-zinc-950 border border-zinc-900 rounded-lg hover:border-zinc-700 transition-all"
        >
          <div className="flex flex-col gap-1">
            <div className={`h-[1px] bg-zinc-400 transition-all duration-300 ${open ? "w-4 rotate-45 translate-y-[3.5px]" : "w-4"}`} />
            <div className={`h-[1px] bg-zinc-400 transition-all duration-300 ${open ? "opacity-0" : "w-2.5"}`} />
            <div className={`h-[1px] bg-zinc-400 transition-all duration-300 ${open ? "w-4 -rotate-45 -translate-y-[3.5px]" : "w-4"}`} />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out absolute left-4 right-4 mt-2 z-50 ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col gap-1.5 p-2 bg-[#040406]/98 border border-zinc-900 rounded-xl shadow-2xl backdrop-blur-2xl">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="relative font-mono text-center text-[10px] uppercase tracking-[0.2em] py-3.5 rounded-lg border border-zinc-900 text-zinc-500 hover:text-zinc-300 hover:border-zinc-800 transition-all duration-300 block"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}