import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen relative">
        {/* Navbar fija arriba */}
        <Navbar />

        {/* Contenido principal (Hero) centrado */}
        <div className="flex items-center justify-center min-h-screen">
          <Hero />
        </div>
      </main>
  );
}