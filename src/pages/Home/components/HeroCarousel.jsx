/*
  HERO CAROUSEL — landmark photo slider (India + Dubai), shown with NO
  overlay so the photos stay completely clear. Size/position come from
  `className` (stacked on phones, full background on desktop).
  - Native horizontal scroll with snap: swipe on phones, mouse-drag on
    desktop, plus arrows and dots.
  - Each photo slowly zooms and pans while it is on screen (a video-like
    "Ken Burns" effect), in full HD (up to 2560px wide).
  - Auto-advances every 6s; pauses while the visitor is touching or dragging,
    when the tab is hidden, and for reduced-motion users.
  Photos come from images.homeV2.heroSlides in src/data/images.js.
*/

import { useCallback, useEffect, useRef, useState } from 'react';
import { photo, photoSrcSet, hideOnError } from '@/data/images';
import Icon from '@/assets/icons/Icon';

export default function HeroCarousel({ slides, className = '' }) {
  const trackRef = useRef(null);
  const paused = useRef(false);
  const drag = useRef(null);
  const [active, setActive] = useState(0);

  const goTo = useCallback(
    (i) => {
      const track = trackRef.current;
      if (!track) return;
      const n = (i + slides.length) % slides.length;
      track.scrollTo({ left: n * track.clientWidth, behavior: 'smooth' });
    },
    [slides.length],
  );

  // Which slide is in view.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => setActive(Math.round(track.scrollLeft / track.clientWidth));
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  // Auto-advance.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => {
      if (!paused.current && !document.hidden) goTo(active + 1);
    }, 6000);
    return () => clearInterval(t);
  }, [active, goTo]);

  // Mouse drag (touch scrolls natively).
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse') return;
    paused.current = true;
    drag.current = { x: e.clientX, left: trackRef.current.scrollLeft };
    trackRef.current.classList.add('is-dragging');
  };
  const onPointerMove = (e) => {
    if (!drag.current) return;
    trackRef.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };
  const endDrag = () => {
    if (!drag.current) return;
    const track = trackRef.current;
    track.classList.remove('is-dragging');
    drag.current = null;
    goTo(Math.round(track.scrollLeft / track.clientWidth));
    setTimeout(() => (paused.current = false), 3000);
  };

  return (
    <div className={`relative overflow-hidden ${className}`} aria-roledescription="carousel" aria-label="Landmark photos">
      <ul
        ref={trackRef}
        className="hero-carousel-track flex h-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onTouchStart={() => (paused.current = true)}
        onTouchEnd={() => setTimeout(() => (paused.current = false), 3000)}
      >
        {slides.map((img, i) => (
          <li key={img.id} className="relative h-full w-full shrink-0 snap-center overflow-hidden bg-navy" aria-roledescription="slide" aria-label={`${i + 1} of ${slides.length}: ${img.place}`}>
            <img
              src={photo(img.id, 1920, undefined, 90)}
              srcSet={photoSrcSet(img.id, [828, 1080, 1440, 1920, 2560, 3200], undefined, 90)}
              sizes="100vw"
              width="1920"
              height="1080"
              alt={img.alt}
              draggable="false"
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : 'auto'}
              decoding="async"
              onError={hideOnError}
              style={{ objectPosition: img.pos || '50% 50%' }}
              className={`hero-kb h-full w-full select-none object-cover ${i % 2 ? 'hero-kb-alt' : ''} ${i === active ? 'is-active' : ''}`}
            />
          </li>
        ))}
      </ul>


      {/* Place label */}
      <span className="pointer-events-none absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/30 lg:left-auto lg:right-6 lg:top-6">
        <Icon name="pin" className="size-3.5 text-[#ffb59f]" />
        {slides[active]?.place}
      </span>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/40 px-2.5 py-1.5 lg:bottom-6">
        {slides.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show ${img.place}`}
            aria-current={i === active}
            className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'w-7 bg-brand' : 'w-2 bg-white/60 hover:bg-white'}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button type="button" onClick={() => goTo(active - 1)} aria-label="Previous photo" className="hero-carousel-arrow left-3 sm:left-6">
        <Icon name="arrow" className="size-4 rotate-180" strokeWidth={2.4} />
      </button>
      <button type="button" onClick={() => goTo(active + 1)} aria-label="Next photo" className="hero-carousel-arrow right-3 sm:right-6">
        <Icon name="arrow" className="size-4" strokeWidth={2.4} />
      </button>
    </div>
  );
}
