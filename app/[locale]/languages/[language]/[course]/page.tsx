import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { englishCourses, findEnglishCourse } from "@/data/english-courses";
import { frCourses, findFrCourse } from "@/data/fr-courses";
import { esCourses, findEsCourse } from "@/data/es-courses";
import { jaCourses, findJaCourse } from "@/data/ja-courses";
import { koCourses, findKoCourse } from "@/data/ko-courses";
import { localizedUi, type ForeignLocale } from "@/data/i18n";
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

  const canonical = `${siteConfig.url}/${locale}/languages/${language}/${slug}/`;
  const chinese = `${siteConfig.url}/languages/${language}/${slug}/`;

  return {
    title: { absolute: `${course.title} | Language Center · ZUFE` },
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
      siteName: "Language Center · ZUFE",
      title: course.title,
      description: course.summary,
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.summary,
      images: ["/images/language-class.png"],
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

  return (
    <>
      <section className="bg-[#071f3e] py-20 text-white">
        <div className="shell">
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
            <div className="border-l-2 border-[#c99b48] pl-6">
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

      <section className="bg-[#edf2f6] py-24">
        <div className="shell">
          <span className="eyebrow">{ui.courseOutline}</span>
          <h2 className="section-title">{ui.modulesTitle}</h2>
          <p className="section-copy">
            {ui.modulesIntro}
          </p>
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
        </div>
      </section>

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
