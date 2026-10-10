/*
  CONTACT PAGE  (/contact/)
  ------------------------------------------------------------------
  Sets SEO and puts the sections in order. Text lives in
  src/data/contactContent.js (plus shared form data and FAQs from
  src/data/homeContent.js). Styling is Tailwind utility classes.
*/

import usePageSeo from '@/seo/usePageSeo';
import { pageSeo } from '@/seo/seoConfig';

import ContactHero from './components/ContactHero';
import ContactMain from './components/ContactMain';
import ContactOffices from './components/ContactOffices';
import ContactMap from './components/ContactMap';
import ContactFAQ from './components/ContactFAQ';

export default function Contact() {
  usePageSeo(pageSeo.contact);

  return (
    <>
      <ContactHero />
      <ContactMain />
      <ContactOffices />
      <ContactMap />
      <ContactFAQ />
    </>
  );
}
