/*
  OUR DIRECTOR — a single leadership card (no team grid).
  Initials avatar, name, role, experience badge, bio, contact buttons
  and fact tags. Copy from src/data/aboutContent.js.
*/

import { director } from '@/data/aboutContent';
import { siteConfig } from '@/data/siteConfig';
import Icon from '@/assets/icons/Icon';

function Rich({ parts }) {
  return parts.map((part, i) =>
    typeof part === 'string' ? (
      part
    ) : (
      <strong key={i} className="font-semibold text-navy">
        {part.b}
      </strong>
    ),
  );
}

export default function DirectorSection() {
  const linkedin = siteConfig.socials.find((s) => s.icon === 'linkedin');

  return (
    <section id="director" className="scroll-mt-24 bg-white py-16 sm:py-20" aria-labelledby="director-title">
      <div className="container-x">
        <div className="max-w-2xl" data-reveal>
          <p className="text-sm font-bold uppercase tracking-wide text-charcoal">{director.eyebrow}</p>
          <h2 id="director-title" className="mt-2 font-sans text-[clamp(1.8rem,3.4vw,2.5rem)] font-normal leading-tight tracking-tight !text-navy">
            {director.titleAccent}
          </h2>
        </div>

        <article className="mt-8 grid overflow-hidden rounded-md border border-black/10 bg-white md:grid-cols-[minmax(0,18rem)_1fr]" data-reveal>
          <div className="grid min-h-56 place-items-center bg-gradient-to-br from-[#2b2560] to-navy p-8">
            <span className="grid size-32 place-items-center rounded-full border-4 border-white/20 bg-brand font-display text-4xl font-bold text-white">HS</span>
          </div>

          <div className="p-5 sm:p-7">
            <p className="inline-block rounded bg-[#efeaf8] px-2 py-1 text-[11px] font-semibold uppercase text-[#4b2a8c]">Founder &amp; Director</p>
            <h3 className="mt-3 font-sans text-2xl font-medium tracking-normal !text-navy">{director.name}</h3>
            <p className="text-sm font-semibold text-brand">{director.role}</p>
            <p className="mt-3 inline-block border-l-2 border-brand bg-[#f4f3f8] px-2 py-1 text-xs font-semibold text-navy">
              {director.facts[0].value}+ {director.facts[0].label.toLowerCase()}
            </p>

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-charcoal">
              {director.paragraphs.map((p, i) => (
                <p key={i}>
                  <Rich parts={p} />
                </p>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {linkedin && (
                <a href={linkedin.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded bg-[#0a66c2] px-3 py-2 text-xs font-semibold text-white">
                  <Icon name="linkedin" className="size-4" />
                  LinkedIn
                </a>
              )}
              <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded bg-[#1f9d55] px-3 py-2 text-xs font-semibold text-white">
                <Icon name="whatsapp" className="size-4" />
                WhatsApp {siteConfig.phone}
              </a>
            </div>

            <ul className="mt-4 flex flex-wrap gap-2">
              {director.facts.map((f) => (
                <li key={f.label} className="rounded border border-black/10 px-2 py-1 text-[11px] font-medium text-charcoal">
                  {f.value} · {f.label}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
