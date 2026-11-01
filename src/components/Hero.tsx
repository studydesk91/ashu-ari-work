import React from 'react';
import { ArrowDown, MessageCircle, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG, TRANSLATIONS } from '../config/business';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { TextileArtwork } from './TextileArtwork';

interface HeroProps {
  language: 'en' | 'mr';
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  const whatsappHref = getWhatsAppUrl({
    phoneNumber: BUSINESS_CONFIG.whatsappNumber,
    service: "Custom Embroidery & Painting",
    message: "Namaste Ashwini ji, I would like to explore custom Aari and Fabric Painting designs.",
  });

  const handleScrollToCreations = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#creations');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden bg-[#FAF7F2]">
      {/* Background delicate artistic embellishment */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFE5DA]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-[#EBCFD0]/30 rounded-full blur-2xl pointer-events-none -ml-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Editorial Split Grid: Left copy, Right artwork container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (Typographic Hierarchy) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            
            {/* Eyebrow / Kicker: Clean unboxed text with typographic separators */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#C4A572] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#C4A572]" />
              <span>{t.hero.eyebrow}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#615757] font-normal tracking-wider">PUNE</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-[#292525] leading-[1.12] tracking-tight [text-wrap:balance]">
              {t.hero.title}
            </h1>

            {/* Lead copy */}
            <p className="text-base sm:text-lg text-[#615757] font-normal leading-relaxed max-w-xl">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#creations"
                onClick={handleScrollToCreations}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-[#FAF7F2] bg-[#572B3A] hover:bg-[#3F1D29] transition-all rounded shadow-sm hover:shadow-md whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A572]"
              >
                {t.hero.exploreBtn}
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#572B3A] bg-[#FAF7F2] hover:bg-[#EFE5DA] border border-[#C4A572] transition-colors rounded shadow-xs whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A572]"
              >
                <MessageCircle className="w-4 h-4 text-[#572B3A]" />
                <span>{t.hero.whatsappBtn}</span>
              </a>
            </div>

            {/* Quiet Craft Highlights below copy (Unboxed metadata with separators) */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#615757] border-t border-[#EFE5DA]">
              <span className="font-medium text-[#572B3A]">Aari Tambour Needlework</span>
              <span aria-hidden="true" className="text-[#C4A572]">·</span>
              <span className="font-medium text-[#572B3A]">Bridal Blouses</span>
              <span aria-hidden="true" className="text-[#C4A572]">·</span>
              <span className="font-medium text-[#572B3A]">Hand-Painted Sarees</span>
              <span aria-hidden="true" className="text-[#C4A572]">·</span>
              <span>Pune Studio</span>
            </div>

          </div>

          {/* Right Column: Visual Artwork Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative golden accent frame */}
              <div className="absolute -inset-2.5 border border-[#C4A572]/40 rounded-2xl transform rotate-1 transition-transform duration-500 pointer-events-none" />

              {/* Central Textile Artwork Canvas */}
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 bg-[#3F1D29] border border-[#C4A572]/30">
                <TextileArtwork
                  patternType="hero_composition"
                  title="Handcrafted Aari and Fabric Art"
                />

                {/* Subtle caption overlay badge in corner */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#FAF7F2]/95 backdrop-blur-md px-4 py-2.5 rounded-lg border border-[#EFE5DA] shadow-md">
                  <p className="text-[11px] uppercase tracking-wider text-[#C4A572] font-semibold">
                    Ashwini Tupe | Studio
                  </p>
                  <p className="font-serif text-sm text-[#292525] font-medium">
                    Bespoke Hand Embroidery & Painting
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Refined Scroll Indicator */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="#introduction"
            aria-label="Scroll to introduction section"
            className="inline-flex flex-col items-center gap-1.5 text-xs text-[#615757] hover:text-[#572B3A] transition-colors group focus-visible:outline-none"
          >
            <span className="tracking-widest uppercase text-[10px] font-medium">Discover More</span>
            <ArrowDown className="w-4 h-4 text-[#C4A572] animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};
