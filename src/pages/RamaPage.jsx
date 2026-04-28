import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getRamaBySlug, PROMESA_SCOUT } from '../data/ramas'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { FleurDeLis } from '../components/Icons'

/* ── Scroll‑to‑top on route change ─────────────────────── */
function ScrollToTop() {
    const { slug } = useParams()
    useEffect(() => { window.scrollTo(0, 0) }, [slug])
    return null
}

/* ── Logo con fallback ──────────────────────────────────── */
function RamaLogo({ src, alt, className = '' }) {
    const [error, setError] = useState(false)
    if (error || !src) {
        return (
            <div className={`flex items-center justify-center bg-white/20 rounded-2xl ${className}`}>
                <FleurDeLis className="w-16 h-20 text-white/70" />
            </div>
        )
    }
    return (
        <img
            src={src}
            alt={alt}
            fetchpriority="high"
            className={`object-contain drop-shadow-2xl ${className}`}
            onError={() => setError(true)}
        />
    )
}

/* ── Ícono de check ─────────────────────────────────────── */
const CheckBadge = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
        className="w-4 h-4 flex-shrink-0 mt-0.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
)

/* ── Sección de Máximos Adelantos (stub) ────────────────── */
/**
 * HistoricoMaximosAdelantos
 *
 * Esta sección está preparada para recibir datos reales.
 * Cuando esté lista la base de datos, reemplaza `mockData`
 * por un fetch / import del array definitivo con la forma:
 *
 *   { año: number, nombre: string, url_foto: string | null }[]
 *
 * El componente ya renderiza la grilla y el fallback de foto.
 */
function HistoricoMaximosAdelantos({ ramaSlug, maximoAdelanto }) {
    /* ── mock data — reemplazar con datos reales ── */
    const mockData = [
        // { año: 2023, nombre: 'Ejemplo Apellido', url_foto: null },
        // { año: 2022, nombre: 'Ejemplo Apellido', url_foto: null },
    ]
    /* ─────────────────────────────────────────── */

    if (!maximoAdelanto) return null   // Unidades de apoyo no tienen máximo adelanto

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-stone-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 animate-on-scroll">
                    <p className="text-caqui-dark font-serif italic text-base mb-1">
                        Orgullo de nuestra familia
                    </p>
                    <h2 className="font-serif font-black text-3xl md:text-4xl text-cafe mb-4">
                        Histórico de Máximos Adelantos
                    </h2>
                    <p className="text-cafe/60 max-w-xl mx-auto text-sm">
                        Quienes alcanzaron <strong>{maximoAdelanto}</strong>, el reconocimiento más alto de
                        esta unidad. Un legado que inspira a cada nueva generación.
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-4">
                        <div className="h-px w-12 bg-caqui/50" />
                        <FleurDeLis className="w-5 h-6 text-caqui" />
                        <div className="h-px w-12 bg-caqui/50" />
                    </div>
                </div>

                {mockData.length === 0 ? (
                    /* Estado vacío — se mostrará hasta que haya datos reales */
                    <div className="animate-on-scroll text-center py-16 border-2 border-dashed border-caqui/30 rounded-3xl bg-white">
                        <FleurDeLis className="w-12 h-14 text-caqui/30 mx-auto mb-4" />
                        <p className="font-serif text-cafe/40 text-lg">
                            Pronto aquí aparecerán los campeones de esta unidad.
                        </p>
                        <p className="text-cafe/30 text-sm mt-1">
                            — Sección en construcción —
                        </p>
                    </div>
                ) : (
                    /* Grilla de campeones */
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {mockData.map((item, i) => (
                            <div key={i} className="animate-on-scroll text-center group">
                                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-caqui/30 group-hover:border-caqui transition-all duration-300 bg-stone-100 mb-3 shadow-md">
                                    {item.url_foto ? (
                                        <img
                                            src={item.url_foto}
                                            alt={item.nombre}
                                            className="w-full h-full object-cover"
                                            onError={(e) => { e.target.style.display = 'none' }}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <FleurDeLis className="w-10 h-12 text-caqui/40" />
                                        </div>
                                    )}
                                </div>
                                <p className="font-serif font-bold text-cafe text-sm leading-tight">{item.nombre}</p>
                                <p className="text-caqui-dark text-xs font-semibold mt-0.5">{item.año}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

/* ── Página principal de la Rama ────────────────────────── */
export default function RamaPage() {
    const { slug } = useParams()
    useScrollAnimation()

    const rama = getRamaBySlug(slug)
    
    // SEO dinámico
    useEffect(() => {
        if (rama) {
            document.title = `${rama.nombre} - Grupo Scout 59 Los Delfines`
        }
    }, [rama])

    if (!rama) return <Navigate to="/" replace />

    const isApoyo = rama.tipo === 'apoyo'

    return (
        <div className="animate-fade-in">
            <ScrollToTop />

            {/* ── Navbar mínima de sub‑página ─────────── */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-caqui/20 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link to="/" className="flex items-center gap-2 text-cafe font-semibold hover:text-caqui-dark transition-colors group">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                                className="w-5 h-5 transition-transform group-hover:-translate-x-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            <span className="hidden sm:inline">Volver al inicio</span>
                            <span className="sm:hidden">Inicio</span>
                        </Link>
                        <Link to="/" className="flex items-center gap-2 group">
                            <img
                                src="/logo-oficial.jpg"
                                alt="Logo 59 Los Delfines"
                                className="h-10 w-10 rounded-full object-contain border-2 border-caqui/30 bg-white"
                                onError={(e) => { e.target.style.display = 'none' }}
                            />
                            <span className="font-serif font-black text-cafe text-sm hidden sm:block">59 Los Delfines</span>
                        </Link>
                        <a
                            href={`https://wa.me/573150451770?text=Hola%2C%20me%20interesa%20la%20unidad%20${encodeURIComponent(rama.nombre)}%20del%20Grupo%2059.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm bg-cafe text-white px-4 py-2 rounded-full font-semibold hover:bg-cafe-light transition-all duration-300 hover:scale-105 shadow-sm"
                        >
                            Inscribirse
                        </a>
                    </div>
                </div>
            </nav>

            {/* ── Hero inmersivo ───────────────────────── */}
            <section
                className="relative min-h-[70vh] flex items-end overflow-hidden pt-16"
                style={{ background: `linear-gradient(160deg, #302010 0%, #4B3621 50%, #6B4F30 100%)` }}
            >
                {/* Patrón textura */}
                <div className="absolute inset-0 opacity-[0.06]" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, #C2B280 0px, #C2B280 1px, transparent 1px, transparent 24px)',
                }} />

                {/* Decoración: fleurs de lis flotantes */}
                <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
                    <FleurDeLis className="w-48 h-56 text-white" />
                </div>
                <div className="absolute bottom-0 left-6 opacity-5 pointer-events-none">
                    <FleurDeLis className="w-32 h-40 text-caqui" />
                </div>

                {/* Color accent lateral */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-1.5"
                    style={{ backgroundColor: rama.color.accentHex }}
                />

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-24 w-full">
                    <div className="flex flex-col md:flex-row items-center md:items-end gap-10">

                        {/* Logo de la unidad */}
                        <div className="flex-shrink-0 animate-on-scroll">
                            <div
                                className="w-40 h-40 md:w-52 md:h-52 rounded-3xl flex items-center justify-center shadow-2xl border-2 relative"
                                style={{
                                    background: `linear-gradient(135deg, ${rama.color.heroFrom}, ${rama.color.heroTo})`,
                                    borderColor: `${rama.color.accentHex}40`,
                                }}
                            >
                                <RamaLogo
                                    src={rama.logo_url}
                                    alt={`Logo ${rama.nombre}`}
                                    className="w-32 h-32 md:w-40 md:h-40 p-3"
                                />
                            </div>
                        </div>

                        {/* Texto hero */}
                        <div className="text-center md:text-left animate-on-scroll">
                            {/* Tipo badge */}
                            <span
                                className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-widest uppercase"
                                style={{ backgroundColor: `${rama.color.accentHex}25`, color: rama.color.accentHex }}
                            >
                                {isApoyo ? 'Unidad de Apoyo' : 'Rama de Progresión'}
                            </span>

                            <div className="flex items-center justify-center md:justify-start gap-4 mb-3">
                                <div className="h-px w-8 bg-caqui/50" />
                                <FleurDeLis className="w-5 h-6 text-caqui" />
                                <div className="h-px w-8 bg-caqui/50" />
                            </div>

                            <h1 className="font-serif font-black text-5xl md:text-7xl text-white leading-none mb-3">
                                {rama.nombre}
                            </h1>

                            <p className="font-serif italic text-caqui text-xl md:text-2xl mb-5">
                                {rama.emoji} {rama.edades}
                            </p>

                            {rama.lema && (
                                <blockquote className="border-l-4 border-caqui/80 pl-5 my-6 animate-on-scroll">
                                    <p className="font-serif italic font-medium text-2xl md:text-3xl text-white/95 tracking-wide leading-snug">
                                        "{rama.lema}"
                                    </p>
                                </blockquote>
                            )}

                            <p className="text-white/80 max-w-xl leading-relaxed text-base md:text-lg">
                                {rama.descripcion}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Wave inferior */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 md:h-16 fill-white">
                        <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
                    </svg>
                </div>
            </section>

            {/* ── Mística ─────────────────────────────── */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="animate-on-scroll text-center mb-10">
                        <p className="text-caqui-dark font-serif italic text-base mb-1">El alma de la unidad</p>
                        <h2 className="section-title mb-4">Nuestra Mística</h2>
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-px w-12 bg-caqui/50" />
                            <FleurDeLis className="w-5 h-6 text-caqui" />
                            <div className="h-px w-12 bg-caqui/50" />
                        </div>
                    </div>
                    <div
                        className="animate-on-scroll prose prose-lg max-w-none text-cafe/80 leading-relaxed
                                   font-serif text-lg md:text-xl text-center
                                   [&_strong]:text-cafe [&_strong]:font-bold [&_em]:text-caqui-dark
                                   [&_p]:mb-5"
                        dangerouslySetInnerHTML={{ __html: rama.mistica_html }}
                    />
                </div>
            </section>

            {/* ── Oración ─────────────────────────────── */}
            <section
                className="py-16 md:py-20 relative overflow-hidden"
                style={{ background: `linear-gradient(160deg, ${rama.color.heroFrom} 0%, ${rama.color.heroTo} 100%)` }}
            >
                <div
                    className="absolute left-0 top-0 bottom-0 w-1"
                    style={{ backgroundColor: rama.color.accentHex }}
                />
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="animate-on-scroll">
                        <FleurDeLis className="w-10 h-12 text-cafe/30 mx-auto mb-4" />
                        <p className="text-caqui-dark font-serif italic text-base mb-6">
                            {rama.slug === 'tropa' ? 'La Promesa Scout' : `Oración de la ${rama.nombre}`}
                        </p>
                        <blockquote
                            className="font-serif text-xl md:text-2xl text-cafe font-medium italic leading-relaxed
                                       bg-white/60 backdrop-blur-sm border border-caqui/20 rounded-3xl p-8 md:p-12
                                       shadow-sm relative"
                        >
                            <span className="absolute top-4 left-6 text-5xl text-caqui/20 font-serif leading-none">"</span>
                            {rama.oracion}
                            <span className="absolute bottom-2 right-6 text-5xl text-caqui/20 font-serif leading-none">"</span>
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* ── Principios ──────────────────────────── */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="animate-on-scroll text-center mb-12">
                        <p className="text-caqui-dark font-serif italic text-base mb-1">Lo que nos guía</p>
                        <h2 className="section-title mb-4">Nuestros Principios</h2>
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-px w-12 bg-caqui/50" />
                            <FleurDeLis className="w-5 h-6 text-caqui" />
                            <div className="h-px w-12 bg-caqui/50" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {rama.principios.map((p, i) => (
                            <div
                                key={i}
                                className="animate-on-scroll flex items-start gap-4 p-6 rounded-2xl border border-caqui/20 hover:border-caqui/50 hover:shadow-md transition-all duration-300 group"
                                style={{ transitionDelay: `${i * 80}ms` }}
                            >
                                <div
                                    className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-sm mt-0.5"
                                    style={{ backgroundColor: rama.color.accentHex }}
                                >
                                    <CheckBadge />
                                </div>
                                <p className="font-serif font-semibold text-cafe text-lg leading-snug group-hover:text-cafe transition-colors">
                                    {p}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Histórico de Máximos Adelantos ──────── */}
            <HistoricoMaximosAdelantos ramaSlug={slug} maximoAdelanto={rama.maximo_adelanto} />

            {/* ── CTA final ───────────────────────────── */}
            <section
                className="py-16 md:py-20 relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, #302010 0%, #4B3621 100%)` }}
            >
                <div className="absolute inset-0 opacity-5">
                    {[...Array(3)].map((_, i) => (
                        <FleurDeLis key={i} className="absolute w-24 h-28 text-white"
                            style={{ left: `${i * 33 + 16}%`, top: '50%', transform: 'translateY(-50%)' }} />
                    ))}
                </div>
                <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
                    <FleurDeLis className="w-10 h-12 text-caqui mx-auto mb-6" />
                    <h2 className="font-serif font-black text-3xl md:text-4xl text-white mb-4">
                        ¿Quieres ser parte de la {rama.nombre}?
                    </h2>
                    <p className="text-white/65 mb-8 text-lg max-w-xl mx-auto leading-relaxed">
                        Contáctanos hoy mismo y da el primer paso de tu aventura en el
                        Grupo Scout 59 Los Delfines.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`https://wa.me/573150451770?text=Hola%2C%20me%20interesa%20inscribirme%20en%20la%20${encodeURIComponent(rama.nombre)}%20(${encodeURIComponent(rama.edades)}).`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-caqui text-cafe font-bold px-8 py-4 rounded-full hover:bg-caqui-light transition-all duration-300 hover:scale-105 shadow-xl text-base"
                        >
                            Inscribirse por WhatsApp
                        </a>
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 text-base"
                        >
                            Ver todas las unidades
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Footer mínimo ───────────────────────── */}
            <footer className="bg-cafe-dark py-6 text-center">
                <p className="text-caqui/60 text-sm font-serif italic">
                    Grupo Scout 59 Los Delfines · Barrio Santa Cruz, Medellín · Bodas de Oro 1976 – 2026
                </p>
            </footer>
        </div>
    )
}
