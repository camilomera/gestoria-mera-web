import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto — Gestoría Mera',
  description: 'Contacta con Gestoría Mera. WhatsApp y email. Asesoramiento en seguros para perros y caballos.',
}

export default function ContactoPage() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="relative min-h-[30vh] flex items-center bg-midnight">
        <div className="relative container-custom mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-white">
              Contacto
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Estamos aquí para ayudarte. Llámanos o contacta por WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-custom mx-auto max-w-4xl">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/34667755976"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-mint-300 rounded-3xl p-8 text-center group hover:border-[#25D366] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#25D366]/10 text-[#25D366] mb-4 group-hover:bg-[#25D366]/20 transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-midnight">WhatsApp</h3>
              <p className="mt-2 text-[#25D366] font-bold text-xl">667 755 976</p>
              <p className="mt-1 text-midnight/50 text-sm">Respuesta rápida</p>
            </a>

            {/* Email */}
            <a
              href="mailto:seguros@gestoriamera.com"
              className="bg-white border-2 border-mint-300 rounded-3xl p-8 text-center group hover:border-orange transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange/10 text-orange mb-4 group-hover:bg-orange/20 transition-colors">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-midnight">Email</h3>
              <p className="mt-2 text-orange font-bold text-lg">seguros@gestoriamera.com</p>
              <p className="mt-1 text-midnight/50 text-sm">Te respondemos en el día</p>
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-midnight rounded-3xl p-8 sm:p-10">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-2xl font-black text-white">
                ¿Necesitas asesoramiento?
              </h2>
              <p className="mt-4 text-white/60 leading-relaxed">
                Somos mediadores de seguros especializados en animales. Te ayudamos a encontrar 
                la mejor cobertura para tu perro o caballo. Consulta sin compromiso.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/34667755976"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Escribir por WhatsApp
                </a>
                <a href="tel:667755976" className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300">
                  Llamar al 667 755 976
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-mint-300 rounded-3xl p-7">
              <h3 className="text-lg font-black text-midnight mb-4">Horario de atención</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-midnight/50">Lunes a viernes</span>
                  <span className="text-midnight font-bold">9:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-midnight/50">Tardes</span>
                  <span className="text-midnight font-bold">16:30 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-midnight/50">Sábados y domingos</span>
                  <span className="text-midnight/40">Cerrado</span>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-mint-300 rounded-3xl p-7">
              <h3 className="text-lg font-black text-midnight mb-4">WhatsApp</h3>
              <p className="text-midnight/50 text-sm leading-relaxed">
                Puedes escribirnos por WhatsApp en cualquier momento. 
                Te responderemos lo antes posible durante nuestro horario de atención.
              </p>
              <p className="mt-3 text-orange text-sm font-bold">
                Respuesta habitual en menos de 2 horas
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
