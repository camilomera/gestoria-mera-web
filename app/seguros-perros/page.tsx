import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Seguros para Perros — Gestoría Mera',
  description: 'Seguros de Responsabilidad Civil para perros. PPP, perros de compañía, caza, criadores y adiestradores. Desde 20,40€/año con Caser.',
}

export default function SegurosPerrosPage() {
  const products = [
    {
      title: 'Perros Potencialmente Peligrosos',
      subtitle: 'Obligatorio por ley para razas PPP',
      price: '30€',
      period: '/año',
      features: [
        'Responsabilidad Civil obligatoria',
        'Cobertura de daños a terceros',
        'Válido para la licencia PPP',
        'Todas las razas catalogadas',
        'Cobertura en toda España',
      ],
      highlight: true,
    },
    {
      title: 'Perros de Compañía',
      subtitle: 'Para perros no catalogados como peligrosos',
      price: '20,40€',
      period: '/año',
      features: [
        'Responsabilidad Civil completa',
        'Daños a terceros cubiertos',
        'Cualquier raza no PPP',
        'Ideal para perros domésticos',
        'Tranquilidad todo el año',
      ],
      highlight: false,
    },
    {
      title: 'Perros de Caza',
      subtitle: 'Cobertura específica para perros de caza',
      price: '32€',
      period: '/año (2 perros)',
      features: [
        'Responsabilidad Civil en actividad cinegética',
        'Cubre 2 perros por póliza',
        'Daños durante la caza',
        'Complemento a licencia de caza',
        'Válido en toda España',
      ],
      highlight: false,
    },
    {
      title: 'Criadores y Adiestradores',
      subtitle: 'Para profesionales del sector canino',
      price: '58,75€',
      period: '/trimestre',
      features: [
        'Responsabilidad Civil profesional',
        'Cobertura de múltiples animales',
        'Actividad profesional cubierta',
        'Daños en instalaciones',
        'Adaptado a tu actividad',
      ],
      highlight: false,
    },
  ]

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/r5v8fzlu/image/upload/v1784798481/pexels-miami302-23383658_ytcubu.jpg"
            alt="Perro feliz"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight/95 via-midnight/80 to-midnight/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />
        </div>

        <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Seguros para Perros
            </h1>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">
              Protege a tu perro con un seguro de Responsabilidad Civil adaptado a sus necesidades.
              Coberturas completas con Caser desde solo 20,40€ al año.
            </p>
            <a
              href="https://wa.me/34667755976"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-orange text-white font-semibold px-6 py-3 rounded-full hover:bg-orange/90 transition-all duration-300 hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pedir presupuesto
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-midnight">
              Nuestros seguros
            </h2>
            <p className="mt-4 text-midnight/50 text-lg max-w-2xl mx-auto">
              Elige el seguro que mejor se adapta a tu situación. Todos incluyen Responsabilidad Civil completa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <div
                key={index}
                className={`relative bg-white border-2 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  product.highlight
                    ? 'border-orange shadow-lg shadow-orange/10'
                    : 'border-mint-300 hover:border-orange'
                }`}
              >
                {product.highlight && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-orange text-white text-xs font-semibold rounded-full">
                    Más solicitado
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-xl font-black text-midnight">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-midnight/50 text-sm">
                    {product.subtitle}
                  </p>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-black text-midnight">
                    Desde {product.price}
                  </span>
                  <span className="text-midnight/50 text-sm ml-1">
                    {product.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-orange shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-midnight/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/34667755976"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center rounded-full py-3 font-semibold transition-all duration-300 ${
                    product.highlight
                      ? 'bg-orange text-white hover:bg-orange/90 hover:shadow-lg'
                      : 'btn-secondary'
                  }`}
                >
                  Contactar para contratar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-mint-300 rounded-3xl p-6">
              <h3 className="text-lg font-black text-midnight mb-3">
                ¿Qué cubre el seguro?
              </h3>
              <ul className="space-y-2 text-midnight/50 text-sm">
                <li>Daños corporales a terceras personas</li>
                <li>Daños materiales causados por tu perro</li>
                <li>Gastos de defensa jurídica</li>
                <li>Fianzas judiciales</li>
                <li>Asistencia veterinaria de urgencia</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-mint-300 rounded-3xl p-6">
              <h3 className="text-lg font-black text-midnight mb-3">
                ¿Cómo contratar?
              </h3>
              <ol className="space-y-2 text-midnight/50 text-sm list-decimal list-inside">
                <li>Contacta con nosotros por WhatsApp</li>
                <li>Cuéntanos qué tipo de perro tienes</li>
                <li>Te enviamos presupuesto sin compromiso</li>
                <li>Si te interesa, formalizamos la póliza</li>
                <li>Recibes tu certificado en 24 horas</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom mx-auto text-center max-w-2xl">
          <div className="bg-midnight rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              ¿Tienes dudas? Te ayudamos
            </h2>
            <p className="mt-4 text-white/70">
              Escríbenos por WhatsApp y te asesoramos sobre el seguro más adecuado para tu perro. Sin compromiso.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/34667755976"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange text-white font-semibold px-8 py-4 rounded-full hover:bg-orange/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escribir por WhatsApp — 667 755 976
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
