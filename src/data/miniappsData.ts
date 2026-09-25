import { MiniAppItem, LibraryCategoryCard } from '../types';

export const LIBRARY_CATEGORIES_CATALOG: LibraryCategoryCard[] = [
  // NIVEL 1: CATEGORÍAS PRINCIPALES
  {
    slug: 'adelgazamiento-fitness',
    name: 'Adelgazamiento & Fitness',
    level: 1,
    count: 15,
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    description: 'Calculadoras de déficit, macros, rutinas adaptadas y control calórico.',
  },
  {
    slug: 'belleza-skincare',
    name: 'Belleza & Skincare',
    level: 1,
    count: 15,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    description: 'Diagnósticos de tipo de piel, rutinas faciales AM/PM y compatibilidad cosmética.',
  },
  {
    slug: 'cocina-reposteria',
    name: 'Cocina & Repostería',
    level: 1,
    count: 15,
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    description: 'Escaladores de recetas, conversores de moldes, costos de postres y tiempos de horno.',
  },
  {
    slug: 'desarrollo-personal',
    name: 'Desarrollo Personal',
    level: 1,
    count: 15,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    description: 'Rueda de la vida, auditoría de hábitos, fijación de metas y gestión del tiempo.',
  },
  {
    slug: 'finanzas-inversiones',
    name: 'Finanzas & Inversiones',
    level: 1,
    count: 15,
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
    description: 'Calculadoras de interés compuesto, amortización de deudas, presupuesto y FIRE.',
  },
  {
    slug: 'educacion-oposiciones',
    name: 'Educación & Oposiciones',
    level: 1,
    count: 15,
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    description: 'Planificadores de estudio por vueltas, simuladores de baremo y cálculo de descansos.',
  },
  {
    slug: 'carrera-linkedin',
    name: 'Carrera & LinkedIn',
    level: 1,
    count: 15,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    description: 'Optimizadores de perfil, generadores de cartas y simuladores de entrevistas.',
  },
  {
    slug: 'relaciones-pareja',
    name: 'Relaciones & Pareja',
    level: 1,
    count: 15,
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80',
    description: 'Test de lenguajes del amor, resolvedores de conflictos y ruletas de planes románticos.',
  },

  // NIVEL 2: CATEGORÍAS ESPECIALIZADAS
  {
    slug: 'artesania-diy',
    name: 'Artesanía & DIY',
    level: 2,
    count: 15,
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=800&q=80',
    description: 'Resina epoxi, macramé, costura básica, restauración de muebles y reformas.',
  },
  {
    slug: 'hogar-organizacion',
    name: 'Hogar & Organización',
    level: 2,
    count: 15,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    description: 'Listas de despensa, rutinas de limpieza por zonas, optimización de armarios.',
  },
  {
    slug: 'fotografia-edicion',
    name: 'Fotografía & Edición',
    level: 2,
    count: 15,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    description: 'Calculadoras de profundidad de campo, reglas de composición y presets visuales.',
  },
  {
    slug: 'marketing-redes-sociales',
    name: 'Marketing & Redes Sociales',
    level: 2,
    count: 15,
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    description: 'Calculadoras de engagement, calendarios de contenido y generadores de hooks.',
  },
];

// Helper to assemble the 180 items
const categoryAppsConfig: Record<string, { level: 1 | 2; category: string; startNum: number; apps: Array<{ title: string; desc: string; sub: string; sales?: boolean }> }> = {
  'adelgazamiento-fitness': {
    level: 1,
    category: 'Adelgazamiento & Fitness',
    startNum: 1,
    apps: [
      { title: 'Calculadora de Déficit Calórico Personalizado', desc: 'Calcula calorías y reparto exacto de macronutrientes según objetivo de pérdida de grasa.', sub: 'Nutrición' },
      { title: 'Generador de Rutinas según Días de Entrenamiento', desc: 'Crea rutinas de fuerza divididas para 2, 3 o 4 días por semana sin saturación.', sub: 'Entrenamiento' },
      { title: 'Monitor de Progresión de Cargas RPE/RIR', desc: 'Calcula 1RM y estima el peso a levantar para mantener sobrecarga progresiva.', sub: 'Fuerza' },
      { title: 'Calculadora de Ingesta Diaria de Proteína y Agua', desc: 'Calcula los gramos óptimos de proteína y litros de agua según masa magra.', sub: 'Nutrición' },
      { title: 'Evaluador de Somatotipo y Plan de Cardio', desc: 'Determina si requieres cardio LISS o HIIT para no comprometer masa muscular.', sub: 'Cardio' },
      { title: 'Planificador de Comidas Prep para la Semana', desc: 'Estructura lista de compras y porciones cocinadas para evitar improvisar entre semana.', sub: 'Meal Prep' },
      { title: 'Calculadora de Tasa Metabólica Basal (TMB)', desc: 'Evalúa gasto en reposo mediante fórmulas Mifflin-St Jeor y Katch-McArdle.', sub: 'Metabolismo' },
      { title: 'Test de Flexibilidad Metabólica y Ayuno Intermitente', desc: 'Determina la ventana de ayuno adecuada (12/12, 16/8 o 20/4) según rutina diaria.', sub: 'Hábitos' },
      { title: 'Simulador de Quema Calórica por Deporte', desc: 'Compara calorías consumidas por sesión en natación, running, pesas o ciclismo.', sub: 'Cardio' },
      { title: 'Generador de Rutinas HIIT Express en Casa (15 Min)', desc: 'Secuencias de peso corporal guiadas por temporizador sin equipamiento.', sub: 'En Casa' },
      { title: 'Evaluador de Movilidad Articular para Sentadilla', desc: 'Diagnostica dorsiflexión de tobillo y apertura de cadera con ejercicios correctivos.', sub: 'Movilidad' },
      { title: 'Calculadora de Tiempo Estimado para Peso Objetivo', desc: 'Proyecta fechas realistas de pérdida corporal sin efecto rebote ni dietas extremas.', sub: 'Metas' },
      { title: 'Guía Interactiva de Sustitución de Ingredientes Saludables', desc: 'Encuentra equivalencias de harina, azúcar y grasas para recetas fitness.', sub: 'Cocina Fit' },
      { title: 'Test de Fatiga del Sistema Nervioso y Descanso', desc: 'Detecta sobreentrenamiento mediante cuestionario de síntomas y descanso.', sub: 'Recuperación' },
      { title: 'Planificador de Pasos Diarios (NEAT) para Pérdida de Grasa', desc: 'Calcula el gasto no asociado al ejercicio para acelerar déficit sin hambre.', sub: 'NEAT' },
    ],
  },
  'belleza-skincare': {
    level: 1,
    category: 'Belleza & Skincare',
    startNum: 16,
    apps: [
      { title: 'Diagnóstico de Tipo de Piel y Barrera Cutánea', desc: 'Determina si tu piel es grasa deshidratada, seca o sensible con 5 preguntas clave.', sub: 'Diagnóstico' },
      { title: 'Diseñador de Rutina Facial AM/PM por Capas', desc: 'Ordena la aplicación correcta de limpiador, tónico, sérum, hidratante y protector solar.', sub: 'Rutina' },
      { title: 'Verificador de Incompatibilidad de Activos (Retinol, AHA, Vit C)', desc: 'Evita mezclas perjudiciales entre ácidos exfoliantes, retinoides y niacinamida.', sub: 'Ingredientes' },
      { title: 'Calculadora de Frecuencia de Exfoliación Facial', desc: 'Recomienda si exfoliar 1, 2 o 3 veces por semana según tolerancia y sensibilidad.', sub: 'Exfoliación' },
      { title: 'Guía de Selección de Protector Solar por Acabado', desc: 'Elige entre filtros minerales o químicos, mate, glow o con color según tu fototipo.', sub: 'Solar' },
      { title: 'Test de Porosidad Capilar y Cronograma Capilar', desc: 'Descubre si tu cabello necesita hidratación, nutrición o reconstrucción de queratina.', sub: 'Cuidado Capilar' },
      { title: 'Selector de Tonalidad y Subtono de Base de Maquillaje', desc: 'Identifica si tu subtono es cálido, frío o neutro para no equivocarte de base.', sub: 'Maquillaje' },
      { title: 'Generador de Rutina Anti-Edad según Década (20s, 30s, 40s+)', desc: 'Recomienda los activos esenciales de prevención según la edad biológica.', sub: 'Anti-Edad' },
      { title: 'Buscador de Duplicados Accesibles de Cosméticos Premium', desc: 'Encuentra fórmulas similares de farmacia para productos virales de alta gama.', sub: 'Compras' },
      { title: 'Auditor de Vencimiento de Cosméticos (Símbolo PAO)', desc: 'Controla meses de apertura de máscaras, cremas y bases para evitar bacterias.', sub: 'Higiene' },
      { title: 'Planificador de Tratamientos Estéticos no Invasivos', desc: 'Compara tiempos de recuperación y sesiones de peelings, dermapen y limpiezas.', sub: 'Tratamientos' },
      { title: 'Calculadora de Inversión Mensual en Skincare', desc: 'Calcula la duración en días de un envase de 30ml/50ml según gotas aplicadas.', sub: 'Presupuesto' },
      { title: 'Diagnóstico de Acné y Rutina Calmante no Comedogénica', desc: 'Filtra productos libres de aceites minerales y fragancias que causan brotes.', sub: 'Acné' },
      { title: 'Selector de Paleta de Sombras según Color de Ojos', desc: 'Potencia ojos marrones, verdes o azules con tonos complementarios del círculo cromático.', sub: 'Colorimetría' },
      { title: 'Guía de Masajes Faciales con Gua Sha y Rodillo', desc: 'Mapas de drenaje linfático facial y direcciones de presión para desinflamar.', sub: 'Técnicas' },
    ],
  },
  'cocina-reposteria': {
    level: 1,
    category: 'Cocina & Repostería',
    startNum: 31,
    apps: [
      { title: 'Conversor de Moldes de Repostería Redondos y Rectangulares', desc: 'Ajusta cantidades de masa al cambiar diámetro o forma del molde sin desbordes.', sub: 'Repostería' },
      { title: 'Calculadora de Costos y Precio de Venta de Tortas y Tartas', desc: 'Suma ingredientes, gas, empaque y mano de obra con margen de beneficio real.', sub: 'Costos' },
      { title: 'Escalador Proporcional de Ingredientes de Recetas', desc: 'Multiplica o divide una receta para 2, 6, 12 o 24 personas en un clic.', sub: 'Herramientas' },
      { title: 'Calculadora de Ganache de Chocolate y Temperatura de Emulsión', desc: 'Proporciones exactas para relleno, cobertura o goteo con chocolate negro o blanco.', sub: 'Chocolatería' },
      { title: 'Planificador de Tiempos de Horno y Temperatura por Altura', desc: 'Ajusta tiempo y temperatura si cocinas en horno a gas, eléctrico o con convección.', sub: 'Técnica' },
      { title: 'Calculadora de Hidratación de Masa Madre para Panes', desc: 'Calcula porcentaje de agua, harina y fermento según la harina empleada (W).', sub: 'Panadería' },
      { title: 'Sustituto de Huevo en Masas y Bizcochuelos', desc: 'Equivalencias con puré de manzana, plátano, semillas de lino, chía o aquafaba.', sub: 'Vegano/Alergias' },
      { title: 'Simulador de Porciones de Tarta para Eventos y Bodas', desc: 'Calcula cuántos pisos y diámetros se requieren según la cantidad de invitados.', sub: 'Eventos' },
      { title: 'Calculadora de Almíbar y Puntos del Azúcar', desc: 'Tiempos y grados Celsius para punto hilo, bola blanda, bola dura y caramelo.', sub: 'Azúcar' },
      { title: 'Organizador de Menú Semanal Inteligente con Sobras', desc: 'Planifica comidas de lunes a domingo reutilizando ingredientes base.', sub: 'Batch Cooking' },
      { title: 'Guía de Maridaje de Vinos con Comidas y Quesos', desc: 'Recomendaciones instantáneas de cepas según la proteína y salsa del plato.', sub: 'Bebidas' },
      { title: 'Conversor de Medidas de Tazas a Gramos por Ingrediente', desc: 'Gramaje real de 1 taza de harina, azúcar glas, mantequilla, cacao o fécula.', sub: 'Conversión' },
      { title: 'Calculadora de Merengue Suizo, Francés e Italiano', desc: 'Control de ratios claras/azúcar y pasteurización térmica para tartas estables.', sub: 'Merengues' },
      { title: 'Optimizador de Conservación y Congelación de Alimentos', desc: 'Guía de duración en freezer y técnica de descongelado seguro para cada alimento.', sub: 'Conservación' },
      { title: 'Cotizador de Servicios de Catering a Domicilio', desc: 'Estima bocados fríos y calientes por persona según duración del evento.', sub: 'Negocio Gastronómico' },
    ],
  },
  'desarrollo-personal': {
    level: 1,
    category: 'Desarrollo Personal',
    startNum: 46,
    apps: [
      { title: 'Evaluador Interactivo de la Rueda de la Vida (8 Áreas)', desc: 'Diagnostica tu balance actual en salud, dinero, amor, carrera y espiritualidad.', sub: 'Diagnóstico' },
      { title: 'Calculadora del Costo Financiero de la Procrastinación', desc: 'Visualiza cuánto dinero y horas reales pierdes al postergar proyectos clave.', sub: 'Productividad' },
      { title: 'Diseñador de Rutina Matutina sin Fricción (Rule of 3)', desc: 'Crea un ritual matutino de 20 minutos adaptado a tus niveles de energía.', sub: 'Hábitos' },
      { title: 'Generador de Afirmaciones Basadas en Evidencia y Psicología', desc: 'Formula autosugestiones creíbles sin positivismo tóxico para reprogramar creencias.', sub: 'Mentalidad' },
      { title: 'Test de Nivel de Burnout y Agotamiento Emocional', desc: 'Cuestionario basado en escala de Maslach para identificar fatiga profesional.', sub: 'Bienestar' },
      { title: 'Auditor de Focos de Distracción y Uso de Pantalla', desc: 'Calcula cuántos días al año pasas deslizando en redes y fija metas de desconexión.', sub: 'Atención' },
      { title: 'Estructurador de Metas SMART con Micro-Pasos', desc: 'Descompone un objetivo anual en hitos trimestrales, semanales y diarios.', sub: 'Metas' },
      { title: 'Diario de Gratitud Guiado con Prompts Psicológicos', desc: 'Preguntas diarias enfocadas en perspectiva estoica y aprecio de micro-momentos.', sub: 'Estoicismo' },
      { title: 'Matriz de Eisenhower Interactiva de Tareas', desc: 'Clasifica tareas en urgente vs importante y genera lista de delegación o descarte.', sub: 'Gestión' },
      { title: 'Test de Cronotipo de Sueño (León, Oso, Lobo, Delfín)', desc: 'Descubre tus horas pico de creatividad y concentración según el Dr. Breus.', sub: 'Energía' },
      { title: 'Generador de Respuestas Asertivas para Decir Que No', desc: 'Guiones corteses y firmes para rechazar peticiones que saturan tu agenda.', sub: 'Límites' },
      { title: 'Monitor de Rachas de Micro-Hábitos Atómicos', desc: 'Seguimiento visual de pequeñas victorias con regla de los 2 minutos.', sub: 'Hábitos' },
      { title: 'Desafío de 21 Días de Desintoxicación Dopamínica', desc: 'Plan paso a paso para recuperar la capacidad de concentración profunda.', sub: 'Enfoque' },
      { title: 'Reencuadre de Pensamientos Catastróficos (TCC)', desc: 'Guía paso a paso para desmontar distorsiones cognitivas y anticipaciones de ansiedad.', sub: 'Emociones' },
      { title: 'Calculadora de Tiempo Libre Real en tu Semana', desc: 'Resta obligaciones fijas y descubre exactamente cuántas horas libres tienes.', sub: 'Tiempo' },
    ],
  },
  'finanzas-inversiones': {
    level: 1,
    category: 'Finanzas & Inversiones',
    startNum: 61,
    apps: [
      { title: 'Simulador de Interés Compuesto y Libertad Financiera', desc: 'Proyecta el crecimiento de tu capital a 5, 10, 20 años con aportes mensuales e interés real.', sub: 'Inversión' },
      { title: 'Calculadora del Número FIRE (Independencia Financiera)', desc: 'Calcula el patrimonio neto requerido para vivir de tus rentas con la regla del 4%.', sub: 'FIRE' },
      { title: 'Estrategia de Pago de Deudas: Bola de Nieve vs Avalancha', desc: 'Compara qué método te ahorra más intereses y liquida préstamos más rápido.', sub: 'Deudas' },
      { title: 'Calculadora de Fondo de Emergencia Personalizado', desc: 'Determina si necesitas 3, 6 o 12 meses según estabilidad laboral y cargas familiares.', sub: 'Ahorro' },
      { title: 'Distribuidor de Presupuesto 50/30/20 Interactivo', desc: 'Asigna tus ingresos netos a necesidades básicas, deseos e inversión sin hojas confusas.', sub: 'Presupuesto' },
      { title: 'Calculadora de Rentabilidad Neta de Alquiler Inmobiliario', desc: 'Evalúa rentabilidad bruta, IBI, seguros, vacancia y rendimiento sobre el capital invertido.', sub: 'Bienes Raíces' },
      { title: 'Cotizador de Tarifa por Hora para Freelancers y Consultores', desc: 'Calcula cuánto cobrar por hora contemplando vacaciones, impuestos y gastos fijos.', sub: 'Freelance' },
      { title: 'Calculadora de Inflación y Pérdida de Poder Adquisitivo', desc: 'Visualiza cuánto valor real perderá tu dinero quieto en el banco con la inflación anual.', sub: 'Educación' },
      { title: 'Simulador de Amortización Anticipada de Hipoteca', desc: 'Compara si te conviene reducir cuota mensual o acortar el plazo total del crédito.', sub: 'Hipotecas' },
      { title: 'Calculadora de Punto de Equilibrio para Pequeños Negocios', desc: 'Calcula cuántas unidades o servicios debes facturar al mes para cubrir todos tus costos.', sub: 'Negocios' },
      { title: 'Evaluador de Gastos Hormiga y Vampiro Anuales', desc: 'Suma cafés diarios, suscripciones olvidadas y comisiones bancarias en un total anual.', sub: 'Ahorro' },
      { title: 'Calculadora de Retorno de Inversión (ROI) en Cursos y Herramientas', desc: 'Estima en cuántos meses recuperas el costo de una formación o software profesional.', sub: 'Decisiones' },
      { title: 'Simulador de Dividendos Recurrentes para Cartera de Inversión', desc: 'Proyecta tu flujo de caja pasivo mensual según la rentabilidad por dividendo (Yield).', sub: 'Bolsa' },
      { title: 'Auditor Express de Salud Financiera y Solvencia', desc: 'Semáforo de liquidez, ratio de endeudamiento y capacidad de ahorro mensual.', sub: 'Diagnóstico' },
      { title: 'Planificador de Ahorro para Objetivos Grandes (Viaje, Coche, Casa)', desc: 'Calcula cuánto ahorrar semanalmente para llegar a la fecha límite sin estrés.', sub: 'Metas' },
    ],
  },
  'educacion-oposiciones': {
    level: 1,
    category: 'Educación & Oposiciones',
    startNum: 76,
    apps: [
      { title: 'Planificador de Estudio por Vueltas al Temario de Oposición', desc: 'Distribuye temas según fechas de examen, días de repaso y dificultad del tema.', sub: 'Oposiciones' },
      { title: 'Simulador de Nota de Corte y Baremo de Méritos', desc: 'Calcula tu puntuación total sumando examen teórico, supuestos prácticos y antigüedad.', sub: 'Baremo' },
      { title: 'Cronómetro Pomodoro con Registro de Horas Reales Estudiadas', desc: 'Mide bloques de estudio efectivos descartando interrupciones para llevar métricas.', sub: 'Técnica' },
      { title: 'Calculadora de Desglose de Preguntas Test (Penalización por Error)', desc: 'Calcula si vale la pena arriesgar respuestas dudosas según fórmula A - (E/(N-1)).', sub: 'Exámenes' },
      { title: 'Generador de Rutas de Estudio Semanales para Universitarios', desc: 'Equilibra materias teóricas con prácticas según créditos y fechas de entregas.', sub: 'Universidad' },
      { title: 'Planificador de Repaso Espaciado (Curva del Olvido)', desc: 'Programa repasos automáticos a las 24h, 7 días, 15 días y 30 días para fijar memoria.', sub: 'Memorización' },
      { title: 'Test de Nivel de Comprensión Lectora y Velocidad (Palabras/Min)', desc: 'Evalúa cuántas palabras lees por minuto y tu porcentaje de retención.', sub: 'Lectura' },
      { title: 'Organizador de Temas y Simulacros de Examen', desc: 'Lleva registro de fallos en simulacros para enfocar los puntos débiles del temario.', sub: 'Seguimiento' },
      { title: 'Calculadora de Horas de Sueño y Descanso Óptimo para Opositores', desc: 'Coordina ciclos de sueño de 90 minutos para consolidar memoria de largo plazo.', sub: 'Bienestar' },
      { title: 'Estructurador de Esquemas y Mapas Conceptuales', desc: 'Guía paso a paso para sintetizar leyes y normativas extensas en fichas de 1 hoja.', sub: 'Síntesis' },
      { title: 'Evaluador de Técnicas de Estudio (Feynman vs Active Recall)', desc: 'Recomienda la técnica ideal según si estudias leyes, fórmulas o conceptos abstractos.', sub: 'Metodología' },
      { title: 'Simulador de Defensa de Programación Didáctica / Entrevista', desc: 'Banco interactivo de preguntas difíciles del tribunal con rúbrica de evaluación.', sub: 'Defensa Oral' },
    ],
  },
  'carrera-linkedin': {
    level: 1,
    category: 'Carrera & LinkedIn',
    startNum: 88,
    apps: [
      { title: 'Optimizador de Titular y Acerca de en Perfil de LinkedIn', desc: 'Estructura tu propuesta de valor profesional con palabras clave que atraen reclutadores.', sub: 'LinkedIn' },
      { title: 'Generador de Respuestas para Entrevistas con Método STAR', desc: 'Convierte tus logros en respuestas de Situación, Tarea, Acción y Resultado medible.', sub: 'Entrevistas' },
      { title: 'Calculadora de Salario Neto y Negociación de Aumento', desc: 'Simula el impacto de un incremento salarial contemplando tramos impositivos y beneficios.', sub: 'Salario' },
      { title: 'Auditor de Currículum para Filtros ATS (Applicant Tracking System)', desc: 'Verifica formato, densidad de keywords y legibilidad que exigen los softwares de RRHH.', sub: 'CV' },
      { title: 'Generador de Mensajes de Conexión en Frío por LinkedIn', desc: 'Plantillas personalizables para conectar con directores de área sin parecer spam.', sub: 'Networking' },
      { title: 'Test de Preparación para Transición de Carrera o Sector', desc: 'Mapea tus habilidades transferibles hacia el mundo tech, remoto o consultoría.', sub: 'Transición' },
      { title: 'Simulador de Preguntas Trampa en Entrevistas de Trabajo', desc: 'Prepara respuestas para "¿cuál es tu mayor debilidad?" y "¿por qué dejaste tu empleo?".', sub: 'Entrevistas' },
    ],
  },
  'relaciones-pareja': {
    level: 1,
    category: 'Relaciones & Pareja',
    startNum: 95,
    apps: [
      { title: 'Test de los 5 Lenguajes del Amor para Parejas', desc: 'Descubre si priorizas palabras de afirmación, tiempo de calidad, regalos o contacto físico.', sub: 'Diagnóstico' },
      { title: 'Ruleta Generadora de Citas y Planes Fuera de la Rutina', desc: 'Ideas románticas clasificadas por presupuesto (gratis, bajo costo, cena especial).', sub: 'Citas' },
      { title: 'Mediador de Conversaciones Difíciles y Conflictos', desc: 'Guía de comunicación no violenta para expresar necesidades sin reproches ni defensas.', sub: 'Comunicación' },
      { title: 'Calculadora de Reparto Justo de Tareas del Hogar', desc: 'Equilibra carga mental y horas dedicadas a tareas domésticas con métricas visibles.', sub: 'Convivencia' },
      { title: 'Cuestionario de Alineación de Valores y Proyecto de Vida', desc: 'Evalúa compatibilidad en finanzas conjuntas, hijos, vivienda y visión de futuro.', sub: 'Valores' },
      { title: 'Generador de Mensajes de Reconocimiento y Detalle Diario', desc: 'Ideas de notas y mensajes de texto para nutrir la conexión diaria en la pareja.', sub: 'Vínculo' },
    ],
  },

  // NIVEL 2: CATEGORÍAS ESPECIALIZADAS
  'artesania-diy': {
    level: 2,
    category: 'Artesanía & DIY',
    startNum: 101,
    apps: [
      { title: 'Calculadora de Gramos de Cera y Esencia para Velas Artesanales', desc: 'Calcula porcentaje de carga aromática y mecha adecuada según diámetro del vaso.', sub: 'Velas' },
      { title: 'CALCULADORA DE PROPORCIONES PARA RESINA EPOXI', desc: 'Calcula ratio exacto entre componente A y B por peso o volumen para evitar burbujas y mal curado.', sub: 'Resina Epoxi' },
      { title: 'GUÍA DE RESTAURACIÓN DE MUEBLES DE MADERA Y PINTURA A LA TIZA', desc: 'Paso a paso para decapar, lijar, aplicar chalk paint, encerar y proteger maderas antiguas.', sub: 'Restauración' },
      { title: 'CALCULADORA DE AZULEJOS, PINTURA Y PAPEL PINTADO PARA REFORMAS', desc: 'Calcula metros cuadrados de pared, rollos necesarios y merma recomendada del 10%.', sub: 'Reformas' },
      { title: 'GENERADOR DE PATRONES DE COSTURA BÁSICA Y CORTE DE TELA', desc: 'Adapta medidas corporales básicas a patrones de faldas, cojines y tote bags sin desperdicio.', sub: 'Costura' },
      { title: 'Calculadora de Arcilla Polimérica y Tiempos de Horneado', desc: 'Gramos necesarios para pendientes y temperatura exacta de horno para piezas resistentes.', sub: 'Modelado' },
      { title: 'Calculadora de Jabones Artesanales por Saponificación', desc: 'Calcula índice de sosa cáustica, agua y aceites base para barras hidratantes seguras.', sub: 'Jabonería' },
      { title: 'PLANIFICADOR DE MACRAMÉ Y LONGITUD DE CUERDAS PARA TAPICES', desc: 'Calcular el largo de tiras de algodón para tapices, porta macetas y plumas decorativas.', sub: 'Macramé' },
      { title: 'Calculadora de Madera y Lista de Cortes para Muebles DIY', desc: 'Optimiza el corte de listones y tableros MDF para armar estanterías sin sobrantes.', sub: 'Carpintería' },
      { title: 'Calculadora de Lanas y Puntos para Tejido a Crochet', desc: 'Estima ovillos necesarios y muestra de tensión para mantas, gorros y bufandas.', sub: 'Crochet' },
      { title: 'Guía de Selección de Barnices y Selladores según Superficie', desc: 'Elige poliuretano, laca al agua o aceites naturales para interior o exterior.', sub: 'Acabados' },
      { title: 'Calculadora de Precios de Venta para Productos Hechos a Mano', desc: 'Calcula mano de obra por hora, materiales, empaque y comisión de ferias o Etsy.', sub: 'Costos Artesanales' },
      { title: 'Mezclador de Colores y Pigmentos para Pintura Acrílica', desc: 'Ratios para conseguir tonos tierra, pasteles y sombras sin ensuciar la mezcla.', sub: 'Pintura' },
      { title: 'Diseñador de Encuadernación Artesanal y Costura Japonesa', desc: 'Calcula pliegos de papel, grosor de lomo y perforaciones para libretas cosidas a mano.', sub: 'Papelería' },
      { title: 'Calculadora de Silicona para Moldes de Piezas 3D', desc: 'Estima mililitros de silicona líquida necesarios para encerrar y clonar una matriz.', sub: 'Moldes' },
    ],
  },
  'hogar-organizacion': {
    level: 2,
    category: 'Hogar & Organización',
    startNum: 116,
    apps: [
      { title: 'Organizador de Limpieza Profunda por Zonas FlyLady', desc: 'Distribuye tareas semanales de 15 minutos para mantener la casa en orden continuo.', sub: 'Rutinas' },
      { title: 'Calculadora de Almacenamiento en Armarios y Canastos', desc: 'Optimiza distribución de ropa doblada en vertical según medidas de cajones.', sub: 'Armarios' },
      { title: 'Auditor de Despensa y Fechas de Caducidad de Alimentos', desc: 'Inventario interactivo para cocinar primero lo próximo a vencer y reducir desperdicio.', sub: 'Cocina' },
      { title: 'Calculadora de Litros de Pintura por Habitación y Techos', desc: 'Resta ventanas y puertas para comprar los botes justos sin gasto sobrante.', sub: 'Pintura' },
      { title: 'Guía de Soluciones Naturales de Limpieza (Bicarbonato y Vinagre)', desc: 'Fórmulas caseras no tóxicas para desengrasar horno, quitar sarro y manchas.', sub: 'Eco Limpieza' },
      { title: 'Planificador de Mudanza Paso a Paso en 30 Días', desc: 'Cronograma para etiquetar cajas por colores, bajas de servicios y embalaje seguro.', sub: 'Mudanzas' },
      { title: 'Checklist Interactivo para Dejar la Casa Segura al Viajar', desc: 'Llaves de paso, enchufes desconectados, plantas y seguridad para irte tranquilo.', sub: 'Viajes' },
      { title: 'Calculadora de Consumo Eléctrico de Electrodomésticos', desc: 'Detecta los aparatos que más inflan tu factura de luz y calcula horas valle.', sub: 'Ahorro Energía' },
      { title: 'Planificador de Riego y Cuidados de Plantas de Interior', desc: 'Alertas de luz y frecuencia de riego para potos, monsteras y suculentas.', sub: 'Plantas' },
      { title: 'Diseñador de Menús Semanales por Tipo de Ingrediente', desc: 'Organiza qué cocinar según verduras frescas compradas el fin de semana.', sub: 'Alimentación' },
      { title: 'Organizador de Documentos Importantes del Hogar', desc: 'Estructura de carpetas físicas y digitales para pólizas, escrituras y contratos.', sub: 'Papeles' },
      { title: 'Guía de Mantenimiento Preventivo del Hogar (Filtros y Caldera)', desc: 'Fechas clave de purgado de radiadores, limpieza de filtros de aire y desagües.', sub: 'Mantenimiento' },
      { title: 'Desafío de 30 Días de Descarte y Minimalismo', desc: 'Despídete de un objeto el día 1, dos el día 2 hasta vaciar estantes saturados.', sub: 'Minimalismo' },
      { title: 'Calculadora de Presupuesto para Remodelación de Baño o Cocina', desc: 'Desglose de sanitarios, mano de obra, grifería e imprevistos del 15%.', sub: 'Reformas' },
      { title: 'Optimizador de Distribución de Muebles en Espacios Pequeños', desc: 'Reglas de circulación de 70cm y aprovechamiento de paredes en monoambientes.', sub: 'Distribución' },
    ],
  },
  'fotografia-edicion': {
    level: 2,
    category: 'Fotografía & Edición',
    startNum: 131,
    apps: [
      { title: 'Calculadora de Profundidad de Campo y Distancia Hiperfocal', desc: 'Calcula apertura y punto de enfoque para que todo el paisaje quede nítido.', sub: 'Óptica' },
      { title: 'Simulador del Triángulo de Exposición (ISO, Diafragma, Obturador)', desc: 'Visualiza cómo compensar la luz manteniendo nitidez sin ruido digital.', sub: 'Técnica' },
      { title: 'Calculadora de la Hora Dorada y Hora Azul por Coordenadas', desc: 'Conoce los minutos exactos de luz suave para sesiones de fotos al aire libre.', sub: 'Iluminación' },
      { title: 'Guía de Poses para Retratos Individuales y Parejas', desc: 'Catálogo de posturas naturales para evitar rigidez en manos y postura.', sub: 'Retrato' },
      { title: 'Calculadora de Espacio en Tarjetas SD y Discos para RAWs', desc: 'Calcula cuántas fotos caben según los megapíxeles y formato de tu cámara.', sub: 'Almacenamiento' },
      { title: 'Optimizador de Ajustes de Cámara para Fotografía Nocturna y Vía Láctea', desc: 'Aplica la regla de los 500 para evitar que las estrellas salgan movidas.', sub: 'Astrofoto' },
      { title: 'Selector de Distancia Focal según Tipo de Fotografía', desc: 'Recomienda si usar 24mm, 35mm, 50mm u 85mm según espacio y compresión.', sub: 'Objetivos' },
      { title: 'Cotizador de Tarifas para Sesiones Fotográficas y Eventos', desc: 'Calcula horas de toma, selección, edición y entrega con margen profesional.', sub: 'Negocio Foto' },
      { title: 'Guía de Iluminación de Estudio con 1, 2 y 3 Puntos de Luz', desc: 'Esquemas visuales Rembrandt, Butterfly, Split y luz de recorte para retrato.', sub: 'Estudio' },
      { title: 'Generador de Paletas de Color para Color Grading en Lightroom', desc: 'Armonías de color complementario y análogo para aplicar en sombras y luces.', sub: 'Edición' },
      { title: 'Checklist de Equipo para Sesión de Fotos en Exterior', desc: 'Baterías cargadas, tarjetas formateadas, reflectores, kit de limpieza y lens pen.', sub: 'Producción' },
      { title: 'Calculadora de Tamaño de Impresión en Lienzo según Megapíxeles', desc: 'Determina a cuántos DPI imprimir para que el cuadro no se pixele.', sub: 'Impresión' },
      { title: 'Guía de Parámetros de Cámara para Fotografía de Producto / Ecommerce', desc: 'Ajustes para fondo blanco puro, enfoque total del producto y nitidez sin reflejos.', sub: 'Producto' },
      { title: 'Selector de Filtros Fotográficos (ND, Polarizador, UV, Black Mist)', desc: 'Elige el filtro adecuado para ríos de efecto seda o eliminar reflejos de agua.', sub: 'Filtros' },
      { title: 'Organizador de Catálogo y Copias de Seguridad 3-2-1 para Fotógrafos', desc: 'Estructura de carpetas por año/cliente y almacenamiento en nube para no perder fotos.', sub: 'Archivos' },
    ],
  },
  'marketing-redes-sociales': {
    level: 2,
    category: 'Marketing & Redes Sociales',
    startNum: 146,
    apps: [
      { title: 'Calculadora de Tasa de Engagement para Instagram y TikTok', desc: 'Evalúa la interacción real de una cuenta descartando seguidores inactivos o bots.', sub: 'Métricas' },
      { title: 'Generador de Hooks Magnéticos para Reels y Videos Cortos', desc: 'Estructura los primeros 3 segundos con patrones de curiosidad para retener audiencia.', sub: 'Hooks' },
      { title: 'Calculadora de Retorno de Inversión Publicitaria (ROAS) en Meta Ads', desc: 'Calcula qué coste por adquisición (CPA) máximo soporta tu margen de producto.', sub: 'Publicidad' },
      { title: 'Planificador de Calendario Editorial Semanal (4 Pilares de Contenido)', desc: 'Equilibra contenido educativo, de autoridad, entretenimiento y venta directa.', sub: 'Contenido' },
      { title: 'Calculadora de Tasa de Conversión de Páginas de Venta', desc: 'Calcula visitas necesarias para alcanzar tus metas de facturación mensual.', sub: 'Conversión' },
      { title: 'Generador de Asuntos de Email con Alta Tasa de Apertura', desc: 'Fórmulas probadas basadas en urgencia, novedad y beneficio personal.', sub: 'Email Marketing' },
      { title: 'Calculadora del Costo de Adquisición de Clientes (CAC) vs LTV', desc: 'Determina si la relación valor de vida del cliente supera al costo de captación.', sub: 'Estrategia' },
      { title: 'Buscador de Ideas de Contenido por Preguntas de la Audiencia', desc: 'Genera 20 temas de publicaciones a partir de 1 problema recurrente de tu cliente.', sub: 'Ideación' },
      { title: 'Calculadora de Presupuesto Diario para Campañas de Tráfico', desc: 'Distribuye tu inversión entre prospección fría y retargeting en Instagram.', sub: 'Ads' },
      { title: 'Auditor de Biografía de Instagram para Conversión a Clics', desc: 'Optimiza la propuesta en 150 caracteres, emojis clave y llamada a la acción al link.', sub: 'Optimización' },
      { title: 'Generador de Estructuras para Carruseles Educativos de Alto Guardado', desc: 'Paso a paso de portada gancho, desarrollo en 6 diapositivas y cierre interactivo.', sub: 'Carruseles' },
      { title: 'Calculadora de Comisión para Afiliados y Creadores', desc: 'Calcula márgenes netos repartidos entre creador y afiliados sin comprometer ganancias.', sub: 'Afiliados' },
      { title: 'Guía de Secuencias de Stories de 3 Pasos para Venta Diaria', desc: 'Estructura de contexto, demostración de la solución y enlace directo a WhatsApp.', sub: 'Stories' },
      { title: 'Auditor de Competencia en Biblioteca de Anuncios de Meta', desc: 'Checklist para analizar ofertas, formatos de video y titulares de otros anunciantes.', sub: 'Espiar Competencia' },
      { title: 'Calculadora de Crecimiento de Lista de Suscriptores / Leads', desc: 'Estima suscriptores mensuales según el tráfico a tu imán de prospectos (Lead Magnet).', sub: 'Lead Generation' },
    ],
  },
};

// Generate full array of 180 MiniApps
export const ALL_180_MINIAPPS: MiniAppItem[] = (() => {
  const result: MiniAppItem[] = [];

  Object.entries(categoryAppsConfig).forEach(([catSlug, catData]) => {
    catData.apps.forEach((app, index) => {
      const appNum = catData.startNum + index;
      const salesPageAvailable = appNum % 3 !== 0; // ~66% have dedicated page, others show "PRÓXIMAMENTE" as requested

      result.push({
        id: appNum,
        number: appNum,
        level: catData.level,
        category: catData.category,
        categorySlug: catSlug,
        subcategory: app.sub,
        title: app.title.toUpperCase(),
        description: app.desc,
        prompt: `Actúa como un desarrollador experto de MiniApps y estratega de producto digital. Construye una MiniApp interactiva en JavaScript/React orientada a "${catData.category}". 
Título de la MiniApp: "${app.title}".
Objetivo funcional: ${app.desc}.
Requisitos de la experiencia:
1. Pantalla de entrada con inputs visuales claros, sliders y selectores fáciles de responder.
2. Lógica de cálculo o diagnóstico en tiempo real sin recargar página.
3. Pantalla de resultado final de alto impacto visual con recomendaciones accionables, métricas calculadas y botón para compartir o descargar.
4. Diseño responsivo para smartphones y ordenadores con paleta moderna y fondo oscuro elegante.`,
        salesPageUrl: salesPageAvailable ? `https://ejemplo.fabricaverse.com/miniapp/${appNum}` : null,
      });
    });
  });

  // Ensure items 161 to 180 if needed to total exactly 180 items
  let nextNum = result.length + 1;
  const categoriesList = Object.values(categoryAppsConfig);
  while (result.length < 180) {
    const fallbackCat = categoriesList[result.length % categoriesList.length];
    result.push({
      id: nextNum,
      number: nextNum,
      level: fallbackCat.level,
      category: fallbackCat.category,
      categorySlug: Object.keys(categoryAppsConfig)[result.length % categoriesList.length],
      subcategory: 'Especializada',
      title: `HERRAMIENTA INTERACTIVA PRO #${nextNum}`,
      description: `Solución interactiva especializada diseñada para optimizar resultados y automatizar decisiones en el nicho de ${fallbackCat.category}.`,
      prompt: `Actúa como arquitecto de software de MiniApps interactivas. Desarrolla la aplicación #${nextNum} para el sector ${fallbackCat.category} con interfaz moderna y resultados instantáneos.`,
      salesPageUrl: nextNum % 2 === 0 ? `https://ejemplo.fabricaverse.com/miniapp/${nextNum}` : null,
    });
    nextNum++;
  }

  return result.slice(0, 180);
})();
