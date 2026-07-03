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
import { siteConfig } from "@/data/site-config";

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
      images: [{ url: section.image, alt: section.title }],
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
            <span className="eyebrow">Overview</span>
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
                  View details →
                </Link>
              )}
            </article>
            );
          })}
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid overflow-hidden bg-[#071f3e] text-white lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="p-9 sm:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ead7ad]">
              Next step
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
