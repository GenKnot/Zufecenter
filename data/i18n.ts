export const locales = ["zh", "en", "fr", "ja", "ko", "es"] as const;
export type Locale = (typeof locales)[number];
export type ForeignLocale = Exclude<Locale, "zh">;

export const foreignLocales: ForeignLocale[] = ["en", "fr", "ja", "ko", "es"];

export const localeLabels: Record<Locale, { native: string; short: string; htmlLang: string }> = {
  zh: { native: "中文", short: "中", htmlLang: "zh-CN" },
  en: { native: "English", short: "EN", htmlLang: "en" },
  fr: { native: "Français", short: "FR", htmlLang: "fr" },
  ja: { native: "日本語", short: "日", htmlLang: "ja" },
  ko: { native: "한국어", short: "한", htmlLang: "ko" },
  es: { native: "Español", short: "ES", htmlLang: "es" },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localeFromPathname(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  return segment && isLocale(segment) && segment !== "zh" ? segment : "zh";
}

export function localeHome(locale: Locale) {
  return locale === "zh" ? "/" : `/${locale}/`;
}

export function localizedHref(locale: Locale, href: string) {
  if (locale === "zh") return href;
  if (href.startsWith("#")) return `${localeHome(locale)}${href}`;
  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

type LocalizedLanding = {
  siteName: string;
  eyebrow: string;
  heroTitle: string;
  heroText: string;
  primaryCta: string;
  secondaryCta: string;
  nav: { label: string; href: string }[];
  stats: { value: string; label: string }[];
  aboutEyebrow: string;
  aboutTitle: string;
  aboutText: string;
  coursesEyebrow: string;
  coursesTitle: string;
  coursesText: string;
  courseAction: string;
  courses: { mark: string; title: string; subtitle: string; text: string }[];
  approachEyebrow: string;
  approachTitle: string;
  approachText: string;
  approachItems: { title: string; text: string }[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  footerText: string;
  quickLinks: string;
  contact: string;
  consultation: string;
  address: string;
  footerTagline: string;
  metadataTitle: string;
  metadataDescription: string;
};

export const localizedLandings: Record<ForeignLocale, LocalizedLanding> = {
  en: {
    siteName: "Language Center · ZUFE",
    eyebrow: "LANGUAGE · KNOWLEDGE · WORLD",
    heroTitle: "Language skills for a wider world",
    heroText:
      "Structured English, French, Japanese and Korean programs—from first steps to academic, professional and exam-focused communication.",
    primaryCta: "Explore our courses",
    secondaryCta: "Talk to an adviser",
    nav: [
      { label: "About", href: "/about" },
      { label: "Courses", href: "/languages" },
      { label: "Programs", href: "/programs" },
      { label: "Learning", href: "/practice" },
      { label: "Faculty", href: "/faculty" },
      { label: "Resources", href: "/resources" },
      { label: "News", href: "/news" },
      { label: "Contact", href: "/contact" },
    ],
    stats: [
      { value: "10+", label: "years of teaching" },
      { value: "10,000+", label: "learners served" },
      { value: "4", label: "languages" },
      { value: "26", label: "course formats" },
    ],
    aboutEyebrow: "About the center",
    aboutTitle: "A decade of steady, practical language education",
    aboutText:
      "Working with the Zheshang Capital Market Research Institute at Zhejiang University of Finance and Economics, the center serves students, professionals and organizations. Our teaching combines clear progression, purposeful practice and feedback learners can act on.",
    coursesEyebrow: "Language programs",
    coursesTitle: "Choose a language. Build a path that fits your goal.",
    coursesText:
      "Programs range from beginner foundations to intermediate and advanced application, with focused options for speaking, business and language examinations.",
    courseAction: "Explore the complete English course overview",
    courses: [
      { mark: "EN", title: "English", subtitle: "8 course formats", text: "General, spoken, business and IELTS preparation pathways." },
      { mark: "FR", title: "French", subtitle: "6 course formats", text: "CEFR-aligned learning from A1 foundations to B2 and DELF." },
      { mark: "日", title: "Japanese", subtitle: "6 course formats", text: "A progressive route from beginner Japanese to JLPT preparation." },
      { mark: "한", title: "Korean", subtitle: "6 course formats", text: "Systematic foundations, practical communication and TOPIK II." },
    ],
    approachEyebrow: "How we teach",
    approachTitle: "Clear goals, active use and useful feedback",
    approachText:
      "Language becomes durable when learners use it to complete meaningful tasks. Each stage connects classroom input with speaking, writing, collaboration and cultural understanding.",
    approachItems: [
      { title: "Start at the right level", text: "We consider prior learning, goals and available study time before recommending a course." },
      { title: "Learn through use", text: "Lessons turn vocabulary and grammar into communication for study, work and daily life." },
      { title: "See your progress", text: "Stage tasks and teacher feedback make improvement visible and the next step clear." },
    ],
    ctaEyebrow: "START A CONVERSATION",
    ctaTitle: "Tell us where you want language learning to take you",
    ctaText: "Share your current level, goals and schedule. We will help you identify a suitable starting point.",
    ctaButton: "Contact the center",
    footerText:
      "More than ten years of language teaching, structured courses and learner support for individuals and organizations.",
    quickLinks: "Quick links",
    contact: "Contact",
    consultation: "Course enquiries",
    address: "Language Center, Wenhua Campus, Zhejiang University of Finance and Economics, No. 83 Wenyi West Road, Xihu District, Hangzhou, Zhejiang, China",
    footerTagline: "Language education · Multilingual learning · International exchange",
    metadataTitle: "Language Center · Zhejiang University of Finance and Economics",
    metadataDescription:
      "English, French, Japanese and Korean language courses, exam preparation, professional communication and customized training.",
  },
  fr: {
    siteName: "Centre de langues · ZUFE",
    eyebrow: "LANGUES · SAVOIRS · MONDE",
    heroTitle: "Les langues, pour aller plus loin",
    heroText:
      "Des parcours structurés en anglais, français, japonais et coréen, de l’initiation à la communication universitaire, professionnelle et aux examens.",
    primaryCta: "Découvrir les cours",
    secondaryCta: "Parler à un conseiller",
    nav: [
      { label: "Le centre", href: "/about" },
      { label: "Cours", href: "/languages" },
      { label: "Programmes", href: "/programs" },
      { label: "Pratique", href: "/practice" },
      { label: "Équipe", href: "/faculty" },
      { label: "Ressources", href: "/resources" },
      { label: "Actualités", href: "/news" },
      { label: "Contact", href: "/contact" },
    ],
    stats: [
      { value: "10+", label: "ans d’enseignement" },
      { value: "10 000+", label: "apprenants accompagnés" },
      { value: "4", label: "langues" },
      { value: "26", label: "formats de cours" },
    ],
    aboutEyebrow: "À propos du centre",
    aboutTitle: "Plus de dix ans d’enseignement attentif et concret",
    aboutText:
      "En collaboration avec l’Institut de recherche sur les marchés de capitaux Zheshang de l’Université des finances et de l’économie du Zhejiang, le centre accompagne étudiants, professionnels et organisations grâce à des parcours progressifs, une pratique active et des retours précis.",
    coursesEyebrow: "Programmes de langues",
    coursesTitle: "Choisissez une langue et construisez votre parcours",
    coursesText:
      "Les programmes vont des bases aux usages avancés, avec des modules consacrés à l’oral, au monde professionnel et aux examens.",
    courseAction: "Voir le catalogue complet des cours",
    courses: [
      { mark: "EN", title: "Anglais", subtitle: "8 formats", text: "Anglais général, oral, professionnel et préparation à l’IELTS." },
      { mark: "FR", title: "Français", subtitle: "6 formats", text: "Un parcours du niveau A1 au B2, complété par la préparation au DELF." },
      { mark: "日", title: "Japonais", subtitle: "6 formats", text: "De l’initiation à la préparation progressive au JLPT." },
      { mark: "한", title: "Coréen", subtitle: "6 formats", text: "Bases solides, communication pratique et préparation au TOPIK II." },
    ],
    approachEyebrow: "Notre pédagogie",
    approachTitle: "Des objectifs clairs, de la pratique et un suivi utile",
    approachText:
      "Une langue s’installe quand elle sert à agir et à communiquer. Chaque étape relie les acquis du cours à l’expression, à la collaboration et à la compréhension culturelle.",
    approachItems: [
      { title: "Commencer au bon niveau", text: "Le parcours tient compte des acquis, des objectifs et du temps disponible." },
      { title: "Apprendre en pratiquant", text: "Le vocabulaire et la grammaire deviennent des outils pour les études, le travail et la vie quotidienne." },
      { title: "Mesurer ses progrès", text: "Des tâches d’étape et des retours précis rendent les progrès visibles." },
    ],
    ctaEyebrow: "ÉCHANGEONS",
    ctaTitle: "Parlez-nous de votre projet linguistique",
    ctaText: "Indiquez-nous votre niveau, vos objectifs et vos disponibilités. Nous vous aiderons à choisir un point de départ.",
    ctaButton: "Contacter le centre",
    footerText:
      "Plus de dix ans d’enseignement des langues et d’accompagnement des particuliers comme des organisations.",
    quickLinks: "Liens rapides",
    contact: "Contact",
    consultation: "Renseignements sur les cours",
    address: "Centre de langues, campus Wenhua, Université des finances et de l’économie du Zhejiang, 83 route Wenyi Ouest, district de Xihu, Hangzhou, Zhejiang, Chine",
    footerTagline: "Enseignement des langues · Apprentissage multilingue · Échanges internationaux",
    metadataTitle: "Centre de langues · Université des finances et de l’économie du Zhejiang",
    metadataDescription:
      "Cours d’anglais, de français, de japonais et de coréen, préparation aux examens, communication professionnelle et formations sur mesure.",
  },
  ja: {
    siteName: "語学センター · ZUFE",
    eyebrow: "LANGUAGE · KNOWLEDGE · WORLD",
    heroTitle: "ことばを、より広い世界へ進む力に",
    heroText:
      "英語・フランス語・日本語・韓国語を、入門から留学、試験、仕事で使えるレベルまで段階的に学べるプログラムです。",
    primaryCta: "コースを見る",
    secondaryCta: "学習相談をする",
    nav: [
      { label: "センター紹介", href: "/about" },
      { label: "語学コース", href: "/languages" },
      { label: "プログラム", href: "/programs" },
      { label: "実践学習", href: "/practice" },
      { label: "講師陣", href: "/faculty" },
      { label: "リソース", href: "/resources" },
      { label: "ニュース", href: "/news" },
      { label: "お問い合わせ", href: "/contact" },
    ],
    stats: [
      { value: "10+", label: "年の教育実績" },
      { value: "10,000+", label: "受講者数" },
      { value: "4", label: "対応言語" },
      { value: "26", label: "クラス形式" },
    ],
    aboutEyebrow: "センターについて",
    aboutTitle: "十年以上、着実で実践的な語学教育を",
    aboutText:
      "浙江財経大学浙商資本市場研究院との協力のもと、学生、社会人、組織を対象に語学教育を行っています。明確な到達目標、実践的な課題、次の学びにつながるフィードバックを大切にしています。",
    coursesEyebrow: "語学プログラム",
    coursesTitle: "目的に合った言語と学習ルートを選ぶ",
    coursesText:
      "初級から中上級までの総合コースに加え、会話、ビジネス、語学試験に対応した専門コースを用意しています。",
    courseAction: "全コース一覧を見る",
    courses: [
      { mark: "EN", title: "英語", subtitle: "8クラス", text: "総合英語、会話、ビジネス、IELTS準備。" },
      { mark: "FR", title: "フランス語", subtitle: "6クラス", text: "A1からB2までの段階学習とDELF対策。" },
      { mark: "日", title: "日本語", subtitle: "6クラス", text: "ゼロからJLPT対策まで、段階的に学習。" },
      { mark: "한", title: "韓国語", subtitle: "6クラス", text: "基礎、実用コミュニケーション、TOPIK II対策。" },
    ],
    approachEyebrow: "学び方",
    approachTitle: "明確な目標、実践、役立つフィードバック",
    approachText:
      "ことばは、実際に使うことで身につきます。授業で学んだ知識を、会話、文章作成、協働課題、文化理解へとつなげます。",
    approachItems: [
      { title: "適切なレベルから始める", text: "学習歴、目標、学習に使える時間を確認してコースを提案します。" },
      { title: "使いながら学ぶ", text: "語彙や文法を、学業、仕事、日常生活で使える表現に変えます。" },
      { title: "成長を確かめる", text: "段階課題と講師のフィードバックで、成果と次の一歩を明確にします。" },
    ],
    ctaEyebrow: "LEARNING CONSULTATION",
    ctaTitle: "語学を学ぶ目的をお聞かせください",
    ctaText: "現在のレベル、目標、受講可能な時間をもとに、適切なスタート地点をご案内します。",
    ctaButton: "センターに問い合わせる",
    footerText:
      "十年以上にわたり、個人と組織に体系的な語学コースと学習支援を提供しています。",
    quickLinks: "クイックリンク",
    contact: "お問い合わせ",
    consultation: "コース相談",
    address: "中国浙江省杭州市西湖区文一西路83号 浙江財経大学（文華キャンパス）語学センター",
    footerTagline: "語学教育 · 多言語学習 · 国際交流",
    metadataTitle: "語学センター · 浙江財経大学",
    metadataDescription:
      "英語、フランス語、日本語、韓国語の段階別コース、試験対策、ビジネスコミュニケーション、法人研修。",
  },
  ko: {
    siteName: "언어센터 · ZUFE",
    eyebrow: "LANGUAGE · KNOWLEDGE · WORLD",
    heroTitle: "언어를 더 넓은 세계로 나아가는 힘으로",
    heroText:
      "영어·프랑스어·일본어·한국어를 기초부터 유학, 시험, 직무 활용 단계까지 체계적으로 배우는 프로그램입니다.",
    primaryCta: "과정 살펴보기",
    secondaryCta: "학습 상담하기",
    nav: [
      { label: "센터 소개", href: "/about" },
      { label: "언어 과정", href: "/languages" },
      { label: "프로그램", href: "/programs" },
      { label: "실천 학습", href: "/practice" },
      { label: "강사진", href: "/faculty" },
      { label: "자료", href: "/resources" },
      { label: "소식", href: "/news" },
      { label: "문의", href: "/contact" },
    ],
    stats: [
      { value: "10+", label: "년 교육 경험" },
      { value: "10,000+", label: "누적 학습자" },
      { value: "4", label: "교육 언어" },
      { value: "26", label: "수업 유형" },
    ],
    aboutEyebrow: "센터 소개",
    aboutTitle: "10년 넘게 이어 온 꾸준하고 실용적인 언어교육",
    aboutText:
      "저장재경대학교 저장상인 자본시장 연구원과 협력하여 학생, 직장인, 기관을 위한 언어교육을 제공합니다. 명확한 단계, 실제 활용, 구체적인 피드백을 통해 학습자가 자신의 성장을 확인하도록 돕습니다.",
    coursesEyebrow: "언어 프로그램",
    coursesTitle: "목표에 맞는 언어와 학습 경로를 선택하세요",
    coursesText:
      "입문부터 중·고급 활용까지 단계별 과정과 회화, 비즈니스, 어학시험 중심의 전문 과정을 운영합니다.",
    courseAction: "전체 과정 보기",
    courses: [
      { mark: "EN", title: "영어", subtitle: "8개 과정", text: "종합 영어, 회화, 비즈니스, IELTS 준비." },
      { mark: "FR", title: "프랑스어", subtitle: "6개 과정", text: "A1부터 B2까지의 단계 학습과 DELF 준비." },
      { mark: "日", title: "일본어", subtitle: "6개 과정", text: "입문부터 JLPT 준비까지 이어지는 체계적인 과정." },
      { mark: "한", title: "한국어", subtitle: "6개 과정", text: "기초, 실용 의사소통, TOPIK II 준비." },
    ],
    approachEyebrow: "교육 방식",
    approachTitle: "명확한 목표, 실제 사용, 유용한 피드백",
    approachText:
      "언어는 의미 있는 과제를 수행하며 사용할 때 오래 남습니다. 수업에서 익힌 내용을 말하기, 쓰기, 협업, 문화 이해와 연결합니다.",
    approachItems: [
      { title: "알맞은 단계에서 시작", text: "학습 경험, 목표, 가능한 학습 시간을 확인한 뒤 과정을 제안합니다." },
      { title: "사용하며 배우기", text: "어휘와 문법을 학업, 업무, 일상에서 사용할 수 있는 표현으로 바꿉니다." },
      { title: "성장을 확인하기", text: "단계별 과제와 교사의 피드백으로 성과와 다음 목표를 분명히 합니다." },
    ],
    ctaEyebrow: "LEARNING CONSULTATION",
    ctaTitle: "언어를 배우는 목적을 알려 주세요",
    ctaText: "현재 수준, 목표, 가능한 시간을 알려 주시면 적절한 시작점을 함께 찾겠습니다.",
    ctaButton: "센터에 문의하기",
    footerText:
      "10년 넘게 개인과 기관을 위한 체계적인 언어 과정과 학습 지원을 제공해 왔습니다.",
    quickLinks: "바로가기",
    contact: "문의",
    consultation: "과정 상담",
    address: "중국 저장성 항저우시 시후구 원이서로 83호 저장재경대학교(원화캠퍼스) 언어센터",
    footerTagline: "언어교육 · 다언어 학습 · 국제교류",
    metadataTitle: "언어센터 · 저장재경대학교",
    metadataDescription:
      "영어, 프랑스어, 일본어, 한국어 단계별 과정과 시험 준비, 비즈니스 커뮤니케이션, 맞춤형 기관 연수.",
  },
  es: {
    siteName: "Centro de Idiomas · ZUFE",
    eyebrow: "IDIOMAS · CONOCIMIENTO · MUNDO",
    heroTitle: "El idioma como puerta a un mundo más amplio",
    heroText:
      "Programas estructurados de inglés, francés, japonés y coreano, desde el nivel inicial hasta la comunicación académica, profesional y la preparación de exámenes.",
    primaryCta: "Explorar los cursos",
    secondaryCta: "Hablar con un asesor",
    nav: [
      { label: "El centro", href: "/about" },
      { label: "Cursos", href: "/languages" },
      { label: "Programas", href: "/programs" },
      { label: "Práctica", href: "/practice" },
      { label: "Equipo", href: "/faculty" },
      { label: "Recursos", href: "/resources" },
      { label: "Noticias", href: "/news" },
      { label: "Contacto", href: "/contact" },
    ],
    stats: [
      { value: "10+", label: "años de enseñanza" },
      { value: "10.000+", label: "estudiantes atendidos" },
      { value: "4", label: "idiomas" },
      { value: "26", label: "modalidades de curso" },
    ],
    aboutEyebrow: "Sobre el centro",
    aboutTitle: "Más de una década de enseñanza práctica y constante",
    aboutText:
      "En colaboración con el Instituto de Investigación del Mercado de Capitales Zheshang de la Universidad de Finanzas y Economía de Zhejiang, atendemos a estudiantes, profesionales y organizaciones con itinerarios progresivos, práctica útil y orientación concreta.",
    coursesEyebrow: "Programas de idiomas",
    coursesTitle: "Elige un idioma y construye un camino acorde con tu meta",
    coursesText:
      "Los programas abarcan desde los fundamentos hasta el uso avanzado, con opciones específicas de conversación, negocios y preparación de exámenes.",
    courseAction: "Ver el catálogo completo",
    courses: [
      { mark: "EN", title: "Inglés", subtitle: "8 modalidades", text: "Inglés general, conversación, negocios y preparación para IELTS." },
      { mark: "FR", title: "Francés", subtitle: "6 modalidades", text: "Progresión de A1 a B2 y preparación para DELF." },
      { mark: "日", title: "Japonés", subtitle: "6 modalidades", text: "Un recorrido gradual desde iniciación hasta preparación para JLPT." },
      { mark: "한", title: "Coreano", subtitle: "6 modalidades", text: "Fundamentos, comunicación práctica y preparación para TOPIK II." },
    ],
    approachEyebrow: "Cómo enseñamos",
    approachTitle: "Objetivos claros, uso activo y comentarios útiles",
    approachText:
      "Un idioma se consolida cuando se utiliza para realizar tareas con sentido. Cada etapa conecta lo aprendido en clase con la expresión, la colaboración y la comprensión cultural.",
    approachItems: [
      { title: "Empezar en el nivel adecuado", text: "Tenemos en cuenta la experiencia previa, los objetivos y el tiempo disponible." },
      { title: "Aprender mediante el uso", text: "El vocabulario y la gramática se convierten en comunicación para los estudios, el trabajo y la vida diaria." },
      { title: "Reconocer el progreso", text: "Las tareas de etapa y la orientación docente hacen visibles los avances." },
    ],
    ctaEyebrow: "HABLEMOS",
    ctaTitle: "Cuéntanos adónde quieres llegar con el idioma",
    ctaText: "Comparte tu nivel actual, tus objetivos y tu disponibilidad. Te ayudaremos a encontrar un punto de partida adecuado.",
    ctaButton: "Contactar con el centro",
    footerText:
      "Más de diez años de enseñanza de idiomas y apoyo formativo para personas y organizaciones.",
    quickLinks: "Enlaces rápidos",
    contact: "Contacto",
    consultation: "Consultas sobre cursos",
    address: "Centro de Idiomas, campus Wenhua, Universidad de Finanzas y Economía de Zhejiang, n.º 83 Wenyi West Road, distrito de Xihu, Hangzhou, Zhejiang, China",
    footerTagline: "Enseñanza de idiomas · Aprendizaje multilingüe · Intercambio internacional",
    metadataTitle: "Centro de Idiomas · Universidad de Finanzas y Economía de Zhejiang",
    metadataDescription:
      "Cursos de inglés, francés, japonés y coreano, preparación de exámenes, comunicación profesional y formación a medida.",
  },
};

export type LocalizedUi = {
  overview: string;
  viewDetails: string;
  nextStep: string;
  backTo: string;
  atAGlance: string;
  inPractice: string;
  practiceBody: string;
  enrolmentNote: string;
  contactCenter: string;
  classCatalogue: string;
  structuredOptions: (count: number) => string;
  catalogueIntro: string;
  courseDetails: string;
  backToAllLanguages: string;
  backToCatalogue: (language: string) => string;
  recommendedFor: string;
  level: string;
  standardLength: string;
  studyFrequency: string;
  classSize: string;
  admissionsStatus: string;
  enrolling: string;
  stageOutcomes: string;
  outcomesTitle: string;
  courseOutline: string;
  modulesTitle: string;
  modulesIntro: string;
  moduleLabel: string;
  placement: string;
  placementTitle: string;
  placementText: string;
  askAvailability: string;
  backToNews: string;
  newsCaption: string;
  newsNote: string;
};

export const localizedUi: Record<ForeignLocale, LocalizedUi> = {
  en: {
    overview: "Overview",
    viewDetails: "View details",
    nextStep: "Next step",
    backTo: "Back to",
    atAGlance: "At a glance",
    inPractice: "In practice",
    practiceBody:
      "The center begins with a clear purpose, chooses an appropriate format and uses participation and feedback to review what is working. Details are adjusted to the learners involved without losing the intended outcome.",
    enrolmentNote:
      "Programs are open for consultation and enrolment. The center will help learners choose a suitable class based on level, goals and available study time.",
    contactCenter: "Contact the center",
    classCatalogue: "Class catalogue",
    structuredOptions: (count) => `${count} structured course options`,
    catalogueIntro:
      "Course length and class size describe the standard teaching plan. Current programs are open for consultation and enrolment.",
    courseDetails: "Course details",
    backToAllLanguages: "Back to all languages",
    backToCatalogue: (language) => `Back to the ${language} class catalogue`,
    recommendedFor: "Recommended for",
    level: "Level",
    standardLength: "Standard length",
    studyFrequency: "Study frequency",
    classSize: "Suggested class size",
    admissionsStatus: "Admissions status",
    enrolling: "Open for enrolment",
    stageOutcomes: "Stage outcomes",
    outcomesTitle: "What you should be able to do after this stage",
    courseOutline: "Course outline",
    modulesTitle: "Four connected learning modules",
    modulesIntro:
      "Teachers may adjust practice density in response to the class, while the stage outcomes and core content remain consistent.",
    moduleLabel: "MODULE",
    placement: "Placement & enrolment",
    placementTitle: "Confirm your starting point before choosing a class",
    placementText:
      "Share your learning history, goal and available times. Where a level check is needed, the center will arrange a short assessment or conversation before recommending a class.",
    askAvailability: "Ask about course availability",
    backToNews: "Back to news and archive",
    newsCaption: "language learning and exchange",
    newsNote:
      "Course, open-class and language-cultural activity information is published in the news archive. Contact the center to ask about current arrangements.",
  },
  fr: {
    overview: "Aperçu",
    viewDetails: "Voir les détails",
    nextStep: "Prochaine étape",
    backTo: "Retour à",
    atAGlance: "En un coup d'oeil",
    inPractice: "En pratique",
    practiceBody:
      "Le centre part d'un objectif clair, choisit un format adapté et s'appuie sur la participation et les retours pour suivre les progrès. Les détails sont ajustés selon les apprenants sans perdre le résultat visé.",
    enrolmentNote:
      "Les programmes sont ouverts à la consultation et à l'inscription. Le centre aide les apprenants à choisir une classe adaptée à leur niveau, leurs objectifs et leurs disponibilités.",
    contactCenter: "Contacter le centre",
    classCatalogue: "Catalogue des classes",
    structuredOptions: (count) => `${count} options de cours structurées`,
    catalogueIntro:
      "La durée et la taille des classes décrivent le plan pédagogique standard. Les programmes actuels sont ouverts à la consultation et à l'inscription.",
    courseDetails: "Détails du cours",
    backToAllLanguages: "Retour à toutes les langues",
    backToCatalogue: (language) => `Retour au catalogue ${language}`,
    recommendedFor: "Recommandé pour",
    level: "Niveau",
    standardLength: "Durée standard",
    studyFrequency: "Fréquence d'étude",
    classSize: "Taille de classe conseillée",
    admissionsStatus: "Statut des inscriptions",
    enrolling: "Inscriptions ouvertes",
    stageOutcomes: "Résultats attendus",
    outcomesTitle: "Ce que vous devriez pouvoir faire à la fin de cette étape",
    courseOutline: "Plan du cours",
    modulesTitle: "Quatre modules d'apprentissage reliés",
    modulesIntro:
      "Les enseignants peuvent ajuster la densité des exercices selon la classe, tandis que les objectifs d'étape et le contenu central restent cohérents.",
    moduleLabel: "MODULE",
    placement: "Positionnement et inscription",
    placementTitle: "Confirmer son point de départ avant de choisir une classe",
    placementText:
      "Partagez votre parcours, votre objectif et vos disponibilités. Si nécessaire, le centre organisera un court entretien ou une évaluation avant de recommander une classe.",
    askAvailability: "Demander les disponibilités",
    backToNews: "Retour aux actualités",
    newsCaption: "apprentissage des langues et échanges",
    newsNote:
      "Les informations sur les cours, les classes ouvertes et les activités linguistiques et culturelles sont publiées dans les archives. Contactez le centre pour connaître les arrangements actuels.",
  },
  ja: {
    overview: "概要",
    viewDetails: "詳細を見る",
    nextStep: "次のステップ",
    backTo: "戻る：",
    atAGlance: "ポイント",
    inPractice: "実践での形",
    practiceBody:
      "センターは明確な目的から出発し、適切な形式を選び、参加とフィードバックを通じて学習状況を確認します。対象者に合わせて内容を調整しながら、到達目標は保ちます。",
    enrolmentNote:
      "各プログラムは相談・申込受付中です。センターはレベル、目標、受講可能な時間に合わせて適切なクラス選びをサポートします。",
    contactCenter: "センターに問い合わせる",
    classCatalogue: "クラス一覧",
    structuredOptions: (count) => `${count}種類のコース`,
    catalogueIntro:
      "期間とクラス規模は標準的な授業計画です。現在、各プログラムは相談・申込受付中です。",
    courseDetails: "コース詳細",
    backToAllLanguages: "すべての言語に戻る",
    backToCatalogue: (language) => `${language}のクラス一覧に戻る`,
    recommendedFor: "対象者",
    level: "レベル",
    standardLength: "標準期間",
    studyFrequency: "学習頻度",
    classSize: "推奨クラス規模",
    admissionsStatus: "募集状況",
    enrolling: "申込受付中",
    stageOutcomes: "到達目標",
    outcomesTitle: "この段階の終了時にできるようになること",
    courseOutline: "コース概要",
    modulesTitle: "四つの連続した学習モジュール",
    modulesIntro:
      "講師はクラスの状況に応じて練習量を調整しますが、段階目標と中心内容は一貫しています。",
    moduleLabel: "モジュール",
    placement: "レベル確認と申込",
    placementTitle: "クラスを選ぶ前に出発点を確認する",
    placementText:
      "学習歴、目標、受講可能な時間をお知らせください。必要に応じて短いレベル確認や面談を行い、適切なクラスをご案内します。",
    askAvailability: "開講状況を問い合わせる",
    backToNews: "ニュース一覧に戻る",
    newsCaption: "語学学習と交流",
    newsNote:
      "コース、公開授業、語学・文化活動の情報はニュースアーカイブで公開しています。現在の予定はセンターまでお問い合わせください。",
  },
  ko: {
    overview: "개요",
    viewDetails: "자세히 보기",
    nextStep: "다음 단계",
    backTo: "돌아가기:",
    atAGlance: "한눈에 보기",
    inPractice: "실제 운영",
    practiceBody:
      "센터는 명확한 목적에서 출발해 적절한 형식을 선택하고, 참여와 피드백을 통해 학습 효과를 점검합니다. 학습자에 맞게 세부 사항을 조정하되 목표는 유지합니다.",
    enrolmentNote:
      "각 프로그램은 상담 및 등록 접수 중입니다. 센터는 수준, 목표, 가능한 학습 시간에 맞춰 적절한 수업 선택을 돕습니다.",
    contactCenter: "센터에 문의하기",
    classCatalogue: "수업 목록",
    structuredOptions: (count) => `${count}개의 체계적인 과정`,
    catalogueIntro:
      "수업 기간과 인원은 표준 교육 계획입니다. 현재 프로그램은 상담 및 등록 접수 중입니다.",
    courseDetails: "과정 상세",
    backToAllLanguages: "전체 언어로 돌아가기",
    backToCatalogue: (language) => `${language} 수업 목록으로 돌아가기`,
    recommendedFor: "추천 대상",
    level: "수준",
    standardLength: "표준 기간",
    studyFrequency: "학습 빈도",
    classSize: "권장 인원",
    admissionsStatus: "모집 상태",
    enrolling: "등록 접수 중",
    stageOutcomes: "단계 성과",
    outcomesTitle: "이 단계 후 할 수 있어야 하는 것",
    courseOutline: "과정 개요",
    modulesTitle: "연결된 네 개의 학습 모듈",
    modulesIntro:
      "강사는 수업 상황에 따라 연습 밀도를 조정하지만 단계 목표와 핵심 내용은 일관되게 유지됩니다.",
    moduleLabel: "모듈",
    placement: "레벨 확인 및 등록",
    placementTitle: "수업 선택 전에 출발점을 확인하세요",
    placementText:
      "학습 경험, 목표, 가능한 시간을 알려 주세요. 필요한 경우 센터가 짧은 평가나 상담을 진행한 뒤 적절한 수업을 추천합니다.",
    askAvailability: "수업 가능 여부 문의",
    backToNews: "뉴스 목록으로 돌아가기",
    newsCaption: "언어 학습과 교류",
    newsNote:
      "과정, 공개 수업, 언어·문화 활동 정보는 뉴스 아카이브에 게시됩니다. 현재 일정은 센터에 문의해 주세요.",
  },
  es: {
    overview: "Resumen",
    viewDetails: "Ver detalles",
    nextStep: "Siguiente paso",
    backTo: "Volver a",
    atAGlance: "De un vistazo",
    inPractice: "En la práctica",
    practiceBody:
      "El centro parte de un propósito claro, elige un formato adecuado y utiliza la participación y la retroalimentación para revisar el avance. Los detalles se ajustan a los estudiantes sin perder el resultado previsto.",
    enrolmentNote:
      "Los programas están abiertos a consulta e inscripción. El centro ayuda a elegir una clase adecuada según el nivel, los objetivos y el tiempo disponible.",
    contactCenter: "Contactar con el centro",
    classCatalogue: "Catálogo de clases",
    structuredOptions: (count) => `${count} opciones de curso estructuradas`,
    catalogueIntro:
      "La duración y el tamaño de clase describen el plan docente estándar. Los programas actuales están abiertos a consulta e inscripción.",
    courseDetails: "Detalles del curso",
    backToAllLanguages: "Volver a todos los idiomas",
    backToCatalogue: (language) => `Volver al catálogo de ${language}`,
    recommendedFor: "Recomendado para",
    level: "Nivel",
    standardLength: "Duración estándar",
    studyFrequency: "Frecuencia de estudio",
    classSize: "Tamaño sugerido",
    admissionsStatus: "Estado de admisión",
    enrolling: "Inscripción abierta",
    stageOutcomes: "Resultados de etapa",
    outcomesTitle: "Lo que deberías poder hacer al terminar esta etapa",
    courseOutline: "Programa del curso",
    modulesTitle: "Cuatro módulos de aprendizaje conectados",
    modulesIntro:
      "Los docentes pueden ajustar la intensidad de práctica según la clase, mientras los objetivos de etapa y el contenido central se mantienen.",
    moduleLabel: "MÓDULO",
    placement: "Nivelación e inscripción",
    placementTitle: "Confirma tu punto de partida antes de elegir una clase",
    placementText:
      "Comparte tu experiencia, objetivo y horarios disponibles. Si hace falta, el centro organizará una breve evaluación o conversación antes de recomendar una clase.",
    askAvailability: "Consultar disponibilidad",
    backToNews: "Volver a noticias",
    newsCaption: "aprendizaje de idiomas e intercambio",
    newsNote:
      "La información sobre cursos, clases abiertas y actividades lingüísticas y culturales se publica en el archivo de noticias. Contacta con el centro para consultar los planes actuales.",
  },
};
