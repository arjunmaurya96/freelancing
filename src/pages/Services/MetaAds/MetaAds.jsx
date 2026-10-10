/*
  META ADS SERVICE PAGE  (/meta-ads-marketing-agency/)
  ------------------------------------------------------------------
  Content from the live Conversions "Meta Ads Agency in Delhi" page; layout
  follows the zenerom service-page reference (no team section).
  Each section keeps its own text inside its component file in ./components,
  so to edit a section's copy, open that one file.
*/

import usePageSeo from '@/seo/usePageSeo';
import { pageSeo } from '@/seo/seoConfig';

import MetaHero from './components/MetaHero';
import MetaWhyChoose from './components/MetaWhyChoose';
import MetaServices from './components/MetaServices';
import MetaWhyInvest from './components/MetaWhyInvest';
import MetaProcess from './components/MetaProcess';
import MetaIndustries from './components/MetaIndustries';
import MetaFAQ from './components/MetaFAQ';
import MetaCTA from './components/MetaCTA';
import MetaLocations from './components/MetaLocations';
import ContactSection from '@/pages/Home/components/ContactSection';

export default function MetaAds() {
  usePageSeo(pageSeo.metaAds);

  return (
    <>
      <MetaHero />
      <MetaWhyChoose />
      <MetaServices />
      <MetaWhyInvest />
      <MetaProcess />
      <MetaIndustries />
      <MetaFAQ />
      <MetaCTA />
      <MetaLocations />
      <div id="meta-contact" className="scroll-mt-20">
        <ContactSection defaultRequirement="Meta Ads" />
      </div>
    </>
  );
}
