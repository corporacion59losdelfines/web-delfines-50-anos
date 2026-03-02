import { useState, useEffect } from 'react'
import { FleurDeLis } from './Icons'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '#inicio', label: 'Inicio' },
        { href: '#historia', label: 'Historia' },
        { href: '#inspiracion', label: 'Fundador' },
        { href: '#inscripciones', label: 'Inscripciones' },
        { href: '#galeria', label: 'Galería' },
        { href: '#redes', label: 'Comunidad' },
    ]

    const waLink = "https://wa.me/573150451770?text=Hola%2C%20quisiera%20solicitar%20informaci%C3%B3n."

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/96 backdrop-blur-md shadow-lg border-b border-caqui/20' : 'bg-white/80 backdrop-blur-sm'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">

                    {/* Logo */}
                    <a href="#inicio" className="flex items-center gap-3 group">
                        <img
                            src="/logo-oficial.jpg"
                            alt="Logo Corporación 59 Los Delfines"
                            className="h-14 w-14 md:h-16 md:w-16 rounded-full object-contain border-2 border-caqui/40 shadow-sm group-hover:border-cafe transition-all duration-300 bg-white"
                            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                        />
                        <FleurDeLis className="w-9 h-11 text-cafe hidden" />
                        <div>
                            <p className="font-serif font-black text-base md:text-lg text-cafe leading-tight">59 Los Delfines</p>
                            <p className="text-sm text-caqui-dark font-serif font-bold italic tracking-wide mt-0.5">La exigencia marca la excelencia</p>
                        </div>
                    </a>

                    {/* Desktop nav */}
                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-cafe/80 hover:text-cafe transition-all duration-200 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-caqui transition-all duration-300 group-hover:w-full rounded-full" />
                            </a>
                        ))}
                        <a
                            href={waLink}
                            target="_blank" rel="noopener noreferrer"
                            className="btn-primary text-sm py-2 px-5 flex items-center gap-2"
                        >
                            Inscríbete
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden p-2 text-cafe"
                        aria-label="Menú"
                    >
                        <div className="w-6 flex flex-col gap-1.5">
                            <span className={`block h-0.5 bg-cafe transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`block h-0.5 bg-cafe transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                            <span className={`block h-0.5 bg-cafe transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`lg:hidden bg-white/98 backdrop-blur-md border-t border-caqui/20 transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="px-6 py-4 flex flex-col gap-3">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                            className="text-cafe font-medium hover:text-caqui-dark transition-colors py-1 border-b border-caqui/10">
                            {link.label}
                        </a>
                    ))}
                    <a href={waLink} target="_blank" rel="noopener noreferrer"
                        className="btn-primary text-center text-sm mt-3 flex items-center justify-center gap-2">
                        Inscríbete ahora
                    </a>
                </div>
            </div>
        </nav>
    )
}
