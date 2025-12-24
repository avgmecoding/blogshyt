"use client";

import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-950 text-white py-6 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex gap-8 text-2xl"
      >
        <a
          href="mailto:rajshripatil19022006@gmail.com"
          aria-label="Email"
          className="hover:text-pink-400 transition transform hover:scale-150"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://github.com/avgmecoding"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-pink-400 transition transform hover:scale-150"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/rajshri-patil-270804292"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-pink-400 transition transform hover:scale-150"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://x.com/avgmecoding"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className="hover:text-pink-400 transition transform hover:scale-150"
        >
          <FaXTwitter />
        </a>
      </motion.div>
    </footer>
  );
}
