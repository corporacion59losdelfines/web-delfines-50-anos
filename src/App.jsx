import { useEffect, useRef, useState } from 'react'

/* ── Íconos SVG inline ─────────────────────────────────────── */
const FleurDeLis = ({ className = '' }) => (
    <svg className={className} viewBox="0 0 100 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0 C50 0 35 18 35 32 C35 42 42 50 50 50 C58 50 65 42 65 32 C65 18 50 0 50 0Z" opacity="0.9" />
        <path d="M50 50 C50 50 30 40 20 50 C10 60 18 75 30 72 C38 70 46 62 50 50Z" opacity="0.9" />
        <path d="M50 50 C50 50 70 40 80 50 C90 60 82 75 70 72 C62 70 54 62 50 50Z" opacity="0.9" />
        <rect x="43" y="50" width="14" height="40" rx="4" />
        <rect x="34" y="85" width="32" height="8" rx="4" />
    </svg>
)

const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
)

const StarIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
)

const HeartIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
)

const CompassIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
)

const UsersIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
)

const LeafIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
)

const AwardIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
)

const MapPinIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
)

const CalendarIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
)

const ChevronDown = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <polyline points="6 9 12 15 18 9" />
    </svg>
)

/* ── Hook de animaciones scroll ─────────────────────────────── */
function useScrollAnimation() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.12 }
        )
        const elements = document.querySelectorAll(
            '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right'
        )
        elements.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])
}

/* ── Navbar ─────────────────────────────────────────────────── */
function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '#inicio', label: 'Inicio' },
        { href: '#historia', label: 'Historia' },
        { href: '#valores', label: 'Valores' },
        { href: '#redes', label: 'Comunidad' },
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-caqui/20'
                : 'bg-transparent'
            }`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <FleurDeLis className={`w-8 h-10 transition-colors duration-300 ${scrolled ? 'text-cafe' : 'text-cafe'}`} />
                        <div>
                            <p className={`font-serif font-bold text-sm md:text-base leading-tight transition-colors duration-300 ${scrolled ? 'text-cafe' : 'text-cafe'}`}>
                                59 Los Delfines
                            </p>
                            <p className={`text-xs font-sans transition-colors duration-300 ${scrolled ? 'text-caqui-dark' : 'text-caqui-dark'}`}>
                                Grupo Scout · Desde 1976
                            </p>
                        </div>
                    </div>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-all duration-200 hover:text-caqui relative group ${scrolled ? 'text-cafe' : 'text-cafe'
                                    }`}
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-caqui transition-all duration-300 group-hover:w-full rounded-full" />
                            </a>
                        ))}
                        <a
                            href="https://www.facebook.com/Scout59LosDelfines"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-sm py-2 px-5"
                        >
                            Únete
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2 text-cafe"
                        aria-label="Menú"
                    >
                        <div className="w-6 flex flex-col gap-1.5">
                            <span className={`block h-0.5 bg-cafe transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`block h-0.5 bg-cafe transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                            <span className={`block h-0.5 bg-cafe transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden bg-white/98 backdrop-blur-md border-t border-caqui/20 transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="px-6 py-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-cafe font-medium hover:text-caqui-dark transition-colors py-1"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="https://www.facebook.com/Scout59LosDelfines"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-center text-sm"
                    >
                        Únete a nosotros
                    </a>
                </div>
            </div>
        </nav>
    )
}

/* ── HERO Section ───────────────────────────────────────────── */
function HeroSection() {
    return (
        <section
            id="inicio"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white"
        >
            {/* Fondo decorativo */}
            <div className="absolute inset-0 bg-texture" />
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
                    style={{
                        backgroundImage: `repeating-linear-gradient(
              45deg,
              #4B3621 0px,
              #4B3621 1px,
              transparent 1px,
              transparent 40px
            )`,
                    }}
                />
            </div>

            {/* Semicírculos decorativos */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-caqui/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cafe/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto">
                {/* Badge de aniversario */}
                <div className="animate-float inline-flex items-center gap-2 bg-caqui/15 border border-caqui/30 text-cafe-dark rounded-full px-5 py-2 text-sm font-semibold mb-8 backdrop-blur-sm">
                    <StarIcon />
                    <span>Bodas de Oro · 1976 – 2026</span>
                    <StarIcon />
                </div>

                {/* Flor de lis central */}
                <div className="flex justify-center mb-6">
                    <FleurDeLis className="w-20 h-24 md:w-28 md:h-32 text-cafe animate-pulse" style={{ animationDuration: '4s' }} />
                </div>

                {/* Título principal */}
                <h1 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4">
                    <span className="text-cafe">Corporación</span>
                    <br />
                    <span className="text-shimmer">59 Los Delfines</span>
                </h1>

                <p className="font-serif italic text-xl md:text-2xl text-caqui-dark mb-3">
                    Grupo Scout · Barrio Santa Cruz, Medellín
                </p>

                {/* Lema */}
                <div className="relative my-8">
                    <div className="absolute left-1/2 -translate-x-1/2 -top-3 flex items-center gap-3 w-full max-w-sm">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-caqui/60" />
                        <FleurDeLis className="w-5 h-6 text-caqui flex-shrink-0" />
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-caqui/60" />
                    </div>
                    <blockquote className="font-serif text-lg md:text-xl lg:text-2xl text-cafe italic leading-relaxed pt-4 px-4">
                        "50 años dejando el mundo mejor<br className="hidden sm:block" /> de como lo encontramos"
                    </blockquote>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <a href="#historia" className="btn-primary w-full sm:w-auto">
                        Nuestra Historia
                    </a>
                    <a
                        href="https://www.facebook.com/Scout59LosDelfines"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
                    >
                        <FacebookIcon />
                        Síguenos
                    </a>
                </div>

                {/* Stats rápidos */}
                <div className="grid grid-cols-3 gap-4 mt-14 max-w-lg mx-auto">
                    {[
                        { num: '50', label: 'Años de historia' },
                        { num: '2ª', label: 'Comuna, Medellín' },
                        { num: '∞', label: 'Jóvenes formados' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <p className="font-serif font-black text-2xl md:text-3xl text-cafe">{stat.num}</p>
                            <p className="text-xs md:text-sm text-caqui-dark mt-0.5">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <a href="#historia" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-caqui hover:text-cafe transition-colors">
                <ChevronDown />
            </a>
        </section>
    )
}

/* ── HISTORIA Section ───────────────────────────────────────── */
function HistoriaSection() {
    const timeline = [
        {
            year: '1976',
            title: 'El Nacimiento',
            desc: 'Un grupo de líderes visionarios del barrio Santa Cruz funda el Grupo Scout 59 Los Delfines, sembrando la semilla del servicio en la Comuna 2 de Medellín.',
            icon: <LeafIcon />,
        },
        {
            year: '1990s',
            title: 'Crecimiento y Arraigo',
            desc: 'Décadas de actividad ininterrumpida consolidan al grupo como pilar comunitario. Cientos de jóvenes pasan por sus filas aprendiendo valores, liderazgo y amor por la naturaleza.',
            icon: <UsersIcon />,
        },
        {
            year: '2000s',
            title: 'Expansión del Impacto',
            desc: 'El grupo amplía su alcance social con programas de servicio comunitario, campamentos nacionales e integración con el movimiento scout colombiano.',
            icon: <CompassIcon />,
        },
        {
            year: '2026',
            title: 'Bodas de Oro',
            desc: 'Medio siglo de historia, sacrificio, aventura y amor por la comunidad. Celebramos 50 años siendo un faro de esperanza para la juventud de Santa Cruz.',
            icon: <AwardIcon />,
        },
    ]

    return (
        <section id="historia" className="py-20 md:py-28 bg-white relative overflow-hidden">
            {/* Fondo sutil */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-caqui/5 to-white pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Encabezado */}
                <div className="text-center mb-16 animate-on-scroll">
                    <p className="text-caqui-dark font-serif italic text-lg mb-2">Nuestra travesía</p>
                    <h2 className="section-title mb-4">50 Años de Historia</h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-16 bg-caqui" />
                        <FleurDeLis className="w-6 h-7 text-caqui" />
                        <div className="h-px w-16 bg-caqui" />
                    </div>
                    <p className="mt-6 text-cafe/70 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
                        Desde 1976, el Grupo Scout 59 Los Delfines ha sido un espacio de formación integral
                        para la juventud del barrio Santa Cruz en la <strong>Comuna 2 de Medellín</strong>.
                        Generación tras generación, hemos cultivado líderes, ciudadanos responsables y
                        guardianes del medioambiente.
                    </p>
                </div>

                {/* Tarjeta descriptiva grande */}
                <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
                    <div className="animate-on-scroll-left">
                        <div className="bg-cafe rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 opacity-10">
                                <FleurDeLis className="w-40 h-48 text-white" />
                            </div>
                            <p className="font-serif italic text-caqui-light text-sm mb-3">La Corporación</p>
                            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                                Un Legado de Servicio y Aventura
                            </h3>
                            <p className="text-white/80 leading-relaxed mb-4">
                                La Corporación 59 Los Delfines es la entidad jurídica que respalda y garantiza
                                la continuidad del movimiento scout en nuestra comunidad. A través de ella,
                                aseguramos recursos, alianzas y proyección institucional para nuestros jóvenes.
                            </p>
                            <p className="text-white/80 leading-relaxed">
                                Formamos integralmente a niños, adolescentes y jóvenes en valores como
                                la honestidad, el servicio, el respeto por la naturaleza y el amor
                                incondicional por Colombia.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                {['Campismo', 'Liderazgo', 'Servicio', 'Naturaleza', 'Valores'].map((tag) => (
                                    <span key={tag} className="bg-white/15 text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="animate-on-scroll-right">
                        <div className="space-y-4">
                            {[
                                { icon: <MapPinIcon />, label: 'Barrio Santa Cruz', sub: 'Comuna 2, Medellín, Antioquia' },
                                { icon: <CalendarIcon />, label: 'Fundado en 1976', sub: '50 años de servicio ininterrumpido' },
                                { icon: <UsersIcon />, label: 'Miles de jóvenes', sub: 'Han pasado por nuestras filas' },
                                { icon: <HeartIcon />, label: 'Impacto comunitario', sub: 'Proyectos de servicio social continuo' },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4 p-4 rounded-2xl bg-caqui/10 hover:bg-caqui/20 transition-colors duration-300"
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                >
                                    <div className="flex-shrink-0 p-2 bg-cafe/10 rounded-xl text-cafe">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-cafe">{item.label}</p>
                                        <p className="text-sm text-cafe/60">{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="animate-on-scroll">
                    <h3 className="font-serif text-2xl font-bold text-cafe text-center mb-10">
                        Línea del Tiempo
                    </h3>
                    <div className="relative">
                        {/* Línea vertical */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-caqui/20 via-caqui to-caqui/20 hidden md:block" />

                        <div className="space-y-8 md:space-y-0">
                            {timeline.map((item, i) => (
                                <div
                                    key={i}
                                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Contenido */}
                                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className={`card p-6 inline-block w-full md:max-w-sm ${i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                                            }`}>
                                            <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''
                                                }`}>
                                                <span className="text-cafe">{item.icon}</span>
                                                <span className="font-serif font-bold text-2xl text-caqui-dark">{item.year}</span>
                                            </div>
                                            <h4 className="font-serif font-bold text-lg text-cafe mb-1">{item.title}</h4>
                                            <p className="text-cafe/65 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>

                                    {/* Punto central */}
                                    <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-cafe items-center justify-center shadow-lg z-10">
                                        <FleurDeLis className="w-5 h-6 text-white" />
                                    </div>

                                    {/* Espacio del otro lado */}
                                    <div className="flex-1 hidden md:block" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ── VALORES Section ────────────────────────────────────────── */
function ValoresSection() {
    const valores = [
        {
            icon: <CompassIcon />,
            title: 'Aventura y Exploración',
            desc: 'Cada campamento, cada excursión es una nueva página en el libro del aprendizaje. Formamos exploradores del mundo natural y social.',
        },
        {
            icon: <HeartIcon />,
            title: 'Servicio Comunitario',
            desc: 'El servicio desinteresado a la comunidad del barrio Santa Cruz y la Comuna 2 es el corazón de nuestra identidad scout.',
        },
        {
            icon: <UsersIcon />,
            title: 'Fraternidad Scout',
            desc: 'Somos hermanos. Unidos por la promesa y la ley scout, construimos lazos que trascienden el tiempo y el espacio.',
        },
        {
            icon: <LeafIcon />,
            title: 'Amor por la Naturaleza',
            desc: 'Guardamos y protegemos el medioambiente. Cada acción nuestra cuida el planeta que heredamos y que dejaremos.',
        },
        {
            icon: <AwardIcon />,
            title: 'Liderazgo con Valores',
            desc: 'Formamos líderes íntegros, honestos y comprometidos. El liderazgo nace del ejemplo y el sacrificio.',
        },
        {
            icon: <StarIcon />,
            title: 'Ciudadanía Activa',
            desc: 'Nuestros scouts son ciudadanos que transforman su entorno. Creemos en una Colombia mejor, construida desde la base.',
        },
    ]

    return (
        <section id="valores" className="py-20 md:py-28 bg-cafe relative overflow-hidden">
            {/* Patrón decorativo */}
            <div className="absolute inset-0 opacity-5">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${(i % 4) * 25 + 12}%`,
                            top: `${Math.floor(i / 4) * 50 + 25}%`,
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <FleurDeLis className="w-16 h-20 text-white" />
                    </div>
                ))}
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Encabezado */}
                <div className="text-center mb-14 animate-on-scroll">
                    <p className="text-caqui italic font-serif text-lg mb-2">Lo que nos define</p>
                    <h2 className="font-serif font-black text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                        Nuestros Valores
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-16 bg-caqui/60" />
                        <FleurDeLis className="w-6 h-7 text-caqui" />
                        <div className="h-px w-16 bg-caqui/60" />
                    </div>
                    <p className="mt-6 text-white/70 max-w-xl mx-auto">
                        La Promesa Scout guía cada paso de nuestros miembros. Estos son los pilares
                        que hemos defendido durante 50 años.
                    </p>
                </div>

                {/* Grilla de valores */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {valores.map((val, i) => (
                        <div
                            key={i}
                            className="animate-on-scroll group relative bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 cursor-default"
                            style={{ transitionDelay: `${i * 0.05}s` }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2.5 bg-caqui/20 rounded-xl text-caqui group-hover:bg-caqui/30 transition-colors">
                                    {val.icon}
                                </div>
                                <h3 className="font-serif font-bold text-white text-lg">{val.title}</h3>
                            </div>
                            <p className="text-white/65 text-sm leading-relaxed">{val.desc}</p>
                            {/* Acento inferior */}
                            <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-caqui/50 rounded-full transition-all duration-500" />
                        </div>
                    ))}
                </div>

                {/* Promesa Scout */}
                <div className="mt-14 animate-on-scroll">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-10 text-center">
                        <FleurDeLis className="w-12 h-14 text-caqui mx-auto mb-4" />
                        <p className="text-caqui font-serif italic text-sm mb-3">La Promesa Scout</p>
                        <blockquote className="font-serif text-xl md:text-2xl text-white font-medium leading-relaxed max-w-2xl mx-auto">
                            "Por mi honor prometo hacer todo lo posible por cumplir mis deberes para con Dios y mi Patria,
                            ayudar al prójimo en todo momento y cumplir la Ley Scout."
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ── REDES SOCIALES Section ─────────────────────────────────── */
function RedesSection() {
    return (
        <section id="redes" className="py-20 md:py-28 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-caqui/5 via-white to-cafe/5 pointer-events-none" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Encabezado */}
                <div className="text-center mb-12 animate-on-scroll">
                    <p className="text-caqui-dark font-serif italic text-lg mb-2">Sé parte de la aventura</p>
                    <h2 className="section-title mb-4">Únete a Nuestra Comunidad</h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-16 bg-caqui" />
                        <FleurDeLis className="w-6 h-7 text-caqui" />
                        <div className="h-px w-16 bg-caqui" />
                    </div>
                    <p className="mt-5 text-cafe/65 max-w-xl mx-auto">
                        Síguenos en redes sociales y sé el primero en conocer nuestras actividades,
                        campamentos y celebraciones de nuestro 50 aniversario.
                    </p>
                </div>

                {/* Tarjeta principal Facebook */}
                <div className="animate-on-scroll max-w-lg mx-auto">
                    <a
                        href="https://www.facebook.com/Scout59LosDelfines"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                    >
                        <div className="relative bg-white rounded-3xl shadow-xl border border-caqui/20 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            {/* Header de la tarjeta */}
                            <div className="bg-[#1877F2] p-8 relative overflow-hidden">
                                <div className="absolute inset-0 opacity-10">
                                    {[...Array(6)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute rounded-full border-2 border-white"
                                            style={{
                                                width: `${60 + i * 30}px`,
                                                height: `${60 + i * 30}px`,
                                                top: `${50 - i * 15}%`,
                                                right: `${-10 + i * 5}%`,
                                            }}
                                        />
                                    ))}
                                </div>
                                <div className="relative z-10 flex items-center gap-4">
                                    <div className="bg-white rounded-2xl p-3.5 shadow-lg">
                                        <svg viewBox="0 0 24 24" fill="#1877F2" className="w-8 h-8">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white/80 text-sm font-medium">Síguenos en</p>
                                        <p className="text-white font-bold text-xl">Facebook</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contenido */}
                            <div className="p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-cafe rounded-full flex items-center justify-center flex-shrink-0">
                                        <FleurDeLis className="w-6 h-7 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-cafe">Grupo Scout 59 Los Delfines</p>
                                        <p className="text-sm text-cafe/50">@Scout59LosDelfines</p>
                                    </div>
                                    <div className="ml-auto bg-[#1877F2] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                                        Seguir
                                    </div>
                                </div>

                                <p className="text-cafe/70 text-sm leading-relaxed mb-5">
                                    🏕 Campamentos · Servicios · Aventuras · Noticias del Grupo Scout 59 Los Delfines
                                    desde el barrio Santa Cruz de Medellín. ¡50 años y contando!
                                </p>

                                {/* Tags de contenido */}
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {['#Scout59', '#LosDelfines', '#Medellín', '#BodasDeOro', '#GrupoScout'].map((tag) => (
                                        <span key={tag} className="text-[#1877F2] text-xs font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-caqui/20">
                                    <p className="text-xs text-cafe/40">facebook.com/Scout59LosDelfines</p>
                                    <div className="flex items-center gap-2 text-cafe/60 text-sm group-hover:text-cafe transition-colors font-medium">
                                        Visitar página
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                {/* Mensaje adicional */}
                <div className="text-center mt-12 animate-on-scroll">
                    <p className="text-cafe/50 text-sm max-w-md mx-auto">
                        ¿Quieres que tu hijo/a forme parte del Grupo Scout 59 Los Delfines?
                    </p>
                    <a
                        href="https://www.facebook.com/Scout59LosDelfines"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-3 btn-primary"
                    >
                        <FacebookIcon />
                        Contáctanos por Facebook
                    </a>
                </div>
            </div>
        </section>
    )
}

/* ── FOOTER ─────────────────────────────────────────────────── */
function Footer() {
    return (
        <footer className="bg-cafe-dark text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-10 mb-10">
                    {/* Identidad */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <FleurDeLis className="w-8 h-10 text-caqui" />
                            <div>
                                <p className="font-serif font-bold text-lg">59 Los Delfines</p>
                                <p className="text-white/50 text-sm">Grupo Scout · 1976-2026</p>
                            </div>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">
                            50 años formando líderes con valores scouts en el barrio Santa Cruz,
                            Comuna 2 de Medellín.
                        </p>
                    </div>

                    {/* Secciones */}
                    <div>
                        <p className="font-serif font-bold text-caqui mb-4">Navegación</p>
                        <ul className="space-y-2">
                            {[
                                { href: '#inicio', label: 'Inicio' },
                                { href: '#historia', label: 'Nuestra Historia' },
                                { href: '#valores', label: 'Valores Scout' },
                                { href: '#redes', label: 'Redes Sociales' },
                            ].map((l) => (
                                <li key={l.href}>
                                    <a href={l.href} className="text-white/60 hover:text-caqui transition-colors text-sm">
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <p className="font-serif font-bold text-caqui mb-4">Encuéntranos</p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-2 text-white/60 text-sm">
                                <MapPinIcon />
                                <p>Barrio Santa Cruz<br />Comuna 2, Medellín, Antioquia</p>
                            </div>
                            <a
                                href="https://www.facebook.com/Scout59LosDelfines"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-white/60 hover:text-caqui transition-colors text-sm"
                            >
                                <FacebookIcon />
                                facebook.com/Scout59LosDelfines
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40 text-xs">
                    <p>© 2026 Corporación 59 Los Delfines. Todos los derechos reservados.</p>
                    <p className="flex items-center gap-1">
                        Hecho con <HeartIcon /> para nuestra comunidad scout
                    </p>
                </div>
            </div>
        </footer>
    )
}

/* ── Botón flotante Facebook ────────────────────────────────── */
function FloatingFacebook() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 300)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <a
            href="https://www.facebook.com/Scout59LosDelfines"
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-6 right-6 z-50 bg-[#1877F2] text-white rounded-full p-4 shadow-2xl
                  hover:bg-[#1660d0] hover:scale-110 transition-all duration-300
                  ${visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
            aria-label="Facebook del Grupo Scout"
        >
            <FacebookIcon />
        </a>
    )
}

/* ── App principal ──────────────────────────────────────────── */
export default function App() {
    useScrollAnimation()

    return (
        <div className="min-h-screen">
            <Navbar />
            <HeroSection />
            <HistoriaSection />
            <ValoresSection />
            <RedesSection />
            <Footer />
            <FloatingFacebook />
        </div>
    )
}
