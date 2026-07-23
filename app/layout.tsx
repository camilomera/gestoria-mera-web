import type { Metadata } from 'next'
import { Merriweather } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
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
    <html lang="es" className={merriweather.variable}>
      <head>
        <meta name="theme-color" content="#f5fffa" />
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
