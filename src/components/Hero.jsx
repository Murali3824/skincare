import React from 'react';
import { assets } from '../assets/assets';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-[#f5f3f0] relative overflow-hidden">
      {/* Main Container */}
      <div className="container mx-auto px-8 py-16 relative">

        {/* Top Section - Left text, Center heading, Right product */}
        <div className="flex justify-between items-center gap-12 mb-16">
          {/* Top Left Text */}
          <div className="max-w-60 text-sm text-[#2B3B36] ">
            <span className='pl-10'>Transform your skincare</span> routine with premium products that restore, protect, and enhance your natural glow every day.
          </div>
          {/* Main Heading */}
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl text-left font-bold text-[#2B3B36] leading-tight tracking-tight">
              GLOW
              <br />
              NATUR-
              <br />
              ALLY
            </h1>
          </div>
          {/* Top Right Product Image */}
          <div className="w-48 h-48">
            <img
              src={assets.product}
              alt="Skincare Product"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>

        </div>

        {/* Shop Now Button - Left side of image */}
        <div className="absolute left-3.5 pl-20 top-1/2 transform -translate-y-1/2 z-20">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors shadow-md">
            Shop Now
          </button>
        </div>

        {/* Central Section with Image and SKINCARE Text Background */}
        <div className="relative flex justify-center">
          {/* Large SKINCARE Text as Background */}
          <div className="absolute inset-0 top-1/2 flex items-center justify-center pointer-events-none">
            <h2 className="text-8xl md:text-9xl lg:text-[15rem] font-extrabold text-gray-900 leading-none tracking-wide select-none">
              SKINCARE
            </h2>
          </div>

          {/* Central Image Container */}
          <div className="relative z-10">
            <div className="w-96 h-[26rem] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-green-100 via-green-200 to-green-300">
              <img
                src={assets.banner1}
                alt="Woman with skincare routine"
                className="w-full h-full object-cover"
              />
              {/* Notification Popup */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <div className="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4 max-w-md">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-base">👤</span>
                  </div>
                  <p className="text-sm text-gray-800 font-medium">While giving you an invigorating cleansing experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Description Text */}
        <div className="max-w-full mt-20 mx-auto text-left px-6">
          <p className="text-[#2B3B36] text-4xl">
            Experience the ultimate in skincare with our expertly formulated products,
            crafted to nourish, protect, and rejuvenate your skin. Combining the finest
            natural ingredients with{" "}
            <span className="text-[#2B3B36]/30">
              advanced science, our collection ensures every
              skin type can achieve a radiant, healthy glow. Embrace your beauty with
              confidence every day. Experience the ultimate in skincare with our
              expertly formulated products, crafted to nourish, protect, and rejuvenate
              your skin.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;