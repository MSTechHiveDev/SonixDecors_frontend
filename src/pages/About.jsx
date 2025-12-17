import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-black min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            SONIX <span className="text-accent">CAR DECORS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Upgrade Your Ride. No Compromises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Premium Car Interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">Premium Quality</h3>
                <p className="text-gray-300">Only the best for your vehicle</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 text-gray-300"
          >
            <p className="text-lg leading-relaxed">
              At <span className="text-white font-semibold">Sonix Car Decors</span>, we specialize in premium car accessories, electronics, and custom upgrades to elevate your driving experience. With a passion for innovation and quality, we offer everything from seat covers and infotainment systems to safety enhancements and lighting solutions — all under one roof.
            </p>
            <p className="text-lg leading-relaxed">
              Founded by <span className="text-white font-semibold">Syed Shahid</span>, Sonix is built on trust, expertise, and customer-first service. Our skilled team ensures every product is carefully selected and professionally installed to match your style and needs.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're enhancing comfort, performance, or aesthetics, Sonix is your trusted partner on the road.
            </p>
            <div className="pt-4">
              <p className="text-2xl font-bold text-white italic">
                "Drive smarter. Drive better. Drive with Sonix."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
