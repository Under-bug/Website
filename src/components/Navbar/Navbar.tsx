import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import NavbarSubmenu from './NavbarSubmenu';
import { navItems } from './navData';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setActiveSubmenu(null);
    }
  };

  const handleSubmenuToggle = (key: string) => {
    setActiveSubmenu(activeSubmenu === key ? null : key);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Underbug" className="h-8 w-8" />
              <span className="text-xl font-bold text-emerald-400">
                UNDERBUG
              </span>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.key} className="relative group">
                <button
                  className="flex items-center text-gray-300 hover:text-white transition-colors px-3 py-2 text-sm font-medium"
                  onClick={() => handleSubmenuToggle(item.key)}
                  aria-expanded={activeSubmenu === item.key}
                >
                  {item.title}
                  {activeSubmenu === item.key ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
                {activeSubmenu === item.key && (
                  <NavbarSubmenu items={item.submenu} />
                )}
              </div>
            ))}
            <a
              href="/contato"
              className="px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:from-emerald-600 hover:to-green-600 transition-all duration-200 shadow-lg hover:shadow-emerald-500/20"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 shadow-xl">
          {navItems.map((item) => (
            <div key={item.key} className="relative">
              <button
                className="w-full text-left flex justify-between items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                onClick={() => handleSubmenuToggle(item.key)}
                aria-expanded={activeSubmenu === item.key}
              >
                {item.title}
                {activeSubmenu === item.key ? (
                  <ChevronUp className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-1 h-4 w-4" />
                )}
              </button>
              {activeSubmenu === item.key && (
                <div className="px-4 py-2 space-y-1 bg-gray-800 rounded-md mt-1">
                  {item.submenu.map((subItem, index) => (
                    <a
                      key={index}
                      href={subItem.url}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      {subItem.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="/contato"
            className="block w-full text-center px-4 py-2 rounded-md text-base font-medium bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:from-emerald-600 hover:to-green-600 transition-colors"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;