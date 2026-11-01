import React from 'react';
import { MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG, TRANSLATIONS } from '../config/business';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { TextileArtwork } from './TextileArtwork';

interface AboutSectionProps {
  language: 'en' | 'mr';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  const whatsappHref = getWhatsAppUrl({
    phoneNumber: BUSINESS_CONFIG.whatsappNumber,
    service: "Artist Consultation",
    message: "Namaste Ashwini ji, I would like to consult with you about designing a custom piece.",
  });

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#EFE5DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Artist Portrait Frame & Brand Signature */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Decorative Luxury Gold Border */}
              <div className="absolute -inset-3 border border-[#C4A572]/40 rounded-2xl transform -rotate-1 pointer-events-none" />

              {/* Artist Portrait Container */}
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-4/5 bg-[#3F1D29] border border-[#C4A572]/30">
                <TextileArtwork
                  patternType="artist_portrait"
                  title="Ashwini Tupe - Textile Artist"
                />

                {/* Subdued replacement note for owner */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#FAF7F2]/95 backdrop-blur-xs p-3 rounded-lg border border-[#EFE5DA] text-center">
                  <p className="font-serif text-sm font-semibold text-[#572B3A]">
                    {BUSINESS_CONFIG.brandName}
                  </p>
                  <p className="text-[11px] text-[#615757]">
                    Handcrafted Textile Art Studio · Pune
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Authentic Story & Message */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#C4A572] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#C4A572]" />
              <span>{t.about.eyebrow}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#292525] leading-tight">
              {t.about.heading}
            </h2>

            {/* Authentic Brand Tagline */}
            <p className="font-serif italic text-lg sm:text-xl text-[#572B3A]">
              "{language === 'mr' ? BUSINESS_CONFIG.taglineMarathi : BUSINESS_CONFIG.tagline}"
            </p>

            {/* Authentic Narrative */}
            <div className="space-y-4 text-base text-[#615757] leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            {/* Location & Contact Notice */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border-t border-[#EFE5DA] text-xs text-[#615757]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C4A572] shrink-0" />
                <span>{t.about.locationNote}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#572B3A]">Art Forms:</span>
                <span>Aari Work & Fabric Painting</span>
              </div>
            </div>

            {/* Direct WhatsApp CTA */}
            <div className="pt-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#FAF7F2] bg-[#572B3A] hover:bg-[#3F1D29] rounded transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A572]"
              >
                <MessageCircle className="w-4 h-4 text-[#C4A572]" />
                <span>{t.about.whatsappCta}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
