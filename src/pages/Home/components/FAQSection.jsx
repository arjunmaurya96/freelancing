/*
  FAQ — centred heading and a simple accordion with underlined rows and
  black chevron circles. Native <details>/<summary> (no JavaScript).
*/

import { faq } from '@/data/homeContent';

export default function FAQSection() {
  return (
    <section className="pb-10 pt-6 sm:pt-10" aria-labelledby="faq-title">
      <div className="container-x">
        <h2 id="faq-title" className="text-center font-sans text-[clamp(1.6rem,3.2vw,2rem)] font-medium tracking-normal !text-navy" data-reveal>
          {faq.titleAccent} {faq.titleRest}
        </h2>

        <div className="mx-auto mt-8 max-w-5xl" data-reveal>
          {faq.items.map((item) => (
            <details key={item.q} className="group border-b border-ink/60">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-2 py-4 [&::-webkit-details-marker]:hidden">
                <h3 className="font-sans text-base font-medium leading-snug tracking-normal !text-black sm:text-lg">{item.q}</h3>
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-black text-white transition-transform duration-300 group-open:rotate-180" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="px-2 pb-5 leading-relaxed text-charcoal motion-safe:animate-[fade-up_0.35s_ease]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
