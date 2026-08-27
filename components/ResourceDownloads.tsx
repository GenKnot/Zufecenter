import { currentTerm, resourceDownloads } from "@/data/operations";
import type { Locale } from "@/data/i18n";

/**
 * 公开资料下载。原来只有中文站有，外语页因此比中文页少一段。
 *
 * PDF 本身是中文文档，所以标题与说明翻译过来只是让访客知道下载的是什么，
 * 卡片上会明确标注文件语言，不让人误以为有外语版。
 */
const copy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    text: string;
    version: string;
    action: string;
    fileNote: string;
    meta: string[];
    items: { title: string; description: string }[];
  }
> = {
  zh: {
    eyebrow: "Public downloads",
    title: "公开资料下载",
    text: "先从课程安排和学习工具开始。班级讲义、作业与教师反馈材料将在开课后按教学进度发放。",
    version: "资料版本",
    action: "下载 PDF ↓",
    fileNote: "",
    meta: ["PDF · 课程排期", "PDF · 选课工具", "PDF · 学习工具"],
    items: resourceDownloads.map((r) => ({
      title: r.title,
      description: r.description,
    })),
  },
  en: {
    eyebrow: "Public downloads",
    title: "Public downloads",
    text: "Start with the course schedule and the study tools. Class handouts, homework and feedback materials are issued once the course begins.",
    version: "Version",
    action: "Download PDF ↓",
    fileNote: "PDF · in Chinese",
    meta: ["PDF · Term schedule", "PDF · Placement tool", "PDF · Study tool"],
    items: [
      { title: "Autumn 2026 course and event schedule", description: "This term's classes, placement assessments, upcoming events and how to enquire." },
      { title: "Placement preparation checklist", description: "Gather your study history, goals, available time and current difficulties before the consultation." },
      { title: "Twelve-week study plan", description: "Track input, output, feedback and stage results week by week — designed to be printed." },
    ],
  },
  fr: {
    eyebrow: "Téléchargements",
    title: "Documents en libre accès",
    text: "Commencez par le calendrier des cours et les outils de travail. Les supports de classe, les devoirs et les retours des enseignants sont remis une fois le cours commencé.",
    version: "Version",
    action: "Télécharger le PDF ↓",
    fileNote: "PDF · en chinois",
    meta: ["PDF · Calendrier", "PDF · Outil de positionnement", "PDF · Outil d’étude"],
    items: [
      { title: "Calendrier des cours et activités, automne 2026", description: "Les groupes du semestre, les tests de positionnement, les activités à venir et les modalités de contact." },
      { title: "Check-list de préparation au positionnement", description: "Rassemblez votre parcours, vos objectifs, vos disponibilités et vos difficultés avant l'entretien." },
      { title: "Plan d'étude sur douze semaines", description: "Suivez semaine par semaine les entrées, les productions, les retours et les résultats d'étape — conçu pour être imprimé." },
    ],
  },
  ja: {
    eyebrow: "公開資料",
    title: "公開資料のダウンロード",
    text: "まずはコース日程と学習ツールから。クラス用の配布資料、課題、教員のフィードバックは開講後に授業進度に合わせてお渡しします。",
    version: "版",
    action: "PDF をダウンロード ↓",
    fileNote: "PDF・中国語",
    meta: ["PDF・学期日程", "PDF・クラス分け用", "PDF・学習ツール"],
    items: [
      { title: "2026年秋学期 コース・活動日程", description: "今学期のクラス、クラス分けテスト、近日の活動、問い合わせ方法。" },
      { title: "クラス分け準備チェックリスト", description: "相談の前に、学習歴・目標・使える時間・いま困っていることを整理しておくためのもの。" },
      { title: "12週間の学習計画表", description: "週ごとにインプット、アウトプット、フィードバック、段階の成果を記録。印刷して使えます。" },
    ],
  },
  ko: {
    eyebrow: "공개 자료",
    title: "공개 자료 내려받기",
    text: "먼저 과정 일정과 학습 도구부터 보세요. 수업 유인물과 과제, 교원 피드백 자료는 개강 후 진도에 맞춰 배포합니다.",
    version: "버전",
    action: "PDF 내려받기 ↓",
    fileNote: "PDF · 중국어",
    meta: ["PDF · 학기 일정", "PDF · 반 배정용", "PDF · 학습 도구"],
    items: [
      { title: "2026년 가을학기 과정·활동 일정", description: "이번 학기 개설 반, 반 배정 평가, 다가오는 활동과 문의 방법." },
      { title: "반 배정 준비 점검표", description: "상담 전에 학습 경험과 목표, 가능한 시간, 지금의 어려움을 정리해 두는 용도입니다." },
      { title: "12주 학습 계획표", description: "주 단위로 입력과 산출, 피드백, 단계 성과를 기록합니다. 인쇄해서 쓰기 좋습니다." },
    ],
  },
  es: {
    eyebrow: "Descargas públicas",
    title: "Documentos de descarga pública",
    text: "Empiece por el calendario de cursos y las herramientas de estudio. Los materiales de clase, las tareas y los comentarios del profesorado se entregan una vez comenzado el curso.",
    version: "Versión",
    action: "Descargar PDF ↓",
    fileNote: "PDF · en chino",
    meta: ["PDF · Calendario", "PDF · Herramienta de nivel", "PDF · Herramienta de estudio"],
    items: [
      { title: "Calendario de cursos y actividades, otoño de 2026", description: "Los grupos del semestre, las pruebas de nivel, las actividades próximas y cómo consultar." },
      { title: "Lista de preparación para la prueba de nivel", description: "Reúna su trayectoria, sus objetivos, su disponibilidad y sus dificultades antes de la consulta." },
      { title: "Plan de estudio de doce semanas", description: "Registre semana a semana la entrada, la producción, los comentarios y los resultados de cada etapa; pensado para imprimir." },
    ],
  },
};

export function ResourceDownloads({ locale = "zh" }: { locale?: Locale }) {
  const t = copy[locale];

  return (
    <section className="bg-[#edf2f6] py-24">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="section-title">{t.title}</h2>
            <p className="section-copy">
                {t.text}
            </p>
            <p className="mt-6 text-xs text-slate-400">
              {t.version}{locale === "zh" ? "：" : ": "}{currentTerm.updatedAt}
            </p>
          </div>
          <div className="grid gap-4">
            {resourceDownloads.map((resource, index) => (
              <a
                key={resource.href}
                href={resource.href}
                download
                className="group grid gap-5 border border-slate-200 bg-white p-7 transition hover:border-[#c99b48] sm:grid-cols-[64px_1fr_auto] sm:items-center"
              >
                <span className="font-serif text-2xl text-[#c99b48]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <small className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    {t.meta[index] ?? resource.meta}
                  </small>
                  <strong className="mt-2 block font-serif text-xl text-[#11233e]">
                    {t.items[index]?.title ?? resource.title}
                  </strong>
                  <span className="mt-2 block text-sm leading-7 text-slate-500">
                    {t.items[index]?.description ?? resource.description}
                  </span>
                </span>
                <span className="text-sm font-semibold text-[#174f8f]">
                  {t.action}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

