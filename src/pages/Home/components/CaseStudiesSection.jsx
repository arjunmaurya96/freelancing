/*
  CASE STUDIES — deep blue gradient band.
  Left: Dubai photo with floating result chips (from caseStudies[0].visual).
  Right: pill, heading, caption, then each case study as a glass card with
  its title, result chips, caption and a Read More link.
*/

import { Link } from 'react-router';
import { caseStudies } from '@/data/homeContent';
import { images, photo, photoSrcSet, hideOnError } from '@/data/images';
import Icon from '@/assets/icons/Icon';

export default function CaseStudiesSection() {
  const img = images.homeV2.tablet;
  const lead = caseStudies[0].visual;
  const [accent, ...rest] = lead.headline.split('. ');

  return (
    <section
      className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#7b90bb_0%,#3d4f86_45%,#0e0b35_100%)]"
      aria-labelledby="cases-title"
    >
      {/* Decorative glow + dot grid */}
      <div className="absolute -left-60 -top-20 -z-10 size-[44rem] bg-[radial-gradient(closest-side,rgb(249_76_48/0.25),transparent)]" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgb(255_255_255/0.12)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_left,#000,transparent_70%)]" aria-hidden="true" />

      <div className="container-x grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Photo + floating results */}
        <div className="relative order-2 mx-auto w-full max-w-md lg:order-1" data-reveal="left">
          <div className="absolute -inset-3 -z-10 rotate-3 rounded-[2.5rem] border border-white/25" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#9fb2d6] to-[#3d4f86] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.7)]">
            <img
              src={photo(img.id, 720, 900)}
              srcSet={photoSrcSet(img.id, [420, 720, 900], 900 / 720)}
              sizes="(min-width: 1024px) 28rem, 90vw"
              width="720"
              height="900"
              alt={img.alt}
              loading="lazy"
              decoding="async"
              onError={hideOnError}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/90 to-transparent" aria-hidden="true" />
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy ">
              <Icon name="pin" className="size-3.5 text-brand" />
              Dubai, UAE
            </span>
            <div className="absolute inset-x-5 bottom-5 text-white">
              <p className="font-display text-lg font-semibold">{lead.brand}</p>
              <p className="text-sm text-white/80">
                {lead.industry} · {lead.platform.replace('Platform - ', '')}
              </p>
            </div>
          </div>

          {/* Floating KPI chips */}
          <div className="absolute -right-2 top-[14%] rounded-2xl bg-white px-4 py-3 shadow-[0_24px_50px_-24px_rgb(0_0_0/0.6)] sm:-right-10">
            <p className="font-display text-2xl font-bold leading-none text-brand">{lead.kpis[1].value}</p>
            <p className="mt-1 text-xs font-medium text-navy">{lead.kpis[1].label}</p>
          </div>
          <div className="absolute -left-2 top-[46%] flex items-center gap-3 rounded-2xl bg-navy px-4 py-3 text-white ring-1 ring-white/20 sm:-left-10">
            <span className="grid size-10 place-items-center rounded-xl bg-brand">
              <Icon name="trending" className="size-5" strokeWidth={2.4} />
            </span>
            <span>
              <span className="block font-display text-xl font-bold leading-none">{lead.kpis[2].value}</span>
              <span className="text-xs text-white/75">{lead.kpis[2].label}</span>
            </span>
          </div>
        </div>

        {/* Text + case study cards */}
        <div className="order-1 lg:order-2" data-reveal>
          <p className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-medium text-white shadow-[0_12px_24px_-12px_rgb(249_76_48/0.9)]">
            <Icon name="chart" className="size-4" strokeWidth={2.2} />
            {caseStudies[1].eyebrow}
          </p>
          <h2 id="cases-title" className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight !text-white">
            <span className="text-brand">{accent}.</span> {rest.join('. ')}
          </h2>
          <p className="mt-3 max-w-xl leading-relaxed text-white/80">{lead.caption}</p>

          <ul className="mt-8 space-y-5">
            {caseStudies.map((cs, i) => (
              <li key={cs.id} data-reveal style={{ '--d': `${i * 120}ms` }}>
                <article className="group rounded-3xl border border-white/15 bg-white/[0.07] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.12] sm:p-6">
                  <div className="flex gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand text-white shadow-[0_10px_20px_-10px_rgb(249_76_48/0.9)] transition group-hover:rotate-6">
                      <Icon name="trending" className="size-5" strokeWidth={2.2} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-sans text-lg font-semibold leading-snug tracking-normal !text-white sm:text-xl">{cs.title}</h3>
                      <p className="mt-1 text-sm text-white/70">{cs.visual.caption}</p>
                    </div>
                  </div>
                  <dl className="mt-4 grid grid-cols-3 gap-2">
                    {cs.stats.map((s) => (
                      <div key={s.label} className="rounded-xl bg-white/10 px-3 py-2.5 text-center">
                        <dd className="font-display text-base font-bold text-white sm:text-lg">{s.value}</dd>
                        <dt className="text-[11px] leading-tight text-white/70 sm:text-xs">{s.label}</dt>
                      </div>
                    ))}
                  </dl>
                  <Link to={cs.readMore} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-100 transition hover:text-white">
                    Read More <span className="sr-only">about this case study</span>
                    <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
