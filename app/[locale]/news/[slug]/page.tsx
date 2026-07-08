import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { englishNews, findEnglishNews } from "@/data/english-news";
import { frNews, findFrNews } from "@/data/fr-news";
import { esNews, findEsNews } from "@/data/es-news";
import { jaNews, findJaNews } from "@/data/ja-news";
import { koNews, findKoNews } from "@/data/ko-news";
import { localizedUi, type ForeignLocale } from "@/data/i18n";
import { siteConfig } from "@/data/site-config";

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

  const canonical = `${siteConfig.url}/${locale}/news/${slug}/`;
  const chinese = `${siteConfig.url}/news/${slug}/`;

  return {
    title: { absolute: `${item.title} | Language Center · ZUFE` },
    description: item.summary,
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
      siteName: "Language Center · ZUFE",
      title: item.title,
      description: item.summary,
      publishedTime: item.date,
      images: [{ url: item.image, alt: item.title }],
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
      <section className="bg-[#f7f5f0] py-20">
        <div className="shell max-w-4xl">
          <Link href={`/${locale}/news`} className="text-sm text-[#174f8f]">
            ← {ui.backToNews}
          </Link>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            {item.category} · {item.date}
          </p>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[#11233e] sm:text-5xl">
            {item.title}
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-500">
            {item.summary}
          </p>
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
          {item.category} · {ui.newsCaption}
        </p>
        <div className="prose-page mt-12">
          {item.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="mt-10 border-l-2 border-[#c99b48] pl-5 text-sm text-slate-500">
            {ui.newsNote}
          </p>
        </div>
      </article>
    </>
  );
}
