import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-16 py-1 w-full fixed top-0 left-0 z-50">
      
      {/* Personal Shark Logo */}
      <div className="w-22 h-22">
        <Image 
            src="/Logo_portfolio.svg" 
            alt="Personal Shark Logo" 
            width={40} 
            height={40} 
            className="w-full h-full object-contain"
        />
      </div>

      {/* Menú */}
      <div className="flex gap-10 text-sm font-medium text-gray-400">
        <Link href="/" className="text-white border-b border-white pb-1">Home</Link>
        <Link href="#about" className="hover:text-white transition">About</Link>
        <Link href="#projects" className="hover:text-white transition">Projects</Link>
        <Link href="#contact" className="hover:text-white transition">Contact</Link>
      </div>

      {/* Idioma y Disponibilidad */}
      <div className="flex items-center gap-6 text-xs text-gray-400">
        <span className="cursor-pointer hover:text-white">EN / ES</span>
        <span className="flex items-center gap-2 text-[#00ff88]">
          <span className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></span>
          AVAILABLE
        </span>
      </div>
    </nav>
  );
}