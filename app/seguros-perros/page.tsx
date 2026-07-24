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
  const [step, setStep] = useState<'choice' | 'ppp' | 'noppp' | 'ppp-products' | 'loading' | 'form' | 'confirmation'>('choice')
  const [showComparison, setShowComparison] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<any>(null)
  const [formSection, setFormSection] = useState(0)
  const [formData, setFormData] = useState({
    nombre: '', apellido1: '', apellido2: '', fechaNacimiento: '', dni: '',
    calle: '', numero: '', codigoPostal: '', localidad: '', provincia: '',
    telefono: '', email: '', emailRepeat: '',
    nombrePerro: '', raza: '', microchip: '',
    iban: '',
    aceptaCondiciones: false, aceptaProteccion: false,
  })

  const formSections = [
    'Datos del propietario',
    'Dirección',
    'Datos de contacto',
    'Datos del perro',
    'Datos bancarios',
    'Condiciones legales',
    'Revisa tus datos',
  ]

  const handleContratarClick = (product: any) => {
    setSelectedPlan(product)
    setStep('form')
    setFormSection(0)
  }

  const handleFormChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFormSubmit = () => {
    setStep('confirmation')
  }
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
      price: '51,45€',
      period: '/año',
      coverage: '120.250€',
      subtitle: 'Cobertura básica obligatoria',
      gradientColor: '#CD7F32',
      shieldImg: 'https://res.cloudinary.com/r5v8fzlu/image/upload/e_background_removal/v1784898591/ChatGPT_Image_Jul_24_2026_03_09_02_PM_1_mwfgri.png',
      popular: false,
      features: ['Responsabilidad Civil', 'Cobertura en toda España', 'Certificado en 24h'],
    },
    {
      id: '150k',
      name: 'Plata',
      price: '52,49€',
      period: '/año',
      coverage: '150.300€',
      subtitle: 'Protección intermedia',
      gradientColor: '#C0C0C0',
      shieldImg: 'https://res.cloudinary.com/r5v8fzlu/image/upload/e_background_removal/v1784898592/ChatGPT_Image_Jul_24_2026_03_09_04_PM_2_ogoazg.png',
      popular: false,
      features: ['Responsabilidad Civil', 'Cobertura en toda España', 'Certificado en 24h'],
    },
    {
      id: '180k',
      name: 'Oro',
      price: '56,69€',
      period: '/año',
      coverage: '180.350€',
      subtitle: 'La opción más equilibrada',
      gradientColor: '#FFD700',
      shieldImg: 'https://res.cloudinary.com/r5v8fzlu/image/upload/e_background_removal/v1784898592/ChatGPT_Image_Jul_24_2026_03_09_04_PM_3_i9ejwa.png',
      popular: true,
      features: ['Responsabilidad Civil', 'Cobertura en toda España', 'Certificado en 24h'],
    },
    {
      id: '350k',
      name: 'Esmeralda',
      price: '57,75€',
      period: '/año',
      coverage: '350.000€',
      subtitle: 'Máxima tranquilidad',
      gradientColor: '#50C878',
      shieldImg: 'https://res.cloudinary.com/r5v8fzlu/image/upload/e_background_removal/v1784898590/ChatGPT_Image_Jul_24_2026_03_09_05_PM_4_co8grr.png',
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
    price: '36,77€',
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
                  className="relative rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)] shadow-[0_12px_45px_rgba(0,0,0,0.12)] flex flex-col"
                  style={{ background: `linear-gradient(to top right, white 40%, ${product.gradientColor}40 70%, ${product.gradientColor}80 100%)` }}
                >
                  {/* Popular badge */}
                  {product.popular && (
                    <div className="absolute -top-3 right-4 px-3 py-1 bg-midnight text-white text-xs font-bold rounded-full shadow-md">
                      Popular
                    </div>
                  )}

                  {/* Tier shield - centered, large */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={product.shieldImg}
                      alt={product.name}
                      className="w-24 h-24 object-contain drop-shadow-xl"
                    />
                  </div>

                  {/* Name + subtitle */}
                  <h3 className="text-xl font-black text-midnight text-center">{product.name}</h3>
                  <p className="text-midnight/80 text-sm mt-1 mb-5 text-center">{product.subtitle}</p>

                  {/* Coverage - left aligned, smaller */}
                  <div className="mb-4">
                    <p className="text-midnight/70 text-xs font-semibold">cobertura</p>
                    <span className="text-base font-bold text-midnight">{product.coverage}</span>
                  </div>

                  {/* Price - center, prominent */}
                  <div className="mb-6 text-center">
                    <span className="text-4xl font-black text-midnight">{product.price}</span>
                    <span className="text-midnight font-bold text-base">{product.period}</span>
                  </div>

                  {/* Actions */}
                  <div className="mt-auto">
                    <button 
                      onClick={() => handleContratarClick(product)}
                      className="block w-full btn-cta bg-orange text-midnight font-black text-center rounded-full py-3 text-sm transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 mb-3">
                      Contratar →
                    </button>
                    <button
                      onClick={() => setShowComparison(true)}
                      className="block w-full text-center text-midnight/80 hover:text-orange text-sm font-semibold transition-colors"
                    >
                      Leer más &gt;
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Comparar planes - floating blue button */}
            <div className="text-center mt-6">
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

                <button 
                  onClick={() => handleContratarClick(nopppProduct)}
                  className="w-full btn-cta bg-orange text-midnight font-black text-center rounded-full py-3.5 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5">
                  Contratar →
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA final - hide during loading */}
      {step !== 'loading' && step !== 'form' && step !== 'confirmation' && <section className="py-10 sm:py-12">
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


      {/* Step: Form */}
      {step === 'form' && selectedPlan && (
        <section className="py-12 sm:py-16">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
            {/* Back button */}
            <button
              onClick={() => setStep(selectedCCAA ? 'ppp-products' : 'noppp')}
              className="mb-6 flex items-center gap-2 text-midnight/70 hover:text-orange transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver
            </button>

            {/* Plan summary */}
            <div className="bg-white rounded-2xl p-5 shadow-md mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm text-midnight/60">Plan seleccionado</p>
                <p className="font-black text-midnight text-lg">{selectedPlan.name} — {selectedPlan.coverage}</p>
              </div>
              <span className="text-xl font-black text-orange">{selectedPlan.price}{selectedPlan.period}</span>
            </div>

            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-xs text-midnight/50 mb-2">
                <span>Paso {formSection + 1} de {formSections.length}</span>
                <span>{formSections[formSection]}</span>
              </div>
              <div className="w-full h-1.5 bg-midnight/10 rounded-full overflow-hidden">
                <div className="h-full bg-orange rounded-full transition-all duration-500" style={{ width: `${((formSection + 1) / formSections.length) * 100}%` }} />
              </div>
            </div>

            {/* Form sections */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              
              {/* Section 0: Datos del propietario */}
              {formSection === 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-black text-midnight mb-4">Datos del propietario</h3>
                  <input type="text" placeholder="Nombre" value={formData.nombre} onChange={(e) => handleFormChange('nombre', e.target.value)} className="w-full px-4 py-3 border-2 border-midnight/10 rounded-xl text-midnight placeholder-midnight/40 focus:border-orange focus:outline-none transition-colors" />
                  <input type="text" placeholder="Primer apellido" value={formData.apellido1} onChange={(e) => handleFormChange('apellido1', e.target.value)} className="w-full px-4 py-3 border-2 border-midnight/10 rounded-xl text-midnight placeholder-midnight/40 focus:border-orange focus:outline-none transition-colors" />
                  <input type="text" placeholder="Segundo apellido" value={formData.apellido2} onChange={(e) => handleFormChange('apellido2', e.target.value)} className="w-full px-4 py-3 border-2 border-midnight/10 rounded-xl text-midnight placeholder-midnight/40 focus:border-orange focus:outline-none transition-colors" />
                  <input type="text" placeholder="Fecha de nacimiento (DD/MM/AAAA)" value={formData.fechaNacimiento} onChange={(e) => handleFormChange('fechaNacimiento', e.target.value)} className="w-full px-4 py-3 border-2 border-midnight/10 rounded-xl text-midnight placeholder-midnight/40 focus:border-orange focus:outline-none transition-colors" />
                  <input type="text" placeholder="DNI/NIE" value={formData.dni} onChange={(e) => handleFormChange('dni', e.target.value)} className="w-full px-4 py-3 border-2 border-midnight/10 rounded-xl text-midnight placeholder-midnight/40 focus:border-orange focus:outline-none transition-colors" />
                </div>
              )}

              {/* Section 1: Dirección */}
              {formSection === 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-black text-midnight mb-4">Dirección</h3>
                  <input type="text" placeholder="Calle" value={formData.calle} onChange={(e) => handleFormChange('calle', e.target.value)} className="w-full px-4 py-3 border-2 border-midnight/10 rounded-xl text-midnight placeholder-midnight/40 focus:border-orange focus:outline-none transition-colors" />
                  <input type="text" placeholder="Número" value={formData.numero} onChange={(e) => handleFormChange('numero', e.target.value)} className="w-full px-4 py-3 border-2 border-midnight/10 rounded-xl text-midnight placeholder-midnight/40 focus:border-orange focus:outline-none transition-colors" />
                  <input type="text" placeholder="Código postal" value={formData.codigoPostal} onChange={(e) => handleFormChange('codigoPostal', e.target.value)} className="w-full px-4 py-3 border-2 border-midnight/10 rounded-xl text-midnight placeholder-midnight/40 focus:border-orange focus:outline-none transition-colors" />
                  <input type="text" placeholder="Localidad" value={formData.localidad} onChange={(e) => handleFormChange('localidad', e.target.value)} className="w-full px-4 py-3 border-2 border-midnight/10 rounded-xl text-midnight placeholder-midnight/40 focus:border-orange focus:outline-none transition-colors" />
                  <input type="text" placeholder="Provincia" value={formData.provincia} onChange={(e) => handleFormChange('provincia', e.target.value)} className="w-full px-4 py-3 border-2 border-midnight/10 rounded-xl text-midnight placeholder-midnight/40 focus:border-orange focus:outline-none transition-colors" />
                </div>
              )}

              {/* Section 2: Datos de contacto */}
              {formSection === 2 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-black text-midnight mb-4">Datos de contacto</h3>
                  <input type="tel" placeholder="Teléfono (9 dígitos)" value={formData.telefono} onChange={(e) => handleFormChange('telefono', e.target.value)} className="w-full px-4 py-3 border-2 border-midnight/10 rounded-xl text-midnight placeholder-midnight/40 focus:border-orange focus:outline-none transition-colors" />
                  <input type="email" placeholder="Email" value={formData.email} onChange={(e) => handleFormChange('email', e.target.value)} className="w-full px-4 py-3 border-2 border-midnight/10 rounded-xl text-midnight placeholder-midnight/40 focus:border-orange focus:outline-none transition-colors" />
                  <input type="email" placeholder="Repetir email" value={formData.emailRepeat} onChange={(e) => handleFormChange('emailRepeat', e.target.value)} className="w-full px-4 py-3 border-2 border-midnight/10 rounded-xl text-midnight placeholder-midnight/40 focus:border-orange focus:outline-none transition-colors" />
                </div>
              )}

              {/* Section 3: Datos del perro */}
              {formSection === 3 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-black text-midnight mb-4">Datos del perro</h3>
                  <input type="text" placeholder="Nombre del perro" value={formData.nombrePerro} onChange={(e) => handleFormChange('nombrePerro', e.target.value)} className="w-full px-4 py-3 border-2 border-midnight/10 rounded-xl text-midnight placeholder-midnight/40 focus:border-orange focus:outline-none transition-colors" />
                  <input type="text" placeholder="Raza" value={formData.raza} onChange={(e) => handleFormChange('raza', e.target.value)} className="w-full px-4 py-3 border-2 border-midnight/10 rounded-xl text-midnight placeholder-midnight/40 focus:border-orange focus:outline-none transition-colors" />
                  <input type="text" placeholder="Número de microchip (15 dígitos)" value={formData.microchip} onChange={(e) => handleFormChange('microchip', e.target.value)} className="w-full px-4 py-3 border-2 border-midnight/10 rounded-xl text-midnight placeholder-midnight/40 focus:border-orange focus:outline-none transition-colors" />
                </div>
              )}

              {/* Section 4: Datos bancarios */}
              {formSection === 4 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-black text-midnight mb-4">Datos bancarios</h3>
                  <p className="text-midnight/60 text-sm mb-2">Introduce tu IBAN para la domiciliación del pago.</p>
                  <input type="text" placeholder="ES00 0000 0000 0000 0000 0000" value={formData.iban} onChange={(e) => handleFormChange('iban', e.target.value)} className="w-full px-4 py-3 border-2 border-midnight/10 rounded-xl text-midnight placeholder-midnight/40 focus:border-orange focus:outline-none transition-colors font-mono" />
                </div>
              )}

              {/* Section 5: Condiciones legales */}
              {formSection === 5 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-black text-midnight mb-4">Condiciones legales</h3>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" checked={formData.aceptaCondiciones} onChange={(e) => handleFormChange('aceptaCondiciones', e.target.checked)} className="mt-1 w-5 h-5 rounded border-midnight/20 text-orange focus:ring-orange" />
                    <span className="text-midnight/80 text-sm">Acepto las condiciones generales del seguro y la política de privacidad.</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" checked={formData.aceptaProteccion} onChange={(e) => handleFormChange('aceptaProteccion', e.target.checked)} className="mt-1 w-5 h-5 rounded border-midnight/20 text-orange focus:ring-orange" />
                    <span className="text-midnight/80 text-sm">Autorizo el tratamiento de mis datos personales conforme al RGPD.</span>
                  </label>
                </div>
              )}

              {/* Section 6: Resumen */}
              {formSection === 6 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-black text-midnight mb-4">Revisa tus datos</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-midnight/5">
                      <span className="text-midnight/60">Nombre</span>
                      <span className="text-midnight font-medium">{formData.nombre} {formData.apellido1} {formData.apellido2}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-midnight/5">
                      <span className="text-midnight/60">DNI/NIE</span>
                      <span className="text-midnight font-medium">{formData.dni}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-midnight/5">
                      <span className="text-midnight/60">Dirección</span>
                      <span className="text-midnight font-medium">{formData.calle} {formData.numero}, {formData.codigoPostal} {formData.localidad}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-midnight/5">
                      <span className="text-midnight/60">Teléfono</span>
                      <span className="text-midnight font-medium">{formData.telefono}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-midnight/5">
                      <span className="text-midnight/60">Email</span>
                      <span className="text-midnight font-medium">{formData.email}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-midnight/5">
                      <span className="text-midnight/60">Perro</span>
                      <span className="text-midnight font-medium">{formData.nombrePerro} ({formData.raza})</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-midnight/5">
                      <span className="text-midnight/60">Microchip</span>
                      <span className="text-midnight font-medium">{formData.microchip}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-midnight/5">
                      <span className="text-midnight/60">IBAN</span>
                      <span className="text-midnight font-medium">{formData.iban}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-midnight/60">Plan</span>
                      <span className="text-orange font-bold">{selectedPlan.name} — {selectedPlan.price}{selectedPlan.period}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex gap-3 mt-8">
                {formSection > 0 && (
                  <button
                    onClick={() => setFormSection(prev => prev - 1)}
                    className="flex-1 py-3 border-2 border-midnight/10 rounded-full text-midnight font-bold hover:bg-midnight/5 transition-colors"
                  >
                    ← Anterior
                  </button>
                )}
                {formSection < formSections.length - 1 ? (
                  <button
                    onClick={() => setFormSection(prev => prev + 1)}
                    className="flex-1 btn-cta bg-orange text-midnight font-black py-3 rounded-full transition-all duration-300 hover:scale-[1.02]"
                  >
                    Siguiente →
                  </button>
                ) : (
                  <form
                    action="https://formsubmit.co/seguros@gestoriamera.com"
                    method="POST"
                    className="flex-1"
                    onSubmit={handleFormSubmit}
                  >
                    <input type="hidden" name="_subject" value={`Nueva solicitud seguro perro — ${selectedPlan.name}`} />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="Plan" value={`${selectedPlan.name} - ${selectedPlan.coverage} - ${selectedPlan.price}${selectedPlan.period}`} />
                    <input type="hidden" name="Comunidad Autónoma" value={selectedCCAA || 'No PPP'} />
                    <input type="hidden" name="Nombre completo" value={`${formData.nombre} ${formData.apellido1} ${formData.apellido2}`} />
                    <input type="hidden" name="DNI/NIE" value={formData.dni} />
                    <input type="hidden" name="Fecha nacimiento" value={formData.fechaNacimiento} />
                    <input type="hidden" name="Dirección" value={`${formData.calle} ${formData.numero}, ${formData.codigoPostal} ${formData.localidad} (${formData.provincia})`} />
                    <input type="hidden" name="Teléfono" value={formData.telefono} />
                    <input type="hidden" name="Email" value={formData.email} />
                    <input type="hidden" name="Nombre perro" value={formData.nombrePerro} />
                    <input type="hidden" name="Raza" value={formData.raza} />
                    <input type="hidden" name="Microchip" value={formData.microchip} />
                    <input type="hidden" name="IBAN" value={formData.iban} />
                    <button
                      type="submit"
                      className="w-full btn-cta bg-orange text-midnight font-black py-3 rounded-full transition-all duration-300 hover:scale-[1.02]"
                    >
                      Enviar solicitud ✓
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step: Confirmation */}
      {step === 'confirmation' && (
        <section className="py-16 sm:py-20">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 max-w-lg text-center">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-black text-midnight mb-3">¡Solicitud enviada!</h2>
              <p className="text-midnight/70 mb-6">
                Hemos recibido tu solicitud. Nos pondremos en contacto contigo en menos de 2 horas (lunes a viernes) para confirmar tu póliza.
              </p>
              <a
                href="https://wa.me/34667755976"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-full hover:bg-[#20bd5a] transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </section>
      )}

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
                      <span className="text-emerald-600 font-black">Esmeralda</span>
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
                    <td className="py-4 px-3 text-center font-bold text-midnight">51,45€/año</td>
                    <td className="py-4 px-3 text-center font-bold text-midnight">52,49€/año</td>
                    <td className="py-4 px-3 text-center font-bold text-midnight">56,69€/año</td>
                    <td className="py-4 px-3 text-center font-bold text-midnight">57,75€/año</td>
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