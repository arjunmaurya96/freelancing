/*
  useReveal()
  ------------------------------------------------------------------
  Called once in MainLayout, so EVERY page gets scroll-reveal for free.
  Just add `data-reveal` to an element (see src/styles/animations.css).

  One IntersectionObserver for the whole site; a MutationObserver picks up
  elements from lazily loaded pages. Each element animates once, then is
  no longer observed.
*/

import { useEffect } from 'react';

export default function useReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !('IntersectionObserver' in window)) return;

    document.documentElement.classList.add('reveal-ready');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );

    const observeAll = (root) => {
      if (root.matches?.('[data-reveal]:not(.is-visible)')) io.observe(root);
      root.querySelectorAll?.('[data-reveal]:not(.is-visible)').forEach((el) => io.observe(el));
    };

    observeAll(document);

    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => m.addedNodes.forEach((node) => node.nodeType === 1 && observeAll(node)));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
