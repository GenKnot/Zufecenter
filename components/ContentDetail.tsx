import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { ContentPage } from "@/data/content";
import type { Locale } from "@/data/i18n";

type DetailContext =
  | "about"
  | "language"
  | "program"
  | "practice"
  | "faculty"
  | "research"
  | "resource"
  | "collaboration";

type ChromeCopy = {
  overview: string;
  caption: string;
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
};

/**
 * 详情页外壳文案（栏目导语、图注、页脚 CTA）。原来只有中文，
 * 外语详情页因此走了另一套薄版式；现在六语种共用同一个组件。
 */
const contextCopy: Record<Locale, Record<DetailContext, ChromeCopy>> = {
  zh: {
    about: {
      overview: "进一步了解中心",
      caption: "十一年的课程、教研与学习服务，共同构成今天的中心。",
      ctaTitle: "想进一步了解语言中心？",
      ctaText:
        "无论是课程咨询、来访交流还是合作洽谈，我们都愿意从一次具体沟通开始。",
      ctaLabel: "联系语言中心",
    },
    language: {
      overview: "先了解这个语种方向",
      caption: "从分级课程到专项训练，让每一步都有清晰目标和进阶方向。",
      ctaTitle: "还没确定从哪个级别开始？",
      ctaText:
        "告诉我们你的学习经历、目标和时间安排，课程顾问会结合班级要求给出分级建议。",
      ctaLabel: "咨询分班建议",
    },
    program: {
      overview: "先了解这个培训项目",
      caption:
        "从目标出发设计内容，让课程与考试、升学、职业或组织需求真正衔接。",
      ctaTitle: "想把学习目标变成可执行的计划？",
      ctaText:
        "说明你的基础、目标和时间安排，我们会帮助你判断项目方向、课程组合与合理节奏。",
      ctaLabel: "获取项目建议",
    },
    practice: {
      overview: "先了解这项教学实践",
      caption: "让语言离开课本，在交流、协作与文化体验中成为能够使用的能力。",
      ctaTitle: "想参加近期活动或实践项目？",
      ctaText:
        "欢迎咨询参与对象、活动主题与近期安排，也可以为校园或团队共同设计专场活动。",
      ctaLabel: "咨询活动安排",
    },
    faculty: {
      overview: "认识这支教学团队",
      caption:
        "课程质量来自扎实备课、课堂观察、共同教研和对学习反馈的持续回应。",
      ctaTitle: "想了解课程与师资安排？",
      ctaText:
        "告诉我们希望学习的语种和目标，我们会介绍相应课程方向与教学安排。",
      ctaLabel: "咨询课程安排",
    },
    research: {
      overview: "了解这一教研方向",
      caption: "把课堂经验转化为可以讨论、验证和持续改进的教学方法。",
      ctaTitle: "希望开展教学研究与同行交流？",
      ctaText: "欢迎围绕课程建设、教师发展和语言教学实践与我们建立联系。",
      ctaLabel: "联系教研合作",
    },
    resource: {
      overview: "先了解这项学习支持",
      caption: "用合适的方法、资料和反馈，让课堂之外的每一段投入更有方向。",
      ctaTitle: "需要更具体的学习建议？",
      ctaText:
        "如果你仍不确定如何选课、规划或安排日常练习，可以与课程顾问进一步沟通。",
      ctaLabel: "获取学习建议",
    },
    collaboration: {
      overview: "先了解这一合作方向",
      caption: "从需求分析到课程交付与项目复盘，让每一次合作都落到清晰成果。",
      ctaTitle: "有一个语言合作项目想法？",
      ctaText:
        "告诉我们参与对象、希望解决的问题和时间计划，我们会据此整理合作建议。",
      ctaLabel: "洽谈合作方案",
    },
  },
  en: {
    about: {
      overview: "Learn more about the center",
      caption:
        "Eleven years of courses, teaching research and learner support make the center what it is today.",
      ctaTitle: "Would you like to know more about the Language Center?",
      ctaText:
        "Whether it is a course enquiry, a visit or a partnership, we are glad to start from one concrete conversation.",
      ctaLabel: "Contact the Language Center",
    },
    language: {
      overview: "Start with this language track",
      caption:
        "From graded courses to focused training, every step has a clear goal and a way forward.",
      ctaTitle: "Not sure which level to start from?",
      ctaText:
        "Tell us about your background, your goals and your schedule, and an adviser will suggest a placement.",
      ctaLabel: "Ask about placement",
    },
    program: {
      overview: "Start with this program",
      caption:
        "Content is designed from the goal, so the course connects to exams, further study, work or an organization's needs.",
      ctaTitle: "Want to turn a learning goal into a workable plan?",
      ctaText:
        "Describe your current level, your goal and your schedule, and we will help you judge direction, course mix and a realistic pace.",
      ctaLabel: "Get a program recommendation",
    },
    practice: {
      overview: "Start with this teaching practice",
      caption:
        "Language leaves the textbook and becomes usable through exchange, collaboration and cultural experience.",
      ctaTitle: "Interested in an upcoming activity or practice project?",
      ctaText:
        "Ask about who can join, the themes and the schedule — we can also design a dedicated session for a campus or a team.",
      ctaLabel: "Ask about activities",
    },
    faculty: {
      overview: "Meet this teaching team",
      caption:
        "Course quality comes from careful preparation, classroom observation, shared teaching research and steady response to feedback.",
      ctaTitle: "Want to know more about courses and teaching arrangements?",
      ctaText:
        "Tell us which language you want to study and what you want to achieve, and we will outline the matching courses.",
      ctaLabel: "Ask about courses",
    },
    research: {
      overview: "About this line of teaching research",
      caption:
        "Turning classroom experience into methods that can be discussed, tested and improved.",
      ctaTitle: "Looking to collaborate on teaching research?",
      ctaText:
        "We welcome contact around curriculum development, teacher development and language teaching practice.",
      ctaLabel: "Contact us about research",
    },
    resource: {
      overview: "Start with this learning support",
      caption:
        "The right method, materials and feedback give every hour outside class a clearer direction.",
      ctaTitle: "Need a more specific learning suggestion?",
      ctaText:
        "If you are still unsure how to choose, plan or organize daily practice, talk it through with an adviser.",
      ctaLabel: "Get a learning suggestion",
    },
    collaboration: {
      overview: "Start with this line of partnership",
      caption:
        "From needs analysis to delivery and review, every partnership should land on a clear outcome.",
      ctaTitle: "Have an idea for a language partnership?",
      ctaText:
        "Tell us who is involved, what you want to solve and your timeline, and we will put together a proposal.",
      ctaLabel: "Discuss a partnership",
    },
  },
  fr: {
    about: {
      overview: "En savoir plus sur le centre",
      caption:
        "Onze années de cours, de recherche pédagogique et d'accompagnement font le centre d'aujourd'hui.",
      ctaTitle: "Vous souhaitez mieux connaître le Centre de langues ?",
      ctaText:
        "Demande de cours, visite ou partenariat : nous commençons volontiers par un échange concret.",
      ctaLabel: "Contacter le Centre de langues",
    },
    language: {
      overview: "Découvrir cette langue",
      caption:
        "Des cours par niveaux aux formations ciblées, chaque étape a un objectif clair et une suite.",
      ctaTitle: "Vous ne savez pas par quel niveau commencer ?",
      ctaText:
        "Indiquez votre parcours, vos objectifs et vos disponibilités : un conseiller vous proposera un niveau.",
      ctaLabel: "Demander un positionnement",
    },
    program: {
      overview: "Découvrir ce programme",
      caption:
        "Le contenu part de l'objectif, pour que le cours rejoigne réellement examens, études, métier ou besoins d'une organisation.",
      ctaTitle: "Transformer un objectif en plan réalisable ?",
      ctaText:
        "Précisez votre niveau, votre but et votre emploi du temps : nous vous aiderons à choisir la direction, la combinaison de cours et un rythme tenable.",
      ctaLabel: "Obtenir une recommandation",
    },
    practice: {
      overview: "Découvrir cette pratique pédagogique",
      caption:
        "La langue quitte le manuel et devient utilisable par l'échange, la collaboration et l'expérience culturelle.",
      ctaTitle: "Envie de participer à une activité prochaine ?",
      ctaText:
        "Renseignez-vous sur le public, les thèmes et le calendrier — nous concevons aussi des séances dédiées pour un campus ou une équipe.",
      ctaLabel: "Se renseigner sur les activités",
    },
    faculty: {
      overview: "Rencontrer cette équipe enseignante",
      caption:
        "La qualité vient d'une préparation solide, de l'observation en classe, de la recherche partagée et d'une réponse constante aux retours.",
      ctaTitle: "Vous voulez en savoir plus sur les cours et l'encadrement ?",
      ctaText:
        "Dites-nous la langue visée et votre objectif : nous vous présenterons les cours correspondants.",
      ctaLabel: "Se renseigner sur les cours",
    },
    research: {
      overview: "À propos de cet axe de recherche pédagogique",
      caption:
        "Transformer l'expérience de terrain en méthodes discutables, vérifiables et améliorables.",
      ctaTitle: "Envie de collaborer sur la recherche pédagogique ?",
      ctaText:
        "Nous accueillons les échanges autour des programmes, du développement des enseignants et de la didactique des langues.",
      ctaLabel: "Nous contacter pour la recherche",
    },
    resource: {
      overview: "Découvrir cet accompagnement",
      caption:
        "La bonne méthode, les bons supports et un retour régulier donnent une direction à chaque heure hors de la classe.",
      ctaTitle: "Besoin d'un conseil plus précis ?",
      ctaText:
        "Si vous hésitez encore sur le choix, la planification ou l'organisation du travail quotidien, parlons-en avec un conseiller.",
      ctaLabel: "Obtenir un conseil",
    },
    collaboration: {
      overview: "Découvrir cet axe de coopération",
      caption:
        "De l'analyse des besoins à la mise en œuvre et au bilan, chaque coopération doit aboutir à un résultat clair.",
      ctaTitle: "Vous avez un projet de coopération linguistique ?",
      ctaText:
        "Indiquez le public, le problème à résoudre et le calendrier : nous préparerons une proposition.",
      ctaLabel: "Discuter d'un partenariat",
    },
  },
  ja: {
    about: {
      overview: "センターについてさらに知る",
      caption:
        "十一年分の授業、教育研究、学習支援が、今日のセンターを形づくっています。",
      ctaTitle: "語学センターについてもっと知りたい方へ",
      ctaText:
        "コースのご相談、ご来訪、連携のご相談——いずれも具体的な対話から始めたいと考えています。",
      ctaLabel: "語学センターに問い合わせる",
    },
    language: {
      overview: "この言語の方向性を知る",
      caption:
        "級別コースから専門訓練まで、どの段階にも明確な目標と次の一歩があります。",
      ctaTitle: "どの級から始めるか迷っていますか",
      ctaText:
        "これまでの学習歴、目標、通える時間をお知らせください。担当者がクラスを提案します。",
      ctaLabel: "クラス分けを相談する",
    },
    program: {
      overview: "このプログラムを知る",
      caption:
        "目標から内容を設計するため、試験・進学・仕事・組織のニーズと実際につながります。",
      ctaTitle: "学習目標を実行可能な計画にしたい方へ",
      ctaText:
        "現在の力、目標、時間の都合をお知らせいただければ、方向とコースの組み合わせ、無理のない進度を一緒に見極めます。",
      ctaLabel: "プログラムの提案を受ける",
    },
    practice: {
      overview: "この実践学習を知る",
      caption:
        "ことばが教科書を離れ、交流・協働・文化体験のなかで使える力になります。",
      ctaTitle: "近日の活動や実践プロジェクトに参加したい方へ",
      ctaText:
        "対象、テーマ、日程についてお問い合わせください。学内やチーム向けの専用回も設計できます。",
      ctaLabel: "活動について問い合わせる",
    },
    faculty: {
      overview: "この教員チームを知る",
      caption:
        "授業の質は、丁寧な準備、授業観察、共同の教育研究、そして学習者の声への継続的な対応から生まれます。",
      ctaTitle: "コースと担当体制について知りたい方へ",
      ctaText:
        "学びたい言語と目標をお知らせください。対応するコースと授業体制をご案内します。",
      ctaLabel: "コースについて問い合わせる",
    },
    research: {
      overview: "この教育研究の方向を知る",
      caption: "教室での経験を、議論し検証し改善できる方法へと変えていきます。",
      ctaTitle: "教育研究や同業者との交流をお考えの方へ",
      ctaText:
        "カリキュラム構築、教員育成、語学教育の実践をめぐるご連絡を歓迎します。",
      ctaLabel: "教育研究の連携について",
    },
    resource: {
      overview: "この学習支援を知る",
      caption:
        "適した方法と教材、そして手応えのある振り返りが、教室の外の時間に方向を与えます。",
      ctaTitle: "もっと具体的な学習の助言が必要な方へ",
      ctaText:
        "選び方、計画、日々の練習の組み立てに迷いがあれば、学習相談で一緒に整理しましょう。",
      ctaLabel: "学習の助言を受ける",
    },
    collaboration: {
      overview: "この連携の方向を知る",
      caption:
        "ニーズの把握から実施、振り返りまで、どの連携も明確な成果に着地させます。",
      ctaTitle: "語学の連携プロジェクトをお考えですか",
      ctaText:
        "対象、解決したい課題、時期をお知らせいただければ、それに沿った提案をまとめます。",
      ctaLabel: "連携について相談する",
    },
  },
  ko: {
    about: {
      overview: "센터에 대해 더 알아보기",
      caption:
        "십일 년간의 수업, 교육 연구, 학습 지원이 오늘의 센터를 만들었습니다.",
      ctaTitle: "언어센터를 더 알고 싶으신가요",
      ctaText:
        "과정 문의, 방문, 협력 상담 모두 구체적인 대화에서 시작하고자 합니다.",
      ctaLabel: "언어센터에 문의하기",
    },
    language: {
      overview: "이 언어 과정 살펴보기",
      caption:
        "단계별 과정부터 전문 훈련까지, 모든 단계에 분명한 목표와 다음 걸음이 있습니다.",
      ctaTitle: "어느 단계부터 시작할지 고민이신가요",
      ctaText:
        "학습 경험과 목표, 수강 가능 시간을 알려 주시면 상담자가 반을 제안해 드립니다.",
      ctaLabel: "반 배정 상담하기",
    },
    program: {
      overview: "이 프로그램 살펴보기",
      caption:
        "목표에서 출발해 내용을 설계하므로 시험, 진학, 직무, 기관의 필요와 실제로 이어집니다.",
      ctaTitle: "학습 목표를 실행 가능한 계획으로",
      ctaText:
        "현재 수준과 목표, 시간 여건을 알려 주시면 방향과 과정 조합, 무리 없는 속도를 함께 판단해 드립니다.",
      ctaLabel: "프로그램 제안 받기",
    },
    practice: {
      overview: "이 실천 학습 살펴보기",
      caption:
        "언어가 교재를 벗어나 교류와 협업, 문화 체험 속에서 쓸 수 있는 힘이 됩니다.",
      ctaTitle: "다가오는 활동이나 실천 프로젝트에 관심이 있으신가요",
      ctaText:
        "참여 대상, 주제, 일정을 문의해 주세요. 캠퍼스나 팀을 위한 전용 회차도 설계할 수 있습니다.",
      ctaLabel: "활동 일정 문의하기",
    },
    faculty: {
      overview: "이 교원진 만나기",
      caption:
        "수업의 질은 충실한 준비, 수업 관찰, 공동 교육 연구, 그리고 학습자 피드백에 대한 꾸준한 응답에서 나옵니다.",
      ctaTitle: "과정과 교원 운영이 궁금하신가요",
      ctaText:
        "배우고 싶은 언어와 목표를 알려 주시면 그에 맞는 과정과 수업 운영을 안내해 드립니다.",
      ctaLabel: "과정 문의하기",
    },
    research: {
      overview: "이 교육 연구 방향 살펴보기",
      caption:
        "교실의 경험을 논의하고 검증하고 개선할 수 있는 방법으로 바꿉니다.",
      ctaTitle: "교육 연구와 동료 교류를 원하시나요",
      ctaText:
        "교육과정 구축, 교원 성장, 언어 교육 실천에 관한 연락을 환영합니다.",
      ctaLabel: "교육 연구 협력 문의",
    },
    resource: {
      overview: "이 학습 지원 살펴보기",
      caption:
        "알맞은 방법과 자료, 그리고 제대로 된 피드백이 교실 밖 시간에 방향을 줍니다.",
      ctaTitle: "더 구체적인 학습 조언이 필요하신가요",
      ctaText:
        "선택과 계획, 일상 연습 구성이 아직 막막하다면 학습 상담에서 함께 정리해 보세요.",
      ctaLabel: "학습 조언 받기",
    },
    collaboration: {
      overview: "이 협력 방향 살펴보기",
      caption:
        "수요 파악에서 실행과 복기까지, 모든 협력이 분명한 성과로 이어지도록 합니다.",
      ctaTitle: "언어 협력 프로젝트를 구상 중이신가요",
      ctaText:
        "참여 대상과 해결하고 싶은 과제, 일정을 알려 주시면 그에 맞춘 제안을 정리해 드립니다.",
      ctaLabel: "협력 방안 논의하기",
    },
  },
  es: {
    about: {
      overview: "Conocer mejor el centro",
      caption:
        "Once años de cursos, investigación docente y acompañamiento configuran el centro de hoy.",
      ctaTitle: "¿Quiere conocer mejor el Centro de Idiomas?",
      ctaText:
        "Consulta de cursos, visita o colaboración: nos gusta empezar por una conversación concreta.",
      ctaLabel: "Contactar con el Centro de Idiomas",
    },
    language: {
      overview: "Conocer este itinerario de idioma",
      caption:
        "De los cursos por niveles a la formación específica, cada paso tiene un objetivo claro y una continuación.",
      ctaTitle: "¿No sabe por qué nivel empezar?",
      ctaText:
        "Cuéntenos su trayectoria, sus objetivos y su disponibilidad, y un asesor le propondrá un nivel.",
      ctaLabel: "Consultar el nivel",
    },
    program: {
      overview: "Conocer este programa",
      caption:
        "El contenido parte del objetivo, de modo que el curso conecta de verdad con exámenes, estudios, trabajo o las necesidades de una organización.",
      ctaTitle: "¿Quiere convertir un objetivo en un plan viable?",
      ctaText:
        "Indique su nivel, su meta y su tiempo disponible, y le ayudaremos a decidir la dirección, la combinación de cursos y un ritmo razonable.",
      ctaLabel: "Recibir una recomendación",
    },
    practice: {
      overview: "Conocer esta práctica docente",
      caption:
        "El idioma sale del manual y se vuelve utilizable mediante el intercambio, la colaboración y la experiencia cultural.",
      ctaTitle: "¿Le interesa una actividad o un proyecto próximo?",
      ctaText:
        "Consulte el público, los temas y el calendario: también diseñamos sesiones específicas para un campus o un equipo.",
      ctaLabel: "Consultar las actividades",
    },
    faculty: {
      overview: "Conocer a este equipo docente",
      caption:
        "La calidad del curso nace de una preparación sólida, la observación en el aula, la investigación compartida y la respuesta constante a los comentarios.",
      ctaTitle: "¿Quiere saber más sobre los cursos y la organización docente?",
      ctaText:
        "Díganos qué idioma quiere estudiar y qué desea conseguir, y le presentaremos los cursos correspondientes.",
      ctaLabel: "Consultar los cursos",
    },
    research: {
      overview: "Sobre esta línea de investigación docente",
      caption:
        "Convertir la experiencia del aula en métodos que se puedan discutir, verificar y mejorar.",
      ctaTitle: "¿Busca colaborar en investigación docente?",
      ctaText:
        "Nos interesa el contacto en torno al diseño curricular, el desarrollo del profesorado y la práctica de la enseñanza de idiomas.",
      ctaLabel: "Contactar sobre investigación",
    },
    resource: {
      overview: "Conocer este apoyo al aprendizaje",
      caption:
        "El método adecuado, los materiales y una revisión honesta dan dirección a cada hora fuera del aula.",
      ctaTitle: "¿Necesita una sugerencia más concreta?",
      ctaText:
        "Si aún duda sobre cómo elegir, planificar u organizar la práctica diaria, coméntelo con un asesor.",
      ctaLabel: "Recibir una sugerencia",
    },
    collaboration: {
      overview: "Conocer esta línea de colaboración",
      caption:
        "Del análisis de necesidades a la ejecución y la revisión, toda colaboración debe terminar en un resultado claro.",
      ctaTitle: "¿Tiene una idea de colaboración lingüística?",
      ctaText:
        "Indíquenos el público, el problema que quiere resolver y el calendario, y prepararemos una propuesta.",
      ctaLabel: "Plantear una colaboración",
    },
  },
};

export function ContentDetail({
  page,
  backHref,
  backLabel,
  context,
  locale = "zh",
  children,
}: {
  page: ContentPage;
  backHref: string;
  backLabel: string;
  context: DetailContext;
  locale?: Locale;
  children?: ReactNode;
}) {
  const copy = contextCopy[locale][context];
  const contactHref = locale === "zh" ? "/contact" : `/${locale}/contact`;

  return (
    <>
      <section className="relative min-h-[520px] overflow-hidden bg-[#071f3e] text-white">
        <Image
          src={page.heroImage}
          alt=""
          fill
          priority
          className={
            page.slug === "leadership"
              ? "object-cover object-[58%_center] sm:object-[center_18%]"
              : "object-cover"
          }
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071f3e]/95 via-[#071f3e]/74 to-[#071f3e]/25" />
        <div className="shell relative flex min-h-[520px] items-end py-16">
          <div className="max-w-3xl">
            <Link
              href={backHref}
              className="text-xs font-semibold tracking-[0.16em] text-[#ead7ad]"
            >
              ← {backLabel}
            </Link>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
              {page.english}
            </p>
            <h1 className="mt-4 font-serif text-5xl font-semibold tracking-tight sm:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/76">
              {page.summary}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <span className="eyebrow">
              {locale === "zh" ? (
                <>
                  概览<small>At a glance</small>
                </>
              ) : (
                "At a glance"
              )}
            </span>
            <h2 className="section-title">{copy.overview}</h2>
          </div>
          <div className="space-y-5">
            {page.intro.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#edf2f6] py-16">
        <div className="shell grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {page.highlights.map((item) => (
            <article key={item.title} className="min-h-52 bg-white p-7">
              <span className="block h-px w-7 bg-[#c99b48]" />
              <h2 className="mt-7 font-serif text-xl font-semibold">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_0.8fr]">
          <div className="divide-y divide-slate-200 border-t border-slate-200">
            {page.sections.map((section, index) => (
              <article key={section.title} className="py-10">
                <div className="grid gap-5 sm:grid-cols-[72px_1fr]">
                  <span className="font-serif text-2xl text-[#c99b48]">
                    0{index + 1}
                  </span>
                  <div>
                    <h2 className="font-serif text-3xl font-semibold">
                      {section.title}
                    </h2>
                    <div className="mt-5 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-sm leading-8 text-slate-600"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {section.bullets && (
                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="border-l-2 border-[#c99b48] pl-4 text-sm leading-7 text-slate-600"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div>
            {page.image ? (
              <div className="sticky top-8 overflow-hidden bg-[#0b2f5b]">
                <Image
                  src={page.image}
                  alt={page.imageAlt || page.title}
                  width={900}
                  height={1100}
                  className="aspect-[4/5] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <p className="p-5 text-xs leading-6 text-white/58">
                  {copy.caption}
                </p>
              </div>
            ) : (
              <div className="image-placeholder min-h-[520px]">
                <small>{copy.caption}</small>
              </div>
            )}
          </div>
        </div>
      </section>

      {children}

      <section className="bg-[#c99b48] py-14">
        <div className="shell flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#071f3e]/55">
              {locale === "zh" ? (
                <>
                  下一步
                  <small className="ml-2.5 text-[10px] font-semibold tracking-[0.14em] opacity-70">
                    NEXT STEP
                  </small>
                </>
              ) : (
                "NEXT STEP"
              )}
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#071f3e]">
              {copy.ctaTitle}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#071f3e]/68">
              {copy.ctaText}
            </p>
          </div>
          <Link
            href={contactHref}
            className="w-fit bg-[#071f3e] px-7 py-4 text-sm font-semibold text-white"
          >
            {copy.ctaLabel} →
          </Link>
        </div>
      </section>
    </>
  );
}
