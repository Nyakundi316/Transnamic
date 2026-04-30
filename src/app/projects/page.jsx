import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/footer";
import { ArrowUpRight, Building2, MapPin, Route, Truck } from "lucide-react";

export const metadata = {
  title: "Projects - Transnamic",
  description:
    "Explore Transnamic's construction, roadworks, logistics, and infrastructure projects across Kenya.",
};

const projects = [
  {
    name: "Dagoretti Corner Project",
    description:
      "Road construction, grading, and site preparation works supporting infrastructure development in Nairobi's Dagoretti corridor.",
    location: "Nairobi, Kenya",
    scope: "Road & Infrastructure",
    image: "/Project3.jpeg",
    icon: Route,
    details: ["Roadworks", "Grading", "Material support"],
  },
  {
    name: "Eastern Bypass Construction",
    description:
      "Large-scale road construction support along the Eastern Bypass, including excavation, grading, and aggregate logistics.",
    location: "Nairobi, Kenya",
    scope: "Road Construction",
    image: "/projects/eastern bypass.png",
    icon: Truck,
    details: ["Excavation", "Road freight", "Earthworks"],
  },
  {
    name: "Dongo Kundu Project",
    description:
      "Infrastructure works in the Dongo Kundu development zone, supporting bypass construction and regional freight movement.",
    location: "Mombasa, Kenya",
    scope: "Infrastructure Development",
    image: "/projects/Dongo.png",
    icon: Building2,
    details: ["Infrastructure", "Logistics", "Materials"],
  },
  {
    name: "Kwa Jomvu A109 Construction",
    description:
      "Highway improvement works on the A109 corridor at Kwa Jomvu, a strategic route serving port and inland transport operations.",
    location: "Mombasa, Kenya",
    scope: "Highway Construction",
    image: "/projects/Kwa jomvu.png",
    icon: Route,
    details: ["Highway works", "Site preparation", "Fleet support"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden bg-foreground pt-32 pb-20 text-background lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(185,28,28,0.22),transparent_42%)]" />
        <div className="container relative mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-2 text-sm text-background/50 mb-8">
            <Link href="/" className="hover:text-background transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-red-400">Projects</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
                Project Portfolio
              </span>
              <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                Proven delivery across roads, infrastructure, and logistics.
              </h1>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-background/55 lg:col-span-4">
              Transnamic supports complex construction programs with equipment,
              materials, fleet logistics, and disciplined site execution.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.name}
                  className="group overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-black/5"
                >
                  <div className="grid lg:grid-cols-12">
                    <div className="relative h-72 overflow-hidden lg:col-span-7 lg:h-[430px]">
                      <Image
                        src={project.image}
                        alt={`${project.name} project`}
                        fill
                        sizes="(min-width: 1024px) 58vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-foreground backdrop-blur-sm">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <div className="flex flex-col justify-between p-7 sm:p-9 lg:col-span-5 lg:p-10">
                      <div>
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 dark:bg-red-950/30">
                          <Icon className="h-5 w-5 text-red-700" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
                          {project.name}
                        </h2>
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                          {project.description}
                        </p>

                        <div className="mt-6 grid gap-3 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 text-red-700" />
                            {project.location}
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <span className="h-4 w-4 rounded-full border-2 border-red-700" />
                            {project.scope}
                          </div>
                        </div>

                        <div className="mt-7 flex flex-wrap gap-2">
                          {project.details.map((detail) => (
                            <span
                              key={detail}
                              className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                            >
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        href="/contact"
                        className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-red-700 transition-colors hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                      >
                        Discuss a similar project
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid gap-8 rounded-2xl border border-border/50 bg-card p-8 sm:p-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700 dark:text-red-400">
                Start Your Project
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground lg:text-4xl">
                Need equipment, logistics, or construction support?
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-red-700 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-red-800 hover:shadow-lg hover:shadow-red-700/20"
              >
                Get in Touch
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
