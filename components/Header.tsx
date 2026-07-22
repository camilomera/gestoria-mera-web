'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/seguros-perros', label: 'Seguros Perros' },
    { href: '/seguros-caballos', label: 'Seguros Caballos' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-cream-200 shadow-sm">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-navy-800 rounded-xl flex items-center justify-center group-hover:bg-navy-700 transition-colors">
              <span className="text-amber-400 font-bold text-lg">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-navy-900 leading-tight">
                Gestoría Mera
              </span>
              <span className="text-xs text-navy-500 leading-tight hidden sm:block">
                Seguros para animales
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-navy-700 rounded-lg hover:bg-cream-100 hover:text-navy-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:986651478"
              className="flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-navy-900 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              986 651 478
            </a>
            <a
              href="https://wa.me/34986651478"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-5 !py-2.5 !text-sm"
            >
              💬 WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-cream-100 transition-colors"
            aria-label="Abrir menú"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6 text-navy-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-navy-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-cream-200 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-navy-700 rounded-lg hover:bg-cream-100 hover:text-navy-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 px-4 flex flex-col gap-3">
              <a
                href="tel:986651478"
                className="flex items-center gap-2 text-base font-medium text-navy-700"
              >
                📞 986 651 478
              </a>
              <a
                href="https://wa.me/34986651478"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !text-base text-center"
              >
                💬 Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
