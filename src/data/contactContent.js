/*
  CONTACT PAGE CONTENT
  ------------------------------------------------------------------
  Taken from the current website's Contact page (conversions.co.in/contact).
  The form's Requirements list and consent text are shared with the Home
  page contact form (homeContent.js → contact).
*/

import { siteConfig } from './siteConfig';

export const contactHero = {
  eyebrow: 'Contact Us',
  titleAccent: 'Contact &',
  titleRest: 'Join Together',
  text: 'For inquiries or consultations, reach out to Conversions via email or phone',
};

export const contactMethods = {
  location: {
    title: 'Location',
    lines: ['4TH FLR, 400-A, YUSUF SARAI, COMMERCIAL, Green Park, New Delhi, Delhi 110016'],
    // Opens Google Maps for the office address.
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      '400-A, Yusuf Sarai Commercial, Green Park, New Delhi, Delhi 110016',
    )}`,
    icon: 'pin',
  },
  phones: {
    title: 'Call us on',
    items: [
      { label: 'Mob : +91-9458751508', href: siteConfig.phoneHref },
      { label: 'Mob : +91-7678570885', href: 'tel:+917678570885' },
    ],
    icon: 'phone',
  },
  emails: {
    title: 'Mail Address',
    items: [
      { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
      { label: 'support@conversions.co.in', href: 'mailto:support@conversions.co.in' },
    ],
    icon: 'mail',
  },
  hours: {
    title: 'Office Time',
    text: 'Mon – Fri : 10am – 7pm Sunday (Closed)',
    icon: 'clock',
  },
};

export const contactForm = {
  title: 'Send us your requirements',
  defaultRequirement: 'Meta Ads',
  submitLabel: 'Book a Demo',
};

/* Google Maps embed (no API key needed). */
export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  '400-A, Yusuf Sarai Commercial, Green Park, New Delhi, Delhi 110016',
)}&output=embed`;
