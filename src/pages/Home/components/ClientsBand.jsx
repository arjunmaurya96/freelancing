/*
  OUR CLIENTS — "Trusted by Brands" band.
  Two rows of real full-colour logos on small white tiles: the top row
  moves left, the bottom row moves right (logo files in src/assets/logos/brands/). No hover effects.
  Each row is rendered twice for a seamless loop; still for reduced-motion users.
*/

import { trustedBrands } from '@/data/homeContent';
import incredibleTaj from '@/assets/logos/brands/incredible-taj.webp';
import iasScore from '@/assets/logos/brands/ias-score.webp';
import classicTours from '@/assets/logos/brands/classic-tours-india.webp';
import tajLuxury from '@/assets/logos/brands/taj-luxury-tours.webp';
import vintaze from '@/assets/logos/brands/vintaze-entertainments.webp';
import flyTo from '@/assets/logos/brands/fly-to-destinations.webp';
import wipc from '@/assets/logos/brands/wipc.webp';
import meta from '@/assets/logos/brands/meta.webp';
import ahrefs from '@/assets/logos/brands/ahrefs.webp';
import moz from '@/assets/logos/brands/moz.webp';
import hostinger from '@/assets/logos/brands/hostinger.webp';
import godaddy from '@/assets/logos/brands/godaddy.webp';

const logos = [
  { src: incredibleTaj, alt: 'Incredible Taj' },
  { src: iasScore, alt: 'IAS Score' },
  { src: classicTours, alt: 'Classic Tours India' },
  { src: meta, alt: 'Meta' },
  { src: tajLuxury, alt: 'Taj Luxury Tours' },
  { src: vintaze, alt: 'Vintaze Entertainments' },
  { src: ahrefs, alt: 'Ahrefs' },
  { src: flyTo, alt: 'Fly To Destinations' },
  { src: hostinger, alt: 'Hostinger' },
  { src: wipc, alt: 'WIPC' },
  { src: godaddy, alt: 'GoDaddy' },
  { src: moz, alt: 'Moz' },
];

function LogoRow({ items, reverse }) {
  // Repeat the logos so one copy is always wider than the widest screen.
  const filled = [...items, ...items, ...items];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
      {[0, 1].map((copy) => (
        <ul
          key={copy}
          aria-hidden={copy === 1 || undefined}
          className={`flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4 ${reverse ? 'clients-row-right' : 'clients-row-left'}`}
        >
          {filled.map((l, i) => (
            <li key={`${l.alt}-${i}`} className="grid h-14 w-32 shrink-0 place-items-center rounded-xl bg-white px-4 shadow-[0_10px_24px_-16px_rgb(14_11_53/0.55)] ring-1 ring-black/5 sm:h-[4.5rem] sm:w-44 sm:px-5">
              <img src={l.src} alt={copy === 1 || i >= items.length ? '' : l.alt} loading="lazy" decoding="async" className="h-7 w-auto max-w-full object-contain sm:h-10" />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default function ClientsBand() {
  const half = Math.ceil(logos.length / 2);

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#2b2560_0%,#5b5288_55%,#74708f_100%)] py-14 text-center sm:py-16" aria-labelledby="clients-title">
      <div className="absolute -top-40 left-1/2 -z-10 h-96 w-[70rem] max-w-full -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(249_76_48/0.22),transparent)]" aria-hidden="true" />
      <div className="container-x" data-reveal>
        <p className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white ring-1 ring-white/20">
          <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
          {trustedBrands.eyebrow}
        </p>
        <h2 id="clients-title" className="mt-4 font-sans text-[clamp(1.6rem,3vw,2.2rem)] font-semibold uppercase tracking-normal !text-white">
          {trustedBrands.titleAccent} <span className="text-[#ffb59f]">{trustedBrands.titleRest}</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/85">{trustedBrands.description}</p>
      </div>

      <div className="mt-10 space-y-4 sm:space-y-5">
        <LogoRow items={logos.slice(0, half)} />
        <LogoRow items={logos.slice(half)} reverse />
      </div>
    </section>
  );
}
