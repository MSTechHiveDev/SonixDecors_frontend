import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import FeaturedProducts from '../components/FeaturedProducts';
import TrustSection from '../components/TrustSection';
import StatsSection from '../components/StatsSection';

const Home = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <TrustSection />

      {/* Sonix Brand Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full"></div>
              <img
                src="/sonix.webp"
                alt="Sonix Brand"
                className="relative z-10 w-full rounded-2xl border border-white/10 shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif text-white">
                Experience <span className="text-[#D4AF37]">Sonix</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                Discover the perfect blend of luxury and performance. Our
                exclusive collection is designed to elevate your driving
                experience to new heights.
              </p>
              <button className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-white transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <CategorySection />
      <FeaturedProducts />
      <StatsSection />

      {/* Newsletter Banner */}
      <section className="py-16 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-l-full focus:outline-none bg-white text-gray-900 placeholder-gray-500"
            />
            <button className="bg-accent hover:bg-blue-600 text-white px-6 py-3 rounded-r-full font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
