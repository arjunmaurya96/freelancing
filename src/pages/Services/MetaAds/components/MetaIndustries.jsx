/*
  META ADS — INDUSTRIES WE SERVED
  Dark navy band: heading + industry chips on the left, photo on the right.
  Content lives in this component.
*/

import { photo, photoSrcSet, hideOnError } from '@/data/images';
import Icon from '@/assets/icons/Icon';

const content = {
  eyebrow: 'Who we work with',
  title: 'Industries We Served with Our Meta Ads Services',
  text: 'Whether your business is in B2B, B2C, services, real estate, hospitality, consultancy, or e-commerce, our Meta Ads strategies will be tailored to your business objectives.',
  industries: [
    'Ecommerce brands',
    'D2C businesses',
    'Real estate companies',
    'Education institutes',
    'Healthcare businesses',
    'Travel companies',
    'Hospitality businesses',
    'Local service businesses',
    'B2B companies',
    'Professional service providers',
    'Startups',
    'Restaurants',
    'Beauty and wellness brands',
    'Home improvement businesses',
  ],
  image: { id: 'photo-1676277759236-fdc9fe039d9c', alt: 'Team members working together on laptops' },
};

export default function MetaIndustries() {
  return (
    <section className="bg-[#0b1a33] py-16 text-white sm:py-20" aria-labelledby="meta-industries-title">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div data-reveal>
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-white/70">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            {content.eyebrow}
          </p>
          <h2 id="meta-industries-title" className="mt-3 font-sans text-[clamp(1.7rem,3.2vw,2.4rem)] font-medium leading-tight tracking-tight !text-white">
            {content.title}
          </h2>
          <p className="mt-4 leading-relaxed text-white/80">{content.text}</p>

          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {content.industries.map((name) => (
              <li key={name} className="flex items-center gap-2.5 rounded-md border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm font-medium">
                <Icon name="pin" className="size-4 shrink-0 text-brand" />
                {name}
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-md bg-[#13274a]" data-reveal="right">
          <img
            src={photo(content.image.id, 900, 1000)}
            srcSet={photoSrcSet(content.image.id, [480, 720, 900, 1200], 1000 / 900)}
            sizes="(min-width: 1024px) 40vw, 92vw"
            width="900"
            height="1000"
            alt={content.image.alt}
            loading="lazy"
            decoding="async"
            onError={hideOnError}
            className="aspect-[4/3] w-full object-cover lg:aspect-[9/10]"
          />
        </div>
      </div>
    </section>
  );
}
