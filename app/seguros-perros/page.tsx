import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seguros para Perros — PPP, Compañía, Caza y Criadores | Gestoría Mera',
  description:
    'Seguros de responsabilidad civil para perros desde 20,40€/año. PPP, perros de compañía, perros de caza, criadores y adiestradores. Gestoría Mera, A Cañiza.',
};

export default function SegurosPerrosPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="hero-gradient pattern-overlay relative">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-2xl">🐕</span>
              <span className="text-white/90 text-sm font-medium">Seguros especializados para perros</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Seguros para{' '}
              <span className="text-amber-400">Perros</span>
            </h1>
            <p className="text-lg text-navy-200 max-w-2xl mx-auto leading-relaxed">
              Responsabilidad civil obligatoria y voluntaria para todo tipo de perros. 
              Cumple la normativa y protege tu patrimonio desde solo 20,40€ al año.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C360 0 720 60 1080 30C1260 15 1380 20 1440 30V60H0Z" fill="#fefdfb" />
          </svg>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom mx-auto">
          <div className="max-w-5xl mx-auto space-y-10">

            {/* PPP */}
            <div className="card-highlight" id="ppp">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🐕‍🦺</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-navy-900">PPP — Perros Potencialmente Peligrosos</h2>
                      <p className="text-sm text-navy-500">Seguro obligatorio por ley</p>
                    </div>
                  </div>
                  <p className="text-navy-600 leading-relaxed mb-4">
                    Seguro de responsabilidad civil obligatorio para razas catalogadas como potencialmente peligrosas (PPP). 
                    Imprescindible para la licencia y registro de tu perro. Cumple con el Real Decreto 287/2002 y la Ley 50/1999.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> Cobertura mínima de 120.000€ en RC
                    </li>
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> Válido para renovación de licencia
                    </li>
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> Incluye daños a terceros y sus bienes
                    </li>
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> Asistencia veterinaria de urgencia
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-navy-100 text-navy-700 text-xs font-medium px-3 py-1 rounded-full">American Pit Bull</span>
                    <span className="bg-navy-100 text-navy-700 text-xs font-medium px-3 py-1 rounded-full">Rottweiler</span>
                    <span className="bg-navy-100 text-navy-700 text-xs font-medium px-3 py-1 rounded-full">Staffordshire</span>
                    <span className="bg-navy-100 text-navy-700 text-xs font-medium px-3 py-1 rounded-full">Dogo Argentino</span>
                    <span className="bg-navy-100 text-navy-700 text-xs font-medium px-3 py-1 rounded-full">Akita Inu</span>
                    <span className="bg-navy-100 text-navy-700 text-xs font-medium px-3 py-1 rounded-full">+ otras razas</span>
                  </div>
                </div>
                <div className="lg:w-64 flex-shrink-0">
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-2xl p-6 text-center">
                    <p className="text-sm text-navy-600 mb-1">Desde</p>
                    <p className="text-4xl font-extrabold text-navy-900">30€</p>
                    <p className="text-sm text-navy-600 mt-1">al año</p>
                    <a
                      href="https://wa.me/34986651478?text=Hola%2C%20me%20interesa%20el%20seguro%20PPP%20para%20mi%20perro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !text-sm !px-6 !py-3 w-full mt-4"
                    >
                      Solicitar info
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* No PPP */}
            <div className="card" id="no-ppp">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🐶</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-navy-900">No PPP — Perros de Compañía</h2>
                      <p className="text-sm text-navy-500">Para cualquier raza no catalogada como peligrosa</p>
                    </div>
                  </div>
                  <p className="text-navy-600 leading-relaxed mb-4">
                    Seguro de responsabilidad civil voluntario para perros de compañía de cualquier raza no incluida en el listado PPP. 
                    Aunque no es obligatorio, es altamente recomendable para proteger tu patrimonio frente a posibles daños causados por tu mascota.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> Cobertura de RC por daños a terceros
                    </li>
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> Defensa jurídica incluida
                    </li>
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> Sin límite de edad del animal
                    </li>
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> Protección ante mordeduras y escapes
                    </li>
                  </ul>
                </div>
                <div className="lg:w-64 flex-shrink-0">
                  <div className="bg-gradient-to-br from-cream-100 to-cream-200 border-2 border-cream-300 rounded-2xl p-6 text-center">
                    <p className="text-sm text-navy-600 mb-1">Desde</p>
                    <p className="text-4xl font-extrabold text-navy-900">20,40€</p>
                    <p className="text-sm text-navy-600 mt-1">al año</p>
                    <a
                      href="https://wa.me/34986651478?text=Hola%2C%20me%20interesa%20el%20seguro%20para%20perro%20de%20compa%C3%B1%C3%ADa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary !text-sm !px-6 !py-3 w-full mt-4"
                    >
                      Solicitar info
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Perros de Caza */}
            <div className="card" id="caza">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🌲</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-navy-900">Perros de Caza</h2>
                      <p className="text-sm text-navy-500">Descuentos por pack de perros</p>
                    </div>
                  </div>
                  <p className="text-navy-600 leading-relaxed mb-4">
                    Seguro especial para perros de caza con precios reducidos por pack. Ideal para cazadores con varios perros que necesitan 
                    cobertura de RC durante la actividad cinegética y en el día a día.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> 2 perros por 32€/año
                    </li>
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> Cada perro adicional solo 6€
                    </li>
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> Cobertura durante actividad cinegética
                    </li>
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> RC todo el año, no solo en temporada
                    </li>
                  </ul>

                  <div className="bg-cream-100 rounded-xl p-4 border border-cream-300">
                    <p className="text-sm font-semibold text-navy-800 mb-2">💡 Ejemplo de ahorro:</p>
                    <p className="text-sm text-navy-600">
                      5 perros de caza = 32€ (primeros 2) + 18€ (3 × 6€) = <strong className="text-navy-900">50€/año total</strong>
                    </p>
                  </div>
                </div>
                <div className="lg:w-64 flex-shrink-0">
                  <div className="bg-gradient-to-br from-cream-100 to-cream-200 border-2 border-cream-300 rounded-2xl p-6 text-center">
                    <p className="text-sm text-navy-600 mb-1">2 perros desde</p>
                    <p className="text-4xl font-extrabold text-navy-900">32€</p>
                    <p className="text-sm text-navy-600 mt-1">al año</p>
                    <p className="text-xs text-navy-500 mt-2 border-t border-cream-300 pt-2">
                      Siguientes: 6€/perro
                    </p>
                    <a
                      href="https://wa.me/34986651478?text=Hola%2C%20me%20interesa%20el%20seguro%20para%20perros%20de%20caza"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary !text-sm !px-6 !py-3 w-full mt-4"
                    >
                      Solicitar info
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Criadores y Adiestradores */}
            <div className="card" id="criadores">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-navy-900">Criadores y Adiestradores</h2>
                      <p className="text-sm text-navy-500">Para profesionales del sector canino</p>
                    </div>
                  </div>
                  <p className="text-navy-600 leading-relaxed mb-4">
                    Seguro de responsabilidad civil profesional para criadores, adiestradores y centros caninos. 
                    Cubre los daños que puedan causar los animales bajo tu cuidado profesional.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> RC profesional completa
                    </li>
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> Cobertura para animales de terceros
                    </li>
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> Daños en instalaciones propias
                    </li>
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> Apto para nucleo zoológico
                    </li>
                  </ul>
                </div>
                <div className="lg:w-64 flex-shrink-0">
                  <div className="bg-gradient-to-br from-cream-100 to-cream-200 border-2 border-cream-300 rounded-2xl p-6 text-center">
                    <p className="text-sm text-navy-600 mb-1">Desde</p>
                    <p className="text-4xl font-extrabold text-navy-900">58,75€</p>
                    <p className="text-sm text-navy-600 mt-1">al trimestre</p>
                    <a
                      href="https://wa.me/34986651478?text=Hola%2C%20soy%20criador%2Fadiestrador%20y%20me%20interesa%20el%20seguro%20profesional"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary !text-sm !px-6 !py-3 w-full mt-4"
                    >
                      Solicitar info
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ / Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold text-navy-900 text-center mb-10">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-6">
            <div className="bg-cream-50 rounded-xl p-6 border border-cream-200">
              <h3 className="font-bold text-navy-900 mb-2">¿Es obligatorio el seguro para mi perro?</h3>
              <p className="text-navy-600 text-sm leading-relaxed">
                Si tu perro está catalogado como PPP (potencialmente peligroso), sí, es obligatorio por ley. 
                Para el resto de perros, la nueva Ley de Bienestar Animal (Ley 7/2023) establece la obligatoriedad 
                de un seguro de RC para todos los perros, aunque su desarrollo reglamentario está pendiente. 
                Te recomendamos contratarlo en cualquier caso.
              </p>
            </div>
            <div className="bg-cream-50 rounded-xl p-6 border border-cream-200">
              <h3 className="font-bold text-navy-900 mb-2">¿Qué documentación necesito?</h3>
              <p className="text-navy-600 text-sm leading-relaxed">
                Generalmente necesitas: DNI del propietario, chip del animal y, en caso de PPP, 
                la licencia administrativa vigente. Nosotros te indicamos exactamente qué necesitas según tu caso.
              </p>
            </div>
            <div className="bg-cream-50 rounded-xl p-6 border border-cream-200">
              <h3 className="font-bold text-navy-900 mb-2">¿Cuánto tarda la tramitación?</h3>
              <p className="text-navy-600 text-sm leading-relaxed">
                En la mayoría de los casos, tu póliza estará lista en 24-48 horas. 
                Para casos urgentes, contacta por teléfono y haremos todo lo posible por agilizar el proceso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900 pattern-overlay">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            ¿Listo para proteger a tu perro?
          </h2>
          <p className="text-navy-300 text-lg mb-8 max-w-xl mx-auto">
            Contacta con nosotros y te haremos un presupuesto personalizado sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:986651478" className="btn-primary">
              📞 986 651 478
            </a>
            <a
              href="https://wa.me/34986651478?text=Hola%2C%20quiero%20contratar%20un%20seguro%20para%20mi%20perro"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !border-amber-400 !text-amber-400 hover:!bg-amber-400 hover:!text-navy-900"
            >
              💬 Pedir presupuesto por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
