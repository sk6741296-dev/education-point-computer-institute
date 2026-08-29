import { STORE_INFO } from "@/data/storeInfo";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export function ReviewsSection() {
  // Approved reviews curated specifically for quality & professionalism per Step 5 rules
  const featuredReview = {
    author: "Vanshika Vermani",
    rating: 5,
    comment:
      "You are going to have an experience of the best of fashion world in this shop. The best collection and the latest of trends. Do visit to experience it yourself.⭐",
  };

  const supportingReviews = [
    {
      author: "Deepak Pathak",
      rating: 5,
      comment: "Best selling products",
    },
    {
      author: "Neelam Yadav",
      rating: 5,
      comment: "Excellent callection",
    },
    {
      author: "Preeti Preeti",
      rating: 5,
      comment: "Nice collection",
    },
    {
      author: "BHAWNA CHAUHAN",
      rating: 5,
      comment: "Nice Collection 👍🏻",
    },
    {
      author: "Harsh Vermani",
      rating: 5,
      comment: "Wow nice collection 👍",
    },
  ];

  return (
    <section id="reviews" className="py-20 lg:py-32 bg-obsidian text-silk relative overflow-hidden scroll-mt-20">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-champagne/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header & Understated Rating Badge */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-champagne/30 bg-champagne/10 mb-6">
            <div className="flex text-champagne">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-champagne text-champagne" />
              ))}
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-champagne">
              5.0 Google Rating • 10 Reviews
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-silk tracking-tight mb-6">
            Words From Our Customers
          </h2>
          <p className="text-base text-silk/75 font-light max-w-2xl mx-auto leading-relaxed">
            5.0 stars from customers who appreciate the collection and fashion experience at {STORE_INFO.name}.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="p-8 sm:p-12 rounded-2xl bg-obsidian-light border border-champagne/40 shadow-2xl relative overflow-hidden group">
            {/* Subtle Gold Edge Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-champagne to-transparent opacity-80" />

            <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-8">
              <div>
                <div className="flex text-champagne mb-3" aria-label="5 out of 5 stars">
                  {[...Array(featuredReview.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-champagne text-champagne" />
                  ))}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-champagne">
                  Featured Testimonial
                </span>
              </div>
              
              <Quote className="w-10 h-10 text-champagne/20 group-hover:text-champagne/40 transition-colors" />
            </div>

            {/* Featured Quote Text */}
            <blockquote className="font-serif text-xl sm:text-2xl font-light italic text-silk leading-relaxed mb-8">
              “{featuredReview.comment}”
            </blockquote>

            {/* Reviewer Details */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg font-normal text-silk">
                  {featuredReview.author}
                </h3>
                <p className="text-xs text-taupe-light font-medium">Verified Shopper</p>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-silk/70">
                <CheckCircle2 className="w-3.5 h-3.5 text-champagne" />
                <span>Google Review</span>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Approved Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {supportingReviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-obsidian-light border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-champagne" aria-label="5 out of 5 stars">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-champagne text-champagne" />
                    ))}
                  </div>
                  <CheckCircle2 className="w-3.5 h-3.5 text-champagne/70" />
                </div>

                <p className="text-sm text-silk/90 font-light italic leading-relaxed mb-6">
                  “{rev.comment}”
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-silk">
                  {rev.author}
                </h4>
                <span className="text-[10px] text-silk/50 font-medium">Google Review</span>
              </div>
            </div>
          ))}
        </div>

        {/* Understated Rating Summary Strip */}
        <div className="p-8 rounded-2xl bg-obsidian-muted border border-white/10 text-center max-w-xl mx-auto flex flex-col items-center justify-center">
          <div className="text-3xl font-serif font-bold text-silk mb-1">5.0</div>
          <div className="flex text-champagne mb-2" aria-label="5 stars out of 5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-champagne text-champagne" />
            ))}
          </div>
          <p className="text-xs text-silk/70 font-medium">
            Based on 10 authentic Google Reviews for {STORE_INFO.name}
          </p>
        </div>

      </div>
    </section>
  );
}
