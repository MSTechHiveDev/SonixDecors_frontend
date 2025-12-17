import React from 'react';
import { Truck, ShieldCheck, RefreshCw, Headphones } from 'lucide-react';

const features = [
  {
    icon: <RefreshCw className="h-10 w-10 text-accent" />,
    title: 'Easy returns',
    description: 'Free 30-day returns with quick refunds or easy exchanges and no stress.'
  },
  {
    icon: <Truck className="h-10 w-10 text-accent" />,
    title: 'Free shipping',
    description: 'Enjoy fast, free shipping on all orders, no minimum, no hidden fees.'
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: 'Secure payment',
    description: 'Your information is protected with encrypted checkout and trusted payment methods.'
  },
  {
    icon: <Headphones className="h-10 w-10 text-accent" />,
    title: 'Quality assured',
    description: 'Every product is carefully tested to meet high standards of durability and performance.'
  }
];

const TrustSection = () => {
  return (
    <section className="py-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center p-6 bg-secondary rounded-xl hover:shadow-md hover:shadow-accent/10 transition-shadow border border-white/5">
              <div className="mr-4">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
