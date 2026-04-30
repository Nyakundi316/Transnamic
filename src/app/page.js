import AboutSection from '@/components/about/AboutSection';
import Hero from '@/components/hero/hero';
import Navbar from '@/components/Navbar';
import Services from '@/components/services/Services';
import Stats from '@/components/stats/Stats';
import Marquee from "@/components/marquee/marquee";
import Project from "@/components/projects/project";
import Partners from "@/components/partners/partners";
import Contact from '@/components/contact/contact';
import Slider from '@/components/slider/slider';
import Testimonial from "@/components/testimonial/testimonial";
import Footer from "@/components/footer/footer";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Marquee />
      <AboutSection />
      <Project />
      <Partners />
      <Contact />
      <Slider />
      <Testimonial />
      <Footer />
    </main>
  );
}
