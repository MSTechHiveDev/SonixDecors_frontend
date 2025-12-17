import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Package, Award } from 'lucide-react';

const Franchise = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "High ROI",
      description: "Low investment, high ROI opportunities in a growing market."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Full Support",
      description: "Complete setup assistance, training, and operational guidance."
    },
    {
      icon: <Package className="h-8 w-8 text-accent" />,
      title: "Supply Chain",
      description: "Centralized product supply and logistics management."
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Premium Brand",
      description: "Access to premium, in-demand car products and branding."
    }
  ];

  return (
    <div className="bg-black min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <div className="relative py-20 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-accent font-bold tracking-widest uppercase mb-4">FRANCHISING</h2>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              PARTNER WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">SONIX</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join one of India’s fastest-growing brands in car accessories and electronics. 
              Launch your own profitable store with our proven business model.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="bg-secondary p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors group"
            >
              <div className="bg-black/50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Drive Your Success?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're an entrepreneur or investor, Sonix empowers you to grow with confidence. 
              Be a part of India’s automotive retail revolution.
            </p>
            <button className="bg-accent hover:bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1">
              Apply for Franchise
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Franchise;
