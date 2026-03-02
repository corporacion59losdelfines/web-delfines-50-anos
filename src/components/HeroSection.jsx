import { FleurDeLis, FacebookIcon, StarIcon, ChevronDown } from './Icons'

export default function HeroSection() {
    return (
        <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 bg-texture" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-caqui/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cafe/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto pt-20">
                {/* Badge Bodas de Oro */}
                <div className="animate-float inline-flex items-center gap-2 bg-caqui/15 border border-caqui/30 text-cafe-dark rounded-full px-5 py-2 text-sm font-semibold mb-8">
                    <StarIcon /> <span>Bodas de Oro · 1976 – 2026</span> <StarIcon />
                </div>

                {/* Logo oficial */}
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <img
                            src="/logo-oficial.jpg"
                            alt="Logo oficial Corporación 59 Los Delfines"
                            className="w-36 h-36 md:w-48 md:h-48 rounded-full object-contain border-4 border-caqui/40 shadow-2xl bg-white"
                            onError={(e) => {
                                e.target.style.display = 'none'
                                e.target.nextSibling.style.display = 'flex'
                            }}
                        />
                        <div className="hidden w-32 h-32 md:w-40 md:h-40 items-center justify-center">
                            <FleurDeLis className="w-24 h-28 text-cafe animate-pulse" style={{ animationDuration: '4s' }} />
                        </div>
                    </div>
                </div>

                {/* Título */}
                <h1 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-2">
                    <span className="text-cafe">Corporación</span>
                    <br />
                    <span className="text-shimmer">59 Los Delfines</span>
                </h1>

                <p className="font-serif italic text-xl md:text-2xl text-caqui-dark mb-2">
                    Grupo Scout · Barrio Santa Cruz, Medellín
                </p>

                {/* Lema corporativo */}
                <p className="font-serif font-black text-cafe text-2xl md:text-3xl mb-8 tracking-wide drop-shadow-sm px-4 relative inline-block">
                    <span className="absolute -inset-1 bg-gradient-to-r from-caqui/20 via-transparent to-caqui/20 blur-sm rounded-lg" />
                    <span className="relative">"La exigencia marca la excelencia"</span>
                </p>

                {/* Lema 50 años */}
                <div className="relative my-6">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <div className="flex-1 max-w-[100px] h-px bg-gradient-to-r from-transparent to-caqui/60" />
                        <FleurDeLis className="w-5 h-6 text-caqui flex-shrink-0" />
                        <div className="flex-1 max-w-[100px] h-px bg-gradient-to-l from-transparent to-caqui/60" />
                    </div>
                    <blockquote className="font-serif text-lg md:text-xl lg:text-2xl text-cafe italic leading-relaxed px-4">
                        "50 años dejando el mundo mejor de como lo encontramos"
                    </blockquote>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                    <a href="#historia" className="btn-primary w-full sm:w-auto">Nuestra Historia</a>
                    <a href="#inscripciones" className="btn-secondary w-full sm:w-auto">Inscripciones 2026</a>
                    <a href="https://wa.me/573150451770?text=Hola%2C%20quisiera%20solicitar%20informaci%C3%B3n%20sobre%20el%20Grupo%20Scout." target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-cafe font-bold hover:text-caqui-dark transition-colors bg-caqui/15 px-6 py-3 rounded-full hover:bg-caqui/30">
                        Contáctanos
                    </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-12 max-w-lg mx-auto">
                    {[{ num: '50', label: 'Años de historia' }, { num: '6', label: 'Ramas scouts' }, { num: '∞', label: 'Jóvenes formados' }].map((s, i) => (
                        <div key={i} className="text-center">
                            <p className="font-serif font-black text-2xl md:text-3xl text-cafe">{s.num}</p>
                            <p className="text-xs md:text-sm text-caqui-dark mt-0.5">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <a href="#historia" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-caqui hover:text-cafe transition-colors">
                <ChevronDown />
            </a>
        </section>
    )
}
