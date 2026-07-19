'use client';

import ScrollIndicator from './Scroll';
import Badge from './Badge';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center px-16">
      
      {/* Contenedor Grid de 2 columnas */}
      <div className="grid grid-cols-2 gap-16 w-full max-w-6xl">
        
        {/* Columna Izquierda: Texto */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-white mb-2">FULL STACK DEVELOPER</h1>
          <h2 className="text-xl text-gray-400 mb-6 uppercase tracking-widest">Specialized in Frontend</h2>
          <p className="text-gray-400 mb-8 max-w-md">
            Passionate about creating seamless digital experiences. Connecting modern interfaces with robust backend logic and strong databases.
          </p>
          
          {/* Etiquetas */}
          <div className="flex gap-4">
            <span className="border border-gray-700 px-4 py-1 rounded-full text-sm text-gray-300">JavaScript</span>
            <span className="border border-gray-700 px-4 py-1 rounded-full text-sm text-gray-300">React/TypeScript</span>
            <span className="border border-gray-700 px-4 py-1 rounded-full text-sm text-gray-300">HTML/CSS</span>
          </div>
        </div>

        {/* Columna Derecha: El contenedor del componente Badge */}
        <div className="flex justify-center items-center w-full relative">
          <Badge />
        </div>
        
      </div>

      {/* Indicador de Scroll: Ahora se posicionará en la parte inferior de este <section> */}
      <ScrollIndicator />
    </section>
  );
}