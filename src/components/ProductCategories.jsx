import React from "react";
import { ShoppingCart } from 'lucide-react';
import { assets } from "../assets/assets";

const ProductCategories = () => {
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
    <section className="py-16  bg-[#F5F3E7] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center px-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-medium text-left lg:text-center text-gray-800 leading-tight mb-8">
            Feel Beautiful Inside and Out<br />
            with Every Product.
          </h1>
          
          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button className="bg-[#2D3B36] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#1a2420] transition-colors">
              NEW ARRIVAL
            </button>
            <button className="bg-white text-gray-700 px-6 py-2 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
              CLEANSING
            </button>
            <button className="bg-white text-gray-700 px-6 py-2 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
              ACNE FIGHTER
            </button>
            <button className="bg-white text-gray-700 px-6 py-2 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
              ANTI AGING
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="px-6 lg:grid lg:grid-cols-3 lg:gap-8 flex lg:flex-none overflow-x-auto lg:overflow-x-visible space-x-6 lg:space-x-0 pb-4 lg:pb-0">
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
      </div>
    </section>
  );
};

export default ProductCategories;