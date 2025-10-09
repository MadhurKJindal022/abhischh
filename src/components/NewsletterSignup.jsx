import React from "react";

export default function NewsletterSignup() {
  return (
    <section className="py-16 bg-zinc-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
      <p className="text-gray-400 mb-6">Get the latest collections & offers directly in your inbox.</p>
      <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 rounded-lg text-black flex-1"
        />
        <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200">
          Subscribe
        </button>
      </form>
    </section>
  );
}
