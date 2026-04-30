"use client";

import { motion } from "framer-motion";
import ProjectInfo from "@/components/projects/project-info";

const projectData = [
  {
    name: "Dagoretti Corner Project",
    description: "A major infrastructure development in the Dagoretti area of Nairobi, involving road construction, grading, and site preparation using our fleet of heavy equipment.",
    location: "Nairobi, Kenya",
    scope: "Road & Infrastructure",
    itemNumber: 1,
    imageSrc: "/Project3.jpeg",
    projectLink: "/projects/dagoretti-corner",
  },
  {
    name: "Eastern Bypass Construction",
    description: "Large-scale road construction on the Eastern Bypass corridor, delivering grading, excavation, and material supply for one of Nairobi's key transport links.",
    location: "Nairobi, Kenya",
    scope: "Road Construction",
    itemNumber: 2,
    imageSrc: "/projects/eastern bypass.png",
    projectLink: "/projects/eastern-bypass",
  },
  {
    name: "Dongo Kundu Project",
    description: "Infrastructure development in the Dongo Kundu area of Mombasa, supporting the bypass and free trade zone with earthworks, logistics, and construction materials.",
    location: "Mombasa, Kenya",
    scope: "Infrastructure Development",
    itemNumber: 3,
    imageSrc: "/projects/Dongo.png",
    projectLink: "/projects/dongo-kundu",
  },
  {
    name: "Kwa Jomvu A109 Construction",
    description: "Road construction and improvement works on the A109 highway at Kwa Jomvu, Mombasa — a critical corridor connecting the port city to the rest of Kenya.",
    location: "Mombasa, Kenya",
    scope: "Highway Construction",
    itemNumber: 4,
    imageSrc: "/projects/Kwa jomvu.png",
    projectLink: "/projects/kwa-jomvu",
  },
];

export default function Project() {
  return (
    <section className="bg-muted/40 py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700 dark:text-red-400">
              Our Projects
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              A portfolio of excellence<br className="hidden sm:block" /> across Kenya.
            </h2>
          </div>
        </div>

        <div className="grid gap-8">
          {projectData.map((project, i) => (
            <motion.div
              key={project.itemNumber}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProjectInfo {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
