"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart3, Users, Shield, Leaf } from "lucide-react";

const facts = [
  {
    icon: BarChart3,
    numbers: "95",
    suffix: "%",
    title: "Efficiency Rate",
    description: "Delivering projects on time and within budget.",
  },
  {
    icon: Users,
    numbers: "98",
    suffix: "%",
    title: "Client Satisfaction",
    description: "Exceeding expectations with quality and service.",
  },
  {
    icon: Shield,
    numbers: "100",
    suffix: "%",
    title: "Safety Record",
    description: "Prioritizing safety and compliance on every site.",
  },
  {
    icon: Leaf,
    numbers: "250",
    suffix: "k+",
    title: "Sustainable Practices",
    description: "Commitment to eco-friendly and sustainable construction.",
  },
];

export default function FunFact() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {facts.map((fact, i) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border/50 rounded-2xl p-7 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-foreground tabular-nums">
                        {fact.numbers}
                      </span>
                      <span className="text-xl font-bold text-red-700">
                        {fact.suffix}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/30">
                      <Icon className="h-5 w-5 text-red-700" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{fact.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {fact.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative h-[450px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://cdn.prod.website-files.com/66cbf3a93b65cddabce581a1/670274a813f01975724b0b64_about-funfact-banner.jpg"
              alt="Construction site"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
