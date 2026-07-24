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
  const [showComparison, setShowComparison] = useState(false)
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

  // All PPP products - Lassie style tiers
  const allPppProducts = [
    {
      id: '120k',
      name: 'Bronce',
      price: '49€',
      period: '/año',
      coverage: '120.250€',
      subtitle: 'Cobertura básica obligatoria',
      color: 'from-white via-white to-amber-100',
      borderColor: 'border-amber-600/40',
      borderLeft: 'border-l-4 border-l-amber-600',
      badgeColor: 'bg-amber-700 text-white',
      iconColor: 'text-amber-700',
      shieldGradient: 'from-amber-600 to-amber-800',
      popular: false,
      features: ['Responsabilidad Civil', 'Cobertura en toda España', 'Certificado en 24h'],
    },
    {
      id: '150k',
      name: 'Plata',
      price: '50€',
      period: '/año',
      coverage: '150.300€',
      subtitle: 'Protección intermedia',
      color: 'from-white via-white to-slate-100',
      borderColor: 'border-slate-400/40',
      borderLeft: 'border-l-4 border-l-slate-400',
      badgeColor: 'bg-slate-500 text-white',
      iconColor: 'text-slate-500',
      shieldGradient: 'from-slate-400 to-slate-600',
      popular: false,
      features: ['Responsabilidad Civil', 'Cobertura en toda España', 'Certificado en 24h'],
    },
    {
      id: '180k',
      name: 'Oro',
      price: '53,99€',
      period: '/año',
      coverage: '180.350€',
      subtitle: 'La opción más equilibrada',
      color: 'from-white via-white to-yellow-100',
      borderColor: 'border-yellow-500/40',
      borderLeft: 'border-l-4 border-l-yellow-500',
      badgeColor: 'bg-yellow-500 text-midnight',
      iconColor: 'text-yellow-600',
      shieldGradient: 'from-yellow-400 to-amber-600',
      popular: true,
      features: ['Responsabilidad Civil', 'Cobertura en toda España', 'Certificado en 24h'],
    },
    {
      id: '350k',
      name: 'Platino',
      price: '55€',
      period: '/año',
      coverage: '350.000€',
      subtitle: 'Máxima tranquilidad',
      color: 'from-white via-white to-slate-200',
      borderColor: 'border-slate-500/40',
      borderLeft: 'border-l-4 border-l-slate-500',
      badgeColor: 'bg-slate-600 text-white',
      iconColor: 'text-slate-600',
      shieldGradient: 'from-slate-500 to-slate-700',
      popular: false,
      features: ['Responsabilidad Civil máxima', 'Cobertura en toda España', 'Certificado en 24h'],
    },
  ]

  // CCAA product availability
  const ccaaProducts: Record<string, string[]> = {
    'Canarias': ['180k', '350k'],
    'Castilla y León': ['180k', '350k'],
    'Navarra': ['180k', '350k'],
    'Andalucía': ['180k', '350k'],
    'Cataluña': ['150k', '180k', '350k'],
    'Galicia': ['150k', '180k', '350k'],
  }

  // Get products for selected CCAA (default: all 4)
  const getProductsForCCAA = (ccaa: string) => {
    const availableIds = ccaaProducts[ccaa] || ['120k', '150k', '180k', '350k']
    return allPppProducts.filter(p => availableIds.includes(p.id))
  }

  const pppProducts = getProductsForCCAA(selectedCCAA)

  // Product for No PPP (single option)
  const nopppProduct = {
    name: 'Oro',
    price: '35€',
    period: '/año',
    coverage: '350.000€',
    subtitle: 'Máxima protección para tu perro',
    features: ['Responsabilidad Civil 350.000€', 'Todas las razas no peligrosas', 'Cobertura en toda España', 'Certificado en 24h'],
  }

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
                La normativa varía según tu comunidad. Selecciona la tuya para ver los productos disponibles.
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
                Seguros disponibles
              </h2>
              <p className="mt-3 text-midnight/70 text-lg">
                Elige el plan que mejor se adapte a tus necesidades.
              </p>

            </div>

            <div className={`grid gap-5 max-w-6xl mx-auto ${pppProducts.length === 2 ? 'sm:grid-cols-2 max-w-3xl' : pppProducts.length === 3 ? 'sm:grid-cols-3 max-w-4xl' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
              {pppProducts.map((product, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-b ${product.color} border ${product.borderColor} ${product.borderLeft} rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-lg min-h-[450px] flex flex-col`}
                >
                  {/* Popular badge */}
                  {product.popular && (
                    <div className="absolute -top-3 right-5 px-3 py-1 bg-orange text-white text-xs font-bold rounded-full shadow-md">
                      Popular
                    </div>
                  )}

                  {/* Tier shield - centered, no white circle */}
                  <div className="flex justify-center mb-5">
                    <svg className={`w-10 h-10 ${product.iconColor} drop-shadow-md`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                      <path d="M12 3.18l7 3.12v4.7c0 4.83-3.4 9.16-7 10.32-3.6-1.16-7-5.49-7-10.32V6.3l7-3.12z" fill="currentColor" opacity="0.6"/>
                      <path d="M10 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </div>

                  {/* Name + subtitle - centered */}
                  <div className="text-center mb-5">
                    <h3 className="text-xl font-black text-midnight">{product.name}</h3>
                    <p className="text-midnight/80 text-sm mt-1">{product.subtitle}</p>
                  </div>

                  {/* Coverage section */}
                  <div className="mb-5 pb-5 border-b border-midnight/10 text-center">
                    <p className="text-midnight/70 text-xs tracking-wide font-bold mb-1">cobertura</p>
                    <span className="text-2xl font-black text-midnight">{product.coverage}</span>
                  </div>

                  {/* Price */}
                  <div className="mb-5 text-center">
                    <span className="text-3xl font-black text-midnight">{product.price}</span>
                    <span className="text-midnight/70 text-sm">{product.period}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6 flex-grow">
                    {product.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <span className="text-green-500 text-sm font-bold">✓</span>
                        <span className="text-midnight/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="mt-auto">
                    <button className="block w-full btn-cta bg-orange text-midnight font-black text-center rounded-full py-3 text-sm transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 mb-3">
                      Contratar →
                    </button>
                    <button
                      onClick={() => setShowComparison(true)}
                      className="block w-full text-center text-midnight font-bold text-sm hover:text-orange transition-colors underline underline-offset-2"
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Comparar planes - floating blue button */}
            <div className="text-center mt-10">
              <button
                onClick={() => setShowComparison(true)}
                className="inline-flex items-center gap-2 bg-midnight text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-midnight/30 hover:shadow-xl hover:shadow-midnight/40 transition-all duration-300 hover:-translate-y-0.5 animate-bounce-subtle"
              >
                Comparar planes
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>
        </section>
      )}

      {/* Step: No PPP Product */}
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

            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-black text-midnight">
                Seguro para perros <span className="text-orange underline decoration-4 underline-offset-4">no</span> peligrosos
              </h2>
            </div>

            <div className="max-w-sm mx-auto">
              <div className="bg-gradient-to-b from-yellow-500/10 to-amber-400/5 border border-yellow-500/30 rounded-3xl p-8">
                {/* Tier icon */}
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-5 text-yellow-500">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L3 7v6c0 5.25 3.75 10.13 9 11.25 5.25-1.12 9-6 9-11.25V7l-9-5z"/>
                  </svg>
                </div>

                <h3 className="text-2xl font-black text-midnight">{nopppProduct.name}</h3>
                <p className="text-midnight/60 text-sm mt-1 mb-6">{nopppProduct.subtitle}</p>

                {/* Coverage */}
                <div className="mb-5 pb-5 border-b border-midnight/10">
                  <p className="text-midnight/50 text-xs uppercase tracking-wide font-bold mb-1">Cobertura</p>
                  <span className="text-2xl font-black text-midnight">{nopppProduct.coverage}</span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-black text-midnight">{nopppProduct.price}</span>
                  <span className="text-midnight/50 text-sm">{nopppProduct.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-6">
                  {nopppProduct.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <span className="text-green-500 text-sm">✓</span>
                      <span className="text-midnight/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full btn-cta bg-orange text-midnight font-black text-center rounded-full py-3.5 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5">
                  Contratar →
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA final - hide during loading */}
      {step !== 'loading' && <section className="py-10 sm:py-12">
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
      </section>}

      {/* Comparison Table Modal */}
      {showComparison && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setShowComparison(false)}>
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-auto p-6 sm:p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-black text-midnight">Comparativa de planes</h3>
              <button
                onClick={() => setShowComparison(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-midnight/5 transition-colors"
              >
                <svg className="w-6 h-6 text-midnight/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Comparison table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-midnight/10">
                    <th className="text-left py-3 pr-4 text-midnight/60 font-medium w-1/3"></th>
                    <th className="py-3 px-3 text-center">
                      <span className="text-amber-700 font-black">Bronce</span>
                    </th>
                    <th className="py-3 px-3 text-center">
                      <span className="text-gray-500 font-black">Plata</span>
                    </th>
                    <th className="py-3 px-3 text-center">
                      <span className="text-yellow-500 font-black">Oro</span>
                    </th>
                    <th className="py-3 px-3 text-center">
                      <span className="text-indigo-500 font-black">Platino</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-midnight/5">
                    <td className="py-4 pr-4 font-medium text-midnight">Cobertura RC</td>
                    <td className="py-4 px-3 text-center font-bold text-midnight">120.250€</td>
                    <td className="py-4 px-3 text-center font-bold text-midnight">150.300€</td>
                    <td className="py-4 px-3 text-center font-bold text-midnight">180.350€</td>
                    <td className="py-4 px-3 text-center font-bold text-midnight">350.000€</td>
                  </tr>
                  <tr className="border-b border-midnight/5 bg-midnight/[0.02]">
                    <td className="py-4 pr-4 font-medium text-midnight">Precio</td>
                    <td className="py-4 px-3 text-center font-bold text-midnight">49€/año</td>
                    <td className="py-4 px-3 text-center font-bold text-midnight">50€/año</td>
                    <td className="py-4 px-3 text-center font-bold text-midnight">53,99€/año</td>
                    <td className="py-4 px-3 text-center font-bold text-midnight">55€/año</td>
                  </tr>
                  <tr className="border-b border-midnight/5">
                    <td className="py-4 pr-4 font-medium text-midnight">Daños corporales</td>
                    <td className="py-4 px-3 text-center text-green-500">✓</td>
                    <td className="py-4 px-3 text-center text-green-500">✓</td>
                    <td className="py-4 px-3 text-center text-green-500">✓</td>
                    <td className="py-4 px-3 text-center text-green-500">✓</td>
                  </tr>
                  <tr className="border-b border-midnight/5 bg-midnight/[0.02]">
                    <td className="py-4 pr-4 font-medium text-midnight">Daños materiales</td>
                    <td className="py-4 px-3 text-center text-green-500">✓</td>
                    <td className="py-4 px-3 text-center text-green-500">✓</td>
                    <td className="py-4 px-3 text-center text-green-500">✓</td>
                    <td className="py-4 px-3 text-center text-green-500">✓</td>
                  </tr>
                  <tr className="border-b border-midnight/5">
                    <td className="py-4 pr-4 font-medium text-midnight">Defensa jurídica</td>
                    <td className="py-4 px-3 text-center text-red-400">✗</td>
                    <td className="py-4 px-3 text-center text-green-500">✓</td>
                    <td className="py-4 px-3 text-center text-green-500">✓</td>
                    <td className="py-4 px-3 text-center text-green-500">✓</td>
                  </tr>
                  <tr className="border-b border-midnight/5 bg-midnight/[0.02]">
                    <td className="py-4 pr-4 font-medium text-midnight">Fianzas judiciales</td>
                    <td className="py-4 px-3 text-center text-red-400">✗</td>
                    <td className="py-4 px-3 text-center text-red-400">✗</td>
                    <td className="py-4 px-3 text-center text-green-500">✓</td>
                    <td className="py-4 px-3 text-center text-green-500">✓</td>
                  </tr>
                  <tr className="border-b border-midnight/5">
                    <td className="py-4 pr-4 font-medium text-midnight">Asistencia veterinaria</td>
                    <td className="py-4 px-3 text-center text-red-400">✗</td>
                    <td className="py-4 px-3 text-center text-red-400">✗</td>
                    <td className="py-4 px-3 text-center text-red-400">✗</td>
                    <td className="py-4 px-3 text-center text-green-500">✓</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-medium text-midnight">Cobertura en toda España</td>
                    <td className="py-4 px-3 text-center text-green-500">✓</td>
                    <td className="py-4 px-3 text-center text-green-500">✓</td>
                    <td className="py-4 px-3 text-center text-green-500">✓</td>
                    <td className="py-4 px-3 text-center text-green-500">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-midnight/50 text-xs text-center">
              Todos los planes incluyen certificado en 24 horas y cobertura inmediata.
            </p>
          </div>
        </div>
      )}

    </div>
  )
}