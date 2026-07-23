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
      {/* Hero — Full viewport */}
      <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto w-full">
          {/* Title */}
          <div className="text-center mb-10 sm:mb-14 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-dark-900 tracking-tight">
              Seguros para{' '}
              <span className="text-gradient">Perros y Caballos</span>
            </h1>
            <p className="mt-5 text-dark-400 text-lg sm:text-xl max-w-2xl mx-auto font-medium">
              Protege a tus animales con la mejor cobertura. Contratación online, rápida y sin complicaciones.
            </p>
          </div>

          {/* Dual Cards */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Dogs Card */}
            <Link
              href="/seguros-perros"
              className="group relative overflow-hidden rounded-3xl flex flex-col bg-white border border-cream-300/60 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-dark-900/10 hover:-translate-y-2 animate-slide-up"
            >
              {/* Image - covers full area */}
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/r5v8fzlu/image/upload/v1784798481/pexels-miami302-23383658_ytcubu.jpg"
                  alt="Perro"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center bg-white/95 text-dark-900 font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-md">
                  Desde 20,40€/año
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-dark-900">
                    Seguros para Perros
                  </h2>
                  <p className="mt-2 text-dark-400 text-sm sm:text-base">
                    Compañía, PPP, caza y criadores
                  </p>
                </div>
                
                {/* Big CTA button */}
                <div className="mt-6">
                  <span className="inline-flex items-center justify-center w-full gap-2 bg-dark-900 hover:bg-dark-700 text-white font-bold text-base sm:text-lg px-6 py-4 rounded-2xl transition-all duration-300 group-hover:shadow-lg">
                    Ver opciones
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
              className="group relative overflow-hidden rounded-3xl flex flex-col bg-white border border-cream-300/60 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-dark-900/10 hover:-translate-y-2 animate-slide-up delay-150"
            >
              {/* Image - covers full area */}
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/r5v8fzlu/image/upload/v1784798482/pexels-fernando-mamberti-198266521-12653427_ri5whr.jpg"
                  alt="Caballo"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center bg-white/95 text-dark-900 font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-md">
                  Desde 48,27€/año
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-dark-900">
                    Seguros para Caballos
                  </h2>
                  <p className="mt-2 text-dark-400 text-sm sm:text-base">
                    Contratación 100% online
                  </p>
                </div>
                
                {/* Big CTA button */}
                <div className="mt-6">
                  <span className="inline-flex items-center justify-center w-full gap-2 bg-dark-900 hover:bg-dark-700 text-white font-bold text-base sm:text-lg px-6 py-4 rounded-2xl transition-all duration-300 group-hover:shadow-lg">
                    Ver opciones
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

      {/* How it works - Enhanced */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cream-300 to-transparent" />
        
        <div className="container-custom mx-auto">
          <div className="text-center mb-14 reveal-on-scroll">
            <span className="inline-flex items-center bg-accent/10 text-accent-dark font-bold text-sm px-5 py-2 rounded-full border border-accent/20 mb-5 uppercase tracking-wide">
              Proceso simple
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight">
              Así de fácil
            </h2>
            <p className="mt-4 text-dark-400 text-lg max-w-xl mx-auto">
              Tu seguro activo en menos de 24 horas
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto relative">
            {/* Connecting line */}
            <div className="hidden sm:block absolute top-20 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-accent/30 via-accent to-accent/30" />
            
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
                <div className="relative bg-cream-50 border border-cream-300/60 rounded-3xl p-8 sm:p-10 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5">
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center justify-center w-9 h-9 rounded-full bg-accent text-dark-900 font-bold text-sm shadow-lg shadow-accent/30">
                    {item.step}
                  </div>
                  
                  <div className="text-5xl mb-5 mt-2">{item.icon}</div>
                  <h3 className="text-xl font-bold text-dark-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-dark-400 text-sm leading-relaxed">
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
            <span className="inline-flex items-center bg-dark-900/5 text-dark-900 font-bold text-sm px-5 py-2 rounded-full border border-dark-900/10 mb-5 uppercase tracking-wide">
              Nuestras ventajas
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight">
              ¿Por qué elegirnos?
            </h2>
            <p className="mt-4 text-dark-400 text-lg max-w-2xl mx-auto">
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
                description: 'Somos de A Cañiza (Pontevedra). Trato cercano y personalizado.',
              },
              {
                icon: '🐕',
                title: 'Especialistas en animales',
                description: 'Solo nos dedicamos a seguros de perros y caballos. Conocemos cada detalle.',
              },
              {
                icon: '📞',
                title: 'Atención por WhatsApp',
                description: 'Resolvemos tus dudas al momento. Sin esperas, sin centralitas.',
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
                <div className="h-full bg-white border border-cream-300/60 rounded-3xl p-7 sm:p-8 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-dark-900/5">
                  <div className="text-4xl sm:text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-dark-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-dark-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family section */}
      <section className="section-padding bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
        
        <div className="container-custom mx-auto relative z-10">
          <div className="max-w-4xl mx-auto reveal-on-scroll">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl mb-6">🐴 🐕</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Empresa familiar, amantes de los animales
              </h2>
              <p className="mt-6 text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                Somos una familia de A Cañiza (Pontevedra) apasionada por los perros y los caballos. 
                Llevamos más de 15 años ayudando a propietarios como tú a proteger a sus animales 
                con las mejores coberturas al mejor precio. Nos encanta lo que hacemos y se nota 
                en cada gestión.
              </p>
              
              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-accent">15+</div>
                  <div className="text-white/50 text-sm mt-1">Años</div>
                </div>
                <div className="text-center border-x border-white/10">
                  <div className="text-3xl sm:text-4xl font-bold text-accent">1000+</div>
                  <div className="text-white/50 text-sm mt-1">Clientes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-accent">24h</div>
                  <div className="text-white/50 text-sm mt-1">Activación</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom mx-auto">
          <div className="text-center reveal-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-900 tracking-tight">
              ¿Listo para proteger a tu animal?
            </h2>
            <p className="mt-4 text-dark-400 text-lg">
              Contrata ahora y ten tu póliza activa mañana
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/seguros-perros"
                className="inline-flex items-center justify-center gap-3 bg-dark-900 hover:bg-dark-700 text-white font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                🐕 Seguros para Perros
              </Link>
              <Link
                href="/seguros-caballos"
                className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-light text-dark-900 font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5"
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
