import type { HeroSlide } from "@/components/HomeHero";
import type { Locale } from "@/data/i18n";

/**
 * 首屏轮播的五幕，六个语言站共用同一组照片与同一条叙事线：
 *   1 我们是谁  2 从零到开口  3 考试与职业路径  4 把语言用出去  5 长期主义
 *
 * 照片都取左三分之一为干净墙面的画面，白色标题压上去不会盖到人脸。
 * 换图只改这里的 images，六个语种一起生效。
 */
const images = [
  "/images/campus/01-hero-campus-tree-walkway.webp",
  "/images/campus/03-hero-empty-classroom.webp",
  "/images/campus/05-hero-library-study-area.webp",
  "/images/campus/06-hero-language-center-corridor.webp",
  "/images/campus/02-hero-library-aisle.webp",
];

/** [标题上半句, 标题下半句, 描述] */
type SlideCopy = [string, string, string];

const build = (copies: SlideCopy[]): HeroSlide[] =>
  copies.map(([titleTop, titleBottom, description], i) => ({
    image: images[i],
    titleTop,
    titleBottom,
    description,
  }));

export const heroSlidesByLocale: Record<Locale, HeroSlide[]> = {
  zh: build([
    [
      "让语言成为",
      "通往更大世界的能力",
      "英语、法语、日语、韩语，从零基础分级进阶到考试、升学与职业应用，为个人与组织提供有目标、有路径、有反馈的语言学习方案。",
    ],
    [
      "从零基础到",
      "能开口的那一步",
      "四个语种、二十六个分级与专项班型，每一级都有明确的阶段目标与可见成果，让学习者清楚知道自己在哪里、下一步该练什么。",
    ],
    [
      "考试、升学、职业",
      "每条路径都有准备",
      "雅思、DELF、JLPT、TOPIK 与商务沟通专项，围绕具体目标安排内容与节奏，把有限的备考时间用在真正关键的地方。",
    ],
    [
      "让每一次表达",
      "都更准确、更自信",
      "课堂讨论、邮件写作、会议表达与日常交流中反复使用，语言角、工作坊与文化体验让课堂所学真正成为能拿出来用的能力。",
    ],
    [
      "把语言教育",
      "做成一件长期的事",
      "从课程设计到教学研讨，持续打磨教学方法与反馈机制，服务学生、职场人士及企事业单位的多元学习目标。",
    ],
  ]),

  en: build([
    [
      "Language skills for",
      "a wider world",
      "Structured English, French, Japanese and Korean programs—from first steps to academic, professional and exam-focused communication.",
    ],
    [
      "From the first word",
      "to speaking with ease",
      "Four languages across twenty-six graded and specialist classes. Every level states what you should be able to do, so you always know where you stand and what to work on next.",
    ],
    [
      "Exams, study, career",
      "every path has a plan",
      "IELTS, DELF, JLPT, TOPIK and business communication tracks shape content and pace around one specific goal, so limited preparation time goes where it counts.",
    ],
    [
      "Making every exchange",
      "clearer and more assured",
      "Seminar discussion, email, meetings and everyday conversation—language corners, workshops and cultural sessions turn classroom work into something you can actually use.",
    ],
    [
      "Language teaching",
      "built for the long term",
      "From course design to teaching seminars, we keep refining method and feedback to serve students, working professionals and organizations alike.",
    ],
  ]),

  fr: build([
    [
      "Les langues, pour",
      "aller plus loin",
      "Des parcours structurés en anglais, français, japonais et coréen, de l’initiation à la communication universitaire, professionnelle et aux examens.",
    ],
    [
      "Du premier mot",
      "à la prise de parole",
      "Quatre langues, vingt-six niveaux et cours spécialisés. Chaque étape fixe des objectifs clairs et des résultats visibles : on sait où l’on en est et ce qu’il reste à travailler.",
    ],
    [
      "Examens, études, métier",
      "chaque voie se prépare",
      "IELTS, DELF, JLPT, TOPIK et communication professionnelle : le contenu et le rythme s’organisent autour d’un objectif précis, pour que le temps de préparation serve vraiment.",
    ],
    [
      "Faire de chaque échange",
      "un moment plus juste",
      "Discussions en cours, courriels, réunions et conversations quotidiennes : cafés des langues, ateliers et rencontres culturelles transforment l’acquis en compétence utilisable.",
    ],
    [
      "Enseigner les langues",
      "sur le long terme",
      "De la conception des cours aux séminaires pédagogiques, nous affinons méthodes et retours pour accompagner étudiants, professionnels et organisations.",
    ],
  ]),

  ja: build([
    [
      "ことばを、より広い",
      "世界へ進む力に",
      "英語・フランス語・日本語・韓国語を、入門から留学、試験、仕事で使えるレベルまで段階的に学べるプログラムです。",
    ],
    [
      "はじめの一歩から",
      "話せるところまで",
      "四言語、二十六の級別・専門コース。各段階に明確な到達目標と成果があり、今どこにいて次に何を練習するのかが常にわかります。",
    ],
    [
      "試験、進学、仕事",
      "どの道にも準備を",
      "IELTS・DELF・JLPT・TOPIK とビジネス実務。目標に合わせて内容と進度を組み立て、限られた準備期間を本当に必要なところに使います。",
    ],
    [
      "表現をもっと正確に",
      "もっと自信を持って",
      "授業での討論、メール、会議、日常会話。ランゲージコーナーやワークショップ、文化体験を通じて、学んだことを実際に使える力に変えます。",
    ],
    [
      "語学教育を",
      "長く続く仕事として",
      "カリキュラム設計から授業研究まで、指導方法とフィードバックを磨き続け、学生・社会人・企業の多様な目標に応えます。",
    ],
  ]),

  ko: build([
    [
      "언어를 더 넓은",
      "세계로 나아가는 힘",
      "영어·프랑스어·일본어·한국어를 기초부터 유학, 시험, 직무 활용 단계까지 체계적으로 배우는 프로그램입니다.",
    ],
    [
      "첫걸음에서",
      "말할 수 있기까지",
      "네 개 언어, 스물여섯 개 단계별·전문 과정. 각 단계마다 목표와 성과가 분명해 지금 어디에 있고 다음에 무엇을 연습할지 알 수 있습니다.",
    ],
    [
      "시험, 진학, 취업",
      "모든 길에 준비를",
      "IELTS·DELF·JLPT·TOPIK과 비즈니스 커뮤니케이션. 목표에 맞춰 내용과 속도를 설계해 한정된 준비 기간을 꼭 필요한 곳에 씁니다.",
    ],
    [
      "한 번의 표현을",
      "정확하고 자신 있게",
      "수업 토론, 이메일, 회의, 일상 대화. 언어 코너와 워크숍, 문화 체험으로 배운 것을 실제로 쓸 수 있는 힘으로 만듭니다.",
    ],
    [
      "언어 교육을",
      "오래 이어지는 일로",
      "교과 설계부터 수업 연구까지 교수법과 피드백을 다듬으며 학생, 직장인, 기관의 다양한 목표에 부응합니다.",
    ],
  ]),

  es: build([
    [
      "El idioma como puerta",
      "a un mundo más amplio",
      "Programas estructurados de inglés, francés, japonés y coreano, desde el nivel inicial hasta la comunicación académica, profesional y la preparación de exámenes.",
    ],
    [
      "Del primer día",
      "a hablar con soltura",
      "Cuatro idiomas y veintiséis cursos graduados y especializados. Cada nivel define objetivos claros y resultados visibles: siempre sabes dónde estás y qué toca practicar.",
    ],
    [
      "Cada meta tiene",
      "su propio camino",
      "IELTS, DELF, JLPT, TOPIK y comunicación empresarial: el contenido y el ritmo se organizan en torno a un objetivo concreto, para aprovechar el tiempo de preparación.",
    ],
    [
      "Que cada intervención",
      "sea más precisa y segura",
      "Debates en clase, correos, reuniones y conversación diaria: rincones lingüísticos, talleres y actividades culturales convierten lo aprendido en algo que se puede usar.",
    ],
    [
      "Enseñar idiomas",
      "a largo plazo",
      "Del diseño de los cursos a los seminarios docentes, seguimos puliendo métodos y sistemas de retroalimentación para estudiantes, profesionales y organizaciones.",
    ],
  ]),
};

/** 指示条的读屏标签模板，{n} {total} {title} 由组件替换 */
export const heroSlideLabel: Record<Locale, string> = {
  zh: "第 {n} 幕，共 {total} 幕：{title}",
  en: "Slide {n} of {total}: {title}",
  fr: "Diapositive {n} sur {total} : {title}",
  ja: "スライド {n}／{total}：{title}",
  ko: "슬라이드 {n}/{total}: {title}",
  es: "Diapositiva {n} de {total}: {title}",
};
