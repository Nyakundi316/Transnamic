"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export function NavLinks() {
  return (
    <div className="hidden md:flex items-center space-x-5">
      {navLinks.map((link, i) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Link
            href={link.href}
            className="relative text-gray-600 dark:text-gray-300 font-medium group transition duration-200 p-[0.4rem]"
          >
            <span className="absolute inset-0 rounded-md bg-gray-200 dark:bg-gray-700 opacity-0 group-hover:opacity-20 group-hover:scale-105 transform transition-all duration-500"></span>
            <span className="relative z-10 group-hover:text-red-600 dark:group-hover:text-red-400">
              {link.label}
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}