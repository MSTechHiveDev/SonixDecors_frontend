import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Truck, ShieldCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock product data (in a real app, fetch based on ID)
  const product = {
    id: id,
    name: 'Premium Leather Seat Covers',
    price: 199.99,
    rating: 4.8,
    reviews: 124,
    description: 'Transform your car interior with our premium leather seat covers. Designed for durability and style, these covers provide excellent protection against spills, stains, and wear. Easy to install and compatible with most vehicle models.',
    features: [
      'High-quality PU leather material',
      'Waterproof and stain-resistant',
      'Universal fit for most cars, trucks, and SUVs',
      'Easy installation with secure straps',
      'Airbag compatible design'
    ],
    images: [
      'https://images.unsplash.com/photo-1503376763036-066120622c74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  };

  const [activeImage, setActiveImage] = useState(product.images[0]);

  const handleAddToCart = () => {
    toast.success(`Added ${quantity} ${product.name} to cart`);
  };

  return (
    <div className="bg-black min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/shop" className="inline-flex items-center text-gray-400 hover:text-accent mb-8 transition-colors">
          <ArrowLeft className="h-5 w-5 mr-2" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden mb-4 bg-secondary">
              <img src={activeImage} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveImage(img)}
                  className={`rounded-lg overflow-hidden border-2 transition-colors ${activeImage === img ? 'border-accent' : 'border-transparent'}`}
                >
                  <img src={img} alt={`View ${index + 1}`} className="w-full h-24 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-600'}`} />
                ))}
              </div>
              <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
            </div>

            <div className="text-3xl font-bold text-accent mb-6">${product.price}</div>

            <p className="text-gray-400 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-8">
              <h3 className="font-semibold text-white mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-400">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center border border-white/10 rounded-lg">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-gray-400 hover:bg-white/5 transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 font-semibold text-white">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-gray-400 hover:bg-white/5 transition-colors"
                >
                  +
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-accent hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors shadow-lg shadow-blue-500/30"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/10">
              <div className="flex items-center text-gray-400">
                <Truck className="h-5 w-5 text-accent mr-3" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center text-gray-400">
                <ShieldCheck className="h-5 w-5 text-accent mr-3" />
                <span className="text-sm">2 Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
