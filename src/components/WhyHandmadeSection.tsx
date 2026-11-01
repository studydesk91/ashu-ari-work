import React from 'react';
import { Sparkles, HeartHandshake, Compass, Scissors } from 'lucide-react';
import { TRANSLATIONS } from '../config/business';

interface WhyHandmadeSectionProps {
  language: 'en' | 'mr';
}

export const WhyHandmadeSection: React.FC<WhyHandmadeSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  const pillars = [
    {
      icon: Sparkles,
      title: t.whyHandmade.card1Title,
      description: t.whyHandmade.card1Desc,
    },
    {
      icon: HeartHandshake,
      title: t.whyHandmade.card2Title,
      description: t.whyHandmade.card2Desc,
    },
    {
      icon: Compass,
      title: t.whyHandmade.card3Title,
      description: t.whyHandmade.card3Desc,
    },
    {
      icon: Scissors,
      title: t.whyHandmade.card4Title,
      description: t.whyHandmade.card4Desc,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#EFE5DA]/40 border-t border-[#EFE5DA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#C4A572] uppercase">
            {t.whyHandmade.eyebrow}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#292525] leading-tight [text-wrap:balance]">
            {t.whyHandmade.heading}
          </h2>
          <div className="w-16 h-0.5 bg-[#C4A572] mx-auto mt-4" />
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#EFE5DA] hover:border-[#C4A572]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EFE5DA] flex items-center justify-center text-[#572B3A] mb-6">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#292525] mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#615757] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
