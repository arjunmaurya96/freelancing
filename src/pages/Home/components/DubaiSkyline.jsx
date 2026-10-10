/*
  DUBAI SKYLINE — hand-drawn line illustration for the hero background.
  Burj Al Arab, palms, Dubai Frame, Burj Khalifa, Museum of the Future,
  Cayan Tower, Emirates Towers and a dhow on the Creek.
  Crisp (unblurred) lines; each line draws itself in once on load (styles in Home.css).
  Pure SVG — no image download.
*/

const towers = [
  // simple towers: [x, width, height]
  [470, 34, 120], [510, 26, 160], [542, 40, 95], [588, 30, 140], [624, 22, 105],
  [790, 26, 130], [822, 20, 90], [1120, 34, 150], [1160, 26, 110], [1192, 38, 175], [1236, 28, 120],
];

const BASE = 300;

export default function DubaiSkyline() {
  return (
    <svg className="hero-skyline" viewBox="0 0 1440 320" preserveAspectRatio="xMidYMax slice" aria-hidden="true">

      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {/* Sun */}
        <circle className="sk" pathLength="1" cx="1290" cy="70" r="26" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
          const r = (a * Math.PI) / 180;
          return <path key={a} className="sk" pathLength="1" d={`M${1290 + Math.cos(r) * 34} ${70 + Math.sin(r) * 34} L${1290 + Math.cos(r) * 44} ${70 + Math.sin(r) * 44}`} />;
        })}

        {/* Birds */}
        <path className="sk" pathLength="1" d="M300 70 q8 -8 16 0 q8 -8 16 0" />
        <path className="sk" pathLength="1" d="M345 52 q6 -6 12 0 q6 -6 12 0" />
        <path className="sk" pathLength="1" d="M1010 60 q7 -7 14 0 q7 -7 14 0" />

        {/* Burj Al Arab */}
        <path className="sk" pathLength="1" d={`M140 ${BASE} V95`} />
        <path className="sk" pathLength="1" d={`M140 112 Q 235 150 228 ${BASE}`} />
        <path className="sk" pathLength="1" d="M140 150 Q 200 175 205 230 M140 200 Q 180 215 186 260" />
        <path className="sk" pathLength="1" d="M140 168 H112 M112 168 a10 4 0 1 0 0.1 0" />

        {/* Palms */}
        {[262, 318].map((x, i) => (
          <g key={x}>
            <path className="sk" pathLength="1" d={`M${x} ${BASE} Q ${x + 6} ${240 - i * 10} ${x - 2} ${200 - i * 12}`} />
            <path className="sk" pathLength="1" d={`M${x - 2} ${200 - i * 12} q -22 -6 -34 10 M${x - 2} ${200 - i * 12} q 22 -8 34 8 M${x - 2} ${200 - i * 12} q -12 -18 -30 -16 M${x - 2} ${200 - i * 12} q 14 -18 30 -14`} />
          </g>
        ))}

        {/* Dubai Frame */}
        <path className="sk" pathLength="1" d={`M372 ${BASE} V140 H446 V${BASE} M384 ${BASE} V152 H434 V${BASE}`} />

        {/* Generic towers with window lines */}
        {towers.map(([x, w, h]) => (
          <g key={x}>
            <path className="sk" pathLength="1" d={`M${x} ${BASE} V${BASE - h} H${x + w} V${BASE}`} />
            <path className="sk sk-thin" pathLength="1" d={Array.from({ length: Math.floor(h / 22) }, (_, k) => `M${x + 5} ${BASE - h + 14 + k * 22} H${x + w - 5}`).join(' ')} />
          </g>
        ))}

        {/* Burj Khalifa */}
        <path
          className="sk"
          pathLength="1"
          d={`M672 ${BASE} L678 236 L688 236 L692 176 L702 176 L706 118 L713 118 L716 66 L719 8 L722 66 L725 118 L732 118 L736 176 L746 176 L750 236 L760 236 L766 ${BASE}`}
        />
        <path className="sk sk-thin" pathLength="1" d={`M719 ${BASE} V30 M700 ${BASE} L704 190 M738 ${BASE} L734 190`} />

        {/* Museum of the Future */}
        <ellipse className="sk" pathLength="1" cx="900" cy="246" rx="46" ry="40" />
        <ellipse className="sk" pathLength="1" cx="906" cy="246" rx="24" ry="20" />
        <path className="sk" pathLength="1" d={`M846 ${BASE} Q 900 278 956 ${BASE}`} />

        {/* Cayan (twisted) tower */}
        <path className="sk" pathLength="1" d={`M985 ${BASE} C 970 240, 1000 200, 985 140 M1012 ${BASE} C 1027 240, 997 200, 1012 140 M985 140 H1012`} />
        <path className="sk sk-thin" pathLength="1" d="M986 270 Q 998 262 1011 270 M988 230 Q 998 222 1009 230 M987 190 Q 998 182 1010 190" />

        {/* Emirates Towers */}
        <path className="sk" pathLength="1" d={`M1040 ${BASE} V150 L1062 116 V${BASE} M1070 ${BASE} V176 L1088 148 V${BASE}`} />

        {/* Water + dhow */}
        <path className="sk" pathLength="1" d={`M0 ${BASE} H1440`} />
        <path className="sk sk-thin" pathLength="1" d="M60 312 q10 -5 20 0 t20 0 M560 314 q10 -5 20 0 t20 0 M960 312 q10 -5 20 0 t20 0 M1380 314 q10 -5 20 0 t20 0" />
        <path className="sk" pathLength="1" d="M1300 292 H1376 L1364 304 H1312 Z M1338 292 V240 L1370 286 Z" />
      </g>
    </svg>
  );
}
