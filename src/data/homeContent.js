/*
  HOME PAGE CONTENT
  ------------------------------------------------------------------
  All copy on the homepage lives here, taken from the current website.
  Sections read from this file, so text can be edited without touching
  layout code — and later swapped for API/CMS data with the same shape.
*/

export const hero = {
  eyebrow: 'Performance Marketing Agency in Delhi',
  titleAccent: 'You Grow.',
  titleRest: 'We Convert.',
  description:
    'We turn Advertising budgets into measurable revenue through data-driven Meta Ads, Google Ads, CRO, tracking and conversion-focused strategies.',
  stats: [
    { value: '7.2X+', label: 'Average ROAS' },
    { value: '150+ CR', label: 'Ad spend' },
    { value: '8 L+', label: 'Lead Generated' },
  ],
  pillars: [
    {
      title: 'Right Audience',
      text: 'Reach and target high-intent audiences across multiple platforms.',
    },
    {
      title: 'Right Strategy',
      text: 'Build complete campaign strategy, creatives, tracking and CRO for maximum results.',
    },
    {
      title: 'Right Conversion',
      text: 'Optimize in real-time to turn clicks into qualified leads and customers.',
    },
  ],
};

/* Numbers animate (count up) from 0 to `end`. */
export const metrics = [
  { end: 164126372, prefix: '₹', suffix: '+', label: 'Ads Spend' },
  { end: 7.2, decimals: 1, suffix: 'X+', label: 'Average ROAS' },
  { end: 1148884604, prefix: '₹', suffix: '+', label: 'Sales Generated' },
  { end: 5.3, decimals: 1, suffix: '%', label: 'Conversion Rate' },
];

export const about = {
  eyebrow: 'About Conversions',
  titleAccent: 'A Results-Driven',
  titleRest: 'Performance Marketing Agency in Delhi',
  paragraphs: [
    'Conversions is a performance marketing agency in Delhi helping businesses scale through data-driven advertising, conversion optimization, and measurable digital strategies. We work with startups, ecommerce brands, service businesses, and established companies to create marketing campaigns focused on real business outcomes.',
    'Our team combines Meta Ads, Google Ads, landing page optimization, tracking, creative strategy, and audience insights to help businesses generate qualified leads, increase sales, and improve return on advertising spend. Instead of focusing only on clicks and impressions, we focus on metrics that directly impact business growth.',
  ],
  values: [
    'Expertise in Performance Marketing',
    'Proven Track Record',
    'Transparent Reporting',
    'Continuous Optimization',
    'Innovation and Adaptability',
    'Dedicated Support',
  ],
  highlights: [
    { value: '500+', label: 'Projects Delivered' },
    { value: '99%', label: 'Happy Clients' },
    { value: '95%', label: 'Customer Retention Rate' },
  ],
  badge: {
    title: 'Trusted by Brands.',
    text: 'Driving growth through strategy, creativity & results.',
  },
};

export const services = {
  eyebrow: 'Our Performance Marketing Services',
  titleAccent: 'Performance Marketing Services',
  titleRest: 'Designed to Drive Business Growth',
  description:
    'As a leading performance marketing agency in Delhi, we help businesses reach the right audience, generate qualified leads, increase online sales, and maximize ROI across multiple digital marketing channels.',
  items: [
    {
      id: 'meta',
      title: 'Meta Ads',
      text: 'Reach the right audience on Facebook and Instagram with targeted campaigns designed to increase engagement, generate quality leads, and drive conversions.',
      to: '/meta-ads-marketing-agency/',
    },
    {
      id: 'google',
      title: 'Google Ads',
      text: 'Get discovered when customers are actively searching. Our Google Ads campaigns focus on high-intent traffic, qualified leads, and measurable business growth.',
      to: '/google-ads-agency-in-delhi/',
    },
    {
      id: 'viator',
      title: 'Viator Listing',
      text: 'Grow your travel business on Viator with optimized listings that combine compelling content, strategic positioning, and performance-focused optimization',
      to: '/viator-and-tripadvisor-listing-agency/',
    },
    {
      id: 'amazon',
      title: 'Amazon Marketing',
      text: 'Increase product visibility and sales with strategic Amazon advertising, listing optimization, keyword targeting, and campaigns built to improve your ROAS.',
      to: '/amazon-marketing-agency-delhi/',
    },
    {
      id: 'etsy',
      title: 'ETSY Marketing',
      text: 'Grow your Etsy store with optimized listings, targeted advertising, and marketplace strategies designed to increase product visibility and attract ready-to-buy customers.',
      to: '/etsy-listing-and-management-agency/',
    },
    {
      id: 'seo',
      title: 'SEO Service',
      text: 'Grow your business online with strategic SEO services that combine engaging content, precise keyword targeting, and performance-driven optimization to improve search visibility and attract qualified customers.',
      to: '/seo/seo-agency-in-delhi/',
    },
    {
      id: 'email',
      title: 'Email Marketing',
      text: 'Turn subscribers into customers with personalized email campaigns, automated workflows, promotional messages, and retention strategies that drive repeat business.',
      to: '/email-marketing-services/',
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Marketing',
      text: 'Build direct customer relationships through WhatsApp campaigns that support lead generation, product promotions, customer engagement, and faster conversions.',
      to: '/whatsapp-marketing-agency-in-new-delhi/',
    },
    {
      id: 'snapchat',
      title: 'Snapchat Ads',
      text: 'Reach younger, mobile-first audiences with eye-catching Snapchat ad campaigns, precise targeting, and creative formats built to drive app installs, leads, and sales.',
      to: '/snapchat-ads-agency/',
    },
  ],
};

export const whyChooseUs = {
  eyebrow: 'Why Choose Conversions',
  titleStart: 'Why Choose Our',
  titleAccent: 'Performance Marketing Agency',
  titleEnd: 'in Delhi',
  description:
    'Choosing the right performance marketing partner can make a significant difference in how efficiently your business acquires customers and scales revenue. At Conversions, we combine strategy, creativity, technology, and data to build campaigns focused on measurable business results.',
  reasons: [
    { value: '7+', label: 'More than 7+ Years of Industry Experience', icon: 'award' },
    { value: '500+', label: '500+ Projects Delivered', icon: 'users' },
    { value: '95%', label: '95% Client Retention', icon: 'smile' },
    { value: '15000+', label: 'Businesses Served 15000+', icon: 'briefcase' },
    { value: '24×7', label: '24 x 7 Customer Support', icon: 'headset' },
    { value: '150Cr+', label: 'Handled 150Cr+ Lifetime Budget', icon: 'shield' },
  ],
};

export const caseStudies = [
  {
    id: 'hexa',
    eyebrow: 'Our Performance Marketing Strategies',
    title: 'How We Generated 10+ ROAS For Mobile & Accessories Brand Within 2 Months',
    text: 'Our Mobile & Accessories implements a targeted marketing strategy crafted by Conversions Agency, delivering exceptional results with a 10+ ROAS within just two months. Leveraging precise audience segmentation and compelling visual content, we engage our customers across multiple platforms. Our approach blends data-driven insights with creative campaigns, ensuring maximum ROI through optimized ad spend and strategic ad placements.',
    stats: [
      { value: '11.7L+', label: 'Ad Spent' },
      { value: '1.1 Cr+', label: 'Revenue Generated' },
      { value: '10+', label: 'ROAS' },
    ],
    visual: {
      brand: 'Hexa Gadgets',
      industry: 'Consumer Electronics Industry',
      platform: 'Platform - Facebook & Instagram',
      headline: 'Real Results. Real Impact.',
      caption: 'Results in 3 Months of Data-Driven Meta Ads Campaign for Hexa Gadgets',
      kpis: [
        { label: 'Ad Spent', value: '₹11 Lakhs+' },
        { label: 'Revenue Generated', value: '₹1.1 Cr+' },
        { label: 'ROAS Achieved', value: '10X+ ROAS' },
      ],
      bars: [18, 26, 22, 38, 34, 52, 61, 58, 74, 88, 96],
    },
    readMore: '/our-results-portfolio/',
  },
  {
    id: 'fictioo',
    eyebrow: 'Our Meta Ads Case Studies',
    title: 'How We Generated 4X ROAS for Gaming Accessories Brand Fictioo Within 3 Months',
    text: 'Our gaming accessories brand, Fictioo, achieved ₹5 Lakhs+ in sales within just 3 months through a data-driven Meta Ads strategy by Conversions which is the best performance marketing Agency in Delhi. We focused on precise audience targeting, engaging ad creatives, continuous campaign optimization, and strategic budget allocation across Facebook and Instagram. By closely monitoring campaign performance and testing different audiences and creatives, we improved conversions while maintaining an efficient advertising cost.',
    stats: [
      { value: '1.5L+', label: 'Ad Spent' },
      { value: '5L+', label: 'Revenue Generated' },
      { value: '4X', label: 'ROAS (Approx)' },
    ],
    visual: {
      brand: 'Fictioo',
      industry: 'Gaming Accessories Industry',
      platform: 'Platform - Facebook & Instagram',
      headline: 'Delivered 5 Lakhs+ Sales For a Gaming Accessories Brand Fictioo',
      caption: 'Results in 3 Months of Data-Driven Meta Ads Campaign',
      totalSales: '₹5,13,711.51',
      kpis: [
        { label: 'Amount Spent', value: '₹1.5 Lakhs+' },
        { label: 'Revenue Generated', value: '₹5 Lakhs+' },
        { label: 'ROAS (Approx)', value: '4.0x' },
      ],
      line: [8, 9, 8, 12, 30, 34, 52, 44, 58, 47, 56, 50],
    },
    readMore: '/our-results-portfolio/',
  },
];

export const trustedBrands = {
  eyebrow: 'Individually we have worked with',
  titleAccent: 'Trusted by Brands.',
  titleRest: 'Proven by Results.',
  description:
    'Our clients trust us to turn marketing strategies into meaningful results through performance-driven campaigns, creative solutions, and data-backed optimization.',
  // Brand names shown as wordmarks. Drop official logo files into
  // src/assets/logos/brands/ and add `logo` here to show the real logos.
  brands: [
    'Incredible Taj',
    'IAS Score',
    'Classic Tours India',
    'Taj Luxury Tours',
    'Vintaze Entertainments',
    'Sporlastic',
    'Fly To Destinations',
    'DDR Warrior',
    'ZenAum Essences',
    'WIPC',
  ],
};

export const testimonials = {
  eyebrow: 'Client Reviews',
  titleAccent: 'Client',
  titleRest: 'Reviews',
  description:
    'Conversions establishes itself as a trusted partner for businesses seeking to leverage performance marketing to achieve their objectives in the dynamic marketplace of Delhi and beyond.',
  satisfied: '+2.5K',
  satisfiedLabel: 'Satisfied Clients',
  heading: 'Discover What Our Clients Say About Us',
  subtext:
    'From retail to fintech, businesses across India trust Conversions for secure, scalable communication that delivers.',
  reviews: [
    {
      quote:
        "We've had a great experience working with Team Conversions. A special thanks to Harsh and Ashif for their professionalism and dedication throughout the campaign. They helped us generate genuinely qualified bookings through Google Ads, and the quality of leads has been excellent.",
      name: 'Rajesh Agarwal',
      company: 'Ivory Leaf Stays',
      rating: 5,
    },
    {
      quote:
        "We've had a great experience working with Team Conversions. A special thanks to Harsh and Ashif for their professionalism and dedication throughout the campaign. They helped us generate genuinely qualified bookings through Google Ads, and the quality of leads has been excellent.",
      name: 'Davindra Bhawani',
      company: 'Fictioo',
      rating: 5,
    },
  ],
};

export const partnerships = {
  eyebrow: 'Our Partners',
  titleAccent: 'Building Strong',
  titleRest: 'Partnerships for Growth',
  description:
    'We collaborate with trusted technology platforms, creative partners, and industry experts to deliver smarter marketing solutions, expand digital reach, and create measurable growth opportunities for businesses.',
  partners: ['Meta', 'ahrefs', 'Hostinger', 'GoDaddy'],
};

/* Blog posts link to internal /blog/… pages (shown as "under construction"
   until the blog is rebuilt), not to the old website. */
export const blog = {
  eyebrow: 'Our Blogs',
  titleAccent: 'Blog',
  titleRest: '& News From Us!',
  description:
    "Conversions' commitment to providing valuable content and fostering a community where businesses can learn, share, and grow their digital marketing efforts effectively.",
  posts: [
    {
      title: 'How Generative AI is Redefining Personalised Marketing in 2025',
      excerpt: 'How Generative AI is Redefining Personalised Marketing in 2025',
      to: '/blog/how-generative-ai-is-redefining-personalised-marketing-2025/',
      tag: 'Blog',
      image: { id: 'photo-1677442135703-1787eea5ce01', alt: 'Circuit board with a glowing brain, representing generative AI' },
    },
    {
      title: 'iPhone 17 Series Launch: What Pro & Pro Max Bring, India Arrival & iPhone 16 vs 17 Comparison',
      excerpt: 'iPhone 17 Series Launch: What Pro & Pro Max Bring, India Arrival & iPhone 16 vs 17 Comparison',
      to: '/blog/iphone-17-series-launch-what-pro-pro-max-bring-in-india/',
      tag: 'Blog',
      image: { id: 'photo-1592750475338-74b7b21085ab', alt: 'Smartphone with a triple camera array' },
    },
    {
      title: 'Social Media Banned in Nepal: When, Why & What’s the Conclusion?',
      excerpt: 'Social Media Banned in Nepal: When, Why & What’s the Conclusion?',
      to: '/blog/why-social-media-banned-in-nepal/',
      tag: 'Blog',
      image: { id: 'photo-1663836657800-39ab390d80b9', alt: 'Colourful 3D social media icons' },
    },
  ],
};

export const contact = {
  eyebrow: 'Hurry Up!',
  title: 'Quick Connect with us Today',
  intro: [
    'Discover why ',
    { strong: 'Conversions' },
    ' is trusted by businesses to drive measurable growth through performance marketing, ',
    { accent: 'SEO' },
    ', paid advertising, and digital solutions tailored to their goals.',
  ],
  checklist: [
    'Free Consultation & Growth Opportunity Analysis',
    'Google Ads & Meta Ads Strategy Discussion',
    'SEO & Organic Growth Roadmap',
    'Website, E-commerce & Conversion Optimization Insights',
  ],
  outro: [
    'Take advantage of your ',
    { strong: 'free consultation' },
    ' and discover the right digital marketing strategy to accelerate your business growth.',
  ],
  stats: [
    { value: '500+', label: 'Businesses Served' },
    { value: '99%', label: 'Retention Rate' },
    { value: '100%', label: 'Happy Clients' },
  ],
  requirements: [
    'Viator',
    'Meta Ads',
    'Google Ads',
    'Tik Tok Ads',
    'Amazon Marketing',
    'ETSY Marketing',
    'Snap Chat Ads',
    'Email Marketing',
    'WhatsApp Marketing',
  ],
  consent:
    'By entering my details here, I hereby authorize Conversions to contact me through call, message or WhatsApp',
};

/*
  FAQ
  The live homepage shows a "Frequently Asked Questions" heading but no
  questions yet. Every answer below is taken word-for-word from content that
  already exists on the website — only the questions are new.
  Replace or extend with the client's approved FAQs.
*/
export const faq = {
  titleAccent: 'Frequently',
  titleRest: 'Asked Questions',
  items: [
    {
      q: 'What does Conversions do?',
      a: 'Conversions is a performance marketing agency in Delhi helping businesses scale through data-driven advertising, conversion optimization, and measurable digital strategies.',
    },
    {
      q: 'Which businesses do you work with?',
      a: 'We work with startups, ecommerce brands, service businesses, and established companies to create marketing campaigns focused on real business outcomes.',
    },
    {
      q: 'Which services do you offer?',
      a: 'Meta Ads, Google Ads, Viator Listing, Amazon Marketing, ETSY Marketing, SEO Service, Email Marketing and WhatsApp Marketing.',
    },
    {
      q: 'What do you focus on in a campaign?',
      a: 'Instead of focusing only on clicks and impressions, we focus on metrics that directly impact business growth.',
    },
    {
      q: 'Is the first consultation free?',
      a: 'Take advantage of your free consultation and discover the right digital marketing strategy to accelerate your business growth.',
    },
    {
      q: 'Where is Conversions based?',
      a: 'Conversions Unit, a division of Think Web based in Delhi, specializes exclusively in performance marketing. Our office: 4th Flr, 400-A, Yusuf Sarai, Commercial, Green Park, New Delhi, Delhi 110016.',
    },
  ],
};

export const footerAbout =
  'Conversions Unit, a division of Think Web based in Delhi, specializes exclusively in performance marketing. Based in the vibrant heart of Delhi, Conversions Unit is dedicated to maximizing your business’s performance through targeted marketing strategies.';
