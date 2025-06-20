import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '../assets/assets';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Part 1: TopSection (Top Left Text, Top Right Image, GLOW NATURALLY Text)
const TopSection = () => {
    const containerRef = useRef(null);
    const headingRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const mainTextRef = useRef(null);
    const tabletHeadingRef = useRef(null);
    const mobileHeadingRef = useRef(null);
    const mobileTextRef = useRef(null);
    const tabletTextRef = useRef(null);
    const tabletImageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial setup - hide elements
            gsap.set([headingRef.current, textRef.current, imageRef.current, tabletHeadingRef.current, mobileHeadingRef.current, mobileTextRef.current, tabletTextRef.current, tabletImageRef.current], {
                opacity: 0,
                y: 60
            });

            // Main timeline for page load animation
            const tl = gsap.timeline({
                delay: 0.3,
                ease: "power3.out"
            });

            // Animate elements based on screen size
            tl.to([headingRef.current, tabletHeadingRef.current, mobileHeadingRef.current], {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out"
            })
            .to([textRef.current, tabletTextRef.current, mobileTextRef.current], {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.6")
            .to([imageRef.current, tabletImageRef.current], {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8");

            // Text reveal animation on scroll for all text elements
            const textElements = [mainTextRef.current, document.querySelector('.tablet-text'), document.querySelector('.mobile-text')];
            
            textElements.forEach((textElement) => {
                if (textElement) {
                    const words = textElement.querySelectorAll('.word');
                    
                    if (words.length > 0) {
                        gsap.set(words, {
                            opacity: 0.3,
                            filter: 'blur(2px)'
                        });

                        ScrollTrigger.create({
                            trigger: textElement,
                            start: "top 80%",
                            end: "bottom 20%",
                            onUpdate: (self) => {
                                const progress = self.progress;
                                words.forEach((word, index) => {
                                    const wordProgress = Math.max(0, Math.min(1, (progress * words.length - index) / 1));
                                    gsap.to(word, {
                                        opacity: 0.3 + (wordProgress * 0.7),
                                        filter: `blur(${2 - (wordProgress * 2)}px)`,
                                        duration: 0.3,
                                        ease: "power2.out"
                                    });
                                });
                            }
                        });
                    }
                }
            });

            // Hover animation for images
            const imageElements = [imageRef.current, tabletImageRef.current];
            imageElements.forEach(imageElement => {
                if (imageElement) {
                    imageElement.addEventListener('mouseenter', () => {
                        gsap.to(imageElement, {
                            scale: 1.05,
                            duration: 0.4,
                            ease: "power2.out"
                        });
                    });

                    imageElement.addEventListener('mouseleave', () => {
                        gsap.to(imageElement, {
                            scale: 1,
                            duration: 0.4,
                            ease: "power2.out"
                        });
                    });
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Function to split text into words for animation
    const splitTextIntoWords = (text) => {
        return text.split(' ').map((word, index) => (
            <span key={index} className="word inline-block">
                {word}{index < text.split(' ').length - 1 ? ' ' : ''}
            </span>
        ));
    };

    return (
        <div ref={containerRef} className="bg-[#EFF5E1]">
            {/* Desktop Layout */}
            <div className="hidden lg:block">
                <div className="container mx-auto py-16 max-w-7xl px-6">
                    <div className="grid grid-cols-3 gap-8 items-start">
                        {/* Top Left Text */}
                        <div ref={textRef} className="max-w-xs text-sm text-slate-700 leading-relaxed pt-8">
                            <div ref={mainTextRef}>
                                <span className="font-medium pl-10">
                                    Transform your skincare
                                </span>{' '}
                                    routine with premium products that restore, protect, and enhance your natural glow every day.
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div ref={headingRef} className="text-left">
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
                            <div ref={imageRef} className="w-48 h-48">
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
                        <div ref={tabletTextRef} className="max-w-xs px-6 text-base text-slate-700 leading-relaxed">
                            <div className="tablet-text pl-10">
                                Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
                            </div>
                        </div>

                        {/* Top Right Product Image */}
                        <div ref={tabletImageRef} className="w-80 h-80 px-6">
                            <img
                                src={assets.product}
                                alt="Skincare Product"
                                className="w-full h-full object-cover shadow-lg"
                            />
                        </div>

                        {/* Main Heading */}
                        <div ref={tabletHeadingRef} className="absolute bottom-0 left-0 right-0 top-[75%] text-left w-full z-10">
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
                    <div ref={mobileHeadingRef} className="text-left mb-6">
                        <h1 className="text-7xl font-bold text-[#2B3B36] leading-[1] tracking-tight m-0 p-0">
                            <span className="block m-0 p-0">GLOWWWW</span>
                            <span className="block m-0 p-0 -mt-5">NATURALLY</span>
                        </h1>
                    </div>
                    <div ref={mobileTextRef} className="text-left mb-4 px-4 max-w-sm">
                        <div className="mobile-text text-[#2B3B36] text-sm leading-relaxed">
                            Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSection;