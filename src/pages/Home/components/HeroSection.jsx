/*
  HERO — full-width photo banner.
  A swipeable landmark slider (India + Dubai) fills the whole section; the
  eyebrow, H1, intro, CTA, Google rating and four glass stat cards sit on
  Phones/tablets: clear photo block on top, text below on navy.
  Desktop: photo fills the section with NO overlay; the text is centred on
  top of it (text-shadow for readability, solid stat chips).
  The pencil Dubai skyline sits in its own band right below the hero.
*/

import { Link } from 'react-router';
import { hero, metrics } from '@/data/homeContent';
import { siteConfig } from '@/data/siteConfig';
import { images } from '@/data/images';
import DubaiSkyline from './DubaiSkyline';
import HeroCarousel from './HeroCarousel';
import Icon from '@/assets/icons/Icon';

const stats = [
  { value: hero.stats[0].value, label: hero.stats[0].label, icon: 'trending' },
  { value: hero.stats[1].value, label: hero.stats[1].label, icon: 'chart' },
  { value: hero.stats[2].value, label: hero.stats[2].label, icon: 'users' },
  { value: `${metrics[3].end}${metrics[3].suffix}`, label: metrics[3].label, icon: 'target' },
];

/* "Google / Reviews ★★★★★" mark, drawn with text so no image is needed. */
function GoogleReviewsMark() {
  const letters = [
    ['G', '#4285F4'],
    ['o', '#EA4335'],
    ['o', '#FBBC05'],
    ['g', '#4285F4'],
    ['l', '#34A853'],
    ['e', '#EA4335'],
  ];
  return (
    <span className="flex flex-col items-start leading-none" aria-hidden="true">
      <span className="font-sans text-[1.35rem] font-medium tracking-tight">
        {letters.map(([l, c], i) => (
          <span key={i} style={{ color: c }}>
            {l}
          </span>
        ))}
      </span>
      <span className="mt-0.5 flex items-center gap-1 text-[8px] font-semibold text-ink/70">
        Reviews
        <span className="tracking-[-0.1em] text-[#FBBC05]">★★★★★</span>
      </span>
    </span>
  );
}

export default function HeroSection() {
  return (
    <>
      <section
        className="hero-v2 relative isolate flex flex-col bg-navy lg:min-h-[clamp(620px,88svh,860px)] lg:justify-center"
        aria-labelledby="hero-title"
      >
        {/* Photos: a clear block on top for phones/tablets, full background on desktop */}
        <HeroCarousel
          slides={images.homeV2.heroSlides}
          className="h-[min(58svh,520px)] min-h-[300px] w-full lg:absolute lg:inset-0 lg:-z-10 lg:h-full lg:min-h-0"
        />

        <div className="container-x relative pb-12 pt-8 lg:pointer-events-none lg:py-20">
          {/* Desktop: centred text straight on the photo (no overlay); text-shadow keeps it readable */}
          <div className="mx-auto text-center lg:pointer-events-auto lg:max-w-4xl">
            <p className="hero-v2-in inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand px-3.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.06em] text-white sm:px-4 sm:text-xs sm:tracking-[0.12em]">
              <Icon name="shield" className="size-4 shrink-0" strokeWidth={2.4} />
              {hero.eyebrow}
            </p>

            <h1 id="hero-title" className="hero-v2-in mt-4 text-[clamp(2.3rem,6vw,4.2rem)] font-bold leading-[1.04] tracking-tight !text-white [animation-delay:100ms] lg:text-[clamp(3rem,5.6vw,5rem)] lg:[text-shadow:0_2px_6px_rgb(0_0_0/0.55),0_10px_40px_rgb(0_0_0/0.45)]">
              <span className="text-brand">{hero.titleAccent}</span>{' '}
              {hero.titleRest}
            </h1>

            <p className="hero-v2-in mx-auto mt-4 max-w-xl text-[0.98rem] leading-relaxed text-white/85 [animation-delay:200ms] sm:text-lg lg:max-w-2xl lg:font-medium lg:text-white lg:[text-shadow:0_1px_4px_rgb(0_0_0/0.7),0_4px_20px_rgb(0_0_0/0.5)]">{hero.description}</p>

            <div className="hero-v2-in mt-7 flex flex-col items-center gap-3 [animation-delay:300ms] sm:flex-row sm:justify-center">
              <Link to="/#contact" className="btn btn-primary w-full px-8 uppercase tracking-wide sm:w-auto">
                Request Quote
                <Icon name="arrow" className="size-4" strokeWidth={2.2} />
              </Link>
              <a
                href={siteConfig.googleRating.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2"
                aria-label={`${siteConfig.googleRating.value} rating on Google — read our reviews`}
              >
                <GoogleReviewsMark />
                <span className="font-display text-base font-semibold tracking-tight text-brand sm:text-lg">{siteConfig.googleRating.value} Rating on Google</span>
              </a>
            </div>

            <dl className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-2.5 sm:grid-cols-4 lg:mt-10 lg:gap-3">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="hero-v2-in flex !flex-row items-center gap-2.5 rounded-2xl bg-white/[0.07] p-3 text-left ring-1 ring-white/10 lg:bg-[#0e0b35] lg:shadow-[0_14px_30px_-14px_rgb(0_0_0/0.6)]"
                  style={{ animationDelay: `${400 + i * 100}ms` }}
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand text-white">
                    <Icon name={s.icon} className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <dd className="font-display text-lg font-bold leading-none text-white sm:text-xl">{s.value}</dd>
                    <dt className="mt-1 text-[11px] leading-tight text-white/75 sm:text-xs">{s.label}</dt>
                  </span>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Pencil Dubai skyline — its own band just below the hero */}
      <div className="skyline-band" aria-hidden="true">
        <DubaiSkyline />
      </div>
    </>
  );
}
