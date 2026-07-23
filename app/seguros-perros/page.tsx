"use client"

import { useState } from 'react'
// Comunidades Autónomas con sus banderas (emoji flags approximation with shield icons)
const comunidades = [
  { name: 'Andalucía', flag: '🟢⚪' },
  { name: 'Aragón', flag: '🔴🟡' },
  { name: 'Asturias', flag: '🔵' },
  { name: 'Islas Baleares', flag: '🟣🟡' },
  { name: 'Canarias', flag: '⚪🔵🟡' },
  { name: 'Cantabria', flag: '🔴⚪' },
  { name: 'Castilla-La Mancha', flag: '🔴⚪' },
  { name: 'Castilla y León', flag: '🟣🔴' },
  { name: 'Cataluña', flag: '🔴🟡' },
  { name: 'Extremadura', flag: '🟢⚪⚫' },
  { name: 'Galicia', flag: '⚪🔵' },
  { name: 'La Rioja', flag: '🔴⚪🟢🔴' },
  { name: 'Madrid', flag: '🔴⚪' },
  { name: 'Murcia', flag: '🔴🟡' },
  { name: 'Navarra', flag: '🔴' },
  { name: 'País Vasco', flag: '🔴⚪🟢' },
  { name: 'Comunidad Valenciana', flag: '🔴🟡🔵' },
  { name: 'Ceuta', flag: '⚫⚪' },
  { name: 'Melilla', flag: '🔵🟡' },
]

export default function SegurosPerrosPage() {
  const [step, setStep] = useState<'choice' | 'ppp' | 'noppp' | 'ppp-products'>('choice')
  const [selectedCCAA, setSelectedCCAA] = useState('')

  // Placeholder products for PPP (will be customized later)
  const pppProducts = [
    {
      name: 'Plan Básico PPP',
      price: '30€/año',
      features: ['Responsabilidad Civil 150.000€', 'Cobertura en toda España', 'Certificado inmediato'],
    },
    {
      name: 'Plan Estándar PPP',
      price: '45€/año',
      features: ['Responsabilidad Civil 300.000€', 'Defensa jurídica', 'Asistencia veterinaria urgente'],
    },
    {
      name: 'Plan Premium PPP',
      price: '65€/año',
      features: ['Responsabilidad Civil 600.000€', 'Defensa jurídica completa', 'Asistencia veterinaria', 'Robo y extravío'],
    },
    {
      name: 'Plan Profesional PPP',
      price: '90€/año',
      features: ['Responsabilidad Civil 1.000.000€', 'Todo incluido', 'Múltiples perros', 'Cobertura internacional'],
    },
  ]

  // Products for No PPP
  const nopppProducts = [
    {
      name: 'Plan Compañía',
      price: '20,40€/año',
      features: ['Responsabilidad Civil completa', 'Perros domésticos no PPP', 'Certificado en 24h'],
    },
    {
      name: 'Plan Caza',
      price: '32€/año',
      subtitle: '(2 perros incluidos)',
      features: ['RC en actividad cinegética', '2 perros por póliza', '+6€ por perro adicional', 'Complemento licencia de caza'],
    },
    {
      name: 'Plan Criadores',
      price: '58,75€/trimestre',
      features: ['RC profesional', 'Múltiples animales', 'Actividad profesional cubierta', 'Adaptado a tu actividad'],
    },
    {
      name: 'Plan Adiestradores',
      price: '58,75€/trimestre',
      features: ['RC profesional', 'Cobertura durante sesiones', 'Daños en instalaciones', 'Seguro de accidentes'],
    },
  ]

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="relative py-16 sm:py-20 bg-midnight overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight to-midnight-dark opacity-90" />
        <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Seguros para <span className="text-orange">perros</span>
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Responsabilidad Civil adaptada a tu perro. Contratación online, póliza activa en 24 horas.
          </p>
        </div>
      </section>

      {/* Step: Choice between PPP and No PPP */}
      {step === 'choice' && (
        <section className="py-16 sm:py-20">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-black text-midnight">
                ¿Qué tipo de perro tienes?
              </h2>
              <p className="mt-3 text-midnight/60 text-lg">
                Selecciona la categoría de tu perro para ver las opciones disponibles.
              </p>
            </div>

            {/* Banner informativo PPP */}
            <a
              href="/que-es-ppp"
              className="block max-w-3xl mx-auto mb-12 group"
            >
              <div className="bg-midnight/5 border-2 border-midnight/10 rounded-2xl px-6 py-4 flex items-center justify-between gap-4 hover:border-orange hover:bg-orange/5 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🐕‍🦺</span>
                  <p className="text-midnight font-semibold text-sm sm:text-base">
                    ¿Qué es un perro potencialmente peligroso? <span className="text-orange">Toda la información aquí</span>
                  </p>
                </div>
                <svg className="w-5 h-5 text-orange shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* PPP Card */}
              <button
                onClick={() => setStep('ppp')}
                className="group text-left bg-white border-2 border-midnight/10 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-orange focus:outline-none focus:ring-4 focus:ring-orange/30"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1567752881298-894bb81f9379?w=800&q=80"
                    alt="Rottweiler"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-orange text-white text-xs font-bold rounded-full mb-2">
                      Obligatorio por ley
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-black text-midnight group-hover:text-orange transition-colors">
                    Perros Potencialmente Peligrosos
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-orange">PPP</p>
                  <p className="mt-3 text-midnight/60 text-sm leading-relaxed">
                    Rottweiler, Pit Bull, American Staffordshire, Dogo Argentino, Fila Brasileiro, Tosa Inu, Akita Inu y mestizos.
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-orange font-semibold">
                    <span>Desde 30€/año</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* No PPP Card */}
              <button
                onClick={() => setStep('noppp')}
                className="group text-left bg-white border-2 border-midnight/10 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-orange focus:outline-none focus:ring-4 focus:ring-orange/30"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1612195583950-b8fd34c87093?w=800&q=80"
                    alt="Jack Russell Terrier"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-midnight text-white text-xs font-bold rounded-full mb-2">
                      Recomendado
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-black text-midnight group-hover:text-orange transition-colors">
                    Perros <span className="text-orange underline decoration-4 underline-offset-4">No</span> Peligrosos
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-midnight/50">Compañía, caza, criadores</p>
                  <p className="mt-3 text-midnight/60 text-sm leading-relaxed">
                    Todas las razas no catalogadas como peligrosas. Perros de compañía, caza, criadores y adiestradores.
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-orange font-semibold">
                    <span>Desde 20,40€/año</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Step: PPP - Select CCAA */}
      {step === 'ppp' && (
        <section className="py-16 sm:py-20">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back button */}
            <button
              onClick={() => setStep('choice')}
              className="mb-8 flex items-center gap-2 text-midnight/60 hover:text-orange transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver
            </button>

            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-midnight">
                ¿En qué comunidad autónoma vives?
              </h2>
              <p className="mt-3 text-midnight/60 text-lg">
                La normativa PPP varía según tu comunidad. Selecciona la tuya para ver los productos disponibles.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <select
                  value={selectedCCAA}
                  onChange={(e) => {
                    setSelectedCCAA(e.target.value)
                    if (e.target.value) setStep('ppp-products')
                  }}
                  className="w-full appearance-none bg-white border-2 border-midnight/10 rounded-2xl px-6 py-5 text-lg font-semibold text-midnight focus:outline-none focus:border-orange focus:ring-4 focus:ring-orange/20 transition-all cursor-pointer hover:border-orange/50"
                >
                  <option value="">Selecciona tu comunidad autónoma...</option>
                  {comunidades.map((ccaa) => (
                    <option key={ccaa.name} value={ccaa.name}>
                      {ccaa.flag} {ccaa.name}
                    </option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-6 h-6 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Visual grid of CCAA as alternative */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {comunidades.map((ccaa) => (
                  <button
                    key={ccaa.name}
                    onClick={() => {
                      setSelectedCCAA(ccaa.name)
                      setStep('ppp-products')
                    }}
                    className="flex items-center gap-2 px-4 py-3 bg-white border border-midnight/10 rounded-xl text-sm font-medium text-midnight hover:border-orange hover:bg-orange/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange/30"
                  >
                    <span className="text-base">{ccaa.flag}</span>
                    <span className="truncate">{ccaa.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step: PPP Products */}
      {step === 'ppp-products' && (
        <section className="py-16 sm:py-20">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back button */}
            <button
              onClick={() => setStep('ppp')}
              className="mb-8 flex items-center gap-2 text-midnight/60 hover:text-orange transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver a comunidades
            </button>

            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-orange/10 text-orange text-sm font-bold rounded-full mb-4">
                {selectedCCAA}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-midnight">
                Seguros PPP disponibles
              </h2>
              <p className="mt-3 text-midnight/60 text-lg">
                Elige el plan que mejor se adapte a tus necesidades.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {pppProducts.map((product, index) => (
                <div
                  key={index}
                  className={`relative bg-white border-2 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    index === 1 ? 'border-orange shadow-lg shadow-orange/10' : 'border-midnight/10 hover:border-orange'
                  }`}
                >
                  {index === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-orange text-white text-xs font-bold rounded-full whitespace-nowrap">
                      Más popular
                    </div>
                  )}
                  <h3 className="text-lg font-black text-midnight mb-2">{product.name}</h3>
                  <div className="mb-4">
                    <span className="text-2xl font-black text-orange">{product.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <span className="text-orange font-bold mt-0.5">✓</span>
                        <span className="text-midnight/70 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/34667755976"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center rounded-full py-3 font-semibold transition-all duration-300 text-sm ${
                      index === 1
                        ? 'bg-orange text-white hover:bg-orange-dark'
                        : 'bg-midnight/5 text-midnight hover:bg-orange hover:text-white'
                    }`}
                  >
                    Contratar
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Step: No PPP Products */}
      {step === 'noppp' && (
        <section className="py-16 sm:py-20">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back button */}
            <button
              onClick={() => setStep('choice')}
              className="mb-8 flex items-center gap-2 text-midnight/60 hover:text-orange transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver
            </button>

            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-midnight">
                Seguros para perros <span className="text-orange underline decoration-4 underline-offset-4">no</span> peligrosos
              </h2>
              <p className="mt-3 text-midnight/60 text-lg">
                Elige el seguro que mejor se adapta a tu situación.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {nopppProducts.map((product, index) => (
                <div
                  key={index}
                  className={`relative bg-white border-2 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    index === 0 ? 'border-orange shadow-lg shadow-orange/10' : 'border-midnight/10 hover:border-orange'
                  }`}
                >
                  {index === 0 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-orange text-white text-xs font-bold rounded-full whitespace-nowrap">
                      Más popular
                    </div>
                  )}
                  <h3 className="text-lg font-black text-midnight mb-1">{product.name}</h3>
                  {product.subtitle && (
                    <p className="text-midnight/50 text-xs mb-2">{product.subtitle}</p>
                  )}
                  <div className="mb-4">
                    <span className="text-2xl font-black text-orange">{product.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <span className="text-orange font-bold mt-0.5">✓</span>
                        <span className="text-midnight/70 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/34667755976"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center rounded-full py-3 font-semibold transition-all duration-300 text-sm ${
                      index === 0
                        ? 'bg-orange text-white hover:bg-orange-dark'
                        : 'bg-midnight/5 text-midnight hover:bg-orange hover:text-white'
                    }`}
                  >
                    Contratar
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="py-16 sm:py-20">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <div className="bg-midnight rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              ¿Tienes dudas?
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