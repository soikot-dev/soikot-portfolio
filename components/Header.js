import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black text-white p-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        {/* Branding */}
        <h1 className="text-2xl font-bold">Bentos</h1>

        {/* Mobile Hamburger Menu */}
        <button
          className="block md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Desktop Navigation (Visible on MD screens and above) */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="hover:text-red-500 transition-all duration-300 py-2 px-4">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-red-500 transition-all duration-300 py-2 px-4">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-red-500 transition-all duration-300 py-2 px-4">
                Services
              </Link>
            </li>
            <li>
              <Link href="/works" className="hover:text-red-500 transition-all duration-300 py-2 px-4">
                Works
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-500 transition-all duration-300 py-2 px-4">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Hire Me Button */}
        <button
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-all duration-300 hidden md:block"
          aria-label="Hire Me"
        >
          Hire Me
        </button>
      </div>

      {/* Mobile Navigation (Controlled by isMenuOpen) */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-black text-white mt-4">
          <div className="flex flex-col items-center py-4">
            <Link href="/" className="hover:text-red-500 transition-all duration-300 py-3 px-6 text-center" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/about" className="hover:text-red-500 transition-all duration-300 py-3 px-6 text-center" onClick={closeMenu}>
              About
            </Link>
            <Link href="/services" className="hover:text-red-500 transition-all duration-300 py-3 px-6 text-center" onClick={closeMenu}>
              Services
            </Link>
            <Link href="/works" className="hover:text-red-500 transition-all duration-300 py-3 px-6 text-center" onClick={closeMenu}>
              Works
            </Link>
            <Link href="/contact" className="hover:text-red-500 transition-all duration-300 py-3 px-6 text-center" onClick={closeMenu}>
              Contact
            </Link>
          </div>
          {/* Mobile Hire Me Button */}
          <div className="py-4 px-6">
            <button
              className="bg-red-500 text-white w-full py-3 rounded-lg hover:bg-red-600 transition-all duration-300"
              aria-label="Hire Me"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
