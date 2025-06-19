import React from "react";
import Navbar from "./components/Navbar";
import SkinDeservesSection from "./components/SkinDeservesSection";
import HeroSection from "./components/HeroSection";
import ProductCategories from "./components/ProductCategories";
import FeelBeautifulSection from "./components/FeelBeautifulSection";
import ProductShowcase from "./components/ProductShowcase";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800 flex flex-col min-h-screen">
      <Navbar />
      <HeroSection/>
      <SkinDeservesSection />
      <ProductShowcase/>
      <FeelBeautifulSection/>
      <ProductCategories/>
      <FAQSection/>
      <Footer/>
    </div>
  );
}

export default App;