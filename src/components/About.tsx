'use client';

export default function About() {
  return (
    <section id="about" className="bg-[#050505] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 border-l-4 border-[#818cf8] pl-4 text-2xl font-bold sm:mb-12 sm:text-3xl">About Me</h2>
        
        {/* About Me Description */}
        <p className="mb-10 max-w-4xl text-sm leading-relaxed text-gray-400 sm:mb-16 sm:text-base">
          Software Engineering student in my ninth semester with a strong focus on analysis, organization, and continuous improvement. I have a keen interest in data analysis and database management, areas I have explored independently, including foundational knowledge in Oracle. I am passionate about structuring efficient solutions, from project planning to technical execution. I am a proactive collaborator who enjoys teamwork, adapting to new challenges, and delivering creative solutions with attention to detail.
        </p>
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="rounded-xl border border-[#1f2937] bg-[#0a0a0a] p-5 sm:p-8">
            <h3 className="mb-5 text-xl font-semibold text-[#818cf8] sm:mb-6">Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white">Public Space Assistant</h4>
                <p className="text-[#818cf8] text-sm font-mono mb-2">Subsecretaría de Espacio Público</p>
                <p className="text-gray-500 text-xs mb-3">Dec 2024 – Jan 2025</p>
                <p className="text-gray-400 leading-relaxed">
                  Operational management and compliance control in high-demand environments during peak season. Developed key skills in adaptability, assertive communication, and problem-solving under pressure, ensuring regulatory compliance within a dynamic and collaborative team setting.
                </p>
              </div>
            </div>
          </div>
          {/* Studies */}
          <div className="flex min-w-0 flex-col gap-6 sm:gap-8">
            <h3 className="text-xl font-semibold text-[#818cf8]">Studies</h3>
            <div className="relative space-y-8 border-l border-gray-800 pl-6 sm:pl-8">
              {/* Software Engineering */}
              <div>
                <div className="absolute -left-1.25 top-2 w-2.5 h-2.5 rounded-full bg-[#818cf8]" />
                <span className="text-[#818cf8] text-xs font-mono">2022 - PRESENT</span>
                <h4 className="text-lg font-bold">Software Engineering</h4>
                <p className="text-gray-400 text-sm">Institución Universitaria Pascual Bravo | 9th semester</p>
                <p className="text-gray-400 text-sm mt-2">Focus on web development, databases, and software architecture.</p>
              </div>
              
              {/* Technical High School Degree */}
              <div>
                <div className="absolute -left-1.25 bottom-0 w-2.5 h-2.5 rounded-full bg-gray-700" />
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