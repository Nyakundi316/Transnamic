import Hero2 from "@/components/hero2/hero2";
import FunFact from "@/components/fun-fact/funFact";
import AboutSection from "@/components/about/AboutSection";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "About — Transnamic",
  description: "Learn about Transnamic's history, mission, and values.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Hero2 />
      <AboutSection />
      <FunFact />
      <Footer />
    </main>
  );
}
