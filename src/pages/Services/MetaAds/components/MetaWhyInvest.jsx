/*
  META ADS — WHY INVEST IN META ADVERTISING
  Heading row + numbered cards (01 | TAG). Content lives in this component.
*/

const content = {
  eyebrow: 'Why Meta advertising',
  title: 'Why should one invest in Meta advertising?',
  side: 'Facebook and Instagram give businesses of any size a flexible, measurable way to reach the right customers.',
  reasons: [
    { tag: 'Audience', title: 'Reach Relevant Customers', text: 'You can reach potential customers by considering the signals they send, their interests, behaviors, available demographic information, and interactions.' },
    { tag: 'Budget', title: 'Flexible Budgeting', text: 'Design your campaigns in accordance with your advertising budget and business objectives.' },
    { tag: 'Formats', title: 'Multiple Creative Formats', text: 'Get across your message by using images, videos, carousels, Reels, Stories, and product-focused formats.' },
    { tag: 'Data', title: 'Measurable Performance', text: 'Campaign data offers useful insights into your audience, how your creatives perform, and your conversion results.' },
    { tag: 'Retargeting', title: 'Remarketing Opportunities', text: 'Target those people who have already expressed an interest in your business.' },
    { tag: 'Growth', title: 'Scalable Advertising', text: 'We ought to modify our strategies and budgets to achieve further growth if the campaigns are performing sustainably.' },
  ],
};

export default function MetaWhyInvest() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="meta-invest-title">
      <div className="container-x">
        <div className="grid gap-5 lg:grid-cols-2 lg:items-end" data-reveal>
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#1d5fbf]">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              {content.eyebrow}
            </p>
            <h2 id="meta-invest-title" className="mt-3 font-sans text-[clamp(1.7rem,3.2vw,2.4rem)] font-medium leading-tight tracking-tight !text-navy">
              {content.title}
            </h2>
          </div>
          <p className="leading-relaxed text-charcoal lg:pl-10">{content.side}</p>
        </div>

        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {content.reasons.map((r, i) => (
            <li key={r.title} className="border-t-2 border-navy bg-[#f2f5f9] p-5" data-reveal style={{ '--d': `${(i % 3) * 80}ms` }}>
              <p className="text-[11px] font-bold uppercase tracking-wide text-[#1d5fbf]">
                {String(i + 1).padStart(2, '0')} | {r.tag}
              </p>
              <h3 className="mt-2 font-sans text-lg font-semibold tracking-normal !text-navy">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal">{r.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
