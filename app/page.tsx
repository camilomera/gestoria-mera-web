import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1450778869180-e77d3c79db18?w=1400&q=80"
            alt="Perro y caballo en la naturaleza"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/80 to-dark-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light-100 leading-tight animate-fadeIn">
              Seguros para Perros y Caballos
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-light-300 leading-relaxed animate-slideUp">
              Protege a tus animales con las mejores coberturas de Responsabilidad Civil. 
              Más de 15 años de experiencia como mediadores de AXA.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-slideUp">
              <Link href="/seguros-perros" className="btn-primary text-base">
                Seguros para Perros
              </Link>
              <Link href="/seguros-caballos" className="btn-secondary text-base">
                Seguros para Caballos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Animal Cards Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-light-100">
              Elige tu seguro
            </h2>
            <p className="mt-4 text-light-400 text-lg max-w-2xl mx-auto">
              Coberturas específicas para cada tipo de animal, adaptadas a tus necesidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Dogs Card */}
            <Link href="/seguros-perros" className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80"
                  alt="Perro"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-light-100">
                  Seguros para Perros
                </h3>
                <p className="mt-2 text-light-300 text-sm sm:text-base">
                  Responsabilidad Civil para perros de compañía, PPP, caza y más
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-accent font-medium text-sm">
                  Desde 20,40€/año
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Horses Card */}
            <Link href="/seguros-caballos" className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?w=800&q=80"
                  alt="Caballo"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-light-100">
                  Seguros para Caballos
                </h3>
                <p className="mt-2 text-light-300 text-sm sm:text-base">
                  Responsabilidad Civil equina con coberturas completas
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-accent font-medium text-sm">
                  Contratar online
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-dark-800/50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { number: '15+', label: 'Años de experiencia' },
              { number: 'AXA', label: 'Compañía aseguradora' },
              { number: '1000+', label: 'Clientes satisfechos' },
              { number: '24h', label: 'Gestión de siniestros' },
            ].map((item, index) => (
              <div
                key={index}
                className="card-dark-static text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-accent">
                  {item.number}
                </div>
                <div className="mt-2 text-light-400 text-sm">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-light-100">
              ¿Por qué elegirnos?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Coberturas completas',
                description: 'Protección total de Responsabilidad Civil adaptada a cada tipo de animal',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Los mejores precios',
                description: 'Tarifas competitivas gracias a nuestra relación directa con AXA',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Gestión rápida',
                description: 'Contratación ágil y gestión de siniestros en menos de 24 horas',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                ),
                title: 'Atención personalizada',
                description: 'Te atendemos por teléfono y WhatsApp con un trato cercano y directo',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: 'Sin papeleos',
                description: 'Nos encargamos de toda la gestión administrativa por ti',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Cobertura nacional',
                description: 'Seguros válidos en toda España con asistencia en cualquier lugar',
              },
            ].map((feature, index) => (
              <div key={index} className="card-dark text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4">
                  {feature.icon}
                </div>
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

      {/* Final CTA */}
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
          <h2 className="text-3xl sm:text-4xl font-bold text-light-100">
            ¿Necesitas un seguro para tu animal?
          </h2>
          <p className="mt-4 text-light-300 text-lg max-w-xl mx-auto">
            Contacta con nosotros y te asesoramos sin compromiso. 
            Respuesta rápida por WhatsApp.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/34667755976"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribir por WhatsApp
            </a>
            <a href="tel:986651478" className="btn-secondary text-base">
              Llamar: 986 651 478
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
