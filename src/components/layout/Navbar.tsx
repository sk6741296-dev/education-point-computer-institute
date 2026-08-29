"use client";

import { useState, useEffect } from "react";
import { STORE_INFO } from "@/data/storeInfo";
import { Phone, Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Collection", href: "#collection" },
    { name: "About", href: "#about" },
    { name: "Reviews", href: "#reviews" },
    { name: "Visit Us", href: "#visit" },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-obsidian text-silk text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 border-b border-white/10">
        <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
        <span>Open Daily in Ashok Vihar Phase 3 — 10:30 AM to 9:00 PM</span>
        <span className="hidden sm:inline text-taupe-light">|</span>
        <a
          href={`tel:${STORE_INFO.phone.raw}`}
          className="hidden sm:inline-flex items-center gap-1 text-champagne hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne rounded-sm"
        >
          <Phone className="w-3 h-3" />
          {STORE_INFO.phone.display}
        </a>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass-header shadow-boutique border-b border-taupe/10 py-3.5"
            : "bg-silk/90 backdrop-blur-md border-b border-taupe/10 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#");
            }}
            className="flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne rounded-sm"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-obsidian uppercase transition-colors group-hover:text-champagne-dark">
              {STORE_INFO.name}
            </span>
            <span className="text-[10px] tracking-[0.3em] font-semibold text-taupe uppercase -mt-0.5">
              Clothing Store • Ashok Vihar
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-obsidian/80 hover:text-champagne-dark transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne rounded-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-champagne-dark hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call Store Primary Action */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${STORE_INFO.phone.raw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-obsidian text-silk hover:bg-champagne-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne transition-all duration-300 text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-gold"
            >
              <Phone className="w-3.5 h-3.5 text-champagne" />
              Call Store
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-obsidian hover:bg-obsidian/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col bg-obsidian text-silk animate-fade-in">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-[0.2em] text-silk uppercase">
                {STORE_INFO.name}
              </span>
              <span className="text-[10px] tracking-[0.3em] font-semibold text-champagne uppercase">
                Ashok Vihar • Delhi
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-silk/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne rounded-lg"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 px-6 py-8 flex flex-col justify-between overflow-y-auto">
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="font-serif text-2xl font-light text-silk hover:text-champagne transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-8 border-t border-white/10 space-y-3">
              <a
                href={`tel:${STORE_INFO.phone.raw}`}
                className="w-full py-3.5 rounded-full bg-champagne text-obsidian font-bold text-center text-xs tracking-widest uppercase flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call {STORE_INFO.phone.display}
              </a>
              <a
                href={STORE_INFO.address.googleMapsDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full border border-white/20 text-silk font-semibold text-center text-xs tracking-widest uppercase text-center block"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
