'use client';

import { useState } from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────

type AgeRange = 'menor15' | 'mayor15' | null;

interface PlanOption {
  id: string;
  name: string;
  rcAmount: string;
  coverages: string[];
  price: string;
  priceNum: number;
  highlight?: boolean;
  badge?: string;
}

interface FormData {
  // Propietario
  nombre: string;
  apellidos: string;
  dni: string;
  fechaNacimiento: string;
  calle: string;
  numero: string;
  codigoPostal: string;
  localidad: string;
  provincia: string;
  telefono: string;
  email: string;
  // Caballo
  nombreCaballo: string;
  microchip: string;
  raza: string;
  sexo: string;
  capa: string;
  edadCaballo: string;
  // Bancarios
  iban: string;
  titularCuenta: string;
  // Checkboxes
  aceptaTerminos: boolean;
  aceptaDatos: boolean;
}

const initialFormData: FormData = {
  nombre: '',
  apellidos: '',
  dni: '',
  fechaNacimiento: '',
  calle: '',
  numero: '',
  codigoPostal: '',
  localidad: '',
  provincia: '',
  telefono: '',
  email: '',
  nombreCaballo: '',
  microchip: '',
  raza: '',
  sexo: '',
  capa: '',
  edadCaballo: '',
  iban: '',
  titularCuenta: '',
  aceptaTerminos: false,
  aceptaDatos: false,
};

// ─── Plan data ───────────────────────────────────────────────────────────────

const planMayor15: PlanOption = {
  id: 'mayor15-unica',
  name: 'RC Básica',
  rcAmount: '150.000€',
  coverages: [
    'Responsabilidad Civil 150.000€',
    'Daños personales y materiales a terceros',
    'Defensa jurídica y fianzas',
    'Cobertura en todo el territorio nacional',
  ],
  price: '48,27',
  priceNum: 48.27,
};

const planesMenor15: PlanOption[] = [
  {
    id: 'menor15-opcion1',
    name: 'Opción 1',
    rcAmount: '150.000€',
    coverages: [
      'Responsabilidad Civil 150.000€',
      'Retirada de cadáveres (300€)',
      'Daños personales y materiales a terceros',
      'Defensa jurídica y fianzas',
    ],
    price: '53,94',
    priceNum: 53.94,
  },
  {
    id: 'menor15-opcion2',
    name: 'Opción 2',
    rcAmount: '306.000€',
    coverages: [
      'Responsabilidad Civil 306.000€',
      'En caso de muerte del caballo (300€)',
      'Daños personales y materiales a terceros',
      'Defensa jurídica y fianzas',
    ],
    price: '62,62',
    priceNum: 62.62,
    highlight: true,
    badge: 'RECOMENDADO',
  },
  {
    id: 'menor15-opcion3',
    name: 'Opción 3',
    rcAmount: '306.000€',
    coverages: [
      'Responsabilidad Civil 306.000€',
      'En caso de muerte del caballo (1.000€)',
      'Daños personales y materiales a terceros',
      'Defensa jurídica y fianzas',
    ],
    price: '91,03',
    priceNum: 91.03,
    badge: 'MÁXIMA COBERTURA',
  },
];

// ─── Step labels ─────────────────────────────────────────────────────────────

const stepLabels = ['Edad', 'Cobertura', 'Resumen', 'Datos', 'Confirmación'];

// ─── Component ───────────────────────────────────────────────────────────────

export default function SegurosCaballosPage() {
  const [step, setStep] = useState<number>(0); // 0 = intro
  const [ageRange, setAgeRange] = useState<AgeRange>(null);
  const [selectedPlan, setSelectedPlan] = useState<PlanOption | null>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  // ─── Helpers ─────────────────────────────────────────────────────────────

  const handleAgeSelect = (age: AgeRange) => {
    setAgeRange(age);
    if (age === 'mayor15') {
      setSelectedPlan(planMayor15);
      setStep(2); // skip coverage step, go to step 2 (coverage shows single option)
    } else {
      setStep(2); // go to coverage selection
    }
  };

  const handlePlanSelect = (plan: PlanOption) => {
    setSelectedPlan(plan);
    setStep(3); // go to summary
  };

  const handleContratarFromSummary = () => {
    setStep(4); // go to form
  };

  const updateForm = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = (): boolean => {
    const errors: string[] = [];
    if (!formData.nombre.trim()) errors.push('Nombre es obligatorio');
    if (!formData.apellidos.trim()) errors.push('Apellidos es obligatorio');
    if (!formData.dni.trim()) errors.push('DNI/NIE es obligatorio');
    if (!formData.fechaNacimiento) errors.push('Fecha de nacimiento es obligatoria');
    if (!formData.calle.trim()) errors.push('Calle es obligatoria');
    if (!formData.codigoPostal.trim()) errors.push('Código postal es obligatorio');
    if (!formData.localidad.trim()) errors.push('Localidad es obligatoria');
    if (!formData.provincia.trim()) errors.push('Provincia es obligatoria');
    if (!formData.telefono.trim()) errors.push('Teléfono es obligatorio');
    if (!formData.email.trim()) errors.push('Email es obligatorio');
    if (!formData.nombreCaballo.trim()) errors.push('Nombre del caballo es obligatorio');
    if (!formData.raza.trim()) errors.push('Raza es obligatoria');
    if (!formData.sexo) errors.push('Sexo del caballo es obligatorio');
    if (!formData.edadCaballo.trim()) errors.push('Edad del caballo es obligatoria');
    if (!formData.iban.trim()) errors.push('IBAN es obligatorio');
    if (!formData.titularCuenta.trim()) errors.push('Titular de la cuenta es obligatorio');
    if (!formData.aceptaTerminos) errors.push('Debes aceptar los términos y condiciones');
    if (!formData.aceptaDatos) errors.push('Debes aceptar el tratamiento de datos');
    setFormErrors(errors);
    return errors.length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setStep(5); // confirmation
    }
  };

  const goBack = () => {
    if (step === 2 && ageRange === 'mayor15') {
      setStep(1);
      setAgeRange(null);
      setSelectedPlan(null);
    } else if (step === 3 && ageRange === 'mayor15') {
      // From summary, mayor15 goes back to age
      setStep(1);
      setAgeRange(null);
      setSelectedPlan(null);
    } else if (step === 3) {
      setStep(2);
      setSelectedPlan(null);
    } else if (step > 1) {
      setStep(step - 1);
    } else {
      setStep(0);
      setAgeRange(null);
      setSelectedPlan(null);
    }
  };

  // Compute effective display step for stepper
  const getDisplayStep = (): number => {
    if (step === 0) return 0;
    if (step === 1) return 1;
    if (step === 2) {
      if (ageRange === 'mayor15') return 2; // shows single option = coverage step
      return 2; // coverage selection
    }
    if (step === 3) return 3;
    if (step === 4) return 4;
    if (step === 5) return 5;
    return 0;
  };

  const displayStep = getDisplayStep();

  // ─── Render ──────────────────────────────────────────────────────────────

  return (
    <>
      {/* Hero Banner (always visible) */}
      <section className="hero-gradient pattern-overlay relative">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-5">
              <span className="text-2xl">🐴</span>
              <span className="text-white/90 text-sm font-medium">
                Contratación online · Proceso rápido y seguro
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Seguros de Responsabilidad Civil para{' '}
              <span className="text-amber-400">Caballos</span>
            </h1>
            <p className="text-lg text-navy-200 max-w-2xl mx-auto leading-relaxed mb-3">
              Protege a tu caballo y a terceros con la mejor cobertura de RC ecuestre.
              Opciones adaptadas a la edad y necesidades de tu animal.
            </p>
            <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 rounded-full px-5 py-2">
              <span className="text-amber-300 font-extrabold text-xl">Desde 48€/año</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C360 0 720 60 1080 30C1260 15 1380 20 1440 30V60H0Z" fill="#fefdfb" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Stepper (visible from step 1 onward) */}
            {step >= 1 && (
              <div className="mb-10">
                <div className="flex items-center justify-between max-w-2xl mx-auto">
                  {stepLabels.map((label, i) => {
                    const stepNum = i + 1;
                    const isActive = displayStep >= stepNum;
                    const isCurrent = displayStep === stepNum;
                    return (
                      <div key={label} className="flex flex-col items-center flex-1">
                        <div className="flex items-center w-full">
                          {i > 0 && (
                            <div
                              className={`flex-1 h-1 rounded-full transition-colors duration-300 ${
                                displayStep > i ? 'bg-amber-400' : 'bg-navy-200'
                              }`}
                            />
                          )}
                          <div
                            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 flex-shrink-0 ${
                              isCurrent
                                ? 'bg-amber-400 text-navy-900 ring-4 ring-amber-200 scale-110'
                                : isActive
                                ? 'bg-amber-400 text-navy-900'
                                : 'bg-navy-200 text-navy-500'
                            }`}
                          >
                            {displayStep > stepNum ? (
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ) : (
                              stepNum
                            )}
                          </div>
                          {i < stepLabels.length - 1 && (
                            <div
                              className={`flex-1 h-1 rounded-full transition-colors duration-300 ${
                                displayStep > stepNum ? 'bg-amber-400' : 'bg-navy-200'
                              }`}
                            />
                          )}
                        </div>
                        <span
                          className={`text-xs mt-2 font-medium hidden sm:block transition-colors ${
                            isActive ? 'text-navy-800' : 'text-navy-400'
                          }`}
                        >
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ─── STEP 0: Intro ─── */}
            {step === 0 && (
              <div className="text-center animate-fadeIn">
                <div className="bg-white rounded-2xl shadow-lg border border-cream-200 p-8 sm:p-12 max-w-2xl mx-auto">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">🏇</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-4">
                    Calcula tu seguro en 2 minutos
                  </h2>
                  <p className="text-navy-600 leading-relaxed mb-8 max-w-lg mx-auto">
                    Responde unas preguntas sencillas sobre tu caballo y obtén tu presupuesto
                    al instante. Contratación 100% online, rápida y sin papeleos.
                  </p>
                  <ul className="text-left max-w-sm mx-auto space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-navy-700">
                      <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-amber-600 text-sm font-bold">✓</span>
                      </span>
                      RC desde 150.000€ de cobertura
                    </li>
                    <li className="flex items-center gap-3 text-navy-700">
                      <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-amber-600 text-sm font-bold">✓</span>
                      </span>
                      Precios desde 48€/año
                    </li>
                    <li className="flex items-center gap-3 text-navy-700">
                      <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-amber-600 text-sm font-bold">✓</span>
                      </span>
                      Opciones con retirada de cadáveres
                    </li>
                    <li className="flex items-center gap-3 text-navy-700">
                      <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-amber-600 text-sm font-bold">✓</span>
                      </span>
                      Cobertura en todo el territorio nacional
                    </li>
                  </ul>
                  <button
                    onClick={() => setStep(1)}
                    className="btn-primary !px-10 !py-4 !text-base"
                  >
                    Comenzar cotización →
                  </button>
                </div>
              </div>
            )}

            {/* ─── STEP 1: Age question ─── */}
            {step === 1 && (
              <div className="animate-fadeIn">
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-3">
                    ¿Qué edad tiene tu caballo?
                  </h2>
                  <p className="text-navy-600">
                    La edad determina las opciones de cobertura disponibles.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  {/* Menor de 15 */}
                  <button
                    onClick={() => handleAgeSelect('menor15')}
                    className="group bg-white rounded-2xl border-2 border-cream-200 p-8 text-center shadow-sm hover:shadow-xl hover:border-amber-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-3xl">🐴</span>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Menor de 15 años</h3>
                    <p className="text-navy-500 text-sm">
                      Más opciones de cobertura disponibles
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1 text-amber-600 font-semibold text-sm">
                      Desde 53,94€/año
                    </div>
                  </button>

                  {/* Mayor de 15 */}
                  <button
                    onClick={() => handleAgeSelect('mayor15')}
                    className="group bg-white rounded-2xl border-2 border-cream-200 p-8 text-center shadow-sm hover:shadow-xl hover:border-amber-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-3xl">🐎</span>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Mayor de 15 años</h3>
                    <p className="text-navy-500 text-sm">
                      Cobertura de RC disponible
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1 text-amber-600 font-semibold text-sm">
                      48,27€/año
                    </div>
                  </button>
                </div>

                <div className="text-center mt-8">
                  <button
                    onClick={() => setStep(0)}
                    className="text-navy-500 hover:text-navy-700 text-sm font-medium transition-colors"
                  >
                    ← Volver al inicio
                  </button>
                </div>
              </div>
            )}

            {/* ─── STEP 2: Coverage selection ─── */}
            {step === 2 && (
              <div className="animate-fadeIn">
                {ageRange === 'mayor15' ? (
                  <>
                    <div className="text-center mb-8">
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-3">
                        Tu cobertura disponible
                      </h2>
                      <p className="text-navy-600">
                        Para caballos mayores de 15 años disponemos de la siguiente opción:
                      </p>
                    </div>
                    <div className="max-w-md mx-auto">
                      <PlanCard
                        plan={planMayor15}
                        onSelect={() => {
                          setSelectedPlan(planMayor15);
                          setStep(3);
                        }}
                        buttonText="Contratar"
                      />
                    </div>
                    <p className="text-center text-navy-500 text-sm mt-6">
                      * Para caballos mayores de 15 años no se incluye retirada de cadáveres.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="text-center mb-8">
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-3">
                        Elige tu cobertura
                      </h2>
                      <p className="text-navy-600">
                        Selecciona el plan que mejor se adapte a tus necesidades.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {planesMenor15.map((plan) => (
                        <PlanCard
                          key={plan.id}
                          plan={plan}
                          onSelect={() => handlePlanSelect(plan)}
                          buttonText="Seleccionar"
                        />
                      ))}
                    </div>
                  </>
                )}
                <div className="text-center mt-8">
                  <button
                    onClick={goBack}
                    className="text-navy-500 hover:text-navy-700 text-sm font-medium transition-colors"
                  >
                    ← Volver atrás
                  </button>
                </div>
              </div>
            )}

            {/* ─── STEP 3: Summary ─── */}
            {step === 3 && selectedPlan && (
              <div className="animate-fadeIn">
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-3">
                    Resumen de tu seguro
                  </h2>
                  <p className="text-navy-600">
                    Revisa los detalles de tu plan seleccionado antes de continuar.
                  </p>
                </div>
                <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg border border-cream-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-navy-800 to-navy-900 p-6 text-center">
                    <p className="text-navy-300 text-sm mb-1">Tu plan seleccionado</p>
                    <h3 className="text-white text-xl font-bold">{selectedPlan.name}</h3>
                    <p className="text-amber-400 text-sm mt-1">RC {selectedPlan.rcAmount}</p>
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="text-center mb-6">
                      <span className="text-4xl sm:text-5xl font-extrabold text-amber-500">
                        {selectedPlan.price}€
                      </span>
                      <span className="text-navy-500 text-lg">/año</span>
                    </div>
                    <div className="border-t border-cream-200 pt-6">
                      <p className="text-sm font-semibold text-navy-800 mb-3">Coberturas incluidas:</p>
                      <ul className="space-y-3">
                        {selectedPlan.coverages.map((cov, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-green-600 text-xs font-bold">✓</span>
                            </span>
                            <span className="text-navy-700 text-sm">{cov}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 p-4 bg-cream-100 rounded-xl border border-cream-200">
                      <p className="text-xs text-navy-500">
                        📋 Tipo de caballo: {ageRange === 'mayor15' ? 'Mayor de 15 años' : 'Menor de 15 años'}
                      </p>
                    </div>
                    <button
                      onClick={handleContratarFromSummary}
                      className="btn-primary w-full !py-4 !text-base mt-6"
                    >
                      Contratar ahora →
                    </button>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <button
                    onClick={goBack}
                    className="text-navy-500 hover:text-navy-700 text-sm font-medium transition-colors"
                  >
                    ← Volver atrás
                  </button>
                </div>
              </div>
            )}

            {/* ─── STEP 4: Form ─── */}
            {step === 4 && (
              <div className="animate-fadeIn">
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-3">
                    Datos para la contratación
                  </h2>
                  <p className="text-navy-600">
                    Completa el formulario con tus datos y los de tu caballo. Los campos marcados con * son obligatorios.
                  </p>
                </div>

                {formErrors.length > 0 && (
                  <div className="max-w-2xl mx-auto mb-6 bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-red-800 font-semibold text-sm mb-2">
                      Por favor, corrige los siguientes errores:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      {formErrors.map((err, i) => (
                        <li key={i} className="text-red-600 text-sm">{err}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="max-w-2xl mx-auto space-y-8">
                  {/* Datos del propietario */}
                  <div className="bg-white rounded-2xl shadow-sm border border-cream-200 p-6 sm:p-8">
                    <h3 className="text-lg font-bold text-navy-900 mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-sm">👤</span>
                      Datos del propietario
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormInput label="Nombre" required value={formData.nombre} onChange={(v) => updateForm('nombre', v)} />
                      <FormInput label="Apellidos" required value={formData.apellidos} onChange={(v) => updateForm('apellidos', v)} />
                      <FormInput label="DNI / NIE" required value={formData.dni} onChange={(v) => updateForm('dni', v)} placeholder="12345678A" />
                      <FormInput label="Fecha de nacimiento" required type="date" value={formData.fechaNacimiento} onChange={(v) => updateForm('fechaNacimiento', v)} />
                      <FormInput label="Calle" required value={formData.calle} onChange={(v) => updateForm('calle', v)} className="sm:col-span-2" placeholder="Nombre de la calle" />
                      <FormInput label="Número" value={formData.numero} onChange={(v) => updateForm('numero', v)} placeholder="Nº, piso, puerta" />
                      <FormInput label="Código postal" required value={formData.codigoPostal} onChange={(v) => updateForm('codigoPostal', v)} placeholder="36880" />
                      <FormInput label="Localidad" required value={formData.localidad} onChange={(v) => updateForm('localidad', v)} />
                      <FormInput label="Provincia" required value={formData.provincia} onChange={(v) => updateForm('provincia', v)} />
                      <FormInput label="Teléfono móvil" required type="tel" value={formData.telefono} onChange={(v) => updateForm('telefono', v)} placeholder="600 000 000" />
                      <FormInput label="Email" required type="email" value={formData.email} onChange={(v) => updateForm('email', v)} placeholder="tu@email.com" />
                    </div>
                  </div>

                  {/* Datos del caballo */}
                  <div className="bg-white rounded-2xl shadow-sm border border-cream-200 p-6 sm:p-8">
                    <h3 className="text-lg font-bold text-navy-900 mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-sm">🐴</span>
                      Datos del caballo
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormInput label="Nombre del caballo" required value={formData.nombreCaballo} onChange={(v) => updateForm('nombreCaballo', v)} />
                      <FormInput label="Microchip (si tiene)" value={formData.microchip} onChange={(v) => updateForm('microchip', v)} placeholder="Nº de microchip" />
                      <FormInput label="Raza" required value={formData.raza} onChange={(v) => updateForm('raza', v)} />
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-1.5">
                          Sexo <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.sexo}
                          onChange={(e) => updateForm('sexo', e.target.value)}
                          className="w-full px-4 py-3 border border-cream-300 rounded-xl text-navy-800 bg-white focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
                        >
                          <option value="">Seleccionar...</option>
                          <option value="macho">Macho</option>
                          <option value="hembra">Hembra</option>
                          <option value="castrado">Castrado</option>
                        </select>
                      </div>
                      <FormInput label="Capa (color)" value={formData.capa} onChange={(v) => updateForm('capa', v)} placeholder="Ej: Castaño, Alazán, Tordo..." />
                      <FormInput label="Edad del caballo" required value={formData.edadCaballo} onChange={(v) => updateForm('edadCaballo', v)} placeholder="Ej: 8 años" />
                    </div>
                  </div>

                  {/* Datos bancarios */}
                  <div className="bg-white rounded-2xl shadow-sm border border-cream-200 p-6 sm:p-8">
                    <h3 className="text-lg font-bold text-navy-900 mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-sm">🏦</span>
                      Datos bancarios (domiciliación)
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-1.5">
                          IBAN <span className="text-red-500">*</span>
                        </label>
                        <div className="flex gap-2">
                          <span className="flex items-center px-3 py-3 bg-navy-100 border border-cream-300 rounded-xl text-navy-700 font-mono text-sm font-semibold">
                            ES
                          </span>
                          <input
                            type="text"
                            value={formData.iban}
                            onChange={(e) => updateForm('iban', e.target.value)}
                            placeholder="00 0000 0000 00 0000000000"
                            maxLength={24}
                            className="flex-1 px-4 py-3 border border-cream-300 rounded-xl text-navy-800 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all font-mono"
                          />
                        </div>
                        <p className="text-xs text-navy-400 mt-1">22 dígitos después de ES</p>
                      </div>
                      <FormInput label="Titular de la cuenta" required value={formData.titularCuenta} onChange={(v) => updateForm('titularCuenta', v)} placeholder="Nombre completo del titular" />
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="bg-white rounded-2xl shadow-sm border border-cream-200 p-6 sm:p-8">
                    <h3 className="text-lg font-bold text-navy-900 mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-sm">📋</span>
                      Aceptaciones legales
                    </h3>
                    <div className="space-y-4">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData.aceptaTerminos}
                          onChange={(e) => updateForm('aceptaTerminos', e.target.checked)}
                          className="w-5 h-5 rounded border-cream-300 text-amber-500 focus:ring-amber-400 mt-0.5 flex-shrink-0"
                        />
                        <span className="text-sm text-navy-700 group-hover:text-navy-900 transition-colors">
                          He leído y acepto los{' '}
                          <span className="text-amber-600 underline">términos y condiciones</span>{' '}
                          del seguro. <span className="text-red-500">*</span>
                        </span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData.aceptaDatos}
                          onChange={(e) => updateForm('aceptaDatos', e.target.checked)}
                          className="w-5 h-5 rounded border-cream-300 text-amber-500 focus:ring-amber-400 mt-0.5 flex-shrink-0"
                        />
                        <span className="text-sm text-navy-700 group-hover:text-navy-900 transition-colors">
                          Acepto el tratamiento de mis datos personales de acuerdo con la{' '}
                          <span className="text-amber-600 underline">política de privacidad</span>.{' '}
                          <span className="text-red-500">*</span>
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Selected plan summary */}
                  {selectedPlan && (
                    <div className="bg-gradient-to-r from-navy-800 to-navy-900 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div>
                        <p className="text-navy-300 text-sm">Plan seleccionado:</p>
                        <p className="text-white font-bold">{selectedPlan.name} · RC {selectedPlan.rcAmount}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-amber-400 text-2xl font-extrabold">{selectedPlan.price}€</span>
                        <span className="text-navy-300">/año</span>
                      </div>
                    </div>
                  )}

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <button
                      onClick={goBack}
                      className="text-navy-500 hover:text-navy-700 text-sm font-medium transition-colors order-2 sm:order-1"
                    >
                      ← Volver atrás
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="btn-primary !px-10 !py-4 !text-base order-1 sm:order-2 w-full sm:w-auto"
                    >
                      Finalizar contratación
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ─── STEP 5: Confirmation ─── */}
            {step === 5 && (
              <div className="animate-fadeIn text-center">
                <div className="bg-white rounded-2xl shadow-lg border border-cream-200 p-8 sm:p-12 max-w-lg mx-auto">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-4">
                    ¡Solicitud enviada correctamente!
                  </h2>
                  <p className="text-navy-600 leading-relaxed mb-6">
                    Nos pondremos en contacto contigo en un plazo de{' '}
                    <strong className="text-navy-800">24 horas</strong> para confirmar tu póliza.
                    Recibirás la documentación por email.
                  </p>
                  <div className="bg-cream-100 rounded-xl p-4 border border-cream-200 mb-6">
                    <p className="text-sm text-navy-600">
                      <strong>Plan contratado:</strong> {selectedPlan?.name} · RC {selectedPlan?.rcAmount}
                    </p>
                    <p className="text-sm text-navy-600 mt-1">
                      <strong>Precio:</strong>{' '}
                      <span className="text-amber-600 font-bold">{selectedPlan?.price}€/año</span>
                    </p>
                    <p className="text-sm text-navy-600 mt-1">
                      <strong>Titular:</strong> {formData.nombre} {formData.apellidos}
                    </p>
                    <p className="text-sm text-navy-600 mt-1">
                      <strong>Caballo:</strong> {formData.nombreCaballo}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="tel:986651478"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy-800 text-white font-semibold rounded-xl hover:bg-navy-700 transition-colors"
                    >
                      📞 Llamar: 986 651 478
                    </a>
                    <a
                      href="https://wa.me/34986651478?text=Hola%2C%20acabo%20de%20enviar%20la%20solicitud%20del%20seguro%20de%20caballo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors"
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function PlanCard({
  plan,
  onSelect,
  buttonText,
}: {
  plan: PlanOption;
  onSelect: () => void;
  buttonText: string;
}) {
  return (
    <div
      className={`relative bg-white rounded-2xl border-2 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col ${
        plan.highlight ? 'border-amber-400 ring-2 ring-amber-200' : 'border-cream-200 hover:border-amber-300'
      }`}
    >
      {plan.badge && (
        <div
          className={`text-center py-1.5 text-xs font-bold tracking-wide ${
            plan.highlight
              ? 'bg-amber-400 text-navy-900'
              : 'bg-navy-800 text-white'
          }`}
        >
          {plan.badge}
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-navy-900 mb-1">{plan.name}</h3>
        <p className="text-sm text-navy-500 mb-4">RC {plan.rcAmount}</p>
        <div className="mb-5">
          <span className="text-3xl sm:text-4xl font-extrabold text-amber-500">
            {plan.price}€
          </span>
          <span className="text-navy-500 text-sm">/año</span>
        </div>
        <ul className="space-y-2.5 mb-6 flex-1">
          {plan.coverages.map((cov, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">✓</span>
              <span className="text-navy-700 text-sm">{cov}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={onSelect}
          className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 ${
            plan.highlight
              ? 'bg-amber-400 text-navy-900 hover:bg-amber-500 shadow-md hover:shadow-lg'
              : 'bg-navy-800 text-white hover:bg-navy-700 shadow-md hover:shadow-lg'
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

function FormInput({
  label,
  required,
  type = 'text',
  value,
  onChange,
  placeholder,
  className,
}: {
  label: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-navy-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-cream-300 rounded-xl text-navy-800 placeholder:text-navy-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all"
      />
    </div>
  );
}
