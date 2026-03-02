import { FleurDeLis, BookIcon } from './Icons'

export default function BadenPowellSection() {
    return (
        <section id="inspiracion" className="py-20 md:py-28 relative overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #fdf8f0 0%, #ede5d4 40%, #f5efe4 100%)' }}>

            {/* Textura pergamino */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, #4B3621 0px, #4B3621 1px, transparent 1px, transparent 28px), repeating-linear-gradient(90deg, #4B3621 0px, #4B3621 1px, transparent 1px, transparent 28px)',
            }} />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Encabezado */}
                <div className="text-center mb-14 animate-on-scroll">
                    <p className="text-caqui-dark font-serif italic text-lg mb-2">El padre del escultismo mundial</p>
                    <h2 className="section-title mb-4">Nuestra Inspiración</h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-16 bg-caqui" />
                        <FleurDeLis className="w-6 h-7 text-caqui" />
                        <div className="h-px w-16 bg-caqui" />
                    </div>
                </div>

                {/* Pergamino principal */}
                <div className="animate-on-scroll">
                    <div className="relative bg-[#fdf6e3] rounded-3xl shadow-2xl overflow-hidden border border-caqui/30"
                        style={{ boxShadow: '0 20px 60px rgba(75,54,33,0.15), inset 0 0 60px rgba(194,178,128,0.1)' }}>

                        {/* Bordes de pergamino */}
                        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-caqui/40 via-transparent to-caqui/40" />
                        <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-caqui/40 via-transparent to-caqui/40" />
                        <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-b from-caqui/40 via-transparent to-caqui/40" />
                        <div className="absolute top-0 bottom-0 right-0 w-3 bg-gradient-to-b from-caqui/40 via-transparent to-caqui/40" />

                        <div className="p-8 md:p-12 lg:p-16">
                            <div className="grid md:grid-cols-2 gap-10 items-center">

                                {/* Imagen de Baden-Powell */}
                                <div className="animate-on-scroll-left flex flex-col items-center">
                                    <div className="relative">
                                        {/* Marco de pergamino para la imagen */}
                                        <div className="absolute -inset-3 bg-gradient-to-br from-caqui/30 to-cafe/20 rounded-2xl" />
                                        <div className="absolute -inset-1.5 bg-[#fdf6e3] rounded-xl" />
                                        <img
                                            src="/baden-powell.png"
                                            alt="Robert Baden-Powell, Fundador del Movimiento Scout"
                                            className="relative w-52 h-64 md:w-64 md:h-80 object-cover rounded-xl shadow-lg"
                                            style={{ filter: 'sepia(20%) contrast(1.05)' }}
                                            onError={(e) => {
                                                e.target.style.display = 'none'
                                                e.target.nextSibling.style.display = 'flex'
                                            }}
                                        />
                                        {/* Fallback si no hay imagen */}
                                        <div className="hidden w-52 h-64 md:w-64 md:h-80 items-center justify-center bg-caqui/20 rounded-xl border-2 border-caqui/30">
                                            <div className="text-center p-6">
                                                <FleurDeLis className="w-16 h-20 text-cafe mx-auto mb-3 opacity-50" />
                                                <p className="font-serif text-cafe/60 text-sm italic">Robert Baden-Powell<br />1857 – 1941</p>
                                            </div>
                                        </div>

                                        {/* Decoración esquinas */}
                                        <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-caqui rounded-tl-lg" />
                                        <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-caqui rounded-tr-lg" />
                                        <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-caqui rounded-bl-lg" />
                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-caqui rounded-br-lg" />
                                    </div>

                                    {/* Nombre debajo */}
                                    <div className="mt-5 text-center">
                                        <p className="font-serif font-bold text-xl text-cafe">Robert Stephenson Smyth</p>
                                        <p className="font-serif font-black text-2xl text-cafe">Baden-Powell</p>
                                        <p className="text-caqui-dark text-sm mt-1 font-serif italic">1857 – 1941</p>
                                        <p className="text-cafe/60 text-xs mt-1">1er Barón de Gilwell</p>
                                    </div>
                                </div>

                                {/* Contenido textual */}
                                <div className="animate-on-scroll-right">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 bg-caqui/20 rounded-lg text-cafe">
                                            <BookIcon />
                                        </div>
                                        <h3 className="font-serif font-bold text-2xl md:text-3xl text-cafe">
                                            El Padre del Escultismo
                                        </h3>
                                    </div>

                                    <div className="space-y-4 text-cafe/80 leading-relaxed">
                                        <p>
                                            <strong className="text-cafe">Robert Baden-Powell</strong> fue un oficial del ejército
                                            británico cuya experiencia en la Guerra de los Boers lo llevó a crear un método educativo
                                            revolucionario. En <strong>1907</strong>, organizó el primer campamento scout en la Isla
                                            de Brownsea, Inglaterra, reuniendo a 20 jóvenes de distintas clases sociales.
                                        </p>
                                        <p>
                                            En <strong>1908</strong> publicó <em>"Scouting for Boys"</em>, un manual que se convertiría
                                            en uno de los libros más vendidos del siglo XX. Su visión: formar ciudadanos del mundo
                                            capaces de servir a su comunidad con carácter, habilidad y valores.
                                        </p>
                                        <p>
                                            Hoy, más de <strong>57 millones de scouts en 172 países</strong> siguen sus enseñanzas.
                                            El Grupo Scout 59 Los Delfines es orgulloso heredero de ese legado en el corazón de Medellín.
                                        </p>
                                    </div>

                                    {/* Cita principal */}
                                    <div className="mt-8 relative">
                                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-caqui to-cafe rounded-full" />
                                        <div className="pl-6">
                                            <p className="text-6xl font-serif text-caqui/30 leading-none mb-2">"</p>
                                            <blockquote className="font-serif text-lg md:text-xl text-cafe italic font-semibold leading-relaxed -mt-6">
                                                Deja el mundo mejor de como lo encontraste.
                                            </blockquote>
                                            <p className="text-caqui-dark text-sm mt-3 font-semibold not-italic">— Robert Baden-Powell</p>
                                        </div>
                                    </div>

                                    {/* Enseñanzas clave */}
                                    <div className="mt-8 grid grid-cols-2 gap-3">
                                        {[
                                            { icon: '🌿', text: 'Amor por la naturaleza' },
                                            { icon: '🤝', text: 'Servicio al prójimo' },
                                            { icon: '⚜️', text: 'Carácter e integridad' },
                                            { icon: '🌍', text: 'Ciudadanía mundial' },
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 bg-caqui/15 rounded-xl p-3">
                                                <span className="text-xl">{item.icon}</span>
                                                <span className="text-cafe text-sm font-medium">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dato histórico */}
                <div className="mt-10 text-center animate-on-scroll">
                    <p className="font-serif italic text-cafe/60 text-sm max-w-lg mx-auto">
                        "La diferencia entre un Roverscout y un hombre ordinario es que el scout sabe qué hacer con su tiempo libre."
                        <br /><span className="text-caqui-dark font-semibold not-italic">— Baden-Powell</span>
                    </p>
                </div>
            </div>
        </section>
    )
}
