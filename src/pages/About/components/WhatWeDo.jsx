/*
  WHAT WE DO — heading row (title left, intro right) + four service cards.
*/

import { Link } from 'react-router';
import { coreServices, aboutHero } from '@/data/aboutContent';
import Icon from '@/assets/icons/Icon';

export default function WhatWeDo() {
  return (
    <section className="bg-[#f4f3f8] py-16 sm:py-20" aria-labelledby="whatwedo-title">
      <div className="container-x">
        <div className="grid gap-5 lg:grid-cols-2 lg:items-end" data-reveal>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand">What we do</p>
            <h2 id="whatwedo-title" className="mt-2 font-sans text-[clamp(1.8rem,3.4vw,2.5rem)] font-normal leading-tight tracking-tight !text-navy">
              {coreServices.title}
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-charcoal lg:pl-10">{aboutHero.paragraphs[1]}</p>
        </div>

        <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coreServices.items.map((s, i) => (
            <li key={s.title} className="flex flex-col rounded-md border border-black/5 bg-white p-5" data-reveal style={{ '--d': `${i * 80}ms` }}>
              <span className="grid size-9 place-items-center rounded-md bg-[#efeaf8] text-[#4b2a8c]">
                <Icon name={s.icon} className="size-[18px]" />
              </span>
              <h3 className="mt-5 font-sans text-lg font-medium tracking-normal !text-navy">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal">{s.text}</p>
              <Link to={s.to || '/contact/'} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                {s.to ? `Explore ${s.title}` : 'Talk to us'}
                <Icon name="arrow" className="size-4" strokeWidth={2.2} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
