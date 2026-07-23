import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section - Full screen with emotional photo */}
      <section className="relative min-h-[95vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1450778869180-e77d3c79db18?w=1400&q=80"
            alt="Perro y caballo en la naturaleza"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/70 via-dark-900/50 to-dark-900/90" />
        </div>

        {/* Content - Centered like Lassie/Milo */}
        <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fadeIn">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-light-200 text-sm font-medium">Mediadores oficiales de AXA · 15+ años de experiencia</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-light-100 leading-tight animate-fadeIn">
              Protege a quien
              <span className="block text-accent">más quieres</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-light-300 leading-relaxed animate-slideUp max-w-2xl mx-auto">
              Seguros de Responsabilidad Civil para perros y caballos. 
              Contratación online, precios desde 20,40€/año.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slideUp">
              <a
                href="https://wa.me/34667755976"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4 text-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pide tu presupuesto gratis
              </a>
              <a href="tel:986651478" className="btn-secondary text-base px-8 py-4 text-lg">
                📞 986 651 478
              </a>
            </div>

            {/* Benefit pills - inspired by Milo checkmarks */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3 animate-slideUp">
              {['✅ Contratación inmediata', '✅ Sin papeleos', '✅ Atención por WhatsApp'].map((benefit, i) => (
                <span key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 text-light-200 text-sm px-4 py-2 rounded-full">
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-light-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Prices Section - Show prices upfront like Milo */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-light-100">
              Nuestros seguros
            </h2>
            <p className="mt-4 text-light-400 text-lg max-w-2xl mx-auto">
              Responsabilidad Civil obligatoria para propietarios. Precios imbatibles con la garantía de AXA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Dogs Card */}
            <Link href="/seguros-perros" className="group relative overflow-hidden rounded-3xl border border-white/5 hover:border-accent/30 transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80"
                  alt="Perro"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/95 via-dark-900/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                {/* Price badge */}
                <div className="inline-flex items-center bg-accent/90 backdrop-blur-sm text-dark-900 font-bold text-sm px-3 py-1 rounded-full mb-3">
                  Desde 20,40€/año
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-light-100">
                  Seguros para Perros
                </h3>
                <p className="mt-2 text-light-300 text-sm sm:text-base">
                  RC para perros de compañía, PPP, caza y rehala
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                  Ver coberturas
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Horses Card */}
            <Link href="/seguros-caballos" className="group relative overflow-hidden rounded-3xl border border-white/5 hover:border-accent/30 transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?w=800&q=80"
                  alt="Caballo"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/95 via-dark-900/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                {/* Price badge */}
                <div className="inline-flex items-center bg-accent/90 backdrop-blur-sm text-dark-900 font-bold text-sm px-3 py-1 rounded-full mb-3">
                  Desde 48,27€/año
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-light-100">
                  Seguros para Caballos
                </h3>
                <p className="mt-2 text-light-300 text-sm sm:text-base">
                  RC equina con coberturas completas
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                  Ver coberturas
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works - 3 steps like Lassie */}
      <section className="section-padding bg-dark-800/50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-light-100">
              Así de fácil
            </h2>
            <p className="mt-4 text-light-400 text-lg">
              Contrata tu seguro en 3 minutos
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '1',
                emoji: '💬',
                title: 'Escríbenos',
                description: 'Por WhatsApp o teléfono. Cuéntanos qué animal tienes y te asesoramos.',
              },
              {
                step: '2',
                emoji: '📋',
                title: 'Elige tu cobertura',
                description: 'Te enviamos las opciones con precios claros. Sin letra pequeña.',
              },
              {
                step: '3',
                emoji: '✅',
                title: 'Contratación inmediata',
                description: 'Firmamos online y en menos de 24h tienes tu póliza activa.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-3xl mb-4">
                  {item.emoji}
                </div>
                <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                  Paso {item.step}
                </div>
                <h3 className="text-lg font-semibold text-light-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-light-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators - inspired by Lassie's "+1 million paws" */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-light-100">
              ¿Por qué confiar en nosotros?
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {[
              { icon: '🛡️', number: '15+', label: 'Años de experiencia' },
              { icon: '🏢', number: 'AXA', label: 'Compañía aseguradora' },
              { icon: '👥', number: '1000+', label: 'Clientes protegidos' },
              { icon: '⚡', number: '24h', label: 'Activación de póliza' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-dark-800/80 border border-white/5 rounded-2xl p-6 text-center hover:border-accent/20 transition-colors"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-accent">
                  {item.number}
                </div>
                <div className="mt-1 text-light-400 text-sm">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid - clean like Lassie cards */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-custom mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                emoji: '🛡️',
                title: 'Coberturas completas',
                description: 'Protección total de Responsabilidad Civil adaptada a cada tipo de animal',
              },
              {
                emoji: '💰',
                title: 'Los mejores precios',
                description: 'Tarifas competitivas gracias a nuestra relación directa con AXA',
              },
              {
                emoji: '⚡',
                title: 'Gestión rápida',
                description: 'Contratación ágil y gestión de siniestros en menos de 24 horas',
              },
              {
                emoji: '💬',
                title: 'Atención por WhatsApp',
                description: 'Te atendemos por teléfono y WhatsApp con un trato cercano y directo',
              },
              {
                emoji: '📄',
                title: 'Sin papeleos',
                description: 'Nos encargamos de toda la gestión administrativa por ti',
              },
              {
                emoji: '🌍',
                title: 'Cobertura nacional',
                description: 'Seguros válidos en toda España con asistencia en cualquier lugar',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-dark-800/50 border border-white/5 rounded-2xl p-6 hover:border-accent/20 transition-colors">
                <div className="text-3xl mb-3">{feature.emoji}</div>
                <h3 className="text-lg font-semibold text-light-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-light-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - strong like Milo */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=80"
            alt="Campo natural"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark-900/85" />
        </div>
        <div className="relative container-custom mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light-100">
            ¿Hablamos?
          </h2>
          <p className="mt-4 text-light-300 text-lg max-w-xl mx-auto">
            Cuéntanos qué necesitas y te asesoramos sin compromiso. 
            Respuesta inmediata por WhatsApp.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/34667755976"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base px-8 py-4 text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribir por WhatsApp
            </a>
            <a href="tel:986651478" className="btn-secondary text-base px-8 py-4 text-lg">
              Llamar: 986 651 478
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
