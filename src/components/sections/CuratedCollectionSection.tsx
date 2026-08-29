import Image from "next/image";
import { STORE_INFO } from "@/data/storeInfo";
import { Sparkles, MapPin } from "lucide-react";

export function CuratedCollectionSection() {
  return (
    <section id="collection" className="py-20 lg:py-32 bg-silk border-b border-taupe/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-champagne-dark mb-3 block">
            Store Showcase
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-obsidian tracking-tight mb-6">
            Curated Collection
          </h2>
          <p className="text-base text-taupe leading-relaxed font-normal">
            Explore the style and visual character of {STORE_INFO.name} through a thoughtfully presented collection showcase.
          </p>
        </div>

        {/* Editorial Asymmetric Image Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Main Editorial Feature Card */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-xl border border-white/80 bg-obsidian">
              <Image
                src={STORE_INFO.images.interior}
                alt="FASHION STORY boutique store interior and collection display"
                fill
                className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl glass-dark border border-white/10 text-silk">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne/20 border border-champagne/40 text-champagne text-[10px] font-bold tracking-widest uppercase mb-3">
                  <Sparkles className="w-3 h-3 text-champagne" />
                  Store Collection
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-silk mb-2">
                  Boutique Atmosphere & Curated Styles
                </h3>
                <p className="text-xs text-silk/80 font-light leading-relaxed">
                  Step inside {STORE_INFO.name} in Ashok Vihar to discover clothing curated for personal style and everyday elegance.
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Editorial Feature Card */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[4/3] sm:aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl border border-white/80 bg-obsidian">
              <Image
                src={STORE_INFO.images.exterior}
                alt="FASHION STORY boutique storefront in Ashok Vihar Phase 3"
                fill
                className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl glass-dark border border-white/10 text-silk">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-silk text-[10px] font-bold tracking-widest uppercase mb-3">
                  <MapPin className="w-3 h-3 text-champagne" />
                  Signature Style
                </div>
                <h3 className="font-serif text-xl font-normal text-silk mb-2">
                  Ashok Vihar Fashion Destination
                </h3>
                <p className="text-xs text-silk/80 font-light leading-relaxed">
                  Located in Phase 3, Pocket A Road. Visit in person to experience the latest trends firsthand.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Editorial Storytelling Note */}
        <div className="p-8 rounded-2xl bg-white border border-taupe/15 shadow-boutique text-center max-w-3xl mx-auto">
          <p className="font-serif italic text-lg text-obsidian mb-2">
            “You are going to have an experience of the best of fashion world in this shop.”
          </p>
          <p className="text-xs text-taupe font-semibold tracking-wider uppercase">
            — Verified Google Visitor Review
          </p>
        </div>

      </div>
    </section>
  );
}
