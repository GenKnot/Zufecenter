import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentDetail } from "@/components/ContentDetail";
import { CourseCatalog } from "@/components/CourseCatalog";
import { findLocalizedDetail } from "@/data/content-detail-i18n";
import { PageHero } from "@/components/PageHero";
import { englishCoursesByLanguage } from "@/data/english-courses";
import { frCoursesByLanguage } from "@/data/fr-courses";
import { esCoursesByLanguage } from "@/data/es-courses";
import { jaCoursesByLanguage } from "@/data/ja-courses";
import { koCoursesByLanguage } from "@/data/ko-courses";
import { type LanguageSlug } from "@/data/language-courses";
import { localizedLandings, localizedUi, type ForeignLocale } from "@/data/i18n";
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

const localizedLanguagePageCopy: Record<
  ForeignLocale,
  {
    names: Record<LanguageSlug, string>;
    eyebrow: (name: string) => string;
    title: (name: string) => string;
    descriptions: Record<LanguageSlug, string>;
  }
> = {
  en: {
    names: { english: "English", french: "French", japanese: "Japanese", korean: "Korean" },
    eyebrow: (name) => `${name.toUpperCase()} COURSES`,
    title: (name) => `${name}: a clear route from your current level`,
    descriptions: Object.fromEntries(Object.entries(languageInfo).map(([slug, info]) => [slug, info.description])) as Record<LanguageSlug, string>,
  },
  fr: {
    names: { english: "Anglais", french: "Français", japanese: "Japonais", korean: "Coréen" },
    eyebrow: (name) => `COURS DE ${name.toUpperCase()}`,
    title: (name) => `${name} : un parcours clair depuis votre niveau actuel`,
    descriptions: {
      english: "Progressez des bases A1 à la communication B2, ou concentrez-vous sur l'oral, l'anglais professionnel et la préparation à l'IELTS.",
      french: "Suivez un parcours aligné sur le CECRL, de A1.1 à B2, avec une préparation ciblée au DELF A2 ou B1.",
      japanese: "Construisez des bases solides puis progressez de N5 à N2 vers un usage pratique et vos objectifs JLPT.",
      korean: "Apprenez le hangeul, développez une communication pratique et avancez vers les niveaux élémentaire et intermédiaire du TOPIK.",
    },
  },
  es: {
    names: { english: "Inglés", french: "Francés", japanese: "Japonés", korean: "Coreano" },
    eyebrow: (name) => `CURSOS DE ${name.toUpperCase()}`,
    title: (name) => `${name}: una ruta clara desde su nivel actual`,
    descriptions: {
      english: "Avance desde las bases A1 hasta la comunicación B2 o concéntrese en conversación, inglés profesional y preparación para IELTS.",
      french: "Siga un itinerario alineado con el MCER desde A1.1 hasta B2, con preparación específica para DELF A2 o B1.",
      japanese: "Construya una base sistemática y avance de N5 a N2 hacia el uso práctico y sus objetivos de JLPT.",
      korean: "Aprenda hangul, desarrolle comunicación práctica y avance por los niveles elemental e intermedio de TOPIK.",
    },
  },
  ja: {
    names: { english: "英語", french: "フランス語", japanese: "日本語", korean: "韓国語" },
    eyebrow: (name) => `${name}コース`,
    title: (name) => `${name}：現在のレベルから段階的に`,
    descriptions: {
      english: "A1の基礎からB2のコミュニケーションまで進み、会話、ビジネス英語、IELTS対策にも取り組めます。",
      french: "CEFRに沿ってA1.1からB2まで学び、DELF A2またはB1の対策にも取り組めます。",
      japanese: "基礎を体系的に固め、N5・N4・N3・N2へと段階的に進み、実用力とJLPT目標につなげます。",
      korean: "ハングルから始め、実用的なコミュニケーション力を育て、TOPIK初級・中級へ進みます。",
    },
  },
  ko: {
    names: { english: "영어", french: "프랑스어", japanese: "일본어", korean: "한국어" },
    eyebrow: (name) => `${name} 과정`,
    title: (name) => `${name}: 현재 수준에서 시작하는 단계별 과정`,
    descriptions: {
      english: "A1 기초부터 B2 의사소통까지 단계적으로 배우고 회화, 비즈니스 영어, IELTS 준비에 집중할 수 있습니다.",
      french: "CEFR 기준에 따라 A1.1부터 B2까지 학습하고 DELF A2 또는 B1을 집중적으로 준비합니다.",
      japanese: "기초를 체계적으로 다지고 N5·N4·N3·N2로 발전해 실용 능력과 JLPT 목표를 준비합니다.",
      korean: "한글부터 시작해 실용 의사소통 능력을 키우고 TOPIK 초급·중급 단계로 발전합니다.",
    },
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
  const languageSlug = language as LanguageSlug;
  const copy = localizedLanguagePageCopy[locale as ForeignLocale];
  const languageName = copy.names[languageSlug];
  const pageTitle = copy.title(languageName);
  const description = copy.descriptions[languageSlug];
  const localizedSiteName = localizedLandings[locale as ForeignLocale].siteName;
  const canonical = `${siteConfig.url}/${locale}/languages/${language}/`;

  return {
    title: { absolute: `${pageTitle} | ${localizedSiteName}` },
    description,
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
      siteName: localizedSiteName,
      title: pageTitle,
      description,
      images: [{ url: siteConfig.ogImage, alt: pageTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
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
  const foreignLocale = locale as ForeignLocale;
  const copy = localizedLanguagePageCopy[foreignLocale];
  const languageName = copy.names[language];
  const ui = localizedUi[foreignLocale];
  const courses =
    locale === "fr" ? frCoursesByLanguage(language)
    : locale === "es" ? esCoursesByLanguage(language)
    : locale === "ja" ? jaCoursesByLanguage(language)
    : locale === "ko" ? koCoursesByLanguage(language)
    : englishCoursesByLanguage(language);

  // 正文が補われている言語は中文站と同じ ContentDetail を使う（版式を一本化）。
  const localized = findLocalizedDetail(foreignLocale, "languages", language);
  if (localized) {
    return (
      <ContentDetail
        page={localized}
        locale={foreignLocale}
        context="language"
        backHref={`/${locale}/languages`}
        backLabel={ui.backToAllLanguages}
      >
        <CourseCatalog language={language} courses={courses} locale={foreignLocale} />
      </ContentDetail>
    );
  }

  return (
    <>
      <PageHero
        eyebrow={copy.eyebrow(languageName)}
        title={copy.title(languageName)}
        description={copy.descriptions[language]}
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
