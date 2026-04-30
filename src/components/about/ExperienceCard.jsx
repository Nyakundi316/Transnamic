"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ExperienceCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative h-full min-h-[400px] rounded-2xl overflow-hidden"
    >
      <Image
        src="/Constraction.jpg"
        alt="Transnamic construction site"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-red-900/30 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8">
        <div className="flex items-baseline gap-1">
          <span className="text-6xl font-bold text-white">2020</span>
        </div>
        <p className="text-lg font-semibold text-white/90 mt-1">
          Established in Nairobi
        </p>
        <p className="text-sm text-white/60 mt-2 max-w-[240px]">
          Serving East & Central Africa with integrated logistics and construction solutions.
        </p>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
