"use client"

import { useState } from 'react'

const comunidades: { name: string; joke: string }[] = [
  { name: 'Andalucía', joke: 'Esto tardará menos que freír un pescaíto' },
  { name: 'Aragón', joke: 'Más rápido que el cierzo bajando por el Ebro' },
  { name: 'Asturias', joke: 'Tardará menos que sidra en caer al vaso' },
  { name: 'Islas Baleares', joke: 'Más rápido que encontrar cala virgen en agosto... bueno, casi' },
  { name: 'Canarias', joke: 'Esto va más rápido que un plátano madurando al sol' },
  { name: 'Cantabria', joke: 'Tardará menos que un día de sol en Santander' },
  { name: 'Castilla-La Mancha', joke: 'Más rápido que Sancho corriendo detrás de Don Quijote' },
  { name: 'Castilla y León', joke: 'Tardará menos que un cordero lechal en el horno' },
  { name: 'Cataluña', joke: 'Més ràpid que un calçot a la brasa' },
  { name: 'Extremadura', joke: 'Esto va más rápido que el jamón desapareciendo de la mesa' },
  { name: 'Galicia', joke: 'Tardará menos que una tortilla de Betanzos en acabarse' },
  { name: 'La Rioja', joke: 'Más rápido que descorchar un Reserva' },
  { name: 'Madrid', joke: 'Más rápido que pillar mesa en una terraza un domingo' },
  { name: 'Murcia', joke: 'Esto va más rápido que un limón cayendo del árbol' },
  { name: 'Navarra', joke: 'Tardará menos que un encierro en San Fermín' },
  { name: 'País Vasco', joke: 'Más rápido que pinchar un pintxo en el Casco Viejo' },
  { name: 'Comunidad Valenciana', joke: 'Esto tardará menos que una mascletà' },
  { name: 'Ceuta', joke: 'Más rápido que cruzar el Estrecho en ferry' },
  { name: 'Melilla', joke: 'Tardará menos que un paseo por el Parque Hernández' },
]

export default function SegurosPerrosPage() {
  const [step, setStep] = useState<'choice' | 'ppp' | 'noppp' | 'ppp-products' | 'loading'>('choice')
  const [selectedCCAA, setSelectedCCAA] = useState('')

  const getJoke = (ccaa: string) => {
    const found = comunidades.find(c => c.name === ccaa)
    return found ? found.joke : 'Buscando las mejores opciones...'
  }

  const handleCCAASelect = (ccaa: string) => {
    setSelectedCCAA(ccaa)
    setStep('loading')
    setTimeout(() => {
      setStep('ppp-products')
    }, 3500)
  }

  // All PPP products
  const allPppProducts = [
    {
      id: '120k',
      name: 'Plan Básico',
      price: 'XX€/año',
      coverage: '120.000€',
      features: ['Responsabilidad Civil 120.000€', 'Cobertura en toda España', 'Certificado en 24h'],
    },
    {
      id: '150k',
      name: 'Plan Estándar',
      price: 'XX€/año',
      coverage: '150.500€',
      features: ['Responsabilidad Civil 150.500€', 'Defensa jurídica', 'Certificado en 24h'],
    },
    {
      id: '200k',
      name: 'Plan Plus',
      price: 'XX€/año',
      coverage: '200.000€',
      features: ['Responsabilidad Civil 200.000€', 'Defensa jurídica', 'Asistencia veterinaria'],
    },
    {
      id: '350k',
      name: 'Plan Premium',
      price: 'XX€/año',
      coverage: '350.000€',
      features: ['Responsabilidad Civil 350.000€', 'Defensa jurídica completa', 'Asistencia veterinaria', 'Máxima cobertura'],
    },
  ]

  // CCAA product availability
  const ccaaProducts: Record<string, string[]> = {
    'Canarias': ['200k', '350k'],
    'Castilla y León': ['200k', '350k'],
    'Navarra': ['200k', '350k'],
    'Andalucía': ['200k', '350k'],
    'Cataluña': ['150k', '200k', '350k'],
    'Galicia': ['150k', '200k', '350k'],
  }

  // Get products for selected CCAA (default: all 4)
  const getProductsForCCAA = (ccaa: string) => {
    const availableIds = ccaaProducts[ccaa] || ['120k', '150k', '200k', '350k']
    return allPppProducts.filter(p => availableIds.includes(p.id))
  }

  const pppProducts = getProductsForCCAA(selectedCCAA)

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
      features: ['Responsabilidad Civil cinegética', '2 perros por póliza', '+6€ por perro adicional', 'Complemento licencia de caza'],
    },
    {
      name: 'Plan Criadores',
      price: '58,75€/trimestre',
      features: ['Responsabilidad Civil profesional', 'Múltiples animales', 'Actividad profesional cubierta', 'Adaptado a tu actividad'],
    },
    {
      name: 'Plan Adiestradores',
      price: '58,75€/trimestre',
      features: ['Responsabilidad Civil profesional', 'Cobertura durante sesiones', 'Daños en instalaciones', 'Seguro de accidentes'],
    },
  ]

  return (
    <div className="pt-16 sm:pt-20">
      {/* Step: Choice between PPP and No PPP */}
      {step === 'choice' && (
        <section className="py-16 sm:py-20">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-black text-midnight">
                ¿Qué tipo de perro tienes?
              </h2>

            </div>

            {/* Banner informativo PPP */}
            <a
              href="/que-es-ppp"
              className="block max-w-3xl mx-auto mb-12 group"
            >
              <div className="bg-white border border-midnight/10 rounded-2xl px-6 py-4 flex items-center justify-between gap-4 hover:border-orange transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🐕‍🦺</span>
                  <p className="text-midnight/80 font-medium text-sm sm:text-base">
                    ¿Qué es un perro potencialmente peligroso? <span className="text-orange font-bold">Toda la información aquí</span>
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
                className="group text-left bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange/30"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden rounded-t-3xl">
                  <img
                    src="https://res.cloudinary.com/r5v8fzlu/image/upload/c_fill,g_auto,w_1200,h_800/v1784824659/pexels-blanco-studio-2147970603-29985319_frztvu.jpg"
                    alt="Perro potencialmente peligroso"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-4 py-1.5 bg-orange text-white text-xs font-bold rounded-full shadow-lg">
                      Obligatorio por ley
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <h2 className="text-2xl font-black text-midnight leading-tight">
                    Perros Potencialmente Peligrosos
                  </h2>
                  <ul className="mt-3 space-y-1.5">
                    <li className="flex items-center gap-2 text-midnight/70 text-sm">
                      <span className="text-orange font-bold">✓</span> Rottweiler, Pit Bull, Am. Staffordshire
                    </li>
                    <li className="flex items-center gap-2 text-midnight/70 text-sm">
                      <span className="text-orange font-bold">✓</span> Dogo Argentino, Fila Brasileiro, Tosa Inu
                    </li>
                    <li className="flex items-center gap-2 text-midnight/70 text-sm">
                      <span className="text-orange font-bold">✓</span> Responsabilidad Civil obligatoria
                    </li>
                  </ul>
                  <div className="mt-4">
                    <span className="text-2xl font-black text-midnight">Desde 30€</span>
                    <span className="text-midnight/60 text-sm">/año</span>
                  </div>
                  <div className="mt-4 w-full btn-cta bg-orange text-midnight font-black text-center py-3 rounded-full transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-0.5 flex items-center justify-center gap-2">
                    Ver opciones y contratar
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* No PPP Card */}
              <button
                onClick={() => setStep('noppp')}
                className="group text-left bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange/30"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden rounded-t-3xl">
                  <img
                    src="https://res.cloudinary.com/r5v8fzlu/image/upload/c_fill,g_auto,w_1200,h_800,e_improve,e_auto_brightness/v1784824746/pexels-adriendrj-14682199_aqa2kq.jpg"
                    alt="Perro no peligroso"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-4 py-1.5 bg-midnight text-white text-xs font-bold rounded-full shadow-lg">
                      Recomendado
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <h2 className="text-2xl font-black text-midnight leading-tight">
                    Perros <span className="text-orange underline decoration-4 underline-offset-4">No</span> Peligrosos
                  </h2>
                  <ul className="mt-3 space-y-1.5">
                    <li className="flex items-center gap-2 text-midnight/70 text-sm">
                      <span className="text-orange font-bold">✓</span> Compañía, caza y criadores
                    </li>
                    <li className="flex items-center gap-2 text-midnight/70 text-sm">
                      <span className="text-orange font-bold">✓</span> Responsabilidad Civil completa
                    </li>
                    <li className="flex items-center gap-2 text-midnight/70 text-sm">
                      <span className="text-orange font-bold">✓</span> Cobertura en toda España
                    </li>
                  </ul>
                  <div className="mt-4">
                    <span className="text-2xl font-black text-midnight">Desde 20,40€</span>
                    <span className="text-midnight/60 text-sm">/año</span>
                  </div>
                  <div className="mt-4 w-full btn-cta bg-orange text-midnight font-black text-center py-3 rounded-full transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-0.5 flex items-center justify-center gap-2">
                    Ver opciones y contratar
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
              className="mb-8 flex items-center gap-2 text-midnight/70 hover:text-orange transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver
            </button>

            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-black text-midnight">
                ¿En qué comunidad autónoma vives?
              </h2>
              <p className="mt-3 text-midnight/70 text-lg">
                La normativa PPP varía según tu comunidad. Selecciona la tuya para ver los productos disponibles.
              </p>
            </div>

            <div className="max-w-lg mx-auto">
              <div className="relative">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <span className="text-xl">📍</span>
                </div>
                <select
                  value={selectedCCAA}
                  onChange={(e) => {
                    if (e.target.value) handleCCAASelect(e.target.value)
                  }}
                  className="w-full appearance-none bg-white border-2 border-midnight/10 rounded-2xl pl-14 pr-12 py-5 text-lg font-semibold text-midnight focus:outline-none focus:border-orange focus:ring-4 focus:ring-orange/20 transition-all cursor-pointer hover:border-orange/50 shadow-sm"
                >
                  <option value="">Selecciona tu comunidad autónoma...</option>
                  {comunidades.map((ccaa) => (
                    <option key={ccaa.name} value={ccaa.name}>
                      {ccaa.name}
                    </option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-6 h-6 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* Step: Loading */}
      {step === 'loading' && (
        <section className="py-16 sm:py-20">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange/10 mb-4">
                  <svg className="w-8 h-8 text-orange animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-black text-midnight mb-3">
                Buscando seguros para {selectedCCAA}...
              </h2>
              <p className="text-midnight/70 italic">
                {getJoke(selectedCCAA)}
              </p>
              {/* Progress bar */}
              <div className="mt-8 w-full h-1.5 bg-midnight/10 rounded-full overflow-hidden">
                <div className="h-full bg-orange rounded-full animate-loading-bar" />
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
              className="mb-8 flex items-center gap-2 text-midnight/70 hover:text-orange transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver
            </button>

            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-orange/10 text-orange text-sm font-bold rounded-full mb-4">
                📍 {selectedCCAA}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-midnight">
                Seguros PPP disponibles
              </h2>
              <p className="mt-3 text-midnight/70 text-lg">
                Elige el plan que mejor se adapte a tus necesidades.
              </p>
            </div>

            <div className={`grid gap-5 max-w-6xl mx-auto ${pppProducts.length === 2 ? 'sm:grid-cols-2 max-w-3xl' : pppProducts.length === 3 ? 'sm:grid-cols-3 max-w-4xl' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
              {pppProducts.map((product, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    index === pppProducts.length - 1 ? 'ring-2 ring-orange shadow-lg shadow-orange/10' : 'shadow-sm hover:shadow-lg'
                  }`}
                >
                  {index === pppProducts.length - 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-orange text-white text-xs font-bold rounded-full whitespace-nowrap">
                      Máxima cobertura
                    </div>
                  )}
                  <h3 className="text-lg font-black text-midnight mb-1">{product.name}</h3>
                  <p className="text-orange font-bold text-sm mb-3">RC {product.coverage}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-black text-midnight">{product.price}</span>
                  </div>
                  <ul className="space-y-2 mb-5">
                    {product.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <span className="text-orange font-bold mt-0.5">✓</span>
                        <span className="text-midnight/70 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="block w-full btn-cta bg-orange text-midnight font-black text-center rounded-full py-3 text-sm transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
                  >
                    Contratar →
                  </button>
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
              className="mb-8 flex items-center gap-2 text-midnight/70 hover:text-orange transition-colors font-medium"
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
              <p className="mt-3 text-midnight/70 text-lg">
                Elige el seguro que mejor se adapta a tu situación.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {nopppProducts.map((product, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    index === 0 ? 'ring-2 ring-orange shadow-lg shadow-orange/10' : 'shadow-sm hover:shadow-lg'
                  }`}
                >
                  {index === 0 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-orange text-white text-xs font-bold rounded-full whitespace-nowrap">
                      Más popular
                    </div>
                  )}
                  <h3 className="text-lg font-black text-midnight mb-1">{product.name}</h3>
                  {product.subtitle && (
                    <p className="text-midnight/60 text-xs font-medium mb-2">{product.subtitle}</p>
                  )}
                  <div className="mb-5">
                    <span className="text-2xl font-black text-midnight">{product.price}</span>
                  </div>
                  <ul className="space-y-2.5 mb-6">
                    {product.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <span className="text-orange font-bold mt-0.5">✓</span>
                        <span className="text-midnight/70 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`block w-full text-center rounded-full py-3 font-bold transition-all duration-300 text-sm ${
                      index === 0
                        ? 'bg-orange text-white hover:bg-orange-dark hover:shadow-lg'
                        : 'bg-midnight text-white hover:bg-midnight-light'
                    }`}
                  >
                    Contratar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="py-10 sm:py-12">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-xl">
          <h2 className="text-xl sm:text-2xl font-black text-midnight">
            ¿Tienes dudas?
          </h2>
          <p className="mt-2 text-midnight/70 text-sm">
            Te asesoramos sin compromiso
          </p>
          <div className="mt-5">
            <a
              href="https://wa.me/34667755976"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}