/*
  HOW WE WORK — dark band with a four-step timeline.
  Steps are the four parts of the digital journey named in the
  "Who We Are" copy.
*/

import { whoWeAre, visionMission } from '@/data/aboutContent';

const steps = [
  { tag: 'Step 01', title: 'Identify the audience', text: 'Properly identifying the target audience for every campaign.' },
  { tag: 'Step 02', title: 'Design the campaigns', text: 'Designing high-performing advertising campaigns across Meta and Google.' },
  { tag: 'Step 03', title: 'Build to convert', text: 'Creating websites with the aim of converting visitors into customers.' },
  { tag: 'Step 04', title: 'Optimise constantly', text: 'Constantly optimizing performance rather than treating each channel in isolation.' },
];

export default function HowWeWork() {
  return (
    <section className="bg-[#22183a] py-16 text-white sm:py-20" aria-labelledby="how-title">
      <div className="container-x">
        <div className="grid gap-5 lg:grid-cols-2 lg:items-end" data-reveal>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ffb59f]">How we work</p>
            <h2 id="how-title" className="mt-2 font-sans text-[clamp(1.8rem,3.4vw,2.5rem)] font-normal leading-tight tracking-tight !text-white">
              We focus on the entire digital journey
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-white/80 lg:pl-10">{whoWeAre.paragraphs[0]}</p>
        </div>

        <ol className="relative mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <span className="absolute inset-x-0 top-[5px] hidden h-px bg-white/20 lg:block" aria-hidden="true" />
          {steps.map((s, i) => (
            <li key={s.tag} className="relative border-l border-white/20 pl-5 lg:border-l-0 lg:pl-0" data-reveal style={{ '--d': `${i * 100}ms` }}>
              <span className="absolute -left-[6px] top-0 size-[11px] rounded-full bg-brand lg:static lg:block" aria-hidden="true" />
              <p className="text-xs font-semibold text-[#ffb59f] lg:mt-5">{s.tag}</p>
              <h3 className="mt-2 font-sans text-lg font-medium tracking-normal !text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{s.text}</p>
            </li>
          ))}
        </ol>

        <p className="mt-12 max-w-3xl border-l-2 border-brand pl-4 text-sm leading-relaxed text-white/80" data-reveal>
          <strong className="font-semibold text-white">{visionMission[2].title}: </strong>
          {visionMission[2].text}
        </p>
      </div>
    </section>
  );
}
