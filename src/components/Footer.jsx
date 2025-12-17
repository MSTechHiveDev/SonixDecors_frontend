import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">
                Sonix <span className="text-accent">Decors</span>
              </span>
            </Link>
            <p className="text-sm mb-6 leading-relaxed text-gray-400">
              Your one-stop destination for premium car accessories and modifications. 
              Elevate your driving experience with our curated selection of top-tier products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Shop</Link></li>
              <li><Link to="/categories" className="hover:text-accent transition-colors">Categories</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Customer Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-accent transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns" className="hover:text-accent transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                <span>8/189, Beside HP Petrol Bunk, Almaspet, Kadapa, Andhra Pradesh</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                <span>+91 9403893155</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                <span>hello@sonixcar.com</span>
              </li>
            </ul>
            
            <h4 className="text-white font-semibold mb-2">Subscribe to Newsletter</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:border-accent w-full placeholder-gray-500"
              />
              <button className="bg-accent hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition-colors">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SonixDecors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
