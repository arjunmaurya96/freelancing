/*
  QUICK ACTIONS (part of the global Footer, so it appears on every page)
  ------------------------------------------------------------------
  A floating button (bottom-right) that opens three actions:
    • Instant Enquiry → opens a short form in a dialog
    • WhatsApp        → opens a WhatsApp chat
    • Call Now        → dials the office number
  The form uses the native <dialog> element (built-in focus handling and
  Esc to close) and submits through src/services/leadService.js.
*/

import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { contact as formContent } from '@/data/homeContent';
import { submitLead } from '@/services/leadService';
import Icon from '@/assets/icons/Icon';
import Loading from '@/components/Loading/Loading';

const labelClass = 'mb-1.5 block text-sm font-semibold text-ink';
const fieldClass =
  'block min-h-12 w-full rounded-xl border-[1.5px] border-line bg-soft px-4 py-2.5 text-base text-ink transition placeholder:text-[#9aa1ab] focus:border-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/15 user-invalid:border-brand-700';

const actionClass =
  'flex items-center gap-3 rounded-full bg-white py-2 pl-2 pr-5 text-[0.95rem] font-semibold text-ink shadow-[0_16px_40px_-16px_rgb(23_39_54/0.55)] ring-1 ring-line transition hover:-translate-x-1 hover:ring-brand/40';

export default function QuickActions() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const wrapRef = useRef(null);
  const dialogRef = useRef(null);

  // Close the menu on Escape or a click outside it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onDown = (e) => wrapRef.current && !wrapRef.current.contains(e.target) && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [open]);

  const openForm = () => {
    setOpen(false);
    setStatus('idle');
    dialogRef.current?.showModal();
  };
  const closeForm = () => dialogRef.current?.close();

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

  // Each action slides in one after another when the menu opens.
  const itemStyle = (i) => ({
    transitionDelay: open ? `${i * 60}ms` : '0ms',
  });
  const itemClass = `transition duration-300 ${open ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}`;

  return (
    <>
      {/* Floating button + actions */}
      <div ref={wrapRef} className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 md:bottom-6 md:right-6">
        <ul id="quick-actions" className="flex flex-col items-end gap-2.5" inert={!open} aria-label="Quick contact options">
          <li className={itemClass} style={itemStyle(2)}>
            <button type="button" onClick={openForm} className={actionClass}>
              <span className="grid size-10 place-items-center rounded-full bg-brand-50 text-brand">
                <Icon name="mail" className="size-5" />
              </span>
              Instant Enquiry
            </button>
          </li>
          <li className={itemClass} style={itemStyle(1)}>
            <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className={actionClass}>
              <span className="grid size-10 place-items-center rounded-full bg-[#1fa855] text-white">
                <Icon name="whatsapp" className="size-5" />
              </span>
              WhatsApp
            </a>
          </li>
          <li className={itemClass} style={itemStyle(0)}>
            <a href={siteConfig.phoneHref} className={actionClass}>
              <span className="grid size-10 place-items-center rounded-full bg-ink text-white">
                <Icon name="phone" className="size-5" />
              </span>
              Call Now
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="quick-actions"
          aria-label={open ? 'Close contact options' : 'Open contact options'}
          className="group relative flex items-center gap-2.5 rounded-full bg-brand py-2 pl-2 text-white shadow-[0_18px_40px_-14px_rgb(249_76_48/0.85)] transition hover:bg-brand-600 md:pr-5"
        >
          {/* Attention pulse while closed */}
          {!open && <span className="absolute left-2 top-2 size-12 rounded-full bg-brand motion-safe:animate-ping opacity-40" aria-hidden="true" />}
          <span className="relative grid size-12 place-items-center rounded-full bg-white/15">
            <Icon name={open ? 'close' : 'headset'} className={`size-6 transition-transform duration-300 ${open ? 'rotate-90' : ''}`} strokeWidth={2} />
          </span>
          <span className="hidden font-semibold md:inline">How can I help you?</span>
          <span className="pr-2 md:hidden" aria-hidden="true" />
        </button>
      </div>

      {/* Enquiry form dialog — bottom sheet on phones, centred card on larger screens */}
      <dialog
        ref={dialogRef}
        aria-labelledby="enquiry-title"
        className="m-auto w-[calc(100%-1.5rem)] max-w-lg rounded-3xl bg-white p-0 text-left shadow-2xl backdrop:bg-ink-900/60 backdrop:backdrop-blur-sm open:motion-safe:animate-[fade-up_0.35s_cubic-bezier(0.2,0.7,0.2,1)] max-sm:mb-3"
        onClick={(e) => e.target === dialogRef.current && closeForm()}
      >
        <div className="relative overflow-hidden bg-ink px-6 pb-6 pt-7 sm:px-8">
          <div className="absolute -right-16 -top-16 size-48 rounded-full bg-brand/40 blur-3xl" aria-hidden="true" />
          <p className="relative text-sm font-semibold text-brand">{formContent.eyebrow}</p>
          <h2 id="enquiry-title" className="relative mt-1 text-2xl font-bold !text-white">
            Instant Enquiry
          </h2>
          <p className="relative mt-1 text-sm text-white/70">Share your details and our team will get back to you.</p>
          <button
            type="button"
            onClick={closeForm}
            aria-label="Close enquiry form"
            className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <Icon name="close" className="size-5" strokeWidth={2} />
          </button>
        </div>

        <form className="max-h-[70vh] overflow-y-auto px-6 pb-6 pt-5 sm:px-8" onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div>
              <label htmlFor="q-name" className={labelClass}>Name</label>
              <input id="q-name" name="name" type="text" autoComplete="name" required placeholder="Your full name" className={fieldClass} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="q-email" className={labelClass}>Work email</label>
                <input id="q-email" name="email" type="email" autoComplete="email" required placeholder="Work email" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="q-phone" className={labelClass}>Mobile number</label>
                <input
                  id="q-phone"
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
              </div>
            </div>
            <div>
              <label htmlFor="q-req" className={labelClass}>Requirements</label>
              <div className="relative">
                <select id="q-req" name="requirement" required defaultValue="Meta Ads" className={`${fieldClass} appearance-none pr-11`}>
                  {formContent.requirements.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
                <Icon name="chevronDown" className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted" strokeWidth={2} />
              </div>
            </div>
            <label className="flex items-start gap-3 text-xs leading-relaxed text-charcoal">
              <input type="checkbox" name="consent" required className="mt-0.5 size-4 shrink-0 accent-brand" />
              {formContent.consent}
            </label>
          </div>

          <button type="submit" className="btn btn-primary mt-5 w-full disabled:opacity-75" disabled={status === 'sending'}>
            {status === 'sending' ? <Loading inline size="sm" label="Sending" /> : 'Get Quote'}
          </button>
          <p className="mt-3 min-h-5 text-center text-sm" role="status">
            {status === 'sent' && <span className="text-[#178a45]">Your details are ready in WhatsApp — press send to reach our team.</span>}
            {status === 'error' && <span className="text-brand-700">Your details couldn’t be sent. Call us on {siteConfig.phone}.</span>}
          </p>
        </form>
      </dialog>
    </>
  );
}
