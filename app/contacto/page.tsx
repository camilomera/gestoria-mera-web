export default function ContactoPage() {
  return (
    <div className="pt-24 sm:pt-28">
      {/* Main Contact Section */}
      <section className="py-12 sm:py-16">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-midnight">
              Contacta con nosotros
            </h1>
            <p className="mt-4 text-midnight/70 text-lg max-w-xl mx-auto">
              Escríbenos por WhatsApp o email y te asesoramos sin compromiso.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {/* WhatsApp */}
            <a
              href="https://wa.me/34667755976"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366]/10 text-[#25D366] mb-5 group-hover:bg-[#25D366]/20 transition-colors">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-midnight">WhatsApp</h3>
              <p className="mt-2 text-[#25D366] font-bold text-xl">667 755 976</p>
              <p className="mt-2 text-midnight/60 text-sm">Respuesta en menos de 2 horas</p>
            </a>

            {/* Email */}
            <a
              href="mailto:seguros@gestoriamera.com"
              className="bg-white rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange/10 text-orange mb-5 group-hover:bg-orange/20 transition-colors">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-midnight">Email</h3>
              <p className="mt-2 text-orange font-bold text-base break-all sm:break-normal">seguros@gestoriamera.com</p>
              <p className="mt-2 text-midnight/60 text-sm">Te respondemos en el día</p>
            </a>
          </div>

          {/* Hours + Info */}
          <div className="bg-midnight rounded-2xl p-8 sm:p-10">
            <div className="grid sm:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-xl font-black text-white mb-4">Horario de atención</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Lunes a viernes</span>
                    <span className="text-white font-bold">9:00 – 14:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Tardes</span>
                    <span className="text-white font-bold">16:30 – 20:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Fines de semana</span>
                    <span className="text-white/40">Cerrado</span>
                  </div>
                </div>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-white/70 text-sm leading-relaxed">
                  Puedes escribirnos por WhatsApp en cualquier momento. Te responderemos lo antes posible durante nuestro horario.
                </p>
                <a
                  href="https://wa.me/34667755976"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 bg-orange text-white font-bold px-6 py-3 rounded-full hover:bg-orange-dark transition-all duration-300 hover:shadow-lg text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Escribir ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}