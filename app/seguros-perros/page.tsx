"use client"

import { useState } from 'react'

type PageStep = 'choice' | 'ppp-products' | 'noppp' | 'form' | 'confirmation'

interface PlanProduct {
  name: string
  price: string
  period: string
  coverage: string
  subtitle: string
  features: string[]
}

interface DogFormData {
  nombre: string
  apellido1: string
  apellido2: string
  fechaNacimiento: string
  dni: string
  calle: string
  numero: string
  codigoPostal: string
  localidad: string
  provincia: string
  telefono: string
  email: string
  emailRepeat: string
  nombrePerro: string
  razaPerro: string
  sexoPerro: string
  fechaNacimientoPerro: string
  microchip: string
  iban: string
  aceptaCondiciones: boolean
  aceptaProteccion: boolean
}

type FormErrors = Partial<Record<keyof DogFormData | 'legal', string>>

export default function SegurosPerrosPage() {
  const comunidades = [
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

  const [step, setStep] = useState<PageStep>('choice')
  const [selectedPlan, setSelectedPlan] = useState<PlanProduct | null>(null)
  const [formSection, setFormSection] = useState(0)
  const [formData, setFormData] = useState<DogFormData>({
    nombre: '', apellido1: '', apellido2: '', fechaNacimiento: '', dni: '',
    calle: '', numero: '', codigoPostal: '', localidad: '', provincia: '',
    telefono: '', email: '', emailRepeat: '',
    nombrePerro: '', razaPerro: '', sexoPerro: '', fechaNacimientoPerro: '', microchip: '',
    iban: '',
    aceptaCondiciones: false, aceptaProteccion: false,
  })
  const [fotoCartilla, setFotoCartilla] = useState<File | null>(null)
  const [formErrors, setFormErrors] = useState<FormErrors>({})

  const inputClass = "w-full px-4 py-3 border-2 border-midnight/10 rounded-xl text-midnight placeholder-midnight/40 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all"
  const inputErrorClass = "w-full px-4 py-3 border-2 border-red-400 rounded-xl text-midnight placeholder-midnight/40 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all"
  const labelClass = "block text-sm font-bold text-midnight mb-1.5"

  const validateDNI = (value: string) => {
    const dniRegex = /^[0-9]{8}[A-Za-z]$/
    const nieRegex = /^[XYZxyz][0-9]{7}[A-Za-z]$/
    return dniRegex.test(value) || nieRegex.test(value)
  }

  const calculateAge = (dateStr: string) => {
    const parts = dateStr.split('/')
    if (parts.length !== 3) return -1
    const day = parseInt(parts[0], 10)
    const month = parseInt(parts[1], 10) - 1
    const year = parseInt(parts[2], 10)
    if (isNaN(day) || isNaN(month) || isNaN(year)) return -1
    const birth = new Date(year, month, day)
    const today = new Date()
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    return age
  }

  const validateSection = (section: number) => {
    const errors: FormErrors = {}
    if (section === 0) {
      if (!formData.nombre.trim()) errors.nombre = 'Campo obligatorio'
      if (!formData.apellido1.trim()) errors.apellido1 = 'Campo obligatorio'
      if (!formData.fechaNacimiento.trim()) {
        errors.fechaNacimiento = 'Campo obligatorio'
      } else {
        const age = calculateAge(formData.fechaNacimiento)
        if (age < 0) errors.fechaNacimiento = 'Formato incorrecto. Usa DD/MM/AAAA'
        else if (age < 18) errors.fechaNacimiento = 'Debes ser mayor de 18 años para contratar'
      }
      if (!formData.dni.trim()) {
        errors.dni = 'Campo obligatorio'
      } else if (!validateDNI(formData.dni.trim())) {
        errors.dni = 'Formato incorrecto. Ejemplo: 12345678A o X1234567A'
      }
    }
    if (section === 1) {
      if (!formData.calle.trim()) errors.calle = 'Campo obligatorio'
      if (!formData.numero.trim()) errors.numero = 'Campo obligatorio'
      if (!formData.codigoPostal.trim()) errors.codigoPostal = 'Campo obligatorio'
      if (!formData.localidad.trim()) errors.localidad = 'Campo obligatorio'
      if (!formData.provincia.trim()) errors.provincia = 'Campo obligatorio'
    }
    if (section === 2) {
      if (!formData.telefono.trim()) {
        errors.telefono = 'Campo obligatorio'
      } else if (!/^[0-9]{9}$/.test(formData.telefono.replace(/\s/g, ''))) {
        errors.telefono = 'El teléfono debe tener 9 dígitos'
      }
      if (!formData.email.trim()) {
        errors.email = 'Campo obligatorio'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        errors.email = 'El formato del email no es correcto'
      }
      if (!formData.emailRepeat.trim()) {
        errors.emailRepeat = 'Campo obligatorio'
      } else if (formData.email.trim() !== formData.emailRepeat.trim()) {
        errors.emailRepeat = 'Los emails no coinciden'
      }
    }
    if (section === 3) {
      if (!formData.nombrePerro.trim()) errors.nombrePerro = 'Campo obligatorio'
      if (!formData.razaPerro.trim()) errors.razaPerro = 'Campo obligatorio'
      if (!formData.sexoPerro) errors.sexoPerro = 'Campo obligatorio'
      if (!formData.microchip.trim()) {
        errors.microchip = 'Campo obligatorio'
      } else if (!/^[0-9]{15}$/.test(formData.microchip.replace(/\s/g, ''))) {
        errors.microchip = 'El microchip debe tener exactamente 15 dígitos'
      }
    }
    if (section === 4) {
      const cleanIban = formData.iban.replace(/\s/g, '').toUpperCase()
      if (!cleanIban) {
        errors.iban = 'Campo obligatorio'
      } else if (!/^ES[0-9]{22}$/.test(cleanIban)) {
        errors.iban = 'El IBAN debe tener formato español: ES + 22 dígitos'
      }
    }
    if (section === 5) {
      if (!formData.aceptaCondiciones || !formData.aceptaProteccion) {
        errors.legal = 'Debes aceptar ambas condiciones para continuar'
      }
    }
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const formSections = [
    'Datos del propietario',
    'Dirección',
    'Datos de contacto',
    'Datos del perro',
    'Datos bancarios',
    'Condiciones legales',
    'Revisa tus datos',
  ]

  const handleContratarClick = (product: PlanProduct) => {
    setSelectedPlan(product)
    setStep('form')
    setFormSection(0)
  }

  const handleFormChange = <K extends keyof DogFormData,>(field: K, value: DogFormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFormSubmit = () => {
    setStep('confirmation')
  }
  const [selectedCCAA, setSelectedCCAA] = useState('')

  const handleCCAAChange = (ccaa: string) => {
    setSelectedCCAA(ccaa)
    setSelectedPlan(null)
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

  // Get available product IDs for selected CCAA
  const getAvailableIds = (ccaa: string) => {
    return ccaaProducts[ccaa] || ['120k', '150k', '180k', '350k']
  }

  const availableIds = selectedCCAA ? getAvailableIds(selectedCCAA) : ['120k', '150k', '180k', '350k']
  const pppProducts = allPppProducts // Always show all 4

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
                onClick={() => { setStep('ppp-products'); setSelectedPlan(null) }}
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

      
            {/* Step: PPP Products */}
      {step === 'ppp-products' && (
        <section className="py-10 sm:py-14">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back button */}
            <button
              onClick={() => { setStep('choice'); setSelectedCCAA(''); setSelectedPlan(null) }}
              className="mb-5 sm:mb-7 flex items-center gap-2 text-midnight/70 hover:text-orange transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver
            </button>

            {/* Compact header shown after completing the mandatory first step */}
            {selectedCCAA && (
              <div className="text-center mb-7 animate-fade-in">
                <h2 className="text-3xl sm:text-4xl font-black text-midnight">
                  Elige tu cobertura
                </h2>
                <p className="mt-3 text-sm sm:text-base text-midnight/65 max-w-2xl mx-auto">
                  Todas las opciones incluyen las mismas garantías. Solo cambian el límite de cobertura y el precio anual.
                </p>
                <div className="max-w-md mx-auto mt-4">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <span className="text-lg">📍</span>
                    </div>
                    <select
                      value={selectedCCAA}
                      onChange={(e) => handleCCAAChange(e.target.value)}
                      className="w-full appearance-none bg-white border-2 border-midnight/15 rounded-xl pl-12 pr-12 py-3 text-sm font-semibold text-midnight focus:outline-none focus:border-orange focus:ring-4 focus:ring-orange/20 transition-all cursor-pointer hover:border-orange/50 shadow-sm"
                    >
                      <option value="">Selecciona tu comunidad o ciudad autónoma</option>
                      {comunidades.map((ccaa) => (
                        <option key={ccaa.name} value={ccaa.name}>
                          {ccaa.name}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}



            <div className="relative">


            <div className={`relative ${selectedCCAA ? 'min-h-0' : 'min-h-[460px] sm:min-h-[500px]'}`}>
            {/* Mandatory first step, floating above a preview of the plans */}
            {!selectedCCAA && (
              <div className="absolute inset-0 z-30 flex items-center justify-center px-2 pb-8 sm:pb-12">
                <div className="relative text-center bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-[0_28px_80px_rgba(25,25,112,0.25)] p-6 sm:p-8 max-w-lg w-full border-2 border-white ring-1 ring-orange/25">
                  <div className="absolute inset-x-10 -top-px h-px bg-gradient-to-r from-transparent via-orange to-transparent" />
                  <h2 className="text-2xl sm:text-4xl font-black text-midnight leading-tight">
                    ¿Dónde vives?
                  </h2>
                  <label htmlFor="ccaa-first-step" className="sr-only">
                    Comunidad o ciudad autónoma
                  </label>
                  <div className="relative mt-6">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                      <span className="text-xl" aria-hidden="true">📍</span>
                    </div>
                    <select
                      id="ccaa-first-step"
                      value={selectedCCAA}
                      onChange={(e) => handleCCAAChange(e.target.value)}
                      className="w-full appearance-none bg-white border-2 border-orange/50 rounded-2xl pl-12 pr-12 py-4 sm:py-5 text-base sm:text-lg font-bold text-midnight focus:outline-none focus:border-orange focus:ring-4 focus:ring-orange/25 transition-all cursor-pointer hover:border-orange shadow-[0_10px_30px_rgba(25,25,112,0.10)] relative z-20"
                    >
                      <option value="">Selecciona una opción</option>
                      {comunidades.map((ccaa) => (
                        <option key={ccaa.name} value={ccaa.name}>
                          {ccaa.name}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-30" aria-hidden="true">
                      <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div
              aria-hidden={!selectedCCAA}
              className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto transition-all duration-500 ${!selectedCCAA ? 'blur-[7px] sm:blur-[9px] opacity-45 scale-[0.97] pointer-events-none select-none' : 'blur-0 opacity-100 scale-100'}`}
            >
              {pppProducts.map((product) => {
                const isAvailable = availableIds.includes(product.id)
                const isSelected = selectedPlan?.name === product.name
                return (
                <button
                  type="button"
                  key={product.id}
                  onClick={() => isAvailable && setSelectedPlan(product)}
                  disabled={!isAvailable}
                  aria-pressed={isSelected}
                  className={`relative overflow-hidden rounded-2xl border-2 p-5 sm:p-6 text-center transition-all duration-300 flex flex-col min-h-[310px] sm:min-h-[340px] focus:outline-none focus:ring-4 focus:ring-orange/20 ${isSelected ? 'border-orange shadow-[0_18px_45px_rgba(255,165,0,0.28)] -translate-y-1' : 'border-white/70 shadow-[0_10px_35px_rgba(25,25,112,0.10)]'} ${isAvailable ? 'hover:-translate-y-1 hover:border-orange/60 hover:shadow-[0_16px_45px_rgba(25,25,112,0.14)] cursor-pointer' : 'opacity-50 grayscale-[80%] cursor-not-allowed'}`}
                  style={{ background: `linear-gradient(to bottom right, white 45%, ${product.gradientColor}35 100%)` }}
                >
                  {/* Unavailable overlay */}
                  {!isAvailable && selectedCCAA && (
                    <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px] rounded-2xl flex items-center justify-center z-10">
                      <div className="bg-midnight/90 rounded-2xl px-6 py-5 text-center shadow-lg max-w-[220px]">
                        <svg className="w-8 h-8 text-white/90 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <p className="text-white font-black text-sm mb-1">No disponible</p>
                        <p className="text-white/80 text-xs leading-snug">Tu comunidad exige una cobertura mínima superior</p>
                      </div>
                    </div>
                  )}
                  {isSelected && (
                    <span className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-orange text-midnight" aria-label="Opción seleccionada">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  )}

                  <img
                    src={product.shieldImg}
                    alt=""
                    aria-hidden="true"
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto drop-shadow-lg"
                  />

                  <h3 className="mt-3 text-lg sm:text-xl font-black text-midnight">
                    {product.name}
                  </h3>

                  <div className="mt-5 rounded-xl bg-white/70 border border-white px-3 py-3">
                    <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] text-midnight/50">
                      Cobertura RC
                    </span>
                    <span className="block mt-1 text-lg sm:text-xl font-black text-midnight">
                      {product.coverage}
                    </span>
                  </div>

                  <div className="mt-auto pt-5 w-full">
                    <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] text-midnight/50">
                      Precio anual
                    </span>
                    <span className="mt-1 inline-block text-3xl sm:text-4xl font-black text-midnight">{product.price}</span>
                    <span className="text-midnight/60 font-semibold text-sm">{product.period}</span>
                  </div>
                </button>
                )
              })}
            </div>
            </div>

            {selectedCCAA && <div className="text-center mt-7">
              <button
                type="button"
                onClick={() => selectedPlan && handleContratarClick(selectedPlan)}
                disabled={!selectedPlan}
                className="inline-flex min-w-[260px] items-center justify-center gap-2 bg-midnight text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-midnight/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-35 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {selectedPlan ? `Continuar con ${selectedPlan.coverage}` : 'Selecciona una cobertura'}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>}

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
      {step !== 'form' && step !== 'confirmation' && <section className="py-10 sm:py-12">
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
              onClick={() => { setStep(selectedCCAA ? 'ppp-products' : 'noppp'); setFormSection(0) }}
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
                <div className="space-y-5">
                  <h3 className="text-lg font-black text-midnight mb-2">Datos del propietario</h3>
                  <div>
                    <label className={labelClass}>Nombre</label>
                    <input type="text" value={formData.nombre} onChange={(e) => handleFormChange('nombre', e.target.value)} className={formErrors.nombre ? inputErrorClass : inputClass} />
                    {formErrors.nombre && <p className="text-red-500 text-xs mt-1">{formErrors.nombre}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelClass}>Primer apellido</label>
                      <input type="text" value={formData.apellido1} onChange={(e) => handleFormChange('apellido1', e.target.value)} className={formErrors.apellido1 ? inputErrorClass : inputClass} />
                      {formErrors.apellido1 && <p className="text-red-500 text-xs mt-1">{formErrors.apellido1}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Segundo apellido</label>
                      <input type="text" value={formData.apellido2} onChange={(e) => handleFormChange('apellido2', e.target.value)} className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Fecha de nacimiento</label>
                    <input type="text" placeholder="DD/MM/AAAA" value={formData.fechaNacimiento} onChange={(e) => handleFormChange('fechaNacimiento', e.target.value)} className={formErrors.fechaNacimiento ? inputErrorClass : inputClass} />
                    {formErrors.fechaNacimiento && <p className="text-red-500 text-xs mt-1">{formErrors.fechaNacimiento}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>DNI o NIE</label>
                    <input type="text" placeholder="12345678A o X1234567A" value={formData.dni} onChange={(e) => handleFormChange('dni', e.target.value.toUpperCase())} className={formErrors.dni ? inputErrorClass : inputClass} />
                    {formErrors.dni && <p className="text-red-500 text-xs mt-1">{formErrors.dni}</p>}
                  </div>
                </div>
              )}

              {/* Section 1: Dirección */}
              {formSection === 1 && (
                <div className="space-y-5">
                  <h3 className="text-lg font-black text-midnight mb-2">Dirección</h3>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2">
                      <label className={labelClass}>Calle</label>
                      <input type="text" value={formData.calle} onChange={(e) => handleFormChange('calle', e.target.value)} className={formErrors.calle ? inputErrorClass : inputClass} />
                      {formErrors.calle && <p className="text-red-500 text-xs mt-1">{formErrors.calle}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Número</label>
                      <input type="text" value={formData.numero} onChange={(e) => handleFormChange('numero', e.target.value)} className={formErrors.numero ? inputErrorClass : inputClass} />
                      {formErrors.numero && <p className="text-red-500 text-xs mt-1">{formErrors.numero}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelClass}>Código postal</label>
                      <input type="text" maxLength={5} value={formData.codigoPostal} onChange={(e) => handleFormChange('codigoPostal', e.target.value)} className={formErrors.codigoPostal ? inputErrorClass : inputClass} />
                      {formErrors.codigoPostal && <p className="text-red-500 text-xs mt-1">{formErrors.codigoPostal}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Localidad</label>
                      <input type="text" value={formData.localidad} onChange={(e) => handleFormChange('localidad', e.target.value)} className={formErrors.localidad ? inputErrorClass : inputClass} />
                      {formErrors.localidad && <p className="text-red-500 text-xs mt-1">{formErrors.localidad}</p>}
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Provincia</label>
                    <input type="text" value={formData.provincia} onChange={(e) => handleFormChange('provincia', e.target.value)} className={formErrors.provincia ? inputErrorClass : inputClass} />
                    {formErrors.provincia && <p className="text-red-500 text-xs mt-1">{formErrors.provincia}</p>}
                  </div>
                </div>
              )}

              {/* Section 2: Datos de contacto */}
              {formSection === 2 && (
                <div className="space-y-5">
                  <h3 className="text-lg font-black text-midnight mb-2">Datos de contacto</h3>
                  <div>
                    <label className={labelClass}>Teléfono móvil</label>
                    <input type="tel" placeholder="Ej: 667755976" maxLength={9} value={formData.telefono} onChange={(e) => handleFormChange('telefono', e.target.value.replace(/[^0-9]/g, ''))} className={formErrors.telefono ? inputErrorClass : inputClass} />
                    {formErrors.telefono && <p className="text-red-500 text-xs mt-1">{formErrors.telefono}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Email</label>
                    <input type="email" placeholder="tu@email.com" value={formData.email} onChange={(e) => handleFormChange('email', e.target.value)} className={formErrors.email ? inputErrorClass : inputClass} />
                    {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Repetir email</label>
                    <input type="email" placeholder="Repite tu email" value={formData.emailRepeat} onChange={(e) => handleFormChange('emailRepeat', e.target.value)} className={formErrors.emailRepeat ? inputErrorClass : inputClass} />
                    {formErrors.emailRepeat && <p className="text-red-500 text-xs mt-1">{formErrors.emailRepeat}</p>}
                  </div>
                </div>
              )}

              {/* Section 3: Datos del perro */}
              {formSection === 3 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-black text-midnight mb-4">Datos del perro</h3>
                  <div>
                    <input type="text" placeholder="Nombre del perro" value={formData.nombrePerro} onChange={(e) => handleFormChange('nombrePerro', e.target.value)} className={`w-full px-4 py-3 border-2 rounded-xl text-midnight placeholder-midnight/40 focus:border-orange focus:outline-none transition-colors ${formErrors.nombrePerro ? 'border-red-400' : 'border-midnight/10'}`} />
                    {formErrors.nombrePerro && <p className="text-red-500 text-xs mt-1">{formErrors.nombrePerro}</p>}
                  </div>
                  <div>
                    <input type="text" placeholder="Raza" value={formData.razaPerro} onChange={(e) => handleFormChange('razaPerro', e.target.value)} className={`w-full px-4 py-3 border-2 rounded-xl text-midnight placeholder-midnight/40 focus:border-orange focus:outline-none transition-colors ${formErrors.razaPerro ? 'border-red-400' : 'border-midnight/10'}`} />
                    {formErrors.razaPerro && <p className="text-red-500 text-xs mt-1">{formErrors.razaPerro}</p>}
                  </div>
                  <div>
                    <select value={formData.sexoPerro} onChange={(e) => handleFormChange('sexoPerro', e.target.value)} className={`w-full px-4 py-3 border-2 rounded-xl text-midnight focus:border-orange focus:outline-none transition-colors ${formErrors.sexoPerro ? 'border-red-400' : 'border-midnight/10'} ${!formData.sexoPerro ? 'text-midnight/40' : ''}`}>
                      <option value="">Sexo del perro</option>
                      <option value="Macho">Macho</option>
                      <option value="Hembra">Hembra</option>
                    </select>
                    {formErrors.sexoPerro && <p className="text-red-500 text-xs mt-1">{formErrors.sexoPerro}</p>}
                  </div>
                  <div>
                    <input type="text" placeholder="Fecha de nacimiento del perro (DD/MM/AAAA o aproximada)" value={formData.fechaNacimientoPerro} onChange={(e) => handleFormChange('fechaNacimientoPerro', e.target.value)} className="w-full px-4 py-3 border-2 border-midnight/10 rounded-xl text-midnight placeholder-midnight/40 focus:border-orange focus:outline-none transition-colors" />
                    <p className="text-midnight/50 text-xs mt-1">Si no la sabes exactamente, aproxima</p>
                  </div>
                  <div>
                    <input type="text" placeholder="Microchip (15 dígitos)" value={formData.microchip} onChange={(e) => handleFormChange('microchip', e.target.value)} className={`w-full px-4 py-3 border-2 rounded-xl text-midnight placeholder-midnight/40 focus:border-orange focus:outline-none transition-colors ${formErrors.microchip ? 'border-red-400' : 'border-midnight/10'}`} />
                    {formErrors.microchip && <p className="text-red-500 text-xs mt-1">{formErrors.microchip}</p>}
                  </div>
                  <div>
                    <label className="block text-midnight/80 text-sm font-medium mb-2">Foto de la cartilla sanitaria (opcional)</label>
                    <input type="file" accept="image/*,.pdf" onChange={(e) => setFotoCartilla(e.target.files?.[0] || null)} className="w-full text-sm text-midnight/60 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange/10 file:text-orange hover:file:bg-orange/20 cursor-pointer" />
                    {fotoCartilla && <p className="text-green-600 text-xs mt-1">✓ {fotoCartilla.name}</p>}
                  </div>
                </div>
              )}

              {/* Section 4: Datos bancarios */}
              {formSection === 4 && (
                <div className="space-y-5">
                  <h3 className="text-lg font-black text-midnight mb-2">Datos bancarios</h3>
                  <p className="text-midnight/60 text-sm">Introduce tu IBAN para la domiciliación del pago anual.</p>
                  <div>
                    <label className={labelClass}>IBAN</label>
                    <input type="text" placeholder="ES12 1234 5678 9012 3456 7890" value={formData.iban} onChange={(e) => handleFormChange('iban', e.target.value.toUpperCase())} className={`${formErrors.iban ? inputErrorClass : inputClass} font-mono tracking-wider`} />
                    {formErrors.iban && <p className="text-red-500 text-xs mt-1">{formErrors.iban}</p>}
                    <p className="text-midnight/40 text-xs mt-1.5">Formato: ES + 22 dígitos</p>
                  </div>
                </div>
              )}

              {/* Section 5: Condiciones legales */}
              {formSection === 5 && (
                <div className="space-y-5">
                  <h3 className="text-lg font-black text-midnight mb-2">Condiciones legales</h3>
                  <div className="space-y-4">
                    <label className="flex items-start gap-3 cursor-pointer p-3 rounded-xl border-2 border-midnight/5 hover:border-orange/30 transition-colors">
                      <input type="checkbox" checked={formData.aceptaCondiciones} onChange={(e) => handleFormChange('aceptaCondiciones', e.target.checked)} className="mt-0.5 w-5 h-5 rounded border-midnight/20 text-orange focus:ring-orange accent-orange" />
                      <span className="text-midnight/80 text-sm leading-relaxed">Acepto las condiciones generales del seguro y la política de privacidad.</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer p-3 rounded-xl border-2 border-midnight/5 hover:border-orange/30 transition-colors">
                      <input type="checkbox" checked={formData.aceptaProteccion} onChange={(e) => handleFormChange('aceptaProteccion', e.target.checked)} className="mt-0.5 w-5 h-5 rounded border-midnight/20 text-orange focus:ring-orange accent-orange" />
                      <span className="text-midnight/80 text-sm leading-relaxed">Autorizo el tratamiento de mis datos personales conforme al Reglamento General de Protección de Datos (RGPD).</span>
                    </label>
                  </div>
                  {formErrors.legal && <p className="text-red-500 text-sm font-medium mt-2">{formErrors.legal}</p>}
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
                      <span className="text-midnight font-medium">{formData.nombrePerro} ({formData.razaPerro})</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-midnight/5">
                      <span className="text-midnight/60">Sexo / Nacimiento</span>
                      <span className="text-midnight font-medium">{formData.sexoPerro} — {formData.fechaNacimientoPerro}</span>
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
                    onClick={() => { setFormErrors({}); setFormSection(prev => prev - 1) }}
                    className="flex-1 py-3 border-2 border-midnight/10 rounded-full text-midnight font-bold hover:bg-midnight/5 transition-colors"
                  >
                    ← Anterior
                  </button>
                )}
                {formSection < formSections.length - 1 ? (
                  <button
                    onClick={() => { if (validateSection(formSection)) setFormSection(prev => prev + 1) }}
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
                    <input type="hidden" name="Raza" value={formData.razaPerro} />
                    <input type="hidden" name="Sexo" value={formData.sexoPerro} />
                    <input type="hidden" name="Fecha nacimiento perro" value={formData.fechaNacimientoPerro} />
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

    </div>
  )
}
