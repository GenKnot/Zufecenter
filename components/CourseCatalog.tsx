import Link from "next/link";
import type { LanguageCourse } from "@/data/language-courses";
import { currentTerm, findCurrentOffering } from "@/data/operations";

export function CourseCatalog({
  language,
  courses,
}: {
  language: string;
  courses: LanguageCourse[];
}) {
  return (
    <section id="classes" className="bg-[#edf2f6] py-24">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <span className="eyebrow">Class catalogue</span>
            <h2 className="section-title">每一级，都为下一步做好准备</h2>
            <p className="section-copy">
              每个班级都有明确起点、学习周期与阶段成果。完成一个级别后，
              可以顺畅衔接下一阶段，也可以按考试、职业或表达目标进入专项课程。
            </p>
            <div className="mt-7 border-l-2 border-[#c99b48] pl-5 text-sm leading-7 text-slate-500">
              不确定从哪里开始？入学沟通会结合既有基础、学习目标与每周可投入时间给出建议。
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {courses.map((item, index) => {
              const offering = findCurrentOffering(item.code);

              return (
                <Link
                  key={item.slug}
                  href={`/languages/${language}/${item.slug}`}
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
                      <p className="font-semibold text-[#a77c31]">{offering.status}</p>
                      <p className="text-slate-500">{offering.startDate} · {offering.schedule}</p>
                    </div>
                  ) : (
                    <div className="mt-5 border-l-2 border-slate-200 pl-4 text-xs leading-6 text-slate-400">
                      {currentTerm.title} · 接受意向登记
                    </div>
                  )}
                  <div className="mt-auto flex items-end justify-between gap-4 pt-7">
                    <span className="text-xs text-slate-400">{item.duration}</span>
                    <span className="text-sm font-semibold text-[#174f8f]">
                      查看课程大纲 →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <p className="mt-7 text-xs text-slate-400">
          秋季排课更新于 {currentTerm.updatedAt}，具体开班与教室安排以咨询确认及报名通知为准。
        </p>
      </div>
    </section>
  );
}
