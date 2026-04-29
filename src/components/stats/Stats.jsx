"use client";

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedCounter } from './animated-counter';
import { ProjectImages } from './project-images';

export default function Stats() {
  return (
    <section className="relative bg-muted/40 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 flex flex-col justify-between"
            >
              <div>
                <AnimatedCounter end={1600} suffix="k+" />
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Successfully completed projects across construction, logistics, and infrastructure.
                </p>
              </div>
              <div className="mt-8">
                <ProjectImages />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 flex flex-col justify-between"
            >
              <div>
                <AnimatedCounter end={100} suffix="%" />
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Client satisfaction across every project delivery.
                </p>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 mt-8 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-semibold text-sm group"
              >
                View all projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/r1.jpg"
              alt="Transnamic project"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 lg:p-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Crafting Quality,<br />Building Trust.
              </h2>
              <p className="text-white/70 mt-3 max-w-sm text-sm">
                Every project reflects our commitment to excellence and lasting value.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
