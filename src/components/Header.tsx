import React, { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'projects',
    path: '/projects'
  },
  {
    name: 'skills',
    path: '/skills'
  },
  {
    name: 'about-me',
    path: '/about-me'
  },
  {
    name: 'contacts',
    path: '/contacts'
  }];

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#282C33] z-50 border-b border-[#ABB2BF] border-opacity-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-lg">Jules</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`transition-colors flex items-center ${isActive ? 'text-white font-medium' : 'text-[#ABB2BF] hover:text-white'}`}>

                  <span className="text-[#C778DD] mr-1">#</span>
                  {link.name}
                </Link>);

            })}
            <div className="flex items-center text-[#ABB2BF] cursor-pointer hover:text-white">
              EN <span className="ml-1 text-xs">▼</span>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#ABB2BF] hover:text-white">

              {isMobileMenuOpen ?
              <X className="w-6 h-6" /> :

              <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen &&
      <div className="md:hidden bg-[#282C33] border-b border-[#ABB2BF] border-opacity-20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 text-base font-medium rounded-md ${isActive ? 'text-white bg-[#C778DD] bg-opacity-10' : 'text-[#ABB2BF] hover:text-white hover:bg-[#C778DD] hover:bg-opacity-10'}`}
                onClick={() => setIsMobileMenuOpen(false)}>

                  <span className="text-[#C778DD] mr-1">#</span>
                  {link.name}
                </Link>);

          })}
          </div>
        </div>
      }
    </header>);

}