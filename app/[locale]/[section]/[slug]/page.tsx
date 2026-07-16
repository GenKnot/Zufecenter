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

const frenchFacultySectionCopy: Record<
  ForeignLocale,
  {
    eyebrow: string;
    title: string;
    intro: string;
    teachers: {
      name: string;
      role: string;
      summary: string;
      credential: string;
      focus: string;
    }[];
  }
> = {
  en: {
    eyebrow: "Faculty Members",
    title: "French Faculty",
    intro:
      "The French teaching team brings together course leads, level instructors and examination-support teachers across French progression, assessment preparation, business French and intercultural communication.",
    teachers: [
      { name: "Claire Lin", role: "French Program Lead / International Assessment Project Lead", summary: "Trained in French language studies with a strong background in French linguistics and university-level teaching.", credential: "Holds professional FLE training credentials in French as a foreign language education.", focus: "Focuses on international French certification preparation, business French training and cross-cultural communication." },
      { name: "Marc Zhou", role: "French Level Progression Lead", summary: "Works across A1 to B2 course planning and classroom delivery, with attention to pronunciation, grammar and expression.", credential: "Experienced in French curriculum development and staged assessment design.", focus: "Connects pronunciation, grammar, listening, speaking, reading and writing with usable classroom tasks." },
      { name: "Camille Gu", role: "French Culture and Exam Support Instructor", summary: "Connects French-language learning with cultural topics, study preparation and applied communication.", credential: "Experienced in examination support, themed workshops and cultural learning activities.", focus: "Supports DELF preparation, cultural topics, spoken practice and learner feedback." },
    ],
  },
  fr: {
    eyebrow: "Nos Enseignants",
    title: "Équipe enseignante",
    intro:
      "L'équipe de français réunit des responsables de programme, des enseignants par niveau et des enseignants chargés de la préparation aux examens, du français professionnel et de la communication interculturelle.",
    teachers: [
      { name: "Claire Lin", role: "Responsable pédagogique de français / Projet d'évaluation internationale", summary: "Formée en études françaises, avec une solide base en linguistique française et une expérience de l'enseignement universitaire.", credential: "Dispose d'une qualification professionnelle FLE pour l'enseignement du français langue étrangère.", focus: "Suit la préparation aux certifications internationales, le français professionnel et la communication interculturelle." },
      { name: "Marc Zhou", role: "Responsable des cours par niveau", summary: "Intervient dans la conception et l'enseignement des niveaux A1 à B2, avec une attention particulière à la prononciation, la grammaire et l'expression.", credential: "Expérience en développement curriculaire et conception d'évaluations par étapes.", focus: "Relie prononciation, grammaire, compréhension et expression à des tâches de classe utilisables." },
      { name: "Camille Gu", role: "Culture française et préparation aux examens", summary: "Relie l'apprentissage du français aux sujets culturels, à la préparation aux études et à la communication appliquée.", credential: "Expérience en préparation aux examens, ateliers thématiques et activités culturelles.", focus: "Accompagne la préparation DELF, les sujets culturels, l'oral et les retours d'apprentissage." },
    ],
  },
  ja: {
    eyebrow: "講師陣",
    title: "フランス語講師チーム",
    intro:
      "フランス語チームは、コース責任者、レベル別担当講師、試験対策担当講師で構成され、段階学習、国際評価対策、ビジネスフランス語、異文化交流を支えています。",
    teachers: [
      { name: "Claire Lin", role: "フランス語教育主管 / 国際評価プロジェクト担当", summary: "フランス語学を専門とし、フランス語言語学と大学での教育経験を備えています。", credential: "対外フランス語教育 FLE の専門的な研修・資格を有します。", focus: "国際フランス語資格対策、ビジネスフランス語、異文化コミュニケーションを担当します。" },
      { name: "Marc Zhou", role: "フランス語レベル別コース責任者", summary: "A1からB2までの授業設計と指導に関わり、発音、文法、表現の段階的な成長を支えます。", credential: "カリキュラム開発と段階評価設計の経験があります。", focus: "発音、文法、聞く・話す・読む・書く力を実用的な課題と結びつけます。" },
      { name: "Camille Gu", role: "フランス文化・試験対策担当", summary: "フランス語学習を文化理解、留学準備、応用的なコミュニケーションと結びつけます。", credential: "試験対策、テーマ型ワークショップ、文化活動の経験があります。", focus: "DELF対策、文化テーマ、口頭表現、学習フィードバックを支援します。" },
    ],
  },
  ko: {
    eyebrow: "강사진",
    title: "프랑스어 교수진",
    intro:
      "프랑스어 팀은 과정 책임자, 단계별 담당 강사, 시험 지원 강사로 구성되며 단계별 학습, 국제 평가 준비, 비즈니스 프랑스어, 문화 간 소통을 지원합니다.",
    teachers: [
      { name: "Claire Lin", role: "프랑스어 교육 책임자 / 국제 평가 프로젝트 담당", summary: "프랑스어 전공 배경과 프랑스어 언어학 기반, 대학 프랑스어 교육 경험을 갖추고 있습니다.", credential: "외국어로서의 프랑스어 교육 FLE 전문 자격을 보유합니다.", focus: "국제 프랑스어 인증 준비, 비즈니스 프랑스어, 다문화 커뮤니케이션을 담당합니다." },
      { name: "Marc Zhou", role: "프랑스어 단계별 과정 책임자", summary: "A1부터 B2까지의 과정 설계와 수업을 담당하며 발음, 문법, 표현의 단계적 성장을 지원합니다.", credential: "교육과정 개발과 단계 평가 설계 경험이 있습니다.", focus: "발음, 문법, 듣기·말하기·읽기·쓰기를 실제 과제와 연결합니다." },
      { name: "Camille Gu", role: "프랑스 문화 및 시험 지원 강사", summary: "프랑스어 학습을 문화 이해, 유학 준비, 실제 의사소통과 연결합니다.", credential: "시험 준비, 주제형 워크숍, 문화 활동 운영 경험이 있습니다.", focus: "DELF 준비, 문화 주제, 말하기 연습, 학습 피드백을 지원합니다." },
    ],
  },
  es: {
    eyebrow: "Docentes",
    title: "Equipo docente de francés",
    intro:
      "El equipo de francés reúne responsables de curso, docentes por nivel y profesores de apoyo para exámenes, francés profesional y comunicación intercultural.",
    teachers: [
      { name: "Claire Lin", role: "Responsable de francés / Proyecto de evaluación internacional", summary: "Formación en estudios franceses, con base en lingüística francesa y experiencia docente universitaria.", credential: "Cuenta con credenciales profesionales FLE para la enseñanza del francés como lengua extranjera.", focus: "Se centra en certificaciones internacionales, francés de negocios y comunicación intercultural." },
      { name: "Marc Zhou", role: "Responsable de progresión por niveles", summary: "Participa en la planificación y enseñanza de A1 a B2, con atención a pronunciación, gramática y expresión.", credential: "Experiencia en desarrollo curricular y diseño de evaluaciones por etapas.", focus: "Conecta pronunciación, gramática, comprensión y expresión con tareas utilizables en clase." },
      { name: "Camille Gu", role: "Cultura francesa y apoyo para exámenes", summary: "Relaciona el aprendizaje del francés con cultura, preparación académica y comunicación aplicada.", credential: "Experiencia en apoyo para exámenes, talleres temáticos y actividades culturales.", focus: "Apoya DELF, temas culturales, práctica oral y retroalimentación del aprendizaje." },
    ],
  },
};

function LocalizedFrenchFacultyTeachers({ locale }: { locale: ForeignLocale }) {
  const copy = frenchFacultySectionCopy[locale];

  return (
    <section className="bg-[#f7f5f0] py-24">
      <div className="shell">
        <div className="mb-12 max-w-3xl">
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 className="section-title">{copy.title}</h2>
          <p className="section-copy">{copy.intro}</p>
        </div>
        <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 lg:grid-cols-3">
          {copy.teachers.map((teacher) => (
            <article key={teacher.name} className="min-h-[420px] bg-white p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#174f8f]">
                {teacher.role}
              </p>
              <h3 className="mt-4 font-serif text-3xl font-semibold text-[#11233e]">
                {teacher.name}
              </h3>
              <div className="mt-7 space-y-5 text-sm leading-8 text-slate-600">
                <p>{teacher.summary}</p>
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

      {detail.parent === "faculty" && detail.slug === "french" && (
        <LocalizedFrenchFacultyTeachers locale={locale as ForeignLocale} />
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
