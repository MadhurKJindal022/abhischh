import React from "react";

const products = [
  { id: 1, name: "Titan Smart Pro", price: "₹12,999", img: "/images/watch1.jpg" },
  { id: 2, name: "Titan Edge Ceramic", price: "₹19,995", img: "/images/watch2.jpg" },
  { id: 3, name: "Raga Viva", price: "₹8,499", img: "/images/watch3.jpg" },
  { id: 4, name: "Nebula 18KT Gold", price: "₹1,25,000", img: "/images/watch4.jpg" },
];

export default function TrendingProducts() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Trending Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((item) => (
            <div key={item.id} className="bg-zinc-900 p-4 rounded-xl shadow-lg hover:scale-105 transition">
              <img src={item.img} alt={item.name} className="w-full h-60 object-cover rounded-lg mb-4" />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-400">{item.price}</p>
              <button className="mt-4 px-4 py-2 bg-white text-black rounded-lg w-full hover:bg-gray-200">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
