'use client';

import ScrollIndicator from './Scroll';
import Badge from './Badge';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center px-5 pb-24 pt-28 sm:px-10 sm:py-28 lg:px-16">
      
      {/* Contenedor Grid de 2 columnas */}
      <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-2 sm:gap-6 md:grid-cols-2 md:gap-10 lg:gap-16">
        
        {/* Columna Izquierda: Texto */}
        <div className="flex min-w-0 flex-col justify-center">
          <h1 className="mb-2 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">FULL STACK DEVELOPER</h1>
          <h2 className="mb-5 text-base uppercase tracking-widest text-gray-400 sm:mb-6 sm:text-xl">Specialized in Frontend</h2>
          <p className="mb-6 max-w-md text-sm leading-relaxed text-gray-400 sm:mb-8 sm:text-base">
            Passionate about creating seamless digital experiences. Connecting modern interfaces with robust backend logic and strong databases.
          </p>
          
          {/* Etiquetas */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <span className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-300 sm:px-4 sm:text-sm">JavaScript</span>
            <span className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-300 sm:px-4 sm:text-sm">React/TypeScript</span>
            <span className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-300 sm:px-4 sm:text-sm">HTML/CSS</span>
          </div>
        </div>

        {/* Columna Derecha: El contenedor del componente Badge */}
        <div className="relative flex w-full min-w-0 items-center justify-center">
          <Badge />
        </div>
        
      </div>

      {/* Indicador de Scroll: Ahora se posicionará en la parte inferior de este <section> */}
      <ScrollIndicator />
    </section>
  );
}