import { FleurDeLis, BookIcon, UsersIcon, AwardIcon, CompassIcon, HeartIcon, TentIcon } from './Icons'

export default function MisionVisionSection() {
    const objetivos = [
        { icon: <BookIcon className="w-6 h-6" />, title: 'Educativo', desc: 'Mejorar la calidad del programa scout en todas las unidades.' },
        { icon: <UsersIcon className="w-6 h-6" />, title: 'Crecimiento', desc: 'Aumentar la membresía en un 50% en dos años.' },
        { icon: <AwardIcon className="w-6 h-6" />, title: 'Formación de Adultos', desc: 'Capacitar al 100% de los dirigentes (en el "ser" y el "hacer").' },
        { icon: <TentIcon className="w-6 h-6" />, title: 'Intendencia', desc: 'Mantener un inventario de materiales actualizado y funcional.' },
        { icon: <CompassIcon className="w-6 h-6" />, title: 'Financiera', desc: 'Establecer un fondo común sostenible mediante eventos o cuotas.' },
        { icon: <HeartIcon className="w-6 h-6" />, title: 'Comunitaria', desc: 'Fortalecer alianzas con padres de familia y entidades locales.' },
    ]

    return (
        <section id="mision-vision" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
            {/* Elemento decorativo de fondo */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-5 pointer-events-none">
                <FleurDeLis className="w-96 h-96 text-cafe" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Contenedor Misión y Visión */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">

                    {/* Misión */}
                    <div className="animate-on-scroll-left bg-white rounded-3xl p-10 shadow-xl shadow-cafe/5 border border-caqui/20 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-center">
                        <div className="absolute -right-6 -top-6 bg-caqui/10 w-32 h-32 rounded-full blur-2xl group-hover:bg-caqui/20 transition-colors" />
                        <div className="flex items-center gap-4 mb-6 relative">
                            <div className="p-3 bg-cafe/5 rounded-2xl text-cafe">
                                <CompassIcon className="w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-3xl md:text-4xl font-bold text-cafe">Nuestra Misión</h3>
                        </div>
                        <p className="text-cafe/80 text-xl font-serif italic leading-relaxed relative z-10 font-medium">
                            "Ser un grupo scout referente en Antioquia por su impacto educativo y liderazgo comunitario para el año 2027."
                        </p>
                    </div>

                    {/* Visión */}
                    <div className="animate-on-scroll-right bg-cafe rounded-3xl p-10 shadow-xl shadow-cafe/10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-center">
                        <div className="absolute -left-6 -bottom-6 bg-white/5 w-32 h-32 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
                        <div className="flex items-center gap-4 mb-6 relative">
                            <div className="p-3 bg-white/10 rounded-2xl text-caqui">
                                <TentIcon className="w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white">Nuestra Visión</h3>
                        </div>
                        <p className="text-white/90 text-xl font-serif italic leading-relaxed relative z-10 font-medium">
                            "Formar jóvenes íntegros y comprometidos con su comunidad, siguiendo los valores del escultismo."
                        </p>
                    </div>

                </div>

                {/* Objetivos Estratégicos */}
                <div className="animate-on-scroll">
                    <div className="text-center mb-12">
                        <span className="text-caqui-dark font-serif italic text-lg mb-2 block">Nuestra ruta de acción</span>
                        <h2 className="font-serif font-black text-3xl md:text-4xl text-cafe mb-4">Objetivos Estratégicos</h2>
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-px w-12 bg-caqui" />
                            <FleurDeLis className="w-5 h-6 text-caqui" />
                            <div className="h-px w-12 bg-caqui" />
                        </div>
                        <p className="mt-4 text-cafe/70 max-w-2xl mx-auto">
                            El plan se divide en seis áreas clave para los próximos dos años, guiando nuestro crecimiento y fortalecimiento institucional.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {objetivos.map((obj, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-caqui/20 hover:border-caqui/50 hover:shadow-lg hover:shadow-caqui/5 transition-all duration-300 flex flex-col items-start gap-4 group">
                                <div className="p-3 bg-slate-50 rounded-xl text-cafe group-hover:bg-cafe group-hover:text-white transition-colors duration-300">
                                    {obj.icon}
                                </div>
                                <div>
                                    <h4 className="font-serif font-bold text-xl text-cafe mb-2">{obj.title}</h4>
                                    <p className="text-cafe/70 leading-relaxed text-sm">{obj.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
