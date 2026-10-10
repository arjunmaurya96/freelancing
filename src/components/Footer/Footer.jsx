/*
  FOOTER (global)
  ------------------------------------------------------------------
  Deep navy footer:
    1. "Global Presence" bar — office cities with round flags
       (edit the list in siteConfig.globalPresence)
    2. Logo + about text | Our Services | Quick Link | Contact Us + map
    3. "Let's Connect" social icons
    4. Legal links + copyright
  Links come from src/data/navigation.js, contact details from
  src/data/siteConfig.js. Also renders the floating quick-contact button
  (QuickActions) on every page.
*/

import { Link } from 'react-router';
import { footerNav, legalNav } from '@/data/navigation';
import { siteConfig } from '@/data/siteConfig';
import { footerAbout } from '@/data/homeContent';
import Icon from '@/assets/icons/Icon';
import logo from '@/assets/logos/conversions-logo.webp';
import Flag from '@/components/Flag/Flag';
import QuickActions from './QuickActions';
import { useState } from 'react';

/* Google Maps is heavy (~1 MB of scripts), so the footer shows a light
   placeholder and only loads the real map when someone clicks it. */
function FooterMap() {
  const [show, setShow] = useState(false);
  if (show) {
    return (
      <iframe
        title="Conversions office location on Google Maps"
        src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
        referrerPolicy="no-referrer-when-downgrade"
        className="footer-map mt-5"
      />
    );
  }
  return (
    <button type="button" onClick={() => setShow(true)} className="footer-map footer-map-btn mt-5" aria-label="Show office location on the map">
      <Icon name="pin" className="size-6 text-brand" />
      <span className="text-sm font-semibold text-white">View on map</span>
    </button>
  );
}
import './Footer.css';

const { address } = siteConfig;
const mapQuery = encodeURIComponent(`Conversions, ${address.street}, ${address.city} ${address.postalCode}`);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* 1. Global presence bar */}
      <div className="container-x pt-12">
        <div className="footer-bar">
          <p className="footer-bar-label">Global Presence</p>
          <ul className="footer-bar-list">
            {siteConfig.globalPresence.map((o) => (
              <li key={o.city}>
                <a href={o.href} target="_blank" rel="noopener noreferrer" className="footer-chip">
                  <Flag code={o.flag} className="size-5" />
                  {o.country} | {o.city}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 2. Main columns */}
      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-10 pb-10 pt-12 lg:grid-cols-12 lg:gap-8">
        <div className="col-span-2 lg:col-span-4">
          <Link to="/" className="footer-logo" aria-label="Conversions home">
            <img src={logo} alt="Conversions" width="300" height="103" loading="lazy" className="h-10 w-auto" />
          </Link>
          <p className="mt-5 font-semibold text-white">Performance Marketing Agency in Delhi</p>
          <p className="mt-3 max-w-md text-[0.92rem] leading-relaxed text-white/85 lg:text-justify">{footerAbout}</p>
        </div>

        {footerNav.map((group) => (
          <nav key={group.title} aria-label={group.title} className="lg:col-span-2">
            <h2 className="footer-heading">{group.title}</h2>
            <ul className="mt-4 space-y-3">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="col-span-2 lg:col-span-4">
          <h2 className="footer-heading flex items-center gap-2">
            <Icon name="pin" className="size-4" />
            Head Office Address:
          </h2>
          <address className="mt-3 space-y-3 not-italic">
            <p className="leading-relaxed text-white">
              {siteConfig.name}
              <br />
              <span className="text-white/85">
                {address.line1} {address.line2} {address.line3}
              </span>
            </p>
            <a href={siteConfig.phoneHref} className="footer-contact">
              <Icon name="phone" className="size-4 shrink-0 text-steel" />
              Mobile: {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="footer-contact">
              <Icon name="mail" className="size-4 shrink-0 text-steel" />
              Email: {siteConfig.email}
            </a>
          </address>
          <FooterMap />
        </div>
      </div>

      {/* 3. Socials */}
      <div className="container-x text-center">
        <p className="font-display text-xl font-medium text-white">Let&rsquo;s Connect</p>
        <ul className="mt-5 flex flex-wrap justify-center gap-3" aria-label="Social media">
          {siteConfig.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label={s.label}>
                <Icon name={s.icon} className="size-[18px]" />
              </a>
            </li>
          ))}
          <li>
            <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="WhatsApp">
              <Icon name="whatsapp" className="size-[18px]" />
            </a>
          </li>
        </ul>
      </div>

      {/* 4. Legal + copyright */}
      <div className="container-x pb-8 pt-8 text-center text-sm">
        <ul className="flex flex-wrap justify-center gap-x-2 gap-y-1">
          {legalNav.map((link, i) => (
            <li key={link.label} className="flex items-center gap-2">
              {i > 0 && <span className="text-white/40" aria-hidden="true">|</span>}
              <Link to={link.to} className="text-brand transition hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-white/60">
          Copyright © {year} {siteConfig.name} — {siteConfig.legalTagline} All Rights Reserved.
        </p>
      </div>

      {/* Floating contact button: Instant Enquiry form, WhatsApp, Call Now */}
      <QuickActions />
    </footer>
  );
}
