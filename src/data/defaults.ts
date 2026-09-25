import {
  QuizQuestion,
  QuizResult,
  NicheCategory,
  MapPillar,
  CourseModule,
  BonusItem,
  LibraryCategory,
  Testimonial,
} from '../types';

/* ==================================================
   VARIABLES CENTRALES OFICIALES
   ================================================== */
export const HOTMART_CHECKOUT = 'https://pay.hotmart.com/T106939828K?checkoutMode=10';
export const WHATSAPP_URL = 'https://wa.me/56932051719';

export const PRODUCT_NAME = 'FÁBRICA DE MINIAPPS VERSE';
export const OLD_PRICE = 'US$97';
export const CURRENT_PRICE = 'US$47';
export const MINIAPP_REFERENCE_PRICE = 9.99;

/* ==================================================
   FUNCIONES CENTRALES OFICIALES
   ================================================== */
export const handleCheckout = (): void => {
  window.open(HOTMART_CHECKOUT, '_blank', 'noopener,noreferrer');
};

export const handleWhatsApp = (): void => {
  window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
};

/* ==================================================
   SECCIÓN PRINCIPIANTES
   ================================================== */
export const BEGINNERS_CARDS = [
  {
    id: 'no-se-que-crear',
    title: 'NO SÉ QUÉ CREAR',
    shortText: 'Te bloqueas pensando si tu idea vale la pena o si alguien la usará.',
    expandedText:
      'Con el método MAP y la herramienta Fábrica de MiniApps Verse, no partes de una hoja en blanco: mapeas deseos reales, problemas específicos y necesidades del mercado en minutos.',
  },
  {
    id: 'no-se-estructurar',
    title: 'NO SÉ CÓMO ESTRUCTURARLA',
    shortText: 'No sabes qué pantallas, pasos o flujo interactivo necesita una MiniApp.',
    expandedText:
      'Aprenderás cómo diseñar la arquitectura de interacción paso a paso: inputs del usuario, lógica de procesamiento con IA y entrega visual del resultado sin enredos.',
  },
  {
    id: 'no-se-prompts',
    title: 'NO SÉ QUÉ PROMPT USAR',
    shortText: 'Los prompts genéricos te dan resultados aburridos o código que no funciona.',
    expandedText:
      'Recibes nuestra suite de prompts refinados y el Agente Verse, formulados específicamente para guiar a los modelos de IA a construir aplicaciones interactivas precisas.',
  },
  {
    id: 'no-se-publicar',
    title: 'NO SÉ CÓMO PUBLICARLA',
    shortText: 'Crees que necesitas servidores complejos o configuraciones técnicas difíciles.',
    expandedText:
      'Te enseñamos cómo publicar tu MiniApp en la web de forma rápida, moderna y económica para que cualquier persona pueda usarla desde su teléfono o computadora con un simple enlace.',
  },
];

/* ==================================================
   QUIZ INTERACTIVO
   ================================================== */
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '¿Qué te gustaría conseguir creando MiniApps?',
    options: [
      { label: 'Crear productos digitales', profile: 'creador' },
      { label: 'Vender servicios a negocios', profile: 'emprendedor' },
      { label: 'Crear herramientas para mis clientes', profile: 'arquitecto' },
      { label: 'Crear nuevas fuentes de ingresos', profile: 'explorador' },
    ],
  },
  {
    id: 2,
    question: '¿Qué experiencia tienes actualmente?',
    options: [
      { label: 'Estoy comenzando', profile: 'explorador' },
      { label: 'Ya vendo productos digitales', profile: 'creador' },
      { label: 'Trabajo con negocios o clientes', profile: 'arquitecto' },
      { label: 'Ya utilizo herramientas de IA', profile: 'emprendedor' },
    ],
  },
  {
    id: 3,
    question: '¿Qué te gustaría crear primero?',
    options: [
      { label: 'Una MiniApp para vender', profile: 'creador' },
      { label: 'Una MiniApp para un negocio', profile: 'emprendedor' },
      { label: 'Una MiniApp educativa', profile: 'arquitecto' },
      { label: 'Una herramienta interactiva', profile: 'explorador' },
    ],
  },
];

export const QUIZ_RESULTS: Record<string, QuizResult> = {
  explorador: {
    id: 'explorador',
    profileKey: 'explorador',
    badge: 'Perfil Identificado',
    title: 'EL EXPLORADOR DIGITAL',
    description:
      'Estás en el momento perfecto para empezar. Tienes la curiosidad y la motivación de aprovechar la inteligencia artificial sin cargar con prejuicios técnicos ni métodos obsoletos.',
    recommendation:
      'La Fábrica de MiniApps Verse te dará el paso a paso estructurado para ir desde cero hasta tu primera MiniApp publicada sin enredos ni fricción técnica.',
  },
  creador: {
    id: 'creador',
    profileKey: 'creador',
    badge: 'Perfil Identificado',
    title: 'EL CREADOR DE PRODUCTOS',
    description:
      'Sabes el valor de los productos digitales, pero reconoces que los formatos pasivos estáticos ya no tienen el impacto de antes. Buscas interactividad y alto valor percibido.',
    recommendation:
      'Convierte conocimientos en herramientas dinámicas que resuelvan problemas al instante, multiplicando la retención, la satisfacción y el valor de tu oferta.',
  },
  arquitecto: {
    id: 'arquitecto',
    profileKey: 'arquitecto',
    badge: 'Perfil Identificado',
    title: 'EL ARQUITECTO DE SOLUCIONES',
    description:
      'Trabajas con clientes, empresas o audiencias que necesitan soluciones específicas, rápidas y medibles sin los presupuestos gigantes de un desarrollo tradicional.',
    recommendation:
      'Usa el Método MAP y el Agente Verse para estructurar herramientas interactivas, diagnósticos y cotizadores que solucionen fricciones reales en minutos.',
  },
  emprendedor: {
    id: 'emprendedor',
    profileKey: 'emprendedor',
    badge: 'Perfil Identificado',
    title: 'EL EMPRENDEDOR IA',
    description:
      'Tienes visión de negocio y comprendes que la ola de la IA permite a un solo creador construir soluciones de software que antes requerían un equipo entero de programadores.',
    recommendation:
      'Aprovecha la biblioteca de 180 MiniApps de referencia con páginas de venta y las herramientas del ecosistema Verse para acelerar el desarrollo y testeo en el mercado.',
  },
};

/* ==================================================
   MÉTODO MAP
   ================================================== */
export const MAP_PILLARS: MapPillar[] = [
  {
    letter: 'M',
    title: 'MAPEAR',
    subtitle: 'Descubre qué crear, para quién y qué problema resolver.',
    description:
      'El 90% de los proyectos fracasan por construir cosas que nadie necesita. En este paso mapeas deseos primarios, vacíos en el mercado y dolores concretos de tu audiencia para encontrar un ángulo de alta demanda.',
    keyPoints: [
      'Identificación de dolores y deseos primarios',
      'Definición quirúrgica del cliente ideal',
      'Exploración de nichos de alto valor percibido',
      'Validación rápida antes de construir',
    ],
  },
  {
    letter: 'A',
    title: 'ARQUITECTAR',
    subtitle: 'Convierte una idea en una experiencia interactiva.',
    description:
      'Transforma el concepto en una experiencia digital fluida. Diseña la interfaz, define las preguntas o inputs, los cálculos o lógica de IA y el resultado de alto impacto que recibirá el usuario final.',
    keyPoints: [
      'Estructura de inputs y experiencia de usuario',
      'Formulación de prompts precisos para IA',
      'Lógica interactiva sin código innecesario',
      'Presentación visual de resultados de valor',
    ],
  },
  {
    letter: 'P',
    title: 'PUBLICAR',
    subtitle: 'Lleva tu MiniApp a internet.',
    description:
      'Aprende a desplegar tu MiniApp en la nube de forma ágil, segura y totalmente responsive para que funcione impecable en móviles, tablets y ordenadores con su propio enlace.',
    keyPoints: [
      'Despliegue rápido en servidores modernos',
      'Optimización móvil y tiempos de carga instantáneos',
      'Configuración de dominio o link de acceso limpio',
      'Seguridad básica y protección del sistema',
    ],
  },
  {
    letter: 'A',
    title: 'ATRAER',
    subtitle: 'Aprende a presentar y promocionar tu MiniApp.',
    description:
      'Una gran herramienta necesita ojos encima. Aprende a crear páginas de venta persuasivas, ángulos de gancho (hooks) y demostraciones interactivas que generen curiosidad y tráfico hacia tu MiniApp.',
    keyPoints: [
      'Ganchos y ángulos de comunicación para redes',
      'Estructura de página de venta de alta conversión',
      'Demostraciones visuales que venden la solución',
      'Estrategias de distribución y captación',
    ],
  },
];

/* ==================================================
   NICHOS DE MERCADO
   ================================================== */
export const NICHES_DATA: NicheCategory[] = [
  {
    id: 'restaurantes',
    name: 'Restaurantes',
    iconName: 'Utensils',
    shortDescription: 'Experiencias interactivas para comensales y negocios gastronómicos.',
    examples: [
      {
        title: 'Calculadora de Porciones para Eventos',
        type: 'Herramienta Interactiva',
        description: 'Permite al cliente calcular cantidades exactas de comida y bebida según comensales y tipo de fiesta.',
        benefit: 'Aumenta el ticket medio y reduce fricción al cotizar servicios de catering.',
      },
      {
        title: 'Sommelier Digital de Maridaje',
        type: 'MiniApp de Experiencia',
        description: 'Recomienda el plato o vino ideal según las preferencias y presupuesto del comensal.',
        benefit: 'Eleva la experiencia del cliente y la venta de vinos premium.',
      },
    ],
  },
  {
    id: 'barberias',
    name: 'Barberías',
    iconName: 'Scissors',
    shortDescription: 'Herramientas de diagnóstico de estilo y selección de servicios.',
    examples: [
      {
        title: 'Diagnóstico de Tipo de Rostro y Corte Ideal',
        type: 'Test Interactivo',
        description: 'Guía visual que ayuda al cliente a elegir el corte de cabello y barba más favorable según su fisionomía.',
        benefit: 'Convierte visitas curiosas de redes sociales en reservas de corte confirmadas.',
      },
      {
        title: 'Simulador de Rutina de Cuidado Capilar',
        type: 'Recomendador Interactivo',
        description: 'Recomienda los productos de mantenimiento exactos según el tipo de piel y cabello.',
        benefit: 'Impulsa las ventas recurrentes de productos cosméticos en el salón.',
      },
    ],
  },
  {
    id: 'fitness',
    name: 'Fitness',
    iconName: 'Dumbbell',
    shortDescription: 'Calculadoras corporales, generadores de rutinas y planes de hábitos.',
    examples: [
      {
        title: 'Calculadora de Déficit Calórico Personalizado',
        type: 'Calculadora de Salud',
        description: 'Evalúa peso, objetivo y actividad diaria para entregar macros y distribución calórica exacta.',
        benefit: 'Captura clientes calificados para programas de asesoría personalizada.',
      },
      {
        title: 'Generador de Rutinas según Disponibilidad Semanal',
        type: 'Planificador Express',
        description: 'Crea una rutina adaptada si la persona entrena 2, 3 o 4 días en casa o gimnasio.',
        benefit: 'Alto valor percibido que genera confianza inmediata en el entrenador.',
      },
    ],
  },
  {
    id: 'belleza',
    name: 'Belleza',
    iconName: 'Sparkles',
    shortDescription: 'Diagnósticos de piel, rutinas de maquillaje y cuidado personal.',
    examples: [
      {
        title: 'Diagnóstico de Tipo de Piel y Rutina AM/PM',
        type: 'Quiz de Diagnóstico',
        description: 'Identifica si la piel es seca, mixta o sensible y sugiere los 4 pasos elementales de cuidado.',
        benefit: 'Herramienta de recomendación para marcas y esteticistas.',
      },
      {
        title: 'Calculadora de Inversión en Cuidado Personal',
        type: 'Herramienta de Decisión',
        description: 'Compara el gasto mensual en productos dispersos versus un tratamiento integral guiado.',
        benefit: 'Facilita la decisión para paquetes estéticos de mayor valor.',
      },
    ],
  },
  {
    id: 'educacion',
    name: 'Educación',
    iconName: 'GraduationCap',
    shortDescription: 'Evaluaciones interactivas, mapas de aprendizaje y quizzes de nivel.',
    examples: [
      {
        title: 'Test de Nivelación de Idioma o Habilidad',
        type: 'Evaluación Dinámica',
        description: 'Entrega un informe de competencias en 5 minutos con retroalimentación inmediata.',
        benefit: 'Multiplica la interacción frente a formularios pasivos de inscripción.',
      },
      {
        title: 'Generador de Plan de Estudio Personalizado',
        type: 'Ruta de Aprendizaje',
        description: 'Organiza un temario según las horas disponibles por semana del estudiante.',
        benefit: 'Diferenciador competitivo para academias y creadores educativos.',
      },
    ],
  },
  {
    id: 'profesionales',
    name: 'Profesionales',
    iconName: 'Briefcase',
    shortDescription: 'Simuladores fiscales, diagnósticos y auditores express.',
    examples: [
      {
        title: 'Auditor Express de Salud Financiera para Negocios',
        type: 'Auditoría Interactiva',
        description: 'Evalúa margen, flujo de caja y endeudamiento entregando un semáforo de estado.',
        benefit: 'Filtra y califica prospectos de consultoría con alto interés.',
      },
      {
        title: 'Calculadora de Honorarios por Hora y Rentabilidad',
        type: 'Simulador Financiero',
        description: 'Ayuda a freelancers y consultores a calcular cuánto cobrar por hora según gastos y metas.',
        benefit: 'Herramienta de bajo costo y altísima viralidad en comunidades.',
      },
    ],
  },
  {
    id: 'negocios-locales',
    name: 'Negocios locales',
    iconName: 'Store',
    shortDescription: 'Cotizadores automáticos, calculadoras de presupuestos y agendas.',
    examples: [
      {
        title: 'Cotizador Instantáneo de Reformas y Pintura',
        type: 'Cotizador Presupuestario',
        description: 'Permite calcular metros cuadrados, materiales y costo estimado en segundos.',
        benefit: 'Elimina las dudas repetitivas y acelera la contratación.',
      },
      {
        title: 'Selector Interactivo de Paquetes de Servicios',
        type: 'Configurador de Pedido',
        description: 'El cliente marca las áreas requeridas y recibe un resumen claro para WhatsApp.',
        benefit: 'Facilita la venta directa por WhatsApp con presupuestos estructurados.',
      },
    ],
  },
];

/* ==================================================
   HERRAMIENTA FÁBRICA DE MINIAPPS VERSE (FRAMEWORKS)
   ================================================== */
export const TOOL_FRAMEWORKS = {
  deseosPrimarios: [
    { title: 'Dinero y Libertad', desc: 'Ingresos, ahorro, negocios, autonomía de tiempo' },
    { title: 'Salud y Apariencia', desc: 'Energía física, estética, longevidad, vitalidad' },
    { title: 'Relaciones', desc: 'Amor de pareja, amistades, familia, conexión social' },
    { title: 'Autoestima e Identidad', desc: 'Confianza en uno mismo, seguridad interna, pertenencia' },
  ],
  mercadosEmocionales: [
    { title: 'Ansiedad y Dolor Emocional', desc: 'Superación de bloqueos, calma mental, reducción de estrés' },
    { title: 'Sexualidad y Deseo', desc: 'Intimidad, atracción, confianza en el vínculo' },
    { title: 'Estatus y Reconocimiento', desc: 'Prestigio social, autoridad profesional, reputación' },
    { title: 'Espiritualidad y Propósito', desc: 'Sentido de vida, coherencia interna, valores' },
  ],
  mercadosTransformacion: [
    { title: 'Marketing y Negocios', desc: 'Ventas, adquisición de clientes, automatización' },
    { title: 'IA y Productividad', desc: 'Herramientas de IA, flujos de trabajo, optimización de tiempo' },
    { title: 'Educación y Habilidades', desc: 'Aprender oficios, idiomas, habilidades demandadas' },
    { title: 'Carrera y Profesión', desc: 'Ascensos, entrevistas, transición laboral, networking' },
  ],
  lifestylePasiones: [
    { title: 'Belleza y Estética', desc: 'Skincare, moda, maquillaje, estilo personal' },
    { title: 'Casa y Rutina', desc: 'Organización del hogar, cocina práctica, minimalismo' },
    { title: 'Hobbies y Comunidades', desc: 'Fotografía, música, gaming, coleccionismo' },
    { title: 'Maternidad y Familia', desc: 'Crianza respetuosa, rutinas infantiles, balance familiar' },
  ],
  ejemploOferta: {
    nicho: 'Finanzas Personales para Emprendedores',
    clienteIdeal: 'Dueños de negocios pequeños y freelancers con ingresos irregulares',
    tituloOferta: 'MiniApp de auditoría financiera express',
    descripcionOferta: 'Diagnóstico en 3 minutos + Calculadora de presupuesto y libertad financiera con plan de acción.',
  },
  promptEjemplo: `Actúa como un estratega de negocios y arquitectura de MiniApps. Analiza el mercado objetivo seleccionado, el perfil de cliente ideal y genera una propuesta estructurada de MiniApp interactiva que combine diagnóstico inicial, cálculo numérico personalizado y plan de acción accionable.`,
};

/* ==================================================
   LOS 5 MÓDULOS DE FORMACIÓN
   ================================================== */
export const COURSE_MODULES: CourseModule[] = [
  {
    id: 1,
    number: '01',
    title: 'BIENVENID@',
    summary: 'Conoce el ecosistema, el método y las posibilidades.',
    topics: [
      'Qué es exactamente una MiniApp y por qué supera a los formatos pasivos',
      'El ecosistema Verse y el mapa de ruta paso a paso',
      'Configuración inicial de tus herramientas de trabajo',
      'Casos de uso reales y modelos de monetización posibles',
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'MAPEAR',
    summary: 'Nichos, problemas, oportunidades, audiencias e ideas.',
    topics: [
      'Investigación de deseos primarios y mercados emocionalmente fuertes',
      'Detección de problemas concretos que las personas ya buscan resolver',
      'Cómo definir el cliente ideal y su nivel de consciencia',
      'Selección y validación de la idea ganadora sin hoja en blanco',
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'ARQUITECTAR',
    summary: 'Estructura y experiencia de la MiniApp utilizando inteligencia artificial.',
    topics: [
      'Estructura de pantallas, entradas de datos y flujos de usuario',
      'Lógica de cálculo, diagnóstico y respuesta personalizada',
      'Uso estratégico de IA y prompts para generar la interactividad',
      'Pruebas y refinamiento de la experiencia visual y funcional',
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'PUBLICAR',
    summary: 'Lleva tu MiniApp a internet.',
    topics: [
      'Plataformas de despliegue rápido y moderno',
      'Cómo conectar tu enlace para compartirlo en bio o WhatsApp',
      'Verificación responsive para móviles y ordenadores',
      'Actualizaciones y mantenimiento rápido sin complicaciones',
    ],
  },
  {
    id: 5,
    number: '05',
    title: 'ATRAER',
    summary: 'Aprende a presentar y promocionar tu MiniApp.',
    topics: [
      'Estructura de página de ventas y presentación irresistible',
      'Ángulos de gancho (hooks) para captar atención en redes sociales',
      'Cómo presentar la MiniApp como solución interactiva sin sonar invasivo',
      'Flujo de conversación por WhatsApp para convertir interesados en clientes',
    ],
  },
];

/* ==================================================
   BONOS
   ================================================== */
export const BONUSES: BonusItem[] = [
  {
    id: 1,
    badge: 'BONO #1',
    title: '🎁 180 MINIAPPS LISTAS PARA COPIAR Y PEGAR',
    shortDesc: 'Una biblioteca de 180 MiniApps listas para explorar, copiar, adaptar y utilizar como punto de partida.',
    detail: 'Incluye plantillas y conceptos en múltiples categorías de mercado para que nunca tengas que empezar desde cero. Cada MiniApp incluye su correspondiente página de ventas para acelerar su presentación.',
    specialNote: 'Cada MiniApp incluye su correspondiente página de ventas.',
    iconName: 'Layers',
  },
  {
    id: 2,
    badge: 'BONO #2',
    title: '🎁 BONO ESPECIAL',
    shortDesc: 'Recurso complementario de alto valor estratégico incluido en tu acceso.',
    detail: 'Un bono complementario preparado específicamente dentro del ecosistema Verse para enriquecer tu proceso de creación e implementación.',
    iconName: 'Gift',
  },
  {
    id: 3,
    badge: 'BONO #3',
    title: '🔎 ESPIAR A LA COMPETENCIA',
    shortDesc: 'Aprende a investigar qué están haciendo otros en el mercado, qué MiniApps podrían crearse, qué productos digitales pueden transformarse en MiniApps y qué problemas y soluciones aparecen al estudiar la competencia.',
    detail: 'Metodología paso a paso para analizar qué herramientas o soluciones se están ofreciendo, qué vacíos de interactividad existen y cómo transformar ofertas tradicionales o PDFs en MiniApps atractivas.',
    iconName: 'Eye',
  },
  {
    id: 4,
    badge: 'BONO #4',
    title: '⚡ SÚPER PROMPT PRO (PROMPTS VERSE)',
    shortDesc: 'Recursos para ayudar a estructurar y mejorar MiniApps.',
    detail: 'Colección de prompts especializados para guiar a los modelos de inteligencia artificial en la creación de diagnósticos precisos, calculadoras funcionales, flujos interactivos y refinamiento.',
    iconName: 'Zap',
  },
  {
    id: 5,
    badge: 'BONO #5',
    title: '🪝 FÁBRICA DE GANCHOS',
    shortDesc: 'Recursos y prompts para trabajar hooks, dolores, deseos, ángulos y mensajes para diferentes audiencias.',
    detail: 'Herramienta y guía estructurada para formular ganchos de atención, ángulos persuasivos y mensajes adaptados a diferentes audiencias en redes sociales y mensajes directos.',
    iconName: 'Anchor',
  },
];

/* ==================================================
   BIBLIOTECA DE 180 MINIAPPS
   ================================================== */
export const LIBRARY_CATEGORIES: LibraryCategory[] = [
  {
    name: 'Finanzas & Negocios',
    count: 35,
    description: 'Calculadoras de rentabilidad, auditores de flujo de caja, cotizadores y diagnósticos.',
    sampleApps: [
      { title: 'Auditor Financiero Express', description: 'Diagnóstico en 3 minutos con semáforo de solvencia.', salesPageIncluded: true },
      { title: 'Calculadora de Punto de Equilibrio', description: 'Calcula unidades mínimas de venta para cubrir costos.', salesPageIncluded: true },
      { title: 'Cotizador de Servicios Freelance', description: 'Calculadora de tarifa por hora y margen deseado.', salesPageIncluded: true },
    ],
  },
  {
    name: 'Salud, Fitness & Bienestar',
    count: 40,
    description: 'Diagnósticos corporales, calculadoras nutricionales y simuladores de rutinas.',
    sampleApps: [
      { title: 'Calculadora de Déficit Calórico y Macros', description: 'Ajuste calórico según nivel de actividad física.', salesPageIncluded: true },
      { title: 'Test de Nivel de Calidad del Sueño', description: 'Evaluación de higiene de descanso y recomendaciones.', salesPageIncluded: true },
      { title: 'Planificador de Hidratación y Electrolitos', description: 'Cálculo de ingesta de líquidos según clima y deporte.', salesPageIncluded: true },
    ],
  },
  {
    name: 'Negocios Locales & Servicios',
    count: 35,
    description: 'Presupuestos automáticos, selectores de tratamientos y calificadores de prospectos.',
    sampleApps: [
      { title: 'Cotizador de Reformas y Pintura', description: 'Cálculo estimado según m² y tipo de acabado.', salesPageIncluded: true },
      { title: 'Diagnóstico Capilar para Barberías', description: 'Selector de estilo según morfología del rostro.', salesPageIncluded: true },
      { title: 'Selector de Paquetes de Estética Dental', description: 'Simulador de tratamientos recomendados.', salesPageIncluded: true },
    ],
  },
  {
    name: 'Educación & Crecimiento',
    count: 35,
    description: 'Tests de nivelación, guías interactivas de estudio y mapas de habilidades.',
    sampleApps: [
      { title: 'Evaluador de Nivel de Competencias', description: 'Diagnóstico de habilidades con reporte inmediato.', salesPageIncluded: true },
      { title: 'Generador de Rutas de Aprendizaje', description: 'Distribución de estudio según metas semanales.', salesPageIncluded: true },
      { title: 'Test Vocacional y de Enfoque Profesional', description: 'Cuestionario de inclinaciones y fortalezas laborales.', salesPageIncluded: true },
    ],
  },
  {
    name: 'Productividad, Estilo de Vida & IA',
    count: 35,
    description: 'Optimizadores de tiempo, calculadoras de hábitos y selectores de herramientas.',
    sampleApps: [
      { title: 'Calculadora del Costo de la Procrastinación', description: 'Visualizador de horas perdidas y valor monetario.', salesPageIncluded: true },
      { title: 'Selector de Stack de Herramientas de IA', description: 'Recomienda el software ideal según tarea diaria.', salesPageIncluded: true },
      { title: 'Auditor de Rutina Matutina Productiva', description: 'Mapeo de micro-hábitos con puntuación de efectividad.', salesPageIncluded: true },
    ],
  },
];

/* ==================================================
   TESTIMONIOS
   ================================================== */
export const INITIAL_TESTIMONIALS: Testimonial[] = [];

/* ==================================================
   PREGUNTAS FRECUENTES (FAQ)
   ================================================== */
export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: '¿Necesito saber programación?',
    answer:
      'No. Fábrica de MiniApps Verse está diseñada desde cero para que cualquier persona, sin importar su formación previa, aprenda a apoyarse en herramientas de inteligencia artificial y estructuras claras para dar vida a MiniApps interactivas.',
  },
  {
    id: 'faq-2',
    question: '¿Qué pasa si nunca he creado una MiniApp?',
    answer:
      'No pasa nada, no necesitas llegar sabiendo. La formación te guía paso a paso desde qué es una MiniApp, cómo encontrar la idea, cómo estructurarla, cómo generarla con IA y cómo publicarla en la web sin fricciones.',
  },
  {
    id: 'faq-3',
    question: '¿Qué es Fábrica de MiniApps Verse?',
    answer:
      'Es un sistema completo que combina formación práctica con el Método MAP, la herramienta Fábrica de MiniApps Verse para estructurar ideas paso a paso, y recursos para acelerar tu proceso de creación.',
  },
  {
    id: 'faq-4',
    question: '¿Qué es el Agente Verse?',
    answer:
      'Es un agente especializado diseñado para ayudarte a analizar ofertas, identificar oportunidades desatendidas en el mercado y estructurar la experiencia de tu MiniApp de forma clara y lógica.',
  },
  {
    id: 'faq-5',
    question: '¿Qué puedo crear?',
    answer:
      'Puedes crear calculadoras interactivas, diagnósticos paso a paso, recomendadores de productos, cotizadores para negocios locales, evaluadores de habilidades, planes personalizados y herramientas prácticas para casi cualquier nicho.',
  },
  {
    id: 'faq-6',
    question: '¿Puedo vender MiniApps?',
    answer:
      'Sí. Puedes utilizarlas para venderlas como herramientas independientes, ofrecerlas como servicio a negocios locales para captar clientes, o integrarlas como parte interactiva de tus propios productos y servicios digitales.',
  },
  {
    id: 'faq-7',
    question: '¿Cómo recibo el acceso?',
    answer:
      'Una vez confirmado el pago seguro en Hotmart, recibirás de inmediato un correo electrónico con tus datos de acceso al área de miembros, donde encontrarás todos los módulos, herramientas y bonos correspondientes.',
  },
  {
    id: 'faq-8',
    question: '¿Todavía tengo dudas?',
    answer:
      'Si tienes cualquier pregunta adicional sobre el programa, los módulos, el acceso o las herramientas, puedes escribirnos directamente por WhatsApp.',
    hasWhatsappAction: true,
  },
];
