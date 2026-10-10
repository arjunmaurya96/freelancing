/*
  SITE-WIDE INFORMATION
  Used by the Header, Footer, Contact section and SEO.
  Change contact details here once — they update everywhere.
*/

export const siteConfig = {
  name: 'Conversions',
  legalTagline: 'A unit of Dioptre Media Pvt. Ltd.',
  url: 'https://conversions.co.in',

  email: 'info@conversions.co.in',
  phone: '+91-9458751508',
  phoneHref: 'tel:+919458751508',
  whatsappHref: 'https://wa.me/919458751508',

  address: {
    line1: '4th Flr, 400-A, Yusuf Sarai,',
    line2: 'Commercial, Green Park, New Delhi,',
    line3: 'Delhi 110016',
    // Used for structured data (SEO)
    street: '4th Flr, 400-A, Yusuf Sarai Commercial, Green Park',
    city: 'New Delhi',
    region: 'Delhi',
    postalCode: '110016',
    country: 'IN',
  },

  // Google rating badge in the Home hero (update the value if it changes).
  googleRating: { value: '4.9', href: 'https://maps.app.goo.gl/ikNfz5Jt73r8QQNL7' },

  // Offices shown in the footer "Global Presence" bar and the top bar.
  globalPresence: [
    { country: 'UAE', city: 'Dubai', flag: 'ae', href: 'https://zenerom.ae/' },
    { country: 'UK', city: 'Edinburgh', flag: 'gb', href: 'https://zenerom.co.uk/' },
    { country: 'Australia', city: 'Sydney', flag: 'au', href: 'https://share.google/KbMJQW2GRN7fZIyST' },
    { country: 'India', city: 'Kochi', flag: 'in', href: 'https://zenerom.in/' },
  ],

  socials: [
    { label: 'Facebook', href: 'https://www.facebook.com/conversionsbythinkweb', icon: 'facebook' },
    { label: 'Instagram', href: 'https://www.instagram.com/conversions.co.in/', icon: 'instagram' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/conversionssolutions', icon: 'linkedin' },
    { label: 'YouTube', href: 'https://www.youtube.com/@marketingbyconversions', icon: 'youtube' },
  ],
};
