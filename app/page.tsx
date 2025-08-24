"use client";

import { useState } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import BlogsSection from "./components/BlogsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  const [currentBgColor, setCurrentBgColor] = useState("#e0ce8a");

  return (
    <div
      className='min-h-screen transition-colors duration-1000'
      style={{ backgroundColor: currentBgColor }}
    >
      <Navigation currentBgColor={currentBgColor} />
      <HeroSection onBgColorChange={setCurrentBgColor} />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
