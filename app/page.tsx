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
    <div ref={scrollRef} className="pt-20">
      {/* ========== HERO ========== */}
      <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center overflow-hidden">
        {/* Video background - grass */}
        <div className="absolute inset-0 z-0 animate-fade-in">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover transition-opacity duration-1000"
            style={{ filter: 'brightness(1.05) saturate(1.1)' }}
          >
            <source src="https://res.cloudinary.com/r5v8fzlu/video/upload/e_loop:2/13711342_1080_1920_30fps_pkk24w.mp4" type="video/mp4" />
          </video>
          {/* Subtle overlay - grass clearly visible */}
          <div className="absolute inset-0 bg-[#f5fffa]/50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Title with inline animal icons */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h1 className="text-[1.4rem] xs:text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.15] whitespace-normal sm:whitespace-nowrap">
              <span className="title-shine">Seguros para <span className="title-shine-words">perros y caballos</span></span>
            </h1>
          </div>

          {/* Value props banner */}
          <div className="max-w-5xl mx-auto mb-10 animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-midnight/5 rounded-2xl px-5 py-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-midnight font-black text-sm">Contrata online en 3 min</p>
                  <p className="text-midnight/40 text-xs">Sin papeleos ni desplazamientos</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-midnight/5 rounded-2xl px-5 py-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-midnight font-black text-sm">Póliza activa en 24h</p>
                  <p className="text-midnight/40 text-xs">Activación garantizada</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-midnight/5 rounded-2xl px-5 py-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-midnight font-black text-sm">Asesoramiento por WhatsApp</p>
                  <p className="text-midnight/40 text-xs">Te ayudamos en todo momento</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dual Cards */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Dogs Card */}
            <Link
              href="/seguros-perros"
              className="group overflow-hidden rounded-3xl bg-white backdrop-blur-sm border border-midnight/8 hover:border-orange/50 transition-all duration-500 hover:shadow-2xl hover:shadow-midnight/10 hover:-translate-y-2 animate-slide-up shadow-lg"
            >
              <div className="h-52 sm:h-60 lg:h-64 overflow-hidden bg-[#f5f5f0]">
                <img
                  src="https://res.cloudinary.com/r5v8fzlu/image/upload/v1784798481/pexels-miami302-23383658_ytcubu.jpg"
                  alt="Perro Boyero de Berna"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 sm:p-7">
                <h2 className="text-2xl sm:text-[1.7rem] font-black text-midnight leading-tight">
                  Seguros para perros
                </h2>
                <ul className="mt-3 space-y-1.5">
                  <li className="flex items-center gap-2 text-midnight/60 text-sm">
                    <span className="text-orange text-base">✓</span> Compañía, PPP, caza y criadores
                  </li>
                  <li className="flex items-center gap-2 text-midnight/60 text-sm">
                    <span className="text-orange text-base">✓</span> Responsabilidad Civil completa
                  </li>
                  <li className="flex items-center gap-2 text-midnight/60 text-sm">
                    <span className="text-orange text-base">✓</span> Cobertura en toda España
                  </li>
                </ul>
                <div className="mt-5">
                  <span className="text-midnight font-black text-2xl">Desde 20,40 €<span className="text-midnight font-bold text-sm">/año</span></span>
                </div>
                <div className="mt-4">
                  <span className="inline-flex items-center justify-center w-full gap-2 bg-orange hover:bg-orange-light text-midnight font-black text-base px-6 py-4 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange/30 group-hover:gap-3">
                    Ver opciones y contratar
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Horses Card */}
            <Link
              href="/seguros-caballos"
              className="group overflow-hidden rounded-3xl bg-white backdrop-blur-sm border border-midnight/8 hover:border-orange/50 transition-all duration-500 hover:shadow-2xl hover:shadow-midnight/10 hover:-translate-y-2 animate-slide-up delay-150 shadow-lg"
            >
              <div className="h-52 sm:h-60 lg:h-64 overflow-hidden bg-[#f5f5f0]">
                <img
                  src="https://res.cloudinary.com/r5v8fzlu/image/upload/v1784808037/pexels-mographe-10942929_wcxh7z.jpg"
                  alt="Caballo"
                  className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 sm:p-7">
                <h2 className="text-2xl sm:text-[1.7rem] font-black text-midnight leading-tight">
                  Seguros para caballos
                </h2>
                <ul className="mt-3 space-y-1.5">
                  <li className="flex items-center gap-2 text-midnight/60 text-sm">
                    <span className="text-orange text-base">✓</span> Diferentes planes de cobertura
                  </li>
                  <li className="flex items-center gap-2 text-midnight/60 text-sm">
                    <span className="text-orange text-base">✓</span> Responsabilidad Civil hasta 306.000€
                  </li>
                  <li className="flex items-center gap-2 text-midnight/60 text-sm">
                    <span className="text-orange text-base">✓</span> Cobertura por fallecimiento incluida
                  </li>
                </ul>
                <div className="mt-5">
                  <span className="text-midnight font-black text-2xl">Desde 48,27 €<span className="text-midnight font-bold text-sm">/año</span></span>
                </div>
                <div className="mt-4">
                  <span className="inline-flex items-center justify-center w-full gap-2 bg-orange hover:bg-orange-light text-midnight font-black text-base px-6 py-4 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange/30 group-hover:gap-3">
                    Ver opciones y contratar
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="py-16 sm:py-20 bg-midnight relative overflow-hidden">
        {/* Running dog GIF animation - overlapping cards */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none overflow-hidden h-40 z-0">
          <div className="animate-run-dog">
            <img
              src="https://res.cloudinary.com/r5v8fzlu/image/upload/e_replace_color:191970:50/v1784818189/perro_yt4bqw.gif"
              alt=""
              className="w-48 h-40 object-contain"
            />
          </div>
        </div>
        
        <div className="container-custom mx-auto relative z-10">
          <div className="text-center mb-14 reveal-on-scroll">
            <p className="text-orange font-black text-sm uppercase tracking-widest mb-3">Proceso simple</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Así de fácil
            </h2>
          </div>

          <div className="grid sm:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 sm:gap-0 items-center max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="reveal-on-scroll">
              <div className="relative bg-[#1e1e6e] border border-white/10 rounded-2xl p-7 sm:p-8 text-center hover:bg-[#252580] hover:border-orange/30 transition-all duration-300 hover:-translate-y-1 h-full min-h-[280px] flex flex-col">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-orange text-midnight font-black text-sm flex items-center justify-center shadow-lg shadow-orange/30">1</div>
                <div className="text-4xl mb-5 mt-2 text-center">📋</div>
                <h3 className="text-xl font-black text-white mb-3 text-center">Elige tu seguro</h3>
                <p className="text-white/80 text-sm leading-relaxed text-center flex-1">Selecciona perro o caballo y la cobertura que necesitas.</p>
              </div>
            </div>

            {/* Neon Chevron Arrow */}
            <div className="hidden sm:flex items-center justify-center px-2">
              <div className="flex items-center gap-1">
                <svg className="w-8 h-8 neon-chevron" style={{ animationDelay: '0s' }} viewBox="0 0 24 24" fill="none">
                  <path d="M9 4l8 8-8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className="w-8 h-8 neon-chevron" style={{ animationDelay: '0.2s' }} viewBox="0 0 24 24" fill="none">
                  <path d="M9 4l8 8-8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className="w-8 h-8 neon-chevron" style={{ animationDelay: '0.4s' }} viewBox="0 0 24 24" fill="none">
                  <path d="M9 4l8 8-8 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="reveal-on-scroll" style={{ transitionDelay: '150ms' }}>
              <div className="relative bg-[#1e1e6e] border border-white/10 rounded-2xl p-7 sm:p-8 text-center hover:bg-[#252580] hover:border-orange/30 transition-all duration-300 hover:-translate-y-1 h-full min-h-[280px] flex flex-col">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-orange text-midnight font-black text-sm flex items-center justify-center shadow-lg shadow-orange/30">2</div>
                <div className="text-4xl mb-5 mt-2 text-center">✏️</div>
                <h3 className="text-xl font-black text-white mb-3 text-center">Rellena el formulario</h3>
                <p className="text-white/80 text-sm leading-relaxed text-center flex-1">Solo pedimos los datos imprescindibles. Tardas menos de 3 minutos.</p>
              </div>
            </div>

            {/* Neon Chevron Arrow */}
            <div className="hidden sm:flex items-center justify-center px-2">
              <div className="flex items-center gap-1">
                <svg className="w-8 h-8 neon-chevron" style={{ animationDelay: '0.6s' }} viewBox="0 0 24 24" fill="none">
                  <path d="M9 4l8 8-8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className="w-8 h-8 neon-chevron" style={{ animationDelay: '0.8s' }} viewBox="0 0 24 24" fill="none">
                  <path d="M9 4l8 8-8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className="w-8 h-8 neon-chevron" style={{ animationDelay: '1.0s' }} viewBox="0 0 24 24" fill="none">
                  <path d="M9 4l8 8-8 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className="reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              <div className="relative bg-[#1e1e6e] border border-white/10 rounded-2xl p-7 sm:p-8 text-center hover:bg-[#252580] hover:border-orange/30 transition-all duration-300 hover:-translate-y-1 h-full min-h-[280px] flex flex-col">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-orange text-midnight font-black text-sm flex items-center justify-center shadow-lg shadow-orange/30">3</div>
                <div className="text-4xl mb-5 mt-2 text-center">🛡️</div>
                <h3 className="text-xl font-black text-white mb-3 text-center">Póliza activa</h3>
                <p className="text-white/80 text-sm leading-relaxed text-center flex-1">Tu seguro activado en menos de 24 horas. Te enviamos todo al WhatsApp.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom mx-auto">
          <div className="text-center mb-14 reveal-on-scroll">
            <p className="text-orange font-black text-sm uppercase tracking-widest mb-3">Nuestras ventajas</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-midnight tracking-tight">
              ¿Por qué elegirnos?
            </h2>
            <p className="mt-4 text-midnight/50 text-lg max-w-2xl mx-auto">
              Más de 15 años asegurando animales con las mejores condiciones del mercado
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Mejor precio garantizado',
                description: 'Seguros desde 20,40 €/año. Las tarifas más competitivas del mercado.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Contratación inmediata',
                description: 'Solicita online en 3 minutos. Tu póliza activa en menos de 24 horas.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                title: 'Empresa familiar',
                description: 'Somos una gestoría gallega familiar con presencia nacional. Y sobretodo amantes de los perros y caballos.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: 'Especialistas en animales',
                description: 'Solo nos dedicamos a seguros de perros y caballos. Conocemos cada detalle.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                ),
                title: 'Atención por WhatsApp',
                description: 'Resolvemos tus dudas al momento por WhatsApp. Sin esperas, sin centralitas.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Respaldados por Caser',
                description: 'Trabajamos con Caser, una de las aseguradoras más sólidas de España.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="reveal-on-scroll group"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="h-full bg-white border border-midnight/5 rounded-2xl p-6 sm:p-7 hover:border-orange/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange/5">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center text-orange mb-4 group-hover:bg-orange/15 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-black text-midnight mb-2">
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

      {/* ========== FINAL CTA ========== */}
      <section className="py-16 sm:py-20 bg-midnight relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-midnight-dark via-midnight to-midnight-light opacity-80" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom mx-auto relative z-10">
          <div className="text-center reveal-on-scroll max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Contrata ahora y ten tu póliza activa{' '}
              <span className="relative inline-block">
                <span className="animate-glow-text text-orange">mañana</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-orange/50 rounded-full" />
              </span>
            </h2>
            <p className="mt-6 text-white/60 text-lg max-w-xl mx-auto">
              Sin papeleos. Sin desplazamientos. Todo desde tu móvil.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/seguros-perros"
                className="inline-flex items-center justify-center gap-3 bg-orange hover:bg-orange-light text-midnight font-black text-lg px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-orange/30 hover:-translate-y-0.5"
              >
                Asegurar a mi perro
              </Link>
              <Link
                href="/seguros-caballos"
                className="inline-flex items-center justify-center gap-3 bg-orange hover:bg-orange-light text-midnight font-black text-lg px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-orange/30 hover:-translate-y-0.5"
              >
                Asegurar a mi caballo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
