/*
  CTA CARD — dark rounded card with flowing line art.
  Left: headline, text, avatars + satisfied clients. Right: two buttons.
*/

import { Link } from 'react-router';
import { hero, contact, testimonials } from '@/data/homeContent';

export default function CommunityCTA() {
  return (
    <section className="py-10 sm:py-12" aria-labelledby="cta-title">
      <div className="container-x">
        <div className="relative isolate grid overflow-hidden rounded-3xl bg-[#202020] px-6 py-10 sm:px-12 md:grid-cols-[1.2fr_auto_1fr] md:items-center md:gap-10" data-reveal="scale">
          {/* Flowing line art */}
          <svg className="absolute inset-0 -z-10 h-full w-full" viewBox="0 0 1200 360" preserveAspectRatio="none" aria-hidden="true">
            {Array.from({ length: 14 }, (_, i) => (
              <path
                key={i}
                d={`M${380 + i * 22} 0 C ${520 + i * 18} 120, ${700 + i * 10} ${80 + i * 8}, ${820 + i * 18} 360`}
                fill="none"
                stroke="#c9a27a"
                strokeOpacity={0.12 + (i % 4) * 0.05}
                strokeWidth="1.2"
              />
            ))}
            {Array.from({ length: 10 }, (_, i) => (
              <path key={`r${i}`} d={`M${1000 + i * 18} 360 C ${980 + i * 12} 240, ${1080 + i * 10} 140, ${1200} ${40 + i * 18}`} fill="none" stroke="#c9a27a" strokeOpacity="0.18" strokeWidth="1.2" />
            ))}
          </svg>

          <div>
            <h2 id="cta-title" className="font-sans text-[clamp(2rem,4.2vw,3rem)] font-semibold leading-[1.05] tracking-tight !text-white">
              {hero.titleAccent} {hero.titleRest}
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-white/90">
              {contact.outro.map((part) => (typeof part === 'string' ? part : part.strong))}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="flex -space-x-3" aria-hidden="true">
                {['#F94C30', '#7b90bb', '#ffffff', '#ffd3c3'].map((c) => (
                  <span key={c} className="size-11 rounded-full border-2 border-[#202020]" style={{ background: c }} />
                ))}
              </span>
              <p className="font-semibold leading-tight text-white">
                {testimonials.satisfied}
                <br />
                {testimonials.satisfiedLabel}
              </p>
            </div>
          </div>

          <span className="hidden h-full w-px bg-white/20 md:block" aria-hidden="true" />

          <div className="mt-8 flex flex-col items-start gap-4 md:mt-0 md:items-center">
            <Link to="/#contact" className="rounded-md bg-brand px-9 py-3.5 font-semibold text-white transition hover:bg-brand-600">
              Get Started
            </Link>
            <Link to="/our-results-portfolio/" className="rounded-md bg-[#666] px-9 py-3.5 font-semibold text-white transition hover:bg-[#777]">
              Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
