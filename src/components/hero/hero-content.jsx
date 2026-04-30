"use client";

import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroContent() {
  return (
    <div className="flex flex-col gap-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3"
      >
        <div className="w-2 h-2 rounded-full bg-red-600" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700 dark:text-red-400">
          Construction & Logistics
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground"
      >
        Building the future,{" "}
        <span className="text-red-700 dark:text-red-400">moving</span> what
        matters.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="text-lg text-muted-foreground leading-relaxed max-w-lg"
      >
        Innovating logistics and construction solutions across East Africa. From
        groundbreaking to final delivery &mdash; we power your vision.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap items-center gap-4 pt-2"
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold bg-red-700 hover:bg-red-800 text-white rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-red-700/25"
        >
          Start a project
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-foreground border border-border hover:border-foreground/30 rounded-full transition-all duration-200"
        >
          <Play className="h-3.5 w-3.5 fill-current" />
          Learn more
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex items-center gap-8 pt-6 border-t border-border/50 mt-2"
      >
        <div>
          <p className="text-2xl font-bold text-foreground">12+</p>
          <p className="text-xs text-muted-foreground mt-0.5">Years active</p>
        </div>
        <div className="w-px h-10 bg-border" />
        <div>
          <p className="text-2xl font-bold text-foreground">1,600+</p>
          <p className="text-xs text-muted-foreground mt-0.5">Projects done</p>
        </div>
        <div className="w-px h-10 bg-border" />
        <div>
          <p className="text-2xl font-bold text-foreground">100%</p>
          <p className="text-xs text-muted-foreground mt-0.5">Success rate</p>
        </div>
      </motion.div>
    </div>
  );
}
