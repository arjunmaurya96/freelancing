/*
  CONTACT HERO — full-width photo banner with a dark overlay (same style as
  the About page). Breadcrumb → eyebrow → H1 → text → Call / WhatsApp
  buttons, then four contact cards overlapping the bottom edge.
*/

import { Link } from 'react-router';
import { contactHero, contactMethods } from '@/data/contactContent';
import { siteConfig } from '@/data/siteConfig';
import { photo, photoSrcSet, hideOnError } from '@/data/images';
import Icon from '@/assets/icons/Icon';

const heroImg = { id: 'photo-1512453979798-5ea266f8880c', alt: '' };

const { location, phones, emails, hours } = contactMethods;

const cards = [
  { icon: location.icon, title: location.title, lines: location.lines.map((l) => ({ label: l, href: location.href, external: true })), color: 'bg-[#4b2a8c]' },
  { icon: phones.icon, title: phones.title, lines: phones.items.map((i) => ({ label: i.label.replace('Mob : ', ''), href: i.href })), color: 'bg-brand' },
  { icon: emails.icon, title: emails.title, lines: emails.items.map((i) => ({ label: i.label, href: i.href })), color: 'bg-[#0f7a6c]' },
  { icon: hours.icon, title: hours.title, lines: [{ label: hours.text }], color: 'bg-[#c98a06]' },
];

export default function ContactHero() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-white" aria-labelledby="contact-page-title">
        <img
          src={photo(heroImg.id, 1600, 900)}
          srcSet={photoSrcSet(heroImg.id, [800, 1200, 1600, 2000], 900 / 1600)}
          sizes="100vw"
          width="1600"
          height="900"
          alt=""
          fetchPriority="high"
          decoding="async"
          onError={hideOnError}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(14_11_53/0.93)_0%,rgb(14_11_53/0.78)_50%,rgb(14_11_53/0.4)_100%)]" aria-hidden="true" />

        <div className="container-x pb-28 pt-8 sm:pb-36 sm:pt-10">
          <nav aria-label="Breadcrumb" className="text-sm text-white/75">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{contactHero.eyebrow}</span>
          </nav>

          <div className="mt-10 max-w-2xl sm:mt-14">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#ffb59f]">{contactHero.eyebrow}</p>
            <h1 id="contact-page-title" className="mt-3 text-[clamp(2.2rem,5.5vw,3.6rem)] font-bold leading-[1.05] !text-white">
              <span className="text-brand">{contactHero.titleAccent}</span> {contactHero.titleRest}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">{contactHero.text}.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={siteConfig.phoneHref} className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-600">
                <Icon name="phone" className="size-4" />
                Call {siteConfig.phone}
              </a>
              <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-navy hover:bg-white/90">
                <Icon name="whatsapp" className="size-4 text-[#1f9d55]" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
        <span className="absolute inset-x-0 bottom-0 h-1 bg-brand" aria-hidden="true" />
      </section>

      {/* Contact cards overlapping the banner */}
      <div className="bg-[#f4f3f8] pb-12">
        <ul className="container-x relative -mt-16 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {cards.map((c) => (
            <li key={c.title} className="flex gap-4 rounded-xl border border-black/5 bg-white p-5 shadow-[0_14px_30px_-22px_rgb(14_11_53/0.5)]">
              <span className={`grid size-11 shrink-0 place-items-center rounded-lg text-white ${c.color}`}>
                <Icon name={c.icon} className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-navy">{c.title}</p>
                <ul className="mt-1 space-y-0.5">
                  {c.lines.map((l) => (
                    <li key={l.label} className="break-words text-sm leading-snug text-charcoal">
                      {l.href ? (
                        <a href={l.href} {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="hover:text-brand-700">
                          {l.label}
                        </a>
                      ) : (
                        l.label
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
