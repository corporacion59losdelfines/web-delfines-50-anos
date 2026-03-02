import { FleurDeLis, FacebookIcon, MapPinIcon, HeartIcon } from './Icons'

const PhoneIcon = ({ className = 'w-4 h-4' }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.71 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.91.35 1.85.58 2.81.71a2 2 0 0 1 1.72 2.02z" />
    </svg>
)

const MailIcon = ({ className = 'w-4 h-4' }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
)

const BuildingIcon = ({ className = 'w-4 h-4' }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
)

export default function Footer() {
    return (
        <footer className="bg-cafe-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

                    {/* Identidad con logo */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/logo-oficial.jpg"
                                alt="Logo Corporación 59 Los Delfines"
                                className="h-16 w-16 rounded-full object-contain border-2 border-caqui/50 shadow-md bg-white p-0.5"
                                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                            />
                            <FleurDeLis className="w-10 h-12 text-caqui hidden" />
                        </div>
                        <p className="font-serif font-bold text-lg text-white leading-tight">Corporación 59 Los Delfines</p>
                        <p className="text-caqui/80 text-xs font-bold tracking-widest mb-2">CS59LD</p>
                        <p className="text-caqui text-base font-black italic font-serif leading-snug tracking-wide mb-3 drop-shadow-sm">
                            "LA EXIGENCIA MARCA<br />LA EXCELENCIA"
                        </p>
                        <p className="text-white/40 text-xs">Grupo Scout · Desde 1976</p>
                    </div>

                    {/* Navegación */}
                    <div>
                        <p className="font-serif font-bold text-caqui mb-4 text-sm uppercase tracking-wide">Navegación</p>
                        <ul className="space-y-2">
                            {[
                                { href: '#inicio', label: 'Inicio' },
                                { href: '#historia', label: 'Nuestra Historia' },
                                { href: '#inspiracion', label: 'Nuestra Inspiración' },
                                { href: '#valores', label: 'Valores Scout' },
                                { href: '#inscripciones', label: 'Inscripciones 2026' },
                                { href: '#galeria', label: 'Galería' },
                                { href: '#redes', label: 'Comunidad' },
                            ].map((l) => (
                                <li key={l.href}>
                                    <a href={l.href} className="text-white/60 hover:text-caqui transition-colors text-sm">{l.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ramas */}
                    <div>
                        <p className="font-serif font-bold text-caqui mb-4 text-sm uppercase tracking-wide">Ramas 2026</p>
                        <ul className="space-y-2">
                            {[
                                { name: 'Familia', ages: '6–8 años', emoji: '🐣' },
                                { name: 'Manada', ages: '8–10 años', emoji: '🐺' },
                                { name: 'Aldea', ages: '10–12 años', emoji: '🏡' },
                                { name: 'Tropa', ages: '12–15 años', emoji: '⛺' },
                                { name: 'Pioneros', ages: '15–18 años', emoji: '🏔️' },
                                { name: 'Clan', ages: '18–20 años', emoji: '🦅' },
                            ].map((r) => (
                                <li key={r.name} className="flex items-center gap-2 text-sm">
                                    <span className="text-base">{r.emoji}</span>
                                    <span className="font-medium text-white/80">{r.name}</span>
                                    <span className="text-white/40 text-xs">{r.ages}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Datos legales y contacto */}
                    <div>
                        <p className="font-serif font-bold text-caqui mb-4 text-sm uppercase tracking-wide">Información Legal</p>
                        <div className="space-y-3">
                            {/* NIT */}
                            <div className="bg-white/8 border border-white/10 rounded-xl p-3">
                                <p className="text-caqui text-xs font-bold tracking-wider mb-0.5">NIT</p>
                                <p className="text-white font-mono text-sm font-semibold">901855028-3</p>
                            </div>

                            {/* Dirección */}
                            <div className="flex items-start gap-2 text-white/65 text-sm">
                                <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-caqui/70" />
                                <p>Carrera 49 #100-41<br />Medellín, Antioquia</p>
                            </div>

                            {/* Teléfono */}
                            <a href="tel:+573150451770"
                                className="flex items-center gap-2 text-white/65 hover:text-caqui transition-colors text-sm group">
                                <PhoneIcon className="w-4 h-4 text-caqui/70 group-hover:text-caqui" />
                                315 045 1770
                            </a>

                            {/* Email */}
                            <a href="mailto:jefedegrupo59@gmail.com"
                                className="flex items-center gap-2 text-white/65 hover:text-caqui transition-colors text-sm group break-all">
                                <MailIcon className="w-4 h-4 flex-shrink-0 text-caqui/70 group-hover:text-caqui" />
                                jefedegrupo59@gmail.com
                            </a>

                            {/* Facebook */}
                            <a href="https://www.facebook.com/Scout59LosDelfines" target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 text-white/65 hover:text-caqui transition-colors text-sm group">
                                <FacebookIcon className="w-4 h-4 text-caqui/70 group-hover:text-caqui" />
                                Scout59LosDelfines
                            </a>
                        </div>
                    </div>
                </div>

                {/* Separador */}
                <div className="border-t border-white/10 pt-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs">
                        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
                            <p>© 2026 Corporación 59 Los Delfines · CS59LD</p>
                            <span className="hidden sm:block">·</span>
                            <p>NIT 901855028-3</p>
                            <span className="hidden sm:block">·</span>
                            <p>Todos los derechos reservados.</p>
                        </div>
                        <p className="flex items-center gap-1 flex-shrink-0">
                            Hecho con <HeartIcon className="w-3 h-3 text-rose-400/70" /> para nuestra comunidad scout
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
