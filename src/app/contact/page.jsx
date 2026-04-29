import ContactHero from "@/components/contact/ContactHero";
import ContactDetails from "@/components/contact/ContactDetails";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "Contact — Transnamic",
  description: "Get in touch with Transnamic for your construction and logistics needs.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactDetails />
      <Contact />
      <Footer />
    </main>
  );
}
