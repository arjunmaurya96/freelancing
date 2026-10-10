/*
  ABOUT PAGE CONTENT
  ------------------------------------------------------------------
  All copy on the About page, taken from the current website's About page.
  (Two small typo fixes: "tWe focus" → "We focus", and a repeated
  fragment "treating each marketing channel separately" was removed.)
*/

export const aboutHero = {
  eyebrow: 'About Conversions',
  titleAccent: 'Introduction To Conversions',
  title: 'Performance Marketing Agency That Drives Real Business Growth',
  paragraphs: [
    'Conversions is a performance marketing agency based in Delhi, India and was established by Himanshu Soni in 2024; the company provides businesses with online growth through result-oriented digital marketing strategies which integrate creativity, data, technology and continuous optimisation.',
    'The main services we offer are Meta Ads, Google Ads, performance marketing, lead generation, and website development. Our aim is to transform digital traffic and advertising investments into real business results such as qualified leads, customers, sales, and revenue.',
  ],
};

export const whoWeAre = {
  title: 'Who We Are',
  // First paragraph: "Conversions" is highlighted, as on the live page.
  intro: {
    before: 'We at ',
    highlight: 'Conversions',
    after:
      ' are a digital marketing team with a focus on performance, bringing together advertising, creativity, data, technology, and an understanding of business in order to create campaigns that deliver real-world results. Digital advertising has become more and more competitive.',
  },
  paragraphs: [
    'Nowadays, companies are not just competing for attention; they are also competing for the right audience, the right search terms, the right customer journey, and finally the customer’s decision to take action.',
    'That’s why we’re involved. We focus on the entire digital journey by properly identifying the target audience, designing high-performing advertising campaigns, creating websites with the aim of converting visitors, and constantly optimizing performance rather than dealing with each marketing channel in isolation.',
  ],
  stats: [
    { value: '150Cr+', label: 'Managed Ad Spent' },
    { value: '$12M', label: 'Revenue Generated' },
    { value: '8L+', label: 'Leads generated' },
  ],
};

export const coreServices = {
  title: 'Our Core Services',
  items: [
    {
      title: 'Meta Ads',
      text: 'We create and manage performance-driven advertising campaigns across Meta platforms, including Facebook and Instagram.',
      icon: 'facebook',
      to: '/meta-ads-marketing-agency/',
    },
    {
      title: 'Google Ads',
      text: 'Our Google Ads services help businesses reach potential customers when they are actively searching for products and services.',
      icon: 'google',
      to: '/google-ads-agency-in-delhi/',
    },
    {
      title: 'Website Development',
      text: 'We develop modern, responsive, user-friendly websites designed with both user experience and conversions in mind.',
      icon: 'globe',
      to: null,
    },
    {
      title: 'Performance Marketing',
      text: 'We use data, testing, analytics, and continuous optimization to understand what is working and where opportunities exist.',
      icon: 'chart',
      to: null,
    },
  ],
};

export const aboutBrands = {
  eyebrow: 'Individually we have worked with',
  titleAccent: 'Trusted by Brands.',
  titleRest: 'Proven by Results.',
  description:
    'Our clients trust us to turn marketing strategies into meaningful results through performance-driven campaigns, creative solutions, and data-backed optimization.',
  brands: [
    'IAS Score',
    'Classic Tours India',
    'Taj Luxury Tours',
    'Vintaze Entertainments',
    'Incredible Taj',
    'WIPC',
    'Vaanya Kurtis',
    'Udaari',
    'Sporlastic',
    'Fly To Destinations',
  ],
};

export const director = {
  eyebrow: 'Our Leadership',
  titleAccent: 'Meet Our Director',
  name: 'Himanshu Soni',
  role: 'Founder and Director of Conversions',
  // Each paragraph is a list of parts; { b: '…' } parts are shown in bold.
  paragraphs: [
    [
      { b: 'Himanshu Soni' },
      ', Founder and Director of ',
      { b: 'Conversions' },
      ', is a performance marketing professional with ',
      { b: '9 years of experience' },
      ' in helping businesses build, scale, and grow through data-driven digital marketing.',
    ],
    [
      'With expertise in ',
      { b: 'performance marketing and global business growth' },
      ', Himanshu has worked with businesses across international and domestic markets, developing strategies focused on customer acquisition, revenue growth, and marketing efficiency.',
    ],
    [
      'Over the course of his career, he has worked with ',
      { b: 'several reputed brands, including brands featured on Shark Tank' },
      ', and has played a key role in building and scaling ',
      { b: '10–12 businesses from the initial stage to significant growth' },
      '.',
    ],
    [
      'Himanshu holds an ',
      { b: 'Engineering degree in Automobile Engineering' },
      ' from ',
      { b: 'Dayalbagh Educational Institute (Deemed University)' },
      '. His technical background, combined with years of practical experience in performance marketing, contributes to his analytical and performance-oriented approach to business growth.',
    ],
  ],
  // Short facts pulled from the paragraphs above (no new information).
  facts: [
    { value: '9', label: 'Years of experience' },
    { value: '10–12', label: 'Businesses scaled from the initial stage' },
    { value: 'Shark Tank', label: 'Featured brands worked with' },
  ],
};

export const visionMission = [
  {
    title: 'Our Vision',
    text: 'To become a trusted performance marketing partner for businesses in India by delivering innovative, scalable, and sustainable digital growth solutions.',
    icon: 'eye',
  },
  {
    title: 'Our Mission',
    text: 'To make digital marketing more measurable, transparent, and result-oriented, helping businesses get maximum value from their online marketing investments.',
    icon: 'target',
  },
  {
    title: 'Our Impact',
    text: 'We measure success through the results that matter to businesses — quality leads, conversions, sales, revenue, customer acquisition, and ROAS. Rather than focusing only on clicks and impressions, we continuously optimize campaigns and digital experiences to improve overall marketing performance.',
    icon: 'trending',
  },
];
