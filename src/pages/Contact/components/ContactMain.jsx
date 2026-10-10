/*
  CONTACT MAIN — two columns.
  Left: dark panel with what the free consultation covers, director card,
  stats and Google rating. Right: the enquiry form (sent through
  src/services/leadService.js).
*/

import { useState } from 'react';
import { contactForm } from '@/data/contactContent';
import { contact } from '@/data/homeContent';
import { director } from '@/data/aboutContent';
import { siteConfig } from '@/data/siteConfig';
import { submitLead } from '@/services/leadService';
import Icon from '@/assets/icons/Icon';
import Loading from '@/components/Loading/Loading';

const label = 'block text-sm font-medium text-navy';
const field =
  'mt-1.5 block w-full rounded-lg border border-black/10 bg-[#f7f7fb] px-4 py-3 text-[0.95rem] text-ink placeholder:text-muted/80 transition focus:border-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10 user-invalid:border-brand';

export default function ContactMain() {
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
    <section className="bg-[#f4f3f8] pb-16 sm:pb-20" aria-labelledby="form-title">
      <div className="container-x grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Info panel */}
        <aside className="relative isolate overflow-hidden rounded-2xl bg-[#22183a] p-6 text-white sm:p-8 lg:self-start" data-reveal="left">
          <div className="absolute -right-24 -top-24 -z-10 size-96 bg-[radial-gradient(closest-side,rgb(249_76_48/0.3),transparent)]" aria-hidden="true" />
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ffb59f]">{contact.eyebrow}</p>
          <h2 className="mt-2 font-sans text-[clamp(1.6rem,2.8vw,2.1rem)] font-normal leading-tight tracking-tight !text-white">{contact.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80">
            {contact.intro.map((part) => (typeof part === 'string' ? part : part.strong || part.accent))}
          </p>

          <ul className="mt-6 space-y-3">
            {contact.checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand">
                  <Icon name="check" className="size-3" strokeWidth={3.2} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.06] p-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand font-display font-bold" aria-hidden="true">
              HS
            </span>
            <div className="min-w-0">
              <p className="font-semibold">{director.name}</p>
              <p className="text-xs text-white/70">{director.role}</p>
            </div>
          </div>

          <dl className="mt-5 grid grid-cols-3 gap-2">
            {contact.stats.map((s) => (
              <div key={s.label} className="rounded-lg bg-white/[0.06] px-2 py-3 text-center">
                <dd className="font-display text-xl font-bold text-[#ffd166]">{s.value}</dd>
                <dt className="mt-0.5 text-[11px] leading-tight text-white/70">{s.label}</dt>
              </div>
            ))}
          </dl>

          <a href={siteConfig.googleRating.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm text-white/85 hover:text-white">
            <span className="rounded bg-[#ffd166] px-2 py-0.5 font-bold text-navy">{siteConfig.googleRating.value}</span>
            <span className="tracking-widest text-[#ffd166]" aria-hidden="true">
              ★★★★★
            </span>
            Rating on Google
          </a>
        </aside>

        {/* Form */}
        <form onSubmit={handleSubmit} className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_30px_60px_-40px_rgb(14_11_53/0.5)] sm:p-8" data-reveal="right">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand">Get in touch</p>
          <h2 id="form-title" className="mt-2 font-sans text-[clamp(1.6rem,2.8vw,2.1rem)] font-normal leading-tight tracking-tight !text-navy">
            {contactForm.title}
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="sm:col-span-2">
              <span className={label}>Name</span>
              <input name="name" type="text" autoComplete="name" required placeholder="Your full name" className={field} />
            </label>
            <label>
              <span className={label}>Work email</span>
              <input name="email" type="email" autoComplete="email" required placeholder="you@company.com" className={field} />
            </label>
            <label>
              <span className={label}>Mobile number</span>
              <input
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                pattern="[0-9]{10}"
                title="Enter a 10-digit mobile number"
                required
                placeholder="10-digit mobile number"
                className={field}
              />
            </label>
            <label className="sm:col-span-2">
              <span className={label}>Requirements</span>
              <span className="relative block">
                <select name="requirement" required defaultValue={contactForm.defaultRequirement} className={`${field} appearance-none pr-10`}>
                  {contact.requirements.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
                <Icon name="chevronDown" className="pointer-events-none absolute right-3 top-1/2 mt-0.5 size-5 -translate-y-1/2 text-muted" strokeWidth={2.2} />
              </span>
            </label>
            <label className="sm:col-span-2">
              <span className={label}>
                Message <span className="font-normal text-muted">(optional)</span>
              </span>
              <textarea name="message" rows="4" placeholder="Tell us about your business and goals" className={`${field} resize-y`} />
            </label>
          </div>

          <label className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-charcoal">
            <input type="checkbox" name="consent" required className="mt-1 size-4 shrink-0 accent-brand" />
            {contact.consent}
          </label>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-3.5 font-semibold text-white shadow-[0_12px_24px_-12px_rgb(249_76_48/0.9)] transition hover:bg-brand-600 disabled:opacity-75"
          >
            {status === 'sending' ? (
              <Loading inline size="sm" label="Sending" />
            ) : (
              <>
                {contactForm.submitLabel}
                <Icon name="arrow" className="size-4" strokeWidth={2.4} />
              </>
            )}
          </button>

          <p className="mt-3 flex items-center gap-2 text-xs text-muted">
            <Icon name="shield" className="size-4 shrink-0 text-brand" />
            {contact.checklist[0]}
          </p>
          <p className="mt-2 min-h-5 text-sm" role="status">
            {status === 'sent' && <span className="text-[#16a37f]">Your details are ready in WhatsApp — press send to reach our team.</span>}
            {status === 'error' && <span className="text-brand-700">Your details couldn’t be sent. Call us on {siteConfig.phone}.</span>}
          </p>
        </form>
      </div>
    </section>
  );
}
