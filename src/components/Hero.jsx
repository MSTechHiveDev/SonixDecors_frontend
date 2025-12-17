import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Car from '../../public/Car.jpg';
import Car1 from '../../public/car2.jpg';
import int from '../../public/Int.png';

const slides = [
  {
    id: 1,
    image: Car,
    category: 'Bespoke Interiors',
    title: 'The Art of Comfort',
    description:
      'Handcrafted leather, precision stitching, and ergonomic mastery.',
    cta: 'Explore Collection',
    link: '/category/interior',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    category: 'Signature Exteriors',
    title: 'Command Presence',
    description: 'Aerodynamic excellence meets aesthetic perfection.',
    cta: 'View Portfolio',
    link: '/category/exterior',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    category: 'Future Tech',
    title: 'Digital Horizon',
    description: 'Seamless integration of intelligence and performance.',
    cta: 'Discover Innovation',
    link: '/category/electronics',
  },
  {
    id: 4,
    image: int,
    category: 'Performance Tuning',
    title: 'Unleash Power',
    description: 'Engineered upgrades for peak performance and reliability.',
    cta: 'Upgrade Now',
    link: '/category/performance',
  },
  {
    id: 5,
    image: Car1,
    category: 'Lighting Solutions',
    title: 'Illuminate the Night',
    description: 'Advanced LED systems for style and safety.',
    cta: 'View Lighting',
    link: '/category/lighting',
  },
  {
    id: 6,
    image: Car,
    category: 'Sonix Exclusive',
    title: 'The Sonix Standard',
    description:
      'Experience the ultimate in automotive luxury and performance.',
    cta: 'Experience Sonix',
    link: '/about',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full bg-[#050505] overflow-hidden group">
      {/* Background Layer with Parallax */}
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Sophisticated Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
          <div className="absolute inset-0 bg-black/20 z-10" />

          <motion.img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover opacity-90"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: 'easeOut' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Architectural Lines */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="max-w-[1800px] mx-auto h-full border-x border-white/5 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-white/5" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-white/5" />
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            {/* Elegant Category Label */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: '0.2em' }}
              animate={{ opacity: 1, letterSpacing: '0.5em' }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="text-[#D4AF37] text-xs md:text-sm font-medium uppercase mb-8 tracking-[0.5em]"
            >
              {slides[currentSlide].category}
            </motion.div>

            {/* Serif Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 tracking-wide leading-tight">
              {slides[currentSlide].title}
            </h1>

            {/* Refined Description */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-12 tracking-wide">
              {slides[currentSlide].description}
            </p>

            {/* Minimalist CTA */}
            <Link
              to={slides[currentSlide].link}
              className="group inline-flex flex-col items-center gap-2 text-white transition-colors"
            >
              <span className="text-sm uppercase tracking-[0.3em] group-hover:text-[#D4AF37] transition-colors duration-500">
                {slides[currentSlide].cta}
              </span>
              <div className="w-12 h-[1px] bg-white/30 group-hover:w-24 group-hover:bg-[#D4AF37] transition-all duration-500" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Minimalist Controls */}
      <div className="absolute bottom-12 left-0 right-0 z-40 px-8 md:px-16">
        <div className="max-w-[1800px] mx-auto flex justify-between items-end">
          {/* Slide Counter */}
          <div className="text-white/40 font-serif text-sm tracking-widest">
            <span className="text-white text-xl">
              {String(currentSlide + 1).padStart(2, '0')}
            </span>
            <span className="mx-2">—</span>
            <span>{String(slides.length).padStart(2, '0')}</span>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-12">
            <button
              onClick={prevSlide}
              className="group flex items-center gap-4 text-white/60 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-4 group-hover:translate-x-0">
                Prev
              </span>
            </button>
            <button
              onClick={nextSlide}
              className="group flex items-center gap-4 text-white/60 hover:text-white transition-colors"
            >
              <span className="text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-4 group-hover:translate-x-0">
                Next
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
