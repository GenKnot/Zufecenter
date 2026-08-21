import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  findLanguageCourse,
  languageCourses,
} from "@/data/language-courses";
import { siteConfig } from "@/data/site-config";
import { currentTerm, findCurrentOffering } from "@/data/operations";
import { getCourseImage } from "@/data/course-images";
import { findCourseSyllabus } from "@/data/course-syllabus";
import { localizedAlternates } from "@/lib/site-metadata";

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
  const path = `/languages/${slug}/${course}`;
  const canonical = `${siteConfig.url}${path}/`;
  const image = getCourseImage(slug, course);

  return {
    title: item.title,
    description: item.summary,
    keywords: siteConfig.keywords,
    alternates: {
      canonical,
      languages: localizedAlternates(path),
    },
    openGraph: {
      type: "website",
      locale: "zh_CN",
      url: canonical,
      siteName: siteConfig.name,
      title: item.title,
      description: item.summary,
      images: [{ url: image, alt: item.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.summary,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
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
  const offering = findCurrentOffering(item.code);
  const courseImage = getCourseImage(item.language, item.slug);
  const syllabus = findCourseSyllabus(item.code);

  return (
    <>
      <section className="relative min-h-[580px] overflow-hidden bg-[#071f3e] py-20 text-white sm:py-28">
        <Image
          src={courseImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071f3e]/98 via-[#071f3e]/86 to-[#071f3e]/42" />
        <div className="shell relative">
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
            <div className="border-t border-white/20 bg-[#071f3e]/48 p-6 backdrop-blur-sm lg:border-l lg:border-t-0 lg:pl-9">
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
            ["招生状态", offering?.status || "接受意向登记"],
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

      <section className="border-b border-slate-200 bg-white py-12">
        <div className="shell">
          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-4">
            <div className="bg-[#0b2f5b] p-6 text-white">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#ead7ad]">
                {currentTerm.eyebrow}
              </p>
              <p className="mt-3 font-serif text-xl font-semibold">
                {offering ? "本期排课" : "本期意向登记"}
              </p>
            </div>
            <div className="bg-[#f7f5f0] p-6">
              <p className="text-xs text-slate-400">开课与上课时间</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                {offering ? `${offering.startDate} · ${offering.schedule}` : "根据登记人数与学习基础协调排课"}
              </p>
            </div>
            <div className="bg-[#f7f5f0] p-6">
              <p className="text-xs text-slate-400">教学安排</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                {offering?.teacher || `${item.languageLabel}教学组`}
              </p>
            </div>
            <div className="bg-[#f7f5f0] p-6">
              <p className="text-xs text-slate-400">教学地点</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                {offering?.location || "文一西路教学点 · 开班后确认教室"}
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-col justify-between gap-2 text-xs text-slate-400 sm:flex-row">
            <p>安排更新于 {currentTerm.updatedAt}，具体开班信息以报名通知为准。</p>
            <Link href="/contact" className="font-semibold text-[#174f8f]">
              预约分班沟通 →
            </Link>
          </div>
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

      {/*
        入班基础、定制教材与教学安排。
        这三项原本只在教学大纲文档里，网站上看不到——而它们正是报名前最想确认的事。
      */}
      {syllabus && (
        <section className="py-20">
          <div className="shell">
            <div className="max-w-3xl">
              <span className="eyebrow">Before you enrol</span>
              <h2 className="section-title">入班基础与教学准备</h2>
            </div>
            <dl className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 lg:grid-cols-3">
              {[
                ["入班基础", syllabus.prerequisite],
                ["定制教材", syllabus.materials],
                ["教学安排", syllabus.teaching],
              ].map(([label, value]) => (
                <div key={label} className="bg-white p-7">
                  <dt className="text-xs font-semibold tracking-[0.12em] text-[#174f8f]">
                    {label}
                  </dt>
                  <dd className="mt-4 text-sm leading-7 text-slate-600">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <section className="bg-[#edf2f6] py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="eyebrow">Course syllabus</span>
            <h2 className="section-title">课程大纲</h2>
            {/* 周期与频率在上面的信息条里已经写过，这里不重复 */}
            <p className="section-copy">
              大纲按能力进阶组织。教师会根据班级学习表现调整练习密度，但阶段目标与核心内容保持一致。
            </p>
          </div>

          {syllabus ? (
            <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
              {syllabus.chapters.map((chapter) => (
                <article key={chapter.chapter} className="bg-white px-7 py-9">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="font-serif text-2xl font-semibold">
                      {chapter.chapter}
                    </h3>
                    <span className="text-sm font-semibold text-[#a77c31]">
                      {chapter.weeks}
                    </span>
                  </div>
                  <dl className="mt-6 grid gap-6 md:grid-cols-3">
                    {[
                      ["教学内容", chapter.content],
                      ["课堂任务", chapter.classwork],
                      ["作业与章节检测", chapter.homework],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <dt className="text-xs font-semibold tracking-[0.1em] text-slate-400">
                          {label}
                        </dt>
                        <dd className="mt-2.5 text-sm leading-7 text-slate-600">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
          ) : (
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
          )}
        </div>
      </section>

      {/* 考核安排：什么时候考、考什么，报名前就写清楚 */}
      {syllabus && syllabus.assessments.length > 0 && (
        <section className="py-24">
          <div className="shell grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <span className="eyebrow">Assessment</span>
              <h2 className="section-title">考核安排</h2>
              <p className="section-copy">
                采用过程性任务与阶段考核结合，不以一次笔试作为唯一依据。
              </p>
            </div>
            <div>
              <ol className="divide-y divide-slate-200 border-y border-slate-200">
                {syllabus.assessments.map((entry) => (
                  <li
                    key={entry}
                    className="py-5 text-sm leading-7 text-slate-600"
                  >
                    {entry}
                  </li>
                ))}
              </ol>
              {syllabus.outcome && (
                <p className="mt-8 border-l-2 border-[#c99b48] pl-6 text-sm leading-7 text-slate-600">
                  <strong className="font-semibold text-[#11233e]">
                    结课成果
                  </strong>
                  <br />
                  {syllabus.outcome}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

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
