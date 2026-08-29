"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/images/image001.jpg",
    alt: "Education Point Computer Institute entrance and signboard",
    title: "Education Point Center",
    subtitle: "Institute Signboard & Entrance",
  },
  {
    src: "/images/image010.jpg",
    alt: "Computer basics practical training session at Education Point Computer Institute",
    title: "Computer Basics Training",
    subtitle: "Practical software drills",
  },
  {
    src: "/images/image014.jpg",
    alt: "Student operating desktop workstation at Education Point Computer Institute",
    title: "Desktop Workstation Session",
    subtitle: "Interactive lab practice",
  },
  {
    src: "/images/image018.jpg",
    alt: "Practical skill training session at Education Point Computer Institute",
    title: "Practical Skill Drills",
    subtitle: "Desktop computer operation",
  },
  {
    src: "/images/image020.jpg",
    alt: "Classroom learning environment with students at Education Point Computer Institute",
    title: "Classroom Learning",
    subtitle: "Student batch at computer desks",
  },
  {
    src: "/images/image027.jpg",
    alt: "Computer lab workstation practice at Education Point Computer Institute",
    title: "Workstation Practice",
    subtitle: "Practical lab environment",
  },
  {
    src: "/images/image030.jpg",
    alt: "Students practicing documents and spreadsheets on computers at Education Point Computer Institute",
    title: "Document & Office Tools",
    subtitle: "Spreadsheet & typing exercises",
  },
];

export default function Gallery() {
  const [activeLightbox, setActiveLightbox] = useState<{ src: string; caption: string } | null>(null);

  const openLightbox = (src: string, caption: string) => {
    setActiveLightbox({ src, caption });
  };

  const closeLightbox = () => {
    setActiveLightbox(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };
    if (activeLightbox) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeLightbox]);

  return (
    <section id="gallery" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
          <div>
            <span className="text-xs font-bold text-brand-900 uppercase tracking-widest bg-brand-100 px-3 py-1 rounded-full">
              Real Business Photography
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              Institute Gallery Showcase
            </h2>
            <p className="text-slate-600 text-sm">Click any photograph to open full-screen lightbox view.</p>
          </div>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Main Feature (2x2 on Large) */}
          <div
            className="lg:col-span-2 lg:row-span-2 bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group cursor-pointer"
            onClick={() => openLightbox("/images/image006.jpg", "Computer Learning Lab - Education Point Computer Institute")}
          >
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full w-full overflow-hidden bg-slate-900 relative">
              <Image
                src="/images/image006.jpg"
                alt="Computer Learning Lab at Education Point Computer Institute"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                <div className="text-white">
                  <span className="bg-saffron-500 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
                    Main Feature
                  </span>
                  <h3 className="font-extrabold text-lg sm:text-xl mt-1">Computer Learning Lab</h3>
                  <p className="text-xs text-slate-300">Desktop computer setup in Palam, New Delhi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining 7 Grid Items */}
          {galleryItems.slice(0, 7).map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm group cursor-pointer"
              onClick={() => openLightbox(item.src, `${item.title} - ${item.subtitle}`)}
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900 relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3">
                <p className="font-bold text-slate-900 text-sm">{item.title}</p>
                <p className="text-xs text-slate-500">{item.subtitle}</p>
              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Interactive Lightbox Overlay */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors focus:outline-none focus:ring-2 focus:ring-saffron-400"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl w-full text-center space-y-3" onClick={(e) => e.stopPropagation()}>
            <div className="relative max-h-[80vh] h-[70vh] w-full">
              <Image
                src={activeLightbox.src}
                alt={activeLightbox.caption}
                fill
                className="object-contain rounded-lg shadow-2xl"
              />
            </div>
            <p className="text-white text-sm font-semibold">{activeLightbox.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}

