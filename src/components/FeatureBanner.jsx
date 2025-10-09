
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button"; // Use custom Button
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function FeatureBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden bg-black">
  {/* Background */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      alt="Luxury Watches"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
      <h2 className="luxury-text text-4xl lg:text-6xl font-bold text-white mb-6">
        Exclusive Luxury <span className="text-gold">Timepieces</span>
      </h2>
      <p className="modern-text text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
        Discover our curated collection of the world's most prestigious watches,
        each piece representing the pinnacle of horological craftsmanship.
      </p>
      <Link to={createPageUrl("Brands")}>
  <Button asChild>
    <span
      className="bg-gold text-black font-semibold px-6 py-3 
                 rounded-xl border-2 border-gold 
                 shadow-[0_0_15px_rgba(255,215,0,0.6)] 
                 hover:bg-black hover:text-gold 
                 hover:shadow-[0_0_25px_rgba(255,215,0,0.9)] 
                 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
    >
      View OUR Collection
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
    </span>
  </Button>
</Link>
    </div>
  </div>
</section>
  );
}
