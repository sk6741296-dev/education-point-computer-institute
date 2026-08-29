import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

export default function About() {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Education+Point+Computer+Institute&query_place_id=ChIJw3JwIG8bDTkR2SqHwJnxjQM";

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Supporting Image */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100 aspect-[4/3] relative">
              <Image
                src="/images/image020.jpg"
                alt="Students practicing at computer desks at Education Point Computer Institute"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Text Copy */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-brand-900 uppercase tracking-widest bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
              About Education Point Institute
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Prominent Digital Literacy & Computer Center in Palam
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Established in 2018, Education Point Computer Institute (Regd.) is a prominent computer education center dedicated to digital literacy and practical skills training in Palam, New Delhi.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Having educated over 5,000 students across schools, institutes, and community learners, our institute provides affordable and high-quality computer education. Student reviews highlight dedicated instructors, including Mr. Vikram Vats, who ensure doubts are thoroughly cleared in an encouraging environment.
            </p>
            
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+918860512610"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-brand-900 hover:bg-brand-800 text-white font-bold text-sm transition-colors focus:ring-2 focus:ring-brand-900 focus:outline-none"
              >
                <Phone className="w-4 h-4 text-saffron-400" />
                <span>Call +91 88605 12610</span>
              </a>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-colors focus:ring-2 focus:ring-brand-900 focus:outline-none"
              >
                <MapPin className="w-4 h-4 text-brand-900" />
                <span>Visit Us in Palam</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

