import React from 'react';
import { Award } from 'lucide-react';
import { assets } from '../assets/assets';

const SkinDeservesSection = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto">
        <div className="grid lg:grid-cols-5 gap-0 items-stretch min-h-screen">
          {/* Left Content Section */}
          <div className="lg:col-span-2 bg-[#EFF5E1] p-6 md:p-12 flex items-center">
            <div className="space-y-8 w-full">
              {/* Tag */}
              <div className="inline-flex items-center border border-[#2D3B36] gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                Why Our Products
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 leading-tight">
                  YOUR SKIN DESERVES
                  <br />
                  THE BEST CARE.
                </h1>
                <p className="text-gray-600 text-sm max-w-md leading-relaxed">
                  Discover a curated collection of skincare products designed to rejuvenate, 
                  protect, and pamper your skin. Explore our range crafted with love backed 
                  by science, and inspired by nature.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-8">
                {/* Feature 1 */}
                <div className="flex gap-6">
                  <div className="text-3xl font-medium text-[#2D3B36] relative">
                    01
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-medium text-[#2D3B36]">Bio Ingredients</h3>
                    <p className="text-sm text-gray-600 max-w-sm">
                      Get naturally beautiful and transform with our bio 
                      ingredients creams for healthy, radiant skin.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-6">
                  <div className="text-3xl font-medium text-[#2D3B36] relative">
                    02
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-medium text-[#2D3B36]">Everything Natural</h3>
                    <p className="text-sm text-gray-600 max-w-sm">
                      Pure ingredients for pure skin. The Perfect solution 
                      for your skin care needs.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-6">
                  <div className="text-3xl font-medium text-[#2D3B36] relative">
                    03
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-medium text-[#2D3B36]">All Handmade</h3>
                    <p className="text-sm text-gray-600 max-w-sm">
                      Made with love and care. Just for you. Give your skin 
                      the tender loving care it deserves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:col-span-3 bg-[#EFF5E1] lg:bg-[#FEFFF4] p-6 md:p-12 flex items-center justify-center">
            <div className="relative w-full lg:max-w-lg">
              <div className="relative lg:rounded-3xl overflow-hidden shadow-2xl">
                {/* Main Image Container */}
                <div className="aspect-[4/5] relative">
                  {/* Demo image - replace with your actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-green-800 to-green-900 flex items-center justify-center">
                    <img src={assets.banner2} className='w-full h-full object-cover' alt="Skincare product" />
                  </div>

                  {/* Award Badge */}
                  <div className="absolute bottom-6 left-[20%] md:left-1/3  bg-white/90 backdrop-blur-sm rounded-full px-4 py-3 flex items-center gap-3 shadow-lg">
                    <div className='w-10 h-10 flex items-center justify-center border border-dotted border-[#2D3B36] rounded-full'>
                      <div className="w-8 h-8 flex items-center justify-center bg-[#2D3B36] rounded-full">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-800">Best Skin Care Product</div>
                      <div className="text-xs text-gray-600">Award Winning</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="flex justify-between items-center mt-6">
                <div className="text-sm text-gray-600 font-medium">SINCE 2001</div>
                <button className="text-sm text-gray-800 font-medium hover:text-gray-600 transition-colors">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinDeservesSection;