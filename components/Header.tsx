'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/seguros-perros', label: 'Perros' },
    { href: '/seguros-caballos', label: 'Caballos' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-3 sm:mx-6 mt-3">
        <div className="bg-midnight/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg shadow-black/20">
          <div className="px-5 sm:px-6">
            <div className="flex items-center justify-between h-14 sm:h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange flex items-center justify-center">
                  <span className="text-white font-black text-sm">GM</span>
                </div>
                <span className="text-lg sm:text-xl font-black text-white tracking-tight">
                  Gestoría Mera
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm font-medium px-4 py-2 rounded-lg"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contacto"
                  className="ml-2 text-sm font-bold text-white bg-orange hover:bg-orange-dark px-4 py-2 rounded-lg transition-all duration-200"
                >
                  Contacto
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
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

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-white/10 px-5 py-4">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white/80 hover:text-white hover:bg-white/10 transition-all text-base font-medium py-2.5 px-3 rounded-lg"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contacto"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center text-white font-bold bg-orange hover:bg-orange-dark py-2.5 px-3 rounded-lg mt-3 transition-all"
                >
                  Contacto
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}