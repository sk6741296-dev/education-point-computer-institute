import Image from "next/image";
import { STORE_INFO } from "@/data/storeInfo";
import { Star, MapPin, Clock, MessageSquare } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-silk border-b border-taupe/10 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Split Layout: Narrative & Interior Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column: Editorial Heading & Verified Location Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Subtle Decorative Accent */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-champagne-dark" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-champagne-dark">
                The Boutique Identity
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-obsidian tracking-tight mb-6 leading-tight">
              Fashion, Curated for <span className="italic font-normal text-taupe-dark">Your Style</span>
            </h2>

            <p className="text-base text-taupe leading-relaxed mb-6 font-normal">
              <strong className="text-obsidian font-semibold">{STORE_INFO.name}</strong> is a dedicated clothing store situated in Ashok Vihar, Delhi. We focus on presenting a curated collection of fashion pieces designed to reflect personal style and contemporary trends.
            </p>

            <p className="text-base text-taupe leading-relaxed mb-8 font-normal">
              Our boutique offers a welcoming physical atmosphere where local shoppers can browse clothing collections, experience fabrics firsthand, and enjoy thoughtful service.
            </p>

            {/* Verified Location Detail Card */}
            <div className="p-6 rounded-2xl bg-white border border-taupe/15 shadow-boutique flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-obsidian text-silk flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-champagne" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-obsidian mb-1">
                  Boutique Location
                </h3>
                <p className="text-xs text-taupe leading-relaxed">
                  Phase 3, 1A, Pocket A Road, Ashok Vihar II, Pocket B, Ashok Vihar, Delhi, 110052, India
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Interior Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/80 group">
              <Image
                src={STORE_INFO.images.interior}
                alt="Inside FASHION STORY clothing store in Ashok Vihar"
                fill
                className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent opacity-80" />

              {/* In-photo Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-dark border border-white/10 text-silk">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-champagne mb-0.5">
                  Physical Storefront
                </p>
                <p className="text-xs font-serif italic text-silk/90">
                  {STORE_INFO.name} • Ashok Vihar II, Delhi
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Part 3 — Factual Trust Details Strip */}
        <div className="p-8 sm:p-10 rounded-2xl bg-obsidian text-silk shadow-2xl grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left border border-white/10">
          
          {/* Trust Metric 1: Rating */}
          <div className="flex items-center gap-4 sm:border-r border-white/10 pr-4">
            <div className="w-12 h-12 rounded-xl bg-champagne/15 text-champagne flex items-center justify-center flex-shrink-0">
              <Star className="w-6 h-6 fill-champagne" />
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-silk">5.0 ★</div>
              <div className="text-xs text-silk/70 font-medium">Google Rating</div>
            </div>
          </div>

          {/* Trust Metric 2: Reviews */}
          <div className="flex items-center gap-4 sm:border-r border-white/10 pr-4">
            <div className="w-12 h-12 rounded-xl bg-champagne/15 text-champagne flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-6 h-6 text-champagne" />
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-silk">10</div>
              <div className="text-xs text-silk/70 font-medium">Google Reviews</div>
            </div>
          </div>

          {/* Trust Metric 3: Store Hours */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-champagne/15 text-champagne flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-champagne" />
            </div>
            <div>
              <div className="text-sm font-bold text-silk">Open Daily</div>
              <div className="text-xs text-silk/70 font-medium">10:30 AM – 9:00 PM</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
