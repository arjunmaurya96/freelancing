/*
  FLAG — small round country flags as inline SVG.
  (Emoji flags don't render on Windows, so these are drawn in SVG.)
  Usage: <Flag code="ae" className="size-5" />  — codes: ae, gb, au, in
*/

import { useId } from 'react';

function UnionJack({ w = 60, h = 30 }) {
  return (
    <g>
      <rect width={w} height={h} fill="#012169" />
      <path d={`M0 0L${w} ${h}M${w} 0L0 ${h}`} stroke="#fff" strokeWidth={h / 5} />
      <path d={`M0 0L${w} ${h}M${w} 0L0 ${h}`} stroke="#C8102E" strokeWidth={h / 15} />
      <path d={`M${w / 2} 0V${h}M0 ${h / 2}H${w}`} stroke="#fff" strokeWidth={h / 3} />
      <path d={`M${w / 2} 0V${h}M0 ${h / 2}H${w}`} stroke="#C8102E" strokeWidth={h / 5} />
    </g>
  );
}

const flags = {
  ae: (
    <>
      <rect width="60" height="60" fill="#fff" />
      <rect width="60" height="20" fill="#00732F" />
      <rect y="40" width="60" height="20" fill="#000" />
      <rect width="18" height="60" fill="#FF0000" />
    </>
  ),
  gb: <UnionJack w={60} h={60} />,
  au: (
    <>
      <rect width="60" height="60" fill="#012169" />
      <g transform="scale(0.5)">
        <UnionJack w={60} h={60} />
      </g>
      <g fill="#fff">
        <circle cx="15" cy="46" r="4.5" />
        <circle cx="45" cy="14" r="2.6" />
        <circle cx="37" cy="30" r="2.6" />
        <circle cx="52" cy="27" r="2.2" />
        <circle cx="45" cy="47" r="2.8" />
      </g>
    </>
  ),
  in: (
    <>
      <rect width="60" height="20" fill="#FF9933" />
      <rect y="20" width="60" height="20" fill="#fff" />
      <rect y="40" width="60" height="20" fill="#138808" />
      <circle cx="30" cy="30" r="7" fill="none" stroke="#000080" strokeWidth="1.6" />
      <circle cx="30" cy="30" r="1.6" fill="#000080" />
    </>
  ),
};

export default function Flag({ code, className = 'size-5' }) {
  const clip = `flag-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  return (
    <svg viewBox="0 0 60 60" className={`${className} shrink-0 overflow-hidden rounded-full ring-1 ring-white/30`} aria-hidden="true">
      <defs>
        <clipPath id={clip}>
          <circle cx="30" cy="30" r="30" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>{flags[code]}</g>
    </svg>
  );
}
