import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';

interface TestimonialsSectionProps {
  language: 'en' | 'mr';
}

/**
 * Customer Testimonials Section
 * 
 * In accordance with client specifications:
 * This component remains inactive until genuine customer reviews, identities,
 * and permissions are supplied in src/config/business.ts.
 */
export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ language }) => {
  if (!BUSINESS_CONFIG.showTestimonials || BUSINESS_CONFIG.testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-[#FAF7F2] border-t border-[#EFE5DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#C4A572] uppercase">
            {language === 'mr' ? 'ग्राहकांचे अनुभव' : 'CLIENT EXPERIENCES'}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#292525]">
            {language === 'mr' ? 'ग्राहकांचे समाधान' : 'Words From Our Patrons'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BUSINESS_CONFIG.testimonials.map((t) => (
            <div key={t.id} className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#EFE5DA]">
              <p className="font-serif italic text-base text-[#292525] mb-4">
                "{t.quote}"
              </p>
              <div className="text-xs">
                <p className="font-semibold text-[#572B3A]">{t.name}</p>
                <p className="text-[#615757]">{t.project} · {t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
