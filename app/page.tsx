import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero — Dual choice, visible immediately without scroll */}
      <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto w-full">
          {/* Title */}
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light-100 tracking-tight">
              Seguros de Responsabilidad Civil
            </h1>
            <p className="mt-4 text-light-400 text-lg sm:text-xl">
              Elige tu seguro y contrata online en minutos
            </p>
          </div>

          {/* Dual Cards - Dogs & Horses */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {/* Dogs Card */}
            <Link
              href="/seguros-perros"
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] sm:aspect-[3/2] flex items-end border border-white/5 hover:border-accent/40 transition-all duration-300"
            >
              <img
                src="https://res.cloudinary.com/r5v8fzlu/image/upload/v1784798481/pexels-miami302-23383658_ytcubu.jpg"
                alt="Perro"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="relative w-full p-6 sm:p-8">
                <div className="inline-flex items-center bg-accent/90 text-dark-900 font-bold text-xs sm:text-sm px-3 py-1 rounded-full mb-3">
                  Desde 20,40€/año
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Seguros para Perros
                </h2>
                <p className="mt-2 text-white/80 text-sm sm:text-base">
                  Compañía, PPP, caza y criadores
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                  Ver opciones
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Horses Card */}
            <Link
              href="/seguros-caballos"
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] sm:aspect-[3/2] flex items-end border border-white/5 hover:border-accent/40 transition-all duration-300"
            >
              <img
                src="https://res.cloudinary.com/r5v8fzlu/image/upload/v1784798482/pexels-fernando-mamberti-198266521-12653427_ri5whr.jpg"
                alt="Caballo"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="relative w-full p-6 sm:p-8">
                <div className="inline-flex items-center bg-accent/90 text-dark-900 font-bold text-xs sm:text-sm px-3 py-1 rounded-full mb-3">
                  Desde 48,27€/año
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Seguros para Caballos
                </h2>
                <p className="mt-2 text-white/80 text-sm sm:text-base">
                  Contratación 100% online
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                  Ver opciones
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* AXA Badge - subtle, below cards */}
          <div className="text-center mt-6 sm:mt-8">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/AXA_Logo.svg/200px-AXA_Logo.svg.png"
                alt="AXA"
                className="h-5 sm:h-6 brightness-0 invert opacity-80"
              />
              <span className="text-light-400 text-xs sm:text-sm">Mediadores oficiales</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - 3 steps */}
      <section className="section-padding bg-dark-800/50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-light-100">
              Así de fácil
            </h2>
            <p className="mt-3 text-light-400 text-base sm:text-lg">
              Contrata tu seguro en 3 minutos
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '1',
                title: 'Elige tu seguro',
                description: 'Selecciona el tipo de animal y la cobertura que necesitas.',
              },
              {
                step: '2',
                title: 'Rellena el formulario',
                description: 'Tus datos y los de tu animal. Solo lo imprescindible.',
              },
              {
                step: '3',
                title: 'Contratación inmediata',
                description: 'En menos de 24 horas tienes tu póliza activa.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-light-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-light-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why trust us */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-light-100">
              ¿Por qué confiar en nosotros?
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {[
              { number: '15+', label: 'Años de experiencia' },
              { number: 'AXA', label: 'Compañía aseguradora' },
              { number: '1000+', label: 'Clientes protegidos' },
              { number: '24h', label: 'Activación de póliza' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-dark-800/80 border border-white/5 rounded-2xl p-5 sm:p-6 text-center hover:border-accent/20 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-bold text-accent">
                  {item.number}
                </div>
                <div className="mt-1 text-light-400 text-xs sm:text-sm">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family business section */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-light-100">
              Empresa familiar, amantes de los animales
            </h2>
            <p className="mt-4 text-light-400 text-base sm:text-lg leading-relaxed">
              Somos una familia de A Cañiza (Pontevedra) apasionada por los perros y los caballos. 
              Llevamos más de 15 años ayudando a propietarios como tú a proteger a sus animales 
              con las mejores coberturas al mejor precio. Nos encanta lo que hacemos y se nota 
              en cada gestión.
            </p>
            <div className="mt-6 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/AXA_Logo.svg/200px-AXA_Logo.svg.png"
                  alt="AXA"
                  className="h-8 brightness-0 invert opacity-70"
                />
              </div>
              <div className="w-px h-8 bg-white/10"></div>
              <div className="text-light-400 text-sm">
                Agencia vinculada de seguros
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
