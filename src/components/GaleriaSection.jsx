import { CameraIcon, FleurDeLis } from './Icons'

const galeriaItems = [
    {
        src: '/galeria/foto1.jpg',
        alt: 'Campamento nocturno – Scouts alrededor del fuego',
        label: 'Campamento',
        emoji: '🏕️',
        className: 'md:col-span-2 md:row-span-2', // Destacada
    },
    {
        src: '/galeria/foto2.jpg',
        alt: 'Servicio comunitario en el barrio Santa Cruz',
        label: 'Servicio social',
        emoji: '🌱',
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        src: '/galeria/foto3.jpg',
        alt: 'Senderismo por los cerros de Antioquia',
        label: 'Aventura',
        emoji: '🥾',
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        src: '/galeria/foto4.jpg',
        alt: 'Formación de líderes – Taller de habilidades',
        label: 'Liderazgo juvenil',
        emoji: '⭐',
        className: 'md:col-span-1 md:row-span-2', // Vertical
    },
    {
        src: '/galeria/foto5.jpg',
        alt: 'Ceremonia scout – Promesa y valores',
        label: 'Valores y principios',
        emoji: '⚜️',
        className: 'md:col-span-2 md:row-span-1', // Horizontal ancha
    },
    {
        src: '/galeria/foto6.jpg',
        alt: 'Comunidad – Grupo Scout 59 Los Delfines',
        label: 'Comunidad 59',
        emoji: '🤝',
        className: 'md:col-span-1 md:row-span-1',
    },
]

export default function GaleriaSection() {
    return (
        <section id="galeria" className="py-20 md:py-28 bg-white relative overflow-hidden">
            {/* Fondo sutil */}
            <div className="absolute inset-0 bg-gradient-to-br from-caqui/5 via-white to-cafe/5 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Encabezado */}
                <div className="text-center mb-12 animate-on-scroll">
                    <div className="inline-flex items-center gap-2 mb-3 text-caqui-dark">
                        <CameraIcon className="w-5 h-5 flex-shrink-0" />
                        <p className="font-serif italic text-lg">Momentos que perduran</p>
                    </div>
                    <h2 className="section-title mb-4">Galería de Actividades</h2>
                    <div className="flex items-center justify-center gap-4 mb-5">
                        <div className="h-px w-16 bg-caqui/60" />
                        <FleurDeLis className="w-6 h-7 text-caqui/80" />
                        <div className="h-px w-16 bg-caqui/60" />
                    </div>
                    <p className="text-cafe/65 max-w-xl mx-auto">
                        Cada foto es una historia de crecimiento, amistad y servicio.
                        Así vivimos el escultismo en el Grupo Scout 59 Los Delfines.
                    </p>
                </div>

                {/* Cuadrícula (Grid) Moderna */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px] grid-flow-row-dense">
                    {galeriaItems.map((item, i) => (
                        <div
                            key={i}
                            className={`animate-on-scroll group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-cafe/5 ${item.className}`}
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            {/* Imagen con zoom suave */}
                            <img
                                src={item.src}
                                alt={item.alt}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            {/* Overlay oscuro en hover para destacar el texto */}
                            <div className="absolute inset-0 bg-gradient-to-t from-cafe/90 via-cafe/20 to-transparent opacity-60 md:opacity-0 group-hover:opacity-80 transition-opacity duration-300" />

                            {/* Info de la foto */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex items-center gap-2.5">
                                    <span className="text-2xl bg-white/20 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center shadow-lg border border-white/30">
                                        {item.emoji}
                                    </span>
                                    <p className="font-serif font-bold text-white text-lg tracking-wide drop-shadow-md opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Categorías Badge */}
                <div className="flex flex-wrap justify-center gap-3 mt-12 animate-on-scroll">
                    {['Campismo', 'Servicio', 'Aventura', 'Liderazgo', 'Valores', 'Comunidad'].map((cat) => (
                        <span key={cat} className="bg-white text-cafe font-medium text-sm px-5 py-2 rounded-full border border-caqui/30 shadow-sm cursor-default hover:border-caqui hover:bg-caqui/5 transition-colors">
                            {cat}
                        </span>
                    ))}
                </div>

            </div>
        </section>
    )
}
