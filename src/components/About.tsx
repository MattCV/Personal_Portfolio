'use client';

export default function About() {
  return (
    <section id="about" className="py-24 px-16 bg-[#050505] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-[#818cf8] pl-4">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-[#0a0a0a] border border-[#1f2937] p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-[#818cf8]">Experience</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              With a foundation in rigorous academic study and hands-on freelance projects, I&apos;ve developed a keen eye for architectural patterns and clean code. My approach blends the aesthetic sensibilities of modern design with the uncompromising logic of robust backend systems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I specialize in building responsive, accessible, and highly performant web applications. I prioritize maintainability and user experience above all.
            </p>
            <blockquote className="mt-8 border-l-2 border-[#818cf8] pl-4 italic text-gray-500">
              &ldquo;Code is like humor. When you have to explain it, it’s bad.&rdquo;
            </blockquote>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-xl font-semibold text-[#818cf8]">Studies</h3>
            <div className="border-l border-gray-800 pl-8 relative">
              <div className="absolute -left-1.25 top-2 w-2.5 h-2.5 rounded-full bg-[#818cf8]" />
              <div className="mb-8">
                <span className="text-[#818cf8] text-xs font-mono">2021 - PRESENT</span>
                <h4 className="text-lg font-bold">B.S. Software Engineering</h4>
                <p className="text-gray-400 text-sm">University of Technology. Focusing on distributed systems, algorithms, and advanced web architectures.</p>
              </div>
              <div className="absolute -left-1.25 bottom-0 w-2.5 h-2.5 rounded-full bg-gray-700" />
              <div>
                <span className="text-gray-500 text-xs font-mono">2026 (EXPECTED)</span>
                <h4 className="text-lg font-bold">Master&apos;s in Computer Science</h4>
                <p className="text-gray-400 text-sm">Planned continuation focusing on AI integration in web platforms and scalable cloud infrastructure.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}