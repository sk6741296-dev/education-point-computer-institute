import { Star } from "lucide-react";

interface ReviewItem {
  name: string;
  role: string;
  text: string;
  rating: number;
}

const reviewsData: ReviewItem[] = [
  {
    name: "Darpan Sharma",
    role: "Verified Google Reviewer",
    text: "“Excellent teaching facilities with very affordable fee. The teacher is very experienced and has a great understanding in his subject which is reflected in his teachings. He cleared my doubts and helped me even after the completion of course. Big thumbs up for the institute and the teacher.”",
    rating: 5,
  },
  {
    name: "Dharmender kumar",
    role: "Verified Google Reviewer",
    text: "“Excellent computer institute in west delhi and well experienced, knowledgeable teacher and guide. Mujhe bhut hi dhya se sikhaya gya and meri computer knowledge ko behtar banaya. Thanks to EDUCATION POINT COMPUTER INSTITUTE.”",
    rating: 5,
  },
  {
    name: "Purnima khadka",
    role: "Verified Google Reviewer",
    text: "“Teachers hype you up, clear every doubt, fees don’t make you cry. My computer skills went from 10 to 100 real quick. No worries, just join, that's it!!”",
    rating: 5,
  },
  {
    name: "Aadesh Aadesh",
    role: "Verified Google Reviewer",
    text: "“Best place for computer practice and learning, affordable fees, good teaching. Nice teacher with less fees.”",
    rating: 5,
  },
  {
    name: "Pradeep Singh",
    role: "Verified Google Reviewer",
    text: "“Best place for computer practice and learning, affordable fees, good teaching”",
    rating: 5,
  },
  {
    name: "Hema Kumari",
    role: "Verified Google Reviewer",
    text: "“Cheap and best computer education.”",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold text-amber-800">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Google Reviews</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Verified Student Feedback
          </h2>
          <div className="flex items-center justify-center gap-2 pt-1">
            <div className="flex text-saffron-500">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <span className="text-xl font-extrabold text-slate-900">4.9 / 5.0</span>
            <span className="text-slate-500 text-sm font-medium">(40 Google Reviews)</span>
          </div>
        </div>

        {/* Verbatim Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((rev, index) => (
            <div
              key={index}
              className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-saffron-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                    Google Review
                  </span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">{rev.text}</p>
              </div>
              <div className="pt-3 border-t border-slate-200">
                <p className="font-bold text-slate-900 text-sm">{rev.name}</p>
                <p className="text-xs text-slate-500">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

