import { FleurDeLis } from './Icons'
import RamaCard from './RamaCard'
import { ramasDeProgresion, ramasDeApoyo } from '../data/ramas'

/* ── Separador de sección ────────────────────────────────── */
function SectionDivider({ label }) {
    return (
        <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-caqui/25" />
            <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-caqui/30 bg-white shadow-sm">
                <FleurDeLis className="w-4 h-5 text-caqui" />
                <span className="font-serif font-bold text-cafe text-sm tracking-wide">{label}</span>
                <FleurDeLis className="w-4 h-5 text-caqui" />
            </div>
            <div className="flex-1 h-px bg-caqui/25" />
        </div>
    )
}

export default function InscripcionesSection() {
    return (
        <section
            id="inscripciones"
            className="py-20 md:py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #fdf8f0 0%, #f5ede0 50%, #fdf8f0 100%)' }}
        >
            {/* Decoración */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-caqui/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cafe/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Encabezado ────────────────────── */}
                <div className="text-center mb-14 animate-on-scroll">
                    <p className="text-caqui-dark font-serif italic text-lg mb-2">Únete a la aventura</p>
                    <h2 className="section-title mb-4">Nuestras Unidades 2026</h2>
                    <div className="flex items-center justify-center gap-4 mb-5">
                        <div className="h-px w-16 bg-caqui" />
                        <FleurDeLis className="w-6 h-7 text-caqui" />
                        <div className="h-px w-16 bg-caqui" />
                    </div>
                    <p className="text-cafe/70 max-w-2xl mx-auto leading-relaxed">
                        El Grupo Scout 59 Los Delfines tiene una unidad para cada etapa de la vida.
                        Haz clic en cada tarjeta para conocer su mística, oración y principios.{' '}
                        <strong>Inscripciones abiertas para el año 2026.</strong>
                    </p>
                </div>

                {/* ── Ramas de Progresión ───────────── */}
                <div className="mb-16">
                    <SectionDivider label="Ramas de Progresión" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ramasDeProgresion.map((rama) => (
                            <div key={rama.slug} className="animate-on-scroll">
                                <RamaCard rama={rama} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Unidades de Apoyo y Gobierno ──── */}
                <div className="mb-14">
                    <SectionDivider label="Unidades de Apoyo y Gobierno" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {ramasDeApoyo.map((rama) => (
                            <div key={rama.slug} className="animate-on-scroll">
                                <RamaCard rama={rama} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Banner CTA ────────────────────── */}
                <div className="animate-on-scroll">
                    <div className="bg-cafe rounded-3xl p-8 md:p-10 text-center text-white relative overflow-hidden">
                        {/* Fleurs decorativas */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none">
                            {[...Array(4)].map((_, i) => (
                                <FleurDeLis key={i} className="absolute w-20 h-24 text-white"
                                    style={{ left: `${i * 28 + 4}%`, top: '50%', transform: 'translateY(-50%)' }} />
                            ))}
                        </div>
                        <div className="relative z-10">
                            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">
                                ¿Listo para la aventura?
                            </h3>
                            <p className="text-white/75 mb-6 max-w-xl mx-auto">
                                Para inscribirte o saber más sobre fechas, costos y actividades del año 2026,
                                contáctanos directamente a través de WhatsApp.
                            </p>
                            <a
                                href="https://wa.me/573150451770?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20las%20inscripciones%20para%202026."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-caqui text-cafe font-bold px-8 py-3 rounded-full
                                           hover:bg-caqui-light transition-all duration-300 hover:scale-105"
                            >
                                Escríbenos por WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
