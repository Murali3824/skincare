import React from 'react';
import { assets } from '../assets/assets';

const CentralBottomSection = () => {
    return (
        <div className="bg-[#EFF5E1]">
            {/* Desktop Layout */}
            <div className="hidden lg:block">
                <div className="container mx-auto relative max-w-7xl">
                    {/* Central Section */}
                    <div className="relative flex justify-center items-center min-h-[500px]">
                        <div className="absolute inset-0 top-1/2 flex items-center justify-center pointer-events-none overflow-hidden">
                            <h2 className="text-[12rem] xl:text-[15rem] font-black text-[#2D3B36] leading-none tracking-wider select-none whitespace-nowrap">
                                SKINCARE
                            </h2>
                        </div>
                        <div className="absolute left-12 top-1/3 z-30">
                            <button className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#2D3B36] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Shop Now
                            </button>
                        </div>
                        <div className="relative z-20">
                            <div className="w-96 h-[27rem] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 via-teal-100 to-green-200">
                                <img
                                    src={assets.banner1}
                                    alt="Woman with skincare routine"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-8 bg-transparent left-1/2 transform -translate-x-1/2">
                                    <div className="w-80 bg-[#EFF5E1] rounded-full px-2 py-2 shadow-xl border border-white/20 flex items-center space-x-4 max-w-md">
                                        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-dotted border-slate-300">
                                            <img src={assets.product} className='w-full h-full object-cover' alt="" />
                                        </div>
                                        <div className="text-sm flex-1">
                                            <div className="font-medium text-slate-800 leading-relaxed">While giving you an invigorating cleansing experience.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Description */}
                    <div className="max-w-6xl mt-16 mx-auto text-left px-6">
                        <p className="text-[#2D3B36] text-2xl sm:text-3xl lg:text-4xl leading-relaxed">
                            Experience the ultimate in skincare with our expertly formulated products,
                            crafted to nourish, protect, and rejuvenate your skin. Combining the finest
                            natural ingredients with{" "}
                            <span className="text-[#2D3B36]/30 font-extralight">
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

            {/* Tablet Layout */}
            <div className="hidden sm:block lg:hidden">
                <div className="container mx-auto py-8 px-6 max-w-full relative">
                    <div className="relative flex justify-between items-center mb-20">
                        <div className="absolute inset-0 top-[100%] flex items-center justify-start pointer-events-none">
                            <h2 className="text-9xl font-black text-[#2D3B36] leading-none tracking-wider select-none whitespace-nowrap">
                                SKINCARE
                            </h2>
                        </div>
                        <div className="relative z-20">
                            <div className="w-72 h-80 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 via-teal-100 to-green-200">
                                <img
                                    src={assets.banner1}
                                    alt="Woman with skincare routine"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-6 left-1/2 bg-transparent transform -translate-x-1/2">
                                    <div className="w-64 bg-[#EFF5E1] rounded-full px-1.5 py-0.5 shadow-xl border border-white/20 flex items-center space-x-3">
                                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-dotted border-slate-300">
                                            <img src={assets.product} className="w-full h-full object-cover" alt="" />
                                        </div>
                                        <div className="text-xs flex-1">
                                            <div className="font-medium text-slate-800 leading-relaxed">While giving you an invigorating cleansing experience.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative z-30 mr-20">
                            <button className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#2D3B36] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Shop Now
                            </button>
                        </div>
                    </div>
                    <div className="max-w-4xl text-left">
                        <p className="text-[#2D3B36] text-xl leading-relaxed">
                            Experience the ultimate in skincare with our expertly formulated products,
                            crafted to nourish, protect, and rejuvenate your skin. Combining the finest
                            natural ingredients with{" "}
                            <span className="text-[#2D3B36]">
                                advanced science, our collection ensures every skin type can achieve a radiant, healthy glow. Embrace your beauty with confidence every day.
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="sm:hidden">
                <div className="min-h-screen flex flex-col">
                    <div className="flex-1 flex flex-col justify-center items-center pt-8 pb-6">
                        <div className="relative">
                            <div className="w-full h-full overflow-hidden shadow-2xl ">
                                <img
                                    src={assets.banner1}
                                    alt="Woman with skincare routine"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="absolute top-[90%] bg-transparent left-1/2 transform -translate-x-1/2">
                            <div className="w-64 bg-[#EFF5E1] rounded-full px-1.5 py-0.5 shadow-xl border border-white/20 flex items-center space-x-3">
                                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-dotted border-slate-300">
                                    <img src={assets.product} className="w-full h-full object-cover" alt="" />
                                </div>
                                <div className="text-xs flex-1">
                                    <div className="font-medium text-slate-800 leading-relaxed">While giving you an invigorating cleansing experience.</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <h2 className="text-7xl font-black text-[#2D3B36] leading-none tracking-wider text-center">
                                SKINCARE
                            </h2>
                        </div>
                        <div className="mb-8">
                            <div className="w-full h-full">
                                <img
                                    src={assets.product}
                                    alt="Skincare Product"
                                    className="w-full h-full object-cover shadow-lg"
                                />
                            </div>
                        </div>
                        <div className="mb-8">
                            <button className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#2D3B36] transition-all duration-300 shadow-lg w-full max-w-xs">
                                Shop Now
                            </button>
                        </div>
                        <div className="px-4 text-left">
                            <p className="text-[#2D3B36] text-lg sm:text-xl leading-relaxed max-w-md">
                                Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin. Combining the finest natural ingredients with{" "}
                                <span className="text-[#2D3B36]">
                                    advanced science, our collection ensures every skin type can achieve a radiant, healthy glow. Embrace your beauty with confidence every day. Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CentralBottomSection;