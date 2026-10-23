import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      {/* Navbar fija */}
      <Navbar />

      {/* Hero ocupa toda la pantalla inicial */}
      <Hero />

      {/* About se desplaza naturalmente debajo */}
      <About />

      <Projects />
    </main>
  );
}