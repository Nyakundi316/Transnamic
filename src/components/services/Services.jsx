"use client";

import ServicesGrid from './ServicesGrid';

const Services = () => {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
              What We Do
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Delivering quality<br className="hidden sm:block" /> from start to finish.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            From sustainable building practices to reliable road freight, we handle every aspect of your project with precision.
          </p>
        </div>
        <ServicesGrid />
      </div>
    </section>
  );
};

export default Services;
