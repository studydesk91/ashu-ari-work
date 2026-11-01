import test from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizePhoneNumber,
  createWhatsAppMessage,
  getWhatsAppUrl,
  validateContactNumber,
} from './whatsapp';

test('normalizePhoneNumber removes spaces, pluses, dashes', () => {
  assert.equal(normalizePhoneNumber('+91 8010928641'), '918010928641');
  assert.equal(normalizePhoneNumber('8010928641'), '8010928641');
  assert.equal(normalizePhoneNumber('+91 98765-43210'), '919876543210');
});

test('createWhatsAppMessage formats message with item title', () => {
  const msg = createWhatsAppMessage({
    clientName: 'Priya Sharma',
    itemTitle: 'Peacock Zardozi Bridal Blouse',
    message: 'Need this for my wedding in December',
  });

  assert.ok(msg.includes('Namaste Ashwini ji,'));
  assert.ok(msg.includes('"Peacock Zardozi Bridal Blouse"'));
  assert.ok(msg.includes('Priya Sharma'));
  assert.ok(msg.includes('Need this for my wedding in December'));
  assert.ok(msg.includes('Enquiry from your official website'));
});

test('createWhatsAppMessage formats general service enquiry when no item title', () => {
  const msg = createWhatsAppMessage({
    clientName: 'Ananya',
    service: 'Fabric Painting',
  });

  assert.ok(msg.includes('enquire about your Fabric Painting work'));
  assert.ok(msg.includes('Ananya'));
});

test('getWhatsAppUrl encodes parameters into clean wa.me link', () => {
  const url = getWhatsAppUrl({
    phoneNumber: '+91 98765 43210',
    clientName: 'Sneha',
    itemTitle: 'Lotus Silk Saree',
  });

  assert.ok(url.startsWith('https://wa.me/919876543210?text='));
  assert.ok(url.includes(encodeURIComponent('Lotus Silk Saree')));
});

test('validateContactNumber checks for minimum 10 digits', () => {
  assert.equal(validateContactNumber('9876543210'), true);
  assert.equal(validateContactNumber('+91 98765 43210'), true);
  assert.equal(validateContactNumber('12345'), false);
  assert.equal(validateContactNumber('abc'), false);
});
