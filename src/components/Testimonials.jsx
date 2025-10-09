"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Customer",
    text: "Absolutely love my Titan Edge! Premium feel & super light.",
    img: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors3.svg",
    rating: 5,
  },
  {
    id: 2,
    name: "Sneha Patel",
    role: "Customer",
    text: "Raga collection is elegant. Perfect gift for my mom.",
    img: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors3.svg",
    rating: 4,
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Customer",
    text: "Titan Smart Pro is feature-packed & stylish. Worth the money.",
    img: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors3.svg",
    rating: 5,
  },
  {
    id: 4,
    name: "Priya Nair",
    role: "Customer",
    text: "The Nebula collection is pure luxury, feels royal to wear!",
    img: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourInstructors3.svg",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-zinc-900 text-white relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Our Customer Reviews
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Keyboard, Mousewheel]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation
          mousewheel
          keyboard
          loop
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 2, spaceBetween: 40 },
          }}
          className="pb-20"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-black rounded-2xl shadow-lg p-8 flex flex-col items-center text-center relative">
                {/* Decorative Quote Mark */}
                <span className="text-6xl text-yellow-500 absolute top-4 left-6">“</span>

                {/* Profile Image */}
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-16 h-16 rounded-full border-2 border-yellow-500 mb-4 mt-8"
                />

                {/* Review Text */}
                <p className="text-gray-300 italic mb-6">{review.text}</p>

                {/* ⭐ Rating Stars */}
                <div className="flex justify-center mb-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={`text-2xl ${
                        index < review.rating
                          ? "text-yellow-400"
                          : "text-gray-600"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Reviewer */}
                <p className="text-lg font-semibold text-white">{review.name}</p>
                <p className="text-sm text-gray-400">{review.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
