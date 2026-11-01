import React from 'react';
import { BUSINESS_CONFIG, TRANSLATIONS } from '../config/business';

interface ProcessSectionProps {
  language: 'en' | 'mr';
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const steps = BUSINESS_CONFIG.processSteps;

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#EFE5DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-4">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#C4A572] uppercase">
            {t.process.eyebrow}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#292525] leading-tight">
            {t.process.heading}
          </h2>
          <p className="text-base text-[#615757] leading-relaxed">
            {t.process.subtitle}
          </p>
        </div>

        {/* 4 Steps Horizontal Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((stepItem, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between bg-[#FAF7F2] p-6 sm:p-7 rounded-2xl border border-[#EFE5DA] hover:border-[#C4A572]/40 transition-colors"
            >
              <div>
                {/* Step Number in Editorial Serif */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif text-3xl sm:text-4xl font-light text-[#C4A572]">
                    {stepItem.step}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#615757]">
                    STAGE {stepItem.step}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-medium text-[#292525] mb-3 leading-snug">
                  {language === 'mr' ? stepItem.marathiTitle : stepItem.title}
                </h3>

                <p className="text-sm text-[#615757] leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              {/* Decorative Subtle Progress Accent */}
              <div className="mt-6 pt-4 border-t border-[#EFE5DA] flex items-center justify-between text-xs text-[#C4A572]">
                <span className="font-medium">Step {idx + 1} of 4</span>
                <span aria-hidden="true">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
