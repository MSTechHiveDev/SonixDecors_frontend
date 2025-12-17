import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Eye, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    toast.success(`Added ${product.name} to cart`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group bg-secondary rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/5 overflow-hidden relative"
    >
      <Link to={`/product/${product.id}`} className="block relative h-72 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAddToCart}
            className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-accent hover:text-white transition-colors"
            title="Add to Cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-accent hover:text-white transition-colors"
            title="Quick View"
          >
            <Eye className="h-5 w-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-colors"
            title="Add to Wishlist"
          >
            <Heart className="h-5 w-5" />
          </motion.button>
        </div>

        {/* Badges */}
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            NEW
          </span>
        )}
        {product.discount && (
          <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            -{product.discount}%
          </span>
        )}
      </Link>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs text-gray-400 uppercase font-semibold tracking-wider bg-white/5 px-2 py-1 rounded-md border border-white/5">
            {product.category}
          </span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-400 ml-1 font-medium">{product.rating}</span>
          </div>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-bold text-white mb-2 hover:text-accent transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-end justify-between mt-4">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 line-through mb-0.5">
              {product.discount ? `$${(product.price * (1 + product.discount/100)).toFixed(2)}` : ''}
            </span>
            <span className="text-xl font-bold text-white">
              ${product.price}
            </span>
          </div>
          <button 
            onClick={handleAddToCart}
            className="text-sm font-semibold text-accent hover:text-blue-400 transition-colors flex items-center group/btn"
          >
            Add to Cart <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
