/**
 * @file ramas.js
 * @description Fuente de verdad única para todas las unidades del Grupo Scout 59 Los Delfines.
 * Cada objeto contiene: slug, nombre, edades, tipo, lema, logo_url, descripcion,
 * mistica_html, oracion, principios, skills y maximo_adelanto.
 *
 * Para agregar una nueva unidad basta con añadir un objeto a este array;
 * el sistema de rutas dinámicas lo detectará automáticamente.
 */

/** Promesa Scout oficial del Grupo 59 Los Delfines */
export const PROMESA_SCOUT =
    'Por mi honor y con la gracia de Dios, prometo hacer cuanto de mi dependa ' +
    'para cumplir mis deberes para con Dios y la Patria, ayudar al prójimo en ' +
    'toda circunstancia y cumplir fielmente la Ley Scout.'

/** ─────────────────────────────────────────────────────────
 *  RAMAS DE PROGRESIÓN  (ordenadas por edad)
 *  ───────────────────────────────────────────────────────── */
const ramasProgresion = [
    {
        slug: 'familia',
        nombre: 'Familia',
        edades: '5 – 6 años',
        tipo: 'progresion',
        emoji: '🐣',
        lema: 'Compartir.',
        color: {
            accentHex: '#d97706',
            cardGradient: 'from-amber-50 to-yellow-50',
            border: 'border-yellow-400',
            badge: 'bg-yellow-100 text-yellow-800',
            heroFrom: '#fffbeb',
            heroTo: '#fef3c7',
        },
        logo_url: '/images/Logos/familia.png.png',
        descripcion:
            'El descubrimiento del mundo a través del juego y la integración familiar.',
        mistica_html: `
            <p>El descubrimiento del mundo a través del juego y la integración familiar.</p>
            <p>Es el primer paso en la naturaleza, donde la socialización temprana y la imaginación construyen las bases del carácter scout.</p>
        `,
        oracion:
            'Dios mío, hazme bueno, fuerte y sano. Que aprenda a compartir, a cuidar y a querer a quienes me rodean. Amén.',
        principios: ['Amor familiar', 'Juego y creatividad', 'Primeros valores', 'Descubrimiento del entorno'],
        skills: ['Juego en equipo', 'Primeros valores', 'Amor por la naturaleza'],
        maximo_adelanto: 'Lobato Semilla',
    },
    {
        slug: 'manada',
        nombre: 'Manada',
        edades: '7 – 9 años',
        tipo: 'progresion',
        emoji: '🐺',
        lema: 'Siempre lo Mejor.',
        color: {
            accentHex: '#059669',
            cardGradient: 'from-green-50 to-emerald-50',
            border: 'border-green-400',
            badge: 'bg-green-100 text-green-800',
            heroFrom: '#ecfdf5',
            heroTo: '#d1fae5',
        },
        logo_url: '/images/Logos/manada.png.png',
        descripcion:
            'Los lobatos aprenden bajo la guía de los Viejos Lobos formando el Pueblo Libre.',
        mistica_html: `
            <p>Basado estrictamente en "El Libro de las Tierras Vírgenes". Los lobatos aprenden bajo la guía de los Viejos Lobos (Akela, Baloo, Bagheera).</p>
            <p>Representa el Pueblo Libre, donde se vive la Ley de la Manada: El Lobato escucha y obedece al Viejo Lobo, el Lobato no se escucha a sí mismo.</p>
        `,
        oracion: '¡Haremos lo mejor! ¡Dib, Dib, Dib… Dob, Dob, Dob!',
        principios: ['Obediencia', 'Lealtad a la manada', 'Trabajo en equipo', 'Amor por la naturaleza'],
        skills: ['Trabajo en equipo', 'Primeros auxilios básicos', 'Orientación'],
        maximo_adelanto: 'Gran Lobato',
    },
    {
        slug: 'aldea',
        nombre: 'Aldea',
        edades: '10 – 11 años',
        tipo: 'progresion',
        emoji: '🏡',
        lema: 'Construir.',
        color: {
            accentHex: '#2563eb',
            cardGradient: 'from-blue-50 to-sky-50',
            border: 'border-blue-400',
            badge: 'bg-blue-100 text-blue-800',
            heroFrom: '#eff6ff',
            heroTo: '#dbeafe',
        },
        logo_url: '/images/Logos/aldea.png.png',
        descripcion:
            'La transición entre la fantasía de la selva y la gran aventura de la tropa.',
        mistica_html: `
            <p>La transición entre la fantasía de la selva y la aventura de la tropa.</p>
            <p>Es una etapa de habilidades prácticas, donde los preadolescentes aprenden a valerse por sí mismos a través de especialidades e insignias de acción.</p>
        `,
        oracion:
            'Señor, guía mis pasos como guías las estrellas. Ilumina mi camino con la luz del servicio y dame la fortaleza para construir un mundo mejor. Amén.',
        principios: ['Construcción personal', 'Servicio a la comunidad', 'Amistad duradera', 'Habilidades prácticas'],
        skills: ['Campismo', 'Servicio comunitario', 'Liderazgo inicial'],
        maximo_adelanto: 'Scout Forestal',
    },
    {
        slug: 'tropa',
        nombre: 'Tropa',
        edades: '12 – 14 años',
        tipo: 'progresion',
        emoji: '⛺',
        lema: 'Siempre Listos.',
        color: {
            accentHex: '#ea580c',
            cardGradient: 'from-orange-50 to-amber-50',
            border: 'border-orange-400',
            badge: 'bg-orange-100 text-orange-800',
            heroFrom: '#fff7ed',
            heroTo: '#ffedd5',
        },
        logo_url: '/images/Logos/tropa.png.jpg',
        descripcion:
            'La gran aventura al aire libre y el aprendizaje a través del Sistema de Patrullas.',
        mistica_html: `
            <p>La gran aventura al aire libre y el Sistema de Patrullas.</p>
            <p>Aquí forjan su autonomía, liderazgo y lealtad trabajando en equipo. El campamento, la exploración y la técnica scout son sus herramientas principales.</p>
        `,
        oracion: PROMESA_SCOUT,
        principios: ['Honor y honestidad', 'Servicio sin fronteras', 'Aventura y superación', 'Ciudadanía activa'],
        skills: ['Expediciones', 'Proyectos de servicio', 'Primeros auxilios avanzados'],
        maximo_adelanto: 'Scout de Honor',
    },
    {
        slug: 'sociedad',
        nombre: 'Sociedad',
        edades: '15 – 17 años',
        tipo: 'progresion',
        emoji: '🏔️',
        lema: 'Siempre Adelante.',
        color: {
            accentHex: '#7c3aed',
            cardGradient: 'from-purple-50 to-violet-50',
            border: 'border-purple-400',
            badge: 'bg-purple-100 text-purple-800',
            heroFrom: '#faf5ff',
            heroTo: '#ede9fe',
        },
        // Nombre real del archivo con tilde: sociedad-fénix.png.png
        logo_url: '/images/Logos/sociedad-f%C3%A9nix.png.png',
        descripcion:
            'El descubrimiento de la propia identidad proyectando impacto en la comunidad.',
        mistica_html: `
            <p>El descubrimiento de la propia identidad y la vocación.</p>
            <p>Los jóvenes asumen retos mayores, planifican sus propias empresas y comienzan a proyectar su impacto en la comunidad mediante la acción y el servicio colectivo.</p>
        `,
        oracion:
            'Señor, concédenos la sabiduría para guiar, la valentía para actuar y la humildad para servir. Que nuestros proyectos sean semilla de un mundo más justo. Amén.',
        principios: ['Liderazgo transformador', 'Responsabilidad social', 'Proyección comunitaria', 'Autonomía y criterio'],
        skills: ['Liderazgo avanzado', 'Proyectos sociales', 'Habilidades técnicas'],
        maximo_adelanto: 'Pionero de Plata',
    },
    {
        slug: 'clan',
        nombre: 'Clan',
        edades: '18 – 21 años',
        tipo: 'progresion',
        emoji: '🦅',
        lema: 'Servir.',
        color: {
            accentHex: '#be123c',
            cardGradient: 'from-rose-50 to-red-50',
            border: 'border-rose-400',
            badge: 'bg-rose-100 text-rose-800',
            heroFrom: '#fff1f2',
            heroTo: '#ffe4e6',
        },
        logo_url: '/images/Logos/clan.png.png',
        descripcion:
            'La etapa de consolidación del proyecto de vida y servicio desinteresado.',
        mistica_html: `
            <p>La etapa de consolidación del proyecto de vida. Remando su propia canoa, los Rovers asumen un compromiso maduro con la sociedad.</p>
            <p>Su ruta está marcada por el servicio desinteresado y la hermandad scout mundial.</p>
        `,
        oracion:
            'Rover, más que un nombre es un destino: el de servir. Te pido, Señor, que me mantengas fiel a mi Promesa y me des la fuerza para ser testimonio vivo del escultismo. Amén.',
        principios: ['Servicio global', 'Sabiduría y madurez', 'Ciudadanía mundial', 'Testimonio de vida'],
        skills: ['Servicio avanzado', 'Formación de líderes', 'Ciudadanía global'],
        maximo_adelanto: 'Rover de Plata',
    },
]

/** ─────────────────────────────────────────────────────────
 *  UNIDADES DE APOYO Y GOBIERNO
 *  ───────────────────────────────────────────────────────── */
const unidadesApoyo = [
    {
        slug: 'jefatura',
        nombre: 'Jefatura',
        edades: 'Mando General',
        tipo: 'apoyo',
        emoji: '⚜️',
        lema: 'El motor estratégico.',
        color: {
            accentHex: '#92400e',
            cardGradient: 'from-stone-50 to-amber-50',
            border: 'border-amber-700',
            badge: 'bg-amber-100 text-amber-900',
            heroFrom: '#fdf8f0',
            heroTo: '#fef3c7',
        },
        logo_url: '/images/Logos/jefatura.png.png',
        descripcion:
            'Dirigentes comprometidos con la formación del carácter de las nuevas generaciones.',
        mistica_html: `
            <p>Dirigentes comprometidos con la formación del carácter, aplicando el método scout para guiar a las nuevas generaciones de la Corporación 59 Los Delfines.</p>
        `,
        oracion:
            'Señor, danos dirigentes que amen a sus jóvenes, que sean ejemplo vivo de la Ley Scout y que tengan la sabiduría para guiar sin imponer, y la fortaleza para exigir con amor. Amén.',
        principios: ['Formación integral', 'Liderazgo de servicio', 'Excelencia educativa', 'Unidad y coherencia'],
        skills: ['Dirección educativa', 'Formación de líderes', 'Gestión del grupo'],
        maximo_adelanto: null,
    },
    {
        slug: 'consejo-padres',
        nombre: 'Consejo de Padres',
        edades: 'Familia y Apoyo',
        tipo: 'apoyo',
        emoji: '👨‍👩‍👧‍👦',
        lema: 'El pilar fundamental.',
        color: {
            accentHex: '#0d9488',
            cardGradient: 'from-teal-50 to-cyan-50',
            border: 'border-teal-400',
            badge: 'bg-teal-100 text-teal-800',
            heroFrom: '#f0fdfa',
            heroTo: '#ccfbf1',
        },
        logo_url: '/images/Logos/consejo-padres.png.png',
        descripcion:
            'Familias que respaldan y acompañan la labor educativa del grupo scout.',
        mistica_html: `
            <p>Familias que respaldan, financian y acompañan la labor educativa del grupo, garantizando un entorno seguro y próspero para el desarrollo de las actividades.</p>
        `,
        oracion:
            'Señor, bendice a las familias que nos apoyan. Que su generosidad sea recompensada viendo a sus hijos crecer en valores, en carácter y en amor al prójimo. Amén.',
        principios: ['Apoyo familiar', 'Colaboración activa', 'Compromiso comunitario', 'Puente hogar-grupo'],
        skills: ['Apoyo logístico', 'Gestión de recursos', 'Articulación familiar'],
        maximo_adelanto: null,
    },
]

/** Array unificado (progresión + apoyo) */
export const ramas = [...ramasProgresion, ...unidadesApoyo]

/** Subsets exportados para la landing */
export const ramasDeProgresion = ramasProgresion
export const ramasDeApoyo = unidadesApoyo

/**
 * Busca una rama por su slug.
 * @param {string} slug
 * @returns {object|null}
 */
export function getRamaBySlug(slug) {
    return ramas.find((r) => r.slug === slug) ?? null
}
