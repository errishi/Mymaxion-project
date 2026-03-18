import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-ocean-50 shadow-md">
      <div className="container mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 font-bold text-xl text-ocean-600">
           <img src="/logo2.jpeg" alt="MyMaxion Logo" className="h-8 w-auto" />
            <span className="hidden sm:inline">MyMaxion</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-ocean-700 hover:bg-beach-100 transition duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            to="/contact"
            className="hidden lg:block px-6 py-2 bg-amber-500 text-white font-semibold rounded-lg hover:bg-ocean-700 transition duration-300"
          >
            Get Quote
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2 animate-slideInDown">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-ocean-700 hover:bg-beach-600 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block w-full px-3 py-2 bg-ocean-600 text-white font-semibold rounded-lg hover:bg-ocean-700 transition duration-300 text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
