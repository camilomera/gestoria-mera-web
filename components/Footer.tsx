import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-midnight-light">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-white">Gestoría Mera</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Especialistas en seguros para animales. Más de 15 años de experiencia 
              protegiendo a tus perros y caballos con las mejores coberturas.
            </p>
            <p className="text-white/40 text-sm">
              Mediadores de seguros con Caser
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-white/80 uppercase tracking-wider">
              Navegación
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-white/60 hover:text-orange transition-colors text-sm">
                Inicio
              </Link>
              <Link href="/seguros-perros" className="text-white/60 hover:text-orange transition-colors text-sm">
                Seguros para Perros
              </Link>
              <Link href="/seguros-caballos" className="text-white/60 hover:text-orange transition-colors text-sm">
                Seguros para Caballos
              </Link>
              <Link href="/contacto" className="text-white/60 hover:text-orange transition-colors text-sm">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-white/80 uppercase tracking-wider">
              Contacto
            </h4>
            <div className="space-y-3 text-sm">
              <p className="text-white/60">Llámanos o contacta por WhatsApp</p>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#25D366] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a href="https://wa.me/34667755976" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-orange transition-colors font-bold">
                  667 755 976
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:seguros@gestoriamera.com" className="text-white/80 hover:text-orange transition-colors">
                  seguros@gestoriamera.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            2024 Gestoría Mera. Todos los derechos reservados.
          </p>
          <p className="text-white/40 text-xs">
            Mediadores de seguros autorizados por la DGS
          </p>
        </div>
      </div>
    </footer>
  )
}
