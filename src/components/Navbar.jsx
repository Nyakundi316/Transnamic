"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { ModeToggle } from './Header/DarkModeSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/80 dark:bg-[#0d1321]/80 backdrop-blur-xl shadow-sm'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="relative flex h-11 w-32 flex-shrink-0 items-center rounded-lg bg-white/85 px-2 shadow-sm ring-1 ring-black/5 transition-colors dark:bg-white dark:ring-white/10 sm:w-36"
            aria-label="Transnamic home"
          >
            <Image
              src="/logo/logo-transparent.png"
              alt="Transnamic"
              width={246}
              height={67}
              priority
              className="h-auto w-full object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+254721150988" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="h-3.5 w-3.5" />
              +254 721 150 988
            </a>
            <ModeToggle />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-red-700 hover:bg-red-800 text-white rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-red-700/20"
            >
              Get in Touch
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-300 ease-out overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 pb-6 pt-2 bg-background/95 backdrop-blur-xl border-t border-border">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border/50 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold bg-red-700 text-white rounded-full"
          >
            Get in Touch
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
