import React from 'react';
import { assets } from '../assets/assets';
import TopSection from './TopSection';
import CentralBottomSection from './CentralBottomSection';

const HeroSection = () => {

  return (
    <div className="flex flex-col sm:gap-32 lg:gap-0 bg-[#EFF5E1]">
      <TopSection />
      <CentralBottomSection />
    </div>
  );
};

export default HeroSection;