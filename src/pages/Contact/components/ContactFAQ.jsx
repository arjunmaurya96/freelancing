/*
  FAQ — "Before you get in touch": heading left, accordion right.
  Questions from homeContent.faq.
*/

import { Link } from 'react-router';
import { faq } from '@/data/homeContent';
import { siteConfig } from '@/data/siteConfig';

export default function ContactFAQ() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="contact-faq-title">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div data-reveal>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand">Before you get in touch</p>
          <h2 id="contact-faq-title" className="mt-2 font-sans text-[clamp(1.8rem,3.4vw,2.5rem)] font-normal leading-tight tracking-tight !text-navy">
            {faq.titleAccent} {faq.titleRest}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal">
            Can’t find what you’re looking for? Call us on{' '}
            <a href={siteConfig.phoneHref} className="font-semibold text-brand-700 underline underline-offset-4">
              {siteConfig.phone}
            </a>{' '}
            or{' '}
            <Link to="/#contact" className="font-semibold text-brand-700 underline underline-offset-4">
              request a quote
            </Link>
            .
          </p>
        </div>

        <div className="divide-y divide-black/10 border-y border-black/10" data-reveal>
          {faq.items.map((item, i) => (
            <details key={item.q} className="group" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
                <h3 className="font-sans text-base font-medium leading-snug tracking-normal !text-navy sm:text-lg">{item.q}</h3>
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#f4f3f8] text-navy transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="pb-5 pr-10 text-sm leading-relaxed text-charcoal">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
