"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "Premium Movers", src: "/partners/PREMIUM%20MOVERS.png", className: "lg:justify-self-start" },
  { name: "AVIC INTL", src: "/partners/avic%20intl.png", className: "lg:justify-self-end" },
  { name: "Stecol Corporation", src: "/partners/STECOL%20CORPORATION.png", className: "lg:justify-self-start" },
  { name: "CCCC China City Construction Holding Group Company", src: "/partners/ccc%20Holding%20group.png", className: "lg:justify-self-end" },
  { name: "China Civil Engineering Construction Corporation", src: "/partners/CHINA%20CIVIL%20ENG.png", className: "lg:justify-self-start" },
  { name: "CNQC", src: "/partners/CNQC.png", className: "lg:justify-self-end" },
  { name: "China Aeroapace Construction Group Co., Ltd", src: "/partners/CHINA%20AEROAPAGE%20CONSTRUCTION%20GROUP%20CO.LTD.png", className: "sm:col-span-2 lg:col-span-2 justify-self-center max-w-[560px]" },
];

export default function Partners() {
  return (
    <section className="bg-card py-24 lg:py-32 border-y border-border/30">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700 dark:text-red-400">
              Trusted Partners
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Built on strong<br className="hidden sm:block" /> partnerships.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            We collaborate with leading international construction and engineering firms to deliver world-class infrastructure across the region.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-[#e5e7eb] p-6 sm:p-10 lg:p-14 shadow-sm">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -left-12 top-16 h-16 w-80 rotate-45 bg-white/55" />
            <div className="absolute left-16 -top-10 h-20 w-96 rotate-45 bg-white/45" />
            <div className="absolute right-4 top-20 h-20 w-80 rotate-45 bg-white/45" />
            <div className="absolute bottom-16 left-40 h-20 w-[34rem] rotate-45 bg-white/40" />
          </div>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 lg:gap-x-28 lg:gap-y-16 items-center">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`flex h-20 w-full max-w-[360px] items-center justify-center ${partner.className}`}
            >
              <Image
                src={partner.src}
                alt={`${partner.name} logo`}
                width={540}
                height={120}
                className="h-full w-full object-contain"
              />
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
