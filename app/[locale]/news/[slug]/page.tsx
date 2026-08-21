import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { englishNews, findEnglishNews } from "@/data/english-news";
import { frNews, findFrNews } from "@/data/fr-news";
import { esNews, findEsNews } from "@/data/es-news";
import { jaNews, findJaNews } from "@/data/ja-news";
import { koNews, findKoNews } from "@/data/ko-news";
import { localizedLandings, localizedUi, type ForeignLocale } from "@/data/i18n";
import { siteConfig } from "@/data/site-config";
import { illustrativeNewsSlugs } from "@/data/site";

const sourceLabels: Record<ForeignLocale, string> = {
  en: "Official source",
  fr: "Source officielle",
  es: "Fuente oficial",
  ja: "公式情報",
  ko: "공식 출처",
};

const illustrativeCaptionLabels: Record<ForeignLocale, string> = {
  en: "Illustrative activity scene — not a historical event photograph",
  fr: "Scène d’activité illustrative — il ne s’agit pas d’une photo historique",
  es: "Escena ilustrativa de la actividad — no es una fotografía histórica",
  ja: "活動場面のイメージ（当時の記録写真ではありません）",
  ko: "활동 장면 예시 이미지(당시 기록 사진이 아님)",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...englishNews.map((item) => ({ locale: "en", slug: item.slug })),
    ...frNews.map((item) => ({ locale: "fr", slug: item.slug })),
    ...esNews.map((item) => ({ locale: "es", slug: item.slug })),
    ...jaNews.map((item) => ({ locale: "ja", slug: item.slug })),
    ...koNews.map((item) => ({ locale: "ko", slug: item.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const item =
    locale === "en" ? findEnglishNews(slug)
    : locale === "fr" ? findFrNews(slug)
    : locale === "es" ? findEsNews(slug)
    : locale === "ja" ? findJaNews(slug)
    : locale === "ko" ? findKoNews(slug)
    : undefined;
  if (!item) return {};
  const localizedSiteName = localizedLandings[locale as ForeignLocale].siteName;
  const hasFullPublicationDate = /^\d{4}-\d{2}-\d{2}$/.test(item.date);

  const canonical = `${siteConfig.url}/${locale}/news/${slug}/`;
  const chinese = `${siteConfig.url}/news/${slug}/`;

  return {
    title: { absolute: `${item.title} | ${localizedSiteName}` },
    description: item.summary,
    keywords: siteConfig.keywords,
    alternates: {
      canonical,
      languages: {
        "zh-CN": chinese,
        en: `${siteConfig.url}/en/news/${slug}/`,
        fr: `${siteConfig.url}/fr/news/${slug}/`,
        es: `${siteConfig.url}/es/news/${slug}/`,
        ja: `${siteConfig.url}/ja/news/${slug}/`,
        ko: `${siteConfig.url}/ko/news/${slug}/`,
        "x-default": chinese,
      },
    },
    openGraph: {
      type: "article",
      locale,
      url: canonical,
      siteName: localizedSiteName,
      title: item.title,
      description: item.summary,
      ...(hasFullPublicationDate ? { publishedTime: item.date } : {}),
      images: [{ url: siteConfig.ogImage, alt: item.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.summary,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function EnglishNewsDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const item =
    locale === "en" ? findEnglishNews(slug)
    : locale === "fr" ? findFrNews(slug)
    : locale === "es" ? findEsNews(slug)
    : locale === "ja" ? findJaNews(slug)
    : locale === "ko" ? findKoNews(slug)
    : undefined;
  if (!item) notFound();
  const ui = localizedUi[locale as ForeignLocale];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#f7f5f0] py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 right-[-6%] hidden h-[115%] w-[54%] opacity-30 lg:block"
        >
          <Image
            src="/images/library/news-header-editorial-ornament.png"
            alt=""
            fill
            className="object-contain object-right-bottom mix-blend-multiply"
            sizes="54vw"
          />
        </div>
        <div className="shell relative z-10 max-w-6xl">
          <div className="max-w-4xl">
            <Link href={`/${locale}/news`} className="text-sm text-[#174f8f]">
              ← {ui.backToNews}
            </Link>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              {item.category} · {item.date}
            </p>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[#11233e] sm:text-5xl">
              {item.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-500">
              {item.summary}
            </p>
          </div>
        </div>
      </section>

      <article className="shell max-w-4xl py-20">
        <div className="relative aspect-[16/9] overflow-hidden bg-[#0b2f5b]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <p className="mt-3 text-xs leading-6 text-slate-400">
          {illustrativeNewsSlugs.has(item.slug)
            ? illustrativeCaptionLabels[locale as ForeignLocale]
            : `${item.category} · ${ui.newsCaption}`}
        </p>
        <div className="prose-page mt-12">
          {item.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {item.source && (
            <p className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
              {sourceLabels[locale as ForeignLocale]}:{" "}
              <a
                href={item.source.href}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[#174f8f] underline decoration-[#c99b48]/60 underline-offset-4"
              >
                {item.source.label} ↗
              </a>
            </p>
          )}
          <p className="mt-10 border-l-2 border-[#c99b48] pl-5 text-sm text-slate-500">
            {ui.newsNote}
          </p>
        </div>
      </article>
    </>
  );
}
