import { languageCourses, type LanguageSlug } from "@/data/language-courses";

type EsCourseCopy = {
  code: string;
  title: string;
  level: string;
  track: string;
  summary: string;
  audience: string;
  modules: [string, string][];
};

const copies: EsCourseCopy[] = [
  {
    code: "EN-A1", title: "Inglés Fundamentos 1", level: "Principiante · MCER A1", track: "Inglés general",
    summary: "Desarrollar la pronunciación, las estructuras de frases esenciales y la confianza para comunicarse en situaciones cotidianas familiares.",
    audience: "Estudiantes con poco inglés, una larga pausa en los estudios o necesidad de reconstruir las bases sistemáticamente.",
    modules: [["Conociéndonos", "Sonidos básicos, presentaciones, países y profesiones, ser y pronombres personales."], ["La vida cotidiana", "La hora, las fechas, las rutinas, el presente simple, la frecuencia y las preguntas básicas."], ["Por la ciudad", "Los lugares, las direcciones, el transporte, hay y las preposiciones comunes."], ["Una primera interacción completa", "Pedir, comprar, mensajes telefónicos y una tarea de expresión oral integrada."]],
  },
  {
    code: "EN-A2", title: "Inglés Fundamentos 2", level: "Elemental · MCER A2", track: "Inglés general",
    summary: "Conectar el vocabulario familiar en mensajes completos para la vida cotidiana y los estudios.",
    audience: "Estudiantes que comprenden frases básicas y textos cortos pero necesitan una expresión más estable y conectada.",
    modules: [["Experiencias e historias", "El pasado simple, la secuenciación, describir personas y eventos, y narrar."], ["Planes y decisiones", "Las formas del futuro, las comparaciones, los consejos, los planes de viaje y estudio."], ["Salud y estilo de vida", "El cuerpo, los hábitos, los verbos modales, las citas y pedir ayuda."], ["Expresar una idea completa", "Palabras de enlace, correos electrónicos cortos, un discurso de dos minutos y una tarea integrada."]],
  },
  {
    code: "EN-B1", title: "Inglés Intermedio 1", level: "Intermedio · MCER B1", track: "Inglés general",
    summary: "Pasar de las respuestas cortas a la narración estructurada, la explicación y los puntos de vista personales.",
    audience: "Estudiantes con habilidades de comunicación cotidiana que quieren mayor alcance, precisión y confianza en la lectura.",
    modules: [["Aprendizaje y crecimiento", "Estrategias de aprendizaje, compartir experiencias, el presente perfecto y las preguntas de seguimiento."], ["Personas y sociedad", "Entrevistas, relaciones, comunidades, las proposiciones de relativo y defender una opinión."], ["Medios de comunicación e información", "Lo esencial de las noticias, hecho y opinión, la voz pasiva y la información reportada."], ["Proyecto temático", "Lectura de fuentes, debate en grupo, un texto de punto de vista y una presentación de cinco minutos."]],
  },
  {
    code: "EN-B1+", title: "Inglés Intermedio 2", level: "Intermedio-alto · MCER B1+", track: "Inglés general",
    summary: "Gestionar información más compleja combinando debate, lectura y escritura.",
    audience: "Estudiantes que se comunican cómodamente en la vida cotidiana y quieren un inglés general más sólido antes de estudios especializados.",
    modules: [["Puntos de vista y argumentos", "Afirmaciones, razones, ejemplos, enlaces complejos, acuerdo, desafío y aclaración."], ["Problemas y soluciones", "Temas urbanos, ambientales y tecnológicos, causas, comparaciones y recomendaciones."], ["Comunicación intercultural", "Diferencias culturales, tono, cortesía, reparar malentendidos y debate de casos."], ["Tarea de investigación integrada", "Fuentes múltiples, una entrevista, un informe escrito y una presentación de grupo."]],
  },
  {
    code: "EN-B2", title: "Comunicación Inglesa Avanzada", level: "Avanzado · MCER B2", track: "Inglés general",
    summary: "Desarrollar una comunicación precisa y bien calibrada con mayor exactitud, lógica y estrategias de interacción.",
    audience: "Estudiantes con una base sólida de inglés que necesitan progresar en entornos académicos, públicos o profesionales.",
    modules: [["Precisión y alcance", "Matices, colocaciones, registro y formas de condensar o desarrollar una idea compleja."], ["Lectura crítica", "Posición, evidencias e hipótesis a través de fuentes, seguido de una respuesta escrita."], ["Debate y negociación", "Presidir, gestionar objeciones, concesión, reencuadre y construcción del consenso."], ["Proyecto de comunicación pública", "Investigación, estructura del discurso, apoyo visual, preguntas en directo y reflexión."]],
  },
  {
    code: "EN-SPK", title: "Inglés Oral Intensivo", level: "Específico · A2—B1+", track: "Expresión oral",
    summary: "Aumentar el tiempo de expresión oral de forma intencionada mientras se mejora la fluidez, la pronunciación y la interacción.",
    audience: "Estudiantes que comprenden más de lo que pueden decir o quieren un período enfocado de mejora de la expresión oral.",
    modules: [["Hablar con claridad", "Diagnóstico de pronunciación, acento, ritmo, grupos de pensamiento y sombreado."], ["Mantener una conversación", "Preguntas, seguimientos, respuestas, cambios de tema y estrategias de reparación."], ["Construir un mensaje completo", "Narraciones, descripción de imágenes, desarrollo de puntos de vista y marcos improvisados."], ["Semana de tareas reales", "Interacción social, resolución de problemas, debate y revisión de actuación grabada."]],
  },
  {
    code: "EN-BIZ", title: "Comunicación Empresarial en Inglés", level: "Específico · B1 y superior", track: "Inglés profesional",
    summary: "Practicar el inglés para reuniones, correos electrónicos, presentaciones y trabajo en equipo intercultural.",
    audience: "Profesionales que usan el inglés para el trabajo cotidiano, la comunicación con clientes o la colaboración internacional.",
    modules: [["Presencia profesional", "Funciones, small talk profesional, construcción de relaciones y etiqueta intercultural."], ["Correo electrónico y mensajería", "Asuntos, solicitudes, respuestas, tono, mensajes difíciles y seguimiento."], ["Reuniones y colaboración", "Órdenes del día, actualizaciones, aclaración, desacuerdo y confirmación de acciones."], ["Presentaciones y propuestas", "Datos, narrativa, comparación de opciones, preguntas de clientes y simulación de pitch."]],
  },
  {
    code: "EN-IELTS", title: "IELTS Fundamentos y Puente de Habilidades", level: "Preparación al examen · A2+ recomendado", track: "Preparación al examen",
    summary: "Fortalecer el idioma subyacente antes de desarrollar métodos estables para las tareas del IELTS y el examen.",
    audience: "Candidatos potenciales al IELTS cuyo vocabulario, gramática o las cuatro habilidades todavía no son consistentes.",
    modules: [["Diagnóstico y base lingüística", "Diagnóstico de entrada, vocabulario básico, frases complejas y plan de estudio."], ["Fundamentos de comprensión auditiva y lectura", "Localizar información, paráfrasis, estructura del texto y análisis de errores."], ["Fundamentos de expresión oral y escritura", "Desarrollar respuestas, recursos temáticos, párrafos, gráficos y opiniones."], ["Práctica integrada", "Práctica cronometrada de habilidades, un simulacro de etapa, retroalimentación y planificación de los próximos pasos."]],
  },
  {
    code: "FR-A1.1", title: "Francés Descubrimiento A1.1", level: "Principiante · MCER A1.1", track: "Francés general",
    summary: "Comenzar con los patrones sonoros y una primera presentación, estableciendo unas bases fiables en francés.",
    audience: "Principiantes completos o estudiantes que quieren reconstruir la pronunciación y las estructuras básicas de las frases.",
    modules: [["Bonjour, enchanté", "El alfabeto y los sonidos, los saludos, las presentaciones, los pronombres personales y être."], ["Yo y mi vida", "Los países, las profesiones, los números, las fechas, el género, los artículos básicos y avoir."], ["Un día en la ciudad", "Los lugares, el transporte, las direcciones, los verbos regulares y las preposiciones comunes."], ["Una primera tarea en francés", "Pedir en un café, comprar, pronunciación y una evaluación situacional."]],
  },
  {
    code: "FR-A1.2", title: "Francés Fundamentos A1.2", level: "Elemental · MCER A1", track: "Francés general",
    summary: "Ampliar las situaciones cotidianas y la gramática básica para ir más allá de la expresión palabra a palabra.",
    audience: "Estudiantes familiarizados con la pronunciación básica y el presente que quieren una comunicación cotidiana más completa.",
    modules: [["Familia y rutina", "Los posesivos, los verbos reflexivos, decir la hora y los hábitos cotidianos."], ["Casa y ciudad", "Describir una casa, la ubicación, el imperativo, las preguntas y las direcciones."], ["Comida y compras", "Los artículos partitivos, la cantidad, las preferencias, la comparación y las situaciones de servicio."], ["Planes para el fin de semana", "El futuro próximo, las invitaciones, las respuestas, la planificación y una tarea de expresión oral integrada."]],
  },
  {
    code: "FR-A2", title: "Francés Progresión A2", level: "Pre-intermedio · MCER A2", track: "Francés general",
    summary: "Hablar sobre experiencias y planes mientras se gestionan interacciones de viaje y vida cotidiana más completas.",
    audience: "Estudiantes que han completado A1 y quieren mayor dominio de los tiempos verbales, la comprensión auditiva y el habla conectada.",
    modules: [["Historias del pasado", "El pretérito perfecto, una introducción al imperfecto, la narración y las preguntas de seguimiento."], ["Viajes y servicios", "El alojamiento, el transporte, las solicitudes de ayuda, las reclamaciones y la confirmación."], ["Salud y decisiones", "La salud, la obligación, los consejos, los pronombres, la comparación y dar razones."], ["Proyecto de ciudad francesa", "Investigación, diseño de itinerario, redacción de correo electrónico y presentación de grupo."]],
  },
  {
    code: "FR-B1", title: "Francés Intermedio B1", level: "Intermedio · MCER B1", track: "Francés general",
    summary: "Debatir sobre temas sociales y culturales familiares mientras se desarrollan puntos de vista personales más claros.",
    audience: "Estudiantes con habilidades de comunicación cotidiana que quieren más profundidad en la lectura, el debate y la escritura.",
    modules: [["Estudios y trabajo", "La educación, la experiencia, los CVs, la motivación, los pronombres relativos y la expresión formal."], ["Medios de comunicación y cultura", "Los reportajes, las críticas, reportar información, los pronombres y comparar puntos de vista."], ["Sociedad y medio ambiente", "La causa, el resultado, la condición, el debate y un breve debate."], ["Proyecto de resultado temático", "Textos múltiples, una entrevista, un informe escrito y una presentación oral."]],
  },
  {
    code: "FR-B2", title: "Aplicación del Francés Avanzado B2", level: "Intermedio-alto · MCER B2", track: "Francés general",
    summary: "Procesar información y argumentos complejos para los estudios, el trabajo o la preparación específica al examen.",
    audience: "Estudiantes con una base intermedia sólida que necesitan el francés para uso académico, profesional o público.",
    modules: [["Registro y precisión", "Registro formal e informal, cohesión, paráfrasis y edición lingüística."], ["Análisis y argumentación", "Estructura de la argumentación, evaluación de evidencias, concesión, refutación y lectura crítica."], ["Debate sobre cuestiones públicas", "Educación, tecnología y cultura a través de la mesa redonda y la síntesis."], ["Investigación y presentación", "Revisión de fuentes, redacción argumentativa, expresión formal y preguntas en directo."]],
  },
  {
    code: "FR-DELF", title: "Preparación al DELF", level: "Preparación al examen · A2/B1", track: "Preparación al examen",
    summary: "Comprender los cuatro componentes del DELF y los criterios de evaluación, y luego desarrollar métodos de examen fiables.",
    audience: "Estudiantes que planifican el DELF A2 o B1 y ya alcanzan el nivel de idioma general correspondiente.",
    modules: [["Diagnóstico del examen", "Confirmación del nivel, criterios, lagunas individuales y plan de formación."], ["Estrategias de comprensión y lectura", "Predicción, localización, paráfrasis, verificación y trabajo cronometrado."], ["Tareas de expresión y escritura", "Interacción, puntos de vista, cartas, textos cortos y retroalimentación enfocada."], ["Examen simulado y revisión", "Una simulación completa, debate de puntuaciones, revisión de errores y planificación final."]],
  },
  {
    code: "JP-START", title: "Japonés Principiante", level: "Principiante · N5 inicial", track: "Japonés general",
    summary: "Dominar el kana, la pronunciación y los primeros patrones esenciales para un comienzo seguro.",
    audience: "Principiantes completos o estudiantes que quieren reconstruir el kana y comenzar sistemáticamente.",
    modules: [["Kana y sonido", "Kana básico, sonidos sonoros, vocales largas, consonantes dobles y sonidos contraídos."], ["Primer encuentro", "Saludos, presentaciones, demostrativos, afirmaciones y preguntas."], ["Mi día", "La hora, las fechas, los verbos introductorios, las partículas に・で・を y las rutinas."], ["Primera tarea situacional", "Compras, pedir, direcciones en el campus y una presentación básica."]],
  },
  {
    code: "JP-N5", title: "Japonés Elemental", level: "Elemental · JLPT N5", track: "Japonés general",
    summary: "Desarrollar un sistema gramatical elemental y la comunicación cotidiana para textos cortos e intercambios comunes.",
    audience: "Estudiantes que conocen el kana y algunos patrones y quieren completar una etapa elemental sistemática.",
    modules: [["Vida y acción", "Grupos y formas verbales, existencia, invitaciones y actividades cotidianas."], ["Descripción y comparación", "Adjetivos, preferencias, capacidad, comparación, personas y lugares."], ["Peticiones y permiso", "La forma て, las peticiones, el permiso, la prohibición y las acciones en curso."], ["Tarea elemental integrada", "Lectura y comprensión auditiva cortas, planificación de un viaje y evaluación de etapa."]],
  },
  {
    code: "JP-N4", title: "Japonés Pre-intermedio", level: "Pre-intermedio · JLPT N4", track: "Japonés general",
    summary: "Ampliar los tiempos verbales, las frases complejas, la comprensión auditiva y la lectura para comunicarse más allá de las declaraciones aisladas.",
    audience: "Estudiantes que han completado un curso elemental y quieren una capacidad más amplia o la preparación para el JLPT N4.",
    modules: [["Experiencia y cambio", "Formas simples, experiencia, cambios de estado, secuencia y enlaces de frases."], ["Planes y consejos", "Intención, planes, condiciones, recomendaciones y diálogo de resolución de problemas."], ["Información e informes", "Rumores, inferencias, razones, noticias cortas y transmitir información."], ["Proyecto de vida cotidiana", "Una encuesta, una redacción corta, un informe de grupo y práctica de nivel N4."]],
  },
  {
    code: "JP-N3", title: "Japonés Intermedio", level: "Intermedio · JLPT N3", track: "Japonés general",
    summary: "Comprender frases más largas y expresar temas usando materiales japoneses cada vez más naturales.",
    audience: "Estudiantes con gramática elemental completa listos para la lectura, comprensión auditiva y expresión intermedias.",
    modules: [["Frases largas y textos", "Modificación, conectores, referencia e identificación del foco del párrafo."], ["Comprensión auditiva y lectura en sociedad", "Avisos, entrevistas, noticias cortas, toma de notas y resumen."], ["Puntos de vista e interacción", "Acuerdo, desacuerdo, tacto, razones y debate temático."], ["Tarea de resultado intermedio", "Lectura temática, un informe corto, presentación oral y evaluación N3."]],
  },
  {
    code: "JP-N2", title: "Aplicación del Japonés Intermedio-Alto", level: "Intermedio-alto · JLPT N2", track: "Japonés general",
    summary: "Gestionar textos sociales y profesionales complejos con una expresión más precisa y apropiada.",
    audience: "Estudiantes alrededor del N3 que necesitan progresar para estudios superiores, trabajo o el JLPT N2.",
    modules: [["Lectura atenta y matices", "Vocabulario abstracto, cuasi-sinónimos, conexiones complejas y estructura de la argumentación."], ["Comunicación profesional", "Lenguaje honorífico, correo electrónico, llamadas telefónicas, informes, solicitudes y resolución de problemas."], ["Cuestiones sociales", "Comprensión auditiva y lectura de noticias, análisis de posición, debate y redacción de resumen."], ["Presentación de investigación", "Recopilación de fuentes, redacción de informe, expresión formal y preguntas."]],
  },
  {
    code: "JP-JLPT", title: "Preparación Intensiva al JLPT", level: "Preparación al examen · N3/N2", track: "Preparación al examen",
    summary: "Usar la práctica cronometrada de idioma, lectura y comprensión auditiva con revisión sistemática para una mayor consistencia.",
    audience: "Estudiantes que han completado el nivel general correspondiente y planifican el JLPT N3 o N2.",
    modules: [["Diagnóstico, vocabulario y gramática", "Diagnóstico de capacidad, puntos clave del examen, matices y clasificación de errores."], ["Velocidad y estructura de lectura", "Métodos cronometrados para textos cortos, medios, largos y de búsqueda de información."], ["Estrategias de comprensión auditiva", "Tarea, punto clave, respuesta rápida y comprensión integrada."], ["Simulacros y ajuste final", "Simulaciones completas, revisión de datos, mejora enfocada y ritmo del examen."]],
  },
  {
    code: "KR-START", title: "Coreano Principiante", level: "Principiante · TOPIK 1 inicial", track: "Coreano general",
    summary: "Entender cómo funciona el Hangul y pasar rápidamente a la lectura básica y la expresión cotidiana.",
    audience: "Principiantes completos que quieren una introducción sistemática a las letras, los sonidos y los patrones básicos.",
    modules: [["Comprender el Hangul", "Vocales y consonantes básicas, bloques silábicos, consonantes finales y escritura."], ["Primer encuentro", "Saludos, presentaciones, países, profesiones y 이에요/예요."], ["Tiempo y lugar", "Los números, las fechas, la hora, las expresiones de existencia y las partículas básicas."], ["Tarea de vida en el campus", "Preguntar por lugares, rutinas, pedir y una presentación situacional."]],
  },
  {
    code: "KR-1", title: "Coreano Elemental 1", level: "Elemental · TOPIK 1", track: "Coreano general",
    summary: "Establecer el vocabulario y la gramática elementales para la comunicación básica en situaciones familiares.",
    audience: "Estudiantes que conocen el Hangul y los saludos básicos y quieren un curso elemental sistemático.",
    modules: [["Lo que hago cada día", "El presente, los verbos comunes, la hora, la frecuencia y las rutinas."], ["Comer y comprar", "La cantidad, los precios, pedir, las solicitudes y las elecciones."], ["Ciudad y viaje", "La ubicación, el transporte, el propósito, las direcciones y la planificación del itinerario."], ["Presentar mi vida", "Las preferencias, la capacidad, las frases enlazadas, la redacción corta y la expresión oral."]],
  },
  {
    code: "KR-2", title: "Coreano Elemental 2", level: "Pre-intermedio · TOPIK 2", track: "Coreano general",
    summary: "Ampliar los tiempos verbales, las razones y los planes para una conversación y escritura más completas y conectadas.",
    audience: "Estudiantes que han completado el Elemental 1 y quieren una comunicación cotidiana y alfabetización más sólidas.",
    modules: [["Experiencias y recuerdos", "El pasado, la experiencia, la secuenciación y la descripción de fotografías."], ["Planes e invitaciones", "El futuro, la intención, las invitaciones, los arreglos y los planes de viaje."], ["Salud y resolución de problemas", "Las razones, los consejos, la obligación, los síntomas y las situaciones de servicio."], ["Proyecto elemental integrado", "Comprensión auditiva y lectura cortas, redacción personal, presentación y evaluación."]],
  },
  {
    code: "KR-3", title: "Coreano Intermedio 1", level: "Intermedio · TOPIK 3", track: "Coreano general",
    summary: "Pasar de la conversación cotidiana a la expresión temática, la lectura, la comprensión auditiva y la redacción de párrafos.",
    audience: "Estudiantes con nivel elemental que quieren un debate más rico o un puente hacia el TOPIK II.",
    modules: [["Estudios y trabajo", "La experiencia, los objetivos, el discurso reportado, las situaciones formales y transmitir información."], ["Medios de comunicación y cultura", "Cine, medios en línea, temas culturales, comparación y respuesta a puntos de vista."], ["La vida en sociedad", "Normas públicas, medio ambiente, comunidad, causas y soluciones."], ["Proyecto de encuesta temática", "Cuestionarios, lectura de fuentes, gráficos, un informe y una presentación."]],
  },
  {
    code: "KR-4", title: "Coreano Intermedio 2", level: "Intermedio-alto · TOPIK 4", track: "Coreano general",
    summary: "Gestionar textos complejos y diferencias de registro para los estudios y la comunicación profesional.",
    audience: "Estudiantes intermedios que buscan mayor precisión, expresión formal y aplicación integrada.",
    modules: [["Registro y relaciones", "Los niveles de honoríficos, el estilo escrito y hablado, las solicitudes formales y el contexto."], ["Análisis de la información", "Noticias, entrevistas, gráficos, resúmenes e integración de fuentes múltiples."], ["Puntos de vista y argumentación", "Afirmaciones, razones, ejemplos, concesión y estrategias para avanzar en el debate."], ["Proyecto de resultado integrado", "Investigación temática, un informe escrito, presentación formal y preguntas en directo."]],
  },
  {
    code: "KR-TOPIK", title: "Preparación al TOPIK II", level: "Preparación al examen · Niveles 3—4", track: "Preparación al examen",
    summary: "Desarrollar métodos para la comprensión auditiva, la lectura y la escritura, usando la revisión regular para estabilizar el rendimiento.",
    audience: "Estudiantes pre-intermedios que planifican el TOPIK II con un objetivo de nivel 3 o 4.",
    modules: [["Diagnóstico y conocimientos lingüísticos", "Diagnóstico de nivel, vocabulario y gramática de alta frecuencia, mapa de tareas y plan."], ["Comprensión auditiva y lectura", "Propósito, ideas principales, detalles, orden del texto y estrategias cronometradas."], ["Enfoque en la escritura", "Completar frases, describir gráficos, estructura de opinión y retroalimentación sobre borradores."], ["Examen simulado completo", "Simulación completa, análisis de puntuaciones, agrupación de errores y ritmo final."]],
  },
];

const copyByCode = new Map(copies.map((copy) => [copy.code, copy]));

function formatDuration(value: string) {
  const match = value.match(/(\d+) 周 · (\d+) 课时/);
  return match ? `${match[1]} semanas · ${match[2]} horas lectivas` : value;
}

function formatFrequency(value: string) {
  const standard = value.match(/每周 (\d+) 次 · 每次 (\d+) 课时/);
  if (standard) return `${standard[1]} sesiones por semana · ${standard[2]} horas cada una`;
  const range = value.match(/每周 (\d+)—(\d+) 次/);
  return range ? `${range[1]}–${range[2]} sesiones por semana` : value;
}

function formatClassSize(value: string) {
  const match = value.match(/(\d+)—(\d+) 人/);
  return match ? `${match[1]}–${match[2]} estudiantes` : value;
}

function outcomesFor(track: string) {
  if (track === "Preparación al examen") {
    return [
      "Comprender los tipos de tareas evaluadas y las expectativas de evaluación",
      "Aplicar estrategias prácticas en condiciones cronometradas",
      "Usar los resultados de los simulacros y la retroalimentación para planificar una mejora enfocada",
    ];
  }
  if (track === "Expresión oral") {
    return [
      "Hablar con mayor claridad mejorando el ritmo y la inteligibilidad",
      "Mantener una interacción usando preguntas y estrategias de respuesta",
      "Realizar un discurso corto estructurado con mayor confianza",
    ];
  }
  if (track === "Inglés profesional") {
    return [
      "Comunicarse adecuadamente en situaciones laborales comunes",
      "Redactar correos electrónicos y mensajes de reunión profesionales más claros",
      "Presentar una idea y responder preguntas con confianza",
    ];
  }
  return [
    "Usar el vocabulario y las estructuras de etapa en una comunicación significativa",
    "Completar tareas integradas de comprensión auditiva, expresión oral, lectura y escritura",
    "Reconocer los puntos fuertes actuales y la etapa de aprendizaje siguiente apropiada",
  ];
}

export type EsCourse = {
  code: string;
  slug: string;
  language: LanguageSlug;
  languageLabel: string;
  title: string;
  level: string;
  track: string;
  summary: string;
  audience: string;
  duration: string;
  frequency: string;
  classSize: string;
  outcomes: string[];
  syllabus: { unit: string; title: string; content: string }[];
};

export const esCourses: EsCourse[] = languageCourses.map((course) => {
  const copy = copyByCode.get(course.code);
  if (!copy) throw new Error(`Missing Spanish course copy for ${course.code}`);
  return {
    code: course.code,
    slug: course.slug,
    language: course.language,
    languageLabel: { english: "Inglés", french: "Francés", japanese: "Japonés", korean: "Coreano" }[course.language],
    title: copy.title,
    level: copy.level,
    track: copy.track,
    summary: copy.summary,
    audience: copy.audience,
    duration: formatDuration(course.duration),
    frequency: formatFrequency(course.frequency),
    classSize: formatClassSize(course.classSize),
    outcomes: outcomesFor(copy.track),
    syllabus: copy.modules.map(([title, content], index) => ({
      unit: String(index + 1).padStart(2, "0"),
      title,
      content,
    })),
  };
});

export const esCoursesByLanguage = (language: LanguageSlug) =>
  esCourses.filter((c) => c.language === language);

export const findEsCourse = (language: string, slug: string) =>
  esCourses.find((c) => c.language === language && c.slug === slug);
