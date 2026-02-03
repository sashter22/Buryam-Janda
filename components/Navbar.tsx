"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md fixed top-0 w-full z-[100] border-b border-purple-100 shadow-sm">
      <div className="container mx-auto px-5 py-3 md:py-4 flex justify-between items-center">
        <a href="#home" className="flex flex-col leading-none">
          <span className="text-xl md:text-2xl font-black tracking-tighter gradient-text italic uppercase">
            BURYAM JANDA
          </span>
          <span className="text-[9px] font-bold text-gray-400 tracking-[0.2em] uppercase ml-1">
            Jawa Sunda Authentic
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-xs font-black uppercase tracking-widest text-gray-600 items-center">
          {["home", "menu", "tentang", "lokasi", "kontak"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="hover:text-janda transition-colors capitalize"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-janda p-1"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m4 6h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden bg-white border-t border-purple-50 shadow-2xl`}
      >
        <div className="px-6 py-8 flex flex-col space-y-5 text-sm font-extrabold uppercase tracking-widest text-gray-700">
          {["home", "menu", "tentang", "lokasi", "kontak"].map((item) => (
            <a
              key={item}
              onClick={() => setIsOpen(false)}
              href={`#${item}`}
              className="mobile-link py-2 border-b border-gray-50 capitalize"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
