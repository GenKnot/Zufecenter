import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { ContentPage } from "@/data/content";

type DetailContext =
  | "about"
  | "language"
  | "program"
  | "practice"
  | "faculty"
  | "research"
  | "resource"
  | "collaboration";

const contextCopy: Record<
  DetailContext,
  {
    overview: string;
    caption: string;
    ctaTitle: string;
    ctaText: string;
    ctaLabel: string;
  }
> = {
  about: {
    overview: "进一步了解中心",
    caption: "十一年的课程、教研与学习服务，共同构成今天的中心。",
    ctaTitle: "想进一步了解语言中心？",
    ctaText: "无论是课程咨询、来访交流还是合作洽谈，我们都愿意从一次具体沟通开始。",
    ctaLabel: "联系语言中心",
  },
  language: {
    overview: "先了解这个语种方向",
    caption: "从分级课程到专项训练，让每一步都有清晰目标和进阶方向。",
    ctaTitle: "还没确定从哪个级别开始？",
    ctaText: "告诉我们你的学习经历、目标和时间安排，课程顾问会结合班级要求给出分级建议。",
    ctaLabel: "咨询分班建议",
  },
  program: {
    overview: "先了解这个培训项目",
    caption: "从目标出发设计内容，让课程与考试、升学、职业或组织需求真正衔接。",
    ctaTitle: "想把学习目标变成可执行的计划？",
    ctaText: "说明你的基础、目标和时间安排，我们会帮助你判断项目方向、课程组合与合理节奏。",
    ctaLabel: "获取项目建议",
  },
  practice: {
    overview: "先了解这项教学实践",
    caption: "让语言离开课本，在交流、协作与文化体验中成为能够使用的能力。",
    ctaTitle: "想参加近期活动或实践项目？",
    ctaText: "欢迎咨询参与对象、活动主题与近期安排，也可以为校园或团队共同设计专场活动。",
    ctaLabel: "咨询活动安排",
  },
  faculty: {
    overview: "认识这支教学团队",
    caption: "课程质量来自扎实备课、课堂观察、共同教研和对学习反馈的持续回应。",
    ctaTitle: "想了解课程与师资安排？",
    ctaText: "告诉我们希望学习的语种和目标，我们会介绍相应课程方向与教学安排。",
    ctaLabel: "咨询课程安排",
  },
  research: {
    overview: "了解这一教研方向",
    caption: "把课堂经验转化为可以讨论、验证和持续改进的教学方法。",
    ctaTitle: "希望开展教学研究与同行交流？",
    ctaText: "欢迎围绕课程建设、教师发展和语言教学实践与我们建立联系。",
    ctaLabel: "联系教研合作",
  },
  resource: {
    overview: "先了解这项学习支持",
    caption: "用合适的方法、资料和反馈，让课堂之外的每一段投入更有方向。",
    ctaTitle: "需要更具体的学习建议？",
    ctaText: "如果你仍不确定如何选课、规划或安排日常练习，可以与课程顾问进一步沟通。",
    ctaLabel: "获取学习建议",
  },
  collaboration: {
    overview: "先了解这一合作方向",
    caption: "从需求分析到课程交付与项目复盘，让每一次合作都落到清晰成果。",
    ctaTitle: "有一个语言合作项目想法？",
    ctaText: "告诉我们参与对象、希望解决的问题和时间计划，我们会据此整理合作建议。",
    ctaLabel: "洽谈合作方案",
  },
};

export function ContentDetail({
  page,
  backHref,
  backLabel,
  context,
  children,
}: {
  page: ContentPage;
  backHref: string;
  backLabel: string;
  context: DetailContext;
  children?: ReactNode;
}) {
  const copy = contextCopy[context];

  return (
    <>
      <section className="relative min-h-[520px] overflow-hidden bg-[#071f3e] text-white">
        <Image
          src={page.heroImage}
          alt=""
          fill
          priority
          className={
            page.slug === "leadership"
              ? "object-cover object-[58%_center] sm:object-[center_18%]"
              : "object-cover"
          }
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071f3e]/95 via-[#071f3e]/74 to-[#071f3e]/25" />
        <div className="shell relative flex min-h-[520px] items-end py-16">
          <div className="max-w-3xl">
            <Link
              href={backHref}
              className="text-xs font-semibold tracking-[0.16em] text-[#ead7ad]"
            >
              ← {backLabel}
            </Link>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
              {page.english}
            </p>
            <h1 className="mt-4 font-serif text-5xl font-semibold tracking-tight sm:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/76">
              {page.summary}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <span className="eyebrow">At a glance</span>
            <h2 className="section-title">{copy.overview}</h2>
          </div>
          <div className="space-y-5">
            {page.intro.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-8 text-slate-600"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#edf2f6] py-16">
        <div className="shell grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {page.highlights.map((item, index) => (
            <article key={item.title} className="min-h-52 bg-white p-7">
              <span className="font-serif text-sm text-[#c99b48]">
                0{index + 1}
              </span>
              <h2 className="mt-8 font-serif text-xl font-semibold">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_0.8fr]">
          <div className="divide-y divide-slate-200 border-t border-slate-200">
            {page.sections.map((section, index) => (
              <article key={section.title} className="py-10">
                <div className="grid gap-5 sm:grid-cols-[72px_1fr]">
                  <span className="font-serif text-2xl text-[#c99b48]">
                    0{index + 1}
                  </span>
                  <div>
                    <h2 className="font-serif text-3xl font-semibold">
                      {section.title}
                    </h2>
                    <div className="mt-5 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-sm leading-8 text-slate-600"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {section.bullets && (
                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="border-l-2 border-[#c99b48] pl-4 text-sm leading-7 text-slate-600"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div>
            {page.image ? (
              <div className="sticky top-8 overflow-hidden bg-[#0b2f5b]">
                <Image
                  src={page.image}
                  alt={page.imageAlt || page.title}
                  width={900}
                  height={1100}
                  className="aspect-[4/5] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <p className="p-5 text-xs leading-6 text-white/58">
                  {copy.caption}
                </p>
              </div>
            ) : (
              <div className="image-placeholder min-h-[520px]">
                <small>{copy.caption}</small>
              </div>
            )}
          </div>
        </div>
      </section>

      {children}

      <section className="bg-[#c99b48] py-14">
        <div className="shell flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#071f3e]/55">
              NEXT STEP
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#071f3e]">
              {copy.ctaTitle}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#071f3e]/68">
              {copy.ctaText}
            </p>
          </div>
          <Link
            href="/contact"
            className="w-fit bg-[#071f3e] px-7 py-4 text-sm font-semibold text-white"
          >
            {copy.ctaLabel} →
          </Link>
        </div>
      </section>
    </>
  );
}
