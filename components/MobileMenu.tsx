'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { contactNavItem, navItems, site } from '@/data/site';

/**
 * Accessible slide-down mobile navigation.
 *
 * - Rendered inside the <nav> landmark, controlled by the Navbar's button.
 * - Closes on Escape and on route selection.
 * - Traps focus while open and returns focus to the toggle on close.
 * - Hidden from the accessibility tree (and from tab order) when closed.
 */
export function MobileMenu({
  open,
  onClose,
  currentPath,
  toggleRef,
}: {
  open: boolean;
  onClose: () => void;
  currentPath: string;
  toggleRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose, toggleRef]);

  return (
    <div
      id="mobile-menu"
      ref={panelRef}
      hidden={!open}
      className="border-t border-line bg-paper lg:hidden"
    >
      <ul className="container-page flex flex-col py-4">
        {navItems.map((item) => {
          const active =
            item.href === '/' ? currentPath === '/' : currentPath.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                aria-current={active ? 'page' : undefined}
                className={`block rounded-lg px-2 py-3 text-base font-medium transition-colors duration-200 ${
                  active ? 'text-accent-700' : 'text-ink hover:text-accent-700'
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
        <li className="mt-3 border-t border-line pt-4">
          <Link
            href={contactNavItem.href}
            onClick={onClose}
            className="block rounded-full bg-accent-600 px-6 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-700"
          >
            {contactNavItem.label} the {site.name}
          </Link>
        </li>
      </ul>
    </div>
  );
}
