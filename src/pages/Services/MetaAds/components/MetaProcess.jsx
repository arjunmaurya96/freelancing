/*
  META ADS — OUR META ADS MANAGEMENT PROCESS
  Photo on the left, numbered vertical steps on the right.
  Content lives in this component.
*/

import { photo, photoSrcSet, hideOnError } from '@/data/images';

const content = {
  eyebrow: 'The working method',
  title: 'Our Meta Ads Management Process',
  intro:
    'The way in which we handle our conversion process allows you to plan, launch, and optimize your campaigns; at each stage, measurable performance and responsible growth are guaranteed. Onboarding and arranging your campaign generally take between five and seven business days from the first consultation to the campaign launch. This time frame is intended to set clear expectations and help you plan for when the results will begin.',
  image: { id: 'photo-1758873272562-aa5459cbf34b', alt: 'Marketers planning a Meta Ads campaign funnel' },
  steps: [
    { title: 'Business and Audience Research', text: 'We understand your business, target customers, competitors, products, services, and objectives.' },
    { title: 'Campaign Strategy', text: 'We establish our campaign objectives, segment the audience, set up the funnel structure, select offers, choose creatives, and allocate the budget.' },
    { title: 'Setup of Account and Tracking', text: 'We review the advertising materials provided by Meta and the conversion tracking used to measure campaign performance.' },
    { title: 'Creative Development', text: 'Our advertising concepts, messaging, and creative direction are developed in accordance with your audience and the campaign’s aims.' },
    { title: 'Campaign Launch', text: 'We set off our campaigns with the appropriate objectives, audiences, placements, budgets, and conversion settings.' },
    { title: 'Testing & Optimization', text: 'We continually look at the data from our campaigns and test different audiences, creatives, messages, and campaign structures.' },
    { title: 'Scaling', text: 'When campaigns carry out their activities consistently, we can identify opportunities to increase our reach and grow responsibly.' },
  ],
};

export default function MetaProcess() {
  return (
    <section className="bg-white pb-16 sm:pb-20" aria-labelledby="meta-process-title">
      <div className="container-x grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="overflow-hidden rounded-md bg-[#e8eef6] lg:sticky lg:top-28" data-reveal="left">
          <img
            src={photo(content.image.id, 900, 1000)}
            srcSet={photoSrcSet(content.image.id, [480, 720, 900, 1200], 1000 / 900)}
            sizes="(min-width: 1024px) 40vw, 92vw"
            width="900"
            height="1000"
            alt={content.image.alt}
            loading="lazy"
            decoding="async"
            onError={hideOnError}
            className="aspect-[4/3] h-full w-full object-cover lg:aspect-[9/10]"
          />
        </div>

        <div data-reveal>
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#1d5fbf]">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            {content.eyebrow}
          </p>
          <h2 id="meta-process-title" className="mt-3 font-sans text-[clamp(1.7rem,3.2vw,2.4rem)] font-medium leading-tight tracking-tight !text-navy">
            {content.title}
          </h2>
          <p className="mt-4 leading-relaxed text-charcoal">{content.intro}</p>

          <ol className="mt-8">
            {content.steps.map((s, i) => (
              <li key={s.title} className="relative flex gap-4 pb-6 last:pb-0">
                {i < content.steps.length - 1 && <span className="absolute left-[0.95rem] top-9 h-[calc(100%-2.25rem)] w-px bg-navy/15" aria-hidden="true" />}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand text-xs font-bold text-white">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-sans text-base font-semibold tracking-normal !text-navy">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
