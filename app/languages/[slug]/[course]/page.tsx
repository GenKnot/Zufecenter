import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  findLanguageCourse,
  languageCourses,
} from "@/data/language-courses";
import { siteConfig } from "@/data/site-config";

export function generateStaticParams() {
  return languageCourses.map((item) => ({
    slug: item.language,
    course: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; course: string }>;
}): Promise<Metadata> {
  const { slug, course } = await params;
  const item = findLanguageCourse(slug, course);
  if (!item) return {};

  return {
    title: item.title,
    description: item.summary,
    alternates: {
      canonical: `${siteConfig.url}/languages/${slug}/${course}/`,
    },
  };
}

export default async function LanguageCoursePage({
  params,
}: {
  params: Promise<{ slug: string; course: string }>;
}) {
  const { slug, course } = await params;
  const item = findLanguageCourse(slug, course);
  if (!item) notFound();

  return (
    <>
      <section className="bg-[#071f3e] py-20 text-white sm:py-28">
        <div className="shell">
          <Link
            href={`/languages/${item.language}#classes`}
            className="text-xs font-semibold tracking-[0.14em] text-[#ead7ad]"
          >
            ← 返回{item.languageLabel}班级目录
          </Link>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.64fr] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="bg-[#c99b48] px-3 py-1.5 font-semibold text-[#071f3e]">
                  {item.code}
                </span>
                <span className="text-white/56">{item.level}</span>
                <span className="text-white/30">·</span>
                <span className="text-white/56">{item.track}</span>
              </div>
              <h1 className="mt-7 font-serif text-5xl font-semibold tracking-tight sm:text-6xl">
                {item.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
                {item.summary}
              </p>
            </div>
            <div className="border-t border-white/20 pt-6 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
              <p className="text-xs uppercase tracking-[0.18em] text-[#ead7ad]">
                适合人群
              </p>
              <p className="mt-4 text-sm leading-7 text-white/68">
                {item.audience}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#f7f5f0]">
        <div className="shell grid sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["标准周期", item.duration],
            ["学习频率", item.frequency],
            ["建议班额", item.classSize],
            ["招生状态", "招生中"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="border-b border-slate-200 px-1 py-8 sm:border-r sm:px-8 sm:first:pl-0 lg:border-b-0"
            >
              <p className="text-xs font-semibold tracking-[0.12em] text-[#174f8f]">
                {label}
              </p>
              <p className="mt-2 font-serif text-xl font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <span className="eyebrow">Learning outcomes</span>
            <h2 className="section-title">学完这一阶段，你应该能够</h2>
            <p className="section-copy">
              阶段成果既看语言知识，也看能否在相应难度的真实任务中完成表达。
            </p>
          </div>
          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {item.outcomes.map((outcome, index) => (
              <article key={outcome} className="min-h-44 bg-white p-7">
                <span className="font-serif text-sm text-[#c99b48]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-8 text-base font-semibold leading-7">
                  {outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#edf2f6] py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="eyebrow">Course syllabus</span>
            <h2 className="section-title">课程大纲</h2>
            <p className="section-copy">
              大纲按能力进阶组织。教师会根据班级学习表现调整练习密度，但阶段目标与核心内容保持一致。
            </p>
          </div>
          <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
            {item.syllabus.map((unit) => (
              <article
                key={unit.unit}
                className="grid gap-5 bg-white px-7 py-8 md:grid-cols-[90px_0.42fr_1fr] md:items-start"
              >
                <span className="font-serif text-2xl text-[#c99b48]">
                  {unit.unit}
                </span>
                <h3 className="font-serif text-2xl font-semibold">
                  {unit.title}
                </h3>
                <p className="text-sm leading-8 text-slate-600">
                  {unit.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="shell grid gap-10 bg-[#0b2f5b] p-9 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#ead7ad]">
              PLACEMENT & ENROLMENT
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold">
              先确认基础，再进入合适的班级
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/62">
              咨询时可以说明既有学习经历、目标和可上课时间。需要分级的课程会先安排基础沟通或测评，避免班级难度过高或过低。
            </p>
          </div>
          <Link
            href="/contact"
            className="w-fit bg-[#c99b48] px-7 py-4 text-sm font-semibold text-[#071f3e]"
          >
            咨询开班安排 →
          </Link>
        </div>
      </section>
    </>
  );
}
