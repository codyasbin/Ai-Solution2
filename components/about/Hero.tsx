"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      className="relative h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 text-white flex items-center justify-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div>
        <motion.h1
          className="text-5xl md:text-6xl font-bold leading-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          About <span className="text-neutral-300">AI-Solution</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-neutral-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Empowering businesses with cutting-edge AI technologies to unlock their full potential.
        </motion.p>
      </div>
    </motion.section>
  );
}
