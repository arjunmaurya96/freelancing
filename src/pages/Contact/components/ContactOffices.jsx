/*
  GLOBAL PRESENCE — office cards with round flags
  (list lives in siteConfig.globalPresence).
*/

import { siteConfig } from '@/data/siteConfig';
import Flag from '@/components/Flag/Flag';
import Icon from '@/assets/icons/Icon';

export default function ContactOffices() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="offices-title">
      <div className="container-x">
        <div className="max-w-2xl" data-reveal>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand">Global presence</p>
          <h2 id="offices-title" className="mt-2 font-sans text-[clamp(1.8rem,3.4vw,2.5rem)] font-normal leading-tight tracking-tight !text-navy">
            Reach us across four markets
          </h2>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {siteConfig.globalPresence.map((o, i) => (
            <li key={o.city} data-reveal style={{ '--d': `${i * 80}ms` }}>
              <a href={o.href} target="_blank" rel="noopener noreferrer" className="flex h-full flex-col rounded-xl border border-black/10 p-4 transition hover:border-brand sm:p-5">
                <Flag code={o.flag} className="size-10" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">{o.country}</p>
                <p className="font-display text-xl font-semibold text-navy">{o.city}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                  View office
                  <Icon name="arrowUpRight" className="size-4" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
