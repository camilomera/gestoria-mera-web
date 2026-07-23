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
      {/* Hero — Full viewport, animated entrance */}
      <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        
        <div className="max-w-6xl mx-auto w-full relative z-10">
          {/* Title with animation */}
          <div className="text-center mb-10 sm:mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light-100 tracking-tight">
              Seguros para{' '}
              <span className="text-gradient">Perros y Caballos</span>
            </h1>
            <p className="mt-4 text-light-400 text-lg sm:text-xl max-w-2xl mx-auto">
              Protege a tus animales con la mejor cobertura. Contratación online, rápida y sin complicaciones.
            </p>
          </div>

          {/* Dual Cards - Dogs & Horses */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Dogs Card */}
            <Link
              href="/seguros-perros"
              className="group relative overflow-hidden rounded-3xl flex flex-col border border-white/5 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1 animate-slide-up"
            >
              {/* Image container - centered, shows full animal */}
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-dark-700">
                <img
                  src="https://res.cloudinary.com/r5v8fzlu/image/upload/v1784798481/pexels-miami302-23383658_ytcubu.jpg"
                  alt="Perro"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent" />
              </div>
              
              {/* Content */}
              <div className="relative p-6 sm:p-8 bg-dark-800/80 backdrop-blur-sm flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center bg-accent/15 text-accent font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-3 border border-accent/20">
                    Desde 20,40€/año
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Seguros para Perros
                  </h2>
                  <p className="mt-2 text-light-400 text-sm sm:text-base">
                    Compañía, PPP, caza y criadores
                  </p>
                </div>
                
                {/* Big CTA button */}
                <div className="mt-6">
                  <span className="inline-flex items-center justify-center w-full gap-2 bg-accent hover:bg-accent-light text-dark-900 font-bold text-base sm:text-lg px-6 py-4 rounded-2xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/30">
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
              className="group relative overflow-hidden rounded-3xl flex flex-col border border-white/5 hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1 animate-slide-up delay-150"
            >
              {/* Image container - centered, shows full animal */}
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-dark-700">
                <img
                  src="https://res.cloudinary.com/r5v8fzlu/image/upload/v1784798482/pexels-fernando-mamberti-198266521-12653427_ri5whr.jpg"
                  alt="Caballo"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent" />
              </div>
              
              {/* Content */}
              <div className="relative p-6 sm:p-8 bg-dark-800/80 backdrop-blur-sm flex-1 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center bg-accent/15 text-accent font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-3 border border-accent/20">
                    Desde 48,27€/año
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Seguros para Caballos
                  </h2>
                  <p className="mt-2 text-light-400 text-sm sm:text-base">
                    Contratación 100% online
                  </p>
                </div>
                
                {/* Big CTA button */}
                <div className="mt-6">
                  <span className="inline-flex items-center justify-center w-full gap-2 bg-accent hover:bg-accent-light text-dark-900 font-bold text-base sm:text-lg px-6 py-4 rounded-2xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/30">
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

      {/* How it works - Enhanced with colors and design */}
      <section className="section-padding bg-dark-800/50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        
        <div className="container-custom mx-auto">
          <div className="text-center mb-12 reveal-on-scroll">
            <span className="inline-flex items-center bg-accent/10 text-accent font-semibold text-sm px-4 py-2 rounded-full border border-accent/20 mb-4">
              ✨ Proceso simple
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-light-100">
              Así de fácil
            </h2>
            <p className="mt-3 text-light-400 text-lg">
              Tu seguro activo en menos de 24 horas
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto relative">
            {/* Connecting line */}
            <div className="hidden sm:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-accent/40 via-accent/60 to-accent/40" />
            
            {[
              {
                step: '1',
                title: 'Elige tu seguro',
                description: 'Selecciona perro o caballo y la cobertura que mejor se adapte a tus necesidades.',
                icon: '🎯',
                color: 'from-blue-500/20 to-accent/20',
              },
              {
                step: '2',
                title: 'Rellena el formulario',
                description: 'Solo los datos imprescindibles. Tus datos y los de tu animal en pocos minutos.',
                icon: '📝',
                color: 'from-accent/20 to-emerald-500/20',
              },
              {
                step: '3',
                title: 'Póliza activa',
                description: 'Revisamos tu solicitud y en menos de 24 horas tienes tu póliza lista.',
                icon: '🛡️',
                color: 'from-emerald-500/20 to-teal-500/20',
              },
            ].map((item, index) => (
              <div key={index} className="reveal-on-scroll text-center relative" style={{ transitionDelay: `${index * 150}ms` }}>
                <div className={`relative bg-gradient-to-br ${item.color} border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5`}>
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-dark-900 font-bold text-sm shadow-lg shadow-accent/30">
                    {item.step}
                  </div>
                  
                  <div className="text-4xl mb-4 mt-2">{item.icon}</div>
                  <h3 className="text-xl font-bold text-light-100">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-light-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us - with icons and visual elements */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12 reveal-on-scroll">
            <span className="inline-flex items-center bg-accent/10 text-accent font-semibold text-sm px-4 py-2 rounded-full border border-accent/20 mb-4">
              💪 Nuestras ventajas
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-light-100">
              ¿Por qué elegirnos?
            </h2>
            <p className="mt-3 text-light-400 text-lg max-w-2xl mx-auto">
              Más de 15 años asegurando animales con las mejores condiciones del mercado
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: '💰',
                title: 'Mejor precio garantizado',
                description: 'Seguros desde 20,40€/año. Las tarifas más competitivas del mercado para tu tranquilidad.',
              },
              {
                icon: '⚡',
                title: 'Contratación inmediata',
                description: 'Solicita online en 3 minutos. Tu póliza activa en menos de 24 horas laborables.',
              },
              {
                icon: '🏠',
                title: 'Empresa familiar',
                description: 'Somos de A Cañiza (Pontevedra). Trato cercano y personalizado, como debe ser.',
              },
              {
                icon: '🐕',
                title: 'Especialistas en animales',
                description: 'Solo nos dedicamos a seguros de perros y caballos. Conocemos cada detalle.',
              },
              {
                icon: '📞',
                title: 'Atención por WhatsApp',
                description: 'Resolvemos tus dudas al momento por WhatsApp. Sin esperas, sin centralitas.',
              },
              {
                icon: '🛡️',
                title: 'Respaldados por Caser',
                description: 'Trabajamos con Caser, una de las compañías aseguradoras más sólidas de España.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="reveal-on-scroll group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-full bg-dark-800/60 border border-white/5 rounded-3xl p-6 sm:p-7 hover:border-accent/30 hover:bg-dark-700/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-light-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-light-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family business + trust section */}
      <section className="section-padding bg-dark-800/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        
        <div className="container-custom mx-auto">
          <div className="max-w-4xl mx-auto reveal-on-scroll">
            <div className="bg-gradient-to-br from-dark-700/80 to-dark-800/80 border border-white/10 rounded-3xl p-8 sm:p-12 text-center hover:border-accent/20 transition-all duration-500">
              <div className="text-5xl mb-6">🐴 🐕</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-light-100">
                Empresa familiar, amantes de los animales
              </h2>
              <p className="mt-5 text-light-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                Somos una familia de A Cañiza (Pontevedra) apasionada por los perros y los caballos. 
                Llevamos más de 15 años ayudando a propietarios como tú a proteger a sus animales 
                con las mejores coberturas al mejor precio. Nos encanta lo que hacemos y se nota 
                en cada gestión.
              </p>
              
              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-accent">15+</div>
                  <div className="text-light-500 text-xs sm:text-sm mt-1">Años</div>
                </div>
                <div className="text-center border-x border-white/10">
                  <div className="text-2xl sm:text-3xl font-bold text-accent">1000+</div>
                  <div className="text-light-500 text-xs sm:text-sm mt-1">Clientes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-accent">24h</div>
                  <div className="text-light-500 text-xs sm:text-sm mt-1">Activación</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="container-custom mx-auto relative z-10">
          <div className="text-center reveal-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold text-light-100">
              ¿Listo para proteger a tu animal?
            </h2>
            <p className="mt-4 text-light-400 text-lg">
              Contrata ahora y ten tu póliza activa mañana
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/seguros-perros"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-dark-900 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
              >
                🐕 Seguros para Perros
              </Link>
              <Link
                href="/seguros-caballos"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-dark-900 font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
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
