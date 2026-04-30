"use client";

import Image from "next/image";
import { Send, Instagram, Twitter, Facebook, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border/50 shadow-sm">
          <div className="relative min-h-[400px] lg:min-h-0">
            <Image
              src="/Nairobi.jpeg"
              alt="Nairobi cityscape"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

            <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
                  Contact Us
                </span>
                <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Start your project<br />with us.
                </h2>
              </div>

              <div>
                <p className="text-white/70 leading-relaxed max-w-sm text-sm">
                  Ready to discuss your next construction or logistics project? Our team is standing by to help turn your vision into reality.
                </p>
                <div className="mt-4 text-white/60 text-sm space-y-1">
                  <p>2nd Floor, Luqman Mlolongo, Mombasa Rd</p>
                  <p>P.O. Box 76272 – 00508, Nairobi</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  {[
                    { icon: Instagram, label: 'IG' },
                    { icon: Twitter, label: 'TW' },
                    { icon: Facebook, label: 'FB' },
                    { icon: Phone, label: 'WS' },
                  ].map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Send a message
            </p>
            <h3 className="mt-2 text-2xl font-bold text-foreground">
              Request a call back
            </h3>

            <form className="mt-8 flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3.5 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-red-700/30 focus:border-red-700 transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-red-700/30 focus:border-red-700 transition-all"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-red-700/30 focus:border-red-700 transition-all"
              />
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full px-4 py-3.5 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-red-700/30 focus:border-red-700 transition-all resize-none"
              />

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  className="mt-0.5 rounded border-border accent-red-700"
                  required
                />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  I agree to the terms of service and privacy policy.
                </span>
              </label>

              <button
                type="submit"
                className="mt-2 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold bg-red-700 hover:bg-red-800 text-white rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-red-700/20"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
