import { FleurDeLis, UsersIcon, CompassIcon, AwardIcon, MapPinIcon, CalendarIcon, HeartIcon, TentIcon } from './Icons'

export default function HistoriaSection() {
    const hojaDeRuta = [
        { icon: <UsersIcon className="w-7 h-7" />, title: 'Crecimiento', desc: 'Aumentar nuestra membresía en un 50%, expandiendo el impacto del escultismo a más jóvenes de la comunidad.' },
        { icon: <AwardIcon className="w-7 h-7" />, title: 'Formación', desc: 'Capacitar al 100% de nuestros dirigentes en el "ser" y el "hacer", garantizando una educación de excelencia.' },
        { icon: <HeartIcon className="w-7 h-7" />, title: 'Comunidad', desc: 'Fortalecer nuestro impacto social y tejer alianzas estratégicas sólidas a nivel local.' },
    ]

    return (
        <section id="historia" className="py-20 md:py-28 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-caqui/5 to-white pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Encabezado */}
                <div className="text-center mb-16 animate-on-scroll">
                    <p className="text-caqui-dark font-serif italic text-lg mb-2">Nuestro Legado y Proyección</p>
                    <h2 className="section-title mb-4">50 Años de Historia</h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-16 bg-caqui" />
                        <FleurDeLis className="w-6 h-7 text-caqui" />
                        <div className="h-px w-16 bg-caqui" />
                    </div>
                </div>

                {/* Línea del Tiempo Evolutiva */}
                <div className="mb-20 animate-on-scroll">
                    <div className="relative">
                        {/* Línea central */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-caqui/20 via-caqui to-caqui/20 hidden md:block" />

                        <div className="space-y-12 md:space-y-0">

                            {/* Hito 1: El Origen */}
                            <div className="relative flex flex-col md:flex-row items-center gap-8 group">
                                <div className="flex-1 md:text-right w-full">
                                    <div className="bg-cafe text-white p-8 rounded-3xl shadow-xl shadow-cafe/10 border border-caqui/20 md:ml-auto md:max-w-md relative overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                                        <div className="absolute -top-10 -right-10 opacity-10">
                                            <FleurDeLis className="w-32 h-32 text-white" />
                                        </div>
                                        <div className="flex items-center gap-3 mb-3 md:justify-end">
                                            <CalendarIcon className="w-6 h-6 text-caqui" />
                                            <span className="font-serif font-bold text-2xl text-caqui">1976</span>
                                        </div>
                                        <h4 className="font-serif font-bold text-xl mb-3">El Origen</h4>
                                        <p className="text-white/80 leading-relaxed text-sm">
                                            Elkin Giraldo Giraldo, con el apoyo de la Parroquia Nuestra Señora de la Asunción y el párroco Hernán Muñoz Herrera, funda el grupo experimental en el barrio Santa Cruz. La primera jefatura la integraron Gilberto Vera, Jorge Marlon Villa y Alejandro Mora V.
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden md:flex flex-shrink-0 w-14 h-14 rounded-full bg-cafe items-center justify-center shadow-lg shadow-caqui/30 z-10 border-4 border-white transition-transform duration-300 group-hover:scale-110">
                                    <MapPinIcon className="w-6 h-6 text-caqui" />
                                </div>
                                <div className="flex-1 hidden md:block" />
                            </div>

                            {/* Hito 2: Identidad y Crecimiento */}
                            <div className="relative flex flex-col md:flex-row-reverse items-center gap-8 group md:-mt-8">
                                <div className="flex-1 md:text-left w-full">
                                    <div className="bg-white p-8 rounded-3xl shadow-xl shadow-cafe/5 border border-caqui/20 md:mr-auto md:max-w-md relative overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                                        <div className="absolute -bottom-10 -left-10 bg-caqui/5 w-32 h-32 rounded-full blur-2xl" />
                                        <div className="flex items-center gap-3 mb-3">
                                            <UsersIcon className="w-6 h-6 text-caqui-dark" />
                                            <span className="font-serif font-bold text-2xl text-caqui-dark">1978 - 1980</span>
                                        </div>
                                        <h4 className="font-serif font-bold text-xl text-cafe mb-3">Identidad y Crecimiento</h4>
                                        <p className="text-cafe/70 leading-relaxed text-sm">
                                            El 14 de agosto de 1979 recibimos el número oficial <strong>59</strong>. Se consolidan las unidades de Manada (1978) y la mística de nuestra pañoleta: el café oscuro (tradición y luto a B.P.), el café claro (trabajo scout) y la cintilla blanca (pureza).
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden md:flex flex-shrink-0 w-14 h-14 rounded-full bg-white items-center justify-center shadow-lg shadow-caqui/20 z-10 border-4 border-caqui/20 transition-transform duration-300 group-hover:scale-110 group-hover:border-caqui text-cafe">
                                    <HeartIcon className="w-6 h-6" />
                                </div>
                                <div className="flex-1 hidden md:block" />
                            </div>

                            {/* Hito 3: Expansión y Madurez */}
                            <div className="relative flex flex-col md:flex-row items-center gap-8 group md:-mt-8">
                                <div className="flex-1 md:text-right w-full">
                                    <div className="bg-slate-50 p-8 rounded-3xl shadow-xl shadow-cafe/5 border border-caqui/20 md:ml-auto md:max-w-md relative overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                                        <div className="absolute top-0 right-0 bg-white shadow-sm px-4 py-1 rounded-bl-xl font-bold text-xs text-cafe/60">Familia Delfines</div>
                                        <div className="flex items-center gap-3 mb-3 md:justify-end mt-4 md:mt-0">
                                            <TentIcon className="w-6 h-6 text-cafe" />
                                            <span className="font-serif font-bold text-2xl text-cafe">1990s - 2016</span>
                                        </div>
                                        <h4 className="font-serif font-bold text-xl text-cafe mb-3">Expansión y Madurez</h4>
                                        <p className="text-cafe/70 leading-relaxed text-sm">
                                            Se completa la estructura educativa con la creación de la unidad de Cachorros (1994), la Sociedad de Pioneros (1999) y la Aldea (2016), abarcando todas las edades del desarrollo juvenil.
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden md:flex flex-shrink-0 w-14 h-14 rounded-full bg-slate-50 items-center justify-center shadow-lg shadow-caqui/20 z-10 border-4 border-caqui/20 transition-transform duration-300 group-hover:scale-110 group-hover:border-cafe text-cafe">
                                    <UsersIcon className="w-6 h-6" />
                                </div>
                                <div className="flex-1 hidden md:block" />
                            </div>

                            {/* Hito 4: El Presente */}
                            <div className="relative flex flex-col md:flex-row-reverse items-center gap-8 group md:-mt-8">
                                <div className="flex-1 md:text-left w-full">
                                    <div className="bg-white p-8 rounded-3xl shadow-xl shadow-cafe/5 border-l-4 border-l-caqui border-y-caqui/20 border-r-caqui/20 md:mr-auto md:max-w-md relative overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                                        <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none">
                                            <CompassIcon className="w-40 h-40 text-cafe" />
                                        </div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <AwardIcon className="w-6 h-6 text-caqui-dark" />
                                            <span className="font-serif font-bold text-2xl text-caqui-dark">2025 - 2026</span>
                                        </div>
                                        <h4 className="font-serif font-bold text-xl text-cafe mb-3">El Presente y las Bodas de Oro</h4>
                                        <p className="text-cafe/70 leading-relaxed text-sm mb-4">
                                            Con 50 años de historia y una membresía de 84 scouts, el grupo se profesionaliza bajo el liderazgo de Christian Camilo Goez. Nos enfocamos en la formación integral (el ser y el hacer) y el fortalecimiento de nuestra intendencia.
                                        </p>
                                        <div className="inline-block bg-caqui/10 text-cafe-dark font-bold text-xs px-3 py-1.5 rounded-full border border-caqui/30">
                                            "La Exigencia marca la Excelencia"
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:flex flex-shrink-0 w-14 h-14 rounded-full bg-white items-center justify-center shadow-lg shadow-caqui/30 z-10 border-4 border-caqui transition-transform duration-300 group-hover:scale-110 text-caqui-dark">
                                    <AwardIcon className="w-6 h-6" />
                                </div>
                                <div className="flex-1 hidden md:block" />
                            </div>

                            {/* Hito 5: Visión de Futuro */}
                            <div className="relative flex flex-col md:flex-row items-center gap-8 group md:-mt-8">
                                <div className="flex-1 md:text-right w-full">
                                    <div className="bg-gradient-to-br from-cafe to-cafe-dark text-white p-8 rounded-3xl shadow-2xl shadow-cafe/20 border border-caqui/30 md:ml-auto md:max-w-md relative overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-cafe/40">
                                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
                                        <div className="flex items-center gap-3 mb-3 md:justify-end relative z-10">
                                            <CompassIcon className="w-6 h-6 text-caqui" />
                                            <span className="font-serif font-bold text-2xl text-caqui">Hacia 2027</span>
                                        </div>
                                        <h4 className="font-serif font-bold text-xl mb-3 relative z-10">Visión de Futuro</h4>
                                        <p className="text-white/80 leading-relaxed text-sm relative z-10">
                                            Nuestra meta es aumentar la membresía en un 50% y consolidarnos como líderes comunitarios en la región, formando jóvenes íntegros bajo los valores del escultismo.
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden md:flex flex-shrink-0 w-14 h-14 rounded-full bg-cafe items-center justify-center shadow-lg shadow-caqui/40 z-10 border-4 border-caqui transition-transform duration-300 group-hover:scale-110 group-hover:border-white">
                                    <CompassIcon className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1 hidden md:block" />
                            </div>

                        </div>
                    </div>
                </div>



                {/* Capítulo 4: Nuestra Hoja de Ruta */}
                <div className="mb-20 animate-on-scroll">
                    <div className="text-center mb-10">
                        <h3 className="font-serif text-3xl font-bold text-cafe mb-4">Nuestra Hoja de Ruta</h3>
                        <p className="text-cafe/70 max-w-2xl mx-auto text-lg">
                            Para hacer realidad esta visión, el Plan Estratégico 2025-2027 se sustenta firmemente en tres pilares:
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {hojaDeRuta.map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-caqui/20 hover:border-caqui/50 hover:shadow-lg transition-all duration-300 text-center group">
                                <div className="mx-auto w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-cafe group-hover:bg-cafe group-hover:text-white transition-colors duration-300 mb-6 shadow-sm">
                                    {item.icon}
                                </div>
                                <h4 className="font-serif font-bold text-2xl text-cafe mb-3">{item.title}</h4>
                                <p className="text-cafe/70 leading-relaxed text-lg">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cierre: Llamado a la acción */}
                <div className="text-center bg-gradient-to-br from-caqui/20 to-caqui/5 rounded-3xl p-10 md:p-16 animate-on-scroll relative overflow-hidden border border-caqui/30 shadow-sm">
                    <div className="relative z-10">
                        <h3 className="font-serif text-3xl md:text-5xl font-bold text-cafe mb-6">El Siguiente Capítulo te Espera</h3>
                        <p className="text-cafe/80 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                            La historia que comenzó hace casi 50 años en el barrio Santa Cruz sigue escribiéndose con cada promesa scout. Invitamos a padres y jóvenes a sumarse a nuestra gran familia. <strong>¡Ven y sé el protagonista de esta aventura formativa!</strong>
                        </p>
                        <a href="#inscripciones" className="inline-flex items-center gap-3 bg-cafe text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-cafe-light hover:scale-105 transition-all duration-300 shadow-xl shadow-cafe/20">
                            Únete a Los Delfines
                            <HeartIcon className="w-5 h-5" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}
