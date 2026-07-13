import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  englishContentDetails,
  findEnglishContentDetail,
  type EnglishContentParent,
} from "@/data/english-content-details";
import { frContentDetails, findFrContentDetail } from "@/data/fr-content-details";
import { esContentDetails, findEsContentDetail } from "@/data/es-content-details";
import { jaContentDetails, findJaContentDetail } from "@/data/ja-content-details";
import { koContentDetails, findKoContentDetail } from "@/data/ko-content-details";
import { localizedUi, type ForeignLocale } from "@/data/i18n";
import { siteConfig } from "@/data/site-config";

const parentCopy: Record<
  EnglishContentParent,
  {
    label: string;
    overview: string;
    method: string;
    ctaTitle: string;
    ctaText: string;
  }
> = {
  about: {
    label: "About the center",
    overview: "A closer look at the center",
    method: "What this means in practice",
    ctaTitle: "Would you like to know more about the Language Center?",
    ctaText: "Contact us about courses, visits, educational exchange or a specific partnership idea.",
  },
  programs: {
    label: "Programs and training",
    overview: "A program built around the outcome",
    method: "How the learning path is designed",
    ctaTitle: "Turn a learning goal into a workable plan",
    ctaText: "Share the current level, intended outcome and available schedule so we can recommend a realistic direction.",
  },
  practice: {
    label: "Learning in practice",
    overview: "Language becomes stronger through use",
    method: "How participation supports learning",
    ctaTitle: "Interested in a current activity or practice project?",
    ctaText: "Ask about participants, themes and current arrangements, or discuss a dedicated activity for a campus or group.",
  },
  faculty: {
    label: "Faculty and teaching",
    overview: "Teaching quality is a team practice",
    method: "How the team supports consistency",
    ctaTitle: "Ask about courses and teaching arrangements",
    ctaText: "Tell us the language and learning goal, and we can explain the relevant course direction and teaching plan.",
  },
  research: {
    label: "Teaching and research",
    overview: "Research that stays close to the classroom",
    method: "How experience becomes a shared method",
    ctaTitle: "Explore teaching research and professional exchange",
    ctaText: "We welcome conversations about curriculum, faculty learning and evidence-informed language teaching.",
  },
  resources: {
    label: "Learning resources",
    overview: "Support for decisions and independent study",
    method: "How to use this support well",
    ctaTitle: "Need a more specific learning suggestion?",
    ctaText: "If you are unsure how to choose a course or organize practice, contact the center for a clearer next step.",
  },
  collaboration: {
    label: "Collaboration",
    overview: "Begin with participants and a real need",
    method: "How a partnership moves forward",
    ctaTitle: "Have a language-education project in mind?",
    ctaText: "Tell us who is involved, what the project should solve and the preferred timeline.",
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  const visibleDetails = <T extends { slug: string }>(items: T[]) =>
    items.filter((item) => item.slug !== "downloads");

  return [
    ...visibleDetails(englishContentDetails).map((d) => ({ locale: "en", section: d.parent, slug: d.slug })),
    ...visibleDetails(frContentDetails).map((d) => ({ locale: "fr", section: d.parent, slug: d.slug })),
    ...visibleDetails(esContentDetails).map((d) => ({ locale: "es", section: d.parent, slug: d.slug })),
    ...visibleDetails(jaContentDetails).map((d) => ({ locale: "ja", section: d.parent, slug: d.slug })),
    ...visibleDetails(koContentDetails).map((d) => ({ locale: "ko", section: d.parent, slug: d.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; section: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, section, slug } = await params;
  const detail =
    locale === "en" ? findEnglishContentDetail(section, slug)
    : locale === "fr" ? findFrContentDetail(section, slug)
    : locale === "es" ? findEsContentDetail(section, slug)
    : locale === "ja" ? findJaContentDetail(section, slug)
    : locale === "ko" ? findKoContentDetail(section, slug)
    : undefined;
  if (!detail) return {};
  if (detail.slug === "downloads") return {};

  const canonical = `${siteConfig.url}/${locale}/${section}/${slug}/`;
  const chinese = `${siteConfig.url}/${section}/${slug}/`;

  return {
    title: { absolute: `${detail.title} | Language Center · ZUFE` },
    description: detail.summary,
    keywords: siteConfig.keywords,
    alternates: {
      canonical,
      languages: {
        "zh-CN": chinese,
        en: `${siteConfig.url}/en/${section}/${slug}/`,
        fr: `${siteConfig.url}/fr/${section}/${slug}/`,
        es: `${siteConfig.url}/es/${section}/${slug}/`,
        ja: `${siteConfig.url}/ja/${section}/${slug}/`,
        ko: `${siteConfig.url}/ko/${section}/${slug}/`,
        "x-default": chinese,
      },
    },
    openGraph: {
      type: "website",
      locale,
      url: canonical,
      siteName: "Language Center · ZUFE",
      title: detail.title,
      description: detail.summary,
      images: [{ url: detail.heroImage, alt: detail.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: detail.title,
      description: detail.summary,
      images: [detail.heroImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function EnglishContentDetailPage({
  params,
}: {
  params: Promise<{ locale: string; section: string; slug: string }>;
}) {
  const { locale, section, slug } = await params;
  const detail =
    locale === "en" ? findEnglishContentDetail(section, slug)
    : locale === "fr" ? findFrContentDetail(section, slug)
    : locale === "es" ? findEsContentDetail(section, slug)
    : locale === "ja" ? findJaContentDetail(section, slug)
    : locale === "ko" ? findKoContentDetail(section, slug)
    : undefined;
  if (!detail) notFound();
  if (detail.slug === "downloads") notFound();

  const context = parentCopy[detail.parent];
  const ui = localizedUi[locale as ForeignLocale];

  return (
    <>
      <section className="relative min-h-[520px] overflow-hidden bg-[#071f3e] text-white">
        <Image
          src={detail.heroImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071f3e]/95 via-[#071f3e]/76 to-[#071f3e]/30" />
        <div className="shell relative flex min-h-[520px] items-end py-16">
          <div className="max-w-3xl">
            <Link
              href={`/${locale}/${detail.parent}`}
              className="text-xs font-semibold tracking-[0.14em] text-[#ead7ad]"
            >
              ← {ui.backTo} {context.label}
            </Link>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
              {context.label}
            </p>
            <h1 className="mt-4 font-serif text-5xl font-semibold tracking-tight sm:text-6xl">
              {detail.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/76">
              {detail.summary}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-14 lg:grid-cols-[0.76fr_1.24fr]">
          <div>
            <span className="eyebrow">{ui.atAGlance}</span>
            <h2 className="section-title">{context.overview}</h2>
          </div>
          <div className="grid gap-px bg-slate-200 sm:grid-cols-3">
            {detail.points.map((point, index) => (
              <article key={point} className="min-h-56 bg-white p-7">
                <span className="font-serif text-sm text-[#c99b48]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-7 text-sm leading-8 text-slate-600">{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#edf2f6] py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <span className="eyebrow">{ui.inPractice}</span>
            <h2 className="section-title">{context.method}</h2>
            <p className="section-copy">
              {ui.practiceBody}
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-600">
              {ui.enrolmentNote}
            </p>
          </div>
          {detail.image ? (
            <div className="relative min-h-[440px] overflow-hidden bg-[#0b2f5b]">
              <Image
                src={detail.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          ) : (
            <div className="min-h-[360px] bg-[#0b2f5b]" />
          )}
        </div>
      </section>

      <section className="bg-[#c99b48] py-16">
        <div className="shell flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#071f3e]/55">
              {ui.nextStep}
            </p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-semibold text-[#071f3e]">
              {context.ctaTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#071f3e]/68">
              {context.ctaText}
            </p>
          </div>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex w-fit shrink-0 bg-[#071f3e] px-7 py-4 text-sm font-semibold text-white"
          >
            {ui.contactCenter} →
          </Link>
        </div>
      </section>
    </>
  );
}
