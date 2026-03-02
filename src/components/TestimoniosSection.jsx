import { FleurDeLis } from './Icons'

const testimonios = [
    {
        quote: "El Grupo 59 me enseñó que la verdadera excelencia nace de la exigencia personal y el servicio a los demás.",
        author: "Joven Scout",
        role: "Rama Pioneros",
        years: "Activo"
    },
    {
        quote: "Confío en la Corporación porque veo cómo transforman a nuestros jóvenes en líderes para el barrio Santa Cruz.",
        author: "Padre de Familia",
        role: "Comité de Padres",
        years: "Desde 2018"
    },
    {
        quote: "Llevar la pañoleta de Los Delfines hace 20 años fue la base de mis valores actuales. ¡Felices 50 años!",
        author: "Antiguo Scout",
        role: "Generación 2004",
        years: "Egresado"
    }
]

export default function TestimoniosSection() {
    return (
        <section id="testimonios" className="py-20 md:py-28 bg-white relative overflow-hidden">
            {/* Fondo sutil */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-caqui/5 to-white pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Encabezado */}
                <div className="text-center mb-16 animate-on-scroll">
                    <p className="text-caqui-dark font-serif italic text-lg mb-2">Voces de nuestra comunidad</p>
                    <h2 className="section-title mb-4">Testimonios que Inspiran</h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-16 bg-caqui/60" />
                        <FleurDeLis className="w-6 h-7 text-caqui/80" />
                        <div className="h-px w-16 bg-caqui/60" />
                    </div>
                </div>

                {/* Grid de Testimonios */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
                    {testimonios.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white border border-caqui/30 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative animate-on-scroll flex flex-col group"
                            style={{ animationDelay: `${i * 150}ms` }}
                        >
                            {/* Comillas */}
                            <svg className="absolute top-6 right-6 w-10 h-10 text-caqui/15 group-hover:text-caqui/30 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>

                            <blockquote className="flex-1">
                                <p className="text-cafe/80 text-lg sm:text-base font-serif italic leading-relaxed relative z-10 mb-6 group-hover:text-cafe transition-colors">
                                    "{item.quote}"
                                </p>
                            </blockquote>

                            {/* Autor */}
                            <div className="mt-auto border-t border-caqui/20 pt-5 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-caqui/10 flex items-center justify-center border border-caqui/20">
                                    <FleurDeLis className="w-5 h-6 text-caqui-dark" />
                                </div>
                                <div>
                                    <p className="font-bold text-cafe font-serif text-lg">{item.author}</p>
                                    <div className="flex items-center gap-2 text-sm text-caqui-dark/80">
                                        <span>{item.role}</span>
                                        <span className="w-1 h-1 rounded-full bg-caqui/60"></span>
                                        <span>{item.years}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
