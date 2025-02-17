import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-6 px-4 py-20 text-center bg-gray-50 text-gray-700">
      {/* Exchange Policy */}
      <div className="flex flex-col items-center">
        <img
          src={assets.exchange_icon}
          className="w-16 h-16 mb-5 hover:scale-110 transition-transform"
          alt="Exchange policy icon"
        />
        <p className="text-lg font-bold">Easy Exchange Policy</p>
        <p className="text-gray-500 mt-2">Hassle-free exchange policy</p>
      </div>

      {/* Return Policy */}
      <div className="flex flex-col items-center">
        <img
          src={assets.quality_icon}
          className="w-16 h-16 mb-5 hover:scale-110 transition-transform"
          alt="Return policy icon"
        />
        <p className="text-lg font-bold">7 Days Return Policy</p>
        <p className="text-gray-500 mt-2">We provide a 7-day return window</p>
      </div>

      {/* Customer Support */}
      <div className="flex flex-col items-center">
        <img
          src={assets.support_img}
          className="w-16 h-16 mb-5 hover:scale-110 transition-transform"
          alt="Customer support icon"
        />
        <p className="text-lg font-bold">Best Customer Support</p>
        <p className="text-gray-500 mt-2">24/7 dedicated customer support</p>
      </div>
    </section>
  );
};

export default OurPolicy;
