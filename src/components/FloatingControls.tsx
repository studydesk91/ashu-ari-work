import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const FloatingControls: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappHref = getWhatsAppUrl({
    phoneNumber: BUSINESS_CONFIG.whatsappNumber,
    service: "Floating Quick Enquiry",
    message: "Namaste Ashwini ji, I have an enquiry regarding custom embroidery / fabric painting.",
  });

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="pointer-events-auto p-2.5 rounded-full bg-[#FAF7F2] text-[#572B3A] border border-[#EFE5DA] shadow-md hover:bg-[#EFE5DA] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A572]"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating WhatsApp Enquiry Button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire with Ashwini Tupe on WhatsApp"
        className="pointer-events-auto group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline-block text-xs font-semibold tracking-wide">
          Enquire on WhatsApp
        </span>
      </a>

    </div>
  );
};
