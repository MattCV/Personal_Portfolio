'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navigationLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About Me', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const updateScrollState = () => {
      const scrollY = window.scrollY;
      setHasScrolled(scrollY > 20);

      if (scrollY <= 20) {
        setActiveSection('home');
      }
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  useEffect(() => {
    const sections = navigationLinks
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed inset-x-0 top-0 z-50 border-b border-transparent transition-[background-color,backdrop-filter] duration-300 ${
        hasScrolled ? 'bg-[#0f1115]/65 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-x-4 px-5 py-1 sm:px-8 md:h-16 md:px-12 lg:px-16">
        <Link href="#home" aria-label="Go to home" className="h-12 w-12 shrink-0 sm:h-16 sm:w-16">
          <Image
            src="/Logo_portfolio.svg"
            alt="Personal Shark Logo"
            width={64}
            height={64}
            className="h-full w-full object-contain"
            priority
          />
        </Link>

        <div className="col-span-3 row-start-2 flex items-center justify-center gap-6 pb-1 text-xs font-medium text-gray-400 sm:gap-8 sm:text-sm md:col-span-1 md:col-start-2 md:row-start-1 md:pb-0 lg:gap-10">
          {navigationLinks.map(({ label, id }) => {
            const isActive = activeSection === id;

            return (
              <Link
                key={id}
                href={`#${id}`}
                aria-current={isActive ? 'location' : undefined}
                className={`relative py-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-full after:-translate-x-1/2 after:bg-white/75 after:transition-transform after:duration-300 after:content-[''] hover:text-white hover:after:scale-x-100 focus-visible:text-white focus-visible:outline-none focus-visible:after:scale-x-100 ${
                  isActive ? 'text-white after:scale-x-100' : 'after:scale-x-0'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center justify-self-end gap-3 text-[10px] sm:gap-5 sm:text-xs">
          <span
            aria-label="Available languages: English and Spanish"
            className="whitespace-nowrap font-medium tracking-wide text-gray-400"
          >
            <span className="text-white">EN</span>
            <span className="px-1.5 text-gray-600">/</span>
            <span>ES</span>
          </span>
          <span className="flex items-center gap-1.5 whitespace-nowrap font-medium tracking-[0.08em] text-emerald-400 sm:gap-2">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-400 sm:h-2 sm:w-2" />
            AVAILABLE
          </span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300/20 to-transparent"
      />
    </nav>
  );
}
