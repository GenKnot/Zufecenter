import Image from "next/image";
import type { ForeignLocale } from "@/data/i18n";

export type ProvisionalFacultyLanguage = "english" | "japanese" | "korean";

type ShowcaseLocale = "zh" | ForeignLocale;

const teamImages: Record<ProvisionalFacultyLanguage, string> = {
  english: "/images/library/faculty/english-team.webp",
  japanese: "/images/library/faculty/japanese-team.webp",
  korean: "/images/library/faculty/korean-team.webp",
};

const copy: Record<
  ShowcaseLocale,
  {
    eyebrow: string;
    title: string;
    description: string;
    caption: string;
    roles: { title: string; text: string }[];
    noticeLabel: string;
    notice: string;
  }
> = {
  zh: {
    eyebrow: "TEACHING TEAM",
    title: "教学团队与课程分工",
    description:
      "团队围绕统一的阶段目标开展分级教学、专项训练、学习反馈与课程复盘，让不同班型之间保持清晰衔接。",
    caption: "团队教学与备课场景示意图",
    roles: [
      { title: "课程协调与教研", text: "统筹阶段目标、教学安排、材料衔接与课程质量复盘。" },
      { title: "分级与专项教学", text: "实施分级课程、口语与职业沟通、考试及文化专题训练。" },
      { title: "学习支持与评估", text: "提供入学沟通、阶段反馈、个别辅导与后续进阶建议。" },
    ],
    noticeLabel: "团队协作",
    notice:
      "团队按照课程方向共同备课、共享课堂反馈，并由课程协调人员持续检查阶段目标与教学衔接。",
  },
  en: {
    eyebrow: "TEACHING TEAM",
    title: "Team Structure and Teaching Areas",
    description:
      "The team works around shared stage outcomes, specialist practice, learner feedback and course review so that different pathways remain connected.",
    caption: "Representative teaching and lesson-planning scene",
    roles: [
      { title: "Curriculum Coordination", text: "Aligns stage outcomes, teaching schedules, materials and course-quality review." },
      { title: "Level and Specialist Teaching", text: "Delivers level courses, speaking, professional, examination and cultural modules." },
      { title: "Learning Support and Assessment", text: "Provides placement guidance, stage feedback, tutoring and progression advice." },
    ],
    noticeLabel: "Team coordination",
    notice:
      "Teachers plan by course area, share classroom feedback and review stage outcomes together to keep each learning pathway connected.",
  },
  fr: {
    eyebrow: "ÉQUIPE PÉDAGOGIQUE",
    title: "Organisation de l’équipe et domaines d’enseignement",
    description:
      "L’équipe s’appuie sur des objectifs communs, des entraînements spécialisés, le suivi des apprenants et la révision des cours afin d’assurer une progression cohérente.",
    caption: "Scène représentative de préparation pédagogique",
    roles: [
      { title: "Coordination pédagogique", text: "Coordonne les objectifs, les emplois du temps, les supports et la révision de la qualité des cours." },
      { title: "Cours par niveau et spécialisés", text: "Assure les cours par niveau ainsi que les modules d’oral, professionnels, culturels et de préparation aux examens." },
      { title: "Suivi et évaluation", text: "Propose orientation initiale, retours d’étape, tutorat et conseils de progression." },
    ],
    noticeLabel: "Coordination de l’équipe",
    notice:
      "Les enseignants préparent les cours par domaine, partagent les retours de classe et révisent ensemble les objectifs de chaque étape.",
  },
  es: {
    eyebrow: "EQUIPO DOCENTE",
    title: "Estructura del equipo y áreas de enseñanza",
    description:
      "El equipo trabaja con objetivos compartidos, práctica especializada, seguimiento del alumnado y revisión de cursos para mantener una progresión coherente.",
    caption: "Escena representativa de docencia y preparación de clases",
    roles: [
      { title: "Coordinación curricular", text: "Alinea objetivos, horarios, materiales y revisión de la calidad de los cursos." },
      { title: "Enseñanza por niveles y especializada", text: "Imparte cursos por nivel y módulos orales, profesionales, culturales y de preparación de exámenes." },
      { title: "Apoyo y evaluación", text: "Ofrece orientación inicial, retroalimentación, tutorías y recomendaciones de progresión." },
    ],
    noticeLabel: "Coordinación del equipo",
    notice:
      "El profesorado prepara los cursos por áreas, comparte observaciones del aula y revisa conjuntamente los objetivos de cada etapa.",
  },
  ja: {
    eyebrow: "講師チーム",
    title: "講師体制と担当分野",
    description:
      "共通の段階目標、専門練習、学習フィードバック、授業改善を軸に、各コースが一貫してつながる体制を整えています。",
    caption: "授業・教材準備のイメージ写真",
    roles: [
      { title: "カリキュラム・教研調整", text: "段階目標、授業計画、教材の接続、授業品質の振り返りを統括します。" },
      { title: "レベル別・専門授業", text: "レベル別授業、会話、職業コミュニケーション、試験対策、文化テーマを担当します。" },
      { title: "学習支援・評価", text: "受講前相談、段階別フィードバック、個別支援、次の学習段階への助言を行います。" },
    ],
    noticeLabel: "チーム連携",
    notice:
      "講師はコース分野ごとに共同で授業を準備し、授業のフィードバックを共有しながら段階目標と学習の接続を確認しています。",
  },
  ko: {
    eyebrow: "강사진",
    title: "강사진 구성과 교육 분야",
    description:
      "공통 단계 목표, 전문 훈련, 학습 피드백과 수업 검토를 바탕으로 각 과정이 일관되게 이어지도록 운영합니다.",
    caption: "수업 및 교안 준비를 보여 주는 대표 이미지",
    roles: [
      { title: "교육과정·교연 조정", text: "단계 목표, 수업 일정, 교재 연계와 과정 품질 검토를 총괄합니다." },
      { title: "단계별·전문 수업", text: "단계별 과정, 회화, 직무 소통, 시험 대비와 문화 주제 수업을 운영합니다." },
      { title: "학습 지원·평가", text: "수강 전 상담, 단계별 피드백, 개별 지도와 다음 단계 학습 안내를 제공합니다." },
    ],
    noticeLabel: "팀 협업",
    notice:
      "강사진은 과정 분야별로 공동 수업을 준비하고 수업 피드백을 공유하며 단계 목표와 학습 경로의 연계를 함께 점검합니다.",
  },
};

export function ProvisionalFacultyTeam({
  locale,
  language,
}: {
  locale: ShowcaseLocale;
  language: ProvisionalFacultyLanguage;
}) {
  const text = copy[locale];

  return (
    <section className="bg-[#f7f5f0] py-24">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <span className="eyebrow">{text.eyebrow}</span>
            <h2 className="section-title">{text.title}</h2>
            <p className="section-copy">{text.description}</p>
          </div>
          <figure>
            <div className="relative aspect-[16/9] overflow-hidden bg-[#0b2f5b]">
              <Image
                src={teamImages[language]}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 56vw"
              />
            </div>
            <figcaption className="mt-3 text-xs text-slate-400">
              {text.caption}
            </figcaption>
          </figure>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-3">
          {text.roles.map((role, index) => (
              <article key={role.title} className="min-h-52 bg-white p-7">
                <span className="font-serif text-sm text-[#c99b48]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-serif text-xl font-semibold text-[#11233e]">
                  {role.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-500">{role.text}</p>
              </article>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-[#c99b48] bg-white px-6 py-5 text-sm leading-7 text-slate-600">
          <strong className="mr-3 text-[#11233e]">{text.noticeLabel}</strong>
          {text.notice}
        </div>
      </div>
    </section>
  );
}
