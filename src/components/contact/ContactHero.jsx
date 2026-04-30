import Link from "next/link";
import Navbar from "@/components/Navbar";

const ContactHero = () => {
  return (
    <>
      <Navbar />
      <section className="relative bg-foreground text-background pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,0,0,0.08),transparent_60%)]" />
        <div className="container mx-auto px-6 lg:px-10 relative">
          <div className="flex items-center gap-2 text-sm text-background/50 mb-8">
            <Link href="/" className="hover:text-background transition-colors">Home</Link>
            <span>/</span>
            <span className="text-red-400">Contact Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight max-w-3xl">
            Build your <span className="text-red-400">future</span> with us.
          </h1>
          <p className="mt-6 text-background/50 max-w-xl text-lg leading-relaxed">
            Get in touch to discuss your next construction or logistics project. We&apos;re ready to bring your vision to life.
          </p>
        </div>
      </section>
    </>
  );
};

export default ContactHero;
