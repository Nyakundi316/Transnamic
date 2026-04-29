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
        src="https://cdn.prod.website-files.com/66cbf3a93b65cddabce581a1/66d81c1f80fd4e7f940510b5_About-us-banner-v2-p-500.jpg"
        alt="Construction blueprints"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-900/30 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8">
        <div className="flex items-baseline gap-1">
          <span className="text-6xl font-bold text-white">12</span>
          <span className="text-2xl font-bold text-amber-300">+</span>
        </div>
        <p className="text-lg font-semibold text-white/90 mt-1">
          Years of Experience
        </p>
        <p className="text-sm text-white/60 mt-2 max-w-[200px]">
          Delivering excellence in construction and logistics since 2012.
        </p>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
