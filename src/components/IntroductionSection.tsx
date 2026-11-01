import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TRANSLATIONS } from '../config/business';
import { TextileArtwork } from './TextileArtwork';

interface IntroductionSectionProps {
  language: 'en' | 'mr';
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <section id="introduction" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#EFE5DA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Handcrafted Motif Canvas */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-4/3 sm:aspect-square bg-[#EFE5DA] border border-[#EFE5DA]">
                <TextileArtwork
                  patternType="paisley_kundan"
                  category="aari"
                  title="Traditional Handcrafted Motifs"
                />
              </div>

              {/* Decorative Subtle Accent Card */}
              <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:-right-8 bg-[#FAF7F2] p-5 rounded-xl border border-[#C4A572]/40 shadow-xl max-w-[240px]">
                <p className="font-serif italic text-base text-[#572B3A] leading-snug">
                  "Every stitch is a conscious intention of grace and tradition."
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-wider text-[#C4A572] font-semibold">
                  Ashwini Tupe
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Warm Storytelling */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            
            {/* Eyebrow */}
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#C4A572] uppercase">
              {t.intro.eyebrow}
            </p>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#292525] leading-tight [text-wrap:balance]">
              {t.intro.heading}
            </h2>

            {/* Editorial Storytelling Prose */}
            <div className="space-y-4 text-base sm:text-lg text-[#615757] leading-relaxed">
              <p>{t.intro.p1}</p>
              <p>{t.intro.p2}</p>
            </div>

            {/* Link to About Section */}
            <div className="pt-2">
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#572B3A] hover:text-[#3F1D29] group transition-colors focus-visible:outline-none"
              >
                <span>{t.intro.aboutLink}</span>
                <ArrowRight className="w-4 h-4 text-[#C4A572] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
