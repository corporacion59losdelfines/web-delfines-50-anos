import { FleurDeLis, CheckIcon } from './Icons'

const ramas = [
    {
        name: 'Familia',
        ages: '6 – 8 años',
        emoji: '🐣',
        color: 'from-amber-50 to-yellow-50',
        border: 'border-yellow-300',
        badge: 'bg-yellow-100 text-yellow-800',
        desc: 'La primera aventura. Los más pequeños descubren el mundo a través del juego, la imaginación y la familia scout.',
        skills: ['Juego en equipo', 'Primeros valores', 'Amor por la naturaleza'],
    },
    {
        name: 'Manada',
        ages: '8 – 10 años',
        emoji: '🐺',
        color: 'from-green-50 to-emerald-50',
        border: 'border-green-300',
        badge: 'bg-green-100 text-green-800',
        desc: 'El espíritu de la manada. Aprenden a trabajar en equipo siguiendo las huellas de los lobatos.',
        skills: ['Trabajo en equipo', 'Primeros auxilios básicos', 'Orientación'],
    },
    {
        name: 'Aldea',
        ages: '10 – 12 años',
        emoji: '🏡',
        color: 'from-blue-50 to-sky-50',
        border: 'border-blue-300',
        badge: 'bg-blue-100 text-blue-800',
        desc: 'Construyendo su aldea. Los scouts construyen amistades sólidas y habilidades para la vida.',
        skills: ['Campismo', 'Servicio comunitario', 'Liderazgo inicial'],
    },
    {
        name: 'Tropa',
        ages: '12 – 15 años',
        emoji: '⛺',
        color: 'from-orange-50 to-amber-50',
        border: 'border-orange-300',
        badge: 'bg-orange-100 text-orange-800',
        desc: 'La gran aventura. Expediciones, proyectos de servicio y el desarrollo del liderazgo juvenil.',
        skills: ['Expediciones', 'Proyectos de servicio', 'Primeros auxilios avanzados'],
    },
    {
        name: 'Pioneros',
        ages: '15 – 18 años',
        emoji: '🏔️',
        color: 'from-purple-50 to-violet-50',
        border: 'border-purple-300',
        badge: 'bg-purple-100 text-purple-800',
        desc: 'Líderes en formación. Los pioneros diseñan y ejecutan proyectos de impacto social en la comunidad.',
        skills: ['Liderazgo avanzado', 'Proyectos sociales', 'Habilidades técnicas'],
    },
    {
        name: 'Clan',
        ages: '18 – 20 años',
        emoji: '🦅',
        color: 'from-rose-50 to-red-50',
        border: 'border-rose-300',
        badge: 'bg-rose-100 text-rose-800',
        desc: 'La cima del movimiento. Los rovers son servidores comprometidos y líderes de la nueva generación.',
        skills: ['Servicio avanzado', 'Formación de líderes', 'Ciudadanía global'],
    },
]

export default function InscripcionesSection() {
    return (
        <section id="inscripciones" className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #fdf8f0 0%, #f5ede0 50%, #fdf8f0 100%)' }}>
            {/* Decoración */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-caqui/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cafe/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Encabezado */}
                <div className="text-center mb-14 animate-on-scroll">
                    <p className="text-caqui-dark font-serif italic text-lg mb-2">Únete a la aventura</p>
                    <h2 className="section-title mb-4">Inscripciones 2026</h2>
                    <div className="flex items-center justify-center gap-4 mb-5">
                        <div className="h-px w-16 bg-caqui" />
                        <FleurDeLis className="w-6 h-7 text-caqui" />
                        <div className="h-px w-16 bg-caqui" />
                    </div>
                    <p className="text-cafe/70 max-w-2xl mx-auto leading-relaxed">
                        El Grupo Scout 59 Los Delfines tiene una rama para cada etapa de la vida. Encuentra tu lugar
                        en nuestra familia scout. <strong>Inscripciones abiertas para el año 2026.</strong>
                    </p>
                </div>

                {/* Grid de ramas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ramas.map((rama, i) => (
                        <div
                            key={i}
                            className={`animate-on-scroll rounded-2xl border-2 ${rama.border} bg-gradient-to-br ${rama.color} overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
                        >
                            {/* Header de la rama */}
                            <div className="bg-cafe p-5 relative overflow-hidden">
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-3xl opacity-20 text-white">
                                    <FleurDeLis className="w-10 h-12 text-white" />
                                </div>
                                <div className="flex items-center justify-between relative z-10">
                                    <div>
                                        <p className="text-3xl mb-1">{rama.emoji}</p>
                                        <h3 className="font-serif font-bold text-2xl text-white">{rama.name}</h3>
                                    </div>
                                    <span className={`${rama.badge} text-sm font-bold px-3 py-1.5 rounded-full shadow-sm`}>
                                        {rama.ages}
                                    </span>
                                </div>
                            </div>

                            {/* Contenido */}
                            <div className="p-5">
                                <p className="text-cafe/75 text-sm leading-relaxed mb-4">{rama.desc}</p>
                                <div className="space-y-2">
                                    {rama.skills.map((skill, j) => (
                                        <div key={j} className="flex items-center gap-2">
                                            <div className="w-5 h-5 rounded-full bg-cafe flex items-center justify-center flex-shrink-0">
                                                <CheckIcon className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-cafe text-sm font-medium">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="px-5 pb-5">
                                <a
                                    href={`https://wa.me/573150451770?text=Hola%2C%20me%20gustar%C3%ADa%20inscribirme%20en%20la%20rama%20${rama.name}.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center bg-cafe text-white font-semibold py-2.5 rounded-xl
                             hover:bg-cafe-light transition-all duration-300 text-sm group-hover:shadow-md"
                                >
                                    Inscribirse en {rama.name}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Banner informativo */}
                <div className="mt-12 animate-on-scroll">
                    <div className="bg-cafe rounded-3xl p-8 md:p-10 text-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-5">
                            {[...Array(4)].map((_, i) => (
                                <FleurDeLis key={i} className="absolute w-20 h-24 text-white"
                                    style={{ left: `${i * 30}%`, top: '50%', transform: 'translateY(-50%)' }} />
                            ))}
                        </div>
                        <div className="relative z-10">
                            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">¿Listo para la aventura?</h3>
                            <p className="text-white/75 mb-6 max-w-xl mx-auto">
                                Para inscribirte o saber más sobre fechas, costos y actividades del año 2026,
                                contáctanos directamente a través de nuestras redes sociales.
                            </p>
                            <a
                                href="https://wa.me/573150451770?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20las%20inscripciones%20para%202026."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-caqui text-cafe font-bold px-8 py-3 rounded-full hover:bg-caqui-light transition-all duration-300 hover:scale-105"
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
