import React from 'react';
import { ShoppingCart} from 'lucide-react';
import { assets } from '../assets/assets';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "ALYA SKIN CLEANSER.",
      price: "FROM $29.99",
    },
    {
      id: 2,
      name: "RITUAL OF SAKURA.",
      price: "FROM $27.99",
    },
    {
      id: 3,
      name: "THE BODY LOTION.",
      price: "FROM $19.99",
    }
  ];

  return (
    <div className="min-h-screen bg-[#EFF5E1] py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between px-8 mb-12">
          <div className="flex items-center space-x-4 mb-6 lg:mb-0">
            <button className="px-6 py-2 bg-white rounded-full border border-[#2D3B36] text-sm font-medium hover:bg-gray-50 transition-colors">
              • Best Selling Products
            </button>
          </div>

          <div className="text-left lg:text-center flex-1 mb-6 lg:mb-0">
            <h1 className="text-3xl md:text-4xl font-medium text-gray-800 leading-tight">
              Skincare That Brings Out<br />
              Your Natural Radiance
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-10">
            <button className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
              <img src={assets.leftarrow} alt="" />
            </button>
            <button className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <img src={assets.rightarrow} className='' alt="" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="px-4 lg:grid lg:grid-cols-3 lg:gap-8 flex lg:flex-none overflow-x-auto lg:overflow-x-visible space-x-6 lg:space-x-0 pb-4 lg:pb-0">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer flex-shrink-0 w-80 lg:w-auto">
              <div className="relative rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-105">
                {/* Product Image Container */}
                <div className="relative h-[30rem] bg-white rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {product.id === 1 && (
                      <div className="w-full h-full">
                        <img src={assets.product1} className='w-full h-full object-cover' alt="" />
                      </div>
                    )}
                    {product.id === 2 && (
                      <div className="w-full h-full">
                        <img src={assets.product2} className='w-full h-full object-cover' alt="" />
                      </div>
                    )}
                    {product.id === 3 && (
                      <div className="w-full h-full">
                        <img src={assets.product3} className='w-full h-full object-cover' alt="" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Product Info - Positioned at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm rounded-b-2xl p-4 m-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm">{product.name}</h3>
                      <p className="text-gray-500 text-xs mt-1">{product.price}</p>
                    </div>
                    <button className="w-8 h-8 bg-[#2D3B36]/10 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors group">
                      <ShoppingCart className="w-4 h-4 text-gray-600 group-hover:text-gray-800" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation - Below products */}
        <div className="flex lg:hidden justify-center space-x-6 mt-8">
          <button className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
            <img src={assets.leftarrow} alt="" />
          </button>
          <button className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
            <img src={assets.rightarrow} className='' alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;