/**
 * @file ramas.js
 * @description Fuente de verdad única para todas las unidades del Grupo Scout 59 Los Delfines.
 *
 * ESQUEMA POR OBJETO (campos opcionales marcados con ?)
 * ──────────────────────────────────────────────────────
 *  slug              {string}     – identificador de ruta
 *  nombre            {string}     – nombre de la unidad
 *  unidad_nombre     {string}     – nombre oficial de la Unidad
 *  rama_nombre       {string}     – nombre oficial de la Rama
 *  edades            {string}     – rango de edad
 *  tipo              {string}     – 'progresion' | 'apoyo'
 *  emoji             {string}
 *  lema              {string}
 *  color             {object}     – tokens de color
 *  logo_url          {string}
 *  descripcion       {string}
 *  mistica_html      {string}     – HTML enriquecido de la mística
 *  oracion           {string}
 *  principios        {string[]}
 *  skills            {string[]}
 *  maximo_adelanto   {string|null}
 *
 *  — Campos pedagógicos (ramas de progresión) —
 *  promesa           {string|null}
 *  ley               {string|null}
 *  filosofia         {string|null}  – filosofía educativa general de la etapa
 *  filosofia_pedagogica {string|null} – enfoque metodológico detallado
 *  el_rol_familiar   {string|null}  – texto orientado a padres
 *  importancia_edad  {string|null}
 *  aprendizajes      {string[]}     – competencias esperadas
 *  progresion        {string|null}  – resumen del sistema de insignias
 *  progresion_y_sendas {string|null} – descripción detallada de hitos de desarrollo
 *  recursos_oficiales {Array<{titulo, url_pdf, url_caratula}>} – documentos descargables
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
    /* ══════════════════════════════════════════════════════
     *  FAMILIA / CACHORROS  ·  5 – 6 años
     * ══════════════════════════════════════════════════════ */
    {
        slug: 'familia',
        nombre: 'Familia',
        unidad_nombre: 'Familia',
        rama_nombre: 'Cachorros',
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
            'El primer encuentro del niño con el mundo scout: un espacio seguro donde el juego, la naturaleza y la familia construyen la base del carácter.',
        mistica_html: `
            <p>En la Unidad Familia, el bosque se convierte en un aula sin paredes. A través del pensamiento mágico propio de la infancia temprana, los Cachorros comienzan a descubrir que el mundo es amplio, interesante y lleno de personas con quienes compartir.</p>
            <p>Este espacio no exige habilidades técnicas, sino algo más profundo: aprender a estar con otros, a esperar, a cuidar y a sonreír. La familia es el primer equipo.</p>
        `,
        oracion:
            'Dios mío, hazme bueno, fuerte y sano. Que aprenda a compartir, a cuidar y a querer a quienes me rodean. Amén.',
        principios: ['Amor familiar', 'Juego y creatividad', 'Primeros valores', 'Descubrimiento del entorno'],
        skills: ['Juego en equipo', 'Primeros valores', 'Amor por la naturaleza'],
        maximo_adelanto: 'Lobato Semilla',

        /* ── Identidad de la rama ── */
        promesa: 'Prometo amar a Dios y a mi familia, y compartir con los demás.',
        ley: 'El Cachorro es alegre, dice la verdad y comparte con su familia.',

        /* ── Filosofía educativa ── */
        filosofia:
            'El descubrimiento del mundo a través de la fantasía y el juego, cimentando la empatía y la seguridad emocional bajo el núcleo familiar.',
        filosofia_pedagogica:
            'A través del pensamiento mágico y el juego simbólico, canalizamos la energía del niño hacia la convivencia. Utilizamos "El Bosque" y la naturaleza como un entorno seguro para el descubrimiento.',

        /* ── Orientación a padres ── */
        el_rol_familiar:
            'En esta unidad, el adulto no es un espectador. Funciona como la "base segura" desde la cual el niño explora. El padre o madre se convierte en un participante activo, haciendo del escultismo una herramienta de crianza compartida.',

        /* ── Desarrollo evolutivo ── */
        importancia_edad:
            'A los 5-6 años, los niños requieren acompañamiento directo para hacer la transición entre el hogar y el mundo exterior, desarrollando su autonomía y motricidad básica.',
        aprendizajes: [
            'Autonomía básica',
            'Integración social temprana',
            'Respeto por la naturaleza',
            'El valor de Compartir',
        ],

        /* ── Progresión ── */
        progresion:
            'Etapas de descubrimiento personal e integración (Huellas), logrando insignias de adaptación, higiene y participación familiar.',
        progresion_y_sendas:
            'La progresión no busca habilidades complejas, sino hitos del desarrollo: psicomotricidad, hábitos de higiene, la capacidad de esperar turnos y la asimilación profunda del valor de compartir.',

        /* ── Recursos oficiales (múltiples) ── */
        recursos_oficiales: [
            {
                titulo: 'Manual de Cachorros Vol. 1',
                url_pdf: '/docs/manual-familia-vol1.pdf',
                url_caratula: '/images/portadas/portada-familia-vol1.jpg',
            },
            {
                titulo: 'Guía Metodológica Vol. 2',
                url_pdf: '/docs/manual-familia-vol2.pdf',
                url_caratula: '/images/portadas/portada-familia-vol2.jpg',
            },
        ],
    },

    /* ══════════════════════════════════════════════════════
     *  MANADA / LOBATOS  ·  7 – 9 años
     * ══════════════════════════════════════════════════════ */
    {
        slug: 'manada',
        nombre: 'Manada',
        unidad_nombre: 'Manada',
        rama_nombre: 'Lobatos',
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

        /* ── Identidad de la rama ── */
        promesa: 'Prometo hacer siempre lo mejor, para cumplir mis deberes para con Dios y la Patria, observar la Ley de la Manada y hacer una buena acción a alguien todos los días.',
        ley: 'El Lobato escucha y obedece al Viejo Lobo. El Lobato no se escucha a sí mismo.',

        /* ── Filosofía educativa ── */
        filosofia: 'Basada en El Libro de las Tierras Vírgenes, la Manada es el Pueblo Libre donde cada niño aprende a valerse por sí mismo respetando las leyes de la naturaleza.',
        filosofia_pedagogica: 'Inspirada en "El Libro de las Tierras Vírgenes", los niños integran el "Pueblo Libre". La selva es el escenario donde aprenden a valerse por sí mismos, respetando las leyes de la naturaleza y el trabajo en equipo.',

        /* ── Orientación al adulto ── */
        el_rol_familiar: null,
        el_rol_del_adulto: 'Los dirigentes son los "Viejos Lobos" (Akela, Baloo, Bagheera). Actúan como figuras de sabiduría y justicia, guiando a los niños no mediante la autoridad impuesta, sino a través del ejemplo y la confianza.',

        /* ── Desarrollo evolutivo ── */
        importancia_edad: 'Entre los 7 y 9 años, el niño busca pertenecer a un grupo de pares. La Manada canaliza esta necesidad, enseñándole a pensar en el "nosotros" antes que en el "yo" y otorgándole responsabilidades a su medida.',
        aprendizajes: ['Trabajo en equipo', 'Obediencia reflexiva', 'Servicio diario', 'Habilidades manuales'],

        /* ── Progresión ── */
        progresion: 'De Pata Tierna al Gran Lobato, cada insignia representa una presa cazada: hitos de cuidado personal, habilidades y servicio.',
        progresion_y_sendas: 'El camino desde "Pata Tierna" hasta el reconocimiento máximo. Las insignias representan presas cazadas: hitos en el cuidado personal, habilidades manuales, conocimiento cívico y servicio diario.',

        /* ── Recursos oficiales ── */
        recursos_oficiales: [
            {
                titulo: 'Manual de Dirigentes de Manada',
                url_pdf: '/docs/manual-manada-dirigentes.pdf',
                url_caratula: '/images/portadas/portada-manada-dirigentes.jpg',
            },
            {
                titulo: 'Especialidades para Lobatos',
                url_pdf: '/docs/manual-manada-especialidades.pdf',
                url_caratula: '/images/portadas/portada-manada-especialidades.jpg',
            },
        ],
    },

    /* ══════════════════════════════════════════════════════
     *  ALDEA / WEBELOS  ·  10 – 11 años
     * ══════════════════════════════════════════════════════ */
    {
        slug: 'aldea',
        nombre: 'Aldea',
        unidad_nombre: 'Aldea',
        rama_nombre: 'Webelos',
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
        promesa: null, ley: null, filosofia: null, filosofia_pedagogica: null,
        el_rol_familiar: null, importancia_edad: null, aprendizajes: [],
        progresion: null, progresion_y_sendas: null, recursos_oficiales: [],
    },

    /* ══════════════════════════════════════════════════════
     *  TROPA / SCOUTS  ·  12 – 14 años
     * ══════════════════════════════════════════════════════ */
    {
        slug: 'tropa',
        nombre: 'Tropa',
        unidad_nombre: 'Tropa',
        rama_nombre: 'Scouts',
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
        promesa: null, ley: null, filosofia: null, filosofia_pedagogica: null,
        el_rol_familiar: null, importancia_edad: null, aprendizajes: [],
        progresion: null, progresion_y_sendas: null, recursos_oficiales: [],
    },

    /* ══════════════════════════════════════════════════════
     *  SOCIEDAD / NÓMADAS  ·  15 – 17 años
     * ══════════════════════════════════════════════════════ */
    {
        slug: 'sociedad',
        nombre: 'Sociedad',
        unidad_nombre: 'Sociedad',
        rama_nombre: 'Nómadas de Scout',
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
        promesa: null, ley: null, filosofia: null, filosofia_pedagogica: null,
        el_rol_familiar: null, importancia_edad: null, aprendizajes: [],
        progresion: null, progresion_y_sendas: null, recursos_oficiales: [],
    },

    /* ══════════════════════════════════════════════════════
     *  CLAN / ROVERS  ·  18 – 21 años
     * ══════════════════════════════════════════════════════ */
    {
        slug: 'clan',
        nombre: 'Clan',
        unidad_nombre: 'Clan',
        rama_nombre: 'Rovers',
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
        promesa: null, ley: null, filosofia: null, filosofia_pedagogica: null,
        el_rol_familiar: null, importancia_edad: null, aprendizajes: [],
        progresion: null, progresion_y_sendas: null, recursos_oficiales: [],
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
        promesa: null, ley: null, filosofia: null, filosofia_pedagogica: null,
        el_rol_familiar: null, importancia_edad: null, aprendizajes: [],
        progresion: null, progresion_y_sendas: null, recursos_oficiales: [],
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
        promesa: null, ley: null, filosofia: null, filosofia_pedagogica: null,
        el_rol_familiar: null, importancia_edad: null, aprendizajes: [],
        progresion: null, progresion_y_sendas: null, recursos_oficiales: [],
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
