import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import {
  englishSections,
  findEnglishSection,
} from "@/data/english-sections";
import { englishDetailsByParent } from "@/data/english-content-details";
import { frSections, findFrSection } from "@/data/fr-sections";
import { frDetailsByParent } from "@/data/fr-content-details";
import { esSections, findEsSection } from "@/data/es-sections";
import { esDetailsByParent } from "@/data/es-content-details";
import { jaSections, findJaSection } from "@/data/ja-sections";
import { jaDetailsByParent } from "@/data/ja-content-details";
import { koSections, findKoSection } from "@/data/ko-sections";
import { koDetailsByParent } from "@/data/ko-content-details";
import { localizedUi, type ForeignLocale } from "@/data/i18n";
import { siteConfig } from "@/data/site-config";

const facultyProfiles = [
  {
    name: "Chen Xinmin",
    role: "English Program Lead",
    focus: "General English, business communication, academic expression",
    experience: "10 years of language teaching experience",
  },
  {
    name: "Wang Liming",
    role: "Exam and Study Pathway Instructor",
    focus: "IELTS bridge courses, writing, interview communication",
    experience: "12 years of teaching and coaching experience",
  },
  {
    name: "Lin Jiayi",
    role: "French Instructor",
    focus: "Beginner French, DELF preparation, cultural topics",
    experience: "9 years of French teaching experience",
  },
  {
    name: "Zhao Mingyuan",
    role: "Japanese Instructor",
    focus: "Japanese progression, JLPT, language practice",
    experience: "11 years of Japanese teaching experience",
  },
  {
    name: "Li Ruoqing",
    role: "Korean Instructor",
    focus: "Beginner Korean, daily communication, TOPIK training",
    experience: "8 years of Korean teaching experience",
  },
  {
    name: "Kim Hyunwoo",
    role: "Cross-cultural Program Instructor",
    focus: "Language practice, cultural activities, themed workshops",
    experience: "10 years of cross-cultural course experience",
  },
];

const facultyShowcaseCopy: Record<
  ForeignLocale,
  { eyebrow: string; title: string; intro: string }
> = {
  en: {
    eyebrow: "Faculty members",
    title: "Representative Teachers",
    intro:
      "The center brings together instructors in English, French, Japanese, Korean and cross-cultural practice. They teach, review learning feedback and support curriculum development.",
  },
  fr: {
    eyebrow: "Équipe enseignante",
    title: "Enseignants représentatifs",
    intro:
      "Le centre réunit des enseignants d'anglais, de français, de japonais, de coréen et de pratique interculturelle. Ils assurent les cours, suivent les retours d'apprentissage et participent au développement pédagogique.",
  },
  ja: {
    eyebrow: "講師陣",
    title: "代表講師",
    intro:
      "センターには英語、フランス語、日本語、韓国語、異文化実践を担当する講師が在籍し、授業、学習フィードバック、カリキュラム改善に関わっています。",
  },
  ko: {
    eyebrow: "강사진",
    title: "대표 강사",
    intro:
      "센터는 영어, 프랑스어, 일본어, 한국어 및 문화 실천 분야의 강사진으로 구성되어 있으며 수업, 학습 피드백, 교육과정 개발을 함께 담당합니다.",
  },
  es: {
    eyebrow: "Equipo docente",
    title: "Docentes representativos",
    intro:
      "El centro reúne docentes de inglés, francés, japonés, coreano y práctica intercultural. Imparten clases, revisan la retroalimentación del aprendizaje y apoyan el desarrollo curricular.",
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  const enParams = englishSections
    .filter((s) => s.slug !== "news")
    .map((s) => ({ locale: "en", section: s.slug }));
  const frParams = frSections
    .filter((s) => s.slug !== "news")
    .map((s) => ({ locale: "fr", section: s.slug }));
  const esParams = esSections
    .filter((s) => s.slug !== "news")
    .map((s) => ({ locale: "es", section: s.slug }));
  const jaParams = jaSections
    .filter((s) => s.slug !== "news")
    .map((s) => ({ locale: "ja", section: s.slug }));
  const koParams = koSections
    .filter((s) => s.slug !== "news")
    .map((s) => ({ locale: "ko", section: s.slug }));
  return [...enParams, ...frParams, ...esParams, ...jaParams, ...koParams];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}): Promise<Metadata> {
  const { locale, section: slug } = await params;
  const section =
    locale === "en" ? findEnglishSection(slug)
    : locale === "fr" ? findFrSection(slug)
    : locale === "es" ? findEsSection(slug)
    : locale === "ja" ? findJaSection(slug)
    : locale === "ko" ? findKoSection(slug)
    : undefined;
  if (!section) return {};

  const canonical = `${siteConfig.url}/${locale}/${section.slug}/`;
  const chinesePath =
    section.slug === "contact"
      ? "/contact/"
      : section.slug === "languages"
        ? "/languages/"
        : `/${section.slug}/`;

  return {
    title: { absolute: `${section.title} | Language Center · ZUFE` },
    description: section.description,
    keywords: siteConfig.keywords,
    alternates: {
      canonical,
      languages: {
        "zh-CN": `${siteConfig.url}${chinesePath}`,
        en: `${siteConfig.url}/en/${section.slug}/`,
        fr: `${siteConfig.url}/fr/${section.slug}/`,
        es: `${siteConfig.url}/es/${section.slug}/`,
        ja: `${siteConfig.url}/ja/${section.slug}/`,
        ko: `${siteConfig.url}/ko/${section.slug}/`,
        "x-default": `${siteConfig.url}${chinesePath}`,
      },
    },
    openGraph: {
      type: "website",
      locale,
      url: canonical,
      siteName: "Language Center · ZUFE",
      title: section.title,
      description: section.description,
      images: [{ url: siteConfig.ogImage, alt: section.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: section.title,
      description: section.description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function EnglishSectionPage({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}) {
  const { locale, section: slug } = await params;
  const section =
    locale === "en" ? findEnglishSection(slug)
    : locale === "fr" ? findFrSection(slug)
    : locale === "es" ? findEsSection(slug)
    : locale === "ja" ? findJaSection(slug)
    : locale === "ko" ? findKoSection(slug)
    : undefined;
  if (!section) notFound();
  const linkedDetails =
    locale === "fr" ? frDetailsByParent(section.slug)
    : locale === "es" ? esDetailsByParent(section.slug)
    : locale === "ja" ? jaDetailsByParent(section.slug)
    : locale === "ko" ? koDetailsByParent(section.slug)
    : englishDetailsByParent(section.slug);

  const contactHref =
    section.slug === "contact"
      ? siteConfig.contact.emailHref
      : `/${locale}/contact`;
  const ui = localizedUi[locale as ForeignLocale];
  const facultyCopy = facultyShowcaseCopy[locale as ForeignLocale];

  return (
    <>
      <PageHero
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />

      <section className="py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow">{ui.overview}</span>
            <h2 className="section-title">{section.introTitle}</h2>
            <div className="mt-6 space-y-5 text-sm leading-8 text-slate-600">
              {section.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="relative min-h-[430px] overflow-hidden bg-[#0b2f5b]">
            <Image
              src={section.image}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#edf2f6] py-24">
        <div className="shell grid gap-px bg-slate-200 md:grid-cols-2 xl:grid-cols-3">
          {section.cards.map((card, index) => {
            const detail = linkedDetails[index];
            if (detail?.parent === "resources" && detail.slug === "downloads") {
              return null;
            }
            const href =
              card.href ??
              (detail ? `/${locale}/${detail.parent}/${detail.slug}` : undefined);

            return (
            <article key={card.title} className="min-h-[260px] bg-white p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#174f8f]">
                  {card.label}
                </span>
                <span className="font-serif text-sm text-[#c99b48]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mt-8 font-serif text-2xl font-semibold text-[#11233e]">
                {card.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-500">{card.text}</p>
              {href && (
                <Link
                  href={href}
                  className="mt-7 inline-block text-xs font-semibold text-[#174f8f]"
                >
                  {ui.viewDetails} →
                </Link>
              )}
            </article>
            );
          })}
        </div>
      </section>

      {section.slug === "faculty" && (
        <section className="py-24">
          <div className="shell">
            <div className="mb-10 max-w-3xl">
              <span className="eyebrow">{facultyCopy.eyebrow}</span>
              <h2 className="section-title">{facultyCopy.title}</h2>
              <p className="section-copy">
                {facultyCopy.intro}
              </p>
            </div>
            <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 xl:grid-cols-3">
              {facultyProfiles.map((teacher) => (
                <article key={teacher.name} className="bg-white p-8">
                  <p className="text-xs font-semibold tracking-[0.14em] text-[#174f8f]">
                    {teacher.experience}
                  </p>
                  <h3 className="mt-5 font-serif text-3xl font-semibold text-[#11233e]">
                    {teacher.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[#c99b48]">
                    {teacher.role}
                  </p>
                  <p className="mt-6 text-sm leading-7 text-slate-500">
                    {teacher.focus}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24">
        <div className="shell grid overflow-hidden bg-[#071f3e] text-white lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="p-9 sm:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ead7ad]">
              {ui.nextStep}
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              {section.closingTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-white/65">
              {section.closingText}
            </p>
          </div>
          <div className="p-9 pt-0 sm:p-14 sm:pt-0 lg:pt-14">
            <Link
              href={contactHref}
              className="inline-flex whitespace-nowrap bg-[#c99b48] px-7 py-4 text-sm font-semibold text-[#071f3e]"
            >
              {section.ctaLabel} →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
