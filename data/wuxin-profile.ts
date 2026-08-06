export type WuXinLocale = "zh" | "en" | "fr" | "es" | "ja" | "ko";

export const wuXinMilestones = [
  { date: "2025-12-18", title: "浙江省国际金融学会：交流研究院建设与以赛促学实践", href: "http://www.stuse.com/index/news_detail/id/13432.html" },
  { date: "2025-09-30", title: "南开大学金融学院：介绍政产学研协同与研究院合作机制", href: "https://finance.nankai.edu.cn/2025/0930/c34600a579408/page.htm" },
  { date: "2025-07-18", title: "浙商之家：受聘钱塘助企出海全球化服务导师", href: "https://www.qxzh.zj.cn/art/2025/7/18/art_1228965107_58934745.html" },
  { date: "2025-07-14", title: "媒体报道：参与金砖国家企业出海智库建设", href: "http://m.toutiao.com/group/7526930635571675691/" },
  { date: "2025-07-11", title: "科技金融时报：谈地方国资与新质生产力", href: "https://kjb.zjol.com.cn/resfile/2025-07-11/00006/kjjrsb2025071100006.pdf" },
  { date: "2025-05-20", title: "上海证券报：获提名楚环科技独立董事", href: "http://paper.cnstock.com/html/2025-05/20/content_2069902.htm" },
  { date: "2024", title: "浙江省国际金融学会：年度工作总结与学术协作", href: "http://www.stuse.com/index/news_detail/id/13434.html" },
  { date: "2024-05-14", title: "媒体报道：上市公司独立董事候选人相关公告", href: "http://m.toutiao.com/group/7368695061342732809/" },
  { date: "2023-09-27", title: "浙江财经大学：合作论文发表于 International Review of Financial Analysis", href: "https://zyy.zufe.edu.cn/info/1022/2165.htm" },
  { date: "2023-08-05", title: "媒体报道：研究院与上市公司董秘群体开展合作", href: "http://m.toutiao.com/group/7263691336967291452/" },
  { date: "2022-09-20", title: "中国证券报：浙商资本市场研究院成立", href: "https://www.cs.com.cn/qs/202209/t20220920_6298957.html" },
  { date: "2016-07-03", title: "浙江财经大学：优秀共产党员与最受学生喜爱教师事迹", href: "https://xcb.zufe.edu.cn/info/1075/7953.htm" },
  { date: "2015-06-10", title: "浙江财经大学：第二届最受学生喜爱教师相关报道", href: "https://www.zufe.edu.cn/info/1063/18051.htm" },
] as const;

type WuXinProfileCopy = {
  eyebrow: string;
  title: string;
  introduction: string[];
  rolesTitle: string;
  roles: string[];
  focusTitle: string;
  focus: string[];
  recordTitle: string;
  recordIntro: string;
  sourceLabel: string;
  newsTitle: string;
  newsLabel: string;
};

export const wuXinProfileCopy: Record<WuXinLocale, WuXinProfileCopy> = {
  zh: {
    eyebrow: "中心领导",
    title: "武鑫教授",
    introduction: [
      "武鑫教授现任中心院长，同时担任浙江财经大学浙商资本市场研究院执行院长、地方财税治理能力动态监测与智能预警实验室执行主任。",
      "他长期开展金融创新与社会经济发展研究，并推动金融专业、国际化实践与法语沟通能力相结合的人才培养。浙江财经大学教师主页记载，其主持完成国家级课题2项、省部级课题12项，并承担中国证监会及地方政府部门等委托的社会服务课题50余项。",
    ],
    rolesTitle: "现任职务",
    roles: ["中心院长", "浙江财经大学浙商资本市场研究院执行院长", "地方财税治理能力动态监测与智能预警实验室执行主任", "浙江省国际金融学会副秘书长", "浙江省国际金融学术联盟秘书长", "浙江省公共政策研究院特聘研究员"],
    focusTitle: "工作与研究方向",
    focus: ["金融创新与社会经济发展", "资本市场与科技金融", "企业国际化与跨境金融服务", "法语复合型金融人才培养", "政产学研协同与社会服务"],
    recordTitle: "公开履历与专业动态",
    recordIntro: "以下条目来自学校、政府、学会与公开媒体页面。原始标题保留中文，便于核对来源。",
    sourceLabel: "查看来源",
    newsTitle: "院长动态",
    newsLabel: "阅读全文",
  },
  en: {
    eyebrow: "Leadership",
    title: "Professor Wu Xin",
    introduction: ["Professor Wu Xin is Dean of the center and Executive Dean of the Zheshang Capital Market Research Institute at ZUFE. He also leads the university laboratory for dynamic monitoring and intelligent early warning in local fiscal and tax governance.", "His work connects financial innovation and socioeconomic development with capital-market research, international business and interdisciplinary French-speaking finance education. His official ZUFE profile records two national projects, twelve provincial or ministerial projects and more than fifty commissioned public-service studies."],
    rolesTitle: "Current appointments",
    roles: ["Dean of the center", "Executive Dean, Zheshang Capital Market Research Institute, ZUFE", "Executive Director, laboratory for local fiscal and tax governance monitoring", "Deputy Secretary-General, Zhejiang Society of International Finance", "Secretary-General, Zhejiang International Finance Academic Alliance", "Distinguished Researcher, Zhejiang Institute of Public Policy"],
    focusTitle: "Research and service",
    focus: ["Financial innovation and socioeconomic development", "Capital markets and technology finance", "Enterprise internationalization and cross-border finance", "French-speaking interdisciplinary finance education", "Government–industry–university–research collaboration"],
    recordTitle: "Public professional record",
    recordIntro: "The records below link to university, government, academic-society and public media pages. Original Chinese source titles are retained for verification.",
    sourceLabel: "View source",
    newsTitle: "Dean's activities",
    newsLabel: "Read article",
  },
  fr: {
    eyebrow: "Direction",
    title: "Professeur Wu Xin",
    introduction: ["Le professeur Wu Xin est doyen du centre et doyen exécutif de l'Institut de recherche sur les marchés de capitaux Zheshang de la ZUFE. Il dirige également le laboratoire universitaire de suivi dynamique et d'alerte intelligente de la gouvernance fiscale locale.", "Ses travaux relient innovation financière, développement socio-économique, marchés de capitaux, internationalisation des entreprises et formation financière interdisciplinaire en français. Son profil officiel à la ZUFE mentionne deux projets nationaux, douze projets provinciaux ou ministériels et plus de cinquante études de service public commanditées."],
    rolesTitle: "Fonctions actuelles",
    roles: ["Doyen du centre", "Doyen exécutif de l'Institut Zheshang", "Directeur exécutif du laboratoire de gouvernance fiscale locale", "Secrétaire général adjoint de la Société du Zhejiang de finance internationale", "Secrétaire général de l'Alliance académique du Zhejiang de finance internationale", "Chercheur invité de l'Institut du Zhejiang de politiques publiques"],
    focusTitle: "Recherche et service",
    focus: ["Innovation financière et développement socio-économique", "Marchés de capitaux et finance technologique", "Internationalisation des entreprises et finance transfrontalière", "Formation financière interdisciplinaire en français", "Coopération entre pouvoirs publics, entreprises et universités"],
    recordTitle: "Parcours professionnel public",
    recordIntro: "Les liens renvoient vers des pages universitaires, publiques, académiques et médiatiques. Les titres chinois d'origine sont conservés pour vérification.",
    sourceLabel: "Voir la source",
    newsTitle: "Activités du doyen",
    newsLabel: "Lire l'article",
  },
  es: {
    eyebrow: "Dirección",
    title: "Profesor Wu Xin",
    introduction: ["El profesor Wu Xin es decano del centro y decano ejecutivo del Instituto Zheshang de Investigación del Mercado de Capitales de ZUFE. También dirige el laboratorio universitario de seguimiento dinámico y alerta inteligente de la gobernanza fiscal local.", "Su trabajo conecta la innovación financiera y el desarrollo socioeconómico con los mercados de capitales, la internacionalización empresarial y la formación financiera interdisciplinaria en francés. Su perfil oficial de ZUFE registra dos proyectos nacionales, doce provinciales o ministeriales y más de cincuenta estudios de servicio público por encargo."],
    rolesTitle: "Cargos actuales",
    roles: ["Decano del centro", "Decano ejecutivo del Instituto Zheshang", "Director ejecutivo del laboratorio de gobernanza fiscal local", "Vicesecretario general de la Sociedad de Finanzas Internacionales de Zhejiang", "Secretario general de la Alianza Académica de Finanzas Internacionales de Zhejiang", "Investigador distinguido del Instituto de Políticas Públicas de Zhejiang"],
    focusTitle: "Investigación y servicio",
    focus: ["Innovación financiera y desarrollo socioeconómico", "Mercados de capitales y finanzas tecnológicas", "Internacionalización empresarial y finanzas transfronterizas", "Formación financiera interdisciplinaria en francés", "Colaboración entre gobierno, industria y universidad"],
    recordTitle: "Trayectoria profesional pública",
    recordIntro: "Los enlaces proceden de universidades, organismos públicos, asociaciones académicas y medios. Se conservan los títulos chinos originales para su verificación.",
    sourceLabel: "Ver fuente",
    newsTitle: "Actividades del decano",
    newsLabel: "Leer artículo",
  },
  ja: {
    eyebrow: "センター長",
    title: "武鑫 教授",
    introduction: ["武鑫教授はセンター長であり、浙江財経大学・浙商資本市場研究院の執行院長です。また、地方財政・税務ガバナンスの動態監視・知能警告実験室の執行主任を務めています。", "金融イノベーションと社会経済発展、資本市場、企業の国際化、フランス語を生かす金融複合人材育成を結ぶ研究と社会サービスに取り組んでいます。大学公式プロフィールには、国家級課題2件、省部級課題12件、委託社会サービス課題50件以上が記載されています。"],
    rolesTitle: "現職",
    roles: ["センター長", "浙商資本市場研究院 執行院長", "地方財政・税務ガバナンス実験室 執行主任", "浙江省国際金融学会 副秘書長", "浙江省国際金融学術連盟 秘書長", "浙江省公共政策研究院 特別研究員"],
    focusTitle: "研究・社会連携",
    focus: ["金融イノベーションと社会経済発展", "資本市場とテクノロジー金融", "企業国際化と越境金融", "フランス語金融複合人材育成", "産官学研連携"],
    recordTitle: "公開されている主な活動記録",
    recordIntro: "大学、政府、学会、公開メディアのページにリンクしています。確認のため原文の中国語タイトルを残しています。",
    sourceLabel: "出典を見る",
    newsTitle: "院長活動",
    newsLabel: "記事を読む",
  },
  ko: {
    eyebrow: "센터 리더십",
    title: "우신 교수",
    introduction: ["우신 교수는 센터 원장이자 저장재경대학교 저상자본시장연구원 집행원장입니다. 또한 지방 재정·세무 거버넌스 동적 모니터링 및 지능형 조기경보 실험실 집행주임을 맡고 있습니다.", "금융 혁신과 사회경제 발전, 자본시장, 기업 국제화, 프랑스어 기반 금융 융합인재 교육을 연결하는 연구와 사회서비스를 수행합니다. 대학 공식 프로필에는 국가급 과제 2건, 성·부급 과제 12건, 위탁 사회서비스 과제 50건 이상이 기록되어 있습니다."],
    rolesTitle: "현재 직책",
    roles: ["센터 원장", "저상자본시장연구원 집행원장", "지방 재정·세무 거버넌스 실험실 집행주임", "저장성 국제금융학회 부비서장", "저장성 국제금융학술연맹 비서장", "저장성 공공정책연구원 특별연구원"],
    focusTitle: "연구와 사회서비스",
    focus: ["금융 혁신과 사회경제 발전", "자본시장과 기술금융", "기업 국제화와 국경 간 금융", "프랑스어 금융 융합인재 교육", "산학관연 협력"],
    recordTitle: "공개 전문 활동 기록",
    recordIntro: "대학, 정부, 학회 및 공개 언론 페이지로 연결됩니다. 확인을 위해 중국어 원문 제목을 유지합니다.",
    sourceLabel: "출처 보기",
    newsTitle: "원장 활동",
    newsLabel: "기사 읽기",
  },
};
