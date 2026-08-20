import Link from "next/link";
import {
  languageIdentity,
  languageOrder,
  type LanguageSlug,
} from "@/data/language-identity";

export type MatrixCourse = {
  slug: string;
  language: LanguageSlug;
  title: string;
  code: string;
  /** 形如「中级 · CEFR B1」「初中级 · JLPT N4」 */
  level: string;
  track: string;
  duration: string;
  /** 本学期是否开班；来自 data/operations 的当期安排 */
  termStatus?: string;
};

/** 四个语种的综合能力课程都是五级，横轴用这一套通用叫法 */
const STAGES = ["起步", "基础", "中级", "中高级", "高级"];

/** 「中级 · CEFR B1」→ 只取后半的通用等级标准，用作格子里的主标记 */
function standardOf(level: string) {
  const parts = level.split("·").map((p) => p.trim());
  return parts.length > 1 ? parts.slice(1).join(" · ") : parts[0];
}

/**
 * 课程全景矩阵。
 *
 * 四个语种 × 五个级别正好是一张干净的表：横轴是进阶位置，纵轴是语种，
 * 一屏之内把二十六个班全部摊开。这是站里别处拿不到的东西——
 * 别的语言机构官网给不出这样一张图，因为它们没有这么完整的分级数据。
 *
 * 刻意不做悬停展开：触屏上没有悬停，信息也不该藏起来。
 */
export function CourseMatrix({ courses }: { courses: MatrixCourse[] }) {
  const core = languageOrder.map((slug) => ({
    slug,
    identity: languageIdentity[slug],
    ladder: courses.filter(
      (c) => c.language === slug && c.track === "综合能力",
    ),
  }));
  const focused = courses.filter((c) => c.track !== "综合能力");

  return (
    <div>
      {/*
        窄屏不横滑：矩阵是整页的主角，不该逼着人左右拖。
        改成按语种堆叠，每个语种把五级竖着列出来，信息一条不少。
      */}
      <div className="sm:hidden">
        {core.map(({ slug, identity, ladder }) => (
          <section key={slug} className="mb-10 last:mb-0">
            <Link
              href={`/languages/${slug}`}
              className="flex items-baseline gap-3 border-b border-[#11233e] pb-3"
            >
              <span
                aria-hidden
                className="font-serif text-2xl"
                style={{ color: identity.accent }}
              >
                {identity.mark}
              </span>
              <span className="font-serif text-xl font-semibold text-[#11233e]">
                {identity.label}
              </span>
              <span className="text-label text-slate-400">
                {identity.standard}
              </span>
            </Link>
            <ol>
              {ladder.map((course, index) => (
                <li key={course.slug} className="border-b border-slate-200">
                  <Link
                    href={`/languages/${slug}/${course.slug}`}
                    className="grid grid-cols-[3.5rem_1fr] gap-x-4 py-4"
                  >
                    <span
                      className="text-label font-semibold tracking-cn"
                      style={{ color: identity.ink }}
                    >
                      {STAGES[index]}
                    </span>
                    <span>
                      <span className="block font-serif text-base font-semibold text-[#11233e]">
                        {course.title}
                      </span>
                      <span className="mt-1 block text-label text-slate-400 tabular-nums">
                        {standardOf(course.level)} · {course.code} ·{" "}
                        {course.duration}
                      </span>
                      {course.termStatus && (
                        <span
                          className="mt-2 inline-block px-2 py-1 text-label font-semibold"
                          style={{
                            background: identity.tint,
                            color: identity.ink,
                          }}
                        >
                          本学期 {course.termStatus}
                        </span>
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>

      <div className="hidden overflow-x-auto sm:block">
        <table className="w-full min-w-[900px] border-collapse text-left">
          <thead>
            <tr>
              <th className="w-[9.5rem] pb-4" />
              {STAGES.map((stage) => (
                <th
                  key={stage}
                  className="border-b border-[#11233e] pb-4 pl-5 text-label font-semibold tracking-label text-slate-500 uppercase"
                >
                  {stage}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {core.map(({ slug, identity, ladder }) => (
              <tr key={slug} className="align-top">
                <th scope="row" className="border-b border-slate-200 py-7 pr-6">
                  <Link
                    href={`/languages/${slug}`}
                    className="group flex items-baseline gap-3"
                  >
                    <span
                      aria-hidden
                      className="font-serif text-2xl"
                      style={{ color: identity.accent }}
                    >
                      {identity.mark}
                    </span>
                    <span>
                      <span className="block font-serif text-xl font-semibold text-[#11233e] transition group-hover:text-[#174f8f]">
                        {identity.label}
                      </span>
                      <span className="mt-0.5 block text-label font-normal text-slate-400">
                        {identity.native}
                      </span>
                    </span>
                  </Link>
                </th>

                {STAGES.map((stage, index) => {
                  const course = ladder[index];
                  if (!course) {
                    return (
                      <td
                        key={stage}
                        className="border-b border-slate-200 py-7 pl-5"
                      />
                    );
                  }
                  return (
                    <td
                      key={stage}
                      className="border-b border-slate-200 py-7 pl-5"
                    >
                      <Link
                        href={`/languages/${slug}/${course.slug}`}
                        className="group block"
                      >
                        <span
                          className="block text-label font-semibold tracking-cn"
                          style={{ color: identity.ink }}
                        >
                          {standardOf(course.level)}
                        </span>
                        <span className="mt-2 block font-serif text-base leading-6 font-semibold text-[#11233e] transition group-hover:underline">
                          {course.title}
                        </span>
                        <span className="mt-2 block text-label text-slate-400 tabular-nums">
                          {course.code} · {course.duration}
                        </span>
                        {course.termStatus && (
                          <span
                            className="mt-2.5 inline-block px-2 py-1 text-label font-semibold"
                            style={{
                              background: identity.tint,
                              color: identity.ink,
                            }}
                          >
                            本学期 {course.termStatus}
                          </span>
                        )}
                      </Link>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {focused.length > 0 && (
        <div className="mt-12">
          <p className="section-rule section-rule-soft">
            <span>专项课程</span>
            <span>Focused Courses</span>
          </p>
          <ul className="mt-2 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {focused.map((course) => {
              const identity = languageIdentity[course.language];
              return (
                <li key={course.slug} className="border-b border-slate-200">
                  <Link
                    href={`/languages/${course.language}/${course.slug}`}
                    className="group flex flex-col gap-2 py-5"
                  >
                    <span className="flex flex-wrap items-baseline gap-x-3">
                      <span
                        className="px-2 py-0.5 text-label font-semibold text-white"
                        style={{ background: identity.accent }}
                      >
                        {course.track}
                      </span>
                      <strong className="font-serif text-lg font-semibold text-[#11233e] transition group-hover:underline">
                        {course.title}
                      </strong>
                    </span>
                    <span className="text-meta text-slate-500">
                      {course.level}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
