import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Plus, Minus, Headphones } from 'lucide-react';
import { assets } from '../assets/assets';

const FAQSection = () => {
    const [openFAQ, setOpenFAQ] = useState(1); // Second FAQ is open by default

    const faqData = [
        {
            id: 0,
            question: "Are your products safe for sensitive skin?",
            answer: "Yes, our products are formulated with gentle ingredients suitable for sensitive skin. We conduct extensive testing and use hypoallergenic formulations."
        },
        {
            id: 1,
            question: "Are your products cruelty-free?",
            answer: "Absolutely! All our products are cruelty-free and most are vegan. Check individual product details for specifics."
        },
        {
            id: 2,
            question: "What's your return policy?",
            answer: "We offer a 30-day return policy for all unopened products. Opened products can be returned within 14 days if you're not satisfied."
        },
        {
            id: 3,
            question: "Do you ship internationally?",
            answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location."
        },
        {
            id: 4,
            question: "How do I choose the right product?",
            answer: "We recommend taking our skin quiz or consulting with our skincare experts. You can also read product reviews and descriptions to find what works best for your skin type."
        }
    ];

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <div className="px-6 mx-auto py-24 w-full bg-[#EFF5E1] min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Product Image Section */}
                <div className="relative hidden lg:block">
                    <div className=" rounded-lg w-full h-full flex items-center justify-center">
                        <img src={assets.product3} alt="Skincare Product" className=" rounded-lg max-w-[80%] max-h-[80%] object-contain" />
                    </div>

                    {/* 24/7 Support Badge */}
                    <div className="absolute bottom-6 left-[20%] md:left-1/3  bg-white/90 backdrop-blur-sm rounded-full px-4 py-3 flex items-center gap-3 shadow-lg">
                        <div className='w-10 h-10 flex items-center justify-center border border-dotted border-[#2D3B36] rounded-full'>
                            <div className="w-8 h-8 flex items-center justify-center bg-[#2D3B36] rounded-full">
                                <Headphones className="w-4 h-4 text-white" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="text-sm font-medium text-gray-800">Best Skin Care Product</div>
                            <div className="text-xs text-gray-600">Award Winning</div>
                        </div>
                    </div>

                </div>

                {/* FAQ Section */}
                <div className="space-y-10">
                    {/* FAQ Badge */}
                    <div className="inline-flex items-center gap-2 bg-gray-200 rounded-full px-3 py-1">
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">Frequently Asked Question</span>
                    </div>

                    {/* FAQ Title */}
                    <h2 className="text-3xl lg:text-4xl font-medium text-[#2D3B36] leading-tight">
                        Answers to Your<br />
                        Skincare Questions, All<br />
                        in One Place.
                    </h2>

                    {/* FAQ Items */}
                    <div className="space-y-1">
                        {faqData.map((faq) => (
                            <div key={faq.id} className="border border-gray-300 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="w-full px-4 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                                >
                                    <span className="text-gray-800 font-medium">{faq.question}</span>
                                    <div className="flex-shrink-0 ml-4">
                                        {openFAQ === faq.id ? (
                                            <Minus className="w-5 h-5 text-gray-600" />
                                        ) : (
                                            <Plus className="w-5 h-5 text-gray-600" />
                                        )}
                                    </div>
                                </button>

                                {openFAQ === faq.id && (
                                    <div className="px-4 pb-4 bg-white">
                                        <div className="text-gray-600 text-sm leading-relaxed pt-2 border-t border-gray-100">
                                            {faq.answer}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;