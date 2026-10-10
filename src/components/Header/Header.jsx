/*
  HEADER (global)
  ------------------------------------------------------------------
  At the top of the page: a full-width frosted bar with a brand-gradient
  hairline. Once you scroll it turns into the floating rounded glass bar
  (the original header look).
  - Menu items come from src/data/navigation.js.
  - Desktop (≥1280px): a soft pill glides behind whichever menu item you
    point at; groups open a two-part mega panel (navy intro + link grid).
  - Below 1280px: hamburger → drawer that slides in from the right with
    expandable groups and a contact card at the bottom.
  - A thin orange line along the bottom edge shows reading progress.
*/

import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { mainNav, headerCta } from '@/data/navigation';
import { siteConfig } from '@/data/siteConfig';
import Icon from '@/assets/icons/Icon';
import logo from '@/assets/logos/conversions-logo.webp';
import './Header.css';

// Icon shown for each dropdown group (and for plain links in the drawer).
const groupIcon = { SEO: 'search', Paid: 'zap', Ecommerce: 'cart', Industries: 'layers' };

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // desktop mega panel
  const [openGroup, setOpenGroup] = useState(null); // drawer accordion
  const [pill, setPill] = useState({ x: 0, w: 0, visible: false });
  const navRef = useRef(null);
  const closeTimer = useRef(null);
  const { pathname, hash } = useLocation();

  /* ---------- Scroll state ---------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ---------- Close everything on navigation ---------- */
  useEffect(() => {
    setDrawerOpen(false);
    setOpenDropdown(null);
    setOpenGroup(null);
  }, [pathname, hash]);

  /* ---------- Lock page scroll while the drawer is open ---------- */
  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = drawerOpen ? 'hidden' : '';
    return () => {
      root.style.overflow = '';
    };
  }, [drawerOpen]);

  /* ---------- Escape / outside click ---------- */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setDrawerOpen(false);
      }
    };
    const onDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenDropdown(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, []);

  /* ---------- Gliding hover pill (desktop) ---------- */
  const movePill = useCallback((el) => {
    const nav = navRef.current;
    if (!nav || !el) return;
    const a = nav.getBoundingClientRect();
    const b = el.getBoundingClientRect();
    setPill({ x: b.left - a.left, w: b.width, visible: true });
  }, []);
  const hidePill = () => setPill((p) => ({ ...p, visible: false }));

  // Small delay before closing so the pointer can travel into the panel.
  const openMenu = (label) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };
  const closeMenuSoon = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const isGroupActive = (item) => item.children?.some((c) => c.to === pathname);

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a href="#main" className="sr-only-focusable skip-link">
          Skip to content
        </a>

        <div className="header-inner">
          {/* Logo */}
          <Link to="/" className="header-logo" aria-label="Conversions home">
            <img src={logo} alt="Conversions — a unit of Dioptre Media Pvt. Ltd." width="300" height="103" fetchPriority="high" />
          </Link>

          {/* Desktop navigation */}
          <nav ref={navRef} aria-label="Main" className="desktop-nav" onMouseLeave={hidePill}>
            <span
              className="nav-pill"
              aria-hidden="true"
              style={{ transform: `translateX(${pill.x}px)`, width: pill.w, opacity: pill.visible ? 1 : 0 }}
            />
            <ul className="flex items-center">
              {mainNav.map((item, idx) =>
                item.children ? (
                  <li
                    key={item.label}
                    data-align={idx < mainNav.length / 2 ? 'start' : 'end'}
                    className="relative"
                    onMouseEnter={(e) => {
                      movePill(e.currentTarget.firstElementChild);
                      openMenu(item.label);
                    }}
                    onMouseLeave={closeMenuSoon}
                  >
                    <button
                      type="button"
                      className={`nav-link ${isGroupActive(item) ? 'is-active' : ''}`}
                      aria-expanded={openDropdown === item.label}
                      aria-controls={`menu-${item.label}`}
                      onFocus={(e) => movePill(e.currentTarget)}
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <Icon name="chevronDown" className="nav-chevron size-3.5" strokeWidth={2.4} />
                    </button>

                    {/* Mega panel */}
                    <div className="mega" id={`menu-${item.label}`} data-open={openDropdown === item.label}>
                      <div className="mega-card">
                        <div className="mega-intro">
                          <span className="mega-intro-icon">
                            <Icon name={groupIcon[item.label] || 'arrow'} className="size-5" />
                          </span>
                          <p className="mt-4 font-display text-lg font-semibold text-white">{item.label}</p>
                          <p className="mt-1 text-sm text-white/70">{item.children.length} services</p>
                          <a href={siteConfig.phoneHref} className="mega-intro-call">
                            <Icon name="phone" className="size-4" />
                            {siteConfig.phone}
                          </a>
                        </div>
                        <ul className={`mega-links ${item.children.length > 4 ? 'sm:grid-cols-2' : ''}`}>
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <NavLink to={child.to} className="mega-link">
                                <span className="mega-link-dot" aria-hidden="true" />
                                {child.label}
                                <Icon name="arrowUpRight" className="mega-link-arrow size-4" />
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={item.label} onMouseEnter={(e) => movePill(e.currentTarget.firstElementChild)}>
                    <NavLink
                      to={item.to}
                      end
                      onFocus={(e) => movePill(e.currentTarget)}
                      className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a href={siteConfig.phoneHref} className="header-phone" aria-label={`Call ${siteConfig.phone}`}>
              <span className="header-phone-icon">
                <Icon name="phone" className="size-4" />
              </span>
              <span className="hidden flex-col leading-tight 2xl:flex">
                <span className="text-[11px] font-medium text-muted">Call us</span>
                <span className="text-sm font-semibold text-navy">{siteConfig.phone}</span>
              </span>
            </a>
            <Link to={headerCta.to} className="header-cta">
              {headerCta.label}
              <Icon name="arrow" className="header-cta-arrow size-4" strokeWidth={2.4} />
            </Link>
            <button
              type="button"
              className="menu-btn"
              aria-expanded={drawerOpen}
              aria-controls="mobile-drawer"
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
            >
              <span className="menu-btn-lines" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
          <span className="scroll-progress" aria-hidden="true" />
        </div>
      </header>

      {/* ---------- Drawer (below 1280px) — outside <header> so it isn't clipped ---------- */}
      <div className="drawer-root" data-open={drawerOpen} inert={!drawerOpen}>
        <button type="button" className="drawer-backdrop" aria-label="Close menu" tabIndex={-1} onClick={() => setDrawerOpen(false)} />
        <aside id="mobile-drawer" className="drawer" aria-label="Menu">
          <div className="drawer-head">
            <Link to="/" aria-label="Conversions home" onClick={() => setDrawerOpen(false)}>
              <img src={logo} alt="Conversions" width="300" height="103" className="h-10 w-auto" />
            </Link>
            <button type="button" className="drawer-close" aria-label="Close menu" onClick={() => setDrawerOpen(false)}>
              <Icon name="close" className="size-5" strokeWidth={2.2} />
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="drawer-body"
            onClick={(e) => {
              if (e.target.closest('a')) setDrawerOpen(false);
            }}
          >
            <ul className="space-y-1">
              {mainNav.map((item, i) =>
                item.children ? (
                  <li key={item.label} className="drawer-item" style={{ '--i': i }}>
                    <button
                      type="button"
                      className={`drawer-link ${isGroupActive(item) ? 'is-active' : ''}`}
                      aria-expanded={openGroup === item.label}
                      onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                    >
                      <span className="drawer-icon">
                        <Icon name={groupIcon[item.label]} className="size-[18px]" />
                      </span>
                      <span className="flex-1 text-left">{item.label}</span>
                      <Icon name="chevronDown" className="drawer-chevron size-5" strokeWidth={2} />
                    </button>
                    <div className="drawer-sub" data-open={openGroup === item.label} inert={openGroup !== item.label}>
                      <ul className="overflow-hidden">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <NavLink to={child.to} className="drawer-sublink">
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={item.label} className="drawer-item" style={{ '--i': i }}>
                    <NavLink to={item.to} end className={({ isActive }) => `drawer-link ${isActive ? 'is-active' : ''}`}>
                      <span className="drawer-icon">
                        <Icon name="arrowUpRight" className="size-[18px]" />
                      </span>
                      <span className="flex-1">{item.label}</span>
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="drawer-foot">
            <div className="grid grid-cols-3 gap-2">
              <a href={siteConfig.phoneHref} className="drawer-quick">
                <Icon name="phone" className="size-5" />
                Call
              </a>
              <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="drawer-quick">
                <Icon name="whatsapp" className="size-5" />
                WhatsApp
              </a>
              <a href={`mailto:${siteConfig.email}`} className="drawer-quick">
                <Icon name="mail" className="size-5" />
                Email
              </a>
            </div>
            <Link to={headerCta.to} className="header-cta mt-3 w-full justify-center !py-3.5" onClick={() => setDrawerOpen(false)}>
              {headerCta.label}
              <Icon name="arrow" className="header-cta-arrow size-4" strokeWidth={2.4} />
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
