"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogoFull } from '@/components/logo';

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-blue/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        <a href="#" className="flex items-center">
          <LogoFull />
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10"
            >
              {link?.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-2 bg-accent-blue hover:bg-accent-blue/90 text-white px-5 py-2 rounded-md text-sm font-semibold transition-all shadow-md hover:shadow-lg"
          >
            Agendar Consulta
          </a>
        </nav>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-blue/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks?.map((link) => (
                <a
                  key={link?.href}
                  href={link?.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/80 hover:text-white px-3 py-3 rounded-md text-base font-medium transition-colors hover:bg-white/10"
                >
                  {link?.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMobileOpen(false)}
                className="bg-accent-blue hover:bg-accent-blue/90 text-white px-5 py-3 rounded-md text-base font-semibold text-center transition-all mt-2"
              >
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
