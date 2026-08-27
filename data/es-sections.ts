import type { LocalizedSection } from "@/data/fr-sections";
export type { LocalizedSection };

export const esSections: LocalizedSection[] = [
  {
    slug: "about",
    eyebrow: "EL CENTRO",
    title: "Una educación lingüística forjada por una década de práctica cotidiana",
    description:
      "Conoce nuestra misión, historia y enfoque de la enseñanza de idiomas para estudiantes, profesionales y organizaciones.",
    introTitle: "Un centro modelado por la enseñanza constante y el progreso de los estudiantes",
    intro: [
      "El Centro de Idiomas trabaja en colaboración con el Instituto de Investigación del Mercado de Capitales Zheshang de la Universidad de Finanzas y Economía de Zhejiang. Reúne los recursos de aprendizaje universitario con programas flexibles adaptados a las necesidades individuales y organizativas.",
      "Desde aproximadamente 2015, el centro ha evolucionado de clases de inglés y pequeños grupos de estudio hasta un programa de cuatro idiomas que cubre las competencias generales, los exámenes, la comunicación académica, el uso profesional y la formación personalizada.",
    ],
    image: "/images/library-hero.webp",
    cards: [
      { title: "Nuestra historia", label: "2015—2026", text: "Cursos, clubes de idiomas, talleres y revisiones pedagógicas forman la historia viva del centro." },
      { title: "Nuestro enfoque", label: "APRENDER USANDO", text: "Objetivos de etapa claros conectan el conocimiento lingüístico con la comunicación realmente utilizable." },
      { title: "Cómo trabajamos", label: "ENSEÑANZA Y APOYO", text: "La enseñanza, el desarrollo curricular, el apoyo a los estudiantes y los equipos de proyecto funcionan con estándares compartidos." },
      { title: "Instalaciones de evaluación", label: "ESPACIO CBT", text: "Puestos de examen informático, separadores y equipo de audio apoyan la evaluación lingüística." },
    ],
    closingTitle: "El progreso debe ser visible, útil y sostenible",
    closingText:
      "Valoramos la confianza para hablar, la capacidad de escribir con propósito y la curiosidad de comprender otra cultura, no simplemente completar un libro de texto.",
    ctaLabel: "Contactar con el centro",
  },
  {
    slug: "languages",
    eyebrow: "CURSOS DE IDIOMAS",
    title: "Cuatro idiomas, veintiséis formas estructuradas de progresar",
    description:
      "Elige entre los itinerarios de inglés, francés, japonés y coreano diseñados en torno al nivel, el objetivo y el uso práctico.",
    introTitle: "Empieza desde tu nivel actual, no desde un capítulo uno genérico",
    intro: [
      "Cada idioma sigue una progresión clara desde los fundamentos hasta una comunicación más independiente. Las clases enfocadas apoyan la expresión oral, el uso profesional y los principales exámenes de idiomas.",
      "Antes de recomendar un curso, consideramos los estudios previos, el nivel actual, los objetivos de aprendizaje y el tiempo que el estudiante puede invertir de manera realista.",
    ],
    image: "/images/language-class.webp",
    cards: [
      { title: "Inglés", label: "8 MODALIDADES", text: "Progresión A1 a B2, inglés oral, comunicación profesional y preparación para el IELTS.", href: "/es/languages/english" },
      { title: "Francés", label: "6 MODALIDADES", text: "Progresión A1.1 a B2 con una opción de preparación enfocada al DELF.", href: "/es/languages/french" },
      { title: "Japonés", label: "6 MODALIDADES", text: "Un recorrido estructurado desde los primeros pasos hasta el N5–N2 y la preparación para el JLPT.", href: "/es/languages/japanese" },
      { title: "Coreano", label: "6 MODALIDADES", text: "Progresión principiante e intermedio con comunicación práctica y TOPIK II.", href: "/es/languages/korean" },
    ],
    closingTitle: "¿No estás seguro de tu nivel?",
    closingText:
      "Cuéntanos qué has estudiado, adónde quieres llegar y cuánto tiempo tienes. Una breve conversación o una prueba de nivel puede evitar que una clase resulte demasiado fácil o demasiado exigente.",
    ctaLabel: "Solicitar una sugerencia de nivel",
  },
  {
    slug: "programs",
    eyebrow: "PROGRAMAS Y FORMACIÓN",
    title: "Diferentes objetivos requieren diferentes itinerarios de aprendizaje",
    description:
      "Combina cursos de idiomas con preparación enfocada para exámenes, estudios, trabajo, jóvenes estudiantes o necesidades organizativas.",
    introTitle: "Construir el programa en torno al resultado esperado",
    intro: [
      "Un estudiante que se prepara para estudiar en el extranjero necesita un ritmo diferente al de un profesional que se prepara para reuniones con clientes. Empezamos por la situación y luego elegimos el idioma, el contenido y el formato.",
      "Los programas pueden desarrollarse como un curso sostenido, un taller intensivo o una secuencia personalizada para un grupo.",
    ],
    image: "/images/modern-classroom.webp",
    cards: [
      { title: "Competencia general", label: "FUNDAMENTOS", text: "Comprensión, expresión, lectura y escritura equilibradas con una progresión de nivel clara." },
      { title: "Exámenes y estudios", label: "PREPARACIÓN", text: "Evaluación lingüística, técnicas de examen, expresión académica y preparación para estudios en el extranjero." },
      { title: "Negocios y carrera profesional", label: "PROFESIONAL", text: "Reuniones, presentaciones, correo electrónico, comunicación con clientes y trabajo en equipo intercultural." },
      { title: "Comunicación académica", label: "UNIVERSIDAD E INVESTIGACIÓN", text: "Lectura crítica, redacción estructurada, presentaciones y debate académico." },
      { title: "Jóvenes estudiantes", label: "CRECIMIENTO A LARGO PLAZO", text: "Programas adecuados a la edad que desarrollan el interés, la confianza y hábitos de estudio duraderos." },
      { title: "Formación corporativa", label: "PERSONALIZADO", text: "Programas diseñados en torno a funciones, sectores, negocios internacionales y objetivos de equipo." },
      { title: "Talleres cortos", label: "PRÁCTICA ENFOCADA", text: "Formación compacta para una habilidad práctica o un desafío de comunicación específico." },
      { title: "Preparación para estudios en el extranjero", label: "ESTUDIOS EN EL EXTRANJERO", text: "Idioma, participación académica y comunicación cotidiana para estudiar en el extranjero." },
    ],
    closingTitle: "Un plan útil comienza con una necesidad específica",
    closingText:
      "Comparte quiénes son los estudiantes, el problema a resolver y el calendario disponible. Podremos recomendarte una combinación de cursos realista.",
    ctaLabel: "Hablar sobre un programa",
  },
  {
    slug: "practice",
    eyebrow: "EL IDIOMA EN PRÁCTICA",
    title: "El idioma se fortalece cuando sale del libro de texto",
    description:
      "La tutoría, las comunidades lingüísticas, las actividades culturales y los proyectos compartidos crean más razones para comunicarse.",
    introTitle: "Una segunda clase basada en la participación real",
    intro: [
      "La práctica más allá de la clase ayuda a los estudiantes a convertir el idioma recién adquirido en algo más espontáneo y personal.",
      "Las actividades están diseñadas con una tarea de comunicación alcanzable, suficiente apoyo para participar y espacio para aprender de los compañeros.",
    ],
    image: "/images/student-collaboration.webp",
    cards: [
      { title: "Tutoría lingüística", label: "APOYO ESPECÍFICO", text: "Diagnóstico, preguntas y orientación enfocada para las dificultades individuales de aprendizaje." },
      { title: "Clubes de idiomas", label: "COMUNIDAD", text: "Oportunidades regulares de hablar, escuchar y responder fuera de las clases formales." },
      { title: "Experiencias culturales", label: "CONTEXTO", text: "Idioma, costumbres cotidianas, medios de comunicación y actividades creativas explorados juntos." },
      { title: "Concursos y presentaciones", label: "RESULTADOS VISIBLES", text: "Expresión oral, redacción y trabajos de proyecto presentados a un público real." },
      { title: "Visitas temáticas", label: "EXPLORACIÓN", text: "Aprendizaje temático que conecta el idioma con campus, organizaciones y la vida urbana." },
    ],
    closingTitle: "Cada uso significativo facilita el siguiente",
    closingText:
      "Los estudiantes no necesitan un idioma perfecto para participar. Una práctica bien diseñada les da una razón segura para intentarlo, reflexionar e intentarlo de nuevo.",
    ctaLabel: "Informarse sobre las actividades",
  },
  {
    slug: "faculty",
    eyebrow: "PROFESORADO Y PEDAGOGÍA",
    title: "La enseñanza profesional se percibe en la preparación detrás de cada clase",
    description:
      "Nuestros equipos lingüísticos comparten objetivos, desarrollan materiales y revisan los comentarios de los estudiantes para mantener una calidad de curso constante.",
    introTitle: "Experiencia individual, responsabilidad compartida",
    intro: [
      "Los profesores de inglés, francés, japonés y coreano aportan diferentes experiencias y especializaciones mientras trabajan con objetivos de etapa comunes.",
      "La planificación colectiva, la observación en el aula y las revisiones periódicas ayudan al equipo a mejorar lo que experimentan los estudiantes de un curso al siguiente.",
    ],
    image: "/images/team.webp",
    cards: [
      { title: "Equipo de inglés", label: "GENERAL Y ESPECIALIZADO", text: "Competencia general, expresión oral, comunicación académica, negocios y preparación para exámenes." },
      { title: "Equipo de francés", label: "IDIOMA Y CULTURA", text: "Progresión alineada con el MCER, comprensión cultural y preparación para el DELF." },
      { title: "Equipo de japonés", label: "PROGRESIÓN Y USO", text: "Desarrollo lingüístico estructurado, práctica de la comunicación y preparación para el JLPT." },
      { title: "Equipo de coreano", label: "FUNDAMENTOS Y PRÁCTICA", text: "Fundamentos sistemáticos, comunicación cotidiana y aprendizaje orientado al TOPIK." },
    ],
    closingTitle: "Conoce al equipo docente detrás de los cursos",
    closingText:
      "Docentes representativos participan en la enseñanza, el seguimiento del aprendizaje y el desarrollo de los programas de idiomas del centro.",
    ctaLabel: "Informarse sobre la enseñanza",
  },
  {
    slug: "research",
    eyebrow: "ENSEÑANZA E INVESTIGACIÓN",
    title: "Las preguntas del aula se convierten en el punto de partida de la mejora",
    description:
      "La investigación pedagógica, el desarrollo curricular y la formación del profesorado convierten la experiencia en métodos que todo el equipo puede usar.",
    introTitle: "Una investigación cercana a los estudiantes",
    intro: [
      "La investigación del centro parte de preguntas prácticas: dónde los estudiantes dudan, qué tareas revelan el progreso y cómo los comentarios pueden conducir a un mejor estudio autónomo.",
      "Las discusiones, la observación y los ensayos a pequeña escala ayudan al equipo a probar una idea antes de que se convierta en parte de un estándar de curso.",
    ],
    image: "/images/library/sections/home-research-overview.webp",
    cards: [
      { title: "Investigación pedagógica", label: "PREGUNTAS DE AULA", text: "Observar el aprendizaje, analizar las dificultades recurrentes y perfeccionar las respuestas pedagógicas." },
      { title: "Desarrollo curricular", label: "DISEÑO DE CURSOS", text: "Alinear los objetivos, las tareas, los materiales y la evaluación en cada progresión." },
      { title: "Desarrollo del profesorado", label: "PRÁCTICA COMPARTIDA", text: "La observación entre iguales, los casos de enseñanza y los talleres apoyan la mejora continua." },
    ],
    closingTitle: "Los buenos métodos deben poder discutirse y replicarse",
    closingText:
      "El objetivo no es añadir lenguaje académico a la enseñanza ordinaria, sino hacer que las decisiones pedagógicas sean más claras, más comprobables y más fáciles de mejorar.",
    ctaLabel: "Hablar sobre colaboración pedagógica",
  },
  {
    slug: "resources",
    eyebrow: "RECURSOS DE APRENDIZAJE",
    title: "Apoyo que mantiene el aprendizaje activo entre clases",
    description:
      "Guías, información sobre cursos, preguntas frecuentes y herramientas digitales ayudan a los estudiantes a tomar mejores decisiones y practicar con propósito.",
    introTitle: "Encontrar el apoyo adecuado para el siguiente paso",
    intro: [
      "Los recursos de aprendizaje deben reducir la incertidumbre en lugar de crear otra pila de material. Organizamos la información en torno a las decisiones que los estudiantes realmente necesitan tomar.",
      "Algunos materiales se comparten directamente con las clases en curso para que los profesores puedan adaptarlos al nivel y al progreso del curso.",
    ],
    image: "/images/study-desk.webp",
    cards: [
      { title: "Guías de estudio", label: "MÉTODOS Y PLANIFICACIÓN", text: "Orientación práctica para objetivos, rutinas, vocabulario, comprensión auditiva y práctica oral." },
      { title: "Materiales del curso", label: "APOYO EN CLASE", text: "Manuales del curso, listas de verificación de aprendizaje y recursos de clase seleccionados." },
      { title: "Preguntas frecuentes", label: "RESPUESTAS CLARAS", text: "Niveles, ubicación, horarios, expectativas de aprendizaje y consulta." },
      { title: "Aprendizaje digital", label: "HERRAMIENTAS", text: "Formas de usar los recursos digitales sin perder el enfoque ni una rutina sostenible." },
    ],
    closingTitle: "Más material no siempre es mejor",
    closingText:
      "Un conjunto más pequeño de recursos bien elegidos, utilizados de manera constante y revisados con comentarios, suele ser más valioso que coleccionar sin fin.",
    ctaLabel: "Pedir consejo sobre el aprendizaje",
  },
  {
    slug: "collaboration",
    eyebrow: "COLABORACIÓN",
    title: "Conectar la enseñanza de idiomas con campus, organizaciones y el mundo",
    description:
      "Conectamos recursos educativos internacionales con el desarrollo lingüístico, los estándares académicos y la colaboración orientada a la evaluación.",
    introTitle: "Colaboraciones basadas en estándares y progreso medible",
    intro: [
      "El centro trabaja con universidades, organismos educativos oficiales y socios institucionales para apoyar la mejora lingüística, la preparación para evaluaciones internacionales y el desarrollo conjunto de cursos.",
      "La cooperación se guía por una gestión académica clara, expectativas de evaluación coherentes y un plan de ejecución práctico para que los recursos de calidad puedan aplicarse localmente.",
    ],
    image: "/images/library/sections/home-collaboration-overview.webp",
    cards: [
      { title: "Colaboraciones con campus", label: "CURSOS Y ACTIVIDADES", text: "Cursos conjuntos, conferencias, talleres y actividades lingüístico-culturales para grupos de estudiantes específicos." },
      { title: "Colaboraciones empresariales", label: "NECESIDADES LABORALES", text: "Formación derivada de las funciones, la comunicación con clientes y las situaciones de negocios internacionales." },
      { title: "Intercambio internacional", label: "ESTÁNDARES GLOBALES", text: "Colaboraciones que conectan recursos educativos internacionales con mejora lingüística y servicios de evaluación." },
    ],
    closingTitle: "Una colaboración debe fortalecer la calidad del aprendizaje y la preparación para la evaluación",
    closingText:
      "Expectativas académicas claras, una implementación cuidadosa y una revisión práctica ayudan a los participantes a beneficiarse de recursos internacionales de forma estructurada.",
    ctaLabel: "Iniciar una conversación de colaboración",
  },
  {
    slug: "news",
    eyebrow: "NOTICIAS Y ARCHIVO",
    title: "Un registro de cursos, actividades y aprendizaje cotidiano desde 2015",
    description:
      "El archivo rastrea cómo los cursos, las discusiones pedagógicas, las comunidades lingüísticas y el apoyo a los estudiantes han evolucionado con el tiempo.",
    introTitle: "Una historia hecha de trabajo ordinario y significativo",
    intro: [
      "La historia del centro no se basa en premios exagerados. Es visible en las aperturas de cursos, los clubes de idiomas, las revisiones pedagógicas, las actividades culturales y las reflexiones de los estudiantes.",
      "El archivo actual ofrece una visión general de los años de actividad desde 2015.",
    ],
    image: "/images/classroom-students.webp",
    cards: [
      { title: "Cursos y clases abiertas", label: "2015—2026", text: "Nuevos cursos, actividades de ubicación, talleres enfocados y apoyo al aprendizaje." },
      { title: "Comunidades lingüísticas", label: "APRENDER JUNTOS", text: "Rincones de idiomas, grupos de lectura, expresión oral en línea y experiencias culturales." },
      { title: "Desarrollo pedagógico", label: "ENTRE BASTIDORES", text: "Observaciones de clase, casos de enseñanza, actualizaciones de materiales y revisión anual." },
    ],
    closingTitle: "El archivo muestra el trabajo cotidiano del centro",
    closingText:
      "Cursos, clases abiertas, comunidades lingüísticas y desarrollo docente crean un registro constante de actividad desde 2015.",
    ctaLabel: "Informarse sobre actividades recientes",
  },
  {
    slug: "contact",
    eyebrow: "CONTACTO",
    title: "Un plan de aprendizaje útil a menudo comienza con una conversación sincera",
    description:
      "Contacta con el centro sobre cursos individuales, ubicación, aprendizaje en grupo, programas en campus o formación organizativa personalizada.",
    introTitle: "Cuéntanos qué quieres conseguir con el aprendizaje de idiomas",
    intro: [
      "Para una consulta individual, es útil incluir el idioma, el aprendizaje previo, el objetivo actual y los horarios disponibles.",
      "Para un grupo u organización, cuéntanos quiénes son los participantes, las situaciones que enfrentan y el resultado que esperas.",
    ],
    image: "/images/learning-consultation.webp",
    cards: [
      { title: "Aprendizaje individual", label: "CURSOS Y UBICACIÓN", text: "Elección de idioma, recomendación de nivel, planificación de examen y progresión a largo plazo." },
      { title: "Programas de campus y grupos", label: "APRENDIZAJE COMPARTIDO", text: "Clases, comunidades estudiantiles, talleres y actividades lingüístico-culturales." },
      { title: "Formación personalizada", label: "ORGANIZACIONES", text: "Programas construidos en torno a funciones, sectores, trabajo internacional y desarrollo de equipo." },
    ],
    closingTitle: "Contactar con el Centro de Idiomas",
    closingText:
      "Envía un correo a info@zufelanguage.cn o llama al 0571-88922801. El horario de consulta es de lunes a domingo, de 09:00 a 20:00.",
    ctaLabel: "Enviar un correo al centro",
  },
];

export function findEsSection(slug: string) {
  return esSections.find((section) => section.slug === slug);
}
