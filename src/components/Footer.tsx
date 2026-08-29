import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Brand & Address */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-white">
              <div className="w-9 h-9 rounded-lg overflow-hidden relative flex-shrink-0 border border-slate-700 bg-brand-950">
                <Image
                  src="/icon.svg"
                  alt="Education Point Computer Institute logo"
                  fill
                  sizes="36px"
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <p className="font-extrabold text-base text-white tracking-tight">Education Point Computer Institute (Regd.)</p>
                <p className="text-xs text-slate-400">एजुकेशन पॉइंट कंप्यूटर इंस्टीट्यूट (रेगड.)</p>
              </div>
            </div>
            <p className="text-xs text-saffron-400 font-semibold">Prominent Digital Literacy & Computer Education Center</p>
            <p className="text-xs text-slate-400 max-w-md">
              Pillar No. 47-48, Dwarka Flyover, 36 A, Near Divya Prastha Hospital, part 1, Raj Nagar II Extension, Palam, New Delhi, Delhi 110077, India
            </p>
            <div className="pt-1 text-xs text-slate-300 space-y-1">
              <p><span className="font-semibold text-slate-200">Phone:</span> <a href="tel:+918860512610" className="hover:text-saffron-400 transition-colors font-medium">+91 88605 12610</a></p>
              <p><span className="font-semibold text-slate-200">Hours:</span> Mon – Fri: 10:00 AM – 6:00 PM (Sat & Sun Closed)</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-6 text-xs font-semibold text-slate-300">
            <a href="#" className="hover:text-saffron-400 transition-colors focus:outline-none focus:underline">
              Home
            </a>
            <a href="#about" className="hover:text-saffron-400 transition-colors focus:outline-none focus:underline">
              About
            </a>
            <a href="#learning" className="hover:text-saffron-400 transition-colors focus:outline-none focus:underline">
              Courses
            </a>
            <a href="#reviews" className="hover:text-saffron-400 transition-colors focus:outline-none focus:underline">
              Reviews
            </a>
            <a href="#gallery" className="hover:text-saffron-400 transition-colors focus:outline-none focus:underline">
              Gallery
            </a>
            <a href="#contact" className="hover:text-saffron-400 transition-colors focus:outline-none focus:underline">
              Contact
            </a>
          </div>
        </div>

        <hr className="border-slate-800" />

        <div className="text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Education Point Computer Institute (Regd.). All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

