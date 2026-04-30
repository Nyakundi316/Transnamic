"use client";

import AboutTabs from './AboutTabs';
import ExperienceCard from './ExperienceCard';

const AboutSection = () => {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700 dark:text-red-400">
              About Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Driven by innovation,<br className="hidden sm:block" />
              grounded in quality.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Established in October 2020, Transnamic Limited leverages its founders&apos; deep experience in transport, logistics, and construction materials to serve East & Central Africa.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ExperienceCard />
          </div>
          <div className="lg:col-span-3">
            <AboutTabs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
