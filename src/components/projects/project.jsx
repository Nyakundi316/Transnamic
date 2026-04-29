"use client";

import { motion } from "framer-motion";
import ProjectInfo from "@/components/projects/project-info";

const projectData = [
  {
    name: "Greenwood Estates",
    description: "Nestled in a tranquil, tree-lined setting, this estate offers elegant homes crafted with sustainability and comfort in mind.",
    location: "Downtown City Center",
    scope: "Office Complex Development",
    itemNumber: 1,
    imageSrc: "/Westlands.jpeg",
    projectLink: "/projects/greenwood-estates",
  },
  {
    name: "Seaside Residences",
    description: "Premium coastal living spaces designed with modern architecture and unobstructed ocean views.",
    location: "Seaside Avenue",
    scope: "Residential Development",
    itemNumber: 2,
    imageSrc: "https://cdn.prod.website-files.com/66cff9a759450299f215b2ec/67025070f5d5d3c3e415c7b4_harbor-view-condominiums.jpg",
    projectLink: "/projects/oceanview-heights",
  },
  {
    name: "Uhuru Garden",
    description: "An urban park featuring well-constructed pathways, spacious green fields, and stunning views of the Nairobi city skyline — a peaceful retreat in the heart of the city.",
    location: "Nairobi City",
    scope: "Mixed-Use Development",
    itemNumber: 3,
    imageSrc: "/UhuruGarden.jpeg",
    projectLink: "/projects/summit-towers",
  },
];

export default function Project() {
  return (
    <section className="bg-muted/40 py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
              Latest Projects
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              A portfolio of excellence<br className="hidden sm:block" /> and innovation.
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
