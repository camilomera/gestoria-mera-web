import type { Metadata } from 'next'
import { Merriweather, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-jakarta',
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
    <html lang="es" className={`${merriweather.variable} ${plusJakarta.variable}`}>
      <head>
        <meta name="theme-color" content="#F2EEC4" />
      </head>
      <body className={`${merriweather.className} bg-mintcream text-midnight min-h-screen`}>
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
