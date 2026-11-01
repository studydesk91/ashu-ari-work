import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG, TRANSLATIONS } from '../config/business';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS.en;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#home", id: "home" },
    { name: t.nav.aari, href: "#aari-work", id: "aari-work" },
    { name: t.nav.painting, href: "#fabric-painting", id: "fabric-painting" },
    { name: t.nav.creations, href: "#creations", id: "creations" },
    { name: t.nav.about, href: "#about", id: "about" },
    { name: t.nav.contact, href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappHref = getWhatsAppUrl({
    phoneNumber: BUSINESS_CONFIG.whatsappNumber,
    service: "Custom Enquiry",
    message: "Hello Ashwini ji, I was browsing your website and would like to enquire about your designs.",
  });

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#EFE5DA] py-2.5 sm:py-3'
            : 'bg-[#FAF7F2] border-b border-[#FAF7F2] py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: 3 zones separated by gap-8 */}
          <div className="flex items-center justify-between gap-6 sm:gap-8">
            
            {/* Zone 1: Brand Logo Lockup */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="inline-flex items-center whitespace-nowrap shrink-0 transition-opacity hover:opacity-95"
              aria-label="Ashwini Tupe - Handcrafted Textile Art Homepage"
            >
              <BrandLogo className="h-9 sm:h-11" />
            </a>

            {/* Zone 2: Concise single-line text navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#615757]" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                      isActive
                        ? 'text-[#572B3A] font-semibold'
                        : 'hover:text-[#572B3A]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C4A572] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Primary WhatsApp Action */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#FAF7F2] bg-[#572B3A] hover:bg-[#3F1D29] rounded transition-colors shadow-sm whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A572]"
                aria-label="Enquire on WhatsApp with Ashwini Tupe"
              >
                <MessageCircle className="w-4 h-4 text-[#C4A572]" />
                <span>{t.nav.enquireButton}</span>
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#572B3A] hover:bg-[#EFE5DA] rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A572]"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 bg-[#292525]/60 backdrop-blur-xs lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#FAF7F2] p-6 shadow-2xl flex flex-col justify-between z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header inside mobile drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-[#EFE5DA]">
                <BrandLogo className="h-8" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#615757] hover:text-[#572B3A] rounded-md"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="mt-6 flex flex-col gap-2" aria-label="Mobile Navigation Links">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-3 py-2.5 text-base font-medium text-[#292525] hover:text-[#572B3A] hover:bg-[#EFE5DA] rounded-lg transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-[#EFE5DA] space-y-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#FAF7F2] bg-[#572B3A] hover:bg-[#3F1D29] rounded-lg transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#C4A572]" />
                <span>{t.nav.enquireButton}</span>
              </a>

              <p className="text-center text-xs text-[#615757] pt-2">
                Pimple Gurav, Pune, Maharashtra, India
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
