/*
  META ADS — HERO
  Full-width photo banner with a dark overlay (same style as the About
  page), then four highlight cards overlapping its bottom edge.
  Content lives right here in this component.
*/

import { Link } from 'react-router';
import { photo, photoSrcSet, hideOnError } from '@/data/images';
import Icon from '@/assets/icons/Icon';

const content = {
  eyebrow: 'Meta Ads Agency in Delhi',
  title: 'Best Meta Ads Agency in Delhi',
  accent: 'Facebook & Instagram Ads Experts',
  intro:
    'Conversions is a Meta Ads Agency in Delhi that focuses on results and helps businesses selling products or services grow through advertising on Facebook and Instagram. It offers performance-oriented strategies for both B2B and B2C companies in order to generate leads, increase sales, and secure sustainable growth.',
  image: { id: 'photo-1611926653458-09294b3142bf', alt: 'Facebook and Instagram apps on a smartphone' },
};

const highlights = [
  { icon: 'chart', title: '₹50 Cr+', text: 'Ad spend managed', color: 'bg-[#4b2a8c]' },
  { icon: 'users', title: '5 Lakh+', text: 'Leads generated', color: 'bg-[#0f7a6c]' },
  { icon: 'trending', title: '$12 Million+', text: 'Sales generated', color: 'bg-brand' },
  { icon: 'award', title: '12 Experts', text: 'Performance marketing team', color: 'bg-[#c98a06]' },
];

export default function MetaHero() {
  return (
    <>
      {/* Full-width photo banner (same style as the About page hero) */}
      <section className="relative isolate overflow-hidden bg-navy text-white" aria-labelledby="meta-title">
        <img
          src={photo(content.image.id, 1600, 900, 85)}
          srcSet={photoSrcSet(content.image.id, [800, 1200, 1600, 2000], 900 / 1600, 85)}
          sizes="100vw"
          width="1600"
          height="900"
          alt=""
          fetchPriority="high"
          decoding="async"
          onError={hideOnError}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(14_11_53/0.92)_0%,rgb(14_11_53/0.75)_45%,rgb(14_11_53/0.35)_100%)]" aria-hidden="true" />

        <div className="container-x pb-28 pt-8 sm:pb-36 sm:pt-10">
          <nav aria-label="Breadcrumb" className="text-sm text-white/75">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{content.eyebrow}</span>
          </nav>

          <div className="mt-10 max-w-2xl sm:mt-14">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#ffb59f]">{content.eyebrow}</p>
            <h1 id="meta-title" className="mt-3 text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.08] !text-white">
              {content.title} <span className="block text-brand">{content.accent}</span>
            </h1>
            <p className="mt-5 max-w-xl leading-relaxed text-white/85">{content.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#meta-contact" className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-600">
                Get Quote
                <Icon name="arrow" className="size-4" strokeWidth={2.4} />
              </a>
              <a href="#meta-services" className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-navy hover:bg-white/90">
                Our Meta Ads Services
              </a>
            </div>
          </div>
        </div>
        <span className="absolute inset-x-0 bottom-0 h-1 bg-brand" aria-hidden="true" />
      </section>

      {/* Highlight cards overlapping the banner */}
      <div className="bg-[#f4f3f8] pb-10">
        <ul className="container-x relative -mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {highlights.map((h) => (
            <li key={h.title} className="relative overflow-hidden rounded-xl border border-black/5 bg-white px-3 pb-5 pt-6 text-center shadow-[0_14px_30px_-22px_rgb(14_11_53/0.5)] sm:px-5">
              <span className={`absolute inset-x-[20%] top-0 h-1 rounded-b ${h.color}`} aria-hidden="true" />
              <span className={`mx-auto grid size-11 place-items-center rounded-lg text-white ${h.color}`}>
                <Icon name={h.icon} className="size-5" />
              </span>
              <p className="mt-3 font-display text-lg font-bold text-navy sm:text-xl">{h.title}</p>
              <p className="mt-1 text-xs leading-snug text-muted">{h.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}






