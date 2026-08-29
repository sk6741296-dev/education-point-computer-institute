import Image from "next/image";
import { STORE_INFO } from "@/data/storeInfo";
import { Star, MapPin, ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-silk min-h-[calc(100vh-110px)] flex flex-col justify-center border-b border-taupe/10 overflow-hidden py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 flex flex-col justify-center animate-fade-in">
            
            {/* Understated Location & Boutique Tag */}
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-taupe/20 bg-white text-obsidian text-xs font-semibold tracking-wider uppercase shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-champagne-dark" />
                {STORE_INFO.address.locality}, {STORE_INFO.address.city}
              </span>
              
              <span className="hidden sm:inline text-taupe/40">•</span>
              
              <span className="hidden sm:inline text-xs font-medium text-taupe uppercase tracking-widest">
                Clothing Boutique
              </span>
            </div>

            {/* Semantic Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-obsidian tracking-tight leading-[1.08] mb-6">
              Where <span className="italic font-normal text-taupe-dark">Fashion</span> Meets Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-medium">Style</span>
                <span className="absolute bottom-1 left-0 right-0 h-2 bg-champagne/20 -z-10 rounded-sm" />
              </span>
            </h1>

            {/* Supporting Copy strictly adhering to provided data */}
            <p className="text-base sm:text-lg text-taupe max-w-xl font-normal leading-relaxed mb-8">
              Discover a curated collection of contemporary fashion and timeless styles at{" "}
              <strong className="text-obsidian font-semibold">{STORE_INFO.name}</strong>, Ashok Vihar.
            </p>

            {/* Understated Rating Element */}
            <div className="flex items-center gap-3 mb-10 p-3 px-4 rounded-xl bg-white/80 border border-taupe/15 self-start shadow-sm">
              <div className="flex text-champagne-dark" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-champagne-dark text-champagne-dark" />
                ))}
              </div>
              <div className="h-4 w-px bg-taupe/20" />
              <span className="text-xs font-bold text-obsidian tracking-wide">
                5.0 Google Rating
              </span>
              <span className="text-xs text-taupe font-medium">
                (10 Reviews)
              </span>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#collection"
                className="px-8 py-4 rounded-full bg-obsidian text-silk hover:bg-champagne-dark focus:ring-2 focus:ring-champagne focus:ring-offset-2 transition-all duration-300 text-xs font-bold tracking-[0.15em] uppercase text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-gold"
              >
                <span>Explore Collection</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#visit"
                className="px-8 py-4 rounded-full border border-obsidian/30 text-obsidian hover:border-obsidian hover:bg-obsidian/5 focus:ring-2 focus:ring-obsidian focus:ring-offset-2 transition-all duration-300 text-xs font-bold tracking-[0.15em] uppercase text-center flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-champagne-dark" />
                <span>Visit Store</span>
              </a>
            </div>

          </div>

          {/* Right Column: Authentic Editorial Store Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/80 group">
              <Image
                src={STORE_INFO.images.exterior}
                alt="FASHION STORY storefront in Ashok Vihar, Delhi"
                fill
                priority
                className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              
              {/* Subtle Vignette for Contrast & Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent pointer-events-none" />

              {/* Minimal Brand Overlay Label */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-dark border border-white/10 text-silk">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-champagne mb-1">
                  Boutique Location
                </p>
                <p className="text-xs font-serif italic text-silk/90">
                  {STORE_INFO.address.locality}, Ashok Vihar II
                </p>
              </div>
            </div>

            {/* Subtle Gold Frame Accent */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-champagne/30 rounded-2xl -z-10 hidden sm:block pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
