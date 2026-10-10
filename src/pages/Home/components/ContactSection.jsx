/*
  CONSULTATION FORM — black band (anchor: #contact).
  Left: intro, director card, stats, help line. Right: underlined form.
  Submissions go through src/services/leadService.js.
*/

import { useState } from 'react';
import { contact, footerAbout } from '@/data/homeContent';
import { director } from '@/data/aboutContent';
import { siteConfig } from '@/data/siteConfig';
import { submitLead } from '@/services/leadService';
import Icon from '@/assets/icons/Icon';
import Loading from '@/components/Loading/Loading';

const labelClass = 'block text-white';
const fieldClass =
  'mt-1 block w-full border-0 border-b border-white/40 bg-transparent px-3 py-3 text-base text-white placeholder:text-white/50 transition focus:border-brand focus:outline-none focus:ring-0 user-invalid:border-brand';

export default function ContactSection({ defaultRequirement = contact.requirements[0] }) {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      await submitLead(Object.fromEntries(new FormData(form)));
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-black py-14 sm:py-16" aria-labelledby="contact-title">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left */}
        <div className="text-white" data-reveal="left">
          <p className="leading-relaxed text-white/90">{footerAbout}</p>
          <p className="mt-4 leading-relaxed text-white/90">
            {contact.intro.map((part) => (typeof part === 'string' ? part : part.strong || part.accent))}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <span className="grid size-16 shrink-0 place-items-center rounded-full bg-white font-display text-xl font-bold text-black" aria-hidden="true">
              HS
            </span>
            <div>
              <p className="font-display text-xl font-semibold">{director.name}</p>
              <p className="text-sm text-white/80">{director.role}</p>
            </div>
          </div>

          <p className="mt-8 text-xl font-medium">Conversions — Performance Marketing Agency in Delhi</p>
          <dl className="mt-4 flex flex-wrap gap-3">
            {contact.stats.map((s) => (
              <div key={s.label} className="flex !flex-row items-center gap-2 rounded-full bg-white/10 py-1.5 pl-1.5 pr-4">
                <dd className="rounded-full bg-[#F6B100] px-3 py-1 font-bold text-black">{s.value}</dd>
                <dt className="text-sm">{s.label}</dt>
              </div>
            ))}
          </dl>
          <p className="mt-8 leading-relaxed text-white/90">
            {contact.outro.map((part) => (typeof part === 'string' ? part : part.strong))}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} data-reveal="right">
          <h2 id="contact-title" className="inline-block rounded-md border border-dashed border-white/40 px-3 py-1 font-sans text-[clamp(1.4rem,2.6vw,1.75rem)] font-semibold tracking-normal !text-white">
            {contact.title.split(' ').slice(0, 2).join(' ')} <span className="text-brand">{contact.title.split(' ').slice(2).join(' ')}</span>
          </h2>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="sm:col-span-2">
              <span className={labelClass}>Name</span>
              <input name="name" type="text" autoComplete="name" required placeholder="Your full name" className={fieldClass} />
            </label>
            <label>
              <span className={labelClass}>Work email</span>
              <input name="email" type="email" autoComplete="email" required placeholder="Work email" className={fieldClass} />
            </label>
            <label>
              <span className={labelClass}>Mobile number</span>
              <input
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                pattern="[0-9]{10}"
                title="Enter a 10-digit mobile number"
                required
                placeholder="10- digit mobile number"
                className={fieldClass}
              />
            </label>
            <label className="sm:col-span-2">
              <span className={labelClass}>Requirements</span>
              <span className="relative block">
                <select name="requirement" required defaultValue={defaultRequirement} className={`${fieldClass} appearance-none pr-10 [&>option]:text-black`}>
                  {contact.requirements.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
                <Icon name="chevronDown" className="pointer-events-none absolute right-2 top-1/2 size-5 -translate-y-1/2 text-white" strokeWidth={2.4} />
              </span>
            </label>
          </div>

          <label className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-white/85">
            <input type="checkbox" name="consent" required className="mt-1 size-4 shrink-0 accent-brand" />
            {contact.consent}
          </label>

          <button type="submit" disabled={status === 'sending'} className="mt-6 w-full rounded-md bg-brand py-3.5 font-semibold text-white transition hover:bg-brand-600 disabled:opacity-75">
            {status === 'sending' ? <Loading inline size="sm" label="Sending" /> : 'Get Quote'}
          </button>

          <p className="mt-4 flex items-center gap-2 text-sm text-white/90">
            <Icon name="shield" className="size-4 shrink-0 text-brand" />
            {contact.checklist[0]}
          </p>
          <p className="mt-2 min-h-5 text-sm" role="status">
            {status === 'sent' && <span className="text-[#5be39b]">Your details are ready in WhatsApp — press send to reach our team.</span>}
            {status === 'error' && <span className="text-brand">Your details couldn’t be sent. Call us on {siteConfig.phone}.</span>}
          </p>
        </form>
      </div>
    </section>
  );
}
