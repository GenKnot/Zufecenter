import { courseSyllabi, type CourseSyllabus } from "@/data/course-syllabus";
import type { ForeignLocale } from "@/data/i18n";
import { enSyllabusProse } from "@/data/syllabus-prose/en";
import { esSyllabusProse } from "@/data/syllabus-prose/es";
import { frSyllabusProse } from "@/data/syllabus-prose/fr";
import { jaSyllabusProse } from "@/data/syllabus-prose/ja";
import { koSyllabusProse } from "@/data/syllabus-prose/ko";

/**
 * 课程大纲的外语版本。
 *
 * 只有真正的散文需要翻译（入班基础、定制教材、课堂任务、作业检测、考核安排、
 * 结课成果）；周次和教学安排是格式化字段，从中文源机械推导，不手抄也不会漂移。
 * 章节标题与教学内容已经在 {en,fr,ja,ko,es}-courses.ts 的 modules 里翻好了，
 * 这里直接复用，不重复翻译。
 */
export type SyllabusProse = {
  prerequisite: string;
  materials: string;
  /** 四章的课堂任务 */
  classwork: [string, string, string, string];
  /** 四章的作业与章节检测 */
  homework: [string, string, string, string];
  assessments: string[];
  outcome?: string;
};

export type LocalizedSyllabus = {
  prerequisite: string;
  materials: string;
  teaching: { label: string; name: string }[];
  chapters: {
    weeks: string;
    classwork: string;
    homework: string;
  }[];
  assessments: string[];
  outcome?: string;
};

const prose: Record<ForeignLocale, Record<string, SyllabusProse>> = {
  en: enSyllabusProse,
  fr: frSyllabusProse,
  ja: jaSyllabusProse,
  ko: koSyllabusProse,
  es: esSyllabusProse,
};

/** 「第1—3周」→ 各语种写法 */
function formatWeeks(value: string, locale: ForeignLocale) {
  const m = value.match(/第(\d+)[—–-](\d+)周/);
  if (!m) return value;
  const [, a, b] = m;
  return {
    en: `Weeks ${a}–${b}`,
    fr: `Semaines ${a}–${b}`,
    ja: `第${a}〜${b}週`,
    ko: `${a}–${b}주차`,
    es: `Semanas ${a}–${b}`,
  }[locale];
}

/**
 * 「课程负责人 X；协同教师 Y。」→ 逐条拆开。
 *
 * 不能把两个角色用「·」串成一行：教师姓名本身就含「·」（日韩教师写作
 * 「山田 美咲 · Misaki Yamada」），串起来会变成四段并列，读者分不清哪里是
 * 负责人的结尾。拆成结构化的条目，由页面各占一行渲染。
 */
function formatTeaching(value: string, locale: ForeignLocale) {
  const lead = value.match(/课程负责人\s*([^；。]+)/);
  const co = value.match(/协同教师\s*([^；。]+)/);
  const labels = {
    en: ["Course lead", "Co-teacher"],
    fr: ["Responsable du cours", "Enseignant associé"],
    ja: ["コース責任者", "協同教員"],
    ko: ["과정 책임", "협동 교원"],
    es: ["Responsable del curso", "Docente colaborador"],
  }[locale];
  // 中文源里「Li Gao（高力）」用全角括号，在中文语境是对的；
  // 但进到拉丁文/日韩页面时外层是外语，得换成半角。
  const ascii = (n: string) => n.replace(/（/g, " (").replace(/）/g, ")").replace(/\s+\(/g, " (");
  const parts: { label: string; name: string }[] = [];
  if (lead) parts.push({ label: labels[0], name: ascii(lead[1].trim()) });
  if (co) parts.push({ label: labels[1], name: ascii(co[1].trim()) });
  return parts;
}

export function findLocalizedSyllabus(
  locale: ForeignLocale,
  code: string,
): LocalizedSyllabus | undefined {
  const zh: CourseSyllabus | undefined = courseSyllabi[code];
  const text = prose[locale]?.[code];
  if (!zh || !text) return undefined;

  return {
    prerequisite: text.prerequisite,
    materials: text.materials,
    teaching: formatTeaching(zh.teaching, locale),
    chapters: zh.chapters.map((chapter, i) => ({
      weeks: formatWeeks(chapter.weeks, locale),
      classwork: text.classwork[i] ?? "",
      homework: text.homework[i] ?? "",
    })),
    assessments: text.assessments,
    outcome: text.outcome,
  };
}

/** 三段新版块的界面用词 */
export const syllabusUi: Record<
  ForeignLocale,
  {
    preparationTitle: string;
    prerequisite: string;
    materials: string;
    teaching: string;
    outlineIntro: string;
    content: string;
    classwork: string;
    homework: string;
    assessmentTitle: string;
    assessmentIntro: string;
    outcome: string;
  }
> = {
  en: {
    preparationTitle: "Entry level and teaching arrangements",
    prerequisite: "Entry level",
    materials: "Course materials",
    teaching: "Teaching team",
    outlineIntro:
      "The outline is organized by progression of ability. Teachers adjust the density of practice to how a class is doing, while stage goals and core content stay the same.",
    content: "Teaching content",
    classwork: "Classroom tasks",
    homework: "Homework and unit checks",
    assessmentTitle: "Assessment schedule",
    assessmentIntro:
      "Assessment is spread across the term rather than saved for the end, so both teacher and learner can see progress while there is still time to act on it.",
    outcome: "What you finish with",
  },
  fr: {
    preparationTitle: "Niveau requis et organisation pédagogique",
    prerequisite: "Niveau requis",
    materials: "Supports de cours",
    teaching: "Équipe enseignante",
    outlineIntro:
      "Le programme suit la progression des compétences. Les enseignants ajustent la densité des exercices au rythme du groupe, sans modifier les objectifs d’étape ni les contenus essentiels.",
    content: "Contenus",
    classwork: "Activités en classe",
    homework: "Travail personnel et contrôles",
    assessmentTitle: "Calendrier d’évaluation",
    assessmentIntro:
      "L’évaluation est répartie sur le semestre plutôt que reportée à la fin : enseignant et apprenant voient les progrès quand il est encore temps d’agir.",
    outcome: "Ce que vous en retirez",
  },
  ja: {
    preparationTitle: "受講前提と授業体制",
    prerequisite: "受講前提",
    materials: "使用教材",
    teaching: "担当教員",
    outlineIntro:
      "シラバスは能力の段階に沿って構成されています。教員はクラスの状況に応じて練習量を調整しますが、各段階の目標と中核となる内容は変わりません。",
    content: "学習内容",
    classwork: "授業内タスク",
    homework: "課題と章末チェック",
    assessmentTitle: "評価スケジュール",
    assessmentIntro:
      "評価は学期末にまとめず期間中に分散させます。まだ手を打てるうちに、教員と学習者の双方が到達度を確認できます。",
    outcome: "修了時の成果物",
  },
  ko: {
    preparationTitle: "수강 기준과 수업 운영",
    prerequisite: "수강 기준",
    materials: "사용 교재",
    teaching: "담당 교원",
    outlineIntro:
      "강의 계획은 능력 단계에 따라 구성됩니다. 교원은 반의 상황에 맞춰 연습량을 조정하지만 단계별 목표와 핵심 내용은 그대로 유지됩니다.",
    content: "학습 내용",
    classwork: "수업 과제",
    homework: "과제와 단원 점검",
    assessmentTitle: "평가 일정",
    assessmentIntro:
      "평가는 학기 말에 몰지 않고 기간 중에 나누어 진행합니다. 아직 보완할 시간이 있을 때 교원과 학습자가 함께 도달도를 확인할 수 있습니다.",
    outcome: "수료 시 결과물",
  },
  es: {
    preparationTitle: "Nivel de acceso y organización docente",
    prerequisite: "Nivel de acceso",
    materials: "Materiales del curso",
    teaching: "Equipo docente",
    outlineIntro:
      "El programa se organiza según la progresión de competencias. El profesorado ajusta la densidad de práctica al ritmo del grupo, sin alterar los objetivos de cada etapa ni los contenidos esenciales.",
    content: "Contenidos",
    classwork: "Tareas en clase",
    homework: "Trabajo personal y controles",
    assessmentTitle: "Calendario de evaluación",
    assessmentIntro:
      "La evaluación se reparte a lo largo del curso en lugar de dejarse para el final: docente y estudiante ven el avance cuando aún hay margen para corregir.",
    outcome: "Con qué terminas",
  },
};
