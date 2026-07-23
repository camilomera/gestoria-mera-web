'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    const elements = ref.current?.querySelectorAll('.reveal-on-scroll')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function HomePage() {
  const scrollRef = useScrollReveal()

  return (
    <div ref={scrollRef} className="pt-16 sm:pt-20">
      {/* Hero with video background */}
      <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative overflow-hidden">
        {/* Video background - placeholder until user uploads */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster=""
          >
            <source src="https://res.cloudinary.com/r5v8fzlu/video/upload/13711342_1080_1920_30fps_pkk24w.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-mintcream/85" />
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          {/* Title */}
          <div className="text-center mb-10 sm:mb-14 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-midnight tracking-tight leading-tight">
              Seguros para{' '}
              <span className="text-orange">Perros y Caballos</span>
            </h1>
            <p className="mt-5 text-midnight/60 text-lg sm:text-xl max-w-2xl mx-auto">
              Protege a tus animales con la mejor cobertura. Contratación online, rápida y sin complicaciones.
            </p>
            {/* WhatsApp CTA */}
            <div className="mt-6 flex items-center justify-center gap-2 text-midnight/50 text-base">
              <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Llámanos o contacta por WhatsApp: <a href="https://wa.me/34667755976" className="font-bold text-midnight hover:text-orange transition-colors">667 755 976</a></span>
            </div>
          </div>

          {/* Dual Cards */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Dogs Card */}
            <Link
              href="/seguros-perros"
              className="group relative overflow-hidden rounded-3xl flex flex-col bg-white border-2 border-mintcream hover:border-orange transition-all duration-500 hover:shadow-2xl hover:shadow-orange/10 hover:-translate-y-2 animate-slide-up shadow-lg"
            >
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/r5v8fzlu/image/upload/v1784798481/pexels-miami302-23383658_ytcubu.jpg"
                  alt="Perro"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center bg-orange text-midnight font-black text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg">
                  Desde 20,40€/año
                </div>
              </div>
              
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-midnight">
                    Seguros para Perros
                  </h2>
                  <p className="mt-2 text-midnight/60 text-sm sm:text-base">
                    Contratación 100% Online en 3 minutos.
                  </p>
                  <p className="mt-1 text-midnight/60 text-sm sm:text-base">
                    Asesoración personal por teléfono o WhatsApp.
                  </p>
                </div>
                
                <div className="mt-6">
                  <span className="inline-flex items-center justify-center w-full gap-2 bg-midnight hover:bg-midnight-light text-white font-black text-base sm:text-lg px-6 py-4 rounded-2xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-midnight/20">
                    Ver Opciones y Contratar
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Horses Card */}
            <Link
              href="/seguros-caballos"
              className="group relative overflow-hidden rounded-3xl flex flex-col bg-white border-2 border-mintcream hover:border-orange transition-all duration-500 hover:shadow-2xl hover:shadow-orange/10 hover:-translate-y-2 animate-slide-up delay-150 shadow-lg"
            >
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/r5v8fzlu/image/upload/v1784798481/pexels-bertellifotografia-31853325_fiwbud.jpg"
                  alt="Caballo"
                  className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center bg-orange text-midnight font-black text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg">
                  Desde 48,27€/año
                </div>
              </div>
              
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-midnight">
                    Seguros para Caballos
                  </h2>
                  <p className="mt-2 text-midnight/60 text-sm sm:text-base">
                    Contratación 100% Online en 3 minutos.
                  </p>
                  <p className="mt-1 text-midnight/60 text-sm sm:text-base">
                    Asesoración personal por teléfono o WhatsApp.
                  </p>
                </div>
                
                <div className="mt-6">
                  <span className="inline-flex items-center justify-center w-full gap-2 bg-midnight hover:bg-midnight-light text-white font-black text-base sm:text-lg px-6 py-4 rounded-2xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-midnight/20">
                    Ver Opciones y Contratar
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-midnight via-orange to-midnight" />
        
        <div className="container-custom mx-auto">
          <div className="text-center mb-14 reveal-on-scroll">
            <span className="inline-flex items-center bg-orange/10 text-orange-dark font-black text-sm px-5 py-2 rounded-full border border-orange/20 mb-5 uppercase tracking-wide">
              ✨ Proceso simple
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-midnight tracking-tight">
              Así de fácil
            </h2>
            <p className="mt-4 text-midnight/50 text-lg max-w-xl mx-auto">
              Tu seguro activo en menos de 24 horas
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto relative">
            <div className="hidden sm:block absolute top-20 left-[20%] right-[20%] h-1 bg-gradient-to-r from-orange/30 via-orange to-orange/30 rounded-full" />
            
            {[
              {
                step: '1',
                title: 'Elige tu seguro',
                description: 'Selecciona perro o caballo y la cobertura que mejor se adapte a tus necesidades.',
                icon: '🎯',
              },
              {
                step: '2',
                title: 'Rellena el formulario',
                description: 'Solo los datos imprescindibles. Tus datos y los de tu animal en pocos minutos.',
                icon: '📝',
              },
              {
                step: '3',
                title: 'Póliza activa',
                description: 'Revisamos tu solicitud y en menos de 24 horas tienes tu póliza lista.',
                icon: '🛡️',
              },
            ].map((item, index) => (
              <div key={index} className="reveal-on-scroll text-center relative" style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="relative bg-mintcream border-2 border-mintcream rounded-3xl p-8 sm:p-10 hover:border-orange transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange/5">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center justify-center w-9 h-9 rounded-full bg-orange text-midnight font-black text-sm shadow-lg shadow-orange/30">
                    {item.step}
                  </div>
                  
                  <div className="text-5xl mb-5 mt-2">{item.icon}</div>
                  <h3 className="text-xl font-black text-midnight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-midnight/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom mx-auto">
          <div className="text-center mb-14 reveal-on-scroll">
            <span className="inline-flex items-center bg-midnight/5 text-midnight font-black text-sm px-5 py-2 rounded-full border border-midnight/10 mb-5 uppercase tracking-wide">
              💪 Nuestras ventajas
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-midnight tracking-tight">
              ¿Por qué elegirnos?
            </h2>
            <p className="mt-4 text-midnight/50 text-lg max-w-2xl mx-auto">
              Más de 15 años asegurando animales con las mejores condiciones del mercado
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: '💰',
                title: 'Mejor precio garantizado',
                description: 'Seguros desde 20,40€/año. Las tarifas más competitivas del mercado.',
              },
              {
                icon: '⚡',
                title: 'Contratación inmediata',
                description: 'Solicita online en 3 minutos. Tu póliza activa en menos de 24 horas.',
              },
              {
                icon: '🏠',
                title: 'Empresa familiar',
                description: 'Somos una gestoría gallega familiar con presencia nacional. Y sobretodo amantes de los perros y caballos.',
              },
              {
                icon: '🐕🐴',
                title: 'Especialistas en animales',
                description: 'Solo nos dedicamos a seguros de perros y caballos. Conocemos cada detalle.',
              },
              {
                icon: '💬',
                title: 'Atención por WhatsApp',
                description: 'Resolvemos tus dudas al momento por WhatsApp. Sin esperas, sin centralitas.',
              },
              {
                icon: '🛡️',
                title: 'Respaldados por Caser',
                description: 'Trabajamos con Caser, una de las aseguradoras más sólidas de España.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="reveal-on-scroll group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-full bg-white border-2 border-mintcream rounded-3xl p-7 sm:p-8 hover:border-orange transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange/5 flex flex-col items-center text-center">
                  <div className="text-4xl sm:text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-black text-midnight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-midnight/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-midnight relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight-light to-midnight" />
        
        <div className="container-custom mx-auto relative z-10">
          <div className="text-center reveal-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Contrata ahora y ten tu póliza activa{' '}
              <span className="animate-glow-text inline-block text-orange">mañana</span>
            </h2>
            <p className="mt-5 text-white/60 text-lg">
              Llámanos o contacta por WhatsApp
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/seguros-perros"
                className="inline-flex items-center justify-center gap-3 bg-orange hover:bg-orange-light text-midnight font-black text-lg px-10 py-5 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-orange/30 hover:-translate-y-0.5"
              >
                🐕 Seguros para Perros
              </Link>
              <Link
                href="/seguros-caballos"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-mintcream text-midnight font-black text-lg px-10 py-5 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                🐴 Seguros para Caballos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
