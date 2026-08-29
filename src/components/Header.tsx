"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Clock, Menu, X, PhoneCall, MapPin } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Education+Point+Computer+Institute&query_place_id=ChIJw3JwIG8bDTkR2SqHwJnxjQM";

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-brand-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Prominent Computer Education Center since 2018</span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden md:inline text-slate-400">Palam, New Delhi</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+918860512610"
              className="flex items-center gap-1.5 hover:text-saffron-400 transition-colors font-semibold text-white focus:outline-none focus:ring-1 focus:ring-saffron-400 rounded px-1"
            >
              <Phone className="w-3.5 h-3.5 text-saffron-400" />
              <span>+91 88605 12610</span>
            </a>
            <span className="text-slate-700">|</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-saffron-400" />
              <span>Mon - Fri: 10 AM - 6 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Business Branding & Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-900 rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden relative flex-shrink-0 border border-slate-200 shadow-sm bg-brand-950">
                <Image
                  src="/icon.svg"
                  alt="Education Point Computer Institute logo"
                  fill
                  sizes="40px"
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-brand-950 block leading-tight">
                  Education Point Computer Institute (Regd.)
                </span>
                <span className="text-xs font-semibold text-slate-500 block">
                  एजुकेशन पॉइंट कंप्यूटर इंस्टीट्यूट (रेगड.) • Computer Education Center
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
              <a href="#" className="text-brand-900 hover:text-brand-600 transition-colors focus:outline-none focus:underline">
                Home
              </a>
              <a href="#about" className="hover:text-brand-600 transition-colors focus:outline-none focus:underline">
                About
              </a>
              <a href="#learning" className="hover:text-brand-600 transition-colors focus:outline-none focus:underline">
                Courses
              </a>
              <a href="#reviews" className="hover:text-brand-600 transition-colors focus:outline-none focus:underline">
                Reviews
              </a>
              <a href="#gallery" className="hover:text-brand-600 transition-colors focus:outline-none focus:underline">
                Gallery
              </a>
              <a href="#contact" className="hover:text-brand-600 transition-colors focus:outline-none focus:underline">
                Contact
              </a>
            </nav>

            {/* Primary CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:+918860512610"
                className="px-4 py-2.5 rounded-lg bg-brand-900 hover:bg-brand-800 text-white font-bold text-sm shadow-sm transition-all flex items-center gap-2 focus:ring-2 focus:ring-offset-2 focus:ring-brand-900 focus:outline-none"
              >
                <PhoneCall className="w-4 h-4 text-saffron-400" />
                <span>Call Now</span>
              </a>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-colors flex items-center gap-1.5 focus:ring-2 focus:ring-brand-900 focus:outline-none"
              >
                <MapPin className="w-4 h-4 text-brand-900" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Mobile Navigation Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 space-y-3 shadow-xl">
            <a
              href="#"
              onClick={closeMenu}
              className="block py-2 font-semibold text-brand-900 border-b border-slate-100"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="block py-2 font-semibold text-slate-700 border-b border-slate-100"
            >
              About
            </a>
            <a
              href="#learning"
              onClick={closeMenu}
              className="block py-2 font-semibold text-slate-700 border-b border-slate-100"
            >
              Courses & Fees
            </a>
            <a
              href="#reviews"
              onClick={closeMenu}
              className="block py-2 font-semibold text-slate-700 border-b border-slate-100"
            >
              Reviews (4.9 ★)
            </a>
            <a
              href="#gallery"
              onClick={closeMenu}
              className="block py-2 font-semibold text-slate-700 border-b border-slate-100"
            >
              Gallery
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block py-2 font-semibold text-slate-700 border-b border-slate-100"
            >
              Contact & Hours
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:+918860512610"
                className="w-full py-3 rounded-lg bg-brand-900 text-white font-bold text-center text-sm flex justify-center items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-saffron-400" />
                <span>Call Now: +91 88605 12610</span>
              </a>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg border border-slate-300 text-slate-800 font-semibold text-center text-sm flex justify-center items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-brand-900" />
                <span>Get Directions (Palam, New Delhi)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

