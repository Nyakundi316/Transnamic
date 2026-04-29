import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Hero2() {
  return (
    <>
      <Navbar />
      <section className="relative bg-foreground text-background pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,119,6,0.08),transparent_60%)]" />
        <div className="container mx-auto px-6 lg:px-10 relative">
          <div className="flex items-center gap-2 text-sm text-background/50 mb-8">
            <Link href="/" className="hover:text-background transition-colors">Home</Link>
            <span>/</span>
            <span className="text-amber-400">About Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight max-w-3xl">
            Our foundation is built on{" "}
            <span className="text-amber-400">trust</span> and excellence.
          </h1>
          <p className="mt-6 text-background/50 max-w-xl text-lg leading-relaxed">
            Since 2012, Transnamic has been delivering innovative construction and logistics solutions across East Africa.
          </p>
        </div>
      </section>
    </>
  );
}
