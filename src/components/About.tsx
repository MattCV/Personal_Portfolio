'use client';

import { useLanguage } from './LanguageProvider';

export default function About() {
  const { copy } = useLanguage();

  return (
    <section id="about" className="bg-[#050505] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 border-l-4 border-[#818cf8] pl-4 text-2xl font-bold sm:mb-12 sm:text-3xl">{copy.about.title}</h2>
        
        {/* About Me Description */}
        <p className="mb-10 max-w-4xl text-sm leading-relaxed text-gray-400 sm:mb-16 sm:text-base">
          {copy.about.description}
        </p>
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="rounded-xl border border-[#1f2937] bg-[#0a0a0a] p-5 sm:p-8">
            <h3 className="mb-5 text-xl font-semibold text-[#818cf8] sm:mb-6">{copy.about.experience}</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white">{copy.about.warehouseRole}</h4>
                <p className="text-[#818cf8] text-sm font-mono mb-2">Cueros Vélez</p>
                <p className="text-gray-500 text-xs mb-3">{copy.about.warehouseDate}</p>
                <p className="text-gray-400 leading-relaxed">
                  {copy.about.warehouseDescription}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white">{copy.about.holidayRole}</h4>
                <p className="text-[#818cf8] text-sm font-mono mb-2">Subsecretaría de Espacio Público</p>
                <p className="text-gray-500 text-xs mb-3">{copy.about.holidayDate}</p>
                <p className="text-gray-400 leading-relaxed">
                  {copy.about.holidayDescription}
                </p>
              </div>
            </div>
          </div>
          {/* Studies */}
          <div className="flex min-w-0 flex-col gap-6 sm:gap-8">
            <h3 className="text-xl font-semibold text-[#818cf8]">{copy.about.studies}</h3>
            <div className="space-y-8 pl-6 sm:pl-8">
              {/* Software Engineering */}
              <div className="relative">
                <div aria-hidden="true" className="absolute -bottom-[43px] -left-6 top-2 w-px bg-gray-800 sm:-left-8" />
                <div aria-hidden="true" className="absolute -left-[29px] top-[3px] h-2.5 w-2.5 rounded-full bg-[#818cf8] sm:-left-[37px]" />
                <span className="text-[#818cf8] text-xs font-mono">2022 – {copy.about.present}</span>
                <h4 className="text-lg font-bold">{copy.about.degree}</h4>
                <p className="text-gray-400 text-sm">Institución Universitaria Pascual Bravo | {copy.about.semester}</p>
                <p className="text-gray-400 text-sm mt-2">{copy.about.degreeDescription}</p>
              </div>
              
              {/* Technical High School Degree */}
              <div className="relative">
                <div aria-hidden="true" className="absolute -left-[29px] top-[6px] h-2.5 w-2.5 rounded-full bg-gray-700 sm:-left-[37px]" />
                <span className="text-gray-500 text-xs font-mono">{copy.about.completed}</span>
                <h4 className="text-lg font-bold leading-snug">{copy.about.highSchool}</h4>
                <p className="text-gray-400 text-sm">Institución Educativa Concejo de Medellín</p>
                <p className="text-gray-400 text-sm mt-2">{copy.about.highSchoolDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}