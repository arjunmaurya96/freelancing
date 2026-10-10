/*
  RESULTS — staggered arch columns on tablet/desktop; simple stacked
  full-width cards on mobile.
  Three metrics in tall rounded "arches" of rising height; the tallest
  holds a cut-out of a happy client. Numbers count up once when scrolled into view.
*/

import { useEffect, useRef } from 'react';
import { metrics, caseStudies } from '@/data/homeContent';
import happyClient from '@/assets/people/happy-client.webp';
import Icon from '@/assets/icons/Icon';

// ROAS, Conversion rate, Sales generated — tallest last
const arches = [
  { m: metrics[1], bg: 'bg-[#adc2e6]', h: 'sm:h-[22rem] lg:h-[24rem]', icon: 'chart', iconColor: 'text-[#8aa5d6]' },
  { m: metrics[3], bg: 'bg-[#ffd3c3]', h: 'sm:h-[27rem] lg:h-[30rem]', icon: 'target', iconColor: 'text-[#f6a183]' },
  { m: metrics[2], bg: 'bg-sky', h: 'h-[26rem] sm:h-[32rem] lg:h-[36rem]', photo: true },
];

// Large rupee figures are shown in crore so they fit the narrow arches.
const fmt = (m, v) =>
  m.end >= 1e7
    ? `${m.prefix || ''}${(v / 1e7).toFixed(1)} Cr+`
    : `${m.prefix || ''}${v.toFixed(m.decimals || 0)}${m.suffix || ''}`;

export default function ResultsArches() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const nodes = [...root.querySelectorAll('[data-i]')];
    let frame;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / 1600, 1);
          const k = 1 - Math.pow(1 - t, 4);
          nodes.forEach((n) => {
            const m = arches[Number(n.dataset.i)].m;
            n.textContent = fmt(m, m.end * k);
          });
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );
    io.observe(root);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="overflow-hidden bg-white pt-16 sm:pt-20" aria-labelledby="results-title">
      <div className="container-x text-center" data-reveal>
        <h2 id="results-title" className="mx-auto max-w-3xl text-[clamp(1.8rem,3.6vw,2.6rem)] font-bold leading-tight !text-navy">
          <span className="text-brand">{caseStudies[0].visual.headline.split(' ').slice(0, 2).join(' ')}</span>{' '}
          {caseStudies[0].visual.headline.split(' ').slice(2).join(' ')}
        </h2>
      </div>

      <div ref={ref} data-reveal className="container-x mt-10 flex flex-col items-stretch sm:mt-12 sm:flex-row sm:items-end sm:justify-center !max-w-[1200px]">
        {arches.map((a, i) => (
          <div
            key={a.m.label}
            className={`arch-rise relative flex min-w-0 flex-col items-center overflow-hidden px-4 py-10 text-center sm:max-w-[22rem] sm:flex-1 sm:rounded-t-[999px] sm:pb-0 sm:pt-10 ${a.bg} ${a.h}`}
            style={{ '--d': `${i * 150}ms` }}
          >
            <p data-i={i} className="font-display whitespace-nowrap text-[3rem] font-semibold sm:text-[clamp(1rem,3.6vw,2.4rem)] leading-none text-navy tabular-nums">
              {fmt(a.m, a.m.end)}
            </p>
            <p className="mt-2 text-2xl font-semibold leading-tight text-navy sm:mt-3 sm:text-xl">{a.m.label}</p>
            {a.photo ? (
              <img
                src={happyClient}
                width="600"
                height="900"
                alt="Happy client celebrating campaign results on his phone"
                loading="lazy"
                decoding="async"
                className="absolute bottom-0 left-1/2 h-[68%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
              />
            ) : (
              <Icon name={a.icon} className={`mt-6 size-28 sm:mt-10 ${a.iconColor}`} strokeWidth={1.6} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
