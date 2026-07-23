import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Gestoría Mera — Seguros para Perros y Caballos',
  description: 'Especialistas en seguros para animales. Seguros de Responsabilidad Civil para perros y caballos con las mejores coberturas al mejor precio.',
  keywords: 'seguros perros, seguros caballos, responsabilidad civil animales, PPP, seguros equinos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={spaceGrotesk.variable}>
      <head>
        <meta name="theme-color" content="#fffdf8" />
      </head>
      <body className={`${spaceGrotesk.className} bg-cream-50 text-dark-900 min-h-screen`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
