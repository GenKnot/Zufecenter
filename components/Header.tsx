"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Brand } from "./Brand";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { navigation, type NavItem } from "@/data/navigation";
import {
  localeFromPathname,
  localeHome,
  localizedHref,
  localizedLandings,
  type ForeignLocale,
} from "@/data/i18n";

type NavChild = NonNullable<NavItem["children"]>[number];

const localizedNavSupplements: Record<
  ForeignLocale,
  {
    home: string;
    menuLabel: string;
    dynamicResources: string;
    aboutLeadership: NavChild;
    aboutOrganization: NavChild;
    programYoungLearners: NavChild;
    programWorkshops: NavChild;
    practiceCompetitions: NavChild;
    facultyResearch: NavChild;
    news: NavChild;
    studyGuides: NavChild;
    collaboration: NavChild;
    contact: NavChild;
  }
> = {
  en: {
    home: "Home",
    menuLabel: "Open navigation menu",
    dynamicResources: "News & Resources",
    aboutLeadership: { label: "Center leadership", href: "/about/leadership", description: "Professor Wu Xin, Dean of the center" },
    aboutOrganization: { label: "Organization", href: "/about/organization", description: "Teaching, research and learner support" },
    programYoungLearners: { label: "Young learners", href: "/programs/young-learners", description: "Interest, confidence and long-term growth" },
    programWorkshops: { label: "Short workshops", href: "/programs/workshops", description: "Focused modules for specific needs" },
    practiceCompetitions: { label: "Competitions and showcases", href: "/practice/competitions", description: "Speaking, writing and learner presentation" },
    facultyResearch: { label: "Teaching research", href: "/research", description: "Curriculum development and faculty growth" },
    news: { label: "News", href: "/news", description: "Courses, events and center updates" },
    studyGuides: { label: "Study guides", href: "/resources/study-guides", description: "Methods, planning and common questions" },
    collaboration: { label: "Collaboration", href: "/collaboration", description: "Campus, enterprise and international projects" },
    contact: { label: "Contact", href: "/contact", description: "Course enquiries and partnership contact" },
  },
  fr: {
    home: "Accueil",
    menuLabel: "Ouvrir le menu de navigation",
    dynamicResources: "Actualités et ressources",
    aboutLeadership: { label: "Direction du centre", href: "/about/leadership", description: "Le professeur Wu Xin, doyen du centre" },
    aboutOrganization: { label: "Organisation", href: "/about/organization", description: "Enseignement, recherche et accompagnement" },
    programYoungLearners: { label: "Jeunes apprenants", href: "/programs/young-learners", description: "Intérêt, confiance et progression durable" },
    programWorkshops: { label: "Ateliers courts", href: "/programs/workshops", description: "Modules ciblés selon les besoins" },
    practiceCompetitions: { label: "Concours et présentations", href: "/practice/competitions", description: "Expression orale, écrite et valorisation" },
    facultyResearch: { label: "Recherche pédagogique", href: "/research", description: "Programmes, méthodes et développement enseignant" },
    news: { label: "Actualités", href: "/news", description: "Cours, activités et nouvelles du centre" },
    studyGuides: { label: "Guides d'étude", href: "/resources/study-guides", description: "Méthodes, organisation et questions fréquentes" },
    collaboration: { label: "Collaboration", href: "/collaboration", description: "Campus, entreprises et échanges internationaux" },
    contact: { label: "Contact", href: "/contact", description: "Conseil cours et partenariats" },
  },
  ja: {
    home: "ホーム",
    menuLabel: "ナビゲーションメニューを開く",
    dynamicResources: "ニュース・資料",
    aboutLeadership: { label: "センター長", href: "/about/leadership", description: "センター長 武鑫教授" },
    aboutOrganization: { label: "組織体制", href: "/about/organization", description: "教育、研究、学習支援の体制" },
    programYoungLearners: { label: "青少年向け", href: "/programs/young-learners", description: "興味、自信、長期的な成長" },
    programWorkshops: { label: "短期ワークショップ", href: "/programs/workshops", description: "目的別の集中モジュール" },
    practiceCompetitions: { label: "発表・コンテスト", href: "/practice/competitions", description: "スピーチ、作文、学習成果発表" },
    facultyResearch: { label: "教育研究", href: "/research", description: "カリキュラム開発と教員成長" },
    news: { label: "ニュース", href: "/news", description: "講座、活動、センターのお知らせ" },
    studyGuides: { label: "学習ガイド", href: "/resources/study-guides", description: "方法、計画、よくある質問" },
    collaboration: { label: "連携交流", href: "/collaboration", description: "大学、企業、国際交流プロジェクト" },
    contact: { label: "お問い合わせ", href: "/contact", description: "講座相談と連携相談" },
  },
  ko: {
    home: "홈",
    menuLabel: "탐색 메뉴 열기",
    dynamicResources: "뉴스·자료",
    aboutLeadership: { label: "센터 원장", href: "/about/leadership", description: "센터 원장 우신 교수" },
    aboutOrganization: { label: "조직 구조", href: "/about/organization", description: "교육, 연구, 학습 지원 체계" },
    programYoungLearners: { label: "청소년 성장", href: "/programs/young-learners", description: "흥미, 자신감, 장기 성장" },
    programWorkshops: { label: "단기 워크숍", href: "/programs/workshops", description: "목적별 집중 모듈" },
    practiceCompetitions: { label: "대회와 발표", href: "/practice/competitions", description: "말하기, 쓰기, 학습 성과 발표" },
    facultyResearch: { label: "교육 연구", href: "/research", description: "과정 개발과 교원 성장" },
    news: { label: "뉴스", href: "/news", description: "강좌, 활동, 센터 소식" },
    studyGuides: { label: "학습 가이드", href: "/resources/study-guides", description: "방법, 계획, 자주 묻는 질문" },
    collaboration: { label: "협력 교류", href: "/collaboration", description: "대학, 기업, 국제 교류 프로젝트" },
    contact: { label: "문의하기", href: "/contact", description: "강좌 상담과 협력 문의" },
  },
  es: {
    home: "Inicio",
    menuLabel: "Abrir el menú de navegación",
    dynamicResources: "Noticias y recursos",
    aboutLeadership: { label: "Dirección del centro", href: "/about/leadership", description: "El profesor Wu Xin, director del centro" },
    aboutOrganization: { label: "Organización", href: "/about/organization", description: "Docencia, investigación y apoyo al aprendizaje" },
    programYoungLearners: { label: "Jóvenes estudiantes", href: "/programs/young-learners", description: "Interés, confianza y crecimiento a largo plazo" },
    programWorkshops: { label: "Talleres breves", href: "/programs/workshops", description: "Módulos enfocados para necesidades específicas" },
    practiceCompetitions: { label: "Concursos y muestras", href: "/practice/competitions", description: "Oratoria, escritura y presentación de logros" },
    facultyResearch: { label: "Investigación docente", href: "/research", description: "Currículo, métodos y desarrollo docente" },
    news: { label: "Noticias", href: "/news", description: "Cursos, actividades y novedades del centro" },
    studyGuides: { label: "Guías de estudio", href: "/resources/study-guides", description: "Métodos, planificación y preguntas frecuentes" },
    collaboration: { label: "Colaboración", href: "/collaboration", description: "Campus, empresas e intercambio internacional" },
    contact: { label: "Contacto", href: "/contact", description: "Consulta de cursos y cooperación" },
  },
};

function childOrFallback(
  item: NavItem | undefined,
  href: string,
  fallback: NavChild,
) {
  return item?.children?.find((child) => child.href === href) ?? fallback;
}

function buildLocalizedNavigation(locale: ForeignLocale, nav: NavItem[]): NavItem[] {
  const labels = localizedNavSupplements[locale];
  const about = nav.find((item) => item.href === "/about");
  const languages = nav.find((item) => item.href === "/languages");
  const programs = nav.find((item) => item.href === "/programs");
  const practice = nav.find((item) => item.href === "/practice");
  const faculty = nav.find((item) => item.href === "/faculty");

  return [
    { label: labels.home, href: "/" },
    {
      label: about?.label ?? "About",
      href: "/about",
      children: [
        childOrFallback(about, "/about", { label: about?.label ?? "About", href: "/about" }),
        labels.aboutLeadership,
        childOrFallback(about, "/about/history", { label: "History", href: "/about/history" }),
        childOrFallback(about, "/about/approach", { label: "Approach", href: "/about/approach" }),
        labels.aboutOrganization,
        childOrFallback(about, "/about/facilities", { label: "Facilities", href: "/about/facilities" }),
      ],
    },
    languages ?? { label: "Courses", href: "/languages" },
    {
      label: programs?.label ?? "Programs",
      href: "/programs",
      children: [
        childOrFallback(programs, "/programs/general", { label: "General ability", href: "/programs/general" }),
        childOrFallback(programs, "/programs/exam-preparation", { label: "Exams and study", href: "/programs/exam-preparation" }),
        childOrFallback(programs, "/programs/business", { label: "Business and careers", href: "/programs/business" }),
        labels.programYoungLearners,
        childOrFallback(programs, "/programs/corporate", { label: "Corporate training", href: "/programs/corporate" }),
        labels.programWorkshops,
      ],
    },
    {
      label: practice?.label ?? "Learning",
      href: "/practice",
      children: [
        childOrFallback(practice, "/practice/tutoring", { label: "Tutoring", href: "/practice/tutoring" }),
        childOrFallback(practice, "/practice/language-clubs", { label: "Language clubs", href: "/practice/language-clubs" }),
        childOrFallback(practice, "/practice/cultural-events", { label: "Cultural experiences", href: "/practice/cultural-events" }),
        labels.practiceCompetitions,
        childOrFallback(practice, "/practice/study-tours", { label: "Study visits", href: "/practice/study-tours" }),
      ],
    },
    {
      label: faculty?.label ?? "Faculty",
      href: "/faculty",
      children: [
        childOrFallback(faculty, "/faculty/english", { label: "English team", href: "/faculty/english" }),
        childOrFallback(faculty, "/faculty/french", { label: "French team", href: "/faculty/french" }),
        childOrFallback(faculty, "/faculty/japanese", { label: "Japanese team", href: "/faculty/japanese" }),
        childOrFallback(faculty, "/faculty/korean", { label: "Korean team", href: "/faculty/korean" }),
        labels.facultyResearch,
      ],
    },
    {
      label: labels.dynamicResources,
      href: "/news",
      children: [
        labels.news,
        labels.studyGuides,
        labels.collaboration,
        labels.contact,
      ],
    },
  ];
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const localized = locale === "zh" ? null : localizedLandings[locale as ForeignLocale];
  const navItems: NavItem[] = localized
    ? buildLocalizedNavigation(locale as ForeignLocale, localized.nav)
    : navigation;

  useEffect(() => {
    document.documentElement.lang =
      locale === "zh" ? "zh-CN" : locale;
  }, [locale]);

  // 当前所在栏目：/languages/english 也应点亮「语种课程」
  const isActive = (href: string) => {
    const target = localized ? localizedHref(locale, href) : href;
    if (target === "/" || target === `/${locale}`) return pathname === target;
    return pathname === target || pathname.startsWith(`${target}/`);
  };

  return (
    <header className="relative z-50 bg-white">
      <div className="border-b border-slate-200/80">
        <div className="shell flex h-24 items-center justify-between">
          <Brand href={localeHome(locale)} locale={locale} />
          <div className="hidden items-center gap-5 text-xs text-slate-500 lg:flex">
            <span>
              {localized
                ? localized.eyebrow.replaceAll(" · ", "  ·  ")
                : "合作 · 开放 · 专业 · 成长"}
            </span>
            <span className="h-4 w-px bg-slate-200" />
            <Link
              href={
                localized
                  ? `/${locale}/contact`
                  : "/contact"
              }
              className="font-medium text-[#174f8f]"
            >
              {localized ? localized.secondaryCta : "课程咨询"} →
            </Link>
            <LanguageSwitcher />
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              className="grid size-11 place-items-center border border-slate-200"
              onClick={() => {
                setOpen((value) => !value);
                setExpanded(null);
              }}
              aria-label={localized ? localizedNavSupplements[locale as ForeignLocale].menuLabel : "打开导航菜单"}
              aria-expanded={open}
            >
              <span className="text-xl">{open ? "×" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>
      <nav
        className={`bg-[#0b2f5b] text-white ${
          open ? "fixed inset-x-0 bottom-0 top-24 z-40 lg:static" : ""
        }`}
      >
        <div
          className={`shell ${
            open ? "grid h-full content-start gap-2 overflow-y-auto py-4" : "hidden"
          } lg:flex lg:h-14 lg:items-stretch lg:justify-center lg:gap-0 lg:overflow-visible lg:py-0`}
        >
          {navItems.map((item, navIndex) => (
            <div
              key={item.href}
              className="group relative overflow-hidden border border-white/10 bg-white/[0.035] lg:flex lg:items-center lg:overflow-visible lg:border-0 lg:bg-transparent"
            >
              {item.children ? (
                <button
                  type="button"
                  onClick={() =>
                    setExpanded((value) => (value === item.href ? null : item.href))
                  }
                  className="flex w-full items-center justify-between px-4 py-3.5 text-left text-sm font-semibold tracking-[0.04em] transition hover:bg-white/10 lg:hidden"
                  aria-expanded={expanded === item.href}
                >
                  <span>{item.label}</span>
                  <span
                    className={`text-xs text-white/50 transition ${
                      expanded === item.href ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>
              ) : (
                <Link
                  href={localized ? localizedHref(locale, item.href) : item.href}
                  onClick={() => {
                    setOpen(false);
                    setExpanded(null);
                  }}
                  className="flex items-center justify-between px-4 py-3.5 text-sm font-semibold tracking-[0.04em] transition hover:bg-white/10 lg:hidden"
                >
                  <span>{item.label}</span>
                </Link>
              )}
              {/*
                桌面端的一级导航项。
                原本是 hover 时整块变浅色底、并靠 justify-between 把七项撑满版心——
                色块 hover 显得笨重，撑满则让相邻两项隔开一百多像素，看着是被抻开的。
                现在居中成组，hover 与当前栏目都用底部一条金线表示。
              */}
              <Link
                href={localized ? localizedHref(locale, item.href) : item.href}
                onClick={() => {
                  setOpen(false);
                  setExpanded(null);
                }}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative hidden px-4 py-3.5 text-sm font-semibold tracking-[0.04em] transition lg:flex lg:items-center lg:gap-1.5 lg:px-6 lg:py-[18px] lg:font-normal lg:tracking-[0.06em] ${
                  isActive(item.href) ? "lg:text-white" : "lg:text-white/82 lg:hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                {item.children && (
                  <svg
                    aria-hidden
                    viewBox="0 0 10 6"
                    className="hidden h-[5px] w-2.5 fill-none stroke-current opacity-45 transition group-hover:opacity-90 lg:block"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 1l4 4 4-4" />
                  </svg>
                )}
                {/* 底部金线：hover 时从左展开，当前栏目常驻 */}
                <span
                  aria-hidden
                  className={`absolute inset-x-5 bottom-0 hidden h-0.5 origin-left bg-[#c99b48] transition-transform duration-300 lg:block ${
                    isActive(item.href)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
              {item.children && (
                <>
                  <div
                    className={`grid gap-1 border-t border-white/10 bg-[#071f3e]/75 p-2 lg:hidden ${
                      expanded === item.href ? "" : "hidden"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={localized ? localizedHref(locale, child.href) : child.href}
                        onClick={() => {
                          setOpen(false);
                          setExpanded(null);
                        }}
                        className="px-3 py-2.5 text-xs leading-5 text-white/72 transition hover:bg-white/8 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                  {/*
                    下拉面板锚定在它自己的菜单项下方。
                    原本是一条通栏白条，里面用 .shell + max-w-[820px] 装内容——
                    而 .shell 带 margin-inline:auto，内容被居中到视口，
                    和触发它的菜单项完全对不上，左边还空出一大块白。
                    最右三项改为从右边缘对齐，避免在 1024px 这类窄桌面屏上溢出。
                  */}
                  <div
                    className={`invisible absolute top-full z-50 hidden w-[34rem] max-w-[calc(100vw-3rem)] border-t-2 border-[#c99b48] bg-white opacity-0 shadow-[0_24px_48px_rgba(7,31,62,0.18)] transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:block ${
                      navIndex >= navItems.length - 3 ? "right-0" : "left-0"
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-x-8 px-7 py-5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={localized ? localizedHref(locale, child.href) : child.href}
                          className="group/item border-t border-slate-200 py-4 text-[#11233e] transition first:border-t-0 [&:nth-child(2)]:border-t-0"
                        >
                          <strong className="block font-serif text-base font-semibold transition group-hover/item:text-[#174f8f]">
                            {child.label}
                          </strong>
                          {child.description && (
                            <span className="mt-1.5 block text-xs leading-5 text-slate-500">
                              {child.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}
