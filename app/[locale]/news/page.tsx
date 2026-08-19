import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { englishNews } from "@/data/english-news";
import { frNews } from "@/data/fr-news";
import { esNews } from "@/data/es-news";
import { jaNews } from "@/data/ja-news";
import { koNews } from "@/data/ko-news";
import { localizedLandings, type ForeignLocale } from "@/data/i18n";
import { siteConfig } from "@/data/site-config";

const newsArchiveCopy: Record<
  ForeignLocale,
  {
    eyebrow: string;
    title: string;
    description: string;
    browseByYear: string;
    recordLabel: (count: number) => string;
    metadataTitle: string;
  }
> = {
  en: {
    eyebrow: "NEWS & ARCHIVE",
    title: "Courses, communities and everyday learning since 2015",
    description:
      "This growing archive traces how classes, teaching discussions, leadership activities and learner support have developed across more than a decade.",
    browseByYear: "Browse by year",
    recordLabel: (count) => `${count} ${count === 1 ? "record" : "records"}`,
    metadataTitle: "News and Archive | Language Center · ZUFE",
  },
  fr: {
    eyebrow: "ACTUALITÉS & ARCHIVES",
    title: "Cours, communautés et apprentissage quotidien depuis 2015",
    description:
      "Ces archives en développement montrent l'évolution des cours, des échanges pédagogiques, des activités de direction et du soutien aux apprenants sur plus de dix ans.",
    browseByYear: "Par année",
    recordLabel: (count) => `${count} ${count === 1 ? "archive" : "archives"}`,
    metadataTitle: "Actualités et archives | Centre de langues · ZUFE",
  },
  ja: {
    eyebrow: "ニュース & アーカイブ",
    title: "2015年から続く授業、コミュニティ、日々の学び",
    description:
      "増え続ける記録から、十年以上にわたる授業、教研、院長活動、学習支援の歩みを見ることができます。",
    browseByYear: "年別に見る",
    recordLabel: (count) => `${count}件`,
    metadataTitle: "ニュースとアーカイブ | 語学センター · ZUFE",
  },
  ko: {
    eyebrow: "소식 & 아카이브",
    title: "2015년부터 이어진 수업, 커뮤니티와 일상의 학습",
    description:
      "계속 확장되는 기록은 11년간 이어진 수업, 교육 논의, 원장 활동, 학습 지원의 흐름을 보여 줍니다.",
    browseByYear: "연도별 보기",
    recordLabel: (count) => `${count}건`,
    metadataTitle: "소식과 아카이브 | 언어센터 · ZUFE",
  },
  es: {
    eyebrow: "NOTICIAS & ARCHIVO",
    title: "Cursos, comunidades y aprendizaje cotidiano desde 2015",
    description:
      "Este archivo en crecimiento muestra cómo han evolucionado las clases, el desarrollo docente, las actividades de dirección y el apoyo al aprendizaje durante más de una década.",
    browseByYear: "Ver por año",
    recordLabel: (count) => `${count} ${count === 1 ? "registro" : "registros"}`,
    metadataTitle: "Noticias y archivo | Centro de Idiomas · ZUFE",
  },
};

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
  const copy = newsArchiveCopy[locale as ForeignLocale] ?? newsArchiveCopy.en;
  const localizedSiteName = localizedLandings[locale as ForeignLocale].siteName;
  const canonical = `${siteConfig.url}/${locale}/news/`;
  return {
    title: { absolute: copy.metadataTitle },
    description: copy.description,
    keywords: siteConfig.keywords,
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
    openGraph: {
      type: "website",
      locale,
      url: canonical,
      siteName: localizedSiteName,
      title: copy.metadataTitle,
      description: copy.description,
      images: [{ url: siteConfig.ogImage, alt: copy.metadataTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metadataTitle,
      description: copy.description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
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
  const copy = newsArchiveCopy[locale as ForeignLocale];

  return (
    <>
      <section className="relative flex min-h-[430px] items-center overflow-hidden bg-[#0b2f5b] py-20 text-white">
        <Image
          src="/images/generated/replacements/section-news-overview.webp"
          alt=""
          fill
          priority
          className="object-cover object-[70%_center] md:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061b35]/95 via-[#08284e]/80 to-[#08284e]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061b35]/35 via-transparent to-black/10" />
        <div className="shell relative">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#ead7ad]">
            {copy.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
            {copy.description}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-14 lg:grid-cols-[170px_1fr]">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              {copy.browseByYear}
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
                      {copy.recordLabel(items.length)}
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
