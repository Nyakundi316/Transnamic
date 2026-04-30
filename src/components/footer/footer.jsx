import Link from 'next/link';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

const services = [
  'Road Freight',
  'Construction',
  'Borehole Drilling',
  'Grading & Excavation',
];

const socials = [
  { href: 'https://www.instagram.com/', label: 'Instagram' },
  { href: 'https://x.com/', label: 'Twitter' },
  { href: 'https://www.facebook.com/', label: 'Facebook' },
  { href: 'https://web.whatsapp.com/', label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-10 pt-20 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-bold tracking-tight logo-font">Transnamic</span>
            </Link>
            <p className="mt-4 text-background/50 leading-relaxed text-sm max-w-xs">
              Unparalleled service delivery in equipment leasing, logistics & construction across East and Central Africa.
            </p>
            <div className="mt-6 flex flex-col gap-2.5">
              <div className="flex items-start gap-2 text-sm text-background/60">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>2nd Floor, Luqman Mlolongo, Mombasa Rd<br />P.O. Box 76272 – 00508, Nairobi, Kenya</span>
              </div>
              <a href="mailto:info@transnamic.co.ke" className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
                <Mail className="h-4 w-4" />
                info@transnamic.co.ke
              </a>
              <a href="tel:+254721150988" className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
                <Phone className="h-4 w-4" />
                +254 721 150 988
              </a>
              <a href="tel:+254725631164" className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors pl-6">
                +254 725 631 164
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/40 mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/40 mb-6">Services</h4>
            <div className="flex flex-col gap-3">
              {services.map((s) => (
                <Link key={s} href="/services" className="text-sm text-background/60 hover:text-background transition-colors">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/40 mb-6">Stay Connected</h4>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-background/10 text-sm text-background/60 hover:text-background hover:border-background/25 transition-all"
                >
                  {social.label}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="https://www.transnamic.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors"
              >
                www.transnamic.co.ke
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/30">
            &copy; {new Date().getFullYear()} Transnamic Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-background/30 hover:text-background/50 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-background/30 hover:text-background/50 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
