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
import { localizedFacultyProfiles } from "@/data/faculty-profiles";
import { localizedLandings, localizedUi, type ForeignLocale } from "@/data/i18n";
import { siteConfig } from "@/data/site-config";

const facultyShowcaseCopy: Record<
  ForeignLocale,
  { eyebrow: string; title: string; intro: string }
> = {
  en: {
    eyebrow: "Faculty members",
    title: "Representative Teachers",
    intro:
      "The four faculty profiles currently presented here are members of the French teaching team, with strengths in staged learning, assessment, professional French, academic language and intercultural communication.",
  },
  fr: {
    eyebrow: "Équipe enseignante",
    title: "Enseignants représentatifs",
    intro:
      "Les quatre profils présentés ici appartiennent à l'équipe de français et couvrent la progression par niveau, l'évaluation, le français professionnel, les langues académiques et la communication interculturelle.",
  },
  ja: {
    eyebrow: "講師陣",
    title: "代表講師",
    intro:
      "現在公開している4名はフランス語チームの講師で、段階別学習、評価、専門フランス語、学術言語、異文化コミュニケーションを担当しています。",
  },
  ko: {
    eyebrow: "강사진",
    title: "대표 강사",
    intro:
      "현재 공개된 네 명의 강사는 프랑스어 팀 소속으로 단계별 학습, 평가, 전문 프랑스어, 학술 언어, 문화 간 소통 분야를 담당합니다.",
  },
  es: {
    eyebrow: "Equipo docente",
    title: "Docentes representativos",
    intro:
      "Los cuatro perfiles publicados pertenecen al equipo de francés y abarcan la progresión por niveles, la evaluación, el francés profesional, el lenguaje académico y la comunicación intercultural.",
  },
};

const contactInfoCopy: Record<
  ForeignLocale,
  {
    eyebrow: string;
    title: string;
    phone: string;
    email: string;
    wechat: string;
    address: string;
    hours: string;
  }
> = {
  en: {
    eyebrow: "Contact details",
    title: "Reach the Language Center",
    phone: "Course consultation hotline",
    email: "Email",
    wechat: "WeChat consultation",
    address: "Address",
    hours: "Consultation hours",
  },
  fr: {
    eyebrow: "Coordonnées",
    title: "Contacter le Centre de langues",
    phone: "Téléphone de consultation",
    email: "E-mail",
    wechat: "Consultation WeChat",
    address: "Adresse",
    hours: "Horaires de consultation",
  },
  ja: {
    eyebrow: "お問い合わせ情報",
    title: "語学センターへの連絡",
    phone: "コース相談電話",
    email: "メール",
    wechat: "WeChat相談",
    address: "住所",
    hours: "相談時間",
  },
  ko: {
    eyebrow: "연락 정보",
    title: "언어센터 문의",
    phone: "과정 상담 전화",
    email: "이메일",
    wechat: "WeChat 상담",
    address: "주소",
    hours: "상담 시간",
  },
  es: {
    eyebrow: "Datos de contacto",
    title: "Contactar con el Centro de Idiomas",
    phone: "Teléfono de consulta",
    email: "Correo electrónico",
    wechat: "Consulta por WeChat",
    address: "Dirección",
    hours: "Horario de consulta",
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
  const localizedSiteName = localizedLandings[locale as ForeignLocale].siteName;

  const canonical = `${siteConfig.url}/${locale}/${section.slug}/`;
  const chinesePath =
    section.slug === "contact"
      ? "/contact/"
      : section.slug === "languages"
        ? "/languages/"
        : `/${section.slug}/`;

  return {
    title: { absolute: `${section.title} | ${localizedSiteName}` },
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
      siteName: localizedSiteName,
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
  const facultyProfiles = localizedFacultyProfiles[locale as ForeignLocale];
  const contactCopy = contactInfoCopy[locale as ForeignLocale];

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
            <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2">
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

      {section.slug === "contact" && (
        <section className="py-24">
          <div className="shell">
            <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <span className="eyebrow">{contactCopy.eyebrow}</span>
                <h2 className="section-title">{contactCopy.title}</h2>
              </div>
              <p className="max-w-2xl text-sm leading-8 text-slate-600 lg:justify-self-end">
                {section.description}
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
              <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
                <article className="bg-white p-8 sm:p-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#174f8f]">
                    {contactCopy.phone}
                  </p>
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="mt-5 block font-serif text-3xl font-semibold text-[#11233e] transition hover:text-[#174f8f]"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {siteConfig.contact.hours}
                  </p>
                </article>
                <article className="bg-white p-8 sm:p-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#174f8f]">
                    {contactCopy.email}
                  </p>
                  <a
                    href={siteConfig.contact.emailHref}
                    className="mt-5 block break-words text-lg font-semibold text-[#11233e] transition hover:text-[#174f8f]"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {siteConfig.contact.locationName}
                  </p>
                </article>
                <article className="bg-white p-8 sm:col-span-2 sm:p-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#174f8f]">
                    {contactCopy.address}
                  </p>
                  <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-600">
                    {siteConfig.contact.address}
                  </p>
                </article>
              </div>

              {siteConfig.contact.wechatQrImage && (
                <aside className="bg-[#edf2f6] p-8 text-center sm:p-10 lg:self-stretch">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#174f8f]">
                    {contactCopy.wechat}
                  </p>
                  <div className="mt-6 inline-block bg-white p-4 shadow-sm">
                    <Image
                      src={siteConfig.contact.wechatQrImage}
                      alt={contactCopy.wechat}
                      width={220}
                      height={300}
                      className="h-auto w-full max-w-[220px]"
                    />
                  </div>
                  <p className="mx-auto mt-5 max-w-[220px] text-xs leading-6 text-slate-500">
                    {contactCopy.phone}
                  </p>
                </aside>
              )}
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
