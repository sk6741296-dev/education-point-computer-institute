import { Star, MessageSquare, CheckCircle2, Award } from "lucide-react";

export default function TrustStrip() {
  return (
    <section className="bg-slate-100 border-b border-slate-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-semibold text-slate-700">
          <div className="flex items-center justify-center gap-2 py-1">
            <div className="flex text-saffron-600">
              <Star className="w-4 h-4 fill-current" />
            </div>
            <span><strong>4.9</strong> Google Rating</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-1">
            <MessageSquare className="w-4 h-4 text-brand-900" />
            <span><strong>40</strong> Verified Reviews</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-1">
            <Award className="w-4 h-4 text-brand-900" />
            <span><strong>Est. 2018</strong> • 5,000+ Students</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Courses from <strong>₹2,000</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}

