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
import { localizedFacultyProfiles } from "@/data/faculty-profiles";
import { WuXinProfile } from "@/components/WuXinProfile";
import { localizedLandings, localizedUi, type ForeignLocale } from "@/data/i18n";
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

const leadershipContextCopy: Record<ForeignLocale, (typeof parentCopy)["about"]> = {
  en: parentCopy.about,
  fr: { label: "À propos du centre", overview: "Découvrir la direction du centre", method: "Une direction tournée vers la pratique", ctaTitle: "Échanger avec le Centre de langues", ctaText: "Contactez-nous au sujet des cours, des visites, des échanges pédagogiques ou d'un projet de coopération." },
  es: { label: "Sobre el centro", overview: "Conozca la dirección del centro", method: "Liderazgo conectado con la práctica", ctaTitle: "Hable con el Centro de Idiomas", ctaText: "Contáctenos sobre cursos, visitas, intercambio educativo o una propuesta concreta de colaboración." },
  ja: { label: "センターについて", overview: "センター長について", method: "実践につながるリーダーシップ", ctaTitle: "語学センターへのお問い合わせ", ctaText: "授業、訪問、教育交流、具体的な連携プロジェクトについてご相談ください。" },
  ko: { label: "센터 소개", overview: "센터 리더십 알아보기", method: "실무와 연결되는 리더십", ctaTitle: "언어센터에 문의하세요", ctaText: "수업, 방문, 교육 교류 또는 구체적인 협력 프로젝트에 대해 문의해 주세요." },
};

const localizedParentLabels: Record<Exclude<ForeignLocale, "en">, Record<EnglishContentParent, string>> = {
  fr: { about: "À propos du centre", programs: "Programmes et formations", practice: "Apprentissage en pratique", faculty: "Équipe pédagogique", research: "Enseignement et recherche", resources: "Ressources d'apprentissage", collaboration: "Collaboration" },
  es: { about: "Sobre el centro", programs: "Programas y formación", practice: "Aprendizaje en la práctica", faculty: "Equipo docente", research: "Docencia e investigación", resources: "Recursos de aprendizaje", collaboration: "Colaboración" },
  ja: { about: "センター紹介", programs: "プログラム・研修", practice: "実践学習", faculty: "講師・教育", research: "教育研究", resources: "学習リソース", collaboration: "連携・交流" },
  ko: { about: "센터 소개", programs: "프로그램·연수", practice: "실천 학습", faculty: "강사진·교육", research: "교육 연구", resources: "학습 자료", collaboration: "협력·교류" },
};

const localizedGenericContext: Record<Exclude<ForeignLocale, "en">, Omit<(typeof parentCopy)["about"], "label">> = {
  fr: { overview: "Comprendre ce parcours", method: "Comment cela fonctionne en pratique", ctaTitle: "Construisons votre prochaine étape", ctaText: "Indiquez-nous votre niveau, votre objectif et vos disponibilités afin que nous puissions vous proposer une orientation réaliste." },
  es: { overview: "Conozca esta propuesta", method: "Cómo funciona en la práctica", ctaTitle: "Construyamos su siguiente paso", ctaText: "Cuéntenos su nivel, objetivo y disponibilidad para que podamos recomendarle una dirección realista." },
  ja: { overview: "この取り組みについて", method: "実践での進め方", ctaTitle: "次の学習ステップを一緒に考えましょう", ctaText: "現在のレベル、目標、受講可能な時間をお知らせください。無理のない学習方向をご提案します。" },
  ko: { overview: "이 과정 알아보기", method: "실제 운영 방식", ctaTitle: "다음 학습 단계를 함께 설계하세요", ctaText: "현재 수준, 목표, 가능한 시간을 알려 주시면 현실적인 학습 방향을 안내해 드립니다." },
};

const frenchFacultySectionCopy: Record<
  ForeignLocale,
  {
    eyebrow: string;
    title: string;
    intro: string;
  }
> = {
  en: {
    eyebrow: "Faculty Members",
    title: "French Faculty",
    intro:
      "The French teaching team brings together course leads, level instructors and examination-support teachers across French progression, assessment preparation, business French and intercultural communication.",
  },
  fr: {
    eyebrow: "Nos Enseignants",
    title: "Équipe enseignante",
    intro:
      "L'équipe de français réunit des responsables de programme, des enseignants par niveau et des enseignants chargés de la préparation aux examens, du français professionnel et de la communication interculturelle.",
  },
  ja: {
    eyebrow: "講師陣",
    title: "フランス語講師チーム",
    intro:
      "フランス語チームは、コース責任者、レベル別担当講師、試験対策担当講師で構成され、段階学習、国際評価対策、ビジネスフランス語、異文化交流を支えています。",
  },
  ko: {
    eyebrow: "강사진",
    title: "프랑스어 교수진",
    intro:
      "프랑스어 팀은 과정 책임자, 단계별 담당 강사, 시험 지원 강사로 구성되며 단계별 학습, 국제 평가 준비, 비즈니스 프랑스어, 문화 간 소통을 지원합니다.",
  },
  es: {
    eyebrow: "Docentes",
    title: "Equipo docente de francés",
    intro:
      "El equipo de francés reúne responsables de curso, docentes por nivel y profesores de apoyo para exámenes, francés profesional y comunicación intercultural.",
  },
};

function LocalizedFrenchFacultyTeachers({ locale }: { locale: ForeignLocale }) {
  const copy = frenchFacultySectionCopy[locale];
  const teachers = localizedFacultyProfiles[locale];

  return (
    <section className="bg-[#f7f5f0] py-24">
      <div className="shell">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 className="section-title">{copy.title}</h2>
          <p className="section-copy">{copy.intro}</p>
        </div>
        <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 lg:grid-cols-2">
          {teachers.map((teacher) => (
            <article key={teacher.name} className="min-h-[420px] bg-white p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#174f8f]">
                {teacher.role}
              </p>
              <h3 className="mt-4 font-serif text-3xl font-semibold text-[#11233e]">
                {teacher.name}
              </h3>
              <div className="mt-7 space-y-5 text-sm leading-8 text-slate-600">
                <p>{teacher.bio}</p>
                <p>{teacher.credential}</p>
                <p>{teacher.focus}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

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
  const localizedSiteName = localizedLandings[locale as ForeignLocale].siteName;

  const canonical = `${siteConfig.url}/${locale}/${section}/${slug}/`;
  const chinese = `${siteConfig.url}/${section}/${slug}/`;

  return {
    title: { absolute: `${detail.title} | ${localizedSiteName}` },
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
      siteName: localizedSiteName,
      title: detail.title,
      description: detail.summary,
      images: [{ url: siteConfig.ogImage, alt: detail.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: detail.title,
      description: detail.summary,
      images: [siteConfig.ogImage],
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

  const foreignLocale = locale as ForeignLocale;
  const context = detail.parent === "about" && detail.slug === "leadership"
    ? leadershipContextCopy[foreignLocale]
    : foreignLocale === "en"
      ? parentCopy[detail.parent]
      : {
          label: localizedParentLabels[foreignLocale][detail.parent],
          ...localizedGenericContext[foreignLocale],
        };
  const ui = localizedUi[locale as ForeignLocale];

  return (
    <>
      <section className="relative min-h-[520px] overflow-hidden bg-[#071f3e] text-white">
        <Image
          src={detail.heroImage}
          alt=""
          fill
          priority
          className={
            detail.parent === "about" && detail.slug === "leadership"
              ? "object-cover object-[58%_center] sm:object-[center_18%]"
              : "object-cover"
          }
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

      {detail.parent === "faculty" && detail.slug === "french" && (
        <LocalizedFrenchFacultyTeachers locale={locale as ForeignLocale} />
      )}

      {detail.parent === "about" && detail.slug === "leadership" && (
        <WuXinProfile locale={locale as ForeignLocale} />
      )}

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
