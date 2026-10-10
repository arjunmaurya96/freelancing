/*
  META ADS — WHY CHOOSE CONVERSIONS
  Left: eyebrow, heading, orange rule, paragraphs. Right: proof cards
  with an orange left border. Content lives in this component.
*/

const content = {
  eyebrow: 'Why Conversions',
  title: 'Why should you choose Conversions as your Meta Ads agency in Delhi?',
  paragraphs: [
    'Getting involved with Meta advertising goes far beyond simply launching campaigns. If you want Facebook and Instagram advertising to be successful, you need to study the market, analyze customer behavior, test creatives, set up the appropriate funnel, and optimize campaigns based on performance data.',
    'We at Conversions have more than 5 years of experience running advertising on Meta. Whether your business is in B2B, B2C, services, real estate, hospitality, consultancy, or e-commerce, our Meta Ads strategies will be tailored to your business objectives.',
    'For businesses focused on generating leads, our emphasis is on improving lead quality and attracting users who better align with your services. For direct-to-consumer and e-commerce brands, our focus is on creating scalable acquisition funnels, improving ROAS, increasing purchases, and identifying opportunities for profitable scaling.',
    'The method includes researching competitors, analyzing our audience, conducting creative tests, establishing a funnel strategy, monitoring conversions, running retargeting, and making optimizations.',
  ],
  process:
    'The Meta advertising process starts with extensive research into competitors and the market as a whole. This research includes reviewing competitors’ social media and examining their ad creative messaging and market positioning to identify opportunities for your business. Throughout all stages – from audience research and creative strategy to campaign management, conversion tracking, retargeting, and optimization – the campaigns are developed with specific, measurable business objectives in mind.',
  proof: [
    { title: '₹50 Cr+ Ad Spend Managed', text: 'We managed advertising budgets across a range of industries, business models, and markets.' },
    { title: '5 Lakh+ Leads Generated', text: 'Generated a continuous flow of potential customers for businesses in the consultancy sector, in real estate, in the hospitality industry, and in other areas.' },
    { title: '$12 Million+ Sales Generated', text: 'We assisted businesses in generating sales through performance marketing campaigns in India, the United States, the UK, Germany, and France.' },
    { title: '70–80% Marketing Qualified Leads', text: 'I achieved a strong ratio of marketing-qualified leads across various lead-generation campaigns by enhancing targeting, funnel strategy, and optimization.' },
    { title: '12 Performance Marketing Experts', text: 'A group specializing in Meta media buying, funnel creation, creative strategy, audience research, tracking, and optimization.' },
  ],
};

export default function MetaWhyChoose() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="meta-why-title">
      <div className="container-x grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div data-reveal>
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#1d5fbf]">
            <span className="h-px w-8 bg-brand" aria-hidden="true" />
            {content.eyebrow}
          </p>
          <h2 id="meta-why-title" className="mt-3 font-sans text-[clamp(1.7rem,3.2vw,2.4rem)] font-medium leading-tight tracking-tight !text-navy">
            {content.title}
          </h2>
          <span className="mt-5 block h-0.5 w-12 bg-brand" aria-hidden="true" />
          <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-charcoal">
            {content.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>

        <div className="self-center" data-reveal="right">
          <ul className="grid gap-3 sm:grid-cols-2">
            {content.proof.map((p, i) => (
              <li key={p.title} className={`border-l-2 border-brand bg-[#f2f5f9] p-5 ${i === content.proof.length - 1 ? 'sm:col-span-2' : ''}`}>
                <p className="font-display text-lg font-semibold text-navy">{p.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-charcoal">{p.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 border-l-2 border-navy/20 pl-4 text-sm leading-relaxed text-muted">{content.process}</p>
        </div>
      </div>
    </section>
  );
}
