'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/seguros-perros', label: 'Seguros perros' },
    { href: '/seguros-caballos', label: 'Seguros caballos' },
    { href: '/contacto', label: 'Contacto' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-3 sm:p-4">

      
      <div className="relative max-w-5xl mx-auto bg-midnight backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] px-5 sm:px-8">
        {/* Subtle glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange/5 via-transparent to-orange/5 pointer-events-none" />
        
        <div className="relative flex items-center justify-center h-14 sm:h-16">
          {/* Centered content: logo + separator + nav */}
          <div className="flex items-center gap-5 sm:gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-xl sm:text-2xl font-black text-white whitespace-nowrap">
                Gestoría Mera
              </span>
            </Link>

            {/* Separator */}
            <div className="hidden lg:block w-px h-7 bg-white/20" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 sm:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link-glow text-orange text-[0.95rem] font-bold px-4 py-2 rounded-xl hover:bg-white/5 transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden absolute right-4 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all"
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
        <div className="relative lg:hidden mt-2 max-w-5xl mx-auto bg-midnight/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-5">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block nav-link-glow text-orange hover:bg-white/5 transition-all text-lg font-bold py-3 px-4 rounded-xl text-center"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}