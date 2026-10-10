/*
  TOP BAR (global) — thin navy strip above the header.
  A slow marquee of offers, results, offices and contact details.
  Pauses on hover; static (no scroll) for reduced-motion users.
  Items come from homeContent.js and siteConfig.js.
*/

import { contact, hero, testimonials } from '@/data/homeContent';
import { siteConfig } from '@/data/siteConfig';
import Icon from '@/assets/icons/Icon';
import Flag from '@/components/Flag/Flag';
import './TopBar.css';

const items = [
  { icon: 'spark', text: contact.checklist[0] },
  { icon: 'trending', text: `${hero.stats[0].value} ${hero.stats[0].label}` },
  { icon: 'star', text: `${testimonials.satisfied} ${testimonials.satisfiedLabel}` },
  ...siteConfig.globalPresence.map((o) => ({ flag: o.flag, text: `${o.country} | ${o.city}` })),
  { icon: 'phone', text: siteConfig.phone, href: siteConfig.phoneHref },
  { icon: 'mail', text: siteConfig.email, href: `mailto:${siteConfig.email}` },
];

function Row({ hidden }) {
  return (
    <ul className="topbar-row" aria-hidden={hidden || undefined}>
      {items.map((it) => {
        const inner = (
          <>
            {it.flag ? <Flag code={it.flag} className="size-3.5" /> : <Icon name={it.icon} className="size-3.5 text-brand" />}
            {it.text}
          </>
        );
        return (
          <li key={it.text}>
            {it.href ? (
              <a href={it.href} tabIndex={hidden ? -1 : undefined} className="topbar-item hover:text-brand">
                {inner}
              </a>
            ) : (
              <span className="topbar-item">{inner}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function TopBar() {
  return (
    <div className="topbar" role="region" aria-label="Highlights">
      <div className="topbar-track">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
