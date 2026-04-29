import { HeroContent } from "./hero-content";
import { HeroImages } from "./hero-images";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-background">
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          <div className="lg:col-span-6 xl:col-span-5">
            <HeroContent />
          </div>
          <div className="lg:col-span-6 xl:col-span-7">
            <HeroImages />
          </div>
        </div>
      </div>
    </section>
  );
}
