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
        <Link href="/" className="font-mono text-sm text-gray-300 hover:text-white transition">
          Rajshri Patil
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
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 mt-4" : "max-h-0"
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
