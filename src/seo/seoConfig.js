/*
  SEO CONFIGURATION
  ------------------------------------------------------------------
  One entry per page. To give a new page its own SEO:

    1. Add an entry below, e.g.
         about: {
           path: '/about/',
           title: 'About Us | Conversions',
           description: '…',
         },
    2. In the page component:  usePageSeo(pageSeo.about);

  Anything you leave out (OG image, Twitter card…) falls back to `defaults`.
*/

import { siteConfig } from '@/data/siteConfig';

export const defaults = {
  siteName: 'Conversions',
  siteUrl: siteConfig.url,
  ogImage: '/og-image.jpg',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  locale: 'en_IN',
};

export const pageSeo = {
  home: {
    path: '/',
    title: 'Conversions | No.1 Performance Marketing Agency In Delhi NCR.',
    description:
      'Conversions is a performance marketing agency specializing in Meta Ads, Google Ads, to generate quality leads, sales, and profitable revenue.',
    // Structured data helps Google show business details in search.
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MarketingAgency',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/favicon-192.png`,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.region,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
      },
      sameAs: siteConfig.socials.map((s) => s.href),
    },
  },

  about: {
    path: '/about/',
    title: 'About Conversions | Performance Marketing Agency in Delhi',
    description:
      'Conversions is a performance marketing agency in Delhi, established by Himanshu Soni in 2024, helping businesses grow with Meta Ads, Google Ads, lead generation and website development.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Conversions',
      url: `${siteConfig.url}/about/`,
      about: {
        '@type': 'MarketingAgency',
        name: siteConfig.name,
        url: siteConfig.url,
        foundingDate: '2024',
        founder: { '@type': 'Person', name: 'Himanshu Soni', jobTitle: 'Founder and Director' },
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.region,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
      },
    },
  },

  metaAds: {
    path: '/meta-ads-marketing-agency/',
    title: 'Best Meta Ads Agency in Delhi | Facebook & Instagram Ads Experts',
    description:
      'Conversions is a results-focused Meta Ads agency in Delhi. Facebook & Instagram ads for lead generation, sales and growth — ₹50 Cr+ ad spend managed, 5 Lakh+ leads generated.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Meta Ads Management',
      serviceType: 'Facebook & Instagram Advertising',
      url: `${siteConfig.url}/meta-ads-marketing-agency/`,
      areaServed: 'IN',
      provider: { '@type': 'MarketingAgency', name: siteConfig.name, url: siteConfig.url },
    },
  },

  contact: {
    path: '/contact/',
    title: 'Contact Conversions | Performance Marketing Agency in Delhi',
    description:
      'Contact Conversions in Green Park, New Delhi. Call +91-9458751508, email info@conversions.co.in, or book a demo for Meta Ads, Google Ads and performance marketing.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Conversions',
      url: `${siteConfig.url}/contact/`,
      mainEntity: {
        '@type': 'MarketingAgency',
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: [siteConfig.phone, '+91-7678570885'],
        openingHours: 'Mo-Fr 10:00-19:00',
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.region,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
      },
    },
  },

  underConstruction: {
    path: '/',
    title: 'Coming Soon | Conversions',
    description: 'This page is under construction. Contact Conversions for performance marketing help in the meantime.',
    noindex: true,
  },
};
