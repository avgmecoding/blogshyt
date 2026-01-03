"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "More", href: "/more" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    // Lowered padding-top to keep content higher on the screen
    <nav className="w-full px-6 py-4 text-white max-w-7xl mx-auto z-50">
      <div className="flex items-center justify-between">
        
        {/* Logo Section - Aligned with ProfilePill */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden group-hover:border-zinc-500 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="font-mono text-lg font-black tracking-tighter text-zinc-100">RP</span>
            {/* Status Indicator inside logo */}
            <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-zinc-800 group-hover:bg-orange-500 transition-colors" />
          </div>
        </Link>

        {/* Desktop Nav - Floating Pill Style */}
        <div className="hidden md:flex items-center gap-1 bg-zinc-900/40 p-1 rounded-xl border border-zinc-800/50 backdrop-blur-md shadow-xl">
          {navItems.map((item) => (
            <NavButton
              key={item.href}
              href={item.href}
              active={pathname === item.href}
            >
              {item.label}
            </NavButton>
          ))}
        </div>

        {/* Mobile Toggle - Precision Engineered look */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-500 transition-all"
        >
          <div className="flex flex-col gap-1">
            <div className={`h-[1.5px] bg-zinc-300 transition-all duration-300 ${open ? "w-5 rotate-45 translate-y-[5.5px]" : "w-5"}`} />
            <div className={`h-[1.5px] bg-zinc-300 transition-all duration-300 ${open ? "opacity-0" : "w-3"}`} />
            <div className={`h-[1.5px] bg-zinc-300 transition-all duration-300 ${open ? "w-5 -rotate-45 -translate-y-[5.5px]" : "w-5"}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu - Integrated Glass Effect */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col gap-2 p-2 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl">
          {navItems.map((item) => (
            <MobileLink
              key={item.href}
              href={item.href}
              active={pathname === item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </MobileLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

function NavButton({ href, children, active }: { href: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link href={href}>
      <button className={`
        font-mono text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-lg transition-all duration-300
        ${active 
          ? "bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
          : "text-zinc-500 hover:text-white hover:bg-white/5"}
      `}>
        {children}
      </button>
    </Link>
  );
}

function MobileLink({ href, children, active, onClick }: { href: string; children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className={`
      font-mono text-center text-xs uppercase tracking-widest py-4 rounded-xl border border-dashed transition-all duration-300
      ${active ? "border-orange-500/50 text-white bg-orange-500/10" : "border-zinc-800 text-zinc-500 hover:border-zinc-600"}
    `}>
      {children}
    </Link>
  );
}