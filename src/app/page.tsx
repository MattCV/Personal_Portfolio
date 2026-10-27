import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageProvider';

export default function Home() {
  return (
    <LanguageProvider>
      <main className="bg-[#050505] min-h-screen">
        {/* Navbar fija */}
        <Navbar />

        {/* Hero ocupa toda la pantalla inicial */}
        <Hero />

        {/* About se desplaza naturalmente debajo */}
        <About />

        <Projects />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}