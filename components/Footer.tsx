"use client";

import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className=" bg-black-950 py-6 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-4 bg-black-950 border border-dashed border-gray-800 rounded-2xl px-6 py-4"
      >
        <a
          href="mailto:rajshripatil19022006@gmail.com"
          aria-label="Email"
          className="flex items-center justify-center w-12 h-12 rounded-xl border border-dashed border-gray-700 text-gray-300 hover:text-orange-400 hover:border-gray-500 transition transform hover:scale-110"
        >
          <FaEnvelope className="text-xl" />
        </a>
        <a
          href="https://github.com/avgmecoding"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex items-center justify-center w-12 h-12 rounded-xl border border-dashed border-gray-700 text-gray-300 hover:text-orange-400 hover:border-gray-500 transition transform hover:scale-110"
        >
          <FaGithub className="text-xl" />
        </a>
        <a
          href="https://linkedin.com/in/rajshri-patil-270804292"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex items-center justify-center w-12 h-12 rounded-xl border border-dashed border-gray-700 text-gray-300 hover:text-orange-400 hover:border-gray-500 transition transform hover:scale-110"
        >
          <FaLinkedin className="text-xl" />
        </a>
        <a
          href="https://x.com/avgmecoding"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className="flex items-center justify-center w-12 h-12 rounded-xl border border-dashed border-gray-700 text-gray-300 hover:text-orange-400 hover:border-gray-500 transition transform hover:scale-110"
        >
          <FaXTwitter className="text-xl" />
        </a>
      </motion.div>
    </footer>
  );
}
