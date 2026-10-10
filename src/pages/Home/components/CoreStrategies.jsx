/*
  DRIVE RESULTS — four white cards on a peach frame.
  Each card: illustration tile, orange title, description, dark
  "Contact Us" bar. Content: core services (aboutContent.js) with the
  agency's values as short checklists.
*/

import { Link } from 'react-router';
import { coreServices } from '@/data/aboutContent';
import { about, caseStudies } from '@/data/homeContent';
import Icon from '@/assets/icons/Icon';

const tiles = [
  { bg: 'from-[#e9f0ff] to-[#cfdcfb]', fg: 'text-[#1877F2]' },
  { bg: 'from-[#fff4d6] to-[#ffe2a3]', fg: 'text-[#ea8a00]' },
  { bg: 'from-[#e7f8ef] to-[#c4efd8]', fg: 'text-[#16a37f]' },
  { bg: 'from-[#ffe9e3] to-[#ffcdbf]', fg: 'text-brand' },
];

export default function CoreStrategies() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="strategies-title">
      <div className="container-x">
        <div className="text-center" data-reveal>
          <p className="text-[clamp(1.1rem,2.2vw,1.5rem)] text-brand">{caseStudies[0].eyebrow}</p>
          <h2 id="strategies-title" className="mt-3 font-sans text-[clamp(1.7rem,3.4vw,2.3rem)] font-medium uppercase tracking-normal !text-navy">
            {coreServices.title}
          </h2>
        </div>

        <ul className="mt-10 grid gap-4 rounded-2xl bg-peach p-3 sm:grid-cols-2 sm:p-4 xl:grid-cols-4">
          {coreServices.items.map((s, i) => (
            <li key={s.title} className="flex" data-reveal style={{ '--d': `${i * 100}ms` }}>
              <article className="flex w-full flex-col overflow-hidden rounded-xl bg-white">
                <div className="flex-1 p-5">
                  <span className={`grid size-20 place-items-center rounded-2xl bg-gradient-to-br ${tiles[i].bg} ${tiles[i].fg}`}>
                    <Icon name={s.icon} className="size-10" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-6 font-sans text-2xl font-medium tracking-normal !text-brand">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-navy">{s.text}</p>
                  <ul className="mt-4 space-y-2">
                    {about.values.slice((i * 3) % 6, ((i * 3) % 6) + 2).map((v) => (
                      <li key={v} className="flex items-start gap-2 text-[0.95rem] font-medium text-navy">
                        <Icon name="check" className="mt-0.5 size-4 shrink-0 text-brand" strokeWidth={3} />
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to={s.to || '/contact/'} className="flex items-center justify-center gap-2 rounded-b-xl bg-navy py-3.5 font-semibold text-white">
                  {s.to ? 'Learn more' : 'Contact Us'}
                  <Icon name="arrow" className="size-4" strokeWidth={2.4} />
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
