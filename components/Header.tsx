'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/seguros-perros', label: 'Seguros perros' },
    { href: '/seguros-caballos', label: 'Seguros caballos' },
    { href: '/contacto', label: 'Contacto' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-3 sm:p-4">
      <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[1.35rem] border border-white/15 bg-gradient-to-r from-[#12124f]/95 via-midnight/95 to-[#29297d]/95 px-5 sm:px-7 shadow-[0_14px_38px_rgba(25,25,112,0.28)] backdrop-blur-2xl">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-orange/70 to-transparent pointer-events-none" />
        
        <div className="relative flex items-center justify-center h-16 sm:h-[4.25rem]">
          <div className="hidden lg:flex items-center justify-between gap-6 w-full">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/70">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange text-sm font-black text-midnight shadow-[0_5px_16px_rgba(255,165,0,0.28)] transition-transform group-hover:-rotate-3" aria-hidden="true">GM</span>
              <span className="text-[1.35rem] font-black tracking-[-0.02em] text-white whitespace-nowrap">
                Gestoría Mera
              </span>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-1.5 rounded-2xl border border-white/10 bg-white/[0.04] p-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className={`text-sm font-bold px-3.5 py-2 rounded-xl transition-all duration-300 ${pathname === link.href ? 'bg-orange text-midnight shadow-sm' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile: logo left, hamburger right */}
          <div className="flex lg:hidden items-center justify-between w-full">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange text-[0.65rem] font-black text-midnight" aria-hidden="true">GM</span>
              <span className="text-lg font-black tracking-[-0.02em] text-white whitespace-nowrap">
                Gestoría Mera
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all"
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="relative lg:hidden mt-2 max-w-5xl mx-auto bg-gradient-to-b from-midnight/95 to-[#12124f]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-4">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                aria-current={pathname === link.href ? 'page' : undefined}
                className={`block transition-all text-base font-bold py-3 px-4 rounded-xl text-center ${pathname === link.href ? 'bg-orange text-midnight' : 'text-white/85 hover:bg-white/10 hover:text-white'}`}
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
