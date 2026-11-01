/**
 * Utilities for WhatsApp enquiry link generation and validation
 */

export interface WhatsAppEnquiryParams {
  phoneNumber: string; // e.g. "+91 98765 43210" or "919876543210"
  clientName?: string;
  service?: string;
  itemTitle?: string;
  message?: string;
}

/**
 * Normalizes an international phone number to digits only
 */
export function normalizePhoneNumber(phone: string): string {
  return phone.replace(/[^\d]/g, '');
}

/**
 * Formats a tailored WhatsApp message for Ashwini Tupe | Aari & Fabric Art
 */
export function createWhatsAppMessage(params: {
  clientName?: string;
  service?: string;
  itemTitle?: string;
  message?: string;
}): string {
  const parts: string[] = [];

  parts.push("Namaste Ashwini ji,");

  if (params.itemTitle) {
    parts.push(`I am interested in your creation: "${params.itemTitle}".`);
  } else if (params.service) {
    parts.push(`I would like to enquire about your ${params.service} work.`);
  } else {
    parts.push("I would like to enquire about your handcrafted Aari and Fabric Painting designs.");
  }

  if (params.clientName && params.clientName.trim()) {
    parts.push(`My name: ${params.clientName.trim()}`);
  }

  if (params.message && params.message.trim()) {
    parts.push(`Details: ${params.message.trim()}`);
  }

  parts.push("(Enquiry from your official website)");

  return parts.join("\n\n");
}

/**
 * Generates the complete click-to-chat WhatsApp URL
 */
export function getWhatsAppUrl(params: WhatsAppEnquiryParams): string {
  const cleanNumber = normalizePhoneNumber(params.phoneNumber);
  const text = createWhatsAppMessage({
    clientName: params.clientName,
    service: params.service,
    itemTitle: params.itemTitle,
    message: params.message,
  });

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Basic mobile number validator (supports standard Indian 10-digit mobile or with +91)
 */
export function validateContactNumber(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-\(\)\+]/g, '');
  return cleaned.length >= 10 && /^\d+$/.test(cleaned);
}
