'use client';

import { useLanguage } from './LanguageProvider';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/MattCV?tab=repositories',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.74 2.48 3.4 1.75.1-.73.4-1.23.72-1.51-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.16-2.99-.12-.29-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.66.11 2.95.72.78 1.16 1.77 1.16 2.99 0 4.27-2.61 5.21-5.1 5.48.4.35.76 1.02.76 2.06v3.28c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mateocorralesvinasco/?isSelfProfile=true',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.34H4.96V9.07h2.97v9.27ZM6.45 7.8a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm11.89 10.54h-2.97v-4.51c0-1.08-.02-2.47-1.51-2.47-1.52 0-1.75 1.18-1.75 2.39v4.59H9.14V9.07h2.85v1.27h.04c.4-.73 1.37-1.51 2.82-1.51 3.01 0 3.57 1.98 3.57 4.56v4.95h-.08Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { copy } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-[#050505] px-5 text-white sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 py-6 sm:flex-row">
        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              aria-label={label}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition duration-200 hover:-translate-y-0.5 hover:border-[#818cf8]/60 hover:bg-[#818cf8]/10 hover:text-[#a5adff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#818cf8]"
              href={href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="h-[18px] w-[18px] transition-transform duration-200 group-hover:scale-110">
                {icon}
              </span>
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-gray-500">
          {copy.footer.inspired}{' '}
          <a
            className="text-gray-400 underline decoration-white/20 underline-offset-4 transition-colors hover:text-[#a5adff] hover:decoration-[#818cf8]"
            href="https://vercel.com/blog/building-an-interactive-3d-event-badge-with-react-three-fiber"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vercel
          </a>
        </p>
      </div>

      <div className="mx-auto max-w-6xl border-t border-white/[0.07] py-4 text-center text-xs text-gray-500">
        © 2026 Mateo Corrales Vinasco. {copy.footer.rights}
      </div>
    </footer>
  );
}
