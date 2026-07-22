'use client';

import { useState } from 'react';

// ─── Types ─────────────────────────────────────────────────────────────────────

interface PlanOption {
  id: string;
  title: string;
  coverages: string[];
  price: string;
  priceNum: number;
}

interface FormData {
  nombre: string;
  dni: string;
  fechaNacimiento: string;
  calle: string;
  numero: string;
  codigoPostal: string;
  localidad: string;
  telefono: string;
  email: string;
  nombreCaballo: string;
  microchip: string;
  iban: string;
  titularCuenta: string;
  aceptaTerminos: boolean;
  aceptaDatos: boolean;
}

const initialFormData: FormData = {
  nombre: '',
  dni: '',
  fechaNacimiento: '',
  calle: '',
  numero: '',
  codigoPostal: '',
  localidad: '',
  telefono: '',
  email: '',
  nombreCaballo: '',
  microchip: '',
  iban: '',
  titularCuenta: '',
  aceptaTerminos: false,
  aceptaDatos: false,
};

// ─── Plan Data ─────────────────────────────────────────────────────────────────

const planMayor15: PlanOption = {
  id: 'mayor15-unica',
  title: 'Responsabilidad Civil',
  coverages: [
    '150.000€ de cobertura',
    'Sin retirada de cadáveres',
  ],
  price: '48,27',
  priceNum: 48.27,
};

const planesMenor15: PlanOption[] = [
  {
    id: 'menor15-opcion1',
    title: 'Responsabilidad Civil 150.000€ + Retirada de cadáveres (300€)',
    coverages: [
      'Responsabilidad Civil 150.000€',
      'Retirada de cadáveres hasta 300€',
    ],
    price: '53,94',
    priceNum: 53.94,
  },
  {
    id: 'menor15-opcion2',
    title: 'Responsabilidad Civil 306.000€ + Cobertura por fallecimiento (300€)',
    coverages: [
      'Responsabilidad Civil 306.000€',
      'Cobertura por fallecimiento hasta 300€',
    ],
    price: '62,62',
    priceNum: 62.62,
  },
  {
    id: 'menor15-opcion3',
    title: 'Responsabilidad Civil 306.000€ + Cobertura por fallecimiento (1.000€)',
    coverages: [
      'Responsabilidad Civil 306.000€',
      'Cobertura por fallecimiento hasta 1.000€',
    ],
    price: '91,03',
    priceNum: 91.03,
  },
];

// ─── Form Steps ────────────────────────────────────────────────────────────────

const FORM_STEPS = [
  { key: 'nombre', question: '¿Cómo te llamas?' },
  { key: 'dni', question: '¿Cuál es tu DNI o NIE?' },
  { key: 'fechaNacimiento', question: '¿Cuál es tu fecha de nacimiento?' },
  { key: 'direccion', question: '¿Cuál es tu dirección?' },
  { key: 'telefono', question: '¿Cuál es tu teléfono móvil?' },
  { key: 'email', question: '¿Cuál es tu email?' },
  { key: 'nombreCaballo', question: '¿Cómo se llama tu caballo?' },
  { key: 'microchip', question: '¿Tiene microchip? Si es así, ¿cuál es el número?' },
  { key: 'iban', question: '¿Cuál es el IBAN de la cuenta para domiciliar el pago?' },
  { key: 'legal', question: 'Condiciones legales' },
  { key: 'review', question: 'Revisa tus datos' },
] as const;

const TOTAL_FORM_STEPS = FORM_STEPS.length;

// ─── Component ─────────────────────────────────────────────────────────────────

export default function SegurosCaballosPage() {
  // Main flow: 'hero' | 'age' | 'coverage' | 'summary' | 'form' | 'confirmation'
  const [stage, setStage] = useState<string>('hero');
  const [ageOver15, setAgeOver15] = useState<boolean | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<PlanOption | null>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formStep, setFormStep] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // ─── Handlers ──────────────────────────────────────────────────────────────

  const handleAgeSelect = (over15: boolean) => {
    setAgeOver15(over15);
    if (over15) {
      setSelectedPlan(planMayor15);
      setStage('coverage');
    } else {
      setStage('coverage');
    }
  };

  const handlePlanSelect = (plan: PlanOption) => {
    setSelectedPlan(plan);
    setStage('summary');
  };

  const updateForm = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canAdvanceFormStep = (): boolean => {
    const step = FORM_STEPS[formStep];
    switch (step.key) {
      case 'nombre': return formData.nombre.trim().length > 0;
      case 'dni': return formData.dni.trim().length > 0;
      case 'fechaNacimiento': return formData.fechaNacimiento.length > 0;
      case 'direccion': return formData.calle.trim().length > 0 && formData.codigoPostal.trim().length > 0 && formData.localidad.trim().length > 0;
      case 'telefono': return formData.telefono.trim().length > 0;
      case 'email': return formData.email.trim().length > 0;
      case 'nombreCaballo': return formData.nombreCaballo.trim().length > 0;
      case 'microchip': return true; // optional
      case 'iban': return formData.iban.trim().length > 0 && formData.titularCuenta.trim().length > 0;
      case 'legal': return formData.aceptaTerminos && formData.aceptaDatos;
      case 'review': return true;
      default: return true;
    }
  };

  const handleFormNext = () => {
    if (formStep < TOTAL_FORM_STEPS - 1) {
      setFormStep(formStep + 1);
    }
  };

  const handleFormBack = () => {
    if (formStep > 0) {
      setFormStep(formStep - 1);
    } else {
      setStage('summary');
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    const body = {
      plan: selectedPlan?.title || '',
      precio: selectedPlan?.price || '',
      nombre: formData.nombre,
      dni: formData.dni,
      fecha_nacimiento: formData.fechaNacimiento,
      direccion: `${formData.calle} ${formData.numero}, ${formData.codigoPostal} ${formData.localidad}`,
      telefono: formData.telefono,
      email: formData.email,
      nombre_caballo: formData.nombreCaballo,
      microchip: formData.microchip || 'No tiene',
      iban: formData.iban,
      titular_cuenta: formData.titularCuenta,
      _subject: `Nueva contratación seguro caballo - ${formData.nombre}`,
    };

    try {
      const res = await fetch('https://formsubmit.co/ajax/meracarreirocamilo@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStage('confirmation');
      } else {
        setSubmitError('Ha ocurrido un error al enviar la solicitud. Por favor, llámanos al 986 651 478.');
      }
    } catch {
      setSubmitError('Ha ocurrido un error al enviar la solicitud. Por favor, llámanos al 986 651 478.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ─── Progress helpers ──────────────────────────────────────────────────────

  const getMainProgress = (): number => {
    switch (stage) {
      case 'hero': return 0;
      case 'age': return 20;
      case 'coverage': return 40;
      case 'summary': return 60;
      case 'form': return 60 + (formStep / TOTAL_FORM_STEPS) * 35;
      case 'confirmation': return 100;
      default: return 0;
    }
  };

  // ─── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-white">
      {/* ─── Hero Banner ─── */}
      {stage === 'hero' && (
        <div className="animate-fadeIn">
          <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1200&q=80"
              alt="Caballo en el campo"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy-800/70" />
            <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Seguro de Responsabilidad Civil para Caballos
              </h1>
              <p className="text-lg sm:text-xl text-navy-100 mb-8">
                Protección completa desde 48€ al año
              </p>
              <button
                onClick={() => setStage('age')}
                className="btn-white !px-10 !py-4 !text-lg !font-semibold"
              >
                Contratar ahora
              </button>
            </div>
          </section>
        </div>
      )}

      {/* ─── Flow Content ─── */}
      {stage !== 'hero' && stage !== 'confirmation' && (
        <div className="animate-fadeIn">
          {/* Progress bar */}
          <div className="sticky top-0 z-50 bg-white border-b border-navy-100">
            <div className="h-1 bg-navy-50">
              <div
                className="h-full bg-navy-700 transition-all duration-500 ease-out"
                style={{ width: `${getMainProgress()}%` }}
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            {/* ─── Step 1: Age ─── */}
            {stage === 'age' && (
              <div className="animate-slideUp">
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-800 text-center mb-10">
                  ¿Tu caballo tiene más de 15 años?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
                  <button
                    onClick={() => handleAgeSelect(true)}
                    className="group bg-white border-2 border-navy-200 rounded-xl p-8 text-center hover:border-navy-600 hover:shadow-lg transition-all duration-200"
                  >
                    <p className="text-lg font-semibold text-navy-800 group-hover:text-navy-900">
                      Sí, tiene más de 15 años
                    </p>
                  </button>
                  <button
                    onClick={() => handleAgeSelect(false)}
                    className="group bg-white border-2 border-navy-200 rounded-xl p-8 text-center hover:border-navy-600 hover:shadow-lg transition-all duration-200"
                  >
                    <p className="text-lg font-semibold text-navy-800 group-hover:text-navy-900">
                      No, tiene menos de 15 años
                    </p>
                  </button>
                </div>
              </div>
            )}

            {/* ─── Step 2: Coverage ─── */}
            {stage === 'coverage' && (
              <div className="animate-slideUp">
                {ageOver15 ? (
                  <>
                    <div className="max-w-md mx-auto">
                      <div className="bg-white border border-navy-200 rounded-xl p-8 shadow-sm">
                        <h3 className="text-xl font-bold text-navy-800 mb-4">
                          Responsabilidad Civil
                        </h3>
                        <p className="text-navy-600 mb-1">150.000€ de cobertura</p>
                        <p className="text-navy-500 text-sm mb-6">Sin retirada de cadáveres</p>
                        <div className="mb-6">
                          <span className="text-3xl font-bold text-navy-800">48,27€</span>
                          <span className="text-navy-500 ml-1">/año</span>
                        </div>
                        <button
                          onClick={() => { setSelectedPlan(planMayor15); setStage('summary'); }}
                          className="btn-primary w-full"
                        >
                          Contratar este seguro
                        </button>
                      </div>
                    </div>
                    <div className="text-center mt-8">
                      <button onClick={() => setStage('age')} className="text-navy-500 hover:text-navy-700 text-sm font-medium">
                        Volver
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl sm:text-3xl font-bold text-navy-800 text-center mb-10">
                      Elige tu cobertura
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {planesMenor15.map((plan) => (
                        <div key={plan.id} className="bg-white border border-navy-200 rounded-xl p-6 shadow-sm flex flex-col hover:shadow-lg hover:border-navy-400 transition-all duration-200">
                          <h3 className="text-base font-bold text-navy-800 mb-4 leading-snug min-h-[60px]">
                            {plan.title}
                          </h3>
                          <ul className="space-y-2 mb-6 flex-1">
                            {plan.coverages.map((c, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-navy-600">
                                <svg className="w-4 h-4 text-navy-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                {c}
                              </li>
                            ))}
                          </ul>
                          <div className="mb-4">
                            <span className="text-2xl font-bold text-navy-800">{plan.price}€</span>
                            <span className="text-navy-500 ml-1 text-sm">/año</span>
                          </div>
                          <button
                            onClick={() => handlePlanSelect(plan)}
                            className="btn-primary w-full !py-3 !text-sm"
                          >
                            Seleccionar
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="text-center mt-8">
                      <button onClick={() => setStage('age')} className="text-navy-500 hover:text-navy-700 text-sm font-medium">
                        Volver
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* ─── Step 3: Summary ─── */}
            {stage === 'summary' && selectedPlan && (
              <div className="animate-slideUp max-w-lg mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-800 text-center mb-8">
                  Tu seguro
                </h2>
                <div className="bg-navy-50 border border-navy-200 rounded-xl p-8">
                  <h3 className="text-lg font-bold text-navy-800 mb-3">{selectedPlan.title}</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedPlan.coverages.map((c, i) => (
                      <li key={i} className="text-navy-600 text-sm flex items-start gap-2">
                        <svg className="w-4 h-4 text-navy-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-navy-200 pt-4">
                    <div className="flex items-baseline justify-between">
                      <span className="text-navy-600 font-medium">Total anual</span>
                      <span className="text-2xl font-bold text-navy-800">{selectedPlan.price}€</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => { setFormStep(0); setStage('form'); }}
                  className="btn-primary w-full mt-8"
                >
                  Continuar con la contratación
                </button>
                <div className="text-center mt-4">
                  <button onClick={() => setStage('coverage')} className="text-navy-500 hover:text-navy-700 text-sm font-medium">
                    Volver
                  </button>
                </div>
              </div>
            )}

            {/* ─── Step 4: Progressive Form ─── */}
            {stage === 'form' && (
              <div className="animate-slideUp max-w-lg mx-auto">
                {/* Form progress indicator */}
                <div className="text-center mb-2">
                  <span className="text-sm text-navy-500">
                    Paso {formStep + 1} de {TOTAL_FORM_STEPS}
                  </span>
                </div>
                <div className="h-1 bg-navy-100 rounded-full mb-10">
                  <div
                    className="h-full bg-navy-700 rounded-full transition-all duration-300"
                    style={{ width: `${((formStep + 1) / TOTAL_FORM_STEPS) * 100}%` }}
                  />
                </div>

                {/* Form question */}
                <h2 className="text-xl sm:text-2xl font-bold text-navy-800 mb-8">
                  {FORM_STEPS[formStep].question}
                </h2>

                {/* ─── Form Fields ─── */}
                <div className="space-y-4">
                  {FORM_STEPS[formStep].key === 'nombre' && (
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">Nombre y Apellidos</label>
                      <input
                        type="text"
                        value={formData.nombre}
                        onChange={(e) => updateForm('nombre', e.target.value)}
                        placeholder="Ej: María García López"
                        className="w-full border border-navy-200 rounded-lg px-4 py-3 text-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
                      />
                    </div>
                  )}

                  {FORM_STEPS[formStep].key === 'dni' && (
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">DNI o NIE</label>
                      <input
                        type="text"
                        value={formData.dni}
                        onChange={(e) => updateForm('dni', e.target.value)}
                        placeholder="Ej: 12345678A"
                        className="w-full border border-navy-200 rounded-lg px-4 py-3 text-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
                      />
                    </div>
                  )}

                  {FORM_STEPS[formStep].key === 'fechaNacimiento' && (
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">Fecha de nacimiento</label>
                      <input
                        type="date"
                        value={formData.fechaNacimiento}
                        onChange={(e) => updateForm('fechaNacimiento', e.target.value)}
                        className="w-full border border-navy-200 rounded-lg px-4 py-3 text-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
                      />
                    </div>
                  )}

                  {FORM_STEPS[formStep].key === 'direccion' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-2">Calle</label>
                        <input
                          type="text"
                          value={formData.calle}
                          onChange={(e) => updateForm('calle', e.target.value)}
                          placeholder="Nombre de la calle"
                          className="w-full border border-navy-200 rounded-lg px-4 py-3 text-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-2">Número</label>
                        <input
                          type="text"
                          value={formData.numero}
                          onChange={(e) => updateForm('numero', e.target.value)}
                          placeholder="Número, piso, puerta"
                          className="w-full border border-navy-200 rounded-lg px-4 py-3 text-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-navy-700 mb-2">Código Postal</label>
                          <input
                            type="text"
                            value={formData.codigoPostal}
                            onChange={(e) => updateForm('codigoPostal', e.target.value)}
                            placeholder="27001"
                            className="w-full border border-navy-200 rounded-lg px-4 py-3 text-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-navy-700 mb-2">Localidad</label>
                          <input
                            type="text"
                            value={formData.localidad}
                            onChange={(e) => updateForm('localidad', e.target.value)}
                            placeholder="Ciudad o pueblo"
                            className="w-full border border-navy-200 rounded-lg px-4 py-3 text-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {FORM_STEPS[formStep].key === 'telefono' && (
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">Teléfono móvil</label>
                      <input
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => updateForm('telefono', e.target.value)}
                        placeholder="Ej: 612 345 678"
                        className="w-full border border-navy-200 rounded-lg px-4 py-3 text-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
                      />
                    </div>
                  )}

                  {FORM_STEPS[formStep].key === 'email' && (
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">Correo electrónico</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateForm('email', e.target.value)}
                        placeholder="tu@email.com"
                        className="w-full border border-navy-200 rounded-lg px-4 py-3 text-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
                      />
                    </div>
                  )}

                  {FORM_STEPS[formStep].key === 'nombreCaballo' && (
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">Nombre del caballo</label>
                      <input
                        type="text"
                        value={formData.nombreCaballo}
                        onChange={(e) => updateForm('nombreCaballo', e.target.value)}
                        placeholder="Nombre de tu caballo"
                        className="w-full border border-navy-200 rounded-lg px-4 py-3 text-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
                      />
                    </div>
                  )}

                  {FORM_STEPS[formStep].key === 'microchip' && (
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">Número de microchip (opcional)</label>
                      <input
                        type="text"
                        value={formData.microchip}
                        onChange={(e) => updateForm('microchip', e.target.value)}
                        placeholder="Déjalo vacío si no tiene"
                        className="w-full border border-navy-200 rounded-lg px-4 py-3 text-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
                      />
                      <p className="text-sm text-navy-400 mt-2">Si tu caballo no tiene microchip, puedes dejarlo en blanco.</p>
                    </div>
                  )}

                  {FORM_STEPS[formStep].key === 'iban' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-2">IBAN</label>
                        <input
                          type="text"
                          value={formData.iban}
                          onChange={(e) => updateForm('iban', e.target.value)}
                          placeholder="ES00 0000 0000 0000 0000 0000"
                          className="w-full border border-navy-200 rounded-lg px-4 py-3 text-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent font-mono"
                        />
                        <p className="text-sm text-navy-400 mt-2">ES + 22 dígitos</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-2">Titular de la cuenta</label>
                        <input
                          type="text"
                          value={formData.titularCuenta}
                          onChange={(e) => updateForm('titularCuenta', e.target.value)}
                          placeholder="Nombre del titular de la cuenta"
                          className="w-full border border-navy-200 rounded-lg px-4 py-3 text-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
                        />
                      </div>
                    </>
                  )}

                  {FORM_STEPS[formStep].key === 'legal' && (
                    <div className="space-y-4">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.aceptaTerminos}
                          onChange={(e) => updateForm('aceptaTerminos', e.target.checked)}
                          className="mt-1 w-5 h-5 rounded border-navy-300 text-navy-700 focus:ring-navy-600"
                        />
                        <span className="text-sm text-navy-700">
                          Acepto las condiciones de contratación
                        </span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.aceptaDatos}
                          onChange={(e) => updateForm('aceptaDatos', e.target.checked)}
                          className="mt-1 w-5 h-5 rounded border-navy-300 text-navy-700 focus:ring-navy-600"
                        />
                        <span className="text-sm text-navy-700">
                          Acepto el tratamiento de mis datos personales
                        </span>
                      </label>
                    </div>
                  )}

                  {FORM_STEPS[formStep].key === 'review' && (
                    <div className="bg-navy-50 rounded-xl p-6 space-y-4 text-sm">
                      <h3 className="font-bold text-navy-800 text-base mb-4">Resumen de datos</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <ReviewItem label="Nombre" value={formData.nombre} />
                        <ReviewItem label="DNI/NIE" value={formData.dni} />
                        <ReviewItem label="Fecha de nacimiento" value={formData.fechaNacimiento} />
                        <ReviewItem label="Dirección" value={`${formData.calle} ${formData.numero}, ${formData.codigoPostal} ${formData.localidad}`} />
                        <ReviewItem label="Teléfono" value={formData.telefono} />
                        <ReviewItem label="Email" value={formData.email} />
                        <ReviewItem label="Caballo" value={formData.nombreCaballo} />
                        <ReviewItem label="Microchip" value={formData.microchip || 'No tiene'} />
                        <ReviewItem label="IBAN" value={formData.iban} />
                        <ReviewItem label="Titular cuenta" value={formData.titularCuenta} />
                      </div>
                      <div className="border-t border-navy-200 pt-4 mt-4">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-navy-700">Plan seleccionado</span>
                          <span className="font-bold text-navy-800">{selectedPlan?.price}€/año</span>
                        </div>
                        <p className="text-navy-600 mt-1">{selectedPlan?.title}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Error message */}
                {submitError && (
                  <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                    {submitError}
                  </div>
                )}

                {/* Navigation buttons */}
                <div className="flex items-center justify-between mt-10">
                  <button
                    onClick={handleFormBack}
                    className="text-navy-500 hover:text-navy-700 text-sm font-medium"
                  >
                    Atrás
                  </button>

                  {FORM_STEPS[formStep].key === 'review' ? (
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="btn-primary !px-8 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Enviando...' : 'Finalizar contratación'}
                    </button>
                  ) : (
                    <button
                      onClick={handleFormNext}
                      disabled={!canAdvanceFormStep()}
                      className="btn-primary !px-8 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                    >
                      Siguiente
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── Step 5: Confirmation ─── */}
      {stage === 'confirmation' && (
        <div className="min-h-screen flex items-center justify-center px-4 py-16 animate-fadeIn">
          <div className="text-center max-w-md mx-auto">
            {/* Checkmark SVG */}
            <div className="w-20 h-20 bg-navy-800 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-800 mb-4">
              Solicitud de contratación enviada
            </h2>
            <p className="text-navy-600 mb-2">
              Nos pondremos en contacto contigo en un plazo máximo de 24 horas para confirmar tu póliza.
            </p>
            <p className="text-navy-600 mb-8">
              Recibirás toda la documentación en tu email.
            </p>
            <div className="bg-navy-50 rounded-xl p-6 text-sm text-navy-700">
              <p className="font-medium mb-2">Si tienes alguna duda:</p>
              <p>Teléfono: 986 651 478</p>
              <p>WhatsApp: 600 XXX XXX</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Helper Components ─────────────────────────────────────────────────────────

function ReviewItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-navy-500 text-xs uppercase tracking-wide">{label}</span>
      <p className="text-navy-800 font-medium mt-0.5">{value}</p>
    </div>
  );
}
