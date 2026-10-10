/*
  PLATFORMS / PARTNERS — small centred heading + a 4 × 2 grid of
  platform logos (files in src/assets/partners/). Static logos (no hover effect), smaller on mobile.
*/

import { partnerships } from '@/data/homeContent';
import googlePartner from '@/assets/partners/google-partner.webp';
import metaPartner from '@/assets/partners/meta-business-partner.webp';
import linkedinAds from '@/assets/partners/linkedin-ads.webp';
import hubspot from '@/assets/partners/hubspot.webp';
import microsoft from '@/assets/partners/microsoft.webp';
import semrush from '@/assets/partners/semrush.webp';
import zoho from '@/assets/partners/zoho.webp';
import googleCloud from '@/assets/partners/google-cloud.webp';

// h = display height (px) so every logo looks visually balanced.
const logos = [
  { src: googlePartner, alt: 'Google Partner', w: 261, h: 113, size: 'h-8 sm:h-14' },
  { src: metaPartner, alt: 'Meta Business Partner', w: 262, h: 100, size: 'h-8 sm:h-14' },
  { src: linkedinAds, alt: 'LinkedIn Ads', w: 199, h: 37, size: 'h-[1.1rem] sm:h-8' },
  { src: hubspot, alt: 'HubSpot', w: 266, h: 100, size: 'h-7 sm:h-14' },
  { src: microsoft, alt: 'Microsoft', w: 469, h: 100, size: 'h-6 sm:h-10' },
  { src: semrush, alt: 'Semrush', w: 210, h: 100, size: 'h-8 sm:h-14' },
  { src: zoho, alt: 'Zoho', w: 400, h: 158, size: 'h-8 sm:h-14' },
  { src: googleCloud, alt: 'Google Cloud', w: 423, h: 100, size: 'h-6 sm:h-10' },
];

export default function PartnersStrip() {
  return (
    <section className="bg-white py-10 sm:py-12" aria-labelledby="platforms-title">
      <div className="container-x text-center" data-reveal>
        <h2 id="platforms-title" className="font-sans text-base font-semibold tracking-normal !text-navy sm:text-lg">
          {partnerships.titleAccent} {partnerships.titleRest}
        </h2>
        <ul className="mx-auto mt-8 grid max-w-5xl grid-cols-2 items-center gap-x-4 gap-y-6 sm:grid-cols-4 sm:gap-y-10">
          {logos.map((l, i) => (
            <li key={l.alt} className="flex justify-center" data-reveal style={{ '--d': `${(i % 4) * 90}ms` }}>
              <img
                src={l.src}
                alt={l.alt}
                width={l.w}
                height={l.h}
                loading="lazy"
                decoding="async"
                className={`${l.size} w-auto max-w-full object-contain`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
