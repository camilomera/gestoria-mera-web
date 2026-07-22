import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
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
    <html lang="es" className={dmSans.variable}>
      <head>
        <meta name="theme-color" content="#0a0f1a" />
      </head>
      <body className={`${dmSans.className} bg-dark-900 text-light-100 min-h-screen`}>
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
