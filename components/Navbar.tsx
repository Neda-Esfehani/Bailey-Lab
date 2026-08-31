'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { contactNavItem, navItems, site } from '@/data/site';
import { MobileMenu } from './MobileMenu';

/**
 * Sticky, responsive primary navigation.
 * Gains a hairline border and slight background blur once the page scrolls.
 */
export function Navbar() {
  const pathname = usePathname() ?? '/';
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'border-b border-line shadow-[0_1px_12px_rgba(22,25,29,0.05)]' : 'border-b border-transparent'
      }`}
    >
      <nav aria-label="Primary" className="container-page">
        <div className="flex h-[var(--nav-height)] items-center justify-between gap-6">
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-[-0.01em] text-ink transition-colors duration-200 hover:text-accent-700"
          >
            {site.name}
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`relative py-2 text-sm font-medium transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent-600 after:transition-transform after:duration-300 after:ease-subtle hover:after:scale-x-100 ${
                    isActive(item.href)
                      ? 'text-accent-700 after:scale-x-100'
                      : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href={contactNavItem.href}
              className="hidden rounded-full bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-700 lg:inline-flex"
            >
              {contactNavItem.label}
            </Link>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink transition-colors duration-200 hover:bg-canvas lg:hidden"
            >
              <span className="sr-only">
                {open ? 'Close main menu' : 'Open main menu'}
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              >
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        currentPath={pathname}
        toggleRef={toggleRef}
      />
    </header>
  );
}
