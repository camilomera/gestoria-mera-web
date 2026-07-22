import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient pattern-overlay relative overflow-hidden">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                <span className="text-white/90 text-sm font-medium">Agencia vinculada AXA Seguros</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Protege a tus{' '}
                <span className="text-amber-400">animales</span>{' '}
                con la mejor cobertura
              </h1>
              <p className="text-lg sm:text-xl text-navy-200 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Seguros de responsabilidad civil para perros y caballos al mejor precio. 
                Más de 20 años de experiencia cuidando lo que más importa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/seguros-perros" className="btn-primary">
                  🐕 Seguros para Perros
                </Link>
                <Link href="/seguros-caballos" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-navy-900">
                  🐴 Seguros para Caballos
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-amber-400/20 to-amber-500/10 rounded-full flex items-center justify-center animate-float">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🐕</div>
                    <div className="text-6xl">🐴</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-amber-400 text-navy-900 font-bold px-4 py-2 rounded-xl text-sm shadow-lg">
                  Desde 20,40€/año
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80V40C240 0 480 0 720 40C960 80 1200 80 1440 40V80H0Z" fill="#fefdfb" />
          </svg>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-cream-50 py-12">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-navy-800">20+</div>
              <div className="text-sm text-navy-500 mt-1">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-navy-800">AXA</div>
              <div className="text-sm text-navy-500 mt-1">Partner oficial</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-navy-800">1000+</div>
              <div className="text-sm text-navy-500 mt-1">Clientes protegidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-navy-800">⭐</div>
              <div className="text-sm text-navy-500 mt-1">Trato familiar</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-4">
              Nuestros Seguros
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Coberturas especializadas para cada tipo de animal, siempre al mejor precio y con la garantía de AXA Seguros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Dog Insurance Card */}
            <div className="card-highlight group cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  🐕
                </div>
                <div className="price-tag">
                  <span className="text-sm text-navy-600">desde</span>
                  <span className="text-2xl font-bold text-amber-700">20,40€</span>
                  <span className="text-sm text-navy-600">/año</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-3">
                Seguros para Perros
              </h3>
              <p className="text-navy-600 mb-4 leading-relaxed">
                Responsabilidad civil para todo tipo de perros: PPP, compañía, caza, criadores y adiestradores. Cumple con la normativa vigente.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-navy-700">
                  <span className="text-amber-500">✓</span> PPP desde 30€/año
                </li>
                <li className="flex items-center gap-2 text-sm text-navy-700">
                  <span className="text-amber-500">✓</span> Perros de compañía desde 20,40€/año
                </li>
                <li className="flex items-center gap-2 text-sm text-navy-700">
                  <span className="text-amber-500">✓</span> Perros de caza desde 32€/año (2 perros)
                </li>
                <li className="flex items-center gap-2 text-sm text-navy-700">
                  <span className="text-amber-500">✓</span> Criadores y adiestradores
                </li>
              </ul>
              <Link
                href="/seguros-perros"
                className="inline-flex items-center gap-2 text-amber-700 font-bold hover:text-amber-800 transition-colors group"
              >
                Ver todas las opciones
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Horse Insurance Card */}
            <div className="card-highlight group cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  🐴
                </div>
                <div className="price-tag">
                  <span className="text-sm text-navy-600">desde</span>
                  <span className="text-2xl font-bold text-amber-700">47,38€</span>
                  <span className="text-sm text-navy-600">/año</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-3">
                Seguros para Caballos
              </h3>
              <p className="text-navy-600 mb-4 leading-relaxed">
                Cobertura de responsabilidad civil ecuestre con opción de retirada de cadáveres incluida. Ideal para propietarios y centros hípicos.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-navy-700">
                  <span className="text-amber-500">✓</span> RC caballos desde 47,38€/año
                </li>
                <li className="flex items-center gap-2 text-sm text-navy-700">
                  <span className="text-amber-500">✓</span> RC + retirada cadáveres desde 52,94€/año
                </li>
                <li className="flex items-center gap-2 text-sm text-navy-700">
                  <span className="text-amber-500">✓</span> Cobertura completa todo riesgo
                </li>
                <li className="flex items-center gap-2 text-sm text-navy-700">
                  <span className="text-amber-500">✓</span> Tramitación rápida
                </li>
              </ul>
              <Link
                href="/seguros-caballos"
                className="inline-flex items-center gap-2 text-amber-700 font-bold hover:text-amber-800 transition-colors group"
              >
                Ver todas las opciones
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Somos una empresa familiar que entiende tus necesidades
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cream-200 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                👨‍👩‍👧‍👦
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Trato Familiar</h3>
              <p className="text-navy-600 text-sm leading-relaxed">
                Te atendemos personalmente, conocemos a nuestros clientes por su nombre y sus necesidades.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cream-200 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                💰
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Mejores Precios</h3>
              <p className="text-navy-600 text-sm leading-relaxed">
                Trabajamos con AXA para ofrecerte las tarifas más competitivas del mercado sin renunciar a coberturas.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cream-200 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Gestión Rápida</h3>
              <p className="text-navy-600 text-sm leading-relaxed">
                Tramitamos tu seguro en el menor tiempo posible. En la mayoría de casos, en 24-48 horas tienes tu póliza.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cream-200 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                📋
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Asesoramiento Experto</h3>
              <p className="text-navy-600 text-sm leading-relaxed">
                Te asesoramos sobre qué seguro necesitas según la legislación vigente y las características de tu animal.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cream-200 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🛡️
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Máxima Cobertura</h3>
              <p className="text-navy-600 text-sm leading-relaxed">
                Pólizas con coberturas amplias que te protegen ante cualquier incidencia con tu mascota o animal.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cream-200 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🤝
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Acompañamiento Total</h3>
              <p className="text-navy-600 text-sm leading-relaxed">
                En caso de siniestro, te acompañamos en todo el proceso de gestión y reclamación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy-900 relative overflow-hidden">
        <div className="pattern-overlay absolute inset-0"></div>
        <div className="container-custom mx-auto relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            ¿Necesitas asegurar a tu animal?
          </h2>
          <p className="text-lg text-navy-300 mb-8 max-w-2xl mx-auto">
            Llámanos o escríbenos por WhatsApp y te informamos sin compromiso. Presupuesto gratuito en minutos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:986651478" className="btn-primary">
              📞 Llamar ahora: 986 651 478
            </a>
            <a
              href="https://wa.me/34986651478?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20seguros%20para%20animales"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !border-amber-400 !text-amber-400 hover:!bg-amber-400 hover:!text-navy-900"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
