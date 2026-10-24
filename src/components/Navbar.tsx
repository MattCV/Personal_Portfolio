import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 grid w-full grid-cols-[auto_1fr] items-center gap-x-3 gap-y-1 px-4 py-2 sm:flex sm:h-24 sm:justify-between sm:px-8 sm:py-0 lg:px-16">
      
      {/* Personal Shark Logo */}
      <div className="h-12 w-12 shrink-0 sm:h-16 sm:w-16">
        <Image 
            src="/Logo_portfolio.svg" 
            alt="Personal Shark Logo" 
            width={40} 
            height={40} 
            className="w-full h-full object-contain"
        />
      </div>

      {/* Menú */}
      <div className="col-span-2 row-start-2 flex justify-center gap-5 text-xs font-medium text-gray-400 sm:order-none sm:col-span-1 sm:row-auto sm:gap-6 sm:text-sm lg:gap-10">
        <Link href="/" className="text-white border-b border-white pb-1">Home</Link>
        <Link href="#about" className="hover:text-white transition">About Me</Link>
        <Link href="#projects" className="hover:text-white transition">Projects</Link>
        <Link href="#contact" className="hover:text-white transition">Contact</Link>
      </div>

      {/* Idioma y Disponibilidad */}
      <div className="flex items-center justify-self-end gap-2 text-[10px] text-gray-400 sm:gap-4 sm:text-xs lg:gap-6">
        <span className="hidden cursor-pointer hover:text-white sm:inline">EN / ES</span>
        <span className="flex items-center gap-1.5 whitespace-nowrap text-[#00ff88] sm:gap-2">
          <span className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></span>
          AVAILABLE
        </span>
      </div>
    </nav>
  );
}