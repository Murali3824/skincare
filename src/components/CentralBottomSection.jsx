import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '../assets/assets';

gsap.registerPlugin(ScrollTrigger);

const CentralBottomSection = () => {
    const containerRef = useRef(null);
    const desktopRef = useRef(null);
    const tabletRef = useRef(null);
    const mobileRef = useRef(null);
    const backgroundTextRef = useRef(null);
    const imageRef = useRef(null);
    const buttonRef = useRef(null);
    const productCardRef = useRef(null);
    const descriptionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Desktop animations
            if (desktopRef.current) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: desktopRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                });

                // Background text animation
                tl.fromTo(backgroundTextRef.current, 
                    { 
                        opacity: 0, 
                        scale: 0.8,
                        rotationX: 45
                    },
                    { 
                        opacity: 1, 
                        scale: 1,
                        rotationX: 0,
                        duration: 1.2,
                        ease: "power3.out"
                    }
                );

                // Main image animation
                tl.fromTo(imageRef.current, 
                    { 
                        y: 100, 
                        opacity: 0, 
                        scale: 0.9,
                        rotationY: 15
                    },
                    { 
                        y: 0, 
                        opacity: 1, 
                        scale: 1,
                        rotationY: 0,
                        duration: 1,
                        ease: "power3.out"
                    }, "-=0.8"
                );

                // Button animation
                tl.fromTo(buttonRef.current, 
                    { 
                        x: -100, 
                        opacity: 0,
                        scale: 0.8
                    },
                    { 
                        x: 0, 
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "back.out(1.7)"
                    }, "-=0.6"
                );

                // Product card animation
                tl.fromTo(productCardRef.current, 
                    { 
                        y: 50, 
                        opacity: 0,
                        scale: 0.9
                    },
                    { 
                        y: 0, 
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "power2.out"
                    }, "-=0.4"
                );

                // Description animation
                tl.fromTo(descriptionRef.current, 
                    { 
                        y: 30, 
                        opacity: 0
                    },
                    { 
                        y: 0, 
                        opacity: 1,
                        duration: 1,
                        ease: "power2.out"
                    }, "-=0.3"
                );

                // Button hover animation
                if (buttonRef.current) {
                    const button = buttonRef.current;
                    
                    button.addEventListener('mouseenter', () => {
                        gsap.to(button, {
                            scale: 1.05,
                            y: -2,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    });

                    button.addEventListener('mouseleave', () => {
                        gsap.to(button, {
                            scale: 1,
                            y: 0,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    });
                }
            }

            // Tablet animations
            if (tabletRef.current) {
                const tabletTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: tabletRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                });

                const tabletElements = tabletRef.current.querySelectorAll('.animate-tablet');
                tabletTl.fromTo(tabletElements, 
                    { 
                        y: 50, 
                        opacity: 0,
                        scale: 0.95
                    },
                    { 
                        y: 0, 
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power3.out"
                    }
                );
            }

            // Mobile animations
            if (mobileRef.current) {
                const mobileTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: mobileRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                });

                const mobileElements = mobileRef.current.querySelectorAll('.animate-mobile');
                mobileTl.fromTo(mobileElements, 
                    { 
                        y: 30, 
                        opacity: 0
                    },
                    { 
                        y: 0, 
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.15,
                        ease: "power2.out"
                    }
                );
            }

            // Continuous floating animation for product cards
            gsap.to('.floating-card', {
                y: -10,
                duration: 2,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="" ref={containerRef}>
            {/* Desktop Layout */}
            <div className="hidden lg:block" ref={desktopRef}>
                <div className="container mx-auto relative max-w-7xl">
                    {/* Central Section */}
                    <div className="bg-[#EFF5E1] relative flex justify-center items-center min-h-[500px]">
                        <div className="absolute inset-0 top-1/2 flex items-center justify-center pointer-events-none overflow-hidden">
                            <h2 
                                ref={backgroundTextRef}
                                className="text-[12rem] xl:text-[15rem] font-black text-[#2D3B36] leading-none tracking-wider select-none whitespace-nowrap"
                            >
                                SKINCARE
                            </h2>
                        </div>
                        <div className="absolute left-12 top-1/3 z-30">
                            <button 
                                ref={buttonRef}
                                className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#2D3B36] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Shop Now
                            </button>
                        </div>
                        <div className="relative z-20" ref={imageRef}>
                            <div className="w-96 h-[27rem] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 via-teal-100 to-green-200">
                                <img
                                    src={assets.banner1}
                                    alt="Woman with skincare routine"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-8 bg-transparent left-1/2 transform -translate-x-1/2">
                                    <div 
                                        ref={productCardRef}
                                        className="w-80 bg-[#EFF5E1] rounded-full px-2 py-2 shadow-xl border border-white/20 flex items-center space-x-4 max-w-md floating-card"
                                    >
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
                    <div className="pt-10 mx-auto text-left px-6 bg-[#FEFFF4]">
                        <p 
                            ref={descriptionRef}
                            className="text-[#2D3B36] text-2xl sm:text-3xl lg:text-4xl leading-relaxed"
                        >
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
            <div className="hidden sm:block lg:hidden" ref={tabletRef}>
                <div className="container mx-auto max-w-full relative">
                    <div className="relative bg-[#EFF5E1] px-6 flex justify-between items-center mb-20">
                        <div className="absolute inset-0 top-[100%] flex items-center justify-start pointer-events-none">
                            <h2 className="text-9xl font-black text-[#2D3B36] leading-none tracking-wider select-none whitespace-nowrap animate-tablet">
                                SKINCARE
                            </h2>
                        </div>
                        <div className="relative z-20 animate-tablet">
                            <div className="w-72 h-80 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 via-teal-100 to-green-200">
                                <img
                                    src={assets.banner1}
                                    alt="Woman with skincare routine"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-6 left-1/2 bg-transparent transform -translate-x-1/2">
                                    <div className="w-64 bg-[#EFF5E1] rounded-full px-1.5 py-0.5 shadow-xl border border-white/20 flex items-center space-x-3 floating-card">
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
                        <div className="relative z-30 mr-20 animate-tablet">
                            <button className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#2D3B36] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Shop Now
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#FEFFF4] py-8 px-6  text-left animate-tablet">
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
            <div className="sm:hidden" ref={mobileRef}>
                <div className="min-h-screen flex flex-col">
                    <div className="flex-1 flex flex-col justify-center items-center pt-8">
                        <div className="bg-[#EFF5E1] relative animate-mobile">
                            <div className="w-full h-full overflow-hidden shadow-2xl">
                                <img
                                    src={assets.banner1}
                                    alt="Woman with skincare routine"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="bg-[#EFF5E1] absolute top-[90%] bg-transparent left-1/2 transform -translate-x-1/2 animate-mobile">
                            <div className="w-64 bg-[#EFF5E1] rounded-full px-1.5 py-0.5 shadow-xl border border-white/20 flex items-center space-x-3 floating-card">
                                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-dotted border-slate-300">
                                    <img src={assets.product} className="w-full h-full object-cover" alt="" />
                                </div>
                                <div className="text-xs flex-1">
                                    <div className="font-medium text-slate-800 leading-relaxed">While giving you an invigorating cleansing experience.</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#EFF5E1] relative animate-mobile">
                            <h2 className="text-7xl font-black text-[#2D3B36] leading-none tracking-wider text-center">
                                SKINCARE
                            </h2>
                        </div>
                        <div className="bg-[#EFF5E1] mb-8 animate-mobile">
                            <div className="w-full h-full">
                                <img
                                    src={assets.product}
                                    alt="Skincare Product"
                                    className="w-full h-full object-cover shadow-lg"
                                />
                            </div>
                        </div>
                        <div className="bg-[#EFF5E1] mb-8 animate-mobile">
                            <button className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#2D3B36] transition-all duration-300 shadow-lg w-full max-w-xs">
                                Shop Now
                            </button>
                        </div>
                        <div className="bg-[#EFF5E1] px-4 py-6 text-left animate-mobile">
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