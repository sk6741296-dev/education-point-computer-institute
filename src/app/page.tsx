import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { CuratedCollectionSection } from "@/components/sections/CuratedCollectionSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { VisitSection } from "@/components/sections/VisitSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-silk text-obsidian antialiased selection:bg-champagne selection:text-obsidian">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Curated Collection Curation */}
        <CuratedCollectionSection />

        {/* 3. About the Boutique */}
        <AboutSection />

        {/* 4. Customer Social Proof & Reviews */}
        <ReviewsSection />

        {/* 5. Visit Us, Map & Hours Schedule */}
        <VisitSection />
      </main>

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
}
