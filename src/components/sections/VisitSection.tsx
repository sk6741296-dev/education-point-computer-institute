import { STORE_INFO } from "@/data/storeInfo";
import { MapPin, Phone, Clock, Navigation, ExternalLink } from "lucide-react";

export function VisitSection() {
  return (
    <section id="visit" className="py-20 lg:py-32 bg-silk border-b border-taupe/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-champagne-dark mb-3 block">
            Location & Hours
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-obsidian tracking-tight mb-6">
            Visit {STORE_INFO.name}
          </h2>
          <p className="text-base text-taupe leading-relaxed font-normal">
            Find us in Ashok Vihar, Delhi and explore the collection in person.
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Complete Address, Phone & Opening Hours */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Complete Address Card */}
            <div className="p-8 rounded-2xl bg-white border border-taupe/15 shadow-boutique">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-obsidian text-silk flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-champagne" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-taupe">Exact Address</h3>
                  <p className="font-serif text-xl font-normal text-obsidian">Ashok Vihar</p>
                </div>
              </div>

              {/* Exact Unaltered Character-by-Character Address */}
              <p className="text-sm text-obsidian/90 font-medium leading-relaxed mb-6">
                Phase 3, 1A, Pocket A Road, Ashok Vihar II, Pocket B, Ashok Vihar, Delhi, 110052, India
              </p>

              {/* Primary Contact CTAs */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={STORE_INFO.address.googleMapsDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-obsidian text-silk hover:bg-champagne-dark transition-all duration-300 text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-gold"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>

                <a
                  href={`tel:${STORE_INFO.phone.raw}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-obsidian/30 text-obsidian hover:bg-obsidian hover:text-silk transition-all duration-300 text-xs font-bold uppercase tracking-wider"
                >
                  <Phone className="w-4 h-4" />
                  Call Store
                </a>
              </div>
            </div>

            {/* Complete 7-Day Opening Hours Schedule */}
            <div className="p-8 rounded-2xl bg-white border border-taupe/15 shadow-boutique">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-obsidian text-silk flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-champagne" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-taupe">Store Opening Hours</h3>
                  <p className="font-serif text-xl font-normal text-obsidian">Open 7 Days a Week</p>
                </div>
              </div>

              <div className="space-y-3">
                {STORE_INFO.hours.map((schedule, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs py-2 border-b border-taupe/10 last:border-0"
                  >
                    <span className="font-semibold text-obsidian">{schedule.day}</span>
                    <span className="font-medium text-taupe bg-silk px-3 py-1 rounded-md border border-taupe/10">
                      {schedule.formatted}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Phone Call Card */}
            <div className="p-6 rounded-2xl bg-obsidian text-silk shadow-xl flex items-center justify-between gap-4 border border-white/10">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-champagne mb-1">
                  Phone Inquiry
                </p>
                <a
                  href={`tel:${STORE_INFO.phone.raw}`}
                  className="font-serif text-xl sm:text-2xl font-light text-silk hover:text-champagne transition-colors"
                >
                  {STORE_INFO.phone.display}
                </a>
              </div>

              <a
                href={`tel:${STORE_INFO.phone.raw}`}
                className="p-3.5 rounded-full bg-champagne text-obsidian hover:bg-white transition-colors"
                aria-label={`Call ${STORE_INFO.phone.display}`}
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Location Card & Visual */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="rounded-2xl border border-taupe/15 shadow-boutique bg-white p-4 space-y-4">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-silk">
                <iframe
                  title="FASHION STORY Boutique Google Maps Location"
                  src={STORE_INFO.address.googleMapsEmbedUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-3 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs font-bold text-obsidian uppercase tracking-wider">
                    {STORE_INFO.name}
                  </h4>
                  <p className="text-[11px] text-taupe font-medium">
                    Ashok Vihar Phase 3, Delhi - 110052
                  </p>
                </div>

                <a
                  href={STORE_INFO.address.googleMapsDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-silk border border-taupe/20 text-xs font-bold text-obsidian hover:bg-obsidian hover:text-silk transition-all uppercase tracking-wider whitespace-nowrap"
                >
                  Open Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
