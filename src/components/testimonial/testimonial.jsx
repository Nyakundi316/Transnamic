"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Diana Nyangena",
    role: "CEO",
    image: "https://images.pexels.com/photos/8528852/pexels-photo-8528852.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "From start to finish, Transnamic's team was dedicated, communicative, and reliable. They managed our project seamlessly and delivered high-quality work on time. I highly recommend them for any transportation and logistics need.",
  },
  {
    name: "Michael Chen",
    role: "Director, Riverside Community Center",
    image: "https://cdn.prod.website-files.com/66cbf3a93b65cddabce581a1/66dd791a2a0e008e0122e81e_Michael%20Chen.jpg",
    quote: "Their commitment to sustainable practices and innovative construction truly impressed us. The equipment fleet is modern and well-maintained, and the team delivered exactly what was promised.",
  },
  {
    name: "David Lee",
    role: "Project Manager, Cityscape Developments",
    image: "https://images.pexels.com/photos/8872475/pexels-photo-8872475.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "Transnamic's grading and excavation work on our site was exceptional. Professional crew, modern equipment, and they finished ahead of schedule. A trusted partner for infrastructure projects.",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700 dark:text-red-400">
              Testimonials
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Hear what our<br className="hidden sm:block" /> clients have to say.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid lg:grid-cols-5 gap-8 items-center"
          >
            <div className="lg:col-span-2">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden max-w-sm">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <Quote className="h-10 w-10 text-red-700/20 mb-6" />

              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-red-600 fill-red-600" />
                ))}
              </div>

              <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed font-medium">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="text-lg font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{t.role}</p>
              </div>

              <div className="flex gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? 'w-8 bg-red-700' : 'w-4 bg-border hover:bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
