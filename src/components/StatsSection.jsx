import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Star } from 'lucide-react';

const stats = [
  {
    icon: <Star className="h-12 w-12 text-accent" />,
    value: '50K+',
    label: 'Happy Customers'
  },
  {
    icon: <Award className="h-12 w-12 text-accent" />,
    value: '15+',
    label: 'Years Experience'
  },
  {
    icon: <Users className="h-12 w-12 text-accent" />,
    value: '200+',
    label: 'Expert Team'
  },
  {
    icon: <Clock className="h-12 w-12 text-accent" />,
    value: '24/7',
    label: 'Support Available'
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose SONIX CAR</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're committed to providing the best automotive accessories and exceptional service to our customers.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-black rounded-xl border border-white/5 hover:border-accent/50 transition-colors"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
