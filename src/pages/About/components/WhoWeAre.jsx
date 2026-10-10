/*
  WHO WE ARE — text on the left (intro, paragraphs, Mission/Vision boxes),
  photo on the right with a dark caption panel.
*/

import { aboutHero, whoWeAre, visionMission } from '@/data/aboutContent';
import { images, photo, photoSrcSet, hideOnError } from '@/data/images';

export default function WhoWeAre() {
  const img = images.aboutPage.team;
  const [vision, mission] = visionMission;

  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="who-title">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div data-reveal>
          <p className="text-sm font-bold uppercase tracking-wide text-charcoal">{whoWeAre.title}</p>
          <h2 id="who-title" className="mt-2 font-sans text-[clamp(1.8rem,3.4vw,2.5rem)] font-normal leading-tight tracking-tight !text-navy">
            {aboutHero.titleAccent}
          </h2>
          <p className="mt-5 leading-relaxed text-charcoal">
            {whoWeAre.intro.before}
            <strong className="font-semibold text-navy">{whoWeAre.intro.highlight}</strong>
            {whoWeAre.intro.after}
          </p>
          {whoWeAre.paragraphs.map((p) => (
            <p key={p.slice(0, 20)} className="mt-4 leading-relaxed text-charcoal">
              {p}
            </p>
          ))}

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {[mission, vision].map((m) => (
              <div key={m.title} className="border-l-2 border-brand bg-[#f4f3f8] px-4 py-4">
                <p className="text-sm font-semibold text-navy">{m.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-charcoal">{m.text}</p>
              </div>
            ))}
          </div>
        </div>

        <figure className="overflow-hidden rounded-md bg-navy shadow-[0_30px_60px_-30px_rgb(14_11_53/0.55)]" data-reveal="right">
          <div className="aspect-[4/3] bg-gradient-to-br from-[#2b2560] to-navy">
            <img
              src={photo(img.id, 900, 675)}
              srcSet={photoSrcSet(img.id, [480, 720, 900, 1200], 675 / 900)}
              sizes="(min-width: 1024px) 40vw, 92vw"
              width="900"
              height="675"
              alt={img.alt}
              loading="lazy"
              decoding="async"
              onError={hideOnError}
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="m-4 border-l-2 border-brand pl-4 sm:m-5">
            <p className="font-semibold text-white">{visionMission[2].title}</p>
            <p className="mt-1 text-sm leading-relaxed text-white/75">{aboutHero.paragraphs[1]}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
