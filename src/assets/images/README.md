# Images

Put page photos and illustrations here, grouped by page:

    images/
      home/
      about/

Tips for speed:
- Use **.webp** (or .avif) and export at roughly 2x the size shown on screen.
- Always set `width` and `height` on `<img>` (prevents layout shift).
- Add `loading="lazy"` to every image below the first screen.
- Never lazy-load the main hero image; add `fetchPriority="high"` to it instead.
- Write a real `alt` describing the image (or `alt=""` if purely decorative).
