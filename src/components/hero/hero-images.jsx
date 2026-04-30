"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroImages() {
  return (
    <div className="relative w-full h-[480px] lg:h-[580px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-0 right-0 w-[75%] h-[70%] rounded-2xl overflow-hidden shadow-2xl"
      >
        <Image
          src="https://cdn.prod.website-files.com/6329ae223e4134f94a1f5728/6329c0599e19769163da5257_baner%20img%201.png"
          alt="Construction project"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-[55%] h-[50%] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-background"
      >
        <Image
          src="/image.png"
          alt="Construction equipment"
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute top-[15%] left-[10%] bg-red-700 text-white px-5 py-3 rounded-xl shadow-lg z-10"
      >
        <p className="text-2xl font-bold">100%</p>
        <p className="text-xs opacity-90">Success Rate</p>
      </motion.div>
    </div>
  );
}
