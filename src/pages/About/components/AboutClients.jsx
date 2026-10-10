/*
  OUR CLIENTS — logo tiles (centred rows) (full-colour logos from
  src/assets/logos/brands/) plus a highlight strip with satisfied clients.
*/

import { aboutBrands } from '@/data/aboutContent';
import { testimonials } from '@/data/homeContent';
import Icon from '@/assets/icons/Icon';
import incredibleTaj from '@/assets/logos/brands/incredible-taj.webp';
import iasScore from '@/assets/logos/brands/ias-score.webp';
import classicTours from '@/assets/logos/brands/classic-tours-india.webp';
import tajLuxury from '@/assets/logos/brands/taj-luxury-tours.webp';
import vintaze from '@/assets/logos/brands/vintaze-entertainments.webp';
import flyTo from '@/assets/logos/brands/fly-to-destinations.webp';
import wipc from '@/assets/logos/brands/wipc.webp';

const logos = [
  { src: iasScore, alt: 'IAS Score' },
  { src: classicTours, alt: 'Classic Tours India' },
  { src: tajLuxury, alt: 'Taj Luxury Tours' },
  { src: vintaze, alt: 'Vintaze Entertainments' },
  { src: incredibleTaj, alt: 'Incredible Taj' },
  { src: wipc, alt: 'WIPC' },
  { src: flyTo, alt: 'Fly To Destinations' },
];

export default function AboutClients() {
  return (
    <section className="bg-[#f4f3f8] py-16 sm:py-20" aria-labelledby="clients-about-title">
      <div className="container-x">
        <div className="grid gap-5 lg:grid-cols-2 lg:items-end" data-reveal>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand">Our clients</p>
            <h2 id="clients-about-title" className="mt-2 font-sans text-[clamp(1.8rem,3.4vw,2.5rem)] font-normal leading-tight tracking-tight !text-navy">
              {aboutBrands.titleAccent} {aboutBrands.titleRest}
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-charcoal lg:pl-10">{aboutBrands.description}</p>
        </div>

        <ul className="mt-9 flex flex-wrap justify-center gap-3">
          {logos.map((l) => (
            <li key={l.alt} className="flex w-[calc(50%-0.375rem)] flex-col items-center justify-center gap-2 rounded-md border border-black/5 bg-white px-3 py-5 sm:w-[calc(33.333%-0.5rem)] lg:w-[calc(25%-0.5625rem)]" data-reveal>
              <img src={l.src} alt={l.alt} loading="lazy" decoding="async" className="h-10 w-auto max-w-full object-contain sm:h-12" />
              <span className="text-[11px] font-medium text-charcoal">{l.alt}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-4 rounded-md border-l-4 border-brand bg-white p-5 shadow-[0_20px_40px_-30px_rgb(14_11_53/0.5)] sm:flex-row sm:items-center sm:gap-8 sm:p-6" data-reveal>
          <p className="font-display text-4xl font-bold text-[#4b2a8c]">{testimonials.satisfied}</p>
          <div className="flex-1">
            <p className="font-semibold text-navy">{testimonials.satisfiedLabel}</p>
            <p className="mt-1 text-sm leading-relaxed text-charcoal">{testimonials.subtext}</p>
          </div>
          <span className="inline-flex items-center gap-2 self-start rounded bg-navy px-3 py-2 text-xs font-bold uppercase text-white sm:self-center">
            <Icon name="clock" className="size-4 text-brand" />
            Since 2024
          </span>
        </div>
      </div>
    </section>
  );
}
