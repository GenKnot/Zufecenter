import type { ForeignLocale } from "@/data/i18n";

export type FacultyProfile = {
  name: string;
  role: string;
  focus: string;
  experience: string;
  bio: string;
  credential: string;
};

export const facultyProfilesZh: FacultyProfile[] = [
  {
    name: "Alexis Martin (孟天)",
    role: "法语教学教师 / FLE 与国际测评",
    focus: "对外法语、专门用途法语、大学法语、TEF / TEFAQ / DFP",
    experience: "20 余年国际法语教学经验",
    bio: "自 2003 年起在英国、爱沙尼亚、爱尔兰和中国从事法语教学，覆盖中学、高校、语言机构与企业培训；2023 年起任教于浙江财经大学语言中心。",
    credential: "拥有教育科学、专业在线教育及对外法语教学法三个硕士学位，并具备 TEF、TEFAQ 与 DFP 授权考官资质。",
  },
  {
    name: "Li Gao (高力)",
    role: "法语教学与学习辅导教师",
    focus: "法语入门、发音与会话、个别辅导、DELF B1 / B2",
    experience: "7 年法语教学与辅导经验",
    bio: "2018 至 2025 年从事初级至中级法语教学和个别学习辅导，重视语音、基础语法、日常会话及学习计划的针对性设计。",
    credential: "西南财经大学金融学硕士，具备法语、英语和中文多语沟通能力，并有集体课、个别课及线上教学经验。",
  },
  {
    name: "Jean-Christophe Connat (高尚)",
    role: "法语教学教师 / 专业法语方向",
    focus: "法语会话、法国文化、商务及科技法语、跨文化沟通",
    experience: "法语教学与成人培训背景",
    bio: "2024 年起任教于浙江财经大学语言中心，将法语母语优势与工程质量、国际团队管理及成人培训经验融入课堂。",
    credential: "完成 CAVILAM - Alliance Française 对外法语教学高级培训，并拥有质量工程及国际企业培训背景。",
  },
  {
    name: "Samira Zohra Midoun, Ph.D.",
    role: "法语教学教师 / 学术语言与双语教学",
    focus: "A1-C1 法语、AP French、学术与科学语言、跨文化沟通",
    experience: "高校教学与科研背景",
    bio: "2024 年起任教于浙江财经大学语言中心，承担 A1 至 C1 法语课程；同时具有 AP French、英语授课及高校科研教学经验。",
    credential: "华中科技大学分子生物学与遗传学博士，持有 TCF、TEFL、IELTS 与 HSK 4 等语言及教学相关证书。",
  },
];

export const localizedFacultyProfiles: Record<ForeignLocale, FacultyProfile[]> = {
  en: [
    {
      name: "Alexis Martin (Meng Tian)",
      role: "French Instructor / FLE and International Assessment",
      focus: "FLE, French for specific and academic purposes, TEF, TEFAQ and DFP",
      experience: "More than 20 years of international French teaching",
      bio: "Since 2003, he has taught French in the United Kingdom, Estonia, Ireland and China across schools, universities, language centers and corporate programs. He joined the ZUFE Language Center in 2023.",
      credential: "He holds master's degrees in education, professional e-learning and FLE methodology, and is an authorized TEF, TEFAQ and DFP examiner.",
    },
    {
      name: "Li Gao (Gao Li)",
      role: "French Instructor and Learning Adviser",
      focus: "Beginner French, pronunciation and conversation, individual support, DELF B1/B2",
      experience: "7 years of French teaching and tutoring",
      bio: "From 2018 to 2025, he taught beginner-to-intermediate French and provided individual learning support, with close attention to pronunciation, core grammar, everyday conversation and personalized study plans.",
      credential: "He holds a master's degree in finance from Southwestern University of Finance and Economics and works across French, English and Chinese in group, individual and online teaching settings.",
    },
    {
      name: "Jean-Christophe Connat (Gao Shang)",
      role: "French Instructor / Professional French",
      focus: "French conversation, French culture, business and technical French, intercultural communication",
      experience: "French teaching and adult-training background",
      bio: "He has taught at the ZUFE Language Center since 2024, combining native French expertise with experience in quality engineering, international team management and adult training.",
      credential: "He completed advanced FLE teacher training with CAVILAM - Alliance Française and brings a professional background in quality engineering and international corporate training.",
    },
    {
      name: "Samira Zohra Midoun, Ph.D.",
      role: "French Instructor / Academic Language and Bilingual Teaching",
      focus: "A1-C1 French, AP French, academic and scientific language, intercultural communication",
      experience: "University teaching and research background",
      bio: "She has taught A1-C1 French at the ZUFE Language Center since 2024 and also brings experience in AP French, English-medium instruction and university research teaching.",
      credential: "She holds a Ph.D. in molecular biology and genetics from Huazhong University of Science and Technology, together with TCF, TEFL, IELTS and HSK 4 credentials.",
    },
  ],
  fr: [
    {
      name: "Alexis Martin (Meng Tian)",
      role: "Enseignant de français / FLE et évaluations internationales",
      focus: "FLE, français sur objectifs spécifiques et universitaires, TEF, TEFAQ et DFP",
      experience: "Plus de 20 ans d'enseignement international du français",
      bio: "Depuis 2003, il enseigne le français au Royaume-Uni, en Estonie, en Irlande et en Chine auprès d'établissements scolaires, d'universités, de centres de langues et d'entreprises. Il a rejoint le Centre de langues de la ZUFE en 2023.",
      credential: "Il est titulaire de trois masters en sciences de l'éducation, e-learning professionnel et didactique du FLE, et il est examinateur habilité TEF, TEFAQ et DFP.",
    },
    {
      name: "Li Gao (Gao Li)",
      role: "Enseignant de français et conseiller pédagogique",
      focus: "Français débutant, prononciation et conversation, accompagnement individuel, DELF B1/B2",
      experience: "7 ans d'enseignement et de tutorat en français",
      bio: "De 2018 à 2025, il a enseigné le français du niveau débutant au niveau intermédiaire et assuré un accompagnement individuel centré sur la prononciation, la grammaire de base, la conversation et les plans d'étude personnalisés.",
      credential: "Titulaire d'un master en finance de la Southwestern University of Finance and Economics, il travaille en français, en anglais et en chinois dans des cours collectifs, individuels et en ligne.",
    },
    {
      name: "Jean-Christophe Connat (Gao Shang)",
      role: "Enseignant de français / Français professionnel",
      focus: "Conversation, culture française, français des affaires et technique, communication interculturelle",
      experience: "Expérience en enseignement du français et formation d'adultes",
      bio: "Enseignant au Centre de langues de la ZUFE depuis 2024, il associe sa maîtrise du français langue maternelle à son expérience en ingénierie qualité, management international et formation d'adultes.",
      credential: "Il a suivi la formation avancée d'enseignement du FLE du CAVILAM - Alliance Française et possède une expérience professionnelle en qualité et en formation au sein d'entreprises internationales.",
    },
    {
      name: "Samira Zohra Midoun, Ph.D.",
      role: "Enseignante de français / Langues académiques et enseignement bilingue",
      focus: "Français A1-C1, AP French, langues académique et scientifique, communication interculturelle",
      experience: "Expérience universitaire en enseignement et en recherche",
      bio: "Depuis 2024, elle enseigne le français du niveau A1 au niveau C1 au Centre de langues de la ZUFE. Elle possède également une expérience en AP French, en enseignement en anglais et en recherche universitaire.",
      credential: "Docteure en biologie moléculaire et génétique de la Huazhong University of Science and Technology, elle est également titulaire des certifications TCF, TEFL, IELTS et HSK 4.",
    },
  ],
  ja: [
    {
      name: "Alexis Martin (孟天)",
      role: "フランス語講師 / FLE・国際評価",
      focus: "FLE、専門・大学目的フランス語、TEF、TEFAQ、DFP",
      experience: "20年以上の国際フランス語教育経験",
      bio: "2003年以来、英国、エストニア、アイルランド、中国の学校・大学・語学機関・企業でフランス語を指導し、2023年に浙江財経大学語学センターの講師に着任しました。",
      credential: "教育科学、専門eラーニング、FLE教授法の3つの修士号を持ち、TEF・TEFAQ・DFPの認定試験官です。",
    },
    {
      name: "Li Gao (高力)",
      role: "フランス語講師・学習アドバイザー",
      focus: "初級フランス語、発音・会話、個別指導、DELF B1/B2",
      experience: "7年のフランス語教育・個別指導経験",
      bio: "2018年から2025年まで初級・中級フランス語と個別学習支援を担当し、発音、基礎文法、日常会話、一人ひとりに合わせた学習計画を重視してきました。",
      credential: "西南財経大学金融学修士。フランス語、英語、中国語を用い、グループ・個別・オンラインの各形式で指導できます。",
    },
    {
      name: "Jean-Christophe Connat (高尚)",
      role: "フランス語講師 / 専門フランス語",
      focus: "フランス語会話、フランス文化、ビジネス・技術フランス語、異文化コミュニケーション",
      experience: "フランス語教育と成人研修の経験",
      bio: "2024年から浙江財経大学語学センターで指導し、フランス語母語話者としての知識に、品質工学、国際チーム管理、成人研修の経験を組み合わせています。",
      credential: "CAVILAM - Alliance Françaiseの上級FLE教師研修を修了し、品質工学と国際企業研修の実務経験を有します。",
    },
    {
      name: "Samira Zohra Midoun, Ph.D.",
      role: "フランス語講師 / 学術言語・バイリンガル教育",
      focus: "A1-C1フランス語、AP French、学術・科学言語、異文化コミュニケーション",
      experience: "大学教育・研究の経験",
      bio: "2024年から浙江財経大学語学センターでA1-C1フランス語を担当し、AP French、英語による授業、大学での研究教育にも携わってきました。",
      credential: "華中科技大学で分子生物学・遺伝学の博士号を取得し、TCF、TEFL、IELTS、HSK 4の資格を有します。",
    },
  ],
  ko: [
    {
      name: "Alexis Martin (멍톈)",
      role: "프랑스어 강사 / FLE 및 국제 평가",
      focus: "FLE, 특수·대학 목적 프랑스어, TEF, TEFAQ, DFP",
      experience: "20년 이상의 국제 프랑스어 교육 경력",
      bio: "2003년부터 영국, 에스토니아, 아일랜드, 중국의 학교·대학·어학기관·기업에서 프랑스어를 가르쳤으며 2023년부터 저장재경대학교 언어센터에서 강의하고 있습니다.",
      credential: "교육학, 전문 e-러닝, FLE 교수법 분야의 석사 학위 3개를 보유하고 있으며 TEF, TEFAQ, DFP 공인 시험관입니다.",
    },
    {
      name: "Li Gao (가오리)",
      role: "프랑스어 강사 및 학습 지도 교사",
      focus: "초급 프랑스어, 발음과 회화, 개별 지도, DELF B1/B2",
      experience: "7년의 프랑스어 교육 및 튜터링 경력",
      bio: "2018년부터 2025년까지 초급·중급 프랑스어와 개별 학습 지도를 담당하며 발음, 기초 문법, 일상 회화, 맞춤형 학습 계획을 중점적으로 지도했습니다.",
      credential: "서남재경대학교 금융학 석사로, 프랑스어·영어·중국어를 활용해 그룹, 개별, 온라인 수업을 진행할 수 있습니다.",
    },
    {
      name: "Jean-Christophe Connat (가오상)",
      role: "프랑스어 강사 / 전문 프랑스어",
      focus: "프랑스어 회화, 프랑스 문화, 비즈니스·기술 프랑스어, 문화 간 소통",
      experience: "프랑스어 교육 및 성인 연수 경력",
      bio: "2024년부터 저장재경대학교 언어센터에서 강의하며 프랑스어 모어 전문성과 품질공학, 국제 팀 관리, 성인 연수 경험을 수업에 접목하고 있습니다.",
      credential: "CAVILAM - Alliance Française의 고급 FLE 교사 연수를 이수했으며 품질공학과 국제기업 연수 분야의 실무 경험을 보유하고 있습니다.",
    },
    {
      name: "Samira Zohra Midoun, Ph.D.",
      role: "프랑스어 강사 / 학술 언어 및 이중언어 교육",
      focus: "A1-C1 프랑스어, AP French, 학술·과학 언어, 문화 간 소통",
      experience: "대학 교육 및 연구 경력",
      bio: "2024년부터 저장재경대학교 언어센터에서 A1-C1 프랑스어를 가르치고 있으며 AP French, 영어 강의, 대학 연구 교육 경험도 갖추고 있습니다.",
      credential: "화중과기대학교 분자생물학·유전학 박사로 TCF, TEFL, IELTS, HSK 4 자격을 보유하고 있습니다.",
    },
  ],
  es: [
    {
      name: "Alexis Martin (Meng Tian)",
      role: "Profesor de francés / FLE y evaluación internacional",
      focus: "FLE, francés con fines específicos y universitarios, TEF, TEFAQ y DFP",
      experience: "Más de 20 años de enseñanza internacional del francés",
      bio: "Desde 2003 ha enseñado francés en el Reino Unido, Estonia, Irlanda y China en centros escolares, universidades, centros de idiomas y empresas. Se incorporó al Centro de Idiomas de ZUFE en 2023.",
      credential: "Cuenta con tres másteres en educación, e-learning profesional y didáctica del FLE, y es examinador autorizado de TEF, TEFAQ y DFP.",
    },
    {
      name: "Li Gao (Gao Li)",
      role: "Profesor de francés y orientador de aprendizaje",
      focus: "Francés inicial, pronunciación y conversación, apoyo individual, DELF B1/B2",
      experience: "7 años de enseñanza y tutoría de francés",
      bio: "Entre 2018 y 2025 enseñó francés de nivel inicial a intermedio y ofreció apoyo individual centrado en pronunciación, gramática básica, conversación cotidiana y planes de estudio personalizados.",
      credential: "Tiene un máster en Finanzas por la Southwestern University of Finance and Economics y trabaja en francés, inglés y chino en clases grupales, individuales y en línea.",
    },
    {
      name: "Jean-Christophe Connat (Gao Shang)",
      role: "Profesor de francés / Francés profesional",
      focus: "Conversación, cultura francesa, francés empresarial y técnico, comunicación intercultural",
      experience: "Experiencia en enseñanza de francés y formación de adultos",
      bio: "Enseña en el Centro de Idiomas de ZUFE desde 2024 y combina su dominio nativo del francés con experiencia en ingeniería de calidad, gestión de equipos internacionales y formación de adultos.",
      credential: "Completó la formación avanzada de profesores de FLE de CAVILAM - Alliance Française y aporta experiencia profesional en calidad y formación en empresas internacionales.",
    },
    {
      name: "Samira Zohra Midoun, Ph.D.",
      role: "Profesora de francés / Lenguaje académico y enseñanza bilingüe",
      focus: "Francés A1-C1, AP French, lenguaje académico y científico, comunicación intercultural",
      experience: "Experiencia universitaria en docencia e investigación",
      bio: "Desde 2024 enseña francés de A1 a C1 en el Centro de Idiomas de ZUFE y también aporta experiencia en AP French, docencia en inglés e investigación universitaria.",
      credential: "Es doctora en Biología Molecular y Genética por la Huazhong University of Science and Technology y cuenta con las certificaciones TCF, TEFL, IELTS y HSK 4.",
    },
  ],
};
