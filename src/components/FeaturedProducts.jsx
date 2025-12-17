import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import CarIn from "../../public/CarIn.png"

const products = [
  {
    id: 1,
    name: 'Premium Leather Seat Covers',
    price: 199.99,
    rating: 4.8,
    image: CarIn,
    category: 'Interior',
    isNew: true
  },
  {
    id: 2,
    name: 'LED Headlight Kit',
    price: 89.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Electronics',
    discount: 15
  },
  {
    id: 3,
    name: 'Advanced Dash Cam 4K',
    price: 129.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Electronics'
  },
  {
    id: 4,
    name: 'Ceramic Coating Kit',
    price: 59.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Car Care'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Featured Products</h2>
            <p className="text-gray-400">Top picks for your vehicle this week.</p>
          </div>
          <Link to="/shop" className="text-accent font-semibold hover:text-blue-400 hidden sm:block">
            View All Products &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <Link to="/shop" className="text-accent font-semibold hover:text-blue-400">
            View All Products &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
