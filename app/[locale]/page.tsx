import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  foreignLocales,
  isLocale,
  localeLabels,
  localizedLandings,
  type ForeignLocale,
} from "@/data/i18n";
import { siteConfig } from "@/data/site-config";

export const dynamicParams = false;

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

  return (
    <>
      <section className="relative min-h-[700px] overflow-hidden bg-[#071f3e] text-white">
        <Image
          src="/images/campus-autumn.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071f3e]/95 via-[#071f3e]/82 to-[#071f3e]/30" />
        <div className="shell relative flex min-h-[700px] items-center py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.24em] text-[#ead7ad]">
              {content.eyebrow}
            </p>
            <h1 className="mt-7 font-serif text-[clamp(42px,6vw,76px)] font-semibold leading-[1.08] tracking-[-0.04em]">
              {content.heroTitle}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
              {content.heroText}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={`/${locale}/languages`}
                className="bg-[#c99b48] px-7 py-4 text-sm font-semibold text-[#071f3e] transition hover:bg-[#ead7ad]"
              >
                {content.primaryCta}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="border border-white/35 px-7 py-4 text-sm font-semibold transition hover:bg-white/10"
              >
                {content.secondaryCta}
              </Link>
            </div>
          </div>
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
              src="/images/language-class.png"
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
            {content.courses.map((course) => (
              <article key={course.title} className="min-h-[285px] bg-white p-7">
                <span className="grid size-13 place-items-center rounded-full border border-[#c99b48]/60 font-serif text-lg text-[#174f8f]">
                  {course.mark}
                </span>
                <h3 className="mt-7 font-serif text-2xl font-semibold text-[#11233e]">{course.title}</h3>
                <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-[#a77c31]">{course.subtitle}</p>
                <p className="mt-5 text-sm leading-7 text-slate-500">{course.text}</p>
              </article>
            ))}
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
