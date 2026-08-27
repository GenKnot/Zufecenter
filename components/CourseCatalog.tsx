import Link from "next/link";
import type { Locale } from "@/data/i18n";
import type { LanguageCourse } from "@/data/language-courses";
import { currentTerm, findCurrentOffering } from "@/data/operations";

/**
 * 班级目录。中文站と外语站で共用するため、chrome を六言語に分けた。
 * `offering.status` と `currentTerm.title` は運営データ（中文）なので、
 * 外语页では期の表記だけ差し替え、日付そのものは触らない。
 */

/**
 * 運営データ（学期名・開講状態・曜日）は中国語で書かれている。
 * 日付そのものは事実なので触らず、語だけ各言語に置き換える。
 */
const termName: Record<Locale, string> = {
  zh: "2026 秋季课程与活动安排",
  en: "Autumn 2026 schedule",
  fr: "Calendrier automne 2026",
  ja: "2026年秋学期の日程",
  ko: "2026년 가을학기 일정",
  es: "Calendario otoño 2026",
};

const statusName: Record<Locale, Record<string, string>> = {
  zh: {},
  en: { 预约测评中: "Assessment booking open", 开放咨询: "Open for enquiries", 接受意向登记: "Registering interest" },
  fr: { 预约测评中: "Positionnement ouvert", 开放咨询: "Ouvert aux demandes", 接受意向登记: "Inscriptions d’intention" },
  ja: { 预约测评中: "クラス分け予約受付中", 开放咨询: "相談受付中", 接受意向登记: "受講意向を受付中" },
  ko: { 预约测评中: "반 배정 예약 접수", 开放咨询: "상담 접수 중", 接受意向登记: "수강 의향 접수" },
  es: { 预约测评中: "Prueba de nivel abierta", 开放咨询: "Abierto a consultas", 接受意向登记: "Registro de interés" },
};

/** 「周一、周四 18:30—20:00」→ 各語の曜日表記。時刻はそのまま。 */
const WEEKDAYS: Record<Locale, string[]> = {
  zh: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
  en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  fr: ["lun.", "mar.", "mer.", "jeu.", "ven.", "sam.", "dim."],
  ja: ["月", "火", "水", "木", "金", "土", "日"],
  ko: ["월", "화", "수", "목", "금", "토", "일"],
  es: ["lun.", "mar.", "mié.", "jue.", "vie.", "sáb.", "dom."],
};

function localizeSchedule(value: string, locale: Locale) {
  if (locale === "zh") return value;
  const zh = WEEKDAYS.zh;
  const to = WEEKDAYS[locale];
  return zh.reduce((acc, day, i) => acc.split(day).join(to[i]), value);
}

const catalogCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    text: string;
    note: string;
    interest: string;
    action: string;
    footer: (updated: string) => string;
  }
> = {
  zh: {
    eyebrow: "Class catalogue",
    title: "每一级，都为下一步做好准备",
    text: "每个班级都有明确起点、学习周期与阶段成果。完成一个级别后，可以顺畅衔接下一阶段，也可以按考试、职业或表达目标进入专项课程。",
    note: "不确定从哪里开始？入学沟通会结合既有基础、学习目标与每周可投入时间给出建议。",
    interest: "接受意向登记",
    action: "{t.action}",
    footer: (u) => `秋季排课更新于 ${u}，具体开班与教室安排以咨询确认及报名通知为准。`,
  },
  en: {
    eyebrow: "Class catalogue",
    title: "Every level prepares you for the next",
    text: "Each class has a defined starting point, a study cycle and stage results. After finishing a level you can move straight on, or switch into a focused course built around an exam, a job or a way of speaking.",
    note: "Not sure where to start? The enrolment conversation takes your existing level, your goal and the hours you can give each week, and makes a recommendation.",
    interest: "registering interest",
    action: "View the syllabus →",
    footer: (u) => `Autumn scheduling updated ${u}. Class openings and rooms are confirmed at enrolment.`,
  },
  fr: {
    eyebrow: "Catalogue des cours",
    title: "Chaque niveau prépare le suivant",
    text: "Chaque groupe a un point de départ défini, un cycle d’étude et des résultats d’étape. Une fois un niveau terminé, on enchaîne directement ou l’on bascule vers un cours ciblé selon un examen, un métier ou une façon de s’exprimer.",
    note: "Vous ne savez pas par où commencer ? L’entretien d’inscription tient compte de votre niveau, de votre objectif et des heures disponibles chaque semaine.",
    interest: "inscriptions d’intention ouvertes",
    action: "Voir le programme →",
    footer: (u) => `Programmation d’automne mise à jour le ${u}. Ouvertures et salles sont confirmées à l’inscription.`,
  },
  ja: {
    eyebrow: "クラス一覧",
    title: "どの級も、次の一歩のための準備です",
    text: "どのクラスにも明確な出発点、学習期間、段階成果があります。一つの級を終えたらそのまま次へ進むことも、試験・仕事・表現の目標に応じて専門コースへ移ることもできます。",
    note: "どこから始めるか迷っていますか。入学面談では、これまでの基礎、学習目標、週に使える時間をふまえて提案します。",
    interest: "受講意向の登録を受付中",
    action: "シラバスを見る →",
    footer: (u) => `秋学期の時間割は ${u} 更新。開講と教室は申込時に確定します。`,
  },
  ko: {
    eyebrow: "과정 목록",
    title: "모든 단계가 다음 걸음을 위한 준비입니다",
    text: "모든 반에는 분명한 출발점과 학습 주기, 단계 성과가 있습니다. 한 단계를 마치면 다음으로 바로 이어 갈 수도 있고, 시험이나 직무, 표현 목표에 따라 전문 과정으로 옮길 수도 있습니다.",
    note: "어디서 시작할지 고민되시나요. 입학 상담에서 기존 기초와 학습 목표, 주당 가능한 시간을 함께 보고 제안해 드립니다.",
    interest: "수강 의향 접수 중",
    action: "강의 계획 보기 →",
    footer: (u) => `가을학기 시간표는 ${u} 갱신. 개설과 강의실은 등록 시 확정됩니다.`,
  },
  es: {
    eyebrow: "Catálogo de cursos",
    title: "Cada nivel prepara el siguiente",
    text: "Cada grupo tiene un punto de partida definido, un ciclo de estudio y resultados de etapa. Al terminar un nivel se puede continuar directamente o pasar a un curso específico según un examen, un trabajo o una forma de expresarse.",
    note: "¿No sabe por dónde empezar? En la conversación de matrícula se tienen en cuenta su nivel, su objetivo y las horas disponibles cada semana.",
    interest: "abierto el registro de interés",
    action: "Ver el programa →",
    footer: (u) => `Programación de otoño actualizada el ${u}. Las aperturas y las aulas se confirman al matricularse.`,
  },
};

export function CourseCatalog({
  language,
  courses,
  locale = "zh",
}: {
  language: string;
  courses: LanguageCourse[];
  locale?: Locale;
}) {
  const t = catalogCopy[locale];
  const prefix = locale === "zh" ? "" : `/${locale}`;
  return (
    <section id="classes" className="bg-[#edf2f6] py-24">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="section-title">{t.title}</h2>
            <p className="section-copy">
                {t.text}
            </p>
            <div className="mt-7 border-l-2 border-[#c99b48] pl-5 text-sm leading-7 text-slate-500">
              {t.note}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {courses.map((item, index) => {
              const offering = findCurrentOffering(item.code);

              return (
                <Link
                  key={item.slug}
                  href={`${prefix}/languages/${language}/${item.slug}`}
                  className="group flex min-h-[315px] flex-col border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-[#c99b48] hover:shadow-[0_18px_45px_rgba(7,31,62,0.09)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full bg-[#0b2f5b] px-3 py-1.5 text-[10px] font-semibold tracking-[0.12em] text-white">
                      {item.code}
                    </span>
                    <span className="font-serif text-sm text-[#c99b48]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-7 text-xs font-semibold text-[#174f8f]">
                    {item.level} · {item.track}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {item.summary}
                  </p>
                  {offering ? (
                    <div className="mt-5 border-l-2 border-[#c99b48] pl-4 text-xs leading-6">
                      <p className="font-semibold text-[#a77c31]">{statusName[locale][offering.status] ?? offering.status}</p>
                      <p className="text-slate-500">{offering.startDate} · {localizeSchedule(offering.schedule, locale)}</p>
                    </div>
                  ) : (
                    <div className="mt-5 border-l-2 border-slate-200 pl-4 text-xs leading-6 text-slate-400">
                      {termName[locale]} · {t.interest}
                    </div>
                  )}
                  <div className="mt-auto flex items-end justify-between gap-4 pt-7">
                    <span className="text-xs text-slate-400">{item.duration}</span>
                    <span className="text-sm font-semibold text-[#174f8f]">
                      {t.action}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <p className="mt-7 text-xs text-slate-400">
          {t.footer(currentTerm.updatedAt)}
        </p>
      </div>
    </section>
  );
}
