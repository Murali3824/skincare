import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award } from 'lucide-react';
import { assets } from '../assets/assets';


gsap.registerPlugin(ScrollTrigger);

const SkinDeservesSection = () => {
  const containerRef = useRef(null);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const tagRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const featuresRef = useRef(null);
  const imageRef = useRef(null);
  const awardBadgeRef = useRef(null);
  const footerInfoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Main timeline for the entire section
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Left section animations
      mainTl.fromTo(tagRef.current, 
        { 
          opacity: 0, 
          x: -30,
          scale: 0.9
        },
        { 
          opacity: 1, 
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out"
        }
      );

      // Split heading animation
      const headingText = headingRef.current;
      const words = headingText.textContent.split(' ');
      headingText.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');
      
      mainTl.fromTo(headingText.querySelectorAll('.word'), 
        { 
          opacity: 0, 
          y: 50,
          rotationX: 45
        },
        { 
          opacity: 1, 
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out"
        }, "-=0.6"
      );

      // Description animation
      mainTl.fromTo(descriptionRef.current, 
        { 
          opacity: 0, 
          y: 30,
          scale: 0.98
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.4"
      );

      // Features animation
      const features = featuresRef.current.querySelectorAll('.feature-item');
      features.forEach((feature, index) => {
        const number = feature.querySelector('.feature-number');
        const title = feature.querySelector('.feature-title');
        const desc = feature.querySelector('.feature-desc');

        mainTl.fromTo(number, 
          { 
            opacity: 0, 
            scale: 0.5,
            rotationY: 90
          },
          { 
            opacity: 1, 
            scale: 1,
            rotationY: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
          }, `-=${0.4 - index * 0.15}`
        );

        mainTl.fromTo([title, desc], 
          { 
            opacity: 0, 
            x: -20
          },
          { 
            opacity: 1, 
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
          }, `-=${0.4}`
        );
      });

      // Right section animations
      mainTl.fromTo(imageRef.current, 
        { 
          opacity: 0, 
          scale: 0.9,
          rotationY: 15,
          x: 50
        },
        { 
          opacity: 1, 
          scale: 1,
          rotationY: 0,
          x: 0,
          duration: 1.2,
          ease: "power3.out"
        }, "-=1"
      );

      // Award badge animation
      mainTl.fromTo(awardBadgeRef.current, 
        { 
          opacity: 0, 
          scale: 0.8,
          y: 20,
          rotation: -10
        },
        { 
          opacity: 1, 
          scale: 1,
          y: 0,
          rotation: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)"
        }, "-=0.6"
      );

      // Footer info animation
      mainTl.fromTo(footerInfoRef.current, 
        { 
          opacity: 0, 
          y: 20
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.4"
      );

      // Continuous animations
      // Floating award badge
      gsap.to(awardBadgeRef.current, {
        y: -8,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

      // Subtle feature number hover effects
      features.forEach((feature) => {
        const number = feature.querySelector('.feature-number');
        
        feature.addEventListener('mouseenter', () => {
          gsap.to(number, {
            scale: 1.1,
            color: '#16a34a',
            duration: 0.3,
            ease: "power2.out"
          });
        });

        feature.addEventListener('mouseleave', () => {
          gsap.to(number, {
            scale: 1,
            color: '#2D3B36',
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // Learn more button animation
      const learnMoreBtn = footerInfoRef.current.querySelector('button');
      if (learnMoreBtn) {
        learnMoreBtn.addEventListener('mouseenter', () => {
          gsap.to(learnMoreBtn, {
            x: 5,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        learnMoreBtn.addEventListener('mouseleave', () => {
          gsap.to(learnMoreBtn, {
            x: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }

      // Removed parallax and saturation effects to maintain original UI placement

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#FEFFF4]" ref={containerRef}>
      <div className="mx-auto">
        <div className="grid lg:grid-cols-5 gap-0 pt-10 items-stretch min-h-screen">
          {/* Left Content Section */}
          <div className="lg:col-span-2  p-6 md:p-12 flex items-center" ref={leftSectionRef}>
            <div className="space-y-8 w-full">
              {/* Tag */}
              <div 
                ref={tagRef}
                className="inline-flex items-center border border-[#2D3B36] gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-gray-700"
              >
                <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                Why Our Products
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 
                  ref={headingRef}
                  className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 leading-tight"
                >
                  YOUR SKIN DESERVES THE BEST CARE.
                </h1>
                <p 
                  ref={descriptionRef}
                  className="text-gray-600 text-sm max-w-md leading-relaxed"
                >
                  Discover a curated collection of skincare products designed to rejuvenate, 
                  protect, and pamper your skin. Explore our range crafted with love backed 
                  by science, and inspired by nature.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-8" ref={featuresRef}>
                {/* Feature 1 */}
                <div className="flex gap-6 feature-item">
                  <div className="text-3xl font-medium text-[#2D3B36] relative feature-number">
                    01
                    <div className="absolute bottom-12 left-0 w-full h-1/4 bg-gradient-to-t from-white to-transparent"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-medium text-[#2D3B36] feature-title">Bio Ingredients</h3>
                    <p className="text-sm text-gray-600 max-w-sm feature-desc">
                      Get naturally beautiful and transform with our bio 
                      ingredients creams for healthy, radiant skin.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-6 feature-item">
                  <div className="text-3xl font-medium text-[#2D3B36] relative feature-number">
                    02
                    <div className="absolute bottom-12 left-0 w-full h-1/4 bg-gradient-to-t from-white to-transparent"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-medium text-[#2D3B36] feature-title">Everything Natural</h3>
                    <p className="text-sm text-gray-600 max-w-sm feature-desc">
                      Pure ingredients for pure skin. The Perfect solution 
                      for your skin care needs.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-6 feature-item">
                  <div className="text-3xl font-medium text-[#2D3B36] relative feature-number">
                    03
                    <div className="absolute bottom-12 left-0 w-full h-1/4 bg-gradient-to-t from-white to-transparent"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-medium text-[#2D3B36] feature-title">All Handmade</h3>
                    <p className="text-sm text-gray-600 max-w-sm feature-desc">
                      Made with love and care. Just for you. Give your skin 
                      the tender loving care it deserves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:col-span-3 bg-[#FEFFF4] p-6 md:p-12 flex items-center justify-center" ref={rightSectionRef}>
            <div className="relative w-full lg:max-w-lg">
              <div className="relative lg:rounded-3xl overflow-hidden shadow-2xl" ref={imageRef}>
                {/* Main Image Container */}
                <div className="aspect-[2/3] sm:aspect-auto lg:aspect-[4/5] relative">
                  {/* Demo image - replace with your actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-green-800 to-green-900 flex items-center justify-center">
                    <img src={assets.banner2} className='w-full h-full object-cover' alt="Skincare product" />
                  </div>

                  {/* Award Badge */}
                  <div 
                    ref={awardBadgeRef}
                    className="absolute bottom-6 left-[20%] md:left-1/3 bg-white/90 backdrop-blur-sm rounded-full px-4 py-3 flex items-center gap-3 shadow-lg"
                  >
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
              <div 
                ref={footerInfoRef}
                className="flex justify-between items-center mt-6"
              >
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