import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, MessageCircle, Eye, Info, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG, TRANSLATIONS, GalleryItem } from '../config/business';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { TextileArtwork } from './TextileArtwork';

interface GallerySectionProps {
  language: 'en' | 'mr';
}

export const GallerySection: React.FC<GallerySectionProps> = ({ language }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'aari' | 'painting'>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const t = TRANSLATIONS[language];

  // Filter gallery items based on activeCategory
  const filteredItems = BUSINESS_CONFIG.gallery.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  // Current selected item for Lightbox
  const currentItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;

      if (e.key === 'Escape') {
        setSelectedItemIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedItemIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setSelectedItemIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, filteredItems.length]);

  const handleOpenLightbox = (index: number) => {
    setSelectedItemIndex(index);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(selectedItemIndex < filteredItems.length - 1 ? selectedItemIndex + 1 : 0);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(selectedItemIndex > 0 ? selectedItemIndex - 1 : filteredItems.length - 1);
    }
  };

  const getEnquiryUrlForItem = (item: GalleryItem) => {
    return getWhatsAppUrl({
      phoneNumber: BUSINESS_CONFIG.whatsappNumber,
      itemTitle: item.title,
      service: item.category === 'aari' ? 'Aari Embroidery' : 'Fabric Painting',
      message: `Namaste Ashwini ji, I loved your "${item.title}" design. I would like to enquire about a similar custom piece.`,
    });
  };

  return (
    <section id="creations" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#EFE5DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#C4A572] uppercase">
            {t.gallery.eyebrow}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#292525] leading-tight">
            {t.gallery.heading}
          </h2>
          <p className="text-base text-[#615757] leading-relaxed">
            {t.gallery.subtitle}
          </p>

          {/* Interactive Filter Controls: Allowed as segmented control button group */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex items-center gap-1.5 p-1 bg-[#EFE5DA] rounded-lg border border-[#EFE5DA]" role="tablist" aria-label="Portfolio Categories">
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === 'all'}
                onClick={() => {
                  setActiveCategory('all');
                  setSelectedItemIndex(null);
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                  activeCategory === 'all'
                    ? 'bg-[#FAF7F2] text-[#572B3A] shadow-xs'
                    : 'text-[#615757] hover:text-[#572B3A]'
                }`}
              >
                {t.gallery.filterAll}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === 'aari'}
                onClick={() => {
                  setActiveCategory('aari');
                  setSelectedItemIndex(null);
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                  activeCategory === 'aari'
                    ? 'bg-[#FAF7F2] text-[#572B3A] shadow-xs'
                    : 'text-[#615757] hover:text-[#572B3A]'
                }`}
              >
                {t.gallery.filterAari}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === 'painting'}
                onClick={() => {
                  setActiveCategory('painting');
                  setSelectedItemIndex(null);
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                  activeCategory === 'painting'
                    ? 'bg-[#FAF7F2] text-[#572B3A] shadow-xs'
                    : 'text-[#615757] hover:text-[#572B3A]'
                }`}
              >
                {t.gallery.filterPainting}
              </button>
            </div>
          </div>

          {/* Honest Transparent Notice */}
          <div className="pt-2 flex items-center justify-center gap-1.5 text-xs text-[#615757]">
            <Info className="w-3.5 h-3.5 text-[#C4A572] shrink-0" />
            <span>{BUSINESS_CONFIG.demoNotice}</span>
          </div>
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => {
            const itemWhatsapp = getEnquiryUrlForItem(item);

            return (
              <div
                key={item.id}
                className="group flex flex-col bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#EFE5DA] hover:border-[#C4A572]/50 hover:shadow-lg transition-all duration-300"
              >
                {/* Visual Artwork Thumbnail */}
                <div
                  className="relative aspect-4/3 w-full cursor-pointer overflow-hidden bg-[#EFE5DA]"
                  onClick={() => handleOpenLightbox(index)}
                  title={`${item.title} - Click to expand`}
                >
                  <TextileArtwork
                    patternType={item.patternType}
                    category={item.category}
                    title={item.title}
                    imageSrc={item.image}
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#292525]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF7F2] text-[#572B3A] text-xs font-semibold rounded shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{t.gallery.viewDetails}</span>
                    </span>
                  </div>
                </div>

                {/* Card Content & Craft Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Unboxed Metadata (NO PILLS) */}
                    <div className="flex items-center gap-2 text-xs text-[#615757] mb-2 font-mono">
                      <span className="uppercase text-[#C4A572] font-semibold">
                        {item.category === 'aari' ? 'Aari Work' : 'Fabric Painting'}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{item.fabric}</span>
                    </div>

                    <h3 className="font-serif text-xl font-medium text-[#292525] group-hover:text-[#572B3A] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs text-[#615757] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-2 border-t border-[#EFE5DA] flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => handleOpenLightbox(index)}
                      className="text-xs font-semibold text-[#615757] hover:text-[#572B3A] underline-offset-4 hover:underline transition-colors focus-visible:outline-none"
                    >
                      {t.gallery.viewDetails}
                    </button>

                    <a
                      href={itemWhatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#572B3A] bg-[#EFE5DA] hover:bg-[#EBCFD0] rounded transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C4A572]"
                      title="Enquire on WhatsApp about this design"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#572B3A]" />
                      <span>{language === 'mr' ? 'विचारणा करा' : 'Enquire'}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Artwork detail: ${currentItem.title}`}
          className="fixed inset-0 z-50 bg-[#292525]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200"
          onClick={() => setSelectedItemIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl border border-[#C4A572]/40 flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedItemIndex(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-[#FAF7F2]/80 hover:bg-[#FAF7F2] text-[#292525] rounded-full transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A572]"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left/Prev Arrow */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-[#FAF7F2]/80 hover:bg-[#FAF7F2] text-[#292525] rounded-full shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A572]"
              aria-label="Previous artwork"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right/Next Arrow */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 md:right-auto md:left-[55%] lg:left-[52%] top-1/2 -translate-y-1/2 z-20 p-2 bg-[#FAF7F2]/80 hover:bg-[#FAF7F2] text-[#292525] rounded-full shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A572]"
              aria-label="Next artwork"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Media Viewer Area */}
            <div className="w-full md:w-7/12 aspect-square md:aspect-auto min-h-[280px] bg-[#3F1D29] relative overflow-hidden flex items-center justify-center">
              <TextileArtwork
                patternType={currentItem.patternType}
                category={currentItem.category}
                title={currentItem.title}
                imageSrc={currentItem.image}
              />
            </div>

            {/* Artwork Specifications & Enquiry */}
            <div className="w-full md:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-4">
                
                {/* Category & Craft Details */}
                <div className="flex items-center gap-2 text-xs text-[#615757] font-mono">
                  <span className="uppercase text-[#C4A572] font-semibold">
                    {currentItem.category === 'aari' ? 'Aari Embroidery' : 'Fabric Painting'}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Handmade in Pune</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#292525] leading-tight">
                  {currentItem.title}
                </h3>

                <p className="text-sm text-[#615757] leading-relaxed">
                  {currentItem.description}
                </p>

                {/* Technical Craft Attributes */}
                <div className="pt-2 border-t border-[#EFE5DA] space-y-2 text-xs">
                  <div>
                    <span className="font-semibold text-[#292525]">Base Fabric: </span>
                    <span className="text-[#615757]">{currentItem.fabric}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#292525]">Technique: </span>
                    <span className="text-[#615757]">{currentItem.technique}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#292525]">Motif Style: </span>
                    <span className="text-[#615757]">{currentItem.motifs}</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#EFE5DA] space-y-3">
                <a
                  href={getEnquiryUrlForItem(currentItem)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#FAF7F2] bg-[#572B3A] hover:bg-[#3F1D29] rounded transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A572]"
                >
                  <MessageCircle className="w-4 h-4 text-[#C4A572]" />
                  <span>{t.gallery.enquireSimilar}</span>
                </a>

                <p className="text-center text-[11px] text-[#615757]">
                  Opens WhatsApp with design reference prefilled
                </p>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
