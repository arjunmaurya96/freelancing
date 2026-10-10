/*
  META ADS — OUR META ADS MARKETING SERVICES
  Heading row + grid of service cards (photo, icon, title, checklist).
  Content lives in this component.
*/

import Icon from '@/assets/icons/Icon';
import { photo, photoSrcSet, hideOnError } from '@/data/images';

const content = {
  eyebrow: 'What we do',
  title: 'Our Meta Ads Marketing Services',
  intro: [
    'As a ',
    { b: 'Meta Ads agency based in Delhi' },
    ', Conversions creates and manages campaigns tailored to your business within the Meta advertising ecosystem.',
  ],
  services: [
    {
      icon: 'target',
      title: 'Meta Ads Strategy & Planning',
      image: { id: 'photo-1758873272562-aa5459cbf34b', alt: 'Marketers mapping a Meta Ads funnel on a board' },
      points: ['Audience research', 'Competitor analysis', 'Customer persona development', 'Offer positioning', 'Campaign objective selection', 'Funnel planning', 'Budget allocation', 'Conversion strategy'],
    },
    {
      icon: 'layers',
      title: 'Campaign Objectives',
      image: { id: 'photo-1611926653458-09294b3142bf', alt: 'Facebook and Instagram apps on a smartphone' },
      points: ['Lead generation', 'Sales', 'Website conversions', 'Engagement', 'Traffic', 'App promotion', 'Brand awareness', 'WhatsApp enquiries', 'Remarketing'],
    },
    {
      icon: 'spark',
      title: 'Creative Strategy',
      image: { id: 'photo-1663836657800-39ab390d80b9', alt: 'Colourful 3D social media icons for ad creatives' },
      points: ['Static image advertisements', 'Video ads', 'Carousel ads', 'Reels-style creatives', 'Story advertisements', 'Product creatives', 'Testimonial-based creatives', 'Offer-focused advertisements', 'Educational creatives', 'Customer problem-solution creatives'],
    },
    {
      icon: 'chart',
      title: 'Performance Tracking',
      image: { id: 'photo-1591696205602-2f950c417cb9', alt: 'Performance charts on a laptop screen' },
      points: ['Cost per acquisition', 'Conversion rate', 'Landing page performance', 'Return on ad spend', 'Purchase value', 'Lead quality', 'Audience performance', 'Creative performance'],
    },
    {
      icon: 'users',
      title: 'Retargeting & Remarketing Campaign',
      image: { id: 'photo-1460925895917-afdab827c52f', alt: 'Laptop showing marketing reports' },
      points: ['Website visits', 'Product views', 'Add-to-cart activity', 'Previous purchases', 'Facebook engagement', 'Instagram engagement', 'Video interactions', 'Lead form interactions'],
    },
    {
      icon: 'zap',
      title: 'Conversion Tracking Setup',
      image: { id: 'photo-1526628953301-3e589a6a8b74', alt: 'Live conversion tracking dashboard on a monitor' },
      points: ['GTM and GA4 Events Setup', 'Pixel Setup', 'Conversions API Setup', 'CRM or Sheet Integrations', 'GHL or Other Automation', 'Clarity Setup for Heatmaps', 'Primary and Secondary Conversions'],
    },
  ],
};

export default function MetaServices() {
  return (
    <section id="meta-services" className="scroll-mt-24 bg-[#f2f5f9] py-16 sm:py-20" aria-labelledby="meta-services-title">
      <div className="container-x">
        <div className="grid gap-5 lg:grid-cols-2 lg:items-end" data-reveal>
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#1d5fbf]">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              {content.eyebrow}
            </p>
            <h2 id="meta-services-title" className="mt-3 font-sans text-[clamp(1.7rem,3.2vw,2.4rem)] font-medium leading-tight tracking-tight !text-navy">
              {content.title}
            </h2>
          </div>
          <p className="leading-relaxed text-charcoal lg:pl-10">
            {content.intro.map((part, i) => (typeof part === 'string' ? part : <strong key={i} className="font-semibold text-navy">{part.b}</strong>))}
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.services.map((s, i) => (
            <li key={s.title} className="flex flex-col overflow-hidden rounded-md border border-black/5 bg-white" data-reveal style={{ '--d': `${(i % 3) * 80}ms` }}>
              <div className="relative aspect-[16/9] bg-gradient-to-br from-[#e8f0fb] to-[#c9d8f3]">
                <img
                  src={photo(s.image.id, 640, 360)}
                  srcSet={photoSrcSet(s.image.id, [400, 640, 900], 360 / 640)}
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  width="640"
                  height="360"
                  alt={s.image.alt}
                  loading="lazy"
                  decoding="async"
                  onError={hideOnError}
                  className="h-full w-full object-cover"
                />
                <span className="absolute -bottom-5 left-6 grid size-11 place-items-center rounded-lg bg-brand text-white shadow-[0_10px_20px_-10px_rgb(249_76_48/0.9)]">
                  <Icon name={s.icon} className="size-5" />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 pt-8">
              <h3 className="mt-1 font-sans text-lg font-semibold tracking-normal !text-navy">{s.title}</h3>
              <ul className="mt-4 space-y-2">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-charcoal">
                    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-brand text-white">
                      <Icon name="check" className="size-2.5" strokeWidth={3.5} />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
