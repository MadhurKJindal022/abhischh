import React from "react";
import heroImage from "@/assets/logo3.jpeg";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Wristwatch on a dark background"
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Optional content area (empty for now) */}
      <div className="relative z-10 max-w-6xl px-6 lg:px-20 flex flex-col lg:flex-row justify-center items-start h-full">
        {/* Empty for now */}
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
