import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navItems } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="glass mx-auto max-w-7xl rounded-2xl">
      <div className="container mx-auto max-w-6xl px-4 lg:px-7">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 font-display font-extrabold text-xl text-slate-800">
           <img src="/logo2.jpeg" alt="MyMaxion Logo" className="h-9 w-9 rounded-xl object-cover" />
            <span>MyMaxion<span className="text-teal-600">.</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-teal-700 hover:bg-white/60 transition duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="btn-primary inline-flex"
            >
              Start a conversation <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg hover:bg-white/60"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-white/60 pb-4 pt-3 space-y-1 animate-slideInDown">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-teal-700 hover:bg-white/60 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
      </div>
    </nav>
  );
}
