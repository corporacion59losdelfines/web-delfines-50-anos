import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FleurDeLis } from './Icons'

/* ── Logo con fallback ────────────────────────────────── */
function CardLogo({ src, alt }) {
    const [error, setError] = useState(false)
    if (error || !src) {
        return <FleurDeLis className="w-12 h-14 text-white/50" />
    }
    return (
        <img
            src={src}
            alt={alt}
            className="w-14 h-14 object-contain"
            onError={() => setError(true)}
        />
    )
}

/**
 * RamaCard — tarjeta de unidad para la landing page.
 * Enlaza a /ramas/[slug] vía React Router <Link>.
 * @param {{ rama: import('../data/ramas').RamaData }} props
 */
export default function RamaCard({ rama }) {
    const isApoyo = rama.tipo === 'apoyo'

    return (
        <div className={`
            group flex flex-col rounded-2xl border-2 overflow-hidden shadow-sm
            hover:shadow-xl hover:-translate-y-1 transition-all duration-300
            bg-gradient-to-br ${rama.color.cardGradient} ${rama.color.border}
        `}>
            {/* Header con logo */}
            <div className="bg-cafe p-5 relative overflow-hidden">
                {/* Fleur de lis decorativa */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
                    <FleurDeLis className="w-12 h-14 text-white" />
                </div>

                <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                        {/* Logo o emoji de fallback */}
                        <div className="w-14 h-14 flex items-center justify-center">
                            <CardLogo src={rama.logo_url} alt={`Logo ${rama.nombre}`} />
                        </div>
                        <div>
                            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-0.5">
                                {isApoyo ? 'Apoyo' : 'Rama'}
                            </p>
                            <h3 className="font-serif font-bold text-xl text-white leading-tight">
                                {rama.nombre}
                            </h3>
                        </div>
                    </div>
                    {/* Badge de edades */}
                    <span className={`${rama.color.badge} text-xs font-bold px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap`}>
                        {rama.edades}
                    </span>
                </div>
            </div>

            {/* Cuerpo */}
            <div className="p-5 flex-1 flex flex-col">
                <p className="text-cafe/75 text-sm leading-relaxed mb-4 flex-1">
                    {rama.descripcion}
                </p>

                {/* Skills */}
                <div className="space-y-1.5 mb-5">
                    {rama.skills.map((skill, j) => (
                        <div key={j} className="flex items-center gap-2">
                            <div
                                className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                                style={{ backgroundColor: rama.color.accentHex }}
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3}
                                    className="w-2.5 h-2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <span className="text-cafe text-xs font-medium">{skill}</span>
                        </div>
                    ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col gap-2">
                    <Link
                        to={`/ramas/${rama.slug}`}
                        className="block w-full text-center font-semibold py-2.5 rounded-xl text-sm
                                   transition-all duration-300 hover:scale-[1.02] text-white shadow-sm"
                        style={{ backgroundColor: rama.color.accentHex }}
                    >
                        Conocer la {rama.nombre} →
                    </Link>
                    <a
                        href={`https://wa.me/573150451770?text=Hola%2C%20me%20gustar%C3%ADa%20inscribirme%20en%20la%20${encodeURIComponent(rama.nombre)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-cafe text-white font-semibold py-2 rounded-xl
                                   hover:bg-cafe-light transition-all duration-300 text-xs"
                    >
                        Inscribirse por WhatsApp
                    </a>
                </div>
            </div>
        </div>
    )
}
