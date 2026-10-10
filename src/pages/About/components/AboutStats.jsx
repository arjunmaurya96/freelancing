/*
  STATS BAND — dark band with four icon stats (founding year + results).
*/

import { whoWeAre } from '@/data/aboutContent';
import Icon from '@/assets/icons/Icon';

const stats = [
  { value: '2024', label: 'Year Conversions was established', icon: 'award', line: 'bg-brand' },
  { value: whoWeAre.stats[0].value, label: whoWeAre.stats[0].label, icon: 'chart', line: 'bg-[#2bb3a3]' },
  { value: whoWeAre.stats[1].value, label: whoWeAre.stats[1].label, icon: 'trending', line: 'bg-[#e8b04a]' },
  { value: whoWeAre.stats[2].value, label: whoWeAre.stats[2].label, icon: 'users', line: 'bg-[#8b7ae6]' },
];

export default function AboutStats() {
  return (
    <section className="border-t-2 border-brand bg-[#22183a] py-10" aria-label="Conversions in numbers">
      <dl className="container-x grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="relative flex !flex-row items-center gap-3 overflow-hidden rounded-lg border border-white/10 bg-white/[0.05] p-4 sm:p-5" data-reveal>
            <span className="grid size-10 shrink-0 place-items-center rounded-md bg-white/10 text-[#ffb59f]">
              <Icon name={s.icon} className="size-5" />
            </span>
            <span className="min-w-0">
              <dd className="font-display text-xl font-bold leading-none text-white sm:text-3xl">{s.value}</dd>
              <dt className="mt-1 text-xs leading-snug text-white/70">{s.label}</dt>
            </span>
            <span className={`absolute inset-x-0 bottom-0 h-0.5 ${s.line}`} aria-hidden="true" />
          </div>
        ))}
      </dl>
    </section>
  );
}
