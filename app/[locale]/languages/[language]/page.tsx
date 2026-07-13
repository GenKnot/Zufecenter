import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { englishCoursesByLanguage } from "@/data/english-courses";
import { frCoursesByLanguage } from "@/data/fr-courses";
import { esCoursesByLanguage } from "@/data/es-courses";
import { jaCoursesByLanguage } from "@/data/ja-courses";
import { koCoursesByLanguage } from "@/data/ko-courses";
import { type LanguageSlug } from "@/data/language-courses";
import { localizedUi, type ForeignLocale } from "@/data/i18n";
import { siteConfig } from "@/data/site-config";

const languageInfo: Record<
  LanguageSlug,
  { name: string; eyebrow: string; description: string }
> = {
  english: {
    name: "English",
    eyebrow: "ENGLISH COURSES",
    description:
      "Progress from A1 foundations to B2 communication, or focus on speaking, business English and IELTS readiness.",
  },
  french: {
    name: "French",
    eyebrow: "FRENCH COURSES",
    description:
      "Follow a CEFR-aligned path from A1.1 to B2, with focused preparation for DELF A2 or B1.",
  },
  japanese: {
    name: "Japanese",
    eyebrow: "JAPANESE COURSES",
    description:
      "Build a systematic foundation and progress through N5, N4, N3 and N2 toward practical use and JLPT goals.",
  },
  korean: {
    name: "Korean",
    eyebrow: "KOREAN COURSES",
    description:
      "Learn Hangul, develop practical communication and progress through elementary and intermediate TOPIK stages.",
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  const languages = Object.keys(languageInfo) as LanguageSlug[];
  return ["en", "fr", "es", "ja", "ko"].flatMap((locale) =>
    languages.map((language) => ({ locale, language }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; language: string }>;
}): Promise<Metadata> {
  const { locale, language } = await params;
  if (!(language in languageInfo)) return {};
  const info = languageInfo[language as LanguageSlug];
  const canonical = `${siteConfig.url}/${locale}/languages/${language}/`;

  return {
    title: { absolute: `${info.name} Courses | Language Center · ZUFE` },
    description: info.description,
    keywords: siteConfig.keywords,
    alternates: {
      canonical,
      languages: {
        "zh-CN": `${siteConfig.url}/languages/${language}/`,
        en: `${siteConfig.url}/en/languages/${language}/`,
        fr: `${siteConfig.url}/fr/languages/${language}/`,
        es: `${siteConfig.url}/es/languages/${language}/`,
        ja: `${siteConfig.url}/ja/languages/${language}/`,
        ko: `${siteConfig.url}/ko/languages/${language}/`,
        "x-default": `${siteConfig.url}/languages/${language}/`,
      },
    },
    openGraph: {
      type: "website",
      locale,
      url: canonical,
      siteName: "Language Center · ZUFE",
      title: `${info.name} Courses`,
      description: info.description,
      images: [{ url: siteConfig.ogImage, alt: `${info.name} Courses` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${info.name} Courses`,
      description: info.description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function EnglishLanguagePage({
  params,
}: {
  params: Promise<{ locale: string; language: string }>;
}) {
  const { locale, language: value } = await params;
  if (!(value in languageInfo)) notFound();

  const language = value as LanguageSlug;
  const info = languageInfo[language];
  const ui = localizedUi[locale as ForeignLocale];
  const courses =
    locale === "fr" ? frCoursesByLanguage(language)
    : locale === "es" ? esCoursesByLanguage(language)
    : locale === "ja" ? jaCoursesByLanguage(language)
    : locale === "ko" ? koCoursesByLanguage(language)
    : englishCoursesByLanguage(language);

  return (
    <>
      <PageHero
        eyebrow={info.eyebrow}
        title={`${info.name}: a clear route from your current level`}
        description={info.description}
      />
      <section className="py-24">
        <div className="shell">
          <div className="mb-12 max-w-3xl">
            <span className="eyebrow">{ui.classCatalogue}</span>
            <h2 className="section-title">
              {ui.structuredOptions(courses.length)}
            </h2>
            <p className="section-copy">
              {ui.catalogueIntro}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => (
              <Link
                key={course.code}
                href={`/${locale}/languages/${language}/${course.slug}`}
                className="group flex min-h-[300px] flex-col border border-slate-200 bg-white p-7 transition hover:border-[#c99b48] hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold tracking-[0.12em] text-[#174f8f]">
                    {course.code}
                  </span>
                  <span className="text-xs text-slate-400">{course.level}</span>
                </div>
                <h2 className="mt-7 font-serif text-2xl font-semibold text-[#11233e] transition group-hover:text-[#174f8f]">
                  {course.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {course.summary}
                </p>
                <span className="mt-auto pt-7 text-sm font-semibold text-[#174f8f]">
                  {ui.courseDetails} →
                </span>
              </Link>
            ))}
          </div>
          <Link
            href={`/${locale}/languages`}
            className="mt-10 inline-block text-sm font-semibold text-[#174f8f]"
          >
            ← {ui.backToAllLanguages}
          </Link>
        </div>
      </section>
    </>
  );
}
