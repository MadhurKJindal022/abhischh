import React from "react";
import Hero from "../components/Hero";
import FeatureBanner from "../components/FeatureBanner";
import CoverflowSection from "../components/CoverflowSection";
import CollectionsSection from "../components/CollectionsSection";
import BrandShowcase from "../components/BrandShowcase";
import LifestyleSection from "../components/LifestyleSection";

// New suggested sections
import TrendingProducts from "../components/TrendingProducts";
import Testimonials from "../components/Testimonials";
import StoreLocator from "../components/StoreLocator";
import NewsletterSignup from "../components/NewsletterSignup";
import InstagramShowcase from "../components/InstagramShowcase";

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Hero banner with CTA */}
      <Hero />

      {/* Highlight features like durability, style, etc. */}
      <FeatureBanner />

      {/* Interactive product carousel */}
      <CoverflowSection />

      {/* Lifestyle campaigns (photoshoots, fashion looks) */}
      <LifestyleSection />

      {/* 📷 Instagram lifestyle showcase */}
      <InstagramShowcase />

      {/* ⭐ Customer reviews */}
      <Testimonials />
      
    </div>
  );
}
