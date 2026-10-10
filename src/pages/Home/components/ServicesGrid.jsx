/*
  OUR SERVICE — dark navy band.
  Heading + intro on the left, rotating "Explore more" badge on the right,
  then a wide 3-column bordered grid of all nine services (orange icon circles).
  Hovering a card lifts it up and to the left with a soft shadow.
*/

import { Link } from 'react-router';
import { services } from '@/data/homeContent';
import Icon from '@/assets/icons/Icon';

const serviceIcons = {
  meta: 'facebook',
  google: 'google',
  viator: 'globe',
  amazon: 'cart',
  etsy: 'spark',
  seo: 'search',
  email: 'mail',
  whatsapp: 'whatsapp',
  snapchat: 'zap',
};

export default function ServicesGrid() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-16 sm:py-20" aria-labelledby="services-title">
      <div className="absolute -right-40 top-0 -z-10 h-full w-2/3 bg-gradient-to-l from-navy-700/80 to-transparent" aria-hidden="true" />

      <div className="container-x !max-w-[1440px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between" data-reveal>
          <div className="max-w-2xl">
            <h2 id="services-title" className="font-sans text-[clamp(1.9rem,3.6vw,2.4rem)] font-medium uppercase tracking-normal !text-brand">
              {services.titleAccent}
            </h2>
            <p className="mt-4 leading-relaxed text-white/85">{services.description}</p>
          </div>

          <div className="flex shrink-0 flex-col items-center gap-4 text-center">
            <p className="text-lg text-white">{services.titleRest}</p>
            <Link to="/contact/" className="rounded-xl border-2 border-white px-6 py-2.5 font-semibold text-white transition hover:bg-white hover:text-navy">
              Get Started
            </Link>
            {/* Rotating badge */}
            <Link to="/contact/" className="relative grid size-24 place-items-center" aria-label="Explore more services">
              <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true">
                <defs>
                  <path id="svc-ring" d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
                </defs>
                <circle cx="50" cy="50" r="48" fill="none" stroke="#fff" strokeOpacity="0.6" strokeWidth="1.5" />
                <text className="fill-white text-[10px] font-medium tracking-[0.25em]">
                  <textPath href="#svc-ring">Explore more services •</textPath>
                </text>
              </svg>
              <span className="grid size-12 place-items-center rounded-full border border-white/70 text-white transition group-hover:bg-white">
                <Icon name="arrowUpRight" className="size-6" />
              </span>
            </Link>
          </div>
        </div>

        <ul className="mt-12 grid border-l border-t border-white/20 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map((s, i) => (
            <li key={s.id} className={`relative border-b border-r border-white/20 hover:z-10 ${i === services.items.length - 1 && services.items.length % 2 ? 'md:col-span-2 lg:col-span-1' : ''}`} data-reveal style={{ '--d': `${(i % 3) * 90}ms` }}>
              <Link to={s.to} className="svc-card group flex h-full flex-col items-center px-5 py-7 text-center sm:px-6 lg:py-8">
                <span className="grid size-[4.5rem] place-items-center rounded-full bg-brand text-white shadow-[0_10px_24px_-10px_rgb(249_76_48/0.9)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon name={serviceIcons[s.id]} className="size-8" />
                </span>
                <h3 className="mt-4 font-sans text-[clamp(1.25rem,2vw,1.6rem)] font-bold uppercase tracking-normal !text-white">{s.title}</h3>
                <p className="mt-2 max-w-md text-base leading-relaxed text-white/85 sm:text-[1.05rem]">{s.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
