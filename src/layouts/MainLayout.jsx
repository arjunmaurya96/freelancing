/*
  MAIN LAYOUT
  ------------------------------------------------------------------
  Wraps every page with the global TopBar, Header and Footer.
  <Outlet /> is where the current page renders.

  Also handles, for all pages:
  - scroll to top on page change (or to #section when the URL has a hash)
  - scroll-reveal animations (useReveal)
*/

import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import TopBar from '@/components/TopBar/TopBar';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Loading from '@/components/Loading/Loading';
import useReveal from '@/hooks/useReveal';

function useScrollOnNavigate() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a frame so the target section exists, then scroll to it.
      requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      });
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
}

export default function MainLayout() {
  useScrollOnNavigate();
  useReveal();

  return (
    <>
      <TopBar />
      <Header />
      <main id="main">
        {/* Pages are lazy-loaded; Loading shows while a page's code downloads. */}
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
