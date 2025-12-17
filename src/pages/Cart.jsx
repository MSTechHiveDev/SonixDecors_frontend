import React from 'react';
import { Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Mock cart data
  const cartItems = [
    {
      id: 1,
      name: 'Premium Leather Seat Covers',
      price: 199.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1503376763036-066120622c74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      name: 'LED Headlight Kit',
      price: 89.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="bg-black min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">Your Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-secondary p-6 rounded-xl shadow-sm flex items-center border border-white/5">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg mr-6" />
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-accent font-semibold">${item.price}</p>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center border border-white/10 rounded-lg">
                    <button className="px-3 py-1 text-gray-400 hover:bg-white/5">-</button>
                    <span className="px-3 py-1 font-medium text-white">{item.quantity}</span>
                    <button className="px-3 py-1 text-gray-400 hover:bg-white/5">+</button>
                  </div>
                  <button className="text-red-500 hover:text-red-700 transition-colors">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-secondary p-6 rounded-xl shadow-sm sticky top-24 border border-white/5">
              <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span className="text-green-500 font-medium">Free</span>
                </div>
                <div className="border-t border-white/10 pt-4 flex justify-between text-lg font-bold text-white">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Link 
                to="/checkout" 
                className="w-full bg-accent hover:bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center transition-colors shadow-lg shadow-blue-500/30"
              >
                Proceed to Checkout <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
