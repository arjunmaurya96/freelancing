/*
  ABOUT — honeycomb background.
  Left: pill, uppercase heading, intro, Mission & Vision bullets,
  three check cards (Right Audience / Strategy / Conversion), closing line.
  Right: cut-out photo standing on the pattern, with floating stat chips
  (Happy Clients, Retention). On mobile the photo comes first.
*/

import { Link } from 'react-router';
import { about, hero, contact } from '@/data/homeContent';
import { visionMission } from '@/data/aboutContent';
import strategist from '@/assets/people/about-strategist.webp';
import Icon from '@/assets/icons/Icon';

const [vision, mission] = visionMission;

export default function AboutSection() {
  const [, happy, retention] = about.highlights;

  return (
    <section className="honeycomb relative overflow-hidden pb-16 pt-10 sm:pb-20 lg:pb-0 lg:pt-20" aria-labelledby="about-title">
      <div className="container-x grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="lg:pb-20" data-reveal>
          <p className="inline-block rounded-lg bg-brand/90 px-4 py-2 text-sm font-medium text-white">{about.eyebrow}</p>
          <h2 id="about-title" className="mt-6 text-[clamp(1.8rem,3.4vw,2.6rem)] font-medium uppercase leading-tight !text-navy">
            {about.titleAccent} {about.titleRest}
          </h2>
          <p className="mt-5 leading-relaxed text-charcoal">{about.paragraphs[0]}</p>

          <ul className="mt-6 space-y-3">
            {[mission, vision].map((m) => (
              <li key={m.title} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-navy">
                <Icon name="spark" className="mt-1 size-4 shrink-0 text-brand" strokeWidth={2.2} />
                <span>
                  <strong className="font-semibold">{m.title}:</strong> {m.text}
                </span>
              </li>
            ))}
          </ul>

          <ul className="mt-7 space-y-4">
            {hero.pillars.map((p, i) => (
              <li
                key={p.title}
                className="flex max-w-xl items-center gap-4 rounded-2xl bg-sky p-4 transition duration-300 hover:translate-x-1 hover:shadow-[0_14px_30px_-20px_rgb(14_11_53/0.4)]"
                data-reveal
                style={{ '--d': `${i * 100}ms` }}
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-steel/40 text-white">
                  <span className="grid size-8 place-items-center rounded-full bg-steel">
                    <Icon name="check" className="size-4" strokeWidth={3} />
                  </span>
                </span>
                <span>
                  <span className="block text-lg font-medium text-navy">{p.title}</span>
                  <span className="mt-0.5 block text-sm leading-snug text-charcoal">{p.text}</span>
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-7 max-w-xl leading-relaxed text-navy">
            {contact.outro.map((part) => (typeof part === 'string' ? part : part.strong))}{' '}
            <Link to="/about/" className="font-semibold text-brand-700 underline underline-offset-4">
              Learn More
            </Link>
          </p>
        </div>

        {/* Cut-out photo with stat chips — photo first on mobile, chips under it */}
        <div className="relative order-first mx-auto w-full max-w-sm sm:max-w-md lg:order-none lg:max-w-lg lg:self-end" data-reveal="right">
          <span className="absolute inset-x-[8%] bottom-0 top-[18%] -z-0 rounded-t-full bg-gradient-to-b from-peach/80 to-transparent" aria-hidden="true" />
          <img
            src={strategist}
            width="800"
            height="1200"
            alt="Conversions performance marketing strategist"
            loading="lazy"
            decoding="async"
            className="relative mx-auto h-auto w-[85%] [mask-image:linear-gradient(to_bottom,#000_88%,transparent)] lg:w-full lg:[mask-image:none]"
          />

          {/* Stat chips: a simple row under the photo on mobile, floating over it on desktop */}
          <div className="about-chips mt-4 grid grid-cols-2 gap-3 lg:contents">
          <div className="rounded-2xl bg-white p-3 shadow-[0_20px_40px_-20px_rgb(14_11_53/0.45)] lg:absolute lg:left-0 lg:top-[42%]">
            <p className="text-[11px] font-medium text-muted">{happy.label}</p>
            <p className="flex items-center gap-2 font-display text-xl font-bold text-[#16a37f]">
              {happy.value}
              <Icon name="trending" className="size-4" strokeWidth={2.4} />
            </p>
            <svg viewBox="0 0 100 30" className="mt-1 h-6 w-24" aria-hidden="true">
              <path d="M0 22 L15 14 L28 20 L42 8 L55 18 L70 10 L85 16 L100 3" fill="none" stroke="#16a37f" strokeWidth="2.5" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-brand-50 px-4 py-3 shadow-[0_20px_40px_-20px_rgb(249_76_48/0.5)] lg:absolute lg:right-0 lg:top-[22%]">
            <Icon name="chart" className="size-6 text-brand" strokeWidth={2.2} />
            <span>
              <span className="block font-display text-lg font-bold leading-none text-brand">{retention.value}</span>
              <span className="text-xs text-navy">{retention.label}</span>
            </span>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
