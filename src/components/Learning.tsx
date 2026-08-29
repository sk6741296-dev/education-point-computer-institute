import { Monitor, Award, Palette, GraduationCap } from "lucide-react";

export default function Learning() {
  const courses = [
    {
      title: "Computer Basic Certificate",
      fee: "₹2,000",
      description: "Foundational computer operations, essential software literacy, and practical digital skills.",
      icon: Monitor,
      highlight: "Certified Basic Program",
    },
    {
      title: "Diploma Course",
      fee: "₹4,000",
      description: "Comprehensive computer diploma program covering practical computer applications and tools.",
      icon: Award,
      highlight: "Complete Diploma Course",
    },
    {
      title: "DTP Courses (Photoshop & CorelDRAW)",
      fee: "Affordable Fee",
      description: "Desktop Publishing (DTP) training focused on image editing and vector graphic design.",
      icon: Palette,
      highlight: "Design Software Training",
    },
    {
      title: "BCA & MCA Academic Support",
      fee: "Course Guidance",
      description: "Advanced program support, lab guidance, and course foundation for BCA & MCA students.",
      icon: GraduationCap,
      highlight: "Higher Education Guidance",
    },
  ];

  return (
    <section id="learning" className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-brand-900 uppercase tracking-widest bg-brand-100 px-3 py-1 rounded-full">
            Courses & Programs
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Offerings & Fee Structure
          </h2>
          <p className="text-slate-600 text-base">
            Affordable, high-quality computer education designed for learners, youth, and advanced students.
          </p>
        </div>

        {/* 4 Verified Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-900 flex items-center justify-center border border-brand-100">
                      <Icon className="w-5 h-5 text-brand-900" />
                    </div>
                    <span className="text-[11px] font-bold text-saffron-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                      {c.highlight}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">{c.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{c.description}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Fee:</span>
                  <span className="text-base font-extrabold text-brand-950">{c.fee}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enquiry CTA Banner */}
        <div className="mt-12 max-w-4xl mx-auto bg-brand-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md border border-brand-800">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold">Interested in joining a computer course?</h4>
            <p className="text-xs sm:text-sm text-slate-300">Call or message us directly for admission details and batch schedules.</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="tel:+918860512610"
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg bg-saffron-500 hover:bg-saffron-600 text-slate-950 font-extrabold text-sm shadow-sm transition-all text-center"
            >
              Call +91 88605 12610
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}


