'use client'

import { useState, useEffect, useCallback, FormEvent } from 'react'

interface OwnerData {
  nombre: string
  primerApellido: string
  segundoApellido: string
  fechaNacimiento: string
  dni: string
}

interface AddressData {
  calle: string
  numero: string
  codigoPostal: string
  localidad: string
  provincia: string
}

interface ContactData {
  telefono: string
  email: string
  emailRepetir: string
}

interface HorseData {
  nombre: string
  raza: string
  color: string
  sexo: string
  microchip: string
}

interface BankData {
  iban: string
}

interface LegalData {
  condiciones: boolean
  datos: boolean
}

interface PlanOption {
  id: number
  title: string
  coverage: string
  extras: string[]
  price: string
  priceNum: number
}

export default function SegurosPage() {
  const [step, setStep] = useState(0)
  const [ageGroup, setAgeGroup] = useState<'under15' | 'over15' | null>(null)
  const [selectedPlan, setSelectedPlan] = useState<PlanOption | null>(null)
  const [formSection, setFormSection] = useState(0)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const [ownerData, setOwnerData] = useState<OwnerData>({
    nombre: '',
    primerApellido: '',
    segundoApellido: '',
    fechaNacimiento: '',
    dni: '',
  })

  const [addressData, setAddressData] = useState<AddressData>({
    calle: '',
    numero: '',
    codigoPostal: '',
    localidad: '',
    provincia: '',
  })

  const [contactData, setContactData] = useState<ContactData>({
    telefono: '',
    email: '',
    emailRepetir: '',
  })

  const [horseData, setHorseData] = useState<HorseData>({
    nombre: '',
    raza: '',
    color: '',
    sexo: '',
    microchip: '',
  })

  const [bankData, setBankData] = useState<BankData>({
    iban: '',
  })

  const [legalData, setLegalData] = useState<LegalData>({
    condiciones: false,
    datos: false,
  })

  const plansUnder15: PlanOption[] = [
    {
      id: 0,
      title: 'Plan Económico',
      coverage: 'Responsabilidad Civil 150.000€',
      extras: [],
      price: '48,27€/año',
      priceNum: 48.27,
    },
    {
      id: 1,
      title: 'Plan Básico',
      coverage: 'Responsabilidad Civil 150.000€',
      extras: ['Retirada de cadáveres (300€)'],
      price: '53,94€/año',
      priceNum: 53.94,
    },
    {
      id: 2,
      title: 'Plan Estándar',
      coverage: 'Responsabilidad Civil 306.000€',
      extras: ['Cobertura por fallecimiento (300€)'],
      price: '62,62€/año',
      priceNum: 62.62,
    },
    {
      id: 3,
      title: 'Plan Premium',
      coverage: 'Responsabilidad Civil 306.000€',
      extras: ['Cobertura por fallecimiento (1.000€)'],
      price: '91,03€/año',
      priceNum: 91.03,
    },
  ]

  const planOver15: PlanOption = {
    id: 4,
    title: 'Plan Responsabilidad Civil',
    coverage: 'Responsabilidad Civil 150.000€',
    extras: ['Sin retirada de cadáveres'],
    price: '48,27€/año',
    priceNum: 48.27,
  }

  const totalFormSections = 8
  const progressPercent = Math.round(((formSection + 1) / totalFormSections) * 100)

  // ==================== BROWSER HISTORY (BUG FIX #1) ====================

  // Replace initial history state on mount
  useEffect(() => {
    window.history.replaceState({ step: 0, formSection: 0 }, '')
  }, [])

  // Go back handler
  const goBack = useCallback(() => {
    setErrors({})
    if (step === 4 && formSection > 0) {
      setFormSection((prev) => prev - 1)
    } else if (step === 4 && formSection === 0) {
      setStep(3)
    } else if (step === 3) {
      setStep(2)
    } else if (step === 2) {
      setStep(1)
    } else if (step === 1) {
      setStep(0)
    }
  }, [step, formSection])

  // Listen for browser back button
  useEffect(() => {
    const handlePopState = () => {
      goBack()
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [goBack])

  // Push history state when advancing steps
  function advanceStep(newStep: number) {
    window.history.pushState({ step: newStep, formSection: 0 }, '')
    setStep(newStep)
  }

  // Push history state when advancing form sections
  function advanceFormSection(newSection: number) {
    window.history.pushState({ step: 4, formSection: newSection }, '')
    setFormSection(newSection)
  }

  // ==================== VALIDATION ====================

  function validateDNI(value: string): boolean {
    const dniRegex = /^[0-9]{8}[A-Za-z]$/
    const nieRegex = /^[XYZxyz][0-9]{7}[A-Za-z]$/
    return dniRegex.test(value) || nieRegex.test(value)
  }

  function calculateAge(dateStr: string): number {
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

  function validateOwnerSection(): boolean {
    const newErrors: Record<string, string> = {}
    if (!ownerData.nombre.trim()) newErrors.nombre = 'Campo obligatorio'
    if (!ownerData.primerApellido.trim()) newErrors.primerApellido = 'Campo obligatorio'
    if (!ownerData.segundoApellido.trim()) newErrors.segundoApellido = 'Campo obligatorio'
    if (!ownerData.fechaNacimiento.trim()) {
      newErrors.fechaNacimiento = 'Campo obligatorio'
    } else {
      const age = calculateAge(ownerData.fechaNacimiento)
      if (age < 0) {
        newErrors.fechaNacimiento = 'Formato incorrecto. Usa DD/MM/AAAA'
      } else if (age < 18) {
        newErrors.fechaNacimiento = 'Debes ser mayor de 18 años para contratar. Si necesitas ayuda, contacta con nosotros por WhatsApp.'
      }
    }
    if (!ownerData.dni.trim()) {
      newErrors.dni = 'Campo obligatorio'
    } else if (!validateDNI(ownerData.dni.trim())) {
      newErrors.dni = 'El formato del DNI/NIE no es correcto. Ejemplo: 12345678A o X1234567A'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function validateAddressSection(): boolean {
    const newErrors: Record<string, string> = {}
    if (!addressData.calle.trim()) newErrors.calle = 'Campo obligatorio'
    if (!addressData.numero.trim()) newErrors.numero = 'Campo obligatorio'
    if (!addressData.codigoPostal.trim()) newErrors.codigoPostal = 'Campo obligatorio'
    if (!addressData.localidad.trim()) newErrors.localidad = 'Campo obligatorio'
    if (!addressData.provincia.trim()) newErrors.provincia = 'Campo obligatorio'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function validateContactSection(): boolean {
    const newErrors: Record<string, string> = {}
    if (!contactData.telefono.trim()) {
      newErrors.telefono = 'Campo obligatorio'
    } else if (!/^[0-9]{9}$/.test(contactData.telefono.trim())) {
      newErrors.telefono = 'El teléfono debe tener 9 dígitos'
    }
    if (!contactData.email.trim()) {
      newErrors.email = 'Campo obligatorio'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email.trim())) {
      newErrors.email = 'El formato del email no es correcto'
    }
    if (!contactData.emailRepetir.trim()) {
      newErrors.emailRepetir = 'Campo obligatorio'
    } else if (contactData.email.trim() !== contactData.emailRepetir.trim()) {
      newErrors.emailRepetir = 'Los emails no coinciden'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function validateHorseSection(): boolean {
    const newErrors: Record<string, string> = {}
    if (!horseData.nombre.trim()) newErrors.horseNombre = 'Campo obligatorio'
    if (!horseData.raza.trim()) newErrors.horseRaza = 'Campo obligatorio'
    if (!horseData.color.trim()) newErrors.horseColor = 'Campo obligatorio'
    if (!horseData.sexo) newErrors.horseSexo = 'Campo obligatorio'
    if (!horseData.microchip.trim()) {
      newErrors.horseMicrochip = 'Campo obligatorio'
    } else if (!/^[0-9]{15}$/.test(horseData.microchip.trim())) {
      newErrors.horseMicrochip = 'El microchip debe tener 15 dígitos'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function validateBankSection(): boolean {
    const newErrors: Record<string, string> = {}
    const cleanIban = bankData.iban.replace(/\s/g, '').toUpperCase()
    if (!cleanIban) {
      newErrors.iban = 'Campo obligatorio'
    } else if (!/^ES[0-9]{22}$/.test(cleanIban)) {
      newErrors.iban = 'El IBAN debe tener formato español (ES + 22 dígitos). Ejemplo: ES12 1234 5678 9012 3456 7890'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function validateLegalSection(): boolean {
    const newErrors: Record<string, string> = {}
    if (!legalData.condiciones || !legalData.datos) {
      newErrors.legal = 'Debes aceptar ambas condiciones para continuar'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleNextSection() {
    setErrors({})
    let valid = false
    switch (formSection) {
      case 0:
        valid = validateOwnerSection()
        break
      case 1:
        valid = validateAddressSection()
        break
      case 2:
        valid = validateContactSection()
        break
      case 3:
        valid = validateHorseSection()
        break
      case 4:
        valid = true
        break
      case 5:
        valid = validateBankSection()
        break
      case 6:
        valid = validateLegalSection()
        break
      case 7:
        valid = true
        break
      default:
        valid = true
    }
    if (valid) {
      if (formSection < totalFormSections - 1) {
        advanceFormSection(formSection + 1)
      }
    }
  }

  function handlePrevSection() {
    setErrors({})
    if (formSection > 0) {
      setFormSection(formSection - 1)
    } else {
      setStep(3)
    }
  }

  async function handleSubmit() {
    setSubmitting(true)
    setSubmitError(false)

    const planInfo = selectedPlan
      ? `${selectedPlan.title} - ${selectedPlan.coverage} - ${selectedPlan.extras.join(', ')} - ${selectedPlan.price}`
      : ''

    const formDataBody = {
      _subject: 'Nueva solicitud de seguro de caballos',
      plan: planInfo,
      nombre: ownerData.nombre,
      primer_apellido: ownerData.primerApellido,
      segundo_apellido: ownerData.segundoApellido,
      fecha_nacimiento: ownerData.fechaNacimiento,
      dni_nie: ownerData.dni,
      calle: addressData.calle,
      numero: addressData.numero,
      codigo_postal: addressData.codigoPostal,
      localidad: addressData.localidad,
      provincia: addressData.provincia,
      telefono: contactData.telefono,
      email: contactData.email,
      nombre_caballo: horseData.nombre,
      raza: horseData.raza,
      color_caballo: horseData.color,
      sexo: horseData.sexo,
      microchip: horseData.microchip,
      iban: bankData.iban.replace(/\s/g, '').toUpperCase(),
      fotos_adjuntas: uploadedFiles.length > 0
        ? `${uploadedFiles.length} foto(s) adjuntada(s). Si no se reciben correctamente, el cliente las enviará por WhatsApp.`
        : 'No se adjuntaron fotos. El cliente las enviará por WhatsApp al 667 755 976.',
      _template: 'table',
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/seguros@gestoriamera.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formDataBody),
      })

      if (!response.ok) throw new Error('Error en envío')

      await fetch(`https://formsubmit.co/ajax/${contactData.email.trim()}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'Confirmación de tu solicitud de seguro — Gestoría Mera',
          mensaje:
            'Muchas gracias por tu solicitud. Estaremos en contacto muy pronto con tu póliza o preguntas si fuera necesario. — Gestoría Mera',
          _template: 'box',
        }),
      })

      setStep(5)
    } catch {
      setSubmitError(true)
    } finally {
      setSubmitting(false)
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setUploadedFiles(Array.from(e.target.files))
    }
  }

  // ==================== SHARED STYLES ====================

  const inputClass = 'w-full px-4 py-3 bg-white border-2 border-mint-300 rounded-xl text-midnight placeholder-midnight/40 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all'
  const selectClass = 'w-full px-4 py-3 bg-white border-2 border-mint-300 rounded-xl text-midnight focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all'
  const primaryBtnClass = 'w-full py-4 bg-midnight text-white font-black text-lg rounded-2xl hover:bg-midnight-light transition-all duration-300 shadow-lg hover:shadow-xl'
  const secondaryBtnClass = 'text-midnight hover:text-orange font-medium text-sm flex items-center gap-1 transition-colors'

  // ==================== RENDER ====================

  // Step 0: Hero
  if (step === 0) {
    return (
      <main className="min-h-screen bg-midnight">
        <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/r5v8fzlu/video/upload/12509081_1920_1080_60fps_unug5q.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-midnight/75" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-black text-white max-w-3xl leading-tight font-serif">
              Seguro de Responsabilidad Civil para Caballos
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-white/90 font-medium">
              Desde 48,27€ al año
            </p>
            <button
              onClick={() => advanceStep(1)}
              className="mt-8 px-10 py-5 bg-orange text-midnight font-black text-lg rounded-2xl hover:bg-orange-light transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Contratar ahora
            </button>
          </div>
        </section>

        <section className="max-w-4xl mx-auto py-16 px-6">
          <h2 className="text-2xl md:text-3xl font-black text-white text-center mb-10 font-serif">
            ¿Por qué contratar con nosotros?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-midnight-light rounded-3xl border border-white/10">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-orange/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-black text-white mb-2">Cobertura completa</h3>
              <p className="text-white/70 text-sm">Responsabilidad civil desde 150.000€ hasta 306.000€ de cobertura.</p>
            </div>
            <div className="text-center p-6 bg-midnight-light rounded-3xl border border-white/10">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-orange/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-black text-white mb-2">Mejor precio</h3>
              <p className="text-white/70 text-sm">Desde solo 48,27€ al año. Sin sorpresas ni costes ocultos.</p>
            </div>
            <div className="text-center p-6 bg-midnight-light rounded-3xl border border-white/10">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-orange/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-black text-white mb-2">Atención personal</h3>
              <p className="text-white/70 text-sm">Contacto directo por WhatsApp. Respuesta en menos de 2 horas.</p>
            </div>
          </div>
        </section>
      </main>
    )
  }

  // Step 1: Age Selection
  if (step === 1) {
    return (
      <main className="min-h-screen bg-mint-50 py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <button onClick={() => { setStep(0) }} className={secondaryBtnClass + ' mb-8'}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Volver atrás
          </button>

          <h2 className="text-2xl md:text-3xl font-black text-midnight text-center mb-2 font-serif">
            Selecciona la edad de tu caballo
          </h2>
          <p className="text-midnight/60 text-center mb-10">Elige el rango de edad para ver los planes disponibles.</p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button
              onClick={() => { setAgeGroup('under15'); advanceStep(2) }}
              className="p-8 bg-white border-2 border-mint-300 rounded-3xl hover:border-orange hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange/20 transition-colors">
                <span className="text-2xl">🐴</span>
              </div>
              <h3 className="text-xl font-black text-midnight">Menos de 15 años</h3>
              <p className="text-midnight/50 text-sm mt-2">4 planes disponibles</p>
            </button>

            <button
              onClick={() => { setAgeGroup('over15'); advanceStep(2) }}
              className="p-8 bg-white border-2 border-mint-300 rounded-3xl hover:border-orange hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange/20 transition-colors">
                <span className="text-2xl">🐎</span>
              </div>
              <h3 className="text-xl font-black text-midnight">15 años o más</h3>
              <p className="text-midnight/50 text-sm mt-2">1 plan disponible</p>
            </button>
          </div>
        </div>
      </main>
    )
  }

  // Step 2: Coverage Selection
  if (step === 2) {
    return (
      <main className="min-h-screen bg-mint-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <button onClick={() => { setStep(1) }} className={secondaryBtnClass + ' mb-8'}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Volver atrás
          </button>

          <h2 className="text-2xl md:text-3xl font-black text-midnight text-center mb-2 font-serif">
            Elige tu plan de cobertura
          </h2>
          <p className="text-midnight/60 text-center mb-10">Selecciona el nivel de protección que mejor se adapte a tus necesidades.</p>

          {ageGroup === 'over15' ? (
            <div className="max-w-md mx-auto">
              <div className="bg-white border-2 border-mint-300 rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-black text-midnight mb-4">{planOver15.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-midnight">{planOver15.coverage}</span>
                  </div>
                  {planOver15.extras.map((extra, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-midnight/30 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                      <span className="text-midnight/60">{extra}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-mint-200 pt-4 mb-6">
                  <p className="text-3xl font-black text-midnight">48,27€ <span className="text-base font-normal text-midnight/50">al año</span></p>
                </div>
                <button
                  onClick={() => { setSelectedPlan(planOver15); advanceStep(3) }}
                  className="w-full py-4 bg-orange text-midnight font-black rounded-2xl hover:bg-orange-light transition-all duration-300 shadow-lg text-lg"
                >
                  Contratar este seguro
                </button>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              {/* Comparison Table */}
              <table className="w-full border-collapse bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-mint-300">
                <thead>
                  <tr>
                    <th className="text-left p-4 text-midnight/60 text-sm font-medium border-b border-mint-200 w-[200px]">Cobertura</th>
                    {plansUnder15.map((plan) => (
                      <th key={plan.id} className={`p-4 text-center border-b border-mint-200 ${plan.id === 2 ? 'bg-orange-50 border-x-2 border-orange' : ''}`}>
                        <div className={`text-base font-black ${plan.id === 2 ? 'text-orange' : 'text-midnight'}`}>{plan.title}</div>
                        {plan.id === 2 && <span className="text-xs text-orange font-bold">Recomendado</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Responsabilidad Civil */}
                  <tr>
                    <td className="p-4 text-midnight/70 text-sm border-b border-mint-100">Responsabilidad Civil</td>
                    <td className="p-4 text-center border-b border-mint-100"><span className="text-midnight font-medium">150.000€</span></td>
                    <td className="p-4 text-center border-b border-mint-100"><span className="text-midnight font-medium">150.000€</span></td>
                    <td className="p-4 text-center border-b border-mint-100 bg-orange-50 border-x-2 border-orange"><span className="text-midnight font-medium">306.000€</span></td>
                    <td className="p-4 text-center border-b border-mint-100"><span className="text-midnight font-medium">306.000€</span></td>
                  </tr>
                  {/* Retirada de cadáveres */}
                  <tr>
                    <td className="p-4 text-midnight/70 text-sm border-b border-mint-100">Retirada de cadáveres</td>
                    <td className="p-4 text-center border-b border-mint-100">
                      <svg className="w-5 h-5 text-midnight/20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                    </td>
                    <td className="p-4 text-center border-b border-mint-100"><span className="text-midnight font-medium">300€</span></td>
                    <td className="p-4 text-center border-b border-mint-100 bg-orange-50 border-x-2 border-orange">
                      <svg className="w-5 h-5 text-midnight/20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                    </td>
                    <td className="p-4 text-center border-b border-mint-100">
                      <svg className="w-5 h-5 text-midnight/20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                    </td>
                  </tr>
                  {/* Cobertura por fallecimiento */}
                  <tr>
                    <td className="p-4 text-midnight/70 text-sm border-b border-mint-100">Cobertura por fallecimiento</td>
                    <td className="p-4 text-center border-b border-mint-100">
                      <svg className="w-5 h-5 text-midnight/20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                    </td>
                    <td className="p-4 text-center border-b border-mint-100">
                      <svg className="w-5 h-5 text-midnight/20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                    </td>
                    <td className="p-4 text-center border-b border-mint-100 bg-orange-50 border-x-2 border-orange"><span className="text-midnight font-medium">300€</span></td>
                    <td className="p-4 text-center border-b border-mint-100"><span className="text-midnight font-medium">1.000€</span></td>
                  </tr>
                  {/* Precio */}
                  <tr>
                    <td className="p-4 text-midnight/70 text-sm font-medium border-b border-mint-100">Precio</td>
                    <td className="p-4 text-center border-b border-mint-100"><span className="text-xl font-black text-midnight">48,27€</span><span className="text-midnight/50 text-xs block">al año</span></td>
                    <td className="p-4 text-center border-b border-mint-100"><span className="text-xl font-black text-midnight">53,94€</span><span className="text-midnight/50 text-xs block">al año</span></td>
                    <td className="p-4 text-center border-b border-mint-100 bg-orange-50 border-x-2 border-orange"><span className="text-xl font-black text-orange">62,62€</span><span className="text-orange/70 text-xs block">al año</span></td>
                    <td className="p-4 text-center border-b border-mint-100"><span className="text-xl font-black text-midnight">91,03€</span><span className="text-midnight/50 text-xs block">al año</span></td>
                  </tr>
                  {/* Botones */}
                  <tr>
                    <td className="p-4"></td>
                    {plansUnder15.map((plan) => (
                      <td key={plan.id} className={`p-4 text-center ${plan.id === 2 ? 'bg-orange-50 border-x-2 border-b-2 border-orange rounded-b-xl' : ''}`}>
                        <button
                          onClick={() => { setSelectedPlan(plan); advanceStep(3) }}
                          className={`w-full py-3 font-bold rounded-xl transition-all duration-300 ${plan.id === 2 ? 'bg-orange text-midnight hover:bg-orange-light shadow-lg' : 'bg-midnight text-white hover:bg-midnight-light'}`}
                        >
                          Contratar
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    )
  }

  // Step 3: Summary before form
  if (step === 3 && selectedPlan) {
    return (
      <main className="min-h-screen bg-mint-50 py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <button onClick={() => { setStep(2) }} className={secondaryBtnClass + ' mb-8'}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Volver atrás
          </button>

          <h2 className="text-2xl md:text-3xl font-black text-midnight text-center mb-8 font-serif">
            Resumen del plan seleccionado
          </h2>

          <div className="bg-white border-2 border-mint-300 rounded-3xl p-8 shadow-lg mb-8">
            <h3 className="text-xl font-black text-midnight mb-4">{selectedPlan.title}</h3>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <p className="text-midnight">{selectedPlan.coverage}</p>
              </div>
              {selectedPlan.extras.map((extra, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <p className="text-midnight/70 text-sm">{extra}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-mint-200 pt-4">
              <p className="text-3xl font-black text-midnight">{selectedPlan.price}</p>
            </div>
          </div>

          <button
            onClick={() => { advanceStep(4); setFormSection(0) }}
            className={primaryBtnClass}
          >
            Continuar con la contratación
          </button>
        </div>
      </main>
    )
  }

  // Step 4: Progressive Form
  if (step === 4) {
    return (
      <main className="min-h-screen bg-mint-50 py-8 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between text-xs text-midnight/60 mb-2 font-medium">
              <span>Paso {formSection + 1} de {totalFormSections}</span>
              <span>{progressPercent}%</span>
            </div>
            <div className="w-full h-3 bg-mint-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <button onClick={handlePrevSection} className={secondaryBtnClass + ' mb-6'}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Volver atrás
          </button>

          {/* Section 0: Owner Data */}
          {formSection === 0 && (
            <div className="animate-fadeIn bg-white border-2 border-mint-300 rounded-3xl p-8 shadow-lg">
              <h2 className="text-xl md:text-2xl font-black text-midnight mb-6 font-serif">Datos del propietario</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-midnight mb-1">Nombre</label>
                  <input
                    type="text"
                    value={ownerData.nombre}
                    onChange={(e) => setOwnerData({ ...ownerData, nombre: e.target.value })}
                    className={inputClass}
                  />
                  {errors.nombre && <p className="text-red-600 text-sm mt-1">{errors.nombre}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-midnight mb-1">Primer apellido</label>
                  <input
                    type="text"
                    value={ownerData.primerApellido}
                    onChange={(e) => setOwnerData({ ...ownerData, primerApellido: e.target.value })}
                    className={inputClass}
                  />
                  {errors.primerApellido && <p className="text-red-600 text-sm mt-1">{errors.primerApellido}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-midnight mb-1">Segundo apellido</label>
                  <input
                    type="text"
                    value={ownerData.segundoApellido}
                    onChange={(e) => setOwnerData({ ...ownerData, segundoApellido: e.target.value })}
                    className={inputClass}
                  />
                  {errors.segundoApellido && <p className="text-red-600 text-sm mt-1">{errors.segundoApellido}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-midnight mb-1">Fecha de nacimiento</label>
                  <input
                    type="text"
                    placeholder="DD/MM/AAAA"
                    value={ownerData.fechaNacimiento}
                    onChange={(e) => setOwnerData({ ...ownerData, fechaNacimiento: e.target.value })}
                    className={inputClass}
                  />
                  {errors.fechaNacimiento && (
                    <div className="text-red-600 text-sm mt-1">
                      <p>{errors.fechaNacimiento}</p>
                      {errors.fechaNacimiento.includes('mayor de 18') && (
                        <a href="https://wa.me/34667755976" target="_blank" rel="noopener noreferrer" className="underline text-orange hover:text-orange-dark font-medium">
                          Contactar por WhatsApp
                        </a>
                      )}
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-bold text-midnight mb-1">DNI/NIE</label>
                  <input
                    type="text"
                    placeholder="12345678A o X1234567A"
                    value={ownerData.dni}
                    onChange={(e) => setOwnerData({ ...ownerData, dni: e.target.value })}
                    className={inputClass}
                  />
                  {errors.dni && <p className="text-red-600 text-sm mt-1">{errors.dni}</p>}
                </div>
              </div>
              <button onClick={handleNextSection} className={primaryBtnClass + ' mt-8'}>
                Siguiente
              </button>
            </div>
          )}

          {/* Section 1: Address */}
          {formSection === 1 && (
            <div className="animate-fadeIn bg-white border-2 border-mint-300 rounded-3xl p-8 shadow-lg">
              <h2 className="text-xl md:text-2xl font-black text-midnight mb-6 font-serif">¿Cuál es tu dirección?</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-midnight mb-1">Calle</label>
                  <input
                    type="text"
                    value={addressData.calle}
                    onChange={(e) => setAddressData({ ...addressData, calle: e.target.value })}
                    className={inputClass}
                  />
                  {errors.calle && <p className="text-red-600 text-sm mt-1">{errors.calle}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-midnight mb-1">Número</label>
                  <input
                    type="text"
                    value={addressData.numero}
                    onChange={(e) => setAddressData({ ...addressData, numero: e.target.value })}
                    className={inputClass}
                  />
                  {errors.numero && <p className="text-red-600 text-sm mt-1">{errors.numero}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-midnight mb-1">Código postal</label>
                  <input
                    type="text"
                    value={addressData.codigoPostal}
                    onChange={(e) => setAddressData({ ...addressData, codigoPostal: e.target.value })}
                    className={inputClass}
                  />
                  {errors.codigoPostal && <p className="text-red-600 text-sm mt-1">{errors.codigoPostal}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-midnight mb-1">Localidad</label>
                  <input
                    type="text"
                    value={addressData.localidad}
                    onChange={(e) => setAddressData({ ...addressData, localidad: e.target.value })}
                    className={inputClass}
                  />
                  {errors.localidad && <p className="text-red-600 text-sm mt-1">{errors.localidad}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-midnight mb-1">Provincia</label>
                  <input
                    type="text"
                    value={addressData.provincia}
                    onChange={(e) => setAddressData({ ...addressData, provincia: e.target.value })}
                    className={inputClass}
                  />
                  {errors.provincia && <p className="text-red-600 text-sm mt-1">{errors.provincia}</p>}
                </div>
              </div>
              <button onClick={handleNextSection} className={primaryBtnClass + ' mt-8'}>
                Siguiente
              </button>
            </div>
          )}

          {/* Section 2: Contact */}
          {formSection === 2 && (
            <div className="animate-fadeIn bg-white border-2 border-mint-300 rounded-3xl p-8 shadow-lg">
              <h2 className="text-xl md:text-2xl font-black text-midnight mb-6 font-serif">Datos de contacto</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-midnight mb-1">Teléfono móvil</label>
                  <input
                    type="tel"
                    placeholder="612345678"
                    value={contactData.telefono}
                    onChange={(e) => setContactData({ ...contactData, telefono: e.target.value })}
                    className={inputClass}
                  />
                  {errors.telefono && <p className="text-red-600 text-sm mt-1">{errors.telefono}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-midnight mb-1">Email</label>
                  <input
                    type="email"
                    value={contactData.email}
                    onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                    className={inputClass}
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-midnight mb-1">Repetir email</label>
                  <input
                    type="email"
                    value={contactData.emailRepetir}
                    onChange={(e) => setContactData({ ...contactData, emailRepetir: e.target.value })}
                    className={inputClass}
                  />
                  {errors.emailRepetir && <p className="text-red-600 text-sm mt-1">{errors.emailRepetir}</p>}
                </div>
              </div>
              <button onClick={handleNextSection} className={primaryBtnClass + ' mt-8'}>
                Siguiente
              </button>
            </div>
          )}

          {/* Section 3: Horse Data */}
          {formSection === 3 && (
            <div className="animate-fadeIn bg-white border-2 border-mint-300 rounded-3xl p-8 shadow-lg">
              <h2 className="text-xl md:text-2xl font-black text-midnight mb-6 font-serif">Datos de tu caballo</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-midnight mb-1">Nombre del caballo</label>
                  <input
                    type="text"
                    value={horseData.nombre}
                    onChange={(e) => setHorseData({ ...horseData, nombre: e.target.value })}
                    className={inputClass}
                  />
                  {errors.horseNombre && <p className="text-red-600 text-sm mt-1">{errors.horseNombre}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-midnight mb-1">Raza del caballo</label>
                  <input
                    type="text"
                    value={horseData.raza}
                    onChange={(e) => setHorseData({ ...horseData, raza: e.target.value })}
                    className={inputClass}
                  />
                  {errors.horseRaza && <p className="text-red-600 text-sm mt-1">{errors.horseRaza}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-midnight mb-1">Color del caballo</label>
                  <input
                    type="text"
                    value={horseData.color}
                    onChange={(e) => setHorseData({ ...horseData, color: e.target.value })}
                    className={inputClass}
                  />
                  {errors.horseColor && <p className="text-red-600 text-sm mt-1">{errors.horseColor}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-midnight mb-1">Sexo</label>
                  <select
                    value={horseData.sexo}
                    onChange={(e) => setHorseData({ ...horseData, sexo: e.target.value })}
                    className={selectClass}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="Caballo">Caballo</option>
                    <option value="Caballo castrado">Caballo castrado</option>
                    <option value="Yegua">Yegua</option>
                  </select>
                  {errors.horseSexo && <p className="text-red-600 text-sm mt-1">{errors.horseSexo}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-midnight mb-1">Número de microchip</label>
                  <input
                    type="text"
                    placeholder="15 dígitos"
                    value={horseData.microchip}
                    onChange={(e) => setHorseData({ ...horseData, microchip: e.target.value })}
                    className={inputClass}
                  />
                  {errors.horseMicrochip && <p className="text-red-600 text-sm mt-1">{errors.horseMicrochip}</p>}
                </div>
              </div>
              <button onClick={handleNextSection} className={primaryBtnClass + ' mt-8'}>
                Siguiente
              </button>
            </div>
          )}

          {/* Section 4: Photo Upload (Optional) */}
          {formSection === 4 && (
            <div className="animate-fadeIn bg-white border-2 border-mint-300 rounded-3xl p-8 shadow-lg">
              <h2 className="text-xl md:text-2xl font-black text-midnight mb-2 font-serif">Foto de la cartilla sanitaria</h2>
              <p className="text-midnight/60 mb-6">Adjunta una foto de la cartilla sanitaria de tu caballo donde aparezcan todos los datos.</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="border-2 border-dashed border-mint-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center bg-mint-50">
                  <svg className="w-8 h-8 text-midnight/30 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs text-midnight/50">Ejemplo 1: Foto de la portada de la cartilla</p>
                </div>
                <div className="border-2 border-dashed border-mint-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center bg-mint-50">
                  <svg className="w-8 h-8 text-midnight/30 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs text-midnight/50">Ejemplo 2: Foto de la página con los datos del caballo</p>
                </div>
              </div>

              <div className="mb-4">
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/heic"
                  multiple
                  onChange={handleFileChange}
                  className="w-full px-4 py-3 border-2 border-mint-300 rounded-xl text-sm text-midnight file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-orange-50 file:text-midnight hover:file:bg-orange-100 transition-all"
                />
              </div>

              {uploadedFiles.length > 0 && (
                <div className="mb-4 p-3 bg-orange-50 border border-orange/20 rounded-xl">
                  <p className="text-sm text-midnight font-bold">{uploadedFiles.length} archivo(s) seleccionado(s):</p>
                  {uploadedFiles.map((file, i) => (
                    <p key={i} className="text-sm text-midnight/70">{file.name}</p>
                  ))}
                </div>
              )}

              <p className="text-sm text-midnight/50 mb-8">
                Este paso no es obligatorio. Si no la tienes ahora, puedes enviarla después por WhatsApp al{' '}
                <a href="https://wa.me/34667755976" target="_blank" rel="noopener noreferrer" className="text-orange font-bold hover:underline">
                  667 755 976
                </a>.
              </p>

              <button onClick={handleNextSection} className={primaryBtnClass}>
                Siguiente
              </button>
            </div>
          )}

          {/* Section 5: Bank Data */}
          {formSection === 5 && (
            <div className="animate-fadeIn bg-white border-2 border-mint-300 rounded-3xl p-8 shadow-lg">
              <h2 className="text-xl md:text-2xl font-black text-midnight mb-2 font-serif">Datos bancarios</h2>
              <p className="text-midnight/60 mb-6">¿Cuál es el IBAN de la cuenta para domiciliar el pago?</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-midnight mb-1">IBAN</label>
                  <input
                    type="text"
                    placeholder="ES12 1234 5678 9012 3456 7890"
                    value={bankData.iban}
                    onChange={(e) => setBankData({ ...bankData, iban: e.target.value })}
                    className={inputClass}
                  />
                  {errors.iban && <p className="text-red-600 text-sm mt-1">{errors.iban}</p>}
                </div>
              </div>
              <button onClick={handleNextSection} className={primaryBtnClass + ' mt-8'}>
                Siguiente
              </button>
            </div>
          )}

          {/* Section 6: Legal */}
          {formSection === 6 && (
            <div className="animate-fadeIn bg-white border-2 border-mint-300 rounded-3xl p-8 shadow-lg">
              <h2 className="text-xl md:text-2xl font-black text-midnight mb-6 font-serif">Condiciones legales</h2>
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer p-4 rounded-xl border-2 border-mint-200 hover:border-orange/50 transition-colors">
                  <input
                    type="checkbox"
                    checked={legalData.condiciones}
                    onChange={(e) => setLegalData({ ...legalData, condiciones: e.target.checked })}
                    className="mt-1 w-5 h-5 rounded border-mint-300 text-orange focus:ring-orange accent-orange"
                  />
                  <span className="text-midnight">Acepto las condiciones de contratación</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer p-4 rounded-xl border-2 border-mint-200 hover:border-orange/50 transition-colors">
                  <input
                    type="checkbox"
                    checked={legalData.datos}
                    onChange={(e) => setLegalData({ ...legalData, datos: e.target.checked })}
                    className="mt-1 w-5 h-5 rounded border-mint-300 text-orange focus:ring-orange accent-orange"
                  />
                  <span className="text-midnight">Acepto el tratamiento de mis datos personales</span>
                </label>
              </div>
              {errors.legal && <p className="text-red-600 text-sm mt-3">{errors.legal}</p>}
              <button onClick={handleNextSection} className={primaryBtnClass + ' mt-8'}>
                Siguiente
              </button>
            </div>
          )}

          {/* Section 7: Review */}
          {formSection === 7 && (
            <div className="animate-fadeIn">
              <h2 className="text-xl md:text-2xl font-black text-midnight mb-6 font-serif">Revisa tus datos</h2>

              <div className="space-y-4">
                {/* Plan */}
                <div className="bg-white border-2 border-mint-300 rounded-2xl p-5">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-black text-midnight">Plan seleccionado</h3>
                    <button onClick={() => setStep(2)} className="text-sm text-orange hover:text-orange-dark font-bold underline">Editar</button>
                  </div>
                  <p className="text-midnight/80">{selectedPlan?.title} — {selectedPlan?.price}</p>
                </div>

                {/* Owner */}
                <div className="bg-white border-2 border-mint-300 rounded-2xl p-5">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-black text-midnight">Datos del propietario</h3>
                    <button onClick={() => setFormSection(0)} className="text-sm text-orange hover:text-orange-dark font-bold underline">Editar</button>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <p className="text-midnight/50">Nombre:</p>
                    <p className="text-midnight">{ownerData.nombre} {ownerData.primerApellido} {ownerData.segundoApellido}</p>
                    <p className="text-midnight/50">Fecha de nacimiento:</p>
                    <p className="text-midnight">{ownerData.fechaNacimiento}</p>
                    <p className="text-midnight/50">DNI/NIE:</p>
                    <p className="text-midnight">{ownerData.dni}</p>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white border-2 border-mint-300 rounded-2xl p-5">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-black text-midnight">Dirección</h3>
                    <button onClick={() => setFormSection(1)} className="text-sm text-orange hover:text-orange-dark font-bold underline">Editar</button>
                  </div>
                  <p className="text-sm text-midnight">
                    {addressData.calle} {addressData.numero}, {addressData.codigoPostal} {addressData.localidad}, {addressData.provincia}
                  </p>
                </div>

                {/* Contact */}
                <div className="bg-white border-2 border-mint-300 rounded-2xl p-5">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-black text-midnight">Contacto</h3>
                    <button onClick={() => setFormSection(2)} className="text-sm text-orange hover:text-orange-dark font-bold underline">Editar</button>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <p className="text-midnight/50">Teléfono:</p>
                    <p className="text-midnight">{contactData.telefono}</p>
                    <p className="text-midnight/50">Email:</p>
                    <p className="text-midnight">{contactData.email}</p>
                  </div>
                </div>

                {/* Horse */}
                <div className="bg-white border-2 border-mint-300 rounded-2xl p-5">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-black text-midnight">Datos del caballo</h3>
                    <button onClick={() => setFormSection(3)} className="text-sm text-orange hover:text-orange-dark font-bold underline">Editar</button>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <p className="text-midnight/50">Nombre:</p>
                    <p className="text-midnight">{horseData.nombre}</p>
                    <p className="text-midnight/50">Raza:</p>
                    <p className="text-midnight">{horseData.raza}</p>
                    <p className="text-midnight/50">Color:</p>
                    <p className="text-midnight">{horseData.color}</p>
                    <p className="text-midnight/50">Sexo:</p>
                    <p className="text-midnight">{horseData.sexo}</p>
                    <p className="text-midnight/50">Microchip:</p>
                    <p className="text-midnight">{horseData.microchip}</p>
                  </div>
                </div>

                {/* Files */}
                <div className="bg-white border-2 border-mint-300 rounded-2xl p-5">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-black text-midnight">Cartilla sanitaria</h3>
                    <button onClick={() => setFormSection(4)} className="text-sm text-orange hover:text-orange-dark font-bold underline">Editar</button>
                  </div>
                  <p className="text-sm text-midnight">
                    {uploadedFiles.length > 0
                      ? `${uploadedFiles.length} archivo(s) adjuntado(s)`
                      : 'No se adjuntaron fotos'}
                  </p>
                </div>

                {/* Bank */}
                <div className="bg-white border-2 border-mint-300 rounded-2xl p-5">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-black text-midnight">Datos bancarios</h3>
                    <button onClick={() => setFormSection(5)} className="text-sm text-orange hover:text-orange-dark font-bold underline">Editar</button>
                  </div>
                  <p className="text-sm text-midnight">{bankData.iban}</p>
                </div>
              </div>

              {submitError && (
                <div className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-2xl">
                  <p className="text-red-800 text-sm">
                    Ha ocurrido un error. Por favor, escríbenos por WhatsApp al{' '}
                    <a href="https://wa.me/34667755976" target="_blank" rel="noopener noreferrer" className="underline font-bold text-orange">
                      667 755 976
                    </a>
                  </p>
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={submitting}
                className={`${primaryBtnClass} mt-8 disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {submitting ? 'Enviando...' : 'Finalizar contratación'}
              </button>
            </div>
          )}
        </div>
      </main>
    )
  }

  // Step 5: Confirmation
  if (step === 5) {
    return (
      <main className="min-h-screen bg-mint-50 flex items-center justify-center py-12 px-6">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-orange-50 flex items-center justify-center border-2 border-orange">
            <svg className="w-10 h-10 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-midnight mb-4 font-serif">
            Solicitud de contratación enviada
          </h2>

          <div className="space-y-4 text-midnight/70">
            <p>
              Nos pondremos en contacto contigo en un plazo máximo de 2 horas (de lunes a viernes) para confirmar tu póliza.
            </p>
            <p>
              Recibirás toda la documentación en tu email.
            </p>
            <p className="pt-4 text-midnight font-bold">Si tienes alguna duda:</p>
            <a
              href="https://wa.me/34667755976"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-black rounded-2xl hover:bg-green-600 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.593-.839-6.311-2.236l-.44-.366-3.146 1.054 1.054-3.146-.366-.44A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp: 667 755 976
            </a>
          </div>
        </div>
      </main>
    )
  }

  return null
}
