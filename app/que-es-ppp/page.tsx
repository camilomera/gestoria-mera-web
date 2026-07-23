"use client"

export default function QueEsPPPPage() {
  const razasOficiales = [
    'Pit Bull Terrier',
    'Staffordshire Bull Terrier',
    'American Staffordshire Terrier',
    'Rottweiler',
    'Dogo Argentino',
    'Fila Brasileiro',
    'Tosa Inu',
    'Akita Inu',
  ]

  const otrasRazas = [
    'Dóberman',
    'Bullmastiff',
    'Dogo de Burdeos',
    'Mastín Napolitano',
    'Bóxer',
    'Presa Canario',
    'Bull Terrier',
    'Dogo del Tíbet',
  ]

  const requisitosLicencia = [
    { icon: '🎂', text: 'Ser mayor de edad' },
    { icon: '📋', text: 'No tener antecedentes penales por delitos graves' },
    { icon: '🏥', text: 'Certificado de capacidad física (centro de reconocimiento)' },
    { icon: '🧠', text: 'Certificado de aptitud psicológica' },
    { icon: '🛡️', text: 'Seguro de Responsabilidad Civil mínimo 120.000€' },
    { icon: '📝', text: 'Inscripción en el Registro Municipal de animales peligrosos' },
  ]

  const obligaciones = [
    { icon: '🐕', text: 'Microchip identificativo obligatorio' },
    { icon: '🔒', text: 'Bozal apropiado en espacios públicos' },
    { icon: '📏', text: 'Correa no extensible de máximo 2 metros' },
    { icon: '👤', text: 'Solo un perro PPP por persona' },
    { icon: '🏡', text: 'En fincas: atados o en habitáculo cerrado' },
    { icon: '🚨', text: 'Comunicar robo o pérdida en 48 horas' },
  ]

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="relative py-16 sm:py-20 bg-midnight overflow-hidden">
        <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-orange/20 text-orange text-sm font-bold rounded-full mb-4">
            Información legal
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            ¿Qué es un Perro <span className="text-orange">Potencialmente Peligroso</span>?
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-3xl mx-auto">
            Resumen claro y sencillo de la legislación española sobre PPP. Basado en el Real Decreto 287/2002.
          </p>
        </div>
      </section>

      {/* Qué dice la ley */}
      <section className="py-16 sm:py-20">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-midnight">¿Qué dice la ley?</h2>
            <p className="mt-3 text-midnight/60 max-w-2xl mx-auto">
              La Ley 50/1999 y el Real Decreto 287/2002 regulan la tenencia de animales potencialmente peligrosos en España.
            </p>
          </div>

          <div className="bg-white border-2 border-orange/20 rounded-3xl p-6 sm:p-10">
            <p className="text-midnight/80 leading-relaxed text-lg">
              Un perro se considera <strong className="text-orange">Potencialmente Peligroso (PPP)</strong> cuando pertenece a alguna de las razas listadas en la ley, a sus cruces, o cuando presenta la mayoría de las características físicas descritas en el Anexo II del Real Decreto.
            </p>
            <p className="mt-4 text-midnight/80 leading-relaxed text-lg">
              También se consideran PPP los perros que, <strong>independientemente de su raza</strong>, hayan mostrado agresividad o protagonizado ataques a personas u otros animales.
            </p>
          </div>
        </div>
      </section>

      {/* Razas oficiales */}
      <section className="py-16 sm:py-20 bg-midnight">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">Razas catalogadas como PPP</h2>
            <p className="mt-3 text-white/60">
              Según el Anexo I del Real Decreto 287/2002
            </p>
          </div>

          {/* Razas oficiales - tabla principal */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-orange mb-4 text-center">Razas explícitamente listadas (y sus cruces)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {razasOficiales.map((raza) => (
                <div key={raza} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <span className="text-white font-semibold text-sm">{raza}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Otras razas por características */}
          <div>
            <h3 className="text-lg font-bold text-white/80 mb-4 text-center">Otras razas que pueden considerarse PPP por sus características físicas</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {otrasRazas.map((raza) => (
                <div key={raza} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center opacity-80">
                  <span className="text-white/80 font-medium text-sm">{raza}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Características físicas */}
      <section className="py-16 sm:py-20">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-midnight">Características físicas de un PPP</h2>
            <p className="mt-3 text-midnight/60">
              Aunque tu perro no sea de raza listada, puede considerarse PPP si presenta <strong>la mayoría</strong> de estas características:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white border-2 border-midnight/10 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-midnight">
                  <th className="text-left px-6 py-4 text-white font-bold">Característica</th>
                  <th className="text-left px-6 py-4 text-white font-bold">Detalle</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-midnight/10">
                  <td className="px-6 py-4 font-semibold text-midnight">Musculatura</td>
                  <td className="px-6 py-4 text-midnight/70">Fuerte, aspecto poderoso, robusto, configuración atlética</td>
                </tr>
                <tr className="border-t border-midnight/10 bg-midnight/5">
                  <td className="px-6 py-4 font-semibold text-midnight">Carácter</td>
                  <td className="px-6 py-4 text-midnight/70">Marcado carácter y gran valor</td>
                </tr>
                <tr className="border-t border-midnight/10">
                  <td className="px-6 py-4 font-semibold text-midnight">Pelo</td>
                  <td className="px-6 py-4 text-midnight/70">Corto</td>
                </tr>
                <tr className="border-t border-midnight/10 bg-midnight/5">
                  <td className="px-6 py-4 font-semibold text-midnight">Tamaño</td>
                  <td className="px-6 py-4 text-midnight/70">Perímetro torácico 60-80 cm, altura 50-70 cm, peso &gt;20 kg</td>
                </tr>
                <tr className="border-t border-midnight/10">
                  <td className="px-6 py-4 font-semibold text-midnight">Cabeza</td>
                  <td className="px-6 py-4 text-midnight/70">Voluminosa, cuboide, cráneo ancho, mejillas musculosas, mandíbulas grandes</td>
                </tr>
                <tr className="border-t border-midnight/10 bg-midnight/5">
                  <td className="px-6 py-4 font-semibold text-midnight">Cuello</td>
                  <td className="px-6 py-4 text-midnight/70">Ancho, musculoso y corto</td>
                </tr>
                <tr className="border-t border-midnight/10">
                  <td className="px-6 py-4 font-semibold text-midnight">Pecho</td>
                  <td className="px-6 py-4 text-midnight/70">Macizo, ancho, profundo, costillas arqueadas</td>
                </tr>
                <tr className="border-t border-midnight/10 bg-midnight/5">
                  <td className="px-6 py-4 font-semibold text-midnight">Extremidades</td>
                  <td className="px-6 py-4 text-midnight/70">Anteriores paralelas y robustas, posteriores muy musculosas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Requisitos para tener un PPP */}
      <section className="py-16 sm:py-20 bg-midnight">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">¿Qué necesitas para tener un PPP?</h2>
            <p className="mt-3 text-white/60">
              Requisitos obligatorios para obtener la licencia de tenencia
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {requisitosLicencia.map((req, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4">
                <span className="text-3xl">{req.icon}</span>
                <p className="text-white/90 font-medium">{req.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block bg-orange/20 border border-orange/30 rounded-2xl px-6 py-4">
              <p className="text-orange font-bold">
                ⚠️ La licencia tiene validez de 5 años y debe renovarse
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Obligaciones día a día */}
      <section className="py-16 sm:py-20">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-midnight">Obligaciones del propietario</h2>
            <p className="mt-3 text-midnight/60">
              Lo que debes cumplir en el día a día con tu PPP
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {obligaciones.map((ob, index) => (
              <div key={index} className="bg-white border-2 border-midnight/10 rounded-2xl p-6 flex items-start gap-4 hover:border-orange transition-colors">
                <span className="text-3xl">{ob.icon}</span>
                <p className="text-midnight/80 font-medium">{ob.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Contratar seguro */}
      <section className="py-16 sm:py-20">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="bg-midnight rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              ¿Tienes un PPP? Necesitas un seguro
            </h2>
            <p className="mt-4 text-white/70 text-lg">
              El seguro de Responsabilidad Civil es <strong className="text-orange">obligatorio por ley</strong> con una cobertura mínima de 120.000€. Nosotros te lo gestionamos desde 30€/año.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/seguros-perros"
                className="inline-flex items-center justify-center gap-2 bg-orange text-white font-semibold px-8 py-4 rounded-full hover:bg-orange/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Ver seguros para PPP
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="https://wa.me/34667755976"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Preguntar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Legal reference */}
      <section className="pb-16">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-midnight/40 text-sm">
            Información basada en la Ley 50/1999 y el Real Decreto 287/2002, de 22 de marzo. 
            Última actualización publicada el 12/12/2007. Consulta la normativa específica de tu Comunidad Autónoma para más detalles.
          </p>
        </div>
      </section>
    </div>
  )
}