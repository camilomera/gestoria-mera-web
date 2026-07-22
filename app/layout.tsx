import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Gestoría Mera — Seguros para Perros y Caballos | A Cañiza, Pontevedra',
  description:
    'Agencia de seguros familiar especializada en seguros de responsabilidad civil para perros y caballos. PPP, perros de caza, criadores y RC ecuestre. Desde 20,40€/año. A Cañiza, Pontevedra.',
  keywords:
    'seguros perros, seguros caballos, PPP, responsabilidad civil perros, seguro perros peligrosos, seguro caballos, A Cañiza, Pontevedra, Galicia',
  openGraph: {
    title: 'Gestoría Mera — Seguros para Perros y Caballos',
    description:
      'Agencia de seguros familiar en A Cañiza. Especialistas en RC para perros y caballos desde 20,40€/año.',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
