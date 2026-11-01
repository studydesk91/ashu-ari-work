import React from 'react';
import { MessageCircle, Check, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG, TRANSLATIONS } from '../config/business';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { TextileArtwork } from './TextileArtwork';

interface CraftServicesProps {
  language: 'en' | 'mr';
}

export const CraftServicesSection: React.FC<CraftServicesProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  const aariService = BUSINESS_CONFIG.services.find(s => s.categoryKey === 'aari')!;
  const paintingService = BUSINESS_CONFIG.services.find(s => s.categoryKey === 'painting')!;

  const aariWhatsapp = getWhatsAppUrl({
    phoneNumber: BUSINESS_CONFIG.whatsappNumber,
    service: "Aari Embroidery",
    message: "Namaste Ashwini ji, I would like to discuss custom Aari embroidery for my blouse/saree.",
  });

  const paintingWhatsapp = getWhatsAppUrl({
    phoneNumber: BUSINESS_CONFIG.whatsappNumber,
    service: "Fabric Painting",
    message: "Namaste Ashwini ji, I would like to enquire about bespoke hand-painted fabric designs.",
  });

  return (
    <div className="space-y-0">
      
      {/* 1. Aari Embroidery Section */}
      <section id="aari-work" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#EFE5DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Copy Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#C4A572] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#C4A572]" />
                <span>01. HERITAGE NEEDLECRAFT</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#292525] leading-tight">
                {language === 'mr' ? aariService.marathiTitle : aariService.title}
              </h2>

              <p className="text-base sm:text-lg text-[#572B3A] font-serif italic">
                {aariService.subtitle}
              </p>

              <p className="text-base text-[#615757] leading-relaxed">
                {aariService.description}
              </p>

              {/* Sample Work Categories (Unboxed with checkmarks) */}
              <div className="pt-2">
                <h3 className="text-xs uppercase tracking-wider text-[#292525] font-semibold mb-3">
                  {language === 'mr' ? 'काम करण्याचे संभाव्य प्रकार' : 'Potential Custom Specializations'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {aariService.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-[#292525]">
                      <span className="mt-1 text-[#C4A572] shrink-0">
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enquiry Button */}
              <div className="pt-4">
                <a
                  href={aariWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-[#FAF7F2] bg-[#572B3A] hover:bg-[#3F1D29] rounded transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A572]"
                >
                  <MessageCircle className="w-4 h-4 text-[#C4A572]" />
                  <span>{language === 'mr' ? 'आरी वर्कबद्दल चौकशी करा' : 'Enquire About Aari Work'}</span>
                </a>
              </div>

            </div>

            {/* Visual Canvas Column */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-4/3 bg-[#3F1D29] border border-[#C4A572]/40">
                  <TextileArtwork
                    patternType="peacock_zari"
                    category="aari"
                    title="Intricate Peacock Zari Aari Embroidery"
                  />
                </div>
                
                {/* Descriptive caption */}
                <div className="mt-3 flex items-center justify-between text-xs text-[#615757]">
                  <span>Craft: Aari Tambour Hook · Metallic Zari & Beads</span>
                  <span>Handcrafted in Pune</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Fabric Painting Section */}
      <section id="fabric-painting" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#EFE5DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Canvas Column (Asymmetric alternate layout) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-4/3 bg-[#FAF7F2] border border-[#EFE5DA]">
                  <TextileArtwork
                    patternType="lotus_organza"
                    category="painting"
                    title="Hand-Painted Lotus on Pure Organza"
                  />
                </div>

                {/* Descriptive caption */}
                <div className="mt-3 flex items-center justify-between text-xs text-[#615757]">
                  <span>Art: Hand-Painted Botanical Organza & Tussar Silk</span>
                  <span>Handcrafted in Pune</span>
                </div>
              </div>
            </div>

            {/* Copy Column */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#C4A572] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#C4A572]" />
                <span>02. WEARABLE TEXTILE ART</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#292525] leading-tight">
                {language === 'mr' ? paintingService.marathiTitle : paintingService.title}
              </h2>

              <p className="text-base sm:text-lg text-[#572B3A] font-serif italic">
                {paintingService.subtitle}
              </p>

              <p className="text-base text-[#615757] leading-relaxed">
                {paintingService.description}
              </p>

              {/* Sample Work Categories */}
              <div className="pt-2">
                <h3 className="text-xs uppercase tracking-wider text-[#292525] font-semibold mb-3">
                  {language === 'mr' ? 'काम करण्याचे संभाव्य प्रकार' : 'Potential Custom Specializations'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {paintingService.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-[#292525]">
                      <span className="mt-1 text-[#C4A572] shrink-0">
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enquiry Button */}
              <div className="pt-4">
                <a
                  href={paintingWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-[#572B3A] bg-[#FAF7F2] hover:bg-[#EFE5DA] border border-[#572B3A] rounded transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A572]"
                >
                  <MessageCircle className="w-4 h-4 text-[#572B3A]" />
                  <span>{language === 'mr' ? 'फॅब्रिक पेंटिंगबद्दल चौकशी करा' : 'Enquire About Fabric Painting'}</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
