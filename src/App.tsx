/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroductionSection } from './components/IntroductionSection';
import { CraftServicesSection } from './components/CraftServicesSection';
import { GallerySection } from './components/GallerySection';
import { WhyHandmadeSection } from './components/WhyHandmadeSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingControls } from './components/FloatingControls';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'mr'>('en');
  const [activeSection, setActiveSection] = useState('home');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'mr' : 'en'));
  };

  // Intersection observer to track active section for header
  useEffect(() => {
    const sectionIds = ['home', 'aari-work', 'fabric-painting', 'creations', 'about', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#292525] flex flex-col font-sans selection:bg-[#EBCFD0] selection:text-[#572B3A]">
      {/* Premium Top Navigation Bar */}
      <Navbar
        language={language}
        onLanguageToggle={toggleLanguage}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Editorial Hero */}
        <Hero language={language} />

        {/* Introduction Section */}
        <IntroductionSection language={language} />

        {/* Our Craft Services: Aari Embroidery & Fabric Painting */}
        <CraftServicesSection language={language} />

        {/* Featured Creations Gallery with Fullscreen Lightbox */}
        <GallerySection language={language} />

        {/* Why Choose Handcrafted Art (4 Pillars) */}
        <WhyHandmadeSection language={language} />

        {/* Custom Order / Enquiry Process (01 - 04) */}
        <ProcessSection language={language} />

        {/* Meet the Artist: Ashwini Tupe */}
        <AboutSection language={language} />

        {/* Customer Testimonials (Authentic Conditional Rendering) */}
        <TestimonialsSection language={language} />

        {/* Contact / WhatsApp Enquiry Form */}
        <ContactSection language={language} />
      </main>

      {/* Luxury Dark Burgundy Footer */}
      <Footer language={language} />

      {/* Floating WhatsApp and Scroll-to-Top CTAs */}
      <FloatingControls />
    </div>
  );
}
