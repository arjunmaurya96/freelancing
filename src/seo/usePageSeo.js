/*
  usePageSeo(config)
  ------------------------------------------------------------------
  Writes a page's <title>, meta description, canonical URL, Open Graph,
  Twitter and JSON-LD tags into <head>. Existing tags are updated in
  place, so there are never duplicates when navigating between pages.

  Usage (top of any page component):
    usePageSeo(pageSeo.home);
*/

import { useEffect } from 'react';
import { defaults } from './seoConfig';

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

const absolute = (path) => new URL(path, defaults.siteUrl).href;

export default function usePageSeo(config) {
  useEffect(() => {
    if (!config) return;

    const title = config.title;
    const description = config.description;
    const url = absolute(config.path || '/');
    const image = absolute(config.ogImage || defaults.ogImage);

    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', config.noindex ? 'noindex, nofollow' : 'index, follow');
    upsertLink('canonical', url);

    // Open Graph (Facebook, LinkedIn, WhatsApp previews)
    upsertMeta('property', 'og:site_name', defaults.siteName);
    upsertMeta('property', 'og:locale', defaults.locale);
    upsertMeta('property', 'og:type', config.ogType || defaults.ogType);
    upsertMeta('property', 'og:title', config.ogTitle || title);
    upsertMeta('property', 'og:description', config.ogDescription || description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', image);

    // Twitter / X
    upsertMeta('name', 'twitter:card', defaults.twitterCard);
    upsertMeta('name', 'twitter:title', config.ogTitle || title);
    upsertMeta('name', 'twitter:description', config.ogDescription || description);
    upsertMeta('name', 'twitter:image', image);

    // Structured data — one script per page, replaced on navigation.
    const existing = document.getElementById('page-schema');
    if (existing) existing.remove();
    if (config.schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-schema';
      script.textContent = JSON.stringify(config.schema);
      document.head.appendChild(script);
    }
  }, [config]);
}
