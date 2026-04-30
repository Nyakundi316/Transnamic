import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/footer";
import { Truck, Building2, Drill, Pickaxe, ArrowUpRight, Package, Wrench } from "lucide-react";

export const metadata = {
  title: "Services — Transnamic",
  description: "Explore Transnamic's construction, logistics, and equipment leasing services across East & Central Africa.",
};

const services = [
  {
    icon: Truck,
    title: "Road Freight",
    description: "Comprehensive road freight services across East and Central Africa. Our well-maintained fleet handles everything from general cargo to specialized heavy-haul transport, ensuring timely and secure delivery on every route.",
    image: "/truck0001.jpeg",
  },
  {
    icon: Building2,
    title: "Construction",
    description: "Full-scale construction services for infrastructure, commercial, and residential projects. We manage every phase from foundation to finish, maintaining the highest standards of quality and safety compliance.",
    image: "/Expressway.jpeg",
  },
  {
    icon: Drill,
    title: "Borehole Drilling",
    description: "Professional borehole drilling for reliable water access. We conduct thorough geotechnical surveys, environmental assessments, and precision drilling operations using modern equipment and experienced crews.",
    image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Pickaxe,
    title: "Grading & Excavation",
    description: "Precision earthworks, site clearing, grading, and excavation for projects of any scale. Our skilled operators and heavy machinery deliver accurate ground preparation for roads, buildings, and utility installations.",
    image: "https://media.istockphoto.com/id/1419307054/photo/excavator-at-a-construction-site-against-sunset-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=S1uBZQUqlZgjCeYVukzk3LqGQpqZ_-dBWx1xiPBlwy4=",
  },
];

const materials = [
  "Building Stone",
  "Ballast (all sizes)",
  "Machine Cut Stone",
  "Quarry Dust",
  "Sand (river & manufactured)",
  "Hardcore & Murram",
  "Gabion Mesh & Boxes",
  "Ready-Mix Concrete",
];

const equipment = [
  "Excavators (various tonnage)",
  "Motor Graders",
  "Bulldozers",
  "Wheel Loaders",
  "Compactors & Rollers",
  "Dump Trucks",
  "Low-Bed Trailers",
  "Concrete Mixers & Batching Plants",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative bg-foreground text-background pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(139,0,0,0.08),transparent_60%)]" />
        <div className="container mx-auto px-6 lg:px-10 relative">
          <div className="flex items-center gap-2 text-sm text-background/50 mb-8">
            <Link href="/" className="hover:text-background transition-colors">Home</Link>
            <span>/</span>
            <span className="text-red-400">Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight max-w-3xl">
            What we <span className="text-red-400">build</span> and deliver.
          </h1>
          <p className="mt-6 text-background/50 max-w-xl text-lg leading-relaxed">
            From construction and earthworks to logistics and equipment leasing — we handle every phase of your project with precision and reliability.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-20">
            {services.map((service, i) => {
              const Icon = service.icon;
              const reversed = i % 2 !== 0;

              return (
                <div
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-10 items-center`}
                >
                  <div className={`relative h-72 lg:h-[420px] rounded-2xl overflow-hidden ${reversed ? "lg:order-2" : ""}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className={`flex flex-col gap-5 ${reversed ? "lg:order-1" : ""}`}>
                    <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/30 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-red-700" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-red-700 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 mt-2 group"
                    >
                      Get a quote
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
              Materials & Equipment
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Everything your project needs.
            </h2>
            <p className="mt-4 text-background/50 leading-relaxed">
              Beyond services, we supply quality construction materials and lease heavy equipment to keep your project moving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-red-700/20 flex items-center justify-center">
                  <Package className="h-5 w-5 text-red-400" />
                </div>
                <h3 className="text-xl font-bold">Materials Supply</h3>
              </div>
              <div className="grid gap-3">
                {materials.map((item) => (
                  <div key={item} className="flex items-center gap-3 py-3 border-b border-background/10 last:border-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-700" />
                    <span className="text-background/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-red-700/20 flex items-center justify-center">
                  <Wrench className="h-5 w-5 text-red-400" />
                </div>
                <h3 className="text-xl font-bold">Equipment Leasing</h3>
              </div>
              <div className="grid gap-3">
                {equipment.map((item) => (
                  <div key={item} className="flex items-center gap-3 py-3 border-b border-background/10 last:border-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-700" />
                    <span className="text-background/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-background/10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-red-700 hover:bg-red-800 text-white rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-red-700/20"
            >
              Request materials or equipment
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
