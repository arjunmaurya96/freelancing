/*
  META ADS — "EXPERIENCE RESULTS THAT MATTER!" CTA band (light blue).
  Content lives in this component.
*/

import { Link } from 'react-router';

const content = {
  eyebrow: 'Start with the right priorities',
  title: 'Experience Results That Matter!',
  text: 'Discover how we boosted our clients’ search visibility and business growth.',
};

export default function MetaCTA() {
  return (
    <section className="bg-[#e3eefc] py-14" aria-labelledby="meta-cta-title">
      <div className="container-x flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between" data-reveal>
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#1d5fbf]">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            {content.eyebrow}
          </p>
          <h2 id="meta-cta-title" className="mt-3 font-sans text-[clamp(1.7rem,3.2vw,2.4rem)] font-medium leading-tight tracking-tight !text-navy">
            {content.title}
          </h2>
          <p className="mt-2 text-charcoal">{content.text}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:flex-col lg:items-stretch">
          <Link to="/our-results-portfolio/" className="rounded-md bg-brand px-6 py-3 text-center text-sm font-semibold text-white hover:bg-brand-600">
            Learn More
          </Link>
          <a href="#meta-contact" className="rounded-md border border-navy/30 bg-white px-6 py-3 text-center text-sm font-semibold text-navy hover:border-navy">
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
