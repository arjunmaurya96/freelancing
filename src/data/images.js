/*
  IMAGES
  ------------------------------------------------------------------
  Placeholder photos from Unsplash (free to use, loaded from Unsplash's
  image CDN, which resizes and converts them to WebP/AVIF automatically).

  To use your own photos later:
    1. Put the files in src/assets/images/home/
    2. Import them in the section and use them in place of photo(...)

  Every image sits on a brand-coloured background, so if a photo ever
  fails to load the layout still looks intentional.
*/

const CDN = 'https://images.unsplash.com';

/** One URL at a given width (and optional height for a fixed crop). */
export function photo(id, width, height, quality = 70) {
  const size = height ? `&w=${width}&h=${height}&fit=crop` : `&w=${width}`;
  return `${CDN}/${id}?auto=format&q=${quality}${size}`;
}

/** srcSet string for responsive images. `ratio` = height / width. */
export function photoSrcSet(id, widths, ratio, quality) {
  return widths
    .map((w) => `${photo(id, w, ratio ? Math.round(w * ratio) : undefined, quality)} ${w}w`)
    .join(', ');
}

/** Hides a photo that failed to load, revealing the coloured background. */
export function hideOnError(event) {
  event.currentTarget.style.visibility = 'hidden';
}

export const images = {
  hero: {
    id: 'photo-1590650153855-d9e808231d41',
    alt: 'Marketing strategist planning a campaign on her laptop',
  },
  /* Home hero carousel — 4 slides, the first one loads with high priority. */
  heroSlides: [
    { id: 'photo-1590650153855-d9e808231d41', alt: 'Marketing strategist planning a campaign on her laptop', caption: 'Campaign planning' },
    { id: 'photo-1582005450386-52b25f82d9bb', alt: 'Team reviewing ad performance together on laptops', caption: 'Strategy sessions' },
    { id: 'photo-1551288049-bebda4e38f71', alt: 'Ad performance analytics dashboard on a laptop', caption: 'Performance tracking' },
    { id: 'photo-1758873272562-aa5459cbf34b', alt: 'Two marketers mapping out a funnel on a chalkboard', caption: 'Funnel mapping' },
  ],
  about: {
    id: 'photo-1754531976828-69e42ce4e0d9',
    alt: 'The Conversions team discussing campaign results around a table',
  },
  /* Home page (reference design) */
  homeV2: {
    // Dubai-based visuals for the Home page
    // Hero carousel: India landmarks + Dubai (auto-scrolls; swipe/drag to browse).
    // `pos` = which part of the photo stays in view when it is cropped (x% y%).
    heroSlides: [
      { id: 'photo-1524492412937-b28074a5d7da', alt: 'Taj Mahal, Agra', place: 'Taj Mahal, Agra' },
      { id: 'photo-1685790582503-1b2762d95407', alt: 'Lahori Gate of the Red Fort with the Indian flag, Delhi', place: 'Red Fort (Lal Qila), Delhi', pos: '50% 40%' },
      { id: 'photo-1716747713381-ebdd06319cdd', alt: 'Full view of Qutub Minar standing among the ruins of the Qutb complex, Delhi', place: 'Qutub Minar, Delhi', pos: '50% 22%' },
      { id: 'photo-1760872646289-5da7cb893dd4', alt: 'Rashtrapati Bhavan, India’s presidential palace', place: 'Rashtrapati Bhavan, New Delhi' },
      { id: 'photo-1662852742109-2c05a1274bf8', alt: 'India Gate seen through a stone archway', place: 'India Gate, New Delhi' },
      { id: 'photo-1524230507669-5ff97982bb5e', alt: 'Hawa Mahal in Jaipur', place: 'Hawa Mahal, Jaipur' },
      { id: 'photo-1512453979798-5ea266f8880c', alt: 'Burj Khalifa and the Dubai skyline', place: 'Burj Khalifa, Dubai' },
    ],
    expert: { id: 'photo-1765691893454-21622cc8a63f', alt: 'Performance marketing strategist working on a laptop' },
    happy: { id: 'photo-1546412414-c2658fffe7d9', alt: 'Business owner in Dubai at golden hour' },
    tablet: { id: 'photo-1518684079-3c830dcef090', alt: 'Burj Al Arab on the Dubai coastline' },
  },

  /* About page */
  aboutPage: {
    hero: { id: 'photo-1577962917302-cd874c4e31d2', alt: 'Marketing team in a strategy meeting' },
    team: { id: 'photo-1781246212288-7fa538344718', alt: 'Colleagues collaborating around a conference table with laptops' },
    analytics: { id: 'photo-1551288049-bebda4e38f71', alt: 'Campaign performance analytics on a laptop screen' },
    workspace: { id: 'photo-1460925895917-afdab827c52f', alt: 'Laptop showing marketing reports on a desk' },
    charts: { id: 'photo-1591696205602-2f950c417cb9', alt: 'Performance charts on a laptop screen' },
    collaboration: { id: 'photo-1676277759236-fdc9fe039d9c', alt: 'Team members working together on laptops' },
    planning: { id: 'photo-1758873272562-aa5459cbf34b', alt: 'Two people planning a campaign on a chalkboard' },
    websiteDev: { id: 'photo-1593437955835-fc8c51725430', alt: 'Designer building a website on a laptop' },
    monitoring: { id: 'photo-1526628953301-3e589a6a8b74', alt: 'Live performance dashboard on a monitor' },
  },
  /* Contact page */
  contactPage: {
    hero: { id: 'photo-1582005450386-52b25f82d9bb', alt: 'Team members talking with a client at a table with laptops' },
    call: { id: 'photo-1587573578181-f3342274f4c7', alt: 'Person holding a smartphone ready to call' },
  },
  services: {
    meta: { id: 'photo-1611926653458-09294b3142bf', alt: 'Social media apps on a smartphone screen' },
    google: { id: 'photo-1586125674857-4eb86880905d', alt: 'Google search results on a computer screen' },
    viator: { id: 'photo-1530789253388-582c481c54b0', alt: 'Travellers photographing hot air balloons on a tour' },
    amazon: { id: 'photo-1633174524827-db00a6b7bc74', alt: 'Ecommerce shipping boxes ready for delivery' },
    etsy: { id: 'photo-1573227890085-12ab5d68a170', alt: 'Handmade earrings, a typical Etsy product' },
    seo: { id: 'photo-1551288049-bebda4e38f71', alt: 'Website traffic analytics on a laptop screen' },
    email: { id: 'photo-1596526131083-e8c633c948d2', alt: 'Mail app icon on a phone screen' },
    whatsapp: { id: 'photo-1633354931133-27ac1ee5d853', alt: 'Green chat icon representing WhatsApp messaging' },
  },
};
