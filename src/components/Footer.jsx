import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2D3B36] text-white py-16 pb-24 px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute -bottom-14 xl:-bottom-28 text-center text-[8rem] lg:text-[12rem] xl:text-[16rem] font-bold whitespace-nowrap tracking-wider">
          SKINCARE
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left Section - Call to Action */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-light leading-tight">
              Join The Skincare<br />
              Community Now.
            </h2>
          </div>
          
          {/* Right Section - Contact Info */}
          <div className="lg:text-right space-y-4">
            <p className="text-gray-300 text-sm uppercase tracking-wider">
              Get in Touch
            </p>
            <p className="text-2xl lg:text-3xl font-light">
              contact.skincare.com
            </p>
          </div>
        </div>
        
        {/* Bottom Section - Links */}
        <div className="mt-16 lg:pt-10 pb-10 lg:pb-28">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Social Media Links */}
            <div className="lg:col-span-3 space-y-2 lg:space-y-0 lg:space-x-8 lg:flex">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Facebook
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Instagram
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                YouTube
              </a>
            </div>
            
            {/* Legal Links */}
            <div className="lg:col-span-3 lg:text-right space-y-2 lg:space-y-0 lg:space-x-8 lg:flex lg:justify-end">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Terms of Service
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;