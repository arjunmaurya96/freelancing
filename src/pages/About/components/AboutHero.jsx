/*
  ABOUT HERO — full-width photo banner with a dark overlay.
  Breadcrumb → eyebrow → H1 → intro → two buttons, then four highlight
  cards that overlap the bottom edge of the banner.
*/

import { Link } from 'react-router';
import { aboutHero, director } from '@/data/aboutContent';
import { siteConfig } from '@/data/siteConfig';
import { photo, photoSrcSet, hideOnError } from '@/data/images';
import Icon from '@/assets/icons/Icon';

const heroImg = { id: 'photo-1708361089093-beef4c4584e7', alt: 'Downtown Dubai skyline at twilight' };

// Short facts taken from the About copy (no new claims).
const highlights = [
  { icon: 'pin', title: 'Based in Delhi, India', text: 'Performance marketing agency', color: 'bg-[#4b2a8c]', bar: 'bg-[#4b2a8c]' },
  { icon: 'award', title: 'Established in 2024', text: `Founded by ${director.name}`, color: 'bg-[#0f7a6c]', bar: 'bg-[#0f7a6c]' },
  { icon: 'chart', title: 'Meta & Google Ads', text: 'Performance marketing & lead generation', color: 'bg-brand', bar: 'bg-brand' },
  { icon: 'star', title: `${siteConfig.googleRating.value} Google rating`, text: 'Rated by our clients', color: 'bg-[#c98a06]', bar: 'bg-[#c98a06]' },
];

export default function AboutHero() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-white" aria-labelledby="about-title">
        <img
          src={photo(heroImg.id, 1600, 900)}
          srcSet={photoSrcSet(heroImg.id, [800, 1200, 1600, 2000], 900 / 1600)}
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
            <span className="text-white">About Conversions</span>
          </nav>

          <div className="mt-10 max-w-2xl sm:mt-14">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#ffb59f]">{aboutHero.eyebrow}</p>
            <h1 id="about-title" className="mt-3 text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.08] !text-white">
              {aboutHero.title}
            </h1>
            <p className="mt-5 max-w-xl leading-relaxed text-white/85">{aboutHero.paragraphs[0]}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#director" className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-600">
                Meet our director
                <Icon name="arrow" className="size-4" strokeWidth={2.4} />
              </a>
              <a href="#our-work" className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-navy hover:bg-white/90">
                View our case study
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
              <span className={`absolute inset-x-[20%] top-0 h-1 rounded-b ${h.bar}`} aria-hidden="true" />
              <span className={`mx-auto grid size-11 place-items-center rounded-lg text-white ${h.color}`}>
                <Icon name={h.icon} className="size-5" />
              </span>
              <p className="mt-3 text-sm font-semibold text-navy sm:text-base">{h.title}</p>
              <p className="mt-1 text-xs leading-snug text-muted">{h.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
