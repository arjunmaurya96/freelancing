/*
  HOME PAGE
  ------------------------------------------------------------------
  This file only sets SEO and puts the sections in order.
  Each section lives in ./components and reads its text from
  src/data/homeContent.js (and aboutContent.js where noted).
  Styling is Tailwind classes inside the sections; Home.css holds the
  hero ribbons, glass cards, honeycomb pattern and section motion.
*/

import usePageSeo from '@/seo/usePageSeo';
import { pageSeo } from '@/seo/seoConfig';

import HeroSection from './components/HeroSection';
import PartnersStrip from './components/PartnersStrip';
import AboutSection from './components/AboutSection';
import ClientsBand from './components/ClientsBand';
import QuickConnectSection from './components/QuickConnectSection';
import ResultsArches from './components/ResultsArches';
import ServicesGrid from './components/ServicesGrid';
import CoreStrategies from './components/CoreStrategies';
import CaseStudiesSection from './components/CaseStudiesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import FAQSection from './components/FAQSection';
import CommunityCTA from './components/CommunityCTA';
import ContactSection from './components/ContactSection';

import './Home.css';

export default function Home() {
  usePageSeo(pageSeo.home);

  return (
    <>
      <HeroSection />
      <PartnersStrip />
      <AboutSection />
      <ClientsBand />
      <QuickConnectSection />
      <ResultsArches />
      <ServicesGrid />
      <CoreStrategies />
      <CaseStudiesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <CommunityCTA />
      <ContactSection />
    </>
  );
}
