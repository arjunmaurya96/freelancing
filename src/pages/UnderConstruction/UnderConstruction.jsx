/*
  UNDER CONSTRUCTION  (catch-all route "*")
  ------------------------------------------------------------------
  Shown for every URL that doesn't have a page yet — menu links to
  services, industries, blog posts, case studies, etc.
  It names the page the visitor wanted (looked up from the menus and
  blog list) and offers ways to reach the team meanwhile.
  Marked noindex so search engines don't index placeholder pages.
*/

import { Link, useLocation } from 'react-router';
import usePageSeo from '@/seo/usePageSeo';
import { pageSeo } from '@/seo/seoConfig';
import { mainNav, footerNav, legalNav } from '@/data/navigation';
import { blog } from '@/data/homeContent';
import { siteConfig } from '@/data/siteConfig';
import Icon from '@/assets/icons/Icon';

/* path → readable page name, built from existing menus + blog titles */
const pageNames = new Map();
const addLinks = (links) => links.forEach((l) => l.to && pageNames.set(l.to, l.label));
mainNav.forEach((item) => (item.children ? addLinks(item.children) : addLinks([item])));
footerNav.forEach((group) => addLinks(group.links));
addLinks(legalNav);
blog.posts.forEach((p) => pageNames.set(p.to, p.title));

const withSlash = (path) => (path.endsWith('/') ? path : `${path}/`);

export default function UnderConstruction() {
  usePageSeo(pageSeo.underConstruction);
  const { pathname } = useLocation();
  const pageName = pageNames.get(withSlash(pathname)) || pageNames.get(pathname);

  return (
    <section className="relative isolate overflow-hidden bg-ink-900 -mt-[76px] pt-[76px] lg:-mt-[80px] lg:pt-[80px]" aria-labelledby="uc-title">
      {/* Decorative background */}
      <div className="absolute -right-32 -top-32 -z-10 size-[30rem] rounded-full bg-brand/30 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-32 -z-10 size-[26rem] rounded-full bg-[#34516a]/70 blur-3xl" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(60%_60%_at_50%_40%,#000,transparent_80%)]"
        aria-hidden="true"
      />

      <div className="container-x flex min-h-[78vh] flex-col items-center justify-center py-20 text-center">
        {/* Animated build icon: gear + progress bar */}
        <div className="relative mb-10 grid size-28 place-items-center motion-safe:animate-[fade-up_0.8s_cubic-bezier(0.2,0.7,0.2,1)_both]" aria-hidden="true">
          <span className="absolute inset-0 rounded-full border-2 border-dashed border-brand/60 motion-safe:animate-[spin_14s_linear_infinite]" />
          <span className="grid size-20 place-items-center rounded-full bg-brand text-white shadow-[0_20px_50px_-15px_rgb(249_76_48/0.9)]">
            <svg viewBox="0 0 24 24" className="size-10 motion-safe:animate-[spin_6s_linear_infinite]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
            </svg>
          </span>
        </div>

        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-sm font-semibold text-white">
          <span className="size-2 rounded-full bg-brand" aria-hidden="true" />
          Under Construction
        </p>

        <h1
          id="uc-title"
          className={`mt-6 max-w-3xl font-extrabold leading-[1.05] tracking-[-0.035em] !text-white ${
            pageName && pageName.length > 30 ? 'text-[clamp(1.8rem,4.2vw,3rem)]' : 'text-[clamp(2.2rem,6vw,4.25rem)]'
          }`}
        >
          {pageName ? (
            <>
              <span className="text-brand">{pageName}</span> is coming soon
            </>
          ) : (
            <>
              This page is <span className="text-brand">coming soon</span>
            </>
          )}
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
          We’re building this page right now. In the meantime, our team is happy to help you directly.
        </p>

        {/* Progress bar */}
        <div className="mt-10 w-full max-w-sm" aria-hidden="true">
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-brand to-[#ff8a6b] motion-safe:animate-[uc-progress_2.4s_ease-in-out_infinite_alternate]" />
          </div>
        </div>

        <div className="mt-10 flex w-full flex-col gap-3 xs:w-auto xs:flex-row xs:flex-wrap xs:justify-center">
          <Link to="/" className="btn btn-primary">
            Go to homepage
          </Link>
          <Link to="/contact/" className="btn border-[1.5px] border-white/30 text-white hover:border-white hover:bg-white hover:text-ink">
            Contact Us
          </Link>
          <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn bg-[#1fa855] text-white hover:bg-[#178a45]">
            <Icon name="whatsapp" className="size-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
