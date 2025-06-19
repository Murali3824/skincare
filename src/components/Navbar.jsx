import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
    return (
        <nav className="bg-[#EFF5E1] px-4 lg:px-8 py-3 flex justify-between items-center shadow-sm sticky top-0 z-50">
            {/* Logo */}
            <div className="text-2xl font-bold text-[#2D3B36] tracking-tight">
                SKINCARE
            </div>

            {/* Navigation Links */}
            <div className="hidden sm:flex space-x-6 lg:space-x-10">
                <a href="#" className="text-[#2D3B36] hover:text-[#4A5D4F] transition-colors font-medium text-sm tracking-wide">
                    All Products
                </a>
                <a href="#" className="text-[#2D3B36] hover:text-[#4A5D4F] transition-colors font-medium text-sm tracking-wide">
                    Serum
                </a>
                <a href="#" className="text-[#2D3B36] hover:text-[#4A5D4F] transition-colors font-medium text-sm tracking-wide">
                    Sunscreen
                </a>
                <a href="#" className="text-[#2D3B36] hover:text-[#4A5D4F] transition-colors font-medium text-sm tracking-wide">
                    Bundle
                </a>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-2 lg:space-x-4">
                {/* Cart */}
                <div className="flex items-center space-x-2 rounded-full px-2 py-1 cursor-pointer">
                    <div className="bg-[#F8FEE5] rounded-full p-1.5">
                        <img src={assets.bag} className="bg-[#F8FEE5] w-4 h-4" alt="cart" />
                    </div>
                    <span className="hidden lg:block text-[#2D3B36] font-medium text-sm">Cart (1)</span>
                </div>

                {/* Heart/Wishlist */}
                <div className="bg-[#F8FEE5] rounded-full p-1.5 cursor-pointer">
                    <img src={assets.heart} className="bg-[#F8FEE5] w-4 h-4" alt="heart" />
                </div>

                {/* User Profile */}
                <div className="bg-[#F8FEE5] rounded-full p-1.5 cursor-pointer">
                    <img src={assets.person} className="bg-[#F8FEE5] w-4 h-4" alt="user" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;