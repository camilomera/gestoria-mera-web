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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div className="relative bg-midnight/85 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] px-3 sm:px-4">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange/5 via-transparent to-orange/5 pointer-events-none" />
        
        <div className="relative flex items-center h-14 sm:h-16 gap-2 sm:gap-3">
          {/* Logo */}
          <Link href="/" className="flex items-center px-3 sm:px-4">
            <span className="text-lg sm:text-xl font-black text-white hover:text-orange transition-colors duration-300 whitespace-nowrap">
              Gestoría Mera
            </span>
          </Link>

          {/* Separator */}
          <div className="hidden lg:block w-px h-7 bg-white/15" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-white/75 hover:text-white transition-all duration-300 text-[0.9rem] font-semibold px-4 py-2 rounded-full hover:bg-white/10 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-[0_0_6px_rgba(255,165,0,0.8)]" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all ml-auto"
            aria-label="Abrir menú"
          >
            {isMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - separate floating pill below */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-20 left-4 right-4 bg-midnight/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-4 z-50">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-white/80 hover:text-white hover:bg-white/10 transition-all text-lg font-semibold py-3 px-4 rounded-xl text-center"
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