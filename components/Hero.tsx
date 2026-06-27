"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-accent text-sm mb-6"
      >
        ~/
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-4xl sm:text-6xl md:text-7xl font-mono font-bold tracking-tight text-foreground mb-4"
      >
        Ren Hutton<span className="text-accent">.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-lg sm:text-xl text-muted mb-2 font-mono"
      >
        <span className="text-accent">&gt;</span>{" "}final-year software engineering student
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg sm:text-xl text-muted mb-2 font-mono"
      >
        <span className="text-accent">&gt;</span>{" "}computer vision &amp; machine learning
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-lg sm:text-xl text-muted mb-2 font-mono cursor"
      >
        <span className="text-accent">&gt;</span>{" "}te whanganui-a-tara, nz
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-wrap gap-4"
      >
        <a
          href="#projects"
          className="px-5 py-2.5 border border-accent text-accent font-mono text-sm hover:bg-accent hover:text-background transition-colors"
        >
          view projects
        </a>
        <a
          href="#contact"
          className="px-5 py-2.5 border border-border text-foreground font-mono text-sm hover:border-accent hover:text-accent transition-colors"
        >
          get in touch
        </a>
      </motion.div>
    </section>
  );
}
