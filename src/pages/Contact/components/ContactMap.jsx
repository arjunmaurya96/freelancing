/*
  MAP — full-width Google map (lazy) with a floating head-office card.
*/

import { contactMethods, mapEmbedSrc } from '@/data/contactContent';
import { siteConfig } from '@/data/siteConfig';
import Icon from '@/assets/icons/Icon';

export default function ContactMap() {
  const { location, hours } = contactMethods;

  return (
    <section className="relative bg-[#f4f3f8]" aria-label="Office location map">
      <iframe
        title="Conversions head office on Google Maps"
        src={mapEmbedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-[22rem] w-full border-0 bg-[#e6e8ee] sm:h-[28rem]"
      />
      <div className="container-x pointer-events-none relative -mt-24 pb-12 sm:absolute sm:inset-x-0 sm:top-8 sm:mt-0 sm:pb-0">
        <div className="pointer-events-auto max-w-sm rounded-xl bg-white p-5 shadow-[0_24px_50px_-24px_rgb(14_11_53/0.55)]">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand">
            <Icon name="pin" className="size-4" />
            Head Office
          </p>
          <p className="mt-2 font-semibold text-navy">{siteConfig.name}</p>
          <p className="mt-1 text-sm leading-relaxed text-charcoal">{location.lines[0]}</p>
          <p className="mt-2 flex items-center gap-2 text-sm text-charcoal">
            <Icon name="clock" className="size-4 text-muted" />
            {hours.text}
          </p>
          <a href={location.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-md bg-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-700">
            Get directions
            <Icon name="arrowUpRight" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
