import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { englishCourses, findEnglishCourse } from "@/data/english-courses";
import { frCourses, findFrCourse } from "@/data/fr-courses";
import { esCourses, findEsCourse } from "@/data/es-courses";
import { jaCourses, findJaCourse } from "@/data/ja-courses";
import { koCourses, findKoCourse } from "@/data/ko-courses";
import {
  findLocalizedSyllabus,
  syllabusUi,
} from "@/data/course-syllabus-i18n";
import { localizedLandings, localizedUi, type ForeignLocale } from "@/data/i18n";
import { getCourseImage } from "@/data/course-images";
import { siteConfig } from "@/data/site-config";

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...englishCourses.map((c) => ({ locale: "en", language: c.language, course: c.slug })),
    ...frCourses.map((c) => ({ locale: "fr", language: c.language, course: c.slug })),
    ...esCourses.map((c) => ({ locale: "es", language: c.language, course: c.slug })),
    ...jaCourses.map((c) => ({ locale: "ja", language: c.language, course: c.slug })),
    ...koCourses.map((c) => ({ locale: "ko", language: c.language, course: c.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; language: string; course: string }>;
}): Promise<Metadata> {
  const { locale, language, course: slug } = await params;
  const course =
    locale === "en" ? findEnglishCourse(language, slug)
    : locale === "fr" ? findFrCourse(language, slug)
    : locale === "es" ? findEsCourse(language, slug)
    : locale === "ja" ? findJaCourse(language, slug)
    : locale === "ko" ? findKoCourse(language, slug)
    : undefined;
  if (!course) return {};
  const localizedSiteName = localizedLandings[locale as ForeignLocale].siteName;

  const canonical = `${siteConfig.url}/${locale}/languages/${language}/${slug}/`;
  const chinese = `${siteConfig.url}/languages/${language}/${slug}/`;
  const image = getCourseImage(language, slug);

  return {
    title: { absolute: `${course.title} | ${localizedSiteName}` },
    description: course.summary,
    keywords: siteConfig.keywords,
    alternates: {
      canonical,
      languages: {
        "zh-CN": chinese,
        en: `${siteConfig.url}/en/languages/${language}/${slug}/`,
        fr: `${siteConfig.url}/fr/languages/${language}/${slug}/`,
        es: `${siteConfig.url}/es/languages/${language}/${slug}/`,
        ja: `${siteConfig.url}/ja/languages/${language}/${slug}/`,
        ko: `${siteConfig.url}/ko/languages/${language}/${slug}/`,
        "x-default": chinese,
      },
    },
    openGraph: {
      type: "website",
      locale,
      url: canonical,
      siteName: localizedSiteName,
      title: course.title,
      description: course.summary,
      images: [{ url: image, alt: course.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.summary,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function EnglishCoursePage({
  params,
}: {
  params: Promise<{ locale: string; language: string; course: string }>;
}) {
  const { locale, language, course: slug } = await params;
  const course =
    locale === "en" ? findEnglishCourse(language, slug)
    : locale === "fr" ? findFrCourse(language, slug)
    : locale === "es" ? findEsCourse(language, slug)
    : locale === "ja" ? findJaCourse(language, slug)
    : locale === "ko" ? findKoCourse(language, slug)
    : undefined;
  if (!course) notFound();
  const ui = localizedUi[locale as ForeignLocale];
  const sy = syllabusUi[locale as ForeignLocale];
  const syllabus = findLocalizedSyllabus(locale as ForeignLocale, course.code);
  const courseImage = getCourseImage(course.language, course.slug);

  return (
    <>
      <section className="relative min-h-[560px] overflow-hidden bg-[#071f3e] py-20 text-white">
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
            href={`/${locale}/languages/${course.language}`}
            className="text-xs font-semibold tracking-[0.12em] text-[#ead7ad]"
          >
            ← {ui.backToCatalogue(course.languageLabel)}
          </Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ead7ad]">
                {course.code} · {course.track}
              </p>
              <h1 className="mt-5 max-w-4xl font-serif text-4xl font-semibold leading-tight sm:text-6xl">
                {course.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/68">
                {course.summary}
              </p>
            </div>
            <div className="border-l-2 border-[#c99b48] bg-[#071f3e]/48 p-6 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.14em] text-white/45">
                {ui.recommendedFor}
              </p>
              <p className="mt-3 text-sm leading-7 text-white/76">
                {course.audience}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#f7f5f0]">
        <div className="shell grid sm:grid-cols-2 lg:grid-cols-5">
          {[
            [ui.level, course.level],
            [ui.standardLength, course.duration],
            [ui.studyFrequency, course.frequency],
            [ui.classSize, course.classSize],
            [ui.admissionsStatus, ui.enrolling],
          ].map(([label, value]) => (
            <div
              key={label}
              className="border-b border-r border-slate-200 px-6 py-8 lg:border-b-0"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                {label}
              </span>
              <strong className="mt-2 block text-sm font-semibold text-[#11233e]">
                {value}
              </strong>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="eyebrow">{ui.stageOutcomes}</span>
            <h2 className="section-title">
              {ui.outcomesTitle}
            </h2>
          </div>
          <div className="grid gap-px bg-slate-200 sm:grid-cols-2">
            {course.outcomes.map((outcome, index) => (
              <div key={outcome} className="min-h-40 bg-white p-7">
                <span className="font-serif text-sm text-[#c99b48]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 text-sm leading-7 text-slate-700">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {syllabus && (
        <section className="py-24">
          <div className="shell">
            <span className="eyebrow">{ui.courseOutline}</span>
            <h2 className="section-title">{sy.preparationTitle}</h2>
            <dl className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 lg:grid-cols-3">
              {[
                [sy.prerequisite, syllabus.prerequisite],
                [sy.materials, syllabus.materials],
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
              <div className="bg-white p-7">
                <dt className="text-xs font-semibold tracking-[0.12em] text-[#174f8f]">
                  {sy.teaching}
                </dt>
                <dd className="mt-4 text-sm leading-7 text-slate-600">
                  {syllabus.teaching.map((person) => (
                    <span key={person.label} className="block">
                      {person.label}
                      <span className="text-slate-400">　</span>
                      {person.name}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </section>
      )}

      <section className="bg-[#edf2f6] py-24">
        <div className="shell">
          <span className="eyebrow">{ui.courseOutline}</span>
          <h2 className="section-title">{ui.modulesTitle}</h2>
          <p className="section-copy">
            {syllabus ? sy.outlineIntro : ui.modulesIntro}
          </p>

          {syllabus ? (
            <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
              {course.syllabus.map((module, index) => (
                <article key={module.unit} className="bg-white px-7 py-9">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="font-serif text-2xl font-semibold text-[#11233e]">
                      {ui.moduleLabel} {module.unit} · {module.title}
                    </h3>
                    <span className="text-sm font-semibold text-[#a77c31]">
                      {syllabus.chapters[index]?.weeks}
                    </span>
                  </div>
                  <dl className="mt-6 grid gap-6 md:grid-cols-3">
                    {[
                      [sy.content, module.content],
                      [sy.classwork, syllabus.chapters[index]?.classwork],
                      [sy.homework, syllabus.chapters[index]?.homework],
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
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {course.syllabus.map((module) => (
                <article
                  key={module.unit}
                  className="border border-slate-200 bg-white p-8"
                >
                  <span className="font-serif text-sm text-[#c99b48]">
                    {ui.moduleLabel} {module.unit}
                  </span>
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-[#11233e]">
                    {module.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {module.content}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {syllabus && (
        <section className="py-24">
          <div className="shell grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr]">
            <div>
              <span className="eyebrow">{ui.courseOutline}</span>
              <h2 className="section-title">{sy.assessmentTitle}</h2>
              <p className="section-copy">{sy.assessmentIntro}</p>
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
                    {sy.outcome}
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
        <div className="shell flex flex-col justify-between gap-8 bg-[#0b2f5b] p-9 text-white sm:p-12 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ead7ad]">
              {ui.placement}
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl font-semibold">
              {ui.placementTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">
              {ui.placementText}
            </p>
          </div>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex w-fit shrink-0 bg-[#c99b48] px-7 py-4 text-sm font-semibold text-[#071f3e]"
          >
            {ui.askAvailability} →
          </Link>
        </div>
      </section>
    </>
  );
}
