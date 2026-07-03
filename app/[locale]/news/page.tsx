import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { englishNews } from "@/data/english-news";
import { frNews } from "@/data/fr-news";
import { esNews } from "@/data/es-news";
import { jaNews } from "@/data/ja-news";
import { koNews } from "@/data/ko-news";
import { siteConfig } from "@/data/site-config";

export const dynamicParams = false;

export function generateStaticParams() {
  return ["en", "fr", "es", "ja", "ko"].map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const canonical = `${siteConfig.url}/${locale}/news/`;
  return {
    title: { absolute: "News and Archive | Language Center · ZUFE" },
    description:
      "Browse courses, teaching development, language communities and learning activities from 2015 to 2026.",
    alternates: {
      canonical,
      languages: {
        "zh-CN": `${siteConfig.url}/news/`,
        en: `${siteConfig.url}/en/news/`,
        fr: `${siteConfig.url}/fr/news/`,
        es: `${siteConfig.url}/es/news/`,
        ja: `${siteConfig.url}/ja/news/`,
        ko: `${siteConfig.url}/ko/news/`,
        "x-default": `${siteConfig.url}/news/`,
      },
    },
  };
}

export default async function EnglishNewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const newsItems =
    locale === "fr" ? frNews
    : locale === "es" ? esNews
    : locale === "ja" ? jaNews
    : locale === "ko" ? koNews
    : locale === "en" ? englishNews
    : null;
  if (!newsItems) notFound();

  const years = [...new Set(newsItems.map((item) => item.date.slice(0, 4)))];

  return (
    <>
      <section className="bg-[#0b2f5b] py-20 text-white">
        <div className="shell">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#ead7ad]">
            NEWS & ARCHIVE
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Courses, communities and everyday learning since 2015
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
            Thirty records trace how classes, teaching discussions, language
            activities and learner support have developed across more than a
            decade.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-14 lg:grid-cols-[170px_1fr]">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Browse by year
            </p>
            <nav className="mt-5 flex flex-wrap gap-2 lg:grid">
              {years.map((year) => (
                <a
                  key={year}
                  href={`#year-${year}`}
                  className="border border-slate-200 px-4 py-2 text-sm text-slate-600 transition hover:border-[#c99b48] hover:text-[#174f8f]"
                >
                  {year}
                </a>
              ))}
            </nav>
          </aside>

          <div className="space-y-16">
            {years.map((year) => {
              const items = newsItems.filter((item) =>
                item.date.startsWith(year),
              );
              return (
                <section key={year} id={`year-${year}`} className="scroll-mt-8">
                  <div className="mb-5 flex items-end gap-4">
                    <h2 className="font-serif text-4xl font-semibold text-[#0b2f5b]">
                      {year}
                    </h2>
                    <span className="pb-1 text-xs text-slate-400">
                      {items.length} {items.length === 1 ? "record" : "records"}
                    </span>
                  </div>
                  <div className="divide-y divide-slate-200 border-t border-slate-200">
                    {items.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/${locale}/news/${item.slug}`}
                        className="group grid gap-5 py-7 sm:grid-cols-[170px_1fr]"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden bg-[#0b2f5b]">
                          <Image
                            src={item.image}
                            alt=""
                            fill
                            className="object-cover transition duration-500 group-hover:scale-[1.03]"
                            sizes="170px"
                          />
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#174f8f]">
                            {item.category} · {item.date}
                          </p>
                          <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight text-[#11233e] transition group-hover:text-[#174f8f]">
                            {item.title}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-slate-500">
                            {item.summary}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
