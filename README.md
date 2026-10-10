# Conversions — Website (React + Vite + Tailwind)

Foundation for the Conversions website. Only the **Home page** is built; the
structure is ready for 300+ pages.

## Run it

```bash
npm install
npm run dev       # local development → http://localhost:5173
npm run build     # production build → /dist
npm run preview   # preview the production build
```

Requires Node.js 20.19+ or 22.12+.

## Where things are

```
public/                 Files served as-is (fonts, favicons, og-image, robots.txt, sitemap.xml)
src/
├── assets/
│   ├── icons/Icon.jsx  Inline SVG icons (no icon library)
│   ├── images/         Page images (see README inside)
│   └── logos/          Brand logo
├── components/         GLOBAL components only
│   ├── Header/         Header.jsx + Header.css
│   ├── Footer/         Footer.jsx + Footer.css
│   └── Loading/        Loading.jsx + Loading.css
├── data/               All text content (easy to replace with an API later)
│   ├── images.js       Hero, About and service photos (Unsplash placeholders)
│   ├── siteConfig.js   Phone, email, address, social links
│   ├── navigation.js   Header, footer and legal menus
│   ├── homeContent.js  Every piece of homepage copy
│   ├── aboutContent.js Every piece of About page copy
│   └── contactContent.js  Contact page copy, phones, emails, office time, map
├── hooks/useReveal.js  Scroll-reveal animation for every page
├── layouts/MainLayout.jsx   Header + page + Footer wrapper
├── pages/
│   ├── About/               About page (/about/) — styled with Tailwind classes
│   │   ├── About.jsx        Puts the sections in order
│   │   └── components/      AboutHero, WhoWeAre, CoreServices, AboutBrands,
│   │                        DirectorSection, AboutCaseStudy, VisionMission
│   ├── Contact/             Contact page (/contact/) — Tailwind classes
│   │   ├── Contact.jsx
│   │   └── components/      ContactHero, ContactMain (form + details), ContactMap
│   ├── Home/
│   │   ├── Home.jsx         Puts the sections in order
│   │   ├── Home.css         Hero background + dashboard animations only
│   │   └── components/      One file per section
│   └── UnderConstruction/   Shown for every URL that has no page yet
├── routes/AppRoutes.jsx     ALL routes
├── seo/
│   ├── seoConfig.js         Title / description / OG per page
│   └── usePageSeo.js        Writes those tags into <head>
├── services/leadService.js  Where form submissions go
├── styles/
│   ├── globals.css          Tailwind + brand colors/fonts + shared classes
│   ├── fonts.css            Self-hosted font definitions
│   └── animations.css       Shared animations + reduced-motion rules
├── App.jsx
└── main.jsx
```

## Add a new page (example: About)

1. Create the folder:

   ```
   src/pages/About/
   ├── About.jsx
   ├── About.css
   └── components/
       ├── AboutHero.jsx
       └── AboutTeam.jsx
   ```

2. In `About.jsx`, set SEO and list the sections:

   ```jsx
   import usePageSeo from '@/seo/usePageSeo';
   import { pageSeo } from '@/seo/seoConfig';
   import AboutHero from './components/AboutHero';
   import './About.css';

   export default function About() {
     usePageSeo(pageSeo.about);
     return <AboutHero />;
   }
   ```

3. Add its SEO entry in `src/seo/seoConfig.js`:

   ```js
   about: {
     path: '/about/',
     title: 'About Us | Conversions',
     description: '…',
   },
   ```

4. Add the route in `src/routes/AppRoutes.jsx`:

   ```jsx
   const About = lazy(() => import('@/pages/About/About'));
   // …
   <Route path="/about/" element={<About />} />
   ```

5. Add the URL to `public/sitemap.xml`.

That's it — Header, Footer, loading state, scroll-to-top and scroll
animations are applied automatically by `MainLayout`.

> Menu links already point to the planned URLs (`src/data/navigation.js`).
> Until a page exists, its link shows the "Under Construction" page (it names the page, e.g. "Google Ads is coming soon"). Where the live website
> already had a URL, the same path is reused so Google rankings carry over.

## Conventions

- **Global components** = only Header, Footer, Loading. Cards, buttons, etc.
  are written directly inside the section that uses them.
- **Buttons** use CSS classes: `btn btn-primary`, `btn btn-outline`, `btn btn-light`.
- **Section helpers**: `container-x` (page width), `section-y` (vertical spacing),
  `eyebrow`, `section-title`, `lead`.
- **Brand colors in Tailwind**: `bg-brand`, `text-brand-700`, `bg-brand-50`,
  `text-ink`, `text-charcoal`, `bg-soft`, `border-line`.
- **Scroll animation**: add `data-reveal` (or `data-reveal="left|right|scale"`)
  to any element. Optional delay: `style={{ '--d': '120ms' }}`.
- **Stats**: `<dl><div><dt>Label</dt><dd className="order-first">Value</dd></div></dl>`
  shows the value above the label.
- Custom CSS files are wrapped in `@layer components { … }` so Tailwind
  utilities can still override them.

## Images

> **Director photo:** the About page shows Himanshu Soni's initials, not a
> stock face. Add his real photo to `src/assets/images/about/` and swap it into
> `src/pages/About/components/DirectorSection.jsx`.

Hero, About and service photos are free Unsplash placeholders, listed in
`src/data/images.js` and served by Unsplash's image CDN (auto WebP/AVIF,
responsive sizes). Each photo sits on a brand-coloured background, so the
layout still looks right if a photo can't load.

To use your own photos: put them in `src/assets/images/home/`, import them
in the section, and use them in place of `photo(...)` / `photoSrcSet(...)`.
Keep the same `width`/`height` attributes to avoid layout shift.

## Connecting a backend later

- **Content**: sections read from `src/data/*.js`. Replace those imports with
  data fetched from your API/CMS using the same shape.
- **Contact form**: change only `src/services/leadService.js` (an example
  `fetch` call is in the file). Today it opens WhatsApp with the visitor's
  details filled in.

## Performance & SEO notes

- Every page is lazy-loaded (its code downloads only when visited).
- Fonts are self-hosted variable fonts; the two used above the fold are preloaded.
- The hero photo loads with high priority and responsive sizes; every other
  photo is lazy-loaded. The image CDN is preconnected in `index.html`.
- One `<h1>` per page; semantic `header / nav / main / section / article / footer`.
- `usePageSeo` sets title, description, canonical, Open Graph, Twitter and
  JSON-LD per page without duplicates.
- For the best SEO in production, pre-render pages to static HTML at build
  time (e.g. `vite-plugin-prerender`, or migrate routes to React Router's
  framework mode with pre-rendering) so crawlers get full HTML immediately.

## Hosting

This is a single-page app, so the server must send `index.html` for every
route. Included: `public/_redirects` (Netlify) and `vercel.json` (Vercel).
For Apache/Nginx, add the equivalent rewrite rule.
