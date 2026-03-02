import { FleurDeLis, FacebookIcon } from './Icons'

export default function RedesSection() {
    return (
        <section id="redes" className="py-20 md:py-28 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-caqui/5 via-white to-cafe/5 pointer-events-none" />
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

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

                {/* Tarjeta Facebook */}
                <div className="animate-on-scroll max-w-lg mx-auto">
                    <a href="https://www.facebook.com/Scout59LosDelfines" target="_blank" rel="noopener noreferrer" className="group block">
                        <div className="relative bg-white rounded-3xl shadow-xl border border-caqui/20 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <div className="bg-[#1877F2] p-8 relative overflow-hidden">
                                <div className="absolute inset-0 opacity-10">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="absolute rounded-full border-2 border-white"
                                            style={{ width: `${80 + i * 40}px`, height: `${80 + i * 40}px`, top: `${50 - i * 20}%`, right: `${-10 + i * 5}%` }} />
                                    ))}
                                </div>
                                <div className="relative z-10 flex items-center gap-4">
                                    <div className="bg-white rounded-2xl p-3 shadow-lg">
                                        <FacebookIcon className="w-9 h-9 text-[#1877F2]" />
                                    </div>
                                    <div>
                                        <p className="text-white/80 text-sm">Síguenos en</p>
                                        <p className="text-white font-bold text-2xl">Facebook</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-cafe rounded-full flex items-center justify-center">
                                        <FleurDeLis className="w-6 h-7 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-cafe">Grupo Scout 59 Los Delfines</p>
                                        <p className="text-sm text-cafe/50">@Scout59LosDelfines</p>
                                    </div>
                                    <div className="ml-auto bg-[#1877F2] text-white text-xs font-bold px-3 py-1.5 rounded-full">Seguir</div>
                                </div>
                                <p className="text-cafe/70 text-sm leading-relaxed mb-5">
                                    🏕 Campamentos · Servicios · Aventuras · Noticias del Grupo Scout 59 Los Delfines desde el barrio Santa Cruz. ¡50 años y contando!
                                </p>
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {['#Scout59', '#LosDelfines', '#Medellín', '#BodasDeOro', '#GrupoScout'].map((tag) => (
                                        <span key={tag} className="text-[#1877F2] text-xs font-medium">{tag}</span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between pt-4 border-t border-caqui/20">
                                    <p className="text-xs text-cafe/40">facebook.com/Scout59LosDelfines</p>
                                    <div className="flex items-center gap-1 text-cafe/60 text-sm group-hover:text-cafe transition-colors font-medium">
                                        Visitar
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="text-center mt-10 animate-on-scroll">
                    <p className="text-cafe/50 text-sm mb-4">¿Quieres que tu hijo/a forme parte del Grupo Scout 59 Los Delfines?</p>
                    <a href="https://wa.me/573150451770?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20el%20Grupo%20Scout." target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-8 py-3 rounded-full hover:bg-[#1ebe5d] transition-all duration-300 hover:scale-105 shadow-md">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                        </svg>
                        Solicitar información por WhatsApp
                    </a>
                </div>
            </div>
        </section>
    )
}
