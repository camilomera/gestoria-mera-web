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
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-lg border-b border-light-300/5">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-bold text-light-100 tracking-tight">
              Gestoría Mera
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-light-300 hover:text-light-100 transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:986651478"
              className="flex items-center gap-2 text-light-300 hover:text-light-100 transition-colors text-sm"
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
              className="btn-primary text-sm px-5 py-2"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-light-300 hover:text-light-100 transition-colors"
            aria-label="Abrir menú"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-dark-800/95 backdrop-blur-lg border-t border-light-300/5">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-light-200 hover:text-accent transition-colors text-lg font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-light-300/10 space-y-3">
              <a
                href="tel:986651478"
                className="flex items-center gap-2 text-light-300 text-sm"
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
                className="btn-primary text-sm w-full text-center"
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
