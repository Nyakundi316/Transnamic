import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/footer";
import { Building2, HardHat, Home, Pickaxe, Drill, Truck, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Services — Transnamic",
  description: "Explore Transnamic's construction and logistics services.",
};

const services = [
  {
    icon: Building2,
    title: "Sustainable Building",
    description: "We implement eco-friendly practices and materials to create structures that stand the test of time while minimizing environmental impact. Our sustainable approach covers energy-efficient designs, green materials sourcing, and waste reduction strategies.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: HardHat,
    title: "Construction Management",
    description: "Expert project oversight from initial planning through final completion. We coordinate all aspects of construction including scheduling, budgeting, quality control, and safety management to ensure your project is delivered on time and within budget.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom-built homes designed around your lifestyle. We work closely with homeowners to deliver residences that combine comfort, style, and modern functionality — from single-family homes to multi-unit developments.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Drill,
    title: "Borehole Drilling",
    description: "Professional borehole drilling services for reliable water extraction. We handle environmental assessments, geotechnical surveys, and drilling operations with precision equipment and experienced crews.",
    image: "https://images.unsplash.com/photo-1687669981635-a0becffac6be?q=80&w=1974&auto=format&fit=crop",
  },
  {
    icon: Pickaxe,
    title: "Excavation Services",
    description: "Precision earthwork and excavation for foundations, trenches, grading, and complete site preparation. Our experienced operators and modern equipment ensure accurate and safe ground works for projects of any scale.",
    image: "https://media.istockphoto.com/id/1419307054/photo/excavator-at-a-construction-site-against-sunset-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=S1uBZQUqlZgjCeYVukzk3LqGQpqZ_-dBWx1xiPBlwy4=",
  },
  {
    icon: Truck,
    title: "Road Freight",
    description: "Reliable road freight services ensuring timely delivery across local, regional, and national routes. Our well-maintained fleet and experienced drivers provide cost-effective logistics solutions for businesses of all sizes.",
    image: "/truck0001.jpeg",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="relative bg-foreground text-background pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(217,119,6,0.08),transparent_60%)]" />
        <div className="container mx-auto px-6 lg:px-10 relative">
          <div className="flex items-center gap-2 text-sm text-background/50 mb-8">
            <Link href="/" className="hover:text-background transition-colors">Home</Link>
            <span>/</span>
            <span className="text-amber-400">Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight max-w-3xl">
            What we <span className="text-amber-400">build</span> and deliver.
          </h1>
          <p className="mt-6 text-background/50 max-w-xl text-lg leading-relaxed">
            From sustainable construction to reliable logistics — we handle every aspect of your project with precision and care.
          </p>
        </div>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-16">
            {services.map((service, i) => {
              const Icon = service.icon;
              const reversed = i % 2 !== 0;

              return (
                <div
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${reversed ? "lg:direction-rtl" : ""}`}
                >
                  <div className={`relative h-72 lg:h-96 rounded-2xl overflow-hidden ${reversed ? "lg:order-2" : ""}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className={`flex flex-col gap-5 ${reversed ? "lg:order-1" : ""}`}>
                    <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-amber-600" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 mt-2 group"
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

      <Footer />
    </main>
  );
}
