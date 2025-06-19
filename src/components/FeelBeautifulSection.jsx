import React from "react";
import { assets } from "../assets/assets";

const FeelBeautifulSection = () => {
  return (
    <section className="relative w-full bg-[#EFF5E1] max-w-6xl m-20 mx-auto">
      {/* Container with rounded corners and overflow hidden */}
      <div className="hidden lg:block relative rounded-3xl overflow-hidden shadow-2xl">
        {/* Background Image */}
        <img
          src={assets.banner3}
          alt="Model with Product"
          className="w-full h-96 md:h-[600px] object-cover"
        />
        
        {/* Bottom Overlay for light gradient effect */}
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-[#2D3B36]  to-transparent"></div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        {/* Content Overlay */}
        <div className="absolute bottom-10 left-0 right-0 flex flex-col justify-center items-center text-center px-6">
          {/* Main Heading */}
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8 max-w-2xl">
            Feel Beautiful Inside and Out
            <br />
            <span className="block mt-2">with Every Product.</span>
          </h2>
          
          {/* CTA Button */}
          <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-medium text-base hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeelBeautifulSection;