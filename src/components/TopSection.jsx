import React from 'react';
import { assets } from '../assets/assets';

// Part 1: TopSection (Top Left Text, Top Right Image, GLOW NATURALLY Text)
const TopSection = () => {
    return (
        <div className="bg-[#EFF5E1]">
            {/* Desktop Layout */}
            <div className="hidden lg:block">
                <div className="container mx-auto py-16 max-w-7xl px-6">
                    <div className="grid grid-cols-3 gap-8 items-start">
                        {/* Top Left Text */}
                        <div className="max-w-xs text-sm text-slate-700 leading-relaxed pt-8">
                            <span className="font-medium pl-10">Transform your skincare</span> routine with premium products that restore, protect, and enhance your natural glow every day.
                        </div>

                        {/* Main Heading */}
                        <div className="text-left">
                            <h1 className="text-6xl md:text-7xl font-bold text-[#2B3B36] leading-tight tracking-tight">
                                GLOW
                                <br />
                                NATUR-
                                <br />
                                ALLY
                            </h1>
                        </div>

                        {/* Top Right Product Image */}
                        <div className="flex justify-end">
                            <div className="w-48 h-48">
                                <img
                                    src={assets.product}
                                    alt="Skincare Product"
                                    className="w-full h-full object-cover rounded-3xl shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tablet Layout */}
            <div className="hidden sm:block lg:hidden">
                <div className="container mx-auto py-8 max-w-6xl relative">
                    <div className="flex justify-between items-center mb-6 relative">
                        {/* Top Left Text */}
                        <div className="max-w-xs px-6 text-base text-slate-700 leading-relaxed">
                            <span className="pl-10">Transform your skincare</span> routine with premium products that restore, protect, and enhance your natural glow every day.
                        </div>

                        {/* Top Right Product Image */}
                        <div className="w-80 h-80 px-6">
                            <img
                                src={assets.product}
                                alt="Skincare Product"
                                className="w-full h-full object-cover shadow-lg"
                            />
                        </div>

                        {/* Main Heading */}
                        <div className="absolute bottom-0 left-0 right-0 top-[75%] text-left w-full z-10">
                            <h1 className="text-9xl font-bold text-[#2B3B36] leading-[1] tracking-tight m-0 p-0">
                                <span className="block m-0 p-0">GLOWWWW</span>
                                <span className="block m-0 p-0 -mt-6">NATURALLY</span>
                            </h1>
                        </div>

                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="sm:hidden">
                <div className="flex flex-col justify-center items-center pt-16 pb-6">
                    <div className="text-left mb-6">
                    <h1 className="text-7xl font-bold text-[#2B3B36] leading-[1] tracking-tight m-0 p-0">
                                <span className="block m-0 p-0">GLOWWWW</span>
                                <span className="block m-0 p-0 -mt-5">NATURALLY</span>
                            </h1>
                    </div>
                    <div className="text-left mb-4 px-4 max-w-sm">
                        <p className="text-[#2B3B36] text-sm leading-relaxed">
                            Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSection;