/*
  META ADS — FREQUENTLY ASKED QUESTIONS
  Two-column grid of question cards (all answers visible, like the
  reference). Content lives in this component.
*/

const content = {
  eyebrow: 'Common questions',
  title: 'Frequently Asked Questions',
  faqs: [
    {
      q: 'How Much Does Meta Ads Management Cost in Delhi?',
      a: [
        'The amount you have to pay for Meta advertising will depend on your line of business, your aims, the audience you are targeting, the level of competition, your advertising budget, the creative needs, the number of campaigns, and the extent of the management required.',
        'It is necessary to distinguish between Meta’s advertising expenditure and your agency management costs.',
      ],
    },
    {
      q: 'Is Meta advertising appropriate for small businesses?',
      a: ['Yes, Meta advertising can be used by businesses of any size. The campaigns can be organized by location, audience, objectives, and budget, depending on the business model and the economics of customer acquisition.'],
    },
    {
      q: 'How much money should I allocate to Meta Ads?',
      a: ['There is no single figure that suits every business. The right budget depends on your average order value, margins, conversion rate, acquisition cost, competition, and growth goals.'],
    },
    {
      q: 'How long before you can see results from Meta Ads?',
      a: ['Some campaigns bring enquiries or sales soon after launch, but sustainable optimization needs enough campaign data to guide decisions.'],
    },
    {
      q: 'Does Conversions handle Facebook and Instagram Ads?',
      a: ['Yes. We run campaigns across the relevant Meta channels, including Facebook and Instagram, based on your objectives and audience.'],
    },
    {
      q: 'Can you manage an existing Meta Ads account?',
      a: ['Yes. We can audit your current campaigns and build an optimization plan around your existing account structure and data.'],
    },
    {
      q: 'Do you make ad creatives?',
      a: ['Yes, depending on the agreed scope. This can include ad copy, static images, video concepts, and carousel ideas.'],
    },
    {
      q: 'Can Meta Ads be used to generate leads via WhatsApp?',
      a: ['Yes, Meta Ads can generate WhatsApp enquiries when the account and campaigns are set up properly.'],
    },
  ],
};

export default function MetaFAQ() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="meta-faq-title">
      <div className="container-x">
        <div data-reveal>
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#1d5fbf]">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            {content.eyebrow}
          </p>
          <h2 id="meta-faq-title" className="mt-3 font-sans text-[clamp(1.7rem,3.2vw,2.4rem)] font-medium leading-tight tracking-tight !text-navy">
            {content.title}
          </h2>
        </div>

        <dl className="mt-8 grid gap-4 md:grid-cols-2">
          {content.faqs.map((f) => (
            <div key={f.q} className="rounded-md border border-black/10 p-5" data-reveal>
              <dt className="font-sans text-base font-semibold text-navy">{f.q}</dt>
              {f.a.map((p) => (
                <dd key={p.slice(0, 20)} className="mt-2 text-sm leading-relaxed text-charcoal">
                  {p}
                </dd>
              ))}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
