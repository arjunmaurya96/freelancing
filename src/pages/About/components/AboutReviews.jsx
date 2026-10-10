/*
  CLIENT FEEDBACK — heading row, Google rating line, review cards.
*/

import { testimonials } from '@/data/homeContent';
import { siteConfig } from '@/data/siteConfig';

const avatarColors = ['bg-[#4b2a8c]', 'bg-[#0f7a6c]', 'bg-[#c4512f]'];
const initials = (name) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="size-7" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

export default function AboutReviews() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="reviews-about-title">
      <div className="container-x">
        <div className="grid gap-5 lg:grid-cols-2 lg:items-end" data-reveal>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand">{testimonials.eyebrow}</p>
            <h2 id="reviews-about-title" className="mt-2 font-sans text-[clamp(1.8rem,3.4vw,2.5rem)] font-normal leading-tight tracking-tight !text-navy">
              {testimonials.heading}
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-charcoal lg:pl-10">{testimonials.description}</p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4" data-reveal>
          <div className="flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-full bg-white shadow-[0_6px_18px_-8px_rgb(0_0_0/0.35)]">
              <GoogleG />
            </span>
            <div>
              <p className="text-lg font-semibold text-navy">{siteConfig.googleRating.value} Google rating</p>
              <p className="text-sm tracking-widest text-[#f5a524]" aria-hidden="true">
                ★★★★★
              </p>
            </div>
          </div>
          <a href={siteConfig.googleRating.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#4b2a8c] underline underline-offset-4">
            View Google Business Profile reviews
          </a>
        </div>

        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {testimonials.reviews.map((r, i) => (
            <li key={r.name} className="flex flex-col rounded-md border border-black/10 p-5" data-reveal style={{ '--d': `${i * 100}ms` }}>
              <div className="flex items-center gap-3">
                <span className={`grid size-10 place-items-center rounded-full text-sm font-bold text-white ${avatarColors[i % avatarColors.length]}`} aria-hidden="true">
                  {initials(r.name)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">{r.name}</p>
                  <p className="text-xs text-muted">{r.company}</p>
                </div>
              </div>
              <p className="mt-4 text-sm tracking-widest text-[#f5a524]" aria-label={`${r.rating} out of 5 stars`}>
                {'★'.repeat(r.rating)}
              </p>
              <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-charcoal">“{r.quote}”</blockquote>
              <p className="mt-4 text-xs font-semibold text-navy">Google review</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
