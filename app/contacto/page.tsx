import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto — Gestoría Mera | A Cañiza, Pontevedra',
  description:
    'Contacta con Gestoría Mera. Teléfono 986651478, WhatsApp, o visítanos en Rúa Oriente 1 baixo, 36880 A Cañiza (Pontevedra). Presupuesto sin compromiso.',
};

export default function ContactoPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="hero-gradient pattern-overlay relative">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              <span className="text-amber-400">Contacta</span> con nosotros
            </h1>
            <p className="text-lg text-navy-200 max-w-2xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte. Llámanos, escríbenos por WhatsApp o ven a visitarnos. 
              Te atenderemos encantados y sin compromiso.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60V30C360 0 720 60 1080 30C1260 15 1380 20 1440 30V60H0Z" fill="#fefdfb" />
          </svg>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {/* Phone */}
            <a
              href="tel:986651478"
              className="card group text-center hover:border-amber-400"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                📞
              </div>
              <h2 className="text-xl font-bold text-navy-900 mb-2">Teléfono</h2>
              <p className="text-2xl font-bold text-amber-600 mb-2">986 651 478</p>
              <p className="text-sm text-navy-500">
                Lunes a Viernes<br />
                9:00 – 14:00 / 16:00 – 19:00
              </p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/34986651478?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20seguros%20para%20animales"
              target="_blank"
              rel="noopener noreferrer"
              className="card group text-center hover:border-green-400"
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                💬
              </div>
              <h2 className="text-xl font-bold text-navy-900 mb-2">WhatsApp</h2>
              <p className="text-lg font-bold text-green-600 mb-2">Escríbenos ahora</p>
              <p className="text-sm text-navy-500">
                Respuesta rápida<br />
                También fuera de horario
              </p>
            </a>

            {/* Location */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                📍
              </div>
              <h2 className="text-xl font-bold text-navy-900 mb-2">Oficina</h2>
              <p className="text-base font-semibold text-navy-700 mb-2">
                Rúa Oriente 1 baixo
              </p>
              <p className="text-sm text-navy-500">
                36880 A Cañiza<br />
                Pontevedra, Galicia
              </p>
            </div>
          </div>

          {/* Map + Details */}
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Map placeholder */}
              <div className="bg-white rounded-2xl overflow-hidden border border-cream-300 shadow-sm">
                <div className="aspect-[4/3] bg-navy-100 flex items-center justify-center relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2953.5!2d-8.2794!3d42.2167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f0a!2sR%C3%BAa%20Oriente%2C%201%2C%2036880%20A%20Ca%C3%B1iza%2C%20Pontevedra!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: 'absolute', inset: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Gestoría Mera"
                  ></iframe>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">
                    Gestoría Mera Rancaño
                  </h3>
                  <p className="text-navy-600 leading-relaxed mb-6">
                    Somos una agencia de seguros familiar ubicada en el centro de A Cañiza. 
                    Llevamos más de 20 años ayudando a nuestros vecinos a proteger a sus animales 
                    con las mejores coberturas al precio más competitivo.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cream-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900">Dirección</p>
                      <p className="text-navy-600 text-sm">Rúa Oriente 1 baixo, 36880 A Cañiza (Pontevedra)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cream-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      📞
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900">Teléfono</p>
                      <a href="tel:986651478" className="text-amber-600 hover:text-amber-700 text-sm font-medium transition-colors">
                        986 651 478
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cream-200 rounded-lg flex items-center justify-center flex-shrink-0">
                      🕐
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900">Horario</p>
                      <p className="text-navy-600 text-sm">Lunes a Viernes: 9:00 – 14:00 / 16:00 – 19:00</p>
                      <p className="text-navy-500 text-sm">Sábados y domingos: Cerrado</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      💬
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900">WhatsApp</p>
                      <p className="text-navy-600 text-sm mb-1">Disponible también fuera de horario</p>
                      <a
                        href="https://wa.me/34986651478?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20seguros%20para%20animales"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Abrir WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold text-navy-900 mb-4">
            ¿Prefieres que te llamemos?
          </h2>
          <p className="text-lg text-navy-600 mb-8 max-w-xl mx-auto">
            Escríbenos por WhatsApp con tu nombre y número de teléfono y te llamamos nosotros sin compromiso.
          </p>
          <a
            href="https://wa.me/34986651478?text=Hola%2C%20me%20gustar%C3%ADa%20que%20me%20llamaseis%20para%20informarme%20sobre%20seguros.%20Mi%20nombre%20es%20"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xl"
          >
            💬 Que me llamen
          </a>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-cream-200 shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-2">Datos de la empresa</h2>
              <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full"></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="font-semibold text-navy-900 mb-1">Razón social</p>
                <p className="text-navy-600">Gestoría Mera Rancaño, agencia vinculada de seguros, S.L.N.E.</p>
              </div>
              <div>
                <p className="font-semibold text-navy-900 mb-1">Registro</p>
                <p className="text-navy-600">Inscrita en el registro de la Dirección General de Política Financiera y Tesoro de la Xunta de Galicia</p>
              </div>
              <div>
                <p className="font-semibold text-navy-900 mb-1">Clave de registro</p>
                <p className="text-navy-600 font-mono">AJ0016XG</p>
              </div>
              <div>
                <p className="font-semibold text-navy-900 mb-1">Seguro RC profesional</p>
                <p className="text-navy-600">Póliza de responsabilidad civil profesional con Allianz</p>
              </div>
              <div>
                <p className="font-semibold text-navy-900 mb-1">Compañía aseguradora</p>
                <p className="text-navy-600">AXA Seguros (agencia vinculada)</p>
              </div>
              <div>
                <p className="font-semibold text-navy-900 mb-1">Dirección</p>
                <p className="text-navy-600">Rúa Oriente 1 baixo, 36880 A Cañiza (Pontevedra)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
