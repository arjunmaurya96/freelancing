/*
  ABOUT PAGE  (/about/)
  ------------------------------------------------------------------
  Sets SEO and puts the sections in order. Text lives in
  src/data/aboutContent.js (plus reviews, case studies and the contact
  form from src/data/homeContent.js). Styling is Tailwind classes inside
  each section.
*/

import usePageSeo from '@/seo/usePageSeo';
import { pageSeo } from '@/seo/seoConfig';

import AboutHero from './components/AboutHero';
import WhoWeAre from './components/WhoWeAre';
import AboutStats from './components/AboutStats';
import WhatWeDo from './components/WhatWeDo';
import HowWeWork from './components/HowWeWork';
import DirectorSection from './components/DirectorSection';
import AboutWork from './components/AboutWork';
import AboutClients from './components/AboutClients';
import AboutReviews from './components/AboutReviews';
import AboutCTA from './components/AboutCTA';
import ContactSection from '@/pages/Home/components/ContactSection';

export default function About() {
  usePageSeo(pageSeo.about);

  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <AboutStats />
      <WhatWeDo />
      <HowWeWork />
      <DirectorSection />
      <AboutWork />
      <AboutClients />
      <AboutReviews />
      <AboutCTA />
      <ContactSection />
    </>
  );
}
