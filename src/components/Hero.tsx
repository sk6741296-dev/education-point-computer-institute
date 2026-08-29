import Image from "next/image";
import { Phone, MapPin, Star, Monitor } from "lucide-react";

export default function Hero() {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Education+Point+Computer+Institute&query_place_id=ChIJw3JwIG8bDTkR2SqHwJnxjQM";

  return (
    <section className="bg-brand-950 text-white py-12 lg:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-200 border border-white/15">
              <span className="w-2 h-2 rounded-full bg-saffron-400"></span>
              <span>Established 2018 • 5,000+ Students Educated</span>
            </div>

            <div className="space-y-2">
              <p className="text-saffron-400 font-bold text-sm sm:text-base tracking-wide uppercase">
                Education Point Computer Institute (Regd.)
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Quality & Affordable <br className="hidden sm:inline" />
                <span className="text-slate-100">Computer Education in Palam</span>
              </h1>
            </div>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
              Empowering students with practical digital literacy, basic computer certificates, DTP design courses, and advanced BCA & MCA study support.
            </p>

            {/* CTAs & Subtle Rating */}
            <div className="space-y-4 pt-1">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <a
                  href="tel:+918860512610"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-saffron-500 hover:bg-saffron-600 text-slate-950 font-extrabold text-base shadow-md transition-all flex items-center justify-center gap-2 focus:ring-2 focus:ring-saffron-400 focus:outline-none"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call / Enquire (+91 88605 12610)</span>
                </a>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 transition-all flex items-center justify-center gap-2 focus:ring-2 focus:ring-white focus:outline-none"
                >
                  <MapPin className="w-5 h-5 text-saffron-400" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Subtle Trust Indicator */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-300 pt-1">
                <div className="flex text-saffron-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="font-bold text-white">4.9</span>
                <span className="text-slate-400">• 40 Google Reviews</span>
              </div>
            </div>

          </div>

          {/* Right Column: Focal Hero Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-slate-900 aspect-[4/3] max-w-lg mx-auto lg:max-w-none">
              <Image
                src="/images/image006.jpg"
                alt="Computer training lab workstations at Education Point Computer Institute"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute bottom-0 inset-x-0 p-3.5 bg-brand-950/85 backdrop-blur-sm text-white border-t border-white/10 flex justify-between items-center text-xs">
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-saffron-400" />
                  <span className="font-semibold text-slate-200">Education Point Lab Workstations</span>
                </div>
                <span className="text-slate-400">Palam, Delhi</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

