import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import { footerLinks, companyInfo } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 bg-slate-950 text-white">
      <div className="container mx-auto max-w-6xl px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 font-display font-extrabold">
                M
              </div>
              <span className="font-display text-xl font-extrabold">MyMaxion<span className="text-amber-400">.</span></span>
            </div>
            <p className="mb-5 max-w-xs text-sm leading-6 text-slate-400">{companyInfo.tagline}</p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Mail size={16} className="text-teal-400" />
                <a href={`mailto:${companyInfo.email}`} className="text-slate-300 transition hover:text-teal-300">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone size={16} className="text-teal-400" />
                <span className="text-slate-300">{companyInfo.phone}</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin size={16} className="mt-1 text-teal-400" />
                <span className="flex-1 text-slate-300">{companyInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[.16em] text-teal-300">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[.16em] text-teal-300">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[.16em] text-teal-300">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/10 py-7">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="#"
                className="text-slate-500 transition hover:text-teal-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-slate-500 transition hover:text-teal-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-slate-500 transition hover:text-teal-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-center text-sm text-slate-500 md:text-right">
              © {currentYear} MyMaxion. All rights reserved. | Designed with <span className="text-ocean-400"></span> by MyMaxion Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
