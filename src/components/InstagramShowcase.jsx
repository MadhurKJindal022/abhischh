import React from "react";
import { ImageOff } from "lucide-react";

const instaPosts = [
  "/images/insta1.jpg",
  "/images/insta2.jpg",
  "", // missing image
  "/images/insta4.jpg",
  "", // missing image
  "/images/insta6.jpg",
];

export default function InstagramShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-10 tracking-wide">
          Instagram Moments
        </h2>

        {/* Bento Grid */}
        <div
          className="
            grid
            grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6
            auto-rows-[180px]
            gap-4 md:gap-6
          "
        >
          {instaPosts.map((img, i) => {
            const layoutMap = [
              { col: 2, row: 2 },
              { col: 2, row: 1 },
              { col: 1, row: 1 },
              { col: 2, row: 1 },
              { col: 1, row: 1 },
              { col: 2, row: 1 },
            ];

            const layout = layoutMap[i] || { col: 1, row: 1 };

            const hasImage = !!img;

            return (
              <div
                key={i}
                className={`relative rounded-2xl perspective col-span-${layout.col} row-span-${layout.row} w-full h-full`}
              >
                {hasImage ? (
                  // 🔄 Flip animation active only when image exists
                  <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 hover:[transform:rotateY(180deg)] rounded-2xl">
                    {/* Front Side */}
                    <div className="absolute inset-0 backface-hidden overflow-hidden rounded-2xl flex items-center justify-center bg-gray-800">
                      <img
                        src={img}
                        alt={`Instagram ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      {i === 0 && (
                        <p className="absolute bottom-4 left-4 text-lg font-semibold">
                          More moments
                        </p>
                      )}
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex flex-col items-center justify-center text-center p-4">
                      <p className="text-lg font-semibold">
                        Follow @chhabra_watch_co
                      </p>
                      <p className="text-sm opacity-80 mt-1">
                        See the latest moments
                      </p>
                    </div>
                  </div>
                ) : (
                  // 💡 No image — show flip side directly
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex flex-col items-center justify-center text-center p-4">
                    
                    <p className="text-lg font-semibold">
                      Follow @chhabra_watch_co
                    </p>
                    <p className="text-sm opacity-80 mt-1">
                      See the latest moments
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Follow Button */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/chhabra_watch_co/#"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            Follow @chhabra_watch_co
          </a>
        </div>
      </div>
    </section>
  );
}
