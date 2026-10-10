/*
  CLIENT REVIEWS — grey band, centred heading, review cards with avatar,
  stars and a Google-style badge. "Read more" expands the full review.
*/

import { useState } from 'react';
import { testimonials } from '@/data/homeContent';
import Icon from '@/assets/icons/Icon';

const avatarColors = ['bg-[#3b4a5a]', 'bg-[#0f5b4f]', 'bg-[#8a5cf6]'];

function Review({ r, i }) {
  const [open, setOpen] = useState(false);
  return (
    <figure className="flex h-full flex-col rounded-2xl bg-white p-6 text-left shadow-[0_10px_30px_-24px_rgb(0_0_0/0.35)]" data-reveal style={{ '--d': `${i * 100}ms` }}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className={`grid size-11 place-items-center rounded-full text-lg font-semibold text-white ${avatarColors[i % 3]}`} aria-hidden="true">
            {r.name[0]}
          </span>
          <figcaption>
            <span className="block font-semibold text-ink">{r.name}</span>
            <span className="text-sm text-muted">{r.company}</span>
          </figcaption>
        </div>
        <Icon name="google" className="size-6 text-[#4285F4]" />
      </div>
      <p className="mt-3 flex items-center gap-1 text-[#F6B100]" aria-label={`${r.rating} out of 5 stars`}>
        {Array.from({ length: r.rating }, (_, s) => (
          <Icon key={s} name="star" className="size-5" />
        ))}
        <Icon name="shield" className="ml-1 size-4 text-[#4285F4]" />
      </p>
      <blockquote className={`mt-3 leading-relaxed text-ink ${open ? '' : 'line-clamp-3'}`}>{r.quote}</blockquote>
      <button type="button" onClick={() => setOpen((v) => !v)} className="mt-2 self-start text-sm text-muted hover:text-ink" aria-expanded={open}>
        {open ? 'Show less' : 'Read more'}
      </button>
    </figure>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f2f2f2] py-16 sm:py-20" aria-labelledby="reviews-title">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="font-medium text-navy">{testimonials.eyebrow}</p>
          <h2 id="reviews-title" className="mt-3 font-sans text-[clamp(1.5rem,3vw,1.75rem)] font-medium tracking-normal !text-navy">
            {testimonials.heading}
          </h2>
          <p className="mt-4 text-navy">{testimonials.description}</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {/* Summary card */}
          <div className="flex flex-col justify-center rounded-2xl bg-navy p-6 text-left" data-reveal>
            <p className="font-display text-5xl font-bold text-white">{testimonials.satisfied}</p>
            <p className="mt-1 text-white/75">{testimonials.satisfiedLabel}</p>
            <p className="mt-4 flex text-[#F6B100]" aria-hidden="true">
              {Array.from({ length: 5 }, (_, s) => (
                <Icon key={s} name="star" className="size-5" />
              ))}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/75">{testimonials.subtext}</p>
          </div>
          {testimonials.reviews.map((r, i) => (
            <Review key={r.name} r={r} i={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
