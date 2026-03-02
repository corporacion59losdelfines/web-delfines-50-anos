import { FleurDeLis, CompassIcon, HeartIcon, UsersIcon, LeafIcon, AwardIcon, StarIcon } from './Icons'

export default function ValoresSection() {
    const valores = [
        { icon: <CompassIcon />, title: 'Aventura y Exploración', desc: 'Cada campamento es una nueva página en el libro del aprendizaje. Formamos exploradores del mundo natural y social.' },
        { icon: <HeartIcon className="w-7 h-7" />, title: 'Servicio Comunitario', desc: 'El servicio desinteresado a la comunidad del barrio Santa Cruz y la Comuna 2 es el corazón de nuestra identidad.' },
        { icon: <UsersIcon />, title: 'Fraternidad Scout', desc: 'Somos hermanos. Unidos por la promesa y la ley scout, construimos lazos que trascienden el tiempo.' },
        { icon: <LeafIcon />, title: 'Amor por la Naturaleza', desc: 'Guardamos y protegemos el medioambiente. Cada acción nuestra cuida el planeta que heredamos.' },
        { icon: <AwardIcon />, title: 'Liderazgo con Valores', desc: 'Formamos líderes íntegros, honestos y comprometidos. El liderazgo nace del ejemplo y el sacrificio.' },
        { icon: <StarIcon className="w-7 h-7" />, title: 'Ciudadanía Activa', desc: 'Nuestros scouts son ciudadanos que transforman su entorno. Creemos en una Colombia mejor desde la base.' },
    ]

    return (
        <section id="valores" className="py-20 md:py-28 bg-cafe relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="absolute" style={{ left: `${(i % 4) * 25 + 12}%`, top: `${Math.floor(i / 4) * 50 + 25}%`, transform: 'translate(-50%, -50%)' }}>
                        <FleurDeLis className="w-16 h-20 text-white" />
                    </div>
                ))}
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 animate-on-scroll">
                    <p className="text-caqui italic font-serif text-lg mb-2">Lo que nos define</p>
                    <h2 className="font-serif font-black text-3xl md:text-5xl text-white mb-4">Nuestros Valores</h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-16 bg-caqui/60" />
                        <FleurDeLis className="w-6 h-7 text-caqui" />
                        <div className="h-px w-16 bg-caqui/60" />
                    </div>
                    <p className="mt-5 text-white/70 max-w-xl mx-auto">
                        La Promesa Scout guía cada paso de nuestros miembros. Estos son los pilares que hemos defendido durante 50 años.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {valores.map((val, i) => (
                        <div key={i} className="animate-on-scroll group bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2.5 bg-caqui/20 rounded-xl text-caqui group-hover:bg-caqui/30 transition-colors">{val.icon}</div>
                                <h3 className="font-serif font-bold text-white">{val.title}</h3>
                            </div>
                            <p className="text-white/65 text-sm leading-relaxed">{val.desc}</p>
                            <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-caqui/50 rounded-full transition-all duration-500" />
                        </div>
                    ))}
                </div>

                {/* Promesa Scout */}
                <div className="mt-12 animate-on-scroll">
                    <div className="bg-white/10 border border-white/20 rounded-3xl p-8 text-center">
                        <FleurDeLis className="w-10 h-12 text-caqui mx-auto mb-3" />
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
