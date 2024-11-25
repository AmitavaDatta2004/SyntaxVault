"use client";

import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
      <div className="absolute inset-0 w-full h-full bg-grid-white/[0.02] bg-grid-pattern" />
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Code2 size={80} className="text-white mx-auto" />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Code Showcase
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl text-zinc-400 max-w-2xl mx-auto px-4"
        >
          A collection of my programming solutions, algorithms, and projects.
          Feel free to explore and use these code snippets in your own work.
        </motion.p>
      </div>
    </div>
  );
}