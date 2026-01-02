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
    <nav className="w-full px-4 sm:px-6 py-4 text-white">
      <div className="flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden group-hover:border-zinc-500 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <span className="font-mono text-lg font-black tracking-tighter text-zinc-100">
              RP
            </span>

            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-zinc-800 group-hover:bg-orange-500 transition-colors" />
          </div>
        </Link>

        <div className="hidden md:flex gap-3">
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

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden font-mono text-sm border border-dashed border-gray-700 px-3 py-1.5 rounded-lg text-gray-300 hover:text-white transition"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-40 mt-4" : "max-h-0"
          }`}
      >
        <div className="flex flex-col gap-3">
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

function NavButton({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <Link href={href}>
      <button
        className={[
          "font-mono text-base px-4 py-1.5 rounded-xl border border-dashed transition",
          active
            ? "border-gray-400 text-white bg-white/5"
            : "border-gray-700 text-gray-300 hover:text-white hover:border-gray-500",
        ].join(" ")}
      >
        {children}
      </button>
    </Link>
  );
}

function MobileLink({
  href,
  children,
  active,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Link href={href} onClick={onClick}>
      <div
        className={[
          "font-mono text-sm px-4 py-2 rounded-lg border border-dashed transition",
          active
            ? "border-gray-400 text-white bg-white/5"
            : "border-gray-700 text-gray-300 hover:text-white hover:border-gray-500",
        ].join(" ")}
      >
        {children}
      </div>
    </Link>
  );
}
