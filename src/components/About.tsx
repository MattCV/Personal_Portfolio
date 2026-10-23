'use client';

export default function About() {
  return (
    <section id="about" className="bg-[#050505] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 border-l-4 border-[#818cf8] pl-4 text-2xl font-bold sm:mb-12 sm:text-3xl">About Me</h2>
        
        {/* About Me Description */}
        <p className="mb-10 max-w-4xl text-sm leading-relaxed text-gray-400 sm:mb-16 sm:text-base">
          Tenth-semester Software Engineering student at Institución Universitaria Pascual Bravo, with a professional focus oriented towards Full-Stack development and Data Analysis. Highly structured, autonomous, and goal-driven, combining solid front-end expertise (React, Next.js, TypeScript, Tailwind) with analytical skills in databases and Python. Passionate about transforming real world problems into clean, scalable digital solutions while applying agile methodologies and rigorous time management. Currently seeking a professional internship opportunity (Period 2027-1).
        </p>
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="rounded-xl border border-[#1f2937] bg-[#0a0a0a] p-5 sm:p-8">
            <h3 className="mb-5 text-xl font-semibold text-[#818cf8] sm:mb-6">Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white">Warehouse Assistant</h4>
                <p className="text-[#818cf8] text-sm font-mono mb-2">Cueros Vélez</p>
                <p className="text-gray-500 text-xs mb-3">Dec 2025 – Jan 2026</p>
                <p className="text-gray-400 leading-relaxed">
                  Managed inventory control, receiving, sorting, and dispatching of goods, ensuring accuracy and organization across logistics workflows during the high-demand holiday season. Strengthened adaptability, time management under pressure, and cross-functional collaboration.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Holiday Plan Assistant</h4>
                <p className="text-[#818cf8] text-sm font-mono mb-2">Subsecretaría de Espacio Público</p>
                <p className="text-gray-500 text-xs mb-3">Dec 2024 – Jan 2025</p>
                <p className="text-gray-400 leading-relaxed">
                  Regulated and monitored commercial activities in high-traffic urban areas, ensuring compliance with municipal regulations during peak seasonal periods. Strengthened assertive communication, patience, and conflict-resolution skills in complex, high-demand public environments.
                </p>
              </div>
            </div>
          </div>
          {/* Studies */}
          <div className="flex min-w-0 flex-col gap-6 sm:gap-8">
            <h3 className="text-xl font-semibold text-[#818cf8]">Studies</h3>
            <div className="space-y-8 pl-6 sm:pl-8">
              {/* Software Engineering */}
              <div className="relative">
                <div aria-hidden="true" className="absolute -bottom-[43px] -left-6 top-2 w-px bg-gray-800 sm:-left-8" />
                <div aria-hidden="true" className="absolute -left-[29px] top-[3px] h-2.5 w-2.5 rounded-full bg-[#818cf8] sm:-left-[37px]" />
                <span className="text-[#818cf8] text-xs font-mono">2022 – PRESENT</span>
                <h4 className="text-lg font-bold">Software Engineering</h4>
                <p className="text-gray-400 text-sm">Institución Universitaria Pascual Bravo | 10th semester</p>
                <p className="text-gray-400 text-sm mt-2">Focus on full-stack web development, data analysis, and software architecture.</p>
              </div>
              
              {/* Technical High School Degree */}
              <div className="relative">
                <div aria-hidden="true" className="absolute -left-[29px] top-[6px] h-2.5 w-2.5 rounded-full bg-gray-700 sm:-left-[37px]" />
                <span className="text-gray-500 text-xs font-mono">Completed 2021</span>
                <h4 className="text-lg font-bold leading-snug">Technical High School Degree in Informatics</h4>
                <p className="text-gray-400 text-sm">Institución Educativa Concejo de Medellín</p>
                <p className="text-gray-400 text-sm mt-2">Technical program in partnership with I.U. Pascual Bravo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}