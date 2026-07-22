import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      {/* Main footer */}
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                <span className="text-navy-900 font-bold text-lg">M</span>
              </div>
              <span className="text-lg font-bold text-white">Gestoría Mera</span>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed">
              Agencia de seguros familiar en A Cañiza. Más de 20 años protegiendo a tus animales con las mejores coberturas del mercado.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-navy-300 hover:text-white transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/seguros-perros" className="text-navy-300 hover:text-white transition-colors text-sm">
                  Seguros para Perros
                </Link>
              </li>
              <li>
                <Link href="/seguros-caballos" className="text-navy-300 hover:text-white transition-colors text-sm">
                  Seguros para Caballos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-navy-300 hover:text-white transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">📍</span>
                <span className="text-navy-300 text-sm">
                  Rúa Oriente 1 baixo<br />
                  36880 A Cañiza (Pontevedra)
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">📞</span>
                <a href="tel:986651478" className="text-navy-300 hover:text-white transition-colors text-sm">
                  986 651 478
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">💬</span>
                <a
                  href="https://wa.me/34986651478"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-300 hover:text-white transition-colors text-sm"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Partner info */}
          <div>
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-4">
              Colaboradores
            </h3>
            <div className="space-y-3">
              <div className="bg-navy-800 rounded-lg p-3">
                <p className="text-white font-semibold text-sm">AXA Seguros</p>
                <p className="text-navy-400 text-xs">Partner oficial</p>
              </div>
              <div className="bg-navy-800 rounded-lg p-3">
                <p className="text-white font-semibold text-sm">Allianz</p>
                <p className="text-navy-400 text-xs">Seguro de RC profesional</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-navy-400 text-xs leading-relaxed">
                Gestoría Mera Rancaño, agencia vinculada de seguros, S.L.N.E.
              </p>
              <p className="text-navy-500 text-xs leading-relaxed mt-1">
                Inscrita en el registro de la Dirección General de Política Financiera y Tesoro de la Xunta de Galicia clave AJ0016XG
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-navy-500 text-xs">
                Seguro de responsabilidad civil profesional con Allianz
              </p>
              <p className="text-navy-500 text-xs mt-1">
                © {new Date().getFullYear()} Gestoría Mera. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
