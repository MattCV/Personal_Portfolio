'use client';

import { useState } from 'react';

const PROJECTS_PER_PAGE = 3;

const projects = [
  {
    name: 'KineticLab',
    subtitle: 'Interactive Performance Platform',
    role: 'FRONTEND APP',
    category: 'INTERACTIVE',
    status: 'IN PROGRESS',
    description:
      'An interactive training and performance platform for mouse-based motor precision (aim training) and typing agility. It prioritizes a minimal, fluid, low-latency interface to optimize user response.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    featured: true,
  },
  {
    name: 'Kontrox',
    subtitle: 'Personal Finance & Debt Management',
    role: 'MOBILE APP',
    category: 'FINTECH',
    status: 'CONCEPTUALIZATION',
    description:
      'A mobile app designed to streamline personal and household budgeting, track income and everyday expenses, and forecast debt repayments through a mobile-first experience.',
    stack: ['UI/UX Design', 'React Native', 'Mobile Architecture'],
  },
  {
    name: 'Dekache',
    subtitle: 'Operations Management System',
    role: 'WEB APP',
    status: 'COMPLETED',
    description:
      'A comprehensive operations system designed to digitize a fast-food business and replace inefficient manual processes. It centralizes real-time order tracking through a dynamic four-stage board (To Do, In Progress, Completed, and Delivered), smart inventory management with automated restocking alerts, and financial reports for daily closing and profitability analysis.',
    stack: ['Python', 'T-SQL (SQL Server)', 'Backend Logic', 'Database Management'],
  },
];

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const firstProjectIndex = currentPage * PROJECTS_PER_PAGE;
  const visibleProjects = projects.slice(firstProjectIndex, firstProjectIndex + PROJECTS_PER_PAGE);

  return (
    <section id="projects" className="bg-[#050505] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-end justify-between gap-4 sm:mb-12">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[#818cf8]">Selected work</p>
            <h2 className="text-2xl font-bold sm:text-3xl">Projects</h2>
          </div>
          <span className="hidden font-mono text-xs text-gray-500 sm:block">
            {String(firstProjectIndex + 1).padStart(2, '0')} — {String(Math.min(firstProjectIndex + PROJECTS_PER_PAGE, projects.length)).padStart(2, '0')}
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <article
              key={`${project.name}-${project.role}`}
              className={`group relative isolate flex min-h-[300px] flex-col overflow-hidden rounded-xl border border-[#25283a] bg-gradient-to-br from-[#151724] via-[#10111a] to-[#0a0a0d] p-5 transition-colors hover:border-[#818cf8]/60 sm:p-7 ${
                project.featured
                  ? 'md:col-span-2 lg:row-span-2 lg:min-h-[500px] lg:p-9'
                  : ''
              }`}
            >
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#818cf8]/10 blur-3xl transition group-hover:bg-[#818cf8]/20" />
                {project.featured && (
                  <div className="absolute inset-x-0 top-0 h-1/2 opacity-40">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_35%,rgba(129,140,248,0.12)_35.2%,transparent_35.6%,transparent_58%,rgba(129,140,248,0.1)_58.2%,transparent_58.6%)]" />
                    <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#818cf8]/20 sm:h-52 sm:w-52" />
                    <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#818cf8]/30 sm:h-36 sm:w-36" />
                    <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a5b4fc] shadow-[0_0_24px_8px_rgba(129,140,248,0.4)]" />
                  </div>
                )}
              </div>

              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[10px] tracking-[0.16em] text-gray-500">
                  {String(firstProjectIndex + index + 1).padStart(2, '0')}
                </span>
                <span
                  className={`rounded-full border px-2.5 py-1 font-mono text-[9px] tracking-[0.1em] ${
                    project.status === 'IN PROGRESS'
                      ? 'border-[#818cf8]/40 bg-[#818cf8]/10 text-[#a5b4fc]'
                      : project.status === 'CONCEPTUALIZATION'
                        ? 'border-amber-300/20 bg-amber-300/5 text-amber-200/80'
                        : 'border-emerald-300/20 bg-emerald-300/5 text-emerald-200/80'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className={`mt-auto ${project.featured ? 'pt-48 sm:pt-60' : 'pt-14'}`}>
                <div className="mb-3 flex flex-wrap items-center gap-2 font-mono text-[9px] tracking-[0.12em] text-gray-400">
                  <span className="border border-[#818cf8]/40 px-2 py-1 text-[#a5b4fc]">{project.role}</span>
                  {project.category && <span>{project.category}</span>}
                </div>
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {project.name}
                  <span className="ml-2 text-sm font-normal text-gray-400 sm:text-base">{project.subtitle}</span>
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-400">{project.description}</p>
                <ul aria-label="Technology stack" className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-gray-300"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="font-mono text-[10px] tracking-[0.12em] text-gray-500">
            PAGE {String(currentPage + 1).padStart(2, '0')} / {String(pageCount).padStart(2, '0')}
          </span>
          <div aria-label="Project pages" className="flex gap-2">
            <button
              type="button"
              aria-label="Previous projects"
              disabled={currentPage === 0 || pageCount <= 1}
              onClick={() => setCurrentPage((page) => Math.max(0, page - 1))}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-gray-300 transition hover:border-[#818cf8]/60 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-white/15 disabled:hover:text-gray-300"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path d="m14.5 5-7 7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next projects"
              disabled={currentPage >= pageCount - 1 || pageCount <= 1}
              onClick={() => setCurrentPage((page) => Math.min(pageCount - 1, page + 1))}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-gray-300 transition hover:border-[#818cf8]/60 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-white/15 disabled:hover:text-gray-300"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path d="m9.5 5 7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
