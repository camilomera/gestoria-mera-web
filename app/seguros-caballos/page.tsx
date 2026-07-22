import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seguros para Caballos — RC Ecuestre y Retirada de Cadáveres | Gestoría Mera',
  description:
    'Seguros de responsabilidad civil para caballos desde 47,38€/año. Con opción de retirada de cadáveres. Gestoría Mera, A Cañiza, Pontevedra.',
};

export default function SegurosCaballosPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="hero-gradient pattern-overlay relative">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-2xl">🐴</span>
              <span className="text-white/90 text-sm font-medium">Seguros especializados para caballos</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Seguros para{' '}
              <span className="text-amber-400">Caballos</span>
            </h1>
            <p className="text-lg text-navy-200 max-w-2xl mx-auto leading-relaxed">
              Protege tu inversión ecuestre con la mejor cobertura de responsabilidad civil. 
              Opciones con y sin retirada de cadáveres desde 47,38€ al año.
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

            {/* RC Caballos */}
            <div className="card-highlight" id="rc-caballos">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🏇</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-navy-900">RC Caballos</h2>
                      <p className="text-sm text-navy-500">Responsabilidad civil ecuestre básica</p>
                    </div>
                  </div>
                  <p className="text-navy-600 leading-relaxed mb-4">
                    Seguro de responsabilidad civil para propietarios de caballos. Cubre los daños que tu caballo 
                    pueda causar a terceros, tanto personales como materiales, durante la estabulación, el transporte y la monta.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> RC por daños personales y materiales a terceros
                    </li>
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> Cobertura en estabulación, transporte y monta
                    </li>
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> Defensa y fianzas judiciales
                    </li>
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> Válido para competiciones y paseos
                    </li>
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> Cobertura en todo el territorio nacional
                    </li>
                  </ul>

                  <div className="bg-cream-100 rounded-xl p-4 border border-cream-300">
                    <p className="text-sm font-semibold text-navy-800 mb-2">📋 Ideal para:</p>
                    <p className="text-sm text-navy-600">
                      Propietarios particulares, centros hípicos, rutas ecuestres, escuelas de equitación 
                      y cualquier persona que tenga caballos bajo su responsabilidad.
                    </p>
                  </div>
                </div>
                <div className="lg:w-64 flex-shrink-0">
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-2xl p-6 text-center">
                    <p className="text-sm text-navy-600 mb-1">Desde</p>
                    <p className="text-4xl font-extrabold text-navy-900">47,38€</p>
                    <p className="text-sm text-navy-600 mt-1">al año</p>
                    <a
                      href="https://wa.me/34986651478?text=Hola%2C%20me%20interesa%20el%20seguro%20RC%20para%20mi%20caballo"
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

            {/* RC + Retirada de Cadáveres */}
            <div className="card" id="rc-retirada">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🐴</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-navy-900">RC + Retirada de Cadáveres</h2>
                      <p className="text-sm text-navy-500">La opción más completa</p>
                    </div>
                  </div>
                  <p className="text-navy-600 leading-relaxed mb-4">
                    Incluye todas las coberturas del seguro básico de RC más el servicio de retirada y destrucción 
                    del cadáver en caso de fallecimiento del animal. Un seguro completo que te libera de gestiones 
                    y costes inesperados en un momento difícil.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> Todo lo incluido en RC básica
                    </li>
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> Recogida del cadáver incluida
                    </li>
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> Transporte a centro de destrucción autorizado
                    </li>
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> Gestión completa del proceso
                    </li>
                    <li className="flex items-center gap-2 text-sm text-navy-700">
                      <span className="text-amber-500 font-bold">✓</span> Cumple normativa sanitaria vigente
                    </li>
                  </ul>

                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <p className="text-sm font-semibold text-navy-800 mb-2">⭐ Recomendado</p>
                    <p className="text-sm text-navy-600">
                      Por solo 5,56€ más al año, obtienes la tranquilidad de saber que la retirada del animal 
                      estará cubierta. La retirada por cuenta propia puede costar más de 300€.
                    </p>
                  </div>
                </div>
                <div className="lg:w-64 flex-shrink-0">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-2xl p-6 text-center">
                    <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                      MÁS POPULAR
                    </div>
                    <p className="text-sm text-navy-600 mb-1">Desde</p>
                    <p className="text-4xl font-extrabold text-navy-900">52,94€</p>
                    <p className="text-sm text-navy-600 mt-1">al año</p>
                    <a
                      href="https://wa.me/34986651478?text=Hola%2C%20me%20interesa%20el%20seguro%20RC%20%2B%20retirada%20de%20cad%C3%A1veres%20para%20mi%20caballo"
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

      {/* Comparison Table */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold text-navy-900 text-center mb-10">
            Compara nuestras opciones
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy-800 text-white">
                  <th className="text-left p-4 rounded-tl-xl font-semibold">Cobertura</th>
                  <th className="text-center p-4 font-semibold">RC Básica</th>
                  <th className="text-center p-4 rounded-tr-xl font-semibold">RC + Retirada</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-cream-200">
                  <td className="p-4 text-navy-700">RC daños personales</td>
                  <td className="p-4 text-center text-green-600 font-bold">✓</td>
                  <td className="p-4 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr className="border-b border-cream-200 bg-cream-50">
                  <td className="p-4 text-navy-700">RC daños materiales</td>
                  <td className="p-4 text-center text-green-600 font-bold">✓</td>
                  <td className="p-4 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr className="border-b border-cream-200">
                  <td className="p-4 text-navy-700">Defensa jurídica</td>
                  <td className="p-4 text-center text-green-600 font-bold">✓</td>
                  <td className="p-4 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr className="border-b border-cream-200 bg-cream-50">
                  <td className="p-4 text-navy-700">Fianzas judiciales</td>
                  <td className="p-4 text-center text-green-600 font-bold">✓</td>
                  <td className="p-4 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr className="border-b border-cream-200">
                  <td className="p-4 text-navy-700">Retirada de cadáveres</td>
                  <td className="p-4 text-center text-red-400">✗</td>
                  <td className="p-4 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr className="border-b border-cream-200 bg-cream-50">
                  <td className="p-4 text-navy-700">Transporte a centro autorizado</td>
                  <td className="p-4 text-center text-red-400">✗</td>
                  <td className="p-4 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr>
                  <td className="p-4 text-navy-700 font-bold">Precio desde</td>
                  <td className="p-4 text-center font-bold text-navy-900">47,38€/año</td>
                  <td className="p-4 text-center font-bold text-navy-900">52,94€/año</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold text-navy-900 text-center mb-10">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-cream-200 shadow-sm">
              <h3 className="font-bold text-navy-900 mb-2">¿Es obligatorio el seguro para caballos?</h3>
              <p className="text-navy-600 text-sm leading-relaxed">
                Aunque la RC para caballos no es estrictamente obligatoria en todos los casos, 
                sí lo es para centros hípicos, escuelas de equitación y actividades ecuestres organizadas. 
                En cualquier caso, es altamente recomendable dado el tamaño y la fuerza del animal.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-cream-200 shadow-sm">
              <h3 className="font-bold text-navy-900 mb-2">¿Cubre el seguro los accidentes durante competiciones?</h3>
              <p className="text-navy-600 text-sm leading-relaxed">
                Sí, nuestro seguro cubre la RC durante competiciones, entrenamientos, paseos y cualquier 
                actividad ecuestre habitual. Consulta con nosotros para actividades especiales.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-cream-200 shadow-sm">
              <h3 className="font-bold text-navy-900 mb-2">¿Puedo asegurar varios caballos con descuento?</h3>
              <p className="text-navy-600 text-sm leading-relaxed">
                Sí, para varios caballos podemos ofrecerte condiciones especiales. Contacta con nosotros 
                y te haremos un presupuesto personalizado según el número de animales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900 pattern-overlay">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            ¿Quieres proteger a tu caballo?
          </h2>
          <p className="text-navy-300 text-lg mb-8 max-w-xl mx-auto">
            Te asesoramos sobre la mejor opción para ti. Presupuesto sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:986651478" className="btn-primary">
              📞 986 651 478
            </a>
            <a
              href="https://wa.me/34986651478?text=Hola%2C%20quiero%20contratar%20un%20seguro%20para%20mi%20caballo"
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
