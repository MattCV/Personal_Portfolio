'use client';

import Image from 'next/image';

export default function Badge() {
  return (
    <div className="flex justify-center items-center">
      <div 
        className="relative w-80 rounded-2xl p-8 shadow-2xl border"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          borderColor: 'rgba(167, 139, 250, 0.3)',
        }}
      >
        {/* Decoración de fondo sutil */}
        <div 
          className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -z-10"
          style={{ backgroundColor: 'rgba(167, 139, 250, 0.05)' }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-2xl -z-10"
          style={{ backgroundColor: 'rgba(167, 139, 250, 0.03)' }}
        ></div>
        
        {/* Imagen del perfil */}
        <div className="flex justify-center mb-6">
          <div className="relative w-48 h-48">
            <div 
              className="relative w-full h-full rounded-full overflow-hidden border-2 shadow-2xl"
              style={{
                borderColor: 'rgba(167, 139, 250, 0.6)',
                boxShadow: '0 0 30px rgba(167, 139, 250, 0.2)',
              }}
            >
              <Image
                src="/Mateo_profile.webp"
                alt="Mateo Corrales - Profile"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 200px, 288px"
                priority
              />
            </div>
            
            {/* Efecto de brillo */}
            <div 
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(167, 139, 250, 0.1) 0%, transparent 60%)',
              }}
            ></div>
          </div>
        </div>
        
        {/* Contenido de texto */}
        <div className="text-center space-y-1">
          <h2 
            className="text-2xl font-bold"
            style={{ color: '#F2EFFF' }}
          >
            Mateo Corrales
          </h2>
          <p 
            className="text-sm uppercase tracking-widest font-semibold"
            style={{ color: '#A78BFA' }}
          >
            Estudiante
          </p>
          <p className="text-xs text-gray-400 uppercase tracking-wide">
            Ingeniería de Software
          </p>
          <p 
            className="text-sm pt-4 font-bold"
            style={{ color: '#A78BFA' }}
          >
            &quot;Aprendiendo, creciendo, creando.&quot;
          </p>
        </div>
      </div>
    </div>
  );
}
