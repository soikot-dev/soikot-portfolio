import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => router.pathname === path;

  // Show "scroll to top" button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="bg-black text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
          <h1 className="text-2xl font-bold">Bentos</h1>

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

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Works', path: '/works' },
                { label: 'Contact', path: '/contact' }
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link
                    href={path}
                    className={`hover:text-red-500 transition-all duration-300 py-2 px-4 ${isActive(path) ? 'text-red-500' : ''}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className={`bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-all duration-300 hidden md:block ${
              isActive('/contact') ? 'ring-2 ring-white' : ''
            }`}
            aria-label="Hire Me"
          >
            Hire Me
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden w-full bg-black text-white mt-4">
            <div className="flex flex-col items-center py-4">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Works', path: '/works' },
                { label: 'Contact', path: '/contact' }
              ].map(({ label, path }) => (
                <Link
                  key={path}
                  href={path}
                  className={`hover:text-red-500 transition-all duration-300 py-3 px-6 text-center ${isActive(path) ? 'text-red-500' : ''}`}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="py-4 px-6">
              <button
                className={`bg-red-500 text-white w-full py-3 rounded-lg hover:bg-red-600 transition-all duration-300 ${
                  isActive('/contact') ? 'ring-2 ring-white' : ''
                }`}
                aria-label="Hire Me"
              >
                Hire Me
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 z-50"
          aria-label="Scroll to Top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default Header;
