import type { SyllabusProse } from "@/data/course-syllabus-i18n";

/** 课程大纲的西班牙文散文字段。周次与教学安排由 course-syllabus-i18n.ts 推导。 */
export const esSyllabusProse: Record<string, SyllabusProse> = {
  "EN-A1": {
    prerequisite: "Principiantes absolutos o con bases muy frágiles. No se exige ningún curso previo.",
    materials: "Manual Inglés – competencias integradas A1, audio de pronunciación, tarjetas de situación y cuaderno de etapa.",
    classwork: [
      "Elaborar una ficha personal; presentarse por parejas; identificar nombres, países y profesiones de oído",
      "Entrevistar a un compañero sobre su semana; describir un día laboral típico; completar un horario con vacíos de información",
      "Pedir indicaciones sobre un plano del campus; planificar un trayecto sencillo; leer señalización",
      "Pedir en un restaurante; preguntar precios; dejar un mensaje telefónico; rotación de escenas cotidianas",
    ],
    homework: [
      "Repetir con el audio; escribir una presentación breve; prueba de pronunciación y estructuras en la semana 3",
      "Grabar la rutina diaria; practicar expresiones de tiempo; tarea de etapa de comprensión oral en la semana 6",
      "Redactar un itinerario; preparar un diálogo de indicaciones; prueba oral situacional en la semana 9",
      "Hoja de repaso; grabación oral; preparar la presentación final",
    ],
    assessments: [
      "Semana 3: pronunciación y estructuras básicas.",
      "Semana 6: comprensión oral y expresión de rutinas.",
      "Semana 9: prueba oral sobre indicaciones y desplazamientos.",
      "Semana 12, prueba final: expresión oral integrada sobre escenas cotidianas, lectura básica y un mensaje escrito breve.",
    ],
    outcome: "Una presentación personal completa, una agenda propia y una conversación cotidiana.",
  },

  "EN-A2": {
    prerequisite: "Haber cursado EN-A1 o situarse en torno al nivel A1 del MCER.",
    materials: "Manual Inglés – competencias integradas A2, materiales graduados de audición y lectura, y cuaderno de escritura.",
    classwork: [
      "Contar un fin de semana; narrar a partir de imágenes; entrevistar sobre un recuerdo marcante",
      "Comparar dos propuestas de viaje; acordar un plan de grupo; justificar una elección",
      "Juego de rol médico-paciente; encuesta sobre hábitos; formular consejos",
      "Defender una postura sobre métodos de estudio; responder preguntas; reescribir un correo mal estructurado",
    ],
    homework: [
      "Ejercicios de pasado; grabación narrativa de 90 segundos; prueba oral narrativa en la semana 3",
      "Escribir un correo de planificación; practicar la comparación; prueba de lectura y escritura en la semana 6",
      "Llevar un diario de salud; grabar un consejo; prueba oral en contexto sanitario en la semana 9",
      "Escribir un párrafo temático; preparar una intervención de dos minutos; repaso final",
    ],
    assessments: [
      "Semana 3: relato oral de una experiencia pasada.",
      "Semana 6: lectura sobre un plan de viaje y redacción de un correo.",
      "Semana 9: comprensión y expresión orales en contexto sanitario.",
      "Semana 12, prueba final: comprensión integrada, intervención temática de dos minutos y correo breve.",
    ],
    outcome: "Un relato personal, un plan de viaje y un correo cotidiano bien estructurado.",
  },

  "EN-B1": {
    prerequisite: "Haber cursado EN-A2 o situarse en torno al nivel A2 del MCER.",
    materials: "Inglés – competencias integradas B1-1, dosier de lecturas temáticas, cuaderno de escucha y manual de proyecto.",
    classwork: [
      "Compartir una experiencia de aprendizaje; entrevistar sobre estrategias; sintetizar lo dicho por un compañero",
      "Diseñar una entrevista de perfil; debatir un problema local; sostener una opinión con ejemplos",
      "Comparar dos reportajes; resumir una noticia; distinguir la postura del titular y la del cuerpo",
      "Investigar en grupo; revisión entre pares; presentación de cinco minutos con preguntas",
    ],
    homework: [
      "Escribir una reflexión de aprendizaje; entregar la entrevista grabada; prueba de gramática y narración en la semana 3",
      "Escribir un perfil; lectura temática; lectura y escritura de opinión en la semana 6",
      "Tomar notas de audición; escribir un resumen; parcial en la semana 8 y transmisión de información en la semana 10",
      "Llevar un diario de investigación; redactar y revisar un artículo de opinión; preparar la presentación final",
    ],
    assessments: [
      "Semana 3: conocimientos lingüísticos y relato de experiencias.",
      "Semana 6: lectura de extensión media y párrafo de opinión.",
      "Semana 8, parcial: audición, lectura, gramática aplicada y escritura breve.",
      "Semana 10: resumen de noticias y transmisión de información.",
      "Semana 14, prueba final: artículo de opinión en tres partes, presentación de cinco minutos y preguntas.",
    ],
  },

  "EN-B1+": {
    prerequisite: "Haber cursado EN-B1 o situarse en un nivel B1 estable del MCER.",
    materials: "Inglés – competencias integradas B1-2, materiales temáticos de varias fuentes y cuaderno de investigación.",
    classwork: [
      "Desmontar la argumentación de un texto breve; debatir una postura; practicar la respuesta a objeciones",
      "Analizar un caso; comparar tres soluciones; conducir una reunión de decisión",
      "Trabajar un caso de malentendido intercultural; reescribir un mensaje inadecuado; simular una negociación",
      "Formular una pregunta de investigación; realizar entrevistas; extraer conclusiones y presentarlas",
    ],
    homework: [
      "Escribir un párrafo argumentativo; entregar la grabación del debate; prueba de estructura argumentativa en la semana 3",
      "Redactar una propuesta; describir datos; tarea escrita de resolución de problemas en la semana 6",
      "Escribir una reflexión sobre el caso; reescribir un correo; parcial en la semana 8 y simulación de roles en la semana 10",
      "Anotar las fuentes; resumir las entrevistas; redactar y revisar el informe",
    ],
    assessments: [
      "Semana 3: identificación de argumentos y toma de postura.",
      "Semana 6: análisis de un problema e informe de recomendaciones.",
      "Semana 8, parcial: prueba integrada de varias destrezas.",
      "Semana 10: negociación sobre un caso intercultural.",
      "Semana 14, prueba final: informe escrito con varias fuentes, exposición de grupo y preguntas.",
    ],
  },

  "EN-B2": {
    prerequisite: "Haber cursado EN-B1+ o situarse en torno al nivel B1+ del MCER.",
    materials: "Inglés – expresión avanzada B2, materiales de lectura crítica y dosier de discusión y oratoria.",
    classwork: [
      "Comparar casi sinónimos; reescribir un texto para otro destinatario; explicar una idea compleja sin preparación",
      "Contrastar varias fuentes; valorar las pruebas; escribir una respuesta crítica",
      "Moderar una mesa redonda; negociar entre partes; revisar las propias estrategias de interacción",
      "Ensayar la intervención; intercambiar comentarios entre pares; exponer formalmente y responder preguntas",
    ],
    homework: [
      "Llevar un registro de colocaciones; reescribir un texto; control de precisión lingüística en la semana 3",
      "Anotar las fuentes; escribir un artículo de respuesta; prueba de etapa de lectura y escritura en la semana 6",
      "Completar una ficha de observación; preparar la negociación; evaluación de la discusión en directo en la semana 9",
      "Revisar el guion y el material visual; escribir un informe de reflexión personal",
    ],
    assessments: [
      "Semana 3: registro y edición de texto.",
      "Semana 6: lectura crítica y artículo de respuesta.",
      "Semana 9: desempeño al moderar una discusión y negociar.",
      "Semana 12, prueba final: exposición de investigación de 8 a 10 minutos, preguntas en directo y reflexión escrita.",
    ],
  },

  "EN-SPK": {
    prerequisite: "Se recomienda nivel A2 del MCER o superior; antes de empezar se realiza un diagnóstico oral breve.",
    materials: "Dosier de intensivo oral, audio de pronunciación, hojas de revisión de grabaciones y tarjetas de situación.",
    classwork: [
      "Grabación de referencia; shadowing; comentarios de los compañeros sobre la inteligibilidad",
      "Conversaciones rotatorias; vacíos de información; manejo de lo inesperado",
      "Intervenciones graduadas de uno, dos y tres minutos",
      "Discusión de grupo; negociación de la tarea; grabación del resultado final",
    ],
    homework: [
      "Shadowing diario breve; grabar los sonidos corregidos; nueva prueba de pronunciación en la semana 2",
      "Registrar dos conversaciones reales; prueba oral en parejas en la semana 4",
      "Grabar y autoevaluar una intervención; control de expresión improvisada en la semana 6",
      "Preparar la grabación final; analizar el propio progreso",
    ],
    assessments: [
      "Semana 1: grabación oral de referencia.",
      "Semana 2: nueva prueba de pronunciación e inteligibilidad.",
      "Semana 4: prueba oral de interacción en parejas.",
      "Semana 6: intervención improvisada sobre un tema.",
      "Semana 8, prueba final: interacción situacional, discusión de grupo e intervención individual, comparadas con la grabación de entrada.",
    ],
  },

  "EN-BIZ": {
    prerequisite: "Se recomienda nivel B1 del MCER o superior; indique su puesto y las principales situaciones en que usa el inglés.",
    materials: "Dosier de casos de comunicación profesional, cuaderno de reescritura de correos, tarjetas de rol y plantillas de informe.",
    classwork: [
      "Presentación profesional de 30 segundos; conversación previa a una reunión; recibir a una visita",
      "Reescribir un correo ineficaz; atender una consulta de cliente; redactar una confirmación de acciones",
      "Moderar una reunión breve; informar del avance; gestionar un desacuerdo",
      "Informe con datos de tres minutos; propuesta a cliente; preguntas bajo presión",
    ],
    homework: [
      "Grabar la presentación profesional; prueba oral de comunicación social en la semana 2",
      "Entregar dos correos reescritos; examen de correo con tiempo limitado en la semana 4",
      "Elaborar una lista de recursos para reuniones; simulación de reunión en la semana 6 y revisión en la semana 7",
      "Preparar el guion, el esquema de diapositivas y un banco de preguntas",
    ],
    assessments: [
      "Semana 2: presentación profesional y prueba oral de trato inicial.",
      "Semana 4: redacción de correo profesional con tiempo limitado.",
      "Semana 6, parcial: reunión simulada y acta de acciones.",
      "Semana 10, prueba final: informe de proyecto o propuesta a cliente, preguntas en directo y correo de seguimiento.",
    ],
  },

  "EN-IELTS": {
    prerequisite: "Se recomienda nivel A2 del MCER o superior; al entrar se realiza un diagnóstico de las cuatro destrezas y se indica la puntuación objetivo.",
    materials: "Materiales de transición IELTS, cuadernos por destreza, tarjetas de temas orales, carpeta de escritos corregidos y exámenes de simulacro.",
    classwork: [
      "Diagnóstico de las cuatro destrezas; desmontaje de oraciones largas; clasificación de errores",
      "Práctica por tipo de pregunta; localización contrarreloj; análisis de errores",
      "Simulación oral; reordenación de párrafos; descripción de gráficos; comentarios entre pares",
      "Medio simulacro y simulacro completo; entrevistas de retorno; plan para la etapa siguiente",
    ],
    homework: [
      "Repaso léxico y análisis de oraciones largas; prueba de bases lingüísticas en la semana 3",
      "Transcripciones de escucha intensiva y revisión de lectura; prueba de etapa en la semana 6",
      "Grabaciones orales y borradores escritos; prueba de etapa oral y escrita en la semana 9",
      "Rehacer los ítems fallados, revisar los escritos, volver a grabar la parte oral",
    ],
    assessments: [
      "Semana 1: diagnóstico de entrada de las cuatro destrezas, no computa en el resultado final.",
      "Semana 3: prueba de léxico, gramática y comprensión de oraciones largas.",
      "Semana 6: prueba de etapa de comprensión oral y lectora.",
      "Semana 9: simulación oral y tarea escrita con tiempo limitado.",
      "Semanas 11-12: simulacro completo, análisis de resultados y entrevista individual.",
      "El curso es de transición: no se promete una mejora fija de puntuación ni una banda objetivo.",
    ],
  },

  "FR-A1.1": {
    prerequisite: "Principiantes absolutos. Sin requisitos previos.",
    materials: "Francés – iniciación A1.1, audio de pronunciación, tarjetas de situación y cuaderno de ejercicios.",
    classwork: [
      "Deletrear nombres; presentarse; intercambiar datos personales básicos",
      "Rellenar una ficha personal; presentar a la familia; identificar números y fechas de oído",
      "Pedir indicaciones sobre un plano; explicar el trayecto a clase; leer señalización de lugares públicos",
      "Pedir a partir de una carta; preguntar un precio; hacer una breve presentación oral",
    ],
    homework: [
      "Repetir con el audio; grabar una presentación; prueba oral de pronunciación y saludos en la semana 3",
      "Redactar una ficha personal; ejercicios de vocabulario; prueba de comprensión y estructuras en la semana 6",
      "Redactar un itinerario; preparar un diálogo de indicaciones; prueba oral situacional en la semana 9",
      "Repaso general; grabar un diálogo de pedido; preparar la tarea final",
    ],
    assessments: [
      "Semana 3: prueba oral de pronunciación.",
      "Semana 6: prueba de comprensión y conocimientos lingüísticos.",
      "Semana 9: prueba oral de indicaciones.",
      "Semana 12: presentación personal, diálogo de pedido o compra y tareas básicas de lectura y escritura.",
    ],
  },

  "FR-A1.2": {
    prerequisite: "Haber cursado FR-A1.1 o dominar la pronunciación básica, los saludos, los números y el presente habitual.",
    materials: "Francés – bases A1.2, materiales de audición cotidiana y cuaderno de escritura.",
    classwork: [
      "Presentar a la familia; comparar rutinas; entrevistar a un compañero sobre su día",
      "Describir una habitación; indicar el camino con un plano; buscar un alojamiento adecuado",
      "Hacer una lista de la compra; pedir una comida; comparar productos",
      "Formular una invitación; acordar una hora; elaborar un plan de fin de semana",
    ],
    homework: [
      "Redactar una presentación familiar; grabar la rutina; prueba oral y gramatical en la semana 3",
      "Describir una vivienda; practicar itinerarios; prueba de comprensión situacional en la semana 6",
      "Completar la tarea de la carta; grabar un diálogo de compra; prueba oral de servicios en la semana 9",
      "Redactar un mensaje de invitación; escribir el plan; preparar la presentación final",
    ],
    assessments: [
      "Semana 3: expresión sobre la familia y la vida diaria.",
      "Semana 6: comprensión y expresión sobre vivienda e itinerarios.",
      "Semana 9: prueba oral de pedido y compra.",
      "Semana 12: plan de fin de semana, mensaje de invitación y comprensión integrada.",
    ],
  },

  "FR-A2": {
    prerequisite: "Haber completado el nivel A1 o situarse en el nivel A1 del MCER.",
    materials: "Francés – progresión A2, dosier de viajes y servicios y materiales de lectura graduados.",
    classwork: [
      "Contar un viaje o un recuerdo de infancia; recontar una historia a partir de imágenes",
      "Registrarse en un hotel; informarse en una estación; resolver un problema de servicio",
      "Pedir cita médica; hablar del estilo de vida; elegir entre opciones",
      "Investigar una ciudad francófona; construir un itinerario; responder preguntas",
    ],
    homework: [
      "Redactar un relato de experiencia; entregar una grabación oral; control narrativo en la semana 3",
      "Redactar un correo de servicio; preparar un diálogo; prueba situacional en la semana 6",
      "Redactar consejos de salud; parcial en la semana 8 y tarea de opinión en la semana 10",
      "Resumir las fuentes; redactar el itinerario; revisar el informe del proyecto",
    ],
    assessments: [
      "Semana 3: relato de una experiencia.",
      "Semana 6: prueba situacional de viajes y servicios.",
      "Semana 8, parcial: comprensión y conocimientos lingüísticos.",
      "Semana 10: formulación de consejos de salud.",
      "Semana 14: proyecto de ciudad, correo y presentación oral.",
    ],
  },

  "FR-B1": {
    prerequisite: "Haber cursado FR-A2 o situarse en el nivel A2 del MCER.",
    materials: "Francés intermedio B1, dosier de lecturas sociales y culturales y cuaderno de escritos formales.",
    classwork: [
      "Simular una entrevista; reelaborar una sección del currículum; exponer un plan de estudios",
      "Comparar críticas culturales; resumir una noticia; recomendar un libro, una película o un disco",
      "Analizar un problema; proponer soluciones; participar en un debate estructurado",
      "Elegir y documentar un tema; entrevistar; revisión entre pares; presentación oral",
    ],
    homework: [
      "Redactar un párrafo de carta de motivación; prueba de expresión formal en la semana 4",
      "Redactar una crítica breve; resumir un documento sonoro; parcial en la semana 8",
      "Redactar un artículo de opinión; control de debate y escritura en la semana 12",
      "Anotar las fuentes; elaborar un primer y un último borrador del informe",
    ],
    assessments: [
      "Semana 4: correo formal o carta de motivación.",
      "Semana 8, parcial: prueba integrada de comprensión y producción.",
      "Semana 12: debate breve y artículo de opinión.",
      "Semana 16: informe de investigación, presentación oral y preguntas.",
    ],
  },

  "FR-B2": {
    prerequisite: "Haber cursado FR-B1 o situarse en un nivel B1 estable del MCER.",
    materials: "Francés – uso avanzado B2, materiales de lectura crítica y dosier de expresión formal.",
    classwork: [
      "Reescribir un texto para distintos destinatarios; corregir frases defectuosas; explicar un concepto",
      "Desmontar un editorial; jerarquizar las pruebas; escribir una respuesta",
      "Moderar una discusión; sintetizar varias fuentes; construir consenso",
      "Elegir un tema de investigación; ensayar la intervención; participar en la revisión entre pares",
    ],
    homework: [
      "Reunir un conjunto de reescrituras; prueba de edición lingüística en la semana 4",
      "Redactar un texto argumentativo; parcial de lectura y escritura en la semana 8",
      "Redactar una síntesis; control de discusión y síntesis en la semana 12",
      "Revisar el artículo de investigación y el guion de la intervención en varias versiones",
    ],
    assessments: [
      "Semana 4: registro y edición lingüística.",
      "Semana 8, parcial: lectura y escritura críticas.",
      "Semana 12: mesa redonda y síntesis.",
      "Semana 16: texto argumentativo, presentación formal y preguntas en directo.",
    ],
  },

  "FR-DELF": {
    prerequisite: "Quienes se presenten al A2 o al B1 deben tener el nivel global correspondiente y una fecha de examen confirmada.",
    materials: "Cuadernos graduados DELF A2/B1, análisis de los criterios de corrección, tarjetas de oral y exámenes de simulacro.",
    classwork: [
      "Realizar una prueba diagnóstica; analizar un modelo corregido; abrir un registro de errores",
      "Práctica por tipo de pregunta; lectura contrarreloj; toma de notas de audición",
      "Orales rotatorios; escritura con tiempo limitado; corrección entre pares según los criterios",
      "Simulacro completo; retorno individual; ajustes finales",
    ],
    homework: [
      "Clasificar los errores; retorno diagnóstico por destreza en la semana 2",
      "Series de comprensión oral y lectora; medio simulacro en la semana 4",
      "Grabaciones orales y revisiones escritas; simulacro oral y escrito en la semana 6",
      "Rehacer los ítems fallados; elaborar una lista personal previa al examen",
    ],
    assessments: [
      "Semana 1: diagnóstico.",
      "Semana 4: medio simulacro de comprensión.",
      "Semana 6: simulacro oral y escrito.",
      "Semanas 7-8: simulacro completo. Los niveles A2 y B1 usan materiales y criterios distintos; no se garantiza aprobar el examen.",
    ],
  },

  "JP-START": {
    prerequisite: "Principiantes absolutos. No se requiere conocer los kana.",
    materials: "Japonés – iniciación, cuaderno de kana, audio de pronunciación y tarjetas de situaciones cotidianas.",
    classwork: [
      "Leer kana en voz alta; elegir el carácter que se oye; deletrear nombres y préstamos",
      "Intercambiar nombre, nacionalidad y estudios; describir objetos",
      "Construir un horario; entrevistar a un compañero; describir un día en el campus",
      "Pedir en un restaurante; preguntar un precio; completar una tarea con el plano del campus",
    ],
    homework: [
      "Caligrafía de kana; repetición; lectura y dictado de kana en la semana 3",
      "Grabar una presentación; prueba oral de conversación básica en la semana 5",
      "Redactar el horario; ejercicios de verbos; control de comprensión y estructuras en la semana 8",
      "Repaso general; preparar la presentación final",
    ],
    assessments: [
      "Semana 3: lectura, escritura y dictado de kana.",
      "Semana 5: prueba oral de presentación personal.",
      "Semana 8: comprensión oral y lectora básica.",
      "Semana 10: escena de pedido o indicaciones, lectura y escritura breves y prueba oral integrada.",
    ],
  },

  "JP-N5": {
    prerequisite: "Haber cursado el nivel de iniciación o dominar los kana, los saludos básicos y las oraciones simples.",
    materials: "Japonés integrado N5, lista de kanji básicos, materiales de audición y ejercicios por unidad.",
    classwork: [
      "Describir un día; buscar un objeto; invitar a un compañero",
      "Comparar ciudades; hablar de una actividad favorita; describir a una persona",
      "Explicar normas del campus; pedir ayuda; juego de rol en contexto de servicio",
      "Planificar un viaje; leer un aviso; presentar al grupo",
    ],
    homework: [
      "Ejercicios de verbos; grabar la rutina; prueba de conocimientos lingüísticos en la semana 3",
      "Redactar una descripción; control oral y de lectura en la semana 6",
      "Ejercicios de la forma -te; parcial en la semana 8 y prueba oral situacional en la semana 10",
      "Redactar un plan de viaje; llevar un diario de audición; repaso final",
    ],
    assessments: [
      "Semana 3: conjugación verbal.",
      "Semana 6: expresión descriptiva.",
      "Semana 8, parcial: comprensión y conocimientos lingüísticos.",
      "Semana 10: prueba oral de petición y permiso.",
      "Semana 14: plan de viaje, lectura y escritura breves y evaluación integrada del nivel N5.",
    ],
  },

  "JP-N4": {
    prerequisite: "Haber cursado JP-N5 o situarse en torno al nivel JLPT N5.",
    materials: "Japonés preintermedio N4, manual de gramática funcional, lecturas graduadas y ejercicios de audición.",
    classwork: [
      "Contar la propia trayectoria; explicar un cambio; recontar un suceso",
      "Organizar una actividad; dar consejos; negociar entre alternativas",
      "Resumir una noticia; transmitir lo dicho por un compañero; explicar la base de un juicio",
      "Realizar una encuesta sobre la vida diaria; organizar los resultados; exponer oralmente",
    ],
    homework: [
      "Redactar un relato de experiencia; conocimientos lingüísticos y prueba oral narrativa en la semana 4",
      "Redactar una propuesta; parcial de comprensión y producción en la semana 8",
      "Tomar notas de audición; tarea de transmisión en la semana 12",
      "Redactar el informe de la encuesta; repasar los modelos de examen",
    ],
    assessments: [
      "Semana 4: relato de una experiencia.",
      "Semana 8, parcial: prueba integrada.",
      "Semana 12: comprensión oral y transmisión de información.",
      "Semana 16: proyecto de encuesta, informe oral y simulacro del nivel N4.",
    ],
  },

  "JP-N3": {
    prerequisite: "Haber cursado JP-N4 o situarse en torno al nivel JLPT N4.",
    materials: "Japonés integrado N3, cuaderno de oraciones largas, audición de noticias y materiales de escritura temática.",
    classwork: [
      "Segmentar oraciones; reordenar párrafos; extraer la idea principal",
      "Escuchar una entrevista; leer un aviso; resumir oralmente",
      "Debatir una postura; responder a objeciones; moderar un intercambio de grupo",
      "Elegir y documentar un tema; revisión entre pares; presentación formal",
    ],
    homework: [
      "Analizar oraciones largas; prueba de estructura del texto en la semana 4",
      "Llevar un diario de audición; parcial de comprensión en la semana 9",
      "Redactar un texto breve de opinión; prueba oral de discusión en la semana 13",
      "Primera y última versión del informe; repasar los modelos de examen",
    ],
    assessments: [
      "Semana 4: oraciones largas y lectura a nivel de texto.",
      "Semana 9, parcial: comprensión y conocimientos lingüísticos.",
      "Semana 13: discusión temática.",
      "Semana 18: informe breve, presentación oral y simulacro integrado del nivel N3.",
    ],
  },

  "JP-N2": {
    prerequisite: "Haber cursado JP-N3 o situarse en torno al nivel JLPT N3.",
    materials: "Japonés aplicado N2, materiales de lectura intensiva, casos de comunicación profesional y cuaderno de exposición de investigación.",
    classwork: [
      "Sustituir casi sinónimos; analizar la lógica de un párrafo; resumir",
      "Atender una llamada profesional; revisar un correo; informar de una incidencia",
      "Comparar reportajes; celebrar una mesa redonda; sintetizar información",
      "Elegir un tema de investigación; revisión del informe entre pares; ensayar la presentación",
    ],
    homework: [
      "Anotar la lectura intensiva; prueba de léxico y lectura en la semana 4",
      "Redactar un correo formal; parcial aplicado en la semana 9",
      "Redactar un resumen de noticias; control de discusión y escritura en la semana 13",
      "Iterar el informe de investigación y el guion de la exposición",
    ],
    assessments: [
      "Semana 4: lectura intensiva y distinción de usos.",
      "Semana 9, parcial: comunicación profesional.",
      "Semana 13: síntesis de noticias y discusión.",
      "Semana 18: informe de investigación, presentación formal, preguntas en directo y práctica integrada del nivel N2.",
    ],
  },

  "JP-JLPT": {
    prerequisite: "Para el grupo N3 se recomienda nivel N4; para el grupo N2, nivel N3. Confirme el nivel objetivo y la fecha de examen.",
    materials: "Léxico y gramática graduados N3/N2, cuadernos de entrenamiento en lectura y audición, y exámenes de simulacro.",
    classwork: [
      "Prueba diagnóstica; síntesis de los puntos evaluados; plan personal",
      "Lectura contrarreloj; marcado de la estructura de los párrafos",
      "Anticipación de opciones; notas por palabras clave; audición continua",
      "Simulacro completo; análisis de datos; ajuste de estrategia",
    ],
    homework: [
      "Series de léxico y gramática; retorno diagnóstico en la semana 2",
      "Series de lectura; simulacro de lectura en la semana 4",
      "Series de audición; simulacro de audición en la semana 6",
      "Rehacer los ítems fallados; elaborar una lista personal previa al examen",
    ],
    assessments: [
      "Semana 1: diagnóstico.",
      "Semana 4: simulacro de lectura.",
      "Semana 6: simulacro de audición.",
      "Semanas 7-8: simulacro completo y retorno individual. Los niveles N3 y N2 tienen exámenes, grupos y criterios distintos; no se garantiza aprobar.",
    ],
  },

  "KR-START": {
    prerequisite: "Principiantes absolutos. No se requiere conocer el hangul.",
    materials: "Coreano – iniciación, cuaderno de escritura de letras, audio de pronunciación y tarjetas de situaciones cotidianas.",
    classwork: [
      "Deletrear nombres; formar sílabas de oído; reconocer palabras frecuentes",
      "Intercambiar datos personales; presentar a un compañero; leer una tarjeta de visita",
      "Preguntar la hora; describir el aula; elaborar un horario personal",
      "Pedir indicaciones en el campus; pedir en una cafetería; rotación de diálogos cotidianos",
    ],
    homework: [
      "Caligrafía de letras; repetición; control de deletreo, dictado y pronunciación en la semana 3",
      "Grabar una presentación; prueba oral básica en la semana 5",
      "Discriminación de números; redactar el horario; control de comprensión en la semana 8",
      "Repaso general; preparar la presentación final",
    ],
    assessments: [
      "Semana 3: lectura de letras y dictado.",
      "Semana 5: presentación personal.",
      "Semana 8: comprensión de números, horas y lugares.",
      "Semana 10: escena de indicaciones o pedido, lectura básica y escritura breve.",
    ],
  },

  "KR-1": {
    prerequisite: "Haber cursado el nivel de iniciación o dominar el hangul, los saludos básicos y las oraciones simples.",
    materials: "Coreano elemental 1, audio de consolidación fonética, conversación cotidiana y ejercicios por unidad.",
    classwork: [
      "Entrevistar sobre rutinas; describir una semana; completar un horario con vacíos de información",
      "Pedir a partir de una carta; preguntar precios; comparar productos",
      "Pedir indicaciones con un plano; planificar un trayecto; explicar el motivo de un desplazamiento",
      "Hablar de aficiones; describir la vida en el campus; responder preguntas de los compañeros",
    ],
    homework: [
      "Redactar sobre la rutina; repetición; control de verbos y expresión oral en la semana 3",
      "Redactar una lista de la compra; grabar un diálogo; prueba oral situacional en la semana 6",
      "Redactar un itinerario; tarea de audición y trayecto en la semana 9",
      "Redactar una presentación de la vida diaria; preparar la presentación final",
    ],
    assessments: [
      "Semana 3: expresión cotidiana.",
      "Semana 6: escenas de compra y pedido.",
      "Semana 9: comprensión y expresión sobre desplazamientos.",
      "Semana 12: texto breve sobre la vida diaria, presentación personal y comprensión integrada.",
    ],
  },

  "KR-2": {
    prerequisite: "Haber cursado KR-1 o situarse en un nivel elemental equivalente.",
    materials: "Coreano elemental 2, materiales graduados de audición y lectura, y cuaderno de escritura cotidiana.",
    classwork: [
      "Contar una historia a partir de imágenes; entrevistar sobre un viaje; ordenar sucesos",
      "Formular una invitación; acordar una hora; construir un itinerario de grupo",
      "Consulta médica; explicar un problema; proponer una solución",
      "Lectura temática; relato personal; presentación de grupo",
    ],
    homework: [
      "Redactar un relato de experiencia; prueba oral narrativa en la semana 3",
      "Redactar una invitación; control de escritura y diálogo en la semana 6",
      "Redactar consejos de salud; parcial en la semana 8 y prueba oral situacional en la semana 10",
      "Primer borrador del proyecto; repasar las pruebas de etapa",
    ],
    assessments: [
      "Semana 3: relato de una experiencia.",
      "Semana 6: invitación y organización.",
      "Semana 8, parcial: comprensión y gramática.",
      "Semana 10: prueba oral de resolución de problemas.",
      "Semana 14: texto personal, presentación temática y evaluación integrada del nivel elemental.",
    ],
  },

  "KR-3": {
    prerequisite: "Haber cursado KR-2 o situarse en torno al nivel 2 del TOPIK.",
    materials: "Coreano intermedio 1, dosier de medios y cultura, y ejercicios de descripción de gráficos y párrafos.",
    classwork: [
      "Compartir un plan; simular una entrevista; transmitir lo dicho por un compañero",
      "Reseñar una obra; comparar prácticas culturales; resumir una noticia",
      "Analizar un problema local; formular recomendaciones; sostener una discusión temática",
      "Realizar una encuesta; organizar los gráficos; redactar el informe; presentar",
    ],
    homework: [
      "Redactar sobre los propios objetivos; prueba de transmisión y expresión formal en la semana 4",
      "Redactar una reseña breve; parcial de comprensión y producción en la semana 8",
      "Redactar un párrafo de opinión; control de discusión y escritura en la semana 12",
      "Primera y última versión del informe de la encuesta",
    ],
    assessments: [
      "Semana 4: expresión formal y transmisión de información.",
      "Semana 8, parcial: prueba integrada.",
      "Semana 12: discusión sobre una cuestión social y redacción de un párrafo.",
      "Semana 16: informe de encuesta, comentario de gráficos y presentación oral.",
    ],
  },

  "KR-4": {
    prerequisite: "Haber cursado KR-3 o situarse en torno al nivel 3 del TOPIK.",
    materials: "Coreano intermedio 2, materiales de noticias y entrevistas, y dosier de comunicación formal y escritura argumentativa.",
    classwork: [
      "Reescribir entre registros; simular una petición formal; analizar un caso de descortesía involuntaria",
      "Comparar dos reportajes; extraer los datos; redactar una síntesis",
      "Desmontar una argumentación; celebrar una mesa redonda; responder a objeciones",
      "Elegir y documentar un tema; revisión del informe entre pares; ensayar la intervención",
    ],
    homework: [
      "Reescribir entre registros; prueba de comunicación formal en la semana 4",
      "Redactar un resumen de noticias; parcial de comprensión y producción en la semana 8",
      "Redactar un artículo de opinión; control de discusión y escritura en la semana 12",
      "Revisar el informe y el guion de la intervención en varias versiones",
    ],
    assessments: [
      "Semana 4: registros de tratamiento y peticiones formales.",
      "Semana 8, parcial: análisis de la información.",
      "Semana 12: artículo de opinión y discusión estructurada.",
      "Semana 16: informe de investigación, presentación formal y preguntas.",
    ],
  },

  "KR-TOPIK": {
    prerequisite: "Se recomienda haber cursado KR-2 o alcanzar en torno al nivel 2 del TOPIK; para aspirar al nivel 4 conviene una base intermedia estable.",
    materials: "Cuadernos TOPIK II de audición, lectura y escritura orientados a los niveles 3-4, y exámenes de simulacro.",
    classwork: [
      "Realizar una prueba diagnóstica; establecer categorías de error",
      "Práctica por tipo de pregunta; notas de audición; lectura contrarreloj",
      "Escritura a partir de gráficos; ampliación de párrafos; retorno versión a versión",
      "Simulacro completo; revisión por destrezas; refuerzo individual",
    ],
    homework: [
      "Series de léxico y gramática; retorno diagnóstico en la semana 2",
      "Series de comprensión; simulacro de etapa en la semana 5",
      "Dos rondas de revisión escrita; examen de escritura con tiempo limitado en la semana 8",
      "Rehacer los ítems fallados; elaborar un plan personal previo al examen",
    ],
    assessments: [
      "Semana 1: diagnóstico.",
      "Semana 5: simulacro de comprensión oral y lectora.",
      "Semana 8: escritura con tiempo limitado.",
      "Semanas 9-10: simulacro completo y retorno individual. La dificultad se ajusta al objetivo de nivel 3 o 4; no se garantiza un nivel fijo.",
    ],
  },
};