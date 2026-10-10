/*
  WHY CHOOSE — big question-mark card on the left, six peach cards right.
*/

import { whyChooseUs } from '@/data/homeContent';
import Icon from '@/assets/icons/Icon';

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="why-title">
      <div className="container-x grid gap-6 lg:grid-cols-[0.75fr_1.6fr] lg:gap-8">
        {/* Question card */}
        <div className="relative flex flex-col items-center justify-end overflow-hidden rounded-2xl bg-[#f7f7f7] px-6 pb-8 pt-10 text-center" data-reveal="left">
          <span className="select-none font-display text-[10rem] font-black leading-none text-brand sm:text-[13rem]" aria-hidden="true">
            ?
          </span>
          <h2 id="why-title" className="mt-2 text-[clamp(1.6rem,3vw,2rem)] font-medium leading-tight !text-navy">
            {whyChooseUs.eyebrow}?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-charcoal">{whyChooseUs.description}</p>
        </div>

        {/* Reasons */}
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.reasons.map((r, i) => (
            <li
              key={r.label}
              className="rounded-xl bg-[#ffe8de] p-5"
              data-reveal
              style={{ '--d': `${(i % 3) * 90}ms` }}
            >
              <span className="grid size-8 place-items-center rounded-md border-2 border-brand text-brand">
                <Icon name="check" className="size-4" strokeWidth={3} />
              </span>
              <p className="mt-4 font-display text-3xl font-bold text-navy" aria-hidden="true">
                {r.value}
              </p>
              <h3 className="mt-2 font-sans text-base font-medium leading-snug tracking-normal !text-charcoal">{r.label}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
