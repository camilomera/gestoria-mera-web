'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/seguros-perros', label: 'Seguros Perros' },
    { href: '/seguros-caballos', label: 'Seguros Caballos' },
    { href: '/contacto', label: 'Contacto' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-50/90 backdrop-blur-lg border-b border-cream-300/50">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 sm:h-20 relative">
          {/* Logo - left on large, centered on mobile */}
          <Link href="/" className="absolute left-0 flex items-center gap-2 lg:relative lg:mr-auto">
            <span className="text-2xl sm:text-3xl font-bold text-dark-900 tracking-tight">
              Gestoría Mera
            </span>
          </Link>

          {/* Desktop Navigation - centered */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dark-800 hover:text-accent-dark transition-colors duration-200 text-base font-semibold tracking-tight"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <a
              href="tel:986651478"
              className="flex items-center gap-2 text-dark-400 hover:text-dark-900 transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              986 651 478
            </a>
            <a
              href="https://wa.me/34667755976"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-5 py-2.5"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden absolute right-0 p-2 text-dark-900 hover:text-accent-dark transition-colors"
            aria-label="Abrir menú"
          >
            {isMenuOpen ? (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-cream-50/98 backdrop-blur-lg border-t border-cream-300/50">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-dark-900 hover:text-accent-dark transition-colors text-xl font-semibold py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-cream-300 space-y-3">
              <a
                href="tel:986651478"
                className="flex items-center gap-2 text-dark-400 text-base"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                986 651 478
              </a>
              <a
                href="https://wa.me/34667755976"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base w-full text-center"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
