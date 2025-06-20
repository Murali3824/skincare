import React, { useState, useEffect, useRef } from 'react';
import { Headphones, Plus, Minus } from 'lucide-react';
import { assets } from '../assets/assets';
import gsap from 'gsap';

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

    const imageRef = useRef(null);
    const badgeRef = useRef(null);
    const titleRef = useRef(null);
    const faqItemsRef = useRef([]);
    const answerRefs = useRef([]);

    useEffect(() => {
        // Image zoom animation
        gsap.fromTo(
            imageRef.current,
            { scale: 1.1 },
            { 
                scale: 1, 
                duration: 2, 
                ease: "power1.out" 
            }
        );

        // FAQ badge and title animation
        gsap.fromTo(
            [badgeRef.current, titleRef.current],
            { opacity: 0, y: 30 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                stagger: 0.2, 
                ease: "power3.out" 
            }
        );

        // Support badge animation
        gsap.fromTo(
            badgeRef.current,
            { opacity: 0, scale: 0.9 },
            { 
                opacity: 1, 
                scale: 1, 
                duration: 0.8, 
                ease: "power3.out",
                delay: 0.6 
            }
        );

        // FAQ items animation
        gsap.fromTo(
            faqItemsRef.current,
            { opacity: 0, x: -20 },
            { 
                opacity: 1, 
                x: 0, 
                duration: 0.6, 
                stagger: 0.1, 
                ease: "power3.out",
                delay: 0.8 
            }
        );

        // Initial answer animation for open FAQ
        if (openFAQ !== null && answerRefs.current[openFAQ]) {
            gsap.fromTo(
                answerRefs.current[openFAQ],
                { height: 0, opacity: 0 },
                { 
                    height: "auto", 
                    opacity: 1, 
                    duration: 0.5, 
                    ease: "power3.out" 
                }
            );
        }
    }, []);

    useEffect(() => {
        // Animate answer height and opacity when FAQ is toggled
        faqData.forEach((faq, index) => {
            if (answerRefs.current[index]) {
                if (openFAQ === faq.id) {
                    gsap.to(answerRefs.current[index], {
                        height: "auto",
                        opacity: 1,
                        duration: 0.5,
                        ease: "power3.out"
                    });
                } else {
                    gsap.to(answerRefs.current[index], {
                        height: 0,
                        opacity: 0,
                        duration: 0.5,
                        ease: "power3.out"
                    });
                }
            }
        });
    }, [openFAQ]);

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <div className="px-6 mx-auto lg:py-24 w-full bg-[#FEFFF4] min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Product Image Section */}
                <div className="relative hidden lg:block">
                    <div className="rounded-lg w-full h-full flex items-center justify-center">
                        <img 
                            ref={imageRef}
                            src={assets.product3} 
                            alt="Skincare Product" 
                            className="rounded-lg max-w-[80%] max-h-[80%] object-contain" 
                        />
                    </div>

                    {/* 24/7 Support Badge */}
                    <div 
                        ref={badgeRef}
                        className="absolute bottom-6 left-[20%] md:left-1/3 bg-white/90 backdrop-blur-sm rounded-full px-4 py-3 flex items-center gap-3 shadow-lg"
                    >
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
                    <div 
                        ref={badgeRef}
                        className="inline-flex items-center gap-2 border border-[#2B3B36] rounded-full px-3 py-2"
                    >
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">Frequently Asked Question</span>
                    </div>

                    {/* FAQ Title */}
                    <h2 
                        ref={titleRef}
                        className="text-3xl lg:text-4xl font-medium text-[#2D3B36] leading-tight"
                    >
                        Answers to Your<br />
                        Skincare Questions, All<br />
                        in One Place.
                    </h2>

                    {/* FAQ Items */}
                    <div className="space-y-2">
                        {faqData.map((faq, index) => (
                            <div 
                                key={faq.id} 
                                className="border border-[#2B3B36] rounded-lg overflow-hidden"
                                ref={el => faqItemsRef.current[index] = el}
                            >
                                <button
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-[#2B3B36]/5 transition-colors"
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

                                <div 
                                    ref={el => answerRefs.current[index] = el}
                                    className="px-4 overflow-hidden"
                                    style={{ height: openFAQ === faq.id ? 'auto' : '0px' }}
                                >
                                    <div className="text-gray-600 text-sm leading-relaxed pt-2 border-t border-gray-100">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;