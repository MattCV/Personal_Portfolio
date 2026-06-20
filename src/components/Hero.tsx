export default function Hero() {
  return (
    <section className="h-screen w-full flex items-center justify-center px-16">
      {/* Contenedor Grid de 2 columnas */}
      <div className="grid grid-cols-2 gap-16 w-full max-w-6xl">
        
        {/* Columna Izquierda: Texto */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-white mb-2">FULL STACK DEVELOPER</h1>
          <h2 className="text-xl text-gray-400 mb-6 uppercase tracking-widest">Specialized in Frontend</h2>
          <p className="text-gray-400 mb-8 max-w-md">
            Passionate about creating seamless digital experiences. Connecting modern interfaces with robust backend logic and strong databases.
          </p>
          
          {/* Aquí añadirías tus etiquetas (badges) */}
          <div className="flex gap-4">
            <span className="border border-gray-700 px-4 py-1 rounded-full text-sm">JavaScript</span>
            <span className="border border-gray-700 px-4 py-1 rounded-full text-sm">React</span>
          </div>
        </div>

        {/* Columna Derecha: Escarapela (ID Card) */}
        <div className="flex justify-center items-center">
          <div className="bg-white p-4 rounded-xl shadow-2xl w-300px text-black">
            {/* Aquí colocarías tu foto y tu nombre */}
            <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
            <h3 className="font-bold text-center">Mateo Corrales</h3>
            <p className="text-xs text-center text-gray-500">SOFTWARE ENGINEER STUDENT</p>
          </div>
        </div>

      </div>
    </section>
  );
}