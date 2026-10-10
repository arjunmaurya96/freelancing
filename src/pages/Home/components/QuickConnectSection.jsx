/*
  QUICK CONNECT — peach band.
  Left: pill, uppercase heading, intro. Right: four icon cards (what the
  free consultation covers) + CTA.
*/

import { Link } from 'react-router';
import { contact } from '@/data/homeContent';
import Icon from '@/assets/icons/Icon';

const icons = ['search', 'zap', 'trending', 'globe'];

export default function QuickConnectSection() {
  return (
    <section className="bg-peach py-16 sm:py-20" aria-labelledby="qc-title">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div data-reveal>
          <p className="inline-block rounded-lg bg-brand/90 px-6 py-2.5 text-sm font-medium text-white">{contact.eyebrow}</p>
          <h2 id="qc-title" className="mt-6 text-[clamp(1.9rem,3.6vw,2.6rem)] font-medium uppercase leading-tight !text-navy">
            {contact.title}
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-navy">
            {contact.intro.map((part) => (typeof part === 'string' ? part : part.strong || part.accent))}
          </p>
        </div>

        <div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {contact.checklist.map((item, i) => (
              <li
                key={item}
                className="group rounded-2xl bg-white p-5 shadow-[0_10px_30px_-24px_rgb(14_11_53/0.4)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_40px_-24px_rgb(249_76_48/0.5)]"
                data-reveal
                style={{ '--d': `${i * 90}ms` }}
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-[#ffa36b] text-white shadow-[0_10px_20px_-10px_rgb(249_76_48/0.8)] transition-transform duration-300 group-hover:scale-110">
                  <Icon name={icons[i]} className="size-6" />
                </span>
                <h3 className="mt-4 font-sans text-base font-semibold leading-snug tracking-normal !text-navy">{item}</h3>
              </li>
            ))}
          </ul>
          <Link to="/#contact" className="btn btn-primary mt-6 !rounded-lg">
            Get Quote
            <Icon name="arrow" className="size-4" strokeWidth={2.2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
