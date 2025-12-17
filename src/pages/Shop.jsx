import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Class from "../../public/Class.png"
import Interior from "../../public/Interior.jpg"
const products = [
  {
    id: 1,
    name: 'Premium Leather Seat Covers',
    price: 199.99,
    rating: 4.8,
    image: Class,
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
    discount: 10
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
  },
  {
    id: 5,
    name: 'Performance Air Filter',
    price: 45.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Performance'
  },
  {
    id: 6,
    name: 'Premium Interior',
    price: 119.99,
    rating: 4.8,
    image: Interior,
    category: 'Interior'
  }
];

const categories = ['All', 'Interior', 'Exterior', 'Electronics', 'Car Care', 'Performance'];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="bg-black min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4 md:mb-0">Shop All Products</h1>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Filter className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent appearance-none bg-secondary text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
