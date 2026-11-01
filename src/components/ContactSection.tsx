import React, { useState } from 'react';
import { MessageCircle, MapPin, Send, Instagram, Mail, ExternalLink, Image as ImageIcon, AlertCircle } from 'lucide-react';
import { BUSINESS_CONFIG, TRANSLATIONS } from '../config/business';
import { getWhatsAppUrl, validateContactNumber } from '../utils/whatsapp';

interface ContactSectionProps {
  language: 'en' | 'mr';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  // Form State
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [service, setService] = useState('Aari Embroidery');
  const [message, setMessage] = useState('');

  // Validation Error States
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; phone?: string } = {};

    if (!fullName.trim()) {
      newErrors.name = t.contact.validationName;
    }

    if (!validateContactNumber(phoneNumber)) {
      newErrors.phone = t.contact.validationPhone;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Build WhatsApp URL with full tailored enquiry message
    const whatsappUrl = getWhatsAppUrl({
      phoneNumber: BUSINESS_CONFIG.whatsappNumber,
      clientName: fullName,
      service: service,
      message: message,
    });

    // Open WhatsApp in a new tab/app window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const directWhatsappUrl = getWhatsAppUrl({
    phoneNumber: BUSINESS_CONFIG.whatsappNumber,
    service: "Direct Consultation",
    message: "Namaste Ashwini ji, I would like to connect with you regarding custom embroidery/painting.",
  });

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#EFE5DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#C4A572] uppercase">
            {t.contact.eyebrow}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#292525] leading-tight">
            {t.contact.heading}
          </h2>
          <p className="text-base text-[#615757] leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Interactive Contact & Enquiry Form */}
          <div className="lg:col-span-7 bg-[#FAF7F2] p-8 sm:p-10 rounded-2xl border border-[#EFE5DA] shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs uppercase tracking-wider font-semibold text-[#292525] mb-2">
                  {t.contact.formName} <span className="text-[#572B3A]">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="e.g. Priya Sharma"
                  className={`w-full px-4 py-3 rounded-lg bg-[#FAF7F2] border text-sm text-[#292525] placeholder-[#615757]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A572] transition-colors ${
                    errors.name ? 'border-red-500 bg-red-50/20' : 'border-[#EFE5DA] focus:border-[#C4A572]'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Mobile / WhatsApp Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-xs uppercase tracking-wider font-semibold text-[#292525] mb-2">
                  {t.contact.formPhone} <span className="text-[#572B3A]">*</span>
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    if (errors.phone) setErrors({ ...errors, phone: undefined });
                  }}
                  placeholder="e.g. 8010928641 or +91 8010928641"
                  className={`w-full px-4 py-3 rounded-lg bg-[#FAF7F2] border text-sm text-[#292525] placeholder-[#615757]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A572] transition-colors ${
                    errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#EFE5DA] focus:border-[#C4A572]'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Service Interested In */}
              <div>
                <label htmlFor="serviceSelect" className="block text-xs uppercase tracking-wider font-semibold text-[#292525] mb-2">
                  {t.contact.formService}
                </label>
                <select
                  id="serviceSelect"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#FAF7F2] border border-[#EFE5DA] text-sm text-[#292525] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A572] transition-colors"
                >
                  <option value="Aari Embroidery">Aari Hand Embroidery (Bridal / Blouse)</option>
                  <option value="Fabric Painting">Fabric Painting (Saree / Dupatta / Kurti)</option>
                  <option value="Custom Design">Personalized Custom Design</option>
                  <option value="Other Enquiry">General Consultation / Other Enquiry</option>
                </select>
              </div>

              {/* Message / Design Requirements */}
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-[#292525] mb-2">
                  {t.contact.formMessage}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.contact.formPlaceholderMsg}
                  className="w-full px-4 py-3 rounded-lg bg-[#FAF7F2] border border-[#EFE5DA] text-sm text-[#292525] placeholder-[#615757]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A572] transition-colors"
                />
              </div>

              {/* Reference Image Guidance (Per prompt instructions) */}
              <div className="p-4 rounded-xl bg-[#EFE5DA]/60 border border-[#EFE5DA] flex items-start gap-3 text-xs text-[#615757]">
                <ImageIcon className="w-4 h-4 text-[#C4A572] shrink-0 mt-0.5" />
                <p>{t.contact.referenceNotice}</p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-semibold text-[#FAF7F2] bg-[#572B3A] hover:bg-[#3F1D29] rounded-lg transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A572]"
              >
                <MessageCircle className="w-4 h-4 text-[#C4A572]" />
                <span>{t.contact.submitBtn}</span>
              </button>

              {submitted && (
                <p className="text-center text-xs text-[#572B3A] font-medium animate-in fade-in">
                  Opening WhatsApp to continue your personalized enquiry...
                </p>
              )}

            </form>
          </div>

          {/* Right Column: Studio Information & Channels */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            
            <div className="space-y-6">
              
              {/* Studio Location Card */}
              <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#EFE5DA]">
                <div className="flex items-center gap-3 text-[#572B3A] mb-3">
                  <MapPin className="w-5 h-5 text-[#C4A572]" />
                  <h3 className="font-serif text-xl font-medium text-[#292525]">
                    {t.contact.locationHeading}
                  </h3>
                </div>
                <p className="text-sm text-[#615757] mb-4">
                  {t.contact.locationPune}
                </p>
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#572B3A] hover:text-[#3F1D29] transition-colors group"
                >
                  <span>{t.contact.openInMaps}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C4A572] group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="bg-[#572B3A] text-[#FAF7F2] p-6 rounded-2xl shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-[#DFCA9B]">
                  <MessageCircle className="w-6 h-6" />
                  <h3 className="font-serif text-xl font-medium text-[#FAF7F2]">
                    {t.contact.directWhatsapp}
                  </h3>
                </div>
                <p className="text-xs text-[#EBCFD0] leading-relaxed">
                  Prefer a direct chat? You can message Ashwini Tupe right now to discuss custom work, ask questions, or share sample pictures.
                </p>
                <a
                  href={directWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#292525] bg-[#FAF7F2] hover:bg-[#EFE5DA] rounded transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#572B3A]" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>

              {/* Configurable Social Channels */}
              <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#EFE5DA] space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#292525]">
                  Connected Channels
                </h4>
                
                {BUSINESS_CONFIG.instagramHandle && (
                  <div className="flex items-center justify-between text-xs py-2 border-b border-[#EFE5DA]">
                    <div className="flex items-center gap-2 text-[#615757]">
                      <Instagram className="w-4 h-4 text-[#C4A572]" />
                      <span>Instagram</span>
                    </div>
                    <a
                      href={BUSINESS_CONFIG.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#572B3A] hover:underline"
                    >
                      @{BUSINESS_CONFIG.instagramHandle}
                    </a>
                  </div>
                )}

                {BUSINESS_CONFIG.emailAddress && (
                  <div className="flex items-center justify-between text-xs py-2">
                    <div className="flex items-center gap-2 text-[#615757]">
                      <Mail className="w-4 h-4 text-[#C4A572]" />
                      <span>Email</span>
                    </div>
                    <a
                      href={`mailto:${BUSINESS_CONFIG.emailAddress}`}
                      className="font-medium text-[#572B3A] hover:underline"
                    >
                      {BUSINESS_CONFIG.emailAddress}
                    </a>
                  </div>
                )}
              </div>

            </div>

            {/* Config helper notice for the client */}
            <div className="p-4 rounded-xl bg-[#EFE5DA]/50 border border-[#EFE5DA] text-[11px] text-[#615757] leading-relaxed">
              <span className="font-semibold text-[#572B3A]">Owner note: </span>
              To update your WhatsApp phone number, Instagram handle, or email, edit <code className="px-1 py-0.5 bg-[#FAF7F2] rounded text-[#572B3A] font-mono">src/config/business.ts</code>.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
