import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HomeHero, type HomeHeroCopy } from "@/components/HomeHero";
import { NewsCard } from "@/components/NewsCard";
import { heroSlideLabel, heroSlidesByLocale } from "@/data/hero-slides";
import { englishNews } from "@/data/english-news";
import { esNews } from "@/data/es-news";
import { frNews } from "@/data/fr-news";
import {
  foreignLocales,
  isLocale,
  localeLabels,
  localizedLandings,
  type ForeignLocale,
} from "@/data/i18n";
import { jaNews } from "@/data/ja-news";
import { koNews } from "@/data/ko-news";
import { siteConfig } from "@/data/site-config";
import { selectHomepageNews } from "@/data/news-utils";

export const dynamicParams = false;

const courseSlugs = ["english", "french", "japanese", "korean"] as const;

const newsByLocale = {
  en: englishNews,
  fr: frNews,
  es: esNews,
  ja: jaNews,
  ko: koNews,
};

const homeNewsCopy: Record<
  ForeignLocale,
  { eyebrow: string; title: string; text: string; archive: string; read: string }
> = {
  en: {
    eyebrow: "NEWS & ARCHIVE",
    title: "More than a decade of learning, teaching and exchange",
    text: "Courses, language clubs, open lessons, teaching reviews and center activities form a living record from 2015 to today.",
    archive: "Browse all {count} stories from 2015—2026",
    read: "Read",
  },
  fr: {
    eyebrow: "ACTUALITÉS & ARCHIVES",
    title: "Plus de dix ans d'apprentissage, d'enseignement et d'échanges",
    text: "Cours, clubs de langues, leçons ouvertes, bilans pédagogiques et activités du centre composent une histoire vivante de 2015 à aujourd'hui.",
    archive: "Parcourir les {count} actualités de 2015—2026",
    read: "Lire",
  },
  es: {
    eyebrow: "NOTICIAS Y ARCHIVO",
    title: "Más de diez años de aprendizaje, docencia e intercambio",
    text: "Cursos, clubes de idiomas, clases abiertas, revisiones docentes y actividades del centro forman una historia viva desde 2015 hasta hoy.",
    archive: "Consultar las {count} noticias de 2015—2026",
    read: "Leer",
  },
  ja: {
    eyebrow: "ニュース・アーカイブ",
    title: "11年間にわたる学び、教育、交流の記録",
    text: "講座、語学コミュニティ、公開授業、教育研究、センター活動を2015年から現在まで継続して記録しています。",
    archive: "2015—2026年の全{count}件を見る",
    read: "読む",
  },
  ko: {
    eyebrow: "뉴스·아카이브",
    title: "11년간 이어 온 학습, 교육, 교류의 기록",
    text: "과정, 언어 모임, 공개 수업, 교육 검토와 센터 활동을 2015년부터 현재까지 꾸준히 기록하고 있습니다.",
    archive: "2015—2026년 전체 {count}건 보기",
    read: "읽기",
  },
};

export function generateStaticParams() {
  return foreignLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: value } = await params;
  if (!isLocale(value) || value === "zh") return {};

  const locale = value as ForeignLocale;
  const content = localizedLandings[locale];
  const canonical = `${siteConfig.url}/${locale}/`;

  return {
    title: { absolute: content.metadataTitle },
    description: content.metadataDescription,
    keywords: siteConfig.keywords,
    alternates: {
      canonical,
      languages: {
        "zh-CN": siteConfig.url,
        en: `${siteConfig.url}/en/`,
        fr: `${siteConfig.url}/fr/`,
        ja: `${siteConfig.url}/ja/`,
        ko: `${siteConfig.url}/ko/`,
        es: `${siteConfig.url}/es/`,
        "x-default": siteConfig.url,
      },
    },
    openGraph: {
      type: "website",
      locale: localeLabels[locale].htmlLang,
      url: canonical,
      siteName: content.siteName,
      title: content.metadataTitle,
      description: content.metadataDescription,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: content.siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.metadataTitle,
      description: content.metadataDescription,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocalizedLandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: value } = await params;
  if (!isLocale(value) || value === "zh") notFound();

  const locale = value as ForeignLocale;
  const content = localizedLandings[locale];
  const newsCopy = homeNewsCopy[locale];
  const localeNews = newsByLocale[locale];
  const recentNews = selectHomepageNews(localeNews);

  return (
    <>
      <HomeHero
        slides={heroSlidesByLocale[locale]}
        copy={{
          eyebrow: content.eyebrow,
          primaryCta: {
            href: `/${locale}/languages`,
            label: content.primaryCta,
          },
          secondaryCta: {
            href: `/${locale}/contact`,
            label: content.secondaryCta,
          },
          tagline: content.footerTagline,
          slideLabel: heroSlideLabel[locale],
          titleSize: locale === "ja" || locale === "ko" ? "cjk" : "latin",
        } satisfies HomeHeroCopy}
      />

      <section className="-mt-px bg-[#0b2f5b] text-white">
        <div className="shell grid sm:grid-cols-2 lg:grid-cols-4">
          {content.courses.map((course, index) => {
            const courseSlug = courseSlugs[index];

            return (
              <Link
                key={course.title}
                href={`/${locale}/languages/${courseSlug}`}
                className="group flex min-h-40 items-center gap-5 border-b border-r border-white/10 p-6 transition hover:bg-white/8 sm:p-7"
              >
                <span className="grid size-14 shrink-0 place-items-center rounded-full border border-[#c99b48]/50 font-serif text-xl text-[#ead7ad]">
                  {course.mark}
                </span>
                <span>
                  <strong className="block font-serif text-xl">
                    {course.title}
                  </strong>
                  <small className="mt-1.5 block text-[10px] uppercase tracking-[0.14em] text-white/45">
                    {course.subtitle}
                  </small>
                  <span className="mt-3 block text-xs text-white/55 transition group-hover:text-white">
                    {content.primaryCta} →
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#f7f5f0]">
        <div className="shell grid grid-cols-2 lg:grid-cols-4">
          {content.stats.map((item) => (
            <div key={item.label} className="border-r border-slate-200 px-5 py-9 last:border-r-0 lg:px-8">
              <strong className="block font-serif text-3xl text-[#0b2f5b] sm:text-4xl">{item.value}</strong>
              <span className="mt-2 block text-xs tracking-[0.06em] text-slate-500">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-40 py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
          <div>
            <span className="eyebrow">{content.aboutEyebrow}</span>
            <h2 className="section-title">{content.aboutTitle}</h2>
            <p className="section-copy">{content.aboutText}</p>
          </div>
          <div className="relative min-h-[440px] overflow-hidden bg-[#0b2f5b]">
            <Image
              src="/images/library/sections/home-about-overview.webp"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
        </div>
      </section>

      <section id="courses" className="scroll-mt-40 bg-[#edf2f6] py-24">
        <div className="shell">
          <span className="eyebrow">{content.coursesEyebrow}</span>
          <div className="mt-3 grid gap-7 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="font-serif text-4xl font-semibold leading-tight text-[#0b2f5b] sm:text-5xl">
              {content.coursesTitle}
            </h2>
            <p className="max-w-2xl text-sm leading-8 text-slate-600">{content.coursesText}</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
            {content.courses.map((course, index) => {
              const courseSlug = courseSlugs[index];

              return (
                <Link
                  key={course.title}
                  href={`/${locale}/languages/${courseSlug}`}
                  className="group min-h-[285px] bg-white p-7 transition hover:bg-[#0b2f5b] hover:text-white"
                >
                  <span className="grid size-13 place-items-center rounded-full border border-[#c99b48]/60 font-serif text-lg text-[#174f8f] transition group-hover:text-[#ead7ad]">
                    {course.mark}
                  </span>
                  <h3 className="mt-7 font-serif text-2xl font-semibold text-[#11233e] transition group-hover:text-white">{course.title}</h3>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-[#a77c31] transition group-hover:text-white/45">{course.subtitle}</p>
                  <p className="mt-5 text-sm leading-7 text-slate-500 transition group-hover:text-white/66">{course.text}</p>
                </Link>
              );
            })}
          </div>
          <Link
            href={`/${locale}/languages`}
            className="mt-8 inline-block text-sm font-semibold text-[#174f8f]"
          >
            {content.courseAction} →
          </Link>
        </div>
      </section>

      <section id="approach" className="scroll-mt-40 py-24">
        <div className="shell">
          <span className="eyebrow">{content.approachEyebrow}</span>
          <div className="mt-3 grid gap-7 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="font-serif text-4xl font-semibold leading-tight text-[#0b2f5b] sm:text-5xl">
              {content.approachTitle}
            </h2>
            <p className="max-w-2xl text-sm leading-8 text-slate-600">{content.approachText}</p>
          </div>
          <div className="mt-12 grid gap-px bg-slate-200 md:grid-cols-3">
            {content.approachItems.map((item, index) => (
              <article key={item.title} className="min-h-56 bg-[#f7f5f0] p-8">
                <span className="font-serif text-sm text-[#c99b48]">0{index + 1}</span>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-[#11233e]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f0] py-24">
        <div className="shell grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <span className="eyebrow">{newsCopy.eyebrow}</span>
            <h2 className="section-title">{newsCopy.title}</h2>
            <p className="section-copy">{newsCopy.text}</p>
            <Link
              href={`/${locale}/news`}
              className="mt-8 inline-block text-sm font-semibold text-[#174f8f]"
            >
              {newsCopy.archive.replace("{count}", String(localeNews.length))} →
            </Link>
          </div>
          <div>
            {recentNews.map((item) => (
              <NewsCard
                key={item.slug}
                item={item}
                prefix={`/${locale}`}
                readLabel={newsCopy.read}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-40 bg-[#c99b48] py-20">
        <div className="shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#071f3e]/60">{content.ctaEyebrow}</p>
            <h2 className="mt-3 max-w-4xl font-serif text-3xl font-semibold text-[#071f3e] sm:text-5xl">
              {content.ctaTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#071f3e]/70">{content.ctaText}</p>
          </div>
          <a
            href={siteConfig.contact.emailHref}
            className="inline-flex w-fit bg-[#071f3e] px-7 py-4 text-sm font-semibold text-white"
          >
            {content.ctaButton} →
          </a>
        </div>
      </section>
    </>
  );
}
