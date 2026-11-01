import React from 'react';
import { MessageCircle, Instagram, MapPin, ArrowUp } from 'lucide-react';
import { BUSINESS_CONFIG, TRANSLATIONS } from '../config/business';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  language: 'en' | 'mr';
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const currentYear = new Date().getFullYear();
  const t = TRANSLATIONS[language];

  const whatsappHref = getWhatsAppUrl({
    phoneNumber: BUSINESS_CONFIG.whatsappNumber,
    service: "Footer Quick Enquiry",
    message: "Namaste Ashwini ji, I was browsing your website and would like to connect.",
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#3F1D29] text-[#FAF7F2] border-t border-[#572B3A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#572B3A]">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF7F2]">
              Ashwini Tupe
            </span>
            <p className="text-xs uppercase tracking-widest text-[#C4A572] font-medium">
              Aari & Fabric Art · Pune
            </p>
            <p className="font-serif italic text-sm text-[#EBCFD0] max-w-sm">
              "{language === 'mr' ? BUSINESS_CONFIG.taglineMarathi : BUSINESS_CONFIG.tagline}"
            </p>
            <p className="text-xs text-[#EBCFD0]/80 leading-relaxed max-w-sm">
              Dedicated to celebrating the heritage of Indian handcrafted needlework and expressive textile art for weddings, festivals, and discerning wardrobes.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#C4A572]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#EBCFD0]">
              <li>
                <a href="#home" className="hover:text-[#FAF7F2] transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#aari-work" className="hover:text-[#FAF7F2] transition-colors">
                  {t.nav.aari}
                </a>
              </li>
              <li>
                <a href="#fabric-painting" className="hover:text-[#FAF7F2] transition-colors">
                  {t.nav.painting}
                </a>
              </li>
              <li>
                <a href="#creations" className="hover:text-[#FAF7F2] transition-colors">
                  {t.nav.creations}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FAF7F2] transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FAF7F2] transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Direct Inquiries */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#C4A572]">
              Studio & Contact
            </h4>
            
            <div className="flex items-start gap-2 text-xs text-[#EBCFD0]">
              <MapPin className="w-4 h-4 text-[#C4A572] shrink-0 mt-0.5" />
              <span>{BUSINESS_CONFIG.locationFull}</span>
            </div>

            <div className="pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#292525] bg-[#FAF7F2] hover:bg-[#EFE5DA] rounded transition-colors shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#572B3A]" />
                <span>WhatsApp: {BUSINESS_CONFIG.whatsappNumber}</span>
              </a>
            </div>

            {BUSINESS_CONFIG.instagramHandle && (
              <div className="pt-1">
                <a
                  href={BUSINESS_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#EBCFD0] hover:text-[#FAF7F2] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#C4A572]" />
                  <span>@{BUSINESS_CONFIG.instagramHandle}</span>
                </a>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EBCFD0]/70">
          <p>
            © {currentYear} {BUSINESS_CONFIG.brandName}. {t.footer.rights}
          </p>

          <p className="text-[11px] text-center sm:text-right">
            {t.footer.demoDisclaimer}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#C4A572] hover:text-[#FAF7F2] transition-colors focus-visible:outline-none"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
