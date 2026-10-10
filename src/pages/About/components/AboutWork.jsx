/*
  A CLOSER LOOK AT OUR WORK — dark band with case-study cards
  (photo, category, brand, summary, link). Data from homeContent.caseStudies.
*/

import { Link } from 'react-router';
import { caseStudies } from '@/data/homeContent';
import { images, photo, photoSrcSet, hideOnError } from '@/data/images';
import Icon from '@/assets/icons/Icon';

const cardImages = [images.aboutPage.analytics, images.homeV2.tablet];

export default function AboutWork() {
  return (
    <section id="our-work" className="scroll-mt-24 bg-[#22183a] py-16 text-white sm:py-20" aria-labelledby="work-title">
      <div className="container-x">
        <div className="grid gap-5 lg:grid-cols-2 lg:items-end" data-reveal>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ffb59f]">{caseStudies[1].eyebrow}</p>
            <h2 id="work-title" className="mt-2 font-sans text-[clamp(1.8rem,3.4vw,2.5rem)] font-normal leading-tight tracking-tight !text-white">
              {caseStudies[0].visual.headline}
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-white/80 lg:pl-10">{caseStudies[0].visual.caption}</p>
        </div>

        <ul className="mt-9 grid gap-5 md:grid-cols-2">
          {caseStudies.map((cs, i) => {
            const img = cardImages[i % cardImages.length];
            return (
              <li key={cs.id} className="flex flex-col overflow-hidden rounded-md border border-white/10 bg-white/[0.05]" data-reveal style={{ '--d': `${i * 100}ms` }}>
                <div className="aspect-[16/8] bg-gradient-to-br from-[#2b2560] to-navy">
                  <img
                    src={photo(img.id, 800, 400)}
                    srcSet={photoSrcSet(img.id, [480, 800, 1100], 400 / 800)}
                    sizes="(min-width: 768px) 45vw, 92vw"
                    width="800"
                    height="400"
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    onError={hideOnError}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-[#ffb59f]">{cs.visual.platform.replace('Platform - ', '')}</p>
                  <h3 className="mt-2 font-sans text-xl font-medium tracking-normal !text-white">{cs.visual.brand || cs.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/75">{cs.title}</p>
                  <dl className="mt-4 grid grid-cols-3 gap-2">
                    {cs.stats.map((s) => (
                      <div key={s.label} className="rounded bg-white/10 px-2 py-2 text-center">
                        <dd className="text-sm font-bold text-white">{s.value}</dd>
                        <dt className="text-[10px] text-white/65">{s.label}</dt>
                      </div>
                    ))}
                  </dl>
                  <Link to={cs.readMore} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                    View case study
                    <Icon name="arrow" className="size-4" strokeWidth={2.2} />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
