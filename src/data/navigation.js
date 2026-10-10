/*
  NAVIGATION
  ------------------------------------------------------------------
  Menu items exactly as on the current website header.
  - `to`       → internal route (a page you add in src/routes/AppRoutes.jsx)
  - `children` → dropdown items

  Paths reuse the live website's URLs wherever they exist, so existing
  Google rankings carry over when those pages are rebuilt. Items that had
  no page yet ("#" on the live site) use a clean proposed path.
*/

export const mainNav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about/' },
  {
    label: 'SEO',
    children: [
      { label: 'Seo Agency', to: '/seo/seo-agency-in-delhi/' },
      { label: 'Ecommerce SEO', to: '/seo/ecommerce-seo/' },
      { label: 'Local SEO', to: '/seo/local-seo/' },
      { label: 'International SEO', to: '/seo/international-seo/' },
      { label: 'Technical SEO', to: '/seo/technical-seo/' },
    ],
  },
  {
    label: 'Paid',
    children: [
      { label: 'Google Ads', to: '/google-ads-agency-in-delhi/' },
      { label: 'Meta Ads', to: '/meta-ads-marketing-agency/' },
      { label: 'Tik Tok Ads', to: '/tik-tok-ads-agency-delhi/' },
      { label: 'Influencer Marketing', to: '/influencer-marketing-agency-delhi/' },
    ],
  },
  {
    label: 'Ecommerce',
    children: [
      { label: 'Viator', to: '/viator-and-tripadvisor-listing-agency/' },
      { label: 'Amazon', to: '/amazon-marketing-agency-delhi/' },
      { label: 'Shopify', to: '/shopify-marketing-agency/' },
      { label: 'ETSY Marketing', to: '/etsy-listing-and-management-agency/' },
    ],
  },
  {
    label: 'Industries',
    children: [
      { label: 'Healthcare', to: '/industries/healthcare/' },
      { label: 'Ecommerce', to: '/industries/ecommerce/' },
      { label: 'Real Estate', to: '/industries/real-estate/' },
      { label: 'Hospitality', to: '/industries/hospitality/' },
      { label: 'Legal', to: '/industries/legal/' },
      { label: 'Education', to: '/industries/education/' },
      { label: 'Travel', to: '/industries/travel/' },
    ],
  },
  { label: 'Case Studies', to: '/our-results-portfolio/' },
  { label: 'Blog', to: '/blog/' },
];

export const headerCta = { label: 'Request Quote', to: '/#contact' };

/* Footer link groups — same labels as the current website footer. */
export const footerNav = [
  {
    title: 'Our Services',
    links: [
      { label: 'Meta Ads', to: '/meta-ads-marketing-agency/' },
      { label: 'Google Ads', to: '/google-ads-agency-in-delhi/' },
      { label: 'Amazon Marketing', to: '/amazon-marketing-agency-delhi/' },
      { label: 'ETSY Marketing', to: '/etsy-listing-and-management-agency/' },
      { label: 'Snapchat Ads', to: '/snapchat-ads-agency/' },
    ],
  },
  {
    title: 'Quick Link',
    links: [
      { label: 'Tik Tok Ads', to: '/tik-tok-ads-agency-delhi/' },
      { label: 'Influencer Marketing', to: '/influencer-marketing-agency-delhi/' },
      { label: 'Email Marketing', to: '/email-marketing-services/' },
      { label: 'Blog', to: '/blog/' },
      { label: 'Contact Us', to: '/contact/' },
    ],
  },
];

export const legalNav = [
  { label: 'Privacy Policy', to: '/privacy-policy/' },
  { label: 'Terms & Conditions', to: '/terms-and-conditions/' },
];
