/*
  ALL ROUTES LIVE HERE
  ------------------------------------------------------------------
  To add a page (example: Blog):

    1. Create   src/pages/Blog/Blog.jsx  (+ components/)
    2. Add the lazy import:
         const Blog = lazy(() => import('@/pages/Blog/Blog'));
    3. Add the route inside <MainLayout>:
         <Route path="/blog/" element={<Blog />} />
    4. Add its SEO entry in src/seo/seoConfig.js

  Each page is lazy-loaded, so its code only downloads when visited —
  the site stays fast no matter how many pages are added.
*/

import { lazy } from 'react';
import { Routes, Route } from 'react-router';
import MainLayout from '@/layouts/MainLayout';

const Home = lazy(() => import('@/pages/Home/Home'));
const About = lazy(() => import('@/pages/About/About'));
const Contact = lazy(() => import('@/pages/Contact/Contact'));
const MetaAds = lazy(() => import('@/pages/Services/MetaAds/MetaAds'));
const UnderConstruction = lazy(() => import('@/pages/UnderConstruction/UnderConstruction'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/meta-ads-marketing-agency/" element={<MetaAds />} />
        {/* Old live-site URL for the same page */}
        <Route path="/performance-marketing/meta-ads-agency-delhi/" element={<MetaAds />} />

        {/* Add new pages above this line.
            Any other URL shows the "Under Construction" page. */}
        <Route path="*" element={<UnderConstruction />} />
      </Route>
    </Routes>
  );
}
