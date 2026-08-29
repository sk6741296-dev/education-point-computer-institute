import { STORE_INFO } from "@/data/storeInfo";
import { Phone, MapPin, ArrowUp, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-obsidian text-silk border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand & Identity Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-silk uppercase">
                {STORE_INFO.name}
              </span>
              <span className="text-[10px] tracking-[0.3em] font-semibold text-champagne uppercase mt-0.5">
                {STORE_INFO.category} • Ashok Vihar, Delhi
              </span>
            </div>

            <p className="text-xs text-silk/70 font-light leading-relaxed max-w-md">
              Discover contemporary fashion and curated styles at {STORE_INFO.name} in Ashok Vihar.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-champagne">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium text-silk/70">
              <li>
                <a href="#" className="hover:text-champagne transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne rounded-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-champagne transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne rounded-sm">
                  Collection
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-champagne transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne rounded-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-champagne transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne rounded-sm">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-champagne transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne rounded-sm">
                  Visit Us
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Opening Hours */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-champagne">
              Store Information
            </h4>
            <div className="space-y-3 text-xs text-silk/70 leading-relaxed font-light">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
                <span>Phase 3, 1A, Pocket A Road, Ashok Vihar II, Pocket B, Ashok Vihar, Delhi, 110052, India</span>
              </p>
              
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-champagne flex-shrink-0" />
                <a
                  href={`tel:${STORE_INFO.phone.raw}`}
                  className="hover:text-silk transition-colors font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne rounded-sm"
                >
                  {STORE_INFO.phone.display}
                </a>
              </p>

              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-champagne flex-shrink-0" />
                <span>Daily · 10:30 AM – 9:00 PM</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-silk/50 font-light">
          <p>© 2026 {STORE_INFO.name}. All rights reserved.</p>

          <a
            href="#"
            className="flex items-center gap-1.5 hover:text-champagne transition-colors text-xs font-semibold uppercase tracking-wider focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne rounded-sm"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
