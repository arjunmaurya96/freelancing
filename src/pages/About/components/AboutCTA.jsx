/*
  TALK TO THE TEAM — dark CTA band with two buttons.
*/

import { Link } from 'react-router';
import { contact } from '@/data/homeContent';

export default function AboutCTA() {
  return (
    <section className="bg-[#22183a] py-12 text-white sm:py-14" aria-labelledby="about-cta-title">
      <div className="container-x flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between" data-reveal>
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/70">Talk to the team</p>
          <h2 id="about-cta-title" className="mt-2 font-sans text-[clamp(1.8rem,3.4vw,2.5rem)] font-normal leading-tight tracking-tight !text-white">
            {contact.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80">
            {contact.intro.map((part) => (typeof part === 'string' ? part : part.strong || part.accent))}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="#contact" className="rounded bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-600">
            Book a consultation
          </a>
          <Link to="/our-results-portfolio/" className="rounded bg-white px-5 py-3 text-sm font-semibold text-navy hover:bg-white/90">
            Explore our work
          </Link>
        </div>
      </div>
    </section>
  );
}
