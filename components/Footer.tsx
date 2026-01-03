"use client";

import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className=" flex flex-col items-center gap-6">
      <div className="w-full max-w-6xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-2" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 px-4 py-2 rounded-xl backdrop-blur-sm shadow-2xl "
      >
        <SocialLink href="mailto:rajshripatil19022006@gmail.com" icon={<FaEnvelope />} label="Email" />
        <SocialLink href="https://github.com/avgmecoding" icon={<FaGithub />} label="GitHub" />
        <SocialLink href="https://linkedin.com/in/rajshri-patil-270804292" icon={<FaLinkedin />} label="LinkedIn" />
        <SocialLink href="https://x.com/avgmecoding" icon={<FaXTwitter />} label="X" />
      </motion.div>

      <p className="font-mono mb-3 text-[13px] text-zinc-600 font-bold tracking-[0.3em]">
        Made with ❤️ by Rajshri
      </p>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative flex items-center justify-center w-12 h-12 rounded-2xl border border-zinc-800 bg-black text-zinc-400 hover:text-white hover:border-zinc-500 transition-all duration-300"
    >
      <span className="text-xl z-10 transition-transform group-hover:scale-110">{icon}</span>
      <div className="absolute inset-0 rounded-2xl bg-orange-500/0 group-hover:bg-orange-500/5 transition-all" />
    </a>
  );
}