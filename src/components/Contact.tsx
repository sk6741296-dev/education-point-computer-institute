import { MapPin, PhoneCall, Navigation } from "lucide-react";

export default function Contact() {
  const phone = "+91 88605 12610";
  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=Education+Point+Computer+Institute&query_place_id=ChIJw3JwIG8bDTkR2SqHwJnxjQM";
  const whatsappUrl =
    "https://wa.me/918860512610?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20the%20computer%20courses%20at%20Education%20Point%20Computer%20Institute.";

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-brand-900 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
            Location & Contact
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Visit Education Point Computer Institute
          </h2>
          <p className="text-slate-600 text-base">
            Palam, New Delhi
          </p>
        </div>

        {/* Contact & Location Card */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-8">
          
          <div className="space-y-6">
            
            {/* Title */}
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="w-10 h-10 rounded-lg bg-brand-900 text-saffron-400 flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-950 text-lg sm:text-xl">Education Point Computer Institute (Regd.)</h3>
                <p className="text-xs font-semibold text-slate-500">एजुकेशन पॉइंट कंप्यूटर इंस्टीट्यूट (रेगड.)</p>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-1">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Exact Business Address</p>
              <p className="text-slate-800 font-medium text-base sm:text-lg leading-relaxed">
                Pillar No. 47-48, Dwarka Flyover, 36 A, Near Divya Prastha Hospital,<br className="hidden sm:inline" />
                part 1, Raj Nagar II Extension, Palam, New Delhi, Delhi 110077, India
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Phone */}
              <div className="space-y-1">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone</p>
                <a
                  href="tel:+918860512610"
                  className="text-brand-900 font-extrabold text-xl hover:underline block focus:outline-none focus:ring-2 focus:ring-brand-900 rounded"
                >
                  {phone}
                </a>
              </div>

              {/* Opening Hours */}
              <div className="space-y-1">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Opening Hours</p>
                <p className="text-slate-800 text-sm font-semibold">Monday – Friday: 10:00 AM – 6:00 PM</p>
                <p className="text-slate-500 text-xs font-medium">Saturday & Sunday: Closed</p>
              </div>
            </div>

          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href="tel:+918860512610"
              className="py-3.5 px-4 rounded-xl bg-brand-900 hover:bg-brand-800 text-white font-extrabold text-sm shadow-sm transition-all flex items-center justify-center gap-2 focus:ring-2 focus:ring-offset-2 focus:ring-brand-900 focus:outline-none"
            >
              <PhoneCall className="w-4 h-4 text-saffron-400" />
              <span>CALL NOW</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-sm transition-all flex items-center justify-center gap-2 focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 focus:outline-none"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
              </svg>
              <span>CHAT ON WHATSAPP</span>
            </a>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-4 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-slate-950 font-extrabold text-sm shadow-sm transition-all flex items-center justify-center gap-2 focus:ring-2 focus:ring-offset-2 focus:ring-saffron-500 focus:outline-none"
            >
              <Navigation className="w-4 h-4" />
              <span>GET DIRECTIONS</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

