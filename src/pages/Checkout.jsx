import React, { useState } from 'react';
import { ArrowRight, CreditCard, Lock } from 'lucide-react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isPaid, setIsPaid] = useState(false);

  const initialOptions = {
    "client-id": "test", // Replace with your sandbox client ID
    currency: "USD",
    intent: "capture",
  };

  const handleApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      setIsPaid(true);
      toast.success(`Transaction completed by ${details.payer.name.given_name}`);
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-black min-h-screen py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Shipping Info */}
          <div className="space-y-8">
            <div className="bg-secondary p-8 rounded-xl shadow-sm border border-white/5">
              <h2 className="text-xl font-bold text-white mb-6">Shipping Information</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">First Name</label>
                    <input type="text" className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Last Name</label>
                    <input type="text" className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none text-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Address</label>
                  <input type="text" className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none text-white" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">City</label>
                    <input type="text" className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Postal Code</label>
                    <input type="text" className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none text-white" />
                  </div>
                </div>
              </form>
            </div>

            <div className="bg-secondary p-8 rounded-xl shadow-sm border border-white/5">
              <h2 className="text-xl font-bold text-white mb-6">Payment Method</h2>
              <div className="space-y-4">
                <div 
                  onClick={() => setPaymentMethod('card')}
                  className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-accent bg-accent/10' : 'border-white/10 hover:bg-white/5'}`}
                >
                  <div className={`w-4 h-4 rounded-full border mr-4 flex items-center justify-center ${paymentMethod === 'card' ? 'border-accent' : 'border-gray-500'}`}>
                    {paymentMethod === 'card' && <div className="w-2 h-2 bg-accent rounded-full"></div>}
                  </div>
                  <CreditCard className="h-6 w-6 text-white mr-3" />
                  <span className="font-semibold text-white">Credit Card</span>
                </div>
                
                <div 
                  onClick={() => setPaymentMethod('paypal')}
                  className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${paymentMethod === 'paypal' ? 'border-accent bg-accent/10' : 'border-white/10 hover:bg-white/5'}`}
                >
                  <div className={`w-4 h-4 rounded-full border mr-4 flex items-center justify-center ${paymentMethod === 'paypal' ? 'border-accent' : 'border-gray-500'}`}>
                    {paymentMethod === 'paypal' && <div className="w-2 h-2 bg-accent rounded-full"></div>}
                  </div>
                  <span className="font-semibold text-white">PayPal</span>
                </div>
                
                {paymentMethod === 'card' && (
                  <div className="mt-6 pt-6 border-t border-white/10 animate-fade-in">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Card Number</label>
                        <input type="text" placeholder="0000 0000 0000 0000" className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none text-white placeholder-gray-600" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Expiry</label>
                        <input type="text" placeholder="MM/YY" className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none text-white placeholder-gray-600" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">CVC</label>
                        <input type="text" placeholder="123" className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none text-white placeholder-gray-600" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Order Review */}
          <div>
            <div className="bg-secondary p-8 rounded-xl shadow-sm sticky top-24 border border-white/5">
              <h2 className="text-xl font-bold text-white mb-6">Order Review</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Premium Leather Seat Covers (x1)</span>
                  <span className="font-semibold text-white">$199.99</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">LED Headlight Kit (x2)</span>
                  <span className="font-semibold text-white">$179.98</span>
                </div>
                <div className="border-t border-white/10 pt-4 flex justify-between items-center text-lg font-bold text-white">
                  <span>Total</span>
                  <span>$379.97</span>
                </div>
              </div>
              
              {paymentMethod === 'card' ? (
                <button className="w-full bg-accent hover:bg-blue-600 text-white py-4 rounded-lg font-bold flex items-center justify-center transition-colors shadow-lg shadow-blue-500/30">
                  <Lock className="h-5 w-5 mr-2" /> Pay Now
                </button>
              ) : (
                <PayPalScriptProvider options={initialOptions}>
                  <PayPalButtons 
                    style={{ layout: "vertical" }} 
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: "379.97",
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={handleApprove}
                  />
                </PayPalScriptProvider>
              )}
              
              <p className="text-center text-gray-500 text-sm mt-4 flex items-center justify-center">
                <Lock className="h-3 w-3 mr-1" /> Secure 256-bit SSL Encrypted payment
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout;
