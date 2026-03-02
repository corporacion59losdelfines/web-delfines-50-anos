import { FleurDeLis, LeafIcon, UsersIcon, CompassIcon, AwardIcon, MapPinIcon, CalendarIcon, HeartIcon } from './Icons'

export default function HistoriaSection() {
    const timeline = [
        { year: '1976', title: 'El Nacimiento', desc: 'Líderes visionarios del barrio Santa Cruz fundan el Grupo Scout 59 Los Delfines, sembrando la semilla del servicio en la Comuna 2 de Medellín.', icon: <LeafIcon className="w-6 h-6" /> },
        { year: '1990s', title: 'Crecimiento y Arraigo', desc: 'Décadas de actividad consolidan al grupo como pilar comunitario. Cientos de jóvenes aprenden valores, liderazgo y amor por la naturaleza.', icon: <UsersIcon className="w-6 h-6" /> },
        { year: '2000s', title: 'Expansión del Impacto', desc: 'El grupo amplía su alcance con programas de servicio, campamentos nacionales e integración con el movimiento scout colombiano.', icon: <CompassIcon className="w-6 h-6" /> },
        { year: '2026', title: 'Bodas de Oro', desc: 'Medio siglo de historia, sacrificio y amor por la comunidad. Celebramos 50 años siendo un faro de esperanza para la juventud de Santa Cruz.', icon: <AwardIcon className="w-6 h-6" /> },
    ]

    return (
        <section id="historia" className="py-20 md:py-28 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-caqui/5 to-white pointer-events-none" />
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Encabezado */}
                <div className="text-center mb-14 animate-on-scroll">
                    <p className="text-caqui-dark font-serif italic text-lg mb-2">Nuestra travesía</p>
                    <h2 className="section-title mb-4">50 Años de Historia</h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-16 bg-caqui" />
                        <FleurDeLis className="w-6 h-7 text-caqui" />
                        <div className="h-px w-16 bg-caqui" />
                    </div>
                    <p className="mt-5 text-cafe/70 max-w-2xl mx-auto leading-relaxed">
                        Desde 1976, el Grupo Scout 59 Los Delfines ha sido un espacio de formación integral para la juventud del barrio Santa Cruz en la <strong>Comuna 2 de Medellín</strong>.
                    </p>
                </div>

                {/* Tarjeta + datos */}
                <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
                    <div className="animate-on-scroll-left">
                        <div className="bg-cafe rounded-3xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 opacity-10">
                                <FleurDeLis className="w-40 h-48 text-white" />
                            </div>
                            <p className="font-serif italic text-caqui-light text-sm mb-2">La Corporación</p>
                            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Un Legado de Servicio y Aventura</h3>
                            <p className="text-white/80 leading-relaxed mb-3">La Corporación 59 Los Delfines es la entidad jurídica que respalda y garantiza la continuidad del movimiento scout en nuestra comunidad.</p>
                            <p className="text-white/80 leading-relaxed">Formamos niños, adolescentes y jóvenes en valores de honestidad, servicio, respeto por la naturaleza y amor por Colombia.</p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {['Campismo', 'Liderazgo', 'Servicio', 'Naturaleza', 'Valores'].map((tag) => (
                                    <span key={tag} className="bg-white/15 text-white text-xs px-3 py-1 rounded-full border border-white/20">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="animate-on-scroll-right space-y-3">
                        {[
                            { icon: <MapPinIcon />, label: 'Barrio Santa Cruz', sub: 'Comuna 2, Medellín, Antioquia' },
                            { icon: <CalendarIcon />, label: 'Fundado en 1976', sub: '50 años de servicio ininterrumpido' },
                            { icon: <UsersIcon className="w-5 h-5" />, label: 'Miles de jóvenes formados', sub: 'Han pasado por nuestras filas' },
                            { icon: <HeartIcon />, label: 'Impacto comunitario', sub: 'Proyectos de servicio social continuo' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-caqui/10 hover:bg-caqui/20 transition-colors">
                                <div className="p-2 bg-cafe/10 rounded-xl text-cafe flex-shrink-0">{item.icon}</div>
                                <div>
                                    <p className="font-semibold text-cafe">{item.label}</p>
                                    <p className="text-sm text-cafe/60">{item.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timeline */}
                <div className="animate-on-scroll">
                    <h3 className="font-serif text-2xl font-bold text-cafe text-center mb-10">Línea del Tiempo</h3>
                    <div className="relative">
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-caqui/20 via-caqui to-caqui/20 hidden md:block" />
                        <div className="space-y-8 md:space-y-0">
                            {timeline.map((item, i) => (
                                <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className={`card p-5 inline-block w-full md:max-w-sm ${i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                                            <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                                <span className="text-cafe">{item.icon}</span>
                                                <span className="font-serif font-bold text-xl text-caqui-dark">{item.year}</span>
                                            </div>
                                            <h4 className="font-serif font-bold text-cafe mb-1">{item.title}</h4>
                                            <p className="text-cafe/65 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-cafe items-center justify-center shadow-lg z-10">
                                        <FleurDeLis className="w-4 h-5 text-white" />
                                    </div>
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
